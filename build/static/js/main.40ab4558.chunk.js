(this.webpackJsonpsign_auth=this.webpackJsonpsign_auth||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(24),i=c.n(s),o=(c(34),c(9)),l=(c(35),c(0)),r=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Plan your Mealboard!"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(o.b,{to:"/home",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Home"}),Object(l.jsx)(o.b,{to:"./About",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"About"}),Object(l.jsx)(o.b,{to:"./Contact",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Contact"}),Object(l.jsx)(o.b,{to:"./Recipebox",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Meal Board"})]})]})},j=c(2),d=c(15),b=function(){var e="",t="";return{getName:function(){return e},setName:function(t){e=t},getEmail:function(){return t},setEmail:function(e){t=e}}}(),u=(c(41),"155872235556-qnv8o7jgq3iiq4bgrire2100plc3u6lo.apps.googleusercontent.com"),O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENTID:"155872235556-qnv8o7jgq3iiq4bgrire2100plc3u6lo.apps.googleusercontent.com"}).REDIRECT_URI;var h=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],r=i[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),m=x[0],v=x[1],p=Object(n.useState)(!0),g=Object(j.a)(p,2),f=g[0],y=g[1],S=Object(n.useState)(!1),N=Object(j.a)(S,2),_=N[0],C=N[1],k=function(e){var t;console.log("Login Success:",e.profileObj),y(!1),C(!0),a(e.profileObj.name),r(e.profileObj.email),v(e.profileObj.imageUrl),b.setEmail(e.profileObj.email),b.setName(e.profileObj.name),t=e.profileObj.email,fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})})},w=function(e){console.log("Login Failed:",e)},T=Object(d.useGoogleLogin)({onSuccess:k,clientId:u,onFailure:w,redirectUri:O});return T.signIn,T.loaded,Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"user-info",children:[Object(l.jsx)("img",{src:m,atl:""}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("p",{children:o})]}),f?Object(l.jsx)(d.GoogleLogin,{clientId:u,buttonText:"Sign In",onSuccess:k,onFailure:w,cookiePolicy:"single_host_origin",isSignedIn:!0}):null,_?Object(l.jsx)(d.GoogleLogout,{clientId:u,buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),y(!0),C(!1)}}):null]})},x=(c(42),c.p+"static/media/logo.2f030522.png"),m=c.p+"static/media/meal.93aa57f2.png";var v=function(){return Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("img",{className:"logo",src:x,alt:"logo"})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h2",{children:" Meal Planning Made Easy"}),Object(l.jsx)("p",{children:" Are you in need of a weekly meal plan but can't seem to find one that fits you? The Culinary Army allows you browse through tons of weekly meal plan ideas to find one that suits you or you can create your own delicious meals customized to your preference. The possibilities are endless! "})]}),Object(l.jsx)("div",{class:"image2",children:Object(l.jsx)("img",{className:"meal",src:m,alt:"meal"})})]})]})},p=c.p+"static/media/coffee.a4f542aa.jpeg";c(43);var g=function(){return Object(l.jsxs)("div",{className:"About",children:[Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)("h2",{children:"We are the Culinary ARMY!"}),Object(l.jsx)("div",{className:"Container2",children:Object(l.jsx)("p",{children:"We provide the tools for creating a customizable meal plan board for all people so that planning ahead, saving money on groceries, eating better food, and having a less stressful cooking experience can all become a reality."})})]}),Object(l.jsx)("div",{className:"Photo",children:Object(l.jsx)("img",{className:"coffee",src:p,alt:"coffee"})})]})},f=(c(44),c(16));var y=function(){var e=Object(f.b)("xgerkwed"),t=Object(j.a)(e,2),c=t[0],n=t[1];return c.succeeded?Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsx)("img",{height:"100",width:"100",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png",alt:"smiling-emoji"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Thanks for your message! I will be contacting you if necessary"})]}):Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email : "}),Object(l.jsx)("input",{id:"email",type:"email",name:"email",required:!0,placeholder:"@example.com"}),Object(l.jsx)(f.a,{prefix:"Email",field:"email",errors:c.errors}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{required:!0,id:"message",name:"message",placeholder:"Enter your message here"}),Object(l.jsx)(f.a,{prefix:"Message",field:"message",errors:c.errors}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",disabled:c.submitting,children:"Send Message"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"contact_text",children:Object(l.jsx)("p",{children:"Let us know of any issues or suggestions!"})})]})},S=c(8),N=c(21),_=c(3);c(23);var C=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],r=i[1],d=Object(n.useState)([""]),u=Object(j.a)(d,2),O=u[0],h=u[1],x=Object(n.useState)([""]),m=Object(j.a)(x,2),v=m[0],p=m[1],g=Object(n.useState)(""),f=Object(j.a)(g,2),y=f[0],C=f[1],k=Object(n.useState)(""),w=Object(j.a)(k,2),T=w[0],E=w[1],P=Object(n.useState)([""]),A=Object(j.a)(P,2),I=A[0],R=A[1],M=Object(n.useState)([""]),F=Object(j.a)(M,2),L=F[0],D=F[1],J=Object(n.useState)([""]),V=Object(j.a)(J,2),W=V[0],G=V[1],q=Object(n.useState)([""]),B=Object(j.a)(q,2),K=B[0],U=B[1],H=Object(n.useState)([""]),z=Object(j.a)(H,2),Y=z[0],Q=z[1],X=Object(n.useState)([""]),Z=Object(j.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)([""]),ce=Object(j.a)(te,2),ne=ce[0],ae=ce[1],se=Object(n.useState)(""),ie=Object(j.a)(se,2),oe=ie[0],le=ie[1],re=Object(n.useState)(""),je=Object(j.a)(re,2),de=je[0],be=je[1],ue=Object(n.useState)(""),Oe=Object(j.a)(ue,2),he=Oe[0],xe=Oe[1],me=Object(n.useState)(""),ve=Object(j.a)(me,2),pe=ve[0],ge=ve[1],fe=Object(n.useState)(""),ye=Object(j.a)(fe,2),Se=ye[0],Ne=ye[1],_e=Object(n.useState)(""),Ce=Object(j.a)(_e,2),ke=Ce[0],we=Ce[1],Te=Object(n.useState)(""),Ee=Object(j.a)(Te,2),Pe=Ee[0],Ae=Ee[1],Ie=Object(n.useState)({}),Re=Object(j.a)(Ie,2),Me=Re[0],Fe=Re[1],Le=Object(n.useState)({}),De=Object(j.a)(Le,2),Je=De[0],Ve=De[1],We=Object(n.useState)(!1),Ge=Object(j.a)(We,2),qe=Ge[0],Be=Ge[1],Ke=Object(n.useState)(!1),Ue=Object(j.a)(Ke,2),He=(Ue[0],Ue[1]),ze=Object(n.useState)(!1),Ye=Object(j.a)(ze,2),Qe=Ye[0],Xe=Ye[1],Ze=Object(n.useState)(!1),$e=Object(j.a)(Ze,2),et=$e[0],tt=$e[1],ct=Object(n.useState)(),nt=Object(j.a)(ct,2),at=nt[0],st=nt[1],it=Object(n.useState)(""),ot=Object(j.a)(it,2),lt=(ot[0],ot[1]),rt=Object(n.useState)(""),jt=Object(j.a)(rt,2),dt=jt[0],bt=jt[1],ut=Object(n.useState)(""),Ot=Object(j.a)(ut,2),ht=Ot[0],xt=Ot[1],mt=Object(n.useState)(""),vt=Object(j.a)(mt,2),pt=vt[0],gt=vt[1];function ft(e){console.log(e),""!==e&&r([e]),Be(!1),He(!1),Xe(!1),tt(!1),lt(""),bt(""),gt(""),st("")}function yt(){r(""),a(""),p([""]),h([""]),Be(!1),He(!1),Xe(!1),tt(!1),gt("")}function St(){fetch("/getsuggestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchCritria:o,searchType:c})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?(console.log("error"),gt(e.error)):(h([].concat(Object(N.a)(O),[e.key])),p([].concat(Object(N.a)(v),[e.value])),Be(!1),He(!1),Xe(!1),tt(!1),gt(""),st(""))}))}Object(n.useEffect)((function(){fetch("/connectDB",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),R(e.mon_name),le(e.mon_ids),D(e.tues_name),be(e.tues_ids),G(e.wed_name),xe(e.wed_ids),U(e.thur_name),ge(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids)}))}),[]);var Nt=Object(_.f)();function _t(e){console.log(e),fetch("/recipepage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),C(e)}))}function Ct(e){console.log(e),console.log(T),Fe({}),Me[v[e]]=T,Fe(Me),console.log(v[e]),Ve(O[e]),gt("")}var kt,wt=[],Tt=Object(S.a)(O.entries());try{for(Tt.s();!(kt=Tt.n()).done;){var Et=Object(j.a)(kt.value,2),Pt=Et[0],At=Et[1];At&&wt.push(Object(l.jsx)("div",{children:Object(l.jsxs)("button",{style:at===Pt+"b"?{backgroundColor:"red"}:{},className:"recipe-button",value:At,onClick:function(e){_t(v[Pt]),st(Pt+"b"),Ct(Pt)},children:[" ",At]})}))}}catch(lc){Tt.e(lc)}finally{Tt.f()}var It=[];b.getName()&&It.push(Object(l.jsxs)("h1",{children:[" ",b.getName(),"'s Mealboard"]}));var Rt,Mt=[],Ft=Object(S.a)(I.entries());try{var Lt=function(){var e=Object(j.a)(Rt.value,2),t=e[0],c=e[1];Mt.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"m"?{backgroundColor:"red"}:{},value:oe[t],onClick:function(e){_t(e.target.value),st(t+"m"),xt(e.target.value)},children:c}))};for(Ft.s();!(Rt=Ft.n()).done;)Lt()}catch(lc){Ft.e(lc)}finally{Ft.f()}var Dt,Jt=[],Vt=Object(S.a)(L.entries());try{var Wt=function(){var e=Object(j.a)(Dt.value,2),t=e[0],c=e[1];Jt.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"t"?{backgroundColor:"red"}:{},value:de[t],onClick:function(e){_t(e.target.value),st(t+"t"),xt(e.target.value)},children:c}))};for(Vt.s();!(Dt=Vt.n()).done;)Wt()}catch(lc){Vt.e(lc)}finally{Vt.f()}var Gt,qt=[],Bt=Object(S.a)(W.entries());try{var Kt=function(){var e=Object(j.a)(Gt.value,2),t=e[0],c=e[1];qt.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"w"?{backgroundColor:"red"}:{},value:he[t],onClick:function(e){_t(e.target.value),st(t+"w"),xt(e.target.value)},children:c}))};for(Bt.s();!(Gt=Bt.n()).done;)Kt()}catch(lc){Bt.e(lc)}finally{Bt.f()}var Ut,Ht=[],zt=Object(S.a)(K.entries());try{var Yt=function(){var e=Object(j.a)(Ut.value,2),t=e[0],c=e[1];Ht.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"th"?{backgroundColor:"red"}:{},value:pe[t],onClick:function(e){_t(e.target.value),st(t+"th"),xt(e.target.value)},children:c}))};for(zt.s();!(Ut=zt.n()).done;)Yt()}catch(lc){zt.e(lc)}finally{zt.f()}var Qt,Xt=[],Zt=Object(S.a)(Y.entries());try{var $t=function(){var e=Object(j.a)(Qt.value,2),t=e[0],c=e[1];Xt.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"f"?{backgroundColor:"red"}:{},value:Se[t],onClick:function(e){_t(e.target.value),st(t+"f"),xt(e.target.value)},children:c}))};for(Zt.s();!(Qt=Zt.n()).done;)$t()}catch(lc){Zt.e(lc)}finally{Zt.f()}var ec,tc=[],cc=Object(S.a)($.entries());try{var nc=function(){var e=Object(j.a)(ec.value,2),t=e[0],c=e[1];tc.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"s"?{backgroundColor:"red"}:{},value:ke[t],onClick:function(e){_t(e.target.value),st(t+"s"),xt(e.target.value)},children:c}))};for(cc.s();!(ec=cc.n()).done;)nc()}catch(lc){cc.e(lc)}finally{cc.f()}var ac,sc=[],ic=Object(S.a)(ne.entries());try{var oc=function(){var e=Object(j.a)(ac.value,2),t=e[0],c=e[1];sc.push(Object(l.jsx)("button",{className:"sug-but",style:at===t+"sn"?{backgroundColor:"red"}:{},value:Pe[t],onClick:function(e){_t(e.target.value),st(t+"sn"),xt(e.target.value)},children:c}))};for(ic.s();!(ac=ic.n()).done;)oc()}catch(lc){ic.e(lc)}finally{ic.f()}return Object(l.jsxs)("div",{className:"box",children:[It,Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"recipe_search_box",children:[Object(l.jsx)("h1",{children:"Search For Recipes"}),Object(l.jsxs)("div",{className:"by_ingreds",children:[Object(l.jsx)("input",{onClick:function(){a("ingredients"),Be(!0)},checked:qe,type:"checkbox",name:"ingreds",value:"Search by Ingredients"}),Object(l.jsx)("label",{id:"ingredients",className:"label-header",htmlFor:"ingreds",children:"Search by Ingredients"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"",children:"Enter Ingredient"}),Object(l.jsx)("input",{"data-testid":"Enter_Ingredient",value:dt,on:!0,onChangeCapture:function(e){ft(e.target.value),bt(e.target.value)},id:"ingreds",type:"text"}),Object(l.jsxs)("p",{children:[" ",pt," "]}),Object(l.jsx)("button",{onClick:St,children:"Add Ingredients"}),Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"by_diet",children:[Object(l.jsx)("input",{onClick:function(){a("diet"),Xe(!0)},checked:Qe,type:"checkbox",name:"diet",value:"Search by Diet"}),Object(l.jsx)("label",{className:"label-header",htmlFor:"diet",children:"Search by Diet"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"drop-diet",children:Object(l.jsxs)("select",{onChange:function(e){return ft(e.target.value)},id:"diet",name:"",placeholder:" ",children:[Object(l.jsx)("option",{value:"default",children:" Pick Diet "}),Object(l.jsx)("option",{value:"Gluten Free",children:"Gluten Free"}),Object(l.jsx)("option",{value:"Ketogenic",children:"Ketogenic"}),Object(l.jsx)("option",{value:"Vegetarian",children:"Vegetarian"}),Object(l.jsx)("option",{value:"Lacto-Vegetarian",children:"Lacto-Vegetarian"}),Object(l.jsx)("option",{value:"Ovo-Vegetarian",children:"Ovo-Vegetarian"}),Object(l.jsx)("option",{value:"Vegan",children:"Vegan"}),Object(l.jsx)("option",{value:"Pescetarian",children:"Pescetarian"}),Object(l.jsx)("option",{value:"Paleo",children:"Paleo"}),Object(l.jsx)("option",{value:"Primal",children:"Primal"}),Object(l.jsx)("option",{value:"Low FODMAP",children:"Low FODMAP"}),Object(l.jsx)("option",{value:"Whole30",children:"Whole30"})]})}),Object(l.jsx)("button",{onClick:St,children:"Add Diet"})]}),Object(l.jsxs)("div",{className:"by_cuisine",children:[Object(l.jsx)("input",{onClick:function(){a("cuisine"),tt(!0)},checked:et,type:"checkbox",name:"cuisine",value:"Search by Cuisine"}),Object(l.jsx)("label",{className:"label-header",htmlFor:"cuisine",children:"Search by Cuisine"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"drop-cuisine",children:Object(l.jsxs)("select",{onChange:function(e){return ft(e.target.value)},id:"cuisine",name:"",children:[Object(l.jsx)("option",{value:"default",children:" Pick Cuisine "}),Object(l.jsx)("option",{value:"African",children:"African"}),Object(l.jsx)("option",{value:"American",children:"American"}),Object(l.jsx)("option",{value:"British",children:"British"}),Object(l.jsx)("option",{value:"Cajun",children:"Cajun"}),Object(l.jsx)("option",{value:"Caribbean",children:"Caribbean"}),Object(l.jsx)("option",{value:"Eastern European",children:"Eastern European"}),Object(l.jsx)("option",{value:"European",children:"European"}),Object(l.jsx)("option",{value:"French",children:"French"}),Object(l.jsx)("option",{value:"German",children:"German"}),Object(l.jsx)("option",{value:"Greek",children:"Greek"}),Object(l.jsx)("option",{value:"Indian",children:"Indian"}),Object(l.jsx)("option",{value:"Irish",children:"Irish"}),Object(l.jsx)("option",{value:"Italian",children:"Italian"}),Object(l.jsx)("option",{value:"Japanese",children:"Japanese"}),Object(l.jsx)("option",{value:"Jewish",children:"Jewish"}),Object(l.jsx)("option",{value:"Korean",children:"Korean"}),Object(l.jsx)("option",{value:"Latin American",children:"Latin American"}),Object(l.jsx)("option",{value:"Mediterranean",children:"Mediterranean"}),Object(l.jsx)("option",{value:"Mexican",children:"Mexican"}),Object(l.jsx)("option",{value:"Middle Eastern",children:"Middle Eastern"}),Object(l.jsx)("option",{value:"Nordic",children:"Nordic"}),Object(l.jsx)("option",{value:"Southern",children:"Southern"}),Object(l.jsx)("option",{value:"Spanish",children:"Spanish"}),Object(l.jsx)("option",{value:"Thai",children:"Thai"}),Object(l.jsx)("option",{value:"Vietnamese",children:"Vietnamese"})]})}),Object(l.jsx)("button",{onClick:St,children:"Add Cuisine"}),Object(l.jsx)("button",{onClick:yt,children:" Clear Suggestions"})]})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"suggestion-box",children:[Object(l.jsx)("h3",{children:"Suggestion Box"}),Object(l.jsx)("div",{className:"add-to-mb",children:Object(l.jsxs)("select",{onChange:function(e){return E(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:" Pick Day "}),Object(l.jsx)("option",{value:"1",children:"Monday"}),Object(l.jsx)("option",{value:"2",children:"Tuesday"}),Object(l.jsx)("option",{value:"3",children:"Wednesday"}),Object(l.jsx)("option",{value:"4",children:"Thursday"}),Object(l.jsx)("option",{value:"5",children:"Friday"}),Object(l.jsx)("option",{value:"6",children:"Saturday"}),Object(l.jsx)("option",{value:"7",children:"Sunday"})]})}),wt,Object(l.jsx)("button",{onClick:function(){console.log(Me),console.log(Je),fetch("/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({update:Me,title:Je})}).then((function(e){return e.json()})).then((function(e){console.log(e),E(""),Fe({}),Ve(""),R(e.mon_name),le(e.mon_ids),D(e.tues_name),be(e.tues_ids),G(e.wed_name),xe(e.wed_ids),U(e.thur_name),ge(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids),gt(""),st(""),p([""]),h([""])}))},children:"Add"})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"monday",children:[Object(l.jsx)("h3",{children:"Monday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:Mt})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"tuesday",children:[Object(l.jsx)("h3",{children:"Tuesday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:Jt})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"wednesday",children:[Object(l.jsx)("h3",{children:"Wednesday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:qt})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"thursday",children:[Object(l.jsx)("h3",{children:"Thursday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:Ht})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"friday",children:[Object(l.jsx)("h3",{children:"Friday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:Xt})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"saturday",children:[Object(l.jsx)("h3",{children:"Saturday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:tc})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"sunday",children:[Object(l.jsx)("h3",{children:"Sunday"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"row-top",children:sc})})]})})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){fetch("/reset",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),R(e.mon_name),le(e.mon_ids),D(e.tues_name),be(e.tues_ids),G(e.wed_name),xe(e.wed_ids),U(e.thur_name),ge(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids),gt(""),yt()}))},children:"Reset Mealboard"}),Object(l.jsx)("button",{onClick:function(){Nt.push({pathname:"/Recipepage",state:{detail:y}})},children:"Go to Recipe page!"}),Object(l.jsx)("button",{onClick:function(){fetch("/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({delete:ht})}).then((function(e){return e.json()})).then((function(e){console.log(e),R(e.mon_name),le(e.mon_ids),D(e.tues_name),be(e.tues_ids),G(e.wed_name),xe(e.wed_ids),U(e.thur_name),ge(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids)}))},children:" Delete Recipe"})]})]})};var k=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],r=i[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),u=b[0],O=b[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),m=x[0],v=x[1],p=Object(n.useState)(""),g=Object(j.a)(p,2),f=g[0],y=g[1],N=Object(n.useState)([]),C=Object(j.a)(N,2),k=C[0],w=C[1],T=Object(n.useState)([]),E=Object(j.a)(T,2),P=E[0],A=E[1],I=Object(n.useState)(""),R=Object(j.a)(I,2),M=R[0],F=R[1],L=Object(n.useState)(""),D=Object(j.a)(L,2),J=D[0],V=D[1],W=Object(n.useState)({}),G=Object(j.a)(W,2),q=G[0],B=G[1],K=Object(n.useState)(""),U=Object(j.a)(K,2),H=U[0],z=U[1],Y=Object(_.g)();Object(n.useEffect)((function(){console.log(Y.state.detail),console.log(Y.state.detail.recipe_title),a(Y.state.detail.recipe_title),r(Y.state.detail.servings),O(Y.state.detail.ready_in_mins),v(Y.state.detail.recipe_img),y(Y.state.detail.source_url),w(Y.state.detail.ingredients),A(Y.state.detail.instructions),V(Y.state.detail.id)}),[Y]);var Q,X=Object(_.f)(),Z=[],$=Object(S.a)(k.entries());try{for($.s();!(Q=$.n()).done;){var ee=Object(j.a)(Q.value,2),te=ee[0],ce=ee[1];Z.push(Object(l.jsx)("li",{children:ce},te))}}catch(ne){$.e(ne)}finally{$.f()}return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){X.push({pathname:"/Recipebox",state:{detail:Y.state.detail}})},children:" Back To Mealboard"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col",id:"left-side",children:[Object(l.jsx)("h1",{children:c}),Object(l.jsxs)("h4",{children:[" Serving Size: ",o]}),Object(l.jsx)("img",{src:m}),Object(l.jsxs)("h4",{children:[" Ready in: ",u," minutes"]}),Object(l.jsx)("a",{href:f,style:{color:"black"},children:" Link to Recipe's Original Website "}),Object(l.jsxs)("div",{className:"add-to-mb",children:[Object(l.jsxs)("select",{onChange:function(e){return F(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:" Pick Day "}),Object(l.jsx)("option",{value:"1",children:"Monday"}),Object(l.jsx)("option",{value:"2",children:"Tuesday"}),Object(l.jsx)("option",{value:"3",children:"Wednesday"}),Object(l.jsx)("option",{value:"4",children:"Thursday"}),Object(l.jsx)("option",{value:"5",children:"Friday"}),Object(l.jsx)("option",{value:"6",children:"Saturday"}),Object(l.jsx)("option",{value:"7",children:"Sunday"})]}),Object(l.jsx)("button",{onClick:function(){q[J]=M,B(q),fetch("/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({update:q,title:c})}).then((function(e){return e.json()})).then((function(e){console.log(e),z("Recipe Added!")}))},children:"Add recipe!"}),Object(l.jsx)("p",{children:H})]})]})}),Object(l.jsx)("h3",{children:" Ingredients "}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:Z})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:P.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[" Step ",t+1,": ",e]}),Object(l.jsx)("br",{})]})}))}),Object(l.jsx)("footer",{})]})};var w=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(r,{}),Object(l.jsx)("div",{className:"g-signin",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(_.c,{children:[Object(l.jsx)(_.a,{exact:!0,path:"/home",children:Object(l.jsx)(v,{})}),Object(l.jsx)(_.a,{path:"/Recipebox",children:Object(l.jsx)(C,{})}),Object(l.jsx)(_.a,{path:"/Recipepage",children:Object(l.jsx)(k,{})}),Object(l.jsx)(_.a,{path:"/About",children:Object(l.jsx)(g,{})}),Object(l.jsx)(_.a,{path:"/Contact",children:Object(l.jsx)(y,{})})]})})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.40ab4558.chunk.js.map