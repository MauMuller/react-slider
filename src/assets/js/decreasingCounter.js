const decreasingCounter = (counter) => {
  return counter < 1 ? 0 : (counter -= 0.5);
};

export { decreasingCounter };
