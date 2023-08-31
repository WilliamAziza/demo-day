import {  createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Layout from './components/layout';
import ContactDetails from './components/contactDetails';
import Products from './components/Products';
import Login from './components/login';
import SignUp from './components/signUp';
export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='products' element={<Products/>}/>
                  <Route path='about' element={<About/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='contact/:id' element={<ContactDetails/>}/>
                  <Route path='login' element={<Login/>}/>
                  <Route path='signUp' element={<SignUp/>}/>

      </Route>
    )
   )