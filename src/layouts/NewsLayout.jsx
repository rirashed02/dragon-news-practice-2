import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";
import RightNav from "../pages/shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;