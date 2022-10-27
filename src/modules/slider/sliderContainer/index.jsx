import { useContext, useEffect } from "react";

import { ListScrolling } from "./listScrolling";
import { ButtonSlider } from "./buttonSlider";
import { GlobalSlider } from "../../../context/GlobalSlider";

import { increasingAnimationCounter } from "../../../assets/js/increasingAnimationCounter";
import { decreasingAnimationCounter } from "../../../assets/js/decreasingAnimationCounter";

import { gettingRightObjectPostion } from "../../../assets/js/gettingRightObjectPostion";
import { calculatingPreviusValueToLimit } from "../../../assets/js/calculatingPreviusValueToLimit";
import { insertingAnimationIntoBody } from "../../../assets/js/insertingAnimationIntoBody";

let objMove = {
    lastMove: 0,
    currentMove: 0,
  },
  zeroValue;

const SliderContainer = ({
  circlesVisibility,
  timelapseVisibility,
  buttonsVisibility,
  itemsGrabbingCursorVisibility,

  buttonsClasses,
  sliderClasses,
  circlesClasses,

  buttonsJSX,
  itemsJSX,

  timeLapseDuration,
}) => {
  const objGlobal = useContext(GlobalSlider);
  const { listScrolling, listSliders } = objGlobal.objListReferences;
  const [moveCounterSlider, setmoveCounterSlider] = objGlobal.arrCounter;
  const [animationOnClick, setAnimationOnClick] = objGlobal.arrAnimation;
  const { left, right } = buttonsJSX;

  const objMoviment = {
    moveRight: (zeroValue) => {
      let objListSliderPosition = gettingRightObjectPostion(
        listScrolling.current,
        listSliders.current
      );

      let newCurrentPosition = calculatingPreviusValueToLimit(
        objListSliderPosition
      );

      objListSliderPosition.currentPostion = newCurrentPosition;

      let increasedValueCounter = increasingAnimationCounter(
        moveCounterSlider,
        objListSliderPosition
      );

      increasedValueCounter =
        zeroValue != undefined ? zeroValue : increasedValueCounter;

      insertingAnimationIntoBody(moveCounterSlider, increasedValueCounter);
      setAnimationOnClick("moveSlider");
      setmoveCounterSlider(increasedValueCounter);

      return increasedValueCounter;
    },

    moveLeft: () => {
      let decreasedValueCounter = decreasingAnimationCounter(moveCounterSlider);

      insertingAnimationIntoBody(moveCounterSlider, decreasedValueCounter);
      setAnimationOnClick("moveSlider");
      setmoveCounterSlider(decreasedValueCounter);
    },
  };

  const movingSliderByButtons = (arrowName, zeroValue) =>
    objMoviment[`move${arrowName}`](zeroValue);

  const isButtonVisibilityTrue = (nameDirection, jsxFigure) => {
    let buttonSlider = (
      <ButtonSlider
        nameDirection={nameDirection}
        jsxFigure={jsxFigure}
        movingSliderByButtons={movingSliderByButtons}
        buttonsClasses={buttonsClasses}
      />
    );
    return buttonsVisibility ? buttonSlider : null;
  };

  useEffect(() => {
    if (timelapseVisibility) {
      let idInterval = 0,
        timer = timeLapseDuration * 1000;

      const idSettimeout = setTimeout(() => {
        idInterval = setInterval(() => {
          objMove.currentMove = movingSliderByButtons("Right", zeroValue);
          zeroValue = undefined;
          zeroValue = objMove.currentMove === objMove.lastMove ? 0 : undefined;

          objMove.lastMove = objMove.currentMove;
        }, timer);
      }, timer);

      return () => {
        clearInterval(idInterval);
        clearTimeout(idSettimeout);
      };
    }
  }, [animationOnClick, moveCounterSlider]);

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <div className={`slider ${sliderClasses.join("")}`} style={divStyle}>
      {isButtonVisibilityTrue("buttonLeft", left)}
      <ListScrolling
        itemsJSX={itemsJSX}
        itemsGrabbingCursorVisibility={itemsGrabbingCursorVisibility}
        circlesVisibility={circlesVisibility}
        circlesClasses={circlesClasses}
      />
      {isButtonVisibilityTrue("buttonRight", right)}
    </div>
  );
};

export { SliderContainer };
