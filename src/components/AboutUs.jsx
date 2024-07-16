import patientCenteredCare from "../assets/images/aboutUsImages/patientCenteredCare.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

const AboutUs = () => {
  return (
    <section className="aboutUsContent px-3 flex max-w-[1180px] mx-auto">
      <div className="aboutUsImgSide w-full">
        <div className="aboutUsImgContent max-w-[500px]">
          <img src={patientCenteredCare} alt="patientCenteredCare" className="aboutUsImg w-full" />
        </div>
      </div>
      <div className="aboutUsInfoSide w-full">
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">Satisfy Solution</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">The Best Dental Treatment</h2>
        <p className="sectionDesc text-[18px]">
          We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.
        </p>
        <h4 className="sectionInfoTitle font-medium text-[22px] my-2">Our Mission</h4>
        <p className="sectionDesc text-[18px]">At 57Dentcare, our mission is to promote optimal oral health and create lasting, confident smiles.</p>
        <div className="bookingButtonContent ">
          <button className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
            Learn More
            <div className="bookingButtonImgContent max-w-[13px] flex items-center justify-center">
              <img src={contactArrow} alt="Arrow" className="bookingButtonImg w-full" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
