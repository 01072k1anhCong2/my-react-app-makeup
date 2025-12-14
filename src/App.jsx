import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./App.css";
import {  HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {

  window.onscroll = () => {
    const btn = document.getElementById("topBtn");
    if (!btn) return;

    if (window.scrollY > 120) {
      btn.classList.add("show-btn");
    } else {
      btn.classList.remove("show-btn");
    }
  };

  return (
    <HashRouter>
    {/* <BrowserRouter basename="/my-react-app-makeup"> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* Nút cuộn lên */}
      <div id="topBtn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <ArrowUpwardIcon />
      </div>

    {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
