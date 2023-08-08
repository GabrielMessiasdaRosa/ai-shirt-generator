import { motion } from "framer-motion";
import React from "react";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import state from "../store";
const CustomButton = ({ type, title, customStyles, handleClick, disabled }) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
    if (type === "outlined") {
      return {
        border: `1px solid ${snap.color}`,
        color: snap.color,
      };
    }
  };

  return (
    <motion.button
      disabled={disabled}
      onClick={handleClick}
      className={`transition-all px-2 py-1 hover:active:scale-95 rounded-md ${customStyles}`}
      style={generateStyles(type)}
    >
      {title}
    </motion.button>
  );
};

export default CustomButton;
