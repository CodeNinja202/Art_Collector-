(this.webpackJsonpart_collector_react=this.webpackJsonpart_collector_react||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),s=a(5),l=a.n(s),u=a(1),i=a.n(u),o=a(2),m="https://api.harvardartmuseums.org",p="apikey=668eaa72-bf4c-4ab9-be94-857445eabb3d";function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/object?").concat(p,"&").concat(t,"=").concat(encodeURI(a.split("-").join("|"))));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function E(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(i.a.mark((function e(t){var a,n,r,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.century,n=t.classification,r=t.queryString,c="".concat(m,"/object?").concat(p,"&classification=").concat(n,"&century=").concat(a,"&keyword=").concat(r),e.prev=2,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return l=e.sent,e.abrupt("return",l);case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function g(){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("centuries")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("centuries")));case 2:return t="".concat(m,"/century?").concat(p,"&size=100&sort=temporalorder"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("centuries",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function j(){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("classifications")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("classifications")));case 2:return t="".concat(m,"/classification?").concat(p,"&size=100&sort=name"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("classifications",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}var O=function(e){var t=e.searchTerm,a=e.searchValue,n=e.setIsLoading,r=e.setSearchResults;return c.a.createElement("span",{className:"content"},c.a.createElement("a",{href:"#",onClick:function(){var e=Object(o.a)(i.a.mark((function e(c){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),n(!0),e.prev=2,e.next=5,f(t,a);case 5:s=e.sent,r(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.prev=12,n(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()}," ",a," "))},x=function(e){var t=e.featuredResult;if(!t)return c.a.createElement("main",{id:"feature"});var a=t.title,n=t.dated,s=t.images,l=(t.primaryimageurl,t.description),u=t.culture,i=t.style,o=t.technique,m=t.medium,p=t.dimensions,f=t.people,h=t.department,E=t.divison,v=t.contact,d=t.creditline;return c.a.createElement("main",{id:"feature"},c.a.createElement("div",{className:"object-feature"},c.a.createElement("header",null,c.a.createElement("h3",null,a)," ",c.a.createElement("h4",null,n)),c.a.createElement("section",{className:"facts"},l?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Description"),c.a.createElement("span",{className:"content"},l)):null,u?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Culture"),c.a.createElement(O,Object.assign({searchTerm:"culture",searchValue:u},e))):null,i?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Style"),c.a.createElement("span",{className:"content"},i)):null,o?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Technique"),c.a.createElement(O,Object.assign({searchTerm:"technique",searchValue:o},e))):null,m?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Medium"),c.a.createElement(O,Object.assign({searchTerm:"medium",searchValue:m.toLowerCase()},e))):null,p?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Dimensions"),c.a.createElement("span",{className:"content"},p)):null,f?f.map((function(t){return c.a.createElement(r.Fragment,{key:t.displayname},c.a.createElement("span",{className:"title"},"Person"),c.a.createElement(O,Object.assign({searchTerm:"person",searchValue:t.displayname},e)))})):null,h?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Department"),c.a.createElement("span",{className:"content"},h)):null,E?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Division"),c.a.createElement("span",{className:"content"},E)):null,v?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Contact"),c.a.createElement("span",{className:"content"},v)):null,d?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"title"},"Creditline"),c.a.createElement("span",{className:"content"},d)):null),c.a.createElement("section",{className:"photos"},s?s.map((function(e,t){return c.a.createElement("img",{key:t,src:e.baseimageurl,alt:e.alttext})})):null)))},S=function(){return c.a.createElement("div",{id:"loading"},c.a.createElement("h2",{className:"message"},"Searching..."))},w=function(e){var t=e.searchResults,a=t.info,n=t.records,r=e.setSearchResults,s=e.setFeaturedResult,l=e.setIsLoading;function u(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,E(t);case 4:a=e.sent,r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}return c.a.createElement("aside",{id:"preview"},c.a.createElement("header",{className:"pagination"},c.a.createElement("button",{disabled:!a.prev,className:"previous",onClick:function(){return u(a.prev)}},"Previous"),c.a.createElement("button",{disabled:!a.next,className:"next",onClick:function(){return u(a.next)}},"Next")),c.a.createElement("section",{className:"results"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"object-preview",onClick:function(t){t.preventDefault(),s(e)}},e.primaryimageurl&&c.a.createElement("img",{src:e.primaryimageurl,alt:e.description}),e.title?c.a.createElement("h3",null,e.title):c.a.createElement("h3",null,"MISSING INFO"))}))))},k=function(e){var t=e.setIsLoading,a=e.setSearchResults,s=Object(r.useState)([]),l=Object(n.a)(s,2),u=l[0],m=l[1],p=Object(r.useState)([]),f=Object(n.a)(p,2),h=f[0],E=f[1],v=Object(r.useState)(""),b=Object(n.a)(v,2),y=b[0],N=b[1],O=Object(r.useState)("any"),x=Object(n.a)(O,2),S=x[0],w=x[1],k=Object(r.useState)("any"),F=Object(n.a)(k,2),I=F[0],C=F[1];return Object(r.useEffect)((function(){Promise.all([g(),j()]).then((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];m(a),E(r)})).catch(console.error)}),[]),c.a.createElement("form",{id:"search",onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t(!0),e.prev=2,e.next=5,d({century:S,classification:I,queryString:y});case 5:r=e.sent,a(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error();case 12:return e.prev=12,t(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"keywords"},"Query"),c.a.createElement("input",{id:"keywords",type:"text",placeholder:"enter keywords...",value:y,onChange:function(e){return N(e.target.value)}})),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-classification"},"Classification ",c.a.createElement("span",{className:"classification-count"},"(",h.length,")")),c.a.createElement("select",{name:"classification",id:"select-classification",value:I,onChange:function(e){return C(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),h.map((function(e,t){return c.a.createElement("option",{key:"".concat(t,":").concat(e.name),value:e.name},e.name)})))),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-century"},"Century ",c.a.createElement("span",{className:"century-count"},"(",u.length,")")),c.a.createElement("select",{name:"century",id:"select-century",value:S,onChange:function(e){return w(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),u.map((function(e,t){return c.a.createElement("option",{key:"".concat(t,":").concat(e.name),value:e.name},e.name)})))),c.a.createElement("button",null,"SEARCH"))},F=function(){return c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"The Art Collector"),c.a.createElement("h5",null,"Search the Harvard Art Museums' Private Collections"))},I=function(){var e=Object(r.useState)({info:{},records:[]}),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(r.useState)({}),u=Object(n.a)(l,2),i=u[0],o=u[1],m=Object(r.useState)(!1),p=Object(n.a)(m,2),f=p[0],h=p[1];return c.a.createElement("div",{className:"app"},c.a.createElement(F,null),c.a.createElement(k,{setIsLoading:h,setSearchResults:s}),c.a.createElement(w,{searchResults:a,setIsLoading:h,setSearchResults:s,setFeaturedResult:o}),c.a.createElement(x,{featuredResult:i,setIsLoading:h,setSearchResults:s}),f?c.a.createElement(S,null):null)};l.a.render(c.a.createElement(I,null),document.getElementById("app"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.1981fa4a.chunk.js.map