var beta = document.getElementById("nav-beta");
var betaClick = document.getElementById("nav-beta-click");
var betaWindow =  document.getElementById("nav-beta-window");

beta.addEventListener('click',function(){
    betaClick.style.setProperty('display', 'block');
})
betaWindow.addEventListener('click',function(){
    console.log(0)
    betaClick.style.setProperty('display', 'none');
    console.log(1)
})
// document.getElementById("nav-beta").onclick=function(){
//     document.getElementById("nav-beta-click").style.display="block"
// }
// document.getElementById("nav-beta-window").onclick=function(){
//     document.getElementById("nav-beta-click").style.display="none"
// }