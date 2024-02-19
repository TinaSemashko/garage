"use strict";(self.webpackChunkconnectify=self.webpackChunkconnectify||[]).push([[407],{9551:function(e,n,t){var i=t(4165),r=t(5861),a=t(9439),s=t(7313),o=t(5851),l=t(517);n.Z=function(){var e=(0,s.useContext)(o.Z).authState,n=(0,s.useState)(!1),t=(0,a.Z)(n,2),d=t[0],u=t[1],c=(0,s.useState)(null),m=(0,a.Z)(c,2),p=m[0],x=m[1],v=(0,s.useCallback)(function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t,r,a,s,o){var d;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),x(null),d={},e.isLoggedIn&&e.authToken&&(d["x-access-token"]=e.authToken),n.next=6,(0,l.Z)({method:t,url:r,data:a,headers:d}).then((function(e){s(e.data.results[0])})).catch((function(e){o?o(e.message||e.error||e):x(e.message||e.error||e)}));case 6:u(!1);case 7:case"end":return n.stop()}}),n)})));return function(e,t,i,r,a){return n.apply(this,arguments)}}(),[e.authToken]);return{loading:d,error:p,request:v,setError:x}}},1407:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var i=t(9439),r=t(7313),a=t(1113),s=t(5664),o=t(7327),l=t(3366),d=t(7462),u=t(2197),c=t(1921),m=t(8564),p=t(9394),x=t(7430),v=t(2298);function h(e){return(0,v.Z)("MuiCardActions",e)}(0,x.Z)("MuiCardActions",["root","spacing"]);var f,g,Z,j,y,S,w=t(6417),C=["disableSpacing","className"],k=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,d.Z)({display:"flex",alignItems:"center",padding:8},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),b=r.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiCardActions"}),i=t.disableSpacing,r=void 0!==i&&i,a=t.className,s=(0,l.Z)(t,C),o=(0,d.Z)({},t,{disableSpacing:r}),m=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(t,h,n)}(o);return(0,w.jsx)(k,(0,d.Z)({className:(0,u.Z)(m.root,a),ownerState:o,ref:n},s))})),A=t(3405),I=t(6957),P=t(4641),M=t(1095),q=t(8467),E=t(4560),T=t(555),K=t(168),z=t(3428),H=(0,m.ZP)(z.Z)(f||(f=(0,K.Z)(["\n  background: linear-gradient(\n    180deg,\n    rgba(216, 236, 232, 0.34505139946603647) 28%,\n    rgba(122, 184, 181, 0.6335668056285014) 100%\n  );\n\n  @media (max-width: 750px) {\n  }\n"]))),_=function(e){var n=e.element,t=e.hidden,s=void 0!==t&&t,l=(0,r.useState)(""),d=(0,i.Z)(l,2),u=d[0],c=d[1],m=(0,q.s0)();(0,r.useEffect)((function(){null!==n&&void 0!==n&&n.image&&c("data:image/jpeg;base64,".concat(n.image))}),[n]);return s?null:(0,w.jsxs)(H,{sx:{width:{xs:"90vw",md:"20vw"},height:{xs:"60vh",md:"100%"},backgroundColor:"linear-gradient(180deg, rgba(123,201,188,0.8548553210346639) 47%, rgba(16,86,83,1) 100%);"},children:[(0,w.jsx)(P.Z,{title:null===n||void 0===n?void 0:n.title,subheader:null===n||void 0===n?void 0:n.type}),(0,w.jsx)(I.Z,{component:"img",height:"196",image:u,alt:null===n||void 0===n?void 0:n.title}),(0,w.jsxs)(A.Z,{children:[(0,w.jsxs)(a.Z,{variant:"h4",component:"div",children:["Modele: ",null===n||void 0===n?void 0:n.modele]}),(0,w.jsxs)(a.Z,{variant:"h4",component:"div",children:["Marque: ",null===n||void 0===n?void 0:n.marque]}),(0,w.jsxs)(E.Z,{id:"composition-menu","aria-labelledby":"composition-button",sx:{width:"20vw"},children:[(0,w.jsxs)(o.Z,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Annee: ",null===n||void 0===n?void 0:n.annee]}),(0,w.jsxs)(o.Z,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Prix: ",null===n||void 0===n?void 0:n.prix]}),(0,w.jsxs)(o.Z,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Kilometrage: ",null===n||void 0===n?void 0:n.kilometrage]}),(0,w.jsxs)(o.Z,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Puissance fiscale: ",null===n||void 0===n?void 0:n.puissance_fiscale]}),(0,w.jsxs)(o.Z,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Puissance motor: ",null===n||void 0===n?void 0:n.puissance_motor]}),(0,w.jsxs)(o.Z,{sx:{fontSize:{xs:"0.7rem",md:"1rem"},py:0,minHeight:{xs:"0",md:"48"}},children:["Boite vitesse: ",null===n||void 0===n?void 0:n.boite_vitesse]})]})]}),(0,w.jsx)(b,{children:(0,w.jsx)(M.Z,{size:"small",onClick:function(){var e;e=n,console.log(e),void 0!==e&&(e.image=u,localStorage.setItem("produit",JSON.stringify(e)),m(T.Z.cardproduit))},children:"Learn More"})})]})},B=t(9551),D=t(1198),G=t(1967),L=(0,m.ZP)("div")(g||(g=(0,K.Z)(["\n  padding-top: 10vh;\n  text-align: center;\n  color: ",";\n  display: grid;\n  grid-template-columns: 20% 80%;\n\n  @media (max-width: 750px) {\n    grid-template-columns: 100%;\n    align-items: center;\n  }\n"])),(function(e){return e.theme.palette.primary.main})),N=(0,m.ZP)("div")(Z||(Z=(0,K.Z)(["\n  margin-top: 10%;\n  margin-bottom: 10%;\n  grid-gap: 1%;\n  max-width: 100%;\n  display: grid;\n  grid-template-columns: 33% 33% 33%;\n  grid-template-rows: auto;\n  justify-items: center;\n  align-items: center;\n\n  @media (max-width: 750px) {\n    grid-template-columns: 100vw;\n    align-items: center;\n    grid-gap: 0%;\n  }\n"]))),W=(0,m.ZP)("div")(j||(j=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  margin-left: 2%;\n  width: 25%;\n  @media (max-width: 750px) {\n    width: 100%;\n  }\n"]))),R=(0,m.ZP)("div")(y||(y=(0,K.Z)(["\n  display: block;\n  width: 15vw;\n  text-align: center;\n  color: ",";\n\n  @media (max-width: 750px) {\n    width: 80vw;\n  }\n"])),(function(e){return e.theme.palette.colorWhite.main})),F=(0,m.ZP)("div")(S||(S=(0,K.Z)(["\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: 750px) {\n  }\n"]))),J=function(){var e=(0,B.Z)(),n=e.request,t=e.setError,l=(0,r.useState)([]),d=(0,i.Z)(l,2),u=d[0],c=d[1],m=(0,r.useState)(),p=(0,i.Z)(m,2),x=p[0],v=p[1],h=(0,r.useState)(),f=(0,i.Z)(h,2),g=f[0],Z=f[1],j=(0,r.useState)(),y=(0,i.Z)(j,2),S=y[0],C=y[1],k=(0,r.useState)(""),b=(0,i.Z)(k,2),A=b[0],I=b[1],P=(0,r.useState)({}),M=(0,i.Z)(P,2),q=M[0],E=M[1],T=(0,r.useState)({}),K=(0,i.Z)(T,2),z=K[0],H=K[1],J=(0,r.useState)(-1),O=(0,i.Z)(J,2),V=O[0],Q=O[1],U=(0,r.useState)(-1),X=(0,i.Z)(U,2),Y=X[0],$=X[1],ee=(0,r.useState)(-1),ne=(0,i.Z)(ee,2),te=ne[0],ie=ne[1],re=(0,r.useState)(""),ae=(0,i.Z)(re,2),se=ae[0],oe=ae[1],le=(0,r.useState)(""),de=(0,i.Z)(le,2),ue=de[0],ce=de[1],me=(0,r.useState)(!1),pe=(0,i.Z)(me,2),xe=pe[0],ve=pe[1],he=(0,r.useState)(""),fe=(0,i.Z)(he,2),ge=fe[0],Ze=fe[1],je=(0,r.useState)(""),ye=(0,i.Z)(je,2),Se=ye[0],we=ye[1],Ce=(0,r.useState)(!1),ke=(0,i.Z)(Ce,2),be=ke[0],Ae=ke[1],Ie=(0,r.useState)(""),Pe=(0,i.Z)(Ie,2),Me=Pe[0],qe=Pe[1],Ee=(0,r.useState)(!1),Te=(0,i.Z)(Ee,2),Ke=Te[0],ze=Te[1];(0,r.useEffect)((function(){try{n("GET","products",{headers:{"Content-Type":"application/json"}},c)}catch(e){t(e.message||e)}}),[]),(0,r.useEffect)((function(){try{n("GET","types",{headers:{"Content-Type":"application/json"}},v)}catch(e){t(e.message||e)}}),[]),(0,r.useEffect)((function(){try{n("GET","modeles",{headers:{"Content-Type":"application/json"}},Z)}catch(e){t(e.message||e)}}),[]),(0,r.useEffect)((function(){try{n("GET","marques",{headers:{"Content-Type":"application/json"}},C)}catch(e){t(e.message||e)}}),[]);var He=function(e){"type"===e.target.name?I(e.target.value):"marque"===e.target.name?H(e.target.value):"modele"===e.target.name?E(e.target.value):"selectedPrixDe"===e.target.name?oe(e.target.value):"selectedPrixA"===e.target.name?ce(e.target.value):"selectedKmDe"===e.target.name?Ze(e.target.value):"selectedKmA"===e.target.name?we(e.target.value):"selectedAn"===e.target.name&&qe(e.target.value)};(0,r.useEffect)((function(){if(""!==A){var e,n=null===x||void 0===x||null===(e=x.find((function(e){return e.type===A})))||void 0===e?void 0:e.id;void 0!==n&&ie(n)}}),[A]),(0,r.useEffect)((function(){var e,n=null===S||void 0===S||null===(e=S.find((function(e){return e.marque===z})))||void 0===e?void 0:e.id;void 0!==n&&Q(n)}),[z]),(0,r.useEffect)((function(){if(""!==q){var e,n=null===g||void 0===g||null===(e=g.find((function(e){return e.modele===q})))||void 0===e?void 0:e.id;void 0!==n&&$(n)}}),[q]);var _e=function(e){"filtrePrix"&&ve(!0),"Kilometrage"&&Ae(!0),"Annee"&&ze(!0)},Be=function(e){"type"===e&&(I(""),ie(-1)),"modele"===e&&(E(""),$(-1)),"marque"===e&&(H(""),Q(-1)),(e="filtrePrix")&&(oe(""),ce(""),ve(!1)),(e="Kilometrage")&&(Ze(""),we(""),Ae(!1)),(e="filtreAnnee")&&(qe(""),ze(!1))},De=function(e){return-1!==te&&e.id_type!==te||-1!==V&&e.id_marque!==V||-1!==Y&&e.id_modele!==Y||xe&&(parseInt(e.prix)<parseInt(se)||parseInt(e.prix)>parseInt(ue))||be&&(parseInt(e.kilometrage)<parseInt(ge)||parseInt(e.kilometrage)>parseInt(Se))||Ke&&e.annee!=Me};return(0,w.jsxs)(L,{children:[(0,w.jsx)(a.Z,{variant:"h1",sx:{gridColumn:{xs:"1",md:"1 / span 2"}},children:"Les voitures d'occasion"}),(0,w.jsxs)(W,{children:[(0,w.jsx)(a.Z,{variant:"h6",sx:{opacity:.8},children:"Filter:"}),(0,w.jsxs)(R,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(s.Z,{variant:"standard",select:!0,type:"text",fullWidth:!0,name:"type",value:A,onChange:He,children:null===x||void 0===x?void 0:x.map((function(e,n){return(0,w.jsx)(o.Z,{value:e.type,children:e.type},n)}))}),(0,w.jsx)(D.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return Be("type")}})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(s.Z,{variant:"standard",select:!0,type:"text",fullWidth:!0,name:"marque",value:z,onChange:He,children:null===S||void 0===S?void 0:S.map((function(e,n){return(0,w.jsx)(o.Z,{value:e.marque,children:e.marque},n)}))}),(0,w.jsx)(D.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return Be("marque")}})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(s.Z,{variant:"standard",select:!0,type:"text",fullWidth:!0,name:"modele",value:q,onChange:He,children:null===g||void 0===g?void 0:g.filter((function(e){return e.id_marque===V})).map((function(e,n){return(0,w.jsx)(o.Z,{value:e.modele,children:e.modele},n)}))}),(0,w.jsx)(D.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return Be("modele")}})]})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(a.Z,{variant:"h6",children:"Prix de "}),(0,w.jsx)(s.Z,{variant:"standard",type:"text",name:"selectedPrixDe",value:se,onChange:He,sx:{width:{md:"10vw"},cursor:"pointer","& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{textAlign:"center"}}}),(0,w.jsx)("br",{})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(a.Z,{variant:"h6",children:"\xe0 "}),(0,w.jsx)(s.Z,{variant:"standard",type:"text",name:"selectedPrixA",value:ue,onChange:He,sx:{width:{md:"10vw"},cursor:"pointer","& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{textAlign:"center"}}}),(0,w.jsx)(G.Z,{name:"filtrePrix",sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return _e()}}),(0,w.jsx)(D.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return Be("filtrePrix")}})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(a.Z,{variant:"h6",children:"Kilomentrage de "}),(0,w.jsx)(s.Z,{variant:"standard",type:"text",name:"selectedKmDe",value:ge,onChange:He,sx:{width:{md:"10vw"},cursor:"pointer","& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{textAlign:"center"}}}),(0,w.jsx)("br",{})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(a.Z,{variant:"h6",children:"\xe0 "}),(0,w.jsx)(s.Z,{variant:"standard",type:"text",name:"selectedKmA",value:Se,onChange:He,sx:{width:{md:"10vw"},cursor:"pointer","& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{textAlign:"center"}}}),(0,w.jsx)(G.Z,{name:"Kilometrage",sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return _e()}}),(0,w.jsx)(D.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return Be("Kilometrage")}})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(a.Z,{variant:"h6",children:"Ann\xe9e "}),(0,w.jsx)(s.Z,{variant:"standard",type:"text",name:"selectedAn",value:Me,onChange:He,sx:{width:{md:"10vw"},cursor:"pointer","& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{textAlign:"center"}}}),(0,w.jsx)(G.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return _e()}}),(0,w.jsx)(D.Z,{sx:{color:"primary.main",cursor:"pointer"},onClick:function(){return Be("filtreAnnee")}})]})]}),(0,w.jsx)(N,{children:u.slice(0,15).map((function(e,n){return(0,w.jsx)(_,{element:e,hidden:De(e)},n)}))})]})}},1967:function(e,n,t){var i=t(4836);n.Z=void 0;var r=i(t(5045)),a=t(6417),s=(0,r.default)((0,a.jsx)("path",{d:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"}),"TouchApp");n.Z=s}}]);