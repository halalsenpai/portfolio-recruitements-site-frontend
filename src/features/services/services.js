import React, { useEffect } from "react";
import "./_services.scss";
import "./_Responsive.scss";
import { Input, Form, Select } from "antd";
import Button from "../../shared-ui/Button/Button";
import * as Rules from "../../utils/rules";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCategories, selectComingSoonSuccess, selectStatus } from "./slice";
import { getCategories, comingSoon } from "./thunk";
import { showSuccessMessage } from "../../utils/message";

const { Option } = Select;
const { TextArea } = Input;

const Services = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const comingSoonSuccess = useAppSelector(selectComingSoonSuccess);
  const isLoading = useAppSelector(selectStatus);

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getCategories());
    console.log("dispatched");
  }, []);

  useEffect(() => {
    if (comingSoonSuccess === true) {
      form.resetFields();
      showSuccessMessage("Thank you");
    }
  }, [comingSoonSuccess]);

  const onFinish = (v) => {
    const payload = v;
    dispatch(comingSoon({ payload }));
  };

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
          <Form form={form} onFinish={onFinish} layout="vertical" className="services-form-wrapper c-form">
            <Form.Item label="Name" name="name" className="c-input" rules={Rules.firstNameRule}>
              <Input className="" size="" type="text" />
            </Form.Item>
            <Form.Item label="Work email adress" name="email" className="c-input" rules={Rules.emailRule}>
              <Input className="" size="" type="text" />
            </Form.Item>
            <Form.Item label="Mobile phone number" name="mobile" className="c-input" rules={Rules.phoneRule}>
              <Input className="" size="" type="text" />
            </Form.Item>
            <Form.Item label="Category" name="categoryId" className="c-input select-w100" rules={Rules.requiredRule}>
              <Select>
                {categories?.map((d) => (
                  <Option value={d.id}>{d.title}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Short Message (Optional)" name="message" className="text-area">
              <TextArea rows={4} />
            </Form.Item>
            <div className="submit-btn">
              <Button loading={isLoading} htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Services;
