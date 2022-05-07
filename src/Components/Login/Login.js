import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }


    const resetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }

    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="text" placeholder='email' name='email' required />
                <br />
                <input ref={passwordRef} type="password" placeholder='password' name='password' required />
                <br />
                <input type="submit" value="Signin" />
            </form>
            <SocialLogin></SocialLogin>
            <p>New Member? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister} >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            
            
            <ToastContainer />
        </div>
    );
};

export default Login;