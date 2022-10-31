import "./assets/css/style.css";

import { Slider } from "./modules/slider";

import arrowLeft from "./assets/imgs/arrows/arrowLeft.svg";
import arrowRight from "./assets/imgs/arrows/arrowRight.svg";

import banner_1 from "./assets/imgs/sliders/banner_1.jpg";
import banner_2 from "./assets/imgs/sliders/banner_2.jpeg";
import banner_3 from "./assets/imgs/sliders/banner_3.jpg";
import banner_4 from "./assets/imgs/sliders/banner_4.jpg";

const ComponentToSlider = ({ srcImg, alt, className }) => {
  return <img src={srcImg} alt={alt} className={className} />;
};

const ComponentButton = (arrow) => (
  <img src={arrow} style={{ MozWindowDragging: "none" }} alt={"arrow"} />
);
const arrayOfComponents = (array) => {
  return array.map((srcImg, indSrc) => (
    <ComponentToSlider
      key={indSrc}
      alt={`banner_${indSrc}`}
      srcImg={srcImg}
      className={[""]}
    />
  ));
};

const App = () => {
  return (
    <>
      <main className="App">
        <section className="ilustration">
          <Slider
            buttonsVisibility={true}
            circlesVisibility={true}
            timelapseVisibility={true}
            itemsGrabbingCursorVisibility={true}
            buttonsClasses={["buttonSlider"]}
            sliderClasses={["slider"]}
            itemsClasses={["itensSlider"]}
            circlesClasses={["circles"]}
            itemsJSX={arrayOfComponents([
              banner_1,
              banner_2,
              banner_3,
              banner_4,
            ])}
            buttonsJSX={{
              left: ComponentButton(arrowLeft),
              right: ComponentButton(arrowRight),
            }}
            timeLapseDuration={2} //Sempre em segundos
          />
        </section>
      </main>
    </>
  );
};

export { App };
