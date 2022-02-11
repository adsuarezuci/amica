const ServiceCard = ({title,description,classLocal}) =>{
    const auxClass = "service-card service-card-animate "+classLocal;
    return(
        <>
            <div className={auxClass}>
                <div className="service-card-title">
                    <span className="service-card-title-text">
                        {title}
                    </span>
                </div>
                <div className="service-card-description">
                    {description}
                </div>
            </div>
        </>
    )
}

export default ServiceCard