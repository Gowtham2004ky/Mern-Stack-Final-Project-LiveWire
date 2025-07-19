import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Gowthaman</div>
      <div>
        <Link to={"https://www.linkedin.com/in/gowthaman-k-y-326b7729a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://youtube.com/@gowthaman9589?si=9tr_M6kJzx2pU62w"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={""} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={""} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
