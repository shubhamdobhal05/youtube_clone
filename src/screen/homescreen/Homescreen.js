import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import CategoriesBar from "../../components/categories/CategoriesBar";
import Videos from "../../components/videos/Videos"

const Homescreen = () => {
    return (
        <Container>
            <CategoriesBar/>
            <Row>
                {[...new Array(20)].map(() => 
                    <Col lg={3} md={4}>
                        <Videos/>
                    </Col>
                )}
            </Row>
        </Container>
    )
};

export default Homescreen;