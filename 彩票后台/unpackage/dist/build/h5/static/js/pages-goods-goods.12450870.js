(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"46a0":function(i,t,a){"use strict";a.r(t);var e=a("9f3d"),s=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(o);t["default"]=s.a},4859:function(i,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){}));var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[i.fixed?"fixed":"",i.shadow?"":"no-shadow",i.bgColor]},[i.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[i._v(i._s(i.backText))])],1):i._e(),i.isBack?i._e():a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.leftTap.apply(void 0,arguments)}}},[i._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.contentTap.apply(void 0,arguments)}}},[i._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.rightTap.apply(void 0,arguments)}}},[i._t("right")],2)],1),i.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):i._e()],1)},s=[]},"791f":function(i,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={bannerListData:function(){return[{url:"/static/images/home/goods/1.png"},{url:"/static/images/home/goods/4.png"},{url:"/static/images/home/goods/5.png"},{url:"/static/images/home/goods/6.png"},{url:"/static/images/home/goods/9.png"},{url:"/static/images/home/goods/10.png"},{url:"/static/images/home/goods/11.png"}]},goodsList:function(){return[{mold:!0,price:"2280",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/1.png"},{mold:!1,price:"5049",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/2.png"},{mold:!0,price:"2980",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/3.png"},{mold:!0,price:"2280",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/4.png"},{mold:!0,price:"5049",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/5.png"},{mold:!0,price:"2980",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/6.png"},{mold:!0,price:"2280",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/7.png"},{mold:!0,price:"5049",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/8.png"}]}};t.default=e},"7af0":function(i,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var i=getCurrentPages();i&&i.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};t.default=e},"7e7e":function(i,t,a){"use strict";a.r(t);var e=a("88dd"),s=a("46a0");for(var o in s)["default"].indexOf(o)<0&&function(i){a.d(t,i,(function(){return s[i]}))}(o);a("e753");var n=a("f0c5"),c=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"e6c40b06",null,!1,e["a"],void 0);t["default"]=c.exports},"82d1":function(i,t,a){"use strict";a.r(t);var e=a("7af0"),s=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(i){a.d(t,i,(function(){return e[i]}))}(o);t["default"]=s.a},"88dd":function(i,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){}));var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white"}},[a("template",{attrs:{slot:"content"},slot:"content"},[i._v("商品详情")]),a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"cuIcon-forward"}),a("v-uni-text",{staticClass:"cuIcon-more"})],1)],2),a("v-uni-view",{staticClass:"bg-grey text-sm text-center padding-tb-xs text-white"},[i._v("真机实拍部分为真机样张，您购买的机型大致符合图中成色效果")]),a("v-uni-view",{staticClass:"zaiui-banner-swiper-box"},[a("v-uni-swiper",{staticClass:"screen-swiper",attrs:{circular:!0,autoplay:!0},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bannerSwiper.apply(void 0,arguments)}}},i._l(i.bannerList,(function(i,t){return a("v-uni-swiper-item",{key:t},[a("v-uni-image",{attrs:{src:i.url,mode:"aspectFill"}})],1)})),1),a("v-uni-text",{staticClass:"cu-tag bg-grey round sm zaiui-page"},[i._v(i._s(i.bannerCur+1)+" / "+i._s(i.bannerList.length))])],1),a("v-uni-view",{staticClass:"zaiui-limited-seckill-box"},[a("v-uni-text",{staticClass:"text-price text-xxl"},[i._v("2999")]),a("v-uni-view",{staticClass:"text-xs zaiui-cost-price-num price-4"},[a("v-uni-view",{staticClass:"text-through"},[i._v("原价￥6999")]),a("v-uni-view",[i._v("剩余79件")])],1),a("v-uni-view",{staticClass:"text-right zaiui-time-right"},[a("v-uni-view",[i._v("自营限时秒杀")]),a("v-uni-view",{staticClass:"text-xs"},[i._v("距结束剩余10时07分50秒")])],1)],1),a("v-uni-view",{staticClass:"bg-white zaiui-view-box zaiui-title-view-box"},[a("v-uni-view",{staticClass:"title-view"},[a("v-uni-text",{staticClass:"cu-tag bg-red radius sm"},[i._v("自营")]),a("v-uni-text",{staticClass:"text-black text-lg text-bold"},[i._v("99新苹果iPhoneX 64G深空灰色国行")])],1),a("v-uni-view",{staticClass:"light bg-red radius margin-top-sm zaiui-title-tip-box"},[a("v-uni-view",{staticClass:"text-cut"},[a("v-uni-text",{staticClass:"margin-right-sm"},[i._v("官方自营")]),a("v-uni-text",{staticClass:"text-sm"},[i._v("官方自营正品保障新品体验售后无忧")])],1),a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1),a("v-uni-view",{staticClass:"margin-top bg-white zaiui-view-box zaiui-service-view-box",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.serviceTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"flex flex-wrap text-sm"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"text-gray"},[i._v("服务")])],1),a("v-uni-view",{staticClass:"basis-7"},[a("v-uni-view",[a("v-uni-text",{staticClass:"tag-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",[i._v("已验机")])],1),a("v-uni-text",{staticClass:"tag-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",[i._v("7天无理由")])],1),a("v-uni-text",{staticClass:"tag-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",[i._v("180天质保")])],1)],1),a("v-uni-view",{staticClass:"margin-top-xs"},[a("v-uni-text",{staticClass:"tag-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",[i._v("顺丰包邮")])],1),a("v-uni-text",{staticClass:"tag-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",[i._v("半年电池免费换新")])],1)],1)],1),a("v-uni-view",{staticClass:"basis-2"},[a("v-uni-view",{staticClass:"text-gray text-right icon-view"},[a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top bg-white zaiui-view-box zaiui-promotion-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap text-sm",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.promotionTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"text-gray"},[i._v("促销")])],1),a("v-uni-view",{staticClass:"basis-7"},[a("v-uni-view",[a("v-uni-text",{staticClass:"cu-tag line-orange sm radius"},[i._v("赠品")]),a("v-uni-text",{staticClass:"text-view"},[i._v("品胜充电器套装")])],1),a("v-uni-view",{staticClass:"margin-top-xs"},[a("v-uni-text",{staticClass:"cu-tag line-orange sm radius"},[i._v("分期")]),a("v-uni-text",{staticClass:"text-view"},[i._v("￥318元/月花呗/京东/微信组合支付")])],1)],1),a("v-uni-view",{staticClass:"basis-2"},[a("v-uni-view",{staticClass:"text-gray text-right icon-view"},[a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top bg-white zaiui-view-box zaiui-select-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap text-sm"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"text-gray"},[i._v("发货")])],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-text",{staticClass:"text-sm"},[i._v("16:00前下单，当日发货，顺丰包邮(部分地区除外)")])],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"flex flex-wrap text-sm",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.selectTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"text-gray"},[i._v("已选")])],1),a("v-uni-view",{staticClass:"basis-8"},[a("v-uni-text",{staticClass:"text-sm"},[i._v("99新深空灰色64G国行三网通")])],1),a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"text-gray text-right"},[a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top bg-white zaiui-comment-view-box"},[a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-black text-lg"},[i._v("评价（3699）")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-sm"},[a("v-uni-text",{staticClass:"margin-right-xs"},[i._v("好评率")]),a("v-uni-text",{staticClass:"text-black text-lg"},[i._v("97%")]),a("v-uni-text",{staticClass:"cuIcon-right icon margin-left-xs"})],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"zaiui-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap text-sm"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"cu-avatar sm round",staticStyle:{"background-image":"url(/static/images/avatar/1.jpg)"}})],1),a("v-uni-view",{staticClass:"basis-9 text-sm"},[a("v-uni-view",[i._v("仔仔")]),a("v-uni-view",{staticClass:"margin-top-xs"},[i._v("X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢")]),a("v-uni-view",{staticClass:"text-gray margin-top-sm"},[i._v("iPhone X 64G深空灰色")])],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"zaiui-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap text-sm"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"cu-avatar sm round",staticStyle:{"background-image":"url(/static/images/avatar/2.jpg)"}})],1),a("v-uni-view",{staticClass:"basis-9 text-sm"},[a("v-uni-view",[i._v("仔仔")]),a("v-uni-view",{staticClass:"margin-top-xs"},[i._v("X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢")]),a("v-uni-view",{staticClass:"text-gray margin-top-sm"},[i._v("iPhone X 64G深空灰色")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top bg-white zaiui-view-box zaiui-goods-info-view-box"},[a("v-uni-view",{staticClass:"zaiui-shop-view"},[a("v-uni-view",{staticClass:"cu-avatar lg round",staticStyle:{"background-image":"url(/static/images/avatar/1.jpg)"}}),a("v-uni-view",{staticClass:"text-view"},[a("v-uni-view",{staticClass:"margin-bottom-xs"},[i._v("仔仔店铺")]),a("v-uni-view",{staticClass:"text-sm text-cut"},[i._v("仔仔店铺，正品保障，售后无忧")])],1),a("v-uni-button",{staticClass:"cu-btn radius sm line-red"},[i._v("全部商品")])],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"live-tag-view"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cu-tag bg-red radius sm"},[a("v-uni-text",{staticClass:"cuIcon-title"}),a("v-uni-text",[i._v("直播中")])],1),a("v-uni-text",{staticClass:"margin-left-xs text-cut"},[i._v("官方直播自营商品在线答疑")])],1),a("v-uni-view",{staticClass:"text-sm text-red text-right-view"},[a("v-uni-text",{staticClass:"margin-right-xs"},[i._v("看直播")]),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"zaiui-recommend-list-box"},[a("v-uni-view",{staticClass:"text-sm"},[i._v("官方推荐")]),a("v-uni-view",{staticClass:"recommend-scroll-box"},[a("v-uni-scroll-view",{staticClass:"recommend-scroll",attrs:{"scroll-x":!0}},[i._l(i.goodsList,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"recommend-scroll-item",attrs:{id:["scroll"+(e+1)]}},[a("v-uni-view",{staticClass:"cu-avatar xl radius",style:[{backgroundImage:"url("+t.img+")"}]}),a("v-uni-view",{staticClass:"text-cut-2 text-sm text-black margin-tb-sm"},[i._v(i._s(t.title))]),a("v-uni-view",{staticClass:"text-red text-price margin-tb-sm text-lg"},[i._v(i._s(t.price))])],1)]}))],2)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top zaiui-goods-details-box"},[a("v-uni-image",{attrs:{src:"/static/images/home/goods/goods-1.png",mode:"widthFix"}}),a("v-uni-image",{attrs:{src:"/static/images/home/goods/goods-2.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"margin-top bg-white margin-bottom zaiui-view-box zaiui-goods-help-view-box"},[a("v-uni-view",{staticClass:"text-black text-lg margin-bottom-sm"},[i._v("常见问题")]),a("v-uni-view",{staticClass:"flex flex-wrap margin-bottom"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"cu-tag bg-grey radius sm"},[i._v("问")])],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"margin-bottom-xs text-black"},[i._v("手机是正品吗?有保障吗?")]),a("v-uni-view",{staticClass:"text-sm"},[i._v("转转自营的每部二手手机皆经过质检工程师51项专业质检并出具了详细的配套验机评估报告，且提供7天试用和180天售后质保服务;成色为[全新]的手机，为官方全新原装手机，与官方门店购买的没有任何差别，享受官方质保与转转提供的180天售后质保服务，可以放心选购哦")])],1)],1),a("v-uni-view",{staticClass:"flex flex-wrap margin-bottom"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"cu-tag bg-grey radius sm"},[i._v("问")])],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"margin-bottom-xs text-black"},[i._v("都有哪些渠道版本的手机?")]),a("v-uni-view",{staticClass:"text-sm"},[i._v("版本包括:国行、港澳、国际版(包括美欧日韩等版本)。其中除了零售机还包括:演示机，官换机，官翻机。")])],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"text-center text-blue"},[i._v("查看更多问题")])],1),a("v-uni-view",{staticClass:"margin-top zaiui-view-box zaiui-recommend-list-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-sm text-right"},[a("v-uni-image",{staticClass:"img-aau",attrs:{src:"/static/zaiui/img/aau.png","lazy-load":!0,mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"basis-xs text-center"},[a("v-uni-text",{staticClass:"text-black text-lg"},[i._v("相似推荐")])],1),a("v-uni-view",{staticClass:"basis-sm text-left"},[a("v-uni-image",{staticClass:"img-aau",attrs:{src:"/static/zaiui/img/aau.png","lazy-load":!0,mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"margin-bottom zaiui-goods-list-box"},[a("v-uni-view",{staticClass:"grid col-2"},[i._l(i.goodsList,(function(t,e){return[a("v-uni-view",{key:e+"_0",staticClass:"list-itme"},[a("v-uni-view",{staticClass:"bg-white list-radius"},[a("v-uni-view",{staticClass:"goods-img"},[a("v-uni-view",{staticClass:"cu-avatar",style:[{backgroundImage:"url("+t.img+")"}]}),t.mold?a("v-uni-view",{staticClass:"mold-view"},[a("v-uni-text",{staticClass:"cu-tag radius sm bg-red"},[i._v("自营")])],1):i._e()],1),a("v-uni-view",{staticClass:"view-goods-info"},[a("v-uni-view",{staticClass:"text-cut-2 text-black text-sm margin-bottom-sm"},[i._v(i._s(t.title))]),a("v-uni-view",{staticClass:"text-price text-red text-lg"},[i._v(i._s(t.price))])],1)],1)],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"zaiui-footer-fixed"},[a("v-uni-view",{staticClass:"cu-bar bg-white tabbar border shop"},[a("v-uni-button",{staticClass:"action"},[a("v-uni-view",{staticClass:"cuIcon-service"}),a("v-uni-view",[i._v("客服")])],1),a("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.myCartTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cuIcon-cart"},[a("v-uni-view",{staticClass:"cu-tag badge"},[i._v("9")])],1),a("v-uni-text",[i._v("购物车")])],1),a("v-uni-view",{staticClass:"btn-group"},[a("v-uni-button",{staticClass:"cu-btn bg-orange radius shadow-blur",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.selectTap("add")}}},[i._v("加入购物车")]),a("v-uni-button",{staticClass:"cu-btn bg-red radius shadow-blur",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.selectTap("sell")}}},[i._v("立即购买")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal bottom-modal zaiui-bottom-modal-box",class:i.bottomModal?"show":""},[a("v-uni-view",{staticClass:"cu-dialog bg-white"},[a("v-uni-view",{staticClass:"text-black text-center margin-tb text-lg zaiui-title-bar"},[a("v-uni-text",[i._v(i._s(i.modalTitle))]),a("v-uni-text",{staticClass:"cuIcon-close close-icon",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.hideModal.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"zaiui-modal-content"},["service"==i.modalType?a("v-uni-view",{staticClass:"zaiui-view-box service"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",{staticClass:"text-cut text-black"},[i._v("已验机")])],1),a("v-uni-view",{staticClass:"text-sm text-list-view"},[a("v-uni-view",{staticClass:"margin-left text-cut text-gray"},[i._v("转转&富士康联合制定验机标准，对设备进行专业质检")])],1),a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",{staticClass:"text-cut text-black"},[i._v("7天无理由")])],1),a("v-uni-view",{staticClass:"text-sm text-list-view"},[a("v-uni-view",{staticClass:"margin-left text-cut text-gray"},[i._v("自收到商品7天内，不喜欢可以申请退货，并自付邮费寄回")])],1),a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",{staticClass:"text-cut text-black"},[i._v("180天质保")])],1),a("v-uni-view",{staticClass:"text-sm text-list-view"},[a("v-uni-view",{staticClass:"margin-left text-cut text-gray"},[i._v("自订单确认收货起180天,提供免费质保")])],1),a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",{staticClass:"text-cut text-black"},[i._v("顺丰包邮")])],1),a("v-uni-view",{staticClass:"text-sm text-list-view"},[a("v-uni-view",{staticClass:"margin-left text-cut text-gray"},[i._v("16:00前下单，今日发货，顺丰包邮(偏远地区邮政包邮)")])],1),a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cuIcon-title text-red"}),a("v-uni-text",{staticClass:"text-cut text-black"},[i._v("半年电池免费换新")])],1),a("v-uni-view",{staticClass:"text-sm text-list-view"},[a("v-uni-view",{staticClass:"margin-left text-cut text-gray"},[i._v("自订单确认收货起半年，如果电池电量低于60%，可申请免费更换原厂品质电池")])],1)],1):i._e(),"promotion"==i.modalType?a("v-uni-view",{staticClass:"zaiui-view-box promotion"},[a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cu-tag line-orange radius sm"},[i._v("赠品")]),a("v-uni-text",{staticClass:"margin-left-xs text-cut text-black"},[i._v("品胜充电器套装")])],1),a("v-uni-view",{staticClass:"text-sm text-list-view"},[a("v-uni-view",{staticClass:"text-cut"},[i._v("充电头+数据线")]),a("v-uni-text",{staticClass:"text-right-view"},[i._v("价值￥99")])],1),a("v-uni-view",{staticClass:"text-view"},[a("v-uni-text",{staticClass:"cu-tag line-orange radius sm"},[i._v("分期")]),a("v-uni-text",{staticClass:"margin-left-xs text-cut text-black"},[i._v("￥318元/月花呗/京东/微信组合支付")])],1)],1):i._e(),"select"==i.modalType?a("v-uni-view",{staticClass:"zaiui-view-box select"},[a("v-uni-view",{staticClass:"cu-list menu-avatar"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(/static/images/home/goods/1.png)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-price-view"},[a("v-uni-text",{staticClass:"text-price text-red margin-right-xs"},[i._v("2699")]),a("v-uni-text",{staticClass:"text-sm text-gray text-through"},[i._v("￥6999")]),a("v-uni-text",{staticClass:"cu-tag bg-gradual-red radius sm"},[a("v-uni-text",{staticClass:"cuIcon-hotfill"}),a("v-uni-text",[i._v("秒杀中")])],1)],1),a("v-uni-view",{staticClass:"text-black text-sm flex"},[a("v-uni-view",{staticClass:"text-cut"},[i._v("已选: 99新深空灰色64G国行三网通")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-select-btn-list-boox"},[a("v-uni-view",{staticClass:"select-item"},[a("v-uni-view",{staticClass:"text-black"},[i._v("成色")]),a("v-uni-view",{staticClass:"select-btn"},[a("v-uni-button",{staticClass:"cu-btn"},[i._v("95新")]),a("v-uni-button",{staticClass:"cu-btn"},[i._v("9成新")]),a("v-uni-button",{staticClass:"cu-btn light bg-red"},[i._v("99新")])],1)],1),a("v-uni-view",{staticClass:"select-item"},[a("v-uni-view",{staticClass:"text-black"},[i._v("颜色")]),a("v-uni-view",{staticClass:"select-btn"},[a("v-uni-button",{staticClass:"cu-btn light bg-red"},[i._v("深空灰色")]),a("v-uni-button",{staticClass:"cu-btn",attrs:{disabled:!0}},[i._v("银色")])],1)],1),a("v-uni-view",{staticClass:"select-item"},[a("v-uni-view",{staticClass:"text-black"},[i._v("容量")]),a("v-uni-view",{staticClass:"select-btn"},[a("v-uni-button",{staticClass:"cu-btn",attrs:{disabled:!0}},[i._v("256G")]),a("v-uni-button",{staticClass:"cu-btn light bg-red"},[i._v("64G")])],1)],1),a("v-uni-view",{staticClass:"select-item"},[a("v-uni-view",{staticClass:"text-black"},[i._v("版本")]),a("v-uni-view",{staticClass:"select-btn"},[a("v-uni-button",{staticClass:"cu-btn"},[i._v("港澳版移动4G/联通4G")]),a("v-uni-button",{staticClass:"cu-btn"},[i._v("其他版本移动4G/联通4G")]),a("v-uni-button",{staticClass:"cu-btn"},[i._v("其他版本三网通")]),a("v-uni-button",{staticClass:"cu-btn light bg-red"},[i._v("国行三网通")])],1)],1)],1)],1):i._e(),a("v-uni-view",{staticClass:"zaiui-footer-fixed"},[a("v-uni-view",{staticClass:"flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn bg-red lg"},[i._v("确定")])],1)],1)],1)],1)],1)],1)},s=[]},"9dad":function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,".zaiui-bar-title-box .cu-bar[data-v-d67b7c4c]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-d67b7c4c]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-d67b7c4c]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-d67b7c4c]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-d67b7c4c]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-d67b7c4c]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-d67b7c4c]{width:100%;height:calc(0px + %?101?%)}",""]),i.exports=t},"9f3d":function(i,t,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=e(a("f65b")),o=e(a("791f")),n=e(a("2072")),c={components:{barTitle:s.default},data:function(){return{bannerCur:0,bannerList:[],bottomModal:!1,modalTitle:"",modalType:"promotion",selectType:"",goodsList:[]}},onLoad:function(){this.bannerList=o.default.bannerListData(),this.goodsList=o.default.goodsList()},onReady:function(){n.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{bannerSwiper:function(i){this.bannerCur=i.detail.current},serviceTap:function(){this.modalTitle="服务",this.modalType="service",this.showModal()},promotionTap:function(){this.modalTitle="促销优惠",this.modalType="promotion",this.showModal()},selectTap:function(i){this.selectType=i,this.modalTitle="选择规格",this.modalType="select",this.showModal()},showModal:function(){this.bottomModal=!0},hideModal:function(i){this.bottomModal=!1,this.modalTitle="",this.modalType=""},myCartTap:function(){uni.navigateTo({url:"/pages/goods/my_cart"})}}};t.default=c},a195:function(i,t,a){var e=a("b50b");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var s=a("4f06").default;s("3269f615",e,!0,{sourceMap:!1,shadowMode:!1})},b3c8:function(i,t,a){var e=a("9dad");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var s=a("4f06").default;s("4051153f",e,!0,{sourceMap:!1,shadowMode:!1})},b50b:function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,".zaiui-banner-swiper-box[data-v-e6c40b06]{position:relative;width:100%}.zaiui-banner-swiper-box .screen-swiper[data-v-e6c40b06]{min-height:%?436.36?%}.zaiui-banner-swiper-box .zaiui-page[data-v-e6c40b06]{position:absolute;bottom:%?27.27?%;right:%?27.27?%;padding:%?18.18?%}.zaiui-limited-seckill-box[data-v-e6c40b06]{position:relative;background-image:url(/static/images/home/sundry/aiu.png);background-repeat:no-repeat;background-size:100% 100%;padding:%?18.18?% %?27.27?%;color:#fff;width:100%}.zaiui-limited-seckill-box .text-xxl[data-v-e6c40b06]{font-size:%?54.54?%}.zaiui-limited-seckill-box .zaiui-cost-price-num[data-v-e6c40b06]{position:absolute;font-weight:200;left:%?199.99?%;top:%?21.81?%}.zaiui-limited-seckill-box .zaiui-cost-price-num.price-6[data-v-e6c40b06]{left:%?254.54?%}.zaiui-limited-seckill-box .zaiui-cost-price-num.price-5[data-v-e6c40b06]{left:%?227.27?%}.zaiui-limited-seckill-box .zaiui-cost-price-num.price-4[data-v-e6c40b06]{left:%?199.99?%}.zaiui-limited-seckill-box .zaiui-cost-price-num.price-3[data-v-e6c40b06]{left:%?163.63?%}.zaiui-limited-seckill-box .zaiui-cost-price-num.price-2[data-v-e6c40b06]{left:%?136.36?%}.zaiui-limited-seckill-box .zaiui-cost-price-num.price-1[data-v-e6c40b06]{left:%?99.99?%}.zaiui-limited-seckill-box .zaiui-time-right[data-v-e6c40b06]{position:absolute;right:%?27.27?%;top:%?16.36?%}.zaiui-view-box[data-v-e6c40b06]{position:relative;padding:%?18.18?% %?27.27?%}.zaiui-title-view-box[data-v-e6c40b06]{position:relative}.zaiui-title-view-box .cu-tag[data-v-e6c40b06]{margin-top:%?-9.09?%;margin-right:%?9.09?%}.zaiui-title-view-box .zaiui-title-tip-box[data-v-e6c40b06]{position:relative;padding:%?9.09?% %?18.18?%;width:100%}.zaiui-title-view-box .zaiui-title-tip-box .text-cut[data-v-e6c40b06]{padding-right:%?27.27?%}.zaiui-title-view-box .zaiui-title-tip-box .icon[data-v-e6c40b06]{position:absolute;right:%?18.18?%;top:%?16.36?%}.zaiui-service-view-box[data-v-e6c40b06]{position:relative}.zaiui-service-view-box .flex .basis-1[data-v-e6c40b06]{flex-basis:10%}.zaiui-service-view-box .flex .basis-7[data-v-e6c40b06]{flex-basis:70%}.zaiui-service-view-box .flex .basis-2[data-v-e6c40b06]{flex-basis:20%}.zaiui-service-view-box .tag-view[data-v-e6c40b06]{margin-right:%?9.09?%}.zaiui-service-view-box .icon-view[data-v-e6c40b06]{height:100%;display:flex;align-items:center}.zaiui-service-view-box .icon-view .icon[data-v-e6c40b06]{position:absolute;right:15px}.zaiui-promotion-view-box .flex .basis-1[data-v-e6c40b06]{flex-basis:10%}.zaiui-promotion-view-box .flex .basis-7[data-v-e6c40b06]{flex-basis:70%}.zaiui-promotion-view-box .flex .basis-2[data-v-e6c40b06]{flex-basis:20%}.zaiui-promotion-view-box .text-view[data-v-e6c40b06]{margin-left:%?9.09?%}.zaiui-promotion-view-box .icon-view[data-v-e6c40b06]{height:100%;display:flex;align-items:center}.zaiui-promotion-view-box .icon-view .icon[data-v-e6c40b06]{position:absolute;right:15px}.zaiui-select-view-box .flex .basis-1[data-v-e6c40b06]{flex-basis:10%}.zaiui-select-view-box .flex .basis-9[data-v-e6c40b06]{flex-basis:90%}.zaiui-select-view-box .flex .basis-8[data-v-e6c40b06]{flex-basis:80%}.zaiui-select-view-box .zaiui-border-view[data-v-e6c40b06]{position:relative;background:#efebeb;margin:%?21.81?% 0;height:%?2?%;width:100%}.zaiui-select-view-box .icon[data-v-e6c40b06]{position:relative;top:%?3.63?%}.zaiui-comment-view-box .zaiui-border-view[data-v-e6c40b06]{position:relative;background:#efebeb;margin:0 %?27.27?%;height:%?2?%}.zaiui-comment-view-box .zaiui-view-box .flex .basis-1[data-v-e6c40b06]{flex-basis:10%}.zaiui-comment-view-box .zaiui-view-box .flex .basis-9[data-v-e6c40b06]{flex-basis:90%}.zaiui-goods-info-view-box .zaiui-shop-view[data-v-e6c40b06]{position:relative;width:100%}.zaiui-goods-info-view-box .zaiui-shop-view .cu-avatar[data-v-e6c40b06]{position:absolute;height:%?80?%;width:%?80?%}.zaiui-goods-info-view-box .zaiui-shop-view .text-view[data-v-e6c40b06]{padding-left:%?99.99?%;padding-right:%?145.45?%}.zaiui-goods-info-view-box .zaiui-shop-view .cu-btn[data-v-e6c40b06]{position:absolute;top:%?21.81?%;right:0}.zaiui-goods-info-view-box .zaiui-border-view[data-v-e6c40b06]{position:relative;background:#efebeb;margin:%?21.81?% 0;height:%?2?%;width:100%}.zaiui-goods-info-view-box .live-tag-view[data-v-e6c40b06]{position:relative;width:100%}.zaiui-goods-info-view-box .live-tag-view .text-view[data-v-e6c40b06]{padding-right:%?127.27?%}.zaiui-goods-info-view-box .live-tag-view .text-view .cu-tag[data-v-e6c40b06]{position:relative;top:%?-3.63?%}.zaiui-goods-info-view-box .live-tag-view .text-right-view[data-v-e6c40b06]{position:absolute;right:0;top:%?3.63?%}.zaiui-goods-info-view-box .zaiui-recommend-list-box .recommend-scroll-box[data-v-e6c40b06]{position:relative;width:100%}.zaiui-goods-info-view-box .zaiui-recommend-list-box .recommend-scroll-box .recommend-scroll[data-v-e6c40b06]{position:relative;height:%?363.63?%;white-space:nowrap;width:100%}.zaiui-goods-info-view-box .zaiui-recommend-list-box .recommend-scroll-box .recommend-scroll .recommend-scroll-item[data-v-e6c40b06]{display:inline-block;padding-top:%?27.27?%;width:%?199.99?%;padding-right:%?18.18?%;white-space:normal}.zaiui-goods-info-view-box .zaiui-recommend-list-box .recommend-scroll-box .recommend-scroll .recommend-scroll-item .cu-avatar[data-v-e6c40b06]{width:%?181.81?%;height:%?181.81?%}.zaiui-goods-details-box[data-v-e6c40b06]{position:relative;width:100%}.zaiui-goods-details-box uni-image[data-v-e6c40b06]{width:100%}.zaiui-goods-help-view-box .flex .basis-1[data-v-e6c40b06]{flex-basis:10%}.zaiui-goods-help-view-box .flex .basis-9[data-v-e6c40b06]{flex-basis:90%}.zaiui-goods-help-view-box .zaiui-border-view[data-v-e6c40b06]{position:relative;background:#efebeb;margin:%?21.81?% 0;height:%?2?%;width:100%}.zaiui-recommend-list-view-box[data-v-e6c40b06]{padding:%?18.18?% 0}.zaiui-recommend-list-view-box .flex .img-aau[data-v-e6c40b06]{width:%?81.81?%;margin-top:%?12.72?%}.zaiui-recommend-list-view-box .flex .text-right .img-aau[data-v-e6c40b06]{margin-right:%?14.54?%}.zaiui-recommend-list-view-box .flex .text-left .img-aau[data-v-e6c40b06]{margin-left:%?14.54?%}.zaiui-recommend-list-view-box .zaiui-goods-list-box[data-v-e6c40b06]{position:relative;width:100%;margin:%?27.27?% 0}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2[data-v-e6c40b06]{margin:0 %?18.18?%}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme[data-v-e6c40b06]{padding:%?9.09?%}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme .list-radius[data-v-e6c40b06]{border-radius:%?18.18?%}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme .list-radius .goods-img[data-v-e6c40b06]{position:relative;width:100%}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme .list-radius .goods-img .cu-avatar[data-v-e6c40b06]{width:%?340?%;height:%?340?%;border-radius:%?18.18?% %?18.18?% 0 0}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme .list-radius .goods-img .mold-view[data-v-e6c40b06]{position:absolute;bottom:0}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme .list-radius .view-goods-info[data-v-e6c40b06]{position:relative;padding:%?18.18?%}.zaiui-recommend-list-view-box .zaiui-goods-list-box .col-2 .list-itme .list-radius .view-goods-info .text-lg[data-v-e6c40b06]{font-size:%?36.36?%}.zaiui-footer-fixed .cu-bar.tabbar.shop .action[data-v-e6c40b06]{color:#333}.zaiui-bottom-modal-box .zaiui-title-bar[data-v-e6c40b06]{position:relative;width:100%}.zaiui-bottom-modal-box .zaiui-title-bar .close-icon[data-v-e6c40b06]{position:absolute;right:%?36.36?%}.zaiui-bottom-modal-box .zaiui-modal-content[data-v-e6c40b06]{position:relative;width:100%;overflow-y:auto;height:calc(100vh - %?654.54?%);padding:0 %?29.09?% %?29.09?%;margin-bottom:%?118.18?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box[data-v-e6c40b06]{position:relative;width:100%;padding:0;text-align:left}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.service .text-view[data-v-e6c40b06]{margin-bottom:%?18.18?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.service .text-list-view[data-v-e6c40b06]{position:relative;width:100%;margin-bottom:%?18.18?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.service .text-list-view .text-cut[data-v-e6c40b06]{padding-right:%?21?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.service .text-list-view + .text-view[data-v-e6c40b06]{margin-top:%?36.36?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.promotion .text-view[data-v-e6c40b06]{margin-bottom:%?18.18?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.promotion .text-view .cu-tag[data-v-e6c40b06]{position:relative;top:%?-3.63?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.promotion .text-list-view[data-v-e6c40b06]{position:relative;width:100%;margin-bottom:%?18.18?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.promotion .text-list-view .text-cut[data-v-e6c40b06]{padding-right:%?218.18?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.promotion .text-list-view .text-right-view[data-v-e6c40b06]{position:absolute;right:0;top:%?2?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.promotion .text-list-view + .text-view[data-v-e6c40b06]{margin-top:%?36.36?%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.select .cu-list.menu-avatar > .cu-item .content[data-v-e6c40b06]{width:calc(100% - %?94.54?% - %?59.99?%)}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.select .zaiui-select-btn-list-boox .select-item[data-v-e6c40b06]{padding:%?18.18?% 0;border-bottom:%?2?% solid #f3f3f3}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.select .zaiui-select-btn-list-boox .select-item .select-btn[data-v-e6c40b06]{position:relative;margin-top:%?14.54?%;width:100%}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.select .zaiui-select-btn-list-boox .select-item .select-btn .cu-btn[data-v-e6c40b06]{font-size:%?23.63?%;margin:%?5?% %?16.36?% %?5?% 0}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.select .zaiui-select-btn-list-boox .select-item .select-btn .cu-btn.light[data-v-e6c40b06]{border:%?2?% solid}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-view-box.select .zaiui-select-btn-list-boox .select-item .select-btn .cu-btn[disabled][data-v-e6c40b06]{color:#aaa}.zaiui-bottom-modal-box .zaiui-modal-content .zaiui-footer-fixed[data-v-e6c40b06]{padding:%?9.09?% %?29.09?% %?29.09?%}.zaiui-bottom-modal-box.cu-modal.bottom-modal .cu-dialog[data-v-e6c40b06]{border-radius:%?36.36?% %?36.36?% 0 0}",""]),i.exports=t},e753:function(i,t,a){"use strict";var e=a("a195"),s=a.n(e);s.a},ebe8:function(i,t,a){"use strict";var e=a("b3c8"),s=a.n(e);s.a},f65b:function(i,t,a){"use strict";a.r(t);var e=a("4859"),s=a("82d1");for(var o in s)["default"].indexOf(o)<0&&function(i){a.d(t,i,(function(){return s[i]}))}(o);a("ebe8");var n=a("f0c5"),c=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"d67b7c4c",null,!1,e["a"],void 0);t["default"]=c.exports}}]);