!function(){var e=document.createElement("style");e.innerHTML="#app{color:#fff!important;min-height:100vh;width:100%;background:linear-gradient(to bottom right,#50a3a2,#53e3a6);position:relative}#app li{position:fixed;bottom:-160px;width:40px;height:40px;background-color:rgba(255,255,255,.15);list-style:none;animation:square 15s infinite;transition-timing-function:linear}#app li:nth-child(1){left:10%}#app li:nth-child(2){left:20%;width:90px;height:90px;animation-delay:2s;animation-duration:7s}#app li:nth-child(3){left:25%;animation-delay:4s}#app li:nth-child(4){left:40%;width:60px;height:60px;animation-duration:8s;background-color:rgba(255,255,255,.3)}#app li:nth-child(5){left:70%}#app li:nth-child(6){left:80%;width:120px;height:120px;animation-delay:3s;background-color:rgba(255,255,255,.2)}#app li:nth-child(7){left:32%;width:160px;height:160px;animation-delay:2s}#app li:nth-child(8){left:55%;width:20px;height:20px;animation-delay:4s;animation-duration:15s}#app li:nth-child(9){left:25%;width:10px;height:10px;animation-delay:2s;animation-duration:12s;background-color:rgba(255,255,255,.3)}#app li:nth-child(10){left:85%;width:160px;height:160px;animation-delay:5s}@keyframes square{0%{opacity:.5;transform:translateY(0) rotate(45deg)}25%{opacity:.75;transform:translateY(-400px) rotate(90deg)}50%{opacity:1;transform:translateY(-600px) rotate(135deg)}to{opacity:0;transform:translateY(-1000px) rotate(180deg)}}#app .van-loading__text,#app .van-pull-refresh__head{color:#fff!important;z-index:10}\n",document.head.appendChild(e),System.register([],(function(e,t){"use strict";return{execute:function(){var e=Vue.createElementVNode("div",{style:{"text-align":"center",padding:"20px","font-size":"12px"}}," redesign by css7 ",-1),n=Vue.createTextVNode("站台"),a=Vue.createTextVNode("线路"),i=Vue.createTextVNode("设置"),o={setup:function(t){var o=Vue.ref(0),r=Vue.ref(!0),u=VueRouter.useRoute();return Vue.watch(u,(function(e){r.value=["Home","LineSearch","Setting"].includes(u.name),r.value&&(o.value=u.path)})),function(t,u){var l=Vue.resolveComponent("router-view"),c=Vue.resolveComponent("van-tabbar-item"),p=Vue.resolveComponent("van-tabbar");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createElementVNode("div",null,[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(10,(function(e){return Vue.createElementVNode("li",{key:e})})),64))]),Vue.createVNode(l),e,r.value?(Vue.openBlock(),Vue.createBlock(p,{key:0,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=function(e){return o.value=e}),"active-color":"#53e3a6"},{default:Vue.withCtx((function(){return[Vue.createVNode(c,{name:"/",replace:"",to:"/",icon:"home-o"},{default:Vue.withCtx((function(){return[n]})),_:1}),Vue.createVNode(c,{name:"/lineSearch",replace:"",to:"/lineSearch",icon:"exchange"},{default:Vue.withCtx((function(){return[a]})),_:1}),Vue.createVNode(c,{name:"/setting",replace:"",to:"/setting",icon:"setting-o"},{default:Vue.withCtx((function(){return[i]})),_:1})]})),_:1},8,["modelValue"])):Vue.createCommentVNode("",!0)])}}},r=function(e,t){return e()},u=[{path:"/",name:"Home",component:function(){return r((function(){return t.import("./Home-legacy.e436c3fc.js")}))}},{path:"/line/:id",name:"Line",component:function(){return r((function(){return t.import("./Line-legacy.fe4a04f0.js").then((function(e){return e.a}))}))}},{path:"/setting",name:"Setting",component:function(){return r((function(){return t.import("./Setting-legacy.e6dd38f4.js")}))}},{path:"/stationList",name:"StationList",component:function(){return r((function(){return t.import("./StationList-legacy.bbe519ea.js")}))}},{path:"/collection",name:"Collection",component:function(){return r((function(){return t.import("./Collection-legacy.2f0831ac.js")}))}},{path:"/lineSearch",name:"LineSearch",component:function(){return r((function(){return t.import("./LineSearch-legacy.7b0464df.js")}))}}],l=VueRouter.createRouter({history:VueRouter.createWebHistory("./"),routes:u});Vue.createApp(o).use(l).use(vant.Button).use(vant.Tabbar).use(vant.TabbarItem).use(vant.NavBar).use(vant.Cell).use(vant.SwipeCell).use(vant.Toast).use(vant.Empty).use(vant.PullRefresh).use(vant.Tabs).use(vant.Tab).use(vant.Icon).use(vant.Row).use(vant.Search).use(vant.Overlay).use(vant.Dialog).use(vant.Tag).mount("#app")}}}))}();