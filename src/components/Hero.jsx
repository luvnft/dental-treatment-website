import heroImg from "../assets/images/heroImages/smilingWoman-transformed.png";
import heroButtonEffect from "../assets/images/heroImages/heroButtonEffect.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

import freeConsultation from "../assets/images/heroImages/freeConsultation.png";
import expertDentist from "../assets/images/heroImages/expertDentist.png";
import highUserRating from "../assets/images/heroImages/highUserRating.png";
import bestEquipment from "../assets/images/heroImages/bestEquipment.png";

import "../assets/styles/hero.css";

const Hero = () => {
  return (
    <>
      <section className="heroContent max-w-[1200px] mx-auto px-3 flex justify-between items-start relative min-h-[70vh] max-lg:min-h-[100%] max-[850px]:flex-col max-[850px]:justify-center max-[850px]:items-center">
        <div className="heroInfoContent w-full max-w-[669px] z-10">
          <h1
            className="heroTitle text-[50px] font-bold pt-10 
          max-lg:text-[40px] max-lg:max-w-[500px] max-[850px]:text-center 
          max-[850px]:max-w-full
          max-[850px]:text-[30px]
          max-md:pt-0
          "
          >
            Dental Marketing Experts
            <br />Quality Leads Only
          </h1>
          <p className="heroSubtitle text-[16px] font-medium text-left mt-2">
<<<<<<< HEAD
            We deliver a consistent flow of profitable new patients to dentists each month!
=======
            Discover how our dental marketing agency effortlessly delivers a
            consistent flow of profitable new patients to dentists each month!
>>>>>>> bfa0f05b2df29f18cd362918ede67cad1386a1d7
          </p>
          <div className="bookingButtonContent max-[850px]:flex max-[850px]:justify-center max-[850px]:items-center">
            <button className="bookingButton bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
              SCHEDULE A FREE CALL
              <div className="bookingButtonImgContent max-w-[13px] flex items-center justify-center">
                <img src={contactArrow} alt="Arrow" className="w-full bookingButtonImg" />
              </div>
              <div className="bookingButtonEffectImgContent  absolute max-w-[80px] right-[-15px] z-[-1]">
                <img src={heroButtonEffect} alt="Arrow" className="w-full bookingButtonEffectImg" />
              </div>
            </button>
          </div>
        </div>
        <div className="heroImgContent w-full max-w-[630px] absolute bottom-30 right-0 max-lg:max-w-[500px] max-[850px]:relative">
          <img src={heroImg} alt="Smiling Woman" className="w-full heroImg" />
        </div>
      </section>
      <section className="qualityContent max-w-[1200px] mx-auto px-3 max-lg:pt-[100px] max-[850px]:pt-[0px] max-[850px]:mt-[-50px]">
        <div className="relative z-10 flex flex-wrap items-start justify-center gap-5 qualityBoxes">
          {/* Free Consultation */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={freeConsultation} alt="Free Consultation" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Video</h3>
            <p className="qualityBoxDesc">Dental videos can increase conversion rates by up to 86%, making them a powerful tool for driving appointment bookings.</p>
          </div>
          {/* Expert Dentist */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={expertDentist} alt="Expert Dentist" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">PPC</h3>
            <p className="qualityBoxDesc">Our PPC (pay per click) sales funnels that convert your visitors into leads and then patients.</p>
          </div>
          {/* High User Rating */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={highUserRating} alt="High User Rating" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">ReelViews</h3>
            <p className="qualityBoxDesc">We create a branded TikTok AR ReelView effect that allows your practice to easily ask patients for a video review.</p>
          </div>
          {/* Best Equipment */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={bestEquipment} alt="Best Equipment" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Backdrop</h3>
            <p className="qualityBoxDesc">We create branded TikTok AR backdrop effects that allows any patient or staff to pose in front of your logo to create daily social media content.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
