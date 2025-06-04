import { motion } from "framer-motion";

const WineGlass = () => {
  return (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="white"
      strokeWidth="2"
    >
      <motion.path
        d="M 50 50 C 100 50, 140 150, 150 190"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.path
        d="M 250 50 C 200 50, 160 150, 150 190"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.path
        d="M 50 50 L 250 50"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      />
      <motion.path
        d="M 50 50 C 100 50, 140 150, 150 190 C 160 150, 200 50, 250 50 L 50 50"
        fill="white"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default WineGlass;
