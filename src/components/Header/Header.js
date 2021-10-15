import "./Header.css";
import {Row, Col} from 'react-bootstrap';
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Row className="justify-content-center gx-0">
                <Col className="d-flex justify-content-center">
                    <Link to={"/"}><Logo /></Link>
                </Col>
                <Col className="d-flex justify-content-center m-auto">
                    <h6>Free shipping & returns over $50</h6>
                </Col>
            </Row>
        </header>
    );
}

export default Header;
