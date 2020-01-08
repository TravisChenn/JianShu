var banner_button_left = document.getElementById('arrow-left');
var banner_button_right = document.getElementById('arrow-right');
var banner_wrapper = document.getElementById('banner-wrapper');
var banner_swiper = document.getElementById('banner-swiper');

var position = 0
 debugger
   banner_button_left.addEventListener('click',function(){
    if (position < 3) {
        banner_swiper.style.left = `-${++position * 100}%`;

        // banner_wrapper.style.transition = "1s"
        console.log(position)   
    } else if (position < 3){
        banner_swiper.style.left = `-${++position * 100}%`;
        add_image();
        // banner_swiper.style.left = "0";
        console.log(banner_swiper.style.left)
    }
        // delete_images();
        position = 0
               
})

function add_image() {
    var image = banner_swiper.innerHTML
    banner_swiper.innerHTML += image
}

function delete_images() {
    var childs = banner_swiper.childNodes;
    console.log(childs);
    banner_swiper.removeChild(childs[0]);
    // for (i = 0; i < 5; i++) {
    //     banner_swiper.removeChild(childs[i]);
    //  }

}