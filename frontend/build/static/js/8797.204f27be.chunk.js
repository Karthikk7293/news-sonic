"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8797],{8797:function(t,n,e){e.r(n),e.d(n,{default:function(){return ct}});var r,a,o,c=e(1413),i=e(2982),s=e(5861),u=e(885),l=e(7757),d=e.n(l),f=e(2791),p=e(9836),h=e(1724),m=e(3382),v=e(3994),y=e(9281),g=e(6890),E=e(5855),w=e(703),b=e(8820),N=e(828),S=e(3238),x=e(388),P=e(6151),j=e(8446),I=(e(9201),e(9434)),A=e(9276),k=e(2426),Z=e.n(k),R=e(6245);!function(t){t.INITIAL="initial",t.PENDING="pending",t.REJECTED="rejected",t.RESOLVED="resolved"}(r||(r={})),function(t){t.LOADING_STATUS="setLoadingStatus",t.RESET_OPTIONS="resetOptions",t.SET_BRAINTREE_INSTANCE="braintreeInstance"}(a||(a={})),function(t){t.NUMBER="number",t.CVV="cvv",t.EXPIRATION_DATE="expirationDate",t.EXPIRATION_MONTH="expirationMonth",t.EXPIRATION_YEAR="expirationYear",t.POSTAL_CODE="postalCode"}(o||(o={}));var O="data-react-paypal-script-id",C="data-sdk-integration-source",T="react-paypal-js",D="data-namespace",L="Failed to load the PayPal JS SDK script.",_="3.84.0",G=("https://js.braintreegateway.com/web/".concat(_,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(_,"/js/paypal-checkout.min.js"),"paypal"),U=function(){return U=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},U.apply(this,arguments)};function B(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e}function M(t,n,e){if(e||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return t.concat(r||Array.prototype.slice.call(n))}function F(t){return void 0===t&&(t=G),window[t]}function q(t){var n=t.reactComponentName,e=t.sdkComponentKey,r=t.sdkRequestedComponents,a=void 0===r?"":r,o=t.sdkDataNamespace,c=void 0===o?G:o,i=e.charAt(0).toUpperCase().concat(e.substring(1)),s="Unable to render <".concat(n," /> because window.").concat(c,".").concat(i," is undefined.");if(!a.includes(e)){var u=[a,e].filter(Boolean).join();s+="\nTo fix the issue, add '".concat(e,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(u,"'}}>`.")}return s}function Y(t){return"react-paypal-js-".concat(function(t){for(var n="",e=0;e<t.length;e++){var r=t[e].charCodeAt(0)*e;t[e+1]&&(r+=t[e+1].charCodeAt(0)*(e-1)),n+=String.fromCharCode(97+Math.abs(r)%26)}return n}(JSON.stringify(t)))}function z(t,n){var e;switch(n.type){case a.LOADING_STATUS:return U(U({},t),{loadingStatus:n.value});case a.RESET_OPTIONS:return function(t){var n=self.document.querySelector("script[".concat(O,'="').concat(t,'"]'));(null===n||void 0===n?void 0:n.parentNode)&&n.parentNode.removeChild(n)}(t.options[O]),delete n.value[O],U(U({},t),{loadingStatus:r.PENDING,options:U(U({},n.value),(e={},e[O]="".concat(Y(n.value)),e[C]=T,e))});case a.SET_BRAINTREE_INSTANCE:return U(U({},t),{braintreePayPalCheckoutInstance:n.value});default:return t}}var J=(0,f.createContext)(null);function K(t){if("function"===typeof(null===t||void 0===t?void 0:t.dispatch)&&0!==t.dispatch.length)return t;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function V(){var t=K((0,f.useContext)(J));return[U(U({},t),{isInitial:t.loadingStatus===r.INITIAL,isPending:t.loadingStatus===r.PENDING,isResolved:t.loadingStatus===r.RESOLVED,isRejected:t.loadingStatus===r.REJECTED}),t.dispatch]}(0,f.createContext)({});var H=function t(n){var e=n.className,r=void 0===e?"":e,a=n.disabled,o=void 0!==a&&a,c=n.children,i=n.forceReRender,s=void 0===i?[]:i,u=B(n,["className","disabled","children","forceReRender"]),l=o?{opacity:.38}:{},d="".concat(r," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,f.useRef)(null),h=(0,f.useRef)(null),m=V()[0],v=m.isResolved,y=m.options,g=(0,f.useState)(null),E=g[0],w=g[1],b=(0,f.useState)(!0),N=b[0],S=b[1],x=(0,f.useState)(null)[1];function P(){null!==h.current&&h.current.close().catch((function(){}))}return(0,f.useEffect)((function(){if(!1===v)return P;var n=F(y[D]);if(void 0===n||void 0===n.Buttons)return x((function(){throw new Error(q({reactComponentName:t.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:y.components,sdkDataNamespace:y[D]}))})),P;try{h.current=n.Buttons(U(U({},u),{onInit:function(t,n){w(n),"function"===typeof u.onInit&&u.onInit(t,n)}}))}catch(e){return x((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))}))}return!1===h.current.isEligible()?(S(!1),P):p.current?(h.current.render(p.current).catch((function(t){null!==p.current&&0!==p.current.children.length&&x((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(t))}))})),P):P}),M(M([v],s,!0),[u.fundingSource],!1)),(0,f.useEffect)((function(){null!==E&&(!0===o?E.disable().catch((function(){})):E.enable().catch((function(){})))}),[o,E]),f.createElement(f.Fragment,null,N?f.createElement("div",{ref:p,style:l,className:d}):c)};function W(t){var n="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(n=t.sdkBaseURL,delete t.sdkBaseURL),function(t){var n=t["merchant-id"],e=t["data-merchant-id"],r="",a="";Array.isArray(n)?n.length>1?(r="*",a=n.toString()):r=n.toString():"string"===typeof n&&n.length>0?r=n:"string"===typeof e&&e.length>0&&(r="*",a=e);t["merchant-id"]=r,t["data-merchant-id"]=a}(t);var e=Object.keys(t).filter((function(n){return"undefined"!==typeof t[n]&&null!==t[n]&&""!==t[n]})).reduce((function(n,e){var r=t[e].toString();return"data-"===e.substring(0,5)?n.dataAttributes[e]=r:n.queryParams[e]=r,n}),{queryParams:{},dataAttributes:{}}),r=e.queryParams,a=e.dataAttributes;return{url:"".concat(n,"?").concat(X(r)),dataAttributes:a}}function X(t){var n="";return Object.keys(t).forEach((function(e){0!==n.length&&(n+="&"),n+=e+"="+t[e]})),n}function Q(t,n){void 0===n&&(n={});var e=document.createElement("script");return e.src=t,Object.keys(n).forEach((function(t){e.setAttribute(t,n[t]),"data-csp-nonce"===t&&e.setAttribute("nonce",n["data-csp-nonce"])})),e}function $(t,n){if(void 0===n&&(n=nt()),rt(t,n),"undefined"===typeof window)return n.resolve(null);var e=W(t),r=e.url,a=e.dataAttributes,o=a["data-namespace"]||"paypal",c=et(o);return function(t,n){var e=document.querySelector('script[src="'.concat(t,'"]'));if(null===e)return null;var r=Q(t,n),a=e.cloneNode();if(delete a.dataset.uidAuto,Object.keys(a.dataset).length!==Object.keys(r.dataset).length)return null;var o=!0;return Object.keys(a.dataset).forEach((function(t){a.dataset[t]!==r.dataset[t]&&(o=!1)})),o?e:null}(r,a)&&c?n.resolve(c):tt({url:r,attributes:a},n).then((function(){var t=et(o);if(t)return t;throw new Error("The window.".concat(o," global variable is not available."))}))}function tt(t,n){void 0===n&&(n=nt()),rt(t,n);var e=t.url,r=t.attributes;if("string"!==typeof e||0===e.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new n((function(t,n){if("undefined"===typeof window)return t();!function(t){var n=t.url,e=t.attributes,r=t.onSuccess,a=t.onError,o=Q(n,e);o.onerror=a,o.onload=r,document.head.insertBefore(o,document.head.firstElementChild)}({url:e,attributes:r,onSuccess:function(){return t()},onError:function(){var t=new Error('The script "'.concat(e,'" failed to load.'));return window.fetch?fetch(e).then((function(e){return 200===e.status&&n(t),e.text()})).then((function(t){var e=function(t){var n=t.split("/* Original Error:")[1];return n?n.replace(/\n/g,"").replace("*/","").trim():t}(t);n(new Error(e))})).catch((function(t){n(t)})):n(t)}})}))}function nt(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function et(t){return window[t]}function rt(t,n){if("object"!==typeof t||null===t)throw new Error("Expected an options object.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected PromisePonyfill to be a function.")}H.displayName="PayPalButtons";(function t(n){var e=n.className,r=void 0===e?"":e,a=n.children,o=B(n,["className","children"]),c=V()[0],i=c.isResolved,s=c.options,u=(0,f.useRef)(null),l=(0,f.useState)(!0),d=l[0],p=l[1],h=(0,f.useState)(null)[1];return(0,f.useEffect)((function(){if(!1!==i){var n=F(s[D]);if(void 0===n||void 0===n.Marks)return h((function(){throw new Error(q({reactComponentName:t.displayName,sdkComponentKey:"marks",sdkRequestedComponents:s.components,sdkDataNamespace:s[D]}))}));!function(t){var n=u.current;if(!n||!t.isEligible())return p(!1);n.firstChild&&n.removeChild(n.firstChild),t.render(n).catch((function(t){null!==n&&0!==n.children.length&&h((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(t))}))}))}(n.Marks(U({},o)))}}),[i,o.fundingSource]),f.createElement(f.Fragment,null,d?f.createElement("div",{ref:u,className:r}):a)}).displayName="PayPalMarks";var at=function(t){var n,e=t.options,o=void 0===e?{"client-id":"test"}:e,c=t.children,i=t.deferLoading,s=void 0!==i&&i,u=(0,f.useReducer)(z,{options:U(U({},o),(n={},n[O]="".concat(Y(o)),n[C]=T,n)),loadingStatus:s?r.INITIAL:r.PENDING}),l=u[0],d=u[1];return(0,f.useEffect)((function(){if(!1===s&&l.loadingStatus===r.INITIAL)return d({type:a.LOADING_STATUS,value:r.PENDING});if(l.loadingStatus===r.PENDING){var t=!0;return $(l.options).then((function(){t&&d({type:a.LOADING_STATUS,value:r.RESOLVED})})).catch((function(n){console.error("".concat(L," ").concat(n)),t&&d({type:a.LOADING_STATUS,value:r.REJECTED})})),function(){t=!1}}}),[l.options,s,l.loadingStatus]),f.createElement(J.Provider,{value:U(U({},l),{dispatch:d})},c)},ot=e(184);function ct(){var t=(0,f.useState)("ALL"),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,f.useState)([]),o=(0,u.Z)(a,2),l=o[0],k=o[1],O=(0,f.useState)(null),C=(0,u.Z)(O,2),T=C[0],D=C[1],L=(0,I.I0)(),_="SHOW_ADMIN_PROGRESS",G="HIDE_ADMIN_PROGRESS",U=(0,f.useState)(!1),B=(0,u.Z)(U,2),M=B[0],F=B[1],q=(0,f.useState)(null),Y=(0,u.Z)(q,2),z=Y[0],J=Y[1],K=function(){F(!1),D(null)};(0,f.useEffect)((function(){(0,s.Z)(d().mark((function t(){var n,e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.t();case 2:n=t.sent,null!==(e=n.data)&&void 0!==e&&e.status&&J(e.paypalId);case 5:case"end":return t.stop()}}),t)})))()}),[]),(0,f.useEffect)((function(){l.length=0,k((0,i.Z)(l)),V(0,10,e)}),[e]);var V=function(){var t=(0,s.Z)(d().mark((function t(n,e,r){var a,o;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L({type:_}),t.next=3,h.S4(n,e,r);case 3:a=t.sent,o=a.data,L({type:G}),null!==o&&void 0!==o&&o.payouts&&k([].concat((0,i.Z)(l),(0,i.Z)(null===o||void 0===o?void 0:o.payouts))),null!==o&&void 0!==o&&o.message&&alert(null===o||void 0===o?void 0:o.message);case 8:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),W=function(){var t=(0,s.Z)(d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L({type:_}),V(parseInt(l.length),parseInt(l.length+10),e),L({type:G});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,f.useEffect)((function(){T&&(0,s.Z)(d().mark((function t(){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,R.s)(T.amount);case 2:n=t.sent,T.finalAmount=n||(T.amount/75).toFixed().toString();case 4:case"end":return t.stop()}}),t)})))()}),[T]),(0,ot.jsxs)(ot.Fragment,{children:[(0,ot.jsx)("div",{className:"content-end mt-3",children:(0,ot.jsxs)(S.Z,{color:"primary",style:{backgroundColor:"white"},value:e,exclusive:!0,onChange:function(t,n){r(n)},children:[(0,ot.jsx)(x.Z,{value:"ALL",className:"show-post-toogle",children:"All"}),(0,ot.jsx)(x.Z,{value:"PAID",className:"show-post-toogle",children:"PAID"}),(0,ot.jsx)(x.Z,{value:"PENDING",className:"show-post-toogle",children:"PENDING"})]})}),(0,ot.jsxs)(y.Z,{component:w.Z,className:"mt-1 mb-5",children:[(0,ot.jsxs)(p.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,ot.jsx)(g.Z,{children:(0,ot.jsxs)(E.Z,{children:[(0,ot.jsx)(v.Z,{children:"Channel Id:"}),(0,ot.jsx)(v.Z,{children:"Date"}),(0,ot.jsx)(v.Z,{children:"Paypal"}),(0,ot.jsx)(v.Z,{children:"Amount"}),(0,ot.jsx)(v.Z,{children:"Status"}),(0,ot.jsx)(v.Z,{children:"Actions"})]})}),(0,ot.jsx)(m.Z,{children:l.map((function(t){return(0,ot.jsxs)(E.Z,{sx:{},children:[(0,ot.jsx)(v.Z,{className:"id-row",component:"th",scope:"row",children:t.channelId}),(0,ot.jsx)(v.Z,{children:Z()(t.date).format("DD/MM/YYYY")}),(0,ot.jsxs)(v.Z,{children:[(0,ot.jsx)(N.kGv,{className:"f-15 me-2"}),t.paypalId]}),(0,ot.jsxs)(v.Z,{children:["\u20b9 ",t.amount]}),(0,ot.jsx)(v.Z,{children:(0,ot.jsx)("span",{className:"sponsor-status-span ".concat(t.isPaid?"ad-status-active":"ad-status-pending"),children:t.isPaid?"Paid":"Pending"})}),(0,ot.jsx)(v.Z,{className:"id-row",component:"th",scope:"row",children:!t.isPaid&&(0,ot.jsx)(P.Z,{onClick:function(){D(t),F(!0)},children:"Approve"})})]},t._id)}))})]}),(0,ot.jsx)("div",{className:"content-center",children:(0,ot.jsxs)(P.Z,{variant:"text w-100 py-3",onClick:W,children:["Load more ",(0,ot.jsx)(b.mGl,{className:"ms-2"})]})})]}),(0,ot.jsx)("div",{children:(0,ot.jsx)(j.Z,{open:M,onClose:K,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,ot.jsxs)(A.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"#fff",boxShadow:24,border:"none",p:4},children:[(0,ot.jsxs)("p",{className:"mb-1",children:["Paypal Id:",(0,ot.jsx)("span",{className:"fw-500 ms-2",children:null===T||void 0===T?void 0:T.paypalId})]}),(0,ot.jsxs)("p",{children:["Amount:",(0,ot.jsx)("span",{className:"fw-500 f-20 ms-2",children:null===T||void 0===T?void 0:T.amount})]}),z&&(0,ot.jsx)(at,{options:{"client-id":z},children:(0,ot.jsx)(H,{style:{layout:"horizontal",color:"silver",tagline:!1},createOrder:function(t,n){var e=T.finalAmount,r=T.paypalId;return n.order.create({intent:"CAPTURE",purchase_units:[{amount:{currency_code:"USD",value:e},payee:{email_address:r}}]})},onApprove:function(){var t=(0,s.Z)(d().mark((function t(n,e){var r,a,o,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.order.capture();case 3:return r=t.sent,a={payment_id:r.id,amount:null===T||void 0===T?void 0:T.amount,channelId:null===T||void 0===T?void 0:T.channelId},t.next=7,h.fG(a,T._id);case 7:o=t.sent,i=o.data,alert(i.message),D((function(t){return(0,c.Z)((0,c.Z)({},t),{},{isPaid:!0})})),K(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),alert("Error");case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(n,e){return t.apply(this,arguments)}}()})})]})})})]})}},1724:function(t,n,e){e.d(n,{G9:function(){return N},It:function(){return b},LC:function(){return v},Ll:function(){return d},S4:function(){return A},T6:function(){return p},Tt:function(){return S},UR:function(){return w},Yb:function(){return x},ZW:function(){return l},Zz:function(){return m},cW:function(){return u},fG:function(){return j},fR:function(){return h},ix:function(){return I},kX:function(){return E},rK:function(){return f},rf:function(){return g},t:function(){return k},uh:function(){return y},z8:function(){return P}});var r=e(4569),a=e.n(r),o=e(4956),c=e(859),i=e(631),s=a().create({baseURL:"".concat(i.z,"/admin"),withCredentials:!0}),u=function(t){return s.post("/signin",t)},l=function(){return s.get("/verify")},d=function(){return s.get("/get-dash-data")},f=function(){return s.get("/logout")},p=function(t,n,e){return s.get("/fetch-posts?status=".concat(e,"&limit=").concat(n,"&skip=").concat(t))},h=function(t){return s.post("/delete-post",t)},m=function(t){return s.get("/get-selected-post?id=".concat(t))},v=function(t,n){return s.patch("/update-post-status?id=".concat(t,"&status=").concat(n))},y=function(t,n,e){return s.get("/fetch-users?filter=".concat(e,"&limit=").concat(n,"&skip=").concat(t))},g=function(t,n){return s.patch("/block-user?id=".concat(t,"&status=").concat(n))},E=function(t){return s.delete("/remove-user?id=".concat(t))},w=function(t,n,e){return s.get("/fetch-channels?status=".concat(e,"&limit=").concat(n,"&skip=").concat(t))},b=function(t,n){return s.patch("/block-channel?id=".concat(t,"&status=").concat(n))},N=function(t){return s.patch("/approve-channel?id=".concat(t))},S=function(t,n,e){return s.get("/fetch-ads?status=".concat(e,"&limit=").concat(n,"&skip=").concat(t))},x=function(t){return s.get("/fetch-ad-details/".concat(t))},P=function(t){return s.patch("/approve-ad/",{adId:t})},j=function(t,n){return s.patch("/approve-payout/".concat(n),t)},I=function(t){return s.patch("/end-campaign/".concat(t))},A=function(t,n,e){return s.get("/fetch-payouts?filter=".concat(e,"&limit=").concat(n,"&skip=").concat(t))},k=function(){return s.get("/get-paypal-id")};s.interceptors.response.use((function(t){return t}),(function(t){return new Promise((function(n,e){401===t.response.status&&o.Z.dispatch({type:c.YH}),e(t)}))}))},631:function(t,n,e){e.d(n,{z:function(){return r}});var r="http://localhost:5000/api"},9201:function(){}}]);
//# sourceMappingURL=8797.204f27be.chunk.js.map