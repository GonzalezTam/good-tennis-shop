import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <Container>
                <ItemListContainer string1="Catalogo en proceso" string2="vuelva prontos.."/>
                <Main/>
                <Footer/>
            </Container>
        </>
    );
}

export default App;