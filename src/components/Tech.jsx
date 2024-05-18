/* eslint-disable no-unused-vars */
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Tech = () => {
  return (
    <div>
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 flex justify-center text text-[30px] "
        >
          Programming Languages & Tools:
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 flex  text-secondary text-[30px] "
        >
          Workflow:
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 ml-10 flex  text-secondary text-[20px] "
        >
          ✔️Testing & Debugging
          <br className="sm:block hidden" /> ✔️Git, Github for Teamwork
          <br className="sm:block hidden" />
          ✔️Responsive Web Design
          <br className="sm:block hidden" /> ✔️Agile Development & Scrum
          <br className="sm:block hidden" />
          ✔️English for Work!
        </motion.p>
      </div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28  cursor: pointer" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
