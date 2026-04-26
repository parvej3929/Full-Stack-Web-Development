function App() {

  const products = ["Smartphone","Laptop","Acessorios"];

  return (
    <div style={styles.container}>
      
      {products.length===0?(
        <p>Products not found</p>
      ):(
        products.map((item,index) =>(
          <div style={styles.card}>
            <h2>Product name</h2>
            <p key = {index}>{item}</p>
          </div>  
        ))
      )
      }
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "lightblue",
    gap: "20px"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center"
  }
};

export default App;