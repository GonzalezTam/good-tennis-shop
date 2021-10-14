import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
// import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import { Container } from 'react-bootstrap';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Category from './views/Category/Category';
import Detail from './views/Detail/Detail';
import Cart from './views/Cart/Cart';
import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <NavBar/>
            {/* <Main/> */}
            <Container>
                <Switch>
                    <Route exact path="/" component={ItemListContainer}/>
                    <Route exact path="/category/:categoryId" component={Category}/>
                    <Route exact path="/item/:id" component={Detail}/>
                    <Route exact path="/" component={Cart}/>
                </Switch>
            </Container>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;