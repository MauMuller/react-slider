import { useContext, useEffect, useState } from "react";
import { GlobalSlider } from "../../../../../context/GlobalSlider";
import { Circle } from "./circle/";

const styleCircleContainer = {
  display: "flex",
  flexDirection: "columm",
  gap: "0.3rem",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  listStyle: "none",
  // border: "1px solid red",
};

const CircleContainer = ({ circlesVisibility, circlesClasses }) => {
  const objGlobal = useContext(GlobalSlider);
  const { objListReferences } = objGlobal;
  const { listSliders } = objListReferences;
  const [circleArr, setCircleArray] = useState([]);

  useEffect(() => {
    const lengthOfItems = listSliders.current.children;
    const gettingCircle = [];

    for (let i = 0; i < lengthOfItems.length; i++) {
      gettingCircle.push(<Circle key={i} circlesClasses={circlesClasses} />);
    }

    setCircleArray(gettingCircle);
  }, []);

  return (
    <>
      {circlesVisibility ? (
        <ul
          style={styleCircleContainer}
          title={`Existem ${circleArr.length} itens`}>
          {circleArr.length <= 0 ? null : circleArr}
        </ul>
      ) : null}
    </>
  );
};

export { CircleContainer };
