import{n as r,r as c,s as u,u as _,h as o,i as a,v as p,j as h,p as d}from"./index-b63357e7.js";const m={name:"BaseButton",props:{label:{type:String,required:!0},icon:{type:String,default:"mdi-open-in-new"},color:{type:String,default:"primary"}}};var k=function(){var e=this,s=e._self._c;return s(c,{attrs:{target:"_blank",color:e.color}},[s(u,{staticClass:"pr-1"},[e._v(" "+e._s(e.icon)+" ")]),e._v(" "+e._s(e.label)+" ")],1)},b=[],g=r(m,k,b,!1,null,null,null,null);const i=g.exports,v={name:"RecipeSettings",components:{BaseButton:i},data(){return{isShowLinksSber:!1,selectedShop:{value:"auchan",text:"Ашан"},shops:[],constProducts:[{name:"Яйцо куриное",auchan:"https://sbermarket.ru/auchan/c/moloko-sir-yajtsa-rastitelnie-produkti-8f15252/yajtsa?sort=unit_price_asc",globus:"https://sbermarket.ru/globus/c/katalog-globus/moloko-yajtsa/yajtsa?sid=32731&sort=unit_price_asc"},{name:"Хлеб",auchan:"https://sbermarket.ru/auchan/c/khleb-khlebtsi-vipechka/khleb-lavash-lepeshki?sid=177&source=category",globus:"https://sbermarket.ru/globus/c/katalog-globus/khleb-vipechka/khleb-lavash-lepeshki?sid=32731"},{name:"Сыр",auchan:"https://sbermarket.ru/auchan/c/moloko-sir-yajtsa-rastitelnie-produkti-8f15252/siyri/f/tverdyy-217249/polutverdyy-217250?sid=177&source=category&sort=unit_price_asc&discounted=true",globus:"https://sbermarket.ru/globus/c/katalog-globus/moloko-yajtsa/siri-new/f/tverdyy-217125/polutverdyy-217126?sid=32731&discounted=true&sort=popularity"},{name:"Ветчина",auchan:"https://sbermarket.ru/auchan/c/kolbasi-sosiski-delikatesy/vetchina-delikatesi?sid=177&source=category&sort=unit_price_asc&discounted=true",globus:"https://sbermarket.ru/globus/c/katalog-globus/kolbasi-sosiski-delikatesi/kolbasi-vetchiny?sid=32731&sort=unit_price_asc&discounted=true"},{name:"Фрукты",auchan:"https://sbermarket.ru/auchan/c/ovoshchi-frukti-orekhi/frukti?sid=177&source=category&sort=unit_price_asc",globus:"https://sbermarket.ru/globus/c/katalog-globus/ovoshchi-frukti-orekhi/frukti?sid=32731&sort=unit_price_asc"}]}},created(){this.loadShops(),this.isShowLinksSber=this.$store.state.recipeModule.isShowLinksSber,this.selectedShop=this.$store.state.recipeModule.selectedShop},methods:{loadShops(){this.shops=_},save(){this.$store.commit("setIsShowLinksSber",this.isShowLinksSber),this.$store.commit("setSelectedShop",this.selectedShop)}}};var f=function(){var e=this,s=e._self._c;return s("div",[s(o,[s(a,{attrs:{xs:"12",md:"3"}},[s(p,{attrs:{label:"Показать ссылки на продукты в Сбермаркете"},model:{value:e.isShowLinksSber,callback:function(t){e.isShowLinksSber=t},expression:"isShowLinksSber"}})],1)],1),s(o,[s(a,{attrs:{xs:"12",md:"3"}},[s(h,{attrs:{label:"Магазин",items:e.shops,"return-object":""},model:{value:e.selectedShop,callback:function(t){e.selectedShop=t},expression:"selectedShop"}})],1)],1),s(o,[s(a,{attrs:{xs:"12",md:"3"}},[s(i,{attrs:{label:"Сохранить",icon:"mdi-content-save-cog",color:"secondary"},nativeOn:{click:function(t){return e.save.apply(null,arguments)}}})],1)],1),s(o,[s(a,{attrs:{xs:"12",md:"3"}},e._l(e.constProducts,function(t){return s("div",{key:t},[e.selectedShop.value==="auchan"?s("a",{attrs:{href:t.auchan,target:"_blank"}},[e._v(e._s(t.name))]):e._e(),e.selectedShop.value==="globus"?s("a",{attrs:{href:t.globus,target:"_blank"}},[e._v(e._s(t.name))]):e._e()])}),0)],1)],1)},S=[],y=r(v,f,S,!1,null,null,null,null);const l=y.exports,$=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),w={components:{RecipeSettings:()=>d(()=>Promise.resolve().then(()=>$),void 0,import.meta.url)}};var x=function(){var e=this,s=e._self._c;return s(l)},j=[],L=r(w,x,j,!1,null,null,null,null);const P=L.exports;export{P as default};