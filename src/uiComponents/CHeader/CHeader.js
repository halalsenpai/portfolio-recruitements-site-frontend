import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo-md.png';
import { useHistory, useLocation } from 'react-router-dom';

function CHeader() {
    const history = useHistory()
    console.log(history.location.pathname);
    const getActiveClassForPath = (currentLocation, path) => {
        return currentLocation === path ? 'active b-text' : ''
    }
    const { pathname } = history.location;
    return (
        <div className="c-header">
            <span className="inner-container">
                <Link to="/"><img className="logo" src={LogoImage} alt="Logo" /></Link>
                <nav className="menu">
                    <Link to="/" >Post a free job</Link>
                    <Link 
                    to="/employee-and-agencies" 
                    className={getActiveClassForPath(pathname, '/employee-and-agencies')}>
                        Employers & agencies
                        </Link>
                    <Link
                        to="/job-seekers"
                        className={getActiveClassForPath(pathname, '/job-seekers')}>
                        Job Seekers
                    </Link>
                    <Link to="/" >Jobs</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Pricing</Link>
                </nav>
                <nav >
                    <Link to="/login" className="login b-text">Login</Link>
                    <Link to="/signup" href="/" className="sign-up b-text">Sign Up</Link>
                </nav>
            </span>
        </div>
    )
}

export default CHeader
