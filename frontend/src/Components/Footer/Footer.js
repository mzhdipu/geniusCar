import React from "react";
import footerLogo from "../../asset/logo/Logo.png";
import { Link } from "react-router-dom";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white">
        <footer className="footer p-10 w-11/12 m-auto">
      <aside>
        <Link to="/">
          <img src={footerLogo} alt="" />
        </Link>
        <p>
        Edwin Diaz is a software and web  .
          <br />
          technologies engineer, a life coach <br />
          trainer who is also a serial.
        </p>

        <div className="socialLink flex gap-4">
            <Link className="text-xl" to=''><FaGoogle></FaGoogle></Link>
            <Link className="text-xl" to=''><FaTwitter></FaTwitter></Link>
            <Link className="text-xl" to=''><FaLinkedinIn></FaLinkedinIn></Link>
            <Link className="text-xl" to=''><FaInstagram></FaInstagram></Link>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
