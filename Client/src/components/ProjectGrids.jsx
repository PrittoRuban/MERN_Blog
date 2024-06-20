import React from "react";
import { motion } from "framer-motion";
import eCommerse from "../assets/eCommerse.png";
import Simon from "../assets/SimonGame.png";
import tindog from "../assets/TinDog.png";
import drumkit from "../assets/drumkit.png";
import clock from "../assets/clock.png";
import dice from "../assets/Dice.png"; 
import CallToAction from "./CallToAction";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};

export const ProjectGrids = () => {
  const projects = [
    {
      id: "E-Commerce Website",
      image: eCommerse,
      description:
        "E-Commerce Website designed during the event of Web Design conducted at Rajalakshmi Engineering College and won Second prize.",
      demoLink: "https://prittoruban.github.io/E-Commerce_Website/",
      sourceCodeLink: "https://github.com/PrittoRuban/E-Commerce_Website",
    },
    {
      id: "Simon Game",
      image: Simon,
      description:
        "Elevate your cognitive skills while enjoying the Game. It stands as a testament to your journey in mastering the art of web development.",
      demoLink: "https://prittoruban.github.io/The_Simon_Game/",
      sourceCodeLink: "https://github.com/PrittoRuban/The_Simon_Game",
    },
    {
      id: "Drum Kit",
      image: drumkit,
      description:
        "This is the Drumkit project I created to enhance my skills in web development. It showcases a responsive design.",
      demoLink: "https://prittoruban.github.io/Drum-Kit/",
      sourceCodeLink: "https://github.com/PrittoRuban/Drum-Kit",
    },
    {
      id: "TinDog Project",
      image: tindog,
      description:
        "This is the Tindog project I created using Bootstrap to enhance my skills in Bootstrap. It showcases a responsive design.",
      demoLink: "https://prittoruban.github.io/TinDog_Project/",
      sourceCodeLink: "https://github.com/PrittoRuban/TinDog_Project",
    },
    {
      id: "Analog Clock",
      image: clock,
      description:
        "This is the Analog Clock project I created to enhance my CSS skills. It features a sleek design and precise functionality.",
      demoLink: "https://prittoruban.github.io/Analog_Clock/",
      sourceCodeLink: "https://github.com/PrittoRuban/Analog_Clock",
    },
    {
      id: "Dice Game",
      image: dice,
      description:
        "This is the Dice Game project I developed to further my understanding of JavaScript and enhance my skills in game development.",
      demoLink: "https://prittoruban.github.io/Dice-Game/",
      sourceCodeLink: "https://github.com/PrittoRuban/Dice-Game",
    },
  ];

  return (
    <div className="container mx-auto p-6 mb-5">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      <motion.h2
        className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Projects Completed During My First Year of B.E. (Updated: June 2024)
      </motion.h2>
      <motion.p
        className="text-xl font-bold text-center mb-8 text-green-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        This Blog App is my first major project, utilizing my MERN stack skills.
        Here are some other projects I've did: 👇🏻
      </motion.p>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={i}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
                {project.id}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"
                >
                  Demo
                </a>
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div className="mt-8">
        <CallToAction />
      </motion.div>
      <motion.p
        className="text-center font-semibold text-green-500 dark:text-blue-500 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Explore all my projects 👉🏻{" "}
        <span className="text-blue-500 dark:text-green-500">
          <a href="https://github.com/PrittoRuban" target="_blank">
            GitHub
          </a>
        </span>
      </motion.p>
    </div>
  );
};
