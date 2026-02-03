import React from "react";
import img from "../assets/welcome-concept-illustration_114360-27447-removebg-preview.png";

export const HomePages = () => {
  return (
    <div className="px-5 flex items-center justify-center h-full">
      <img src={img} className="max-w-72 w-full" alt="imagw says welcome" />
    </div>
  );
};
