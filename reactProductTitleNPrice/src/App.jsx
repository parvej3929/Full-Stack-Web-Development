import { useEffect, useState } from "react";

function App() {

  const [product, setProduct] = useState(null)

  useEffect(()=>{
    fetch("https://dummyjson.com/products/1")
    .then(res=>res.json())
    .then(data=> setProduct(data))
  },[])

  return (

    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Product Info</h1>

        {
          product?(
          <>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
          </>
          ):
          (
            <p>Loading...</p>
          )
        }
      </div>
    </div>
  )
}

const styles = {
  container:{
    height: "100vh",
    background: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems : "center",
  },
  card:{
    width: "350px",
    padding: "20px",
    background: "white ",
    borderRadius : "10px",
    boxShadow: "0px 10px 20px #000",
    textAlign: "center"
  }
};

export default App;