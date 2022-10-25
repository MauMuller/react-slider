import { useContext, useEffect, useState } from "react";
import { GlobalSlider } from "../../../../../context/GlobalSlider";
import { Circle } from "./circle/";

const styleCircleContainer = {
  display: "flex",
  flexDirection: "columm",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  listStyle: "none"
};

const CircleContainer = () => {
  const objGlobal = useContext(GlobalSlider);
  const { objListReferences } = objGlobal;
  const { listSliders } = objListReferences;
  const [circleArr, setCircleArray] = useState([]);

  useEffect(() => {
    const lengthOfItems = listSliders.current.children;
    const gettingCircle = [];

    for (let i = 0; i < lengthOfItems.length; i++) {
      gettingCircle.push(<Circle key={i} />);
    }

    setCircleArray(gettingCircle);
  }, []);

  return (
    <ul
      style={styleCircleContainer}
      title={`Existem ${circleArr.length} itens`}
    >
      {circleArr.length <= 0 ? null : circleArr}
    </ul>
  );
};

export { CircleContainer };
