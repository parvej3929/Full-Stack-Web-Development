function checkSkills() {
    let skills = ['html', 'css', 'java', 'reactjs'];
    let result = skills[0];

    for (let i = 1; i < skills.length; i++) {
        result +=  ", "+skills[i];
    }

    document.getElementById('para').innerText = result;
}