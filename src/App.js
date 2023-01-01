import './App.css';
import AddPolicy from './components/AddPolicy'
import ListPolicies from './components/ListPolicies';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className='container'>
        <NavBar />
      </div>
      <Switch>
        <div className='container mt-2'>
          <Route exact path="/">
            <AddPolicy />
          </Route>

          <Route exact path="/add">
            <ListPolicies />
          </Route>
        </div>
      </Switch>
    </Router >
  );
}

export default App;
