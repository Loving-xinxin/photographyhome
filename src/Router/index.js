import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductSort from '../pages/ProductSort';
import Nav from '../components/Nav';
import Footer from '../components/footer';
import StoreIntro from '../pages/StoreIntro';
import TeamIntro from '../pages/TeamIntro';
import ChatOur from '../pages/ChatOur';
import WeddingFollow from '../pages/WeddingFollow';
import WeddingPic from '../pages/WeddingPic';
import GraduationTime from '../pages/GraduationTime';
import IDPhoto from '../pages/IDPhoto';
import Portrait from '../pages/Portrait';
import videoShowPage from '../components/videoShowPage';
import WeddingVideo from '../pages/WeddingVideo';
import WeddingDressVideo from '../pages/WeddingDressVideo';
import PortraitVideo from '../pages/PortraitVideo';
import GraduationTimeVideo from '../pages/GraduationTimeVideo';
import GraduationSeason from '../pages/GraduationSeason';
import CampusSouvenirs from '../pages/CampusSouvenirs';
import CostumeMaking from '../pages/CostumeMaking';
import HotelDinner from '../pages/HotelDinner';
import OurGraduationSeason from '../pages/OurGraduationSeason';
import ScrollToTop from '../components/ScrollToTop';
const Main = () => {
  return (
    <div>
      <ScrollToTop>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/productSort" component={ProductSort} />
        <Route path="/storeIntro" component={StoreIntro} />
        <Route path="/teamIntro" component={TeamIntro} />
        <Route path="/chatOur" component={ChatOur} />
        <Route path="/weddingPic" component={WeddingPic} />
        <Route path="/weddingFollow" component={WeddingFollow} />
        <Route path="/graduationTime" component={GraduationTime} />
        <Route path="/idPhoto" component={IDPhoto} />
        <Route path="/portrait" component={Portrait} />
        <Route path="/videoShowPage" component={videoShowPage} />
        <Route path="/weddingVideo" component={WeddingVideo} />
        <Route path="/weddingDressVideo" component={WeddingDressVideo} />
        <Route path="/portraitVideo" component={PortraitVideo} />
        <Route path="/graduationTimeVideo" component={GraduationTimeVideo} />
        <Route path="/graduationSeason" component={GraduationSeason} />
        <Route path="/campusSouvenirs" component={CampusSouvenirs} />
        <Route path="/costumeMaking" component={CostumeMaking} />
        <Route path="/hotelDinner" component={HotelDinner} />
        <Route path="/ourGraduationSeason" component={OurGraduationSeason} />
        {/* <Route path="/" component={Footer} /> */}
      </ScrollToTop>
    </div>
  );
};
export default Main;
