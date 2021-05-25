import React, { useState } from "react";

import { Input, Form, Select, Switch, Slider } from "antd";

import Modal from "../../shared-ui/Modal/Modal";
import Button from "../../shared-ui/Button/Button";
import * as Rules from "../../utils/rules";

const { Option } = Select;

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
      <Modal className="center lg" show={props.show} onHide={props.onHide}>
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
                <label>Job type</label>
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
                <label>Add location</label>
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
                <label>Category</label>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item
                name="subCategory"
                className="c-input c-form p-0"
                rules={null}
              >
                <label>Sub category</label>
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
                <label>Salary type</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
              <Form.Item name="aed" className="c-input c-form p-0" rules={null}>
                <label className="text-center">5,000 AED</label>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
                <span className="silder-equivalent">
                  {/* Equivalent to 2,000 GBP */}
                </span>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item
                name="gender"
                className="c-input c-form p-0"
                rules={null}
              >
                <label>Gender</label>
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
                <label>Qualification</label>
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
                <label>Accommodation</label>
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
                <label>Exclude</label>
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
                <label className="required">Suitable for</label>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="filter-section">
            <div className="filters-row">
              <div className="filter-cell column mr-4 mr-sm-0">
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
                  size="large"
                  type="text"
                  id="filterName"
                />
              </Form.Item>
            </div>
            <div className="filters-row margin-y">
              <Button themeColor="green">Save filter</Button>
              <span>Or</span>
              <Button themeColor="green">Apply filter</Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default JobFilter;
