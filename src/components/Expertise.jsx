import React from "react";
import { Cuisines } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Expertise = () => {
  return (
    <div className="max-7xl mx-auto px-2 py-4" id="expertise">
      <h2 className="text-center py-4 text-2xl">Our Expertise</h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="w-full mx-auto"
      >
        {Cuisines.map((item, index) => (
          <motion.div
            variants={ItemVariants}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
            key={index}
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{item.number}</div>
            <div className="w-1/3 flex-shrink-0">
              <img
                src={item.img}
                className="h-80 w-full object-cover rounded-3xl"
                alt="item"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {item.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Expertise;
