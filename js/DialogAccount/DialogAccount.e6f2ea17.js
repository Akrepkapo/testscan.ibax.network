import{x as s}from"../element-plus/element-plus.bab642f5.js";import"../vue/vue.35a5c883.js";import{g as e}from"../../assets/index.a8db8e2d.js";import{_ as o}from"../vue-qr/vue-qr.0ca12301.js";import{q as a,o as l,O as i,P as t,a as c,u as n,z as u}from"../@vue/@vue.077a65af.js";const r={class:"dialog-box"},d={class:"dialog-box-img"},m=["src"];var p=o({props:{isDialog:{type:Boolean,default:()=>!1},imgId:{type:String,default:()=>""}},emits:["update:isDialog","close"],setup(o,{emit:p}){const g=o,v=a({get:()=>g.isDialog,set(s){p("update:isDialog",s)}}),f=()=>{p("close",!1)},b=e();return(e,a)=>{const p=s;return l(),i(p,{modelValue:n(v),"onUpdate:modelValue":a[0]||(a[0]=s=>u(v)?v.value=s:null),width:"60%","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":"","custom-class":"dialog"},{default:t((()=>[c("div",r,[c("div",{class:"dialog-box-icon"},[c("i",{class:"iconfont el-Enlarge",onClick:f})]),c("div",d,[c("img",{src:`${n(b)}/api/v2/get_nft_file/${o.imgId}`},null,8,m)])])])),_:1},8,["modelValue"])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/components/account/DialogAccount.vue"]]);export{p as D};
