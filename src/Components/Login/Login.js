import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin'
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
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
            window.alert('Reset password mail send Please check your email');
        }
        else {
            window.alert('please enter your email address');
        }

    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input className='loginform' ref={emailRef} type="text" placeholder='email' name='email' required />
                <br />
                <input ref={passwordRef} type="password" placeholder='password' name='password' required />
                <br />
                <br />
                <input type="submit" value="Signin" />
                <br />
            </form>
            {errorElement}
            <br />
            <SocialLogin></SocialLogin>
            <p>New Member? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister} >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>


            <ToastContainer />
        </div>
    );
};

export default Login;