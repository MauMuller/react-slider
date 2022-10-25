const divSquares = {
  width: "20rem",
  height: "100%",
  background: "gray",
  boxShadow: "0.3rem 0.3rem 0.4rem #000",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: "700",
  fontFamily: "sans-serif"
};

const SquaresExemple = ({ keyValue }) => {
  return (
    <div key={keyValue} style={divSquares}>
      Not Found
    </div>
  );
};

export { SquaresExemple };
