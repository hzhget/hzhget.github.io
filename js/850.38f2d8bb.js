(self["webpackChunkshowroom_web"]=self["webpackChunkshowroom_web"]||[]).push([[850],{4850:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>I});var i=n(3673);const t=(0,i.Wm)("div",{class:"text-h6"},"产品列表",-1);function a(e,o,n,a,c,r){const l=(0,i.up)("q-space"),d=(0,i.up)("q-checkbox"),u=(0,i.up)("q-btn"),s=(0,i.up)("q-btn-group"),f=(0,i.up)("q-table"),p=(0,i.up)("q-card"),m=(0,i.up)("q-dialog");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)(f,{rows:e.rows,columns:e.columns,pagination:e.pagination,"row-key":"name",selection:"multiple",selected:e.selected},{top:(0,i.w5)((()=>[t,(0,i.Wm)(l),(0,i.Wm)(d,{modelValue:e.continuousScanning,"onUpdate:modelValue":o[1]||(o[1]=o=>e.continuousScanning=o),"left-label":"",label:"是否连续扫描",color:"red"},null,8,["modelValue"]),(0,i.Wm)(s,{outline:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{icon:"filter_center_focus",onClick:e.doScanProduct},null,8,["onClick"]),(0,i.Wm)(u,{icon:"search",onClick:o[2]||(o[2]=o=>e.showDialog=!e.showDialog)})])),_:1})])),_:1},8,["rows","columns","pagination","selected"]),(0,i.Wm)(m,{modelValue:e.showDialog,"onUpdate:modelValue":o[3]||(o[3]=o=>e.showDialog=o),position:"right"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{style:{width:"300px",height:"100%"}})])),_:1},8,["modelValue"])],64)}var c,r=n(1959),l=n(5747);(function(e){e["GET_PRODUCTS"]="/products"})(c||(c={}));const d=e=>l.api.get(c.GET_PRODUCTS,{params:e});var u=n(3450),s=n(6417),f=n(2712);function p(e,o,n,t,a,c){const r=(0,i.up)("q-dialog");return(0,i.wg)(),(0,i.j4)(r,{ref:"dialogRef",onHide:e.onDialogHide,onShow:e.onDialogShow},{default:(0,i.w5)((()=>[(0,i.Wm)("video",{id:e.id},null,8,["id"])])),_:1},8,["onHide","onShow"])}var m=n(1701);const g=(0,i.aZ)({props:{id:{required:!0,type:String},afterShow:Function,beforeHide:Function},emits:[...m.Z.emits],setup(e){const{dialogRef:o}=(0,m.Z)(),n=()=>{e.afterShow&&e.afterShow()},i=()=>{e.beforeHide&&e.beforeHide()};return{dialogRef:o,onDialogShow:n,onDialogHide:i}}});var v=n(6778),h=n(7518),w=n.n(h);g.render=p;const b=g;w()(g,"components",{QDialog:v.Z});var S=function(e,o,n,i){function t(e){return e instanceof n?e:new n((function(o){o(e)}))}return new(n||(n=Promise))((function(n,a){function c(e){try{l(i.next(e))}catch(o){a(o)}}function r(e){try{l(i["throw"](e))}catch(o){a(o)}}function l(e){e.done?n(e.value):t(e.value).then(c,r)}l((i=i.apply(e,o||[])).next())}))};const D=()=>{const e=new Map,o=new u.BrowserMultiFormatReader(e),n=(0,r.iH)(navigator&&navigator.mediaDevices&&"enumerateDevices"in navigator.mediaDevices);return{codeReader:o,isMediaStreamAPISupported:n}},y=e=>S(void 0,void 0,void 0,(function*(){const o=(0,r.iH)([]);return yield e.listVideoInputDevices().then((e=>{o.value=e})).catch((()=>{s.Z.create({type:"negative",message:"没有找到摄像头设备!"})})),{videoDevices:o}})),H=e=>{const o=new Audio("~/scan.mp3"),n=(0,r.iH)("video"),i=(0,r.iH)(""),t=(0,r.iH)(""),a=()=>e.decodeFromVideoDevice(t.value,n.value,((e,n)=>S(void 0,void 0,void 0,(function*(){if(e&&(i.value=e.getText(),yield o.play()),n&&!(n instanceof u.NotFoundException))throw n}))));return{barcode:i,scannerRef:n,deviceID:t,scan:a}},Z=()=>S(void 0,void 0,void 0,(function*(){const{codeReader:e,isMediaStreamAPISupported:o}=D();if(!o.value)return void s.Z.create({type:"negative",message:"你的设备不支持扫描操作，请更换设备后重试!"});const{videoDevices:n}=yield y(e),{barcode:i,scannerRef:t,deviceID:a,scan:c}=H(e);if(n.value&&n.value.length>0){a.value=n.value[0].deviceId,t.value="video_".concat(Date.now().toString());const o=f.Z.create({position:"standard",component:b,componentProps:{id:t.value,afterShow:()=>{c().catch((e=>{o.hide(),console.log(e),s.Z.create({type:"negative",message:"扫描出错!"})}))},beforeHide:()=>{e.reset()}}});return{barcode:i,dialog:o}}}));var P=n(8825),W=function(e,o,n,i){function t(e){return e instanceof n?e:new n((function(o){o(e)}))}return new(n||(n=Promise))((function(n,a){function c(e){try{l(i.next(e))}catch(o){a(o)}}function r(e){try{l(i["throw"](e))}catch(o){a(o)}}function l(e){e.done?n(e.value):t(e.value).then(c,r)}l((i=i.apply(e,o||[])).next())}))};const q=(0,i.aZ)({name:"Products",setup(){const e=[{name:"productId",align:"center",label:"",field:"productId",required:!1},{name:"img",align:"center",label:"",field:"img"},{name:"gfNumber",label:"GF Number",field:"gfNumber",sortable:!0},{name:"fabrication",label:"Fabrication",field:"fabrication"},{name:"fabricWidth",label:"Fabrication Width",field:"fabricWidth"},{name:"finishing",label:"Finishing",field:"finishing"},{name:"composition",label:"Composition",field:"composition"},{name:"dyeMethod",label:"Dye Method",field:"dyeMethod"},{name:"construction",label:"Construction",field:"construction"}],o=(0,r.iH)([]),n=(0,r.iH)([]),t=(0,r.qj)({}),a=(0,r.iH)(!1),c=(0,r.iH)(!1),l=(0,r.qj)({page:1,rowsPerPage:20,rowsNumber:0});d({page:l.page,pageSize:l.rowsPerPage,data:t}).then((e=>{const n=e.total/e.pageSize;l.rowsNumber=e.total%e.pageSize===0?n:1+(n>>>0),o.value=e.data}));const{notify:u}=(0,P.Z)(),s=function(e){return u({message:e}),e},f=()=>W(this,void 0,void 0,(function*(){const e=yield Z();e&&(0,i.YP)(e.barcode,(o=>{a.value||e.dialog.hide(),s(o)}))}));return{columns:e,continuousScanning:a,doScanProduct:f,showDialog:c,rows:o,pagination:l,selected:n}}});var C=n(6312),_=n(2025),k=n(5735),x=n(6375),R=n(8240),F=n(151);q.render=a;const I=q;w()(q,"components",{QTable:C.Z,QSpace:_.Z,QCheckbox:k.Z,QBtnGroup:x.Z,QBtn:R.Z,QDialog:v.Z,QCard:F.Z})}}]);