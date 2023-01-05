let images = [{
    url: './images/image 2.1.slider.png',
    text_link: 'Rostov-on-Don, Admiral',
    text_info1: ''
},{
    url: './images/image 2.2.slider.png',
    text_link: 'Sochi Thieves',
},{
    url: './images/image 2.3.slider.png',
    text_link: 'Rostov-on-Don Patriotic',
}];


function initSlider(){
    if(!images || !images.length) return;

    let sliderImages = document.querySelector(".galery");
    let sliderArrows = document.querySelector(".cub3__second-section_arrows");
    let sliderDots = document.querySelector(".second-section_dot");
    let sliderText = document.querySelector(".navigation__menu2");

    initImages();
    initArrows();
    initDots();
    initText();




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



      
    function initDots(){
        images.forEach((image, index) => {
           let dot = `<div class="second-section_dot-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
           sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".second-section_dot-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
    })

}



     function initText(){

        images.forEach((image, index) => {
            let text = `<li><a class="navigation__item2 title n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].text_link}</a></li>`;
            sliderText.innerHTML += text;
         });
        
        sliderText.querySelectorAll(".navigation__item2").forEach(text => {
           console.log(text);
    text.addEventListener("click", function() {
        moveSlider(this.dataset.index);
       // ${index === 0? "navigation__item_admiral" : "navigation__item2"}
 })
});
}  


    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderText.querySelector('.active').classList.remove('active');
        sliderText.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
    }
};


document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });