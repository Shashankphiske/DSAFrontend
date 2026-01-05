import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './components/Home.jsx';
import Navbar from "./components/Navbar.jsx";
import Layout from './components/Layout.jsx';
import Features from "./components/Features.jsx"
import About from "./components/About.jsx"
import Algorithms from './components/Algorithms.jsx';
import FAQ from './components/FAQ.jsx';
import Error from "./components/Error.jsx"

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      { index : true, element : <Home /> },
      { path : "features", element : <Features /> },
      { path : "about", element : <About /> },
      { path : "algo", element : <Algorithms /> },
      { path : "faq", element : <FAQ /> },
      { path : "*", element : <Error /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
