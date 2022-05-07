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

                <Link to="/blog">Blogs</Link>
                {
                    user && <>
                        <Link to="/manage"> Manage Items </Link>
                        <Link to="/additems"> Add Item </Link>
                        <Link to="/myitems"> My Items </Link>

                    </>
                }
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