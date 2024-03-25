import axios from "axios";
import { React, useEffect, useState } from "react";
import DeleteCharacter from "../DeleteCharacter/DeleteCharacter";

export default function CharacterCards(){

  const charInfoBtn = () => {
    console.log("Button Clicked!")
  }

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
                        <img src={character.photoUrl} alt={character.name} />
                        <button className="btn" onClick={charInfoBtn}>
                          {character.name}
                        </button>
                        <DeleteCharacter character={character.id} />
                    </li>
                ))}
            </ul>
        </div>
      )

}