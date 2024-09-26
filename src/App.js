import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import ProductsData from "./Pages/Products/ProductsData";

function App() {

  const title = "Floor Cleaning Machine On Rent | Sweeping Machines Rental - Kruger Vac"
  const descriptions = "We are one of leading suppliers of Industrial Floor Cleaning and Scrubbing machines on Rent."

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/krugervac" exact element={<Home title={title} descriptions={descriptions} />} />
          <Route path="/krugervac/about" exact element={<About title={title} descriptions={descriptions} />} />
          {ProductsData.map((item) => (
            <Route key={item.id} path={item.tag} exact element={<Products title={title} descriptions={descriptions} item={item} key={item.id} />} />
          ))}
          <Route path="/krugervac/contact-us" exact element={<Contact title={title} descriptions={descriptions} />} />
          <Route path="/krugervac/disclaimer" exact element={<Disclaimer title={title} descriptions={descriptions} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
