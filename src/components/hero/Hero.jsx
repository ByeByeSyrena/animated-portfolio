import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";
import { info } from "sass";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: ["0%", "-250%"],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          JavaScript React NodeJS Express
        </motion.div>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IRA SHEVCHENKO</motion.h2>
          <motion.h1 variants={textVariants}>Full stack developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            src="../../../public/scroll.png"
            alt="scroll"
            className="scrollImg"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>

        <div className="imageContainer">
          <img
            className="animeGirl"
            src="../../../public/hero.png"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
