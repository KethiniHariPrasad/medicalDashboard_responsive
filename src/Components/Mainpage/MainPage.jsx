import './mainPage.css';
import Header from '../Header/Header';
import ScienceIcon from '@mui/icons-material/Science';
import { useState } from 'react';
import LabTests from '../LabTests/LabTests';
import Banner from '../Banner/Banner';
import MyCarousel from '../carousel/Carousel';

function MainPage() {
  const [testsCount, setSetsCount] = useState(16);
  const [topBookedCount, settopBookedCount] = useState(32);
  return (
    <div id="mainContainer">
      <Header />
      <div id="alertContent">
        <ScienceIcon />
        <strong>Get your sample collected in the next 45 minutes!</strong>
      </div>
      <div className="contentHeadDiv">
        <h4>Doctor Created Health Checks {`(${testsCount})`}</h4>
      </div>

      <LabTests />
      <Banner />
      <div className="contentHeadDiv">
        <h4>Top Booked Tests {`(${topBookedCount})`}</h4>
      </div>
      <div>
        <MyCarousel />
      </div>
    </div>
  );
}

export default MainPage;
