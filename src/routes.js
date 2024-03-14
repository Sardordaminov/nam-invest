import React from "react";
import Home from "./pages/home/Home";
import Error from "./pages/not-found/NotFound";
import News from "./pages/news/News";
import Search from "./pages/search/Search";
import { useRoutes } from "react-router-dom";

export const Routes = () => {
  const PublicRoute = [
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/media-center/press-releases/", element: <News /> },
        { path: "*", element: <Error /> },
      ],
    },
  ];
  return useRoutes(PublicRoute);
};
