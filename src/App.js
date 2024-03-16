import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import EthicsAndPolicies from "./pages/EthicsAndPolicies";
import HomePage from "./pages/HomePage";
import Guidelines from "./pages/Guidelines";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ourteam from "./pages/our-team";
import Archive from "./pages/Archive";
import CallForPapers from "./pages/CallForPapers";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer";
import Developers from "./pages/Developers";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guideline" element={<Guidelines />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/editorial-board" element={<Ourteam />} />
            <Route path="/ethics-policies" element={<EthicsAndPolicies />} />
            <Route path="/archives" element={<Archive />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
