(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(22),a=n.n(i),r=(n(51),n(12)),o={home:"/",characters:"/characters",comics:"/comics/:id",list:"/list"},s=n(13),l=n(4),d=n(8),u={header:n(56).default,headerBackground:n(57).default,error:n(58).default,errorBackground:n(59).default,list:n(60).default,logo:n(61).default},m={xs:0,sm:600,md:960,lg:1280,xl:1920},b=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},j=function(){var e=Object(c.useState)(b()),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){i(b())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},h=function(e){return{isDesktop:e>m.md,isTablet:e>m.sm&&e<=m.md,isMobile:e<=m.sm}},f=function(e){var t,n;return(null===e||void 0===e||null===(t=e.thumbnail)||void 0===t?void 0:t.path)+"."+(null===e||void 0===e||null===(n=e.thumbnail)||void 0===n?void 0:n.extension)},O=function(e,t){return e.find((function(e){return e.comicDetails.id===t}))},g=function(e,t){var n=O(e,t);return!!n?n.numberOfComics:0},x=n(45),p=n.n(x),v="apikey=".concat("2df3403d75aa2e7bcfdbcd85b2df77fa"),C="hash=".concat("187d8af9cda71765bc45f0c8fd10d590"),w="ts=1&".concat(v,"&").concat(C),N=p.a.create({baseURL:"https://gateway.marvel.com/v1/public"}),k={getComics:function(){return N.get("/comics?limit=100&".concat(w))},getComicsById:function(e){return N.get("/comics/".concat(e,"?").concat(w))},getStoriesByComicId:function(e){return N.get("/comics/".concat(e,"/stories?").concat(w))},getCreatorsByComicId:function(e){return N.get("/comics/".concat(e,"/creators?").concat(w))},getCharacters:function(){return N.get("/characters?".concat(w))},getCharacters2:function(){return N.get("/comics/1308/characters?".concat(w))}},S=k,y=(n(79),n(5)),I=(n(80),n(1)),E=function(e){var t=e.title,n=e.customStyles,c=e.children,i=e.id,a=j().width,r=h(a),o=r.isDesktop,s=r.isTablet,l=r.isMobile,d=Object(y.a)(Object(y.a)({},n),{},{padding:32}),u=Object(y.a)(Object(y.a)({},n),{},{padding:16}),m=Object(y.a)(Object(y.a)({},n),{},{padding:8});return Object(I.jsxs)("section",{id:i,style:o?d:s?u:l?m:void 0,className:"container",children:[Object(I.jsx)("h2",{className:"title",children:t}),c]})},D=(n(82),function(e){var t=e.backgroundImage,n=void 0===t?u.headerBackground:t,c=e.image,i=void 0===c?u.header:c,a=e.shadowFilter,r=e.text,o=j().width,s=h(o),l=s.isDesktop,d=s.isTablet,m=s.isMobile,b={paddingRight:32,paddingLeft:32},f={paddingRight:16,paddingLeft:16},O={paddingRight:8,paddingLeft:8};return Object(I.jsxs)("section",{style:l?b:d?f:m?O:void 0,children:[Object(I.jsxs)("div",{className:"backgroundImgContainer",children:[Object(I.jsx)("div",{className:"backgroundImg",style:{backgroundImage:"url(".concat(n,")")}}),a&&Object(I.jsx)("div",{className:"shadowFilter"})]}),Object(I.jsx)("div",{className:"welcomeSection",children:Object(I.jsxs)("div",{className:l?"welcomeSectionContainer":d?"welcomeSectionContainer-tablet":m?"welcomeSectionContainer-mobile":void 0,children:[Object(I.jsx)("img",{src:i,alt:"logo",className:"animatedImgSlideRight \n            ".concat(l?"animatedImg":d?"animatedImg-tablet":"animatedImg-mobile")}),Object(I.jsx)("div",{className:"welcomeSectionTxtAppear ".concat(l?"welcomeSectionTxt":d?"welcomeSectionTxt-tablet":m?"welcomeSectionTxt-mobile":void 0),children:r})]})})]})}),T=n(46),B=n.n(T),M=(n(95),function(e){var t=e.children;return Object(I.jsx)(B.a,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:m.xl},items:5,partialVisibilityGutter:0},desktop2:{breakpoint:{max:m.xl,min:m.lg},items:3,partialVisibilityGutter:30},tablet:{breakpoint:{max:m.lg,min:m.md},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:m.md,min:0},items:1,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,children:t})}),F="COUNTER_DECREMENT",L="COUNTER_INCREMENT",R="ADD_COMIC_TO_LIST",V="REMOVE_COMIC_FROM_LIST",A=function(e){return{type:R,newValue:e}},_=function(e){return{type:V,newValue:e}},q=function(e){return e.comicsReducers.comics},P=(n(96),function(e){var t=e.text,n=(e.color,e.onClick);return Object(I.jsx)("button",{onClick:n,className:"buttonContainer",children:t})}),z=(n(97),function(e){var t=e.item,n=e.isLoading,c=j().width,i=h(c),a=i.isTablet,o=i.isMobile,l=Object(r.b)(),d=Object(r.c)(q),u=function(e){e.preventDefault()};return Object(I.jsx)("div",{className:"carouselItemContainer\n        ".concat(o?"carouselItemContainer-mobile":"carouselItemContainer-tablet"),children:Object(I.jsx)("div",{id:"arrow",className:"carouselItem \n        ".concat(a&&"carouselItem-tablet","\n        ").concat(n&&"loading"),children:!n&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(s.b,{className:"carouselImageContainer",to:"comics/".concat(t.id),children:[Object(I.jsx)("h2",{id:"seeMore",children:"VER MAIS"}),Object(I.jsx)("img",{className:"carouselImage",onDragStart:u,alt:t.title,src:f(t)}),Object(I.jsx)("h2",{className:"numberOfComicIndicator",children:g(d,t.id)})]}),Object(I.jsxs)("div",{className:"itemFooter",children:[Object(I.jsx)("div",{className:"comicTitle",children:t.title}),Object(I.jsxs)("div",{className:"itemFooterButtons",children:[Object(I.jsx)(P,{text:"Remover da lista",onClick:function(){return l(_(t))}}),Object(I.jsx)(P,{text:"Adicionar a lista",onClick:function(){return l(A(t))}})]})]})]})})})}),G=(n(99),n(19)),U=n(20),J=function(e){var t=e.placeholder,n=e.onChange,c=j().width,i=h(c),a=i.isTablet,r=i.isMobile;return Object(I.jsxs)("form",{className:"searchBar ".concat((a||r)&&"searchBar-mobile"),children:[Object(I.jsx)(G.a,{style:{alignSelf:"center",fontSize:26},color:"#F0141E",icon:U.b}),Object(I.jsx)("input",{type:"text",style:{width:"100%"},onChange:n,placeholder:t})]})},H=function(){var e=j().width,t=h(e).isTablet,n=Object(c.useState)([]),i=Object(d.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)([]),s=Object(d.a)(o,2),l=s[0],u=s[1],m=Object(c.useState)(!1),b=Object(d.a)(m,2),f=b[0],O=b[1];Object(c.useEffect)((function(){O(!0),S.getComics().then((function(e){var t=e.data;r(t.data.results),u(t.data.results),O(!1)}))}),[]);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(D,{text:"Bem vindo(a) ao Marvel-App! Explore o mundo dos quadrinhos"}),Object(I.jsxs)(E,{id:"comics",customStyles:{backgroundColor:"#EEEEEE"},title:"Procure o seu quadrinho preferido!",children:[Object(I.jsx)(J,{onChange:function(e){return function(e){var t=e.toLowerCase(),n=a.filter((function(e){return e.title.toLowerCase().includes(t)}));u(n)}(e.target.value)},placeholder:"X-Men: Days of Future Past (Trade Paperback)"}),f?function(){var e=Array(5).fill().map((function(){return Math.round(5*Math.random())}));return Object(I.jsx)(M,{isMobile:t,children:e.map((function(e,t){return Object(I.jsx)(z,{isLoading:!0},t)}))})}():Object(I.jsx)(M,{isMobile:t,children:l.map((function(e,t){return Object(I.jsx)(z,{item:e},t)}))})]})]})},Q=function(e){var t=e.match.params;return console.log(t),Object(I.jsx)("div",{className:"",children:Object(I.jsx)(D,{})})},W=function(e){var t=e.match.params;console.log(t);var n=Object(c.useState)([]),i=Object(d.a)(n,2),a=i[0],o=i[1],s=Object(c.useState)(null),l=Object(d.a)(s,2),m=l[0],b=l[1],j=Object(c.useState)(!1),h=Object(d.a)(j,2),O=h[0],x=h[1],p=Object(c.useState)(!1),v=Object(d.a)(p,2),C=v[0],w=v[1],N=Object(r.c)(q),k=Object(r.b)();Object(c.useEffect)((function(){x(!0),S.getComicsById(t.id).then((function(e){var n,c=e.data;o(c.data.results.pop()),(null===a||void 0===a||null===(n=a.creators)||void 0===n?void 0:n.available)>0&&S.getCreatorsByComicId(t.id).then((function(e){var t=e.data;b(t.data.results.pop())})).catch((function(){w(!0),x(!1)})),x(!1),w(!1)})).catch((function(){w(!0),x(!1)}))}),[]);var y=function(){var e,t=null===a||void 0===a||null===(e=a.dates)||void 0===e?void 0:e.filter((function(e){return"focDate"===e.type}))[0].date;return new Date(t).toLocaleDateString()};return O?Object(I.jsx)("h1",{children:"Loading"}):C?Object(I.jsx)(D,{shadowFilter:!0,image:u.error,backgroundImage:u.errorBackground,text:"N\xe3o foi poss\xedvel carregar os dados do quadrinho"}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(D,{shadowFilter:!0,image:f(a),backgroundImage:f(a),text:null===a||void 0===a?void 0:a.title}),Object(I.jsxs)(E,{customStyles:{backgroundColor:"#EEEEEE"},title:null===a||void 0===a?void 0:a.title,children:[Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("h2",{children:["Criador: ",m?null===m||void 0===m?void 0:m.fullName:"Invalid Creator"]}),Object(I.jsxs)("h2",{children:["Data de publica\xe7\xe3o: ",y()]}),Object(I.jsxs)("h2",{children:["N\xfamero de p\xe1ginas: ",null===a||void 0===a?void 0:a.pageCount]}),Object(I.jsxs)("h2",{children:["Descri\xe7\xe3o: ",(null===a||void 0===a?void 0:a.description)?null===a||void 0===a?void 0:a.description:"Invalid description"]}),Object(I.jsxs)("h2",{children:["Na sua lista: ",g(N,null===a||void 0===a?void 0:a.id)]})]}),Object(I.jsx)(P,{text:"Remover da lista",onClick:function(){return k(_(a))}}),Object(I.jsx)(P,{text:"Adicionar a lista",onClick:function(){return k(A(a))}})]})]})},X=function(){var e=Object(r.c)(q),t=Object(r.b)();return e.length>0?Object(I.jsxs)("div",{className:"",children:[Object(I.jsx)(D,{image:u.list,text:"Consulte sua lista de quadrinhos"}),Object(I.jsx)(E,{customStyles:{backgroundColor:"#F5F5F5"},title:"Consulte sua lista de quadrinhos",children:e.map((function(e,n){return Object(I.jsxs)("div",{style:{padding:32},children:[Object(I.jsxs)("h1",{children:["T\xedtulo: ",e.comicDetails.title]}),Object(I.jsxs)("h1",{children:["Na sua lista: ",e.numberOfComics]}),Object(I.jsx)(P,{text:"Remover da lista",onClick:function(){return function(e){return t(_(e))}(e.comicDetails)}}),Object(I.jsx)(P,{text:"Adicionar a lista",onClick:function(){return function(e){return t(A(e))}(e.comicDetails)}})]},n)}))})]}):Object(I.jsx)(D,{image:u.error,backgroundImage:u.errorBackground,text:"Voc\xea ainda n\xe3o possui nenhum quadrinho em sua lista Adicione quadrinhos na p\xe1gina principal"})},K=(n(43),function(e){var t=e.items,n=Object(c.useState)(!1),i=Object(d.a)(n,2),a=i[0],r=i[1],o=function(){return Object(I.jsx)("div",{className:a?"burgerButtonContainer-opened":"burgerButtonContainer",children:Object(I.jsx)("div",{className:"burgerButton",onClick:function(){return r(!a)},children:a?Object(I.jsx)(G.a,{style:{alignSelf:"center",fontSize:26},color:"#F0141E",icon:U.c}):Object(I.jsx)(G.a,{style:{alignSelf:"center",fontSize:26},color:"#F0141E",icon:U.a})})})};return a?Object(I.jsxs)("div",{className:"sideBarMenu",children:[o(),t.map((function(e,t){return Object(I.jsx)(s.b,{to:e.path,className:"marvelDefaultText menuItem",style:{fontSize:22,padding:"8px 0px 8px 0px"},onClick:function(){return r(!1)},children:e.text},t)}))]}):o()}),Y=function(){var e=j().width,t=h(e),n=t.isMobile,c=t.isTablet,i=[{text:"Quadrinhos",path:o.home},{text:"Personagens",path:o.characters},{text:"Minha lista",path:o.list}];return n||c?Object(I.jsxs)("div",{className:"navBar navBar-mobile",children:[Object(I.jsx)("div",{className:"marvelLogo marvelLogo-mobile",children:Object(I.jsx)(s.b,{className:"marvelDefaultText",style:{paddingRight:8,paddingLeft:8},to:o.home,children:"M"})}),Object(I.jsx)(K,{items:i})]}):Object(I.jsxs)("div",{className:"navBar",children:[Object(I.jsx)(s.b,{style:{height:"100%"},to:o.home,children:Object(I.jsx)("img",{src:u.logo,className:"marvelLogo",alt:"logo"})}),Object(I.jsx)("div",{className:"menuLine",children:i.map((function(e,t){return Object(I.jsx)(s.b,{to:e.path,className:"marvelDefaultText menuItem",children:e.text},t)}))})]})};var Z=function(){return Object(I.jsxs)(s.a,{basename:"/marvel-app",children:[Object(I.jsx)(Y,{}),Object(I.jsx)(l.a,{path:o.home,exact:!0,component:H}),Object(I.jsx)(l.a,{path:o.comics,component:W}),Object(I.jsx)(l.a,{path:o.characters,component:Q}),Object(I.jsx)(l.a,{path:o.list,component:X})]})},$=n(15),ee={counter:0},te=n(31),ne={comics:[]},ce=Object($.b)({counterReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(y.a)(Object(y.a)({},e),{},{counter:e.counter-1});case L:return Object(y.a)(Object(y.a)({},e),{},{counter:e.counter+1});default:return e}},comicsReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=function(){var n=e.comics;if(!!!O(n,t.newValue.id)){var c={numberOfComics:1,comicDetails:t.newValue};return n.push(c),Object(te.a)(n)}return n.map((function(e){return e.comicDetails.id===t.newValue.id?Object(y.a)(Object(y.a)({},e),{},{numberOfComics:e.numberOfComics+1}):e}))},c=function(){var n=e.comics,c=O(n,t.newValue.id);return!!c?1===c.numberOfComics?n.filter((function(e){return e.comicDetails.id!==t.newValue.id})):n.map((function(e){return e.comicDetails.id===t.newValue.id?Object(y.a)(Object(y.a)({},e),{},{numberOfComics:e.numberOfComics-1}):e})):Object(te.a)(n)};switch(t.type){case R:return Object(y.a)(Object(y.a)({},e),{},{comics:n()});case V:return Object(y.a)(Object(y.a)({},e),{},{comics:c()});default:return e}}}),ie=Object($.c)(ce),ae=function(){return Object(I.jsx)(r.a,{store:ie,children:Object(I.jsx)(Z,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};a.a.render(Object(I.jsx)(ae,{}),document.getElementById("root")),re()},43:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/miles-morales.c51f6de4.png"},57:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ny.d8dfa83b.jpg"},58:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/deadpool-sad.ee4d77fb.png"},59:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rain.087b7fd6.png"},60:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/deadpool-reading.5afa8a20.png"},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/marvel-logo.568d8c62.png"},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.81961a96.chunk.js.map