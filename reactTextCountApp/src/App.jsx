import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Live Character Counter</h1>

        <textarea
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />

        <h2>Characters: {text.length}</h2>
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
    width: "400px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  },

  textarea: {
    width: "90%",
    height: "120px",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    resize: "none"
  }
};

export default App;