var open = false
// 屏幕宽度小于800px，菜单隐藏动画
var btn = document.getElementById("btn-click");
var nav = document.getElementById("nav-collapse");
btn.addEventListener('click', function(){
    open = !open
    if (open) {
        // nav.style.display = "block";
        nav.style.visibility = "visible";
        btn.style.backgroundColor = "rgba(221, 221, 221, 0.9)";
        nav.style.transition = "0.5s";
        nav.style.height = "172px";
    } else {
        nav.style.visibility = "hidden";
        // nav.style.display = "none";
        nav.style.transition = "0.5s";
        nav.style.height = "0";
    }
})

    
    
    


    
    
