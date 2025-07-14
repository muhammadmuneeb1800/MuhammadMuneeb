import React from "react";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe, repoLink, CVLink, socialMedia } from "../constants";
import { AiOutlineFilePdf } from "react-icons/ai";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { profilePic } from "../assets";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CountUp } from "countup.js";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const counters = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 8, suffix: "+", label: "Technologies Mastered" },
    { value: 20, suffix: "+", label: "Projects Completed" },
    { value: 1000, suffix: "+", label: "Code Commits" },
  ];

  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (el) {
        const { value, suffix } = counters[index];
        const countUp = new CountUp(el, value, {
          duration: 15,
          suffix: suffix || "",
        });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* Hero text */}
          <div className="flex flex-row justify-between items-center w-full text-white">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
              Hi there!
              <br className="sm:block hidden" /> I am
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <LetsConnect />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
            <span className="text-gradient">{aboutMe.name}</span>
          </h1>
          <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
            {aboutMe.intro}
          </p>
          {/* Social Icons */}
          <div className="flex flex-row mt-4">
            {socialMedia.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                index={index}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
          {/* CV button */}
          <div className="grid grid-cols-2">
            {/* styles is a prop */}
            <a href={CVLink} target="_blank">
              <Button
                styles="mt-10 mr-3 inline-flex items-center justify-center"
                text="CV"
                icon={AiOutlineFilePdf}
              />
            </a>
            <a href={repoLink} target="_blank">
              <Button
                styles="mt-10 inline-flex items-center justify-center"
                text="Star"
                icon={FaGithub}
              />
            </a>
          </div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div className="relative z-index-[5] h-[90%] w-[85%]">
            <Lottie {...defaultOptions} />
          </div>
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <LetsConnect />
        </div>
      </section>
      {/* About Me Section */}
      <section
        id="about"
        className={`flex flex-col md:flex-row ${styles.paddingY}`}
      >
        <div className="flex-1 flex flex-col justify-start px-4 sm:px-8 lg:px-10">
          <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[60px] lg:leading-[70px] text-center sm:text-left">
            About Me
          </h1>
          <p className="text-dimWhite text-center sm:text-start font-poppins text-[16px] sm:text-[18px] font-light mt-4 max-w-full md:max-w-[75%] leading-[29px]">
            My name is{" "}
            <span className="text-teal-500 font-bold">Muhammad Muneeb</span>. I
            am a software engineer with a passion for problem-solving, creating
            efficient solutions, and exploring new technologies. With experience
            in{" "}
            <span className="text-teal-500 font-bold">
              JavaScript, React and backend development
            </span>
            , I enjoy building scalable, user-focused applications.
          </p>
          <p className="text-dimWhite text-center sm:text-start font-poppins text-[16px] sm:text-[18px] font-light mt-5 max-w-full md:max-w-[75%] leading-[29px]">
            I&rsquo;m , a dedicated and passionate full-stack{" "}
            <span className="text-teal-500 font-bold">web apps (MERN) </span>{" "}
            and{" "}
            <span className="text-teal-500 font-bold">
              mobile apps (React Native)
            </span>{" "}
            software engineer from Faisalabad, PK. I have a strong foundation in
            modern technologies like{" "}
            <span className="text-teal-500 font-bold">
              next.js, react native, typescript, prisma{" "}
            </span>
            and <span className="text-teal-500 font-bold">graphQL</span>. My
            experience also extends to database management with{" "}
            <span className="text-teal-500 font-bold">firebase, mongoDB</span>{" "}
            and <span className="text-teal-500 font-bold">postgreSQL</span>
            ensuring data is handled securely and efficiently.
          </p>
          <p className="text-dimWhite text-center sm:text-start font-poppins text-[16px] sm:text-[18px] font-light mt-5 max-w-full md:max-w-[75%] leading-[29px]">
            I am currently pursuing a BS in Computer Science from{" "}
            <span className="text-teal-500 font-bold">
              Virtual University, Pakistan
            </span>
            , and I am also associated with{" "}
            <span className="text-teal-500 font-bold">TechloSet Solutions</span>
            , where I continue to refine my skills and gain industry-relevant
            experience.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center relative mt-8 md:mt-0">
          <div className="overflow-hidden border-4 border-teal-500 w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <img
              src={profilePic}
              alt="Muhammad Muneeb"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center text-center mb-20">
          {counters.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <p
                ref={(el) => (refs.current[index] = el)}
                className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-white"
              ></p>
              <p className="text-teal-200 text-sm sm:text-base lg:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
