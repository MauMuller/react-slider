const circleStyle = {
  borderRadius: "5rem",
  width: "0.5rem",
  height: "0.5rem",
};

const Circle = ({ circlesClasses }) => {
  return <li className={circlesClasses.join("")} style={circleStyle}></li>;
};

export { Circle };
