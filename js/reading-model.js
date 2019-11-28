var openModel = false;
var style_mode_btn = document.getElementById("style-mode-btn");
var style_mode_container = document.getElementById("style-mode-container");
style_mode_btn.addEventListener('click',function(){
    open = !open
    if (open) {
        style_mode_container.style.visibility = "visible";
        style_mode_container.style.opacity = "1";
        style_mode_container.style.top = "56px";
        style_mode_container.style.transition = "0.3s";
    } else {
        style_mode_container.style.visibility = "hidden";
        style_mode_container.style.opacity = "0";
        style_mode_container.style.top = "40px";
        style_mode_container.style.transition = "0.5s";
    }
})