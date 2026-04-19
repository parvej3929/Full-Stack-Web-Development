import { useState } from "react";

function App() {

  const [name,setName] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Greating App</h1>

        <input type="text"
        style={styles.input}
        value = {name}
        onChange={(e)=> setName(e.target.value)} 
        />
        <h2>{name? `Welcome, ${name}`:"Type your name above"}</h2>
      </div>
    </div>
  )
};

const styles = {
  container:{
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "lightblue"
  },
  card:{
    background: "white",
    borderRadius: "10px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 10px 20px #000",
    padding: "30px"
  },
  input: {
    padding: "30px",
    fontSize: "16px",
    width: "80%",
    marginBottom: "20px"
  }
};

export default App;