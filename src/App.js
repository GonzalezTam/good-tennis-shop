import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <NavBar/>
            <Container>
                <Switch>
                    <Route path="/" component={ItemListContainer}/>
                    <Route path="/category/:id" component={ItemListContainer}/>
                    {/* <Route path="/item/:id" component={ItemDetailContainer}/> */}
                    {/* <Route path="/categories/racquets" component={ItemListContainer}/>
                    <Route path="/categories/shoes" component={ItemListContainer}/>
                    <Route path="/categories/strings" component={ItemListContainer}/>
                    <Route path="/categories/balls" component={ItemListContainer}/> */}
                </Switch>
            </Container>
            <Main/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;