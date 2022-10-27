import GlobalSliderProvider from "../../context/GlobalSlider";
import { SliderContainer } from "./sliderContainer";
import { SquaresExemple } from "../../exemples/squaresExemple";
import { ArrowExemple } from "../../exemples/arrowExemple";
import { verifingErrorProps } from "../../assets/js/verifingErrorProps";

import "../../assets/css/slider.css";
import "../../assets/css/responsive.css";

const arrayExempleComponents = (numberOfArrays) => {
  const arrExemple = [];
  for (let i = 0; i < numberOfArrays; i++) {
    arrExemple.push(<SquaresExemple keyValue={i} />);
  }
  return arrExemple;
};

const buttonsObject = {
  left: <ArrowExemple value={"<"} />,
  right: <ArrowExemple value={">"} />,
};

const gettingAllprops = ({
  buttonsVisibility = true,
  itemsGrabbingCursorVisibility = true,
  circlesVisibility = true,
  timelapseVisibility = false,

  buttonsClasses = [""],
  circlesClasses = [""],
  sliderClasses = [""],
  itemsClasses = [""],

  itemsJSX = [],
  buttonsJSX = {
    left: undefined,
    right: undefined,
  },

  timeLapseDuration = 2,
}) => {
  return {
    buttonsVisibility,
    itemsGrabbingCursorVisibility,
    circlesVisibility,
    timelapseVisibility,
    buttonsClasses,
    circlesClasses,
    sliderClasses,
    itemsClasses,
    itemsJSX,
    buttonsJSX,
    timeLapseDuration,
  };
};

const Slider = (props) => {
  const generationAnError = (valuesAndKeys) =>
    console.error(
      `As propriedades:\n\n${valuesAndKeys}\nPossuem valores incorretos, verifique a documentação com o link abaixo:\nhttps://github.com/MauMuller/react-slider\n\n`
    );

  const allProps = gettingAllprops(props);
  const verifiedProps = verifingErrorProps(allProps);

  if (verifiedProps.length > 0) {
    let valuesAndKeys = "";

    verifiedProps.forEach((errorProp) => {
      let { key, newValue, oldValue } = errorProp;

      allProps[key] = newValue;
      valuesAndKeys += `- ${key}: ${JSON.stringify(oldValue)}\n`;
    });

    generationAnError(valuesAndKeys);
  }

  return (
    <>
      <GlobalSliderProvider>
        <SliderContainer
          circlesVisibility={allProps.circlesVisibility}
          timelapseVisibility={allProps.timelapseVisibility}
          itemsGrabbingCursorVisibility={allProps.itemsGrabbingCursorVisibility}
          buttonsVisibility={allProps.buttonsVisibility}
          buttonsJSX={allProps.buttonsJSX}
          itemsJSX={allProps.itemsJSX}
          itemsClasses={allProps.itemsClasses}
          sliderClasses={allProps.sliderClasses}
          buttonsClasses={allProps.buttonsClasses}
          circlesClasses={allProps.circlesClasses}
          timeLapseDuration={allProps.timeLapseDuration}
        />
      </GlobalSliderProvider>
    </>
  );
};

export { Slider, arrayExempleComponents, buttonsObject };
