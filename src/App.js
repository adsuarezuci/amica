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
import ContactUsPage from './pages/contactUsPage';
import Footer from './content/footer';

import ContactUsButton from "./content/contactUsButton"
import Waves from './images/waves.svg'
import PruebasEndToEnd from './pages/servicios/PruebasEndToEnd';

function App(props) {

  const [lan,setLan] = useState(Locales.FRENCH);
  

  const mostrarScroll = () =>{
    let distance = window.innerHeight*0.7
    let animates = document.querySelectorAll('.animate-enter')
    let scrollTop = document.documentElement.scrollTop
    for (let i = 0; i < animates.length; i++) {
      if(animates[i].offsetTop-distance < scrollTop){
        animates[i].classList.add("animate-enter-show")
      }
    }
  }

  const changeLan = (arg) =>{
    setLan(arg);
  }

  useEffect(() => {
    changeLan(Locales.SPANISH)
    window.addEventListener('scroll',mostrarScroll)
    mostrarScroll()
    
}, []);

  return (
    <I18nProvider locale = {lan}>
      <div className="page-container" >
          {(props.name === "empresa") ? <Empresa/> : ''}
          {(props.name === "equipo") ? <Equipo/> : ''}
          {(props.name === "servicios") ? <Servicios/> : ''}
          {(props.name === "home") ? <Home/> : ''}
          {(props.name === "blog") ? <Blog/> : ''}
          {(props.name === "contact") ? <ContactUsPage/> : ''}
          {(props.name === "pruebasEndToEnd") ? <PruebasEndToEnd/> : ''}
      </div>
      <MenuModern/>
      <div className="language-container">
          <Language onlangChange={changeLan}></Language>
      </div>
      {props.name !== "contact" && (<div className="contact-area" >
          <div>
              <img src={Waves} style={{width:'100%', maxHeight:'100px'}}/>
          </div>
          <div style={{backgroundColor:'#aef3eb',marginTop:'-5px'}}>
              <div className="container" style={{padding:'30px', marginBottom:'40px'}}>
                  <div className="row">
                      <div className="col-12 ">
                          <div style={{maxWidth:'600px'}}>
                              <p className="animate-enter">
                                Podemos ser su aliado estratégico para crear software de calidad, 
                                cuéntenos sobre el problema y nosotros encontraremos la mejor solución digital.
                              </p>
                          </div>
                      </div>
                      <div className="col-12">
                          <div className="animate-enter" style={{marginBottom:'30px'}}>
                              <ContactUsButton />    
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>)}   
      <footer>
        <Footer/>
      </footer>
    </I18nProvider>
  );
}

export default App;
