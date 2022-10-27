import "./items.css";

const Items = ({ component, mouseIsDown, itemsGrabbingCursorVisibility }) => {
  let cursorChange = itemsGrabbingCursorVisibility
    ? { cursor: `${mouseIsDown ? "grabbing" : "grab"}` }
    : null;

  return (
    <li className="itemSlider" style={cursorChange}>
      {component}
    </li>
  );
};

export { Items };
