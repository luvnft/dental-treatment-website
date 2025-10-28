import { useEffect } from "react";
import consultationPerson from "../assets/images/consultationImages/consultationPerson.png";
import "../assets/styles/consultation.css";

const Consultation = () => {
  useEffect(() => {
    // Dynamically load TikTok embed script if not already loaded
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, trigger TikTok’s re-render manually
      if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
    }
  }, []);

  return (
    <section className="consultationContent grid grid-cols-[0.4fr_0.6fr] place-items-center max-w-[1140px] mx-auto my-10 gap-5 rounded-[50px] max-lg:flex max-lg:flex-col max-lg:w-fit max-lg:p-5">
      {/* Left image */}
      <div className="consultationImgSide max-lg:p-5 max-md:p-0">
        <img
          src={consultationPerson}
          alt="Dentist"
          className="consultationImg w-full max-w-[484px] max-h-[502px] max-lg:rounded-[50px]"
        />
      </div>

      {/* Right: TikTok embed */}
      <div className="text-center consultationFormSide max-lg:p-5 max-md:p-0">
        <h2 className="sectionMainTitle mb-4 font-semibold text-[36px]">
          Follow SmileSats on TikTok
        </h2>
        <p className="text-[16px] mb-6">
          🎵 See how we’re turning smiles into Bitcoin $MILE rewards.
        </p>

        <div className="flex items-center justify-center">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@smilesats"
            data-unique-id="smilesats"
            data-embed-type="creator"
            style={{ maxWidth: "780px", minWidth: "288px" }}
          >
            <section>
              <a
                target="_blank"
                href="https://www.tiktok.com/@smilesats?refer=creator_embed"
                rel="noopener noreferrer"
              >
                @smilesats
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
