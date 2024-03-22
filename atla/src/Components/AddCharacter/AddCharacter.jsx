export default function AddCharacter() {

    const axiosPostData = (newObject) => {
        axios.post(`http://localhost:9000/addItem`, newObject)
        .then(response => {
          console.log(response);
        });
      };
      
}