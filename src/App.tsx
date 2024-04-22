import React from 'react';
import './App.css';
import Home from './Page';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import PanoramaViewer from './components/viewer';
import Error  from './components/Error';
function App() {
  return (
    <Router>
      <Routes>
        <Route index Component={Home} />
        <Route path='/image/:id' Component={PanoramaViewer} /> 
        <Route path='/*' Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
