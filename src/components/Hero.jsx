import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen items-center justify-center"
      id="home"
    >
      <div className="absolute inset-0 h-full -z-20 w-full overflow-hidden">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3296399/3296399-uhd_2732_1440_25fps.mp4"
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-t-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.h1
          className="w-full p-4 text-white lg:text-[150px] md:text-[100px] text-6xl  font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Restaurant
        </motion.h1>
        <p className="py-8 px-6 text-xl tracking-tight text-white">Paris</p>
      </div>
    </div>
  );
};

export default Hero;
