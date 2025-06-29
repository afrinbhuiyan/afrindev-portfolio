import React from "react";
import { motion } from "framer-motion";
import logo from "../../public/logo2.png";

const Logo = () => (
  <motion.div className="flex items-center" whileHover={{ scale: 1.00 }}>
    <div className="w-20 h-20 flex items-center justify-center">
      <img src={logo} alt="" />
    </div>
  </motion.div>
);

export default Logo;
