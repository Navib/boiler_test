!function(e){function t(t){for(var r,l,o=t[0],c=t[1],d=t[2],s=0,f=[];s<o.length;s++)l=o[s],n[l]&&f.push(n[l][0]),n[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);f.length;)f.shift()();return u.push.apply(u,d||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={1:0},u=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var i=c;u.push([663,0]),a()}({189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(96));n(a(23));function n(e){return e&&e.__esModule?e:{default:e}}t.default={getQuotes:function(){return r.default.get("https://api.myjson.com/bins/dc50v",{withCredentials:!1})}}},190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(96));n(a(23));function n(e){return e&&e.__esModule?e:{default:e}}t.default={getVideos:function(){return r.default.get("https://api.myjson.com/bins/1649pv",{withCredentials:!1})}}},196:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(96));n(a(23));function n(e){return e&&e.__esModule?e:{default:e}}t.default={getStuff:function(){return r.default.get("https://api.myjson.com/bins/f4o3f",{withCredentials:!1})}}},219:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(95),n=i(a(441)),u=i(a(440)),l=i(a(439)),o=i(a(438)),c=i(a(437)),d=a(122);function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.combineReducers)({routing:d.routerReducer,text:n.default,header:u.default,videos:l.default,quotes:o.default,footer:c.default});t.default=s},23:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BASIC_ACTION:"BASIC_ACTION",GET_HEADER:"GET_HEADER",GOT_STUFF:"GOT_STUFF",GOT_NO_STUFF:"GOT_NO_STUFF",GET_VIDEOS:"GET_VIDEOS",GOT_VIDEOS:"GOT_VIDEOS",GET_QUOTES:"GET_QUOTES",GOT_QUOTES:"GOT_QUOTES",GET_FOOTER:"GET_FOOTER",GOT_FOOTER:"GOT_FOOTER"}},265:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(3),u=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){return u.default.createElement("div",null,"Our C component")}},272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(3)),n=o(a(1)),u=o(a(271)),l=o(a(268));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return r.default.createElement(u.default,{title:"Our project",onTitleClick:e.goHome,iconElementRight:r.default.createElement(l.default,{label:"Show stuff"}),onRightIconButtonClick:e.onClick})};c.propTypes={goHome:n.default.func.isRequired},c.defaultProps={goHome:function(){return console.log("going home")}},t.default=c},273:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(272));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{}},function(e,t){return{onClick:function(){e({type:n.default.GET_STUFF})}}})(u.default);t.default=o},276:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(3)),n=o(a(1)),u=o(a(275)),l=o(a(273));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return r.default.createElement("div",null,r.default.createElement(l.default,null),r.default.createElement(u.default,{label:e.buttonText,onClick:e.onClick}))};c.propTypes={buttonText:n.default.string.isRequired,onClick:n.default.func.isRequired},c.defaultProps={buttonText:"defaultText",onClick:function(){return console.log("default click action")}},t.default=c},277:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(3)),n=l(a(1)),u=a(188);l(a(126)),l(a(186));function l(e){return e&&e.__esModule?e:{default:e}}var o={root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},gridList:{display:"flex",flexWrap:"nowrap",overflowX:"auto"},titleStyle:{color:"rgb(255, 255, 255)",letterSpacing:"1px",textTransform:"uppercase"}},c=function(e){return void 0===e.videos?r.default.createElement("div",null,"loading..."):r.default.createElement("div",{className:"video-wrapper"},r.default.createElement("h1",{className:"section-header"},"Demo Reel"),r.default.createElement("div",{style:o.root},r.default.createElement(u.GridList,{style:o.gridList,cols:1,cellHeight:"auto"},e.videos.slice(0,1).map(function(e){return r.default.createElement(u.GridTile,{key:e.id},r.default.createElement("div",{className:"video-player-wrap"},r.default.createElement("iframe",{src:e.demo_video,frameBorder:"0",allowFullScreen:!0})))}))))};c.propTypes={videos:n.default.array},c.defaultProps={videos:[{title:"Default Title",id:"0",demo_video:"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}]},t.default=c},278:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(277));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{videos:e.videos.data}},function(e,t){return e({type:n.default.GET_VIDEOS})})(u.default);t.default=o},281:function(e,t,a){e.exports=a.p+"assets/footer_bg.png"},282:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(3)),n=u(a(1));function u(e){return e&&e.__esModule?e:{default:e}}a(281);var l=function(e){var t=e.footer,a=t.contact,n=t.name,u=t.social;return r.default.createElement("div",{className:"footer-container"},r.default.createElement("div",{className:"content"},r.default.createElement("ul",{className:"social-bar"},u.map(function(e){return r.default.createElement("li",{className:"social-item "+e.name+"-icon",key:e.id},r.default.createElement("a",{href:e.src,target:"_blank"},e.name))})),r.default.createElement("div",{className:"footer-contact-card"},r.default.createElement("h1",{className:"f-name"},n),r.default.createElement("ul",{className:"contact-list"},r.default.createElement("li",{className:"contact-list-item"},r.default.createElement("a",{href:"mailto:"+a.email},a.email)),r.default.createElement("li",{className:"contact-list-item"},r.default.createElement("a",{href:"https://www.google.com/maps/place/New+York,+NY/@40.6971494,-74.2598687,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728",target:"_blank"},a.location)),r.default.createElement("li",{className:"contact-list-item"},r.default.createElement("small",{style:{borderBottom:"1px solid #444",display:"inline-block",lineHeight:"20px",color:"black"}},"Manager")," ",r.default.createElement("br",null),a.management_name),r.default.createElement("li",{className:"contact-list-item"},r.default.createElement("a",{href:"tel:+01-"+a.management_contact},a.management_contact))))),r.default.createElement("div",{className:"footerBackground",style:{backgroundImage:"url(./assets/footer_bg.png)",backgroundSize:"180px",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}))};l.propTypes={footer:n.default.object},l.defaultProps={footer:{contact:{email:"test@email.com",location:"Abudabi TEST",management_contact:"MGMT Business TEST",management_name:"Person Mgmt TEST"},name:"Person Name",social:[{id:0,src:"#",name:"FacebookTEST"},{id:1,src:"#",name:"TwitterTEST"},{id:2,src:"#",name:"YoutubeTEST"},{id:3,src:"#",name:"VimeoTEST"}]}},t.default=l},283:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(282));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{footer:e.footer.data}},function(e,t){return e({type:n.default.GET_FOOTER})})(u.default);t.default=o},284:function(e,t,a){e.exports=a.p+"assets/onsetdam.png"},285:function(e,t,a){e.exports=a.p+"assets/tmobile.png"},286:function(e,t,a){e.exports=a.p+"assets/studio.png"},287:function(e,t,a){e.exports=a.p+"assets/jcsactor.png"},288:function(e,t,a){e.exports=a.p+"assets/face_2.png"},289:function(e,t,a){e.exports=a.p+"assets/face_1.png"},296:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(3)),n=l(a(295)),u=l(a(1));function l(e){return e&&e.__esModule?e:{default:e}}a(289),a(288),a(287),a(286),a(285),a(284);var o={direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:30},c=function(e){return void 0===e.quotes?r.default.createElement("div",null,"loading..."):r.default.createElement("div",{className:"quote-wrapper"},r.default.createElement("h1",{className:"section-header"},r.default.createElement("span",null,"Reviews")),r.default.createElement(n.default,o,e.quotes.map(function(e){return r.default.createElement("div",{className:"quote-slide",key:e.id},r.default.createElement("div",{className:"left-side"},r.default.createElement("p",{className:"text-body"},e.quote),r.default.createElement("p",{className:"text-author"},e.author)),r.default.createElement("div",{className:"right-side"},r.default.createElement("img",{src:e.bgImage,className:"quote-img"})))})))};c.propTypes={quotes:u.default.array},t.default=c},297:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(296));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{quotes:e.quotes.data}},function(e,t){return e({type:n.default.GET_QUOTES})})(u.default);t.default=o},321:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(3)),n=l(a(1)),u=a(188);l(a(126)),l(a(186));function l(e){return e&&e.__esModule?e:{default:e}}var o={root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},gridList:{display:"flex",flexWrap:"nowrap",overflowX:"auto"},titleStyle:{color:"rgb(255, 255, 255)",letterSpacing:"1px",textTransform:"uppercase"}},c=function(e){return void 0===e.videos?r.default.createElement("div",null,"loading..."):r.default.createElement("div",{className:"video-wrapper"},r.default.createElement("h1",{className:"section-header"},"Media Clips"),r.default.createElement("div",{style:o.root},r.default.createElement(u.GridList,{style:o.gridList,cols:1,cellHeight:"auto"},e.videos.slice(1,6).map(function(e){return r.default.createElement(u.GridTile,{key:e.id,title:e.title,titleStyle:o.titleStyle,titleBackground:"linear-gradient(to top, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)",titlePosition:"top"},r.default.createElement("div",{className:"video-player-wrap"},r.default.createElement("iframe",{src:e.demo_video,frameBorder:"0",allowFullScreen:!0})))}))))};c.propTypes={videos:n.default.array},c.defaultProps={videos:[{title:"Default Title",id:"0",demo_video:"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}]},t.default=c},322:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(321));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{videos:e.videos.data}},function(e,t){return e({type:n.default.GET_VIDEOS})})(u.default);t.default=o},323:function(e,t,a){e.exports=a.p+"assets/header_face.png"},329:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(3)),n=l(a(1)),u=l(a(128));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a(323);var c=function(e){var t,a=e.header,n=a.name,l=a.location,c=(a.demoImg,a.attributes),d=(a.imgSrc,o(t={backgroundImage:"url("+e.header.imgSrc+")",backgroundSize:"cover",height:"100vh",backgroundPosition:"top",position:"absolute",width:"100%",top:0,left:0,zIndex:"-1"},"backgroundPosition","center"),o(t,"backgroundAttachment","fixed"),o(t,"backgroundRepeat","no-repeat"),t);return void 0===e.header?r.default.createElement("div",null,"loading..."):r.default.createElement("div",{className:"header-wrapper"},r.default.createElement("div",{className:"header-img",style:d}),r.default.createElement(u.default,{className:"card-info",zDepth:4},r.default.createElement("div",{className:"name"},n),r.default.createElement("div",{className:"attr"},c[0]),r.default.createElement("div",{className:"location"},l)),r.default.createElement("div",{className:"left-side"},c[2]),r.default.createElement("div",{className:"right-side"},c[1]))};c.propTypes={header:n.default.object},c.defaultProps={header:{name:"Test Name",location:"Test Location",demoImg:"http://via.placeholder.com/1000x800",attributes:["default1","default2","default3"]}},t.default=c},330:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(329));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{header:e.header.data}},function(e,t){return e({type:n.default.GET_HEADER})})(u.default);t.default=o},331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a(3)),n=s(a(1)),u=s(a(330)),l=s(a(322)),o=s(a(297)),c=s(a(283)),d=s(a(280)),i=s(a(278));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){return r.default.createElement("div",null,r.default.createElement(u.default,null),r.default.createElement(i.default,null),r.default.createElement(l.default,null),r.default.createElement(d.default,{style:{marginTop:"4em"}}),r.default.createElement(o.default,null),r.default.createElement(d.default,null),r.default.createElement(c.default,null))};f.propTypes={buttonText:n.default.string.isRequired,onClick:n.default.func.isRequired},f.defaultProps={buttonText:"defaultText",onClick:function(){return console.log("default click action")}},t.default=f},332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(51),n=l(a(23)),u=l(a(331));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.connect)(function(e,t){return{buttonText:e.text}},function(e,t){return{onClick:function(){e({type:n.default.BASIC_ACTION,text:"new text"})}}})(u.default);t.default=o},333:function(e,t,a){e.exports=a.p+"assets/favicon-16x16.png"},334:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(204),u=(r=n)&&r.__esModule?r:{default:r},l=a(97);var o=(0,u.default)({palette:{primary1Color:l.green500,primary2Color:l.green700,primary3Color:l.green100}},{avatar:{borderColor:null}});t.default=o},335:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(96));n(a(23));function n(e){return e&&e.__esModule?e:{default:e}}t.default={getFooter:function(){return r.default.get("https://api.myjson.com/bins/ctbbn",{withCredentials:!1})}}},355:function(e,t,a){"use strict";a(196),a(190),a(189)},356:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sagas=T;var r=a(130),n=d(a(23)),u=(d(a(355)),d(a(196))),l=d(a(190)),o=d(a(189)),c=d(a(335));function d(e){return e&&e.__esModule?e:{default:e}}var i=regeneratorRuntime.mark(v),s=regeneratorRuntime.mark(_),f=regeneratorRuntime.mark(E),p=regeneratorRuntime.mark(g),m=regeneratorRuntime.mark(T);function v(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,r.call)(u.default.getStuff);case 3:return e=t.sent,t.next=6,(0,r.put)({type:n.default.GOT_STUFF,data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("saga fail: ",t.t0),t.next=13,(0,r.put)({type:n.default.GOT_NO_STUFF,error:t.t0});case 13:case"end":return t.stop()}},i,this,[[0,8]])}function _(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,r.call)(l.default.getVideos);case 3:return e=t.sent,t.next=6,(0,r.put)({type:n.default.GOT_VIDEOS,data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("saga fail: ",t.t0),t.next=13,(0,r.put)({type:n.default.GOT_NO_STUFF,error:t.t0});case 13:case"end":return t.stop()}},s,this,[[0,8]])}function E(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,r.call)(o.default.getQuotes);case 3:return e=t.sent,t.next=6,(0,r.put)({type:n.default.GOT_QUOTES,data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("saga fail: ",t.t0),t.next=13,(0,r.put)({type:n.default.GOT_NO_STUFF,error:t.t0});case 13:case"end":return t.stop()}},f,this,[[0,8]])}function g(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,r.call)(c.default.getFooter);case 3:return e=t.sent,t.next=6,(0,r.put)({type:n.default.GOT_FOOTER,data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("saga fail: ",t.t0),t.next=13,(0,r.put)({type:n.default.GOT_NO_STUFF,error:t.t0});case 13:case"end":return t.stop()}},p,this,[[0,8]])}function T(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.all)([(0,r.takeLatest)(n.default.GET_HEADER,v),(0,r.takeLatest)(n.default.GET_VIDEOS,_),(0,r.takeLatest)(n.default.GET_QUOTES,E),(0,r.takeLatest)(n.default.GET_FOOTER,g)]);case 2:case"end":return e.stop()}},m,this)}},357:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=t.store=void 0;var r=a(95),n=d(a(263)),u=d(a(219)),l=a(356),o=d(a(179)),c=a(122);function d(e){return e&&e.__esModule?e:{default:e}}var i=[],s=(0,n.default)();i.push(s);var f=r.applyMiddleware.apply(void 0,i),p=(0,o.default)(),m=(0,r.createStore)(u.default,f,(0,r.compose)((0,r.applyMiddleware)((0,c.routerMiddleware)(p)),window.devToolsExtension?window.devToolsExtension():function(e){return e}));s.run(l.sagas),t.store=m,t.history=p},437:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(23),u=(r=n)&&r.__esModule?r:{default:r};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.default.GOT_FOOTER:return t.data;default:return e}}},438:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(23),u=(r=n)&&r.__esModule?r:{default:r};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.default.GOT_QUOTES:return t.data;default:return e}}},439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(23),u=(r=n)&&r.__esModule?r:{default:r};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.default.GOT_VIDEOS:return t.data;default:return e}}},440:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(23),u=(r=n)&&r.__esModule?r:{default:r};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.default.GOT_STUFF:return t.data;default:return e}}},441:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(23),u=(r=n)&&r.__esModule?r:{default:r};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"some other text",t=arguments[1];switch(t.type){case u.default.BASIC_ACTION:return t.text;default:return e}}},663:function(e,t,a){"use strict";a(662);var r=m(a(3)),n=m(a(79)),u=a(51),l=(a(95),a(264)),o=(m(a(447)),m(a(219)),m(a(436))),c=a(357),d=a(122),i=m(a(334));a(666),a(333);var s=m(a(332)),f=m(a(276)),p=m(a(265));function m(e){return e&&e.__esModule?e:{default:e}}n.default.render(r.default.createElement(o.default,{muiTheme:i.default},r.default.createElement(u.Provider,{store:c.store},r.default.createElement(d.ConnectedRouter,{history:c.history},r.default.createElement("div",null,r.default.createElement(l.Switch,null,r.default.createElement(l.Route,{path:"/c",component:p.default}),r.default.createElement(l.Route,{path:"/b",component:f.default}),r.default.createElement(l.Route,{path:"/",component:s.default})))))),document.getElementById("app"))},666:function(e,t){}});