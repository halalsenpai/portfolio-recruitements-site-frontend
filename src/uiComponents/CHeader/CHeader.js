import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo/logo-md.png';
import { useHistory, useLocation } from 'react-router-dom';

function CHeader() {
    const history = useHistory()
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
                    <Link
                        to="/jobs"
                        className={getActiveClassForPath(pathname, '/jobs')}>
                            Jobs
                            </Link>
                    <Link to="/">Services</Link>
                    <Link
                        to="/pricing"
                        className={getActiveClassForPath(pathname, '/pricing')}>
                        Pricing
                    </Link>
                </nav>
                <nav className="align-items-center" >
                    <Link to="/login" className="login b-text">Login</Link>
                    <Link to="/signup">
                        <button className="c-button primary">
                            Sign Up
                        </button>
                    </Link>
                </nav>
            </span>
            <span className="shadow-box"></span>
        </div>
    )
}

export default CHeader
