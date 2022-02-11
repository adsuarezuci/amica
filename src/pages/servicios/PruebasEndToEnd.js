import React from 'react';
import AmicaItem from '../../content/amicaItem';

export default function PruebasEndToEnd() {

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12" >
                    <p className='c-title animate-enter-show'>Pruebas de Software End-to-End</p>
                </div>
                <div className="col-lg-12" >
                    <p className='animate-enter-show'>Entregue un software de alta calidad usando metodología ágil.</p>
                    <p className='animate-enter-show'>
                        Identificamos las áreas claves de riesgos y ayudamos a construir un plan de pruebas adecuado, 
                        orientado hacia una cultura de entrega continua, garantizando realizar suficientes pruebas 
                        antes del lanzamiento. Ayudamos a tu compañía a alcanzar el máximo nivel de madurez de testing.
                    </p>
                </div>
                
            </div>
        </div>
        <div className="margin-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" >
                        <p className='c-title animate-enter'>Áreas claves de este servicio</p>
                    </div>
                </div>
                <div className="row ">
                    <AmicaItem classLocal={"col-md-6"} 
                        title={"Pruebas Funcionales"}
                        description={"Nos aseguramos de que su software funciona como estaba previsto en todos los dispositivos."}
                    />
                    <AmicaItem classLocal={"col-md-6"} 
                        title={"Pruebas de Carga"}
                        description={"Nos aseguramos de que su sitio web pueda manejar grandes cargas durante peaks de tráfico, mientras usa los recursos de manera eficiente, evitando una fuga de clientes potenciales debido a los lentos tiempos de respuesta de las páginas."}
                    />
                    <AmicaItem classLocal={"col-md-6"} 
                        title={"Pruebas de Aplicaciones Móviles"}
                        description={"Tenga la confianza que su aplicación funciona en todos los dispositivos y sistemas operativos más importantes."}
                    />
                    <AmicaItem classLocal={"col-md-6"} 
                        title={"Pruebas de Automatización"}
                        description={"Automatice los casos de prueba correctos para aumentar la cobertura de la prueba, reducir los costos, acelerar el tiempo de comercialización y optimizar el trabajo de los testers para manejar pruebas más interesantes y sofisticadas."}
                    />
                    <AmicaItem classLocal={"col-md-6"} 
                        title={"Pruebas de Usabilidad"}
                        description={"Las pruebas de usabilidad otorgan una idea precisa sobre las dificultades que experimentan los usuarios, al navegar e interactuar con las plataformas web. En Abstracta consideramos que la usabilidad debe ponerse a prueba a lo largo de todo el ciclo de vida del producto."}
                    />
                    <AmicaItem classLocal={"col-md-6"} 
                        title={"Pruebas de Seguridad"}
                        description={"Garantizamos la seguridad de su software y los datos de sus usuarios."}
                    />
                </div>
            </div>
        </div>
        </>
    );
}
