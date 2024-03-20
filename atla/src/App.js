import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";

    function App() {
      return (
        
          <div className="container">
              <Header />
              <MainContent />
              <Footer />
          </div>
      )
  }
  
  export default App;
