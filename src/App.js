
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { router } from './components/routes/Routes';
import {themeLight,themeDark} from './components/theme/theme'

const StyleApp=styled.div;
function App() {

  const [theme,setTheme]=useState('light')
  const themeToggle=()=>{
    theme==='light'?setTheme('dark'):setTheme('light')
  }
  
  return (
  
     <RouterProvider router={router}>

</RouterProvider>
   
  );
}

export default App;
