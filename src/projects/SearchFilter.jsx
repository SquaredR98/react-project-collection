import React, { useState } from "react";
import marvelData from "../data/marvelData.json";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <div className="my-6 dark:bg-slate-800 p-2 rounded-lg">
        <input
          name="independent-search-filter"
          onChange={(event) => handleOnChange(event)}
          value={searchTerm}
          placeholder="Enter Search Term"
          className="my-6 w-full py-2 rounded-full border outline-none px-4 focus:shadow-md dark:focus:bg-slate-500 dark:bg-slate-600 dark:border-slate-600 dark:text-slate-200"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto">
          {marvelData
            .filter(
              (element) =>
                element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                element.year.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((element, index) => (
              <div className="bg-slate-200 dark:bg-slate-900 dark:text-slate-200 p-2 rounded-sm">
                {element.name} ({element.year})
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
