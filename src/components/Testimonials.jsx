import testimonialPerson from "../assets/images/testimonialsImages/testimonialPerson.png";

import "../assets/styles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonialsContent min-h-[800px] flex flex-col justify-center items-center my-5 ">
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-black">💎 SmileSats Results</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">“Our patient engagement jumped by 30% in six months.”</h2>
      <div className="testimonialsBox flex flex-col justify-center items-center max-w-[1180px] mx-auto p-5">
        <div className="mb-5 testimonialsBoxImgContent">
          <img src={testimonialPerson} alt="testimonial Person" className="testimonialsBoxImg" />
        </div>
        <p className="testimonialsDesc font-bold text-[32px] text-center max-lg:text-[25px] max-md:text-[20px]">
          &quot;Before SmileSats, our digital presence was flat with progressive dental. After integrating $MILE rewards,
          our appointments and online engagement soared. The platform made it easy to reward patients, track impact, and
          grow our practice with transparency.&quot;
        </p>
        <div className="mt-5 text-center testimonialsBoxPersonInfo">
          <p className="testimonialsBoxPersonName text-[24px] font-medium text-[#1E1E1E]">Dr. Bruce Donigan DDS</p> {/* Replace "[Dentist's Name]" with the actual name */}
          <p className="testimonialsBoxPersonLocation text-[20px] text-[#1E1E1E]">Detroit, Michigan</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
