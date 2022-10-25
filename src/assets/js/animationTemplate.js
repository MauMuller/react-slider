const animationTemplate = (oldContValue, newContValue) => {
  return document.createTextNode(`
    @keyframes moveSliderAnimation{
      0%{
        left: -${oldContValue}rem
      }
      100%{
        left: -${newContValue}rem
      }
    }

    .moveSlider{
      animation: 500ms moveSliderAnimation ease forwards;
    }
  `);
};

export { animationTemplate };
