var banner_button_left = document.getElementById('arrow-left');
var banner_button_right = document.getElementById('arrow-right');
var banner_wrapper = document.getElementById('banner-wrapper');
var position = 1

    
   banner_button_left.addEventListener('click',function(){
    if (position < 5) {
        banner_wrapper.style.left = `-${++position * 100}%`;
        banner_wrapper.style.transition = "1s"
        console.log(position)
    } else {
        banner_wrapper.style.transition = "0s"
        banner_wrapper.style.left = "-100%";  
        position = 1;
    }               
})


    banner_button_right.addEventListener('click',function(){
    if (position < 2) {
        banner_wrapper.style.left = `-${--position * 100}%`;
        banner_wrapper.style.left = "-400%";  
        banner_wrapper.style.transition = "0s"
        console.log(position)
        position = 4;
        console.log(position)
    } else {
        banner_wrapper.style.left = `-${--position * 100}%`;
        banner_wrapper.style.transition = "1s"
        console.log(position)
    }
    }) 

  