import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme : DefaultTheme ={
    //white
    BG5 : "#E8F0FA", 
    BG4 : '#D2E1F6',

    //blue
    Main8: "#2E79E1",
    Main7: "#4084E1",
    Main6: "#528EE1",
    Main5: "#6499E1",
    Main4: '#7AA7E5',
    Main3: '#90B6E9',

    Text: "#000000",
    Accent: "#F02D2D"
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    body {
        line-height: 1;
    }
    menu, ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    
    }
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${(props) => props.theme.BG1};
        /* color: ${(props) => props.theme.Main1}; */
    }

    a{

    text-decoration: none;
    color: inherit;

    }`;

export default GlobalStyle;