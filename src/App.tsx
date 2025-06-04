import WineGlass from "./components/WineGlass";
import Star from "./components/Star";
import { motion } from "motion/react";
import Elevate from "./components/Elevate";
function App() {
  return (
    <motion.div
      animate={{ y: -100 }}
      transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 30 }}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Star />
      <WineGlass />
      <Elevate />
    </motion.div>
  );
}

export default App;
