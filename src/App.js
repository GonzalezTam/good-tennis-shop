import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer/Footer";
import { Container } from 'react-bootstrap';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Category from './views/Category/Category';
import Brand from './views/Brand/Brand';
import Detail from './views/Detail/Detail';
import Cart from './views/Cart/Cart';
import { CartProvider } from './CartContext';


const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <Carousel/>
                <Container>
                    <Switch>
                        <Route exact path="/" component={ItemListContainer}/>
                        <Route exact path="/category/:category" component={Category}/>
                        <Route exact path="/brand/:brand" component={Brand}/>
                        <Route exact path="/item/:id" component={Detail}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route path="*"><Redirect to="/"/></Route>
                    </Switch>
                </Container>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;