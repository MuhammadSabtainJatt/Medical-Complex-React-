import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import care from '../../Asset/Image/about-01-803x458.jpg'
import { faHospital, faNotesMedical, faSyringe, faUserNurse, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {

  const [year, setYear] = useState(0);
  const [doctor, setDoctor] = useState(0);
  const [department, setDepartment] = useState(0);
  const [medService, setMedService] = useState(0);

  const years = 26;
  const doctors = 7;
  const departments = 26;
  const medicalServices = 12;

  useEffect(() => {
    const yearInterval = setInterval(() => {
      if (year < years) {
        setYear((prevYear) => prevYear + 1);
      }
    }, 50);

    const doctorInterval = setInterval(() => {
      if (doctor < doctors) {
        setDoctor((prevDoctor) => prevDoctor + 1);
      }
    }, 50);

    const departmentInterval = setInterval(() => {
      if (department < departments) {
        setDepartment((prevDepartment) => prevDepartment + 1);
      }
    }, 50);

    const medServiceInterval = setInterval(() => {
      if (medService < medicalServices) {
        setMedService((prevMedService) => prevMedService + 1);
      }
    }, 50);

    return () => {
      clearInterval(yearInterval);
      clearInterval(doctorInterval);
      clearInterval(departmentInterval);
      clearInterval(medServiceInterval);
    };
  }, [year, doctor, department, medService, years, doctors, departments, medicalServices]);

  return (
    <div className="container-fluid">
      <div className="container mainAbout">
        <div className="row">
          <div className="col">
            <div className="image mt-5" >
              <h1 style={{ color: "gold" }}>About Us</h1>
            </div>
            <p className='my-3'><Link style={{ textDecoration: "none", color: "gold" }}> Home </Link> <span> -  About </span>
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="row my-5 aboutClinic">
        <div className="col-12 col-lg-8">
          <img src={care} className='rounded-5 w-100 shadow image' alt="" />
        </div>
        <div className="col-12 col-lg-4">
          <h1 className='my-4 textWithLine'>About Clinic</h1>
          <p className='my-2 text'>
            The Medical private medical clinic specializes in a wide variety of health issues, related to absolutely any age or severity level. Our seasoned team of highly trained physicians and practical nurses will be glad to help you 24/7!
          </p>
          <div className="row my-5">
            <div className="col-12 col-md-6 d-flex justify-content-center text-center">
              <h1 className='text-warning '>
                <FontAwesomeIcon icon={faUserNurse} />
              </h1>
              <p className='ms-2'>
                Qualified Doctor <br />
                <span className='text'>25 years of experience</span>
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center text-center">
              <h1 className='text-warning'>
                <FontAwesomeIcon icon={faNotesMedical} />
              </h1>
              <p className='ms-2'>
                Individual Approach
                <br />
                <span className='text'>25 years of experience</span>
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6 d-flex justify-content-center text-center">
              <h1 className='text-warning'>
                <FontAwesomeIcon icon={faHospital} />
              </h1>
              <p className='ms-2'>
                Emergency Help
                <br />
                <span className='text'>25 years of experience</span>
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center text-center">
              <h1 className='text-warning '>
                <FontAwesomeIcon icon={faSyringe} />
              </h1>
              <p className='ms-2'>
                Modern Equipment
                <br />
                <span className='text'>25 years of experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* ////////////////////////////////////////////////////////////////////////////////// */}

      <div className="container">
        <div className="row counting bg-dark text-white text-center">
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <h1>{year}</h1>
            YEARS OF EXPERIENCE
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <h1>{`0${doctor}`}</h1>
            EXPERT DOCTORS
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <h1>{department}</h1>
            DEPARTMENTS
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <h1>{medService}</h1>
            MEDICAL SERVICES
          </div>
        </div>
      </div>
      <hr />

      <div className="row my-5 p-3">
        <div className="col-12 col-lg-9 ">
          jsdhkjshedflore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, ipsum iusto. Eos ex, nihil esse, distinctio hic culpa itaque a, dicta ipsam aut provident veniam? Error, suscipit nobis, dicta nam ducimus dolorum laborum dolores numquam perferendis totam delectus provident magnam id soluta. Officia numquam aspernatur provident culpa aut ea mollitia consequuntur ad soluta quaerat optio necessitatibus recusandae illum et odit doloremque, vitae nesciunt. Tempora, consequatur debitis quidem, repudiandae voluptate, ea doloremque mollitia enim minus eius iure est minima sequi culpa corporis pariatur eligendi quod! Ut, voluptate ea, suscipit quia molestiae, neque ratione beatae sint quis laborum natus dolorum corporis aliquid ipsum voluptatem incidunt libero inventore. Harum eum amet dolores ex corporis hic dolore iusto iste asperiores aliquid tempora perferendis eveniet sit doloremque adipisci molestiae, accusamus assumenda nam. Quia reprehenderit, minus quasi, in mollitia adipisci velit facere expedita alias recusandae consequatur dolorum eum corrupti vero beatae totam! Voluptatum rem optio cupiditate quisquam commodi temporibus porro fuga. Veniam quas, natus impedit, iste nostrum assumenda maiores illo totam commodi similique, error molestias sed doloremque eligendi excepturi fuga dolorum ullam ex aspernatur sapiente tempore! Nesciunt quo animi deleniti, dolores hic illum rerum molestiae sit, minus incidunt obcaecati harum quam dolorum provident commodi reiciendis alias enim nemo quas distinctio rem ab saepe aperiam beatae. Voluptatum temporibus nesciunt minus illum incidunt, modi tempore odio voluptate quo vel sit, iste doloribus aperiam reprehenderit iure? Fuga placeat vitae commodi similique esse eligendi labore earum ullam dolorem odit incidunt cupiditate blanditiis voluptate voluptatem totam, soluta repellendus sunt assumenda provident?
        </div>
        <div className="col-12 col-lg-3 " >
          <Link to="/contact">
            <div className="navigation">
            </div>
            </Link>
        </div>
      </div>
    </div>
  )
}
