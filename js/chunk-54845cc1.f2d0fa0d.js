(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54845cc1"],{"2b94":function(e,t,a){"use strict";a("8ab8")},"58c2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.categories?a("div",{staticClass:"categoriess"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品分类")])],1),a("el-card",[a("el-button",{attrs:{type:"primary"},on:{click:e.addCatDialog}},[e._v("添加分类")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.categories.result,border:"","tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"cat_id"}},[a("el-table-column",{attrs:{label:"#",width:"100"}}),a("el-table-column",{attrs:{prop:"cat_name",label:"分类名称",width:"180"}}),a("el-table-column",{attrs:{prop:"cat_deleted",label:"是否有效",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("i",{class:t.cat_deleted?"el-icon-close":"el-icon-success"})]}}],null,!1,3928334388)}),a("el-table-column",{attrs:{prop:"cat_level",label:"排序"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-tag",{attrs:{size:"mini ",effect:"dark",type:0===l.cat_level?"":1===l.cat_level?"success":"warning"}},[e._v(e._s(0===l.cat_level?"一级":1===l.cat_level?"二级":"三级"))])]}}],null,!1,311352296)}),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.editCatDialog(l)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.delCat(l.cat_id)}}},[e._v("删除")])]}}],null,!1,3462610128)})],1),a("el-pagination",{attrs:{"page-sizes":[5,10,15,20],"page-size":5,layout:"total, sizes, prev, pager, next, jumper",total:e.categories.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1),a("el-dialog",{attrs:{title:e.form.cat_id?"修改分类":"添加分类",visible:e.dialogFormVisible}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{model:{value:e.form.cat_name,callback:function(t){e.$set(e.form,"cat_name",t)},expression:"form.cat_name"}})],1),e.form.cat_id?e._e():a("el-form-item",{attrs:{label:"父级分类"}},[a("el-cascader",{attrs:{options:e.categories.result,props:{checkStrictly:!0,expandTrigger:"hover",label:"cat_name",value:"cat_id"},clearable:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.clearForm}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.sureCat}},[e._v("确 定")])],1)],1)],1):e._e()},r=[],i=a("5530"),o=a("2f62"),c={data:function(){return{value:[],query:{pagesize:5,pagenum:1,type:""},all:"",dialogFormVisible:!1,form:{cat_name:""},rules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},computed:Object(i["a"])({},Object(o["c"])({categories:function(e){return e.categories.categories}})),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getCategories","delCatItem","addCatItem","editCatItem"])),{},{sizeChange:function(e){this.query.pagesize=e,this.getCategories(this.query)},currentChange:function(e){this.query.pagenum=e,this.getCategories(this.query)},clearForm:function(){this.dialogFormVisible=!1,this.form={cat_name:""}},delCat:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.delCatItem(e).then((function(){t.$message({type:"success",message:"删除成功!"}),t.getCategories(t.query)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},editCatDialog:function(e){this.dialogFormVisible=!0,this.form=Object(i["a"])({},e)},addCatDialog:function(){this.dialogFormVisible=!0},sureCat:function(){var e=this;this.dialogFormVisible=!1,this.$refs.ruleForm.validate((function(t){if(t)if(e.form.cat_id)e.editCatItem({id:e.form.cat_id,cat_name:e.form.cat_name}).then((function(){e.$message.success("修改成功")}));else{console.log(e.value);var a=0;a=0===e.value.length?0:e.value[e.value.length-1],e.addCatItem({cat_name:e.form.cat_name,cat_level:e.value.length,cat_pid:a}).then((function(){e.$message.success("添加成功"),e.dialogFormVisible=!1,e.form={cat_name:""}}))}}))}}),created:function(){this.getCategories(this.query)}},s=c,n=(a("2b94"),a("2877")),u=Object(n["a"])(s,l,r,!1,null,null,null);t["default"]=u.exports},"8ab8":function(e,t,a){}}]);
//# sourceMappingURL=chunk-54845cc1.f2d0fa0d.js.map