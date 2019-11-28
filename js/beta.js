var beta = document.getElementById("nav-beta");
var betaClick = document.getElementById("nav-beta-click");
var betaWindow =  document.getElementById("nav-beta-window");
var betaWindowTwo =  document.getElementById("nav-beta-back");
var betaWindowOne =  document.getElementById("nav-beta-window-div");

beta.addEventListener('click',function(){
    betaClick.style.setProperty('display', 'block');
})
betaWindow.addEventListener('click',function(){
    betaClick.style.setProperty('display', 'none');
})
