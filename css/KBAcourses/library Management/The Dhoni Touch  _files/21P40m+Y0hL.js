(function(d){var b=window.AmazonUIPageJS||window.P,l=b._namespace||b.attributeErrors,a=l?l("DetailPageProductSpecDepthAsset",""):b;a.guardFatal?a.guardFatal(d)(a,window):a.execute(function(){d(a,window)})})(function(d,b,l){d.when("A","ready","a-toggle-button","voyager-desktop-metric").register("voyager-expand-collapse-module",function(a,g,c,b){function e(){return f("#productDetails_expanderSectionTables").find(".a-expander-header")}function h(a,e){a=c(a);e?a.enable():a.disable()}function k(){var a=
f("#productDetails_expanderSectionTables").find(".a-expander-content");a&&a.length&&(a=a.find(".prodDetSectionEntry"))&&15>a.length&&(e().each(function(){"true"!==this.getAttribute("data-expanded")&&f(this).click()}),h("#voyager-expand-all-btn",!1),h("#voyager-collapse-all-btn",!0))}var f=a.$;k();a.on("PageRefresh:ATF",k);a.declarative("voyager-expand-all-handler","click",function(){var a=e();a&&a.length&&(b.incrementCounter(b.metricName.expandAllButtonClicked()),a.each(function(){"true"!==this.getAttribute("aria-expanded")&&
f(this).click()}))});a.declarative("voyager-collapse-all-handler","click",function(){var a=e();a&&a.length&&(b.incrementCounter(b.metricName.collapseAllButtonClicked()),a.each(function(){"true"===this.getAttribute("aria-expanded")&&f(this).click()}))});a.declarative("voyager-expander-heading-toggle","click",function(){var a=!1,c=!1;e().each(function(){"true"===this.getAttribute("aria-expanded")?c=!0:a=!0});h("#voyager-expand-all-btn",a);h("#voyager-collapse-all-btn",c)})});"use strict";d.when("A",
"ready").register("voyager-pd-desktop-jump-link",function(a){function b(){var c=a.$("#seeMoreDetailsLink"),g=a.$("#productDetails_expanderSectionTables");c.length&&g.length&&c.parent().removeClass("aok-hidden")}b();a.on("a:pageUpdate",b)});"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";d.when("A","ready").register("voyager-desktop-metric",function(a){a=a.state("voyager-desktop-context");var g="unknown",c="unknown",d={};a&&(g=a["voyager-desktop-treatment"],
c=a.product_type);d={impression:function(){return"voyager:desktop:"+c+":"+g+":impression"},sectionExpanderClicked:function(a,b){return"voyager:desktop:"+c+":"+g+(":"+a+":"+b+":clicked")},sectionExpanderOverallClicked:function(){return"voyager:desktop:"+c+":"+g+":sectionExpander:overall:clicked"},expandAllButtonClicked:function(){return"voyager:desktop:"+c+":"+g+":expandAll:clicked"},collapseAllButtonClicked:function(){return"voyager:desktop:"+c+":"+g+":collapseAll:clicked"},sectionExpanderContentDwellTime:function(a,
b){return"voyager:desktop:"+c+":"+g+(":"+a+":"+b+":dwellTime")},sectionExpanderContentOverallDwellTime:function(){return"voyager:desktop:"+c+":"+g+":sectionExpander:overall:dwellTime"}};return{incrementCounter:function(a){b.ue&&b.ue.count&&b.ue.count(a,(b.ue.count(a)||0)+1)},setCounter:function(a,c){b.ue&&b.ue.count&&b.ue.count(a,c)},metricName:d}});"use strict";d.when("A","jQuery","voyager-desktop-metric").execute("voyager-desktop-sectionExpander-listener",function(a,b,c){function d(){if(!m){var b=
document.getElementById("productDetails_expanderSectionTables");a.onScreen(b,0)&&(c.setCounter(c.metricName.impression(),1),m=!0)}}function e(){var e=document.getElementById("productDetails_expanderSectionTables");e&&a.onScreen(e,0)&&!document.hidden?(d(),k&&function(){var e=Date.now()-k;f+=e;var d=b("#productDetails_expanderSectionTables").find(".a-expander-header");d&&d.length&&d.each(function(){if(a.onScreen(this,0)&&"true"===this.getAttribute("aria-expanded")){var d=JSON.parse(b(this).parent().attr("data-voyager-expander-heading-toggle")),
f=d.columnName+d.sectionIndex;h.set(f,(h.get(f)||0)+e);c.setCounter(c.metricName.sectionExpanderContentDwellTime(d.columnName,d.sectionIndex+1),h.get(f))}});c.setCounter(c.metricName.sectionExpanderContentOverallDwellTime(),f)}(),k=Date.now()):k=l}var h=new Map,k=void 0,f=0,m=!1;(function(){document.addEventListener("visibilitychange",function(){document.hidden&&(k=l)});e();a.interval(e,1E3)})();a.declarative("voyager-expander-heading-toggle","click",function(a){if(a&&a.data){e();var d=a.data.sectionIndex;
a=a.data.columnName;"true"===b("#productDetails_expanderTables_"+a).find(".a-expander-header").eq(d).attr("aria-expanded")&&(c.incrementCounter(c.metricName.sectionExpanderClicked(a,d+1)),c.incrementCounter(c.metricName.sectionExpanderOverallClicked()))}})});"use strict";"use strict"});