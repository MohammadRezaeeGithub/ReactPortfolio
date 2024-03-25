import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constans/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hocs";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className=" xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Graduated as a software engineer with a keen aptitude for learning and
        almost 3 years of experience in web development, I have hands-on
        knowledge of PHP and JavaScript, along with their frameworks, including
        Laravel, ReactJs, and VueJs. As a passionate individual about
        technologies, I possess a very strong spirit of teamwork and
        adaptability to new situations and teams, I am seeking new opportunities
        to continue my career in the web development field.
      </motion.p>

      <div className=" mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
