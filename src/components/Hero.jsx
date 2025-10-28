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
      {/* HERO SECTION */}
      <section className="heroContent max-w-[1200px] mx-auto px-3 flex justify-between items-start relative min-h-[70vh] max-lg:min-h-[100%] max-[850px]:flex-col max-[850px]:justify-center max-[850px]:items-center">
        {/* Left Side */}
        <div className="heroInfoContent w-full max-w-[669px] z-10">
          <h1
            className="heroTitle text-[50px] font-bold pt-10 
            max-lg:text-[40px] max-lg:max-w-[500px] max-[850px]:text-center 
            max-[850px]:max-w-full max-[850px]:text-[30px] max-md:pt-0"
          >
            😁 SmileSats Dental Rewards
            <br />
            Fun vibes only
          </h1>

          <p className="heroSubtitle text-[16px] font-medium text-left mt-2 max-[850px]:text-center">
            Earn Bitcoin $MILE for every booking, referral, and TikTok review.
          </p>

          {/* Button — fixed width */}
          <div className="bookingButtonContent flex justify-start max-[850px]:justify-center">
            <a
              href="https://app.smilesats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bookingButton bg-gradient-to-r from-[#00C853] to-[#B2FF59] text-black flex items-center gap-2 px-6 py-3 rounded-[30px] font-semibold text-[16px] mt-5 relative shadow-md hover:scale-105 transition-transform duration-300 w-auto"
            >
              🙂 JOIN APP
              <div className="bookingButtonImgContent w-[15px] flex items-center justify-center">
                <img
                  src={contactArrow}
                  alt="Arrow"
                  className="w-full bookingButtonImg"
                />
              </div>
              <div className="bookingButtonEffectImgContent absolute max-w-[60px] right-[-10px] z-[-1] opacity-70">
                <img
                  src={heroButtonEffect}
                  alt="Button Effect"
                  className="w-full bookingButtonEffectImg"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="heroImgContent w-full max-w-[630px] absolute bottom-30 right-0 max-lg:max-w-[500px] max-[850px]:relative">
          <img src={heroImg} alt="Smiling Woman" className="w-full heroImg" />
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="qualityContent max-w-[1200px] mx-auto px-3 max-lg:pt-[100px] max-[850px]:pt-[0px] max-[850px]:mt-[-50px]">
        <div className="relative z-10 flex flex-wrap items-start justify-center gap-5 qualityBoxes">
          {/* Short Reels */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img
                src={freeConsultation}
                alt="Free Consultation"
                className="qualityBoxImg"
              />
            </div>
            <h3 className="qualityBoxTitle">🎥 Short Reels</h3>
            <p className="qualityBoxDesc">
              Dental videos increase conversion rates by up to 86%, helping your
              practice attract, educate, and convert new patients with confidence.
            </p>
          </div>

          {/* PPC */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img
                src={expertDentist}
                alt="Expert Dentist"
                className="qualityBoxImg"
              />
            </div>
            <h3 className="qualityBoxTitle">💬 PPC</h3>
            <p className="qualityBoxDesc">
              We build Pay-Per-Click ad funnels that reward visitors in Bitcoin
              $MILE for booking or referring your dental practice.
            </p>
          </div>

          {/* ReelViews */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img
                src={highUserRating}
                alt="High User Rating"
                className="qualityBoxImg"
              />
            </div>
            <h3 className="qualityBoxTitle">😁 ReelViews</h3>
            <p className="qualityBoxDesc">
              Your patients become your influencers. We create branded TikTok
              AR “ReelView” effects to collect authentic video reviews.
            </p>
          </div>

          {/* UGC */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img
                src={bestEquipment}
                alt="Best Equipment"
                className="qualityBoxImg"
              />
            </div>
            <h3 className="qualityBoxTitle">🦷 UGC</h3>
            <p className="qualityBoxDesc">
              Turn every smile into verified UGC with a TikTok AR backdrop —
              perfect for fun, tokenized reels from your staff or patients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
