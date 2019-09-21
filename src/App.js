import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';

const Big = React.lazy(() => import('./big'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to code splitting
      </header>
      <Link to='/big'>To Big Component branch</Link>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Big path='/big' />
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
