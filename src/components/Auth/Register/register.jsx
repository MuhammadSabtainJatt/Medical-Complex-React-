import React, { useState } from 'react';
import {  Form, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
const initialData={userName:"",email:"" , password:""}
const RegisterForm = () => {
  const [data,setData]=useState(initialData)

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
    const {name,email,password} =data 
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="main">
      <div className="container">
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
        >
          <h2>Register</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please Enter your Name!' }]}
          >
            <Input
              name='Name'
              value={data.name}
              size="large"
              placeholder="Enter Your Full Name"
              prefix={<FontAwesomeIcon icon={faUser} className='me-1' />}
              className="w-100"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please Enter your email!' }]}
          >
            <Input
              name='email'
              value={data.email}
              size="large"
              placeholder="Enter Your Email"
              prefix={<FontAwesomeIcon icon={faEnvelope} className='me-1' />}
              className="w-100"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please Enter your password!' }]}
          >
            <Input.Password
            name='password'
            value={data.password}
              size="large"
              placeholder="Password"
              prefix={<FontAwesomeIcon icon={faLock} className='me-1' />}
              onChange={handleChange}
            />
          </Form.Item>
          <p>If You don't have na account then Register</p>

          <div className="w-25 m-auto loginButton btn btn-light" onClick={handleSubmit} >
            Register
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
