import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { collection, query } from 'firebase/firestore';
import { firestore } from '../../Config/config';

export default function departments() {
  

  const [departments, setDepartments] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, 'Departments'));
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3 ">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3">
            <div className="card w-100 py-3 border-0 shadow bg-warning text-center text-dark d-flex justify-content-center text-center flex-column " style={{ minHeight: "250px" }}>
              <h1>department1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
