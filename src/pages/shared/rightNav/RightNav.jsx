import { Button } from 'react-bootstrap';

import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../qZone/QZone';
const RightNav = () => {
    return (
        <div>
            <h4 className='mb-4'>Login With</h4>
            <div className='mb-5'>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
                <Button variant="outline-secondary"> <FaGithub></FaGithub> Login With github</Button>
            </div>
            <div className='mb-4'>
                <h4 className='mb-3'>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;