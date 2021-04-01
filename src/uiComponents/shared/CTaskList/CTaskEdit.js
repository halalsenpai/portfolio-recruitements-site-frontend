import { Input, Form, DatePicker } from "antd";

import React from "react";
import CButton from "../CButton/CButton";

const CTaskEdit = () => {
  return (
    <div className="c-task-edit">

      <Form classname="c-form">

        <Form.Item name="task" className="c-input">

          <Input
          
            className="w-100"
            placeholder="This is your task list, edit this text and press save"
            size="large"
          />

          <div className="date-save-div">

            <DatePicker className="date-picker" />

                <CButton themeColor="blue" className="float-right">
                  Save
                </CButton>
          </div>


        </Form.Item>
        
      </Form>
    </div>
  );
};

export default CTaskEdit;
