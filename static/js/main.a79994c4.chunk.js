(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(22),a=n.n(i),r=(n(51),n(12)),o={home:"/",characters:"/characters",comics:"/comics/:id",list:"/list"},s=n(13),l=n(4),d=n(6),u={header:n(56).default,headerBackground:n(57).default,error:n(58).default,errorBackground:n(59).default,list:n(60).default,logo:n(61).default},m={xs:0,sm:600,md:960,lg:1280,xl:1920},b=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},j=function(){var e=Object(c.useState)(b()),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){i(b())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},h=function(e){return{isDesktop:e>m.md,isTablet:e>m.sm&&e<=m.md,isMobile:e<=m.sm}},f=function(e){var t,n;return(null===e||void 0===e||null===(t=e.thumbnail)||void 0===t?void 0:t.path)+"."+(null===e||void 0===e||null===(n=e.thumbnail)||void 0===n?void 0:n.extension)},O=function(e,t){return e.find((function(e){return e.comicDetails.id===t}))},x=function(e,t){var n=O(e,t);return!!n?n.numberOfComics:0},p=n(29),g=n.n(p),v="apikey=".concat("2df3403d75aa2e7bcfdbcd85b2df77fa"),C="hash=".concat("187d8af9cda71765bc45f0c8fd10d590"),y="ts=1&".concat(v,"&").concat(C),w=g.a.create({baseURL:"https://gateway.marvel.com/v1/public"}),N=g.a.create({baseURL:"https://daniudo557.top"}),k={getComics:function(){return w.get("/comics?limit=100&".concat(y))},getComicsById:function(e){return w.get("/comics/".concat(e,"?").concat(y))},getStoriesByComicId:function(e){return w.get("/comics/".concat(e,"/stories?").concat(y))},getCreatorsByComicId:function(e){return w.get("/comics/".concat(e,"/creators?").concat(y))},sendEmail:function(e){return N.post("/send",e)},getCharacters:function(){return w.get("/characters?".concat(y))},getCharacters2:function(){return w.get("/comics/1308/characters?".concat(y))}},S=k,E=(n(79),n(5)),I=(n(80),n(0)),D=function(e){var t=e.title,n=e.customStyles,c=e.children,i=e.id,a=j().width,r=h(a),o=r.isDesktop,s=r.isTablet,l=r.isMobile,d=Object(E.a)(Object(E.a)({},n),{},{padding:32}),u=Object(E.a)(Object(E.a)({},n),{},{padding:16}),m=Object(E.a)(Object(E.a)({},n),{},{padding:8});return Object(I.jsxs)("section",{id:i,style:o?d:s?u:l?m:void 0,className:"container",children:[Object(I.jsx)("h2",{className:"title",children:t}),c]})},B=(n(82),function(e){var t=e.backgroundImage,n=void 0===t?u.headerBackground:t,c=e.image,i=void 0===c?u.header:c,a=e.shadowFilter,r=e.text,o=j().width,s=h(o),l=s.isDesktop,d=s.isTablet,m=s.isMobile,b={paddingRight:32,paddingLeft:32},f={paddingRight:16,paddingLeft:16},O={paddingRight:8,paddingLeft:8};return Object(I.jsxs)("section",{style:l?b:d?f:m?O:void 0,children:[Object(I.jsxs)("div",{className:"backgroundImgContainer",children:[Object(I.jsx)("div",{className:"backgroundImg",style:{backgroundImage:"url(".concat(n,")")}}),a&&Object(I.jsx)("div",{className:"shadowFilter"})]}),Object(I.jsx)("div",{className:"welcomeSection",children:Object(I.jsxs)("div",{className:l?"welcomeSectionContainer":d?"welcomeSectionContainer-tablet":m?"welcomeSectionContainer-mobile":void 0,children:[Object(I.jsx)("img",{src:i,alt:"logo",className:"animatedImgSlideRight \n            ".concat(l?"animatedImg":d?"animatedImg-tablet":"animatedImg-mobile")}),Object(I.jsx)("div",{className:"welcomeSectionTxtAppear ".concat(l?"welcomeSectionTxt":d?"welcomeSectionTxt-tablet":m?"welcomeSectionTxt-mobile":void 0),children:r})]})})]})}),F=n(46),L=n.n(F),T=(n(95),function(e){var t=e.children;return Object(I.jsx)(L.a,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:m.xl},items:5,partialVisibilityGutter:0},desktop2:{breakpoint:{max:m.xl,min:m.lg},items:3,partialVisibilityGutter:30},tablet:{breakpoint:{max:m.lg,min:m.md},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:m.md,min:0},items:1,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,children:t})}),M="ADD_COMIC_TO_LIST",R="REMOVE_COMIC_FROM_LIST",V=function(e){return{type:M,newValue:e}},A=function(e){return{type:R,newValue:e}},P=function(e){return e.comicsReducers.comics},q=(n(96),function(e){var t=e.text,n=(e.color,e.onClick),c=void 0===n?function(){}:n;return Object(I.jsx)("button",{onClick:c,className:"buttonContainer",children:t})}),z=(n(97),function(e){var t=e.item,n=e.isLoading,c=j().width,i=h(c),a=i.isTablet,o=i.isMobile,l=Object(r.b)(),d=Object(r.c)(P),u=function(e){e.preventDefault()};return Object(I.jsx)("div",{className:"carouselItemContainer\n        ".concat(o?"carouselItemContainer-mobile":"carouselItemContainer-tablet"),children:Object(I.jsx)("div",{id:"arrow",className:"carouselItem \n        ".concat(a&&"carouselItem-tablet","\n        ").concat(n&&"loading"),children:!n&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(s.b,{className:"carouselImageContainer",to:"comics/".concat(t.id),children:[Object(I.jsx)("h2",{id:"seeMore",children:"VER MAIS"}),Object(I.jsx)("img",{className:"carouselImage",onDragStart:u,alt:t.title,src:f(t)}),Object(I.jsx)("h2",{className:"numberOfComicIndicator",children:x(d,t.id)})]}),Object(I.jsxs)("div",{className:"itemFooter",children:[Object(I.jsx)("div",{className:"comicTitle",children:t.title}),Object(I.jsxs)("div",{className:"itemFooterButtons",children:[Object(I.jsx)(q,{text:"Remover da lista",onClick:function(){return l(A(t))}}),Object(I.jsx)(q,{text:"Adicionar \xe0 lista",onClick:function(){return l(V(t))}})]})]})]})})})}),_=(n(99),n(19)),G=n(20),J=function(e){var t=e.placeholder,n=e.onChange,c=j().width,i=h(c),a=i.isTablet,r=i.isMobile;return Object(I.jsxs)("form",{className:"searchBar ".concat((a||r)&&"searchBar-mobile"),children:[Object(I.jsx)(_.a,{style:{alignSelf:"center",fontSize:26},color:"#F0141E",icon:G.b}),Object(I.jsx)("input",{type:"text",style:{width:"100%"},onChange:n,placeholder:t})]})},U=function(){var e=j().width,t=h(e).isTablet,n=Object(c.useState)([]),i=Object(d.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)([]),s=Object(d.a)(o,2),l=s[0],u=s[1],m=Object(c.useState)(!1),b=Object(d.a)(m,2),f=b[0],O=b[1];Object(c.useEffect)((function(){O(!0),S.getComics().then((function(e){var t=e.data;r(t.data.results),u(t.data.results),O(!1)}))}),[]);var x=function(){return Object(I.jsx)("div",{className:"comicsNotFoundContainer",children:Object(I.jsx)("h2",{children:"N\xe3o foi encontrado nenhum quadrinho com esse t\xedtulo"})})},p=function(){return Object(I.jsx)(T,{isMobile:t,children:l.map((function(e,t){return Object(I.jsx)(z,{item:e},t)}))})};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(B,{text:"Bem vindo(a) ao Marvel-App! Explore o mundo dos quadrinhos"}),Object(I.jsxs)(D,{id:"comics",customStyles:{backgroundColor:"#EEEEEE"},title:"Procure o seu quadrinho preferido!",children:[Object(I.jsx)(J,{onChange:function(e){return function(e){var t=e.toLowerCase(),n=a.filter((function(e){return e.title.toLowerCase().includes(t)}));u(n)}(e.target.value)},placeholder:"X-Men: Days of Future Past (Trade Paperback)"}),f?function(){var e=Array(5).fill().map((function(){return Math.round(5*Math.random())}));return Object(I.jsx)(T,{isMobile:t,children:e.map((function(e,t){return Object(I.jsx)(z,{isLoading:!0},t)}))})}():0===l.length?x():p()]})]})},H=function(){return Object(I.jsx)("div",{className:"",children:Object(I.jsx)(B,{})})},Q=(n(102),function(e){var t=e.children,n=e.backgroundColor;return Object(I.jsx)("div",{className:"cardContainer",style:{backgroundColor:n},children:t})}),W=function(e){var t=e.match.params,n=Object(c.useState)([]),i=Object(d.a)(n,2),a=i[0],o=i[1],s=Object(c.useState)(null),l=Object(d.a)(s,2),m=l[0],b=l[1],j=Object(c.useState)(!1),h=Object(d.a)(j,2),O=h[0],p=h[1],g=Object(c.useState)(!1),v=Object(d.a)(g,2),C=v[0],y=v[1],w=Object(r.c)(P),N=Object(r.b)();Object(c.useEffect)((function(){p(!0),S.getComicsById(t.id).then((function(e){var n,c=e.data;o(c.data.results.pop()),(null===a||void 0===a||null===(n=a.creators)||void 0===n?void 0:n.available)>0&&S.getCreatorsByComicId(t.id).then((function(e){var t=e.data;b(t.data.results.pop())})).catch((function(){y(!0),p(!1)})),p(!1),y(!1)})).catch((function(){y(!0),p(!1)}))}),[]);var k=function(){var e,t=null===a||void 0===a||null===(e=a.dates)||void 0===e?void 0:e.filter((function(e){return"focDate"===e.type}))[0].date;return new Date(t).toLocaleDateString()},E=function(){return Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(I.jsxs)(Q,{backgroundColor:"white",children:[Object(I.jsxs)("h3",{children:["Criador: ",m?null===m||void 0===m?void 0:m.fullName:"Invalid Creator"]}),Object(I.jsxs)("h3",{children:["Data de publica\xe7\xe3o: ",k()]}),Object(I.jsxs)("h3",{children:["N\xfamero de p\xe1ginas: ",null===a||void 0===a?void 0:a.pageCount]}),Object(I.jsxs)("h3",{children:["Descri\xe7\xe3o: ",(null===a||void 0===a?void 0:a.description)?null===a||void 0===a?void 0:a.description:"Invalid description"]}),Object(I.jsxs)("h3",{children:["Na sua lista: ",x(w,null===a||void 0===a?void 0:a.id)]}),Object(I.jsx)(q,{text:"Remover da lista",onClick:function(){return N(A(a))}}),Object(I.jsx)(q,{text:"Adicionar \xe0 lista",onClick:function(){return N(V(a))}})]})})};return O?Object(I.jsx)("h1",{children:"Loading"}):C?Object(I.jsx)(B,{shadowFilter:!0,image:u.error,backgroundImage:u.errorBackground,text:"N\xe3o foi poss\xedvel carregar os dados do quadrinho"}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(B,{shadowFilter:!0,image:f(a),backgroundImage:f(a),text:null===a||void 0===a?void 0:a.title}),Object(I.jsx)(D,{customStyles:{backgroundColor:"#EEEEEE"},title:null===a||void 0===a?void 0:a.title,children:E()})]})},X=(n(103),function(e){var t=e.comics,n=Object(c.useState)({name:"",email:""}),i=Object(d.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)(!1),s=Object(d.a)(o,2),l=s[0],u=s[1],m=Object(c.useState)(!1),b=Object(d.a)(m,2),j=b[0],h=b[1],f=function(e){a[e.target.name]=e.target.value,r(a)},O=function(){return""===a.name?h(!0):h(!1),""===a.email?u(!0):u(!1),j||l};return Object(I.jsxs)(Q,{backgroundColor:"#F2F2F2",children:[Object(I.jsx)("label",{children:"E-mail"}),l&&Object(I.jsx)("label",{className:"errorLabel",children:'* Preencha o campo "E-mail"'}),Object(I.jsx)("input",{className:"formInput ".concat(l&&"errorBorder"),onChange:f,type:"text",id:"email",name:"email",placeholder:"exemplo@email.com"}),Object(I.jsx)("label",{children:"Nome: "}),j&&Object(I.jsx)("label",{className:"errorLabel",children:'* Preencha o campo "Nome"'}),Object(I.jsx)("input",{className:"formInput ".concat(j&&"errorBorder"),onChange:f,type:"text",id:"name",name:"name",placeholder:"Daniel Macedo"}),Object(I.jsx)(q,{text:"Enviar email",onClick:function(){return function(){var e;O()||S.sendEmail(Object(E.a)(Object(E.a)({},a),{},{comics:(e=t,e.map((function(e){return{title:e.comicDetails.title,numberOfComics:e.numberOfComics}})))}))}()}})]})}),K=function(){var e=Object(r.c)(P),t=Object(r.b)();return e.length>0?Object(I.jsxs)("div",{className:"",children:[Object(I.jsx)(B,{image:u.list,text:"Consulte sua lista de quadrinhos"}),Object(I.jsx)(D,{customStyles:{backgroundColor:"#F5F5F5"},title:"Consulte sua lista de quadrinhos",children:e.map((function(e,n){return Object(I.jsx)("div",{style:{padding:32},children:Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(I.jsxs)(Q,{backgroundColor:"white",children:[Object(I.jsxs)("h1",{children:["T\xedtulo: ",e.comicDetails.title]}),Object(I.jsxs)("h1",{children:["Na sua lista: ",e.numberOfComics]}),Object(I.jsx)(q,{text:"Remover da lista",onClick:function(){return function(e){return t(A(e))}(e.comicDetails)}}),Object(I.jsx)(q,{text:"Adicionar \xe0 lista",onClick:function(){return function(e){return t(V(e))}(e.comicDetails)}})]})})},n)}))}),Object(I.jsx)(D,{customStyles:{backgroundColor:"#EEEEEE"},title:"Envie a lista para para seu email",children:Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(I.jsx)(X,{comics:e})})})]}):Object(I.jsx)(B,{image:u.error,backgroundImage:u.errorBackground,text:"Voc\xea ainda n\xe3o possui nenhum quadrinho em sua lista. Adicione quadrinhos na p\xe1gina principal"})},Y=(n(44),function(e){var t=e.items,n=Object(c.useState)(!1),i=Object(d.a)(n,2),a=i[0],r=i[1],o=function(){return Object(I.jsx)("div",{className:a?"burgerButtonContainer-opened":"burgerButtonContainer",children:Object(I.jsx)("div",{className:"burgerButton",onClick:function(){return r(!a)},children:a?Object(I.jsx)(_.a,{style:{alignSelf:"center",fontSize:26},color:"#F0141E",icon:G.c}):Object(I.jsx)(_.a,{style:{alignSelf:"center",fontSize:26},color:"#F0141E",icon:G.a})})})};return a?Object(I.jsxs)("div",{className:"sideBarMenu",children:[o(),t.map((function(e,t){return Object(I.jsx)(s.b,{to:e.path,className:"marvelDefaultText menuItem",style:{fontSize:22,padding:"8px 0px 8px 0px"},onClick:function(){return r(!1)},children:e.text},t)}))]}):o()}),Z=function(){var e=j().width,t=h(e),n=t.isMobile,c=t.isTablet,i=[{text:"Quadrinhos",path:o.home},{text:"Personagens",path:o.characters},{text:"Minha lista",path:o.list}];return n||c?Object(I.jsxs)("div",{className:"navBar navBar-mobile",children:[Object(I.jsx)("div",{className:"marvelLogo marvelLogo-mobile",children:Object(I.jsx)(s.b,{className:"marvelDefaultText",style:{paddingRight:8,paddingLeft:8},to:o.home,children:"M"})}),Object(I.jsx)(Y,{items:i})]}):Object(I.jsxs)("div",{className:"navBar",children:[Object(I.jsx)(s.b,{style:{height:"100%"},to:o.home,children:Object(I.jsx)("img",{src:u.logo,className:"marvelLogo",alt:"logo"})}),Object(I.jsx)("div",{className:"menuLine",children:i.map((function(e,t){return Object(I.jsx)(s.b,{to:e.path,className:"marvelDefaultText menuItem",children:e.text},t)}))})]})};var $=function(){return Object(I.jsxs)(s.a,{basename:"/marvel-app",children:[Object(I.jsx)(Z,{}),Object(I.jsx)(l.a,{path:o.home,exact:!0,component:U}),Object(I.jsx)(l.a,{path:o.comics,component:W}),Object(I.jsx)(l.a,{path:o.characters,component:H}),Object(I.jsx)(l.a,{path:o.list,component:K})]})},ee=n(15),te=n(32),ne={comics:[]},ce=Object(ee.b)({comicsReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=function(){var n=e.comics;if(!!!O(n,t.newValue.id)){var c={numberOfComics:1,comicDetails:t.newValue};return n.push(c),Object(te.a)(n)}return n.map((function(e){return e.comicDetails.id===t.newValue.id?Object(E.a)(Object(E.a)({},e),{},{numberOfComics:e.numberOfComics+1}):e}))},c=function(){var n=e.comics,c=O(n,t.newValue.id);return!!c?1===c.numberOfComics?n.filter((function(e){return e.comicDetails.id!==t.newValue.id})):n.map((function(e){return e.comicDetails.id===t.newValue.id?Object(E.a)(Object(E.a)({},e),{},{numberOfComics:e.numberOfComics-1}):e})):Object(te.a)(n)};switch(t.type){case M:return Object(E.a)(Object(E.a)({},e),{},{comics:n()});case R:return Object(E.a)(Object(E.a)({},e),{},{comics:c()});default:return e}}}),ie=Object(ee.c)(ce),ae=function(){return Object(I.jsx)(r.a,{store:ie,children:Object(I.jsx)($,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};a.a.render(Object(I.jsx)(ae,{}),document.getElementById("root")),re()},44:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/miles-morales.c51f6de4.png"},57:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ny.d8dfa83b.jpg"},58:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/deadpool-sad.ee4d77fb.png"},59:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rain.087b7fd6.png"},60:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/deadpool-reading.5afa8a20.png"},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/marvel-logo.568d8c62.png"},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.a79994c4.chunk.js.map