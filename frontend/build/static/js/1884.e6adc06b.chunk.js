"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1884],{3200:function(e,n,t){t.d(n,{Z:function(){return h}});var s=t(2982),a=t(7047),r=(t(2791),t(7022)),i=t(9743),c=t(2677),l=t(9434),o=t(6871),d=t(7204),u=t(859),m=t(631),p=t(184);function h(e){var n=e.data,t=e.head,h=e.view,v=e.limit,x=e.loadFull,f=(0,l.I0)(),j=(0,o.s0)();return(0,p.jsxs)(r.Z,{className:"p-0 mt-3",children:[(0,p.jsx)("span",{className:"cat-head ".concat(h&&"ms-4"),children:t}),n?(0,p.jsx)(p.Fragment,{children:n.slice(0,v).map((function(e,n,t){return(0,p.jsxs)(r.Z,{className:"business-card",onClick:function(){j("/post/".concat(e._id)),x&&(window.scrollTo(0,0),f((0,d.zb)(e._id))),f({type:u.Wu,payload:e})},children:[(0,p.jsxs)(i.Z,{className:"mb-2 p-2 mr-3",children:[(0,p.jsx)(c.Z,{xs:9,className:"business-title p-0",children:(0,p.jsxs)("h4",{children:[e.newsHead.substr(0,60),"..."]})}),(0,p.jsx)(c.Z,{xs:3,className:"p-0",children:(0,p.jsx)("img",{className:"business-image",src:"".concat(m.z,"/uploads/").concat(e.images[0]),alt:""})})]}),n!==t.length-1&&(0,p.jsx)("div",{className:"business-line"})]})}))}):(0,p.jsx)(p.Fragment,{children:(0,s.Z)(Array(5)).map((function(e,n,t){return(0,p.jsxs)(r.Z,{className:"business-card",children:[(0,p.jsxs)(i.Z,{className:"mb-2 p-2 mr-3",children:[(0,p.jsx)(c.Z,{xs:9,className:"business-title p-0",children:(0,p.jsxs)("h4",{children:[(0,p.jsx)(a.Z,{height:25}),(0,p.jsx)(a.Z,{height:25})]})}),(0,p.jsx)(c.Z,{xs:3,className:"p-0",children:(0,p.jsx)(a.Z,{variant:"rectangular",height:50,width:"100%"})})]}),n!==t.length-1&&(0,p.jsx)("div",{className:"business-line"})]})}))})]})}},7642:function(e,n,t){t.d(n,{Z:function(){return p}});var s=t(885),a=t(7047),r=t(2791),i=t(9434),c=t(6871),l=t(7204),o=t(859),d=t(631),u=t(6667),m=t(184);function p(e){var n=e.post,t=e.width,p=e.height,h=e.loadFull,v=e.category,x=(0,r.useState)(!1),f=(0,s.Z)(x,2),j=f[0],g=f[1],A=(0,i.I0)(),w=(0,c.s0)();return(0,m.jsx)(m.Fragment,{children:n?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"pointer",onClick:function(){w("/post/".concat(n._id)),h&&(window.scrollTo(0,0),A((0,l.zb)(n._id))),A({type:o.Wu,payload:n})},children:[!j&&(0,m.jsx)("img",{className:"latest-Img",src:u,height:p,alt:"",width:t}),(0,m.jsx)("img",{className:"".concat(j?"":"hide"," latest-Img"),src:"".concat(d.z,"/uploads/").concat(null===n||void 0===n?void 0:n.images[0]),height:"100%",alt:"",width:t,onLoad:function(){return g(!0)}}),(0,m.jsx)("div",{className:"latest-title",style:{width:t},children:(null===n||void 0===n?void 0:n.newsHead.length)>100?null===n||void 0===n?void 0:n.newsHead.substring(0,100):null===n||void 0===n?void 0:n.newsHead}),(0,m.jsx)("div",{className:"latest-cat mt-2 mb-4",children:null===n||void 0===n?void 0:n.category.map((function(e,t){return t!==(null===n||void 0===n?void 0:n.category.length)-1?v===e?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:"bolded-cat",children:e})," | "]}):e+" | ":v===e?(0,m.jsx)("span",{className:"bolded-cat",children:e}):e}))}),(0,m.jsx)("div",{className:"latest-line"})]})}):(0,m.jsxs)("div",{className:"pointer",children:[(0,m.jsx)(a.Z,{variant:"rectangular",sx:{bgcolor:"#72b054"},width:t,height:"198px"}),(0,m.jsxs)("div",{className:"latest-title",style:{width:t},children:[(0,m.jsx)(a.Z,{height:"35px"}),(0,m.jsx)(a.Z,{width:"80%",height:"35px"})]}),(0,m.jsx)("div",{className:"latest-cat mt-2 mb-4",children:(0,m.jsx)(a.Z,{width:"50%"})}),(0,m.jsx)("div",{className:"latest-line"})]})})}},1684:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var s=t(5861),a=t(885),r=t(7757),i=t.n(r),c=t(2791),l=t(466),o=t(7022),d=t(9743),u=t(2677),m=t(2982),p=t(1413),h=t(631),v=t(7047),x=t(9585),f=t(3044),j=t(6821),g=t(4547),A=t(786),w=t(52),y=t(3746),Z=t(9126),N=t(2426),k=t.n(N),b=t(9434),C=t(7204),I=t(3238),S=t(388),B=t(184);function P(e){var n,t=e.data,r=(0,c.useState)(!1),l=(0,a.Z)(r,2),o=l[0],N=l[1],P=(0,c.useState)([]),D=(0,a.Z)(P,2),R=D[0],E=D[1],L=(0,c.useState)(null),T=(0,a.Z)(L,2),H=T[0],F=T[1],O=(0,c.useState)(),z=(0,a.Z)(O,2),U=z[0],Y=z[1],G=(0,c.useState)(),Q=(0,a.Z)(G,2),q=Q[0],V=Q[1],K=(0,c.useState)([]),W=(0,a.Z)(K,2),M=W[0],X=W[1],J=(0,c.useState)(0),_=(0,a.Z)(J,2),$=_[0],ee=_[1],ne=(0,c.useState)(!1),te=(0,a.Z)(ne,2),se=te[0],ae=te[1],re=(0,b.I0)(),ie=(0,b.v9)((function(e){return e})).authUser,ce=(0,c.useState)({newsHead:"",newsBody:[]}),le=(0,a.Z)(ce,2),oe=le[0],de=le[1];(0,c.useEffect)((function(){null!==t&&void 0!==t&&t.newsBody&&null!==t&&void 0!==t&&t.newsHead&&(me(),ue()),(null===t||void 0===t?void 0:t.images)&&0===M.length&&pe(),ve()}),[t]);var ue=function(){F(null===t||void 0===t?void 0:t.newsHead),de((function(e){return(0,p.Z)((0,p.Z)({},e),{},{newsHead:null===t||void 0===t?void 0:t.newsHead})}))},me=function(){var e=(null===t||void 0===t?void 0:t.newsBody.split("\n")).filter((function(e){if(""!==e)return e}));E((0,m.Z)(e)),de((function(n){return(0,p.Z)((0,p.Z)({},n),{},{newsBody:e})})),Y(R.length>3&&t.images.length>1?parseInt(R.length/2):R.length)},pe=function(){null===t||void 0===t||t.images.map((function(e){M.push("".concat(h.z,"/uploads/").concat(e)),X((0,m.Z)(M))}))},he=(0,c.useCallback)((function(e){ee(e),ae(!0)}),[]),ve=function(){V((0,B.jsx)("div",{children:(null===t||void 0===t?void 0:t.images)&&(0,B.jsxs)(d.Z,{children:[(null===t||void 0===t?void 0:t.images[1])&&(0,B.jsx)(u.Z,{sm:6,children:(0,B.jsx)("img",{className:"w-100 pointer",src:"".concat(h.z,"/uploads/").concat(null===t||void 0===t?void 0:t.images[1]),alt:"",onClick:function(){return he(1)}})}),(null===t||void 0===t?void 0:t.images[2])&&(0,B.jsx)(u.Z,{sm:6,children:(0,B.jsx)("img",{className:"w-100 pointer",src:"".concat(h.z,"/uploads/").concat(null===t||void 0===t?void 0:t.images[2]),alt:"",onClick:function(){return he(2)}})})]})}))},xe=(0,c.useState)("en"),fe=(0,a.Z)(xe,2),je=fe[0],ge=fe[1];(0,c.useEffect)((function(){null!==t&&void 0!==t&&t.newsBody&&null!==t&&void 0!==t&&t.newsHead&&("en"!==je&&null!==je?Ae(je):(me(),ue()))}),[je]);var Ae=function(){var e=(0,s.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re({type:"SHOW_PROGRESS"}),t=[],e.next=4,(0,C.O9)(null===oe||void 0===oe?void 0:oe.newsHead,n);case 4:a=e.sent,F(a),null===oe||void 0===oe||oe.newsBody.map(function(){var e=(0,s.Z)(i().mark((function e(s){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push((0,C.O9)(s,n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Promise.all(t).then((function(e){E((0,m.Z)(e))})),re({type:"HIDE_PROGRESS"});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:"line"}),(0,B.jsxs)("div",{className:"view-heading",children:[(0,B.jsx)("h1",{children:H||(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v.Z,{height:"40px"}),(0,B.jsx)(v.Z,{height:"40px",width:"75%"})]})}),(0,B.jsx)(x.Z,{className:"p-0 mb-3",avatar:null!==t&&void 0!==t&&t.channelDetails?(0,B.jsx)(f.Z,{alt:null===t||void 0===t?void 0:t.channelDetails[0].name,src:"".concat(h.z,"/uploads/propic-").concat(null===t||void 0===t?void 0:t.channelDetails[0]._id)}):(0,B.jsx)(v.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:null!==t&&void 0!==t&&t.channelDetails?null===t||void 0===t?void 0:t.channelDetails[0].name:(0,B.jsx)(v.Z,{animation:"wave",height:20,width:"30%",style:{marginBottom:6}}),subheader:null!==t&&void 0!==t&&t.channelDetails?"Updated: ".concat(k()(null===t||void 0===t?void 0:t.postDate).format("ddd MMM DD YYYY hh:mm:ss")):(0,B.jsx)(v.Z,{animation:"wave",height:20,width:"60%"})}),(null===t||void 0===t?void 0:t.images)&&(0,B.jsx)("img",{width:"100%",style:{objectFit:"cover"},src:"".concat(h.z,"/uploads/").concat(null===t||void 0===t?void 0:t.images[0]),className:"".concat(o?"":"hide"," pointer"),alt:"",onClick:function(){return he(0)},onLoad:function(){N(!0)}}),!o&&(0,B.jsx)(v.Z,{variant:"rectangular",width:"100%",height:"500px"})]}),(0,B.jsxs)("div",{className:"w-100 d-flex justify-content-between post-action-sec",children:[(0,B.jsxs)("div",{className:"left-section d-flex",children:[null!==(null===ie||void 0===ie?void 0:ie.user)&&(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"likeBtn",onClick:function(){!function(){var e;re((0,C.n9)({userId:null===ie||void 0===ie||null===(e=ie.user)||void 0===e?void 0:e._id,postId:null===t||void 0===t?void 0:t._id},t))}()},children:null!==t&&void 0!==t&&t.isLiked?(0,B.jsx)(A.Z,{className:"pointer me-2",sx:{fontSize:"27px"}}):(0,B.jsx)(g.Z,{className:"pointer me-2",sx:{fontSize:"27px"}})})}),(0,B.jsxs)("div",{className:"mt-1",children:[(0,B.jsx)("b",{children:null===t||void 0===t?void 0:t.likes}),"\xa0",(0,B.jsx)("span",{className:"".concat(null!==(null===ie||void 0===ie?void 0:ie.user)&&"mob-hide"),children:"likes"})]}),(0,B.jsxs)("div",{className:"mt-1 ms-3 pointer",onClick:function(){window.location.replace("#comments")},children:[(0,B.jsx)(w.Z,{}),"\xa0",(0,B.jsx)("b",{children:null===t||void 0===t||null===(n=t.comments)||void 0===n?void 0:n.length})," ",(0,B.jsx)("span",{className:"ms-1 mob-hide",children:"Comments"})]})]}),(0,B.jsxs)("div",{className:"left-section d-flex",children:[(0,B.jsxs)(I.Z,{size:"small",value:je,exclusive:!0,onChange:function(e,n){ge(n)},children:[(0,B.jsx)(S.Z,{className:"px-3 lang-btn",name:"lang",value:"en",children:"E"}),(0,B.jsx)(S.Z,{className:"px-3 lang-btn",name:"lang",value:"ml",children:"\u0d2e"}),(0,B.jsx)(S.Z,{className:"px-3 lang-btn",name:"lang",value:"hi",children:"\u0939\u093e"})]}),(0,B.jsxs)("span",{className:"news-views ms-3",children:[(0,B.jsx)(y.Z,{}),"\xa0\xa0",null===t||void 0===t?void 0:t.views]}),null!==(null===ie||void 0===ie?void 0:ie.user)&&(0,B.jsx)("div",{className:"ms-3",onClick:function(){!function(){var e;re((0,C.TJ)({userId:null===ie||void 0===ie||null===(e=ie.user)||void 0===e?void 0:e._id,postId:null===t||void 0===t?void 0:t._id},t))}()},children:null!==t&&void 0!==t&&t.isSaved?(0,B.jsx)(Z.vw0,{size:"22px"}):(0,B.jsx)(Z.flH,{className:"pointer",size:"22px"})})]})]}),(0,B.jsx)("div",{className:"view-details",children:null!==t&&void 0!==t&&t.newsBody?(0,B.jsxs)(B.Fragment,{children:[R.map((function(e,n){return n===U?(0,B.jsxs)(B.Fragment,{children:[q,(0,B.jsx)("pre",{children:"\n\n"+e+"\n\n"})]}):0===n?(0,B.jsx)("pre",{className:"firstPre",children:e+"\n\n"}):(0,B.jsx)("pre",{children:e+"\n\n"})})),U===R.length&&(null===t||void 0===t?void 0:t.images.length)>1&&q,se&&(0,B.jsx)(j.Z,{src:M,currentIndex:$,onClose:function(){ee(0),ae(!1)},backgroundStyle:{backgroundColor:"rgba(0,0,0,0.9)"},className:"d-none"})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v.Z,{width:"100%"}),(0,B.jsx)(v.Z,{width:"100%"}),(0,B.jsx)(v.Z,{width:"100%"}),(0,B.jsx)(v.Z,{width:"80%"})]})})]})}var D=t(3200),R=t(7642),E=t(8820),L=t.p+"static/media/nocomments.2f2cda1606af1dee7f21.jpg",T=t(7247),H=t(3239),F=t(6151),O=t(1686),z=t(125);function U(e){var n,t=e.comments,s=e.id,r=(0,c.useState)(""),i=(0,a.Z)(r,2),l=i[0],o=i[1],d=(0,c.useState)(),u=(0,a.Z)(d,2),m=u[0],p=u[1],v=(0,b.v9)((function(e){return e})),j=v.authUser,g=v.selectedPost,A=(0,b.I0)();return(0,B.jsxs)("div",{id:"comments",className:"comment-card",children:[(0,B.jsxs)("div",{className:"card-head",children:["Comments ",(0,B.jsxs)("span",{children:["(",t&&t.length,")"]})]}),(0,B.jsx)("div",{className:"line"}),(0,B.jsxs)("div",{className:"comment-card-body card-body mx-3",children:[t&&t.map((function(e){var n,t;return(0,B.jsxs)("div",{className:"comment-item single-comment ".concat((null===e||void 0===e?void 0:e.userId)===(null===(n=j.user)||void 0===n?void 0:n._id)&&"self-comment"),children:[(0,B.jsx)(x.Z,{avatar:(0,B.jsx)(f.Z,{alt:e.username,src:e.userImage?"".concat(h.z,"/uploads/").concat(e.userImage):null}),title:e.username,subheader:k()(e.date).format("ddd MMM DD YYYY hh:mm:ss")}),(0,B.jsx)("div",{className:"comment-text mb-2",children:e.text}),(null===e||void 0===e?void 0:e.userId)===(null===(t=j.user)||void 0===t?void 0:t._id)&&(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"comment-delete-holder d-flex w-25 justify-content-end",children:null!==g&&void 0!==g&&g.deleteComment&&m===(null===e||void 0===e?void 0:e.commentId)?(0,B.jsx)(H.Z,{size:25,sx:{color:"#bb3131"}}):(0,B.jsx)(T.Z,{className:"delete-comment-btn pointer",onClick:function(){p(e.commentId),A((0,C.YF)(e))}})})})]})})),t&&0===(null===t||void 0===t?void 0:t.length)&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:"w-100 no-comments",children:(0,B.jsx)("img",{src:L,draggable:"false"})}),(0,B.jsx)("p",{className:"content-center no-comment-text m-0",children:"No comments yet"}),(0,B.jsx)("p",{className:"content-center no-comment-desc",children:"Be the first one comment on this post"})]})]}),null!==j.user?(0,B.jsx)(B.Fragment,{children:null!==g&&void 0!==g&&null!==(n=g.details)&&void 0!==n&&n.isComment?(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"comment-footer",children:(0,B.jsxs)("div",{className:"d-flex comment-type",children:[(0,B.jsx)("input",{type:"text",className:"w-100",placeholder:"Post your comments here",value:l||"",onChange:function(e){o(e.target.value)}}),g.commentLoading?(0,B.jsx)(H.Z,{size:30,sx:{color:"#70d44c"},className:"loading-cat-submit"}):(0,B.jsx)(F.Z,{variant:"contained",className:"comment-btn",endIcon:(0,B.jsx)(O.Z,{}),style:!l.length>0?{backgroundColor:"#d0d0d0"}:{backgroundColor:"#70d44c"},disabled:!l.length>0,onClick:function(){l.length>0&&A((0,C.w)({comment:l,postId:s},o))}})]})})}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"comment-footer",children:(0,B.jsx)("div",{className:"d-flex comment-login",children:(0,B.jsx)("span",{className:"desk-view d-flex",children:(0,B.jsxs)("p",{children:[(0,B.jsx)(z.Z,{})," Commenting on this news post is turned off by admin."]})})})})})}):(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("div",{className:"comment-footer",children:(0,B.jsxs)("div",{className:"d-flex comment-login",children:[(0,B.jsxs)("span",{className:"desk-view d-flex",children:[(0,B.jsxs)("p",{children:[(0,B.jsx)(E.oF6,{})," Please login first to post comments."]}),(0,B.jsx)("span",{className:"comment-login-btn",onClick:function(){A({type:"SHOW_MODAL",payload:!0})},children:"Login here"})]}),(0,B.jsxs)("span",{className:"comment-login-btn mobile-only d-none",onClick:function(){A({type:"SHOW_MODAL",payload:!0})},children:[(0,B.jsx)(E.oF6,{})," Login here"]})]})})})]})}var Y=t(6871),G=t(9396),Q=t(501),q=t(6281),V=t(3970),K=t(859);function W(){var e,n,t=(0,b.v9)((function(e){return e})),r=t.selectedPost,m=t.posts,p=t.authUser,v=(0,c.useState)(0),x=(0,a.Z)(v,2),f=x[0],j=x[1],g=(0,c.useState)(null),A=(0,a.Z)(g,2),w=A[0],y=A[1],Z=(0,c.useState)(!1),N=(0,a.Z)(Z,2),k=N[0],I=N[1],S=(0,c.useState)(null),E=(0,a.Z)(S,2),L=E[0],T=E[1],H=(0,Y.UO)().id,F=(0,b.I0)(),O=(0,Y.s0)();(0,c.useEffect)((function(){var e,n;F((0,C.zb)(H,I)),0===m.length&&F((0,C.Jq)()),document.title="".concat(null!==r&&void 0!==r&&null!==(e=r.details)&&void 0!==e&&e.newsHead?null===r||void 0===r||null===(n=r.details)||void 0===n?void 0:n.newsHead.slice(0,20):"Post"," - Newsonic")}),[p,O]),(0,c.useEffect)((function(){return window.scrollTo(0,0),function(){F({type:K.zp})}}),[]),(0,c.useEffect)((function(){(0,s.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,G.getRelated)(r.details.category);case 2:n=e.sent,(t=n.data).status&&y(t.posts);case 5:case"end":return e.stop()}}),e)})))()}),[r]),(0,c.useEffect)((function(){var e=function(){var e=document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,t="".concat(e/n);j(t)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}})),(0,c.useEffect)((function(){var e;null!==(e=r.details)&&void 0!==e&&e.isMonetize&&(0,s.Z)(i().mark((function e(){var n,t,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={format:"FRM2",postId:null===r||void 0===r||null===(n=r.details)||void 0===n?void 0:n._id,channelId:null===r||void 0===r||null===(t=r.details)||void 0===t||null===(s=t.channelDetails[0])||void 0===s?void 0:s._id},e.t0=T,e.next=4,(0,Q.Cq)(a);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()}),[r]),(0,c.useEffect)((function(){k&&O("/error")}),[k]);var z=function(){var e=(0,s.Z)(i().mark((function e(n){var t,s,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c={format:"FRM2",postId:null===r||void 0===r||null===(t=r.details)||void 0===t?void 0:t._id,adId:L._id,sponsorId:L.sponsorId,channelId:null===r||void 0===r||null===(s=r.details)||void 0===s||null===(a=s.channelDetails[0])||void 0===a?void 0:a._id},(0,Q.Ab)(c),window.open("https://".concat(n),"_blank");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l.Z,{next:f}),(0,B.jsx)("div",{id:"progressBarContainer",children:(0,B.jsx)("div",{id:"progressBar",style:{transform:"scale(".concat(f,", 1)")}})}),(0,B.jsxs)(o.Z,{className:"main-section",children:[(0,B.jsxs)(d.Z,{children:[(0,B.jsx)(u.Z,{lg:8,children:(0,B.jsx)(P,{data:null===r||void 0===r?void 0:r.details})}),(0,B.jsxs)(u.Z,{lg:4,className:"mt-5",children:[(0,B.jsx)(D.Z,{head:"MORE RELATED POSTS",view:!0,data:w,limit:6,loadFull:!0}),(null===r||void 0===r||null===(e=r.details)||void 0===e?void 0:e.isMonetize)&&(0,B.jsx)(B.Fragment,{children:null===L?(0,B.jsx)(B.Fragment,{children:"Loading............."}):(0,B.jsxs)("div",{className:"p-2 mt-5 pointer",onClick:function(){z(null===L||void 0===L?void 0:L.url)},children:[(0,B.jsx)("span",{className:"sponsor-txt",children:"$ Sponsored"}),(0,B.jsx)("img",{src:"".concat(h.z,"/uploads/").concat(null===L||void 0===L?void 0:L.imageFrm),width:"100%",alt:""})]})})]})]}),(0,B.jsx)(d.Z,{children:(0,B.jsx)(V.Z,{className:"scroll-container d-flex card-scroll mt-3",children:m.slice(0,7).map((function(e){return(0,B.jsx)("span",{className:"me-2",children:(0,B.jsx)(R.Z,{post:e,width:"300px",loadFull:!0})})}))})})]}),(0,B.jsx)("section",{className:"comment-section py-5",children:(0,B.jsx)(o.Z,{style:{width:"90%"},className:"comment-container",children:(0,B.jsx)(U,{comments:null===(n=r.details)||void 0===n?void 0:n.comments,id:H})})}),(0,B.jsx)(q.Z,{})]})}},501:function(e,n,t){t.d(n,{Ab:function(){return u},Cq:function(){return m},M1:function(){return p},Vl:function(){return d},ix:function(){return h}});var s=t(1413),a=t(5861),r=t(7757),i=t.n(r),c=t(9396),l=t(859),o=t(6245),d=function(e,n,t){return function(){var s=(0,a.Z)(i().mark((function s(a){var r,l;return i().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c.createAd(e,n);case 3:r=s.sent,l=r.data,t(l),s.next=10;break;case 8:s.prev=8,s.t0=s.catch(0);case 10:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(e){return s.apply(this,arguments)}}()},u=function(){var e=(0,a.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.t1=n,e.next=5,(0,o.H)();case 5:return e.t2=e.sent,e.next=8,e.t0.clickAd.call(e.t0,e.t1,e.t2);case 8:t=e.sent,t.data,e.next=14;break;case 12:e.prev=12,e.t3=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(i().mark((function e(n){var t,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=c,e.t1=n,e.next=5,(0,o.H)();case 5:return e.t2=e.sent,e.next=8,e.t0.loadDisplayAd.call(e.t0,e.t1,e.t2);case 8:if(t=e.sent,!(s=t.data).status){e.next=12;break}return e.abrupt("return",s.ad);case 12:e.next=16;break;case 14:e.prev=14,e.t3=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),p=function(e,n){return function(){var t=(0,a.Z)(i().mark((function t(s){var a,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s({type:l.xi}),t.next=4,c.getSponsorAds(e,n);case 4:a=t.sent,null!==(r=a.data)&&void 0!==r&&r.status&&s({type:l.BY,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),s({type:l.Cz});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e,n){return function(){var t=(0,a.Z)(i().mark((function t(a,r){var o,d,u,m;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=r(),d=o.sponsorDetails,a({type:"SHOW_PROGRESS"}),t.next=5,c.endCampaign(e);case 5:u=t.sent,m=u.data,a({type:"HIDE_PROGRESS"}),m.status&&(null===d||void 0===d||d.ads.forEach((function(n,t){n._id===e&&("Active"===n.status&&d.active--,d.ads[t].isCancelled=!0,d.ads[t].status="Cancelled")})),n((function(e){return(0,s.Z)((0,s.Z)({},e),{},{status:"Cancelled",isCancelled:!0})})),a({type:l.Dy,payload:d.ads})),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},7204:function(e,n,t){t.d(n,{DO:function(){return u},Jq:function(){return o},O9:function(){return g},R5:function(){return j},TJ:function(){return x},YF:function(){return h},fR:function(){return f},n9:function(){return v},qb:function(){return d},w:function(){return p},zb:function(){return m}});var s=t(5861),a=t(7757),r=t.n(a),i=t(9396),c=t(859),l=t(6245),o=function(){return function(){var e=(0,s.Z)(r().mark((function e(n){var t,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.fetchHomeData();case 3:t=e.sent,s=t.data,n({type:"FETCH_ALL",payload:s.posts}),delete s.posts,delete s.status,n({type:"SET_CATEGORY_POSTS",payload:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()},d=function(e,n,t){return function(){var a=(0,s.Z)(r().mark((function s(a){var c;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,i.createPost(e,n,t);case 3:c=s.sent,c.data,s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0.message);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},u=function(){var e=(0,s.Z)(r().mark((function e(n){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.saveDraft(n);case 3:if(t=e.sent,!t.data.status){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),m=function(e,n){return function(){var t=(0,s.Z)(r().mark((function t(s,a){var o,d,u,m;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=a(),o.authUser,s({type:c.HD}),t.t0=i,t.t1=e,t.next=7,(0,l.H)();case 7:return t.t2=t.sent,t.next=10,t.t0.fetchPostDetails.call(t.t0,t.t1,t.t2);case 10:d=t.sent,u=d.data,s({type:c.uc,payload:u.post_details}),t.next=18;break;case 15:t.prev=15,t.t3=t.catch(0),"POST_ERROR"===(null===(m=t.t3.response.data)||void 0===m?void 0:m.type)&&(n(!0),s({type:c.Zw}));case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e,n){return t.apply(this,arguments)}}()},p=function(e,n){return function(){var t=(0,s.Z)(r().mark((function t(s,a){var l,o,d,u,m;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l=a(),o=l.selectedPost,d=l.authUser,s({type:c.DP}),t.next=5,i.postComment(e);case 5:u=t.sent,(m=u.data).status&&(m.comment.username=d.user.name,m.comment.userImage=d.user.image,o.details.comments.push(m.comment),n(""),s({type:c.hl,payload:o.details})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,s.Z)(r().mark((function n(t,s){var a,l,o;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=s(),l=a.selectedPost,t({type:c.hD}),n.next=5,i.deleteComment({commentId:e.commentId,postId:l.details._id});case 5:o=n.sent,o.data.status&&(l.details.comments.pop(e),t({type:c.B$,payload:l.details})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}()},v=function(e,n){return function(){var t=(0,s.Z)(r().mark((function t(s){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.likes=n.isLiked?--n.likes:++n.likes,n.isLiked=!n.isLiked,s({type:c.Ox,payload:n}),t.next=6,i.likePost(e);case 6:a=t.sent,a.data,t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),n.likes=n.isLiked?--n.likes:++n.likes,n.isLiked=!n.isLiked,s({type:c.Ox,payload:n});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,n){return function(){var t=(0,s.Z)(r().mark((function t(s){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n&&(n.isSaved=!n.isSaved),s({type:c.zl,payload:n}),t.next=5,i.savePost(e);case 5:a=t.sent,a.data,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),n&&(n.isSaved=!n.isSaved),s({type:c.zl,payload:n});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,n,t,a){return function(){var l=(0,s.Z)(r().mark((function s(l,o){var d,u,m,p;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,l({type:"SHOW_PROGRESS"}),d=o(),u=d.addedPosts,l({type:c.s$}),s.next=6,i.deletePost({deleteIDs:e,deleteImages:n},t);case 6:m=s.sent,m.data.status?(p=u.posts.filter((function(n){if(!e.includes(n._id))return n})),a("SUCCESS"),l({type:"HIDE_PROGRESS"}),l({type:c.rr,payload:p})):(a("FAILED"),l({type:"HIDE_PROGRESS"}),l({type:c.jp})),s.next=16;break;case 11:s.prev=11,s.t0=s.catch(0),a("FAILED"),l({type:"HIDE_PROGRESS"}),l({type:c.jp});case 16:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(e,n){return l.apply(this,arguments)}}()},j=function(e,n,t){return function(){var a=(0,s.Z)(r().mark((function s(a,l){var o,d,u,m;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a({type:"SHOW_PROGRESS"}),o=l(),d=o.addedPosts,a({type:c.s$}),s.next=6,i.deleteDraft({deleteIDs:e},n);case 6:u=s.sent,u.data.status?(m=d.posts.filter((function(n){if(!e.includes(n._id))return n})),t("SUCCESS"),a({type:"HIDE_PROGRESS"}),a({type:c.rr,payload:m})):(t("FAILED"),a({type:"HIDE_PROGRESS"}),a({type:c.jp})),s.next=16;break;case 11:s.prev=11,s.t0=s.catch(0),t("FAILED"),a({type:"HIDE_PROGRESS"}),a({type:c.jp});case 16:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(e,n){return a.apply(this,arguments)}}()},g=function(e,n){return new Promise(function(){var t=(0,s.Z)(r().mark((function t(s,a){var c,l;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.translate(e,n);case 2:c=t.sent,l=c.data,s(null===l||void 0===l?void 0:l.translation);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}},6281:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var s=t(6355),a=t(5431),r=t(8820),i=t(9126),c=t(3504),l=t(6053),o=t(978),d=t(184);var u=function(){return(0,d.jsx)("div",{class:"footer-dark",children:(0,d.jsx)("footer",{children:(0,d.jsxs)("div",{class:"container",children:[(0,d.jsxs)("div",{class:"row",children:[(0,d.jsxs)("div",{class:"col-sm-6 col-md-3 item",children:[(0,d.jsx)("p",{className:"fw-500 f-17",children:"Categories"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/sports",children:"Sports"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/business",children:"Bussiness"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/entertainment",children:"Entertainment"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/education",children:"Educational"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/technology",children:"Technology"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/politics",children:"Politics"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/category/movies",children:"Movies"})})]})]}),(0,d.jsxs)("div",{class:"col-sm-6 col-md-3 item",children:[(0,d.jsx)("p",{className:"fw-500 f-17",children:"Services"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/sponsor",children:"Sponsor an Ad"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/creator",children:"Become a Creator"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"/",children:"API"})})]})]}),(0,d.jsxs)("div",{class:"col-sm-6 col-md-3 item",children:[(0,d.jsx)("p",{className:"fw-500 f-17",children:"Supported Payments"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[(0,d.jsx)(l.hqt,{})," PayPal"]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(o.r98,{})," Razorpay"]})]})]}),(0,d.jsxs)("div",{class:"col-md-3 item text",children:[(0,d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAmCAYAAADtEIZpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAACyxJREFUeNrsXV1y2kgQ7hHYedWeYOUTRDkB4gR2XlzlEpTICYxPADlB8AkilVG5ipfACSxOYG5g7Q2UVwOaffBoQ4im50cjENl0FZUYxEgz3V9/3a3WQCil8Ef+SF3i+76z+3ccx+mfVVEWm72KtUzZS1oIpTQAgIHguI8AkCmM+8R5/1PJBU4A4L2hBQkBINr5++vO4lSd0yFkBAAe57M7AFgJjMEFgCsA6LB52zufr9h8lwCQsJdx6ff7Xp7nHTYPd+8adq9laVnW/OHhIanoSJ6wzy3LWjw8PEwUxvOYHvZlGcfxeO89FwC+lBybMfuqAmwPAC7ZvzwbXjF9zkX6bAPABWJchQwBYKxwoZ7Cse8Vj8dkuff3d2Rsty5jryADjlIzAchHTEc2coy7o5sRG3MOAPeCsVUAPpLUpQsAbp7nt71eL91ut+PHx8dI89To+fI8d4MgCKMoknXqDmfMFAGkzLGyAL+V0OVP68i+kzKMlq6jJXkBt5InbprMkc+uGnatLuK554hRPjMF2xpGNWDf/4acG5UgCBzf95/yPH/ScdiUUseyrLDX673sh/mmwt7tdjs8AVu9AoAXTV0WthCyMRxdoNsS4X0TJUHC86CBilZxWA5LkVzDRiYtNzc3wWazeTYRkVFKHQB48X1/ZHphKaW3DbfTL8zZmiBTh+lyqAN0YPnCKUokyIOaIh2FlERUf9CRlDGCbC47siwrrCHSG9cAdvvm5qaJ9mszZz2syXmMdIDuNQwYJsL3pszHQa6lLCoZGL72FAC6srklA6Is+2fwo0qcHQvslmU1MXz/WrMNjguwtxW/OILDFbA+qTAMIitmYLYii2ISIqH/X6BezfcE51JJOzIWxSTwo8hms9cVm7NbAeS3EiDPAOCeEDKfTqer3Q96vZ5LKXWZLWERybjf739XqZiL1tj3fS+O46QhIB+BXJ0oYWT1D9Nnocv3LBJwJMD+va1hkB40r1otMroFBxweWzRVYGIOYqia6wrSoqVCyrFioM0QowEG9CGbhzTIgyBwJOb2ud1uT3hVbgb8FQCEvu+PofxWFgAA5Hn+xff9lUFwjhpiuwOJdUyg/Hb07uf3bCzMaWYAsLIE4RyvcHNqkggWXVVJjqYTUGX0pEQPLjKObG/Ais3jAhRuBW02G6xglAFAN47jseytrDiOx+12W3QNXyqkI2Ws7jTAHkVpyZ2CAw6ZHu85a/ABABJLAI6EEzbaJwb0OQIA1SLNpQRoPUWQ89ZzwSng8Aw7rWsBfd8fIE4mI4R0dZg3iqK03W5jUYh7c3Ojc4fkc9mbhJDBkW1RRBSf4K2JTFWGe3NOGMhTAHEx7jPH0IYnBvQM+E0hroLjciQjGpWo50oxEjmWk8VC7OF+Lq4KdkA6yVqt1lhj2FKiopTeBkFwTKIaCZg8rDD2mDH7/X4KZ0ksVpkCT7GBZsF53wb5e9GyTK3CQB2EoVccp8VzQl4dC9fv9z2EhcIKXW27YXzCCT+BUuqw1lQTrH7MBhqMzUNNJi9j9l/mJ3N7LeKAY3BiQA8NMLBs44UtCToHcTILJL/myTeooRGIUjpQDZF1ZL1ej8FggxNzHmkZqx/JBi8PsY5lYkkCJDOQ2zYhfE8q5OkOqHWhydwH9gR1BRWmLxxMCG+dURMw0zUHlNIOJ99dmHwabTabZZZlLQykQ7vXWEpUR2qg8RCnnh4b6BknpPLg9BpoFhVArJonyuT+AQLmBPnevYRTuoW3PvYXqNCYwW6plYab2+32m2kFbTYbnoOzdSrmr6+vkzKiOkIDDWYP3+o+uWxn3ITD6qMTA/q8QvjeQUKuTCO9wcL7RCLKks2LHXYdTzqgz/OcCy7LspamFbTdbhMDNZKfogRCSClRaeb9uoI5qWVTgH4MVv8KAFTyJSspEiJ1BAaGFVF0UgJP0yEVMpBgdgz0zzJ5Lwb0OjaRmM1mGS9PtyzL1hmTx+oHJioHwVbaFKAXBm0sdzqiRAjwbARUPOZNEcB5SEpwpZFi7MsQ8O4pUSgZguDhGEKIjTjNOuspZbUCu4LziDis7hzI7myVuR4T6Ly88dQaaBLF8N1GmC/cGTNTBHSnIsh3r+GiAuALhnfgNxZCSMh5fwD/A7EUj/8dGmgwUHYqMC+P1W85bMoDlm5hpgB8l7GXCugdBna7hEUzRYaqjf0IIdrsxxp6kpL5HbuBppFATziMeGoNNJEC+2JsnklECnZJPo7l51ULMwn86GPvgvxWUU6Zw87znAv0OgByfX1t82xps9m8VBz+mA00KbLudtOAjrG66RDojhmrzEtV5pKgdBBQRpJOsMxZXApyfpPRyxDeep4vQFyp/yX6OD8/5zqJ19fXjmmDfPfuHa+mAefn5/9UGZs10JSy+gGAngnqJY0DOs+gL2tYmFTyZTJ8v9rLX1XqFVizhy3hPMKaGaVg+hRxdD8ZHetDL10ry7K6pi8S68KLomhl4BSlRHWABpoE+cxrItB5oa8Hp9VAwwPlpUTYnigCdTfiqTNslwX8J0V24UYqJsP3IAgcSumlBlBUWT0tcVp1h+8Z4mBrT311gT6H02+gCZGcqWBdh3PMPaLMROBAeEBfwQHup0qkGY6CUzSa3242G+4dnDzPjUU7R2ygwfYvHDYR6BmcflvsShC+D5DvrRRDw2JtbCTFWR54/tL57nq95jl2oJSOer1e5RxTsHtNdn5+vjA18dfX1/BIRDUX1EccA+e4KovKrAoDTjiLdXUiQM8QwF4igJxUyP+xHVrmmvPQDfn+RtblJ0HaSP+bV5XGkyAI7M1mg/3iylzhBxiEgrXF5nn+d83kkiB6rNrP4MJbA9QzVNjuWZbVAzgd0emSW1Ycl5c36+SgDlPqs6KBOMi1vHBYcIKwukMIedIB+w7IHU6YnUINj3Dy5tNqtQY129xngV50we7Bz70Q2ts9y7KbfUJAV2XRRDKP1hlXB+SFUbjs/4HC90DFkc1msyzPc24Rbwfs0qlbv9/32A9AYKH/fY099VHZPA5QH7mX0I8sYdoM0GUNT+PCRqoCPQP5p6iaGr6rgCxUUKbKuFEFkO++FzJGDkpYoTAIjP0XSNoBj4+Pc8xIGUiefN//ynal4QK81+uF7GecMGDNp9PppC7lt9vtyZHsbiwgDJEui2NGIP6FHQ8ARm0DFx3WFK7faowbaoBmAXIFRFWntlQYN6kI8jIjKcbOdt6XMUBU1uv1+OzsrCNg4UGe5wPf94s6SMrCcJtS6slEfYSQtNVqfao1b4ui1Pf9BA5fQM7grWtR5Oh4urQVIucUAO5MAL1gL9OL5Wp8R6dyHYLclsKq4fgE5Kq4quOqKFnlWKlW2dlsll1fX3fPzs5kfvfN3rULSuWeKCaEpJTSrskCnCBnPjTQCwDKgF1Hl/vnyCyDi/W7h+9RTeOq5ucr2NnG15CsQGEHndlslq3X6y5nm6bKxNFqtT7UkZeXCa8t9sBgr2OuCShs96zK6qcqSwmF6MxPZmOIRQUDiQyBHNtXnQv26XQ6IITcgZlnqjNCyF0cx4di8qYQVcoAadJp3oHids9KKc8JAz2pAYzFuFmFz0UGMmAKTSoY+IcqQJ1Op5N2u/2hIrsnAPChzsKbBKunR7S/jOnyY8XrKFj8l3U0CfQQDrRbRk1ATwX5tq4CI8Gambj2Lsg/h56xSOMC1De8LPfwUZROp9MB+3mlIcg9FruCt99p+yuO4+6hQnWkLnDfADucM718BPzXhcr0WdhA6doT2QLJHzkpceHXnW1TELfvGhPWCOPmeW7v7vVGCFm1Wq30COH5qYoHP56/AF19/jsAul4W1phxJrcAAAAASUVORK5CYII=",height:15}),(0,d.jsx)("p",{className:"mt-2",children:"Latest India News, Breaking News, Today Headlines and Live News Online - Newsonic provides the latest news from India and around the world"})]}),(0,d.jsxs)("div",{class:"col item social mt-3",children:[(0,d.jsx)("span",{className:"pointer",onClick:function(){return window.open("https://www.facebook.com/shameemlukmanpk/","_blank")},children:(0,d.jsx)(s.tBk,{})}),(0,d.jsx)("span",{className:"pointer",onClick:function(){return window.open("https://github.com/shameemluku/","_blank")},children:(0,d.jsx)(a.gik,{})}),(0,d.jsx)("span",{className:"pointer",onClick:function(){return window.open("https://www.instagram.com/shameemluku/","_blank")},children:(0,d.jsx)(r.t0C,{})}),(0,d.jsx)("span",{className:"pointer",onClick:function(){return window.open("https://twitter.com/shameemluku","_blank")},children:(0,d.jsx)(i.meP,{})})]})]}),(0,d.jsx)("p",{class:"copyright",children:"Newsonic \xa9 2022 | Developed by Shameem Lukman"})]})})})}},6667:function(e,n,t){e.exports=t.p+"static/media/gray-thumb.2f6a93707a42508178a9.jpg"}}]);
//# sourceMappingURL=1884.e6adc06b.chunk.js.map