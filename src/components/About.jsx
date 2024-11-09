import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="mx-auto max-w-6xl px-4 py-8  mb-8">
      <h2 className="text-center py-8 text-3xl tracking-tighter lg:text-4xl">
        About Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="items-center w-full mx-auto p-4 ">
          <img
            className="rounded-xl lg:-rotate-2 h-[500px] mx-auto w-full object-cover "
            src="https://images.pexels.com/photos/8477419/pexels-photo-8477419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="aboutimg"
          />
        </div>
        <div className=" p-4 w-full ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:-ml-4  text-center md:text-left "
          >
            We Love Cooking!
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-2 w-70 md:w-32 -ml-4 bg-rose-300 mt-2 mb-2 lg:-rotate-3"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-xl leading-normal "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            delectus voluptatum rerum modi voluptatibus. Odio voluptatem ducimus
            saepe voluptate impedit temporibus debitis quo molestiae qui sequi
            praesentium, odit earum consequuntur? Voluptatibus at repellendus
            laudantium id atque iure est vitae ipsa reprehenderit architecto
            fuga dolores officiis aperiam aliquid vero nisi, porro laborum in
            perspiciatis doloribus? Pariatur illum labore veritatis rerum non
            recusandae est delectus saepe unde consequatur magni vel laudantium
            fugit, explicabo quis harum debitis blanditiis nostrum. Reiciendis
            rem doloribus quisquam ab cupiditate! Architecto consequatur
            perferendis eius reiciendis cupiditate, sunt, nobis rem velit nulla
            fuga modi veritatis enim itaque iure doloribus.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
