import React, {useState} from "react";
import axios from "axios";

export default function UpdateCharacter({character}) {
    const [formActive, setFormActive ] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        
        const updatedCharacterObj = {
            "id": character.id,
            "photoUrl": character.photoUrl,
            "allies": [event.target.elements.allies.value],
            "enemies" :[event.target.elements.enemies.value],
            "name": event.target.elements.name.value,
            "affiliation": event.target.elements.affiliation.value,
        }
  
        const axiosUpdateItem = async(updateObject) => {
            await axios.put(`http://localhost:9000/updateOne`, updateObject)
          }

        axiosUpdateItem(updatedCharacterObj);
        console.log(updatedCharacterObj);
        
    }

    let content = formActive === true ? 
    <form onSubmit={handleSubmit}>
          <label>
              Name:
              <input defaultValue={character.name} type="text" name="name"/>
          </label>
          <label>
              Affiliation:
              <input defaultValue={character.affiliation === undefined ? 'N/A' : character.affiliation} type="text" name="affiliation"/>
          </label>
          <label>
              Allies:
              <input defaultValue={character.allies === undefined ? 'N/A' : character.allies} type="text" name="allies"/>
          </label>
          <label>
              Enemies:
              <input defaultValue={character.enemies === undefined || character.enemies.length === 0 ? 'N/A' : character.enemies} type="text" name="enemies"/>
          </label>
          <input type="submit" value="Submit"/>
      </form>
      : null;

    return(
        <>
        <button onClick={() => setFormActive(true)}>Update</button>
        <div>
            {content}
        </div>
        </> 
    )
}