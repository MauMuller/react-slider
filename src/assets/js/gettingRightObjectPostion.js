const gettingRightObjectPostion = (listScrolling, listSliders) => {
  let rightScrolling = Math.round(listScrolling.getBoundingClientRect().right);
  let rightSlider = Math.round(listSliders.getBoundingClientRect().right);

  return {
    currentPostion: rightSlider,
    minRightPosition: rightScrolling - 10
  };
};

export { gettingRightObjectPostion };
