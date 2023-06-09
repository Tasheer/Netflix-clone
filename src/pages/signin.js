import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes'




export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        return firebase 
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)

        .then(() => {

            history.push(ROUTES.BROWSE);

        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError (error.message);
        });

    };

    return (
            <>
                <HeaderContainer>
                    <Form>
                        <Form.Title> Sign In </Form.Title>
                        {error && <Form.Error> { error } </Form.Error> }

                        <Form.Base onSubmit={handleSignIn} method="POST" >

                            <Form.Input 
                                placeholder = "Email Address"
                                value = {emailAddress}
                                onChange = {({target}) => setEmailAddress(target.value) }
                            />

                            <Form.Input 
                                type = "password"
                                placeholder = "Password"
                                autoComplete = "off"
                                value = {password}
                                onChange = {({target}) => setPassword(target.value) }
                            />

                            <Form.Submit 
                                disabled={isInvalid}
                                type = "submit"
                            >
                                Sign In
                            </Form.Submit>
                        </Form.Base>

                        <Form.Text>
                            New to Netflix? <Form.Link to= "/sign-up" > Sign Up now.</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more. <Form.Link to= "/sign-up" > Sign Up now.</Form.Link>
                        </Form.TextSmall>
                    </Form>
                </HeaderContainer>
                <FooterContainer />
            </>
    )
}