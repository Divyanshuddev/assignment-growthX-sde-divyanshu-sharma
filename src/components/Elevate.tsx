import { Typography } from "@mui/material";
import { motion } from "motion/react";

const Elevate = () => {
  return (
    <Typography
      sx={{
        color: "white",
        fontSize: { lg: 60, md: 40, sm: 30, xs: 30 },
        letterSpacing: 20,
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          type: "spring",
          stiffness: 30,
        }}
      >
        ELEVATE
      </motion.h2>
    </Typography>
  );
};

export default Elevate;
