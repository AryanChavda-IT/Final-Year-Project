// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Home from './MyComponents/Home/Home';
// import 'bootstrap/dist/js/bootstrap.bundle.min';




// function App() {
//   return (
//     <Home/>
//   );
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./MyComponents/Navbar/Navbar";
import Home from "./MyComponents/Home/Home";
import Gallery from "./MyComponents/Gallery/Gallery";
import Amenities from "./MyComponents/Amenities/Amenities";
import Packages from "./MyComponents/Packages/Packages";

const App = () => {
  return (
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/amenities" element={<Amenities />} />
    <Route path="/packages" element={<Packages />} />
  </Routes>
</Router>
  );
};

export default App;
