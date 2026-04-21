import {useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users/1")
  //   .then(res=> res.json())
  //   .then(data=> setUser(data))

  // },[])

  const getUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res=> res.json())
    .then(data=> setUser(data))
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>User Data</h1>
        {
          user? (
          <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          </>
        ) :
        (
          <p>Click to get user data </p>
        )
        }
        <button style ={styles.button}onClick={getUser}>
          Click here
        </button>
      </div>
    </div>
  )
}

const styles = {
  container:{
    height: "100vh",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    background: "lightblue"
  },
  card:{
    background: "white",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0px 10px 20px #000"
  },
  button:{
    background: "green ",
    color: "White",
    padding: "5px 10px",
    border: "10px solid green",
    borderRadius: "5px",
    boxShadow: "0px 7px 20px #000",
    cursor: "pointer"
  }
}

export default App;