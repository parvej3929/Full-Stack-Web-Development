import GetSkills from "./skills";

function App(){

  return(
    <div style={styles.container}>
      <GetSkills skill = "HTML" level = "Advanced"/>
      <GetSkills skill = "CSS" level = "Intermediate"/>
      <GetSkills skill = "javascript" level = "Intermediate"/>
      <GetSkills skill = "react" level = "Beginner"/>
    </div>
  )
};

const styles = {
  container : {
    minHeight: "100vh",
    background: "lightblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "20px",
    gap: "20px"
  }
};

export default App;