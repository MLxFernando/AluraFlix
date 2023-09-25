import Button from "../button/button"
import "./style.css"

const Header = () => {
    return <>
        <header>
            <img src="../Logo.png" alt="Logo " className="logo"/>
            <Button titulo = "Nuevo Video"/>  
        </header>
    </>
}

export default Header 