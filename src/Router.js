

import React from "react";
import {
    BrowserRouter,
    Route,
} from "react-router-dom";
import App from "./App";

const AppRouter = () => {
    return (
        <BrowserRouter>
                <Route path="/" element={<App name="home" />}>
                    <Route path="/empresa" element={<App name="empresa" />} />
                    <Route path="/servicios" element={<App name="servicios" />} />
                    <Route path="/equipo" element={<App name="equipo" />} />
                    <Route path="/blog" element={<App name="blog" />} />
                </Route>


                {/* <Route path="/empresa">
                    <App name="empresa" />
                </Route>
                <Route path="/servicios">
                    <App name="servicios" />
                </Route>
                <Route path="/equipo">
                    <App name="equipo" />
                </Route>
                <Route path="/blog">
                    <App name="blog" />
                </Route> */}
        </BrowserRouter >
    )
}
export default AppRouter
