(this.webpackJsonpsign_auth=this.webpackJsonpsign_auth||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(24),i=c.n(s),l=(c(34),c(9)),o=(c(35),c(0)),r=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{children:"Plan your Mealboard!"}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(l.b,{to:"/home",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Home"}),Object(o.jsx)(l.b,{to:"./About",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"About"}),Object(o.jsx)(l.b,{to:"./Contact",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Contact"}),Object(o.jsx)(l.b,{to:"./Recipebox",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Meal Board"})]})]})},j=c(2),d=c(20),b=function(){var e="",t="";return{getName:function(){return e},setName:function(t){e=t},getEmail:function(){return t},setEmail:function(e){t=e}}}(),u=(c(41),"69284526082-9hmejol4gc3pdeuk7pbb7kimf5n3sj77.apps.googleusercontent.com"),O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENTID:"69284526082-9hmejol4gc3pdeuk7pbb7kimf5n3sj77.apps.googleusercontent.com"}).REDIRECT_URI;var h=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),l=i[0],r=i[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),m=x[0],p=x[1],v=Object(n.useState)(!0),f=Object(j.a)(v,2),g=f[0],y=f[1],S=Object(n.useState)(!1),N=Object(j.a)(S,2),_=N[0],C=N[1],k=Object(d.useGoogleLogin)({onSuccess:function(e){var t;console.log("Login Success:",e.profileObj),y(!1),C(!0),a(e.profileObj.name),r(e.profileObj.email),p(e.profileObj.imageUrl),b.setEmail(e.profileObj.email),b.setName(e.profileObj.name),t=e.profileObj.email,fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})})},clientId:u,onFailure:function(e){console.log("Login Failed:",e)},redirectUri:O}),w=k.signIn;return k.loaded,Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"user-info",children:[Object(o.jsx)("img",{src:m,atl:""}),Object(o.jsx)("p",{children:c}),Object(o.jsx)("p",{children:l})]}),g?Object(o.jsx)("button",{onClick:w,children:"Button"}):null,_?Object(o.jsx)(d.GoogleLogout,{clientId:u,buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),y(!0),C(!1)}}):null]})},x=(c(42),c.p+"static/media/logo.70795eba.png"),m=c.p+"static/media/meal.93aa57f2.png";var p=function(){return Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{className:"logo",src:x,alt:"logo"})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"text",children:[Object(o.jsx)("h2",{children:" Meal Planning Made Easy"}),Object(o.jsx)("p",{children:" Are you in need of a weekly meal plan but can't seem to find one that fits you? The Culinary Army allows you browse through tons of weekly meal plan ideas to find one that suits you or you can create your own delicious meals customized to your preference. The possibilities are endless! "})]}),Object(o.jsx)("div",{class:"image2",children:Object(o.jsx)("img",{className:"meal",src:m,alt:"meal"})})]})]})},v=c.p+"static/media/coffee.a4f542aa.jpeg";c(43);var f=function(){return Object(o.jsxs)("div",{className:"About",children:[Object(o.jsxs)("div",{className:"Container",children:[Object(o.jsx)("h2",{children:"We are the Culinary ARMY!"}),Object(o.jsx)("div",{className:"Container2",children:Object(o.jsx)("p",{children:"We provide the tools for creating a customizable meal plan board for all people so that planning ahead, saving money on groceries, eating better food, and having a less stressful cooking experience can all become a reality."})})]}),Object(o.jsx)("div",{className:"Photo",children:Object(o.jsx)("img",{className:"coffee",src:v,alt:"coffee"})})]})},g=(c(44),c(15));var y=function(){var e=Object(g.b)("xgerkwed"),t=Object(j.a)(e,2),c=t[0],n=t[1];return c.succeeded?Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsx)("img",{height:"100",width:"100",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png",alt:"smiling-emoji"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Thanks for your message! I will be contacting you if necessary"})]}):Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email : "}),Object(o.jsx)("input",{id:"email",type:"email",name:"email",required:!0,placeholder:"@example.com"}),Object(o.jsx)(g.a,{prefix:"Email",field:"email",errors:c.errors}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{required:!0,id:"message",name:"message",placeholder:"Enter your message here"}),Object(o.jsx)(g.a,{prefix:"Message",field:"message",errors:c.errors}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",disabled:c.submitting,children:"Send Message"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"contact_text",children:Object(o.jsx)("p",{children:"Let us know of any issues or suggestions!"})})]})},S=c(8),N=c(21),_=c(3);c(23);var C=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),l=i[0],r=i[1],d=Object(n.useState)([""]),u=Object(j.a)(d,2),O=u[0],h=u[1],x=Object(n.useState)([""]),m=Object(j.a)(x,2),p=m[0],v=m[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),y=g[0],C=g[1],k=Object(n.useState)(""),w=Object(j.a)(k,2),T=w[0],E=w[1],P=Object(n.useState)([""]),A=Object(j.a)(P,2),R=A[0],I=A[1],M=Object(n.useState)([""]),F=Object(j.a)(M,2),D=F[0],L=F[1],J=Object(n.useState)([""]),V=Object(j.a)(J,2),W=V[0],B=V[1],G=Object(n.useState)([""]),K=Object(j.a)(G,2),U=K[0],H=K[1],z=Object(n.useState)([""]),q=Object(j.a)(z,2),Y=q[0],Q=q[1],X=Object(n.useState)([""]),Z=Object(j.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)([""]),ce=Object(j.a)(te,2),ne=ce[0],ae=ce[1],se=Object(n.useState)(""),ie=Object(j.a)(se,2),le=ie[0],oe=ie[1],re=Object(n.useState)(""),je=Object(j.a)(re,2),de=je[0],be=je[1],ue=Object(n.useState)(""),Oe=Object(j.a)(ue,2),he=Oe[0],xe=Oe[1],me=Object(n.useState)(""),pe=Object(j.a)(me,2),ve=pe[0],fe=pe[1],ge=Object(n.useState)(""),ye=Object(j.a)(ge,2),Se=ye[0],Ne=ye[1],_e=Object(n.useState)(""),Ce=Object(j.a)(_e,2),ke=Ce[0],we=Ce[1],Te=Object(n.useState)(""),Ee=Object(j.a)(Te,2),Pe=Ee[0],Ae=Ee[1],Re=Object(n.useState)({}),Ie=Object(j.a)(Re,2),Me=Ie[0],Fe=Ie[1],De=Object(n.useState)({}),Le=Object(j.a)(De,2),Je=Le[0],Ve=Le[1],We=Object(n.useState)(!1),Be=Object(j.a)(We,2),Ge=Be[0],Ke=Be[1],Ue=Object(n.useState)(!1),He=Object(j.a)(Ue,2),ze=(He[0],He[1]),qe=Object(n.useState)(!1),Ye=Object(j.a)(qe,2),Qe=Ye[0],Xe=Ye[1],Ze=Object(n.useState)(!1),$e=Object(j.a)(Ze,2),et=$e[0],tt=$e[1],ct=Object(n.useState)(),nt=Object(j.a)(ct,2),at=nt[0],st=nt[1],it=Object(n.useState)(""),lt=Object(j.a)(it,2),ot=(lt[0],lt[1]),rt=Object(n.useState)(""),jt=Object(j.a)(rt,2),dt=jt[0],bt=jt[1],ut=Object(n.useState)(""),Ot=Object(j.a)(ut,2),ht=Ot[0],xt=Ot[1],mt=Object(n.useState)(""),pt=Object(j.a)(mt,2),vt=pt[0],ft=pt[1];function gt(e){console.log(e),""!==e&&r([e]),Ke(!1),ze(!1),Xe(!1),tt(!1),ot(""),bt(""),ft(""),st("")}function yt(){r(""),a(""),v([""]),h([""]),Ke(!1),ze(!1),Xe(!1),tt(!1),ft("")}function St(){fetch("/getsuggestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchCritria:l,searchType:c})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?(console.log("error"),ft(e.error)):(h([].concat(Object(N.a)(O),[e.key])),v([].concat(Object(N.a)(p),[e.value])),Ke(!1),ze(!1),Xe(!1),tt(!1),ft(""),st(""))}))}Object(n.useEffect)((function(){fetch("/connectDB",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),I(e.mon_name),oe(e.mon_ids),L(e.tues_name),be(e.tues_ids),B(e.wed_name),xe(e.wed_ids),H(e.thur_name),fe(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids)}))}),[]);var Nt=Object(_.f)();function _t(e){console.log(e),fetch("/recipepage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),C(e)}))}function Ct(e){console.log(e),console.log(T),Fe({}),Me[p[e]]=T,Fe(Me),console.log(p[e]),Ve(O[e]),ft("")}var kt,wt=[],Tt=Object(S.a)(O.entries());try{for(Tt.s();!(kt=Tt.n()).done;){var Et=Object(j.a)(kt.value,2),Pt=Et[0],At=Et[1];At&&wt.push(Object(o.jsx)("div",{children:Object(o.jsxs)("button",{style:at===Pt+"b"?{backgroundColor:"red"}:{},className:"recipe-button",value:At,onClick:function(e){_t(p[Pt]),st(Pt+"b"),Ct(Pt)},children:[" ",At]})}))}}catch(oc){Tt.e(oc)}finally{Tt.f()}var Rt=[];b.getName()&&Rt.push(Object(o.jsxs)("h1",{children:[" ",b.getName(),"'s Mealboard"]}));var It,Mt=[],Ft=Object(S.a)(R.entries());try{var Dt=function(){var e=Object(j.a)(It.value,2),t=e[0],c=e[1];Mt.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"m"?{backgroundColor:"red"}:{},value:le[t],onClick:function(e){_t(e.target.value),st(t+"m"),xt(e.target.value)},children:c}))};for(Ft.s();!(It=Ft.n()).done;)Dt()}catch(oc){Ft.e(oc)}finally{Ft.f()}var Lt,Jt=[],Vt=Object(S.a)(D.entries());try{var Wt=function(){var e=Object(j.a)(Lt.value,2),t=e[0],c=e[1];Jt.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"t"?{backgroundColor:"red"}:{},value:de[t],onClick:function(e){_t(e.target.value),st(t+"t"),xt(e.target.value)},children:c}))};for(Vt.s();!(Lt=Vt.n()).done;)Wt()}catch(oc){Vt.e(oc)}finally{Vt.f()}var Bt,Gt=[],Kt=Object(S.a)(W.entries());try{var Ut=function(){var e=Object(j.a)(Bt.value,2),t=e[0],c=e[1];Gt.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"w"?{backgroundColor:"red"}:{},value:he[t],onClick:function(e){_t(e.target.value),st(t+"w"),xt(e.target.value)},children:c}))};for(Kt.s();!(Bt=Kt.n()).done;)Ut()}catch(oc){Kt.e(oc)}finally{Kt.f()}var Ht,zt=[],qt=Object(S.a)(U.entries());try{var Yt=function(){var e=Object(j.a)(Ht.value,2),t=e[0],c=e[1];zt.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"th"?{backgroundColor:"red"}:{},value:ve[t],onClick:function(e){_t(e.target.value),st(t+"th"),xt(e.target.value)},children:c}))};for(qt.s();!(Ht=qt.n()).done;)Yt()}catch(oc){qt.e(oc)}finally{qt.f()}var Qt,Xt=[],Zt=Object(S.a)(Y.entries());try{var $t=function(){var e=Object(j.a)(Qt.value,2),t=e[0],c=e[1];Xt.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"f"?{backgroundColor:"red"}:{},value:Se[t],onClick:function(e){_t(e.target.value),st(t+"f"),xt(e.target.value)},children:c}))};for(Zt.s();!(Qt=Zt.n()).done;)$t()}catch(oc){Zt.e(oc)}finally{Zt.f()}var ec,tc=[],cc=Object(S.a)($.entries());try{var nc=function(){var e=Object(j.a)(ec.value,2),t=e[0],c=e[1];tc.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"s"?{backgroundColor:"red"}:{},value:ke[t],onClick:function(e){_t(e.target.value),st(t+"s"),xt(e.target.value)},children:c}))};for(cc.s();!(ec=cc.n()).done;)nc()}catch(oc){cc.e(oc)}finally{cc.f()}var ac,sc=[],ic=Object(S.a)(ne.entries());try{var lc=function(){var e=Object(j.a)(ac.value,2),t=e[0],c=e[1];sc.push(Object(o.jsx)("button",{className:"sug-but",style:at===t+"sn"?{backgroundColor:"red"}:{},value:Pe[t],onClick:function(e){_t(e.target.value),st(t+"sn"),xt(e.target.value)},children:c}))};for(ic.s();!(ac=ic.n()).done;)lc()}catch(oc){ic.e(oc)}finally{ic.f()}return Object(o.jsxs)("div",{className:"box",children:[Rt,Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"recipe_search_box",children:[Object(o.jsx)("h1",{children:"Search For Recipes"}),Object(o.jsxs)("div",{className:"by_ingreds",children:[Object(o.jsx)("input",{onClick:function(){a("ingredients"),Ke(!0)},checked:Ge,type:"checkbox",name:"ingreds",value:"Search by Ingredients"}),Object(o.jsx)("label",{id:"ingredients",className:"label-header",htmlFor:"ingreds",children:"Search by Ingredients"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"",children:"Enter Ingredient"}),Object(o.jsx)("input",{"data-testid":"Enter_Ingredient",value:dt,on:!0,onChangeCapture:function(e){gt(e.target.value),bt(e.target.value)},id:"ingreds",type:"text"}),Object(o.jsxs)("p",{children:[" ",vt," "]}),Object(o.jsx)("button",{onClick:St,children:"Add Ingredients"}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"by_diet",children:[Object(o.jsx)("input",{onClick:function(){a("diet"),Xe(!0)},checked:Qe,type:"checkbox",name:"diet",value:"Search by Diet"}),Object(o.jsx)("label",{className:"label-header",htmlFor:"diet",children:"Search by Diet"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"drop-diet",children:Object(o.jsxs)("select",{onChange:function(e){return gt(e.target.value)},id:"diet",name:"",placeholder:" ",children:[Object(o.jsx)("option",{value:"default",children:" Pick Diet "}),Object(o.jsx)("option",{value:"Gluten Free",children:"Gluten Free"}),Object(o.jsx)("option",{value:"Ketogenic",children:"Ketogenic"}),Object(o.jsx)("option",{value:"Vegetarian",children:"Vegetarian"}),Object(o.jsx)("option",{value:"Lacto-Vegetarian",children:"Lacto-Vegetarian"}),Object(o.jsx)("option",{value:"Ovo-Vegetarian",children:"Ovo-Vegetarian"}),Object(o.jsx)("option",{value:"Vegan",children:"Vegan"}),Object(o.jsx)("option",{value:"Pescetarian",children:"Pescetarian"}),Object(o.jsx)("option",{value:"Paleo",children:"Paleo"}),Object(o.jsx)("option",{value:"Primal",children:"Primal"}),Object(o.jsx)("option",{value:"Low FODMAP",children:"Low FODMAP"}),Object(o.jsx)("option",{value:"Whole30",children:"Whole30"})]})}),Object(o.jsx)("button",{onClick:St,children:"Add Diet"})]}),Object(o.jsxs)("div",{className:"by_cuisine",children:[Object(o.jsx)("input",{onClick:function(){a("cuisine"),tt(!0)},checked:et,type:"checkbox",name:"cuisine",value:"Search by Cuisine"}),Object(o.jsx)("label",{className:"label-header",htmlFor:"cuisine",children:"Search by Cuisine"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"drop-cuisine",children:Object(o.jsxs)("select",{onChange:function(e){return gt(e.target.value)},id:"cuisine",name:"",children:[Object(o.jsx)("option",{value:"default",children:" Pick Cuisine "}),Object(o.jsx)("option",{value:"African",children:"African"}),Object(o.jsx)("option",{value:"American",children:"American"}),Object(o.jsx)("option",{value:"British",children:"British"}),Object(o.jsx)("option",{value:"Cajun",children:"Cajun"}),Object(o.jsx)("option",{value:"Caribbean",children:"Caribbean"}),Object(o.jsx)("option",{value:"Eastern European",children:"Eastern European"}),Object(o.jsx)("option",{value:"European",children:"European"}),Object(o.jsx)("option",{value:"French",children:"French"}),Object(o.jsx)("option",{value:"German",children:"German"}),Object(o.jsx)("option",{value:"Greek",children:"Greek"}),Object(o.jsx)("option",{value:"Indian",children:"Indian"}),Object(o.jsx)("option",{value:"Irish",children:"Irish"}),Object(o.jsx)("option",{value:"Italian",children:"Italian"}),Object(o.jsx)("option",{value:"Japanese",children:"Japanese"}),Object(o.jsx)("option",{value:"Jewish",children:"Jewish"}),Object(o.jsx)("option",{value:"Korean",children:"Korean"}),Object(o.jsx)("option",{value:"Latin American",children:"Latin American"}),Object(o.jsx)("option",{value:"Mediterranean",children:"Mediterranean"}),Object(o.jsx)("option",{value:"Mexican",children:"Mexican"}),Object(o.jsx)("option",{value:"Middle Eastern",children:"Middle Eastern"}),Object(o.jsx)("option",{value:"Nordic",children:"Nordic"}),Object(o.jsx)("option",{value:"Southern",children:"Southern"}),Object(o.jsx)("option",{value:"Spanish",children:"Spanish"}),Object(o.jsx)("option",{value:"Thai",children:"Thai"}),Object(o.jsx)("option",{value:"Vietnamese",children:"Vietnamese"})]})}),Object(o.jsx)("button",{onClick:St,children:"Add Cuisine"}),Object(o.jsx)("button",{onClick:yt,children:" Clear Suggestions"})]})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"suggestion-box",children:[Object(o.jsx)("h3",{children:"Suggestion Box"}),Object(o.jsx)("div",{className:"add-to-mb",children:Object(o.jsxs)("select",{onChange:function(e){return E(e.target.value)},children:[Object(o.jsx)("option",{value:"default",children:" Pick Day "}),Object(o.jsx)("option",{value:"1",children:"Monday"}),Object(o.jsx)("option",{value:"2",children:"Tuesday"}),Object(o.jsx)("option",{value:"3",children:"Wednesday"}),Object(o.jsx)("option",{value:"4",children:"Thursday"}),Object(o.jsx)("option",{value:"5",children:"Friday"}),Object(o.jsx)("option",{value:"6",children:"Saturday"}),Object(o.jsx)("option",{value:"7",children:"Sunday"})]})}),wt,Object(o.jsx)("button",{onClick:function(){console.log(Me),console.log(Je),fetch("/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({update:Me,title:Je})}).then((function(e){return e.json()})).then((function(e){console.log(e),E(""),Fe({}),Ve(""),I(e.mon_name),oe(e.mon_ids),L(e.tues_name),be(e.tues_ids),B(e.wed_name),xe(e.wed_ids),H(e.thur_name),fe(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids),ft(""),st(""),v([""]),h([""])}))},children:"Add"})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"monday",children:[Object(o.jsx)("h3",{children:"Monday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:Mt})})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"tuesday",children:[Object(o.jsx)("h3",{children:"Tuesday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:Jt})})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"wednesday",children:[Object(o.jsx)("h3",{children:"Wednesday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:Gt})})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"thursday",children:[Object(o.jsx)("h3",{children:"Thursday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:zt})})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"friday",children:[Object(o.jsx)("h3",{children:"Friday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:Xt})})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"saturday",children:[Object(o.jsx)("h3",{children:"Saturday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:tc})})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"sunday",children:[Object(o.jsx)("h3",{children:"Sunday"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"row-top",children:sc})})]})})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){fetch("/reset",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),I(e.mon_name),oe(e.mon_ids),L(e.tues_name),be(e.tues_ids),B(e.wed_name),xe(e.wed_ids),H(e.thur_name),fe(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids),ft(""),yt()}))},children:"Reset Mealboard"}),Object(o.jsx)("button",{onClick:function(){Nt.push({pathname:"/Recipepage",state:{detail:y}})},children:"Go to Recipe page!"}),Object(o.jsx)("button",{onClick:function(){fetch("/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({delete:ht})}).then((function(e){return e.json()})).then((function(e){console.log(e),I(e.mon_name),oe(e.mon_ids),L(e.tues_name),be(e.tues_ids),B(e.wed_name),xe(e.wed_ids),H(e.thur_name),fe(e.thur_ids),Q(e.fri_name),Ne(e.fri_ids),ee(e.sat_name),we(e.sat_ids),ae(e.sun_name),Ae(e.sun_ids)}))},children:" Delete Recipe"})]})]})};var k=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(j.a)(s,2),l=i[0],r=i[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),u=b[0],O=b[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),m=x[0],p=x[1],v=Object(n.useState)(""),f=Object(j.a)(v,2),g=f[0],y=f[1],N=Object(n.useState)(""),C=Object(j.a)(N,2),k=(C[0],C[1]),w=Object(n.useState)([]),T=Object(j.a)(w,2),E=T[0],P=T[1],A=Object(n.useState)([]),R=Object(j.a)(A,2),I=(R[0],R[1]),M=Object(n.useState)([]),F=Object(j.a)(M,2),D=F[0],L=F[1],J=Object(n.useState)(""),V=Object(j.a)(J,2),W=V[0],B=V[1],G=Object(n.useState)(""),K=Object(j.a)(G,2),U=K[0],H=K[1],z=Object(n.useState)({}),q=Object(j.a)(z,2),Y=q[0],Q=q[1],X=Object(n.useState)({}),Z=Object(j.a)(X,2),$=(Z[0],Z[1],Object(n.useState)("")),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],ne=Object(_.g)();Object(n.useEffect)((function(){console.log(ne.state.detail),console.log(ne.state.detail.recipe_title),a(ne.state.detail.recipe_title),r(ne.state.detail.servings),O(ne.state.detail.ready_in_mins),p(ne.state.detail.recipe_img),y(ne.state.detail.source_url),k(ne.state.detail.dish_type),P(ne.state.detail.ingredients),I(ne.state.detail.ingred_imgs),L(ne.state.detail.instructions),H(ne.state.detail.id)}),[ne]);var ae,se=Object(_.f)(),ie=[],le=Object(S.a)(E.entries());try{for(le.s();!(ae=le.n()).done;){var oe=Object(j.a)(ae.value,2),re=oe[0],je=oe[1];ie.push(Object(o.jsx)("li",{children:je},re))}}catch(de){le.e(de)}finally{le.f()}return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){se.push({pathname:"/Recipebox",state:{detail:ne.state.detail}})},children:" Back To Mealboard"}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",id:"left-side",children:[Object(o.jsx)("h1",{children:c}),Object(o.jsxs)("h4",{children:[" Serving Size: ",l]}),Object(o.jsx)("img",{src:m}),Object(o.jsxs)("h4",{children:[" Ready in: ",u," minutes"]}),Object(o.jsx)("a",{href:g,style:{color:"black"},children:" Link to Recipe's Original Website "}),Object(o.jsxs)("div",{className:"add-to-mb",children:[Object(o.jsxs)("select",{onChange:function(e){return B(e.target.value)},children:[Object(o.jsx)("option",{value:"default",children:" Pick Day "}),Object(o.jsx)("option",{value:"1",children:"Monday"}),Object(o.jsx)("option",{value:"2",children:"Tuesday"}),Object(o.jsx)("option",{value:"3",children:"Wednesday"}),Object(o.jsx)("option",{value:"4",children:"Thursday"}),Object(o.jsx)("option",{value:"5",children:"Friday"}),Object(o.jsx)("option",{value:"6",children:"Saturday"}),Object(o.jsx)("option",{value:"7",children:"Sunday"})]}),Object(o.jsx)("button",{onClick:function(){Y[U]=W,Q(Y),fetch("/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({update:Y,title:c})}).then((function(e){return e.json()})).then((function(e){console.log(e),ce("Recipe Added!")}))},children:"Add recipe!"}),Object(o.jsx)("p",{children:te})]})]})}),Object(o.jsx)("h3",{children:" Ingredients "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:ie})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:D.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[" Step ",t+1,": ",e]}),Object(o.jsx)("br",{})]})}))}),Object(o.jsx)("footer",{})]})};var w=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(r,{}),Object(o.jsx)("div",{className:"g-signin",children:Object(o.jsx)(h,{})}),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{exact:!0,path:"/home",children:Object(o.jsx)(p,{})}),Object(o.jsx)(_.a,{path:"/Recipebox",children:Object(o.jsx)(C,{})}),Object(o.jsx)(_.a,{path:"/Recipepage",children:Object(o.jsx)(k,{})}),Object(o.jsx)(_.a,{path:"/About",children:Object(o.jsx)(f,{})}),Object(o.jsx)(_.a,{path:"/Contact",children:Object(o.jsx)(y,{})})]})})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6a5ea9f5.chunk.js.map