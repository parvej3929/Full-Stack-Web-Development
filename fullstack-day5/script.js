function showName() {
  let userName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let result = document.getElementById("result");
  result.innerText = "Hello! " + userName +", Your email id is: "+email;
  result.style.color = "blue";
  let heading = document.getElementById("heading");
  heading.innerText = "Enter the description:";
}

function liveText(){
  let liveText = document.getElementById("inputText").value;
  document.getElementById("para").innerText = liveText;
}