var banner_left = null
var banner_conf = null

/**
 * 主函数banner：
 * 1、接收用户配置的参数
 * 2、插入图片
 */
function banner (conf) {
  banner_left = -1
  banner_conf = conf
  console.log(banner_conf)
  mount_img()
}

/**
 * 1、获取配置参数
 * 2、编排图片顺序
 * 3、插入HTML至DOM节点
 */
function mount_img () {
  let banner_img = ''
  let { mount, images, width, height } = banner_conf
  console.log(mount)
  for (let index = 0; index < images.length + 2; index++) {
    let index_after = index - 1
    if (index === 0) {
      index_after = images.length - 1
    }
    if (index === images.length + 1) {
      index_after = 0
    }
    banner_img += `<img src="${images[index_after]}" style="width: ${width}px; height: ${height}px" class="banner-image" />`
  }
  document.getElementById(mount).innerHTML += 
  `
    <div class="banner-wrap" style="width: ${width}px; height: ${height}px">
      <div class="banner-btn banner-btn-east" onClick="move_east()">
        <div class="banner-btn-east-icon"></div>
      </div>
      <div class="banner-btn banner-btn-west" onClick="move_west()">
        <div class="banner-btn-west-icon"></div>
      </div>
      <div id="banner-img-wrap" class="banner-img-wrap" style="left: ${banner_left * width}px">
        ${banner_img}
      </div>
    </div>
  `
}

/**
 * 左移函数：
 * 1、调用位移函数move
 * 2、到末位图片时启用延时功能
 */
function move_east () {  
  move(--banner_left, true)
  if (banner_left === -banner_conf.images.length - 1) {
    window.setTimeout(function () {
        move(-1)
      }, 500)
  }
}

/**
 * 右移函数：
 * 1、调用位移函数move
 * 2、到首位图片时启用延时功能
 */
function move_west () {
  move(++banner_left, true)
  if (banner_left === 0) {
    window.setTimeout(function () {
      move(-banner_conf.images.length)
    }, 500)
  }
}

function move (after, animation) {
  banner_left = after
  if (animation) {
    document.getElementById('banner-img-wrap').className = "banner-img-wrap banner-img-wrap-animation"
  } else {
    document.getElementById('banner-img-wrap').className = "banner-img-wrap "
  }
  document.getElementById('banner-img-wrap').style.setProperty('left', `${banner_left * banner_conf.width}px`)
}
