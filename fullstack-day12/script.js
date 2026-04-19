document.getElementById('btn').addEventListener("click", async ()=>{

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data =  await response.json();
    console.log(data)
    document.getElementById('para').innerText = `User name is ${data.name} and email is ${data.email} `
})