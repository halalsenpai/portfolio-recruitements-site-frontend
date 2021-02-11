import React from 'react';
import CButton from '../../uiComponents/CButton/CButton';

function Home() {
    return (
        <div className="home">
            <div className="c-container">
                <div className="first-container">
                    <span>
                        <p className="main-heading">The smartest jobsite in the <br />Middle East.</p>
                        <p>People at the core of every interaction</p>
                    </span>
                    <CButton>View demo</CButton>
                </div>
                <div className="second-container ml-4">
                    <img src={require('../../assets/images/banImg1.png')} alt="img1" />
                </div>
            </div>
        </div>
    );
}
export default Home;
