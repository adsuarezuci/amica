
const SlideItem = ({title,description}) =>{
    return(
        <>
            <div>
                <span className="slide-item-title">{title}</span>
                <p className="slide-item-description">{description}</p>
            </div>
        </>
    )
}

export default SlideItem