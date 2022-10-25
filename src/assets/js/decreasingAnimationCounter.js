import movimentObjValue from "../../constants/movimentObjValue";

const decreasingAnimationCounter = (moveCounterSlider) => {
  let { clickMovimentation } = movimentObjValue;

  moveCounterSlider -= clickMovimentation;
  return moveCounterSlider < 0 ? 0 : moveCounterSlider;
};

export { decreasingAnimationCounter };
