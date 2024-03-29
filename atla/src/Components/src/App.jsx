import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";
import NavBar from "./navBar/NavBar";
import CharInfo from "./Components/charInfo/CharInfo";
import AddCharacter from "./Components/AddCharacter/AddCharacter";
import DeleteCharacter from "./Components/DeleteCharacter/DeleteCharacter";
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
            case "/DeleteCharacter/DeleteCharacter":
                component = <DeleteCharacter />
                break;
            case "/charInfo/CharInfo":
                component = <CharInfo />
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

// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// // import PostPage from './components/postpage/PostPage';


// const App = () => {
//   const [apiData, setApiData] = useState([]);
//   const [singleDataPiece, setSingleDataPiece] = useState({});

//   // \/ GET ALL FUNCTIONS BELOW \/ \\
//   // Gets it all and gives it to ya.
//   // axiosGetData should be used inside a useEffect
//   // when being used for a component. Doesn't 
//   // always have to though.
//   const axiosGetAllData = async() => {
//     await axios.get('http://localhost:9000/api')
//     .then(res => {
//       const returnedApiData = res.data;
//       setApiData(returnedApiData);
//     })
//   }
//   // ||   Should be used for the initial get all
//   // \/ upon loading the display screen.
//   useEffect(() => {
//     axiosGetAllData();
//   }, []);
//   // /\ GET ALL FUNCTIONS ABOVE /\ \\

//   // \/ GET ONE FUNCTION BELOW \/ \\
//   const axiosGetOneItem = async(id) => {
//     await axios.get(`http://localhost:9000/getOne/${id}`)
//     .then((res) => setSingleDataPiece(res.data));
//   }
//   // /\ GET ONE FUNCTION ABOVE /\ \\

//   // \/ DELETE FUNCTION BELOW \/ \\
//   // Currently uses id for deletion but can easily be changed,
//   // speak to me if you would like to alter that.
//   const axiosDeleteData = async(id) => {
//     await axios.delete(`http://localhost:9000/deleteItem/${id}`);
//   }
//   // /\ DELETE FUNCTION ABOVE /\ \\

//   // \/ DELETE FUNCTION BELOW \/ \\
//   // You should build up a new version of the object that you'd like to change
//   // along with it's CORRECT ID, the same one it already has in the json file.
//   // Feed that object in as the argument.
//   const axiosUpdateItem = async(updateObject) => {
//     await axios.put(`http://localhost:9000/updateOne`, updateObject)
//   }
//   // /\ UPDATE FUNCTION ABOVE /\ \\


//   // let myCurrentObj = {questions: {"How do you define a function in Python?": "def",
//   // "How do you create a list in Python?": "[]",
//   // "How do you comment a single line in Python?": "#",
//   // "How do you convert an integer to a string in Python?": "str()",
//   // "How do you create a multi-line string in Python?":  "triple-quotes"}};
//   // {Object.keys(myCurrentObj.questions).map(each => <li>Question: {each}</li>)}

//   return (
//     <>
//       <div>
//         <ul>
//           {apiData.map((each) => <li>{each.name}</li>)}
//         </ul>
//         <button onClick={() => axiosGetAllData()} >Render</button>
//         <button onClick={() => axiosDeleteData(5)} >Delete</button>
//         <button onClick={() => axiosGetOneItem(1)} >Single</button>
//         <button onClick={() => axiosUpdateItem({"id": 2,"title": "YEET","year": 1994,"genre": "Drama","director": "Frank Darabont","cover": "ShawshankRedemption.jpg","actors": ["Tim Robbins","Morgan Freeman","Bob Gunton"]})} >Update</button>
//       </div>
//       {/* <PostPage /> */}
//     </> 
//   )
// }

// export default App
