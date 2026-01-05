import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Blog/Home";
import About from "./Pages/Blog/About";
import PostDetails from "./Pages/Blog/PostDetails";
import Footer from "./Component/Footer";
import Contact from "./Pages/Blog/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:title" element={<PostDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
