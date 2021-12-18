//获取元素
var slideShow = document.getElementById("slideshow");
var imgList = document.getElementById("imglist");
var imgs = imgList.children;
var dotList = document.getElementById("dotlist");
var dots = dotList.children;
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var duration = 3500;
var Index = 0;
var count = imgList.children.length;
var timer;

window.onload = function () {
    imgList.children[0].classList.add("appear");
    dotList.children[0].classList.add("appear");

    for (var i = 0; i < dots.length; i++) {
        dots[i].index = i;
        dots[i].onclick = changeMe;
    }

    /*    timer = setInterval(rotate, duration);*/

    slideShow.onmouseover = function (event) {
        clearInterval(timer);
    };

    slideShow.onmouseout = function (event) {
        timer = setInterval(rotate, duration);
    };

    pre.onclick = preImg;
    next.onclick = nextImg;

    var btn = document.getElementById("icon");
    var timers = null;
    var oScroll = true;
    //滚动条事件,触发时清空定时器
    window.onscroll = function () {
        if (!oScroll) {
            clearInterval(timers);
        }
        oScroll = false;
    };
    btn.onclick = function () {
        //加入定时器让他又快到慢滚动到顶部
        timers = setInterval(function () {
            //获取当前scrollTop的高度位置（兼容ie和chrom浏览器）
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            //设置速度由快到慢
            var ispeed = Math.floor(-oTop / 7);
            document.documentElement.scrollTop = document.body.scrollTop = oTop + ispeed;
            oScroll = true;
            if (oTop == 0) {
                clearInterval(timers);
            }
        }, 30);
    }
};

function change() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("appear");
        imgs[i].classList.remove("appear");
    }
    dots[Index].classList.add("appear");
    imgs[Index].classList.add("appear");
}

//循环切换图片
function rotate() {
    Index++;
    if (Index == count) {
        Index = 0;
    }
    change();
}

function preImg() {
    Index--;
    if (Index < 0) {
        Index = count - 1;
    }
    change();
}

function nextImg() {
    Index++;
    if (Index == count) {
        Index = 0;
    }
    change();
}

function changeMe() {
    Index = this.index;
    change();
}

//动画延迟
if (change.rotate) {
    clearTimeout(change.rotate);
}



