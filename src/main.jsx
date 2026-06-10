import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TeamSection from './components/TeamSection/TeamSection.jsx' // Import your team carousel
import Home from './pages/Home.jsx'
import ServicePage from './pages/ServicesPage.jsx'
import ServiceDetailsPage from './pages/ServicesDetailsPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import PortfolioDetailsPage from './pages/PortfolioDetailsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/services",
        element: <ServicePage/>, 
      },
      {
        path:"/serviceDetails",
        element:<ServiceDetailsPage/>,
      },
      {
        path:"/AboutUs",
        element:<AboutUsPage/>,
      },
      {
        path:"/Portfolio",
        element:<PortfolioPage/>,
      },
      {
        path:"/PortfolioDetailsPage",
        element:<PortfolioDetailsPage/>,
      },
      {
        path:"/Blog",
        element:<BlogPage/>,
      },
      {
        path:"/ContactUs",
        element:<ContactUsPage/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)