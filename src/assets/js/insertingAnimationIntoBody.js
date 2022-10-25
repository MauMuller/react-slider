import { animationTemplate } from "./animationTemplate";

const insertingAnimationIntoBody = (oldContValue, newContValue) => {
  let animation = animationTemplate(oldContValue, newContValue);
  let stylesheet = document.createElement("style");
  stylesheet.appendChild(animation);
  document.head.insertAdjacentElement("beforeend", stylesheet);
};

export { insertingAnimationIntoBody };
