export default function DisplayCharacter({character}) {
    
    function handleClick() {
        
        console.log(character);

        
        
    }

    return (
       <button onClick={handleClick}>
            {character.name}
       </button>
    )
}