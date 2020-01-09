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
      this.option = option || {};
      this.fragment = document.createDocumentFragment();
      this.setTitle();
      this.setSubTitle();
      this.setLegend();
      this.setDiagram();
      this.drawHandler();
      this.animationHandler();
    },
    setTitle() {
      var title = document.createElement('div'),
        titleOpt = this.option.title;
      title.classList.add('title');
      title.innerText = titleOpt.text;
      this.fragment.appendChild(title);
    },
    setSubTitle() {
      var subTitle = document.createElement('ul'),
        subTitleOpt = this.option.subTitle;
        subTitleTemplate = '';
      subTitle.classList.add('sub-title');
      var tagging = subTitleOpt.tagging;
      subTitleTemplate += `<li class="tagging-${tagging.type}"><span class="normal">${tagging.value}</span><span class="small">${tagging.valuation}</span></li>`;
      var text = subTitleOpt.text;
      subTitleTemplate += `<li class="text-list"><p class="text-item">${text[0]}</p><p class="text-item">${text[1]}</p></li>`;
      subTitle.innerHTML = subTitleTemplate;
      this.fragment.appendChild(subTitle);
    },
    setLegend() {
      var legend = document.createElement('ul'),
        legendStyle = this.option.legend.style || {};
      legend.classList.add('legend');
      this.setStyle(legend, legendStyle);
      this.setLegendItem(legend);
      this.fragment.appendChild(legend);
    },
    setLegendItem(legend) {
      var data = this.option.legend.data;
      if(!data) return false;
      var legendItems = '';
      for(var i=0, length=data.length; i<length; i+=1) {
        var item = data[i];
        legendItems += `<li class="legend-item">${item}</li>`;
      }
      legend.innerHTML = legendItems;
    },
    setDiagram() {
      var diagram = document.createElement('div'),
        diagramStyle = this.option.diagram.style || {};
      diagram.classList.add('diagram');
      this.setStyle(diagram, diagramStyle);
      this.setDiagramItem(diagram);
      this.fragment.appendChild(diagram);
    },
    setDiagramItem(diagram) {
      var style = this.option.diagram.style,
        data = this.option.diagram.data;
      if(!data) return false;
      var diagramItems = '';
        fishboneFrontWidth = 59,
        fishboneTailWidth = 36,
        fishboneCentralWidth = parseInt(style.width) || (this.container.offsetWidth - (parseInt(style.left) || 0) - (parseInt(style.right) || 0) - fishboneTailWidth);
      for(var i=0, length=data.length; i<length; i+=1) {
        var item = data[i],
          fishboneFront = item.fishboneFront,
          startRange = item.startRange || 0,
          taggingRange = startRange;
          serTemplate = '';
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
            taggingTemplate += `<li class="tagging-rise">${riseTemplate}</li>`;
          }
          if(tagging.fall) {
            var fallTemplate = '';
            if(tagging.fall.value) {
              fallTemplate += `<span class="normal">${tagging.fall.value}</span>`;
            }
            if(tagging.fall.valuation) {
              fallTemplate += `<span class="small">${tagging.fall.valuation}</span>`;
            }
            taggingTemplate += `<li class="tagging-fall">${fallTemplate}</li>`;
          }
          if(fishboneFront === false && taggingRange) {
            taggingRange -= 60;
          }
          serTemplate += `<ul class="diagram-item_tagging" style="transform: translateX(${taggingRange}px)">${taggingTemplate}</ul>`
        }
        // 鱼骨鱼刺
        var fishboneTemplate = '';
        if(fishboneFront !== false) {
          fishboneCentralWidth -= fishboneFrontWidth;
          fishboneTemplate += `<li class="fishbone-front"></li>`;
        }
        fishboneTemplate += `<li class="fishbone-central" style="width: ${fishboneCentralWidth}px"></li><li class="fishbone-tail"></li>`;
        serTemplate += `<ul class="diagram-item_fishbone">${fishboneTemplate}</ul>`;
        diagramItems += `<div class="diagram-item">${serTemplate}</div>`;
        fishboneCentralWidth -= startRange;
      }
      diagram.innerHTML = diagramItems;
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

    }
  };
  
  window.fishboneDiagram = {
    init: function(elm) {
      return new FishboneDiagram(elm);
    }
  };
});
