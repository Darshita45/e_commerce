import React from 'react';
import './styles.css';


export class Gallery extends React.Component {
    componentDidMount() {
        let slidePosition = 0;
        const slides = document.getElementsByClassName("carousel__item");
        const totalSlides = slides.length;


        document.getElementById("carousel__btn--next")
        .addEventListener("click", function(){
            moveToNextSlide();
        });
        document.getElementById("carousel__btn--prev")
        .addEventListener("click", function(){
            moveToPrevSlide();
        });

        function updateSlidesPosition(){
            for(let slide of slides){
                slide.classList.remove("carousel__item--visible");
                slide.classList.add("carousel__item--hidden");
            }
            slides[slidePosition].classList.add("carousel__item--visible");
        }

        function moveToNextSlide(){
            
            if (slidePosition === totalSlides -1){
                slidePosition = 0;
            } else {
                slidePosition++;
            }
            updateSlidesPosition();
        }

        function moveToPrevSlide(){
        
            if (slidePosition === 0){
            // totalSlides -1, if you wan't infinite carousel effect to both ways
                slidePosition = 0;  
            } else {
                slidePosition--;
            }
            updateSlidesPosition();
        }
            }
    render() {
        return (
            <>
            <h1 style={{alignItems: 'center', textAlign: 'center'}}>Image gallery</h1>
                <div className="carousel">
          <div className="carousel__item carousel__item--visible">
            <img src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg" alt="" />
          </div>
          <div className="carousel__item">
            <img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg" alt="" />
          </div>
          <div className="carousel__item">
            <img src="https://cdn.pixabay.com/photo/2021/06/17/05/14/city-6342765_960_720.jpg" alt="" />
          </div>
          <div className="carousel__item">
            <img src="https://cdn.pixabay.com/photo/2021/06/24/21/10/yachts-6362348_960_720.jpg" alt="" />
          </div>    
          <div className="carousel__item">
            <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg" alt="" />
          </div>
          <div className="carousel__action">
            <button className="btn-prev" id="carousel__btn--prev"></button>
              <button className="btn-next" id="carousel__btn--next"></button>
          </div>
    
        </div>
    
            </>
        )
    }
}

export default Gallery
