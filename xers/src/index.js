import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Mentors from './components/Mentors'
import HallOfFame from './components/HallOfFame';
import Add from './components/Add';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
//import Splash from './components/Splash';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
//   },
//   {
//     path: '/hof',
//     element: <HallOfFame />,
//   },
//   {
//     path: '/mentors',
//     element: <Mentors />,
//   },
//   {
//     path: '/add',
//     element: <Add />,
//   },
//   {
//     path: '/mentors/login',
//     element: <Login />,
//   },
//   {
//     path: '/mentors/register',
//     element: <SignUp />,
//   },
//   {
//     path: '/mentors/home',
//     element: <Dashboard />,
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path='/mentors/login' element={<Login />} />
        <Route path='/mentors/home' element={<Dashboard />} />
        <Route path='/mentors/register' element={<SignUp />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/hof' element={<HallOfFame/>} />
        <Route path='/mentors' element={<Mentors />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
