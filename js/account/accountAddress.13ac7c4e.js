import{y as a,i as e,A as t,H as n,B as l,C as o}from"../element-plus/element-plus.bab642f5.js";import"../vue/vue.35a5c883.js";import{_ as s}from"../node/node.8b7398ea.js";import{u as c}from"../vue-router/vue-router.92daffe0.js";import{n as i,m as r,e as u,f as m,g as d,o as p,a as b,b as f,p as h,d as v,c as g,h as _,k as y,i as w,j}from"../../assets/index.a8db8e2d.js";import{_ as k,v as $}from"../vue-qr/vue-qr.0ca12301.js";import{_ as x}from"../logo-big/logo-big.d89e87b5.js";import{e as N,t as A,a5 as C,X as z,f as S,F as D,W as I,o as B,c as E,a as M,R as X,P as H,O as L,u as T,T as V,K as q,$ as F,U as O,L as P,M as R,s as U,w as K,a2 as Q,Q as W}from"../@vue/@vue.077a65af.js";import{E as G}from"../EcolibsSelect/EcolibsSelect.5c629a01.js";import{D as J}from"../DialogAccount/DialogAccount.e6f2ea17.js";import"../@vueuse/@vueuse.57a4e826.js";import"../@element-plus/@element-plus.19eacc1c.js";import"../dayjs/dayjs.7a5f879f.js";import"../@intlify/@intlify.d33e2919.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.e0b6e81d.js";import"../vuex/vuex.389a1fed.js";import"../axios/axios.3ae77db0.js";import"../echarts/echarts.cc448593.js";import"../zrender/zrender.a8917a70.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.4fe9f180.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.32907f0d.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";const Y={class:"panel-table"},Z={class:"panel-content-table"},aa=["src"],ea=["src"],ta={key:2,class:"iconfont el-a-Ecology1"},na={class:"panel-content-table-header"},la={class:"panel-content-table-header-text"},oa=M("i",{class:"iconfont el-Description"},null,-1),sa={class:"panel-content-table-symbol"},ca={class:"panel-content-table-header"},ia={class:"panel-content-table-header-text"},ra=M("i",{class:"iconfont el-Description"},null,-1),ua={class:"panel-content-table-symbol"},ma={class:"panel-content-table-header"},da={class:"panel-content-table-header-text"},pa=M("i",{class:"iconfont el-Description"},null,-1),ba={class:"panel-content-table-symbol"},fa={class:"panel-content-table-header"},ha={class:"panel-content-table-header-text"},va=M("i",{class:"iconfont el-Description"},null,-1),ga={class:"panel-content-table-symbol"},_a={class:"panel-content-table-header"},ya={class:"panel-content-table-header-text"},wa=M("i",{class:"iconfont el-Description"},null,-1),ja={key:0,class:"panel-content-table-column"},ka={key:1},$a={class:"panel-content-table-page"};var xa=k({props:{name:{type:String,default:()=>""},address:{type:String,default:()=>""}},setup(l){const o=l,s=N(i),c=A("axios"),p=A("isMobile"),{address:b}=C(o),f=z({arr:[],pageNum:{page:1,limit:10}}),h={wallet:b.value,page:1,limit:10,order:"total_amount desc"},v=async a=>{const e=await c.post("/account_detail",a);0===e.code&&(f.pageNum.limit=e.data.limit,f.pageNum.total=e.data.total,f.pageNum.page=e.data.page,f.arr=e.data.list)};v(h),S([()=>o.name,()=>o.address],(([a,e],[t,n])=>{"first"===a&&(h.page=1,h.wallet=e,v(h))}));const g=a=>{h.page=a,v(h)},_=d();return D((()=>{const a=window.localStorage.getItem("theme");s.value="light"===a?r:i})),(l,o)=>{const c=I("router-link"),i=a,r=e,d=t,b=n;return B(),E("div",Y,[M("div",Z,[X(d,{data:T(f).arr,stripe:"",style:{width:"100%"}},{default:H((()=>[X(i,{label:l.$t("panel.eName"),"show-overflow-tooltip":""},{default:H((a=>[a.row.name?(B(),L(c,{key:0,class:"chain-line-logo",to:{name:"EcolibId",params:{str:a.row.name}}},{default:H((()=>[a.row.logo_hash?(B(),E("img",{key:0,src:`${T(_)}/api/v2/get_eco_attachment_export/${a.row.logo_hash}`,alt:"logo"},null,8,aa)):""===a.row.logo_hash&&1===a.row.ecosystem?(B(),E("img",{key:1,src:s.value,alt:"logo"},null,8,ea)):(B(),E("i",ta)),M("span",null,V(a.row.name),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1},8,["label"]),X(i,{label:l.$t("account.date")},{default:H((a=>[M("span",null,V(T(u)(a.row.join_time)),1)])),_:1},8,["label"]),X(i,null,{header:H((()=>[M("div",na,[M("span",la,V(l.$t("account.coin")),1),X(r,{class:"item",effect:"dark",content:l.$t("account.symbol"),placement:"bottom"},{default:H((()=>[oa])),_:1},8,["content"])])])),default:H((a=>[M("span",sa,V(a.row.token_symbol),1)])),_:1}),X(i,{"show-overflow-tooltip":""},{header:H((()=>[M("div",ca,[M("span",ia,V(l.$t("account.hold")),1),X(r,{class:"item",effect:"dark",content:l.$t("ecolib.acc"),placement:"bottom"},{default:H((()=>[ra])),_:1},8,["content"])])])),default:H((a=>[M("span",null,V(T(m)(a.row.total_amount)),1),M("span",ua,V(a.row.token_symbol),1)])),_:1}),X(i,{"show-overflow-tooltip":""},{header:H((()=>[M("div",ma,[M("span",da,V(l.$t("account.frozen")),1),X(r,{class:"item",effect:"dark",content:l.$t("account.locked"),placement:"bottom"},{default:H((()=>[pa])),_:1},8,["content"])])])),default:H((a=>[M("span",null,V(T(m)(a.row.amount)),1),M("span",ba,V(a.row.token_symbol),1)])),_:1}),X(i,{"show-overflow-tooltip":""},{header:H((()=>[M("div",fa,[M("span",ha,V(l.$t("account.cash")),1),X(r,{class:"item",effect:"dark",content:l.$t("account.business"),placement:"bottom"},{default:H((()=>[va])),_:1},8,["content"])])])),default:H((a=>[M("span",null,V(T(m)(a.row.amount)),1),M("span",ga,V(a.row.token_symbol),1)])),_:1}),X(i,{"show-overflow-tooltip":""},{header:H((()=>[M("div",_a,[M("span",ya,V(l.$t("account.role")),1),X(r,{class:"item",effect:"dark",content:l.$t("account.permissions"),placement:"bottom"},{default:H((()=>[wa])),_:1},8,["content"])])])),default:H((a=>[a.row.roles_name?(B(),E("span",ja,V(a.row.roles_name),1)):(B(),E("span",ka," — "))])),_:1})])),_:1},8,["data"])]),M("div",$a,[X(b,{small:"",background:"","hide-on-single-page":"",layout:"prev, pager, next","pager-count":T(p)?5:11,"current-page":Number(T(f).pageNum.page),"page-size":Number(T(f).pageNum.limit),total:Number(T(f).pageNum.total),onCurrentChange:g},null,8,["pager-count","current-page","page-size","total"])])])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/components/account/AccountBalance.vue"]]);const Na={class:"panel-table"},Aa={class:"panel-content-table"},Ca={class:"panel-content-table-symbol"},za={class:"panel-content-table-symbol"},Sa={class:"panel-content-table-page"};var Da=k({props:{name:{type:String,default:()=>""},address:{type:String,default:()=>""}},setup(e){const l=e,o=A("axios"),s=A("isMobile"),{address:c}=C(l),i={ecosystem:0,wallet:c.value,page:1,limit:10},r=z({arr:[],pageNum:{page:1,limit:10,options:[]}}),d=async a=>{const e=await o.post("/account_detail_tx",a);0===e.code&&(r.pageNum.limit=e.data.limit,r.pageNum.total=e.data.total,r.pageNum.page=e.data.page,r.arr=e.data.rets)};S((()=>l.name),(a=>{"second"===a&&(i.page=1,i.wallet=c.value,d(i))}));const b=a=>{i.page=a,d(i)},f=a=>{i.page=1,i.ecosystem=a,d(i)};return(e,l)=>{const o=I("router-link"),i=a,d=t,h=n;return B(),E(P,null,[X(G,{address:T(c),onSelect:f},null,8,["address"]),M("div",Na,[M("div",Aa,[X(d,{data:T(r).arr,stripe:"",style:{width:"100%"}},{default:H((()=>[X(i,{label:e.$t("account.hash"),"show-overflow-tooltip":""},{default:H((a=>[a.row.txhash?(B(),L(o,{key:0,to:{name:"HashValue",params:{value:a.row.txhash}}},{default:H((()=>[F(V(a.row.txhash),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1},8,["label"]),X(i,{label:e.$t("panel.block")},{default:H((a=>[a.row.block_id?(B(),L(o,{key:0,to:{name:"BlockId",params:{id:a.row.block_id}}},{default:H((()=>[F(V(a.row.block_id),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1},8,["label"]),X(i,{label:e.$t("account.time")},{default:H((a=>[M("span",null,V(T(u)(a.row.created_at)),1)])),_:1},8,["label"]),X(i,{label:e.$t("account.conact")},{default:H((a=>[M("span",Ca,V(a.row.contract_name),1)])),_:1},8,["label"]),X(i,{label:e.$t("account.send"),"show-overflow-tooltip":""},{default:H((a=>[a.row.sender_id?(B(),L(o,{key:0,to:{name:"AccountAddress",params:{address:a.row.sender_id}}},{default:H((()=>[M("span",null,V(a.row.sender_id),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1},8,["label"]),X(i,{label:e.$t("account.receive"),"show-overflow-tooltip":""},{default:H((a=>[a.row.recipient_id?(B(),L(o,{key:0,to:{name:"AccountAddress",params:{address:a.row.recipient_id}}},{default:H((()=>[M("span",null,V(a.row.recipient_id),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1},8,["label"]),X(i,{label:e.$t("account.amount"),"show-overflow-tooltip":""},{default:H((a=>[M("div",{style:O({color:T(p)(T(c),a.row.sender_id,a.row.recipient_id)})},[M("span",null,V(T(m)(a.row.amount)),1),M("span",za,V(a.row.token_symbol),1)],4)])),_:1},8,["label"])])),_:1},8,["data"])])]),M("div",Sa,[X(h,{small:"",background:"","hide-on-single-page":"",layout:"prev, pager, next","pager-count":T(s)?5:11,"current-page":Number(T(r).pageNum.page),"page-size":Number(T(r).pageNum.limit),total:Number(T(r).pageNum.total),onCurrentChange:b},null,8,["pager-count","current-page","page-size","total"])])],64)}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/components/account/AccountTrans.vue"]]);const Ia={class:"panel-table"},Ba={class:"panel-content-table"},Ea=["onClick"],Ma=["src"],Xa={class:"chain-account-item-symbol"},Ha={class:"panel-content-table-symbol"},La={class:"chain-account-item-symbol"},Ta={class:"panel-content-table-page"};var Va=k({props:{name:{type:String,default:()=>""},address:{type:String,default:()=>""}},setup(e){const l=e,o=A("axios"),s=A("isMobile"),c=N(!1),i=N(""),{address:r}=C(l),p=z({arr:[],pageNum:{page:1,limit:10}}),f={keyid:r.value,page:1,limit:10,order:"energy_point desc"},h=async a=>{const e=await o.post("/account_detail_nft",a);0===e.code&&(p.pageNum.limit=e.data.limit,p.pageNum.total=e.data.total,p.pageNum.page=e.data.page,p.arr=e.data.rets)};S((()=>l.name),(a=>{"third"===a&&(f.page=1,f.keyid=r.value,h(f))}));const v=a=>{f.page=a,h(f)},g=a=>{c.value=a},_=d();return(e,l)=>{const o=a,r=I("router-link"),d=t,f=n;return B(),E(P,null,[M("div",Ia,[M("div",Ba,[X(d,{data:T(p).arr,stripe:"",style:{width:"100%"}},{default:H((()=>[X(o,{label:e.$t("account.nft")},{default:H((a=>[M("div",{class:"",onClick:e=>{return t=a.row.id,void(s||(c.value=!0,i.value=t));var t}},[M("img",{class:"panel-content-table-svg",src:`${T(_)}/api/v2/get_nft_file/${a.row.id}`},null,8,Ma)],8,Ea)])),_:1},8,["label"]),X(o,{label:e.$t("account.energy"),"show-overflow-tooltip":""},{default:H((a=>[M("span",null,V(a.row.energy_point),1)])),_:1},8,["label"]),X(o,{label:e.$t("account.h"),"show-overflow-tooltip":""},{default:H((a=>[a.row.hash?(B(),L(r,{key:0,to:{name:"MetaId",params:{id:a.row.id,hash:a.row.hash}}},{default:H((()=>[M("span",null,V(a.row.hash),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1},8,["label"]),X(o,{label:e.$t("panel.generation")},{default:H((a=>[M("span",null,V(T(u)(a.row.time)),1)])),_:1},8,["label"]),X(o,{label:e.$t("account.cash")},{default:H((a=>[M("span",null,V(T(m)(a.row.stake_amount)),1),M("span",Xa,V(e.$t("page.symbol")),1)])),_:1},8,["label"]),X(o,{label:e.$t("account.cycle")},{default:H((a=>[M("span",null,V(T(b)(String(a.row.cycle))),1),M("span",Ha,V(e.$t("meta.day")),1)])),_:1},8,["label"]),X(o,{label:e.$t("account.ins")},{default:H((a=>[M("span",null,V(T(m)(a.row.nft_ins)),1),M("span",La,V(e.$t("page.symbol")),1)])),_:1},8,["label"]),X(o,{label:""},{default:H((a=>[a.row.hash?(B(),L(r,{key:0,to:{name:"MetaId",params:{id:a.row.id,hash:a.row.hash}}},{default:H((()=>[M("span",null,V(e.$t("meta.his")),1)])),_:2},1032,["to"])):q("v-if",!0)])),_:1})])),_:1},8,["data"])])]),M("div",Ta,[X(f,{small:"",background:"","hide-on-single-page":"",layout:"prev, pager, next","pager-count":T(s)?5:11,"current-page":Number(T(p).pageNum.page),"page-size":Number(T(p).pageNum.limit),total:Number(T(p).pageNum.total),onCurrentChange:v},null,8,["pager-count","current-page","page-size","total"])]),c.value?(B(),L(J,{key:0,"is-dialog":c.value,"img-id":i.value,onClose:g},null,8,["is-dialog","img-id"])):q("v-if",!0)],64)}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/components/account/AccountNft.vue"]]);const qa={class:"ecolib"},Fa={class:"ecolib-title",style:{"margin-top":"20px"}},Oa=M("div",{id:"assetsCharts",class:"ecolib-charts-item-pie"},null,-1),Pa=M("div",{id:"amountCharts",class:"ecolib-charts-item-pie"},null,-1),Ra={class:"ecolib-title"},Ua={class:"ecolib-charts"},Ka=M("div",{id:"txCharts",class:"ecolib-charts-item-pie"},null,-1);var Qa=k({props:{name:{type:String,default:()=>""},address:{type:String,default:()=>""}},setup(a){const e=a,t=A("axios"),n=N(1),l=A("isMobile"),{address:o}=C(e),s={ecosystem:n.value,wallet:o.value},c=async a=>{const e=await t.post("account_total_amount_chart",a);if(0===e.code){const a=[{name:f("account.available"),key:"amount"},{name:f("account.pledge"),key:"stake_amount"},{name:f("account.froz"),key:"freeze_amount"}].map((a=>({name:a.name,value:h(e.data[a.key])}))),t=`${f("account.overview")} (${e.data.token_symbol})`;D((()=>{v.handleEchartPie(a,t,"50%","assetsCharts",!1),v.assetsCharts.setOption({tooltip:{trigger:"item",valueFormatter:function(a){return a+` ${e.data.token_symbol}`}}})}))}},i=async a=>{const e=await t.post("account_amount_change_bar_chart",a);if(0===e.code){const a=e.data.time.map((a=>g(a))),t=e.data.outcome.map((a=>h(a))),n=e.data.income.map((a=>h(a))),l=e.data.balance.map((a=>h(a))),o={xAxis:a,legend:[f("account.outcome"),f("account.income"),f("account.bal")],series:[t,n,l]},s=`${f("account.change")} (${e.data.token_symbol})`;D((()=>{v.handleEchartBarLine("amountCharts",s,o,!1)}))}},r=async a=>{const e=await t.post("account_tx_chart",a);if(0===e.code){const a={xAxis:e.data.time.map((a=>g(a))),legend:[f("chart.num")],series:[e.data.tx]},t=`${f("account.ecolib")}`;D((()=>{v.handleLineArea("txCharts",t,a,!1)}))}};S((()=>e.name),(a=>{"fourth"===a&&(s.wallet=o.value,c(s),i(s),r(s))}));const u=a=>{s.ecosystem=n.value=a,c(s),i(s),r(s)};return(a,e)=>{const t=I("router-link");return B(),E("div",qa,[X(G,{address:T(o),onSelect:u},null,8,["address"]),M("div",Fa,V(a.$t("account.assets")),1),M("div",{class:R({"ecolib-charts":T(l),"ecolib-charts-box":!T(l)})},[X(t,{to:{name:"AccountChart",params:{address:T(o),ecosystem:n.value,type:1}},class:"ecolib-charts-item"},{default:H((()=>[Oa])),_:1},8,["to"]),X(t,{to:{name:"AccountChart",params:{address:T(o),ecosystem:n.value,type:2}},class:"ecolib-charts-item"},{default:H((()=>[Pa])),_:1},8,["to"])],2),M("div",Ra,V(a.$t("account.ecolib")),1),M("div",Ua,[X(t,{to:{name:"AccountChart",params:{address:T(o),ecosystem:n.value,type:3}},class:"ecolib-charts-item",style:{"margin-left":"0"}},{default:H((()=>[Ka])),_:1},8,["to"])])])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/components/account/AccountChart.vue"]]);const Wa={class:"chain"},Ga={key:0,class:"data-box"},Ja=M("img",{src:s,alt:"node"},null,-1),Ya={key:1,class:"chain"},Za={class:"chain-content"},ae={class:"panel-content-chart"},ee={class:"panel-content-chart-box panel-content"},te={class:"panel-content-left panel-content-left-mobile"},ne={class:"chain-account-info"},le={class:"chain-account-info-head"},oe=["src"],se={key:1,src:"/assets/default.74f78cf9.png",alt:"default"},ce={key:2},ie={key:3},re={class:"chain-content-copy"},ue={class:"chain-account-info-head"},me={key:0,class:"panel-content-chart chain-account-wrap"},de={class:"panel-content-chart-box"},pe={class:"chain-account"},be={class:"chain-account-item"},fe=M("i",{class:"iconfont el-Hold"},null,-1),he={class:"chain-account-item-symbol"},ve=M("i",{class:"iconfont el-Description meta-info-icon"},null,-1),ge={class:"chain-account-item"},_e=M("i",{class:"iconfont el-pledge"},null,-1),ye={class:"chain-account-item-symbol"},we=M("i",{class:"iconfont el-Description meta-info-icon"},null,-1),je={class:"chain-account-item"},ke=M("i",{class:"iconfont el-a-Numberoftransfers"},null,-1),$e={class:"chain-account-item"},xe=M("i",{class:"iconfont el-freeze"},null,-1),Ne={class:"chain-account-item-symbol"},Ae=M("i",{class:"iconfont el-Description meta-info-icon"},null,-1),Ce={class:"chain-account-item"},ze=M("i",{class:"iconfont el-a-receivedamount"},null,-1),Se={class:"chain-account-item-symbol"},De={class:"chain-account-item"},Ie=M("i",{class:"iconfont el-a-Transferoutamount"},null,-1),Be={class:"chain-account-item-symbol"},Ee=M("div",{class:"panel-content-left"},[M("div",{id:"account",class:"chain-content-chart"})],-1),Me={key:0,class:"panel-content-chart chain-account-wrap"},Xe={class:"panel-content-chart-box"},He={class:"chain-account"},Le={class:"chain-account-item"},Te=M("i",{class:"iconfont el-Hold"},null,-1),Ve={class:"chain-account-item-symbol"},qe={class:"chain-account-item"},Fe=M("i",{class:"iconfont el-pledge"},null,-1),Oe={class:"chain-account-item-symbol"},Pe={class:"chain-account-item"},Re=M("i",{class:"iconfont el-a-Numberoftransfers"},null,-1),Ue={class:"chain-account-item"},Ke=M("i",{class:"iconfont el-freeze"},null,-1),Qe={class:"chain-account-item-symbol"},We=M("i",{class:"iconfont el-Description meta-info-icon"},null,-1),Ge={class:"chain-account-item"},Je=M("i",{class:"iconfont el-a-receivedamount"},null,-1),Ye={class:"chain-account-item-symbol"},Ze={class:"chain-account-item"},at=M("i",{class:"iconfont el-a-Transferoutamount"},null,-1),et={class:"chain-account-item-symbol"},tt={class:"panel-content-chart"},nt={class:"panel-content-chart-box chain-content-table"},lt={class:"chain-account-tabs"};var ot=k({setup(a){const t=_(),n=A("axios"),s=N(""),i=N("#5ebc93"),r=N(10),u=c(),p=N(""),k=N("first");A("reload");const C=z({obj:{},chart:[],tabs:[{name:"first",label:f("account.balance"),content:U(xa)},{name:"second",label:f("account.trans"),content:U(Da)},{name:"third",label:f("account.nft"),content:U(Va)},{name:"fourth",label:f("nav.chart"),content:U(Qa)}]});K((()=>{u.params.address&&"AccountAddress"===u.name&&(k.value="first",s.value=u.params.address,(async a=>{const e=await n.get(`/account_detail_basis/${a}`);if(0===e.code){p.value="",C.obj=e.data;const a=e.data.chart,t=a.time.map((a=>g(a))),n=a.inamount.map((a=>h(a))),l=a.outamount.map((a=>h(a))),o={xAxis:t,legend:[f("account.inamount"),f("account.outamount")],series:[n,l]},s=f("account.days");D((()=>{v.handleLineArea("account",s,o,!0)}))}else p.value=e.message})(s.value))}));const S=d();return(a,n)=>{const c=I("router-link"),u=e,d=l,f=o;return B(),E("div",Wa,[p.value?(B(),E("div",Ga,[Ja,M("div",null,V(p.value),1)])):(B(),E("div",Ya,[q(" block info  "),M("div",Za,[M("div",ae,[M("div",ee,[M("div",te,[M("div",ne,[M("div",le,[T(C).obj.member_hash?(B(),E("img",{key:0,src:`${T(S)}/api/v2/get_eco_attachment_export/${T(C).obj.member_hash}`,alt:"member"},null,8,oe)):(B(),E("img",se)),T(C).obj.member_name?(B(),E("div",ce,V(T(C).obj.member_name),1)):(B(),E("div",ie,V(T(C).obj.ecosystemname),1)),M("div",re,[T(C).obj.wallet?(B(),L(c,{key:0,to:{name:"AccountAddress",params:{address:T(C).obj.wallet}}},{default:H((()=>[F(V(T(C).obj.wallet),1)])),_:1},8,["to"])):q("v-if",!0),M("i",{class:"iconfont el-Reproduction",onClick:n[0]||(n[0]=a=>T(y)(T(C).obj.wallet))})])]),M("div",ue,[X($,{text:"Hello world!",qid:"testid",margin:r.value,"background-dimming":i.value,"logo-src":T(x)},null,8,["margin","background-dimming","logo-src"]),M("div",null,V(T(w)(T(C).obj.join_time)),1),M("div",null,"("+V(T(j)(T(C).obj.join_time))+")",1)])]),T(t)?q("v-if",!0):(B(),E("div",me,[M("div",de,[M("div",pe,[M("div",be,[fe,M("span",null,V(a.$t("account.hold"))+"：",1),M("span",null,V(T(m)(T(C).obj.total_amount)),1),M("span",he,V(T(C).obj.token_symbol),1),X(u,{class:"item",effect:"dark",content:a.$t("ecolib.acc"),placement:"bottom"},{default:H((()=>[ve])),_:1},8,["content"])]),M("div",ge,[_e,M("span",null,V(a.$t("account.cash"))+"：",1),M("span",null,V(T(m)(T(C).obj.stake_amount)),1),M("span",ye,V(T(C).obj.token_symbol),1),X(u,{class:"item",effect:"dark",content:a.$t("account.business"),placement:"bottom"},{default:H((()=>[we])),_:1},8,["content"])]),M("div",je,[ke,M("span",null,V(a.$t("account.sum"))+"：",1),M("span",null,V(T(b)(String(T(C).obj.transaction))),1)]),M("div",$e,[xe,M("span",null,V(a.$t("account.frozen"))+"：",1),M("span",null,V(T(m)(T(C).obj.freeze_amount)),1),M("span",Ne,V(T(C).obj.token_symbol),1),X(u,{class:"item",effect:"dark",content:a.$t("account.locked"),placement:"bottom"},{default:H((()=>[Ae])),_:1},8,["content"])]),M("div",Ce,[ze,M("span",null,V(a.$t("account.accept"))+"：",1),M("span",null,V(T(m)(T(C).obj.inamount)),1),M("span",Se,V(T(C).obj.token_symbol),1)]),M("div",De,[Ie,M("span",null,V(a.$t("account.transfer"))+"：",1),M("span",null,V(T(m)(T(C).obj.outamount)),1),M("span",Be,V(T(C).obj.token_symbol),1)])])])]))]),Ee])])]),T(t)?(B(),E("div",Me,[M("div",Xe,[M("div",He,[M("div",Le,[Te,M("span",null,V(a.$t("account.hold"))+"：",1),M("span",null,V(T(m)(T(C).obj.total_amount)),1),M("span",Ve,V(T(C).obj.token_symbol),1)]),M("div",qe,[Fe,M("span",null,V(a.$t("account.cash"))+"：",1),M("span",null,V(T(m)(T(C).obj.stake_amount)),1),M("span",Oe,V(T(C).obj.token_symbol),1)]),M("div",Pe,[Re,M("span",null,V(a.$t("account.sum"))+"：",1),M("span",null,V(T(b)(String(T(C).obj.transaction))),1)]),M("div",Ue,[Ke,M("span",null,V(a.$t("account.frozen"))+"：",1),M("span",null,V(T(m)(T(C).obj.freeze_amount)),1),M("span",Qe,V(T(C).obj.token_symbol),1),X(u,{class:"item",effect:"dark",content:a.$t("account.locked"),placement:"bottom"},{default:H((()=>[We])),_:1},8,["content"])]),M("div",Ge,[Je,M("span",null,V(a.$t("account.accept"))+"：",1),M("span",null,V(T(m)(T(C).obj.inamount)),1),M("span",Ye,V(T(C).obj.token_symbol),1)]),M("div",Ze,[at,M("span",null,V(a.$t("account.transfer"))+"：",1),M("span",null,V(T(m)(T(C).obj.outamount)),1),M("span",et,V(T(C).obj.token_symbol),1)])])])])):q("v-if",!0),M("div",tt,[M("div",nt,[M("div",lt,[X(f,{modelValue:k.value,"onUpdate:modelValue":n[1]||(n[1]=a=>k.value=a),class:"demo-tabs"},{default:H((()=>[(B(!0),E(P,null,Q(T(C).tabs,(a=>(B(),L(d,{key:a.name,label:a.label,name:a.name},{default:H((()=>[(B(),L(W(a.content),{address:s.value,name:k.value},null,8,["address","name"]))])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])])])]))])}}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chain/account/accountAddress.vue"]]);export{ot as default};
