import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
    return (
        <>
        <header>
            <div className="logo-header">
                <img alt="logo" src="goodTennisShop.png"/>
                <h6>Free shipping & returns over $50</h6>
            </div>
        <NavBar/>
        </header>
        </>
    );
}

export default Header;
