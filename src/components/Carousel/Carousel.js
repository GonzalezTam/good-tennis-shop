import {Row, Container, Carousel} from 'react-bootstrap';
import { useLocation } from "react-router-dom";

const BrandCarousel = (props) => {
    const location = useLocation();
    if (location.pathname === '/cart' || location.pathname === '/cart/confirmation') {
        return null;
    } else {
        return (
            <Container >
                <Row xs={1} md={1} lg={1} className="mb-3 mt-3">
                    <Carousel fade>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="http://drive.google.com/uc?export=view&id=19Zl8ZTOjLGpx-U4FRefsvZ1gkK1DjAUD"
                            alt="Nike slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="http://drive.google.com/uc?export=view&id=1HrZAXYeBGYNEAvnViMk5N91zuQNw3fxj"
                            alt="Head slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="http://drive.google.com/uc?export=view&id=1MUNQNzUR-iAI-OPMZbkrLsrkJDnZ7Eu3"
                            alt="Asics slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="http://drive.google.com/uc?export=view&id=1LsXT1FkTAv7Qxt8nV8xLpvKSm5aTxOyH"
                            alt="Wilson slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="http://drive.google.com/uc?export=view&id=1s2-AqZkNZ2mqV0i2ppDmQM8Vi5r7vcOq"
                            alt="Lacoste slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="http://drive.google.com/uc?export=view&id=1AKr_6JLK0-cxWvRxNPIBTi81gIMyEKP5"
                            alt="Babolat slide"
                            />
                    </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        )
    };
}

export default BrandCarousel;
