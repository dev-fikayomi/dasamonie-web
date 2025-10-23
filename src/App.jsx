import { useEffect } from "react"; // <-- add this
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "@fontsource/nunito"; // defaults to weight 400
import "@fontsource/nunito/700.css"; // optional: specific weight
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  // Initialize AOS once when the app loads
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-nunito">
      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      <ScrollToTop />
    </div>
  );
}
