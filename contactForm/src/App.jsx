import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    name: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!form.name || !form.message){
      alert("All field should be filled!")
      return;
    }

    alert(`Thanks, ${form.name}, Message sent!`) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="name"
      placeholder="enter name"
      value={form.name}
      onChange={handleChange}
      />

      <input type="text" 
      name = "message"
      placeholder="enter message"
      value={form.message}
      onChange={handleChange}
      />

      <button type="submit">Submit</button>

    </form>

  )
}

export default App;