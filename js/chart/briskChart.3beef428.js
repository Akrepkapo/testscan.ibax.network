import"../vue/vue.f1679ee2.js";import{b as e,d as s,a as r}from"../../assets/index.41ecf090.js";import{P as a}from"../PrintChart/PrintChart.d23b1639.js";import{_ as t}from"../vue-qr/vue-qr.811c440f.js";import{d as i,q as o,o as n,c as p,a as c,S as l,H as m}from"../@vue/@vue.43bf68a9.js";import"../@intlify/@intlify.d33e2919.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../element-plus/element-plus.33684f86.js";import"../@vueuse/@vueuse.f1890054.js";import"../@element-plus/@element-plus.0865cea0.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.4f18ce48.js";import"../vuex/vuex.df607009.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.2e4e5314.js";import"../dayjs/dayjs.206dce34.js";import"../echarts/echarts.1c1b7efd.js";import"../zrender/zrender.c7ccb335.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.fd53ebfa.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.08c7aea6.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";import"../chartProcess/chartProcess.7e17db3a.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";const d={class:"chain"},j={class:"panel-content-chart"},f=c("div",{class:"panel-content-chart-box"},[c("div",{id:"briskCharts",class:"ecolib-charts-item-line"})],-1);var u=t({setup(t){const u=i("briskCharts"),b=i(`${e("chart.brisk")}`),v=o("axios");return(()=>{return a=this,t=null,i=function*(){const a=yield v.get("get_top_ten_ecosystem_tx");if(0===a.code){const t=a.data.map((e=>[e.name,e.tx,e])),i=`${e("chart.brisk")}`,o={legend:[e("chart.numBrisk")],series:[t]};m((()=>{s.handleEchartBarData(o,i,"briskCharts",!0),s.briskCharts.setOption({grid:{left:0,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},formatter:s=>{const{data:a}=s[0],t=a[2];return`<div>\n          <div>\n          <span>${t.name}</span>\n          </div>\n          <div>\n          <span>${e("chart.numBrisk")}：</span>\n          <span>${r(t.tx)}</span>\n          </div>\n          <div>\n          <span>${e("panel.proportion")}：</span>\n          <span>${t.ratio} %</span>\n          </div>\n          </div>`}}})}))}},new Promise(((e,s)=>{var r=e=>{try{n(i.next(e))}catch(r){s(r)}},o=e=>{try{n(i.throw(e))}catch(r){s(r)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,o);n((i=i.apply(a,t)).next())}));var a,t,i})(),(e,s)=>(n(),p("div",d,[c("div",j,[l(a,{id:u.value,title:b.value},null,8,["id","title"]),f])]))}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/briskChart.vue"]]);export{u as default};
