(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},c=()=>{i.selectionChanged()},s=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=t*n/e-t+"ms",o=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},GG5C:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("fXoL"),o=e("tyNb"),r=e("TEn/");let c=(()=>{class t{constructor(t){this.router=t,this.wheelSpinning=!1}ngOnInit(){this.wheel=new Winwheel({numSegments:this.options.length,outerRadius:150,innerRadius:50,textFontSize:16,textMargin:0,segments:this.options.map(t=>({fillStyle:"#eae56f",text:t})),animation:{type:"spinToStop",duration:5,spins:8,callbackFinished:t=>this.finish(t)}})}startSpin(){!1===this.wheelSpinning&&(this.wheel.startAnimation(),this.wheelSpinning=!0)}resetWheel(){this.wheel.stopAnimation(!1),this.wheel.rotationAngle=0,this.wheel.draw(),this.wheelSpinning=!1}finish(t){window.alert(t.text),this.resetWheel()}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(o.g))},t.\u0275cmp=i.Db({type:t,selectors:[["app-roulette"]],inputs:{options:"options",back:"back"},decls:15,vars:0,consts:[["slot","end"],[3,"click"],[1,"page"],["align","center","valign","center",1,"the_wheel"],["id","canvas","width","305","height","310"],["align","center",2,"color","white"],["id","spin_button",3,"click"]],template:function(t,n){1&t&&(i.Mb(0,"ion-header"),i.Mb(1,"ion-toolbar"),i.Mb(2,"ion-title"),i.gc(3,"Sarah l'ind\xe9cise"),i.Lb(),i.Mb(4,"ion-buttons",0),i.Mb(5,"ion-button",1),i.Ub("click",(function(){return n.back()})),i.gc(6,"Revenir"),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Mb(7,"ion-content"),i.Mb(8,"div",2),i.Mb(9,"div",3),i.Mb(10,"canvas",4),i.Mb(11,"p",5),i.gc(12,"Sorry, your browser doesn't support canvas. Please try another."),i.Lb(),i.Lb(),i.Mb(13,"button",6),i.Ub("click",(function(){return n.startSpin()})),i.gc(14," SPIN "),i.Lb(),i.Lb(),i.Lb(),i.Lb())},directives:[r.i,r.t,r.s,r.c,r.b,r.e],styles:["div.the_wheel[_ngcontent-%COMP%]{width:315px;height:419px;background:url(wheel_back.389fa0cbad14a653f139.png);background-position:50%;background-repeat:none}.page[_ngcontent-%COMP%]{width:100%;height:80%;display:flex;justify-content:center;align-items:center}#canvas[_ngcontent-%COMP%]{position:relative;top:55px}#spin_button[_ngcontent-%COMP%]{position:relative;top:-154px;width:101px;height:101px;border-radius:50%;box-shadow:inset 0 1px 0 0 #e184f3;background:linear-gradient(180deg,#c123de 5%,#a20dbd);background-color:#c123de;display:inline-block;cursor:pointer;color:#fff;font-family:Arial;font-size:15px;font-weight:700;padding:6px 24px;text-decoration:none;text-shadow:0 1px 0 #9b14b3;border:none;outline:none}h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}div.power_controls[_ngcontent-%COMP%]{margin-right:70px}div.html5_logo[_ngcontent-%COMP%]{margin-left:70px}table.power[_ngcontent-%COMP%]{background-color:#ccc;cursor:pointer;border:1px solid #333}table.power[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;cursor:default}td.pw1[_ngcontent-%COMP%]{background-color:#6fe8f0}td.pw2[_ngcontent-%COMP%]{background-color:#86ef6f}td.pw3[_ngcontent-%COMP%]{background-color:#ef6f6f}.clickable[_ngcontent-%COMP%]{cursor:pointer}.margin_bottom[_ngcontent-%COMP%]{margin-bottom:5px}ion-button[_ngcontent-%COMP%]{--color:#fff}"]}),t})()},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));const i=async(t,n,e,i,o)=>{if(t)return t.attachViewToDom(n,e,o,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return i&&i.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},PYW1:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("ePDZ"),o=e("ItpF"),r=e("2c9M");const c=(t,n)=>{let e,c;const s=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&n(r)?r!==e&&(l(),a(r,o)):l()},a=(t,n)=>{e=t,c||(c=e);const o=e;Object(i.g)(()=>o.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(i.g)(()=>n.classList.remove("ion-activated")),t&&c!==e&&e.click(),e=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,r.a),onMove:t=>s(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),c=void 0}})}},hcCc:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return s}));const i=(t,n)=>null!==n.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e,i)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(t,e,i)}return!1}}}]);