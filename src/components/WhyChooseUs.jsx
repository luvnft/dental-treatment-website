import comprehensiveDentalServices from "../assets/images/whyChooseUsImages/comprehensiveDentalServices.png";
import listItemIcon from "../assets/images/whyChooseUsImages/listItemIcon.png";

import "../assets/styles/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="whyChooseUsContent px-3 flex items-start justify-between max-w-[1180px] mx-auto">
      <div className="whyChooseUsInfoSide w-full">
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">Why Choose Us</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Comprehensive Dental Services</h2>
        <ul className="whyChooseUsList">
          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent">
              <img src={listItemIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Experienced Professionals:</strong> Our team consists of highly skilled and knowledgeable dental experts.
            </p>
          </li>

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[20px] mt-0.5">
              <img src={listItemIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>State-of-the-Art Technology:</strong> We invest in the latest dental technology to provide the best care.
            </p>
          </li>

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[20px] mt-0.5">
              <img src={listItemIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Compassionate Care:</strong> We treat every patient with empathy and understanding.
            </p>
          </li>

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[20px] mt-0.5">
              <img src={listItemIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Patient Education:</strong> We believe in educating our patients about their oral health to make informed decisions.
            </p>
          </li>

          <li className="whyChooseUsListItem flex items-start justify-start gap-2">
            <div className="whyChooseUsListItemIconContent min-w-[20px] mt-0.5">
              <img src={listItemIcon} alt="why Choose Us" className="whyChooseUsListItemIcon w-full" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Convenient Hours:</strong> We offer flexible scheduling to accommodate your busy life.
            </p>
          </li>
        </ul>
      </div>
      <div className="whyChooseUsImgSide w-full">
        <div className="whyChooseUsImgContent">
          <img src={comprehensiveDentalServices} alt="Comprehensive Dental Services" className="whyChooseUsImg" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
