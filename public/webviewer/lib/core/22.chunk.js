/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[22],{400:function(ia,da,f){f.r(da);var ba=f(1),ea=f(12),aa=f(2);ia=f(48);var ha=f(29),ca=f(10);f=function(){function f(){this.init()}f.prototype.init=function(){this.w2=!1;this.df=this.uk=this.connection=null;this.Mq={};this.fa=this.iD=null};f.prototype.mha=function(f){for(var w=this,r=0;r<f.length;++r){var h=f[r];switch(h.at){case "create":this.Mq[h.author]||(this.Mq[h.author]=h.aName);this.O9(h);break;case "modify":this.fa.Uk(h.xfdf).then(function(f){w.fa.Fb(f[0])});
break;case "delete":this.fa.Uk("<delete><id>"+h.aId+"</id></delete>")}}};f.prototype.O9=function(f){var w=this;this.fa.Uk(f.xfdf).then(function(r){r=r[0];r.authorId=f.author;w.fa.Fb(r);w.fa.trigger(ea.a.UPDATE_ANNOTATION_PERMISSION,[r])})};f.prototype.n9=function(f,y,r){this.uk&&this.uk(f,y,r)};f.prototype.preloadAnnotations=function(f){this.addEventListener("webViewerServerAnnotationsEnabled",this.n9.bind(this,f,"add",{imported:!1}),{once:!0})};f.prototype.initiateCollaboration=function(w,y,r){var h=
this;if(w){h.df=y;h.fa=r.ta();r.addEventListener(ea.c.DOCUMENT_UNLOADED,function(){h.disableCollaboration()});h.Mha(w);var n=new XMLHttpRequest;n.addEventListener("load",function(){if(200===n.status&&0<n.responseText.length)try{var e=JSON.parse(n.responseText);h.connection=exports.kb.mia(Object(ha.j)(h.df,"blackbox/"),"annot");h.iD=e.id;h.Mq[e.id]=e.user_name;h.fa.aK(e.id);h.connection.HK(function(e){e.t&&e.t.startsWith("a_")&&e.data&&h.mha(e.data)},function(){h.connection.send({t:"a_retrieve",dId:w});
h.trigger(f.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[h.Mq[e.id],h.iD])},function(){h.disableCollaboration()})}catch(x){Object(aa.f)(x.message)}});n.open("GET",Object(ha.j)(this.df,"demo/SessionInfo.jsp"));n.withCredentials=!0;n.send();h.w2=!0;h.fa.vV(function(e){return h.Mq[e.Author]||e.Author})}else Object(aa.f)("Document ID required for collaboration")};f.prototype.disableCollaboration=function(){this.uk&&(this.fa.removeEventListener(ca.a.Events.ANNOTATION_CHANGED,this.uk),this.uk=null);this.connection&&
this.connection.iG();this.fa&&this.fa.aK("Guest");this.init();this.trigger(f.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)};f.prototype.Mha=function(f){var w=this;this.uk&&this.fa.removeEventListener(ca.a.Events.ANNOTATION_CHANGED,this.uk);this.uk=function(r,h,n){return Object(ba.b)(this,void 0,void 0,function(){var e,x,y,z,aa,ca,da,ea,ha;return Object(ba.d)(this,function(ba){switch(ba.label){case 0:if(n.imported)return[2];e={t:"a_"+h,dId:f,annots:[]};return[4,w.fa.nG()];case 1:x=ba.da();"delete"!==
h&&(y=(new DOMParser).parseFromString(x,"text/xml"),z=new XMLSerializer);for(aa=0;aa<r.length;aa++)ca=r[aa],ea=da=void 0,"add"===h?(da=y.querySelector('[name="'+ca.Id+'"]'),ea=z.serializeToString(da),ha=null,ca.InReplyTo&&(ha=w.fa.Mf(ca.InReplyTo).authorId||"default"),e.annots.push({at:"create",aId:ca.Id,author:w.iD,aName:w.Mq[w.iD],parent:ha,xfdf:"<add>"+ea+"</add>"})):"modify"===h?(da=y.querySelector('[name="'+ca.Id+'"]'),ea=z.serializeToString(da),e.annots.push({at:"modify",aId:ca.Id,xfdf:"<modify>"+
ea+"</modify>"})):"delete"===h&&e.annots.push({at:"delete",aId:ca.Id});0<e.annots.length&&w.connection.send(e);return[2]}})})}.bind(w);this.fa.addEventListener(ca.a.Events.ANNOTATION_CHANGED,this.uk)};f.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"};return f}();Object(ia.a)(f);da["default"]=f}}]);}).call(this || window)
