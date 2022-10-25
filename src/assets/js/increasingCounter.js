import movimentObjValues from "../../constants/movimentObjValue";

const increasingCounter = (counter, { currentPostion, minRightPosition }) => {
  const { mouseMovimentation } = movimentObjValues;
  let valueToIncrease = mouseMovimentation;

  return currentPostion > minRightPosition
    ? (counter += valueToIncrease)
    : counter;
};

export { increasingCounter };
