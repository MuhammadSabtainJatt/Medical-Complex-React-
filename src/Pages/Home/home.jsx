import React, { useState } from 'react';

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  const currentDiv = (n) => {
    showDivs(setSlideIndex(n));
  };

  const showDivs = (n) => {
    let i;
    const x = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    if (n > x.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(x.length);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <div className="w3-content" style={{ maxWidth: "1200px" }}>
            <img className="mySlides" src="https://www.medicalnewstoday.com/images/articles/291/291891/hospital-exterior.jpg" style={{ width: "100%" }} alt="Nature" />
            <img className="mySlides" src="https://www.newshub.co.nz/home/new-zealand/2021/03/new-zealand-hospitals-in-crisis-after-biggest-months-on-record-doctors/_jcr_content/par/image.dynimg.full.q75.jpg/v1616654637463/GETTY_HOSPITAL_BED_CORRIDOR_1120.jpg" style={{ width: "100%", display: "none" }} alt="Snow" />
            <img className="mySlides" src="https://wallpaperaccess.com/full/1282856.jpg" style={{ width: "100%", display: "none" }} alt="Mountains" />

            <div className="w3-row-padding w3-section">
              <div className="w3-col s4">
                <img className="demo w3-opacity" src="https://www.medicalnewstoday.com/images/articles/291/291891/hospital-exterior.jpg"
                  style={{ width: "100%" }} alt="Nature" onClick={() => currentDiv(1)} />
              </div>
              <div className="w3-col s4">
                <img className="demo w3-opacity" src="https://www.newshub.co.nz/home/new-zealand/2021/03/new-zealand-hospitals-in-crisis-after-biggest-months-on-record-doctors/_jcr_content/par/image.dynimg.full.q75.jpg/v1616654637463/GETTY_HOSPITAL_BED_CORRIDOR_1120.jpg"
                  style={{ width: "100%", display: "none" }} alt="Snow" onClick={() => currentDiv(2)} />
              </div>
              <div className="w3-col s4">
                <img className="demo w3-opacity" src="https://wallpaperaccess.com/full/1282856.jpg"
                  style={{ width: "100%", display: "none" }} alt="Mountains" onClick={() => currentDiv(3)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
