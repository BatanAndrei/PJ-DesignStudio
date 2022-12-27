let images = [{
    url: '../images/image 2.1.slider.png',
},{
    url: '../images/image 2.2.slider.png',
},{
    url: '../images/image 2.3.slider.png',
}];


function initSlider(){
    if(!images || !images.length) return;

    let sliderImages = document.querySelector(".galery");
    let sliderArrows = document.querySelector(".second-section_arrow");

    initImages();
    //initArrows();

    function initImages(){
       images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
       })
    };
};

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });