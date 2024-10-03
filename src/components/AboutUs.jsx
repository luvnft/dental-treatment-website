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
          Dental practices using before-and-after videos on TikTok see a 40% increase in engagement.
        </p>
        <h4 className="sectionInfoTitle font-medium text-[22px] my-2">Our Mission</h4>
        <p className="sectionDesc text-[18px]">
          At Arvrtise Dental, our mission is to empower dental practices to focus solely on booking availability, eliminating the stress of patient acquisition.
        </p>
        <div className="bookingButtonContent">
          <a href="https://calendly.com/arvrtise" target="_blank" rel="noopener noreferrer">
            <button className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
              SCHEDULE A FREE CALL
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
