import { motion } from "motion/react";
import glow from "../assets/glow.webp";
const Star = () => {
  return (
    <motion.div
      initial={{ x: -100, y: -20, scale: 0.3, opacity: 0 }}
      animate={{ x: 0, y: 0, scale: 1, rotate: "180deg", opacity: 1 }}
      transition={{ duration: 1, delay: 1, stiffness: 30, type: "spring" }}
      style={{ position: "relative" }}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
      M25 0
      C28 11, 39 22, 50 25
      C39 28, 28 39, 25 50
      C22 39, 11 28, 0 25
      C11 22, 22 11, 25 0
      Z
    "
          fill="white"
          stroke="white"
          stroke-width="1"
        />
      </svg>
      <motion.img
        src={glow}
        style={{
          width: 100,
          height: 100,
          position: "absolute",
          left: 0,
          bottom: 0,
          transform: "rotate(310deg)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          type: "spring",
          stiffness: 30,
        }}
      />
    </motion.div>
  );
};

export default Star;
