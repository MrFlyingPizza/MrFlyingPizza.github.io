import{c as s,r as g,w as T,d as P,h as d,T as I,i as w,l as N,a as R,g as Z,_ as X,y as $,q as E,s as F,t as H,A as n,u as D}from"./index.f4bb12ef.js";import{Q as G}from"./QSpinner.fd2d460b.js";import{c as k,h as v}from"./render.8a7af00b.js";const V={ratio:[String,Number]};function M(t,l){return s(()=>{const a=Number(t.ratio||(l!==void 0?l.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const O=16/9;var U=k({name:"QImg",props:{...V,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:O},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(t,{slots:l,emit:a}){const i=g(t.initialRatio),m=M(t,i);let r;const o=[g(null),g(t.placeholderSrc!==void 0?{src:t.placeholderSrc}:null)],p=g(0),f=g(!1),b=g(!1),y=s(()=>`q-img q-img--${t.noNativeMenu===!0?"no-":""}menu`),z=s(()=>({width:t.width,height:t.height})),C=s(()=>`q-img__image ${t.imgClass!==void 0?t.imgClass+" ":""}q-img__image--with${t.noTransition===!0?"out":""}-transition`),j=s(()=>({...t.imgStyle,objectFit:t.fit,objectPosition:t.position}));T(()=>x(),h);function x(){return t.src||t.srcset||t.sizes?{src:t.src,srcset:t.srcset,sizes:t.sizes}:null}function h(e){if(clearTimeout(r),b.value=!1,e===null){f.value=!1,o[0].value=null,o[1].value=null;return}f.value=!0,o[p.value].value=e}function S({target:e}){r!==null&&(clearTimeout(r),i.value=e.naturalHeight===0?.5:e.naturalWidth/e.naturalHeight,_(e,1))}function _(e,c){r===null||c===1e3||(e.complete===!0?A(e):r=setTimeout(()=>{_(e,c+1)},50))}function A(e){r!==null&&(p.value=p.value===1?0:1,o[p.value].value=null,f.value=!1,b.value=!1,a("load",e.currentSrc||e.src))}function Y(e){clearTimeout(r),f.value=!1,b.value=!0,o[0].value=null,o[1].value=null,a("error",e)}function B(e,c){return d("div",{class:"q-img__container absolute-full",key:e},c)}function u(e){const c=o[e].value,q={key:"img_"+e,class:C.value,style:j.value,crossorigin:t.crossorigin,decoding:t.decoding,referrerpolicy:t.referrerpolicy,height:t.height,width:t.width,loading:t.loading,fetchpriority:t.fetchpriority,"aria-hidden":"true",draggable:t.draggable,...c};return p.value===e?(q.class+=" q-img__image--waiting",Object.assign(q,{onLoad:S,onError:Y})):q.class+=" q-img__image--loaded",B("img"+e,d("img",q))}function Q(){return f.value!==!0?d("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},v(l[b.value===!0?"error":"default"])):d("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():t.noSpinner===!0?void 0:[d(G,{color:t.spinnerColor,size:t.spinnerSize})])}return h(x()),P(()=>{clearTimeout(r),r=null}),()=>{const e=[];return m.value!==null&&e.push(d("div",{key:"filler",style:m.value})),b.value!==!0&&(o[0].value!==null&&e.push(u(0)),o[1].value!==null&&e.push(u(1))),e.push(d(I,{name:"q-transition--fade"},Q)),d("div",{class:y.value,style:z.value,role:"img","aria-label":t.alt},e)}}}),K=k({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:l}){const{proxy:{$q:a}}=Z(),i=w(N);w(R,()=>{console.error("QPage needs to be child of QPageContainer")});const m=s(()=>{const o=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof t.styleFn=="function"){const p=i.isContainer.value===!0?i.containerHeight.value:a.screen.height;return t.styleFn(o,p)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-o+"px":a.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":a.screen.height-o+"px"}}),r=s(()=>`q-page ${t.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:r.value,style:m.value},v(l.default))}});const L=$({name:"IndexPage"}),J={class:"row justify-center q-pb-lg"},W={class:"col-xs-12 col-sm-6 col-md-3"},tt=n("div",{class:"row q-col-gutter-lg"},[n("div",{class:"col-12"},[n("div",{class:"section-title"}," Projects ")]),n("div",{class:"col-xs-12 col-md-6"},[n("div",{class:"item-title"}," BGC Promotional Gear "),n("div",{class:"text-body1"}," A store for BGC Engineering employees to order promotional products like jackets and backpacks. Comes with a inventory and order management system as well with automated tasks. ")]),n("div",{class:"col-sx-12 col-md-6"},[n("div",{class:"item-title"}," MC Comms "),n("div",{class:"text-body1"}," A plugin to add VoIP server on PaperMC-based Minecraft servers. It adds proximity voice chat to Minecraft to add immersion using Netty over TCP/IP sockets. ")])],-1);function et(t,l,a,i,m,r){return E(),F(K,{padding:"",class:"bg-secondary"},{default:H(()=>[n("div",J,[n("div",W,[D(U,{src:"things-by-pizza-logo.svg"})])]),tt]),_:1})}var at=X(L,[["render",et]]);export{at as default};
