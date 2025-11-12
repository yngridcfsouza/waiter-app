import { createGlobalStyle } from 'styled-components';

import GeneralSansRegularOtf from '../assets/fonts/GeneralSans-Regular.otf';
import GeneralSansSemiboldOtf from '../assets/fonts/GeneralSans-Semibold.otf';
import GeneralSansBoldOtf from '../assets/fonts/GeneralSans-Bold.otf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    src: url('${GeneralSansRegularOtf}') format('opentype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: swap;
    font-style: normal;
    src: url('${GeneralSansSemiboldOtf}') format('opentype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 700;
    font-display: swap;
    font-style: normal;
    src: url('${GeneralSansBoldOtf}') format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;
