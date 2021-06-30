import Carouse from "./Carousel";
import Pbody from "./pbody";
import Header from "../header/header";
import Footer from "./footer";
import SwipeableTemporaryDrawer from "./swipabledrawer";
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.css";

const Home = () => {
  return <div>
    <Carouse />
    <Pbody/>
    <Footer/>
  </div>
};

export default Home;
