import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {
  return (
    <div className="hidden sm:flex sm:flex-col flex-grow justify-center sm:4/12 md:w-3/12 lg:w-2/12 h-full">
      {data?.var?.map((element, index) => (
        <Link key={index} to={`/${data.value}/${element.url}`} className="font-light">
          {element.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
