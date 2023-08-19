import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css'
// import { Route, createRoutesFromElements } from 'react-router';

import { router } from './router';
import { RouterProvider } from 'react-router';

const App = () => {
 

  return (
<RouterProvider router={router}/>
  );
}

export default App;
