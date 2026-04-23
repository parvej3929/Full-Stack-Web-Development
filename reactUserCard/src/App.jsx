function App() {
  const users = [
    { id: 1, name: "Ali", city: "Delhi" },
    { id: 2, name: "Parvej", city: "Noida" }
  ];

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <div style={styles.card} key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.city}</p>
        </div>
      ))}
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
    margin: "0px 10px",
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