import "./items.css";

const Items = ({ component, mouseIsDown, itemsGrabbingCursor }) => {
  let cursorChange = itemsGrabbingCursor
    ? { cursor: `${mouseIsDown ? "grabbing" : "grab"}` }
    : null;

  return (
    <li className="itemSlider" style={cursorChange}>
      {component}
    </li>
  );
};

export { Items };
