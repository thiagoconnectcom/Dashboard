import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root{
    --cinza-claro: #F5F5F5;
    --branco: #FFFFFF;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--cinza-claro);
    font: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .react-bootstrap-table-pagination{
      padding: 0px 3rem
  }

  .react-bootstrap-table-page-btns-ul{
    justify-content: end;
  }
`;
 
export default GlobalStyle;