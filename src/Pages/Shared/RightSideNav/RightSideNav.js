import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h5 className="mt-4">Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className="mb-2">
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-2">
                        <FaWhatsapp /> Whats App
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-2">
                        <FaTwitter /> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-2">
                        <FaTwitch /> Twitch
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-2">
                        Terms and Conditon
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>

    );
};

export default RightSideNav;