import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addNewUser} from "../redux/action";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const UserForm = () => {

  const nowData = useSelector((state)=>state.counterReducer)
  const dispatch = useDispatch();
  const onFinish = (values) => {
    window.history.back();  
    let id =nowData.length + 1;
    let k = "key"
    values.user[k] =id;
    values.user.tags = values.user.tags.split(",");

    dispatch(addNewUser(values.user));
  };

  return (
    <Form style={{position:"absolute",left:650,top:180}} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'firstName']}
        label="firstName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label="lastName"
        rules={[
          {
            required:true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'address']} label="address">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'tags']} label="tags">
        <Input />
      </Form.Item>
    
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;