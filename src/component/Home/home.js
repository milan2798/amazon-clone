import Carouse from "./Carousel";
import Pbody from "./pbody";
import Header from "../header/header";
import Footer from "./footer";
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.css";

const Home = () => (
  <div>
      <Header/>
    <Carouse />
    <Pbody/>
    <Footer/>
  </div>
);

export default Home;
