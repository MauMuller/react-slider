const removingOldStyle = () => {
  let allStyles = [...document.head.querySelectorAll("style")];
  let lastStyle = allStyles.find(
    (style, indStyle) => indStyle === allStyles.length - 1
  );
  document.head.removeChild(lastStyle);
};

export { removingOldStyle };
