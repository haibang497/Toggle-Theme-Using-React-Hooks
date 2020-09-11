import React, { useContext } from "react";
import ThemeContext from "./Theme-context";

const Layout = () => {
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <p>Change background</p>
    </div>
  );
};

export default Layout;
