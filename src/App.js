
import './App.css';
import EthicsAndPolicies from './pages/EthicsAndPolicies';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ourteam from './pages/our-team';
function App() {
  return (
    
    <div className="App">
        
        <BrowserRouter>
        <Navbar/>
            <Routes> 
                <Route path="" element={<EthicsAndPolicies/>}/>    
                <Route path="guideline" element={<EthicsAndPolicies/>}/>    
                <Route path="cfa" element={<EthicsAndPolicies/>}/>    
                <Route path="editorial-board" element={<Ourteam/>}/>    
                <Route path="ethics-policies" element={<EthicsAndPolicies/>}/>    
                <Route path="contact-us" element={<EthicsAndPolicies/>}/>    
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
