(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function f(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerPolicy&&(m.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?m.credentials="include":i.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(i){if(i.ep)return;i.ep=!0;const m=f(i);fetch(i.href,m)}})();function b(a,u="visually-hidden"){a.classList.add(u)}function L(a,u="visually-hidden"){a.classList.remove(u)}const E=a=>document.querySelector(a),h={html:E("html"),section:{main:E("#main"),overlay:E("#overlay"),tabs:E("#tabs")},children:{tab:E("#tab").children,modal:E("#modal").children}};function z(){L(h.html,"is-lock"),b(h.section.overlay),Array.from(h.children.modal).forEach(a=>{b(a)})}function _(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var M={exports:{}},q=M.exports,k;function J(){return k||(k=1,function(a,u){(function(f,d){a.exports=d(f)})(typeof window<"u"?window:window||q.window||q.global,function(f){var d={},i="iziToast";document.querySelector("body");var m=!!/Mobi/.test(navigator.userAgent),v=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),A=typeof InstallTrigger<"u",C="ontouchstart"in document.documentElement,D=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],X={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},S=568,N={};d.children={};var R={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var H=function(s,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(s,n.bubbles,n.cancelable,n.detail),e};H.prototype=window.Event.prototype,window.CustomEvent=H}var y=function(s,n,e){if(Object.prototype.toString.call(s)==="[object Object]")for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&n.call(e,s[t],t,s);else if(s)for(var r=0,c=s.length;r<c;r++)n.call(e,s[r],r,s)},w=function(s,n){var e={};return y(s,function(t,r){e[r]=s[r]}),y(n,function(t,r){e[r]=n[r]}),e},O=function(s){var n=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=s;e.firstChild;)n.appendChild(e.firstChild);return n},j=function(s){var n=btoa(encodeURIComponent(s));return n.replace(/=/g,"")},G=function(s){return s.substring(0,1)=="#"||s.substring(0,3)=="rgb"||s.substring(0,3)=="hsl"},F=function(s){try{return btoa(atob(s))==s}catch{return!1}},T=function(){return{move:function(s,n,e,t){var r,c=.3,o=180;t!==0&&(s.classList.add(i+"-dragged"),s.style.transform="translateX("+t+"px)",t>0?(r=(o-t)/o,r<c&&n.hide(w(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),s,"drag")):(r=(o+t)/o,r<c&&n.hide(w(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),s,"drag")),s.style.opacity=r,r<c&&((v||A)&&(s.style.left=t+"px"),s.parentNode.style.opacity=c,this.stopMoving(s,null)))},startMoving:function(s,n,e,t){t=t||window.event;var r=C?t.touches[0].clientX:t.clientX,c=s.style.transform.replace("px)","");c=c.replace("translateX(","");var o=r-c;e.transitionIn&&s.classList.remove(e.transitionIn),e.transitionInMobile&&s.classList.remove(e.transitionInMobile),s.style.transition="",C?document.ontouchmove=function(l){l.preventDefault(),l=l||window.event;var p=l.touches[0].clientX,g=p-o;T.move(s,n,e,g)}:document.onmousemove=function(l){l.preventDefault(),l=l||window.event;var p=l.clientX,g=p-o;T.move(s,n,e,g)}},stopMoving:function(s,n){C?document.ontouchmove=function(){}:document.onmousemove=function(){},s.style.opacity="",s.style.transform="",s.classList.contains(i+"-dragged")&&(s.classList.remove(i+"-dragged"),s.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){s.style.transition=""},400))}}}();return d.setSetting=function(s,n,e){d.children[s][n]=e},d.getSetting=function(s,n){return d.children[s][n]},d.destroy=function(){y(document.querySelectorAll("."+i+"-overlay"),function(s,n){s.remove()}),y(document.querySelectorAll("."+i+"-wrapper"),function(s,n){s.remove()}),y(document.querySelectorAll("."+i),function(s,n){s.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),N={}},d.settings=function(s){d.destroy(),N=s,R=w(R,s||{})},y(X,function(s,n){d[n]=function(e){var t=w(N,e||{});t=w(s,t||{}),this.show(t)}}),d.progress=function(s,n,e){var t=this,r=n.getAttribute("data-iziToast-ref"),c=w(this.children[r],s||{}),o=n.querySelector("."+i+"-progressbar div");return{start:function(){typeof c.time.REMAINING>"u"&&(n.classList.remove(i+"-reseted"),o!==null&&(o.style.transition="width "+c.timeout+"ms "+c.progressBarEasing,o.style.width="0%"),c.time.START=new Date().getTime(),c.time.END=c.time.START+c.timeout,c.time.TIMER=setTimeout(function(){clearTimeout(c.time.TIMER),n.classList.contains(i+"-closing")||(t.hide(c,n,"timeout"),typeof e=="function"&&e.apply(t))},c.timeout),t.setSetting(r,"time",c.time))},pause:function(){if(typeof c.time.START<"u"&&!n.classList.contains(i+"-paused")&&!n.classList.contains(i+"-reseted")){if(n.classList.add(i+"-paused"),c.time.REMAINING=c.time.END-new Date().getTime(),clearTimeout(c.time.TIMER),t.setSetting(r,"time",c.time),o!==null){var l=window.getComputedStyle(o),p=l.getPropertyValue("width");o.style.transition="none",o.style.width=p}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof c.time.REMAINING<"u"?(n.classList.remove(i+"-paused"),o!==null&&(o.style.transition="width "+c.time.REMAINING+"ms "+c.progressBarEasing,o.style.width="0%"),c.time.END=new Date().getTime()+c.time.REMAINING,c.time.TIMER=setTimeout(function(){clearTimeout(c.time.TIMER),n.classList.contains(i+"-closing")||(t.hide(c,n,"timeout"),typeof e=="function"&&e.apply(t))},c.time.REMAINING),t.setSetting(r,"time",c.time)):this.start()},reset:function(){clearTimeout(c.time.TIMER),delete c.time.REMAINING,t.setSetting(r,"time",c.time),n.classList.add(i+"-reseted"),n.classList.remove(i+"-paused"),o!==null&&(o.style.transition="none",o.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},d.hide=function(s,n,e){typeof n!="object"&&(n=document.querySelector(n));var t=this,r=w(this.children[n.getAttribute("data-iziToast-ref")],s||{});r.closedBy=e||null,delete r.time.REMAINING,n.classList.add(i+"-closing"),function(){var l=document.querySelector("."+i+"-overlay");if(l!==null){var p=l.getAttribute("data-iziToast-ref");p=p.split(",");var g=p.indexOf(String(r.ref));g!==-1&&p.splice(g,1),l.setAttribute("data-iziToast-ref",p.join()),p.length===0&&(l.classList.remove("fadeIn"),l.classList.add("fadeOut"),setTimeout(function(){l.remove()},700))}}(),r.transitionIn&&n.classList.remove(r.transitionIn),r.transitionInMobile&&n.classList.remove(r.transitionInMobile),m||window.innerWidth<=S?r.transitionOutMobile&&n.classList.add(r.transitionOutMobile):r.transitionOut&&n.classList.add(r.transitionOut);var c=n.parentNode.offsetHeight;n.parentNode.style.height=c+"px",n.style.pointerEvents="none",(!m||window.innerWidth>S)&&(n.parentNode.style.transitionDelay="0.2s");try{var o=new CustomEvent(i+"-closing",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(l){console.warn(l)}setTimeout(function(){n.parentNode.style.height="0px",n.parentNode.style.overflow="",setTimeout(function(){delete t.children[r.ref],n.parentNode.remove();try{var l=new CustomEvent(i+"-closed",{detail:r,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(p){console.warn(p)}typeof r.onClosed<"u"&&r.onClosed.apply(null,[r,n,e])},1e3)},200),typeof r.onClosing<"u"&&r.onClosing.apply(null,[r,n,e])},d.show=function(s){var n=this,e=w(N,s||{});if(e=w(R,e),e.time={},e.id===null&&(e.id=j(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+e.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{y(document.querySelectorAll("."+i+"#"+e.id),function(o,l){n.hide(e,o,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),d.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(i),t.toast.classList.add(i+"-opening"),t.toastCapsule.classList.add(i+"-capsule"),t.toastBody.classList.add(i+"-body"),t.toastTexts.classList.add(i+"-texts"),m||window.innerWidth<=S?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var o=e.class.split(" ");y(o,function(l,p){t.toast.classList.add(l)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(i+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(i+"-layout"+e.layout),e.balloon&&t.toast.classList.add(i+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(i+"-theme-"+e.theme),e.color&&(G(e.color)?t.toast.style.background=e.color:t.toast.classList.add(i+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(i+"-cover"),t.cover.style.width=e.imageWidth+"px",F(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(i+"-close"),t.buttonClose.addEventListener("click",function(o){o.target,n.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(i+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){n.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(o){n.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(o){n.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(o){n.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",i+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",i+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(i+"-title"),t.strong.appendChild(O(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(i+"-message"),t.p.appendChild(O(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var r;(function(){e.inputs.length>0&&(t.inputs.classList.add(i+"-inputs"),y(e.inputs,function(o,l){t.inputs.appendChild(O(o[0])),r=t.inputs.childNodes,r[l].classList.add(i+"-inputs-child"),o[3]&&setTimeout(function(){r[l].focus()},300),r[l].addEventListener(o[1],function(p){var g=o[2];return g(n,t.toast,this,p)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(i+"-buttons"),y(e.buttons,function(o,l){t.buttons.appendChild(O(o[0]));var p=t.buttons.childNodes;p[l].classList.add(i+"-buttons-child"),o[2]&&setTimeout(function(){p[l].focus()},300),p[l].addEventListener("click",function(g){g.preventDefault();var P=o[1];return P(n,t.toast,this,g,r)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var o=t.toast.offsetHeight,l=t.toast.currentStyle||window.getComputedStyle(t.toast),p=l.marginTop;p=p.split("px"),p=parseInt(p[0]);var g=l.marginBottom;g=g.split("px"),g=parseInt(g[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=o+g+p+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&n.progress(e,t.toast).start()},100)}(),function(){var o=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(i+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(D.indexOf(e.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+D);return}m||window.innerWidth<=S?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?o=i+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?o=i+"-wrapper-topCenter":o=i+"-wrapper-center":o=i+"-wrapper-"+o,t.wrapper=document.querySelector("."+i+"-wrapper."+o),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(i+"-wrapper"),t.wrapper.classList.add(o),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+i+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+i+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(i+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(o){n.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(i+"-animateInside");var o=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(o=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},o[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},o[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},o[2]);var l=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){y(t.buttons.childNodes,function(p,g){setTimeout(function(){p.classList.add("revealIn")},l),l=l+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(l=150,y(t.inputs.childNodes,function(p,g){setTimeout(function(){p.classList.add("revealIn")},l),l=l+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var c=new CustomEvent(i+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(c)}catch(o){console.warn(o)}setTimeout(function(){t.toast.classList.remove(i+"-opening"),t.toast.classList.add(i+"-opened");try{var o=new CustomEvent(i+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(o)}catch(l){console.warn(l)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(C?(t.toast.addEventListener("touchstart",function(o){T.startMoving(this,n,e,o)},!1),t.toast.addEventListener("touchend",function(o){T.stopMoving(this,o)},!1)):(t.toast.addEventListener("mousedown",function(o){o.preventDefault(),T.startMoving(this,n,e,o)},!1),t.toast.addEventListener("mouseup",function(o){o.preventDefault(),T.stopMoving(this,o)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(o){o=o||window.event,o.keyCode==27&&n.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(o){n.hide(e,t.toast,"toast")}),n.toast=t.toast},d})}(M)),M.exports}var K=J();const I=_(K),V={titleColor:"black",titleSize:"20px",messageColor:"black",messageSize:"20px",position:"bottomRight",transitionIn:"bounceInLeft",closeOnClick:!0,zindex:5,displayMode:2};function x(a,u="success",f=!1){const d={...V,title:u.charAt(0).toUpperCase()+u.slice(1),message:a};switch(f&&(d.buttons=[["<button>Copy</button>",function(i,m){const v=m.querySelector(".iziToast-message").innerText;navigator.clipboard.writeText(v).then(()=>{x("Successfully copied","success")}).catch(A=>{x("Error, try again","error")})},!0]]),u){case"success":I.success(d);break;case"error":I.error(d);break;case"warning":I.warning(d);break;case"info":I.info(d);break;default:I.show(d)}}function W(){let a=[];for(let f=0;f<6;f++)a.push(Math.floor(Math.random()*10));const u=a.join("");x(u,"info","copy")}function Y(){L(h.section.main),b(h.section.tabs),Array.from(h.children.tab).forEach(a=>{b(a)})}function B(a=null){if(z(),Y(),a){const u=document.getElementById(a);if(u){const f=u.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:a==="header"?0:f-150})}}else window.scrollTo({top:0})}function U(a){b(h.html,"is-lock"),L(h.section.overlay),Array.from(h.children.modal).forEach(u=>{u.classList.contains(a)?L(u):b(u)})}function Q(a){L(h.section.tabs),b(h.section.main),z(),Array.from(h.children.tab).forEach(u=>{u.classList.contains(a)?L(u):b(u)}),window.scrollTo({top:0})}function Z(a,u){const f=a[0],d=a[1],i=`${f}__${d}`;if(f==="modal"&&(U(i),(d==="email"||d==="forget-code")&&W()),f==="tab"&&(d==="main-logout"||d==="main"?B():Q(i)),(f==="platform"||f==="pay"||f==="lang")&&U("modal__working"),f==="button"){if(d==="close"&&z(),d==="choose"&&B("choose"),d==="password"){const m=u.children[0],v=u.children[1],C=u.parentElement.querySelector("input");m.classList.toggle("visually-hidden"),v.classList.toggle("visually-hidden"),m.classList.contains("visually-hidden")?C.type="text":C.type="password"}d==="resent"&&W()}}function $(a){const u=E(a),f=a.slice(1);u&&B(f)}function ee(a){const u=a.target,f=Object.entries(a.submitter.dataset)[0];console.log("button:",f);const d=new FormData(u),i=Object.fromEntries(d);console.log("Дані:",i)}async function te(a){const u=a.children[1],f=a.children[2];b(u),L(f),a.dataset.copy="yes";try{await navigator.clipboard.writeText("https://github.com/Jaelouss"),x("The link is copied","success"),setTimeout(()=>{L(u),b(f),a.dataset.copy="no"},5e3)}catch{x("Something went wrong, try again","error")}}document.addEventListener("submit",a=>{a.preventDefault(),ee(a)});document.addEventListener("click",a=>{const u=a.target,f=u.closest("BUTTON"),d=u.closest("A"),i=u.closest('[data-copy="no"]');if(f){if(f.className.includes("izi"))return;const v=Object.entries(f.dataset)[0];Z(v,f)}else if(d){const m=d.getAttribute("href");m&&m.startsWith("#")&&(a.preventDefault(),$(m))}else u===h.section.overlay?z():i&&te(i)});
//# sourceMappingURL=index.js.map
