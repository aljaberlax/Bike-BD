import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/"> Manage </Link>
                <Link to="/blog">Blogs</Link>
                {
                    user ?
                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log out</button>
                        :
                        <Link as={Link} to="login"> Login </Link>
                }
            </nav>

        </div>
    );
};

export default Header;