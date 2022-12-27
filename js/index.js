let images = [{
    url: './images/image 2.1.slider.png',
},{
    url: './images/image 2.2.slider.png',
},{
    url: './images/image 2.3.slider.png',
}];


function initSlider(){
    if(!images || !images.length) return;

    let sliderImages = document.querySelector(".galery");
    let sliderArrows = document.querySelector(".cub3__second-section_arrows");

    initImages();
    initArrows();

    function initImages(){
       images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url('${images[index].url}');" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
       })
    };
    function initArrows(){
        sliderArrows.querySelectorAll(".second-section_arrow").forEach(arrow => {
           arrow.addEventListener('click', function(){
            let curNumber = +sliderImages.querySelector('.active').dataset.index;
            let nextNumber;
              if(arrow.classList.contains('left')) {
                nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
              } else {
                nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
              }
              moveSlider(nextNumber);
           });
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });