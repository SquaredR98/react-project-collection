import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <Link to='/'>
        <h4 className="text-xl leading-none text-slate-950 font-semibold dark:font-normal dark:text-white">
          REACT PROJECTS
        </h4>
        <p className="leading-relaxed text-slate-700 dark:text-slate-300 uppercase tracking-widest text-sm">
          By Ravi Ranjan
        </p>
      </Link>
      <div className="relative text-slate-400">
        <Link to='all-projects'>All Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
