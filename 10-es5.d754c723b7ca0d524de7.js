function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",(function(){return y}));var i=n("ofXK"),o=n("TEn/"),r=n("3Pt+"),c=n("tyNb"),s=n("mrSG"),a=n("fXoL");function l(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-item-sliding"),a.Mb(1,"ion-item",6),a.Mb(2,"ion-label"),a.Mb(3,"h2"),a.gc(4),a.Lb(),a.Lb(),a.Lb(),a.Mb(5,"ion-item-options",14),a.Mb(6,"ion-item-option",15),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().update(e)})),a.Kb(7,"ion-icon",16),a.Lb(),a.Mb(8,"ion-item-option",17),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().remove(e)})),a.Kb(9,"ion-icon",18),a.Lb(),a.Lb(),a.Lb()}if(2&e){var i=t.$implicit;a.zb(4),a.hc(i)}}var u,b=((u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"add",value:function(e){e&&this.list.push(e)}},{key:"close",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.name&&this.list&&0!==this.list.length){e.next=4;break}return e.next=3,this.mclose();case 3:return e.abrupt("return",e.sent);case 4:if(e.t0=confirm("Veux tu sauvegarder ta liste?"),!e.t0){e.next=8;break}return e.next=8,this.complete();case 8:case"end":return e.stop()}}),e,this)})))}},{key:"remove",value:function(e){this.list.splice(e,1)}},{key:"update",value:function(e){this.list[e]=prompt()}},{key:"complete",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.name&&this.list&&0!==this.list.length){e.next=2;break}return e.abrupt("return",alert("La liste est incompl\xe8te."));case 2:return this.save(this.list,this.name),e.next=5,this.mclose(!0);case 5:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=a.Db({type:u,selectors:[["app-edit-list"]],inputs:{list:"list",name:"name",mclose:"mclose",save:"save"},decls:25,vars:2,consts:[["translucent",""],["color","primary",1,"p1"],["slot","end"],[3,"click"],["fullscreen","","color","light"],["lines","full"],["color","primary"],["placeholder","Nom de la liste",3,"ngModel","ngModelChange"],["placeholder","Nouveau Item"],["nwItem",""],["name","add","slot","end",3,"click"],[4,"ngFor","ngForOf"],["color","primary",1,"p1",3,"click"],["slot","start","name","save"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar",1),a.Mb(2,"ion-title"),a.gc(3,"Nouvelle Liste"),a.Lb(),a.Mb(4,"ion-buttons",2),a.Mb(5,"ion-button",3),a.Ub("click",(function(){return t.close()})),a.gc(6,"Close"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Kb(7,"br"),a.Mb(8,"ion-content",4),a.Mb(9,"ion-card"),a.Mb(10,"ion-list",5),a.Mb(11,"ion-item",6),a.Mb(12,"ion-input",7),a.Ub("ngModelChange",(function(e){return t.name=e})),a.Lb(),a.Lb(),a.Mb(13,"ion-item",6),a.Kb(14,"ion-input",8,9),a.Mb(16,"ion-icon",10),a.Ub("click",(function(){a.cc(n);var e=a.bc(15);return t.add(e.value),e.value=""})),a.Lb(),a.Lb(),a.fc(17,l,10,1,"ion-item-sliding",11),a.Lb(),a.Lb(),a.Lb(),a.Mb(18,"ion-footer"),a.Mb(19,"ion-toolbar",12),a.Ub("click",(function(){return t.complete()})),a.Mb(20,"ion-title"),a.gc(21," Sauvegarder "),a.Lb(),a.Mb(22,"ion-buttons",2),a.Mb(23,"ion-button"),a.Kb(24,"ion-icon",13),a.Lb(),a.Lb(),a.Lb(),a.Lb()}2&e&&(a.zb(12),a.Zb("ngModel",t.name),a.zb(5),a.Zb("ngForOf",t.list))},directives:[o.j,o.u,o.t,o.c,o.b,o.f,o.d,o.r,o.m,o.l,o.z,r.d,r.e,o.k,i.h,o.i,o.p,o.q,o.o,o.n],styles:[""]}),u),p=n("GG5C");function f(e){alert("Le r\xe9sultat est : "+e)}function m(e){return prompt(e)}function d(e,t){if(1&e&&(a.Mb(0,"ion-chip"),a.Mb(1,"ion-label"),a.gc(2),a.Lb(),a.Lb()),2&e){var n=t.$implicit;a.zb(2),a.hc(n)}}function h(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-item-sliding",10),a.Mb(1,"ion-item",11),a.Mb(2,"ion-icon",12),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().roulette(e)})),a.Lb(),a.Mb(3,"ion-label"),a.Mb(4,"h2"),a.gc(5),a.Lb(),a.fc(6,d,3,1,"ion-chip",13),a.Lb(),a.Lb(),a.Mb(7,"ion-item-options",14),a.Mb(8,"ion-item-option",15),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().openModal(e)})),a.Kb(9,"ion-icon",16),a.Lb(),a.Mb(10,"ion-item-option",17),a.Ub("click",(function(){a.cc(n);var e=t.index;return a.Wb().remove(e)})),a.Kb(11,"ion-icon",18),a.Lb(),a.Lb(),a.Lb()}if(2&e){var i=t.$implicit;a.zb(5),a.hc(i.name),a.zb(1),a.Zb("ngForOf",i.options)}}var v,g,M,k=[{path:"",component:(v=function(){function e(t,n){_classCallCheck(this,e),this.modalController=t,this.router=n,this.list=[]}return _createClass(e,[{key:"ngOnInit",value:function(){localStorage.getItem("list")&&(this.list=JSON.parse(localStorage.getItem("list")))}},{key:"openModal",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="number"!=typeof e,e=null!=e?e:this.list.push({name:"",options:[]})-1,t.next=4,this.modalController.create({component:b,swipeToClose:!1,componentProps:{mclose:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(s.a)(o,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.close(i,n,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})))},save:function(t,i){return o.save(e,t,i,n)},list:this.list[e].options,name:this.list[e].name}});case 4:return i=t.sent,t.next=7,i.present();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t,this)})))}},{key:"close",value:function(e,t,n){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.dismiss();case 2:t&&!n&&this.list.pop(),this.update();case 4:case"end":return i.stop()}}),i,this)})))}},{key:"save",value:function(e,t,n,i){if(!n||0===t.length)return alert("Le formulaire est incomplet."),i&&this.list.pop(),void this.update();this.list[e]={options:t,name:n},this.update()}},{key:"remove",value:function(e){this.list.splice(e,1),this.update()}},{key:"update",value:function(){localStorage.setItem("list",JSON.stringify(this.list))}},{key:"calc",value:function(){var e,t,n;e=m("Quelle est l'operation que vous voulez faire? \n (add3 | add | sous | mul | div)"),t=parseInt(m("Quelle est le premier chiffre de l'operation?"),10),n=parseInt(m("Quelle est le deuxieme chiffre de l'operation?"),10),"add3"===e&&f(function(e,t,n){return e+t+n}(t,n,parseInt(m("Quelle est le troisieme chiffre de l'operation?"),10))),"add"===e&&f(function(e,t){return e+t}(t,n)),"sous"===e&&f(function(e,t){return e-t}(t,n)),"mul"===e&&f(function(e,t){return e*t}(t,n)),"div"===e&&f(function(e,t){return 0===t?"Erreur":e/t}(t,n))}},{key:"roulette",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:p.a,swipeToClose:!1,componentProps:{back:function(){return Object(s.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dismiss();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},options:this.list[e].options}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(a.Jb(o.x),a.Jb(c.g))},v.\u0275cmp=a.Db({type:v,selectors:[["app-home"]],decls:19,vars:1,consts:[["color","primary",1,"p1"],["color","light"],[2,"height","75px"],["vertical","top","horizontal","end","slot","fixed"],["color","primary"],["name","add",3,"click"],["lines","full",4,"ngFor","ngForOf"],["color","primary",1,"p1",3,"click"],["slot","end"],["slot","start","name","calculator"],["lines","full"],["color","primary","lines","full"],["slot","start","name","aperture-outline",3,"click"],[4,"ngFor","ngForOf"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","pencil"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar",0),a.Mb(2,"ion-title"),a.gc(3,"Sarah l'ind\xe9cise"),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content",1),a.Mb(5,"div",2),a.Mb(6,"ion-fab",3),a.Mb(7,"ion-fab-button",4),a.Mb(8,"ion-icon",5),a.Ub("click",(function(){return t.openModal()})),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(9,"ion-card"),a.Mb(10,"ion-list"),a.fc(11,h,12,2,"ion-item-sliding",6),a.Lb(),a.Lb(),a.Lb(),a.Mb(12,"ion-footer"),a.Mb(13,"ion-toolbar",7),a.Ub("click",(function(){return t.calc()})),a.Mb(14,"ion-title"),a.gc(15," Calculatrice de Sarah "),a.Lb(),a.Mb(16,"ion-buttons",8),a.Mb(17,"ion-button"),a.Kb(18,"ion-icon",9),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(11),a.Zb("ngForOf",t.list))},directives:[o.j,o.u,o.t,o.f,o.g,o.h,o.k,o.d,o.r,i.h,o.i,o.c,o.b,o.p,o.m,o.q,o.o,o.n,o.e],styles:["*[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:lighter}"]}),v)}],L=((M=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:M}),M.\u0275inj=a.Gb({factory:function(e){return new(e||M)},imports:[[c.i.forChild(k)],c.i]}),M),y=((g=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:g}),g.\u0275inj=a.Gb({factory:function(e){return new(e||g)},imports:[[i.b,r.a,o.v,L]]}),g)}}]);