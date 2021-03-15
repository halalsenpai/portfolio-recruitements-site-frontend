import React from "react";
import { Input, Form, Select, Popover, DatePicker } from "antd";
import PhoneInput from "react-phone-input-international";
import CButton from "../../uiComponents/shared/CButton/CButton";

//modal imports

import Modal from "../../uiComponents/shared/CModal/CModal"
import Checkbox from 'antd/lib/checkbox/Checkbox';


import * as Rules from "../../utils/rules";
const { Option } = Select;

const DashboardFrom = () => {
//   const WithHintText = ({ children }) => (
//     <Popover
//       placement="topLeft"
//       overlayInnerStyle={{ width: 400 }}
//       content={helperText}
//       trigger="click"
//     >
//       {children}
//     </Popover>
//   );
//   let helperText =
//     "This helps employers understand your family needs and accommodate accordingly such as booking you flights, providing accommodation and benefits such as free or discounted tuition fees.";

  return (
    <>
      {/* <div className="dash-formContainer">

        <div className="form-sections">

          <Form className="c-form second-container align-items-start">

            <div className="form-types">

              <img class=""  src={require("../../assets/images/icons/dashboard/Path 50.svg")}   alt="" />
              <h5>
                <b>Personal Info</b>
              </h5>

            </div>

            <div className="form-rows">

              <Form.Item
                name="familyStatus"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <div className="c-label">

                  <label className="required"> Family status </label>

                  <WithHintText>
                    <img
                      class="label-icon"
                      src={require("../../assets/images/icons/information-icon.svg")}
                      alt=""
                    />
                  </WithHintText>

                </div>

                <Select size="large" defaultValue="">
                  <Option value="">Select</Option>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="familyStatus"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >
                <div className="c-label">

                  <label className="required"> Gender </label>

                  <WithHintText>
                    <img class="label-icon" src={require("../../assets/images/icons/information-icon.svg")}  alt="" />
                  </WithHintText>

                </div>

                <Select size="large" defaultValue="">
                  <Option value="">Male</Option>
                  <Option value="jack">Female</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="dateOfbirth"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <label className="required">Date of birth</label>
                <DatePicker />

              </Form.Item>

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">

                  <label className="required">Passport nationality</label>

                  <WithHintText>
                    <img class="label-icon" src={require("../../assets/images/icons/information-icon.svg")}  alt="" />
                  </WithHintText>

                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                  <Option value="asfd">US </Option>
                  <Option value="lucy">Canada</Option>
                </Select>

              </Form.Item>

            </div>

            <div className="form-types">

              <img class="" src={require("../../assets/images/icons/dashboard/Union 11.svg")} alt="" />

              <h5>
                <b>Social</b>
              </h5>

            </div>

            <div className="form-rows">

              <Form.Item
                name="mobileNumber"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <label className="required">Mobile number</label>

                <PhoneInput
                  placeholder="Enter your mobile no."
                  country={"us"}
                  onChange={(phone) => console.log(phone)}
                />

             </Form.Item>

              <Form.Item
                name="firstName"
                className="c-input form-padding"
                rules={Rules.firstNameRule}
              >

                <label className="required">Email address</label>
                <Input placeholder="" size="small" type="text" />

              </Form.Item>

              <Form.Item
                name="firstName"
                className="c-input form-padding"
                rules={Rules.firstNameRule}
              >

                <label className="">Facebook profile link</label>
                <Input placeholder="" size="small" type="text" />

              </Form.Item>

              <Form.Item
                name="firstName"
                className="c-input form-padding"
                rules={Rules.firstNameRule}
              >

                <label className="">LinkedIn profile link</label>
                <Input placeholder="" size="small" type="text" />

              </Form.Item>

            </div>

            <div className="form-types">
              <img class="" src={require("../../assets/images/icons/dashboard/Group 4803.svg")} alt="" />

              <h5>
                <b>Other info</b>
              </h5>

            </div>

            <div className="form-rows">

              <Form.Item
                name="familyStatus"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <div className="c-label">
                  <label className="required">
                    Minimum monthly salary in AED
                  </label>
                </div>

                <Select size="large" defaultValue="">
                  <Option value="">Select</Option>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="familyStatus"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <div className="c-label">
                  <label className="required">Notice period</label>
                </div>

                <Select size="large" defaultValue="">
                  <Option value="">Sellect</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">
                  <label className="required">Native language</label>
                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">
                  <label className="required">Other languages</label>
                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                </Select>

              </Form.Item>

            </div>

            <div className="form-rows">

              <Form.Item
                name="familyStatus"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <div className="c-label">
                  <label className="required">Medical conditions</label>
                </div>

                <Select size="large" defaultValue="">
                  <Option value="">Select</Option>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="familyStatus"
                className="c-input form-padding"
                rules={Rules.phoneRule}
              >

                <div className="c-label">
                  <label className="required">Driving license</label>
                </div>

                <Select size="large" defaultValue="">
                  <Option value="">Sellect</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">
                  <label className="required">Visa status</label>
                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">
                  <label className="required">
                    Do you clear police certificate?
                  </label>
                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                </Select>

              </Form.Item>

            </div>

            <div className="form-types">
              <img class="" src={require("../../assets/images/icons/dashboard/Path 4042.svg")} alt="" />

              <h5>
                <b>Destinations</b>
              </h5>

            </div>

            <div className="form-rows">

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">
                  <label className="required">Current country</label>
                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="email"
                className="c-input form-padding"
                rules={Rules.emailRule}
              >

                <div className="c-label">
                  <label className="required">Current city</label>
                </div>

                <Select size="large" defaultValue="" style={{ width: 120 }}>
                  <Option value="">Select</Option>
                </Select>

              </Form.Item>

              <Form.Item
                name="firstName"
                className="c-input form-padding"
                rules={Rules.firstNameRule}
              >

                <label className="required">Desired locations to work in</label>
                <Input placeholder="" size="small" type="text" />
              </Form.Item>

            </div>

            <div className=" mb-0 align-self-center update-form">

                <CButton
                  themeColor="light"
                  type="large"
                  htmlType="submit"
                  // loading={true}
                  block
                >
                  Update
                </CButton>

              </div>

          </Form>

        </div>

      </div> */}

      <Modal  show={true} >
          <div className="modal-formContainer">

            <div className="modal-type">

                <h5>Add education</h5>

            </div>
            <Form className="c-form second-container align-items-start">

                <div className="m-form-row spacing">

                    <Form.Item name="email" className="c-input" rules={Rules.emailRule}>

                        <div className="c-label">
                            <label className="required">Qualification</label>
                        </div>

                        <Select size="large" defaultValue="" style={{ width: 120 }}>
                            <Option value="">Select</Option>
                        </Select>

                    </Form.Item>

                    <Form.Item name="email" className="c-input" rules={Rules.emailRule}>

                        <div className="c-label">
                            <label className="required">Subject / Field of study</label>
                        </div>

                        <Select size="large" defaultValue="" style={{ width: 120 }}>
                            <Option value="">Select</Option>
                        </Select>

                    </Form.Item>

                </div>

                <div className="m-form-row">
                    
                    <Form.Item name="firstName" className="c-input w-100 " rules={Rules.firstNameRule}>

                        <label className="required">Desired locations to work in</label>
                        <Input className="w-100" placeholder="" size="large" type="text" />
                    
                    </Form.Item>

                </div>

                <div className="m-form-row spacing">

                    <Form.Item name="dateOfbirth" className="c-input " rules={Rules.phoneRule}>

                    <label className="required">Start year</label>
                    <DatePicker />

                    </Form.Item>

                    <Form.Item name="dateOfbirth" className="c-input " rules={Rules.phoneRule}>

                        <label className="required">End year</label>
                        <DatePicker />

                    </Form.Item>


                    <Form.Item name="email" className="c-input" rules={Rules.emailRule}>

                        <div className="c-label">
                            <label className="required">Grade</label>
                        </div>

                        <Select size="large" defaultValue="" style={{ width: 120 }}>
                            <Option value="">Select</Option>
                        </Select>

                    </Form.Item>

                </div>

                <div className="m-form-row">

                    <Form.Item name="remember" className="mb-0" >

                        <Checkbox value="">
                            I currently study here
                        </Checkbox>

                    </Form.Item>
                </div>
                <div className="m-form-row">
                    <textarea className="w-100 my-4">

                    </textarea>
                </div>
                <div className="m-form-row left-align">

                    <CButton 
                    themeColor="light" 
                    type="large" 
                    htmlType="submit"
                    // loading={true}
                    block
                    >

                    Update

                    </CButton>

                </div>


            </Form>

          </div>    
      </Modal>

    </>
  );
};

export default DashboardFrom;
