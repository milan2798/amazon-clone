import './App.css';
import Signin from './component/signin/signin'
import Signup from './component/signup/signup'
import Header from './component/header/header'
import CartContext from './component/myContext/context'
import Home from './component/Home/home'
import Cartspage from './component/carts/cartspage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, db } from './component/firesetup/fireconfig';
import { useState, useEffect } from 'react';
import SwipeableTemporaryDrawer from "./component/Home/swipabledrawer";

function App() {
  const [dis, dispatch] = useState({});
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  };
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    console.log(windowDimensions);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {

    // console.log("dddd-ddd")
    // async function fetchData() {
    //   // Call fetch as usual just concept of fetch
    //   const res = await fetch(
    //     "https://www.reddit.com/r/milan.json"
    //   );

    //   // Pull out the data as usual
    //   const json = await res.json();

    //   // Save the posts into state
    //   // (look at the Network tab to see why the path is like this)
    //   console.log("c---data",json.data);
    // }
    //  fetchData();
    if (auth.currentUser != null) {
      let docRef = db.collection("products").doc(auth.currentUser.email);
      docRef.get().then((doc) => {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          addCart(doc.data().carts);

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }
    return () => {

    }
  }, [auth.currentUser]);

  useEffect(() => {
    //will only run once the app component loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is >>>>", authUser);
      // console.log("uuser",authUser)
      // console.log("CC--uuser",auth.currentUser)
      if (authUser) {
        //the user just logged in the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // return () => {
    //   cleanup
    // }
    return () => {

    }
  }, []);
  const [carts, addCart] = useState([]);
  const value = { carts, addCart }

  return (
    <CartContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            {windowDimensions.width > 1000 ? <Header /> : <SwipeableTemporaryDrawer />}
            <Home />
          </Route>
          <Route path="/carts">
            {windowDimensions.width > 1000 ? <Header /> : <SwipeableTemporaryDrawer />}
            <Cartspage />
          </Route>
          <Route path="/">
            {windowDimensions.width > 1000 ? <Header /> : <SwipeableTemporaryDrawer />}
            <Home />
          </Route>
          <Route path="/header">
            {windowDimensions.width > 1000 ? <Header /> : <SwipeableTemporaryDrawer />}
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
