import React, { useState, useEffect } from "react";

import { Input, Form, Select, Switch, Slider, Divider } from "antd";

import Modal from "../../shared-ui/Modal/Modal";
import Button from "../../shared-ui/Button/Button";
import * as Rules from "../../utils/rules";
import {
  getAccommodation,
  getCity,
  getCountry,
  getEmploymentType,
  getFieldOfStudy,
  getGrade,
  getJobTitle,
  getQualification,
  getCategories,
  getJobTitlesById,
  getSalaryType,
  getSuitableFor,
} from "../../features/jobs/thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCountries,
  selectEmploymentTypes,
  selectJobTitles,
  selectAccommodations,
  selectCategories,
  selectJobTitlesById,
  selectSalaryType,
  selectQualifications,
  selectSuitableFor,
} from "../../features/jobs/slice";
import { useForm } from "antd/lib/form/Form";

const { Option } = Select;

const JobFilter = (props) => {
  const dispatch = useAppDispatch();
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const countries = useAppSelector(selectCountries);
  const accommodations = useAppSelector(selectAccommodations);
  const qualifications = useAppSelector(selectQualifications);
  const categories = useAppSelector(selectCategories);
  const jobTitlesById = useAppSelector(selectJobTitlesById);
  const salaryType = useAppSelector(selectSalaryType);
  const suitableFor = useAppSelector(selectSuitableFor);
  useEffect(() => {
    dispatch(getJobTitle());
    dispatch(getEmploymentType());
    dispatch(getCountry());
    dispatch(getCity());
    dispatch(getQualification());
    dispatch(getFieldOfStudy());
    dispatch(getGrade());
    dispatch(getAccommodation());
    dispatch(getCategories());
    dispatch(getSalaryType());
    dispatch(getSuitableFor());
  }, []);
  const options = [
    { value: "Takashi" },
    { value: "John" },
    { value: "Frank" },
    { value: "Traver" },
    { value: "Mili" },
    { value: "Jack" },
  ];
  const [value, setValue] = useState([]);
  const [form] = Form.useForm();
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

  const onFinish = (values) => {
    console.log(values);
    console.log(new URLSearchParams(values).toString());
  };
  return (
    <>
      <Modal className="center lg" show={props.show} onHide={props.onHide}>
        <Form form={form} onFinish={onFinish} layout="horizontal" className="filter-main">
          <div className="filter-header">
            <div className="filter-cell">
              <p>Filters</p>
            </div>
            <div className="filter-cell">
              {/* <Form.Item
                name="savedFilters"
                className="c-input c-form p-0"
                rules={null}
              >
                <Select placeholder="Saved filters">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item> */}
            </div>
          </div>
          <div className="filter-section">
            <div className="filters-row al-spacing">
              <Form.Item label="Job type" name="jobType" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  {employmentTypes?.map((d) => (
                    <Option value={d.id}>{d.title}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label={<label>Country</label>} name="addLocation" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  <Option value="employers">Employers</Option>
                  <Option value="agencies">Agencies</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item label="Category" name="category" className="c-input c-form p-0" rules={null}>
                <Select onSelect={(v) => dispatch(getJobTitlesById(v))}>
                  {categories?.map((d) => (
                    <Option value={d.id}>{d.title}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Job title" name="jobTitle" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  {" "}
                  {jobTitlesById?.map((d, i) => (
                    <Option key={i} value={d?.id}>
                      {d?.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item label="Salary type" name="salaryType" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select salary type">
                  {salaryType?.map((d, i) => (
                    <Option key={i} value={d?.id}>
                      {d?.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                extra={<span className="silder-equivalent">Equivalent to 2,000 GBP</span>}
                label="Salary range"
                name="salaryEnd"
                className="c-input c-form p-0"
                rules={null}>
                <Slider range={{ draggableTrack: true }} defaultValue={[0, 5000]} />
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item label="Gender" name="gender" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  <Option value="Male">Male</Option>
                  <Option value="Female"> Female </Option>
                  <Option value="Other"> Other </Option>
                </Select>
              </Form.Item>
              <Form.Item label="Qualification" name="qualification" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  {qualifications?.map((d, i) => (
                    <Option key={i} value={d?.id}>
                      {d?.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="filters-row">
              <Form.Item label="Accommodation" name="accommodation" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  {accommodations?.map((d, i) => (
                    <Option key={i} value={d?.id}>
                      {d?.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Suitable for" name="suitableFor" className="c-input c-form p-0" rules={null}>
                <Select placeholder="Select">
                  {" "}
                  {suitableFor?.map((d, i) => (
                    <Option key={i} value={d?.id}>
                      {d?.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="filter-section">
            <div className="filters-row">
              <div className="filter-cell column mr-4 mr-sm-0">
                <Form.Item valuePropName="checked" name="isAnnualFlight" label="Anual flight provided">
                  <Switch size="small" />
                </Form.Item>
                <Form.Item valuePropName="checked" name="isFamilyFlight" label="Include family flights">
                  <Switch size="small" />{" "}
                </Form.Item>
                <Form.Item label="Include utility bills" name="isUtilityBills">
                  {" "}
                  <Switch size="small" />
                </Form.Item>
              </div>
              <div className="filter-cell column ">
                <Form.Item valuePropName="checked" label="Include tuition fees" name="isTuitionFee">
                  <Switch size="small" />
                </Form.Item>
                <Form.Item valuePropName="checked" label=" Provides gratuity bonus" name="isGratuityBonus">
                  {" "}
                  <Switch size="small" />
                </Form.Item>
                <Form.Item valuePropName="checked" label="Provides visa" name="isProvideVisa">
                  {" "}
                  <Switch size="small" />{" "}
                </Form.Item>
              </div>
            </div>
            <Divider></Divider>
            <divide className="d-flex justify-content-center">
              <Button htmlType="submit" themeColor="green">
                Apply Filter
              </Button>
            </divide>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default JobFilter;
