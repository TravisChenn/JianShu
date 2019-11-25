// 屏幕宽度小于800px，菜单隐藏动画
var open = false
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

//点击搜索框后，图标动画
var searchOne = document.getElementById("search-input");
var searchImg = document.getElementById("search-img");
var searchTwo = document.getElementById("search-img-a");
// var searchThree = document.getElementById("id=search-recent-id");
searchOne.addEventListener('focus',function(){
    searchImg.style.backgroundColor = "grey";
    searchTwo.src = "fangdajing.png"
    // searchThree.style.visibility = "block";
})
searchOne.addEventListener('blur',function(){
    searchImg.style.backgroundColor = "transparent";
    searchTwo.src = "search1.png"
})
//搜索框回车动画
searchOne.addEventListener('keypress',function(event){
    if(this.value!='' && event.keyCode == 13){
        window.location = "result.html"
    } 

})

//搜索框历史记录查询
  var btn = document.getElementById('search-img')
  var inp = document.getElementById('search-input')
  var ul = document.getElementById("navbar-search-tips")
  var ul2 = document.getElementById("search-recent-id-ul")
  var arr = []
  var val = null
  btn.onclick = function () {
    if (inp.value.trim().length !== 0) {
      val = inp.value
      arr.push(val)
      var str = arr.join(',')
      localStorage.setItem('a', str)
      disappear()
    } else {
      alert('请输入内容')
    }
  }
  if (localStorage.getItem('a')) {
    str = localStorage.getItem('a')
    arr = str.split(",")
  }
  inp.onclick = function () {
    ul.style.visibility= "visible";
    Splicing()
    var tash = document.querySelectorAll("#search-recent>li")
    for (var i = 0; i < tash.length; i++) {
      tash[i].onclick = function () {
        inp.value = this.innerHTML
        disappear()
      }
    }
  }
  document.onmouseup = function () {
    disappear()
  }

  function Splicing() {
    var li ="";
    var liOne =  "<a href=\"\" target=\"_blank\" style=\" text-decoration:none;display: block;height: 20px;line-height: 20px;padding: 10px 15px;font-size: 14px;color: #333;position: relative;\"><img src=\"clock.png\" style=\"float: left;margin:0 10px 0 0 !important;height:17px;width:17px\"><span style=\"text-decoration:none; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: block;padding-right: 30px;\">" ;
    var liTwo = "</span><img src=\"false.png\" style=\"height:8px;width:8px;position: absolute;right: 15px;top: 10px;color: #a0a0a0;\" onMouseOver=Hover() ></a>"
    for (var i = 0; i < arr.length; i++) {
      li = li+ "<li>" +liOne + arr[i] + liTwo + "</li>"
    }
    ul2.innerHTML = li
  }
  function disappear() {
    ul.style.visibility= "hidden";
  }



    
    


    
    
