var banner_button_left = document.getElementById('arrow-left');
var banner_button_right = document.getElementById('arrow-right');
var banner_wrapper = document.getElementById('banner-wrapper');
var position_left = 0

banner_button_left.addEventListener('click',function(){
    banner_wrapper.style.left = `-${++position_left * 100}%`;
})


    
banner_button_right.addEventListener('click',function(){
    banner_wrapper.style.left = `-${--position_left * 100}%`;
})