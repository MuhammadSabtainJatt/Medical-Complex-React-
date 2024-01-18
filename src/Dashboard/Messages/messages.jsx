import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';
import { List, Avatar, Typography, Space, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const { Text, Paragraph } = Typography;

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'UserFeedBack'));
    const querySnapshot = await getDocs(q);
    let array = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      array.push(data);
    });
    setMessages(array);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/friends-chatting-online-7097945-5786624.png"
            alt="Image"
            style={{ width: '100%' }}
          />
        </div><div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center d-sm-none d-lg      ">
          <h1 className='f-bold text-danger'>Messages</h1>
          <h4 className='f-bold text-danger'>These Messages are come from the frontend Page</h4>
          <Link to='/contact'>
            <div className="btn btn-danger m-2 p-2 f-bold">
              Messages
            </div>
          </Link>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <List
              itemLayout="vertical"
              size="large"
              dataSource={messages}
              renderItem={(item) => (
                <List.Item>
                  <Card className='shadow bg-light'>
                    <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: "lightgray", color: "black", fontWeight: "bolder", verticalAlign: 'middle' }} size="large" >
                        {item.name.charAt(0)}
                      </Avatar>}
                      title={<h5 strong>{item.name}</h5>}
                      description={<Text type="secondary">{item.email}</Text>}
                    />
                    <Paragraph >{item.message1}</Paragraph>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
