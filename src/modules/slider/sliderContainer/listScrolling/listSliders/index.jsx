import { useState, useContext } from "react";

import { GlobalSlider } from "../../../../../context/GlobalSlider";
import { Items } from "./items";
import { removingOldStyle } from "../../../../../assets/js/removingOldStyle";

const ListSliders = ({
  itemsJSX,
  settingValueToMoveCounter,
  itemsGrabbingCursorVisibility,
}) => {
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const objGlobal = useContext(GlobalSlider);
  const { listSliders } = objGlobal.objListReferences;
  const [moveCounterSlider, setmoveCounterSlider] = objGlobal.arrCounter;
  const [animationOnClick, setAnimationOnClick] = objGlobal.arrAnimation;

  const mouseIsDowing = () => setMouseIsDown(true);
  const mouseIsUping = () => setMouseIsDown(false);
  const settingTouchStart = (clientX) => setTouchStart(clientX);

  const isMouseDowing = (evt) => {
    let movementValue = evt.movementX;
    let comparationValue = 0;

    if (mouseIsDown)
      settingValueToMoveCounter({ movementValue, comparationValue });
  };

  const isTouchStarted = (evt) => {
    let movementValue = evt.touches[0].clientX;
    let comparationValue = touchStart;

    if (touchStart != 0) {
      settingValueToMoveCounter({ movementValue, comparationValue });
    }
  };

  const removingEffects = () => {
    removingOldStyle();
    setAnimationOnClick("");
  };

  return (
    <ul
      ref={listSliders}
      className={`listSliders ${animationOnClick}`}
      style={{
        left: `-${moveCounterSlider}rem`,
      }}
      onMouseDown={mouseIsDowing}
      onMouseUp={mouseIsUping}
      onMouseLeave={mouseIsUping}
      onMouseMove={(evt) => isMouseDowing(evt)}
      onTouchStart={(evt) => settingTouchStart(evt.touches[0].clientX)}
      onTouchMove={(evt) => isTouchStarted(evt)}
      onAnimationEnd={removingEffects}>
      {itemsJSX != undefined
        ? itemsJSX.map((component, componentInd) => {
            return (
              <Items
                component={component}
                mouseIsDown={mouseIsDown}
                key={componentInd}
                itemsGrabbingCursorVisibility={itemsGrabbingCursorVisibility}
              />
            );
          })
        : null}
    </ul>
  );
};

export { ListSliders };
