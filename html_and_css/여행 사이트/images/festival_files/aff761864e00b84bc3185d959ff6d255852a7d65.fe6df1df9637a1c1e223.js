(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{awzt:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("rg98"),i=r("vJKn"),o=r.n(i),a=r("TyAF"),u=r("q1tI"),s=r("nKUr"),c=Object(a.c)((function(e){var t=e.successImageSource,r=void 0===t?"":t,i=e.successImageClassName,a=void 0===i?"":i,c=e.isOpened,b=void 0!==c&&c,h=e.isLong,m=void 0!==h&&h,l=e.disableBtn,f=void 0!==l&&l,N=e.placeHolder,p=void 0===N?"":N,g=e.onClickAfterAuthentication,O=e.phoneNumberStore,d=O.getAuthenticationNumber,j=O.verifyPhoneNumber,y=O.setAuthenticationNumber,P=O.getTimeString,v=O.countRemainingTime,A=O.getPhoneNumberSubmitted,S=O.getPhoneNumberAuthenticated,T=O.getVerifyButtonText;Object(u.useEffect)((function(){setInterval((function(){v()}),1e3)}));var _=Object(u.useCallback)(function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j();case 3:e.sent&&g&&g();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),E=Object(u.useMemo)((function(){return r?Object(s.jsx)("img",{alt:"success image",src:r,className:a}):""}),[r]);return Object(s.jsxs)("div",{className:"PhoneNumberAuth "+(A()&&!S()||b?"open":"close"),children:[Object(s.jsxs)("div",{className:"PhoneNumberAuth__inputWrapper "+(A()&&!S()?"open":"close"),children:[Object(s.jsx)("input",{type:"text",className:"PhoneNumberAuth__input",value:d(),onChange:function(e){return y(e.target.value)},disabled:!!S(),readOnly:!0,placeholder:p,onFocus:function(e){return e.target.removeAttribute("readonly")},autoFocus:!0}),Object(s.jsx)("div",{className:"PhoneNumberAuth__time",children:S()?E:P()})]}),Object(s.jsx)("button",{onClick:function(e){return _(e)},className:"PhoneNumberAuth__submit\n          PhoneNumberAuth__submit--"+(S()?"--completed":"--send")+"\n          "+(A()?"":"PhoneNumberAuth__submit--notSubmitted")+"\n        ",disabled:!(!S()&&!f),children:T(m)})]})}))},byms:function(e,t,r){"use strict";var n,i,o,a,u,s,c,b,h,m,l,f,N,p,g,O,d,j,y,P,v,A,S,T,_,E,w,C,R=r("rg98"),M=r("4nv/"),z=r("H+61"),I=r("EaFg"),U=(r("ACih"),r("vJKn")),x=r.n(U),D=r("2vnA"),k=r("vDqi"),B=r.n(k),H=r("vYRp"),L=r("JmBU"),Y=r("KNpN"),K=r("HZAT"),V=(n=function e(){var t=this;Object(z.a)(this,e),Object(M.a)(this,"message",i,this),this.getMessage=function(){return t.message},Object(M.a)(this,"setMessage",o,this),Object(M.a)(this,"disappearMessage",a,this)},i=Object(I.a)(n.prototype,"message",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),o=Object(I.a)(n.prototype,"setMessage",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.message=t}}}),a=Object(I.a)(n.prototype,"disappearMessage",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;e.setMessage(t),setTimeout((function(){return e.setMessage(t)}),r)}}}),n),F=r("tUgX"),J=K.a.intlStringFactory(["PhoneNumberStore_TIME_OUT_RETRY","PhoneNumberStore_ALREADY_AUTHENTICATED","PhoneNumberStore_INPUT_PHONE_NUMBER_CORRECTLY","PhoneNumberStore_ALREADY_USED_PHONE_NUMBER","PhoneNumberStore_ERROR_TRY_AGAIN","PhoneNumberStore_TIME_OUT_RESEND","PhoneNumberStore_WRONG_NUMBER","PhoneNumberStore_PHONE_NUMBER","PhoneNumberStore_RESEND","PhoneNumberStore_AUTHENTICATION","PhoneNumberStore_COMPLETED","PhoneNumberStore_SEND","PhoneNumberStore_AUTHENTICATE","PhoneNumberStore_AUTHENTICATION_COMPLETED","PhoneNumberStore_input_authentication_number"]),G=(u=function e(t){var r=this;Object(z.a)(this,e),this.messageStore=void 0,this.loadingStore=void 0,Object(M.a)(this,"phoneNumber",s,this),Object(M.a)(this,"verifyTime",c,this),Object(M.a)(this,"timeString",b,this),Object(M.a)(this,"phoneNumberSubmitted",h,this),Object(M.a)(this,"phoneNumberAuthenticated",m,this),Object(M.a)(this,"authenticationNumber",l,this),Object(M.a)(this,"countryObjectArray",f,this),Object(M.a)(this,"countryObject",N,this),this.getPhoneNumber=function(){return r.phoneNumber},Object(M.a)(this,"setPhoneNumber",p,this),this.getPhoneNumberSubmitted=function(){return r.phoneNumberSubmitted},Object(M.a)(this,"setPhoneNumberSubmitted",g,this),this.getPhoneNumberAuthenticated=function(){return r.phoneNumberAuthenticated},Object(M.a)(this,"setPhoneNumberAuthenticated",O,this),this.getVerifyTime=function(){return r.verifyTime},Object(M.a)(this,"setVerifyTime",d,this),this.getCountryObject=function(){return r.countryObject},Object(M.a)(this,"setCountryObject",j,this),this.getTimeString=function(){return r.timeString},Object(M.a)(this,"setTimeString",y,this),this.getCountryObjectArray=function(){return r.countryObjectArray},Object(M.a)(this,"setCountryObjectArray",P,this),this.isCountryCodeKorea=function(){return"82"===r.getCountryObject().code},Object(M.a)(this,"setPhoneNumberByProfile",v,this),Object(M.a)(this,"countRemainingTime",A,this),Object(M.a)(this,"verifyPhoneNumber",S,this),Object(M.a)(this,"resendPhoneNumber",T,this),Object(M.a)(this,"sendPhoneNumber",_,this),this.getAuthenticationNumber=function(){return r.authenticationNumber},Object(M.a)(this,"setAuthenticationNumber",E,this),Object(M.a)(this,"sendPhoneNumberApi",w,this),Object(M.a)(this,"verifyPhoneNumberApi",C,this),this.checkPhoneNumberRegex=function(){return/^\d{3}\d{3,4}\d{4}$/.test(r.getPhoneNumber())},this.getSendButtonText=function(){return r.getPhoneNumberSubmitted()?r.getPhoneNumberAuthenticated()?J.PhoneNumberStore_AUTHENTICATION:J.PhoneNumberStore_RESEND:J.PhoneNumberStore_SEND},this.getVerifyButtonText=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r.getPhoneNumberAuthenticated()?e?J.PhoneNumberStore_AUTHENTICATION_COMPLETED:J.PhoneNumberStore_COMPLETED:e?J.PhoneNumberStore_AUTHENTICATE:J.PhoneNumberStore_AUTHENTICATION},this.messageStore=null!==t&&void 0!==t&&t.messageStore?t.messageStore:new V,this.loadingStore=null!==t&&void 0!==t&&t.loadingStore?t.loadingStore:new F.a},s=Object(I.a)(u.prototype,"phoneNumber",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=Object(I.a)(u.prototype,"verifyTime",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=Object(I.a)(u.prototype,"timeString",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"00:00"}}),h=Object(I.a)(u.prototype,"phoneNumberSubmitted",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),m=Object(I.a)(u.prototype,"phoneNumberAuthenticated",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=Object(I.a)(u.prototype,"authenticationNumber",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=Object(I.a)(u.prototype,"countryObjectArray",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return L.a}}),N=Object(I.a)(u.prototype,"countryObject",[D.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{code:"82",title:"Korea"}}}),p=Object(I.a)(u.prototype,"setPhoneNumber",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r=t.replace(Y.a.NOT_NUMBER,"");("82"===e.getCountryObject().code&&r.length<=11||"82"!==e.getCountryObject().code&&r.length<=20)&&(e.phoneNumber=t)}}}),g=Object(I.a)(u.prototype,"setPhoneNumberSubmitted",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.phoneNumberSubmitted=t}}}),O=Object(I.a)(u.prototype,"setPhoneNumberAuthenticated",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.phoneNumberAuthenticated=t}}}),d=Object(I.a)(u.prototype,"setVerifyTime",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.verifyTime=t}}}),j=Object(I.a)(u.prototype,"setCountryObject",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.countryObject=t}}}),y=Object(I.a)(u.prototype,"setTimeString",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.timeString=t}}}),P=Object(I.a)(u.prototype,"setCountryObjectArray",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.countryObjectArray=t}}}),v=Object(I.a)(u.prototype,"setPhoneNumberByProfile",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,r){t.phoneNumber&&(e.setPhoneNumber(t.phoneNumber.replace(/-/g,"")),e.getCountryObject().code=t.countryCode?t.countryCode:"82",t.phoneNumberConfirmed&&!r&&e.setPhoneNumberAuthenticated(!0))}}}),A=Object(I.a)(u.prototype,"countRemainingTime",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(e.verifyTime&&!e.phoneNumberAuthenticated){var t=(new Date).getTime(),r=Math.floor((18e4-(t-e.verifyTime))/1e3);if(r<0)e.messageStore.disappearMessage(J.PhoneNumberStore_TIME_OUT_RETRY),e.setTimeString("00:00"),e.setVerifyTime(null);else{var n=r%60;e.setTimeString("0"+Math.floor(r/60)+":"+(n<10?"0"+n:n))}}}}}),S=Object(I.a)(u.prototype,"verifyPhoneNumber",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(R.a)(x.a.mark((function t(){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!1,null!==e.verifyTime){t.next=5;break}e.messageStore.disappearMessage(J.PhoneNumberStore_TIME_OUT_RESEND),t.next=9;break;case 5:return t.next=7,e.verifyPhoneNumberApi();case 7:t.sent&&(r=!0,e.setPhoneNumberAuthenticated(!0),e.messageStore.setMessage(""));case 9:return t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))}}),T=Object(I.a)(u.prototype,"resendPhoneNumber",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.setPhoneNumber("0"+e.getPhoneNumber()),e.sendPhoneNumber()}}}),_=Object(I.a)(u.prototype,"sendPhoneNumber",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(R.a)(x.a.mark((function t(){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.getPhoneNumberAuthenticated()&&alert(J.PhoneNumberStore_ALREADY_AUTHENTICATED),e.isCountryCodeKorea()&&e.getPhoneNumber().length<10&&e.messageStore.disappearMessage(J.PhoneNumberStore_INPUT_PHONE_NUMBER_CORRECTLY),e.loadingStore.setIsLoading(!0),t.next=5,e.sendPhoneNumberApi();case 5:t.sent&&(e.setPhoneNumberSubmitted(!0),r=(new Date).getTime(),e.setVerifyTime(r),e.messageStore.setMessage("")),e.loadingStore.setIsLoading(!1);case 8:case"end":return t.stop()}}),t)})))}}),E=Object(I.a)(u.prototype,"setAuthenticationNumber",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r=t.replace(/[^0-9]/g,"").slice(0,6);e.authenticationNumber=r}}}),w=Object(I.a)(u.prototype,"sendPhoneNumberApi",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(R.a)(x.a.mark((function t(){var r,n,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=!1,t.prev=1,t.next=4,B()({method:"post",url:"https://api.codeit.kr/users/phone",headers:{"Content-Type":"application/json",Authorization:Object(H.A)("cat")?"Bearer "+Object(H.A)("cat"):""},data:'\n        {\n          "phoneNumber": "'+e.getPhoneNumber().replace(/[^0-9]/g,"")+'",\n          "countryCode": "'+e.getCountryObject().code+'"\n        }'});case 4:if(!((n=t.sent)&&n.error&&n.error.length>0)){t.next=7;break}throw Error("error in send phone number");case 7:r=!0,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),400===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?e.messageStore.setMessage(J.PhoneNumberStore_ALREADY_USED_PHONE_NUMBER):e.messageStore.disappearMessage(J.PhoneNumberStore_ERROR_TRY_AGAIN);case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))}}),C=Object(I.a)(u.prototype,"verifyPhoneNumberApi",[D.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(R.a)(x.a.mark((function t(){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B()({method:"post",url:"https://api.codeit.kr/users/phone/verify",headers:{"Content-Type":"application/json",Authorization:Object(H.A)("cat")?"Bearer "+Object(H.A)("cat"):""},data:'{\n          "verifyCode": '+e.getAuthenticationNumber()+"\n        }"});case 3:r=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),Object(H.a)("error in verifying phone number : ",t.t0),e.messageStore.setMessage(J.PhoneNumberStore_WRONG_NUMBER);case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))}}),u);t.a=G}}]);