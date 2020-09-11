import React from "react";
import Layout from "./component/Layout";
import ThemeContext, { themes } from "./component/Theme-context";
import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    //theme === themes.red ? setTheme(themes.yellow):setTheme(themes.red);

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Layout/>
        <button onClick={toggleTheme}>Change Theme</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
