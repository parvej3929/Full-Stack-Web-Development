import {useState} from 'react';

function App() {

  const [show, setShow] = useState(false);

  return (

    <div style={styles.container}>
      <div style={styles.card}>
        {show && (
          <p>You will become best Developer!</p>
        )}

        <button style={styles.button} onClick={() => setShow(!show)}>
          {show? "Hide Secret": "Show Secret"}
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "lightblue",
    display: "flex",
    alignItems: "center",
    justifyContent : "center",
    flexWrap : "wrap",
    gap : "20px"
  },
  card: {
    width: "350px",
    padding : "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 10px 20px #000",
    textAlign: "center",
    alignItems: "center",
    
  },
  button : {
    padding: "5px 10px ",
    borderRadius: "5px",
    background: "green",
    color: "white",
    border: "none",
    marginTop : "10px"
  }
};

export default App;

