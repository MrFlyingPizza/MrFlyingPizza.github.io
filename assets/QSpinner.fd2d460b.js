import{c as s,h as n}from"./index.f4bb12ef.js";import{c}from"./render.8a7af00b.js";const t={xs:18,sm:24,md:32,lg:38,xl:46},m={size:String};function z(e,i=t){return s(()=>e.size!==void 0?{fontSize:e.size in i?`${i[e.size]}px`:e.size}:null)}const o={size:{type:[Number,String],default:"1em"},color:String};function u(e){return{cSize:s(()=>e.size in t?`${t[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var S=c({name:"QSpinner",props:{...o,thickness:{type:Number,default:5}},setup(e){const{cSize:i,classes:r}=u(e);return()=>n("svg",{class:r.value+" q-spinner-mat",width:i.value,height:i.value,viewBox:"25 25 50 50"},[n("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{S as Q,z as a,m as u};
