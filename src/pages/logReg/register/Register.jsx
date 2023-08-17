import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleCreateRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const [accepted, setAccepted] = useState(false)
    const handleAccepted = event => {
            setAccepted(event.target.checked)
    }
    return (
        <Container className="w-25 mx-auto">
            <h3>Register here</h3>
            <Form onSubmit={handleCreateRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter Photo_URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>

                <Button disabled={!accepted} variant="primary" type="Register">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary">
                    Already have an Account? <Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-muted text-success">
                </Form.Text>
                <Form.Text className="text-muted text-danger">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;