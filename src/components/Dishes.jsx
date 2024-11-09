import React from "react";
import { DishesItems } from "../constants";
import DishCard from "./DIshCard";

const Dishes = () => {
  return (
    <div className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {DishesItems.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
