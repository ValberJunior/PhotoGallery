import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box; 
    scrollbar-width: none; 
   }
   
   *::-webkit-scrollbar { 
       display: none; 
   }
   
   body{
   overflow-x: hidden;

   

    }
   

`;

export default GlobalStyle;