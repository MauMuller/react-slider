const Items = ({
  component,
  mouseIsDown,
  itemsGrabbingCursorVisibility,
  itemsClasses,
}) => {
  let cursorChange = itemsGrabbingCursorVisibility
    ? { cursor: `${mouseIsDown ? "grabbing" : "grab"}` }
    : null;

  return (
    <li className={`itemSlider ${itemsClasses}`} style={cursorChange}>
      {component}
    </li>
  );
};

export { Items };
