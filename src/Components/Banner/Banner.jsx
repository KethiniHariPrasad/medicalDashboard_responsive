import React from 'react';
import './banner.css';
import testTube from '../../assets/images/testube.webp';
import doctor from '../../assets/images/doctor.webp';

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImg" src={testTube} alt="testtube" />
      <div className="bannerText">
        Revolutionizing Medical Diagnostics with Precision and Care, brought to
        you by PathLabs
        <p>
          Find your local Medical Clinic by phoning +91 7338475251 or visiting
          aipathlabs.in
        </p>
      </div>
      <img className="bannerImg" src={doctor} alt="doctor" />
    </div>
  );
};

export default Banner;
