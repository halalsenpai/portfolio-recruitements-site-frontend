import React from 'react';
import CButton from '../../uiComponents/CButton/CButton';
import CSlider from '../../uiComponents/CSlider/CSlider';

function Home() {
    return (
        <div className="home">
            <div className="c-container">
                <div className="first-container mr-4">
                    <span>
                        <p className="main-heading">The <mark>smartest </mark>jobsite in the <br /><mark>Middle East</mark>.</p>
                        <p>People at the core of every interaction</p>
                    </span>
                    <CButton type={'large'}>View demo</CButton>
                </div>
                <div className="second-container ml-4">
                <CSlider />
                </div>
            </div>
        </div>
    );
}
export default Home;
