import logo from "../assets/images/headerImages/logo.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

const Header = () => {
  return (
    <header className="headerContent flex justify-between items-center max-w-[1200px] mx-auto py-5 px-3 mb-5">
      <div className="headerLogoContent">
        <img src={logo} alt="57Dentcare" className="headerLogoImg" />
      </div>
      <div className="headerMenuContent max-lg:hidden">
        <ul className="flex items-center justify-center gap-5 headerMenuList">
          <li className="font-medium headerMenuListItem">
            <a href="https://dental.arvrtise.com" className="headerMenuListItemLink">
              Home
            </a>
          </li>
          <li className="font-medium headerMenuListItem">
            <a href="#services" className="headerMenuListItemLink">
              Services
            </a>
          </li>
          <li className="font-medium headerMenuListItem">
            <a href="#aboutUs" className="headerMenuListItemLink">
              About Us
            </a>
          </li>
          <li className="font-medium headerMenuListItem">
            <a href="#whyChooseUs" className="headerMenuListItemLink">
              Why Choose Us
            </a>
          </li>
          <li className="font-medium headerMenuListItem">
            <a href="#testimonials" className="headerMenuListItemLink">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
      <div className="headerContactContent">
      <a href="https://calendly.com/arvrtise" className="headerContactLink">
      <button className="headerContactButton w-[180px] h-[50px] text-[18px] font-medium text-center flex justify-center items-center gap-2 border-solid border-[#89DB7B] border-[1px] rounded-[50px]">
            Contact Us
            <div className="headerContactButtonImgContent flex justify-between items-center max-w-[15px]">
              <img src={contactArrow} alt="Contact Us" className="w-full headerContactButtonImg" />
            </div>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
