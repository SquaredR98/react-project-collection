import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';

const Project = ({ project, about, title }) => {
  const [projectState, setProjectState] = useState("demo");

  const activeStyles = "border-b-2 border-slate-800 bg-slate-400 dark:bg-slate-700 dark:border-slate-400 dark:text-white";
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <div className="flex items-center my-2 mb-4">
        <Link to='/all-projects'><HiOutlineArrowCircleLeft className="text-2xl dark:text-white mr-2" /></Link>
        <h1 className="dark:text-white text-2xl font-bold">{title || 'Default Title'}</h1>
      </div>
      <div className="grid grid-cols-2 bg-slate-200 dark:bg-slate-800 dark:text-white">
        <p
          className={`text-center hover:cursor-pointer py-2 ${
            projectState === "demo" ? activeStyles : ""
          }`}
          onClick={() => setProjectState('demo')}
        >
          Demo
        </p>
        <p
          className={`text-center hover:cursor-pointer py-2 ${
            projectState === "about" ? activeStyles : ""
          }`}
          onClick={() => setProjectState('about')}
        >
          About The Project
        </p>
      </div>
      {projectState === 'demo' ? project : about }
    </div>
  );
};

export default Project;
