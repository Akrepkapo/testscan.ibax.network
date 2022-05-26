import{A as e,B as a}from"../element-plus/element-plus.9b08f88e.js";import{P as s}from"../PrintChart/PrintChart.b6b1b0be.js";import"../vue/vue.0c557d7c.js";import{b as t,d as o,f as r,y as l}from"../../assets/index.308fc099.js";import{_ as i}from"../vue-qr/vue-qr.8eb54fd4.js";import{e as c,t as n,X as p,W as d,c as m,a as u,R as b,P as f,u as h,F as j,o as v,T as w,O as y,U as _,K as g}from"../@vue/@vue.1ef17de0.js";import"../@vueuse/@vueuse.323b0efa.js";import"../@element-plus/@element-plus.be983530.js";import"../dayjs/dayjs.7a5f879f.js";import"../@intlify/@intlify.d33e2919.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../chartProcess/chartProcess.96bb92a5.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.7e9fb121.js";import"../vuex/vuex.81732143.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.39fd13ca.js";import"../echarts/echarts.acca1833.js";import"../zrender/zrender.e63004cf.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.c19cb34c.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.cc585963.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";const k={class:"chain"},x={class:"panel-content-chart"},P={class:"panel-content-chart-box"},z=u("div",{id:"addresschart",class:"ecolib-charts-item-line"},null,-1),O={class:"panel-table"},$={class:"panel-content-table"},A={key:0},C={class:"panel-content-table-symbol"},S={key:0,class:"panel-content-table-symbol"},q=u("span",{class:"panel-content-table-symbol"},"% ",-1);var B=i({setup(i){const B=c(""),E=n("axios"),J=c("addresschart"),N=n("isMobile"),W=p({data:[]}),X=l();return(async()=>{const e=await E.get("eco_chart/get_has_token/1");if(0===e.code&&e.data.list.length){const a=e.data.list.length,s=JSON.parse(JSON.stringify(X)).splice(0,a),r=[],l=e.data.list.map(((a,t)=>(a.color=s[t],a.token_symbol=e.data.token_symbol,r.push({name:a.account,value:a.accounted_for}),a)));W.data=l,B.value=`${t("ecolib.addresschart")} (%)`,j((()=>{N?(o.handleEchartPie(r,B.value,"50%","addresschart",!0),o.addresschart.setOption({legend:{top:30,itemWidth:15,itemHeight:10,itemGap:5,textStyle:{fontSize:5}},series:[{center:["50%","75%"]}]})):o.handleEchartPie(r,B.value,"50%","addresschart",!0)}))}})(),(t,o)=>{const l=s,i=d("router-link"),c=e,n=a;return v(),m("div",k,[u("div",x,[b(l,{id:J.value,title:B.value},null,8,["id","title"]),u("div",P,[z,u("div",O,[u("div",$,[b(n,{data:h(W).data,stripe:"",style:{width:"100%"}},{default:f((()=>[b(c,{label:t.$t("address.account"),"show-overflow-tooltip":""},{default:f((e=>["Other"===e.row.account?(v(),m("span",A,w(e.row.account),1)):(v(),y(i,{key:1,to:{name:"AccountAddress",params:{address:e.row.account}}},{default:f((()=>[u("span",{style:_({background:e.row.color}),class:"ecolib-charts-item-mark"},null,4),u("span",null,w(e.row.account),1)])),_:2},1032,["to"]))])),_:1},8,["label"]),b(c,{label:t.$t("account.hold"),"show-overflow-tooltip":""},{default:f((e=>[u("span",null,w(h(r)(e.row.amount)),1),u("span",C,w(e.row.token_symbol),1)])),_:1},8,["label"]),b(c,{label:t.$t("account.cash"),"show-overflow-tooltip":""},{default:f((e=>[u("span",null,w(h(r)(e.row.stake_amount)),1),e.row.stake_amount?(v(),m("span",S,w(e.row.token_symbol),1)):g("v-if",!0)])),_:1},8,["label"]),b(c,{label:t.$t("panel.proportion"),"show-overflow-tooltip":""},{default:f((e=>[u("span",null,w(e.row.accounted_for),1),q])),_:1},8,["label"])])),_:1},8,["data"])])])])])])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/propChart.vue"]]);export{B as default};
