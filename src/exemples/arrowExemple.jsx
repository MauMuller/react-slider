const arrowStyle = {
  width: "100%",
  height: "100%",
  color: "#000",
  fontSize: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const ArrowExemple = ({ value }) => {
  return <i style={arrowStyle}>{value}</i>;
};

export { ArrowExemple };
