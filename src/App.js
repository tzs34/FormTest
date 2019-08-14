import * as React from 'react'
import { Router } from '@reach/router'

import styled, { createGlobalStyle  } from "styled-components";
import {
  Signup,
  Preview
} from './components'
import FormProvider from './context/FormContextProvider';

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
          <Preview path="/search-details" />
      </Router>
      </FormProvider>
    </>
)

export default App
