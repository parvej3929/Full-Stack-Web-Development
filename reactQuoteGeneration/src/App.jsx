import {useState, useEffect} from 'react';

function App(){

  const [quote, setQuote] = useState("")

  const getQuote = ()=>{
    fetch("https://dummyjson.com/quotes/random")
      .then(res => res.json())
      .then(data => setQuote(data.quote));
  }

  useEffect(() => {
    getQuote();
  },[]);

  

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Quote Generation App</h1>
        <h3>{quote|| "Loading...."}</h3>
        <button style={styles.button}
        onClick={getQuote}>Click</button>
      </div>
    </div>
    
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:"white",
    padding: "20px",
    borderRadius: "5px",
    textSize: "16px",
    width: "400px",    
    justifyContent:"space-between",
    boxShadow: "0 10px 20px #000"
  },
  button:{
    padding: "10px 15px",
    color: "white",
    background: "green",
    borderRadius:"5px",
    border: "none",
    cursor: "pointer",

  }
}
export default App;