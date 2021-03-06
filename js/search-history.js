var search_history = []
var search_input = document.getElementById('search-input')
var search_commit = document.getElementById('search-img')
var search_history_wrap = document.getElementById("navbar-search-tips")
var search_history_list_wrap = document.getElementById("search-recent-id-ul")

reload('async')

//点击搜索创建节点
search_commit.onclick = function () {
    reload('create')
}
//回车创建节点
search_input.addEventListener('keypress',function(event){
    if(event.keyCode == 13){
        reload('create')
    }
})
search_input.addEventListener('focus',function(event){
    search_history_wrap.style.visibility= "visible";
})
search_input.addEventListener('blur',function(event){
    search_history_wrap.style.visibility= "hidden";
})

/**
 * 获取 localstorage 中的值
 */
function get_localstorage () {
    var get_localstorage_value = window.localStorage.getItem('search_history')
    if (get_localstorage_value) {
        return get_localstorage_value.split(",")
    } else {
        return []
    }
}

/**
 * 设置 localstorage 数据
 * ---
 * @param {Boolean} positive true:  内存 -> 本地
 *                           false: 本地 -> 内存
 * ---
 */
function async_localstorage (positive) {
    if (positive) {
        window.localStorage.setItem('search_history', search_history)
    } else {
        search_history = get_localstorage()
    }
}

/**
 * 重置
 * ---
 * @param {String} type   类型
 * @param {Number} index  索引
 * ---
 */
function reload (type, index) {
    if (type === 'async') {
        async_localstorage(false)
    }
    if (type === 'remove') {
        search_history.splice(index, 1)
        async_localstorage(true)
    }
    if (type === 'create') {
        var create_current_storage = get_localstorage()
        var search_input_value = search_input.value.trim()
        if (create_current_storage.length === 5) {
            create_current_storage.shift()
        }
        create_current_storage.push(search_input_value)
        search_history = create_current_storage
        async_localstorage(true)
    }
    create_li();
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
                    onclick="reload('remove', ${i})"
                    class="search_history_list_item-right"
                />
            </div>
        `
        li = `<div class="search-history-item">` + left + right + `</div>` + li  
    }
    search_history_list_wrap.innerHTML = li
}

function mouse_in (value) {
    document.getElementById('search-history-item-right-' + value).src = "../images/false-hover.png" 
}

function mouse_out (value) {
    document.getElementById('search-history-item-right-' + value).src = "../images/false.png"
}
