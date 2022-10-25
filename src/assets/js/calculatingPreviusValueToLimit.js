import movimentObjValue from "../../constants/movimentObjValue.js";

const calculatingPreviusValueToLimit = ({ currentPostion }) => {
  const { clickMovimentation } = movimentObjValue;
  return currentPostion - clickMovimentation * 16;
};

export { calculatingPreviusValueToLimit };
