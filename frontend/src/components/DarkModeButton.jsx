import React from "react";

import "../styles/DarkModeButton.scss";

function DarkModeButton(props) {
  const { toggleDarkMode, state } = props;
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {state.isDarkMode && (
          <span>
            <i>☀️</i>
          </span>
        )}
        {!state.isDarkMode && (
          <span>
            <i>🌑</i>
          </span>
        )}
      </button>
    </div>
  );
}

export default DarkModeButton;
