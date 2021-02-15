import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/images/logo-md.png'
function CHeader() {
    return (
        <div className="c-header">
        <span className="inner-container">
        <Link to="/"><img className="logo" src={LogoImage} alt="Logo" /></Link>
            <nav className="menu">
                <a href="/">Post a free job</a>
                <a href="/">Employers</a>
                <a href="/" className="active b-text">Job Seekers</a>
                <a href="/">Jobs</a>
                <a href="/">Services</a>
                <a href="/">Pricing</a>
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
