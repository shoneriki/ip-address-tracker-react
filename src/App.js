import './App.css';
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';

import TopSection from "./components/TopSection"

const GlobalStyle = createGlobalStyle`
  root: {

  }

  body {
    --very-dark-gray: hsl(0, 0%, 17%);
    --dark-gray: hsl(0, 0%, 59%);
    
    font-family:"Rubik", sans-serif;
  }
`;

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  border:1px solid black;
`

function App() {
  return (
    <Body>
      <GlobalStyle />
      <TopSection />

      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </Body>
  );
}

export default App;
