import comprehensiveDentalServices from "../assets/images/whyChooseUsImages/comprehensiveDentalServices.png";
import listItemIcon from "../assets/images/whyChooseUsImages/listItemIcon.png";

import "../assets/styles/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="whyChooseUsContent px-3 flex items-start justify-between max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-10">
      <div className="w-full whyChooseUsInfoSide">
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">Why Choose Us</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Your Partner in a Healthy Smile</h2>
        <ul className="whyChooseUsList">
          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Experienced Professionals:</strong> Our team consists of dental marketing gurus who speak your language. 
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>State-of-the-Art Technology:</strong> We leverage social media AR effects and paid marketing to SEO and website optimization.
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Compassionate Care:</strong> We treat your practice like our own. 
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Client Education:</strong> We empower you with the knowledge to make informed decisions about your marketing strategy
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>Monthly Analytics:</strong> We schedule a monthly meeting to discuss the impact of our high quality leads.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full whyChooseUsImgSide">
        <div className="whyChooseUsImgContent max-lg:max-w-[380px] max-lg:mx-auto">
          <img src={comprehensiveDentalServices} alt="Comprehensive Dental Services" className="whyChooseUsImg max-lg:text-center" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
