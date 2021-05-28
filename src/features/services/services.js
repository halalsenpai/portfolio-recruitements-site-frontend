import React from "react";
import "./_services.scss";
import "./_Responsive.scss";
import { Input, Form, Select } from "antd";
import Button from "../../shared-ui/Button/Button";
const { Option } = Select;
const { TextArea } = Input;

const services = () => {
  return (
    <div className="services-main">
      <div className="cust-reward-section">
        <h1 className="coming-soon">Coming soon...</h1>
        <p className="services-desc">Our loyalty and customer reward section, built around what you love.</p>
        <p className="full-desc">
          This page will be for services such as restaurants, estate agencies, air lines and other sectors that provide
          services to our users, providing you with discount codes and the best offers on the market exclusively
          available to Jobsmideast.com users.
        </p>
        <dinv className="icons">
          <img src={require("../../assets/images/Services/glass.png")} alt="" className="icons" />
          <img src={require("../../assets/images/Services/restaurants.png")} alt="" className="icons" />
          <img src={require("../../assets/images/Services/home.png")} alt="" className="icons" />
          <img src={require("../../assets/images/Services/airplane.png")} alt="" className="icons" />
          <img src={require("../../assets/images/Services/construction.png")} alt="" className="icons" />
        </dinv>
      </div>
      <div className="user-services">
        <div className="services-form">
          <p>
            If you would like to provide our users with your services, then please fill out the form below and we'll be
            in touch with you shortly.
          </p>
          <Form className="services-form-wrapper c-form">
            <Form.Item name="firstName" className="c-input" rules={null}>
              <label className="required">Name</label>
              <Input className="" size="" type="text" />
            </Form.Item>
            <Form.Item name="firstName" className="c-input" rules={null}>
              <label className="required">Work email adress</label>
              <Input className="" size="" type="text" />
            </Form.Item>
            <Form.Item name="firstName" className="c-input" rules={null}>
              <label className="required">Mobile phone number</label>
              <Input className="" size="" type="text" />
            </Form.Item>
            <Form.Item name="email" className="c-input select-w100" rules={null}>
              <div className="c-label">
                <label className="required">Employment type</label>
              </div>
              <Select size="" defaultValue="">
                <Option value="">Select</Option>
              </Select>
            </Form.Item>
            <Form.Item className="text-area">
              <label htmlFor="">Short Message (Optional)</label>
              <TextArea rows={4} />
            </Form.Item>
            <div className="submit-btn">
              <Button>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default services;
