(this.webpackJsonpsign_auth=this.webpackJsonpsign_auth||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(21),s=n.n(a),r=(n(27),n(4)),l=n(17),o=n(0),j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_clientId;var d=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(),s=Object(r.a)(a,2),d=s[0],b=s[1],u=Object(c.useState)(),h=Object(r.a)(u,2),O=h[0],x=h[1],p=Object(c.useState)(!0),g=Object(r.a)(p,2),v=g[0],m=g[1],f=Object(c.useState)(!1),y=Object(r.a)(f,2),C=y[0],S=y[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"user-info",children:[Object(o.jsx)("img",{src:O}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{children:d})]}),v?Object(o.jsx)(l.GoogleLogin,{clientId:j,buttonText:"Sign In",onSuccess:function(e){console.log("Login Success:",e.profileObj),m(!1),S(!0),i(e.profileObj.name),b(e.profileObj.email),x(e.profileObj.imageUrl)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",isSignedIn:!0}):null,C?Object(o.jsx)(l.GoogleLogout,{clientId:j,buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),m(!0),S(!1)}}):null]})},b=n(7),u=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{children:"Plan your Mealboard!"}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(b.b,{to:"/",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Home"}),Object(o.jsx)(b.b,{to:"./Recipebox",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Meal Board"})]})]})},h=n(15),O=n(3);n(20);var x=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(r.a)(a,2),l=s[0],j=s[1],d=Object(c.useState)(["test"]),b=Object(r.a)(d,2),u=(b[0],b[1]),x=Object(c.useState)(""),p=Object(r.a)(x,2),g=p[0],v=p[1],m=Object(c.useState)(""),f=Object(r.a)(m,2),y=f[0],C=f[1],S=Object(c.useState)(""),k=Object(r.a)(S,2),N=k[0],F=k[1];function _(e){j([].concat(Object(h.a)(l),[e]))}function T(){fetch("/getsuggestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchCritria:l,searchType:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e);for(var t=0,n=Object.entries(e);t<n.length;t++){var c=Object(r.a)(n[t],2),i=c[0],a=c[1];v([].concat(Object(h.a)(g),[a])),C([].concat(Object(h.a)(y),[i])),console.log(g)}}))}var P=Object(O.f)();function E(e){console.log(e),fetch("/recipepage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),F(e)}))}function A(e){console.log(e)}function I(e){console.log(e)}return Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"recipe_search_box",children:[Object(o.jsx)("h1",{children:"Search For Recipes"}),Object(o.jsxs)("div",{className:"by_ingreds",children:[Object(o.jsx)("input",{onChange:function(){return i("ingredients")},type:"checkbox",name:"ingreds",value:"Search by Ingredients"}),Object(o.jsx)("label",{id:"ingredients",className:"label-header",htmlFor:"ingreds",children:"Search by Ingredients"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-ingreds",children:[Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"chicken"}),Object(o.jsx)("label",{htmlFor:"",children:"Chicken"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"pork"}),Object(o.jsx)("label",{htmlFor:"",children:"Pork"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"beef"}),Object(o.jsx)("label",{htmlFor:"",children:"Beef"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"fish"}),Object(o.jsx)("label",{htmlFor:"",children:"Fish"})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-ingreds",children:[Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"lettuce"}),Object(o.jsx)("label",{htmlFor:"",children:"Lettuce"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Rice"}),Object(o.jsx)("label",{htmlFor:"",children:"Rice"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Apple"}),Object(o.jsx)("label",{htmlFor:"",children:"Apple"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Garlic"}),Object(o.jsx)("label",{htmlFor:"",children:"Garlic"})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-ingreds",children:[Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Egg"}),Object(o.jsx)("label",{htmlFor:"",children:"Egg"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Corn"}),Object(o.jsx)("label",{htmlFor:"",children:"Corn"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Cheese"}),Object(o.jsx)("label",{htmlFor:"",children:"Cheese"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Mushroom"}),Object(o.jsx)("label",{htmlFor:"",children:"Mushroom"})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-ingreds",children:[Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"butter"}),Object(o.jsx)("label",{htmlFor:"",children:"Butter"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Flour"}),Object(o.jsx)("label",{htmlFor:"",children:"Flour"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"onion"}),Object(o.jsx)("label",{htmlFor:"",children:"Onion"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"ingreds",type:"checkbox",value:"Orange"}),Object(o.jsx)("label",{htmlFor:"",children:"Orange"})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"",children:"Enter Ingredient"}),Object(o.jsx)("input",{"data-testid":"Enter_Ingredient",onChange:function(e){return _(e.target.value)},id:"ingreds",type:"text"}),Object(o.jsx)("button",{onClick:T,children:"Add Ingredients"}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"by_calories",children:[Object(o.jsx)("input",{onChange:function(){return i("calories")},type:"checkbox",name:"calories",value:"Search by Calories"}),Object(o.jsx)("label",{className:"label-header",htmlFor:"calories",children:"Search by Calories"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"",children:"Enter Calories Amount"}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},id:"calories",type:"text"}),Object(o.jsx)("button",{onClick:T,children:"Add "})]}),Object(o.jsxs)("div",{className:"by_diet",children:[Object(o.jsx)("input",{onChange:function(){return i("diet")},type:"checkbox",name:"diet",value:"Search by Diet"}),Object(o.jsx)("label",{className:"label-header",htmlFor:"diet",children:"Search by Diet"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"drop-diet",children:Object(o.jsxs)("select",{onChange:function(e){return _(e.target.value)},id:"diet",name:"",placeholder:" ",children:[Object(o.jsx)("option",{value:"Gluten Free",children:"Gluten Free"}),Object(o.jsx)("option",{value:"Ketogenic",children:"Ketogenic"}),Object(o.jsx)("option",{value:"Vegetarian",children:"Vegetarian"}),Object(o.jsx)("option",{value:"Lacto-Vegetarian",children:"Lacto-Vegetarian"}),Object(o.jsx)("option",{value:"Ovo-Vegetarian",children:"Ovo-Vegetarian"}),Object(o.jsx)("option",{value:"Vegan",children:"Vegan"}),Object(o.jsx)("option",{value:"Pescetarian",children:"Pescetarian"}),Object(o.jsx)("option",{value:"Paleo",children:"Paleo"}),Object(o.jsx)("option",{value:"Primal",children:"Primal"}),Object(o.jsx)("option",{value:"Low FODMAP",children:"Low FODMAP"}),Object(o.jsx)("option",{value:"Whole30",children:"Whole30"})]})}),Object(o.jsx)("button",{onClick:T,children:"Add Diet"})]}),Object(o.jsxs)("div",{className:"by_cuisine",children:[Object(o.jsx)("input",{onChange:function(){return i("cuisine")},type:"checkbox",name:"cuisine",value:"Search by Cuisine"}),Object(o.jsx)("label",{className:"label-header",htmlFor:"cuisine",children:"Search by Cuisine"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"drop-cuisine",children:Object(o.jsxs)("select",{onChange:function(e){return _(e.target.value)},id:"cuisine",name:"",children:[Object(o.jsx)("option",{value:"African",children:"African"}),Object(o.jsx)("option",{value:"American",children:"American"}),Object(o.jsx)("option",{value:"British",children:"British"}),Object(o.jsx)("option",{value:"Cajun",children:"Cajun"}),Object(o.jsx)("option",{value:"Caribbean",children:"Caribbean"}),Object(o.jsx)("option",{value:"Chinese",children:"Chinese"}),Object(o.jsx)("option",{value:"Eastern European",children:"Eastern European"}),Object(o.jsx)("option",{value:"European",children:"European"}),Object(o.jsx)("option",{value:"French",children:"French"}),Object(o.jsx)("option",{value:"German",children:"German"}),Object(o.jsx)("option",{value:"Greek",children:"Greek"}),Object(o.jsx)("option",{value:"Indian",children:"Indian"}),Object(o.jsx)("option",{value:"Irish",children:"Irish"}),Object(o.jsx)("option",{value:"Italian",children:"Italian"}),Object(o.jsx)("option",{value:"Japanese",children:"Japanese"}),Object(o.jsx)("option",{value:"Jewish",children:"Jewish"}),Object(o.jsx)("option",{value:"Korean",children:"Korean"}),Object(o.jsx)("option",{value:"Latin American",children:"Latin American"}),Object(o.jsx)("option",{value:"Mediterranean",children:"Mediterranean"}),Object(o.jsx)("option",{value:"Mexican",children:"Mexican"}),Object(o.jsx)("option",{value:"Middle Eastern",children:"Middle Eastern"}),Object(o.jsx)("option",{value:"Nordic",children:"Nordic"}),Object(o.jsx)("option",{value:"Southern",children:"Southern"}),Object(o.jsx)("option",{value:"Spanish",children:"Spanish"}),Object(o.jsx)("option",{value:"Thai"}),Object(o.jsx)("option",{value:"Vietnamese",children:"Vietnamese"})]})}),Object(o.jsx)("button",{onClick:T,children:"Add Cuisine"}),Object(o.jsx)("button",{onClick:function(){j(""),i(""),C(""),v("")},children:" refresh"}),Object(o.jsx)("p",{children:"Please first select how you'd like to search, then press add to see a suggestion!"}),Object(o.jsx)("p",{children:" To get another recipe deselect and start again!"})]})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"suggestion-box",children:[Object(o.jsx)("h3",{children:"Suggestion Box"}),Object(o.jsx)("p",{children:" To view a Recipe please slect recipe and click Go to Recipe Page! "}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"checkbox",name:"ingreds",value:"0"}),Object(o.jsxs)("button",{className:"recipe-button",value:y[0],onClick:function(e){return E(e.target.value)},children:[" ",g[0]]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"checkbox",name:"ingreds",value:"1"}),Object(o.jsxs)("button",{className:"recipe-button",value:y[1],onClick:function(e){return E(e.target.value)},children:[" ",g[1]]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"checkbox",name:"ingreds",value:"2"}),Object(o.jsxs)("button",{className:"recipe-button",value:y[2],onClick:function(e){return E(e.target.value)},children:[" ",g[2]]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"checkbox",name:"ingreds",value:"3"}),Object(o.jsxs)("button",{className:"recipe-button",value:y[3],onClick:function(e){return E(e.target.value)},children:[" ",g[3]]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"checkbox",name:"ingreds",value:"4"}),Object(o.jsxs)("button",{className:"recipe-button",value:y[4],onClick:function(e){return E(e.target.value)},children:[" ",g[4]]})]}),Object(o.jsxs)("div",{className:"add-to-mb",children:[Object(o.jsxs)("select",{onChange:function(e){return I(e.target.value)},id:"",name:"",placeholder:"Pick Day",children:[Object(o.jsx)("option",{value:"Monday",children:"Monday"}),Object(o.jsx)("option",{value:"Tuesday",children:"Tuesday"}),Object(o.jsx)("option",{value:"Wednesday",children:"Wednesday"}),Object(o.jsx)("option",{value:"Thursday",children:"Thursday"}),Object(o.jsx)("option",{value:"Friday",children:"Friday"}),Object(o.jsx)("option",{value:"Saturday",children:"Saturday"}),Object(o.jsx)("option",{value:"Sunday",children:"Sunday"})]}),Object(o.jsx)("button",{onChange:function(e){return I(e.target.value)},children:"Add"})]}),Object(o.jsx)("button",{onClick:function(){P.push({pathname:"/Recipepage",state:{detail:N}})},children:"Go to Recipe page!"})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"monday",children:Object(o.jsx)("h3",{children:"Monday"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"tuesday",children:Object(o.jsx)("h3",{children:"Tuesday"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"wednesday",children:Object(o.jsx)("h3",{children:"Wednesday"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"thursday",children:Object(o.jsx)("h3",{children:"Thursday"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"friday",children:Object(o.jsx)("h3",{children:"Friday"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"saturday",children:Object(o.jsx)("h3",{children:"Saturday"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"sunday",children:Object(o.jsx)("h3",{children:"Sunday"})})})]})})};var p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(r.a)(a,2),l=s[0],j=s[1],d=Object(c.useState)(""),b=Object(r.a)(d,2),u=b[0],h=b[1],x=Object(c.useState)(""),p=Object(r.a)(x,2),g=p[0],v=p[1],m=Object(c.useState)(""),f=Object(r.a)(m,2),y=f[0],C=f[1],S=Object(c.useState)(""),k=Object(r.a)(S,2),N=(k[0],k[1]),F=Object(c.useState)(""),_=Object(r.a)(F,2),T=(_[0],_[1]),P=Object(c.useState)({step1:""}),E=Object(r.a)(P,2),A=(E[0],E[1]),I=Object(O.g)();Object(c.useEffect)((function(){console.log(I.state.detail),console.log(I.state.detail.recipe_title),i(I.state.detail.recipe_title),j(I.state.detail.servings),h(I.state.detail.ready_in_mins),v(I.state.detail.recipe_img),C(I.state.detail.source_url),N(I.state.detail.dish_type),T(I.state.detail.ingredients),A(I.state.detail.instruction)}),[I]);var R=Object(O.f)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){R.push({pathname:"/Recipebox",state:{detail:I.state.detail}})},children:" Back "}),Object(o.jsx)("div",{className:"row",style:{backgroundImage:"url("+{recipeImg:g}+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(o.jsxs)("div",{className:"col",id:"left-side",children:[Object(o.jsx)("h1",{children:n}),Object(o.jsxs)("h4",{children:[" Serving Size: ",l]}),Object(o.jsxs)("h4",{children:[" Ready in: ",u," minutes"]}),Object(o.jsx)("a",{href:y,style:{color:"black"},children:" Link to Recipe's Original Website "})]})}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{})})]})};var g=function(){return Object(o.jsxs)(b.a,{children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"g-signin",children:Object(o.jsx)(d,{})}),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/Recipebox",children:Object(o.jsx)(x,{})}),Object(o.jsx)(O.a,{path:"/Recipepage",children:Object(o.jsx)(p,{})})]})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.aecc5121.chunk.js.map