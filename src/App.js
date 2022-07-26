import React  from 'react';
import Header from './header';
import MainContent from "./mainContent"
import './App.css';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
