import GlobalSliderProvider from "../../context/GlobalSlider";
import { SliderContainer } from "./sliderContainer";
import { SquaresExemple } from "../../exemples/squaresExemple";
import { ArrowExemple } from "../../exemples/arrowExemple";

const Slider = ({
  buttonsVisibility = true,
  buttonsClasses = [""],
  buttonsJSX = {
    left: undefined,
    right: undefined,
  },
  sliderClasses = [""],
  itemsJSX = [],
  itemsClasses = [""],
  itemsGrabbingCursor = true,
  circleVisibility = true,
  timelapseVisibility = false,
  timeLapseDuration = 2,
}) => {
  const { left, right } = buttonsJSX;

  const arrayExempleComponents = (numberOfArrays) => {
    const arrExemple = [];

    for (let i = 0; i < numberOfArrays; i++) {
      arrExemple.push(<SquaresExemple keyValue={i} />);
    }

    return arrExemple;
  };

  const generatingAnException = () =>
    console.error(
      `É preciso colocar itens dentro do slider, por favor verifique a lista:\n\n- buttonsJSX,\n- itemsJSX\n\nSe quiser, veja a documentação no link: \n...`
    );

  if (itemsJSX.length === 0 || left === undefined || right === undefined) {
    generatingAnException();
  }

  const arrayWithExemples = arrayExempleComponents(5);

  itemsJSX = itemsJSX.length === 0 ? arrayWithExemples : [...itemsJSX];
  buttonsJSX.left = left === undefined ? <ArrowExemple value={"<"} /> : left;
  buttonsJSX.right = right === undefined ? <ArrowExemple value={">"} /> : right;

  return (
    <>
      <GlobalSliderProvider>
        <SliderContainer
          buttonsVisibility={buttonsVisibility}
          buttonsClasses={buttonsClasses}
          buttonsJSX={buttonsJSX}
          sliderClasses={sliderClasses}
          itemsJSX={itemsJSX}
          itemsClasses={itemsClasses}
          itemsGrabbingCursor={itemsGrabbingCursor}
          circleVisibility={circleVisibility}
          timelapseVisibility={timelapseVisibility}
          timeLapseDuration={timeLapseDuration}
        />
      </GlobalSliderProvider>
    </>
  );
};

export { Slider };
