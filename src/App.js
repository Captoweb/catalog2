import logo from './logo.svg';
import './App.css';
import { FaList } from 'react-icons/fa';
import Catalog from './Catalog/Catalog';
import CatalogId from './Catalog/CatalogId';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 



function App() {
 
  return (
    <div className="container">
        {/* <FaList style={{ color: '#fc8507', fontSize: '30px', marginLeft: '10px'}} /> */}
        
        <Router>
        {/* <Navigation /> */}

        <Routes>
          
          <Route exact path="/" element={<Catalog/>} />
          <Route path="/:tovarList" element={<CatalogId/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
