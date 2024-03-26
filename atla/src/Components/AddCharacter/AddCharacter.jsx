import axios from "axios";

export default function AddCharacter() {

  function handleSubmit(event) {
      event.preventDefault();
      
      const newCharacterObject = {
          "allies": [event.target.elements.allies.value],
          "enemies" :[event.target.elements.enemies.value],
          "photoUrl": "https://i1.sndcdn.com/avatars-PkAmzSOLCdxklQgS-AokumA-t500x500.jpg",
          "name": event.target.elements.name.value,
          "affiliation": event.target.elements.affiliation.value,
      }

      const axiosPostData = (newObject) => {
        axios.post(`http://localhost:9000/addItem`, newObject)
        .then(response => {
          console.log(response);
        });
      };

      axiosPostData(newCharacterObject);     
      
  }

  return (
      <form className="addForm" onSubmit={handleSubmit}>
          <label>
              Name:
              <input type="text" name="name"/>
          </label>
          <label>
              Affiliation:  
              <input type="text" name="affiliation"/>
          </label>
          <label>
              Allies:
              <input type="text" name="allies"/>
          </label>
          <label>
              Enemies:
              <input type="text" name="enemies"/>
          </label>
          <input className="submit-btns" type="submit" value="Submit"/>
      </form>
  )
}   