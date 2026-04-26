import UserCard from "./UserCard";

function App() {
  return (
    <div style={styles.container}>
      <UserCard
        name="Parvej Saifi"
        city="Noida"
        role="Full Stack Learner"
      />

      <UserCard
        name="Ali Khan"
        city="Delhi"
        role="UI Designer"
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