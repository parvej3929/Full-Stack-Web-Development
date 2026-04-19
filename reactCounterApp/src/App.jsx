import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Counter App</h1>

        <h2>{count}</h2>

        <div style={styles.buttons}>
          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrease
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "lightblue"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  },

  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },
  
};

export default App;
