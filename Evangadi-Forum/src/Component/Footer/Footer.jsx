import React from "react";
import classes from "../Footer/Footer.module.css";
import logo from "../../assets/Logo_White.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <section className={classes.container}>
        <div className={classes.logo_links}>
          <img src={logo} alt="" />
          <div className={classes.social_links}>
            <a href="https://facebook.com">
              <FaFacebookF size={25} color="white" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram size={25} color="white" />
            </a>
            <a href="https://youtube.com">
              <RiYoutubeLine size={25} color="white" />
            </a>
          </div>
        </div>
        <div className={classes.useful_links}>
          <h2>Useful Link</h2>
          <a href="">How it works</a>
          <a href="">Terms of service</a>
          <a href="">Privacy policy</a>
        </div>

        <div className={classes.contact_info}>
          <h2>Contact Info</h2>
          <a href="">Evangadi Networks</a>
          <a href="">Support@evangadi.com</a>
          <a href="">+1-202-386-2702</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
