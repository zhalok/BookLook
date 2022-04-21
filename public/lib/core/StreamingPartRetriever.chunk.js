/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{423:function(ia,ea,e){e.r(ea);var ca=e(1),fa=e(0);e.n(fa);var ha=e(2),da=e(145);ia=e(50);var ba=e(89),aa=e(238),w=e(66),z=e(237);e=e(359);var r=window,h=function(){function e(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(f){case w.a.NEVER_CACHE:this.url=e+n+"_="+Object(fa.uniqueId)();break;default:this.url=e}this.$e=h;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=z.a.NOT_STARTED}e.prototype.start=function(f,h){var n=this,r=this,w=this.request,x;r.hw=0;f&&Object.keys(f).forEach(function(e){n.request.setRequestHeader(e,f[e])});h&&(this.request.withCredentials=h);this.TC=setInterval(function(){var f=0===window.document.URL.indexOf("file:///");f=200===w.status||f&&0===w.status;
if(w.readyState!==z.b.DONE||f){try{w.responseText}catch(Ba){return}r.hw<w.responseText.length&&(x=r.kea())&&r.trigger(e.Events.DATA,[x]);0===w.readyState&&(clearInterval(r.TC),r.trigger(e.Events.DONE))}else clearInterval(r.TC),r.trigger(e.Events.DONE,["Error received return status "+w.status])},1E3);this.request.send(null);this.status=z.a.STARTED};e.prototype.kea=function(){var f=this.request,h=f.responseText;if(0!==h.length)if(this.hw===h.length)clearInterval(this.TC),this.trigger(e.Events.DONE);
else return h=Math.min(this.hw+3E6,h.length),f=r.iS(f,this.hw,!0,h),this.hw=h,f};e.prototype.abort=function(){clearInterval(this.TC);var f=this;this.request.onreadystatechange=function(){Object(ha.j)("StreamingRequest aborted");f.status=z.a.ABORTED;return f.trigger(e.Events.ABORTED)};this.request.abort()};e.prototype.finish=function(){var f=this;this.request.onreadystatechange=function(){f.status=z.a.SUCCESS;return f.trigger(e.Events.DONE)};this.request.abort()};e.Events={DONE:"done",DATA:"data",
ABORTED:"aborted"};return e}();Object(ia.a)(h);var n;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(n||(n={}));var f=function(e){function f(){var f=e.call(this)||this;f.buffer="";f.state=n.LOCAL_HEADER;f.qL=4;f.xl=null;f.As=da.c;f.Sm={};return f}Object(ca.c)(f,e);f.prototype.eea=function(e){var h;for(e=this.buffer+e;e.length>=this.As;)switch(this.state){case n.LOCAL_HEADER:this.xl=h=this.oea(e.slice(0,this.As));if(h.jt!==da.g)throw Error("Wrong signature in local header: "+
h.jt);e=e.slice(this.As);this.state=n.FILE;this.As=h.cG+h.Lp+h.ov+this.qL;this.trigger(f.Events.HEADER,[h]);break;case n.FILE:this.xl.name=e.slice(0,this.xl.Lp);this.Sm[this.xl.name]=this.xl;h=this.As-this.qL;var r=e.slice(this.xl.Lp+this.xl.ov,h);this.trigger(f.Events.FILE,[this.xl.name,r,this.xl.rG]);e=e.slice(h);if(e.slice(0,this.qL)===da.h)this.state=n.LOCAL_HEADER,this.As=da.c;else return this.state=n.CENTRAL_DIR,!0}this.buffer=e;return!1};f.Events={HEADER:"header",FILE:"file"};return f}(aa.a);
Object(ia.a)(f);ia=function(e){function n(n,r,w,x,y){w=e.call(this,n,w,x)||this;w.url=n;w.stream=new h(n,r);w.Qd=new f;w.$U=window.createPromiseCapability();w.AV={};w.$e=y;return w}Object(ca.c)(n,e);n.prototype.Xw=function(e){var n=this;this.request([this.bj,this.vk,this.aj]);this.stream.addEventListener(h.Events.DATA,function(f){try{if(n.Qd.eea(f))return n.stream.finish()}catch(qa){throw n.stream.abort(),n.lv(qa),e(qa),qa;}});this.stream.addEventListener(h.Events.DONE,function(f){n.Ida=!0;n.$U.resolve();
f&&(n.lv(f),e(f))});this.Qd.addEventListener(f.Events.HEADER,Object(fa.bind)(this.zV,this));this.Qd.addEventListener(f.Events.FILE,Object(fa.bind)(this.Eea,this));return this.stream.start(this.$e,this.withCredentials)};n.prototype.fS=function(e){var f=this;this.$U.promise.then(function(){e(Object.keys(f.Qd.Sm))})};n.prototype.An=function(){return!0};n.prototype.request=function(e){var f=this;this.Ida&&e.forEach(function(e){f.AV[e]||f.cja(e)})};n.prototype.zV=function(){};n.prototype.abort=function(){this.stream&&
this.stream.abort()};n.prototype.cja=function(e){this.trigger(ba.a.Events.PART_READY,[{ab:e,error:"Requested part not found",hi:!1,Pf:!1}])};n.prototype.Eea=function(e,f,h){this.AV[e]=!0;this.trigger(ba.a.Events.PART_READY,[{ab:e,data:f,hi:!1,Pf:!1,error:null,$c:h}])};return n}(ba.a);Object(e.a)(ia);Object(e.b)(ia);ea["default"]=ia}}]);}).call(this || window)