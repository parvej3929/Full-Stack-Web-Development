function UserInfo() {
    let  user = {
        name: "Parvej Saifi",
        city: "Ghaziabad",
        role: "Future software developer"
    }

    document.getElementById('h1').innerText = "Name: "+user.name;
    document.getElementById('h2').innerText = "City: "+user.city;
    document.getElementById('para').innerText = "Target: "+user.role;
}