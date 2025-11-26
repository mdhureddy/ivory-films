import React from "react";
import { BrowserRouter, Routes, Route, useParams, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Photography from "./pages/Photography";
import Films from "./pages/Films";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Editorial from "./pages/Editorial";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import LandingPage from "./pages/LandingPage.jsx";


const ErrorRoutingHandler=()=>{
  const pathUrl=useLocation();

  const path=pathUrl.pathname==='/' || pathUrl.pathname==='/photography' || pathUrl.pathname==='/films' || pathUrl.pathname==='/blogs' || pathUrl.pathname==='/contact' || pathUrl.pathname==='/faqs' || pathUrl.pathname==='/editorial'

  return <>
    {path && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/films" element={<Films />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    {path && <Footer />}
  </>
}

const ErrorPage=()=>{
  return <>
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 text-center error-page"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textShadow: "0 0 10px rgba(0,0,0,0.6)",
      }}
    >
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4">
        It looks like the page you’re trying to reach doesn’t exist.  
        Maybe it was moved or deleted — let’s get you back to the gallery.
      </p>

      <Link
        to="/"
        className="btn btn-light btn-lg px-4 py-2 rounded-pill shadow-sm hover-scale"
        style={{
          transition: "all 0.3s ease",
        }}
      >
        Back to Home
      </Link>
    </div>
  </>
}
function App() {
  return (
    <BrowserRouter>
      <ErrorRoutingHandler/>
    </BrowserRouter>
  );
}

export default App;
