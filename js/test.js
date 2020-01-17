var carouselInterval;
function startCarousel() {
  if(carouselInterval !== undefined) return false;
  var realIndex = containerUpBig.realIndex,
    curIndex = containerDownSmall.realIndex;
  carouselInterval = setInterval(function() {
    var srcArray = options[curIndex].src;
    realIndex += 1;
    if(realIndex < srcArray.length) {
      containerUpBig.slideNext(1000, true);
    } else {
      var oldIndex = curIndex;
      realIndex = 0;
      curIndex += 1;
      if(curIndex >= options.length) curIndex = 0;
      toggleUpBig(curIndex, oldIndex);
      containerDownSmall.slideNext(1000, false);
    }
  }, 3000);
}
function stopCarousel() {
  clearInterval(carouselInterval);
  carouselInterval = undefined;
}

var index = 0,
  options = [
    { // 一
      title: 'Sales Performance',
      src: [
        "./html/monthlyReport/homeIndex.html",
        "./html/monthlyReport/salesHome.html", 
        "./html/monthlyReport/map.html", 
        "./html/monthlyReport/histogram.html"
      ]
    }, 
    { // 二 
      title: 'AGP KPI',
      src: [
        "./html/agpKpi/formTab/formTab.html",
        "./html/agpKpi/aboSegmentMonthlyData.html",
        "./html/agpKpi/ppv.html",
        "./html/agpKpi/endPpv.html"
      ]
    }, 
    { // 三
      title: 'ABO Momentum',
      src: [
        "./html/aboMomentum/force/force.html", 
        "./html/aboMomentum/pf20QMonth.html", 
        "./html/aboMomentum/income.html"
      ]
    }, 
    { // 四
      title: 'Prediction Model',
      src: [
        "./html/predictionModel/abo.html", 
        "./html/predictionModel/bonusMigrationModel.html",
        "./html/predictionModel/pinMigrationModel.html", 
      ]
    }, 
    { // 五
      title: 'Daily Report',
      src: [
        "./html/dailyReport/dailySales.html", 
        "./html/dailyReport/buyer/buyer.html", 
        "./html/dailyReport/csi.html"
      ]
    }, 
    { // 六
      title: 'Hourly Report',
      src: [
        "./html/hourlyReport/newSales.html",
        "./html/hourlyReport/foaSales.html",
        "./html/hourlyReport/amountComm.html", 
        "./html/hourlyReport/referralAmount.html"
      ]
    }
  ];

var tatleChange = document.getElementById("tatleChange");
var containerUpBig = new Swiper('.swiper-containerUpBig', {
  loop: true,
  effect: 'coverflow',
  slidesPerView: 3,
  freeMod: false,
  touchRatio: 0,              // 禁止滑动
  initialSlide: 0,            // 初始展示
  slideToClickedSlide: true,
  centeredSlides: true,       // 设置slide居中
  slidesOffsetBefore: -245,
  observer: true,             // 修改swiper自己或子元素时，自动初始化swiper
                              // observeParents: true,//修改swiper的父元素时，自动初始化swiper
                              // observeSlideChildren:true,
  coverflowEffect: {
    rotate: 50,               // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
    stretch: 60,              // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
    depth: 120,               // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
    modifier: 1,              // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
    slideShadows: true        // slideShadows：开启slide阴影。默认 true。
  },
  on: {
    slideChangeTransitionStart: function() {
      // stopCarousel();
      var curIframe = document.getElementsByClassName("swiper-slide-active")[0].firstElementChild;
      curIframe.src = curIframe.src;
    },
  }
});
var containerDownSmall = new Swiper('.swiper-containerDownSmall', {
  loop: true,
  loopAdditionalSlides: 1,    // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
  effect: 'coverflow',
  slidesPerView: 4,
  touchRatio: 0,              // 禁止滑动
  initialSlide: 0,            // 初始展示
  slideToClickedSlide: true,
  spaceBetween: 15,
  centeredSlides: true,       // 在slide之间设置距离 默认单位px 也可以设置% vw vh ....
  slidesOffsetBefore: 170,    // 设定为true时，active slide会居中，而不是默认状态下的居左
                              // 设定slide与左边框的预设偏移量 还有slidesOffsetAfter
  observer: true,             // 修改swiper自己或子元素时，自动初始化swiper
  coverflowEffect: {
    rotate: -10,              // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
    stretch: 0,               // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
    depth: 120,               // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
    modifier: 1,              // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
    slideShadows: false       // slideShadows：开启slide阴影。默认 true。
  },
  on: {
    slideChangeTransitionStart: function() {
      stopCarousel();
      console.log(index,changeIndex)
      var oldIndex = index;
      if(oldIndex === this.realIndex) return false;
      index = this.realIndex;
      toggleUpBig(index, oldIndex);
    }
  }
});

function toggleUpBig(newIndex, oldIndex) {
  var oldSwiperOpt = options[oldIndex],
    oldSrc = oldSwiperOpt.src,
    oldSlides = [];
  var newSwiperOpt = options[newIndex],
    newSrc = newSwiperOpt.src,
    newSlides = [];
  
  oldSlides.push(...oldSrc.map((src, index) => index));
  newSlides.push(...newSrc.map(src => `<div class="swiper-slide"><iframe class="iframeStyle" align="center" frameborder="no" marginwidth="0" marginheight="0" scrolling="no" src="${src}"></iframe><div class="mask"></div></div>`));

  tatleChange.innerHTML = newSwiperOpt.title;
  containerUpBig.addSlide(oldSlides.length, newSlides);
  containerUpBig.slideTo(0, 500, false);
  containerUpBig.removeSlide(oldSlides);
}
