import axios from "axios";
import { React, useEffect, useState } from "react";
// async function getJson() {
//     const response = await fetch('atla.json')
//     const atlaData = await response.json();
//     return atlaData;
// }

// export default function DisplayCharacters() {
//     const atlaData = getJson();
//     console.log(atlaData.name);
//     return (
//         <div className="card-container">
//             <div className="rows">
//                 {atlaData.map(character => character)}
//             </div>
//         </div>
//     )
// }



export default function DisplayCharacters(){
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
        <div>
            <ul>
                {apiData.map(character => (
                    <img src={character.photoUrl} alt={character.name} />
                ))}
            </ul>
        </div>
      )

}
  

//   const axiosPostData = (newObject) => {
//     axios.post(`http://localhost:9000/addItem`, newObject)
//     .then(response => {
//       console.log(response);
//     });
//   };

  