var imgBox1 = document.getElementById('imgBox1');
var num = 1;
setInterval(function () {
    num++;
    if (num === 4) {
        num = 1;
    }
    imgBox1.src = "images/" + num + ".jpg";
}, 5000);

var list = document.getElementById("small").getElementsByTagName("img");
for (var i = 0; i <= list.length; i++) {
    list[i].onmouseover = function () {
        this.style.opacity = 0.8;
        this.style.border = "1px solid #f00";
    };
    list[i].onmouseout = function () {
        this.style.opacity = 1;
        this.style.border = "1px solid #ccc";
    };
    list[i].onclick = function () {
        var imgBox1 = document.getElementById('imgBox1');
        imgBox1.src = this.src;
    };
}
function info(x) {
    alert("当前图片路径为:"+x.src)
}