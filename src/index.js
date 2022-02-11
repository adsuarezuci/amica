import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Outlet,
  Route,
} from "react-router-dom";

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'primereact/resources/themes/saga-blue/theme.css';  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import 'primeflex/primeflex.css';

import 'prismjs/themes/prism-coy.css';
import './layout/flags/flags.css';
import './layout/layout.scss';
import './App.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './content/scrollToTop';

ReactDOM.render(
  <BrowserRouter basename={'/amica'}>
    <ScrollToTop/>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<App name="home" />} />
            <Route path="empresa" element={<App name="empresa" />} />
            <Route path="servicios" element={<App name="servicios" />} />
            <Route path="equipo" element={<App name="equipo" />} />
            <Route path="blog" element={<App name="blog" />} />
            <Route path="contact" element={<App name="contact" />} />
            <Route path="pruebasEndToEnd" element={<App name="pruebasEndToEnd" />} />
        </Route>
    </Routes>
    
  </BrowserRouter >,
  document.getElementById('root')
);

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
