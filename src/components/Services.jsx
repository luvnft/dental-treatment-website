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
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-secondary">🪙 SmileSats Solutions</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">Dental Practices We Boost 💥</h2>
      <div className="flex flex-wrap items-center justify-center gap-5 serviceBoxes">
        {/* Teeth Whitening */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={teethWhitening} alt="Teeth Whitening" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">General Dentistry</h3>
          <p className="serviceBoxDesc">Keeping every smile bright! Routine check-ups that now earn you Bitcoin for every new patient booked. 😁</p>
        </div>

        {/* Dental Implant */}
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={dentalImplant} alt="Dental Implant" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Cosmetic Dentistry</h3>
          <p className="serviceBoxDesc">From veneers to viral smiles — help patients glow up and get rewarded for every reel-ready smile.</p>
        </div>

        {/* Teeth Fillings */}
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={teethFillings} alt="Teeth Fillings" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Orthodontics</h3>
          <p className="serviceBoxDesc">Braces, aligners, and perfect grins! Turn every alignment success into social proof (and Bitcoin $MILE).</p>
        </div>

        {/* Oral Surgery */}
        <div className="serviceBox bg-lightRed">
          <div className="serviceBoxImgContent">
            <img src={oralSurgery} alt="Oral Surgery" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Oral Surgery</h3>
          <p className="serviceBoxDesc">Precision meets purpose. Attract patients for big-day procedures and earn sats for verified bookings.</p>
          
        </div>

        {/* Crown And Bridges */}
        <div className="serviceBox bg-lightGreen">
          <div className="serviceBoxImgContent">
            <img src={crownAndBridges} alt="Crown And Bridges" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Pediatric Dentistry</h3>
          <p className="serviceBoxDesc">Caring for tiny teeth and big smiles. Parents earn Bitcoin $MILE for every happy check-up shared.</p>
        </div>

        {/* Periodontal Care */}
        <div className="serviceBox bg-lightYellow">
          <div className="serviceBoxImgContent">
            <img src={periodontalCare} alt="Periodontal Care" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle">Periodontics</h3>
          <p className="serviceBoxDesc">Healthier gums, happier grins. Reward patients who share their progress and spread real dental wellness.</p>
    
        </div>
      </div>
    </section>
  );
};

export default Services;
