import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body,  *{
        margin:0; padding:0; box-sizing:border-box;
        font-family:'Noto Sans KR', 'Roboto', 'Roboto Mono', sans-serif, monospace;
        font-size:16px;
    }
    a{ text-decoration:none;}
    ul, li{ list-style:none;}
    fieldset{border:0; font-size:0; margin:0; padding:0;}
    legend { border: 0;  padding: 0;  margin:0;}
    textarea { overflow: auto; }
    optgroup { font-weight: bold; }
    table { border-collapse: collapse; border-spacing: 0; }
    td, th { padding: 0; }
    main,nav,footer{display:block; width:100%;}
    button{ text-transform:none; border:0; outline:none; cursor:pointer;}
    -ms-overflow-style: none;
    ::-webkit-scrollbar {display: none;}
`;

export default GlobalStyle;
