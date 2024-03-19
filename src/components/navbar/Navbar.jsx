import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import dribbble from "../../public/dribbble.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ByeByeSyrena Dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebook} alt="fb" />
          </a>
          <a href="#">
            <img src={instagram} alt="insta" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={dribbble} alt="dribbble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
