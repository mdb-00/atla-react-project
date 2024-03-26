import axios from "axios";

export default function DeleteCharacter({character}) {

    function handleClick() {
        const axiosDeleteData = async(id) => {
            await axios.delete(`http://localhost:9000/deleteItem/${id}`);
          }

          console.log(character);
          axiosDeleteData(character);
    }
   
    return (
        <button onClick={handleClick}>
            {<img src="../../images/trash-can.png"/>}
        </button>
    )
}