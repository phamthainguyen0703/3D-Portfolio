/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { Tilt } from "react-tilt";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={icon} className="w-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT ME</p>
        <h1 className="mt-5  text-[60px] leading-[60px] font-serif hover: ">
          I'm passionate about creating beautiful products that
          <span className="ml-6 text-[70px] font-serif italic ">
            empower people.
          </span>
        </h1>
      </motion.div>
      <p className="mt-9 text-[20px] ">My background is in the university</p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[20px] leading-[30px] indent-8"
      >
        As a fourth-year student waiting to graduate from
        <a
          href="https://huflit.edu.vn/"
          target="_blank"
          className="ml-2 text-[25px] font-serif italic hover:underline "
        >
          Ho Chi Minh City University of Foreign Languages and Information
          Technology – HUFLIT
        </a>
        . I'm passionate about creating seamless user experiences and believe
        that simplifying code leads to more agile applications.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[20px] leading-[30px] indent-8"
      >
        When I was a student, I learned a lot about job opportunities in
        information technology, and I decided to choose Web Programming since I
        enjoy customizing and drawing on my websites. I completed my university
        studies with a
        <span className="ml-2 text-[25px] bold text-white">3.3 GPA</span>. I got
        <span className="ml-2 mr-2 text-[25px] bold text-white">
          an
          <span className="ml-2 mr-2 text-[35px] bold text-white">A</span>
          in web programming
        </span>
        and
        <span className="ml-2 mr-2 text-[25px] bold text-white">
          an
          <span className="ml-2 mr-2 text-[35px] bold text-white">A+</span>
          in advanced web programming.
        </span>
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[20px] leading-[30px] indent-8"
      >
        I very appreciate my school because it allows me to make new friends and
        learn with them. I've also stood at the lectern and taught my classmates
        about programming. My time in college gave me many valuable lessons
        about my major and life lessons.
      </motion.p>

      <p className="mt-9 text-[20px] ">But, I wanted more.</p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[20px] leading-[30px] indent-8"
      >
        I wanted to push my design craft at a faster pace and have a positive
        impact on vastly more people.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[20px] leading-[30px] indent-8"
      >
        Quickly become a programmer with the ability to design and build
        applications according to market needs in the most meticulous and
        sophisticated way possible.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[20px] leading-[30px] indent-8"
      >
        Learning and upgrading skills to help design application interfaces such
        as 3D visuals and mobile applications to suit market criteria
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
