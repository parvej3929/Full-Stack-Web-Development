import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div style={styles.container}>
      <div style={styles.card}>
        <h1>
          {isLoggedIn?"Welcome User":"First Log in"}
        </h1>
        
        <button style ={styles.button} onClick={()=> setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn?"Log out":"Log in"}
        </button>
      </div>
    </div>
  )
};

const styles = {
  container: {
    height: "100vh",
    background: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px"
  },
  card: {
    width: "350px",
    padding: "15px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 10px 20px #000",
    textAlign: "center"
  },
  button:{
    padding: "10px 20px",
    background: "green",
    color: "white",
    borderRadius: "5px",
    border: "none",
    marginTop:"10px",
    cursor: "pointer"
  }
};

export default App;