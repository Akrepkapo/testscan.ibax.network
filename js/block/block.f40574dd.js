var e=(e,a,t)=>new Promise(((l,s)=>{var n=e=>{try{c(t.next(e))}catch(a){s(a)}},o=e=>{try{c(t.throw(e))}catch(a){s(a)}},c=e=>e.done?l(e.value):Promise.resolve(e.value).then(n,o);c((t=t.apply(e,a)).next())}));import{i as a,B as t,C as l,J as s}from"../element-plus/element-plus.33684f86.js";import{h as n,a as o,b as c,c as i,d as r,e as p,f as d,_ as m}from"../../assets/index.41ecf090.js";import"../vue/vue.f1679ee2.js";import{_ as b}from"../vue-qr/vue-qr.811c440f.js";import{X as u,a0 as f,o as h,c as v,a as _,L as j,U as g,S as k,Q as x,u as w,H as y,P as $,a4 as z,M as D}from"../@vue/@vue.43bf68a9.js";import{a as A}from"../axios/axios.3ae77db0.js";import"../@vueuse/@vueuse.f1890054.js";import"../@element-plus/@element-plus.0865cea0.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@intlify/@intlify.d33e2919.js";import"../@ctrl/@ctrl.17547d95.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.4f18ce48.js";import"../vuex/vuex.df607009.js";import"../vue-router/vue-router.2e4e5314.js";import"../dayjs/dayjs.206dce34.js";import"../echarts/echarts.1c1b7efd.js";import"../zrender/zrender.c7ccb335.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.fd53ebfa.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.08c7aea6.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";const C={class:"chain"},L={class:"panel-content chain-content"},B={class:"panel-content-left panel-content-left-mobile"},I={class:"panel-content-chart"},N={class:"panel-content-chart-box"},P={class:"chain-box"},q={class:"chain-box-item"},H={class:"chain-box-item-image"},S=_("img",{src:"/assets/block.6bfdb275.png",alt:"block"},null,-1),U=_("i",{class:"iconfont el-Description"},null,-1),X={class:"chain-box-item"},J={class:"chain-box-item-image"},M=_("img",{src:"/assets/block-1.da12d45f.png",alt:"block"},null,-1),Q=_("i",{class:"iconfont el-Description"},null,-1),T={class:"chain-box"},E={class:"chain-box-item"},F={class:"chain-box-item-image"},G=_("img",{src:"/assets/block-2.ee42ec2f.png",alt:"block"},null,-1),K=_("i",{class:"iconfont el-Description"},null,-1),O={class:"chain-box-item"},R={class:"chain-box-item-image"},V=_("img",{src:"/assets/block-3.caf012a0.png",alt:"block"},null,-1),W=_("i",{class:"iconfont el-Description"},null,-1),Y=_("div",{class:"panel-content-right"},[j(" chart "),_("div",{class:"panel-content-chart chain-content-right"},[_("div",{class:"panel-content-chart-box"},[_("div",{id:"blockList",class:"chain-content-chart"})])])],-1),Z={class:"panel-content-chart"},ee={class:"panel-content-chart-box chain-content-table"},ae={class:"panel-table"},te={class:"panel-content-table"},le={class:"panel-content-table-header"},se={class:"panel-content-table-header-text"},ne=_("i",{class:"iconfont el-Description"},null,-1),oe={class:"chain-account-item-symbol"},ce={key:0,class:"panel-content-table-url"},ie=["src"],re=_("i",{class:"iconfont el-Description"},null,-1),pe=["src"],de=_("i",{class:"iconfont el-Description"},null,-1),me={class:"panel-content-table-header"},be={class:"panel-content-table-header-text"},ue=_("i",{class:"iconfont el-Description"},null,-1),fe={class:"panel-content-table-header"},he={class:"panel-content-table-header-text"},ve=_("i",{class:"iconfont el-Description"},null,-1),_e={class:"chain-account-item-symbol"},je={class:"panel-content-table-page"};var ge=b({setup(b){const ge={page:1,limit:10,order:"id desc"},ke=u({arr:[],obj:{limit:10,total:0,block_id:0,max_tps:0,max_block_size:0,storage_capacitys:0}}),xe=a=>e(this,null,(function*(){const e=yield A.post("/block_list",a);0===e.code&&(ke.arr=e.data.list,ke.obj=e.data.block_info,ke.obj.total=e.data.total,ke.obj.page=e.data.page,ke.obj.limit=10)}));(()=>{e(this,null,(function*(){const e=yield A.get("/block_list_chart");if(0===e.code){const a=c("block.fifteen"),{time:t,block:l}=e.data,s=t.map((e=>i(e))),n=l.map((e=>e)),o={xAxis:s,legend:[c("account.add")],series:[n]};y((()=>{r.handleLineArea("blockList",a,o)}))}}))})(),xe(ge);const we=d(),ye=e=>{ge.page=e,xe(ge)},$e=n();return(e,n)=>{const c=a,i=f("router-link"),r=t,d=m,b=l,u=s;return h(),v("div",C,[_("div",L,[_("div",B,[j(" blick info "),_("div",I,[_("div",N,[_("div",P,[_("div",q,[_("div",H,[S,_("span",null,g(e.$t("panel.block")),1),k(c,{class:"item",effect:"dark",content:e.$t("block.max"),placement:"bottom"},{default:x((()=>[U])),_:1},8,["content"])]),_("span",null,g(w(ke).obj.block_id),1)]),_("div",X,[_("div",J,[M,_("span",null,g(e.$t("panel.highest")),1),k(c,{class:"item",effect:"dark",content:e.$t("block.current",{num:w(ke).obj.max_tps_id}),placement:"bottom"},{default:x((()=>[Q])),_:1},8,["content"])]),_("span",null,g(w(o)(w(ke).obj.max_tps)),1)])]),_("div",T,[_("div",E,[_("div",F,[G,_("span",null,g(e.$t("panel.total")),1),k(c,{class:"item",effect:"dark",content:e.$t("block.total"),placement:"bottom"},{default:x((()=>[K])),_:1},8,["content"])]),_("span",null,g(w(ke).obj.storage_capacitys),1)]),_("div",O,[_("div",R,[V,_("span",null,g(e.$t("panel.max")),1),k(c,{class:"item",effect:"dark",content:e.$t("block.capacity",{num:w(ke).obj.max_block_size_id}),placement:"bottom"},{default:x((()=>[W])),_:1},8,["content"])]),_("span",null,g(w(ke).obj.max_block_size),1)])])])])]),Y]),j(" block list "),_("div",Z,[_("div",ee,[_("div",ae,[_("div",te,[k(b,{data:w(ke).arr,stripe:"",style:{width:"100%"}},{default:x((()=>[k(r,{label:e.$t("panel.blo")},{default:x((e=>[e.row.id?(h(),$(i,{key:0,to:{name:"BlockId",params:{id:e.row.id}}},{default:x((()=>[z(g(e.row.id),1)])),_:2},1032,["to"])):j("v-if",!0)])),_:1},8,["label"]),k(r,{label:e.$t("panel.generation")},{default:x((e=>[k(d,{time:e.row.time},null,8,["time"]),j("  <span>\r\n                    {{ handleSecondUTC(scope.row.time) }}\r\n                  </span> ")])),_:1},8,["label"]),k(r,{label:e.$t("panel.transactions")},{default:x((e=>[_("span",null,g(w(o)(e.row.tx)),1)])),_:1},8,["label"]),k(r,null,{header:x((()=>[_("div",le,[_("span",se,g(e.$t("panel.gas")),1),k(c,{class:"item",effect:"dark",content:e.$t("panel.contain"),placement:"bottom"},{default:x((()=>[ne])),_:1},8,["content"])])])),default:x((a=>[_("span",null,g(w(p)(a.row.gas_fee)),1),_("span",oe,g(e.$t("page.symbol")),1)])),_:1}),k(r,{label:e.$t("panel.packaging")},{default:x((e=>[1===e.row.consensus_mode?(h(),v("div",ce,[_("img",{src:`${w(we)}${e.row.icon_url}`,alt:"node"},null,8,ie),_("span",null,g(e.row.node_name),1),k(c,{class:"item",effect:"dark",content:e.row.api_address,placement:"bottom"},{default:x((()=>[re])),_:2},1032,["content"])])):2===e.row.consensus_mode?(h(),v(D,{key:1},[e.row.node_position?(h(),$(i,{key:0,to:{name:"HonorId",params:{id:e.row.node_position}},class:"panel-content-table-url"},{default:x((()=>[_("img",{src:`${w(we)}${e.row.icon_url}`,alt:"node"},null,8,pe),_("span",null,g(e.row.node_name),1),k(c,{class:"item",effect:"dark",content:e.row.api_address,placement:"bottom"},{default:x((()=>[de])),_:2},1032,["content"])])),_:2},1032,["to"])):j("v-if",!0)],2112)):j("v-if",!0)])),_:1},8,["label"]),k(r,{label:e.$t("panel.rewardAddress"),"show-overflow-tooltip":""},{header:x((()=>[_("div",me,[_("span",be,g(e.$t("panel.rewardAddress")),1),k(c,{class:"item",effect:"dark",content:e.$t("panel.explosive"),placement:"bottom"},{default:x((()=>[ue])),_:1},8,["content"])])])),default:x((e=>[e.row.recipient_id?(h(),$(i,{key:0,to:{name:"AccountAddress",params:{address:e.row.recipient_id}}},{default:x((()=>[_("span",null,g(e.row.recipient_id),1)])),_:2},1032,["to"])):j("v-if",!0)])),_:1},8,["label"]),k(r,null,{header:x((()=>[_("div",fe,[_("span",he,g(e.$t("panel.bonus")),1),k(c,{class:"item",effect:"dark",content:e.$t("panel.get"),placement:"bottom"},{default:x((()=>[ve])),_:1},8,["content"])])])),default:x((a=>[_("span",null,g(w(p)(a.row.reward)),1),_("span",_e,g(e.$t("page.symbol")),1)])),_:1})])),_:1},8,["data"])])]),_("div",je,[k(u,{small:"",background:"","hide-on-single-page":"",layout:"prev, pager, next","pager-count":w($e)?5:11,"current-page":Number(w(ke).obj.page),"page-size":Number(w(ke).obj.limit),total:Number(w(ke).obj.total),onCurrentChange:ye},null,8,["pager-count","current-page","page-size","total"])])])])])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chain/block/block.vue"]]);export{ge as default};
