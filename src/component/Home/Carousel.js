import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carouse=  () => (
  <Carousel showThumbs={false} interval="3000" infiniteLoop={true} autoPlay={true}>
    <div>
      <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M42/BlazingFast_HDFC/D22355038_IN_WLME_SamsungGalaxy_M42_New_Launch_DesktopTallHero_1500x600_2._CB667112034_.jpg" />
    </div>
    <div>
      <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/June21/BAU_Hero/OP_9R_WO_BO__1500x600._CB667376199_.jpg" />
    </div>
    <div>
      <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Supergirl/1500x600_Hero-Tall_JPN._CB667341638_.jpg" />
    </div>
    <div>
      <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/May/30/Boat_Gww_1500x600._CB667069078_.jpg" />
    </div>
    <div>
      <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_CBCC._CB667391209_.jpg" />
    </div>
  </Carousel>
);

export default Carouse;