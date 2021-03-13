import { Input, Form, Radio } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CButton from '../../uiComponents/shared/CButton/CButton';
import { userTypes } from '../../utils/constants';


function SignUp() {
    const [role,setRole] = useState(userTypes.SEEKER);
    const history = useHistory();
  
    const onFinish = () =>{
        
        switch(role){
            case userTypes.SEEKER:
                history.push('user-signup');
                return;
            case userTypes.EMPLOYER:
                history.push('employer-signup');
                return;
            case userTypes.AGENCY:
                history.push('agency-signup');
                return;
            default:
                history.push('user-signup');
                return;

        }
    }

     const onChange = e => {

        console.log('radio checked', e.target.value);

       setRole( e.target.value);

      };

    return (
        <div className="c-container auth-wrapper">

            <div className="signup-container with-form role-container">

                <div className="first-container role-select">

                    <img src={require('../../assets/images/logo/logo-white.png')} alt="logo" />

                </div>
                <Form className="second-container c-form w-100" onFinish={onFinish}>

                <img src={require('../../assets/images/auth/signup-illus.png')} alt="logo" />

                    <span class="mt-3">

                    <h3 className="form-title">
                        
                        <mark>Create an account</mark>
                        
                    </h3>
                    
                    <Radio.Group onChange={onChange} value={role}>

                        <Radio value={userTypes.SEEKER}>
                            I'm looking for jobs
                        </Radio>

                        <Radio value={userTypes.EMPLOYER}>
                            I'm an employer
                        </Radio>

                        <Radio value={userTypes.AGENCY}>
                             I'm a recruiter
                        </Radio>
                    </Radio.Group>

                    </span>

                    <Form.Item>

                        <CButton
                           
                            type="large"
                            htmlType="submit"
                            // loading={true}
                            block
                        >
                            Next
                        
                         </CButton>

                    </Form.Item>

                </Form>

            </div>

        </div>
    )


}

export default SignUp
