import footerLogo from "../assets/images/headerImages/logo.png";
import footerInputArrow from "../assets/images/footerImages/footerInputArrow.png";
import facebookLogo from "../assets/images/footerImages/facebook.png";
import twitterLogo from "../assets/images/footerImages/twitter.png";
import youtubeLogo from "../assets/images/footerImages/youtube.png";
import pinterestLogo from "../assets/images/footerImages/pinterest.png";
import linkedinLogo from "../assets/images/footerImages/linkedin.png";
import tiktokLogo from "../assets/images/footerImages/tiktok.png";
import instagramLogo from "../assets/images/footerImages/instagram.png";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerContent max-w-[1200px] mx-auto pt-5 pb-10">
      <div className="footerLogoContent max-w-[120px]">
        <img src={footerLogo} alt="57Dentcare" className="footerLogo w-full" />
      </div>
      <div className="footerColumns mt-5 flex justify-between items-start gap-5 max-xl:flex-wrap max-xl:justify-center">
        {/* Company Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Company</h3>
          <ul className="footerColumnList">
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink active">
                Home
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Services
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                About Us
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Why Choose Us
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Testimonials
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Pages Column */}

        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Pages</h3>
          <ul className="footerColumnList">
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink active">
                404
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Licensing
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Instructions
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Style Guide
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Changelog
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                More Templates!
              </a>
            </li>
          </ul>
        </div>

        {/* Address Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Address</h3>
          <p className="footerDesc">123 Dental Avenue City ville, State 12345 United States</p>
          <a href="/" className="footerLink">
            View on Maps
          </a>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-5">Inquiries</h3>
          <p className="footerDesc">
            (123) 456-7890 <br /> info@57dentcare.com
          </p>
        </div>

        {/* Social Media Column */}

        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Newsletter</h3>
          <p className="footerDesc mb-2">Stay Updated with our Latest News</p>
          <div className="footerInputContent relative w-full max-w-[306px] border-[1px] border-black rounded-[30px]">
            <input className="footerInput p-5 w-full max-w-[200px] h-[59px] rounded-[30px]" type="text" name="email" id="email" placeholder="Your Email" />
            <div className="footerInputImgContent absolute top-2 right-2 cursor-pointer">
              <img src={footerInputArrow} alt="Arrow" className="footerInputImg" />
            </div>
          </div>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-3">Follow Us</h3>
          <div className="footerSocialMediaList list-none flex justify-start items-center gap-3">
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={facebookLogo} alt="Facebook" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={twitterLogo} alt="twitter" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={youtubeLogo} alt="youtube" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={pinterestLogo} alt="pinterest" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={linkedinLogo} alt="linkedin" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={tiktokLogo} alt="tiktok" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={instagramLogo} alt="instagram" className="footerSocialMediaListItemImg" />
              </div>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
