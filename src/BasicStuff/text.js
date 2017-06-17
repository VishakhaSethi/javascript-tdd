const reverseString = (givenString) => {

  if (givenString.length === 0) {
      return '';
  }

  return givenString[givenString.length - 1] +
    reverseString(givenString.substring(0, givenString.length - 1));
};


export {
  reverseString
};
