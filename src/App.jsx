import "./assets/css/style.css";
import "./assets/css/responsive.css";

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
          <Slider
            // buttonsVisibility={true} //Visibilidade dos botões.
            // circleVisibility={true} //Visibilidade dos circulos para mostrar a quantidade de itens dentro do slider.
            // timelapseVisibility={true} //Passagem de itens de acordo com um tempo específico.
            // itemsGrabbingCursorVisibility={true} //Mouse Grab acima dos itens.
            // buttonsClasses={["buttonSlider"]} //Classes para os Botões.
            sliderClasses={["slider"]} //Classes para os Botões.
            // circlesClasses={0}
            // buttonsJSX={{
            //   //JSX itens para colocar dentro do botão, pode ser um icone, imagem ou qualquer JSX.
            //   left: ComponentButton("left"),
            //   right: ComponentButton("right"),
            // }}
            // buttonsJSX={[]}
            // itemsJSX={""}
            // itemsJSX={arrayOfComponents([banner_1, banner_2, banner_3, banner_4])} //Itens em JSX para dentro do slider.
            // timeLapseDuration={1} //Em segundos EX: 1, 2, 3.
          />
        </section>
      </main>
    </>
  );
};

export { App };
