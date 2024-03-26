// import { useState } from "react";
// import styles from "../App.css";
// import AddCharacter from "../Components/AddCharacter/AddCharacter";
// import DeleteCharacter from "../Components/DeleteCharacter/DeleteCharacter";
// import CharacterCards from "../Components/CharacterCards/CharacterCards";

function NavBar() {

    return <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li><a href="/CharacterCards/CharacterCards">Character List</a></li>
            <li><a href="/AddCharacter/AddCharacter">Add Character</a></li>
            <li><a href="/DeleteCharacter/DeleteCharacter">Delete Character</a></li>
            <li><a href="/charInfo/CharInfo">Character Info</a></li>
        </ul>
    </nav>

//     const[isActive, setIsActive] = useState(false);
//     const toggleActiveClass = () => {
//         setIsActive(!isActive);
//     };
//     const removeActive = () => {
//         setIsActive(false)
//     }

//     return (
//         <div className="App">
//       <header className="App-header">
//         <nav className={`${styles.navbar}`}>
//           {/* logo */}
//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
//             <li onClick={removeActive}>
//               <a href='/' className={`${styles.navLink}`}>Home</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href='AddCharacter' className={`${styles.navLink}`}>Add Character</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href='DeleteCharacter' className={`${styles.navLink}`}>Delete Character</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href='CharacterCards' className={`${styles.navLink}`}>Characters</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
}
    

 
export default NavBar;
