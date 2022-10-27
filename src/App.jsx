import "./assets/css/style.css";

import { Slider } from "./modules/slider";
import { ArrowLeft, ArrowRight } from "phosphor-react";

import arrowLeft from "./assets/imgs/arrows/arrowLeft.svg";
import arrowRight from "./assets/imgs/arrows/arrowRight.svg";

import banner_1 from "./assets/imgs/sliders/banner_1.jpg";
import banner_2 from "./assets/imgs/sliders/banner_2.jpeg";
import banner_3 from "./assets/imgs/sliders/banner_3.jpg";
import banner_4 from "./assets/imgs/sliders/banner_4.jpg";

const ComponentToSlider = ({ srcImg, alt, className }) => {
  return <img src={srcImg} alt={alt} className={className} />;
};

const ComponentButton = (arrow) => {
  return arrow === "left" ? (
    <ArrowLeft size={32} color="#0f0f0f" />
  ) : (
    <ArrowRight size={32} color="#0f0f0f" />
  );

  // return (
  //   <img src={arrow} style={{ MozWindowDragging: "none" }} alt={"arrow"} />
  // );
};

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
          <Slider />
        </section>
      </main>
    </>
  );
};

export { App };
