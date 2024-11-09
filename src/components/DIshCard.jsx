import React from "react";

const DishCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.img}
        alt={project.title}
        className="rounded-3xl p-2 w-full h-[70%] object-cover object-fit"
      ></img>
      <div className="p-8">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="md:text-sm mb-4 text-lg">{project.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
