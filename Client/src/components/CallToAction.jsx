import React from "react";
import linktree from "../assets/linktree.png";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-2 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:scale-105 max-w-screen-md mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 p-4"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Want to Make Stunning Web Pages?
        </h2>
        <p className="text-white mb-4 text-sm">
          Discover Expert Freelance Web Design for Eye-Catching Portfolios and
          High-Converting Landing Pages. Check out my Linktree to see my
          profiles and contact me or click the button below to contact me on
          LinkedIn!
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none text-sm"
          >
            <a
              href="https://www.linkedin.com/in/prittoruban/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center space-x-2"
            >
              <FaLinkedin />
              <span>Contact Me on LinkedIn</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="p-5 flex-1"
      >
        <a
          href="https://linktr.ee/prittoruban"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={linktree}
            alt="call to action"
            className="rounded-full border-4 border-white shadow-lg transition-transform transform hover:rotate-6 hover:scale-105 w-62 h-62"
          />
        </a>
      </motion.div>
    </div>
  );
}
