import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    name : "",
    email: ""
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: [e.target.value]
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!form.name || !form.email) {
      alert("Please fill  all fields")
      return;
    }

    alert("Welcome Back!")
  }

   return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="enter name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="enter email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
