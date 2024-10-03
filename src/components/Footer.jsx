import footerLogo from "../assets/images/headerImages/logo.png";
import footerInputArrow from "../assets/images/footerImages/footerInputArrow.png";
import tiktokLogo from "../assets/images/footerImages/tiktok.png";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerContent max-w-[1200px] mx-auto pt-2 pb-10 max-md:px-2">
      {/* Footer Logo (commented out) */}
      {/* 
      <div className="footerLogoContent max-w-[120px] mx-auto">
        <img src={footerLogo} alt="57Dentcare" className="w-full text-center footerLogo" />
      </div>
      */}
      <div className="flex items-start justify-between gap-5 mt-5 footerColumns max-xl:flex-wrap max-xl:justify-center">
        {/* Company Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Company</h3>
          <ul className="footerColumnList">
            <li className="footerColumnListItem">
              <a href="https://dental.arvrtise.com" className="footerColumnListItemLink active">
                Home
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="https://dental.arvrtise.com" className="footerColumnListItemLink">
                Services
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="https://dental.arvrtise.com" className="footerColumnListItemLink">
                About Us
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="https://dental.arvrtise.com" className="footerColumnListItemLink">
                Why Choose Us
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="https://dental.arvrtise.com" className="footerColumnListItemLink">
                Testimonials
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="https://calendly.com/arvrtise" className="footerColumnListItemLink">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Address Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Address</h3>
          <p className="footerDesc">296 Oylimpic Industrial Drive, Atlanta, GA United States</p>
          <a href="/" className="footerLink">
          </a>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-5">Inquiries</h3>
          <p className="footerDesc">
            (404) 889-5545 <br /> info@arvrtise.com
          </p>
        </div>

        {/* Social Media Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Newsletter</h3>
          <p className="mb-2 footerDesc">Stay Updated with our Latest News</p>
          <div className="footerInputContent relative w-full max-w-[306px] border-[1px] border-black rounded-[30px]">
            <input
              className="footerInput p-5 w-full max-w-[200px] h-[59px] rounded-[30px]"
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <div className="absolute cursor-pointer footerInputImgContent top-2 right-2">
              <img src={footerInputArrow} alt="Arrow" className="footerInputImg" />
            </div>
          </div>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-3">Follow Us</h3>
          <div className="flex items-center justify-start gap-3 list-none footerSocialMediaList">
            <li className="footerSocialMediaListItem">
              <a
                href="https://www.tiktok.com/@asmilemo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footerSocialMediaListItemImgContent">
                  <img
                    src={tiktokLogo}
                    alt="tiktok"
                    className="footerSocialMediaListItemImg"
                  />
                </div>
              </a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

