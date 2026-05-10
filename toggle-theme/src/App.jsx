import React from 'react'
import { createContext, useState } from 'react'
import Home from './Home'

export const themeContext = createContext();
const App = () => {
  
  const [theme, setTheme] = useState("light");
  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <Home />
    </themeContext.Provider>
  )
}
export default App;