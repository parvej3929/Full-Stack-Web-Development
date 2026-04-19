import { useState } from "react";

function App() {

  const [show,setShow] = useState(false);

  const toggle =()=>{
    setShow(!show);
  }

  return(

    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Hide / Show Text</h2>

         {show && (
          <p>
            React makes UI dynamic and powerful 🚀
          </p>
          )}

          <button onClick={toggle}>
            {show? "Hide Text":"Show Text"}
          </button>
      </div>
    </div>
  )
};

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
    color: "#000",
    borderRadius: "15px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  }
};

export default App;