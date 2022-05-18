import{P as e}from"../PrintChart/PrintChart.6aa15f25.js";import"../vue/vue.35a5c883.js";import{b as a,v as s,p as t,d as i}from"../../assets/index.a8db8e2d.js";import{_ as r}from"../vue-qr/vue-qr.0ca12301.js";import{e as o,t as c,o as l,c as p,a as n,R as m,F as d}from"../@vue/@vue.077a65af.js";import"../element-plus/element-plus.bab642f5.js";import"../@vueuse/@vueuse.57a4e826.js";import"../@element-plus/@element-plus.19eacc1c.js";import"../dayjs/dayjs.7a5f879f.js";import"../@intlify/@intlify.d33e2919.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../chartProcess/chartProcess.be0012c1.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.e0b6e81d.js";import"../vuex/vuex.389a1fed.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.92daffe0.js";import"../echarts/echarts.cc448593.js";import"../zrender/zrender.a8917a70.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.4fe9f180.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.32907f0d.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";const u={class:"chain"},j={class:"panel-content-chart"},f=n("div",{class:"panel-content-chart-box"},[n("div",{id:"coinCharts",class:"ecolib-charts-item-line",style:{height:"70vh"}})],-1);var b=r({setup(r){const b=o("coinCharts"),h=o(`${a("chart.coin")} (${a("page.symbol")})`),v=c("axios"),y=s();return(async()=>{const e=await v({method:"get",url:"eco_chart/get_circulations/1"});if(0===e.code){const{change:s}=e.data,r=s.time.map((e=>e)),o=s.circulations.map((e=>t(e)));let c={},l=[];const p=[o,s.stake_amount.map((e=>t(e))),s.freeze_amount.map((e=>t(e))),s.nft_balance_supply.map((e=>t(e)))];c={xAxis:r,legend:[a("panel.cirb"),a("panel.circ"),a("panel.cird"),a("ecolib.stay")],series:p};const n=[{name:a("panel.cirb"),key:"circulations"},{name:a("panel.circ"),key:"stake_amount"},{name:a("panel.cird"),key:"freeze_amount"},{name:a("ecolib.stay"),key:"nft_balance_supply"}];l=n.map((a=>({name:a.name,value:t(e.data[a.key])}))),d((()=>{i.handleLineArea(b.value,h.value,c,!0),i[b.value].setOption({legend:{bottom:"5%"},grid:{top:"50%",containLabel:!0},series:{type:"pie",id:"pie",radius:"30%",center:["50%","25%"],data:l,label:{color:y,fontSize:12,fontFamily:"Chakra Petch Light"},tooltip:{trigger:"item",position:"right"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}})}))}})(),(a,s)=>{const t=e;return l(),p("div",u,[n("div",j,[m(t,{id:b.value,title:h.value},null,8,["id","title"]),f])])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/coinChart.vue"]]);export{b as default};
