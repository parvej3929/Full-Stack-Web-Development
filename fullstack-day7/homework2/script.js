function Users(){
    let user = ["John", "Kaif", "Faisal", "Mannan"];
    let result = user[0];
    
    for(let i = 1; i<user.length; i++){
        result += ", "+ user[i];
    }

    document.getElementById('para').innerText = result;
}