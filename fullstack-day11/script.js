let user = {
    name : "Parvej Saifi",
    skill: "Full Stack"
}

document.getElementById('btn').addEventListener("click",()=>{

    const {name, skill} = user;
    document.getElementById('heading').innerText = "The Info is: "
    document.getElementById('para').innerText = `The user name is ${name} and he's learning ${skill}`;
})
