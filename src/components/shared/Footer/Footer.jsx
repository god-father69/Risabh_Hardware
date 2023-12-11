import React from "react";
import footerImage from "../../../assets/footer/bg.jpg";
import { Link } from "react-router-dom";
import footerLogo from "../../../assets/logo/logo2_footer.png";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // styles
  const footerHead = "text-[18px] font-semibold my-[18px] text-white";
  const footerList = "font-[16px] text-white my-4";
  return (
    <div
      className="bg-fixed bg-cover bg-center  flex items-center pt-20 lg:px-20 "
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="mx-4 my-10">
            <h2 className={footerHead}>COMPANY</h2>
            <ul className="mt-10">
              <li className={footerList}>
                <Link to="/">About Us</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Privacy & policy</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Contact</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Company</Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <h2 className={footerHead}>OPEN HOUR</h2>
            <ul className="mt-10">
              <li className={footerList}>Monday-saturday (9am-7pm)</li>
              <li className={footerList}>Sunday (close)</li>
              <li className={footerList}>Saturday (11am-7pm)</li>
            </ul>
          </div>
          <div className="mx-4 my-10 footerBg" style={{visibility:"hidden"}}>
            <h2 className={footerHead}>Resources</h2>
            <ul className="mt-10">
              <li className={footerList}>Protien Insurance</li>
              <li className={footerList}>Trainners</li>
              <li className={footerList}>Car</li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <img className="footerBg" src={footerLogo} alt="" />
            <p className="font-[14px] text-white   my-10" style={{backdropFilter:"blur(2px)"}}>
              {" "}
              Discover excellence in every detail with our premium selection. From durable motors in all ranges, catering to both light and heavy-duty needs, we've got you covered. Elevate your hardware experience with us - where quality meets reliability.
            </p>
            <div className="flex  space-x-4 text-white">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-white text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="text-white text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-white text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe className="text-white text-[1.3rem] hover:text-main" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-10  border-t-2 border-white">
          <p className="text-white text-center p-4">
            Copyright &copy; All rights reserved by Risabh Hardware
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
