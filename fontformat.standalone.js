(function(){'use strict';function f(a){this.a=k;this.b=void 0;this.d=[];var b=this;try{a(function(a){l(b,a)},function(a){m(b,a)})}catch(c){m(b,c)}}var k=2;function n(a){return new f(function(b,c){c(a)})}function p(a){return new f(function(b){b(a)})}
function l(a,b){if(a.a===k){if(b===a)throw new TypeError("Promise resolved with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||l(a,b);c=!0},function(b){c||m(a,b);c=!0});return}}catch(e){c||m(a,e);return}a.a=0;a.b=b;q(a)}}function m(a,b){if(a.a===k){if(b===a)throw new TypeError("Promise rejected with itself.");a.a=1;a.b=b;q(a)}}
function q(a){setTimeout(function(){if(a.a!==k)for(;a.d.length;){var b=a.d.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(g){b(g)}}},0)}f.prototype.e=function(a){return this.c(void 0,a)};f.prototype.c=function(a,b){var c=this;return new f(function(d,e){c.d.push([a,b,d,e]);q(c)})};
function r(a){return new f(function(b,c){function d(c){return function(d){g[c]=d;e+=1;e===a.length&&b(g)}}var e=0,g=[];0===a.length&&b(g);for(var h=0;h<a.length;h+=1)a[h].c(d(h),c)})}function s(a){return new f(function(b,c){for(var d=0;d<a.length;d+=1)a[d].c(b,c)})};window.Promise||(window.Promise=f,window.Promise.resolve=p,window.Promise.reject=n,window.Promise.race=s,window.Promise.all=r,window.Promise.prototype.then=f.prototype.c,window.Promise.prototype["catch"]=f.prototype.e);}());

(function(){'use strict';function e(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.d=document.createElement("span");this.e=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.d.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.d);this.a.appendChild(this.b);this.a.appendChild(this.c)}function n(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:300px;font-family:"+b+";"+c}
function s(a){var b=a.a.offsetWidth,c=b+100;a.d.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.e!==b?(a.e=b,!0):!1}e.prototype.g=function(a){s(this)&&null!==this.a.parentNode&&a(this.e)};function t(a,b){a.b.addEventListener("scroll",a.g.bind(a,b),!1);a.c.addEventListener("scroll",a.g.bind(a,b),!1);s(a)};function u(a,b){this.a=a;this.e=b.style||"normal";this.f=b.variant||"normal";this.g=b.weight||"normal";this.d=b.stretch||"stretch";this.b=b.featureSettings||"normal"}var w=null;
u.prototype.c=function(a){a=a||"BESbswy";var b="font-style:"+this.e+";font-variant:"+this.f+";font-weight:"+this.g+";font-stretch:"+this.d+";font-feature-settings:"+this.b+";-moz-font-feature-settings:"+this.b+";-webkit-font-feature-settings:"+this.b+";",c=document.createElement("div"),k=new e(a),l=new e(a),m=new e(a),f=-1,d=-1,g=-1,p=-1,q=-1,r=-1,h=this;n(k,"sans-serif",b);n(l,"serif",b);n(m,"monospace",b);c.appendChild(k.a);c.appendChild(l.a);c.appendChild(m.a);document.body.appendChild(c);p=k.a.offsetWidth;
q=l.a.offsetWidth;r=m.a.offsetWidth;return new Promise(function(a,x){function v(){if(-1!==f&&-1!==d&&-1!==g&&f===d&&d===g){if(null===w){var b=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);w=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}w?f===p&&d===p&&g===p&&f===q&&d===q&&g===q&&f===r&&d===r&&g===r||a(h):a(h)}}setTimeout(function(){document.body.removeChild(c);x(h)},3E3);t(k,function(a){f=a;v()});n(k,h.a+",sans-serif",b);t(l,function(a){d=
a;v()});n(l,h.a+",serif",b);t(m,function(a){g=a;v()});n(m,h.a+",monospace",b)})};window.FontFaceObserver=u;window.FontFaceObserver.prototype.check=u.prototype.c;}());

(function(){'use strict';function c(){this.a=null}
c.prototype.b=function(){if(document.documentMode&&9>document.documentMode)return Promise.resolve(["embedded-opentype"]);if(null===this.a){var e=document.createElement("style");e.appendChild(document.createTextNode('@font-face{font-family:"__fff__";src:url(data:font/font-woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAciuMTaGVo8IaqBbcKPeB3CyAAIO4unr9nb72QE3p00iGQQIZcAAcAMEJOztBx7zdWVWn//BAPW1l0BN429cPrCPE75MA637gPs0DjavNxzHtWeXXErKIV3AF9TbHqCTOATL2BgjeIH30lQwSAonU1LabV8Iz12wDvgd/obV5QVxXDKvUhW1QfWNrS6HzEQJaP4tBA==) format("woff2"),url(data:application/font-woff;base64,d09GRgABAAAAAAHgAAoAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABUAAAABcAAABOBIQEIWNtYXAAAAFwAAAAJgAAACwADABzZ2x5ZgAAAaAAAAAUAAAAFAwBPQJoZWFkAAAA9AAAAC0AAAA2CHEB92hoZWEAAAEkAAAAFgAAACQMAQgDaG10eAAAAWgAAAAIAAAACAgAAABsb2NhAAABmAAAAAYAAAAGAAoAAG1heHAAAAE8AAAAEwAAACAABAACbmFtZQAAAbQAAAAeAAAAIAAjCF5wb3N0AAAB1AAAAAwAAAAgAAMAAHgBY2BkYABhb81vuvH8Nl8ZmFgYQOBCWvVrMP3VURxEczBAxBmYQAQAAFIIBgAAAHgBY2BkYGBhAAEOKAkUQQVMAAJKABkAAHgBY2BkYGBgAkIgjQ0AAAC+AAcAeAFjAIEUBkYGcoECgwILmAEiASBRAK4AAAAAAAgAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoQgvsP//xDy/0EwnwEATX4GfAAAAAAAAAAKAAAAAQAAAAAIAAQAAAEAADEBCAAEAHgBY2BgYGKQY2BmYGThZGAEshmgbCYw2wEABjMAigAAeAFjYGbACwAAfQAE) format("woff"),url(data:font/opentype;base64,AAEAAAAKAIAAAwAgT1MvMgSEBCEAAAEoAAAATmNtYXAADABzAAABgAAAACxnbHlmCAE5AgAAAbQAAAAUaGVhZARxAiIAAACsAAAANmhoZWEIAQQDAAAA5AAAACRobXR4BAAAAAAAAXgAAAAIbG9jYQAKAAAAAAGsAAAABm1heHAABAACAAABCAAAACBuYW1lACMIXgAAAcgAAAAgcG9zdAADAAAAAAHoAAAAIAABAAAAAQAAayoF118PPPUAAgQAAAAAANBme+sAAAAA0PVBQgAAAAAEAAQAAAAAAAACAAAAAAAAAAEAAAQAAAAAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAACAAEAAAACAAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAQAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAQADAAEAAAAMAAQAIAAAAAQABAABAAAAQP//AAAAQP///8EAAQAAAAAAAAAAAAoAAAABAAAAAAQABAAAAQAAMQEEAAQAAAAAAgAeAAMAAQQJAAEAAgAAAAMAAQQJAAIAAgAAAEAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("opentype");}'));document.head.appendChild(e);
this.a=(new FontFaceObserver("__fff__",{})).check("@").then(function(){var a=document.createElement("span"),b=[];a.textContent="@";a.style.cssText="font-family:__fff__;display:inline-block;position:absolute;visibility:hidden;margin:0;padding:0;top:0;whitespace:nowrap;max-height:10px;font-size:100px;";document.body.appendChild(a);var d=a.offsetWidth;300===d?b=["woff2","woff","opentype"]:200===d?b=["woff","opentype"]:100===d&&(b=["opentype"]);document.documentMode&&b.push("embedded-opentype");document.body.removeChild(a);
return b})}return this.a};window.FontFormat=c;window.FontFormat.prototype.supports=c.prototype.b;}());
