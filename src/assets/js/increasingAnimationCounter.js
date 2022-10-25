import movimentObjValue from "../../constants/movimentObjValue";

const increasingAnimationCounter = (
  moveCounterSlider,
  { currentPostion, minRightPosition }
) => {
  let { clickMovimentation } = movimentObjValue;
  let valueToReduce = Math.round((minRightPosition - currentPostion) / 16);
  let isCurrentMoreThanMinPosition =
    currentPostion < minRightPosition ? true : false;

  moveCounterSlider = moveCounterSlider += clickMovimentation;

  return isCurrentMoreThanMinPosition
    ? moveCounterSlider - valueToReduce
    : moveCounterSlider;
};

export { increasingAnimationCounter };
