import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container>
            <div className='text-center mb-4'>
                <img src={logo} alt="" />
                <p className='mt-2 text-secondary'>journalism without fear or favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='d-flex mb-3'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={80} >
                    I can be a React component, multiple React components, or just some text.  I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;