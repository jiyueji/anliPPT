function init() {
    var emitter = document.getElementById("emitter"),
        container = document.createElement("div"),
        emitterSize = 100,
        dotQuantity = 50,
        dotSizeMax = 60,
        dotSizeMin = 10,
        speed = 1,
        gravity = 1;

    container.setAttribute("id", "emit-wrap");
    // 使用适当的样式设置容器
    container.style.cssText = "position:absolute; left:0; top:0; overflow:visible; z-index:5000; pointer-events:none;";
    document.body.appendChild(container);

    // 生成爆炸
    function createExplosion(container) {
        var tl = new TimelineLite({
                onComplete: function() {
                    $('#emit-wrap').remove();
                }
            }),
            angle, length, dot, i, size;
        // 创建所有点
        for (i = 0; i < dotQuantity; i++) {
            dot = document.createElement("div");
            dot.className = "emitter-dot";
            size = getRandom(dotSizeMin, dotSizeMax); // 改变爆炸圆球大小与多少
            container.appendChild(dot);
            angle = Math.random() * Math.PI * 2; // 随机角度

            //计算出中心的最大距离，考虑点的大小。
            //（绝对不能超出圆的范围），然后沿着该长度随机选取一个点，我们将在其中绘制点。

            length = Math.random() * (emitterSize / 2 - size / 2);
            // 将点放置在发射器内的一个随机点上，并设置其大小。
            TweenLite.set(dot, {
                x: Math.cos(angle) * length,
                y: Math.sin(angle) * length,
                width: size,
                height: size,
                xPercent: -50,
                yPercent: -50,
                force3D: true
            });
            // 这是我们制作动画的地方。。。
            tl.to(dot, 1 + Math.random(), {
                opacity: 0,
                // 如果你不想做物理，你可以直接用下面的两行动画来代替physics2D：
                // 改变爆炸的范围
                x: Math.cos(angle) * length * 5,
                y: Math.sin(angle) * length * 5
            }, 0);
        }
        return tl;
    }
    // 爆炸
    function explode(element) {
        var explosion = createExplosion(container);
        // var bounds = element.getBoundingClientRect();

        var offset = $(element).offset();
        var width = $(element).width();
        var height = $(element).height();

        // TweenLite.set(container, {
        //     x: bounds.left + bounds.width / 2,
        //     y: bounds.top + bounds.height / 2
        // });
        TweenLite.set(container, {
            x: offset.left + width / 2,
            y: offset.top + height / 2
        });
        // 重新启动
        explosion.restart();
    }

    function getRandom(min, max) {
        return min + Math.random() * (max - min);
    }
    var ball = document.querySelector(".ball");
    emitter.onmousedown = emitter.ontouchstart = function() {
        // ball.className = "ball animg100";
        ball.classList.add("ball", "animg100");
        ball.addEventListener('animationstart', function() {
            this.removeEventListener('animationend', function() {}, false);
            // console.log('animate start');
        }, false);
        ball.addEventListener('animationend', function() {
            this.removeEventListener('animationstart', function() {}, false);
            // console.log('animate end');
            this.classList.remove("animg100");
        }, false);

        explode(emitter);
        $(emitter).hide();

        $('.-shadow').hide();
        $('.js-box-wrap').hide();
        setTimeout(function() {
            $('.js-trigger-reset').css({
                'display': 'inline-block'
            });
        }, 1000);
        var tl = new TimelineMax();
        tl.add("logo")
            .add(logoReveal, "logo");
    }
}

function logoReveal() {
    var logoReveal = new TimelineMax();

    logoReveal.to('.js-icon-logo', 1, { autoAlpha: 1, ease: Power4.easeOut });

    return logoReveal;
}

function reset() {
    $('.-shadow').attr('style', '');
    $('.js-box-wrap').attr('style', '');
    $('.js-icon-logo').attr('style', '');
    $('#emitter').attr('style', '');
    $('.js-trigger-reset').hide();
}
function delay1(){
  $('.form-arrow').css({'opacity': '1'});
}
function delay15(){
  $('.is-show').css({'opacity': '1'});
}

$(document).ready(function() {
    init();
    setTimeout(function () {
      delay1();
    }, 500);
    setTimeout(function () {
      delay15();
    }, 1000);

    /* var formContent = document.querySelector('.form-content');
    formContent.addEventListener('mouseover', function(e) {
        // init();
    }, false);
    formContent.addEventListener('mouseout', function(e) {
    }, false); */
    $('.js-trigger-reset').click(function() {
        reset(); // 重置样式
        init(); // 初始化
    });
});