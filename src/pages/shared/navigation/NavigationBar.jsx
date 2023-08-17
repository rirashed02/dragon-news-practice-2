// import { useContext } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className="bg-body-tertiary mb-4">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-decoration-none">
                            <Link to="/" className='text-decoration-none text-secondary ms-3'>Home</Link>
                            <Link className='text-decoration-none text-secondary ms-3 '>About</Link>
                            <Link className='text-decoration-none text-secondary ms-3'>Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <Link className='text-decoration-none text-secondary'><FaUserCircle style={{ fontSize: '40px', marginRight: '10px', cursor: 'pointer', }}></FaUserCircle></Link>
                            }
                            {
                                user ? <Button onClick={handleLogOut} className='text-bg-dark text-white'>Logout</Button>:
                                    <Link to="/login"><Button className='text-bg-dark text-white'>login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;