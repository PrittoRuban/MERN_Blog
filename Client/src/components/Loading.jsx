// components/Loading.js

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  { language: "Hello", color: "text-red-500" },
  { language: "Hola", color: "text-yellow-500" },
  { language: "Bonjour", color: "text-blue-500" },
  { language: "Ciao", color: "text-green-500" },
  { language: "こんにちは", color: "text-purple-500" }, // Japanese
  { language: "안녕하세요", color: "text-pink-500" }, // Korean
  { language: "你好", color: "text-teal-500" }, // Chinese
  { language: "Здравствуйте", color: "text-orange-500" }, // Russian
  { language: "Olá", color: "text-indigo-500" },
  { language: "Hallo", color: "text-gray-500" },
];

const Loading = ({ onLoaded }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 300);

    const timeout = setTimeout(() => {
      onLoaded();
    }, 300 * greetings.length); // Run the animation once

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-50"
    >
      <motion.div
        key={currentGreeting}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold ${greetings[currentGreeting].color}`}
      >
        {greetings[currentGreeting].language}
      </motion.div>
    </motion.div>
  );
};

export default Loading;
