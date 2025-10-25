// This component is unused as of now. I  may have plans to integrate it later.

import { motion } from "framer-motion";

const gradients = [
  "linear-gradient(to top, black, #090022ff)",
  "linear-gradient(to top, black 0%, crimson 50%, orange 100%)",
  "linear-gradient(to top, deepskyblue, lightblue, white)",
  "linear-gradient(to top, black, #511ce4ff)",
  "linear-gradient(to top, black, #090022ff)"
];

export default function Background() {
  const gradientDivs = [];

  for (let i = 0; i < gradients.length; i++) {
    gradientDivs.push(
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: Math.cos(Math.PI * i) * 2 + 10, //not synced with repeat delay, so there is bugging behaviour. will fix later.
          ease: "easeInOut",
          repeat: Infinity, 
          repeatDelay: (10 / gradients.length) * i 
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: gradients[i],
          zIndex: -1
        }}
      />
    );
  }

  return <>{gradientDivs}</>;
}
