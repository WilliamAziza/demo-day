import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import styles from './styles.css'
// import { Route, createRoutesFromElements } from 'react-router';

import { router } from "./router";
import { RouterProvider } from "react-router";
import Foot from "./components/foot";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Foot />
    </>
  );
};

export default App;
