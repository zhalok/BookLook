/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{393:function(ia,da,f){f.r(da);var ba=f(1),ea=f(232);ia=f(383);var aa=f(88);f=f(351);var ha={},ca=function(f){function w(w,r){var h=f.call(this,w,r)||this;h.url=w;h.range=r;h.status=ea.a.NOT_STARTED;return h}Object(ba.c)(w,f);w.prototype.start=function(f){var r=this;"undefined"===typeof ha[this.range.start]&&(ha[this.range.start]={Ns:function(h){var n=atob(h),e,w=n.length;h=new Uint8Array(w);for(e=0;e<w;++e)h[e]=n.charCodeAt(e);
n=h.length;e="";for(var y=0;y<n;)w=h.subarray(y,y+1024),y+=1024,e+=String.fromCharCode.apply(null,w);r.Ns(e,f)},dQ:function(){r.status=ea.a.ERROR;f({code:r.status})}},window.external.Ska(this.url),this.status=ea.a.STARTED);r.MA()};return w}(ia.ByteRangeRequest);ia=function(f){function w(w,r,h,n){w=f.call(this,w,h,n)||this;w.nw=ca;return w}Object(ba.c)(w,f);w.prototype.xu=function(f,r){return f+"?"+r.start+"&"+(r.stop?r.stop:"")};return w}(aa.a);Object(f.a)(ia);Object(f.b)(ia);da["default"]=ia}}]);}).call(this || window)
