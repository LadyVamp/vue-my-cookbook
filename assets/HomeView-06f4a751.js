import{m as y,V as c,R as h,L as f,c as r,C,B as u,n as i,_ as a,a as _,b as l,d as o,e as S,f as F,g as $,h as m,i as v,j as g,k as L,l as k,o as N,p as w}from"./index-b63357e7.js";const A=y(f,h,c).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...h.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...c.options.computed.classes.call(this)}},styles(){const s={...c.options.computed.styles.call(this)};return this.img&&(s.background=`url("${this.img}") center center / cover no-repeat`),s}},methods:{genProgress(){const s=f.options.methods.genProgress.call(this);return s?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[s]):null}},render(s){const{tag:e,data:t}=this.generateRouteLink();return t.style=this.styles,this.isClickable&&(t.attrs=t.attrs||{},t.attrs.tabindex=0),s(e,this.setBackgroundColor(this.color,t),[this.genProgress(),this.$slots.default])}});r("v-card__actions");r("v-card__subtitle");const I=r("v-card__text"),j=r("v-card__title");const d=y(u,C).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...u.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(s){s&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...u.options.methods.genData.call(this)})}}}),T={name:"FilterBySeason",components:{IconSeason:a},data(){return{seasons:["all","winter","spring","summer","autumn"]}},methods:{filterBySeason(s){this.$emit("filterBySeason",s)}}};var V=function(){var e=this,t=e._self._c;return t(d,{attrs:{"active-class":"primary--text"}},e._l(e.seasons,function(n){return t(_,{key:n,staticClass:"text-caption",attrs:{outlined:""},on:{click:function(p){return e.filterBySeason(n)}}},[t(a,{attrs:{season:n}})],1)}),1)},P=[],E=i(T,V,P,!1,null,null,null,null);const x=E.exports,O={name:"FilterByFeature",components:{IconFeature:l},data(){return{features:["all","fast","oven","pot","stewingdish","grill","toaster"]}},methods:{filterByFeature(s){this.$emit("filterByFeature",s)}}};var z=function(){var e=this,t=e._self._c;return t(d,{attrs:{"active-class":"primary--text"}},e._l(e.features,function(n){return t(_,{key:n,staticClass:"text-caption",attrs:{outlined:""},on:{click:function(p){return e.filterByFeature(n)}}},[t(l,{attrs:{feature:n}})],1)}),1)},D=[],G=i(O,z,D,!1,null,null,null,null);const b=G.exports,H={name:"FilterByNature",components:{IconNature:o},data(){return{natures:["all","vegetable","bird","meat","fish","dairy","dessert"]}},methods:{filterByNature(s){this.$emit("filterByNature",s)}}};var M=function(){var e=this,t=e._self._c;return t(d,{attrs:{"active-class":"primary--text"}},e._l(e.natures,function(n){return t(_,{key:n,staticClass:"text-caption",attrs:{outlined:""},on:{click:function(p){return e.filterByNature(n)}}},[t(o,{attrs:{nature:n}})],1)}),1)},q=[],J=i(H,M,q,!1,null,null,null,null);const B=J.exports;const K={name:"RecipesList",components:{IconNature:o,IconFeature:l,IconSeason:a,FilterByNature:B,FilterByFeature:b,FilterBySeason:x},data(){return{filteredList:[],search:"",options:[{value:"title",text:"По названию"},{value:"ingredients",text:"По ингредиентам"}],selected:{value:"title",text:"По названию"},optionsServingsNumber:[{value:null,text:"Все"},{value:2,text:"2"},{value:4,text:"4"},{value:6,text:"6"}],selectedServingsNumber:{value:null,text:"Все"}}},mounted(){this.filteredList.length===0&&this.fetchRecipes()},updated(){this.filteredList.length===0&&this.search===""&&this.showAllRecipes()},methods:{...S(["fetchRecipes"]),...F(["getAllRecipes","getRecipesCount","getLoading"]),showAllRecipes(){this.filteredList=this.getAllRecipes()},onFilterByNature(s){s==="all"?this.showAllRecipes():this.filteredList=this.getAllRecipes().filter(e=>e.nature===s)},onFilterByFeature(s){s==="all"?this.showAllRecipes():this.filteredList=this.getAllRecipes().filter(e=>e.feature===s)},onFilterBySeason(s){s==="all"?this.showAllRecipes():this.filteredList=this.getAllRecipes().filter(e=>e.season===s)},onSearchInput(){const s=this.search.toLowerCase();s!==""&&this.selected.value==="title"&&(this.filteredList=this.searchByTitle(s)),s!==""&&this.selected.value==="ingredients"&&(this.filteredList=this.searchByIngredients(s))},searchByTitle(s){return this.getAllRecipes().filter(e=>e.title.toLowerCase().includes(s))},searchByIngredients(s){const e=new Set;return this.getAllRecipes().forEach(t=>{t.ingredients&&Object.keys(t.ingredients).forEach(n=>{n.toLowerCase().includes(s)&&e.add(t)})}),e},onServingsNumberChange(){this.filteredList=this.getAllRecipes().filter(s=>s.servings===this.selectedServingsNumber.value)}}};var Q=function(){var e=this,t=e._self._c;return t($,{attrs:{fluid:""}},[t(m,[t(v,{staticClass:"d-flex justify-end"},[t("div",{staticClass:"search_select"},[t(g,{attrs:{label:"Поиск",items:e.options,"item-value":"value","item-text":"text","return-object":""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),t("div",{staticClass:"search_input"},[t(L,{attrs:{"append-icon":"mdi-magnify",label:"Поиск по "+e.getRecipesCount()+" рецептам","single-line":""},on:{input:function(n){return e.onSearchInput()}},model:{value:e.search,callback:function(n){e.search=typeof n=="string"?n.trim():n},expression:"search"}})],1)])],1),t(B,{on:{filterByNature:e.onFilterByNature}}),t(b,{on:{filterByFeature:e.onFilterByFeature}}),t(x,{on:{filterBySeason:e.onFilterBySeason}}),t("div",{staticClass:"d-flex justify-space-between"},[t("div",{staticClass:"d-flex justify-start"},[t(g,{staticClass:"servings_select",attrs:{label:"Порций",items:e.optionsServingsNumber,"item-value":"value","item-text":"text","return-object":""},on:{change:function(n){return e.onServingsNumberChange()}},model:{value:e.selectedServingsNumber,callback:function(n){e.selectedServingsNumber=n},expression:"selectedServingsNumber"}})],1),t("div",{staticClass:"my-4"},[e._v(" "+e._s(e.filteredList.length)+" ")])]),e.getLoading()===!1?t(m,e._l(e.filteredList,function(n){return t(v,{key:n.id,attrs:{cols:"12",sm:"6",md:"4",xl:"3"}},[t(A,{attrs:{width:"360px",height:"360px"}},[t("router-link",{attrs:{to:{name:"RecipeDetails",params:{id:n.id}}}},[t(k,{attrs:{src:"https://ladyvamp.github.io/vue-my-cookbook/recipe-images/"+n.id+".jpg",height:"200px"}}),t(j,[e._v(e._s(n.title))])],1),t(I,[t(o,{attrs:{nature:n.nature}}),t(l,{attrs:{feature:n.feature}}),t(a,{attrs:{season:n.season}})],1)],1)],1)}),1):t("div",[t(N,{attrs:{size:50,color:"primary",indeterminate:""}})],1)],1)},U=[],W=i(K,Q,U,!1,null,"1bd65cb9",null,null);const R=W.exports,X=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),Y={components:{RecipesList:()=>w(()=>Promise.resolve().then(()=>X),void 0,import.meta.url)}};var Z=function(){var e=this,t=e._self._c;return t(R)},ee=[],te=i(Y,Z,ee,!1,null,null,null,null);const ne=te.exports;export{ne as default};
