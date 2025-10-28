import patientCenteredCare from "../assets/images/aboutUsImages/patientCenteredCare.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

const AboutUs = () => {
  return (
    <section className="aboutUsContent px-3 flex max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg:mb-10">
      <div className="w-full aboutUsImgSide max-lg:order-1">
        <div className="aboutUsImgContent max-w-[500px] max-lg:max-w-[380px] max-lg:mx-auto">
          <img src={patientCenteredCare} alt="patientCenteredCare" className="w-full aboutUsImg max-lg:text-center" />
        </div>
      </div>
      <div className="w-full aboutUsInfoSide">
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">Social Media</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Before/After</h2>
        <p className="sectionDesc text-[18px]">
          Dental practices that post transformation videos (before/after) on TikTok are tapping into massive potential: with TikTok’s 1.5 billion monthly users and 55 + minutes average daily usage, videos are now one of the most engaging ways to connect with patients. Studies show 91% of patients watch videos before choosing a dentist.
        </p>
        <h4 className="sectionInfoTitle font-medium text-[22px] my-2">Our Purpose</h4>
        <p className="sectionDesc text-[18px]">
          Restore balance by rewarding the people who make it possible — patients and staff with Bitcoin-backed rewards that reduce dental costs and increase trust between patients and providers.
        </p>
        <div className="bookingButtonContent">
          <a href="https://tiktok.com/@smilesats" target="_blank" rel="noopener noreferrer">
            <button className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
              FOLLOW US ON TIKTOK
              <div className="bookingButtonImgContent max-w-[13px] flex items-center justify-center">
                <img src={contactArrow} alt="Arrow" className="w-full bookingButtonImg" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
