import React from 'react'
import CCardWithLines from '../../uiComponents/shared/CCardWithLines/CCardWithLines'

function ConfirmEmail() {
    return (
        <div className="c-container auth-wrapper">
            <CCardWithLines className="confirm-email-card">
                <div className="inner-container">
                <img className="mail-icon" src={require('../../assets/images/icons/mail-icon.svg')} alt="icon" />
                    <h5><mark className="blue">Please confirm your email address.</mark></h5>
                    <div className="divider"></div>
                    <p>To activate your account you need to confirm your email address.
                Please check your spam emails if you haven't received an email yet.</p>
                    <button className="btn btn-link">Send me another email</button>
                </div>
            </CCardWithLines>
        </div>
    )
}

export default ConfirmEmail
