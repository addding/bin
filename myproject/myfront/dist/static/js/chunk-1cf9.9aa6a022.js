(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1cf9"],{Jp9X:function(t,o,e){},l1ds:function(t,o,e){"use strict";var n=e("Jp9X");e.n(n).a},no6w:function(t,o,e){"use strict";e.r(o);var n=e("t3Un");var a={name:"book",data:function(){return{input:"",bookList:[]}},mounted:function(){this.showBooks()},methods:{getInput:function(){return{book_name:this.input}},addBook:function(){var t=this;(function(t){return Object(n.a)({url:"/book/add_book",method:"get",params:t})})(this.getInput()).then(function(o){var e=o.data;0===e.error_num?t.showBooks():(t.$message.error("新增书籍失败，请重试"),console.log(e.msg))})},showBooks:function(){var t=this;Object(n.a)({url:"/book/show_books",method:"get"}).then(function(o){var e=o.data;0===e.error_num?t.bookList=e.list:(t.$message.error("查询书籍失败"),console.log(e.msg))})}}},i=(e("l1ds"),e("KHd+")),s=Object(i.a)(a,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mixin-components-container"},[e("el-row",{attrs:{display:"margin-top:10px"}},[e("el-input",{staticStyle:{display:"inline-table",width:"30%",float:"left"},attrs:{placeholder:"请输入笔记"},model:{value:t.input,callback:function(o){t.input=o},expression:"input"}}),t._v(" "),e("el-button",{staticStyle:{float:"left",margin:"2px"},attrs:{type:"primary"},on:{click:function(o){t.addBook()}}},[t._v("新增")])],1),t._v(" "),e("el-row",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bookList,border:""}},[e("el-table-column",{attrs:{prop:"id",label:"编号","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v(" "+t._s(o.row.pk)+" ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"book_name",label:"笔记","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v(" "+t._s(o.row.fields.book_name)+" ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"add_time",label:"添加时间","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v(" "+t._s(o.row.fields.add_time)+" ")]}}])})],1)],1)],1)},[],!1,null,"85abe65c",null);s.options.__file="index.vue";o.default=s.exports}}]);