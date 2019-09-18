import * as React from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import { Signup, Preview } from "./components";
import FormProvider from "./context/FormContextProvider";

import './index.css'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  /* Font size generated for font Roboto
    using https://type-scale.com/
    at the scale of 1.250 - Major Third
  */
  --default-size: ${props => props.size || 2.8};
  --scale: ${props => props.scale || 1.25};
  --h1:  calc(var(---default-size) * var(--scale))em;
  --h2:  calc(var(--h1) * var(--scale))em;
  --h3:  calc(var(--h2) * var(--scale))em;
  --h4:  calc(var(--h3) * var(--scale))em;
  --h5: calc(var(--h4) * var(--scale))em;

  h1{
      font-size: --h5
    }

  h2{
      font-size: --h2;
    }

  h3{
      font-size: h3;
    }

  h4{
      font-size: --h4
    }

  h5{
      font-size: --h5;
    }  
        
  body {
      margin: 0;
      font-family: 'Roboto', cursive;
      font-size: font-size: var(---default-size)em; 
      color: black;
    }
`;

const App = () => (
  <>
    <GlobalStyle />
    <FormProvider>
      <Router>
        <Signup path="/" />
        <Preview path="/signup-details" />
      </Router>
    </FormProvider>
  </>
);

export default App;
