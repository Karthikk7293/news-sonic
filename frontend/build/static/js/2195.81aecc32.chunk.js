"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2195],{2497:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var n=s(2982),a=s(5861),r=s(885),c=s(7757),l=s.n(c),i=s(2791),d=s(7022),h=s(9743),o=s(9434),u=s(6871),x=s(7204),g=s(9396),m=s(466),j=s(7642),f=s(2874),p=(s(1393),s(2677)),Z=s(4771),v=s(7474),N=s(6281),w=s(184);function k(e){var t=e.posts,s=e.category,c=(0,i.useState)([]),d=(0,r.Z)(c,2),o=d[0],u=d[1],x=(0,i.useState)(!0),m=(0,r.Z)(x,2),f=m[0],N=m[1],k={marginBottom:30,padding:8};(0,i.useEffect)((function(){null!==t&&(N(!0),u((0,n.Z)(t.filter((function(e,t){if(t>3)return e})))))}),[t]),(0,i.useEffect)((function(){o.length<5&&N(!1),o.length>50&&N(!1)}),[o]);var y=function(){var e=(0,a.Z)(l().mark((function e(){var t,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.fetchPosts)(o.length+3,o.length,s);case 2:t=e.sent,(a=t.data).status?u([].concat((0,n.Z)(o),(0,n.Z)(a.posts))):N(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"infiite-loading-anime",children:(0,w.jsx)("img",{src:v,alt:""})})});return(0,w.jsx)(Z.Z,{dataLength:o.length,next:y,hasMore:f,loader:S,endMessage:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(h.Z,{className:"p-0 m-0",children:o.map((function(e,t){return 13===t?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(p.Z,{sm:12,md:8,className:"p-0",children:(0,w.jsx)("div",{style:{height:"300px"},className:"p-2",children:(0,w.jsx)("div",{className:"bg-dark h-100",children:"dgdg"})},t)})}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(p.Z,{sm:12,md:4,className:"p-0",children:(0,w.jsx)("div",{style:k,children:(0,w.jsx)(j.Z,{post:e,width:"100%",height:"230px",category:"Business"})},t)})})}))})})}var y=s.p+"static/media/noresult.9edf53a143fd5406fa9a.gif";var S=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),s=t[0],c=t[1],p=(0,i.useState)((0,u.UO)().category),Z=(0,r.Z)(p,2),v=Z[0],S=Z[1],b=(0,i.useState)(!1),F=(0,r.Z)(b,2),C=F[0],E=F[1],R=(0,o.v9)((function(e){return e})).posts,O=(0,o.I0)(),P=(0,u.s0)(),H=(0,u.TH)();(0,i.useEffect)((function(){(0,a.Z)(l().mark((function e(){var t,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!1),S(H.pathname.slice(10)),O({type:"SHOW_PROGRESS"}),e.next=6,(0,g.fetchPosts)(9,0,v);case 6:if(e.t1=t=e.sent.data,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===t;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=t.posts;case 15:return e.next=17,e.t2;case 17:s=e.sent,O({type:"HIDE_PROGRESS"}),0===(null===s||void 0===s?void 0:s.length)?E(!0):c((0,n.Z)(s)),e.next=25;break;case 22:e.prev=22,e.t3=e.catch(0),E(!0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))(),document.title="".concat(v," - Newsonic"),0===R.length&&O((0,x.Jq)())}),[v,P]);var B=function(){return v[0].toUpperCase()+v.toLowerCase().slice(1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m.Z,{}),(0,w.jsx)("div",{className:"category-content",children:C?(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(d.Z,{children:[(0,w.jsx)("div",{className:"content-center cat-error",children:(0,w.jsxs)("div",{children:[(0,w.jsxs)("p",{className:"text-center cat-error-head",children:["#",B()]}),(0,w.jsx)("img",{className:"cat-error-gif",src:y,alt:"",draggable:!1}),(0,w.jsx)("p",{className:"text-center cat-error-desc",children:"Nothing to show in this category"})]})}),(0,w.jsx)("span",{className:"cat-continue-head",children:"Continue Reading..."}),(0,w.jsx)("div",{className:"d-flex card-scroll mt-3 mb-3",children:R.slice(0,7).map((function(e){return(0,w.jsx)("span",{className:"me-2",children:(0,w.jsx)(j.Z,{post:e,width:"300px",loadFull:!0})})}))})]})}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(d.Z,{children:[(0,w.jsxs)("div",{className:"cat-heading",children:["#",B()]}),(0,w.jsxs)(h.Z,{children:[!(s.length<1)&&(0,w.jsx)(f.Z,{data:s[0],lg:3}),!(s.length<2)&&(0,w.jsx)(f.Z,{data:s[1],lg:3}),!(s.length<3)&&(0,w.jsx)(f.Z,{data:s[2],lg:3}),!(s.length<4)&&(0,w.jsx)(f.Z,{data:s[3],lg:3}),0===s.length&&(0,w.jsx)(f.Z,{data:null,lg:3}),0===s.length&&(0,w.jsx)(f.Z,{data:null,lg:3}),0===s.length&&(0,w.jsx)(f.Z,{data:null,lg:3}),0===s.length&&(0,w.jsx)(f.Z,{data:null,lg:3}),0!==s.length&&s.length<5&&(0,w.jsxs)(d.Z,{className:"mt-3",children:[(0,w.jsx)("span",{className:"cat-continue-head",children:"Continue Reading..."}),(0,w.jsx)("div",{className:"d-flex card-scroll mt-3",children:R.slice(0,7).map((function(e){return(0,w.jsx)("span",{className:"me-2",children:(0,w.jsx)(j.Z,{post:e,width:"300px",loadFull:!0})})}))})]})]})]}),(0,w.jsx)(d.Z,{className:"p-0",children:(0,w.jsx)(k,{posts:s,category:B()})})]})}),(0,w.jsx)(N.Z,{})]})}}}]);
//# sourceMappingURL=2195.81aecc32.chunk.js.map