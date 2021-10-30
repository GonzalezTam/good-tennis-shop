import {Row, Container, Carousel} from 'react-bootstrap';
import { useLocation } from "react-router-dom";

const BrandCarousel = (props) => {
    const location = useLocation();
    // console.log(location.pathname);
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
                            src="https://www.tennisplaza.com/company/default/assets/Image/new-footwear-rafa.png"
                            alt="Nike slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="https://uploads-ssl.webflow.com/5e5e560768d0a562f01cdf1e/6026832c04cd518da0da8570_210121_mainteaser_head_radical-03.jpg"
                            alt="Head slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="https://www.tennis-point.es/on/demandware.static/-/Library-Sites-TennisPoint/es_ES/dw35fcbed2/webflow/16242/images/210729_mainteaser_asics_novak_pack-03.jpg"
                            alt="Asics slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="https://www.tennis-point.es/on/demandware.static/-/Library-Sites-TennisPoint/es_ES/dwafb461af/webflow/16229/images/210915_mainteaser_fs_wilson_blade_launch.jpg"
                            alt="Wilson slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="https://www.tennis-point.es/on/demandware.static/-/Library-Sites-TennisPoint/es_ES/dw0df53303/webflow/16248/images/201007_mainteaser_lacoste_fo.jpg"
                            alt="Lacoste slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                            <img
                            className="d-block w-100"
                            src="https://www.tennis-point.es/on/demandware.static/-/Library-Sites-TennisPoint/es_ES/dw6aa49ebf/webflow/16231/images/190810_racket_babolat_pure_strike_thiem.jpg"
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
