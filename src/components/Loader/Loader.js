import React from 'react';
import { Spinner, Row } from 'react-bootstrap';

const Loader = () => {
    return (
        <Row xs={1} md={3} lg={4} className="justify-content-center">
            <Spinner animation="border" role="status" variant="warning" className="" />
        </Row>
    )
}

export default Loader;