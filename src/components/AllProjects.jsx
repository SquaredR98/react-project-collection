import React, { useState } from "react";
import { projects } from "../data/projectList";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      <div className="relative md:w-1/2">
        <input
          id="search"
          name="search"
          value={searchTerm}
          placeholder="Enter Search Term"
          onChange={(event) => handleOnChange(event)}
          className="my-2 w-full py-2 rounded-full border  outline-none px-4 focus:shadow-md dark:focus:bg-slate-500 dark:bg-slate-600 dark:border-slate-600 dark:text-slate-200"
        />
        <CiSearch className="text-3xl absolute top-3 right-4 dark:text-white font-bold" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {projects
          .filter((element) =>
            element.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((element) => (
            <Link
              to={`/all-projects/${element.url}`}
              key={element.index}
              className="shadow-lg bg-slate-100 dark:bg-slate-800 rounded-lg grid grid-cols-3 gap-2 transition-all duration-300"
            >
              <div className="">
                <img
                  className="h-full w-full rounded-l-md object-cover"
                  src={element.image}
                  alt={element.name}
                />
              </div>
              <div className="col-span-2">
                <h3 className="dark:text-white text-2xl mt-2">
                  {element.name}
                </h3>
                <div className="flex flex-wrap">
                  {element.techs.map((element, index) => (
                    <span
                      key={index}
                      className="bg-stone-400 text-slate-950 dark:bg-slate-950 text-xs  border-white px-2 py-1 m-1 dark:text-slate-400 rounded-full font-light"
                    >
                      {element}
                    </span>
                  ))}
                </div>
                <p className="mb-2 text-stone-700 dark:text-slate-300 dark:font-light">
                  {element.Summary}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
