
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: lightblue;
  }
  img {
    width: 200px; 
    height: auto; 
    border-radius: 50%; 
    object-fit: cover; 
}
  
 
`;

export default GlobalStyle;
