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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <div className="position-relative mb-3">
                    <label htmlFor="file" className="circle-avatar">
                      {image ? (
                        <img src={image} alt="Selected" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className='shadow' />
                      ) : (
                        <div style={{ width: '100px', height: '100px', border: " 2px black solid", borderRadius: "50px" }} className="shadow bg-light">
                          <span style={{ fontSize: '15px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>Upload Image</span>
                          <span style={{ fontSize: '24px', position: 'absolute', top: '70%', left: '68%', transform: 'translate(-50%, -50%)' }}>📷</span>
                          <input type="file" id="file" style={{ display: 'none', }} onChange={handleFileChange} />
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
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
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Email Input */}
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Specialty Input */}
                  <label htmlFor="specialty">Specialty:</label>
                  <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Study Board Input */}
                  <label htmlFor="studyBoard">Study Board:</label>
                  <input type="text" className="form-control" id="studyBoard" placeholder="Enter study board" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <div className="position-relative mb-3">
                    <label htmlFor="file" className="circle-avatar">
                      {image ? (
                        <img src={image} alt="Selected" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className='shadow' />
                      ) : (
                        <div style={{ width: '100px', height: '100px', border: " 2px black solid", borderRadius: "50px" }} className="shadow bg-light">
                          <span style={{ fontSize: '15px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>Upload Image</span>
                          <span style={{ fontSize: '24px', position: 'absolute', top: '70%', left: '68%', transform: 'translate(-50%, -50%)' }}>📷</span>
                          <input type="file" id="file" style={{ display: 'none', }} onChange={handleFileChange} />
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
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
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Email Input */}
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Specialty Input */}
                  <label htmlFor="specialty">Specialty:</label>
                  <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Study Board Input */}
                  <label htmlFor="studyBoard">Study Board:</label>
                  <input type="text" className="form-control" id="studyBoard" placeholder="Enter study board" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <div className="position-relative mb-3">
                    <label htmlFor="file" className="circle-avatar">
                      {image ? (
                        <img src={image} alt="Selected" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className='shadow' />
                      ) : (
                        <div style={{ width: '100px', height: '100px', border: " 2px black solid", borderRadius: "50px" }} className="shadow bg-light">
                          <span style={{ fontSize: '15px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>Upload Image</span>
                          <span style={{ fontSize: '24px', position: 'absolute', top: '70%', left: '68%', transform: 'translate(-50%, -50%)' }}>📷</span>
                          <input type="file" id="file" style={{ display: 'none', }} onChange={handleFileChange} />
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
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
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Email Input */}
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Specialty Input */}
                  <label htmlFor="specialty">Specialty:</label>
                  <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Study Board Input */}
                  <label htmlFor="studyBoard">Study Board:</label>
                  <input type="text" className="form-control" id="studyBoard" placeholder="Enter study board" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <div className="position-relative mb-3">
                    <label htmlFor="file" className="circle-avatar">
                      {image ? (
                        <img src={image} alt="Selected" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className='shadow' />
                      ) : (
                        <div style={{ width: '100px', height: '100px', border: " 2px black solid", borderRadius: "50px" }} className="shadow bg-light">
                          <span style={{ fontSize: '15px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>Upload Image</span>
                          <span style={{ fontSize: '24px', position: 'absolute', top: '70%', left: '68%', transform: 'translate(-50%, -50%)' }}>📷</span>
                          <input type="file" id="file" style={{ display: 'none', }} onChange={handleFileChange} />
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
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
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Email Input */}
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Specialty Input */}
                  <label htmlFor="specialty">Specialty:</label>
                  <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Study Board Input */}
                  <label htmlFor="studyBoard">Study Board:</label>
                  <input type="text" className="form-control" id="studyBoard" placeholder="Enter study board" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Doctor</h5>
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <div className="position-relative mb-3">
                    <label htmlFor="file" className="circle-avatar">
                      {image ? (
                        <img src={image} alt="Selected" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className='shadow' />
                      ) : (
                        <div style={{ width: '100px', height: '100px', border: " 2px black solid", borderRadius: "50px" }} className="shadow bg-light">
                          <span style={{ fontSize: '15px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>Upload Image</span>
                          <span style={{ fontSize: '24px', position: 'absolute', top: '70%', left: '68%', transform: 'translate(-50%, -50%)' }}>📷</span>
                          <input type="file" id="file" style={{ display: 'none', }} onChange={handleFileChange} />
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
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
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Email Input */}
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Specialty Input */}
                  <label htmlFor="specialty">Specialty:</label>
                  <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  {/* Study Board Input */}
                  <label htmlFor="studyBoard">Study Board:</label>
                  <input type="text" className="form-control" id="studyBoard" placeholder="Enter study board" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
