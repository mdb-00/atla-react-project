import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Home/Home";
import NavBar from "./navBar/NavBar";
import AddCharacter from "./Components/AddCharacter/AddCharacter";
import CharacterCards from "./Components/CharacterCards/CharacterCards";

    function App() {
        console.log(window.location)

        let component
        switch (window.location.pathname) {
            case "/":
                component = <MainContent />
                break;
            case "/CharacterCards/CharacterCards":
                component = <CharacterCards />
                break;
            case "/AddCharacter/AddCharacter":
                component = <AddCharacter />
                break;
        }

        return (
        
          <div className="container">
              <Header />
              <NavBar /> 
              {component}
              {/* <MainContent /> */}
              <Footer />
          </div>
      )
  }
  
  export default App;
