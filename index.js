!function(){var e={626:function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t,n,r,o,c,s,l,i,a,u,d,m,v;t=document.querySelector(".slider__outer"),n=t.querySelector(".slider__wrapper"),r=t.querySelectorAll(".slider__item"),o=r[0].clientWidth,c=0,s=0,l=0,i=function(){c=a().clientX,s=a().clientY,t.addEventListener("touchmove",m),t.addEventListener("mousemove",m)},a=function(){return-1!==event.type.search("touch")?event.touches[0]:event},u=function(e){(l=e?++l:--l)>=r.length&&(l=--r.length),l<0&&(l=0),d()},d=function(){n.style.transform="translateX(-".concat(100*l,"%)"),t.querySelector(".next").classList.toggle("active",l<r.length-1),t.querySelector(".prev").classList.toggle("active",l>0),t.removeEventListener("touchmove",m),t.removeEventListener("mousemove",m)},m=function(){t.addEventListener("touchend",v),t.addEventListener("mouseup",v),transform=parseFloat(n.style.transform.slice(11)),transform||(transform=0);var e=(c-a().clientX)/o*100,r=(s-a().clientY)/o*100;Math.abs(e)>Math.abs(r)&&(Math.abs(e)>=20?u(e>0):Math.abs(transform%100-e)<20&&(n.style.transform="translateX(".concat(transform-e,"%)")))},v=function e(){d(),console.log("end"),t.removeEventListener("touchmove",m),t.removeEventListener("mousemove",m),t.removeEventListener("touchend",e),t.removeEventListener("mouseup",e)},document.querySelector(".check").addEventListener("transitionend",(function(){var e=document.querySelector("#toggle"),t=document.querySelectorAll(".get_column");e.checked?(t[1].classList.add("selected"),t[0].classList.remove("selected")):(t[0].classList.add("selected"),t[1].classList.remove("selected"))})),document.querySelector(".header__menu").addEventListener("click",(function(e){var t=document.querySelector(".nav_toggle"),n=window.innerWidth-document.documentElement.clientWidth;(e.target.closest(".nav_toggle")||e.target.classList.contains("menu__link")&&t.classList.contains("open"))&&(t.style.right=n?"".concat(20+n,"px"):"20px",document.body.classList.toggle("modal_open"),document.querySelector(".nav_toggle").classList.toggle("open"),document.querySelector(".menu.header").classList.toggle("open"))})),document.querySelector(".accordion").addEventListener("click",(function(e){if(e.target.closest(".acc_title")){var t=e.target.closest(".acc_item"),n=t.querySelector(".acc_content");t.classList.contains("open")?(n.style.maxHeight=null,t.classList.remove("open")):(Open=document.querySelector(".open"),Open&&(Open.querySelector(".acc_content").style.maxHeight=null,Open.classList.remove("open")),n.style.maxHeight=n.scrollHeight+"px",t.classList.toggle("open"))}})),document.addEventListener("scroll",(function(){var t,n,r=document.documentElement.clientHeight,o=Array.from(document.querySelectorAll("img[data-src]")),c=[".features",".ultimate",".testimonila",".download",".footer"];(t=c=c.map((function(e){return{elem:document.querySelector(e),top:document.querySelector(e).getBoundingClientRect().top,visible:!1}}))).push.apply(t,function(t){if(Array.isArray(t))return e(t)}(n=o.map((function(e){return{elem:e,top:e.closest(".container").getBoundingClientRect().top,visible:!1}})))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c.find((function(e){e.top-r<100&&0==e.visible&&(e.elem.dataset.src?(e.elem.src=e.elem.dataset.src,e.elem.removeAttribute("data-src"),e.elem.style.opacity=1):e.elem.classList.add("bg"),e.visible=!0)}))})),document.querySelector(".slider__outer").addEventListener("touchstart",i),document.querySelector(".slider__outer").addEventListener("mousedown",i),document.querySelector(".controls").addEventListener("click",(function(e){return u(e.target.closest(".next"))}))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(626)}()}();