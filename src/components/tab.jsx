import { motion } from "framer-motion";
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

function Tab({
  tab,
  isFilterTab = false,
  isActive = "",
  handleClick,
  className,
}) {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActive
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <motion.div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : " rounded-md"
      } ${className}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img src={tab.icon} alt={tab.name} className="w-6 h-6" />
    </motion.div>
  );
}

export default Tab;
