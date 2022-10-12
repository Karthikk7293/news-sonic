"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3791],{3779:function(t,e,n){var r=n(5671),a=n(3144),s=n(136),c=n(8505),o=n(2791),i=n(184),u=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={activeOption:0,filteredOptions:[],showOptions:!1,userInput:""},t.onChange=function(e){var n=t.props.options,r=e.currentTarget.value;t.props.clearError&&t.props.clearError();var a=n.filter((function(t){return t.toLowerCase().indexOf(r.toLowerCase())>-1}));t.setState({activeOption:0,filteredOptions:a,showOptions:!0,userInput:e.currentTarget.value})},t.onClick=function(e){t.setState({activeOption:0,filteredOptions:[],showOptions:!1,userInput:e.currentTarget.innerText},(function(){(0,t.props.changeCat)(t.state.userInput),t.setState({activeOption:0,filteredOptions:[],showOptions:!1,userInput:""})}))},t.onKeyDown=function(e){var n=t.state,r=n.activeOption,a=n.filteredOptions;if(13===e.keyCode)t.setState({activeOption:0,showOptions:!1,userInput:a[r]});else if(38===e.keyCode){if(0===r)return;t.setState({activeOption:r-1})}else if(40===e.keyCode){if(r===a.length-1)return;t.setState({activeOption:r+1})}},t}return(0,a.Z)(n,[{key:"render",value:function(){var t,e=this.onChange,n=this.onClick,r=(this.onKeyDown,this.state),a=r.activeOption,s=r.filteredOptions,c=r.showOptions,u=r.userInput;return c&&u&&(t=s.length?(0,i.jsx)("ul",{className:"suggest-options",children:s.map((function(t,e){var r;return e===a&&(r="option-active"),(0,i.jsx)("li",{className:r,onClick:n,children:t},t)}))}):(0,i.jsx)("div",{className:"no-options"})),(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)("div",{className:"search",children:(0,i.jsx)("input",{type:"text",className:"cat-input w-100",onChange:e,value:u,placeholder:"Search for category"})}),t]})}}]),n}(o.Component);e.Z=u},3791:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});var r=n(1413),a=n(2982),s=n(5861),c=n(885),o=n(7757),i=n.n(o),u=n(2791),l=n(7022),d=n(9743),p=n(2677),f=n(9140),h=n(9434),m=n(6871),v=n(9367),g=n(1286),x=n(6711),y=n(3239),j=n(6151),Z=n(9955),C=n(8820),w=n(7692),N=n(71),k=n(8014),b=n(3779),P=n(9396),S=n(631),O=n(65),I=n(184);var D=function(){var t,e,n,o,D,E,U,R=(0,m.UO)().id,T=(0,h.I0)(),_=(0,O.Ds)().enqueueSnackbar,z=(0,h.v9)((function(t){return t})).creatorSelectedPost,F=(0,u.useState)({}),H=(0,c.Z)(F,2),A=H[0],M=H[1],G=(0,u.useState)(!1),B=(0,c.Z)(G,2),K=B[0],L=B[1],V=(0,u.useState)(!1),$=(0,c.Z)(V,2),q=$[0],W=$[1],Y=(0,u.useState)([]),J=(0,c.Z)(Y,2),Q=J[0],X=J[1],tt=(0,u.useState)([]),et=(0,c.Z)(tt,2),nt=et[0],rt=et[1],at=(0,u.useState)(!1),st=(0,c.Z)(at,2),ct=st[0],ot=st[1],it=(0,u.useState)(!1),ut=(0,c.Z)(it,2),lt=ut[0],dt=ut[1],pt=(0,u.useState)({title:"",body:""}),ft=(0,c.Z)(pt,2),ht=ft[0],mt=ft[1];(0,u.useEffect)((function(){T((0,v.Zz)(R)),vt()}),[]);var vt=function(){var t=(0,s.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,P.getCategory)();case 2:e=t.sent,n=e.data,rt((0,a.Z)(n.categories.map((function(t){return t.name}))));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,u.useEffect)((function(){var t;null!==z.post&&(M((0,r.Z)({},z.post)),X((0,a.Z)(null===(t=z.post)||void 0===t?void 0:t.category)))}),[z]),(0,u.useEffect)((function(){K&&mt((0,r.Z)((0,r.Z)({},ht),{},{title:null===A||void 0===A?void 0:A.newsHead,body:null===A||void 0===A?void 0:A.newsBody}))}),[K]),(0,u.useEffect)((function(){ht.title!==(null===A||void 0===A?void 0:A.newsHead)||ht.body!==(null===A||void 0===A?void 0:A.newsBody)?ot(!0):ot(!1)}),[ht]);var gt=function(t,e){_(t,{variant:e}),W(!1),L(!1)};return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(l.Z,{children:(0,I.jsxs)(d.Z,{children:[(0,I.jsxs)(p.Z,{xl:8,children:[(0,I.jsx)(f.Z,{className:"mb-2 news-text-card",children:(0,I.jsxs)(f.Z.Body,{className:"ms-0",children:[K?(0,I.jsx)(x.Z,{className:"post-edit-btn",onClick:function(){L(!1)}}):(0,I.jsx)(g.Z,{className:"post-edit-btn",onClick:function(){L(!0)}}),(0,I.jsx)("p",{className:"post-details-titles",children:"Title"}),K?(0,I.jsx)("input",{className:"edit-head-input",value:null===ht||void 0===ht?void 0:ht.title,type:"text",onChange:function(t){mt((function(e){return(0,r.Z)((0,r.Z)({},e),{},{title:t.target.value})}))}}):(0,I.jsx)("p",{children:null===A||void 0===A?void 0:A.newsHead}),(0,I.jsx)("p",{className:"post-details-titles mt-3 mb",children:"Body"}),K?(0,I.jsx)("textarea",{className:"edit-head-body",value:null===ht||void 0===ht?void 0:ht.body,type:"text",onChange:function(t){mt((function(e){return(0,r.Z)((0,r.Z)({},e),{},{body:t.target.value})}))}}):(0,I.jsx)("p",{children:(0,I.jsx)("pre",{className:"news-body",children:null===A||void 0===A?void 0:A.newsBody})}),ct&&K&&(0,I.jsx)("p",{className:"text-end mb-0",children:z.loading?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(y.Z,{className:"mt-2",color:"success",size:26})}):(0,I.jsx)(j.Z,{onClick:function(){T((0,v.Vi)({postId:A._id,title:ht.title,body:ht.body},gt))},children:"Update"})})]})}),(0,I.jsx)(f.Z,{className:"mb-3 news-text-card p-1",children:(0,I.jsxs)(f.Z.Body,{className:"ms-0",children:[(0,I.jsxs)("p",{className:"dash-card-heading",children:["Media (",(null===A||void 0===A?void 0:A.images)&&(null===A||void 0===A?void 0:A.images.length),")"]}),(0,I.jsx)(d.Z,{children:(null===A||void 0===A?void 0:A.images)&&(null===A||void 0===A?void 0:A.images.map((function(t){return(0,I.jsx)(p.Z,{lg:4,children:(0,I.jsx)("img",{src:"".concat(S.z,"/uploads/").concat(t),width:"100%",alt:""})})})))})]})})]}),(0,I.jsxs)(p.Z,{xl:4,children:[(0,I.jsx)(f.Z,{className:"mb-3",children:(0,I.jsxs)(f.Z.Body,{className:"ms-0",children:[(0,I.jsx)("p",{className:"dash-card-heading",children:"Interactions"}),(0,I.jsxs)("p",{className:"ms-3",children:[(0,I.jsx)(C.Zju,{className:"me-2"}),"Total number of Views:"," ",(0,I.jsx)("span",{className:"fw-500 f-17 ms-2",children:null===A||void 0===A?void 0:A.views})]}),(0,I.jsxs)("p",{className:"ms-3",children:[(0,I.jsx)(w.UZT,{className:"me-2"}),"Total number of Likes:"," ",(0,I.jsx)("span",{className:"fw-500 f-17 ms-2",children:null===A||void 0===A?void 0:A.likes})]}),(0,I.jsxs)("div",{className:"comment-stats px-3 py-3",children:[(0,I.jsxs)("p",{className:"mb-1 ms-1",children:[(0,I.jsx)(w.FSy,{className:"me-2"}),"Total Comments:"," ",(0,I.jsx)("span",{className:"fw-500 f-17 ms-2",children:null===A||void 0===A||null===(t=A.comments)||void 0===t?void 0:t.length}),(0,I.jsx)(j.Z,{className:"comment-view-btn ms-4",children:"View all"})]}),(0,I.jsx)("span",{className:"ms-1",children:"Comment status:"}),(0,I.jsx)(Z.Z,{onChange:function(t){M((0,r.Z)((0,r.Z)({},A),{},{isComment:t.target.checked})),T((0,v.GC)({postId:A._id,isComment:t.target.checked},gt))},checked:null===A||void 0===A?void 0:A.isComment}),(0,I.jsx)("span",{className:"fw-500",children:null!==A&&void 0!==A&&A.isComment?"enabled":"disabled"})]})]})}),(0,I.jsx)(f.Z,{className:"mb-3",children:(0,I.jsxs)(f.Z.Body,{className:"ms-0",children:[q?(0,I.jsx)(x.Z,{className:"post-edit-btn",onClick:function(){X(null===A||void 0===A?void 0:A.category),W(!1),dt(!1)}}):(0,I.jsx)(g.Z,{className:"post-edit-btn",onClick:function(){W(!0)}}),(0,I.jsx)("p",{className:"dash-card-heading",children:"Category"}),q?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b.Z,{options:nt,changeCat:function(t){var e=0;Q.map((function(n){n===t&&(e=1)})),1!==e&&(X([].concat((0,a.Z)(Q),[t])),dt(!0))}}),(0,I.jsx)("div",{className:"mt-3",children:Q.map((function(t,e){return(0,I.jsxs)("span",{className:"selected-cat mb-2",children:[t," ",(0,I.jsx)(N.Lp2,{className:"close-cat mx-1",onClick:function(){!function(t){var e=Q.filter((function(e,n){if(t!==n)return e}));X(e),dt(!0)}(e)}})]},e)}))})]}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:"mt-3",children:(null===A||void 0===A?void 0:A.category)&&(null===A||void 0===A?void 0:A.category.map((function(t,e){return(0,I.jsxs)("span",{className:"selected-cat mb-2",children:[t," "]},e)})))})}),lt&&q&&0!==Q.length&&(0,I.jsx)("p",{className:"text-end mb-0",children:z.loading?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(y.Z,{className:"mt-2",color:"success",size:26})}):(0,I.jsx)(j.Z,{onClick:function(){T((0,v.$A)({postId:A._id,category:Q},gt))},children:"Update"})})]})}),(0,I.jsx)(f.Z,{className:"mb-3",children:(0,I.jsxs)(f.Z.Body,{className:"ms-0",children:[(0,I.jsx)("p",{className:"dash-card-heading",children:"Analytics"}),(0,I.jsx)("span",{className:"ms-3",children:"Monetization status:"}),(0,I.jsx)(Z.Z,{onChange:function(t){M((0,r.Z)((0,r.Z)({},A),{},{isComment:t.target.checked})),T((0,v.N$)({postId:A._id,isMonetize:t.target.checked},gt))},checked:null===A||void 0===A?void 0:A.isMonetize}),(0,I.jsx)("span",{className:"fw-500",children:null!==A&&void 0!==A&&A.isMonetize?"enabled":"disabled"}),(0,I.jsxs)("p",{className:"ms-3 mt-3 mb-0",children:[(0,I.jsx)(C.Zju,{className:"me-2"}),"Cost per Impression:"," ",(0,I.jsxs)("span",{className:"fw-500 f-17 ms-2",children:["\u20b9 ",null!==A&&void 0!==A&&null!==(e=A.revenue)&&void 0!==e&&e.CPI?null===A||void 0===A||null===(n=A.revenue)||void 0===n?void 0:n.CPI:"0"]})]}),(0,I.jsxs)("p",{className:"ms-3",children:[(0,I.jsx)(k.EAI,{className:"me-2"}),"Cost per Click:"," ",(0,I.jsxs)("span",{className:"fw-500 f-17 ms-2",children:["\u20b9 ",null!==A&&void 0!==A&&null!==(o=A.revenue)&&void 0!==o&&o.CPC?null===A||void 0===A||null===(D=A.revenue)||void 0===D?void 0:D.CPC:"0"]})]}),(0,I.jsxs)("p",{className:"mb-0 mt-2 text-end post-total",children:["Total Earnings"," ",(0,I.jsxs)("span",{className:"post-total-span",children:["\u20b9 ",null!==A&&void 0!==A&&null!==(E=A.revenue)&&void 0!==E&&E.total?null===A||void 0===A||null===(U=A.revenue)||void 0===U?void 0:U.total:"0.00"]})]})]})})]})]})})})}},9367:function(t,e,n){n.d(e,{$A:function(){return h},GC:function(){return m},H6:function(){return l},N$:function(){return v},SE:function(){return d},UK:function(){return x},Vi:function(){return f},ZU:function(){return g},Zz:function(){return p},mi:function(){return u}});var r=n(1413),a=n(5861),s=n(7757),c=n.n(s),o=n(9396),i=n(859),u=function(t,e,n){return function(){var r=(0,a.Z)(c().mark((function r(a){var s,u;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:i.Oy}),r.next=4,o.createChannel(t,e);case 4:s=r.sent,(u=s.data).status?(a({type:i.gZ,payload:u.details}),n("/creator/add")):a({type:i.G3}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a({type:i.G3});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}()},l=function(){return function(){var t=(0,a.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:i.mI}),t.next=4,o.getChannelDetails();case 4:n=t.sent,(r=n.data)&&e({type:i.Fn,payload:r.channelDetails}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:i.Ov});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(t,e,n){return function(){var r=(0,a.Z)(c().mark((function r(a){var s;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:i.ax}),r.next=4,o.getAddedPosts(t,e,n);case 4:(s=r.sent)&&a({type:i.jz,payload:s.data}),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},p=function(t){return function(){var e=(0,a.Z)(c().mark((function e(n,r){var a,s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=r().channelDetails.channel,e.next=4,o.creatorPostDetails(t,null===a||void 0===a?void 0:a._id);case 4:s=e.sent,(u=s.data).status?n({type:i.iT,loading:!1,payload:u.post}):n({type:i.c8,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:i.c8,loading:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},f=function(t,e){return function(){var n=(0,a.Z)(c().mark((function n(r,a){var s,u,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.EC}),s=a().creatorSelectedPost.post,u=a().channelDetails.channel,l=u._id,n.next=7,o.updatePostText(t,l);case 7:n.sent?(s.newsHead=t.title,s.newsBody=t.body,e("Post data updated!","success"),r({type:i.iT,payload:s})):(e("Updation Failed","error"),r({type:i.c8})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),e("Updation Failed","error"),r({type:i.c8});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t,e){return n.apply(this,arguments)}}()},h=function(t,e){return function(){var n=(0,a.Z)(c().mark((function n(r,a){var s,u,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.EC}),s=a().creatorSelectedPost.post,u=a().channelDetails.channel,l=u._id,n.next=7,o.updatePostCategory(t,l);case 7:n.sent?(e("Category updated!","success"),s.category=t.category,r({type:i.iT,payload:s})):(e("Updation Failed","error"),r({type:i.c8})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),e("Updation Failed","error"),r({type:i.c8});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t,e){return n.apply(this,arguments)}}()},m=function(t,e){return function(){var n=(0,a.Z)(c().mark((function n(r,a){var s,u,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.EC}),s=a().creatorSelectedPost.post,u=a().channelDetails.channel,l=u._id,n.next=7,o.updatePostIsComment(t,l);case 7:n.sent?(e("Comment status updated!","success"),s.isComment=t.isComment,r({type:i.iT,payload:s})):(e("Updation Failed","error"),r({type:i.c8})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),e("Updation Failed","error"),r({type:i.c8});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t,e){return n.apply(this,arguments)}}()},v=function(t,e){return function(){var n=(0,a.Z)(c().mark((function n(r,a){var s,u,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.EC}),s=a().creatorSelectedPost.post,u=a().channelDetails.channel,l=u._id,n.next=7,o.updatePostIsMonetize(t,l);case 7:n.sent?(s.isMonetize=t.isMonetize,r({type:i.iT,payload:s}),e("Monetization status changed!","success")):(r({type:i.c8}),e("Updation Failed","error")),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),r({type:i.c8}),e("Updation Failed","error");case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t,e){return n.apply(this,arguments)}}()},g=function(t,e,n){return function(){var s=(0,a.Z)(c().mark((function a(s,u){var l,d,p,f,h;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:"SHOW_PROGRESS"}),s({type:i.mI}),l=u(),d=l.channelDetails,p=d.channel._id,a.next=7,o.updateChannel(t,p);case 7:if(f=a.sent,!(h=f.data).status){a.next=17;break}n(!1),d.channel=(0,r.Z)((0,r.Z)({},d.channel),t),e(h.message,"success"),s({type:"HIDE_PROGRESS"}),s({type:i.Fn,payload:d.channel}),a.next=18;break;case 17:throw"Something went wrong";case 18:a.next=25;break;case 20:a.prev=20,a.t0=a.catch(0),e("Updating data failed!","error"),s({type:"HIDE_PROGRESS"}),s({type:i.Ov});case 25:case"end":return a.stop()}}),a,null,[[0,20]])})));return function(t,e){return s.apply(this,arguments)}}()},x=function(t,e,n){return function(){var r=(0,a.Z)(c().mark((function r(a,s){var u,l,d,p,f;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:"SHOW_PROGRESS"}),a({type:i.mI}),u=s(),l=u.channelDetails,d=l.channel._id,r.next=7,o.updateChannelImage(t,d);case 7:if(p=r.sent,!(f=p.data).status){r.next=16;break}n(!1),e(f.message,"success"),a({type:"HIDE_PROGRESS"}),a({type:i.Fn,payload:l.channel}),r.next=17;break;case 16:throw"Something went wrong";case 17:r.next=24;break;case 19:r.prev=19,r.t0=r.catch(0),e("Updating data failed!","error"),a({type:"HIDE_PROGRESS"}),a({type:i.Ov});case 24:case"end":return r.stop()}}),r,null,[[0,19]])})));return function(t,e){return r.apply(this,arguments)}}()}},9396:function(t,e,n){n.r(e),n.d(e,{cancelPayout:function(){return L},changeDp:function(){return U},changeName:function(){return T},changePassword:function(){return z},changePhone:function(){return _},clickAd:function(){return Y},createAd:function(){return et},createChannel:function(){return q},createPost:function(){return P},createRazorOrder:function(){return nt},creatorPostDetails:function(){return G},deleteComment:function(){return f},deleteDraft:function(){return g},deletePost:function(){return v},endCampaign:function(){return X},fetchHomeData:function(){return u},fetchPostDetails:function(){return d},fetchPosts:function(){return l},fetchUserProfile:function(){return E},getAdRevenueDetails:function(){return Q},getAddedPosts:function(){return A},getBillingData:function(){return tt},getCategory:function(){return y},getChannelDetails:function(){return H},getDashboard:function(){return M},getNavlinks:function(){return j},getRelated:function(){return x},getSavedPosts:function(){return Z},getSponsorAds:function(){return J},getTransactionDetails:function(){return B},getTransactions:function(){return at},getUserIp:function(){return st},isNameValiable:function(){return F},likePost:function(){return h},loadDisplayAd:function(){return W},postComment:function(){return p},removeDp:function(){return R},requestPayout:function(){return K},saveDraft:function(){return b},savePost:function(){return m},signIn:function(){return O},signOut:function(){return I},signUp:function(){return S},translate:function(){return ct},updateChannel:function(){return V},updateChannelImage:function(){return $},updatePostCategory:function(){return w},updatePostIsComment:function(){return N},updatePostIsMonetize:function(){return k},updatePostText:function(){return C},verifyAndPay:function(){return rt},verifyUser:function(){return D}});var r=n(4569),a=n.n(r),s=n(4956),c=n(859),o=n(631),i=a().create({baseURL:o.z,withCredentials:!0}),u=function(){return i.get("/posts/fetch-home")},l=function(t,e,n){return i.get("/posts/fetch-news/".concat(n,"?limit=").concat(t,"&&skip=").concat(e))},d=function(t,e){return i.get("/posts/fetch-details/".concat(t,"?signature=").concat(e))},p=function(t){return i.patch("/posts/post-comment/",t)},f=function(t){return i.patch("/posts/delete-comment/",t)},h=function(t){return i.patch("/posts/like-post/",t)},m=function(t){return i.patch("/posts/save-post/",t)},v=function(t,e){return i.post("/posts/delete-post?channel=".concat(e),t)},g=function(t,e){return i.post("/posts/delete-draft?channel=".concat(e),t)},x=function(t){return i.post("/posts/fetch-related/",t)},y=function(){return i.get("/posts/category")},j=function(){return i.get("/posts/nav-links")},Z=function(){return i.get("/posts/fetch-saved")},C=function(t,e){return i.patch("/posts/update-post-data?channel=".concat(e),t)},w=function(t,e){return i.patch("/posts/update-post-category?channel=".concat(e),t)},N=function(t,e){return i.patch("/posts/update-post-iscomment?channel=".concat(e),t)},k=function(t,e){return i.patch("/posts/update-post-ismonetize?channel=".concat(e),t)},b=function(t){return i.patch("/posts/save-draft",t)},P=function(t,e,n){return i.post("/posts/addpost",t,{onUploadProgress:function(t){e(Math.round(100*t.loaded/t.total))}})},S=function(t){return i.post("users/signup",t)},O=function(t){return i.post("users/signin",t)},I=function(){return i.get("users/signout")},D=function(){return i.get("users/verify")},E=function(){return i.get("users/fetch-profile")},U=function(t){return i.patch("users/change-dp",t)},R=function(){return i.patch("users/remove-dp")},T=function(t){return i.patch("users/change-name",t)},_=function(t){return i.patch("users/change-phone",t)},z=function(t){return i.patch("users/change-password",t)},F=function(t){return i.post("users/check-avail",{name:t})},H=function(){return i.get("channel/get-details")},A=function(t,e,n){return i.get("channel/fetch-added-posts?channel=".concat(t,"&filter=").concat(e,"&limit=").concat(n))},M=function(t){return i.get("channel/get-dashdata?channel=".concat(t))},G=function(t,e){return i.get("channel/get-full-post?postid=".concat(t,"&channel=").concat(e))},B=function(t){return i.get("channel/get-transactions?channel=".concat(t))},K=function(t,e){return i.put("channel/request-payout?channel=".concat(e),t)},L=function(t){return i.delete("channel/cancel-payout?channel=".concat(t))},V=function(t,e){return i.patch("channel/update-channel?channel=".concat(e),t)},$=function(t,e){return i.patch("channel/update-channel-image?channel=".concat(e),t)},q=function(t,e){return i.post("channel/create",t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){e(Math.round(100*t.loaded/t.total))}})},W=function(t,e){return i.post("ad/load-ad?signature=".concat(e),t)},Y=function(t,e){return i.post("ad/click-ad?signature=".concat(e),t)},J=function(t,e){return i.get("ad/sponsor-ads?limit=".concat(t,"&skip=").concat(e))},Q=function(t){return i.get("ad/ad-revenue-details/".concat(t))},X=function(t){return i.put("ad/end-campaign/".concat(t))},tt=function(){return i.get("ad/fetch-billing-data")},et=function(t,e){return i.post("ad/create",t,{onUploadProgress:function(t){e(Math.round(100*t.loaded/t.total))}})},nt=function(t){return i.post("payment/create-order",t)},rt=function(t){return i.post("payment/verify-payment",t)},at=function(t,e){return i.get("payment/fetch-transactions?type=SPONSOR&limit=".concat(e,"&skip=").concat(t))},st=function(){return i.get("/users/get-ip")},ct=function(t,e){return i.get("posts/translate/".concat(t,"?lang=").concat(e))};i.interceptors.response.use((function(t){return t}),(function(t){return new Promise((function(e,n){try{if(401===t.response.status&&(s.Z.dispatch({type:c.KY}),s.Z.dispatch({type:"HIDE_PROGRESS"})),403===t.response.status&&window.location.reload(),404===t.response.status)"USER_NOT_FOUND"===t.response.data.type&&(s.Z.dispatch({type:c.KY}),s.Z.dispatch({type:"HIDE_PROGRESS"}));n(t)}catch(t){n(t)}}))}))},631:function(t,e,n){n.d(e,{z:function(){return r}});var r="http://localhost:5000/api"}}]);
//# sourceMappingURL=3791.c43e287b.chunk.js.map