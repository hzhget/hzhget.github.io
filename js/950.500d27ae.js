(self["webpackChunkshowroom_web"]=self["webpackChunkshowroom_web"]||[]).push([[950],{9783:(t,n,a)=>{"use strict";a.d(n,{q:()=>C});var o,e=a(5718),i=a(6681),r=a(556),c=a(589),p=a(677),u=a(1959);(function(t){t["GET_SHOPPING_CART"]="/getShoppingCart",t["CLEAR_SHOPPING_CART"]="/doClearShoppingCart",t["ADD_TO_SHOPPING_CART"]="/addShoppingCart",t["ADD_SHOPPING_CART_QUANTITY"]="/addShoppingCartQuantity",t["DEL_SHOPPING_CART_QUANTITY"]="/delShoppingCartQuantity",t["EDIT_SHOPPING_CART_QUANTITY"]="/editShoppingCartQuantity"})(o||(o={}));const s=function(){const t=[];for(let n=1;n<=10;n++)t.push({productId:"productId".concat(n.toString()),barcode:"barcode".concat(n.toString()),gfNumber:"gfNumber".concat(n.toString()),quantity:n,img:"https://cdn.quasar.dev/img/parallax2.jpg",fabrication:"fabrication".concat(n.toString()),fabricWidth:"fabricWidth".concat(n.toString()),finishing:"finishing".concat(n.toString()),composition:"composition".concat(n.toString()),dyeMethod:"dyeMethod".concat(n.toString()),construction:"construction".concat(n.toString())});return new Promise((n=>{n(t)}))},d=function(){return new Promise((t=>{t(!0)}))},l=function(t){return new Promise((t=>{t(!0)}))},h=function(t){return new Promise((t=>{t(!0)}))};var g=function(t,n,a,o){var e,i=arguments.length,r=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,a):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,n,a,o);else for(var c=t.length-1;c>=0;c--)(e=t[c])&&(r=(i<3?e(r):i>3?e(n,a,r):e(n,a))||r);return i>3&&r&&Object.defineProperty(n,a,r),r},f=function(t,n,a,o){function e(t){return t instanceof a?t:new a((function(n){n(t)}))}return new(a||(a=Promise))((function(a,i){function r(t){try{p(o.next(t))}catch(n){i(n)}}function c(t){try{p(o["throw"](t))}catch(n){i(n)}}function p(t){t.done?a(t.value):e(t.value).then(r,c)}p((o=o.apply(t,n||[])).next())}))};const m="shoppingCart";(0,i.i)(m);let S=class extends e.g4{constructor(){super(...arguments),this.shoppingCartState=c.Z.getItem(p.EC)||[]}get getShoppingCartState(){return this.shoppingCartState}get getShoppingCartCountState(){let t=0;return this.shoppingCartState.forEach((n=>t+=n.quantity)),t}commitResetState(){this.shoppingCartState=[]}commitShoppingCartState(t){t.length>0&&(this.shoppingCartState=[]),this.shoppingCartState=t,c.Z.set(p.EC,t)}addToShoppingCart(t){const n=(0,u.IU)(this.shoppingCartState);!t||t instanceof Array||(t=[t]),t.forEach((t=>{const a=n.findIndex((n=>n.productId===t.productId));a>-1?n[a].quantity+=t.quantity:n.push({productId:t.productId,quantity:t.quantity})})),this.commitShoppingCartState(n)}deleteFromShoppingCart(t){const n=(0,u.IU)(this.shoppingCartState);t instanceof Array||(t=[t]),t.forEach((t=>{const a=n.findIndex((n=>n.productId===t.productId));let o=!1;a>-1&&(n[a].quantity-=t.quantity,o=n[a].quantity<1),o&&n.splice(a,1)})),this.commitShoppingCartState(n)}editShoppingCart(t){const n=(0,u.IU)(this.shoppingCartState);t instanceof Array||(t=[t]),t.forEach((t=>{const a=n.findIndex((n=>n.productId===t.productId));let o=!1;a>-1&&(n[a].quantity=t.quantity,o=n[a].quantity<1),o&&n.splice(a,1)})),this.commitShoppingCartState(n)}clearShoppingCart(){return f(this,void 0,void 0,(function*(){return d().then((()=>(this.commitShoppingCartState([]),!0))).catch((()=>!1))}))}loadShoppingCart(){return f(this,void 0,void 0,(function*(){return s().then((t=>{const n=[];return t.forEach((t=>{n.push({productId:t.productId,quantity:t.quantity})})),this.commitShoppingCartState(n),t})).catch((()=>[]))}))}addShoppingCartQuantity(t){return f(this,void 0,void 0,(function*(){return l({productId:t,action:"add"}).then((()=>(this.addToShoppingCart(t.map((t=>({productId:t,quantity:1})))),!0))).catch((()=>!1))}))}delShoppingCartQuantity(t){return f(this,void 0,void 0,(function*(){return l({productId:t,action:"del"}).then((()=>(this.deleteFromShoppingCart(t.map((t=>({productId:t,quantity:1})))),!0))).catch((()=>!1))}))}editShoppingCartQuantity(t){return f(this,void 0,void 0,(function*(){return h(t).then((()=>(this.editShoppingCart(t),!0))).catch((()=>!1))}))}};g([e.mm],S.prototype,"commitResetState",null),g([e.mm],S.prototype,"commitShoppingCartState",null),g([e.aU],S.prototype,"addToShoppingCart",null),g([e.aU],S.prototype,"deleteFromShoppingCart",null),g([e.aU],S.prototype,"editShoppingCart",null),g([e.aU],S.prototype,"clearShoppingCart",null),g([e.aU],S.prototype,"loadShoppingCart",null),g([e.aU],S.prototype,"addShoppingCartQuantity",null),g([e.aU],S.prototype,"delShoppingCartQuantity",null),g([e.aU],S.prototype,"editShoppingCartQuantity",null),S=g([(0,e.Yl)({namespaced:!0,name:m,dynamic:!0,store:r.default})],S);const C=(0,e.rT)(S)},1950:(t,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>Q});var o=a(3673),e=a(8880),i=a(6785),r=a.n(i);const c=(0,o.HX)("data-v-9a6490c0");(0,o.dD)("data-v-9a6490c0");const p={class:"row fullscreen"},u={class:"col-1 shadow-1"},s={class:"col-11"};(0,o.Cn)();const d=c(((t,n,a,i,d,l)=>{const h=(0,o.up)("q-img"),g=(0,o.up)("q-item-section"),f=(0,o.up)("q-item"),m=(0,o.up)("q-space"),S=(0,o.up)("q-btn"),C=(0,o.up)("q-badge"),y=(0,o.up)("q-list"),I=(0,o.up)("router-view"),_=(0,o.up)("q-page-container"),v=(0,o.up)("q-layout"),q=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(v,{view:"lHh LpR lFf"},{default:c((()=>[(0,o.Wm)(_,null,{default:c((()=>[(0,o.Wm)("div",p,[(0,o.Wm)("div",u,[(0,o.Wm)(y,{padding:""},{default:c((()=>[(0,o.wy)((0,o.Wm)(f,{class:"justify-center",clickable:"",to:"/"},{default:c((()=>[(0,o.Wm)(g,null,{default:c((()=>[(0,o.Wm)(h,{src:r()})])),_:1})])),_:1},512),[[q]]),(0,o.Wm)(m,{class:"page-padding-top"}),(0,o.wy)((0,o.Wm)(f,{class:"justify-center",clickable:"",to:"/products"},{default:c((()=>[(0,o.Wm)(g,{avatar:""},{default:c((()=>[(0,o.Wm)(S,{icon:"search",flat:""})])),_:1})])),_:1},512),[[q]]),(0,o.Wm)(m,{class:"q-pb-md"}),(0,o.wy)((0,o.Wm)(f,{class:"justify-center",clickable:"",to:"/scanner"},{default:c((()=>[(0,o.Wm)(g,{avatar:""},{default:c((()=>[(0,o.Wm)(S,{icon:"fas fa-barcode",flat:""})])),_:1})])),_:1},512),[[q]]),(0,o.Wm)(m,{class:"q-pb-md"}),(0,o.wy)((0,o.Wm)(f,{class:"justify-center",clickable:"",to:"/shopping-cart"},{default:c((()=>[(0,o.Wm)(g,{avatar:""},{default:c((()=>[(0,o.Wm)(S,{icon:"shopping_cart",flat:""},{default:c((()=>[(0,o.wy)((0,o.Wm)(C,{color:"red",floating:"",label:t.shoppingCartCount},null,8,["label"]),[[e.F8,t.shoppingCartCount>0]])])),_:1})])),_:1})])),_:1},512),[[q]]),(0,o.Wm)(m,{class:"q-pb-md"}),(0,o.wy)((0,o.Wm)(f,{class:"justify-center",clickable:"",to:"/user"},{default:c((()=>[(0,o.Wm)(g,{avatar:""},{default:c((()=>[(0,o.Wm)(S,{icon:"account_circle",flat:""})])),_:1})])),_:1},512),[[q]])])),_:1})]),(0,o.Wm)("div",s,[(0,o.Wm)(I)])])])),_:1})])),_:1})}));var l=a(1959),h=a(9783);const g=(0,o.aZ)({data(){return{shoppingCartCount:(0,o.Fl)((()=>h.q.getShoppingCartCountState))}},setup(){const t=(0,l.iH)(100),n=(0,l.iH)(100);return{leftWidth:t,rightWidth:n}}});var f=a(9214),m=a(2652),S=a(7011),C=a(6332),y=a(2035),I=a(4027),_=a(2025),v=a(8240),q=a(9721),W=a(6489),b=a(7518),w=a.n(b);g.render=d,g.__scopeId="data-v-9a6490c0";const Q=g;w()(g,"components",{QLayout:f.Z,QPageContainer:m.Z,QList:S.Z,QItem:C.Z,QItemSection:y.Z,QImg:I.Z,QSpace:_.Z,QBtn:v.Z,QBadge:q.Z}),w()(g,"directives",{Ripple:W.Z})},6785:(t,n,a)=>{t.exports=a.p+"img/esquel-group-logo.0fa1a57c.png"}}]);