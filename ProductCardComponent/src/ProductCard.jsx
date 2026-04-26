function ProductCard({ title, price, category }) {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>💰 Price: ₹{price}</p>
      <p>📦 {category}</p>
      <button style={styles.btn}>Buy Now</button>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    width: "260px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  },

  btn: {
    marginTop: "10px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    background: "green",
    color: "white",
    cursor: "pointer"
  }
};

export default ProductCard;