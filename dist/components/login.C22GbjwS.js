import{a as u,m as c}from"../js/vuex.esm-bundler.B1_KPbxH.js";import{a as f}from"../js/index.DW_MHI2K.js";import{H as b}from"./headerBar.1W6-hKlP.js";import{w,v as i}from"../js/runtime-dom.esm-bundler.6Vi2Xe1y.js";import{_ as v,g as l,j as g,k as r,q as h,l as y,v as x,x as m,y as k,t as L,o as d}from"../js/plugin-vueexport-helper.D4GAd3iU.js";const _={components:{Headerbar:b},data(){return{email:"",password:"",error:"",rPath:""}},computed:{...c({token:"token"}),invalidForm(){return!this.email||!this.password}},methods:{...u(["LOGIN"]),async onSubmit(){const n=[this.email,this.password];try{const a=(await f.post("http://localhost:8888/api/login",n)).data;return console.log(a),a===!0?(this.$router.push("/"),this.LOGIN(!0)):window.confirm("아이디와 비밀번호가 일치하지 않습니다")}catch(o){return o}}}},N={class:"loginWrapper"},S={class:"login"},V=["disabled"],H={key:0,class:"error"};function B(n,o,a,C,s,e){const p=h("Headerbar");return d(),l("div",N,[g(p),r("div",S,[o[5]||(o[5]=r("h2",null,[x("Log in to "),r("strong",null,"Look-Diary")],-1)),r("form",{onSubmit:o[2]||(o[2]=w((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"]))},[r("div",null,[o[3]||(o[3]=r("label",{for:"email"},"Email",-1)),m(r("input",{class:"form-control",type:"text",name:"email","onUpdate:modelValue":o[0]||(o[0]=t=>s.email=t),autofocus:"",placeholder:"e.g.,test123"},null,512),[[i,s.email]])]),r("div",null,[o[4]||(o[4]=r("label",{for:"password"},"Password",-1)),m(r("input",{class:"form-control",type:"password","onUpdate:modelValue":o[1]||(o[1]=t=>s.password=t),placeholder:"123123"},null,512),[[i,s.password]])]),r("button",{class:k(["btn",{"btn-success":!e.invalidForm}]),type:"submit",disabled:e.invalidForm},"Log In",10,V)],32),s.error?(d(),l("p",H,L(s.error),1)):y("",!0)])])}const G=v(_,[["render",B]]);export{G as L};
