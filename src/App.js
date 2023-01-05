import './App.css';
import AddPolicy from './components/AddPolicy'
import ListPolicies from './components/ListPolicies';
import UpdatePolicy from './components/UpdatePolicy';

import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <div className='container'>
        <NavBar />
      </div>
      <div className='container mt-2'>
      <Routes>
       
          <Route  path="/" element = {<AddPolicy />} />
          <Route  path="/list" element = {<ListPolicies />} />
          <Route  path="/update/:id" element = {<UpdatePolicy />} />


        
      </Routes>
      </div>
    </Router >
  );
}

export default App;
