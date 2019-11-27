//点击搜索框后，图标动画
var searchOne = document.getElementById("search-input");
var searchImg = document.getElementById("search-img");
var searchTwo = document.getElementById("search-img-a");
// var searchThree = document.getElementById("id=search-recent-id");
searchOne.addEventListener('focus',function(){
    searchImg.style.backgroundColor = "grey";
    searchTwo.src = "../images/fangdajing.png"
    // searchThree.style.visibility = "block";
})
searchOne.addEventListener('blur',function(){
    searchImg.style.backgroundColor = "transparent";
    searchTwo.src = "../images/search1.png"
})
// //搜索框回车动画
// searchOne.addEventListener('keypress',function(event){
//     if(this.value!='' && event.keyCode == 13){
//         window.location = "result.html"
//     } 

// })

// //搜索框历史记录查询
//   var btn = document.getElementById('search-img')
//   var inp = document.getElementById('search-input')
//   var ul = document.getElementById("navbar-search-tips")
//   var ul2 = document.getElementById("search-recent-id-ul")
//   var arr = []
//   var val = null
//   btn.onclick = function () {
//     if (inp.value.trim().length !== 0) {
//       val = inp.value
//       arr.push(val)
//       var str = arr.join(',')
//       localStorage.setItem('a', str)
//       disappear()
//     } else {
//       alert('请输入内容')
//     }
//   }
//   if (localStorage.getItem('a')) {
//     str = localStorage.getItem('a')
//     arr = str.split(",")
//   }
 
  // inp.onclick = function () {
  //   ul.style.visibility= "visible";
  //   // Splicing()
  //   // var tash = document.querySelectorAll("#search-recent>li")
  //   // for (var i = 0; i < tash.length; i++) {
  //   //   tash[i].onclick = function () {
  //   //     inp.value = this.innerHTML
  //   //     disappear()
  //   //   }
  //   // }
  // }
  // document.onmouseup = function () {
  //   disappear()
  // }

//   function Splicing() {
//     var li ="";
//     var liOne =  "<a style=\"text-decoration:none;display:block;height:20px;line-height:20px; padding:10px;font-size:14px;color:#333;position:relative;\" href=\"\" target=\"_blank\"><img src=\"clock.png\" class=\"ic-search-history\"><span class=\"ic-search-history-span\">" ;
//     var liTwo = "</span><img src=\"false.png\" class=\"ic-unfollow\" id=\"ic-unfollow\" onmouseover=\"MouseOver()\" onmouseout=\"MouseOut()\"></a>"
//     for (var i = 0; i < arr.length; i++) {
//       li = "<li>" +liOne + arr[i] + liTwo + "</li>"+li
//     }
//     ul2.innerHTML = li
//   }
//   function disappear() {
//     ul.style.visibility= "hidden";
//   }

//   //搜索框历史记录叉号动画
//  function MouseOver(){
//     document.getElementById("ic-unfollow").src="false-hover.png"  
//   }
//   function MouseOut(){
//     document.getElementById("ic-unfollow").src="false.png"  
//   } 

//   //清除历史记录
// document.getElementById("ic-unfollow").addEventListener('click',function(){
//   localStorage.getItem('a') ="";
  
// })

    
    


    
    
