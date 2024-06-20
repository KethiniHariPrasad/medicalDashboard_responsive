import React from 'react';
import './labTests.css';
import bodyCheckup from '../../assets/images/bodyCheckup.jfif';
import diabetes from '../../assets/images/diabetes.jpg';
import womensHealth from '../../assets/images/womensHealth.webp';
import thyroid from '../../assets/images/thyroid.jpg';
import healthPackages from '../../assets/images/healthPackages.jpg';
import fever from '../../assets/images/fever.jpg';
import liver from '../../assets/images/liver.jpg';
import kidney from '../../assets/images/kidney.jfif';
import bloodTests from '../../assets/images/bloodTests.jpg';
import vitamins from '../../assets/images/vitamins.jpg';
import TestTabs from './TestTab';

export default function LabTests() {
  return (
    <div className="gridContainer">
      <TestTabs img={bodyCheckup} alt="bodyCheckup" title="Body Checkup" />
      <TestTabs img={diabetes} alt="Diabetes" title="Diabetes" />
      <TestTabs img={womensHealth} alt="Womens Health" title="Womens Health" />
      <TestTabs
        img={healthPackages}
        alt="Health Packages"
        title="Health Packages"
      />
      <TestTabs img={thyroid} alt="Thyroid" title="Thyroid" />
      <TestTabs img={fever} alt="Fever" title="Fever" />
      <TestTabs img={liver} alt="Liver" title="Liver" />
      <TestTabs img={bloodTests} alt="Blood Tests" title="Blood Tests" />
      <TestTabs img={kidney} alt="Kidney" title="Kidney" />
      <TestTabs img={vitamins} alt="Vitamins" title="Vitamins" />
    </div>
  );
}
