import teethWhitening from "../assets/images/servicesImages/teethWhitening.png";
import dentalImplant from "../assets/images/servicesImages/dentalImplant.png";
import teethFillings from "../assets/images/servicesImages/teethFillings.png";
import oralSurgery from "../assets/images/servicesImages/oralSurgery.png";
import crownAndBridges from "../assets/images/servicesImages/crownAndBridges.png";
import periodontalCare from "../assets/images/servicesImages/periodontalCare.png";

import "../assets/styles/services.css";

const Services = () => {
  return (
    <section className="serviceContent max-w-[1200px] mx-auto my-10">
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-secondary">Satisfy Solution</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">The Best Dental Treatment</h2>
      <div className="serviceBoxes flex items-center justify-center flex-wrap gap-5">
        {/* Teeth Whitening */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={teethWhitening} alt="Teeth Whitening" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Teeth Whitening</h3>
          <p className="serviceBoxDesc">Cosmetic treatment to enchance the whiteness to teeth</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Dental Implant */}
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={dentalImplant} alt="Dental Implant" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Dental Implant</h3>
          <p className="serviceBoxDesc">Surgical placement of artificial tooth roots</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Teeth Fillings */}
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={teethFillings} alt="Teeth Fillings" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Teeth Fillings</h3>
          <p className="serviceBoxDesc">Restorative procedures to repair cavities and damaged teeth</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Oral Surgery */}
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={oralSurgery} alt="Oral Surgery" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Oral Surgery</h3>
          <p className="serviceBoxDesc">Surgical procedures, including extractios and dental implants</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Crown And Bridges */}
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={crownAndBridges} alt="Crown And Bridges" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Crown And Bridges</h3>
          <p className="serviceBoxDesc">Restoration options for damaged or missing teeth</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Periodontal Care */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={periodontalCare} alt="Periodontal Care" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Periodontal Care</h3>
          <p className="serviceBoxDesc">Services for gum health, including scalling and root planing</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
