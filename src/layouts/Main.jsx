import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";
import LeftNav from "../pages/shared/leftNav/LeftNav";
import RightNav from "../pages/shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/navigation/NavigationBar";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
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

export default Main;