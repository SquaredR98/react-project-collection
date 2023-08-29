import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import HomePage from "./components/HomePage";
import Project from "./components/Project";
import { projects } from "./data/projectList";
import SearchFilter from "./projects/SearchFilter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/all-projects',
        children: [
          {
            path: '',
            element: <AllProjects projects={projects} />
          },
          {
            path: '/all-projects/search-filter',
            element: <Project project={<SearchFilter />} title='Search Filter' />
          }
        ]
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
