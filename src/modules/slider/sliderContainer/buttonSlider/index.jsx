import { GlobalSlider } from "../../../../context/GlobalSlider";
import { useContext } from "react";

const ButtonSlider = ({
  nameDirection,
  jsxFigure,
  movingSliderByButtons,
  buttonsClasses
}) => {
  const { arrAnimation } = useContext(GlobalSlider);
  const [animationOnClick] = arrAnimation;
  const isAnimationMoving = animationOnClick === "moveSlider" ? true : false;
  const gettingNameButtonDirection = () =>
    nameDirection.match(/([A-Z])([a-z]+)/g).join("");

  const buttonDirection = gettingNameButtonDirection();
  const joinAllClasses = buttonsClasses.join(" ");
  const isDisabledButton = isAnimationMoving
    ? { opacity: 0.5, filter: "grayscale(80%)" }
    : null;

  const positionProperty = buttonDirection.toLowerCase();

  return (
    <>
      <button
        className={joinAllClasses}
        style={{ ...isDisabledButton, [`${positionProperty}`]: `1rem` }}
        onClick={(evt) => movingSliderByButtons(buttonDirection)}
        disabled={isAnimationMoving}
      >
        {jsxFigure}
      </button>
    </>
  );
};

export { ButtonSlider };
