import{m}from"../js/vuex.esm-bundler._phtn-y2.js";import{a as h}from"../js/index.DW_MHI2K.js";import{N as _}from"./navBar.Bq6-qRIk.js";import{H as f}from"./headerBar.CEE1oNTP.js";import{A as u}from"./addBoard.BA2wIJ6a.js";import{_ as B}from"../js/profile.DIKumnBw.js";import{_ as v,g,j as l,k as t,f as k,l as A,q as r,t as N,o as n}from"../js/_plugin-vue_export-helper.D4GAd3iU.js";import"./sideMenu.BEs9sJOH.js";import"../js/runtime-dom.esm-bundler.CVQnAVrY.js";import"./modal.DY8mJ35p.js";const b={components:{Navbar:_,Headerbar:f,AddBoard:u},data(){return{lists:[],title:"",value:"",currentUrl:window.location.href}},computed:{...m({token:"token",isAddBoard:"isAddBoard"})},created(){this.dataLoading()},methods:{async calllData(s){const a=(await h.get("http://localhost:8888/api/list")).data;console.log(a),a.forEach(e=>{if(e.id==s)return this.lists.push(e),this.value=this.lists[0].content,this.title=this.lists[0].title,console.log(this.lists)})},dataLoading(){if(this.token){const s=this.currentUrl.split("/").pop();this.calllData(s)}}}},x={class:"detailsWrap"},D={class:"title"},w={class:"content"},y=["placeholder"];function H(s,o,a,e,i,V){const d=r("Headerbar"),c=r("Navbar"),p=r("AddBoard");return n(),g("div",x,[l(d,{show:!0}),l(c),t("div",D,[t("h3",null,N(i.title),1),o[0]||(o[0]=t("div",{class:"imgBoxs"},[t("img",{src:B,alt:"profile"})],-1)),o[1]||(o[1]=t("p",null,"test123",-1))]),t("div",w,[t("textarea",{readonly:"",placeholder:i.value},null,8,y)]),this.isAddBoard?(n(),k(p,{key:0})):A("",!0)])}const z=v(b,[["render",H]]);export{z as D};
