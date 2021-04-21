import * as React from "react";
import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/twitter.png";
import snapchat from "../../../assets/images/snapchat.png";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-box">
      <img className="social-media-icon" src={facebook} alt="facebook-icon" />
      <img className="social-media-icon" src={instagram} alt="instagram-icon" />
      <img className="social-media-icon" src={twitter} alt="twitter-icon" />
      <img
        className="social-media-icon last-icon"
        src={snapchat}
        alt="snapchat-icon"
      />
    </div>
  );
};

export default SocialMedia;
