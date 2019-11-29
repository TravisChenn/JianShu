var search_history = []
var search_input = document.getElementById('search-input')
var search_commit = document.getElementById('search-img')
var search_history_wrap = document.getElementById("navbar-search-tips")
var search_history_list_wrap = document.getElementById("search-recent-id-ul")

reload()

//点击搜索创建节点
search_commit.onclick = function () {
    create()
}
//回车创建节点
search_input.addEventListener('keypress',function(event){
    if(event.keyCode == 13){
        create()
    }
})
search_input.addEventListener('focus',function(event){
    search_history_wrap.style.visibility= "visible";
})
search_input.addEventListener('blur',function(event){
    search_history_wrap.style.visibility= "hidden";
})

function reload (value) {
    if (value) {
        window.localStorage.setItem('search_history', value)
        create_li();
    } else {
        var history_local = window.localStorage.getItem('search_history')
        if (history_local) {
            search_history = history_local.split(",")
        }
            create_li();
        
    }
    
    
}
function create_li () {
    var li ="";
    for (var i = 0; i < search_history.length; i++) {
         var left = `
            <div id="list-item" class="search_history_list_item search-history-item-left">
                <img src="../images/clock.png" class="search_history_list_item-left">
                <span class="search_history_list_item-middle">` + search_history[i] + `</span>
            </div>
        `
        var right = `
            <div class="search-history-item-right">
                <img
                    src="../images/false.png"
                    onmousein="mouse_in(${i})"
                    onmouseout="mouse_in(${i})"
                    onclick="mouse_click(${i})"
                    class="search_history_list_item-right"
                />
            </div>
        `
        li = `<div class="search-history-item">` + left + right + `</div>` + li  
    }
    search_history_list_wrap.innerHTML = li
    var childs = search_history_list_wrap.childNodes;
    if(i > 5) {
        for(var c =0 ; c<i-5;i--)
        search_history_list_wrap.removeChild(childs[i-1]);
    }
}

function create () {
    var search_input_value = search_input.value.trim()
    if (search_input_value.length !== 0) {
        search_history.push(search_input_value)
        localStorage.setItem('search_history', search_history.join(','))
    }
    reload()
}

function mouse_in (value) {
    document.getElementById('search-history-item-right-' + value).src = "../images/false-hover.png" 
}

function mouse_out (value) {
    document.getElementById('search-history-item-right-' + value).src = "../images/false.png"
}

function mouse_click (value) {
    search_history.splice(value, 1)
    reload(search_history)
}

// function recreate() {
//     var a, b ;
//      a = search_history.length;
//      search_history.splice(a-6, 1);
//      b = search_history.length;
//     create_li();
// }
