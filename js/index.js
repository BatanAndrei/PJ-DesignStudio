let images = [{
    url: './images/image 2.1.slider.png',
    text_link: 'Rostov-on-Don, Admiral',
    text_info_city: 'Rostov-on-Don LCD admiral',
    text_info_time: '3.5 months',
    text_info_area: '81 m2',
    
},{
    url: './images/image 2.2.slider.png',
    text_link: 'Sochi Thieves',
    text_info_city: 'Sochi Thieves',
    text_info_time: '4 months',
    text_info_area: '105 m2',
    
},{
    url: './images/image 2.3.slider.png',
    text_link: 'Rostov-on-Don Patriotic',
    text_info_city: 'Rostov-on-Don Patriotic',
    text_info_time: '3 months',
    text_info_area: '93 m2',
    
}];


function initSlider(){
    if(!images || !images.length) return;

    let sliderImages = document.querySelector(".galery");
    let sliderArrows = document.querySelector(".cub3__second-section_arrows");
    let sliderDots = document.querySelector(".second-section_dot");
    let sliderLink = document.querySelector(".navigation__menu2");
    let sliderTextCity = document.querySelector(".second-section_text_info_city");
    // let sliderTextTime = document.querySelector(".second-section_text_info_time");
    // let sliderTextArea = document.querySelector(".second-section_text_info_area");

    initImages();
    initArrows();
    initDots();
    initTextLink();
    initTextInfoCity();
    // initTextInfoTime();
    // initTextInfoArea();


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

     function initTextLink(){

        images.forEach((image, index) => {
            let text = `<li><a class="navigation__item2 title n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].text_link}</a></li>`;
            sliderLink.innerHTML += text;
         });
        
         sliderLink.querySelectorAll(".navigation__item2").forEach(text => {
           //console.log(text);
    text.addEventListener("click", function() {
        moveSlider(this.dataset.index);
  
 })
});
}  

     function initTextInfoCity() {
         images.forEach((image, index) => {
             let textDivCity = `<div class="cubs__paragraf-bottom subtitle n${index} ${index === 0? "active" : ""}"  data-index="${index}">${images[index].text_info_city}</div>`;
             sliderTextCity.innerHTML += textDivCity;
             //console.log(index);
         });
         moveSlider(this.dataset.index);
}

    //   function initTextInfoTime() {
    //      images.forEach((image, index) => {
    //          let textDivTime = `<div class="cubs__paragraf-bottom subtitle n${index} ${index === 0? "active" : ""}"  data-index="${index}">${images[index].text_info_time}</div>`;
    //          sliderTextTime.innerHTML += textDivTime;
    //          //console.log(index);
    //      });
    //    moveSlider(this.dataset.index);
//}

//        function initTextInfoArea() {
//           images.forEach((image, index) => {
//               let textDivArea = `<div class="cubs__paragraf-bottom subtitle n${index} ${index === 0? "active" : ""}"  data-index="${index}">${images[index].text_info_area}</div>`;
//               sliderTextArea.innerHTML += textDivArea;
//         //console.log(index);
//     });
//   moveSlider(this.dataset.index);
// }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderLink.querySelector('.active').classList.remove('active');
        sliderLink.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
        sliderTextCity.querySelector('.active').classList.remove('active');
        sliderTextCity.querySelector('.n' + num).classList.add('active');
        // sliderTextTime.querySelector('.active').classList.remove('active');
        // sliderTextTime.querySelector('.n' + num).classList.add('active');
        // sliderTextArea.querySelector('.active').classList.remove('active');
        // sliderTextArea.querySelector('.n' + num).classList.add('active');
    }
};


document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });