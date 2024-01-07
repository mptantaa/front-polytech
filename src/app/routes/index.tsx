import React from 'react';
import { RouteObject, useRoutes, Navigate } from 'react-router-dom';
import Catalog from "../../pages/Catalog";
import About from "../../pages/About";
import Reviews from "../../pages/Reviews";
import Contacts from "../../pages/Contacts";
import { CATALOG_ROUTE, ABOUT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE } from './config';

const MainRouter = ({ isAuth = false }) => {
  const basedPath = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: '*', element: <Navigate to={'/'} replace /> },
  ];

  const authPath = [
    { path: CATALOG_ROUTE, element: <Catalog /> },
    { path: REVIEWS_ROUTE, element: <Contacts /> },
  ];

  const resultPaths = isAuth ? [...basedPath, ...authPath] : [...basedPath];

  return useRoutes(resultPaths);
};

export default MainRouter;
