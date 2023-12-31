import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
const initialData={email:"" , password:""}
const LoginForm = () => {
  const [data,setData]=useState(initialData)

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
    const {email,password} =data



    
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
          <h2>Login</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              name='email'
              value={data.email}
              size="large"
              placeholder="Username"
              prefix={<FontAwesomeIcon icon={faEnvelope} />}
              className="w-100"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
            name='password'
            value={data.password}
              size="large"
              placeholder="Password"
              prefix={<FontAwesomeIcon icon={faLock} />}
              onChange={handleChange}
            />
          </Form.Item>

          <div className="w-25 m-auto loginButton btn btn-light" onClick={handleSubmit} >
            Login
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
