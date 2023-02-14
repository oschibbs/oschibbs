// 动态颜文字
var OriginTitile = document.title;
var jiao;
document.addEventListener('visibilitychange', function () {
    if (location.href != "https://116.205.237.133/" , (document.hidden)) {
        document.title = "(つェ⊂)誒呀，網站崩潰了";
        clearTimeout(jiao);
    }
    else {
        document.title = '(*´∇｀*) 咦,又好了~ ' + OriginTitile;
        jiao = setTimeout(function () {
            document.title = OriginTitile;
        }, 4000);
    }
});

// 鼠标特效
onload = function () {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function (e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "富强";
                break;
            case 20:
                $elem.innerText = "民主๑)";
                break;
            case 30:
                $elem.innerText = "文明";
                break;
            case 40:
                $elem.innerText = "和谐๑)";
                break;
            case 50:
                $elem.innerText = "自由";
                break;
            case 60:
                $elem.innerText = "平等";
                break;
            case 70:
                $elem.innerText = "公正)ა";
                break;
            case 80:
                $elem.innerText = "法制";
                break;
            case 90:
                $elem.innerText = "爱国₌₃";
                break;
            case 100:
                $elem.innerText = "敬业";
                break;
            case 101:
                $elem.innerText = "诚信";
                break;
            case 102:
                $elem.innerText = "友善";
                break;
            case 103:
            case 104:
            case 105:
            default:
                $elem.innerText = "❤";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function () {
            anim = setInterval(function () {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
