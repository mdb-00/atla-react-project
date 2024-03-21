import DisplayCharacters from "../Characters/Characters";

function MainContent() {
    return (
      <main className= "mainContent">
        {/* <img src="../../images/wan shi tong.png"></img> */}
        Long ago, the 4 nations lived together in harmony.
        But then everything changed when the fire nation
        attacked. Only the Avatar, master of all elements
        could stop them. But when the world needed him most,
        he vanished.
        <DisplayCharacters />
      </main>
    );
  }
  
  export default MainContent;