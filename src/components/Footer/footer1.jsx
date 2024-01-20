import React from 'react'
import { Link } from 'react-router-dom';

export default function footer1() {
    const phoneNumber = '0311-121211';
    const email = "abchospital@gmail.com"
    const handleCallButtonClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <div className="container">
            <div className="row bg-dark text-white p-5">
                <div className="col-12 col-md-6 col-lg-3 ">
                    <h5>
                        LATEST NEWS
                    </h5>
                    <hr />
                    <table className="  ">
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        src="https://www.heartlandmedical.com/wp-content/uploads/2012/06/ge-aisys-lg.jpg" style={{ width: "75px", height: "75px" }}
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </td>
                                <td className="align-middle text-center"><small className='f-bold'>Top Technology Inovation</small> <br /><small>26/12/2019</small></td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <img
                                        src="https://www.kvikradio.com/wp-content/uploads/2019/06/MRI-final.jpg" style={{ width: "75px", height: "75px" }}
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </td>
                                <td className="align-middle text-center"><small className='f-bold'>Regular Eye <br /> Examinator </small> <br /><small>29/02/2020</small></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12 col-md-6 col-lg-4 ">
                    <h5>
                        CONTACT INFORMATION
                    </h5>
                    <hr />
                    <table className="  ">
                        <tbody>
                            <tr>
                                <td className="p-1">
                                    <p style={{ color: "gold", fontWeight: "bolder" }}>Phone#</p>
                                </td>
                                <td className="p-1">
                                    <p className='contact' onClick={handleCallButtonClick}>03047191103  </p>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className="p-1">
                                    <p style={{ color: "gold", fontWeight: "bolder" }}>Email</p>
                                </td>
                                <td className="p-1">
                                    <p  ><Link to={`mailto:${email}`} className='contact'>
                                        hospital@gmail.com</Link> </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1">
                                    <p style={{ color: "gold", fontWeight: "bolder" }}>Address</p>
                                </td>
                                <td className="p-1">
                                    <p className='f-bold' >The London Independent Hospital
                                        1 Beaumont Square, London E1 4NL, United Kingdom</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12  col-lg-5 ">
                    <h5>
                        LOOKING FOR A GOOD DOCTOR?

                    </h5>
                    <hr /><div className="text-center">

                        <p style={{ color: "gold", fontSize: "small" }} >
                            Our seasoned and skilled team of physicians and practical nurses will leave no chance for any disease to survive!
                        </p>
                        <Link to='/'>
                            <div className="btn btn-warning my-4 ">
                                Make an Apointment
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
