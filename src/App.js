import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import routes from './routes'

class App extends Component {

  render() {
   
    return (
      <div className="App">
        <Header />
      {routes}
        
        
        {/** NOTE props must be passed through a component */}
         
  
        
        
      </div>
    );
  }
}

export default App;
