(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ad203f4"],{"0522":function(t,e,n){},"08cd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"goods-wrapper"},[n("card",{attrs:{title:"库存管理"}},[n("el-button",{staticClass:"card-btn",attrs:{size:"small",type:"primary"},on:{click:t.checkHistory}},[t._v("历史")]),n("el-input",{attrs:{placeholder:"请输入商品名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.search()}},slot:"append"})],1),n("el-table",{staticClass:"search-table",attrs:{data:t.searchList,border:""}},[n("el-table-column",{attrs:{label:"商品名称",prop:"pName",align:"center"}}),n("el-table-column",{attrs:{label:"库存量",prop:"number",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{staticStyle:{width:"140px"},attrs:{size:"small"},model:{value:e.row.editNum,callback:function(n){t.$set(e.row,"editNum",n)},expression:"scope.row.editNum"}},[n("el-select",{attrs:{slot:"prepend"},slot:"prepend",model:{value:e.row.editType,callback:function(n){t.$set(e.row,"editType",n)},expression:"scope.row.editType"}},[n("el-option",{attrs:{label:"+",value:0}}),n("el-option",{attrs:{label:"-",value:1}})],1)],1),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini"},on:{click:function(n){return t.editGoods(e.$index,e.row)}}},[t._v("确定")])]}}])})],1),n("el-pagination",{staticStyle:{margin:"20px 0 0 30px"},attrs:{"current-page":t.searchCurrentPage,"page-size":t.searchPageSize,layout:"total, prev, pager, next,jumper",total:t.searchTotalCount},on:{"current-change":t.handleSearchCurrentChange}}),n("div",{staticClass:"goodstable-wrapper"},[n("table",{staticClass:"goodsTable"},[n("tr",{staticClass:"tableHeader"},[n("td",[t._v("商品名")]),n("td",[t._v("库存")]),n("td",[t._v("商品名")]),n("td",[t._v("库存")])]),t._l(t.rowCount,(function(e){return n("tr",{key:e},[n("td",{staticClass:"column"},[t._v(t._s(t.goodsList[2*e-2].pName))]),n("td",[t._v(t._s(t.goodsList[2*e-2].number))]),n("td",{staticClass:"column"},[t._v(" "+t._s(void 0!==t.goodsList[2*e-1]?t.goodsList[2*e-1].pName:"")+" ")]),n("td",[t._v(" "+t._s(void 0!==t.goodsList[2*e-1]?t.goodsList[2*e-1].number:"")+" ")])])}))],2),n("el-pagination",{staticStyle:{margin:"20px 0 0 30px"},attrs:{"current-page":t.currentPage,"page-size":t.PageSize,layout:"total, prev, pager, next,jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},a=[],s=(n("841c"),n("ac1f"),n("4de4"),n("159b"),n("ff86")),o={components:{card:s["a"]},data:function(){return{searchText:"",selectType:"1",editNum:0,searchList:[],searchCurrentPage:1,searchPageSize:10,currentPage:1,PageSize:10,totalCount:0,goodsList:[]}},computed:{rowCount:function(){return Math.ceil(this.goodsList.length/2)},searchTotalCount:function(){return this.searchList.length}},methods:{editGoods:function(t,e){var n=this;parseInt(e.editNum)%1===0?this.$axios({url:"/back/stock/operation",params:{number:e.editNum,operation:e.editType,pid:e.pid}}).then((function(t){200==t.data.code?(n.$message({type:"success",message:"操作成功"}),n.$openLoading(),n.getGoods()):n.$message({type:"error",message:t.res.msg})})).catch((function(t){n.$message({type:"error",message:"操作失败"})})):this.$message({type:"error",message:"请输入整数"})},handleCurrentChange:function(t){this.currentPage=t,this.getGoods()},getGoods:function(){var t=this;this.$axios({url:"/back/stock/getAllStock",params:{page:this.currentPage}}).then((function(e){200==e.data.code?(t.PageSize=e.data.data.pageSize,t.totalCount=e.data.data.total,t.goodsList=e.data.data.list,t.search()):t.$message({type:"error",message:"库存信息获取失败"}),setTimeout((function(){t.$openLoading().close()}),200)})).catch((function(e){setTimeout((function(){t.$openLoading().close()}),200),t.$message({type:"error",message:"库存订单信息获取失败"})}))},handleSearchCurrentChange:function(t){this.searchCurrentPage=t,this.search()},search:function(){var t=this;this.searchText?(this.searchList=this.goodsList.filter((function(e){if(-1!=e.pName.indexOf(t.searchText))return!0})),this.searchList.forEach((function(e){t.$set(e,"editType",0),t.$set(e,"editNum",0)})),0===this.searchList.length&&this.$message({type:"error",message:"没有搜索到相关商品"})):this.searchList=[]},checkHistory:function(){this.$router.push({name:"goodshistory"})}},created:function(){this.$openLoading(),this.getGoods()}},i=o,c=(n("c4e3"),n("2877")),l=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),s=n("17c2"),o=n("9112");for(var i in a){var c=r[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{o(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),s=a("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"62b8":function(t,e,n){},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),s=n("1d80"),o=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=a(t),c=String(this),l=s.lastIndex;o(l,0)||(s.lastIndex=0);var u=i(s,c);return o(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,i=s,c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(i=function(t){var e,n,a,i,d=this,p=l&&d.sticky,f=r.call(d),h=d.source,g=0,x=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),x=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",x=" "+x,g++),n=new RegExp("^(?:"+h+")",f)),u&&(n=new RegExp("^"+h+"$(?!\\s)",f)),c&&(e=d.lastIndex),a=s.call(p?n:d,x),p?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=i},9889:function(t,e,n){"use strict";n("0522")},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c4e3:function(t,e,n){"use strict";n("62b8")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),s=n("b622"),o=n("9263"),i=n("9112"),c=s("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=s(t),g=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),x=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!x||"replace"===t&&(!l||!u||p)||"split"===t&&!f){var v=/./[h],m=n(h,""[t],(function(t,e,n,r,a){return e.exec===o?g&&!a?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=m[0],y=m[1];r(String.prototype,t,b),r(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&i(RegExp.prototype[h],"sham",!0)}},ff86:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"card-warpper"},[n("header",{staticClass:"card-header"},[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]),n("div",{staticClass:"card-content"},[t._t("default")],2)])},a=[],s={props:{title:{type:String}}},o=s,i=(n("9889"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-5ad203f4.3e77b4e3.js.map