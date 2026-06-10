import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import "./App.css"

export default function App() {
  const { pathname } = useLocation();

  // Reset scroll to top-left whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopBtn />
    </>
  );
}