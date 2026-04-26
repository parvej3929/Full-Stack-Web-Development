import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={styles.container}>
      <ProductCard
        title="Laptop"
        price="50000"
        category="Electronics"
      />

      <ProductCard
        title="Phone"
        price="25000"
        category="Mobiles"
      />

      <ProductCard
        title="Headphones"
        price="3000"
        category="Accessories"
      />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "lightblue",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "20px"
  }
};

export default App;