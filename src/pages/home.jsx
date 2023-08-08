import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSnapshot } from "valtio";
import { threejs } from "../assets";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  rotate360,
  slideAnimation,
} from "../config/motion";
import state from "../store";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")} {...rotate360}>
            <img
              src={threejs}
              alt="three js logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-gray-800">
                <span className="text-gradient-animate">Customize</span> your
                own shirt in 3D with AI
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our 3d customization
                tool.{" "}
                <strong>
                  Unleash your{" "}
                  <span className="text-gradient-animate">imagination</span>
                </strong>{" "}
                and define your own style.
              </p>
              <button
                onClick={() => {
                  state.intro = false;
                }}
                className="button-glow transition-all hover:active:scale-95 "
              >
                Let's begin
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
