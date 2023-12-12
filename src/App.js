
import './App.css';
import EthicsAndPolicies from './pages/EthicsAndPolicies';
import HomePage from './pages/HomePage';
import Guidelines from './pages/Guidelines';
import ContactUs from './pages/ContactUs';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ourteam from './pages/our-team';
function App() {
  return (
    
    <div className="App">
        
        <BrowserRouter>
        <Navbar/>
            <Routes> 
                <Route path="" element={<HomePage/>}/>    
                <Route path="guideline" element={<Guidelines/>}/>    
                <Route path="cfa" element={<EthicsAndPolicies/>}/>    
                <Route path="editorial-board" element={<Ourteam/>}/>    
                <Route path="ethics-policies" element={<EthicsAndPolicies/>}/>    
                <Route path="archives" element={<EthicsAndPolicies/>}/>    
                <Route path="contact-us" element={<ContactUs/>}/>    
            </Routes>
        </BrowserRouter>
        <ContactUs/>
    </div>
  );
}

export default App;
