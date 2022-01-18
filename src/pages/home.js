import AmicaInfo from "../content/amicaInfo"
import ContactUsButton from "../content/contactUsButton"
import Intro from "../content/intro"
import ServiceCard from "../content/serviceCard"
import SlideItem from "../content/serviceSlideItem"
import ServicesSlide from "../content/servicesSlide"




const Home = () =>{
    return(
        <div>
            <Intro/>
            
            <div className="margin-top" >
                <div className="container" >
                    <h1>Servicios</h1>
                    <div className="row row-cols-auto justify-content-center">
                        <div className="col">
                            <ServiceCard title="Pruebas de Software End-to-End" description="Entregue un software de alta calidad usando metodología ágil."/>
                        </div>
                        <div className="col">
                            <ServiceCard title="Automatización de Pruebas" description="Ayudamos a acelerar el lanzamiento al mercado, al tiempo que mejora la efectividad y la capacidad de mantenimiento."/>
                        </div>
                        <div className="col">
                            <ServiceCard title="Pruebas de Performance" description="Trabajamos para reducir el riesgo y aportar estabilidad en las liberaciones."/>
                        </div>
                        <div className="col">
                            <ServiceCard title="Pruebas en aplicaciones móviles" description="Ayudamos a mejorar la calidad de sus aplicaciones móviles, garantizando que corran en las distintas plataformas requeridas"/>
                        </div>
                        
                    </div>
                    
                </div> 
                {/* <ServicesSlide/> */}
            </div>             
            <div className="margin-top" >
                <AmicaInfo className="margin-top"/>    
            </div>
            <div className="margin-top" >
                <div className="container" >
                    <ContactUsButton />    
                </div>
            </div>            
        </div>
    )
}
export default Home