import React from 'react'
import CButton from '../../uiComponents/shared/CButton/CButton'

function EmployerAndAgencies() {
    return (
        <div className="container">
            <div className="c-container-with-title-and-action">
                <CButton
                    type="large"
                    htmlType="submit"
                    // loading={tr`ue}
                    themeColor="primary"
                    block
                >
                    Create my profile
                         </CButton>
                <h3 className="mt-4">
                    Discover a new way of hiring & make the right connections.
                </h3>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h3>Save up to 75% of your annual recruitment budget</h3>
                    <h5><mark>No recruitment fees - no hidden charges</mark></h5>
                    <p>
                        Finding the right person can be costly,
                        and we can help you minimise those costs.
                        Start your search with 2 free jobs and try us out
                        with no strings attached.
                    </p>
                </div>
                <div className="col-lg-6">
                    {/* <img src={require('../../assets/images/')} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default EmployerAndAgencies
