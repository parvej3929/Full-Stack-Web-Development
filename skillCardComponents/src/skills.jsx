function GetSkills({skill,level}){

    return (
        <div style={styles.card}>
            <h2>{skill}</h2>
            <p>{level}</p>
        </div>
    )
}

const styles = {
    card:{
        width: "350px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 10px 20px #000",
        textAlign: "center",
        background: "white"
    }
}
export default GetSkills;
