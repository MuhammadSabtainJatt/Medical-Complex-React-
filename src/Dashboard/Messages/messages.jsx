import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';




export default function Messages() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, "UserFeedBack"));
    const querySnapshot = await getDocs(q);
    let array=[]
    querySnapshot.forEach((doc) => {
      const data=doc.data()
      array.push(data)
    });
    setMessages(array)
    console.log(messages)
  }
  return (
    <div className="container-fluid messages " style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  )
}
