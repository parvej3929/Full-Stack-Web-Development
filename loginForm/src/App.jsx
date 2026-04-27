import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!form.email || !form.password){
      alert("All fields should be filled!")
      return;
    }

    if(form.password.length<6) {
      alert("password should be 6 character or above!")
      return;
    }

    alert("Succesfully Login!")
  }

  return (

    <form onSubmit={handleSubmit}>
      
      <input type="text" 
      name = "email"
      placeholder = "Enter email"
      value = {form.email}
      onChange={handleChange}
       />

       <input type="password"
       name="password"
       placeholder="Enter password"
       value={form.password}
       onChange={handleChange}
       />

       <button type="submit">Submit</button>
    </form>
  )
};

export default App;