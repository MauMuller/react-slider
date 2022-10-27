import ObjectErrorIdentificator from "./objectErrorIdentificator";

const verifingErrorProps = (props) => {
  const arrWithWrongValue = [];

  const propsObject = {
    classesObject: {},
    jsxObject: {},
    visibilityObject: {},
    durationObject: {},
  };

  for (let [key, value] of Object.entries(props)) {
    let keyProp = key
      .match(/([A-Z]([a-z]+|[A-Z]+))$/gm)
      .join("")
      .toLowerCase();

    propsObject[`${keyProp}Object`][key] = value;
  }

  for (let [key, value] of Object.entries(propsObject)) {
    let arrWithErrors = ObjectErrorIdentificator[key](value);

    if (arrWithErrors != undefined && arrWithErrors.length > 0)
      arrWithWrongValue.push(...arrWithErrors);
  }

  return arrWithWrongValue;
};

export { verifingErrorProps };
