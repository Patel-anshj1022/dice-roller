import React, { useState } from "react";

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const Dice = () => {
  const [value, setValue] = useState(null);

  const rollDice = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    setValue(randomIndex);
  };

  return (
    <div className="dice-container">
      <div className="dice-face">
        {value !== null ? diceFaces[value] : "🎲"}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;
