import {useContext } from 'react'
import {themeContext} from './App'

const Home = () => {
    const {theme, setTheme} = useContext(themeContext);

    const toggleTheme = () =>{
        setTheme(theme==="dark"?"light":"dark")
    }

  return (
    <div style={styles.container(theme)}>
        <div style={styles.card}>
            <h1>{theme.toUpperCase()} MODE</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    </div>
  )
}

const styles = {
    container: (theme) =>({
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme ==="dark"? "#111": "#fff",
        color: theme==="dark"? "white": "black"
    }),
    card: {

        background: "lightBlue",
        width: "400px",
        borderRadius: "5px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection :"column",
        padding:"20px"


    }
}
export default Home