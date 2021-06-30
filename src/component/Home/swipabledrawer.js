
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import amazonlogo from '../../Assets/logos/amazon-2.svg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import ReorderIcon from '@material-ui/icons/Reorder';
import { Link } from 'react-router-dom'
import { auth } from '../firesetup/fireconfig';
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../myContext/context';
import { useContext } from 'react'
import ipLocation from 'iplocation';
import axios from 'axios';
import 'cors'


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  const [ip, setIp] = useState("");
  const [error, setError] = useState({ signout: false, signin: false });
  const { carts } = useContext(CartContext);
  const signOut = () => {

    auth.signOut().then(() => {
      notify();
      // console.log("signout", auth);


      setError({ signout: true });

      //<Redirect to="/signin"></Redirect>
    })
      .catch((error) => {
        console.log("signout--error", error);
      })
  }
  const notify = () => toast.dark('Sign out Successfully!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    axios("https://api.ipify.org?format=json")
      .then((data) => {
        ipLocation(data.data.ip).then((data) => {
          // console.log("data", data);
          setIp(data.city)
        })
        //=> { latitude: -33.8591, longitude: 151.2002, region: { name: "New South Wales" ... } ... }      
      }
      )
      .catch((error) => {
        console.log("error", error)
      })
    return true
  }, [])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      id="swipable"
    >

      <List>

        <ListItem button >
          <ListItemIcon> <Link to="/"><img id="logo" alt="logo" src={amazonlogo}></img></Link></ListItemIcon>
        </ListItem>
        <Link to="/">
          <ListItem button >
            <ListItemIcon> <HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <ListItem button >
          <ListItemIcon> <LocationOnIcon /></ListItemIcon>
          <ListItemText primary={"you'r in" + ip !== '' ? ip : "Select your address"} />
        </ListItem>
        <ListItem button >
          <ListItemIcon>{auth.currentUser != null ? <ExitToAppIcon /> : <PersonIcon />}</ListItemIcon>
          <ListItemText primary={auth.currentUser != null ? <div onClick={signOut}>Sign Out</div> : <Link to="/signin"><div>Sign In</div></Link>} />
        </ListItem>
        <ListItem button >
          <ListItemIcon> <FormatListBulletedIcon /></ListItemIcon>
          <ListItemText primary="Return and Orders" />
        </ListItem>
        <Link to="/carts">
          <ListItem button >
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary={carts.length + " carts"} />
          </ListItem>
        </Link>

      </List>




      {/* end */}
    </div>
  );

  return (

    <div>

      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

      <React.Fragment key={'left'}>
        <div id="swipable_btn">
          <div><Button onClick={toggleDrawer('left', true)}><ReorderIcon /></Button></div>
          <div><img id="logo" alt="logo" src={amazonlogo} />
          </div>
        </div>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>

    </div>
  );
}