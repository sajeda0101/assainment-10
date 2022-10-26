import { createGlobalStyle } from "styled-components"

export const themeLight={
    body:'#E2E2E2',
    text:'#363537',
    toggleBorder:'#FFF',


}
export const themeDark={
    body:'#363537',
    text:'#FAFAFA',
    toggleBorder:'#6B8096',
}

export const GlobalStyles=createGlobalStyle`
body{
    align-items:center,
    background;${({theme})=>theme.body};
    color:${({theme})=>theme.text};
    display:flex;
    flex-direaction:column;
    justify-content:center;
    padding:0;
    margin:0;
}
`

