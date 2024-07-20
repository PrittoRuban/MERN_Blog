import React from "react";
import image from "../assets/Image.jpg";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiMysql,
  SiCplusplus,
  SiVisualstudiocode,
  SiIntellijidea,
  SiLinux,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiInsomnia,
  SiReplit,
  SiEjs,
  SiRedux,
} from "react-icons/si";
import CallToAction from "./CallToAction";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-gray-100 dark:bg-gray-800 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            variants={textVariant}
            className="text-base font-bold tracking-wide text-green-500 dark:text-indigo-400 mb-5"
          >
            Want to know more about me? You've come to the right place
          </motion.p>
          <motion.p
            variants={textVariant}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Hi, I'm Pritto Ruban
          </motion.p>
          <motion.p
            variants={textVariant}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto font-semibold"
          >
            RMKCET'27 || Bachelor of Engineering in Computer Science || Web
            Developer || Competitive Programmer || Tech Enthusiast
          </motion.p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center md:flex-row">
            <motion.div variants={iconVariant} className="md:w-1/3">
              <img
                className="rounded-full mx-auto md:mx-0 md:mr-6 w-48 h-48 md:w-64 md:h-64 object-cover object-center"
                src={image}
                alt="Pritto Ruban"
              />
            </motion.div>
            <motion.div
              variants={textVariant}
              className="md:w-2/3 mt-4 md:mt-0 md:ml-6"
            >
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                ⚡Currently, as a student at R.M.K College of Engineering and
                Technology, I am a passionate enthusiast of computer science
                engineering.
              </p>
              <p className="mt-4 font-semibold text-lg text-gray-900 dark:text-gray-300">
                👨🏻‍💻 I am interested in attending project presentations and
                various coding events to learn from industry experts and stay
                up-to-date with the latest trends and technologies in the field.
              </p>
              <p className="mt-4 font-semibold text-lg text-gray-900 dark:text-gray-300">
                💡I am dedicated to mastering the field and driven to innovate
                and contribute meaningfully to the world of technology.
              </p>
            </motion.div>
          </div>
          <motion.p
            variants={textVariant}
            className="font-bold text-center mt-5 text-blue-500"
          >
            Wanna know more about my Skills? 👇🏻
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700 dark:text-gray-50" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-600 dark:text-purple-200" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700 dark:text-blue-400" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-500  dark:text-blue-400" />,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "EJS", icon: <SiEjs className="text-red-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-black dark:text-gray-50" />,
    },
  ];
  const programmingLanguages = [
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "Java (Primary)", icon: <FaJava className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Insomnia", icon: <SiInsomnia className="text-violet-500" /> },
    { name: "VSCode", icon: <SiVisualstudiocode className="text-blue-500" /> },
    { name: "Replit", icon: <SiReplit className="text-orange-500" /> },
    {
      name: "IntelliJ IDEA",
      icon: <SiIntellijidea />,
    },
    { name: "Linux", icon: <SiLinux /> },
  ];
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-gray-100 dark:bg-gray-800 py-12 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            variants={textVariant}
            className="text-base font-bold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase"
          >
            Skills{" "}
            <span className=" text-gray-800 dark:text-gray-200">
              (Updated: June 2024)
            </span>
          </motion.h2>

          <motion.p
            variants={textVariant}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Full Stack Development
          </motion.p>
          <motion.p
            variants={textVariant}
            className="mt-2 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto"
          >
            I've been familier with:
          </motion.p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mt-5 flex flex-wrap justify-center gap-8 mb-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={iconVariant}
              className="flex flex-col items-center"
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-5">
          <motion.p
            variants={textVariant}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Programming Languages and Tools
          </motion.p>
          <motion.p
            variants={textVariant}
            className="mt-2 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto"
          >
            I've hands-on experience with:
          </motion.p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mt-5 flex flex-wrap justify-center gap-8"
        >
          {programmingLanguages.map((programmingLanguage, index) => (
            <motion.div
              key={index}
              variants={iconVariant}
              className="flex flex-col items-center"
            >
              <div className="text-3xl">{programmingLanguage.icon}</div>
              <p className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                {programmingLanguage.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div className="mt-10 ml-2 mr-2">
        <CallToAction />
      </motion.div>
      <motion.h3
        variants={textVariant}
        className="font-bold text-center text-green-400 mt-8"
      >
        Get Connected 🎓
      </motion.h3>
    </motion.section>
  );
};
