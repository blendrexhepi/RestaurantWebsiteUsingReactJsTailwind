import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto text-center py-12 space-y-8 ">
      <div className="mx-auto flex gap-2">
        <FaLinkedin size={30} />
        <FaFacebook size={30} />
        <FaInstagram size={30} />
      </div>
      <p className="text-neutral-500">@compileTab. All rights reserved</p>
    </div>
  );
};

export default Footer;
