import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header'
import Routes from './container/routes/routes' 

class App extends Component{
  render(){
  return (
    <div>
      <Header/>
      <Routes/>
    </div>
  );
  }
}

export default App;
