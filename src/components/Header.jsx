import logo from "../assets/images/headerImages/logo.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

const Header = () => {
  return (
    <header className="headerContent flex justify-between items-center max-w-[1200px] mx-auto py-5 px-3 mb-5">
      <div className="headerLogoContent">
        <img src={logo} alt="SMILE SATS" className="headerLogoImg" />
      </div>
      <div className="headerMenuContent max-lg:hidden">
        <ul className="flex items-center justify-center gap-5 headerMenuList">
          <li className="font-medium headerMenuListItem">
            <a href="https://smilesats.com" className="headerMenuListItemLink">
              Home
            </a>
          </li>
          <li className="font-medium headerMenuListItem">
            <a href="https://app.smilesats.com" className="headerMenuListItemLink">
              App
            </a>
          </li>
          <li className="font-medium headerMenuListItem">
            <a href="https://tiktok.com/@tiktok" className="headerMenuListItemLink">
              TikTok
            </a>
          </li>
        </ul>
      </div>
      <div className="headerContactContent">
      <a href="https://app.smilesats.com/profile/hahz/" className="headerContactLink">
      <button className="headerContactButton w-[180px] h-[50px] text-[18px] font-medium text-center flex justify-center items-center gap-2 border-solid border-[#89DB7B] border-[1px] rounded-[50px]">
            Partner With SmileSats
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
