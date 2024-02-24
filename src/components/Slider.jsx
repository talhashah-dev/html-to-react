import React, { useState } from "react";
import img1 from "../assets/images/980x551 (1).jpg";
import img2 from "../assets/images/980x551 (2).jpg";
import img3 from "../assets/images/980x551 (3).jpg";
import img4 from "../assets/images/980x551 (4).jpg";
import img5 from "../assets/images/980x551 (5).jpg";
import img6 from "../assets/images/980x551 (6).jpg";
import img7 from "../assets/images/980x551 (7).jpg";
import img8 from "../assets/images/980x551 (8).jpg";
import img9 from "../assets/images/980x551 (9).jpg";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={img1} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img2} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img3} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img4} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img5} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img6} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img7} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img8} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade">
          <img src={img9} alt="" style={{ width: "100%" }} />
        </div>
      </div>
      <p className="prev" href="/" onClick={() => plusSlides(-1)}>
        ❮
      </p>
      <p className="next" href="/" onClick={() => plusSlides(1)}>
        ❯
      </p>
      <div style={{ textAlign: "center" }}>
        {[...Array(9)].map((_, index) => (
          <span key={index + 1} className="dot" onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </>
  );
}

export default Slider;
