import footerLogo from "../assets/images/headerImages/logo.png";
import tiktokLogo from "../assets/images/footerImages/tiktok.webp";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerContent w-full bg-gradient-to-b from-white to-[#f8f8f8] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto py-10 px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={footerLogo}
          alt="SmileSats Logo"
          className="w-[140px] mb-6 opacity-90 hover:opacity-100 transition-all"
        />

        {/* Big Social Icons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a
            href="https://www.tiktok.com/@smilesats"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img
              src={tiktokLogo}
              alt="TikTok"
              className="w-[30px] h-[30px] invert brightness-200"
            />
          </a>
        </div>

        {/* App Button */}
        <a
          href="https://app.smilesats.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-3 rounded-[40px] bg-[#201F1B] text-white font-semibold text-[18px] shadow-lg hover:bg-[#3a362e] transition-all mb-4"
        >
          😁 JOIN APP <span className="text-sm opacity-80"></span>
        </a>

        {/* Footer Details */}
        <p className="text-gray-500 text-[14px] mt-3">
          © {new Date().getFullYear()} SmileSats
        </p>
      </div>
    </footer>
  );
};

export default Footer;



