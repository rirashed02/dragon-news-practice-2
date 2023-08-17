import moment from 'moment/moment';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCart = ({ news }) => {
    const { _id, rating, total_view, title, author, thumbnail_url, image_url, details } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '50px' }} src={author?.img} roundedCircle />
                    <div className='ps-3 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div className='fs-4'>
                        <FaRegBookmark></FaRegBookmark><FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar>f</FaStar>}>
                        </Rating>
                        <span>{rating?.number}</span>
                    </div>
                    <dir>
                        <FaEye></FaEye>{total_view}
                    </dir>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;