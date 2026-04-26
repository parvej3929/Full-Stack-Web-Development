function UserCard({ name, city, role }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>📍 {city}</p>
      <p>💼 {role}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  }
};

export default UserCard;