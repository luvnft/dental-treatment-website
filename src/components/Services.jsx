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
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-secondary">Leads Solution</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">Dental Practices We Serve</h2>
      <div className="flex flex-wrap items-center justify-center gap-5 serviceBoxes">
        {/* Teeth Whitening */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={teethWhitening} alt="Teeth Whitening" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">General Dentistry</h3>
          <p className="serviceBoxDesc">Focusing on comprehensive care and routine check-ups to attract new patients.</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Dental Implant */}
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={dentalImplant} alt="Dental Implant" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Cosmetic Dentistry</h3>
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
          <h3 className="serviceBoxTitle">Orthodontics</h3>
          <p className="serviceBoxDesc">Generating leads for practices specializing in braces and teeth alignment services.</p>
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
          <p className="serviceBoxDesc">Attracting patients in need of surgical procedures and consultations.</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Crown And Bridges */}
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={crownAndBridges} alt="Crown And Bridges" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Pediatric Dentistry</h3>
          <p className="serviceBoxDesc">Reaching out to families looking for specialized dental care for children.</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>

        {/* Periodontal Care */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={periodontalCare} alt="Periodontal Care" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Periodontics</h3>
          <p className="serviceBoxDesc">Targeting individuals needing gum disease treatment and related dental services.</p>
          <a href="#" className="serviceButton">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
