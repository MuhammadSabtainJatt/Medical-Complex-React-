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
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.medicalnewstoday.com/images/articles/291/291891/hospital-exterior.jpg" height={550} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://healingthebody.ca/wp-content/uploads/2014/10/Fotolia_87154587_Subscription_Monthly_XL.jpg" height={550} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="https://www.signsnow.com/assets/live/0/1/1713/hospital-monument-sign-for-memorial-hospital.jpg" height={550} class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
