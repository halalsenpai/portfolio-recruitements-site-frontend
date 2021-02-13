import { Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react'
import { Link } from 'react-router-dom';
import CButton from '../../uiComponents/shared/CButton/CButton';
import * as Rules from '../../utils/rules';
function Login() {
    const onFinish = () => {

    }
    return (
        <div className="c-container pt-3 pb-0">
            <div className="login-container">
                <div className="first-container">
                    <img src={require('../../assets/images/logo-md.png')} alt="logo" />
                    <p>The smartest job site in Middle East.</p>
                </div>
                <Form className="second-container" name="normal_login" onFinish={onFinish}>
                    <h3>User Login</h3>
                    <Form.Item name="email" className="c-input" rules={Rules.emailRule} >
                    <label>Email</label>
                        <Input placeholder="Email" size="large"  type="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={Rules.passwordRule}
                        className="c-password-input mb-2"
                    >
                    <label>Password</label>
                        <Input.Password placeholder="Password" className="c-input" size="large" />
                    </Form.Item>
                
                    <span className="d-flex justify-content-between align-items-center w-50 alt-text">
                        <Form.Item name="remember" className="mb-0" >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Link to="/" className="alt-text">Forgot Password</Link>
                    </span>
                    <Form.Item>
                        <CButton
                            type="large"
                            htmlType="submit"
                            // loading={true}
                            block
                        >
                            Login
                         </CButton>
                    </Form.Item>
                    <Form.Item className="alt-text">
                        <p>Don't have an account? <Link to="/sign-up"><mark> Sign up</mark></Link></p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
