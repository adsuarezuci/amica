import { useNavigate } from 'react-router-dom'

const Logo = () =>{
    const navigate = useNavigate()
    const onClickLogo = () =>{
        navigate(`/`, { replace: true })
    }
    return(
        <div className="amica-logo" onClick={onClickLogo}>
            Logo
        </div>
    )
}
export default Logo