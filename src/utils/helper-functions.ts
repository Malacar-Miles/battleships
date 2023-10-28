export function romanize(arabicNumber: number | undefined | null) {
  // Convert an Arabic number into a Roman one

  if (
    arabicNumber === undefined ||
    arabicNumber === null ||
    isNaN(arabicNumber) ||
    arabicNumber <= 0 ||
    !Number.isInteger(arabicNumber)
  ) {
    console.log("Invalid number input in romanize function: ", arabicNumber);
    return "";
  }

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";
  while (arabicNumber > 0) {
    let a: keyof typeof romanNumerals;
    for (a in romanNumerals) {
      if (romanNumerals[a] <= arabicNumber) {
        result += a;
        arabicNumber -= romanNumerals[a];
        break;
      }
    }
  }
  return result;
}
