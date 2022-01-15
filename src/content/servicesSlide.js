import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import SlideItem from "./serviceSlideItem";

const ServicesSlide = (props) =>{

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          //slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          //slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          //slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            
            
            <Carousel swipeable={true}
                draggable={true}
                centerMode={true}
                focusOnSelect={true}
                showDots={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="carousel-container"
                /* removeArrowOnDeviceType={["mobile"]} */
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="service-slide-item">
                <div className="service-slide-subitem">
                    <SlideItem title="Pruebas de Software End to End" description="Entregue un software de alta calidad usando metodología ágil."/>
                </div>
                <div className="service-slide-subitem">
                    <SlideItem title="Automatización de Pruebas" description="Ayudamos a acelerar el lanzamiento al mercado, al tiempo que mejora la efectividad y la capacidad de mantenimiento."/>
                </div>
                <div className="service-slide-subitem">
                    <SlideItem title="Pruebas de Performance" description="Trabajamos para reducir el riesgo y aportar estabilidad en las liberaciones."/>
                </div>
                <div className="service-slide-subitem">
                    <SlideItem title="Pruebas en aplicaciones móviles" description="Ayudamos a mejorar la calidad de sus aplicaciones móviles, garantizando que corran en las distintas plataformas requeridas"/>    
                </div>
            </Carousel>
                    
            
        </>
    )
}

export default ServicesSlide