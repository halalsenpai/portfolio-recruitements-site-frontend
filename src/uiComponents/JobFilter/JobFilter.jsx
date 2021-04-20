import React, { useState } from "react";
import Modal from "../shared/CModal/CModal";
import Cbutton from "../shared/CButton/CButton";
import { Input, Form, Select, Switch, Slider, Space } from "antd";
import * as Rules from "../../utils/rules";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const JobFilter = (props) => {
  const options = [
    { value: "Takashi" },
    { value: "John" },
    { value: "Frank" },
    { value: "Traver" },
    { value: "Mili" },
    { value: "Jack" },
  ];
  const [value, setValue] = useState([]);
  const selectProps = {
    mode: "multiple",
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: "Select Item...",
    maxTagCount: "responsive",
  };
  return (
    <>
      <Modal className="center medium" show={props.show} onHide={props.onHide}>
        <Form className="filter-main">
          <div className="filter-header">
            <div className="filter-cell">
              <p>Filters</p>
            </div>
            <div className="filter-cell">
              <Form.Item
                name="savedFilters"
                className="c-input c-form p-0"
                rules={null}
              >
                <Select placeholder="Saved filters">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="filter-section">
            <div className="filters-row al-spacing">
              <Form.Item
                name="jobType"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Job type</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="addLocation"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Add location</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item
                name="category"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Category</label>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item
                name="subCategory"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Sub category</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item
                name="salaryType"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Salary type</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
              <Form.Item name="aed" className="c-input c-form p-0" rules={null}>
                <label className="text-center" htmlFor="">
                  5,000 AED
                </label>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                  style={{ width: 270 }}
                />
                <span className="silder-equivalent">
                  Equivalent t0 2,000 GBP
                </span>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item
                name="gender"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Gender</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="qualification"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Qualification</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item
                name="accommodation"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Accommodation</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="exclude"
                className="c-input c-form p-0"
                rules={null}
              >
                <label htmlFor="">Exclude</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item
                name="suitableFor"
                className="c-input c-form p-0"
                rules={null}
              >
                <label className="required" htmlFor="">
                  Suitable for
                </label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="filter-section">
            <div className="filters-row">
              <div className="filter-cell column mr-4">
                <span className="switches">
                  <Switch size="small" /> Anual flight provided
                </span>
                <span className="switches">
                  <Switch size="small" /> Include family flights
                </span>
                <span className="switches">
                  <Switch size="small" /> Include utility bills
                </span>
              </div>
              <div className="filter-cell column ">
                <span className="switches">
                  <Switch size="small" /> Include tuition fees
                </span>
                <span className="switches">
                  <Switch size="small" /> Provides gratuity bonus
                </span>
                <span className="switches">
                  <Switch size="small" /> Provides visa
                </span>
              </div>
            </div>
            <div className="filters-row margin-y">
              <Form.Item
                name="Filter Name"
                className="c-input form-padding w-100"
                rules={null}
              >
                <label htmlFor="filterName" className="required">
                  Filter Name
                </label>
                <Input
                  className="w-100"
                  placeholder=""
                  size="large"
                  type="text"
                  id="filterName"
                />
              </Form.Item>
            </div>
            <div className="filters-row margin-y">
              <Cbutton themeColor="green">Save filter</Cbutton>
              <span>Or</span>
              <Cbutton themeColor="green">Apply filter</Cbutton>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default JobFilter;
