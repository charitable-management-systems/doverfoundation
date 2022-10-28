(self.webpackChunkdover=self.webpackChunkdover||[]).push([[285],{186:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){"use strict";a.d(t,{L:function(){return h},M:function(){return x},P:function(){return E},S:function(){return O},_:function(){return o},a:function(){return l},b:function(){return c},g:function(){return d},h:function(){return s}});var n=a(7294),r=(a(186),a(5697)),i=a.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,n,r){return void 0===r&&(r={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,i,o,s){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);var d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,a=o(e,m);return n.createElement(n.Fragment,null,n.createElement(p,l({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,d=o(e,g);return n.createElement("img",l({},d,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:s}))},v=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,s=void 0===i||i,c=o(e,f),d=c.sizes||(null==t?void 0:t.sizes),u=n.createElement(y,l({},c,t,{sizes:d,shouldLoad:s}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:d})})),u):u};y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,a=o(e,w);return t?n.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(v,l({},e)),n.createElement("noscript",null,n.createElement(v,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;var b,k,z=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),l=3;l<n;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:z},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],I=new Set,_=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,h=e.onLoad,g=e.onError,f=o(e,C),y=i.width,v=i.height,w=i.layout,E=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(y,v,w),x=E.style,z=E.className,N=o(E,L),_=(0,n.useRef)(),S=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var T=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,y,v);return(0,n.useEffect)((function(){b||(b=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=_.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==h||h({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(S)):k&&I.has(S)?void 0:(b.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;_.current&&(_.current.innerHTML=n(l({isLoading:!0,isLoaded:I.has(S),image:i},f)),I.has(S)||(e=requestAnimationFrame((function(){_.current&&(t=r(_.current,S,I,c,p,h,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){I.has(S)&&k&&(_.current.innerHTML=k(l({isLoading:I.has(S),isLoaded:I.has(S),image:i},f)),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}))}),[i]),(0,n.createElement)(r,l({},N,{style:l({},x,c,{backgroundColor:d}),className:z+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},S=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));S.propTypes=N,S.displayName="GatsbyImage";var T,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:z,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},O=(T=S,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=o(e,A);return r&&console.warn(r),a?n.createElement(T,l({image:a},i)):(console.warn("Image not loaded",t),null)});O.displayName="StaticImage",O.propTypes=R},4098:function(e,t,a){"use strict";a.d(t,{h:function(){return k}});var n=a(1082),r=a(7294),i=a(7166),l=a(6567),o=a.n(l),s=a(8686),c=a.n(s),d=a(3638),u=[{title:"Information",url:"/programInformation",items:[{title:"Eligibility",url:"/programInformation#eligibility"},{title:"Rules and Regulations",url:"/programInformation#rules"},{title:"Selection Process",url:"/programInformation#selection"},{title:"Application Process",url:"/programInformation#applicationProcess"},{title:"Contact Us",url:"/programInformation#contact"}]},{title:"Renewal Process",url:"/renewalProcess"},{title:"News",url:"/news",items:[{title:"Awardees",url:"/news#awardees"},{title:"Colleges Attended",url:"/news#collegesAttended"},{title:"Majors",url:"/news#recentMajors"},{title:"Press Releases",url:"/news#pressReleases"}]},{title:"Apply",url:"https://application.doverfoundation.org/application/login",items:[{title:"Application",url:"https://application.doverfoundation.org/application/login"},{title:"Employee Verification Form",url:""},{title:"Academic Record Form",url:""},{title:"Recommender Form",url:""}]}],m=(0,i.default)(o()).withConfig({displayName:"Header__StyledLogo",componentId:"sc-m7wkzh-0"})(["height:44px;width:150px;display:flex;margin-right:auto;"]),p=(0,i.default)(c()).withConfig({displayName:"Header__StyledMenu",componentId:"sc-m7wkzh-1"})(["margin-left:auto;"]),h=i.default.div.withConfig({displayName:"Header__NavLinks",componentId:"sc-m7wkzh-2"})(["display:flex;marign-right:auto;max-width:600px;padding-right:32px;flex-grow:1;justify-content:space-around;"]),g=i.default.div.withConfig({displayName:"Header__Container",componentId:"sc-m7wkzh-3"})(["position:sticky;display:flex;top:0;height:48px;padding:8px;gap:32px;align-items:center;background-color:white;z-index:300;border-bottom:1px solid rgba(155,155,155,0.1);box-shadow:0px 0px 10px rgba(155,155,155,0.2);justify-content:space-around;"]),f=i.default.div.withConfig({displayName:"Header__SubNav",componentId:"sc-m7wkzh-4"})(["margin-top:23px;position:absolute;min-width:124px;background-color:white;max-height:"," overflow:hidden;transition:400ms ease-in-out;box-shadow:0px 10px 10px rgba(155,155,155,0.2);"],(function(e){return e.$show?"500px;":"0px;"})),y=i.default.div.withConfig({displayName:"Header__SubNavLink",componentId:"sc-m7wkzh-5"})(["padding:8px 16px;"]),v=i.default.div.withConfig({displayName:"Header__MobileNavMenu",componentId:"sc-m7wkzh-6"})(["position:fixed;right:0;z-index:100;height:calc(100vh - 81px);width:200px;display:flex;padding-top:16px;padding-left:16px;margin-left:auto;background-color:white;box-shadow:-8px 10px 14px 0px rgba(155,155,155,0.17);border-left:1px solid rgba(155,155,155,0.1);transition:400ms ease-in-out;transform:",","],(function(e){return e.$show?"translateX(0)":"translateX(216px);"})),w=(0,i.default)((function(e){var t=e.title,a=e.url,i=e.subNav,l=r.useState(!1),o=l[0],s=l[1];return r.createElement("div",{onMouseOver:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},r.createElement("div",null,r.createElement(n.rU,{to:a},t)),r.createElement(f,{$show:null!=i&&o},null==i?void 0:i.map((function(e){var t=e.title,a=e.url;return r.createElement(y,null,r.createElement(n.rU,{to:a},t))}))))})).withConfig({displayName:"Header__StyledNavLink",componentId:"sc-m7wkzh-7"})([""]),E=i.default.ul.withConfig({displayName:"Header__MobileNavList",componentId:"sc-m7wkzh-8"})(["padding-left:8px;width:100%;list-style-type:none;font-size:14px;margin-top:4px;margin-bottom:4px;line-height:18px;"]),x=i.default.li.withConfig({displayName:"Header__MobileNavListItem",componentId:"sc-m7wkzh-9"})(["margin-top:8px;margin-bottom:8px;"]),b=function(){var e=r.useState(!1),t=e[0],a=e[1];return r.useEffect((function(){document.getElementsByTagName("body")[0].className=t?"noscroll":""}),[t]),r.createElement(r.Fragment,null,r.createElement(g,null,r.createElement(n.rU,{to:"/"},r.createElement(m,null)),r.createElement(p,{onClick:function(){return a(!t)}})),r.createElement(v,{$show:t},r.createElement(E,null,u.map((function(e){return r.createElement(x,null,r.createElement(n.rU,{to:e.url},e.title),e.items&&r.createElement(E,null,e.items.map((function(e){return r.createElement("li",null,r.createElement(n.rU,{to:e.url},e.title))}))))})))))},k=function(){return"large"!==(0,d.w)()?r.createElement(b,null):r.createElement(g,null,r.createElement(n.rU,{to:"/"},r.createElement(m,null)),r.createElement(h,null,u.map((function(e){return r.createElement(w,{title:e.title,url:e.url,subNav:null==e?void 0:e.items})}))))}},1183:function(e,t,a){"use strict";a.d(t,{o:function(){return n}});var n=a(7166).default.main.withConfig({displayName:"Main",componentId:"sc-o7yskg-0"})(["display:flex;flex-direction:column;max-width:1000px;margin-left:auto;margin-right:auto;overflow:scroll;"])},3638:function(e,t,a){"use strict";a.d(t,{w:function(){return i}});var n=a(7294),r=n.createContext("large");t.Z=function(e){var t=e.children,a="undefined"!=typeof window,i=function(){return a?window.innerWidth>900?"large":window.innerWidth>600?"medium":"small":"large"},l=(0,n.useState)(i()),o=l[0],s=l[1];return(0,n.useEffect)((function(){if("undefined"!=typeof window){var e=function(){return s(i())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}return function(){}})),n.createElement(r.Provider,{value:o},t)};var i=function(){return n.useContext(r)}},6567:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("defs",{id:"defs142",key:0}),n.createElement("style",{type:"text/css",id:"style89",key:1},"\n\t.st0{fill:#004B8D;}\n"),n.createElement("g",{id:"g137",transform:"translate(-106.22,-372.13)",key:2},[n.createElement("g",{id:"g101",key:0},[n.createElement("g",{id:"g97",key:0},[n.createElement("path",{className:"st0",d:"m 370.39,523.42 -2.06,1.29 -2.43,0.15 -139.94,8.5 26.79,98.37 0.02,-0.01 c 4.48,14.64 21.74,24.18 45.82,27.62 0.14,-3.39 1.98,-7.65 8.28,-9.36 4.98,-1.36 11.51,-2.87 14.65,-3.59 l 1.71,-0.4 c 0.4,-0.11 1.52,-0.46 3.07,-0.94 3.82,-1.18 10,-3.08 16.03,-4.72 l 5.96,-1.64 c 18.97,-5.17 41.03,-8.82 61.3,2.62 42.61,-18.6 69.7,-46.69 64.18,-69.76 l 0.4,-0.11 -26.29,-96.54 z",id:"path91",key:0}),n.createElement("polygon",{className:"st0",points:"106.22,531.06 365.32,515.33 558.65,394.26 299.54,409.99 ",id:"polygon93",key:1}),n.createElement("path",{className:"st0",d:"m 227.28,657.27 c 0,0 -22.58,-46.61 -26.42,-54.64 -2.52,-5.28 -6.08,-6.52 -8.23,-6.76 l -2.25,-8.26 c 3.27,-1.97 4.98,-5.92 3.93,-9.79 -1.05,-3.86 -4.53,-6.41 -8.35,-6.44 l -12.44,-45.67 -4.6,1.25 12.44,45.67 c -3.27,1.97 -4.98,5.92 -3.93,9.79 1.05,3.86 4.53,6.41 8.35,6.44 l 2.24,8.21 c -1.73,1.29 -4.17,4.16 -3.66,9.99 0.76,8.86 4.93,60.49 4.93,60.49 0,0 -0.77,9.28 18.8,3.95 0,0 4.06,-1.05 4.99,-1.31 19.57,-5.32 14.2,-12.92 14.2,-12.92 z",id:"path95",key:2})]),n.createElement("ellipse",{transform:"rotate(-15.634522,365.24592,615.00334)",className:"st0",cx:"365.32001",cy:"615.09998",rx:"96.43",ry:"40.529999",id:"ellipse99",key:1})]),n.createElement("g",{id:"g117",key:1},[n.createElement("g",{id:"g111",key:0},[n.createElement("path",{className:"st0",d:"m 738.44,441.7 h -5.06 v 53.62 h 5.06 c 5.76,0 7.78,-2.49 7.78,-9.66 V 451.4 c 0,-7.21 -2.02,-9.7 -7.78,-9.7 z",id:"path103",key:0}),n.createElement("path",{className:"st0",d:"m 821.79,437.66 c -4.7,0 -6.8,3.14 -6.8,7.85 v 44.75 c 0,4.69 2.09,7.85 6.8,7.85 4.71,0 6.86,-3.16 6.86,-7.85 V 445.5 c 0,-4.7 -2.14,-7.84 -6.86,-7.84 z",id:"path105",key:1}),n.createElement("path",{className:"st0",d:"m 1077.5,372.65 -485.59,-0.52 v 66.92 h 61.14 v 59.58 h -61.14 v 66.89 h 486.63 c 0,0 83.14,0.3 83.14,-100.35 0,-92.35 -84.18,-92.52 -84.18,-92.52 z M 778.01,483.98 c 0,21.33 -9.08,31.24 -30.98,31.24 h -44.97 v -93.27 l 0.1,-0.14 h 44.87 c 21.9,0 30.98,9.94 30.98,31.26 z m 43.78,33.49 c -30.72,0 -39.05,-11.26 -39.05,-49.59 0,-38.32 8.34,-49.6 39.05,-49.6 30.77,0 39.11,11.27 39.11,49.6 0.01,38.33 -8.34,49.59 -39.11,49.59 z m 99.02,-2.87 h -41.55 l -20.6,-93.43 h 33.44 l 7.91,63.84 h 0.23 l 8.24,-63.84 h 33.56 z m 84.63,-71.2 h -29.05 v 13.88 h 26.35 v 19.9 h -26.35 v 15.15 h 29.05 V 514.6 H 944.6 v -93.43 h 60.84 z m 86.06,71.2 h -31.46 c -2.81,0 -4.6,-2.66 -4.6,-6.81 v -20.56 c 0,-7.98 -2.21,-11.12 -8.12,-11.12 h -4.45 v 38.49 h -31.81 v -93.43 h 49.21 c 18.39,0 27.34,7.6 27.34,25.91 0,11.76 -6.36,19.23 -16.73,20.39 v 0.3 c 6.6,0.76 16.36,5.48 16.36,16.99 v 21.07 c 0,5.11 2.25,7.7 4.36,8.48 z",id:"path107",key:2}),n.createElement("path",{className:"st0",d:"m 1047.2,439.22 h -4.34 v 18.84 h 5.04 c 5.79,0 7.92,-4.71 7.92,-10.05 0,-6.7 -3.79,-8.79 -8.62,-8.79 z",id:"path109",key:3})]),n.createElement("g",{id:"g115",key:1},n.createElement("path",{className:"st0",d:"m 1180.17,548.18 c 0,9.66 -7.84,17.33 -17.24,17.33 -9.3,0 -17.23,-7.66 -17.23,-17.33 0,-9.67 8.02,-17.24 17.23,-17.24 9.49,0 17.24,7.66 17.24,17.24 z m -32.42,0 c 0,8.57 6.88,15.32 15.18,15.32 8.39,0 15.19,-6.84 15.19,-15.32 0,-8.17 -6.61,-15.19 -15.19,-15.19 -8.3,0 -15.18,6.84 -15.18,15.19 z m 8.89,-9.39 h 6.57 c 1.37,0 6.29,0 6.29,4.65 0,0.54 0,3.47 -3.47,4.47 1.91,0.45 2.56,1.27 2.83,3.56 0.27,2.28 0.45,4.01 1.09,5.83 h -2.64 c -0.37,-1.18 -0.55,-1.91 -0.92,-4.83 -0.27,-2.83 -1,-3.56 -4.01,-3.56 h -3.2 v 8.39 h -2.55 v -18.51 z m 2.55,7.93 h 4.02 c 1.27,0 3.65,0 3.65,-2.83 0,-2.92 -2.28,-2.92 -3.65,-2.92 h -4.02 z",id:"path113"}))]),n.createElement("g",{id:"g135",key:2},[n.createElement("path",{className:"st0",d:"m 589.63,681.47 c -1.63,-0.82 -1.75,-1.28 -1.75,-4.44 0,-5.84 0.47,-10.51 0.58,-12.38 0.12,-1.28 0.35,-1.87 0.93,-1.87 0.7,0 0.82,0.35 0.82,1.28 0,1.05 0,2.69 0.35,4.32 1.75,8.64 9.46,11.91 17.28,11.91 11.21,0 16.7,-8.06 16.7,-15.53 0,-8.06 -3.39,-12.73 -13.43,-21.02 l -5.26,-4.32 c -12.38,-10.16 -15.18,-17.4 -15.18,-25.34 0,-12.49 9.34,-21.02 24.17,-21.02 4.55,0 7.94,0.47 10.86,1.17 2.22,0.47 3.15,0.58 4.09,0.58 0.93,0 1.17,0.23 1.17,0.82 0,0.58 -0.47,4.44 -0.47,12.38 0,1.87 -0.23,2.69 -0.82,2.69 -0.7,0 -0.82,-0.58 -0.93,-1.52 -0.12,-1.4 -0.82,-4.55 -1.52,-5.84 -0.7,-1.28 -3.85,-6.19 -14.6,-6.19 -8.06,0 -14.36,5.02 -14.36,13.55 0,6.66 3.04,10.86 14.25,19.62 l 3.27,2.57 c 13.78,10.86 17.05,18.1 17.05,27.44 0,4.79 -1.87,13.66 -9.93,19.39 -5.02,3.5 -11.33,4.9 -17.63,4.9 -5.48,0 -10.85,-0.81 -15.64,-3.15 z",id:"path119",key:0}),n.createElement("path",{className:"st0",d:"m 661.79,673.65 c -10.04,-8.64 -12.5,-19.97 -12.5,-29.43 0,-6.66 2.45,-18.22 11.56,-27.09 6.19,-5.96 15.53,-10.63 31.3,-10.63 4.09,0 9.93,0.35 14.95,1.17 3.85,0.7 7.12,1.4 10.51,1.52 1.05,0 1.29,0.47 1.29,1.05 0,0.82 -0.23,1.99 -0.47,5.61 -0.12,3.27 -0.12,8.76 -0.23,10.16 -0.12,1.52 -0.58,2.1 -1.17,2.1 -0.7,0 -0.82,-0.7 -0.82,-2.1 0,-3.85 -1.63,-7.82 -4.32,-9.93 -3.62,-3.04 -11.09,-5.49 -20.2,-5.49 -13.2,0 -19.5,3.5 -23.12,6.89 -7.59,7.01 -9.22,15.88 -9.22,25.92 0,19.03 15.06,35.97 37.02,35.97 7.71,0 12.84,-0.58 16.93,-4.67 2.22,-2.22 3.62,-6.42 3.97,-8.29 0.23,-1.05 0.35,-1.4 1.05,-1.4 0.47,0 0.93,0.7 0.93,1.4 0,0.7 -1.4,9.34 -2.45,12.73 -0.58,1.87 -0.82,2.22 -2.57,2.92 -4.2,1.63 -11.91,2.22 -18.57,2.22 -15.42,-0.01 -25.81,-3.63 -33.87,-10.63 z",id:"path121",key:1}),n.createElement("path",{className:"st0",d:"m 806.35,654.14 c 0,9.58 0.12,17.4 0.58,21.49 0.35,2.92 0.58,4.79 3.74,5.26 1.4,0.23 3.74,0.47 4.55,0.47 0.7,0 0.93,0.47 0.93,0.82 0,0.47 -0.58,0.82 -1.75,0.82 -5.6,0 -12.15,-0.35 -12.73,-0.35 -0.47,0 -7.12,0.35 -10.16,0.35 -1.17,0 -1.63,-0.23 -1.63,-0.82 0,-0.35 0.23,-0.82 0.82,-0.82 0.93,0 2.1,-0.23 3.04,-0.47 2.1,-0.47 2.45,-2.45 2.8,-5.37 0.47,-4.08 0.47,-11.56 0.47,-21.13 v -9.93 c 0,-0.47 -0.23,-0.59 -0.58,-0.59 h -42.86 c -0.35,0 -0.58,0.12 -0.58,0.59 v 9.93 c 0,9.57 0,17.17 0.47,21.25 0.35,2.92 0.7,4.79 3.74,5.26 1.52,0.23 3.74,0.47 4.67,0.47 0.58,0 0.82,0.47 0.82,0.82 0,0.47 -0.47,0.82 -1.63,0.82 -5.72,0 -12.26,-0.35 -12.73,-0.35 -0.58,0 -7.12,0.35 -10.28,0.35 -1.05,0 -1.64,-0.23 -1.64,-0.82 0,-0.35 0.23,-0.82 0.82,-0.82 0.93,0 2.22,-0.23 3.15,-0.47 1.98,-0.47 2.22,-2.34 2.69,-5.26 0.58,-4.09 0.58,-11.91 0.58,-21.49 v -17.52 c 0,-15.41 0,-18.22 -0.23,-21.37 -0.23,-3.39 -0.82,-5.02 -4.2,-5.49 -0.82,-0.12 -2.57,-0.23 -3.5,-0.23 -0.35,0 -0.82,-0.47 -0.82,-0.82 0,-0.58 0.47,-0.82 1.64,-0.82 4.67,0 11.21,0.23 11.79,0.23 0.47,0 7.01,-0.23 10.16,-0.23 1.17,0 1.64,0.23 1.64,0.82 0,0.35 -0.47,0.82 -0.82,0.82 -0.7,0 -1.4,0 -2.57,0.23 -2.8,0.58 -3.39,1.98 -3.62,5.49 -0.12,3.15 -0.12,6.19 -0.12,21.6 v 2.1 c 0,0.58 0.23,0.58 0.58,0.58 h 42.86 c 0.35,0 0.58,0 0.58,-0.58 v -2.1 c 0,-15.41 -0.12,-18.45 -0.23,-21.6 -0.23,-3.39 -0.7,-5.02 -4.09,-5.49 -0.82,-0.12 -2.57,-0.23 -3.5,-0.23 -0.47,0 -0.82,-0.47 -0.82,-0.82 0,-0.58 0.47,-0.82 1.64,-0.82 4.55,0 11.21,0.23 11.68,0.23 0.58,0 7.12,-0.23 10.16,-0.23 1.17,0 1.75,0.23 1.75,0.82 0,0.35 -0.47,0.82 -0.93,0.82 -0.7,0 -1.29,0 -2.57,0.23 -2.69,0.58 -3.27,1.98 -3.5,5.49 -0.23,3.15 -0.23,5.95 -0.23,21.37 v 17.51 z",id:"path123",key:2}),n.createElement("path",{className:"st0",d:"m 869.98,606.5 c 23.12,0 40.64,14.13 40.64,37.25 0,22.19 -16.47,40.52 -41.22,40.52 -28.14,0 -40.17,-21.14 -40.17,-39 -0.01,-16 12.37,-38.77 40.75,-38.77 z m 2.33,73.69 c 9.22,0 27.79,-4.91 27.79,-33.63 0,-23.82 -14.48,-36.32 -30.71,-36.32 -17.17,0 -29.55,10.74 -29.55,32.35 0.01,23.12 13.91,37.6 32.47,37.6 z",id:"path125",key:3}),n.createElement("path",{className:"st0",d:"m 941.44,654.38 c 0,14.6 0.23,20.55 2.1,22.3 1.64,1.64 5.61,2.34 13.66,2.34 5.37,0 9.93,-0.12 12.38,-3.04 1.29,-1.52 2.1,-3.62 2.45,-5.6 0.12,-0.7 0.47,-1.28 1.05,-1.28 0.47,0 0.7,0.47 0.7,1.52 0,1.05 -0.7,7.01 -1.52,9.93 -0.7,2.34 -1.05,2.69 -6.54,2.69 -7.36,0 -13.08,-0.12 -17.87,-0.35 -4.67,-0.12 -8.17,-0.23 -11.21,-0.23 -0.47,0 -2.22,0 -4.2,0.12 -2.1,0.12 -4.32,0.23 -5.95,0.23 -1.05,0 -1.64,-0.23 -1.64,-0.82 0,-0.35 0.23,-0.82 0.82,-0.82 0.93,0 2.22,-0.23 3.15,-0.47 1.99,-0.47 2.22,-2.34 2.69,-5.26 0.58,-4.09 0.58,-11.91 0.58,-21.49 v -17.52 c 0,-15.41 0,-18.22 -0.23,-21.37 -0.23,-3.39 -0.82,-5.02 -4.2,-5.49 -0.82,-0.12 -2.57,-0.23 -3.5,-0.23 -0.35,0 -0.82,-0.47 -0.82,-0.82 0,-0.58 0.47,-0.82 1.63,-0.82 4.67,0 11.09,0.23 11.68,0.23 0.47,0 8.17,-0.23 11.33,-0.23 1.05,0 1.63,0.23 1.63,0.82 0,0.35 -0.47,0.7 -0.82,0.7 -0.7,0 -2.22,0.12 -3.39,0.23 -3.04,0.58 -3.62,2.1 -3.85,5.6 -0.12,3.15 -0.12,5.95 -0.12,21.37 v 17.76 z",id:"path127",key:4}),n.createElement("path",{className:"st0",d:"m 1011.26,609.88 c 1.29,-3.27 1.75,-3.85 2.45,-3.85 1.05,0 1.4,1.4 2.45,3.62 1.87,4.2 18.33,45.19 24.64,60.26 3.74,8.88 6.54,10.16 8.76,10.86 1.52,0.47 3.04,0.59 4.09,0.59 0.58,0 1.28,0.23 1.28,0.82 0,0.58 -1.17,0.82 -2.33,0.82 -1.52,0 -9.11,0 -16.23,-0.23 -1.98,-0.12 -3.62,-0.12 -3.62,-0.7 0,-0.47 0.23,-0.47 0.7,-0.7 0.58,-0.23 1.64,-1.05 0.93,-2.69 l -9.23,-22.77 c -0.23,-0.47 -0.35,-0.58 -0.93,-0.58 h -23.71 c -0.47,0 -0.82,0.23 -1.05,0.82 l -5.84,15.88 c -0.93,2.45 -1.52,4.9 -1.52,6.66 0,1.98 1.75,2.69 3.5,2.69 h 0.93 c 0.82,0 1.05,0.35 1.05,0.82 0,0.58 -0.58,0.82 -1.52,0.82 -2.45,0 -8.06,-0.35 -9.22,-0.35 -1.05,0 -6.19,0.35 -10.39,0.35 -1.28,0 -1.98,-0.23 -1.98,-0.82 0,-0.47 0.47,-0.82 0.93,-0.82 0.7,0 2.22,-0.12 3.04,-0.23 4.67,-0.59 6.66,-4.09 8.64,-9.11 z m 11.44,41.35 c 0.47,0 0.47,-0.23 0.35,-0.7 l -10.16,-27.21 c -0.58,-1.52 -1.17,-1.52 -1.75,0 l -9.57,27.21 c -0.12,0.47 0,0.7 0.35,0.7 z",id:"path129",key:5}),n.createElement("path",{className:"st0",d:"m 1068.47,636.63 c 0,-15.41 0,-18.22 -0.23,-21.37 -0.23,-3.39 -0.82,-5.02 -4.2,-5.49 -0.82,-0.12 -2.57,-0.23 -3.5,-0.23 -0.35,0 -0.82,-0.47 -0.82,-0.82 0,-0.58 0.47,-0.82 1.64,-0.82 4.67,0 11.56,0.23 12.15,0.23 1.05,0 9.69,-0.23 12.84,-0.23 6.54,0 13.78,0.58 19.15,4.32 2.57,1.87 7.12,6.66 7.12,13.55 0,7.36 -3.04,14.48 -12.61,22.65 8.41,10.51 15.53,19.5 21.49,25.69 5.49,5.6 8.88,6.54 11.44,6.89 1.98,0.35 3.04,0.35 3.62,0.35 0.58,0 0.93,0.47 0.93,0.82 0,0.58 -0.58,0.82 -2.45,0.82 h -6.42 c -5.84,0 -8.41,-0.58 -10.98,-1.98 -4.44,-2.33 -8.17,-7.12 -14.01,-14.6 -4.32,-5.37 -8.88,-11.79 -11.09,-14.48 -0.47,-0.47 -0.7,-0.59 -1.4,-0.59 l -13.08,-0.23 c -0.47,0 -0.7,0.23 -0.7,0.82 v 2.33 c 0,9.58 0,17.28 0.47,21.37 0.35,2.92 0.93,4.79 4.09,5.26 1.4,0.23 3.62,0.47 4.55,0.47 0.7,0 0.82,0.47 0.82,0.82 0,0.47 -0.47,0.82 -1.63,0.82 -5.61,0 -12.15,-0.35 -12.61,-0.35 -0.12,0 -7.01,0.35 -10.16,0.35 -1.05,0 -1.64,-0.23 -1.64,-0.82 0,-0.35 0.23,-0.82 0.82,-0.82 0.93,0 2.22,-0.23 3.15,-0.47 1.98,-0.47 2.22,-2.34 2.69,-5.26 0.58,-4.09 0.58,-11.91 0.58,-21.49 v -17.51 z m 8.88,8.41 c 0,0.58 0.23,0.93 0.7,1.28 1.52,0.82 6.77,1.52 11.33,1.52 2.45,0 5.25,-0.12 7.71,-1.75 3.5,-2.33 6.19,-7.59 6.19,-15.18 0,-12.38 -6.77,-19.5 -17.75,-19.5 -3.04,0 -6.31,0.35 -7.36,0.58 -0.47,0.23 -0.82,0.58 -0.82,1.17 z",id:"path131",key:6}),n.createElement("path",{className:"st0",d:"m 1137.25,681.59 c -1.4,-0.7 -1.52,-1.05 -1.52,-3.74 0,-4.9 0.47,-8.88 0.58,-10.51 0,-1.05 0.23,-1.64 0.82,-1.64 0.58,0 0.93,0.35 0.93,1.17 0,0.82 0,2.22 0.35,3.62 1.64,7.24 9.34,9.81 16.23,9.81 10.16,0 15.41,-5.72 15.41,-13.19 0,-7.12 -3.85,-10.51 -12.96,-17.28 l -4.67,-3.5 c -11.09,-8.29 -14.71,-14.36 -14.71,-21.25 0,-11.68 9.23,-18.68 22.77,-18.68 4.09,0 8.17,0.58 10.63,1.17 1.99,0.47 2.8,0.47 3.62,0.47 0.82,0 1.05,0.12 1.05,0.7 0,0.47 -0.47,3.74 -0.47,10.51 0,1.52 -0.12,2.22 -0.82,2.22 -0.7,0 -0.82,-0.47 -0.93,-1.28 -0.12,-1.17 -0.93,-3.85 -1.52,-4.91 -0.7,-1.17 -4.09,-4.91 -13.31,-4.91 -7.47,0 -13.66,3.74 -13.66,10.74 0,6.31 3.15,9.93 13.31,16.82 l 2.92,1.99 c 12.5,8.52 16.82,15.41 16.82,23.94 0,5.84 -2.22,12.14 -9.58,16.93 -4.32,2.8 -10.74,3.5 -16.35,3.5 -4.78,-0.02 -10.74,-0.72 -14.94,-2.7 z",id:"path133",key:7})])])])}r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 1073.95 312.48999",xmlSpace:"preserve",width:"1073.95",height:"312.48999",xmlnsSvg:"http://www.w3.org/2000/svg"},e.exports=r,r.default=r},8686:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("rect",{width:"100",height:"20",key:0}),n.createElement("rect",{y:"30",width:"100",height:"20",key:1}),n.createElement("rect",{y:"60",width:"100",height:"20",key:2})])}r.defaultProps={viewBox:"0 0 100 80",width:"40",height:"40"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=352ce6b82b480a807b6fea87e981a17f2e78fc81-bab43db7fdb9ff44aec3.js.map