function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{X3zk:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",(function(){return m}));var r,o,i,c=t("ofXK"),a=t("3Pt+"),s=t("TEn/"),u=t("tyNb"),l=t("mrSG"),b=t("fXoL"),f=["name"],p=[{path:"",component:(r=function(){function e(n,t){_classCallCheck(this,e),this.router=n,this.toastController=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"scrolling",value:function(e,n){var t=this;e.scrollIntoView(),n<5&&setTimeout((function(){return t.scrolling(e,n+1)}),300)}},{key:"ensureVisible",value:function(){setTimeout((function(){return window.scroll(0,document.documentElement.offsetHeight)}),300)}},{key:"login",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.name.value){e.next=8;break}return e.next=4,this.toastController.create({color:"danger",message:"Le nom n'est pas correct.",duration:1e3});case 4:return t=e.sent,e.next=7,t.present();case 7:return e.abrupt("return",e.sent);case 8:return e.next=10,this.sha512(n.toString().toUpperCase());case 10:if("53d162a53123028170eaf11d3b013c6caf0ab97fc56b912acfc3e4b25c4ee887fc13ab434cde2fc89d52bd20cb528e58f85158c6b941be6fa19f04b0dc28e0d1"===(r=e.sent)){e.next=18;break}return e.next=14,this.toastController.create({color:"danger",message:"Le nom n'est pas correct.",duration:1e3});case 14:return t=e.sent,e.next=17,t.present();case 17:return e.abrupt("return",e.sent);case 18:return localStorage.setItem("HASH",r),e.next=21,this.toastController.create({color:"primary",message:"F\xe9licitation vous pouvez continuer.",duration:1e3});case 21:return t=e.sent,e.next=24,t.present();case 24:this.router.navigate(["home"]);case 25:case"end":return e.stop()}}),e,this)})))}},{key:"sha512",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,crypto.subtle.digest("SHA-512",(new TextEncoder).encode(e));case 2:return t=n.sent,n.abrupt("return",Array.prototype.map.call(new Uint8Array(t),(function(e){return("00"+e.toString(16)).slice(-2)})).join(""));case 4:case"end":return n.stop()}}),n)})))}}]),e}(),r.\u0275fac=function(e){return new(e||r)(b.Jb(u.g),b.Jb(s.G))},r.\u0275cmp=b.Db({type:r,selectors:[["app-login"]],viewQuery:function(e,n){var t;1&e&&b.mc(f,!0),2&e&&b.cc(t=b.Xb())&&(n.name=t.first)},decls:18,vars:0,consts:[["color","primary",1,"p1"],["color","light",2,"max-height","100vh"],["color","light",2,"margin-top","50px"],["src","assets/pictures/zara.png"],["color","light"],["position","floating"],[3,"ionFocus"],["name",""],["color","primary","expand","block",2,"margin-top","20px",3,"click"]],template:function(e,n){1&e&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-title"),b.kc(3,"Login"),b.Nb(),b.Nb(),b.Nb(),b.Ob(4,"ion-content",1),b.Ob(5,"ion-card",2),b.Kb(6,"img",3),b.Ob(7,"ion-card-header",4),b.Ob(8,"ion-card-title"),b.kc(9,"Comment ce nomme cet individu?"),b.Nb(),b.Nb(),b.Ob(10,"ion-card-content",4),b.Ob(11,"ion-item",4),b.Ob(12,"ion-label",5),b.kc(13,"Entrez le nom ici"),b.Nb(),b.Ob(14,"ion-input",6,7),b.Wb("ionFocus",(function(){return n.ensureVisible()})),b.Nb(),b.Nb(),b.Ob(16,"ion-button",8),b.Wb("click",(function(){return n.login()})),b.kc(17,"Connexion"),b.Nb(),b.Nb(),b.Nb(),b.Nb())},directives:[s.n,s.y,s.x,s.i,s.d,s.f,s.g,s.e,s.q,s.u,s.p,s.F,s.b],styles:[""]}),r)}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(e){return new(e||i)},imports:[[u.i.forChild(p)],u.i]}),i),m=((o=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:o}),o.\u0275inj=b.Gb({factory:function(e){return new(e||o)},imports:[[c.b,a.a,s.z,d]]}),o)}}]);