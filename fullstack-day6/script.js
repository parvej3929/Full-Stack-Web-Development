function checkAge() {
  let age = document.getElementById("age").value;

  if (age >= 18) {
    document.getElementById("result").innerText = "Adult";
  } else {
    document.getElementById("result").innerText = "Minor";
  }
}