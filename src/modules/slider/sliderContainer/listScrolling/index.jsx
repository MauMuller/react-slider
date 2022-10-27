import { useContext } from "react";

import { ListSliders } from "./listSliders";
import { CircleContainer } from "./circleContainer";
import { GlobalSlider } from "../../../../context/GlobalSlider";
import { increasingCounter } from "../../../../assets/js/increasingCounter";
import { decreasingCounter } from "../../../../assets/js/decreasingCounter";
import { gettingRightObjectPostion } from "../../../../assets/js/gettingRightObjectPostion";

const ListScrolling = ({
  itemsJSX,
  itemsGrabbingCursorVisibility,
  circlesVisibility,
  circlesClasses,
}) => {
  const objGlobal = useContext(GlobalSlider);
  const { listScrolling, listSliders } = objGlobal.objListReferences;
  const [moveCounterSlider, setmoveCounterSlider] = objGlobal.arrCounter;

  const settingValueToMoveCounter = ({ movementValue, comparationValue }) => {
    let objListSliderPosition = gettingRightObjectPostion(
      listScrolling.current,
      listSliders.current
    );

    let increasedValueCounter = increasingCounter(
      moveCounterSlider,
      objListSliderPosition
    );
    let decreasedValueCounter = decreasingCounter(moveCounterSlider);

    movementValue > comparationValue
      ? setmoveCounterSlider(decreasedValueCounter)
      : setmoveCounterSlider(increasedValueCounter);
  };

  return (
    <div className="listScrolling" ref={listScrolling}>
      <ListSliders
        itemsJSX={itemsJSX}
        itemsGrabbingCursorVisibility={itemsGrabbingCursorVisibility}
        settingValueToMoveCounter={settingValueToMoveCounter}
      />
      {circlesVisibility ? (
        <CircleContainer
          circlesVisibility={circlesVisibility}
          circlesClasses={circlesClasses}
        />
      ) : null}
    </div>
  );
};

export { ListScrolling };
