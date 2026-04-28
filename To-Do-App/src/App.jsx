import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const addTask = () =>{

    if(task.trim()==="") return;
    setTodo([...todo, task]);
    setTask("");
  }

  const deleteTask = (index) =>{
    const newTodo = todo.filter((_,i) => i!= index )
    setTodo(newTodo);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>To-Do App </h1>

        <input type="text" 
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
        />

        <button style={styles.button} onClick={addTask}>Add</button>

        {todo.length ===0?(
          <p>No tasks yet!</p>
        ):(
          todo.map((task,index) =>(
            <div style={styles.innerCard} key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)}> Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent : "center",
    background: "lightblue"
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    padding : "20px"
  },
  button: {
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    padding : "5px 10px"
  }
}

export default App;