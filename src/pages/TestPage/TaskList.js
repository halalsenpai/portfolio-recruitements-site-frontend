import { Divider } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import CButton from "../../uiComponents/shared/CButton/CButton";

import CTaskItem from "../../uiComponents/shared/CTaskList/CTaskItem";

import CTaskEdit from "../../uiComponents/shared/CTaskList/CTaskEdit";

const TaskList = () => {
  return (
    <div className="task-width">
      <Form>
        <div className="task-header">
          <div className="task-header-left">
            <Checkbox />
            <h3 className="task-header-heading">Tasks</h3>
            <CButton themeColor="rounded" className="primary add-task-btn">
              <PlusOutlined />
            </CButton>
          </div>
          <div className="task-header-right">
            <a className="edit">Edit</a>
            <a className="delete">Delete</a>
          </div>
        </div>

        <Divider />
        <CTaskEdit />
        <FormItem>
          <div>
            <Divider />
            <CTaskItem type="complete" />
            <Divider />
            <CTaskItem type="due" />
            <Divider />
            <CTaskItem type="due-today" />
            <Divider />
            <CTaskItem />
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

export default TaskList;
