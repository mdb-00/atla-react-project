import axios from "axios";
import { React, useEffect, useState } from "react";
import DeleteCharacter from "../DeleteCharacter/DeleteCharacter";
import UpdateCharacter from "../UpdateCharacter/UpdateCharacter";

export default function CharacterCards() {
  // const [apiData, setApiData] = useState([]);
  // const axiosGetAllData = async () => {
  //   await axios.get("http://localhost:9000/api").then((res) => {
  //     const returnedApiData = res.data;
  //     console.log(returnedApiData);
  //     setApiData(returnedApiData);
  //   });
  // };

  // const charInfoBtn = () => {
  //   console.log("Button Clicked!")
  // }

  const [apiData, setApiData] = useState([]);
    const axiosGetAllData = async() => {
        await axios.get('http://localhost:9000/api')
        .then(res => {
          const returnedApiData = res.data;
          console.log(returnedApiData);
          setApiData(returnedApiData);
        })
      }
    
    useEffect(() => {
        axiosGetAllData();
      }, []);

      return (
        <div className="cards-container">
            <ul className="allCards">
                {apiData.map(character => (
                    <li className="character-card">
                      <div className="card-main">
                      <img className="card-imgs" src={character.photoUrl} alt={character.name} />
                        {/* <button className="btn" onClick={ () => <CharInfo character={character}/>}>
                          {character.name}
                        </button> */}
                        <p className="character-name">{character.name}</p>
                      </div>
                        <p>Affiliation: {character.affiliation}</p>
                        <p>Allies: {character.allies}</p>
                        <p>Enemies: {character.enemies}</p>
                        <div className="btn-container">
                          <div className="card-btns">
                            <UpdateCharacter character={character}/>
                            <DeleteCharacter character={character.id} />
                          </div>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
      )

}
