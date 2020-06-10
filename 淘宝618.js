
auto.waitFor();
var height = device.height;
var width = device.width;
setScreenMetrics(width, height);

click1("签到");
click1("去兑换");
swipe1("去浏览");

function click1(name){
    if (className("android.widget.Button").text(name).exists()){
        toast("存在" + name);
        className("android.widget.Button").text(name).click()
        toast("完成" + name);
        sleep(random(200, 210));
    }
    else {
        toast("已完成" + name);
    }
}

function swipe1(name){
    while(textContains(name).exists()){
        textContains(name).findOne().click();
        sleep(random(2000, 2500));
        swipe(width / 2, height - 500, width / 2, 0, random(600, 800));
        sleep(random(1000, 1500));
        swipe(width / 2, height - 500, width / 2, 0, random(600, 800));
        sleep(random(1e4, 11e3));
        swipe(width / 2, height - 500, width / 2, 0, random(600, 800));
        sleep(random(8e3, 9e3));
        back();
        toast("完成一次" + name);
        sleep(2000);
    }
    sleep(2000);
}