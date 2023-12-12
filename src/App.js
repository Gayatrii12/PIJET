
import './App.css';
import EthicsAndPolicies from './pages/EthicsAndPolicies';
import HomePage from './pages/HomePage';
import Guidelines from './pages/Guidelines';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <EthicsAndPolicies/>
    </div>
  );
}

export default App;
