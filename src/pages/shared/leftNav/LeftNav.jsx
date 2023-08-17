import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic1 from '../../../assets/1.png'
import pic2 from '../../../assets/2.png'
import pic3 from '../../../assets/3.png'
const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className="ps-4 mt-3 mb-4">
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</Link></p>)
                }
            </div>
            <div>
            <Row xs={1} md={1} lg={1} className="">
                    <Col className="mb-5">
                        <Card>
                            <Card.Img variant="top" src={pic1} />
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
                    <Col className="mb-5">
                        <Card>
                            <Card.Img variant="top" src={pic2} />
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
                    <Col className="mb-5">
                        <Card>
                            <Card.Img variant="top" src={pic3} />
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

export default LeftNav;