import axios from "axios";
import { React, useEffect, useState } from "react";

export default function CharacterCards() {
  const [apiData, setApiData] = useState([]);
  const axiosGetAllData = async () => {
    await axios.get("http://localhost:9000/api").then((res) => {
      const returnedApiData = res.data;
      console.log(returnedApiData);
      setApiData(returnedApiData);
    });
  };

  useEffect(() => {
    axiosGetAllData();
  }, []);

  return (
    <div className="cardsContainer">
      <ul className="allCards">
        {apiData.map((character) => (
          <li className="character-card">
            <img
              className="cardImg"
              src={character.photoUrl}
              alt={character.name}
            />
            <button className="btn">{character.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
