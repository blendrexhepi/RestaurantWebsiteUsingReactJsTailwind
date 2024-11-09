import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="max-6xl mx-auto px-4 py-8 text-center" id="mission">
      <h2 className="mb-8 text-4xl">Our Mission</h2>
      <div className="relative flex items-center justify-center">
        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          poster="https://videos.pexels.com/video-files/4253150/4253150-uhd_2732_1440_25fps.mp4"
          src="https://videos.pexels.com/video-files/4253150/4253150-uhd_2732_1440_25fps.mp4"
          loop
          autoPlay
          muted
          className="w-[70%] rounded-xl "
        ></motion.video>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute h-full w-full rounded-3xl bg-black/40"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute text-sm sm:text-xl max-w-[150px] md:max-w-lg tracking-tighter md:text-2xl lg:text-3xl "
        >
          At our restaurant, our mission is to create delicious and memorable
          dining experiences
        </motion.p>
      </div>
    </div>
  );
};

export default Mission;
