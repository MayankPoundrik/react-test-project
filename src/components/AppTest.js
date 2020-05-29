import React, { useState } from "react";

export default function Button() {

  const [buttonText, setButtonText] = useState("Click me, please");

  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }

  return <button onClick={handleClick}>{buttonText}</button>;
}

// class based components - >stateful -> side effects->data manipulation->complex activiteies
// functional comp - >stateless ->presentional

// functional with hooks === clas based turned into functional --> useEffects()
