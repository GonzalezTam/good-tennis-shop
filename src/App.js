import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import { Container } from 'react-bootstrap';
import Home from "./views/Home/Home";
import Category from './views/Category/Category';
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
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/category/:category" component={Category}/>
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