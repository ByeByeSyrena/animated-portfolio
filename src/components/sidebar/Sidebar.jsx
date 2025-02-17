import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./sidebar.scss";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      {ReactDOM.createPortal(
        <motion.div
          className="sidebar"
          animate={open ? "open" : "closed"}
          initial="closed"
        >
          <motion.div className="bg" variants={variants}>
            <Links />
            <ToggleButton setOpen={setOpen} />
          </motion.div>
        </motion.div>,
        document.getElementById("portal-root")
      )}
    </>
  );
};

export default Sidebar;
