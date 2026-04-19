import { useState } from "react";

function App() {

  const [liked,setLiked] = useState(false);
  const [likes,setLikes] = useState(0);

  const handleLikes = ()=>{

    if(liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (

    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLikes}>
        {liked? "Unlike 💔": "like ❤️"}
      </button>
    </div>
  )
}

export default App;