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
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">💬 Social Media</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Fun First Vibes</h2>
        <p className="sectionDesc text-[18px]">
          Dentistry marketing has evolved to short commercials and viral content starring patients and staff having fun. At SmileSats, we embrace this trend by creating engaging TikTok videos that showcase the lighter side of dental care, making oral health more approachable and enjoyable for everyone.
        </p>
        <h4 className="sectionInfoTitle font-medium text-[22px] my-2">🪙 Our Purpose</h4>
        <p className="sectionDesc text-[18px]">
          To restore balance by rewarding the people who make it all possible — patients and staff — with Bitcoin-backed rewards that cut costs and grow trust between communities and care providers and helps reduce the financial stress of dental care.
        </p>
        <div className="bookingButtonContent">
          <a href="https://app.smilesats.com" target="_blank" rel="noopener noreferrer">
            <button className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
              🙂 JOIN OUR APP
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
