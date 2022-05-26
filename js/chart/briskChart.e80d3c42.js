import"../vue/vue.0c557d7c.js";import{b as s,d as e,a}from"../../assets/index.308fc099.js";import{P as r}from"../PrintChart/PrintChart.b6b1b0be.js";import{_ as t}from"../vue-qr/vue-qr.8eb54fd4.js";import{e as i,t as o,c as p,a as c,R as n,F as l,o as m}from"../@vue/@vue.1ef17de0.js";import"../@intlify/@intlify.d33e2919.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../element-plus/element-plus.9b08f88e.js";import"../@vueuse/@vueuse.323b0efa.js";import"../@element-plus/@element-plus.be983530.js";import"../dayjs/dayjs.7a5f879f.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.7e9fb121.js";import"../vuex/vuex.81732143.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.39fd13ca.js";import"../echarts/echarts.acca1833.js";import"../zrender/zrender.e63004cf.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.c19cb34c.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.cc585963.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";import"../chartProcess/chartProcess.96bb92a5.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";const d={class:"chain"},b={class:"panel-content-chart"},j=c("div",{class:"panel-content-chart-box"},[c("div",{id:"briskCharts",class:"ecolib-charts-item-line"})],-1);var f=t({setup(t){const f=i("briskCharts"),u=i(`${s("chart.brisk")}`),v=o("axios");return(async()=>{const r=await v.get("get_top_ten_ecosystem_tx");if(0===r.code){const t=r.data.map((s=>[s.name,s.tx,s])),i=`${s("chart.brisk")}`,o={legend:[s("chart.numBrisk")],series:[t]};l((()=>{e.handleEchartBarData(o,i,"briskCharts",!0),e.briskCharts.setOption({grid:{left:0,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},formatter:e=>{const{data:r}=e[0],t=r[2];return`<div>\n          <div>\n          <span>${t.name}</span>\n          </div>\n          <div>\n          <span>${s("chart.numBrisk")}：</span>\n          <span>${a(t.tx)}</span>\n          </div>\n          <div>\n          <span>${s("panel.proportion")}：</span>\n          <span>${t.ratio} %</span>\n          </div>\n          </div>`}}})}))}})(),(s,e)=>(m(),p("div",d,[c("div",b,[n(r,{id:f.value,title:u.value},null,8,["id","title"]),j])]))}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/briskChart.vue"]]);export{f as default};
