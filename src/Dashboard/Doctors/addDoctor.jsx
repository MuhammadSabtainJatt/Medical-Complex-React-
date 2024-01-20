import React, { useState } from 'react';

export default function AddDoctor() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="mainContainer d-flex align-items-center justify-content-center text-center">
      <div className="card" style={{ maxWidth: "550px" }}>
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="form-group">
              <div className="position-relative mb-3">
                {/* Custom styling for file input */}
                <label htmlFor="file" className="circle-avatar">
                  {image ? (
                    <img src={image} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  ) : (
                    <>
                      <span style={{ fontSize: '24px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>📷</span>
                      <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    </>
                  )}
                </label>
              </div>
            </div>
            <div className="form-group">
              {/* Name Input */}
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
              {/* Phone Number Input */}
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              {/* Email Input */}
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              {/* Specialty Input */}
              <label htmlFor="specialty">Specialty:</label>
              <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
            </div>
            <div className="form-group">
              {/* Study Board Input */}
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
