import { arrayExempleComponents, buttonsObject } from "../../modules/slider";

const iterationObject = (object, conditionFunction) => {
  let arrObjectWrong = [];

  for (let [key, value] of Object.entries(object)) {
    let objWrong = conditionFunction(key, value);
    if (objWrong !== null) arrObjectWrong.push(objWrong);
  }

  return arrObjectWrong;
};

class ObjectErrorIdentificator {
  static classesObject(object) {
    const classesVerification = (key, value) => {
      let valueIntoArray =
        typeof value === "object" && value.length !== undefined
          ? value
          : [value];

      let isValueOnArrayAnString = valueIntoArray.some(
        (value) => typeof value === "string"
      );

      let newValue = [""];

      return !isValueOnArrayAnString
        ? { key, oldValue: value, newValue }
        : null;
    };

    return iterationObject(object, classesVerification);
  }

  static jsxObject(object) {
    const jsxVerification = (key, value) => {
      let isComponent = false,
        valueDefined,
        newValue;

      switch (key) {
        case "buttonsJSX":
          valueDefined =
            typeof value === "object" && value.length === undefined
              ? value
              : { left: undefined, right: undefined };

          for (let value of Object.values(valueDefined)) {
            if (value !== undefined && typeof value === "object") {
              isComponent =
                typeof value["$$typeof"] === "symbol" &&
                typeof value === "object"
                  ? true
                  : false;

              if (!isComponent) break;
            }
          }

          newValue = buttonsObject;
          break;
        case "itemsJSX":
          valueDefined =
            typeof value === "object" && value.length !== undefined
              ? value
              : [];

          isComponent = valueDefined.some(
            (component) =>
              typeof component["$$typeof"] === "symbol" &&
              typeof value === "object"
          );

          newValue = arrayExempleComponents(5);
          break;

        default:
          alert(`propriedade ${key} não identificada`);
          break;
      }

      return !isComponent ? { key, oldValue: value, newValue } : null;
    };

    return iterationObject(object, jsxVerification);
  }

  static visibilityObject(object) {
    const visibilityVerification = (key, value) => {
      let newValue = true;

      return !value && key != "timelapseVisibility"
        ? { key, oldValue: value, newValue }
        : null;
    };

    return iterationObject(object, visibilityVerification);
  }

  static durationObject(object) {
    const durationVerification = (key, value) => {
      let newValue = 2;

      return typeof value != "number"
        ? { key, oldValue: value, newValue }
        : null;
    };

    return iterationObject(object, durationVerification);
  }
}

export default ObjectErrorIdentificator;
