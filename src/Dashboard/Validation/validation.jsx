import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Validation = () => {
const Navigate=useNavigate()
    const [code, setCode] = useState({validationCode:""})
    const handleChange = (e) => {
        setCode({ ...code, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if(code.validationCode!="Admin@67"){
            return message.error("Your Validation code in wrong Please Enter correct Validation code")
        }else{
            Navigate("/dashboard/main")
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
                    autoComplete="off"
                    className="form"
                >
                    <h2>Validation Page</h2>
                    <Form.Item
                        name="Validation Code"
                        rules={[{ required: true, message: 'Please input your Validation-Code!' }]}
                    >
                        <Input
                            name='validationCode'
                            value={code.validationCode}
                            size="large"
                            placeholder="Enter Correct Validation Code"
                            prefix={<FontAwesomeIcon icon={faLock} />}
                            onChange={handleChange}
                            className="w-100"
                        />
                    </Form.Item>
                    <div className=" m-auto loginButton btn btn-success w-50" onClick={handleSubmit} >
                        Submit
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Validation;
