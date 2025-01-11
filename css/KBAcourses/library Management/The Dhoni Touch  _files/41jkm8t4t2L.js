'use strict';mix_d("CustomerReviewsProductInsightsCards__cr-product-insights:cr-product-insights__jTbgRgZ_","require exports tslib @c/scoped-dom @c/logger @c/remote-operations @c/metrics @c/browser-window @c/aui-truncate @c/browser-operations @c/dom".split(" "),function(Y,K,f,z,Z,aa,ba,ca,da,ea,fa){function v(d){return d&&"object"===typeof d&&"default"in d?d:{"default":d}}function ha(d){if(d&&d.__esModule)return d;var a=Object.create(null);d&&Object.keys(d).forEach(function(b){if("default"!==b){var c=
Object.getOwnPropertyDescriptor(d,b);Object.defineProperty(a,b,c.get?c:{enumerable:!0,get:function(){return d[b]}})}});a["default"]=d;return a}var p=v(z),L=v(Z),ia=v(aa),ja=v(ca),M=v(da),ka=v(ea),C=v(fa),l={isDesktopView:"_cr-product-insights_style_is-desktop-view__29OYH",isMobileView:"_cr-product-insights_style_is-mobile-view__2p4SJ",dataContainer:"_cr-product-insights_style_data-container__2n3A8",contentContainer:"_cr-product-insights_style_content-container__1EAqP",contentContainerPadding:"_cr-product-insights_style_content-container-padding__66Xh7",
contentContainerVerticalPadding:"_cr-product-insights_style_content-container-vertical-padding__38N5b",sentimentSection:"_cr-product-insights_style_sentiment-section__3Z0bO",sentimentHeader:"_cr-product-insights_style_sentiment-header__3nrex",sentimentAspects:"_cr-product-insights_style_sentiment-aspects__2mp4b",aspectButtonGroup:"_cr-product-insights_style_aspect-button-group__-biHO",aspectSymbolList:"_cr-product-insights_style_aspect-symbol-list__24amT",insightBottomSheetButtonGroup:"_cr-product-insights_style_insight-bottom-sheet-button-group__1gQMy",
aspectList:"_cr-product-insights_style_aspect-list__cBugj",aspectLink:"_cr-product-insights_style_aspect-link__TtdmS",aspectLinkSymbol:"_cr-product-insights_style_aspect-link-symbol__23T9N",selected:"_cr-product-insights_style_selected__2-xMA",subtitleAspectButton:"_cr-product-insights_style_subtitle-aspect-button__2o27X",bottomSheetWrapper:"_cr-product-insights_style_bottom-sheet-wrapper__PdjHu",hideBottomSheet:"_cr-product-insights_style_hide-bottom-sheet__3ijux aok-hidden",insightBottomSheet:"_cr-product-insights_style_insight-bottom-sheet__3SFlx",
insightBottomSheetRedesign:"_cr-product-insights_style_insight-bottom-sheet-redesign__1NP0A",insightBottomSheetContent:"_cr-product-insights_style_insight-bottom-sheet-content__3cnVT",insightBottomSheetSubtitle:"_cr-product-insights_style_insight-bottom-sheet-subtitle__28v47",endingLine:"_cr-product-insights_style_ending-line__1I1OL",snippet:"_cr-product-insights_style_snippet__2SpLd",fragment:"_cr-product-insights_style_fragment__tnwGQ",snippetSeeMore:"_cr-product-insights_style_snippet-see-more__3qykv",
statTextBox:"_cr-product-insights_style_stat-text-box__8ba_x",statTextBoxRow:"_cr-product-insights_style_stat-text-box-row__1_DtP",statTextBoxTitle:"_cr-product-insights_style_stat-text-box-title__26C4y",statTextBoxSubtitle:"_cr-product-insights_style_stat-text-box-subtitle__1wPSa",statCustomerMentionsBox:"_cr-product-insights_style_stat-customer-mentions-box__Su4zw",statTextBoxLabelRow:"_cr-product-insights_style_stat-text-box-label-row__3uYIE",statNumber:"_cr-product-insights_style_stat-number__1J1Vr",
statInfoBox:"_cr-product-insights_style_stat-info-box__1akN2",closeButton:"_cr-product-insights_style_close-button__qtNz0",textPositive:"_cr-product-insights_style_text-positive__QRaJ2",textNegative:"_cr-product-insights_style_text-negative__zjq0Y",aspectSummaryLink:"_cr-product-insights_style_aspect-summary-link__1Ls1M",aspectSummaryLabel:"_cr-product-insights_style_aspect-summary-label__19a1a",productInsightsDivider:"_cr-product-insights_style_product-insights-divider__3lxIJ"},D={rendered:0,content:0,
empty:0,"aspect-button-clicked":0,"aspect-button-dp-clicked":0,"aspect-button-bottomsheet-clicked":0,"snippet-clicked":0,"aspects-scrolled":0,"bottomsheet-closed":0},r=function(d){var a,b=null!==(a=D[d])&&void 0!==a?a:0;D[d]=b+1;ba.count("cr-product-insights:dp:"+d,D[d])},N=function(d,a){if(d=p["default"].cardRoot.getElementsByClassName(d))for(var b=0;b<d.length;b++){var c=d[b];c&&c.addEventListener("click",function(){r(a)})}},y=function(d,a){d&&d.addEventListener("click",function(){r(a)})},la=function(d,
a){var b=p["default"].cardRoot.getElementsByClassName(d),c=Array(b.length);if(b){d=function(g){c[g]=!1;var h=b[g];h&&h.addEventListener("scroll",function(){c[g]||(c[g]=!0,r(a))})};for(var e=0;e<b.length;e++)d(e)}},ma=function(){try{r("rendered");var d=p["default"].cardRoot.getElementsByClassName(l.contentContainer);r(0===d.length?"empty":"content");d&&(N(l.aspectButton,"aspect-button-clicked"),N(l.snippetSeeMore,"snippet-clicked"),la(l.sentimentAspects,"aspects-scrolled"))}catch(a){}};z=function(){function d(){}
d.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(a){throw Error("not implemented");})})};d.prototype.hide=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(a){throw Error("not implemented");})})};d.prototype.updateContent=function(a){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){throw Error("not implemented");})})};return d}();var na=function(d){function a(b){var c=
d.call(this)||this;b=c.getContentSelector(b.sentimentIndex);c.contentHTML=p["default"].cardRoot.querySelector("#"+b);return c}f.__extends(a,d);a.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){this.contentHTML&&(this.contentHTML.style.display="block");return[2]})})};a.prototype.hide=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){this.contentHTML&&(this.contentHTML.style.display="none");
return[2]})})};a.prototype.updateContent=function(b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(c){this.hideAllContentList();this.showCurrentSelectedAspect(p["default"].cardRoot,b.aspectButtonsSize,b.aspectIndex,b.sentimentIndex);return[2]})})};a.prototype.getContentSelector=function(b){return"second-bottom-sheet-"+b};a.prototype.hideAllContentList=function(){p["default"].cardRoot.querySelectorAll("."+l.insightBottomSheetContent).forEach(function(b){b.style.display=
"none"})};a.prototype.showCurrentSelectedAspect=function(b,c,e,g){if(b=b.querySelector("#aspect-bottom-sheet-"+g+"-"+e))b.style.display="block"};return a}(z),O=function(d){function a(b){var c=d.call(this)||this;c.recommendationsHTML={};c.bottomSheetName=b.bottomSheetName;c.bottomSheetHTML=b.bottomSheetHTML;c.bottomSheet=b.bottomSheet;c.operationProxy=b.operationProxy;c.asin=b.asin;return c}f.__extends(a,d);a.build=function(b){return f.__awaiter(this,void 0,void 0,function(){var c,e,g,h;return f.__generator(this,
function(k){switch(k.label){case 0:return[4,new Promise(function(m,n){Y(["@c/aui-bottom-sheet"],function(q){m(ha(q))},n)})];case 1:return c=k.sent().default,e=this.getBottomSheetName(b.sentimentIndex),g=p["default"].cardRoot.querySelector("#"+e),h=c.create(e,"#"+e,{height:ja["default"].innerHeight*this.HEIGHT_PERCENTAGE}),h.on("afterHide",function(){h.render(function(m){a.hideAllBottomSheets(m,b.aspectBottomSheetCount,b.sentimentIndex)});r("bottomsheet-closed")}),[2,new a(f.__assign(f.__assign({},
b),{bottomSheetName:e,bottomSheetHTML:g,bottomSheet:h}))]}})})};a.prototype.show=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(b){switch(b.label){case 0:return[4,this.bottomSheet.show()];case 1:return b.sent(),[2]}})})};a.prototype.updateContent=function(b){return f.__awaiter(this,void 0,void 0,function(){var c=this;return f.__generator(this,function(e){switch(e.label){case 0:return[4,this.bottomSheet.render(function(g){return f.__awaiter(c,void 0,
void 0,function(){return f.__generator(this,function(h){switch(h.label){case 0:return[4,this.showOnlySelectedBottomSheet(g,b.aspectButtonsSize,b.aspectIndex,b.sentimentIndex)];case 1:return h.sent(),[2]}})})})];case 1:return e.sent(),[4,this.bottomSheet.show()];case 2:return e.sent(),[2]}})})};a.getBottomSheetName=function(b){return"second-bottom-sheet-"+b};a.prototype.showOnlySelectedBottomSheet=function(b,c,e,g){return f.__awaiter(this,void 0,void 0,function(){var h,k,m,n,q;return f.__generator(this,
function(t){switch(t.label){case 0:for(h=0;h<c;h++)if(k=b.querySelector("#aspect-bottom-sheet-"+g+"-"+h))k.style.display=h===e?"block":"none";return[4,this.getWeblabTreatment("F2_SBR_ALTERNATIVE_PRODUCT_RECOMMENDATION_GATING_1095540")];case 1:m=t.sent();if("C"===m)return[2];n=b.querySelector("[data-includeAlternateProductRecommendation]");q=null===n||void 0===n?void 0:n.getAttribute("data-includeAlternateProductRecommendation");return"true"!==q?[2]:[4,this.getRecommendationResponse(b,c,g)];case 2:return t.sent(),
[4,this.appendRecommendationsToBottomSheet(b,e,g)];case 3:return t.sent(),[2]}})})};a.prototype.getRecommendationResponse=function(b,c,e){return f.__awaiter(this,void 0,void 0,function(){var g,h,k,m,n;return f.__generator(this,function(q){switch(q.label){case 0:if(this.recommendationRetrived)return[3,5];g=this;return[4,this.operationProxy.getRecommendations({asin:this.asin})];case 1:g.recommendations=q.sent(),this.recommendationRetrived=!0,h=0,q.label=2;case 2:if(!(h<c))return[3,5];k=this.getAspectFromBottomSheets(b,
e,h);if(!(k&&this.recommendations[k]&&0<this.recommendations[k].length))return[3,4];m=this.recommendationsHTML;n=k;return[4,this.operationProxy.getRecommendationsHTML({aspect:k,recommendations:this.recommendations})];case 3:m[n]=q.sent(),q.label=4;case 4:return h++,[3,2];case 5:return[2]}})})};a.prototype.appendRecommendationsToBottomSheet=function(b,c,e){return f.__awaiter(this,void 0,void 0,function(){var g,h,k,m;return f.__generator(this,function(n){switch(n.label){case 0:g=b.querySelector("#aspect-bottom-sheet-"+
e+"-"+c);h=b.querySelector("#bottom-sheet-button-"+e+"-"+c+" > svg");if(!h)return[2];k=this.getAspectFromBottomSheets(b,e,c);return g&&k&&this.recommendationsHTML[k]?[4,this.getWeblabTreatment("F2_SBR_ALTERNATIVE_PRODUCT_RECOMMENDATION_MEASURE_1095545")]:[3,2];case 1:m=n.sent(),"T1"===m&&(g.appendChild(this.recommendationsHTML[k]),M["default"].switchToAutoTruncate("#aspect-bottom-sheet-"+e+"-"+c),M["default"].refreshAutoTruncate(),r("alt-recs-displayed")),n.label=2;case 2:return[2]}})})};a.prototype.getAspectFromBottomSheets=
function(b,c,e){var g,h=b.querySelector("#aspect-bottom-sheet-"+c+"-"+e);b=b.querySelector("#bottom-sheet-button-"+c+"-"+e);if(h&&b)return null!==(g=b.textContent)&&void 0!==g?g:void 0};a.prototype.getWeblabTreatment=function(b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(c){switch(c.label){case 0:return[4,this.operationProxy.getWeblabTreatment({weblabID:b}).catch(function(e){L["default"].log("cannot fetch the weblab treatments for "+b+": ",e);return"C"})];
case 1:return[2,c.sent()]}})})};a.hideAllBottomSheets=function(b,c,e){for(var g=0;g<c;g++){var h=b.querySelector("#aspect-bottom-sheet-"+e+"-"+g);h&&(h.style.display="none")}};a.HEIGHT_PERCENTAGE=.85;return a}(z),w=function(d,a,b){var c=ka["default"].setup(),e=c.define;c=c.attach;e(a,"click",b);c(a,d)},E=function(d,a){for(var b=0;b<a.length;b++){var c=a[b];c.classList.contains(l.selected)&&c.classList.remove(l.selected)}d.classList.add(l.selected)},P=function(){function d(a){var b=a.sentimentHTML,
c=a.aspectButtons,e=a.aspectButtonsInBottomSheet,g=a.updater,h=a.operationProxy,k=a.asin;this.sentimentIndex=a.sentimentIndex;this.sentimentHTML=b;this.aspectButtons=c;this.aspectButtonsInBottomSheet=e;this.updater=g;this.operationProxy=h;this.asin=k}d.build=function(a){var b=a.sentimentIndex,c=a.sentimentHTML,e=a.operationProxy,g=a.asin;return f.__awaiter(this,void 0,void 0,function(){var h,k,m;return f.__generator(this,function(n){switch(n.label){case 0:return h=this.getAspectButtons(c,b),k=this.getAspectButtonsInBottomSheet(b),
[4,O.build({aspectBottomSheetCount:k.length,sentimentIndex:b,operationProxy:e,asin:g})];case 1:return m=n.sent(),[2,new d({sentimentIndex:b,sentimentHTML:c,aspectButtons:h,aspectButtonsInBottomSheet:k,updater:m,operationProxy:e,asin:g})]}})})};d.prototype.bind=function(){this.bindEventForButtonGroupInFirstPage();this.bindEventForButtonGroupInBottomSheet();this.bindEventTracking()};d.getAspectButtonsInBottomSheet=function(a){return(a=p["default"].cardRoot.querySelector("#second-bottom-sheet-"+a))?
(a=a.querySelector("."+l.insightBottomSheetButtonGroup),Array.from(a.querySelectorAll("."+l.aspectLink))):[]};d.getAspectButtons=function(a,b){return(a=a.querySelector("#aspect-button-group-"+b))?Array.from(a.querySelectorAll("."+l.aspectLink)):[]};d.prototype.bindEventForButtonGroupInFirstPage=function(){var a=this;this.aspectButtons.forEach(function(b,c){w(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){var e;return f.__generator(this,function(g){switch(g.label){case 0:e=this.aspectButtonsInBottomSheet[c];
if(!e)return[3,2];this.updateSelectedAspectButton(e,this.aspectButtonsInBottomSheet);return[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtonsInBottomSheet.length,aspectIndex:c,sentimentIndex:this.sentimentIndex})];case 1:g.sent(),g.label=2;case 2:return e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),[2]}})})})})};d.prototype.bindEventForButtonGroupInBottomSheet=function(){var a=this;this.aspectButtonsInBottomSheet.forEach(function(b,c){w(b,b.id,function(){return f.__awaiter(a,
void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return this.updateSelectedAspectButton(b,this.aspectButtonsInBottomSheet),[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtonsInBottomSheet.length,aspectIndex:c,sentimentIndex:this.sentimentIndex})];case 1:return e.sent(),[2]}})})})})};d.prototype.bindEventTracking=function(){this.aspectButtons.forEach(function(a){y(a,"aspect-button-dp-clicked")});this.aspectButtonsInBottomSheet.forEach(function(a){y(a,
"aspect-button-bottomsheet-clicked")})};d.prototype.updateSelectedAspectButton=function(a,b){E(a,b)};return d}(),oa=function(){function d(a){var b=a.sentimentHTML,c=a.aspectButtons,e=a.updater,g=a.asin;this.sentimentIndex=a.sentimentIndex;this.sentimentHTML=b;this.aspectButtons=c;this.updater=e;this.asin=g}d.build=function(a){var b=a.sentimentIndex,c=a.sentimentHTML,e=a.asin;return f.__awaiter(this,void 0,void 0,function(){var g,h;return f.__generator(this,function(k){g=this.getAspectButtons(c,b);
h=new na({sentimentIndex:b});return[2,new d({sentimentIndex:b,sentimentHTML:c,aspectButtons:g,asin:e,updater:h})]})})};d.prototype.bind=function(){var a=this;this.aspectButtons.forEach(function(b,c){w(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return[4,this.onClick(b,c)];case 1:return e.sent(),[2]}})})});a.fetchPreviousStateOfButton(c,b)});this.bindEventTracking();this.bindEventSeeMoreButtons();this.bindCloseButtons()};
d.prototype.bindEventSeeMoreButtons=function(){var a=this;p["default"].cardRoot.querySelectorAll("."+l.snippetSeeMore).forEach(function(b){b.addEventListener("click",function(){a.seeMoreStateToSessionStorage()})})};d.prototype.onClick=function(a,b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(c){switch(c.label){case 0:if(!a.classList.contains(l.selected))return[3,2];a.classList.remove(l.selected);return[4,this.updater.hide()];case 1:return c.sent(),this.resetStateInSessionStorage(),
[3,5];case 2:return this.updateSelectedAspectButton(a),[4,this.updater.updateContent({aspectButtonsSize:this.aspectButtons.length,aspectIndex:b,sentimentIndex:this.sentimentIndex})];case 3:return c.sent(),[4,this.updater.show()];case 4:c.sent(),this.saveStateToSessionStorage(b,this.sentimentIndex),c.label=5;case 5:return[2]}})})};d.prototype.bindCloseButtons=function(){return f.__awaiter(this,void 0,void 0,function(){var a,b=this;return f.__generator(this,function(c){a=p["default"].cardRoot.querySelectorAll("."+
l.closeButton);a.forEach(function(e){w(e,e.id,function(){b.updater.hide();b.resetAllAspectButtons()})});return[2]})})};d.prototype.fetchPreviousStateOfButton=function(a,b){this.isSelectedAspect(a)&&(this.updater.updateContent({aspectButtonsSize:this.aspectButtons.length,aspectIndex:a,sentimentIndex:this.sentimentIndex}),this.updateSelectedAspectButton(b))};d.getAspectButtons=function(a,b){return(a=a.querySelector("#aspect-button-group-"+b))?Array.from(a.querySelectorAll("."+l.aspectLink)):[]};d.prototype.resetAllAspectButtons=
function(){var a=p["default"].cardRoot.querySelectorAll("."+l.aspectLink);a=Array.from(a);for(var b=0;b<a.length;b++){var c=a[b];c.classList.contains(l.selected)&&c.classList.remove(l.selected)}};d.prototype.bindEventTracking=function(){this.aspectButtons.forEach(function(a){y(a,"aspect-button-dp-clicked")})};d.prototype.updateSelectedAspectButton=function(a){this.resetAllAspectButtons();E(a,this.aspectButtons)};d.prototype.saveStateToSessionStorage=function(a,b){sessionStorage.setItem("productInsights",
JSON.stringify({selectedAspectId:a,selectedSentimentId:b,currentAsin:this.asin}))};d.prototype.seeMoreStateToSessionStorage=function(){sessionStorage.setItem("productInsightsSeeMoreClick",JSON.stringify({isClick:!0,asin:this.asin}))};d.prototype.resetStateInSessionStorage=function(){sessionStorage.removeItem("productInsights")};d.prototype.isSelectedAspect=function(a){var b=sessionStorage.getItem("productInsights");if(null==b)return!1;var c=JSON.parse(b);b=c.selectedAspectId;var e=c.selectedSentimentId;
c=c.currentAsin;return null===b||null===e||null===c?!1:c===this.asin&&parseInt(b)===a&&parseInt(e)===this.sentimentIndex};return d}(),pa=function(){function d(a){var b=a.aspectBottomSheetButtons,c=a.updater,e=a.sentimentIndex,g=a.operationProxy,h=a.asin;this.aspectLinks=a.aspectLinks;this.aspectBottomSheetButtons=b;this.updater=c;this.sentimentIndex=e;this.operationProxy=g;this.asin=h}d.build=function(a){var b=a.aspectLinks,c=a.aspectBottomSheetButtons,e=a.sentimentIndex,g=a.operationProxy,h=a.asin;
return f.__awaiter(this,void 0,void 0,function(){var k;return f.__generator(this,function(m){switch(m.label){case 0:return[4,O.build({aspectBottomSheetCount:c.length,sentimentIndex:e,operationProxy:g,asin:h})];case 1:return k=m.sent(),[2,new d({aspectLinks:b,aspectBottomSheetButtons:c,updater:k,sentimentIndex:e,operationProxy:g,asin:h})]}})})};d.prototype.bindEventForLinksInFirstPage=function(){var a=this;this.aspectLinks.forEach(function(b){var c=b.id.split("-")[3],e=a.aspectBottomSheetButtons[c];
w(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(g){switch(g.label){case 0:return this.updateSelectedAspectButton(e,this.aspectBottomSheetButtons),[4,this.updater.updateContent({aspectButtonsSize:this.aspectBottomSheetButtons.length,aspectIndex:+c,sentimentIndex:this.sentimentIndex})];case 1:return g.sent(),e&&e.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),[2]}})})})})};d.prototype.bindEventForButtonGroupInBottomSheet=function(){var a=
this;this.aspectBottomSheetButtons.forEach(function(b,c){w(b,b.id,function(){return f.__awaiter(a,void 0,void 0,function(){return f.__generator(this,function(e){switch(e.label){case 0:return this.updateSelectedAspectButton(b,this.aspectBottomSheetButtons),[4,this.updater.updateContent({aspectButtonsSize:this.aspectBottomSheetButtons.length,aspectIndex:c,sentimentIndex:this.sentimentIndex})];case 1:return e.sent(),[2]}})})})})};d.prototype.bind=function(){this.bindEventForLinksInFirstPage();this.bindEventForButtonGroupInBottomSheet();
this.bindEventTracking()};d.prototype.bindEventTracking=function(){this.aspectLinks.forEach(function(a){y(a,"aspect-link-dp-clicked")});this.aspectBottomSheetButtons.forEach(function(a){y(a,"aspect-button-bottomsheet-clicked")})};d.prototype.updateSelectedAspectButton=function(a,b){E(a,b)};return d}(),qa=function(){try{var d=C["default"].cardRoot.ownerDocument.getElementById("cr-detailpage-pd-bottom-cards"),a=C["default"].cardRoot.ownerDocument.getElementById("cr-detailpage-pd-top-cards"),b=C["default"].cardRoot.ownerDocument.getElementById("cr-product-insights-cards");
null!=b&&null!=a||null!=b&&null!=d||null!=d&&null!=a?r("duplicate-card-rendered"):null==d&&null==a&&null==b?r("no-card-rendered"):r("single-card-rendered")}catch(c){r("atf-experiment-metrics-error")}},ra=function(d){var a=sessionStorage.getItem("productInsightsSeeMoreClick");if(null==a)d=!1;else{a=JSON.parse(a);var b=a.isClick;d=a.asin===d&&!!b}d&&(d=p["default"].cardRoot.querySelectorAll("."+l.contentContainer),0<d.length&&(d[0].scrollIntoView({block:"center",inline:"center"}),sessionStorage.removeItem("productInsightsSeeMoreClick")))},
ta=function(){return f.__awaiter(void 0,void 0,void 0,function(){var d,a,b,c,e,g,h,k,m,n,q,t,x,F,G,Q,R,S,T,U,H,V,I,J;return f.__generator(this,function(u){switch(u.label){case 0:u.trys.push([0,9,,10]);d=l.bottomSheetWrapper.split(" ")[0];a=p["default"].cardRoot.getElementsByClassName(d)[0];b=0<p["default"].cardRoot.getElementsByClassName(l.isDesktopView).length;c=function(){return p["default"].cardRoot.getElementsByClassName(l.contentContainer)[0]};e=null!==(J=null===(I=c())||void 0===I?void 0:I.dataset.asin)&&
void 0!==J?J:"";g=ia["default"].setup(["getRecommendations","getRecommendationsHTML","getWeblabTreatment"]);if(!a)return[3,8];h=p["default"].cardRoot.querySelectorAll("."+l.sentimentSection);h.forEach(function(W,X){return f.__awaiter(void 0,void 0,void 0,function(){var A;return f.__generator(this,function(B){switch(B.label){case 0:return b?[4,oa.build({sentimentHTML:W,sentimentIndex:X,asin:e})]:[3,2];case 1:return A=B.sent(),A.bind(),[3,4];case 2:return[4,P.build({sentimentHTML:W,sentimentIndex:X,
operationProxy:g,asin:e})];case 3:A=B.sent(),A.bind(),B.label=4;case 4:return[2]}})})});k=p["default"].cardRoot.querySelectorAll("#product-summary");m=0<k.length;if(!m)return[3,8];n=p["default"].cardRoot.querySelectorAll("."+l.aspectSummaryLink);q=sa(n);u.label=1;case 1:u.trys.push([1,6,7,8]),t=f.__values(q),x=t.next(),u.label=2;case 2:if(x.done)return[3,5];F=f.__read(x.value,2);G=F[0];Q=F[1];R=P.getAspectButtonsInBottomSheet(G);return[4,pa.build({aspectLinks:Q,aspectBottomSheetButtons:R,sentimentIndex:G,
operationProxy:g,asin:e})];case 3:S=u.sent(),S.bind(),u.label=4;case 4:return x=t.next(),[3,2];case 5:return[3,8];case 6:return T=u.sent(),H={error:T},[3,8];case 7:try{x&&!x.done&&(V=t.return)&&V.call(t)}finally{if(H)throw H.error;}return[7];case 8:return b&&ra(e),ma(),qa(),[3,10];case 9:return U=u.sent(),L["default"].log("Product Insight: Error:"+U.message,"ERROR"),[3,10];case 10:return[2]}})})},sa=function(d){var a=new Map;d.forEach(function(b){var c=+b.id.split("-")[2];a.has(c)||a.set(c,[]);a.get(c).push(b)});
return a};K._operationNames=[];K.card=function(){return f.__awaiter(void 0,void 0,void 0,function(){return f.__generator(this,function(d){switch(d.label){case 0:return[4,ta()];case 1:return[2,d.sent()]}})})}});
