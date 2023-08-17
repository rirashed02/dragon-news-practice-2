import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import editorsInsight1 from '../../assets/editorsInsight1.png'
import editorsInsight2 from '../../assets/editorsInsight2.png'
import editorsInsight3 from '../../assets/editorsInsight3.png'

const News = () => {
    const news = useLoaderData();
    const { category_id, image_url, title, details } = news;
    return (
        <div>
            <div>
                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft />All news in this category </Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-4">
                <Row xs={1} md={2} lg={3} className="">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={editorsInsight1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={editorsInsight2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={editorsInsight3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default News;