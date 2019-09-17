import * as React from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import { Signup, Preview } from "./components";
import FormProvider from "./context/FormContextProvider";

import './index.css'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
      margin: 0;
      font-family: 'Roboto', cursive;
      font-size: 2em;
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
