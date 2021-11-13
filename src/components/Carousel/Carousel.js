import {Row, Container, Carousel} from 'react-bootstrap';
import { useLocation } from "react-router-dom";

const BrandCarousel = (props) => {
    const location = useLocation();
        return (
            <Container className={location.pathname === '/cart' || location.pathname === '/cart/confirmation' ? "d-none" : ""}>
                <Row xs={1} md={1} lg={1} className="mb-3 mt-3">
                    <Carousel fade>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="images/carousel_nike_rafa.png"
                            alt="Nike slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="images/carousel_head_radical.jpg"
                            alt="Head slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="images/carousel_asics_novak.jpg"
                            alt="Asics slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="images/carousel_wilson_blade.jpg"
                            alt="Wilson slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="images/carousel_lacoste.jpg"
                            alt="Lacoste slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="images/carousel_babolat_thiem.jpg"
                            alt="Babolat slide"
                            />
                    </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        )
    };

export default BrandCarousel;