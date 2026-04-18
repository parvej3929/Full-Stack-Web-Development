function showUser() {
  let user = {
    name: "Parvej",
    role: "Future Full Stack Developer"
  };

  document.getElementById("name").innerText = user.name;
  document.getElementById("info").innerText = user.role;
}