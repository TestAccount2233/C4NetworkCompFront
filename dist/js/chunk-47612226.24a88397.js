(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47612226"],{"0889":function(e,t,s){"use strict";s("819e")},6511:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"home"},[s("el-container",{staticClass:"home-content"},[s("el-aside",{staticClass:"home-aside",attrs:{width:"200px"}},[s("el-menu",{staticClass:"home-nav",attrs:{"default-active":this.$route.path,router:"","text-color":"#C0C4CC","active-text-color":"#fff"}},[e.permissionControl(0)?s("el-menu-item",{attrs:{index:"/home/commodity"}},[s("i",{staticClass:"el-icon-s-goods"}),s("span",[e._v("商品管理")])]):e._e(),e.permissionControl(1)?s("el-menu-item",{attrs:{index:"/home/order"}},[s("i",{staticClass:"el-icon-s-order"}),s("span",[e._v("订单管理")])]):e._e(),e.permissionControl(2)?s("el-menu-item",{attrs:{index:"/home/freight"}},[s("i",{staticClass:"el-icon-s-finance"}),s("span",[e._v("运费管理")])]):e._e(),e.permissionControl(3)?s("el-menu-item",{attrs:{index:"/home/goods"}},[s("i",{staticClass:"el-icon-s-home"}),s("span",[e._v("库存管理")])]):e._e(),e.permissionControl(4)?s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-custom"}),s("span",[e._v(" 会员管理")])]),s("el-menu-item",{attrs:{index:"/home/memberinfo"}},[e._v(" 会员信息管理 ")]),s("el-menu-item",{attrs:{index:"/home/memberlist"}},[e._v(" 会员筛选查找 ")])],2):e._e(),e.permissionControl(5)?s("el-menu-item",{attrs:{index:"/home/mechanism"}},[s("i",{staticClass:"el-icon-s-shop"}),s("span",[e._v("机构管理")])]):e._e(),"老板"==e.role.role?s("el-menu-item",{attrs:{index:"/home/permission"}},[s("i",{staticClass:"el-icon-s-operation"}),s("span",[e._v("权限管理")])]):e._e(),e.permissionControl(6)?s("el-menu-item",{attrs:{index:"/home/analysis"}},[s("i",{staticClass:"el-icon-s-data"}),s("span",[e._v("历史数据分析")])]):e._e()],1)],1),s("el-main",{staticClass:"home-main"},[s("section",{staticClass:"content-wrapper"},[s("header",{staticClass:"search-header"},[s("el-input",{attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.selectType,callback:function(t){e.selectType=t},expression:"selectType"}},[s("el-option",{attrs:{label:"手机号",value:"1"}}),s("el-option",{attrs:{label:"订单号",value:"2"}})],1),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),s("router-view")],1)])],1)],1)},o=[],i=(s("caad"),s("2532"),{data:function(){return{searchText:"",selectType:"1",role:{},routeMap:["commodity","order","freight","goods","memberinfo","mechanism","analysis"]}},methods:{search:function(){var e=this;"1"===this.selectType?this.$axios({url:"/back/user/getUserByTel",params:{tel:this.searchText}}).then((function(t){200==t.data.code?null!==t.data.data?e.$router.push({name:"memberorder",query:{uid:t.data.data.uid}}):e.$message({type:"error",message:"未查询到相应的用户"}):e.$message({type:"error",message:t.data.msg})})):this.$axios({url:"/back/order/order/getOrder",params:{oId:this.searchText}}).then((function(t){200==t.data.code?null!==t.data.data?e.$router.push({name:"checkorder",query:{uid:t.data.data.address.uid,oid:t.data.data.oid}}):e.$message({type:"error",message:"未查询到相应的订单"}):e.$message({type:"error",message:t.data.msg})}))},permissionControl:function(e){return!("老板"!=this.role.role&&!this.role.permission.includes(e))}},created:function(){this.role=this.$store.state.role,this.$router.push({name:this.routeMap[this.role.permission[0]]})}}),r=i,n=(s("0889"),s("2877")),l=Object(n["a"])(r,a,o,!1,null,null,null);t["default"]=l.exports},"819e":function(e,t,s){}}]);
//# sourceMappingURL=chunk-47612226.24a88397.js.map