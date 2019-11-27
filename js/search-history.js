var search_history = []
var search_input = document.getElementById('search-input')
var search_commit = document.getElementById('search-img')
var search_history_wrap = document.getElementById("navbar-search-tips")
var search_history_list_wrap = document.getElementById("search-recent-id-ul")

reload()

search_commit.onclick = function () {
    create()
}

search_input.addEventListener('focus',function(event){
    search_history_wrap.style.visibility= "visible";
})

search_input.addEventListener('blur',function(event){
    search_history_wrap.style.visibility= "hidden";
})

search_input.addEventListener('keypress',function(event){
    if(event.keyCode == 13){
        create()
    }
})

function reload () {
    var history_local = window.localStorage.getItem('search_history')
    if (history_local !== null) {
        search_history = history_local.split(",")
    }

    var li ="";
    for (var i = 0; i < search_history.length; i++) {
    // var liOne =  "<a  href=\"\" target=\"_blank\" class=\"search_history_list_item\" style=\"display:block;height:20px;line-height:20px;padding:10px;font-size:14px;color:#333;position:relative;\"><img src=\"../images/clock.png\" class=\"search_history_list_item-left\"><span class=\"search_history_list_item-middle\">" ;
    // var liTwo = "</span><img src=\"../images/false.png\" class=\"search_history_list_item-right\" id=\"item-right\" onmouseover=\"MouseOver()\" onmouseout=\"MouseOut()\" onclick=\"remove(" + search_history[i] +")\"></a>"    
    li = "<div>" +liOne + search_history[i] + liTwo + "</div>"+ li  
    }
    search_history_list_wrap.innerHTML = li
}

function remove (value) {
    debugger
    var history_local = window.localStorage.getItem('search_history')
    if (history_local !== null) {
        search_history_remove = history_local.split(",")
    }
    for(a = 0;a < search_history_remove.length;a++){
        if(search_history_remove[a] == search_history[i]){
            search_history_remove[a] ===null;
        }
    }
    reload();
    console.log('remove', value)
}

function create () {
    var search_input_value = search_input.value.trim()
    if (search_input_value.length !== 0) {
        search_history.push(search_input_value)
        localStorage.setItem('search_history', search_history.join(','))
    }
    reload()
}
//搜索框历史记录叉号动画
function MouseOver(){
document.getElementById("item-right").src="../images/false-hover.png"  
}
function MouseOut(){
document.getElementById("item-right").src="../images/false.png"  
} 