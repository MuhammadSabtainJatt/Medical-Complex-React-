import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { auth, firestore } from '../../../Config/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuthContext } from '../../../AuthContext/authContext';

const RegisterForm = () => {
  const { dispatch } = useAuthContext();

  const [data, setData] = useState({})

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    const { email, password } = data


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        createUserProfile(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        message.error("Some thing went wrong while Creating Account")
        // ..
      });

  }

  const createUserProfile = async (user) => {
    let { username } = data
    const { email, uid } = user

    const userData = {
      username ,email, uid, 
      dateCreated: serverTimestamp(),
      status: "active",
      roles: ["Patient"]
    }
console.log(user)
    try {
      await setDoc(doc(firestore, "user", uid), userData);
      message.success("A new user has been created successfully")
      dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } })
    } catch (e) {
      message.error("error")
      console.error("Error adding document: ", e);
    }
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
          className="form"
        >
          <h2>Register</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please Enter your Name!' }]}
          >
            <Input
              name='username'
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
          <p>If You have already Registered then <span className='text-primary'>Login</span></p>

          <div className=" m-auto loginButton btn btn-light" onClick={handleSubmit} >
            Register
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
