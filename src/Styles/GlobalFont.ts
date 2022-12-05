import { createGlobalStyle } from "styled-components";
import EF_jejudoldam from "@/Assets/Fonts/EF_jejudoldam.woff";
import EF_watermelonSalad from "@/Assets/Fonts/EF_watermelonSalad.woff";

export default createGlobalStyle`
  @font-face {
    font-family: 'EF_jejudoldam' ;
    src: url(${EF_jejudoldam})
  }
  @font-face {
    font-family: 'EF_watermelonSalad' ;
    src: url(${EF_watermelonSalad})
  }
`;
