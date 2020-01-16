var changeIndex = 1;

var srcArr1 = ["./html/monthlyReport/salesHome.html", "./html/monthlyReport/map.html", "./html/monthlyReport/histogram.html"]
var srcArr2 = ["./html/agpKpi/formTab/formTab.html", "./html/agpKpi/aboSegmentMonthlyData.html", "./html/agpKpi/ppv.html", "./html/agpKpi/endPpv.html"]
var srcArr3 = ["./html/aboMomentum/force/force.html", "./html/aboMomentum/pf20QMonth.html", "./html/aboMomentum/income.html"]
var srcArr4 = ["./html/predictionModel/abo.html", "./html/predictionModel/bonusMigrationModel.html", "./html/predictionModel/pinMigrationModel.html"]
var srcArr5 = ["./html/dailyReport/dailySales.html", "./html/dailyReport/buyer/buyer.html", "./html/dailyReport/csi.html"]
var srcArr6 = ["./html/hourlyReport/newSales.html", "./html/hourlyReport/foaSales.html", "./html/hourlyReport/amountComm.html", "./html/hourlyReport/referralAmount.html"]

var srcArrAll = ["./html/monthlyReport/salesHome.html", "./html/monthlyReport/map.html", "./html/monthlyReport/histogram.html", "./html/agpKpi/formTab/formTab.html", "./html/agpKpi/aboSegmentMonthlyData.html", "./html/agpKpi/ppv.html", "./html/agpKpi/endPpv.html", "./html/aboMomentum/force/force.html", "./html/aboMomentum/pf20QMonth.html", "./html/aboMomentum/income.html", "./html/predictionModel/abo.html", "./html/predictionModel/bonusMigrationModel.html", "./html/predictionModel/pinMigrationModel.html", "./html/dailyReport/dailySales.html", "./html/dailyReport/buyer/buyer.html", "./html/dailyReport/csi.html", "./html/hourlyReport/newSales.html", "./html/hourlyReport/foaSales.html", "./html/hourlyReport/amountComm.html", "./html/hourlyReport/referralAmount.html"]

var containerUpBig = new Swiper('.swiper-containerUpBig', {
    loop: true,
    effect: 'coverflow',
    slidesPerView: 3,
    freeMod: false,
    touchRatio: 0, //禁止滑动
    initialSlide: 0, //初始展示
    slideToClickedSlide: true,
    centeredSlides: true, //设置slide居中
    slidesOffsetBefore: -245,
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
    //         observeSlideChildren:true,
    coverflowEffect: {
        rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 60, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
        depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        slideShadows: true //slideShadows：开启slide阴影。默认 true。
    },
    on: {
        // touchEnd: function (event) {
        //     // alert("111")
        //     //你的事件
        // },
        slideChangeTransitionStart: function () {
            var nowSlides = document.getElementsByClassName("swiper-slide-active")[0]
            // alert(this.realIndex)
            if (changeIndex == 1) {
                nowSlides.firstElementChild.src = srcArr1[this.realIndex]
            } else if (changeIndex == 2) {
                nowSlides.firstElementChild.src = srcArr2[this.realIndex]
            } else if (changeIndex == 3) {
                nowSlides.firstElementChild.src = srcArr3[this.realIndex]
            } else if (changeIndex == 4) {
                nowSlides.firstElementChild.src = srcArr4[this.realIndex]
            } else if (changeIndex == 5) {
                nowSlides.firstElementChild.src = srcArr5[this.realIndex]
            } else if (changeIndex == 6) {
                nowSlides.firstElementChild.src = srcArr6[this.realIndex]
            }
            //  else if (changeIndex == 7) {
            //     nowSlides.firstElementChild.src = srcArrAll[this.realIndex]
            // }
        },
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // autoplay: {//自动切换
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: true,
    // },
})



var containerDownSmall = new Swiper('.swiper-containerDownSmall', {
    loop: true,
    loopAdditionalSlides: 1, //loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
    effect: 'coverflow',
    slidesPerView: 4,
    touchRatio: 0, //禁止滑动
    initialSlide: 0, //初始展示
    slideToClickedSlide: true,
    // noSwiping: true, //设置为true时禁止切换
    spaceBetween: 15,
    //在slide之间设置距离 默认单位px 也可以设置% vw vh ....
    centeredSlides: true,
    //设定为true时，active slide会居中，而不是默认状态下的居左
    slidesOffsetBefore: 170,
    //设定slide与左边框的预设偏移量 还有slidesOffsetAfter
    observer: true, //修改swiper自己或子元素时，自动初始化swiper
    coverflowEffect: {
        rotate: -10, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 0, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
        depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        slideShadows: false //slideShadows：开启slide阴影。默认 true。
    },
    navigation: {
        nextEl: '.imgLeft',
        prevEl: '.imgRight',
    },
    // autoplay: {//自动切换
    //     delay: 3000,
    //     stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
    //     disableOnInteraction: true,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
    // },
    // navigation: {
    // 	nextEl: '.swiper-button-next',//自动隐藏
    // 	prevEl: '.swiper-button-prev',//自动隐藏
    // 	hiddenClass: 'btn-hidden',//某些情况下需要隐藏前进后退按钮时，可以设定一个自定义的类名。
    // }
})

// // var mySwiper = new Swiper('.swiper-container', {
// //     direction: 'vertical', // 垂直切换选项
// //     loop: true, // 循环模式选项

// //     // 如果需要分页器
// //     pagination: {
// //         el: '.swiper-pagination',
// //     },

// //     // 如果需要前进后退按钮
// // navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// // },

// //     // 如果需要滚动条
// //     scrollbar: {
// //         el: '.swiper-scrollbar',
// //     },
// // })

// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
// var myCharta = echarts.init(document.getElementById('maina'));
// window.addEventListener('resize', function () {
//     myChart.resize()
//     myCharta.resize()
// });
// // 指定图表的配置项和数据
// var option = {
//     backgroundColor: "blue",
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     legend: {
//         data: ['销量']
//     },
//     xAxis: {
//         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// };

// // 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
// myCharta.setOption(option);
// var aaa = document.getElementById("aaa")
// aaa.addEventListener('click', test)

// var carouselInterval;
// function startCarousel() {
//     console.log(containerUpBig)
//     changeIndex = 7;
//     // containerUpBig.destroy(true,true); //移除所有slide监听事件，所以拖动和click事件失效了。
//     var changeBinner = document.getElementById("changeBinner")
//     changeBinner.innerHTML = ""
//     for (var i = 0; i < srcArrAll.length; i++) {
//         var iframe = document.createElement("iframe");
//         iframe.className = "iframeStyle";
//         iframe.frameborder = "no";
//         iframe.marginwidth = "0"
//         iframe.marginheight = "0"
//         iframe.scrolling = "no"
//         iframe.align = "center"
//         iframe.src = srcArrAll[i];
//         // if()
//         var mask = document.createElement("div");
//         mask.className = 'mask';
//         var div = document.createElement("div");
//         div.className = "swiper-slide"
//         div.appendChild(iframe);
//         div.appendChild(mask);
//         changeBinner.appendChild(div)
//     }
//     var containerUpBig = new Swiper('.swiper-containerUpBig', {
//         loop: true,
//         effect: 'coverflow',
//         slidesPerView: 3,
//         freeMod: false,
//         initialSlide: 0, //初始展示
//         slideToClickedSlide: true,
//         centeredSlides: true, //设置slide居中
//         slidesOffsetBefore: -245,
//         observer: true, //修改swiper自己或子元素时，自动初始化swiper
//         // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
//         //         observeSlideChildren:true,
//         coverflowEffect: {
//             rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
//             stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
//             depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
//             modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
//             slideShadows: false //slideShadows：开启slide阴影。默认 true。
//         },
//         autoplay: {//自动切换
//             delay: 3000,
//             stopOnLastSlide: false,
//             disableOnInteraction: true,
//         },
//     })


    //   if(carouselInterval !== undefined) return false;
    //   carouselInterval = setInterval(function() {
    //     console.log('carousel interval');
    //   }, 1000);
// }
// function stopCarousel() {
//     clearInterval(carouselInterval);
//     carouselInterval = undefined;
// }

// 标题替换
var tatleChange = document.getElementById("tatleChange")

function oneImg() {

    console.log("111")
    changeIndex = 1;
    tatleChange.innerHTML = "Sales Performance"

    // var imageAllData = ["./img/4/End of Month % of Sales.png","","./img/1/map.png","./img/2/Dally Sales.png","./img/3/1.png"]
    // imageCenter()
    // var binnerData = ["./img/1/1.1Monthly Sales trend.png", "./img/1/map.png", "./img/1/Sales by FC group.png"]
    var changeBinner = document.getElementById("changeBinner")
    changeBinner.innerHTML = ""
    for (var i = 0; i < srcArr1.length; i++) {
        var iframe = document.createElement("iframe");
        iframe.className = "iframeStyle";
        iframe.frameborder = "no";
        iframe.marginwidth = "0"
        iframe.marginheight = "0"
        iframe.scrolling = "no"
        iframe.align = "center"
        iframe.src = srcArr1[i];
        // if()
        var mask = document.createElement("div");
        mask.className = 'mask';
        var div = document.createElement("div");
        div.className = "swiper-slide"
        div.appendChild(iframe);
        div.appendChild(mask);
        changeBinner.appendChild(div)
    }
    var containerUpBig = new Swiper('.swiper-containerUpBig', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 3,
        freeMod: false,
        initialSlide: 0, //初始展示
        slideToClickedSlide: true,
        centeredSlides: true, //设置slide居中
        slidesOffsetBefore: -245,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
        //         observeSlideChildren:true,
        coverflowEffect: {
            rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //slideShadows：开启slide阴影。默认 true。
        },
    })
}

function twoImg() {
    console.log("222")
    changeIndex = 2;
    tatleChange.innerHTML = "AGP KPI"

    var changeBinner = document.getElementById("changeBinner")
    changeBinner.innerHTML = ""
    for (var i = 0; i < srcArr2.length; i++) {
        var iframe = document.createElement("iframe");
        iframe.className = "iframeStyle";
        iframe.frameborder = "no";
        iframe.marginwidth = "0"
        iframe.marginheight = "0"
        iframe.scrolling = "no"
        iframe.align = "center"
        iframe.src = srcArr2[i];
        // if (i == 0) {
        // var mask1 = document.createElement("div");
        // var mask2 = document.createElement("div");
        // mask1.className = 'mask-01';
        // mask2.className = 'mask-02';
        // var div = document.createElement("div");
        // div.className = "swiper-slide"
        // div.appendChild(iframe);
        // div.appendChild(mask1);
        // div.appendChild(mask2);
        // changeBinner.appendChild(div)
        // } else {
        var mask = document.createElement("div");
        mask.className = 'mask';
        var div = document.createElement("div");
        div.className = "swiper-slide"
        div.appendChild(iframe);
        div.appendChild(mask);
        changeBinner.appendChild(div)
        // }
    }
    var containerUpBig = new Swiper('.swiper-containerUpBig', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 3,
        freeMod: false,
        initialSlide: 0, //初始展示
        slideToClickedSlide: true,
        centeredSlides: true, //设置slide居中
        slidesOffsetBefore: -245,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
        //         observeSlideChildren:true,
        coverflowEffect: {
            rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //slideShadows：开启slide阴影。默认 true。
        },
    })
}

function threeImg() {
    console.log("333")
    changeIndex = 3;
    tatleChange.innerHTML = "ABO Momentum"
    var changeBinner = document.getElementById("changeBinner")
    changeBinner.innerHTML = ""
    for (var i = 0; i < srcArr3.length; i++) {
        var iframe = document.createElement("iframe");
        iframe.className = "iframeStyle";
        iframe.frameborder = "no";
        iframe.marginwidth = "0"
        iframe.marginheight = "0"
        iframe.scrolling = "no"
        iframe.align = "center"
        iframe.src = srcArr3[i];
        // if()
        var mask = document.createElement("div");
        mask.className = 'mask';
        var div = document.createElement("div");
        div.className = "swiper-slide"
        div.appendChild(iframe);
        div.appendChild(mask);
        changeBinner.appendChild(div)
    }
    var containerUpBig = new Swiper('.swiper-containerUpBig', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 3,
        freeMod: false,
        initialSlide: 0, //初始展示
        slideToClickedSlide: true,
        centeredSlides: true, //设置slide居中
        slidesOffsetBefore: -245,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
        //         observeSlideChildren:true,
        coverflowEffect: {
            rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //slideShadows：开启slide阴影。默认 true。
        },
    })
}

function fourImg() {
    console.log("444")
    changeIndex = 4;
    tatleChange.innerHTML = "Prediction Model"
    var changeBinner = document.getElementById("changeBinner")
    changeBinner.innerHTML = ""
    for (var i = 0; i < srcArr4.length; i++) {
        var iframe = document.createElement("iframe");
        iframe.className = "iframeStyle";
        iframe.frameborder = "no";
        iframe.marginwidth = "0"
        iframe.marginheight = "0"
        iframe.scrolling = "no"
        iframe.align = "center"
        iframe.src = srcArr4[i];
        // if()
        var mask = document.createElement("div");
        mask.className = 'mask';
        var div = document.createElement("div");
        div.className = "swiper-slide"
        div.appendChild(iframe);
        div.appendChild(mask);
        changeBinner.appendChild(div)
    }
    var containerUpBig = new Swiper('.swiper-containerUpBig', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 3,
        freeMod: false,
        initialSlide: 0, //初始展示
        slideToClickedSlide: true,
        centeredSlides: true, //设置slide居中
        slidesOffsetBefore: -245,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
        //         observeSlideChildren:true,
        coverflowEffect: {
            rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //slideShadows：开启slide阴影。默认 true。
        },
    })
}

function fiveImg() {
    console.log("555")
    changeIndex = 5;
    tatleChange.innerHTML = "Daily Report"


    var changeBinner = document.getElementById("changeBinner")
    changeBinner.innerHTML = ""
    for (var i = 0; i < srcArr5.length; i++) {
        var iframe = document.createElement("iframe");
        iframe.className = "iframeStyle";
        iframe.frameborder = "no";
        iframe.marginwidth = "0"
        iframe.marginheight = "0"
        iframe.scrolling = "no"
        iframe.align = "center"
        iframe.src = srcArr5[i];
        // if()
        var mask = document.createElement("div");
        mask.className = 'mask';
        var div = document.createElement("div");
        div.className = "swiper-slide"
        div.appendChild(iframe);
        div.appendChild(mask);
        changeBinner.appendChild(div)
    }
    var containerUpBig = new Swiper('.swiper-containerUpBig', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 3,
        freeMod: false,
        initialSlide: 0, //初始展示
        slideToClickedSlide: true,
        centeredSlides: true, //设置slide居中
        slidesOffsetBefore: -245,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
        //         observeSlideChildren:true,
        coverflowEffect: {
            rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //slideShadows：开启slide阴影。默认 true。
        },
    })
}

function sixImg() {
    console.log("666")
    changeIndex = 6;
    tatleChange.innerHTML = "Hourly Report"


    var changeBinner = document.getElementById("changeBinner")
    changeBinner.innerHTML = ""
    for (var i = 0; i < srcArr6.length; i++) {
        var iframe = document.createElement("iframe");
        iframe.className = "iframeStyle";
        iframe.frameborder = "no";
        iframe.marginwidth = "0"
        iframe.marginheight = "0"
        iframe.scrolling = "no"
        iframe.align = "center"
        iframe.src = srcArr6[i];
        // if()
        var mask = document.createElement("div");
        mask.className = 'mask';
        var div = document.createElement("div");
        div.className = "swiper-slide"
        div.appendChild(iframe);
        div.appendChild(mask);
        changeBinner.appendChild(div)
    }
    var containerUpBig = new Swiper('.swiper-containerUpBig', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 3,
        freeMod: false,
        initialSlide: 0, //初始展示
        slideToClickedSlide: true,
        centeredSlides: true, //设置slide居中
        slidesOffsetBefore: -245,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // 　　　　 observeParents: true,//修改swiper的父元素时，自动初始化swiper
        //         observeSlideChildren:true,
        coverflowEffect: {
            rotate: 50, // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: -50, //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 120, //depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false //slideShadows：开启slide阴影。默认 true。
        },
    })
}

// 边框闪烁
// var imgShowHidden = document.getElementById("imgShowHidden")
// imgShow()
// function imgShow(){
//     imgShowHidden.style.background = imgShowHidden.style.background ? "" : 'url("../img/shineBorder.png") no-repeat';
//     setTimeout("imgShow()",500);
// }
// var imageAllData = ["./img/1/map.png","./img/2/Dally Sales.png","","./img/3/1.png","./img/4/End of Month % of Sales.png"]
// imageCenter()
// function imageCenter(){
//     var imageChange = document.getElementById("imageChange");
//     imageChange.innerHTML = ""
//     console.log(imageAllData)

//     for(var i = 0 ; i < imageAllData.length ; i ++){
//         var div = document.createElement("div");
//         var img = document.createElement("img");
//         div.className = 'downBorder swiper-slide';
//         img.src = imageAllData[i];
//         div.appendChild(img);
//         imageChange.appendChild(div);
//     }
//     var containerDownSmall = new Swiper('.swiper-containerDownSmall', {
//         loop: true,
//         loopAdditionalSlides : 1,//loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
//         effect: 'coverflow',
//         slidesPerView: 4,
//         initialSlide: 0,//初始展示
//         // centeredSlides: true, //设置slide居中
//         observer: true,//修改swiper自己或子元素时，自动初始化swiper
//         coverflowEffect: {
//             rotate: -10,// rotate：slide做3d旋转时Y轴的旋转角度。默认50。
//             stretch: 0,//stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
//             depth: 120,//depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
//             modifier: 1,//modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
//             slideShadows: false//slideShadows：开启slide阴影。默认 true。
//         },
//         navigation: {
//             nextEl: '.imgLeft',
//             prevEl: '.imgRight',
//         },
//     })
// }