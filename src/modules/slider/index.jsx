import GlobalSliderProvider from "../../context/GlobalSlider";
import { SliderContainer } from "./sliderContainer";
import { SquaresExemple } from "../../exemples/squaresExemple";
import { ArrowExemple } from "../../exemples/arrowExemple";
import { verifingErrorProps } from "../../assets/js/verifingErrorProps";

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
  circleVisibility = true,
  timelapseVisibility = false,

  buttonsClasses = [""],
  circlesClasses = [""],
  sliderClasses = [""],
  itemsClasses = [""],

  buttonsJSX = {
    left: undefined,
    right: undefined,
  },
  itemsJSX = [],

  timeLapseDuration = 2,
}) => {
  return {
    buttonsVisibility,
    buttonsClasses,
    buttonsJSX,
    circlesClasses,
    sliderClasses,
    itemsJSX,
    itemsClasses,
    itemsGrabbingCursorVisibility,
    circleVisibility,
    timelapseVisibility,
    timeLapseDuration,
  };
};

const Slider = (props) => {
  const generationAnError = (valuesAndKeys) =>
    console.error(
      `As propriedades:\n\n${valuesAndKeys}\nPossuem valores incorretos, verifique a documentação com o link abaixo:\nhttps://github.com/MauMuller/react-slider`
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
          buttonsVisibility={allProps.buttonsVisibility}
          buttonsClasses={allProps.buttonsClasses}
          buttonsJSX={allProps.buttonsJSX}
          sliderClasses={allProps.sliderClasses}
          itemsJSX={allProps.itemsJSX}
          itemsClasses={allProps.itemsClasses}
          itemsGrabbingCursorVisibility={allProps.itemsGrabbingCursorVisibility}
          circleVisibility={allProps.circleVisibility}
          timelapseVisibility={allProps.timelapseVisibility}
          timeLapseDuration={allProps.timeLapseDuration}
        />
      </GlobalSliderProvider>
    </>
  );
};

export { Slider, arrayExempleComponents, buttonsObject };
