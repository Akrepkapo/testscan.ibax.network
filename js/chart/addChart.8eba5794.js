import{P as e}from"../PrintChart/PrintChart.6aa15f25.js";import"../vue/vue.35a5c883.js";import{b as a,v as t,c as s,p as r,d as i}from"../../assets/index.a8db8e2d.js";import{_ as o}from"../vue-qr/vue-qr.0ca12301.js";import{e as c,t as p,o as l,c as m,a as n,R as d,F as h}from"../@vue/@vue.077a65af.js";import"../element-plus/element-plus.bab642f5.js";import"../@vueuse/@vueuse.57a4e826.js";import"../@element-plus/@element-plus.19eacc1c.js";import"../dayjs/dayjs.7a5f879f.js";import"../@intlify/@intlify.d33e2919.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../chartProcess/chartProcess.be0012c1.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.e0b6e81d.js";import"../vuex/vuex.389a1fed.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.92daffe0.js";import"../echarts/echarts.cc448593.js";import"../zrender/zrender.a8917a70.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.4fe9f180.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.32907f0d.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";const j={class:"chain"},u={class:"panel-content-chart"},f=n("div",{class:"panel-content-chart-box"},[n("div",{id:"addCharts",class:"ecolib-charts-item-line",style:{height:"70vh"}})],-1);var b=o({setup(o){const b=c("addCharts"),v=c(`${a("chart.add")} (${a("page.symbol")})`),g=p("axios"),y=t();return(async()=>{const e=await g.get("get_new_circulations_chart");if(0===e.code){const t=e.data.change.time.map((e=>s(e))),o=e.data.change.circulations.map((e=>r(e))),c=e.data.change.freeze_amount.map((e=>r(e))),p={xAxis:t,legend:[a("chart.total"),a("chart.thaw")],series:[o,c]},l=[{name:a("chart.mining"),key:"circulations"},{name:a("chart.thaws"),key:"freeze_amount"}].map((a=>({name:a.name,value:r(e.data[a.key])})));h((()=>{i.handleEchartBarLine(b.value,v.value,p,!0),i[b.value].setOption({legend:{bottom:"40%"},grid:{top:"10%",bottom:"50%",containLabel:!0},series:{type:"pie",id:"pie",radius:"20%",center:["50%","78%"],data:l,label:{color:y,fontSize:12,fontFamily:"Chakra Petch Light"},tooltip:{trigger:"item",position:"right"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}})}))}})(),(a,t)=>{const s=e;return l(),m("div",j,[n("div",u,[d(s,{id:b.value,title:v.value},null,8,["id","title"]),f])])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/addChart.vue"]]);export{b as default};
