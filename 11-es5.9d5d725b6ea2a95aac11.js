function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",(function(){return O}));var i=n("ofXK"),r=n("TEn/"),o=n("3Pt+"),c=n("tyNb"),s=n("mrSG"),a=n("fXoL"),u=["nwItem"];function l(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-item-sliding"),a.Mb(1,"ion-item",6),a.Mb(2,"ion-label"),a.Mb(3,"h2"),a.gc(4),a.Lb(),a.Lb(),a.Lb(),a.Mb(5,"ion-item-options",14),a.Mb(6,"ion-item-option",15),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().update(e)})),a.Kb(7,"ion-icon",16),a.Lb(),a.Mb(8,"ion-item-option",17),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().remove(e)})),a.Kb(9,"ion-icon",18),a.Lb(),a.Lb(),a.Lb()}if(2&e){var i=t.$implicit;a.zb(4),a.hc(i)}}var b,p,f=((b=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"add",value:function(e){e&&this.list.push(e)}},{key:"close",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.name&&this.list&&0!==this.list.length){e.next=4;break}return e.next=3,this.mclose();case 3:return e.abrupt("return",e.sent);case 4:if(!confirm("Veux tu sauvegarder ta liste?")){e.next=9;break}return e.next=7,this.complete();case 7:e.next=11;break;case 9:return e.next=11,this.mclose();case 11:case"end":return e.stop()}}),e,this)})))}},{key:"remove",value:function(e){this.list.splice(e,1)}},{key:"update",value:function(e){this.list[e]=prompt()}},{key:"complete",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.name&&this.list&&0!==this.list.length){e.next=2;break}return e.abrupt("return",alert("La liste est incompl\xe8te."));case 2:return this.nwItem.value&&this.list.push(this.nwItem.value.toString()),this.save(this.list,this.name),e.next=6,this.mclose(!0);case 6:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=a.Db({type:b,selectors:[["app-edit-list"]],viewQuery:function(e,t){var n;1&e&&a.ic(u,!0),2&e&&a.ac(n=a.Vb())&&(t.nwItem=n.first)},inputs:{list:"list",name:"name",mclose:"mclose",save:"save"},decls:25,vars:2,consts:[["translucent",""],["color","primary",1,"p1"],["slot","end"],[3,"click"],["fullscreen","","color","light"],["lines","full"],["color","primary"],["placeholder","Nom de la liste",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["placeholder","Nouveau Item"],["nwItem",""],["name","add","slot","end",3,"click"],["color","primary",1,"p1",3,"click"],["slot","start","name","save"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar",1),a.Mb(2,"ion-title"),a.gc(3,"Nouvelle Liste"),a.Lb(),a.Mb(4,"ion-buttons",2),a.Mb(5,"ion-button",3),a.Ub("click",(function(){return t.close()})),a.gc(6,"Close"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Kb(7,"br"),a.Mb(8,"ion-content",4),a.Mb(9,"ion-card"),a.Mb(10,"ion-list",5),a.Mb(11,"ion-item",6),a.Mb(12,"ion-input",7),a.Ub("ngModelChange",(function(e){return t.name=e})),a.Lb(),a.Lb(),a.fc(13,l,10,1,"ion-item-sliding",8),a.Mb(14,"ion-item",6),a.Kb(15,"ion-input",9,10),a.Mb(17,"ion-icon",11),a.Ub("click",(function(){a.cc(n);var e=a.bc(16);return t.add(e.value),e.value=""})),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(18,"ion-footer"),a.Mb(19,"ion-toolbar",12),a.Ub("click",(function(){return t.complete()})),a.Mb(20,"ion-title"),a.gc(21," Sauvegarder "),a.Lb(),a.Mb(22,"ion-buttons",2),a.Mb(23,"ion-button"),a.Kb(24,"ion-icon",13),a.Lb(),a.Lb(),a.Lb(),a.Lb()}2&e&&(a.zb(12),a.Zb("ngModel",t.name),a.zb(1),a.Zb("ngForOf",t.list))},directives:[r.m,r.x,r.w,r.c,r.b,r.i,r.d,r.u,r.p,r.o,r.C,o.d,o.e,i.h,r.n,r.l,r.s,r.t,r.r,r.q],styles:[""]}),b),d=["videoPlayer"],m=((p=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngAfterViewInit",value:function(){}},{key:"toggleVideo",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.videoplayer.nativeElement).webkitEnterFullscreen){e.next=5;break}t.webkitEnterFullscreen(),e.next=7;break;case 5:return e.next=7,t.requestFullscreen();case 7:return e.next=9,t.play();case 9:t.addEventListener("ended",(function(){return n.back()}));case 10:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=a.Db({type:p,selectors:[["app-video-player"]],viewQuery:function(e,t){var n;1&e&&a.ic(d,!0),2&e&&a.ac(n=a.Vb())&&(t.videoplayer=n.first)},inputs:{back:"back"},decls:15,vars:0,consts:[["translucent",""],["color","primary",1,"p1"],["slot","end"],[3,"click"],["fullscreen","","color","light"],[2,"width","100%","height","100%","display","flex","justify-content","center","align-items","center"],[2,"width","100%","margin","0"],["playsinline","","controls","",2,"width","100%","height","auto"],["videoPlayer",""],["src","assets/videos/video.mov","type","video/mp4"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar",1),a.Mb(2,"ion-title"),a.gc(3,"Meilleure Vid\xe9o Au Monde"),a.Lb(),a.Mb(4,"ion-buttons",2),a.Mb(5,"ion-button",3),a.Ub("click",(function(){return t.back()})),a.gc(6,"Revenir"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Kb(7,"br"),a.Mb(8,"ion-content",4),a.Mb(9,"div",5),a.Mb(10,"ion-card",6),a.Mb(11,"video",7,8),a.Kb(13,"source",9),a.gc(14," Browser not supported "),a.Lb(),a.Lb(),a.Lb(),a.Lb())},directives:[r.m,r.x,r.w,r.c,r.b,r.i,r.d],styles:[""]}),p),h=n("GG5C");function v(e){alert("Le r\xe9sultat est : "+e)}function g(e){return prompt(e)}var k=n("mclP");function M(e,t){if(1&e&&(a.Mb(0,"ion-chip"),a.Mb(1,"ion-label"),a.gc(2),a.Lb(),a.Lb()),2&e){var n=t.$implicit;a.zb(2),a.hc(n)}}function L(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-item-sliding",14),a.Mb(1,"ion-item",15),a.Mb(2,"ion-icon",16),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().roulette(e)})),a.Lb(),a.Mb(3,"ion-label",17),a.Mb(4,"h2"),a.gc(5),a.Lb(),a.fc(6,M,3,1,"ion-chip",18),a.Lb(),a.Lb(),a.Mb(7,"ion-item-options",19),a.Mb(8,"ion-item-option",20),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().openModal(e)})),a.Kb(9,"ion-icon",21),a.Lb(),a.Mb(10,"ion-item-option",22),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().remove(e)})),a.Kb(11,"ion-icon",23),a.Lb(),a.Lb(),a.Lb()}if(2&e){var i=t.$implicit;a.zb(5),a.hc(i.name),a.zb(1),a.Zb("ngForOf",i.options)}}var y,w,x,C=[{path:"",component:(y=function(){function e(t,n){_classCallCheck(this,e),this.modalController=t,this.router=n,this.list=[]}return _createClass(e,[{key:"ngOnInit",value:function(){localStorage.getItem("list")&&(this.list=JSON.parse(localStorage.getItem("list")))}},{key:"openModal",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="number"!=typeof e,e=null!=e?e:this.list.push({name:"",options:[]})-1,t.next=4,this.modalController.create({component:f,swipeToClose:!1,componentProps:{mclose:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(s.a)(r,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.close(i,n,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})))},save:function(t,i){return r.save(e,t,i,n)},list:this.list[e].options,name:this.list[e].name}});case 4:return i=t.sent,t.next=7,i.present();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"close",value:function(e,t,n){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.dismiss();case 2:t&&!n&&this.list.pop(),this.update();case 4:case"end":return i.stop()}}),i,this)})))}},{key:"save",value:function(e,t,n,i){if(!n||0===t.length)return alert("Le formulaire est incomplet."),i&&this.list.pop(),void this.update();this.list[e]={options:t,name:n},this.update()}},{key:"remove",value:function(e){this.list.splice(e,1),this.update()}},{key:"update",value:function(){localStorage.setItem("list",JSON.stringify(this.list))}},{key:"calc",value:function(){var e,t,n;e=g("Quelle est l'operation que vous voulez faire? \n (add3 | add | sous | mul | div)"),t=parseInt(g("Quelle est le premier chiffre de l'operation?"),10),n=parseInt(g("Quelle est le deuxieme chiffre de l'operation?"),10),"add3"===e&&v(function(e,t,n){return e+t+n}(t,n,parseInt(g("Quelle est le troisieme chiffre de l'operation?"),10))),"add"===e&&v(function(e,t){return e+t}(t,n)),"sous"===e&&v(function(e,t){return e-t}(t,n)),"mul"===e&&v(function(e,t){return e*t}(t,n)),"div"===e&&v(function(e,t){return 0===t?"Erreur":e/t}(t,n))}},{key:"roulette",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:h.a,swipeToClose:!1,componentProps:{back:function(){return Object(s.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},options:this.list[e].options,title:this.list[e].name}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"video",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m,swipeToClose:!1,componentProps:{back:function(){return Object(s.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"logout",value:function(){localStorage.setItem("HASH",""),this.router.navigate(["login"])}},{key:"daysSince",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:k.a,swipeToClose:!1,componentProps:{back:function(){return Object(s.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}}]),e}(),y.\u0275fac=function(e){return new(e||y)(a.Jb(r.A),a.Jb(c.g))},y.\u0275cmp=a.Db({type:y,selectors:[["app-home"]],decls:25,vars:1,consts:[["color","primary",1,"p1"],["color","light"],[2,"height","75px"],["vertical","top","horizontal","end","slot","fixed"],["color","primary"],["name","add",3,"click"],["lines","full",4,"ngFor","ngForOf"],["color","primary",1,"p1",2,"border-bottom","white 1px solid"],[2,"display","flex","justify-content","space-around"],[3,"click"],["name","calendar-outline"],["name","calculator"],["name","play-outline"],["name","log-out-outline"],["lines","full"],["color","primary","lines","full"],["slot","start","name","aperture-outline",3,"click"],[2,"padding-left","10px","border-left","solid white 1px"],[4,"ngFor","ngForOf"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar",0),a.Mb(2,"ion-title"),a.gc(3,"Sarah l'ind\xe9cise"),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content",1),a.Mb(5,"div",2),a.Mb(6,"ion-fab",3),a.Mb(7,"ion-fab-button",4),a.Mb(8,"ion-icon",5),a.Ub("click",(function(){return t.openModal()})),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(9,"ion-card"),a.Mb(10,"ion-list"),a.fc(11,L,12,2,"ion-item-sliding",6),a.Lb(),a.Lb(),a.Lb(),a.Mb(12,"ion-footer"),a.Mb(13,"ion-toolbar",7),a.Mb(14,"ion-buttons",8),a.Mb(15,"ion-button",9),a.Ub("click",(function(){return t.daysSince()})),a.Kb(16,"ion-icon",10),a.Lb(),a.Lb(),a.Lb(),a.Mb(17,"ion-toolbar",4),a.Mb(18,"ion-buttons",8),a.Mb(19,"ion-button",9),a.Ub("click",(function(){return t.calc()})),a.Kb(20,"ion-icon",11),a.Lb(),a.Mb(21,"ion-button",9),a.Ub("click",(function(){return t.video()})),a.Kb(22,"ion-icon",12),a.Lb(),a.Mb(23,"ion-button",9),a.Ub("click",(function(){return t.logout()})),a.Kb(24,"ion-icon",13),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(11),a.Zb("ngForOf",t.list))},directives:[r.m,r.x,r.w,r.i,r.j,r.k,r.n,r.d,r.u,i.h,r.l,r.c,r.b,r.s,r.p,r.t,r.r,r.q,r.h],styles:["*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:lighter}ion-label[_ngcontent-%COMP%]{--color:#fff}"]}),y)}],R=((x=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:x}),x.\u0275inj=a.Gb({factory:function(e){return new(e||x)},imports:[[c.i.forChild(C)],c.i]}),x),O=((w=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:w}),w.\u0275inj=a.Gb({factory:function(e){return new(e||w)},imports:[[i.b,o.a,r.y,R]]}),w)}}]);