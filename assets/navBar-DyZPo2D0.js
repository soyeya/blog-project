import{a as m,m as c}from"./vuex.esm-bundler-DAF22L7W.js";import{A as g}from"./addBoard-0iEhvsdd.js";import{S as u}from"./sideMenu-CR2OzAkc.js";import{_ as p,g as i,k as t,f as _,l as S,j as h,z as k,q as a,o as n}from"./_plugin-vue_export-helper-D4GAd3iU.js";import"./modal-CdONhT0Q.js";import"./runtime-dom.esm-bundler-BpV6s9xN.js";const v="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle/%3e%3cg%20data-name='menu%20'%20id='menu_'%3e%3cpath%20d='M29,6H3A1,1,0,0,0,3,8H29a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M3,17H16a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z'/%3e%3cpath%20d='M25,24H3a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z'/%3e%3c/g%3e%3c/svg%3e",w="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z'/%3e%3cpath%20d='M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z'/%3e%3cpath%20d='M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",f="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20fill='none'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%203H7C5.89543%203%205%203.89543%205%205V19C5%2020.1046%205.89543%2021%207%2021H15'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20d='M19%2012L15%208M19%2012L15%2016M19%2012H9'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/svg%3e",B="data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20fill='none'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203H17C18.1046%203%2019%203.89543%2019%205V19C19%2020.1046%2018.1046%2021%2017%2021H9'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20d='M15%2012L11%208M15%2012L11%2016M15%2012H5'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/svg%3e",A={components:{AddBoard:g,Sidemenu:u},data(){return{loginDisplay:!1}},created(){this.LoginState()},computed:{...c({token:"token",isAddBoard:"isAddBoard",isShowBoardSettings:"isShowBoardSettings"})},methods:{...m(["LOGOUT","SET_IS_SHOW_BOARD_SETTINGS","SET_IS_ADD_BOARD","SET_CALLING_BOARD"]),LoginState(){return this.token?this.loginDisplay=!0:this.loginDisplay=!1},LogoutEvet(){return this.LOGOUT(!1),this.SET_CALLING_BOARD(!1),this.loginDisplay=!1,this.SET_IS_SHOW_BOARD_SETTINGS(!1)},sideMenuOpen(){this.SET_IS_SHOW_BOARD_SETTINGS(!0)},onClose(){this.SET_IS_SHOW_BOARD_SETTINGS(!1)},addBoard(){return this.token?this.SET_IS_ADD_BOARD(!0):this.SET_IS_ADD_BOARD(!1)}}},x={key:0},D={key:1};function O(M,e,T,H,r,o){const l=a("router-link"),d=a("Sidemenu");return n(),i("div",null,[t("nav",null,[t("ul",null,[t("li",null,[t("button",{type:"button",onClick:e[0]||(e[0]=(...s)=>o.sideMenuOpen&&o.sideMenuOpen(...s))},e[3]||(e[3]=[t("img",{src:v,alt:"menu"},null,-1)]))]),t("li",null,[t("button",{type:"button",onClick:e[1]||(e[1]=(...s)=>o.addBoard&&o.addBoard(...s))},e[4]||(e[4]=[t("img",{src:w,alt:"menu"},null,-1)]))]),r.loginDisplay?(n(),i("li",x,[t("a",{href:"/",onClick:e[2]||(e[2]=(...s)=>o.LogoutEvet&&o.LogoutEvet(...s))},e[5]||(e[5]=[t("img",{src:f,alt:"logout"},null,-1)]))])):(n(),i("li",D,[h(l,{to:"/login"},{default:k(()=>e[6]||(e[6]=[t("img",{src:B,alt:"login"},null,-1)])),_:1})]))])]),this.isShowBoardSettings?(n(),_(d,{key:0})):S("",!0)])}const b=p(A,[["render",O]]);export{b as N};
