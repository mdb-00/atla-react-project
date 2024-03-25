import axios from "axios";
import { React, useState } from "react";

export default function CharInfo() {
  const [setSingleDataPiece] = useState({})

    const axiosGetOneItem = async(id) => {
      await axios.get(`http://localhost:9000/getOne/${id}`)
      .then((res) => setSingleDataPiece(res.data.name));
    }
  
    return (
      <div className="charInfo">
          <ul className="charInfo">
              {axiosGetOneItem(character => (
                  <li className="character">
                      {character.name}
                  </li>
              ))}
          </ul>
      </div>

)}