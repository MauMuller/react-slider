# React Slider ✨

<img src="https://img.shields.io/github/package-json/v/maumuller/react-slider?label=Versão&color=009623&style=flat-square">

<img src="https://img.shields.io/github/license/maumuller/react-slider?label=Lincesa&color=e3dc07&style=flat-square">

<a href="https://maumuller.github.io/maUs_OpenSource/pages/leftbar_menu.html">
  <img src="https://img.shields.io/static/v1?label=Site&message=MausOpenSource&color=e3071d&style=flat-square&logo=ghost">
</a>

<a href="https://github.com/MauMuller/">
  <img src="https://img.shields.io/static/v1?label=Feito Por&message=maumuller&color=3307e3&style=flat-square&logo=ghost">
</a>

<br />
<br />

Uma biblioteca feita em React, com a ideia de facilitar a vida do programador, utilizando apenas um componente para possuir todas as funcionalidades de um slider.

---

### Menu de contéudos

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Como usar](#como-usar)
  - [Pré-Requisitos](#pré-requisitos)
  - [Utilização do Slider](#utilização-do-slider)
  - [ButtonsVisibility](#buttonsvisibility)
  - [CircleVisibility](#circlevisibility)
  - [TimelapseVisibility](#timelapsevisibility)
  - [ItemsGrabbingCursor](#itemsgrabbingcursor)
  - [ButtonsClasses](#buttonsclasses)
  - [SliderClasses](#sliderclasses)
  - [ButtonsJSX](#buttonsjsx)
  - [ItemsJSX](#itemsjsx-essencial)
  - [TimeLapseDuration](#timelapseduration)
- [Tecnologias](#tecnologias)
- [Autor](#autor)

---

## Sobre 👀

A biblioteca funciona com apenas a importação de um componente chamado `<Slider/>`, com ele é possivel passar alguns parametros dentro do componente, a partir destes, é possivel manipular várias coisas do slider.

Dentro dele já existem diversas funcionalidades prontas como:

- **Movimento com mouse**:

  É possível utilizar o slider arrastando os itens com o mouse parecido com a funcionalidade nativa dos smartphones.

  Essa funcionalidade também tem suporte para mobile, não há necessidade de preocupações.

- **Movimento com botões**:

  Ele possui, assim como os padrões, os botões laterias para navegar dentro do slider, isso inclui uma animação diferente da funcionalidade anterior.

- **Movimento com o tempo**:

  Também há a possibilidade de habilitar a transição de tempo em tempo do slider, além de inserir de quanto em quanto tempo deve ocorrer essa transição.

- **Quantidade de itens dentro do slider**:

  Possibilidade de mostrar quanto itens existem dentro do slider, como forma de ilustração apenas.

Além disso, possui a capacidade de aceitar várias classes para personalizar da maneira que você quiser o slider.

Além de remover algumas funcionalidades citadas acima de acordo com a necessidade.

---

## Instalação 📥

- **NPM**:

  ```SHELL
    npm i @mauriciomds/react-slider
  ```

- **Download (Não recomendável)**:

  Acessando esse o link:

  [https://maUs_OpenSource/pages/leftbar_menu.html](https://maumuller.github.io/maUs_OpenSource/pages/leftbar_menu.html)

  Você será redimensionado para a página de bibliotecas.

  A partir disso, siga o passo a passo abaixo:

  1. Selecione o **link no menu lateral** de acordo com o nome da biblioteca (nesse caso, sendo o `React Slider`). Ou se preferir, faça uma pesquisa através do menu no canto inferior direito.

  2. Após isso, navegue até o final da página na aba **Download**.

  3. Agora, basta **clicar em baixar**.

- **Copiando o Código (Não recomendável++)**:

  Na página com o link acima, vá até a aba **Código**, nessa aba terá todas as técnologias para essa biblioteca, a partir disso, basta ir navegando de arquivo em arquivo e clicando no icone de copiar ao lado.

## Como Usar 🤔

Para começar, precisaremos separar a utlização em em subtópicos para ficar mais organizado! 😜

- Pré-Requisitos
- Utilização do Slider
  - ButtonsVisibility
  - CircleVisibility
  - TimelapseVisibility
  - ItemsGrabbingCursor
  - ButtonsClasses
  - SliderClasses
  - ButtonsJSX
  - ItemsJSX
  - TimeLapseDuration

#### Pré-Requisitos

Primeiro, precisaremos adicionar as depêndencias:

```JS
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"
```

Com isso, podemos partir para a utilização do componente.

#### Utilização do Slider

Basicamente, funciona igual importar qualquer tipo de componente comum.

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider />
    </>
  }

  export default App;
```

Agora já temos o slider prontinho, fácil não? 😁

A diferença será relativo as propriedades que virão a seguir, ela servem para controlarmos esse slider de acordo com nossas preferencias.

#### ButtonsVisibility

Ele habilita ou desabilita a visibilidade e utilização dos botões nas laterais.

**Valores que podem ser passados:**

- _true_: habilita;
- _false_: desabilita;

`Valor padrão (quando não informado): true`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        buttonsVisibility={true}
      />
    </>
  }

  export default App;
```

#### CircleVisibility

Ele habilita ou desabilita a visibilidade dos circulos abaixo do slider para mostrar a quantidade de itens.

**Valores que podem ser passados:**

- _true_: habilita;
- _false_: desabilita;

`Valor padrão (quando não informado): true`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        circleVisibility={true}
      />
    </>
  }

  export default App;
```

#### TimelapseVisibility

Ele habilita ou desabilita a funcionalidade de transição a cada periodo de tempo do slider.

**Valores que podem ser passados:**

- _true_: habilita;
- _false_: desabilita;

`Valor padrão (quando não informado): false`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        timelapseVisibility={false}
      />
    </>
  }

  export default App;
```

#### ItemsGrabbingCursor

Ele habilita ou desabilita a utilização do cursor _grab_ acima dos itens dentro do Slider.

**Valores que podem ser passados:**

- _true_: habilita;
- _false_: desabilita;

`Valor padrão (quando não informado): true`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        itemsGrabbingCursor={true}
      />
    </>
  }

  export default App;
```

#### ButtonsClasses

Insere todas as classes que os botões laterias vão ter a partir de um array. Sendo cada uma das classes passada separadamente dentro do array.

**Valores que podem ser passados:**

- _[ ]_: Vazio;
- _[ "exemploCard", "exemploNavbar" ]_: Com classes;

`Valor padrão (quando não informado): []`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        buttonsClasses={[]}
      />
    </>
  }

  export default App;
```

#### SliderClasses

Insere todas as classes que no slider para estilização. Sendo cada uma das classes passada separadamente dentro do array.

**Valores que podem ser passados:**

- _[ ]_: Vazio;
- _[ "exemploCard", "exemploNavbar" ]_: Com classes;

`Valor padrão (quando não informado): []`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        sliderClasses={[]}
      />
    </>
  }

  export default App;
```

#### ButtonsJSX

A funcionalidade insere dentro dos botões o JSX passado no `left` e `right` (respectivamente na direção dos botões) para que seja possível utilizar diferentes imagens ou icones.

**Valores que podem ser passados:**

- _{ left: undefined, right: undefined }_: Sem nenhum JSX;
- _{ left: < ArrowLeft/>, right: < ArrowLeft /> }_: Com JSX;

`Valor padrão (quando não informado): { left: undefined, right: undefined }`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"

  function App () {
    return <>
      <Slider
        buttonsJSX={{
            left: undefined,
            right: undefined
          }}
      />
    </>
  }

  export default App;
```

#### ItemsJSX (Essencial)

Essa funcionalidade é responsável por colocar funções JSX dentro do slider, independente da quantidade, estilos ou nós Filhos.

**Valores que podem ser passados:**

- _[ ]_: Sem nenhum JSX;
- _[ < Teste1/>, < Teste2/>, < Teste3/> ]_: Com JSX;

`Valor padrão (quando não informado): []`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"
  import { <Teste1/>, <Teste2/>, <Teste3/> } from "testes"

  function App () {
    return <>
      <Slider
        itemsJSX={[<Teste1/>, <Teste2/>, <Teste3/>]}
      />
    </>
  }

  export default App;
```

#### TimelapseDuration

Essa funcionalidade determina quantos segundos deve demorar para executar a transição dos itens dentro do slider, determinando assim um tempo para essa transição.

**Valores que podem ser passados:**

- _undefined_: nenhum valor;
- _(1,2,3,4...)_: números;

`Valor padrão (quando não informado): 2`

```JS
  //App.jsx
  import React from "react";
  import { Slider } from "@mauriciomds/react-slider"
  import { <Teste1/>, <Teste2/>, <Teste3/> } from "testes"

  function App () {
    return <>
      <Slider
        timeLapseDuration={2} //Sempre em segundos
      />
    </>
  }

  export default App;
```

---

## Técnologias

<div>
  <img height="35" style="vertical-align: text-bottom;" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/>
  <b>Javacript</b>
</div>

<div>
  <img height="35" style="vertical-align: text-bottom;" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="react"/>
  <b>React</b>
</div>

<div>
  <img height="35" style="vertical-align: text-bottom;" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="html"/>
  <b>HTML</b>
</div>

<div>
  <img height="35" style="vertical-align: text-bottom;" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="css"/>
  <b>CSS</b>
</div>

---

## Autor 🎭

<a href="https://github.com/MauMuller/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/82516932?v=4" width="100px;" alt="Mauricio"/>
 <br />
 <sub><b>Mauricio Muller dos Santos 🎈</b></sub></a>

Entre em contato através das rede abaixo! 👋🏽

<a href="mailto:mauriciomuller2012@gmail.com">
  <img src="https://img.shields.io/badge/-mauriciomuller2012@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mauriciomuller2012@gmail.com">
</a>

<a href="https://www.linkedin.com/in/mauricio-m-s/">
  <img src="https://img.shields.io/badge/-Mauricio-blue?style=flat-square&logo=Linkedin&logoColor=white">
</a>

<a href="https://www.instagram.com/mauricio_m_s/">
  <img src="https://img.shields.io/badge/-Mauricio-purple?style=flat-square&logo=Instagram&logoColor=white">
</a>
