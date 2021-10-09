import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <Container>
                <ItemListContainer/>
                <Main/>
                <Footer/>
            </Container>
        </>
    );
}

export default App;