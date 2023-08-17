import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page location', location)

    const from = location?.state?.from?.pathname || '/category/0'
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const signIn = result.user;
                console.log(signIn)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container className="w-25 mx-auto">
            <h3>Login here</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="login">
                    login
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary">
                    Don't have an Account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-muted text-success">
                </Form.Text>
                <Form.Text className="text-muted text-danger">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;