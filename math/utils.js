import { createUnit } from "../unit/unit";
export const parseCssValue = (value) => {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    return [parseFloat(match[1]), match[2]];
};
export const applyMathFunc = (mathFunc) => (value) => {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    const numberPart = parseFloat(match[1]);
    const stringPart = match[2];
    return `${mathFunc(numberPart)}${stringPart}`;
};
export const applyMathToTwo = (mathFunc) => (value1, value2) => {
    const [numberPart1, stringPart1] = parseCssValue(value1);
    let [numberPart2, stringPart2] = parseCssValue(value2);
    if (stringPart1 !== stringPart2) {
        const v = createUnit(stringPart1)(value2["value"]).value;
        [numberPart2, stringPart2] = parseCssValue(v);
    }
    return `${mathFunc(numberPart1, numberPart2)}${stringPart1}`;
};
export const applyMathToDivide = (mathFunc) => (value1, value2) => {
    const [numberPart1, stringPart1] = parseCssValue(value1);
    return `${mathFunc(numberPart1, value2)}${stringPart1}`;
};
export const getRandom = (lowerBound, upperBound, decimalPrecision) => {
    const randomFloat = Math.random();
    const scaledRandomFloat = randomFloat * (upperBound - lowerBound) + lowerBound;
    const roundedRandomFloat = decimalPrecision !== undefined
        ? parseFloat(scaledRandomFloat.toFixed(decimalPrecision))
        : scaledRandomFloat;
    return roundedRandomFloat;
};
export const fw = (fn) => (...args) => fn(...args.map((arg) => {
    if (typeof arg === "number")
        return createUnit("rem")(arg);
    return arg;
}));
