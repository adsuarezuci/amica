import React, { useEffect, useState } from 'react';

/* import './i18n.css'; */

import { I18nProvider, Locales } from './i18n';
import MenuModern from './content/menu';
import Empresa from './pages/empresa';
import Servicios from './pages/servicios';
import Equipo from './pages/equipo';
import Blog from './pages/blog';
import Home from './pages/home';
import Language from './i18n/language';
import { FormattedMessage } from "react-intl"

function App(props) {

  const [lan,setLan] = useState(Locales.FRENCH);

  const changeLan = (arg) =>{
    setLan(arg);
    console.log(arg);
  }

  useEffect(() => {
    changeLan(Locales.SPANISH)
    console.log(props.name)
}, []);

  return (
    <I18nProvider locale = {lan}>
      
      
      <div className="page-container" >
          {(props.name === "empresa") ? <Empresa/> : ''}
          {(props.name === "equipo") ? <Equipo/> : ''}
          {(props.name === "servicios") ? <Servicios/> : ''}
          {(props.name === "home") ? <Home/> : ''}
          {(props.name === "blog") ? <Blog/> : ''}
      </div>
      <MenuModern/>
      <div className="language-container">
          <Language onlangChange={changeLan}></Language>
      </div>
      <footer>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>

      </footer>
      

    </I18nProvider>
  );
}

export default App;
