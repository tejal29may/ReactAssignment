import Home from "./Screens/Home";
import AboutUs from "./Screens/AboutUs";
import Contact from "./Screens/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Nav/> */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
