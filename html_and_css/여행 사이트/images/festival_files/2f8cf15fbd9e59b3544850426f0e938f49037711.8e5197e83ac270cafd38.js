(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+Css":function(e,t,i){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(t,"a",(function(){return n}))},"40XG":function(e,t,i){"use strict";i.d(t,"a",(function(){return N}));var n=i("q1tI"),r=i("m/Gp"),o=i("6d5p"),c=i("TyAF"),a=i("nKUr"),s=Object(c.b)("notificationStore")(Object(c.c)((function(e){var t=e.notificationStore,i=t.count,r=t.fetchNotificationCount;return n.useEffect((function(){r()}),[]),Object(a.jsx)("div",{className:"NotificationTrigger",children:i>0&&Object(a.jsx)("div",{className:"NotificationTrigger__count",children:Object(a.jsx)("span",{children:i})})})}))),l=function(){return Object(a.jsx)(r.a,{className:"NotificationWrapper",trigger:Object(a.jsx)(s,{}),content:Object(a.jsx)(o.a,{})})},d=i("YFqc"),f=i.n(d),u=i("HZAT"),j=i("/ATR"),b=i("vYRp"),O=i("4dgq"),m=Object(c.c)((function(){var e,t;return Object(a.jsx)("div",{className:"HeaderProfile HeaderProfile--photo",children:Object(a.jsx)("img",{src:null!==(e=O.a.getInstance().currentUser.profile)&&void 0!==e&&e.photo?(null===(t=O.a.getInstance().currentUser.profile)||void 0===t?void 0:t.photo)+"?"+(new Date).getTime():"/static/images/profile/default.png",className:"HeaderProfile HeaderProfile--photo__img",alt:"profile_photo",onError:function(e){return function(e){return e.target.src="/static/images/profile/default.png"}(e)}})})})),h=Object(c.c)((function(){var e=u.a.intlStringFactory(["HeaderProfile_MANAGER_ACCOUNT","HeaderProfile_FAQ","HeaderProfile_LEAVE"]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{className:"ClassroomProfileContent HeaderProfile HeaderProfile--menus",children:[Object(a.jsx)(f.a,{href:"/me/profile",prefetch:!1,children:Object(a.jsx)("a",{className:"HeaderProfile HeaderProfile--menus__menu",children:e.HeaderProfile_MANAGER_ACCOUNT})}),Object(a.jsx)(f.a,{href:"/faq",prefetch:!1,children:Object(a.jsx)("a",{className:"HeaderProfile HeaderProfile--menus__menu",children:e.HeaderProfile_FAQ})}),Object(a.jsx)(f.a,{href:"/dashboard",prefetch:!1,children:Object(a.jsx)("a",{className:"HeaderProfile HeaderProfile--menus__menu",children:e.HeaderProfile_LEAVE})})]}),Object(a.jsx)("span",{className:"ClassroomProfileContentArrowTip HeaderProfile HeaderProfile--menusArrowTip"})]})})),p=Object(c.c)((function(){var e=u.a.intlStringFactory(["HeaderProfile_MANAGER_ACCOUNT","HeaderProfile_FAQ","HeaderProfile_MY_CLASS","HeaderProfile_LOGOUT"]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{className:"GeneralProfileContent HeaderProfile HeaderProfile--menus",children:[Object(b.Cb)()&&Object(a.jsx)(f.a,{href:"/dashboard",prefetch:!1,children:Object(a.jsx)("a",{className:"HeaderProfile HeaderProfile--menus__menu",children:e.HeaderProfile_MY_CLASS})}),Object(a.jsx)(f.a,{href:"/me/profile",prefetch:!1,children:Object(a.jsx)("a",{className:"HeaderProfile HeaderProfile--menus__menu",children:e.HeaderProfile_MANAGER_ACCOUNT})}),Object(a.jsx)(f.a,{href:"/faq",prefetch:!1,children:Object(a.jsx)("a",{className:"HeaderProfile HeaderProfile--menus__menu",children:e.HeaderProfile_FAQ})}),Object(a.jsx)("span",{className:"HeaderProfile HeaderProfile--menus__menu",onClick:function(){j.a.logEventByCategory("click","logout_button",{placement:"nav_dropdown"}),O.a.getInstance().logout()},children:e.HeaderProfile_LOGOUT})]}),Object(a.jsx)("span",{className:"GeneralProfileContentArrowTip HeaderProfile HeaderProfile--menusArrowTip"})]})})),_=Object(c.b)("userStore")(Object(c.c)((function(e){var t=e.className,i=e.isClassroom;return Object(a.jsx)(r.a,{className:t,trigger:Object(a.jsx)(m,{}),content:i?Object(a.jsx)(h,{}):Object(a.jsx)(p,{})})}))),N=function(e){var t=e.className,i=void 0===t?"":t,n=e.classNameNotification,r=void 0===n?"":n,o=e.classNameProfile,c=void 0===o?"":o,s=e.isClassroom,d=void 0!==s&&s;return Object(a.jsxs)("div",{className:"HeaderNotificationAndProfile "+i+"\n      "+(d?"HeaderNotificationAndProfile--isClassroom":"")+"\n      "+(Object(b.vb)()?"HeaderNotificationAndProfile--withMembershipButton":"")+"\n      "+(Object(b.Bb)()?"":"HeaderNotificationAndProfile--isClassroom--trial"),children:[!Object(b.vb)()&&Object(a.jsx)(l,{className:"HeaderNotificationAndProfile__notification "+r}),Object(a.jsx)(_,{className:"HeaderNotificationAndProfile__profile "+c,isClassroom:d})]})}},"4HrR":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("m/Gp"),r=i("nKUr"),o=function(e){var t=e.text,i=e.length,o=e.type,c=void 0===o?"hover":o,a=e.className,s=void 0===a?"":a,l=e.isRight,d=void 0!==l&&l,f=e.textOverflow,u=void 0===f?"..":f,j=function(){return Object(r.jsxs)(r.Fragment,{children:[t.slice(0,i)+u,Object(r.jsx)("span",{className:"TextLengthController__fullText",children:t})]})},b=function(){return Object(r.jsx)(n.a,{trigger:Object(r.jsx)(r.Fragment,{children:t.slice(0,i)+u}),content:Object(r.jsx)("span",{className:"TextLengthController__fullText",children:t})})};return Object(r.jsx)("span",{className:"TextLengthController "+c+" "+s+" "+(d?"isRight":""),children:t?t.length>i?Object(r.jsxs)(r.Fragment,{children:["hover"===c?Object(r.jsx)(j,{}):Object(r.jsx)(r.Fragment,{}),"click"===c?Object(r.jsx)(b,{}):Object(r.jsx)(r.Fragment,{})]}):t:""})}},"6d5p":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i("q1tI"),r=i("TyAF"),o=i("qyWI"),c=i("fiDI"),a=i("HZAT"),s=i("rg98"),l=i("vJKn"),d=i.n(l),f=i("YFqc"),u=i.n(f),j=i("vYRp"),b=i("PnHx"),O=i("nKUr"),m=Object(r.b)("notificationStore")(Object(r.c)((function(e){a.a.intlStringFactory(["NotificationItem_CODEIT_NOTIFICATION"]);var t=e.item,i=e.deleteItem,r=e.notificationStore,o=n.useCallback(Object(s.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.readItem(t.id);case 2:case"end":return e.stop()}}),e)}))),[t.read]);return Object(O.jsxs)("div",{className:"NotificationItem "+(t.read?"Readed":""),children:[Object(O.jsx)("span",{className:"NotificationItem__symbol "}),Object(O.jsxs)("div",{className:"NotificationItem__body",children:[Object(b.i)(t)?Object(O.jsx)(u.a,{href:Object(b.h)(t),children:Object(O.jsxs)("a",{className:"NotificationItem__body__content",onClick:o,target:"_blank",children:["",Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})}):Object(O.jsxs)("a",{className:"NotificationItem__body__content",onClick:function(){Object(b.f)(t),o()},children:["",Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]}),Object(O.jsx)("span",{className:"NotificationItem__body__date",children:Object(j.L)(new Date(t.createdAt))}),Object(O.jsx)("button",{className:"NotificationItem__delete",onClick:function(e){i(t.id),e.preventDefault(),e.stopPropagation()}})]})]})}))),h=Object(r.b)("notificationStore","sizeStore")(Object(r.c)((function(e){var t=e.notificationStore,i=e.sizeStore,r=e.setHide,s=a.a.intlStringFactory(["NotificationTemplate_NOTICE","NotificationTemplate_DELETE_ALL","NotificationTemplate_ERROR","NotificationTemplate_ALL_READ"]),l=Object(n.useRef)(null),d=t,f=d.fetchNotification,u=d.notificationList,j=d.deleteNotification,b=d.isLoading,h=d.isError,p=d.isEnd,_=d.deleteAll,N=d.isInit,g=d.count,w=d.resetOption;Object(n.useEffect)((function(){i.isTabletOrMobileSize&&(document.getElementsByTagName("html")[0].style.overflow="hidden");return function(){i.isTabletOrMobileSize&&(document.getElementsByTagName("html")[0].style.overflow="")}}),[]),Object(n.useEffect)((function(){return w(),f(),w}),[]);var x=Object(n.useCallback)((function(){var e=document.getElementsByTagName("html");e&&e[0].click(),r&&r(!1)}),[]),v=function(){if(!(b||p||h)){var e=l.current.clientHeight;l.current.scrollHeight-e-l.current.scrollTop<20&&f()}};return Object(n.useEffect)((function(){return l.current&&l.current.addEventListener("scroll",v),function(){l.current&&l.current.removeEventListener("scroll",v)}}),[]),Object(O.jsxs)("div",{className:"NotificationTemplate",children:[Object(O.jsxs)("header",{className:"NotificationTemplate__sidebarHeader",children:[Object(O.jsx)("img",{alt:"logo",src:"/static/images/brand/logo_original.png",width:74,height:21}),Object(O.jsx)("button",{onClick:x,className:"NotificationTemplate__closeBtn",children:Object(O.jsx)("img",{alt:"button decoration",src:"/static/images/icons/x-purple.svg"})})]}),Object(O.jsx)("span",{className:"NotificationTemplate__angle"}),Object(O.jsxs)("header",{className:"NotificationTemplate__header",children:[Object(O.jsxs)("span",{className:"NotificationTemplate__header__count",children:[s.NotificationTemplate_NOTICE," ",g]}),Object(O.jsx)("button",{className:"NotificationTemplate__header__delete",onClick:_,children:s.NotificationTemplate_DELETE_ALL})]}),Object(O.jsxs)("section",{className:"NotificationTemplate__body",ref:l,onScroll:v,children:[!N&&b&&Object(O.jsx)(o.a,{}),h&&Object(O.jsx)("p",{className:"NotificationTemplate__caption",children:s.NotificationTemplate_ERROR}),0===u.length&&N&&!b&&Object(O.jsx)("p",{className:"NotificationTemplate__caption",children:s.NotificationTemplate_ALL_READ}),u.map((function(e,t){return Object(O.jsx)(m,{item:e,deleteItem:j},t)})),N&&b&&Object(O.jsx)(c.a,{})]})]})})))},"7LId":function(e,t,i){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}i.d(t,"a",(function(){return r}))},QMV7:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n,r,o,c,a,s,l,d=i("z7pX"),f=i("4nv/"),u=i("H+61"),j=i("UlJF"),b=i("EaFg"),O=(i("ACih"),i("2vnA")),m=i("LvDl"),h=i("vYRp"),p=(l=s=function(){function e(){var t=this;Object(u.a)(this,e),Object(f.a)(this,"windowWidth",r,this),Object(f.a)(this,"screenWindow",o,this),Object(f.a)(this,"setWindow",c,this),this.handleWindowWidthChange=Object(m.debounce)((function(){var e=t.screenWindow.innerWidth;t.setWindowWidth(e)}),100),Object(f.a)(this,"setWindowWidth",a,this)}return Object(j.a)(e,[{key:"windowSizes",get:function(){var e={XS:Object(m.inRange)(this.windowWidth,0,320),S:Object(m.inRange)(this.windowWidth,320,768),M:Object(m.inRange)(this.windowWidth,768,992),L:Object(m.inRange)(this.windowWidth,992,1200),XL:Object(m.inRange)(this.windowWidth,1200,1400),XXL:Object(m.inRange)(this.windowWidth,1400,Number.POSITIVE_INFINITY)};return Object(m.reduce)(e,(function(e,t,i){return t&&(e=[].concat(Object(d.a)(e),[i])),e}),[])[0]}},{key:"numberedWindowSizes",get:function(){var e={1:Object(m.inRange)(this.windowWidth,0,320),2:Object(m.inRange)(this.windowWidth,320,768),3:Object(m.inRange)(this.windowWidth,768,992),4:Object(m.inRange)(this.windowWidth,992,1200),5:Object(m.inRange)(this.windowWidth,1200,1400),6:Object(m.inRange)(this.windowWidth,1400,Number.POSITIVE_INFINITY)};return parseInt(Object(m.reduce)(e,(function(e,t,i){return t&&(e=[].concat(Object(d.a)(e),[i])),e}),[])[0])}},{key:"isTabletOrMobileSize",get:function(){return this.numberedWindowSizes<=3}}],[{key:"getInstance",value:function(){return null==e.instance&&(e.instance=new e),e.instance}}]),e}(),s.instance=null,n=l,r=Object(b.a)(n.prototype,"windowWidth",[O.o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=Object(b.a)(n.prototype,"screenWindow",[O.o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(b.a)(n.prototype,"setWindow",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){h.S&&(e.screenWindow=window,e.handleWindowWidthChange(),e.screenWindow.addEventListener("resize",e.handleWindowWidthChange))}}}),a=Object(b.a)(n.prototype,"setWindowWidth",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.windowWidth=t,e.windowWidth}}}),Object(b.a)(n.prototype,"windowSizes",[O.g],Object.getOwnPropertyDescriptor(n.prototype,"windowSizes"),n.prototype),Object(b.a)(n.prototype,"numberedWindowSizes",[O.g],Object.getOwnPropertyDescriptor(n.prototype,"numberedWindowSizes"),n.prototype),Object(b.a)(n.prototype,"isTabletOrMobileSize",[O.g],Object.getOwnPropertyDescriptor(n.prototype,"isTabletOrMobileSize"),n.prototype),n)},VIvw:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("C+bE"),r=i.n(n),o=i("+Css");function c(e,t){if(t&&("object"===r()(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(o.a)(e)}},fiDI:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i("q1tI");var n=i("nKUr"),r=function(){return Object(n.jsxs)("div",{className:"Loading",children:[Object(n.jsx)("img",{alt:"loading-icon",src:"/static/images/icons/loading.svg"}),Object(n.jsx)("span",{className:"Loading--shadow"})]})}},iHvq:function(e,t,i){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}i.d(t,"a",(function(){return n}))},qyWI:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i("q1tI");var n=i("nKUr");function r(){return Object(n.jsxs)("div",{className:"PopupLoader",children:[Object(n.jsx)("span",{className:"PopupLoader__symbol First"}),Object(n.jsx)("span",{className:"PopupLoader__symbol Second"}),Object(n.jsx)("span",{className:"PopupLoader__symbol Third"})]})}}}]);