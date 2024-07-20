import testimonialPerson from "../assets/images/testimonialsImages/testimonialPerson.png";

import "../assets/styles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonialsContent min-h-[800px] flex flex-col justify-center items-center my-5 ">
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-black">Satisfy Solution</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">The Best Dental Treatment</h2>
      <div className="testimonialsBox flex flex-col justify-center items-center max-w-[1180px] mx-auto p-5">
        <div className="testimonialsBoxImgContent mb-5">
          <img src={testimonialPerson} alt="testimonial Person" className="testimonialsBoxImg" />
        </div>
        <p className="testimonialsDesc font-bold text-[32px] text-center max-lg:text-[25px] max-md:text-[20px]">
          "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."
        </p>
        <div className="testimonialsBoxPersonInfo text-center mt-5">
          <p className="testimonialsBoxPersonName text-[24px] font-medium text-[#1E1E1E]">David Gahan</p>
          <p className="testimonialsBoxPersonLocation text-[20px] text-[#1E1E1E]">Detroit, Michigan</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
