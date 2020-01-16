(function(global, factory) {
  "use strict";
  factory( global );
})(typeof window !== "undefined" ? window : this, function(window) {
  var document = window.document;
  
  function FishboneDiagram(elm) {
    this.container = elm;
    this.option = null;
    this.fragment = null;
    this.init();
  };

  FishboneDiagram.prototype = {
    init() {
      this.container.classList.add('fishbone-diagram');
    },
    setOption(option) {
      this.option = this.deepObjectMerge({
        legend: { style: {}, data: [] },
        diagram: { style: {}, data: [] }
      }, option);
      this.fragment = document.createDocumentFragment();
      this.setTitle();
      this.setSubTitle();
      this.setLegend();
      this.setDiagram();
      this.drawHandler();
      this.animationHandler();
    },
    setTitle() {
      var titleOpt = this.option.title;
      if(!titleOpt) return false;
      var title = document.createElement('div');
      title.classList.add('title');
      title.innerText = titleOpt.text;
      this.fragment.appendChild(title);
    },
    setSubTitle() {
      var subTitleOpt = this.option.subTitle;
      if(!subTitleOpt) return false;
      var subTitle = document.createElement('ul'),
        subTitleTemplate = '';
      subTitle.classList.add('sub-title');
      var tagging = subTitleOpt.tagging;
      subTitleTemplate += `<li class="tagging-${tagging.type} bg"><span class="normal">${tagging.value}</span><span class="small">${tagging.valuation}</span></li>`;
      var text = subTitleOpt.text,
        textTemplate = '';
      for(var i=0, length=text.length; i<length; i+=1) {
        var textItem = text[i],
          brArr = textItem.match(/<\/br>/ig),
          lineNum = brArr && (brArr.length + 1) || 1;
        textTemplate += `<p class="text-item line-num${lineNum}">${textItem}</p>`;
      }
      subTitleTemplate += `<li class="text-list">${textTemplate}</li>`;
      subTitle.innerHTML = subTitleTemplate;
      this.fragment.appendChild(subTitle);
    },
    setLegend() {
      var legend = document.createElement('ul'),
        legendStyle = this.option.legend.style;
      legend.classList.add('legend');
      this.setStyle(legend, legendStyle);
      this.setLegendItem(legend);
      this.fragment.appendChild(legend);
    },
    setLegendItem(legend) {
      var data = this.option.legend.data,
        legendItems = '';
      for(var i=0, length=data.length; i<length; i+=1) {
        var item = data[i];
        legendItems += `<li class="legend-item">${item}</li>`;
      }
      legend.innerHTML = legendItems;
    },
    setDiagram() {
      var diagram = document.createElement('ul'),
        diagramStyle = this.option.diagram.style;
      diagram.classList.add('diagram');
      this.setStyle(diagram, diagramStyle);
      this.setDiagramItem(diagram);
      this.fragment.appendChild(diagram);
    },
    setDiagramItem(diagram) {
      var style = this.option.diagram.style,
        data = this.option.diagram.data;
      var fishboneFrontWidth = 40,
        fishboneTailWidth = 46,
        containerWidth = parseInt(style.width) || (this.container.offsetWidth - (parseInt(style.left) || 0) - (parseInt(style.right) || 0) ),
        diagramItemWidth = containerWidth,
        diagramItems = '';
      diagramItemWidth += fishboneFrontWidth;
      for(var i=0, length=data.length; i<length; i+=1) {
        diagramItemWidth -= fishboneFrontWidth;
        var item = data[i],
          fishboneFront = [undefined, true].includes(item.fishboneFront),
          startRange = item.startRange || 0,
          serTemplate = '',
          fishboneCentralWidth = diagramItemWidth - fishboneTailWidth;
        // 鱼骨标注
        var tagging = item.tagging;
        if(tagging) {
          var taggingTemplate = '';
          if(tagging.rise) {
            var riseTemplate = '';
            if(tagging.rise.value) {
              riseTemplate += `<span class="normal">${tagging.rise.value}</span>`;
            }
            if(tagging.rise.valuation) {
              riseTemplate += `<span class="small">${tagging.rise.valuation}</span>`;
            }
            taggingTemplate += `<li class="tagging-rise bg">${riseTemplate}</li>`;
          }
          if(tagging.fall) {
            var fallTemplate = '';
            if(tagging.fall.value) {
              fallTemplate += `<span class="normal">${tagging.fall.value}</span>`;
            }
            if(tagging.fall.valuation) {
              fallTemplate += `<span class="small">${tagging.fall.valuation}</span>`;
            }
            taggingTemplate += `<li class="tagging-fall bg">${fallTemplate}</li>`;
          }
          serTemplate += `<ul class="diagram-item_tagging" style="transform: translateX(${startRange}px)">${taggingTemplate}</ul>`
        }
        // 鱼骨鱼刺
        var fishboneTemplate = '';
        if(fishboneFront) {
          fishboneCentralWidth -= fishboneFrontWidth;
          fishboneTemplate += `<li class="fishbone-front"></li>`;
        } else if(i !== 0){
          diagramItemWidth += fishboneFrontWidth;
          fishboneCentralWidth += fishboneFrontWidth;
        }
        fishboneTemplate += `<li class="fishbone-central" style="width: ${fishboneCentralWidth}px"></li><li class="fishbone-tail"></li>`;
        serTemplate += `<ul class="diagram-item_fishbone">${fishboneTemplate}</ul>`;
        diagramItems += `<li class="animation-container w0" style="left: ${containerWidth - diagramItemWidth}px; width: ${diagramItemWidth}px"><div class="diagram-item">${serTemplate}</div></li>`;
        diagramItemWidth -= startRange;
      }
      diagram.innerHTML = diagramItems;
    },
    deepObjectMerge(FirstOBJ, SecondOBJ) {
      for (var key in SecondOBJ) {
        FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ? this.deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
      }
      return FirstOBJ;
    },
    setStyle(elm, style) {
      for(var key in style) {
        if(!style.hasOwnProperty(key)) continue;
        elm.style[key] = style[key];
      }
    },
    drawHandler() {
      this.container.innerHTML = '';
      this.container.appendChild(this.fragment);
    },
    animationHandler() {
      var elms = this.container.querySelectorAll('.animation-container');
      for(var i=0,length=elms.length; i<length; i+= 1) {
        (function(i) {
          setTimeout(function() {
            elms[i].classList.remove('w0');
            if(i === length - 1) {
              setTimeout(() => {
                Array.from(document.querySelectorAll("[class^='tagging-']")).forEach((item, index) => {
                  item.classList.remove('bg')
                });
              }, 500);
            }
          }, i * 500);
        })(i);
      }
    }
  };
  
  window.fishboneDiagram = {
    init: function(elm) {
      return new FishboneDiagram(elm);
    }
  };
});
