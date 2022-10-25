import { createContext, useState, useRef } from "react";

export const GlobalSlider = createContext({});

export default function GlobalSliderProvider({ children }) {
  const [moveCounterSlider, setmoveCounterSlider] = useState(0);
  const [animationOnClick, setAnimationOnClick] = useState("");
  const objListReferences = {
    listScrolling: useRef(null),
    listSliders: useRef(null),
  };

  return (
    <GlobalSlider.Provider
      value={{
        arrCounter: [moveCounterSlider, setmoveCounterSlider],
        objListReferences,
        arrAnimation: [animationOnClick, setAnimationOnClick],
      }}>
      {children}
    </GlobalSlider.Provider>
  );
}
