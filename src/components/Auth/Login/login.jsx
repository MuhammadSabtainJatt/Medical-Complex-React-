import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../../Config/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from '../../../AuthContext/authContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate=useNavigate()
  const { readUserProfile } = useAuthContext();
  const [data, setData] = useState({})

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    const { email, password } = data
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        readUserProfile(user)
        message.success("Login Successfully")
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        message.error("Login Not Successfull")
      });
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
          <p>If you don't have an account then <Link style={{textDecoration:"none"}} to="/auth/register"><span className='text-primary'>Register</span></Link></p>
          <div className=" m-auto loginButton btn btn-light" onClick={handleSubmit} >
            Login
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
