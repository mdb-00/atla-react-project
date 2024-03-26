import axios from "axios";

export default function DeleteCharacter({character}) {


    function handleDelete() {
        const axiosDeleteData = async(id) => {
            await axios.delete(`http://localhost:9000/deleteItem/${id}`);
          }
          alert(`${character.name} deleted! Refresh page!`);
          axiosDeleteData(character.id);
    }
   
    return (
        <button className="deleteBtn" onClick={handleDelete}>
            {<img src="../../images/trash-can.png" alt="delete"/>}
        </button>
    )
}