import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.css"; // CSS Modules
import styled from "styled-components"; // Styled-components
// style Component
const StyledButton = styled.button`
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
  }
`;

function App() {
  const inlineStyle = {
    color: "white",
    backgroundColor: "teal",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="container">
        {/* Inline styling */}
        <div style={inlineStyle}>This is inline styled!</div>

        {/* CSS Modules */}
        <div className={styles.moduleBox}>This is styled with CSS Modules!</div>

        {/* Styled-components */}
        <StyledButton>Styled Components Button</StyledButton>
      </div>
    </>
  );
}

export default App;
