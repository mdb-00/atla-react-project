export default function CharInfo({character}) {
    return(
        <div className="character-info">
            <img src={character.photoUrl} alt={character.name} />
            <h1 className="character-name">{character.name}</h1>
            <p>Affiliation: {character.affiliation}</p>
            <p>Allies: {character.allies}</p>
            <p>Enemies: {character.enemies}</p>
        </div>
    )
}
