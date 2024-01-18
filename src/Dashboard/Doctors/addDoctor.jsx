import React from 'react';

export default function AddDoctor() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center text-center">
      <div className="card" style={{ maxWidth: "550px" }}>
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="form-group">
              <div className="">
                <input type="file" placeholder='Add Picture' className="" id="file" style={{width:'100px',height:"100px",border:"black",borderRadius:"50px",backgroundColor:"gray"}} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="specialty">Specialty:</label>
              <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
            </div>
            <div className="form-group">
              <label htmlFor="studyBoard">Study Board:</label>
              <input type="text" className="form-control" id="studyBoard" placeholder="Enter study board" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
