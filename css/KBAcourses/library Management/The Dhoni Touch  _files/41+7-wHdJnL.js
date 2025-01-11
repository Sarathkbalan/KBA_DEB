'use strict';mix_d("MorpheusPopularityRankSidesheetCards__morpheus-popularity-rank-sidesheet-card:morpheus-popularity-rank-sidesheet-card__G6nnBdB5","exports tslib @c/browser-operations @c/logger @c/scoped-dom @p/monarch-sidesheet @c/metrics @c/remote-operations @p/A".split(" "),function(P,m,Q,ma,na,oa,pa,qa,ra){function E(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var sa=E(Q),W=E(ma),r=E(na),J=E(oa);Q=E(qa);var R=E(ra),u=function(a,b){void 0===b&&(b=1);pa.count(a,b)},z=function(a,
b){void 0===b&&(b=1);var c=r["default"].cardRoot.getElementsByClassName("editionQualityWeblab")[0].value;u(a+"."+c,b)},ta=function(a){return m.__awaiter(void 0,void 0,void 0,function(){var b,c;return m.__generator(this,function(d){a.classList.contains("morpheusAodEntryLink")&&!a.classList.contains("morpheusAodDeclarativeAction")&&(J["default"].closeSidesheet(a.id),b=null===(c=a.parentElement)||void 0===c?void 0:c.getElementsByClassName("morpheusAodDeclarativeAction")[0])&&(b.click(),u("morpheusAODClicked"),
z("morpheusAODClicked"));return[2]})})},A;(function(a){a.editionClickHandler="editionClickHandler";a.aodLinkClickHandler="aodLinkClickHandler";a.ingressLinkClickHandler="ingressLinkClickHandler";a.formatPillClickHandler="formatPillClickHandler"})(A||(A={}));var F=function(a){K(a)&&a.classList.add("aok-hidden")},B=function(a){K(a)||a.classList.remove("aok-hidden")},K=function(a){return a&&!a.classList.contains("aok-hidden")},ba=function(a){try{var b=a.split("products/")[1].split("/");var c=null===
b||void 0===b?void 0:b[0]}catch(l){throw Error("Failed to extract ASIN from URI "+a);}var d=new URLSearchParams(a.split("?")[1]);a=d.get("pageSize");b=d.get("pageNumber");var f=d.get("selectedFormats");d=d.get("sortBy");return{asin:c,pageSize:null!==a?Number(a):void 0,pageNumber:null!==b?Number(b):void 0,selectedFormats:null!==f?JSON.parse(decodeURIComponent(f)):void 0,sortBy:null!==d?d:void 0}},q;(function(a){a.INGRESS_LINK_CLICK="Morpheus.Desktop.IngressLinkClick";a.FORMAT_PILL_CLICK="Morpheus.Desktop.FormatPillClick";
a.PAGINATION_PILL_CLICK="Morpheus.Desktop.PaginationPillClick";a.SPECIAL_EDITIONS_INGRESS_LINK_CLICK="Morpheus.Desktop.IngressLinkClick.SpecialEditions";a.SPECIAL_EDITIONS_INGRESS_LINK_CLICK_NOT_SHOWN="Morpheus.Desktop.IngressLinkClick.SpecialEditionsNotShown";a.INGRESS_LINK_CLICK_ERROR="Morpheus.Desktop.IngressLinkClick.Error";a.FORMAT_PILL_CLICK_ERROR="Morpheus.Desktop.FormatPillClick.Error";a.PAGINATION_PILL_CLICK_ERROR="Morpheus.Desktop.PaginationPillClick.Error"})(q||(q={}));var v;(function(a){a.INGRESS=
"morpheus-sidesheet-ingress";a.CLOSE="morpheus-sidesheet-close";a.ROOT="morpheusRoot";a.SIDESHEET="morpheus-sidesheet";a.SIDESHEET_BODY="morpheus-sidesheet-main-body";a.SIDESHEET_SPINNER="morpheus-sidesheet-spinner";a.SIDESHEET_ERROR_VIEW="morpheus-sidesheet-error-view";a.SIDESHEET_ERROR_VIEW_CLONED="morpheus-sidesheet-error-view-cloned";a.SIDESHEET_BACKGROUND="morpheus-darkened-background";a.SIDESHEET_CONTENT="morpheus-sidesheet-content-container"})(v||(v={}));var S=function(a){a&&(a.style.display=
"none")},y=function(){var a=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_SPINNER);ca();B(a);return a},L=function(a){var b=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_SPINNER),c=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_ERROR_VIEW);F(b);a?(b=c.cloneNode(!0),b.id=v.SIDESHEET_ERROR_VIEW_CLONED,a.appendChild(b),B(b)):B(c)},ca=function(){var a=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_ERROR_VIEW);K(a)&&F(a);(a=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_ERROR_VIEW_CLONED))&&
a.remove()},M=function(){var a=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_SPINNER);F(a);ca()},da=function(){var a=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_ERROR_VIEW),b=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_ERROR_VIEW_CLONED);return K(a)||K(b)},X=function(a,b){var c,d;if(b){var f=G()?null===(d=null===(c=a.querySelector("tags-scroller"))||void 0===c?void 0:c.shadowRoot)||void 0===d?void 0:d.querySelector(".scrollingContent"):a.querySelector("._bW9yc_pill-row_2E5A6");
b.scrollIntoView({block:"nearest"});a=b.getBoundingClientRect();b=f.getBoundingClientRect();c=G()?30:20;b.left+c>a.left?f.scrollLeft-=c:b.right-c<a.right&&(f.scrollLeft+=c)}},H=function(){return r["default"].cardRoot.getElementsByClassName("_bW9yc_sidesheet-main-body_qw6om")[0]},Y=function(a){if(a)return{htmlElement:a,id:a.getAttribute("tagid")}},ea=function(){var a,b=null===(a=H().querySelector(".sidesheetAsinListContainer:not(.aok-hidden)"))||void 0===a?void 0:a.parentElement;if(b)return{htmlElement:b,
id:b.id}},I=function(){var a,b,c=H();if(G()){var d=c.querySelector("tag-pill[selected]");d||(d=null===(b=null===(a=c.querySelector("tags-scroller"))||void 0===a?void 0:a.shadowRoot)||void 0===b?void 0:b.querySelector("tag-pill[selected]"));return Y(d)}return Y(c.querySelector("tag-pill[selected]"))},C=function(a){return H().querySelector("#"+a+"._bW9yc_pill-content_2rpOw")},T=function(a){return C(a).querySelector(".sidesheetAsinListContainer")},ua=function(){var a=r["default"].cardRoot.querySelector("#"+
v.SIDESHEET_BODY+' div[class*="sidesheetAsinListContainer"]:not([style*="display: none;"]) div[class*="pagination-section"] div');if(a){var b;(b=(b=r["default"].cardRoot.querySelector("tag-pill[selected]"))?b.tagName.replace(/(\([0-9]*\))/g,"").trim():"")&&a.setAttribute("aria-label",b)}},Z=function(a,b){var c=a.getElementsByClassName("_bW9yc_pagination_2YDti")[0],d=a.getElementsByClassName("a-pagination")[0].getElementsByTagName("li");a=function(l){var h=d[l];h.classList.contains("a-disabled")||
h.addEventListener("click",function(n){return m.__awaiter(void 0,void 0,void 0,function(){var k,g,w,e,t;return m.__generator(this,function(p){switch(p.label){case 0:n.preventDefault();k=h&&h.classList.contains("a-selected");g=d[d.length-2];if(!k&&g&&g.dataset.pageNumber){a:switch(p=Number(g.dataset.pageNumber),!0){case 2>=p:w="morpheusSidesheetOtherPageNavigated.1To2Pages";break a;case 2<p&&5>=p:w="morpheusSidesheetOtherPageNavigated.3To5Pages";break a;default:w="morpheusSidesheetOtherPageNavigated.MoreThan5Pages"}u(w)}0===
l&&c.dataset.prevPageNumber?e=Number(c.dataset.prevPageNumber):l===d.length-1&&c.dataset.nextPageNumber?e=Number(c.dataset.nextPageNumber):h&&h.dataset.pageNumber&&(e=Number(h.dataset.pageNumber));if(!h||k||!e)return[3,2];u("morpheusSidesheetOtherPageNavigated");if(!(b||g&&g.dataset.pageNumber))return[3,2];y();t=I();if(!t)return[3,2];U(C(t.id));u(q.PAGINATION_PILL_CLICK+"."+e);return[4,N(t,q.PAGINATION_PILL_CLICK,q.PAGINATION_PILL_CLICK_ERROR,e)];case 1:p.sent(),p.label=2;case 2:return[2]}})})})};
for(var f=0;f<d.length;f++)a(f);ua()},O=new Set,D,fa=Q["default"].setup(),U=function(a){a=a.querySelector(".sidesheetAsinListContainer");F(a)},N=function(a,b,c,d){return m.__awaiter(void 0,void 0,void 0,function(){var f,l,h,n,k,g,w;return m.__generator(this,function(e){switch(e.label){case 0:var t=a.id,p=H();f=G()?p.querySelector("input[type=hidden]#"+t+"-formatReference").value:p.querySelector("tag-pill[tagid="+t+"] input").value;l=ba(f);u(b+"."+(null===(g=l.selectedFormats)||void 0===g?void 0:g[0]));
if(O.has(a.id))return[2];h=C(a.id);e.label=1;case 1:return e.trys.push([1,3,4,5]),O.add(a.id),l.pageNumber=d,[4,fa.getPageHTML(m.__assign({},l))];case 2:return n=e.sent(),k=n.querySelector("#"+a.id+".a-row"),h.innerHTML=k.innerHTML,Z(h),D===a.id||U(h),M(),[3,5];case 3:return e.sent(),L(h),u(c),z(c),u(c+"."+(null===(w=l.selectedFormats)||void 0===w?void 0:w[0])),[3,5];case 4:return O.delete(a.id),[7];case 5:return[2]}})})},va=function(a,b){return m.__awaiter(void 0,void 0,void 0,function(){var c,d,
f,l,h,n,k;return m.__generator(this,function(g){switch(g.label){case 0:c=null===(k=b.querySelector('input.selectedFormat[value="true"]'))||void 0===k?void 0:k.getAttribute("name");if(!c)return L(),[2];y();d=b.querySelector("[id='"+c+"']._bW9yc_pill-content_2rpOw");if(!d)return M(),L(),[2];f=d.querySelector(".sidesheetAsinListContainer");f.innerHTML="";l=ba(a);g.label=1;case 1:return g.trys.push([1,3,,4]),[4,fa.getPageHTML(m.__assign({},l))];case 2:return h=g.sent(),n=h.querySelector("[id='"+c+"'].a-row"),
d.innerHTML=n.innerHTML,M(),[3,4];case 3:return g.sent(),L(d),[3,4];case 4:return[2]}})})},wa=function(a,b){return m.__awaiter(void 0,void 0,void 0,function(){var c,d,f,l;return m.__generator(this,function(h){switch(h.label){case 0:u(q.FORMAT_PILL_CLICK);z(q.FORMAT_PILL_CLICK);c=Y(a);if(!c||!da()&&D===c.id)return[2];d=I();D=c.id;c.htmlElement.setAttribute("selected","true");X(b,c.htmlElement);d&&(d.htmlElement.removeAttribute("selected"),f=C(d.id),U(f));if(O.has(c.id))return y(),[2];if(l=T(c.id))return l.scrollIntoView(),
B(l),c.htmlElement.focus(),M(),[2];y();return[4,N(c,q.FORMAT_PILL_CLICK,q.FORMAT_PILL_CLICK_ERROR)];case 1:return h.sent(),c.htmlElement.focus(),[2]}})})},xa=function(a){return m.__awaiter(void 0,void 0,void 0,function(){var b,c,d,f;return m.__generator(this,function(l){switch(l.label){case 0:u(q.FORMAT_PILL_CLICK);z(q.FORMAT_PILL_CLICK);b=I();c=ea();if(!b||!da()&&D===b.id){var h=null===c||void 0===c?void 0:c.id,n,k,g,w,e=null===(k=null===(n=a.querySelector("tags-scroller"))||void 0===n?void 0:n.shadowRoot)||
void 0===k?void 0:k.querySelector('tag-pill[tagid="'+h+'"]');null===(w=null===(g=null===e||void 0===e?void 0:e.shadowRoot)||void 0===g?void 0:g.querySelector("button"))||void 0===w?void 0:w.classList.add("selected");e.classList.add("customSelectedFormat");return[2]}var t,p;if(n=null===(e=null===(h=a.querySelector("tags-scroller"))||void 0===h?void 0:h.shadowRoot)||void 0===e?void 0:e.querySelector("tag-pill.customSelectedFormat"))null===(p=null===(t=null===n||void 0===n?void 0:n.shadowRoot)||void 0===
t?void 0:t.querySelector("button"))||void 0===p?void 0:p.classList.remove("selected"),n.classList.remove("customSelectedFormat");D=b.id;X(a,b.htmlElement);c&&(d=C(c.id),U(d));if(O.has(b.id))return y(),[2];if(f=T(b.id))return f.scrollIntoView(),B(f),M(),[2];y();return[4,N(b,q.FORMAT_PILL_CLICK,q.FORMAT_PILL_CLICK_ERROR)];case 1:return l.sent(),[2]}})})},ya="1685452183 1685452191 1685452221 168545223X 1685450989 1685450997 1685452132 1685452140 1685452086 1685452094 1649377010 1250355664 1685798462 1649375700 1250346681 0385551150 1250862744 0593817419 1649374186 1649376901 1649377509 1250346746 1250358949 1649374674 1649376952 1649376561 1649374402 1649374100 0063419394 1547617659 0316570389 1250342759 1685798403 1250856035 1649375387 1685452183 1685452167 1464232059 1685452191 1685452175 1685452221 1685452205 1464232067 1685452213 168545223X 1685450962 1685450989 1464232016 1685450970 1685450997 B0CR1W8W9X 1685452132 1685452116 1464232040 1685452140 1685452124 B0CRB93YK3 1464237263 168545206X 1685452086 1464232032 1685452094 1685452078 1649377061 1649377010 1250370442 1250355664 1420517554 1915534054 1638585539 1685798462 1649375700 164937710X 1250358914 1250346681 8383625618 B0B92FZRHZ 038554734X 0385551150 0385549407 B0CY9DHD8Q 1529938295 0857528122 1250862744 B0CSXL1V77 1035001888 0593817419 1643856049 1649374186 1649377150 1649376901 1420517864 1649377509 1649377150 1250358930 1250346746 125034428X 1250358949 1649374674 1649377169 1649376952 1649377142 1649376561 1649376413 1420517066 1649374402 1649377096 1420516183 1649374100 1649377134 0063419394 0008582491 0008582467 0063285185 1547613009 1547617659 1526645742 0316570389 0316581445 1250342759 B0CRS4X3M2 1035007355 1638585490 1685798403 1250856035 1663617651 1649375387 1649377428".split(" "),
za=function(a){var b=a.querySelector("._bW9yc_pill-row_2E5A6"),c=a.querySelectorAll("tag-pill"),d=a.querySelector("._bW9yc_pill-scroll-back_5azJs"),f=a.querySelector("._bW9yc_pill-scroll-forward_1fyk7"),l;if(d&&f&&b){var h=d.offsetLeft>f.offsetLeft,n=h&&20<b.scrollLeft;S(d);var k=function(){return n?20>=Math.abs(b.scrollLeft):20>=b.scrollWidth-Math.abs(b.scrollLeft)-b.offsetWidth},g=function(){return n?20>=b.scrollWidth-Math.abs(b.scrollLeft)-b.offsetWidth:20>=Math.abs(b.scrollLeft)};k()&&S(f);X(a,
a.querySelector("tag-pill[selected]"));b.addEventListener("scroll",function(){k()&&"none"!==f.style.display?S(f):!k()&&"none"===f.style.display&&f&&(f.style.display="block");g()&&"none"!==d.style.display?S(d):!g()&&"none"===d.style.display&&d&&(d.style.display="block")});var w=function(t){for(var p=0;p<c.length;p++)if(c[p].getBoundingClientRect().left<t.left&&(h||p==c.length-1||!(c[p+1].getBoundingClientRect().left<t.left))){l=p;break}c[l].scrollIntoView({block:"nearest"});b.scrollLeft-=20},e=function(t){for(var p=
0;p<c.length;p++)if(c[p].getBoundingClientRect().right>t.right&&!(h&&p!=c.length-1&&c[p+1].getBoundingClientRect().right>t.right)){l=p;break}c[l].scrollIntoView({block:"nearest"});b.scrollLeft+=20};f.addEventListener("click",function(){var t=b.getBoundingClientRect();h?w(t):e(t)});d.addEventListener("click",function(){var t=b.getBoundingClientRect();h?e(t):w(t)})}},ha=function(a,b){return m.__awaiter(void 0,void 0,void 0,function(){var c;return m.__generator(this,function(d){c=b.value;if(!c)return[2];
va(c,a);return[2]})})},ia=Q["default"].setup(),ka=function(){return m.__awaiter(void 0,void 0,void 0,function(){var a,b,c,d,f,l,h,n;return m.__generator(this,function(k){switch(k.label){case 0:u(q.INGRESS_LINK_CLICK);z(q.INGRESS_LINK_CLICK);a=r["default"].cardRoot.getElementsByClassName("_bW9yc_sidesheet_18DM8")[0];b=H();c=r["default"].cardRoot.getElementsByClassName("landingAsinValue")[0];if(!a||!c||!c.value)return W["default"].log("Not able to open see all formats sidesheet, missing necessary component.",
"FATAL"),[2];J["default"].show();d=I();if(!d||!d.id)return[3,4];f=T(d.id);if(!f)return[3,1];b.scrollIntoView();B(f);return[3,3];case 1:return y(),[4,N(d,q.INGRESS_LINK_CLICK,q.INGRESS_LINK_CLICK_ERROR)];case 2:k.sent(),k.label=3;case 3:return[2];case 4:l=y(),(h=c.value)&&ja(h),k.label=5;case 5:return k.trys.push([5,7,,8]),[4,ia.getPageHTML({asin:h})];case 6:n=k.sent();F(l);b.innerHTML=n.outerHTML;if(aa())R["default"].on("a:dropdown:selected:sortingDropdown",function(g){ha(a,g)});else setTimeout(function(){var g=
I();g?(D=g.id,u(q.INGRESS_LINK_CLICK+"."+g.id),Z(C(g.id)),za(b)):V()},0);return[3,8];case 7:return k.sent(),V(b),[3,8];case 8:return[2]}})})},la=function(){return m.__awaiter(void 0,void 0,void 0,function(){var a,b,c,d,f,l,h,n;return m.__generator(this,function(k){switch(k.label){case 0:u(q.INGRESS_LINK_CLICK);z(q.INGRESS_LINK_CLICK);a=r["default"].cardRoot.getElementsByClassName("_bW9yc_sidesheet_18DM8")[0];b=H();c=r["default"].cardRoot.getElementsByClassName("landingAsinValue")[0];if(!a||!c||!c.value)return W["default"].log("Not able to open see all formats sidesheet, missing necessary component.",
"FATAL"),[2];J["default"].show();d=ea();if(!d||!d.id)return[3,4];f=T(d.id);if(!f)return[3,1];b.scrollIntoView();B(f);return[3,3];case 1:return y(),[4,N(d,q.INGRESS_LINK_CLICK,q.INGRESS_LINK_CLICK_ERROR)];case 2:k.sent(),k.label=3;case 3:return[2];case 4:l=y(),(h=c.value)&&ja(h),k.label=5;case 5:return k.trys.push([5,7,,8]),[4,ia.getPageHTML({asin:h})];case 6:n=k.sent();F(l);b.innerHTML=n.outerHTML;if(aa())R["default"].on("a:dropdown:selected:sortingDropdown",function(g){ha(a,g)});else setTimeout(function(){var g=
I();g?(D=g.id,u(q.INGRESS_LINK_CLICK+"."+g.id),Z(C(g.id))):V()},0);return[3,8];case 7:return k.sent(),V(b),[3,8];case 8:return[2]}})})},V=function(a){L(a);u(q.INGRESS_LINK_CLICK_ERROR);z(q.INGRESS_LINK_CLICK_ERROR)},ja=function(a){"true"===r["default"].cardRoot.getElementsByClassName("specialEditionsWeblabT1")[0].value&&ya.includes(a)?u(q.SPECIAL_EDITIONS_INGRESS_LINK_CLICK):u(q.SPECIAL_EDITIONS_INGRESS_LINK_CLICK_NOT_SHOWN)},x=!1,aa=function(){var a;return 0<(null===(a=r["default"].cardRoot.getElementsByClassName("isDesktopCXImprovementsPhaseTwoWeblabEnabled"))||
void 0===a?void 0:a.length)},G=function(){return"true"===r["default"].cardRoot.getElementsByClassName("isAccessibilityPh4WeblabEnabled")[0].value};P._operationNames=["getPageHTML"];P.card=function(){return m.__awaiter(void 0,void 0,void 0,function(){var a,b,c,d,f,l,h,n,k,g;return m.__generator(this,function(w){a=r["default"].cardRoot.querySelector("#"+v.ROOT);if(!a)return[2];b=r["default"].cardRoot.querySelector("#"+v.SIDESHEET);c=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_BODY);d=r["default"].cardRoot.querySelector("#"+
v.SIDESHEET_BACKGROUND);f=r["default"].cardRoot.querySelector("#"+v.SIDESHEET_SPINNER);l=r["default"].cardRoot.querySelector("#"+v.CLOSE);h=[b,c,d,f,l];if(h.every(function(e){return e})&&h.map(function(e){return e.id}).every(function(e){return e}))J["default"].initialize.apply(J["default"],m.__spread(h.map(function(e){return e.id}))),l.tabIndex=0;else return W["default"].log("Not able to initialize see all formats sidesheet, missing necessary component or component id.","FATAL"),[2];n=r["default"].cardRoot.getElementsByClassName("ingressMigrationWeblabTreatment")[0];
k=n.value;g=sa["default"].setup().define;g(A.editionClickHandler,"click",function(){u("morpheusEditionItemClicked");z("morpheusEditionItemClicked")});g(A.aodLinkClickHandler,"click",function(e){ta(e.target)});if(G()){if("T1"===k)R["default"].on("akira:morpheusIngress:clicked",function(){return m.__awaiter(void 0,void 0,void 0,function(){return m.__generator(this,function(e){switch(e.label){case 0:if(x)return[3,2];x=!0;return[4,la()];case 1:e.sent(),x=!1,e.label=2;case 2:return[2]}})})});else g(A.ingressLinkClickHandler,
"click",function(){return m.__awaiter(void 0,void 0,void 0,function(){return m.__generator(this,function(e){switch(e.label){case 0:if(x)return[3,2];x=!0;return[4,la()];case 1:e.sent(),x=!1,e.label=2;case 2:return[2]}})})});g(A.formatPillClickHandler,"click",function(){xa(b)})}else{if("T1"===k)R["default"].on("akira:morpheusIngress:clicked",function(){return m.__awaiter(void 0,void 0,void 0,function(){return m.__generator(this,function(e){switch(e.label){case 0:if(x)return[3,2];x=!0;return[4,ka()];
case 1:e.sent(),x=!1,e.label=2;case 2:return[2]}})})});else g(A.ingressLinkClickHandler,"click",function(){return m.__awaiter(void 0,void 0,void 0,function(){return m.__generator(this,function(e){switch(e.label){case 0:if(x)return[3,2];x=!0;return[4,ka()];case 1:e.sent(),x=!1,e.label=2;case 2:return[2]}})})});g(A.formatPillClickHandler,"click",function(e){wa(e.target,b)})}return[2]})})};P.isAccessibilityPh4WeblabEnabledFunc=G;P.isDesktopCXImprovementsPhaseTwoWeblabEnabledFunc=aa});
