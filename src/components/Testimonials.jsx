import testimonialPerson from "../assets/images/testimonialsImages/testimonialPerson.png";

import "../assets/styles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonialsContent min-h-[800px] flex flex-col justify-center items-center my-5 ">
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-black">Leads Solution</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">The Best Dental Marketing Agency</h2>
      <div className="testimonialsBox flex flex-col justify-center items-center max-w-[1180px] mx-auto p-5">
        <div className="mb-5 testimonialsBoxImgContent">
          <img src={testimonialPerson} alt="testimonial Person" className="testimonialsBoxImg" />
        </div>
        <p className="testimonialsDesc font-bold text-[32px] text-center max-lg:text-[25px] max-md:text-[20px]">
          &quot;Before we partnered with Arvrtise Dental, our social media presence was practically nonexistent. We were struggling to reach new patients and keep up with the latest trends.

           But after working with their team, our new patient appointments increased by 30% in just six months! Arvrtise Dental helped us create engaging content, optimize our website for search, and develop a strong social media strategy.

           Their team is incredibly knowledgeable and responsive, always available to answer questions and offer guidance. They truly understand the needs of dental practices and helped us build a thriving online presence. I highly recommend Arvrtise Dental to any dentist looking to grow their business.&quot;
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
