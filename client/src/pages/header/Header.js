
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from '../../store/authSlice'; // Import resetUser or equivalent
import './Header.css';

const Header = () => {
    const isAuth = useSelector(state => state.user.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = async () => {
        try {
            await fetch('http://localhost:5000/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });

            dispatch(resetUser()); // Reset user state in Redux
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <Navbar bg={isAuth ? 'grey' : 'dark'} data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <strong>{isAuth ? 'HOH-Dashboard' : 'HOH'}</strong>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    {isAuth ? (
                        <>
                            <Nav.Link as={Link} to='/dashboard' className='nav-link'>Dashboard</Nav.Link>
                            <Nav.Link className='nav-link' onClick={handleLogOut}>Log Out</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to='/' className='nav-link'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/features' className='nav-link'>Features</Nav.Link>
                            <Nav.Link as={Link} to='/pricing' className='nav-link'>Pricing</Nav.Link>
                            <Nav.Link as={Link} to='/login' className='nav-link'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/signup' className='nav-link'>Signup</Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
