import comprehensiveDentalServices from "../assets/images/whyChooseUsImages/comprehensiveDentalServices.png";
import listItemIcon from "../assets/images/whyChooseUsImages/listItemIcon.png";

import "../assets/styles/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="whyChooseUsContent px-3 flex items-start justify-between max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-10">
      <div className="w-full whyChooseUsInfoSide">
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">Why Choose Us</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Your Partner in Dental Rewards</h2>
        <ul className="whyChooseUsList">
          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>🪙 Real Rewards, Real Impact</strong> Every smile becomes proof of care. Patients earn Bitcoin-backed $MILE rewards.
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>⚙️ Tokenized Transparency</strong> We use blockchain technology to tokenize treatment records and after-photos.
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>😁 Fun-first social content</strong> We turn everyday smiles into short, share-ready reels for all your socials.
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>📈 Empowering Your Practice</strong> Our platform turns daily patient interactions into measurable ROI.
            </p>
          </li>

          <li className="flex items-start justify-start gap-2 whyChooseUsListItem">
            <div className="whyChooseUsListItemIconContent min-w-[20px]">
              <img src={listItemIcon} alt="why Choose Us" className="w-full whyChooseUsListItemIcon" />
            </div>
            <p className="whyChooseUsListItemDesc">
              <strong>🔍 Measurable Insights</strong> Monthly analytics dashboards show exactly how rewards, UGC, and PPC performed.
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
