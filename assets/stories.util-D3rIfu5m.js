import{g as Go,R as nn,r as Lt}from"./index-Cp6HKLZC.js";var _o={exports:{}},j={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),Gt=Symbol.for("react.strict_mode"),Xt=Symbol.for("react.profiler"),Ht=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),Xo=Symbol.for("react.server_context"),Ut=Symbol.for("react.forward_ref"),Zt=Symbol.for("react.suspense"),Kt=Symbol.for("react.suspense_list"),Qt=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Ho=Symbol.for("react.offscreen"),Oo;Oo=Symbol.for("react.module.reference");function tn(n){if(typeof n=="object"&&n!==null){var t=n.$$typeof;switch(t){case Ti:switch(n=n.type,n){case Wt:case Xt:case Gt:case Zt:case Kt:return n;default:switch(n=n&&n.$$typeof,n){case Xo:case Yt:case Ut:case qt:case Qt:case Ht:return n;default:return t}}case Ni:return t}}}j.ContextConsumer=Yt;j.ContextProvider=Ht;j.Element=Ti;j.ForwardRef=Ut;j.Fragment=Wt;j.Lazy=qt;j.Memo=Qt;j.Portal=Ni;j.Profiler=Xt;j.StrictMode=Gt;j.Suspense=Zt;j.SuspenseList=Kt;j.isAsyncMode=function(){return!1};j.isConcurrentMode=function(){return!1};j.isContextConsumer=function(n){return tn(n)===Yt};j.isContextProvider=function(n){return tn(n)===Ht};j.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ti};j.isForwardRef=function(n){return tn(n)===Ut};j.isFragment=function(n){return tn(n)===Wt};j.isLazy=function(n){return tn(n)===qt};j.isMemo=function(n){return tn(n)===Qt};j.isPortal=function(n){return tn(n)===Ni};j.isProfiler=function(n){return tn(n)===Xt};j.isStrictMode=function(n){return tn(n)===Gt};j.isSuspense=function(n){return tn(n)===Zt};j.isSuspenseList=function(n){return tn(n)===Kt};j.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Wt||n===Xt||n===Gt||n===Zt||n===Kt||n===Ho||typeof n=="object"&&n!==null&&(n.$$typeof===qt||n.$$typeof===Qt||n.$$typeof===Ht||n.$$typeof===Yt||n.$$typeof===Ut||n.$$typeof===Oo||n.getModuleId!==void 0)};j.typeOf=tn;_o.exports=j;var zo=_o.exports;function Yo(n){function t(p,m,f,b,r){for(var D=0,l=0,R=0,_=0,z,v,B=0,U=0,S,H=S=z=0,O=0,W=0,Wn=0,G=0,wt=f.length,Gn=wt-1,rn,g="",N="",li="",si="",pn;O<wt;){if(v=f.charCodeAt(O),O===Gn&&l+_+R+D!==0&&(l!==0&&(v=l===47?10:47),_=R=D=0,wt++,Gn++),l+_+R+D===0){if(O===Gn&&(0<W&&(g=g.replace(M,"")),0<g.trim().length)){switch(v){case 32:case 9:case 59:case 13:case 10:break;default:g+=f.charAt(O)}v=59}switch(v){case 123:for(g=g.trim(),z=g.charCodeAt(0),S=1,G=++O;O<wt;){switch(v=f.charCodeAt(O)){case 123:S++;break;case 125:S--;break;case 47:switch(v=f.charCodeAt(O+1)){case 42:case 47:n:{for(H=O+1;H<Gn;++H)switch(f.charCodeAt(H)){case 47:if(v===42&&f.charCodeAt(H-1)===42&&O+2!==H){O=H+1;break n}break;case 10:if(v===47){O=H+1;break n}}O=H}}break;case 91:v++;case 40:v++;case 34:case 39:for(;O++<Gn&&f.charCodeAt(O)!==v;);}if(S===0)break;O++}switch(S=f.substring(G,O),z===0&&(z=(g=g.replace(P,"").trim()).charCodeAt(0)),z){case 64:switch(0<W&&(g=g.replace(M,"")),v=g.charCodeAt(1),v){case 100:case 109:case 115:case 45:W=m;break;default:W=Ln}if(S=t(m,W,S,v,r+1),G=S.length,0<q&&(W=i(Ln,g,Wn),pn=h(3,S,W,m,an,Z,G,v,r,b),g=W.join(""),pn!==void 0&&(G=(S=pn.trim()).length)===0&&(v=0,S="")),0<G)switch(v){case 115:g=g.replace(mn,s);case 100:case 109:case 45:S=g+"{"+S+"}";break;case 107:g=g.replace(w,"$1 $2"),S=g+"{"+S+"}",S=Y===1||Y===2&&d("@"+S,3)?"@-webkit-"+S+"@"+S:"@"+S;break;default:S=g+S,b===112&&(S=(N+=S,""))}else S="";break;default:S=t(m,i(m,g,Wn),S,b,r+1)}li+=S,S=Wn=W=H=z=0,g="",v=f.charCodeAt(++O);break;case 125:case 59:if(g=(0<W?g.replace(M,""):g).trim(),1<(G=g.length))switch(H===0&&(z=g.charCodeAt(0),z===45||96<z&&123>z)&&(G=(g=g.replace(" ",":")).length),0<q&&(pn=h(1,g,m,p,an,Z,N.length,b,r,b))!==void 0&&(G=(g=pn.trim()).length)===0&&(g="\0\0"),z=g.charCodeAt(0),v=g.charCodeAt(1),z){case 0:break;case 64:if(v===105||v===99){si+=g+f.charAt(O);break}default:g.charCodeAt(G-1)!==58&&(N+=o(g,z,v,g.charCodeAt(2)))}Wn=W=H=z=0,g="",v=f.charCodeAt(++O)}}switch(v){case 13:case 10:l===47?l=0:1+z===0&&b!==107&&0<g.length&&(W=1,g+="\0"),0<q*Dn&&h(0,g,m,p,an,Z,N.length,b,r,b),Z=1,an++;break;case 59:case 125:if(l+_+R+D===0){Z++;break}default:switch(Z++,rn=f.charAt(O),v){case 9:case 32:if(_+D+l===0)switch(B){case 44:case 58:case 9:case 32:rn="";break;default:v!==32&&(rn=" ")}break;case 0:rn="\\0";break;case 12:rn="\\f";break;case 11:rn="\\v";break;case 38:_+l+D===0&&(W=Wn=1,rn="\f"+rn);break;case 108:if(_+l+D+un===0&&0<H)switch(O-H){case 2:B===112&&f.charCodeAt(O-3)===58&&(un=B);case 8:U===111&&(un=U)}break;case 58:_+l+D===0&&(H=O);break;case 44:l+R+_+D===0&&(W=1,rn+="\r");break;case 34:case 39:l===0&&(_=_===v?0:_===0?v:_);break;case 91:_+l+R===0&&D++;break;case 93:_+l+R===0&&D--;break;case 41:_+l+D===0&&R--;break;case 40:if(_+l+D===0){if(z===0)switch(2*B+3*U){case 533:break;default:z=1}R++}break;case 64:l+R+_+D+H+S===0&&(S=1);break;case 42:case 47:if(!(0<_+D+R))switch(l){case 0:switch(2*v+3*f.charCodeAt(O+1)){case 235:l=47;break;case 220:G=O,l=42}break;case 42:v===47&&B===42&&G+2!==O&&(f.charCodeAt(G+2)===33&&(N+=f.substring(G,O+1)),rn="",l=0)}}l===0&&(g+=rn)}U=B,B=v,O++}if(G=N.length,0<G){if(W=m,0<q&&(pn=h(2,N,W,p,an,Z,G,b,r,b),pn!==void 0&&(N=pn).length===0))return si+N+li;if(N=W.join(",")+"{"+N+"}",Y*un!==0){switch(Y!==2||d(N,2)||(un=0),un){case 111:N=N.replace(E,":-moz-$1")+N;break;case 112:N=N.replace(L,"::-webkit-input-$1")+N.replace(L,"::-moz-$1")+N.replace(L,":-ms-input-$1")+N}un=0}}return si+N+li}function i(p,m,f){var b=m.trim().split(y);m=b;var r=b.length,D=p.length;switch(D){case 0:case 1:var l=0;for(p=D===0?"":p[0]+" ";l<r;++l)m[l]=e(p,m[l],f).trim();break;default:var R=l=0;for(m=[];l<r;++l)for(var _=0;_<D;++_)m[R++]=e(p[_]+" ",b[l],f).trim()}return m}function e(p,m,f){var b=m.charCodeAt(0);switch(33>b&&(b=(m=m.trim()).charCodeAt(0)),b){case 38:return m.replace(I,"$1"+p.trim());case 58:return p.trim()+m.replace(I,"$1"+p.trim());default:if(0<1*f&&0<m.indexOf("\f"))return m.replace(I,(p.charCodeAt(0)===58?"":"$1")+p.trim())}return p+m}function o(p,m,f,b){var r=p+";",D=2*m+3*f+4*b;if(D===944){p=r.indexOf(":",9)+1;var l=r.substring(p,r.length-1).trim();return l=r.substring(0,p).trim()+l+";",Y===1||Y===2&&d(l,1)?"-webkit-"+l+l:l}if(Y===0||Y===2&&!d(r,1))return r;switch(D){case 1015:return r.charCodeAt(10)===97?"-webkit-"+r+r:r;case 951:return r.charCodeAt(3)===116?"-webkit-"+r+r:r;case 963:return r.charCodeAt(5)===110?"-webkit-"+r+r:r;case 1009:if(r.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+r+r;case 978:return"-webkit-"+r+"-moz-"+r+r;case 1019:case 983:return"-webkit-"+r+"-moz-"+r+"-ms-"+r+r;case 883:if(r.charCodeAt(8)===45)return"-webkit-"+r+r;if(0<r.indexOf("image-set(",11))return r.replace(Cn,"$1-webkit-$2")+r;break;case 932:if(r.charCodeAt(4)===45)switch(r.charCodeAt(5)){case 103:return"-webkit-box-"+r.replace("-grow","")+"-webkit-"+r+"-ms-"+r.replace("grow","positive")+r;case 115:return"-webkit-"+r+"-ms-"+r.replace("shrink","negative")+r;case 98:return"-webkit-"+r+"-ms-"+r.replace("basis","preferred-size")+r}return"-webkit-"+r+"-ms-"+r+r;case 964:return"-webkit-"+r+"-ms-flex-"+r+r;case 1023:if(r.charCodeAt(8)!==99)break;return l=r.substring(r.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+l+"-webkit-"+r+"-ms-flex-pack"+l+r;case 1005:return k.test(r)?r.replace(X,":-webkit-")+r.replace(X,":-moz-")+r:r;case 1e3:switch(l=r.substring(13).trim(),m=l.indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(m)){case 226:l=r.replace(T,"tb");break;case 232:l=r.replace(T,"tb-rl");break;case 220:l=r.replace(T,"lr");break;default:return r}return"-webkit-"+r+"-ms-"+l+r;case 1017:if(r.indexOf("sticky",9)===-1)break;case 975:switch(m=(r=p).length-10,l=(r.charCodeAt(m)===33?r.substring(0,m):r).substring(p.indexOf(":",7)+1).trim(),D=l.charCodeAt(0)+(l.charCodeAt(7)|0)){case 203:if(111>l.charCodeAt(8))break;case 115:r=r.replace(l,"-webkit-"+l)+";"+r;break;case 207:case 102:r=r.replace(l,"-webkit-"+(102<D?"inline-":"")+"box")+";"+r.replace(l,"-webkit-"+l)+";"+r.replace(l,"-ms-"+l+"box")+";"+r}return r+";";case 938:if(r.charCodeAt(5)===45)switch(r.charCodeAt(6)){case 105:return l=r.replace("-items",""),"-webkit-"+r+"-webkit-box-"+l+"-ms-flex-"+l+r;case 115:return"-webkit-"+r+"-ms-flex-item-"+r.replace(Q,"")+r;default:return"-webkit-"+r+"-ms-flex-line-pack"+r.replace("align-content","").replace(Q,"")+r}break;case 973:case 989:if(r.charCodeAt(3)!==45||r.charCodeAt(4)===122)break;case 931:case 953:if(fn.test(p)===!0)return(l=p.substring(p.indexOf(":")+1)).charCodeAt(0)===115?o(p.replace("stretch","fill-available"),m,f,b).replace(":fill-available",":stretch"):r.replace(l,"-webkit-"+l)+r.replace(l,"-moz-"+l.replace("fill-",""))+r;break;case 962:if(r="-webkit-"+r+(r.charCodeAt(5)===102?"-ms-"+r:"")+r,f+b===211&&r.charCodeAt(13)===105&&0<r.indexOf("transform",10))return r.substring(0,r.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+r}return r}function d(p,m){var f=p.indexOf(m===1?":":"{"),b=p.substring(0,m!==3?f:10);return f=p.substring(f+1,p.length-1),Fn(m!==2?b:b.replace(cn,"$1"),f,m)}function s(p,m){var f=o(m,m.charCodeAt(0),m.charCodeAt(1),m.charCodeAt(2));return f!==m+";"?f.replace(kn," or ($1)").substring(4):"("+m+")"}function h(p,m,f,b,r,D,l,R,_,z){for(var v=0,B=m,U;v<q;++v)switch(U=en[v].call(V,p,B,f,b,r,D,l,R,_,z)){case void 0:case!1:case!0:case null:break;default:B=U}if(B!==m)return B}function $(p){switch(p){case void 0:case null:q=en.length=0;break;default:if(typeof p=="function")en[q++]=p;else if(typeof p=="object")for(var m=0,f=p.length;m<f;++m)$(p[m]);else Dn=!!p|0}return $}function x(p){return p=p.prefix,p!==void 0&&(Fn=null,p?typeof p!="function"?Y=1:(Y=2,Fn=p):Y=0),x}function V(p,m){var f=p;if(33>f.charCodeAt(0)&&(f=f.trim()),Bn=f,f=[Bn],0<q){var b=h(-1,m,f,f,an,Z,0,0,0,0);b!==void 0&&typeof b=="string"&&(m=b)}var r=t(Ln,f,m,0,0);return 0<q&&(b=h(-2,r,f,f,an,Z,r.length,0,0,0),b!==void 0&&(r=b)),Bn="",un=0,Z=an=1,r}var P=/^\0+/g,M=/[\0\r\f]/g,X=/: */g,k=/zoo|gra/,C=/([,: ])(transform)/g,y=/,\r+?/g,I=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,L=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,mn=/\(\s*(.*)\s*\)/g,kn=/([\s\S]*?);/g,Q=/-self|flex-/g,cn=/[^]*?(:[rp][el]a[\w-]+)[^]*/,fn=/stretch|:\s*\w+\-(?:conte|avail)/,Cn=/([^-])(image-set\()/,Z=1,an=1,un=0,Y=1,Ln=[],en=[],q=0,Fn=null,Dn=0,Bn="";return V.use=$,V.set=x,n!==void 0&&x(n),V}var Uo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Zo(n){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=n(i)),t[i]}}var Ko=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hi=Zo(function(n){return Ko.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),jo={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=typeof Symbol=="function"&&Symbol.for,Mi=F?Symbol.for("react.element"):60103,Li=F?Symbol.for("react.portal"):60106,Jt=F?Symbol.for("react.fragment"):60107,ni=F?Symbol.for("react.strict_mode"):60108,ti=F?Symbol.for("react.profiler"):60114,ii=F?Symbol.for("react.provider"):60109,ai=F?Symbol.for("react.context"):60110,Fi=F?Symbol.for("react.async_mode"):60111,ei=F?Symbol.for("react.concurrent_mode"):60111,ri=F?Symbol.for("react.forward_ref"):60112,oi=F?Symbol.for("react.suspense"):60113,Qo=F?Symbol.for("react.suspense_list"):60120,ci=F?Symbol.for("react.memo"):60115,ui=F?Symbol.for("react.lazy"):60116,qo=F?Symbol.for("react.block"):60121,Jo=F?Symbol.for("react.fundamental"):60117,nc=F?Symbol.for("react.responder"):60118,tc=F?Symbol.for("react.scope"):60119;function K(n){if(typeof n=="object"&&n!==null){var t=n.$$typeof;switch(t){case Mi:switch(n=n.type,n){case Fi:case ei:case Jt:case ti:case ni:case oi:return n;default:switch(n=n&&n.$$typeof,n){case ai:case ri:case ui:case ci:case ii:return n;default:return t}}case Li:return t}}}function Ao(n){return K(n)===ei}A.AsyncMode=Fi;A.ConcurrentMode=ei;A.ContextConsumer=ai;A.ContextProvider=ii;A.Element=Mi;A.ForwardRef=ri;A.Fragment=Jt;A.Lazy=ui;A.Memo=ci;A.Portal=Li;A.Profiler=ti;A.StrictMode=ni;A.Suspense=oi;A.isAsyncMode=function(n){return Ao(n)||K(n)===Fi};A.isConcurrentMode=Ao;A.isContextConsumer=function(n){return K(n)===ai};A.isContextProvider=function(n){return K(n)===ii};A.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Mi};A.isForwardRef=function(n){return K(n)===ri};A.isFragment=function(n){return K(n)===Jt};A.isLazy=function(n){return K(n)===ui};A.isMemo=function(n){return K(n)===ci};A.isPortal=function(n){return K(n)===Li};A.isProfiler=function(n){return K(n)===ti};A.isStrictMode=function(n){return K(n)===ni};A.isSuspense=function(n){return K(n)===oi};A.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Jt||n===ei||n===ti||n===ni||n===oi||n===Qo||typeof n=="object"&&n!==null&&(n.$$typeof===ui||n.$$typeof===ci||n.$$typeof===ii||n.$$typeof===ai||n.$$typeof===ri||n.$$typeof===Jo||n.$$typeof===nc||n.$$typeof===tc||n.$$typeof===qo)};A.typeOf=K;jo.exports=A;var ic=jo.exports,Bi=ic,ac={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ec={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rc={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Po={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wi={};Wi[Bi.ForwardRef]=rc;Wi[Bi.Memo]=Po;function Yi(n){return Bi.isMemo(n)?Po:Wi[n.$$typeof]||ac}var oc=Object.defineProperty,cc=Object.getOwnPropertyNames,Ui=Object.getOwnPropertySymbols,uc=Object.getOwnPropertyDescriptor,lc=Object.getPrototypeOf,Zi=Object.prototype;function Vo(n,t,i){if(typeof t!="string"){if(Zi){var e=lc(t);e&&e!==Zi&&Vo(n,e,i)}var o=cc(t);Ui&&(o=o.concat(Ui(t)));for(var d=Yi(n),s=Yi(t),h=0;h<o.length;++h){var $=o[h];if(!ec[$]&&!(i&&i[$])&&!(s&&s[$])&&!(d&&d[$])){var x=uc(t,$);try{oc(n,$,x)}catch{}}}}return n}var sc=Vo;const dc=Go(sc);var J={};function dn(){return(dn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n}).apply(this,arguments)}var Ki=function(n,t){for(var i=[n[0]],e=0,o=t.length;e<o;e+=1)i.push(t[e],n[e+1]);return i},Vi=function(n){return n!==null&&typeof n=="object"&&(n.toString?n.toString():Object.prototype.toString.call(n))==="[object Object]"&&!zo.typeOf(n)},Ft=Object.freeze([]),gn=Object.freeze({});function xt(n){return typeof n=="function"}function Qi(n){return n.displayName||n.name||"Component"}function Gi(n){return n&&typeof n.styledComponentId=="string"}var Nn=typeof process<"u"&&J!==void 0&&(J.REACT_APP_SC_ATTR||J.SC_ATTR)||"data-styled",Xi=typeof window<"u"&&"HTMLElement"in window,mc=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&J!==void 0&&(J.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&J.REACT_APP_SC_DISABLE_SPEEDY!==""?J.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&J.REACT_APP_SC_DISABLE_SPEEDY:J.SC_DISABLE_SPEEDY!==void 0&&J.SC_DISABLE_SPEEDY!==""&&J.SC_DISABLE_SPEEDY!=="false"&&J.SC_DISABLE_SPEEDY));function yt(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),e=1;e<t;e++)i[e-1]=arguments[e];throw new Error("An error occurred. See https://git.io/JUIaE#"+n+" for more information."+(i.length>0?" Args: "+i.join(", "):""))}var fc=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}var t=n.prototype;return t.indexOfGroup=function(i){for(var e=0,o=0;o<i;o++)e+=this.groupSizes[o];return e},t.insertRules=function(i,e){if(i>=this.groupSizes.length){for(var o=this.groupSizes,d=o.length,s=d;i>=s;)(s<<=1)<0&&yt(16,""+i);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(var h=d;h<s;h++)this.groupSizes[h]=0}for(var $=this.indexOfGroup(i+1),x=0,V=e.length;x<V;x++)this.tag.insertRule($,e[x])&&(this.groupSizes[i]++,$++)},t.clearGroup=function(i){if(i<this.length){var e=this.groupSizes[i],o=this.indexOfGroup(i),d=o+e;this.groupSizes[i]=0;for(var s=o;s<d;s++)this.tag.deleteRule(o)}},t.getGroup=function(i){var e="";if(i>=this.length||this.groupSizes[i]===0)return e;for(var o=this.groupSizes[i],d=this.indexOfGroup(i),s=d+o,h=d;h<s;h++)e+=this.tag.getRule(h)+`/*!sc*/
`;return e},n}(),Mt=new Map,Bt=new Map,$t=1,St=function(n){if(Mt.has(n))return Mt.get(n);for(;Bt.has($t);)$t++;var t=$t++;return Mt.set(n,t),Bt.set(t,n),t},pc=function(n){return Bt.get(n)},hc=function(n,t){t>=$t&&($t=t+1),Mt.set(n,t),Bt.set(t,n)},gc="style["+Nn+'][data-styled-version="5.3.11"]',bc=new RegExp("^"+Nn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),vc=function(n,t,i){for(var e,o=i.split(","),d=0,s=o.length;d<s;d++)(e=o[d])&&n.registerName(t,e)},$c=function(n,t){for(var i=(t.textContent||"").split(`/*!sc*/
`),e=[],o=0,d=i.length;o<d;o++){var s=i[o].trim();if(s){var h=s.match(bc);if(h){var $=0|parseInt(h[1],10),x=h[2];$!==0&&(hc(x,$),vc(n,x,h[3]),n.getTag().insertRules($,e)),e.length=0}else e.push(s)}}},xc=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Io=function(n){var t=document.head,i=n||t,e=document.createElement("style"),o=function(h){for(var $=h.childNodes,x=$.length;x>=0;x--){var V=$[x];if(V&&V.nodeType===1&&V.hasAttribute(Nn))return V}}(i),d=o!==void 0?o.nextSibling:null;e.setAttribute(Nn,"active"),e.setAttribute("data-styled-version","5.3.11");var s=xc();return s&&e.setAttribute("nonce",s),i.insertBefore(e,d),e},yc=function(){function n(i){var e=this.element=Io(i);e.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var d=document.styleSheets,s=0,h=d.length;s<h;s++){var $=d[s];if($.ownerNode===o)return $}yt(17)}(e),this.length=0}var t=n.prototype;return t.insertRule=function(i,e){try{return this.sheet.insertRule(e,i),this.length++,!0}catch{return!1}},t.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},t.getRule=function(i){var e=this.sheet.cssRules[i];return e!==void 0&&typeof e.cssText=="string"?e.cssText:""},n}(),wc=function(){function n(i){var e=this.element=Io(i);this.nodes=e.childNodes,this.length=0}var t=n.prototype;return t.insertRule=function(i,e){if(i<=this.length&&i>=0){var o=document.createTextNode(e),d=this.nodes[i];return this.element.insertBefore(o,d||null),this.length++,!0}return!1},t.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},t.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),Sc=function(){function n(i){this.rules=[],this.length=0}var t=n.prototype;return t.insertRule=function(i,e){return i<=this.length&&(this.rules.splice(i,0,e),this.length++,!0)},t.deleteRule=function(i){this.rules.splice(i,1),this.length--},t.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),qi=Xi,kc={isServer:!Xi,useCSSOMInjection:!mc},Eo=function(){function n(i,e,o){i===void 0&&(i=gn),e===void 0&&(e={}),this.options=dn({},kc,{},i),this.gs=e,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Xi&&qi&&(qi=!1,function(d){for(var s=document.querySelectorAll(gc),h=0,$=s.length;h<$;h++){var x=s[h];x&&x.getAttribute(Nn)!=="active"&&($c(d,x),x.parentNode&&x.parentNode.removeChild(x))}}(this))}n.registerId=function(i){return St(i)};var t=n.prototype;return t.reconstructWithOptions=function(i,e){return e===void 0&&(e=!0),new n(dn({},this.options,{},i),this.gs,e&&this.names||void 0)},t.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(e=this.options).isServer,d=e.useCSSOMInjection,s=e.target,i=o?new Sc(s):d?new yc(s):new wc(s),new fc(i)));var i,e,o,d,s},t.hasNameForId=function(i,e){return this.names.has(i)&&this.names.get(i).has(e)},t.registerName=function(i,e){if(St(i),this.names.has(i))this.names.get(i).add(e);else{var o=new Set;o.add(e),this.names.set(i,o)}},t.insertRules=function(i,e,o){this.registerName(i,e),this.getTag().insertRules(St(i),o)},t.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},t.clearRules=function(i){this.getTag().clearGroup(St(i)),this.clearNames(i)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(i){for(var e=i.getTag(),o=e.length,d="",s=0;s<o;s++){var h=pc(s);if(h!==void 0){var $=i.names.get(h),x=e.getGroup(s);if($&&x&&$.size){var V=Nn+".g"+s+'[id="'+h+'"]',P="";$!==void 0&&$.forEach(function(M){M.length>0&&(P+=M+",")}),d+=""+x+V+'{content:"'+P+`"}/*!sc*/
`}}}return d}(this)},n}(),Cc=/(a)(d)/gi,Ji=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ii(n){var t,i="";for(t=Math.abs(n);t>52;t=t/52|0)i=Ji(t%52)+i;return(Ji(t%52)+i).replace(Cc,"$1-$2")}var Tn=function(n,t){for(var i=t.length;i;)n=33*n^t.charCodeAt(--i);return n},Ro=function(n){return Tn(5381,n)};function Dc(n){for(var t=0;t<n.length;t+=1){var i=n[t];if(xt(i)&&!Gi(i))return!1}return!0}var _c=Ro("5.3.11"),Oc=function(){function n(t,i,e){this.rules=t,this.staticRulesId="",this.isStatic=(e===void 0||e.isStatic)&&Dc(t),this.componentId=i,this.baseHash=Tn(_c,i),this.baseStyle=e,Eo.registerId(i)}return n.prototype.generateAndInjectStyles=function(t,i,e){var o=this.componentId,d=[];if(this.baseStyle&&d.push(this.baseStyle.generateAndInjectStyles(t,i,e)),this.isStatic&&!e.hash)if(this.staticRulesId&&i.hasNameForId(o,this.staticRulesId))d.push(this.staticRulesId);else{var s=Mn(this.rules,t,i,e).join(""),h=Ii(Tn(this.baseHash,s)>>>0);if(!i.hasNameForId(o,h)){var $=e(s,"."+h,void 0,o);i.insertRules(o,h,$)}d.push(h),this.staticRulesId=h}else{for(var x=this.rules.length,V=Tn(this.baseHash,e.hash),P="",M=0;M<x;M++){var X=this.rules[M];if(typeof X=="string")P+=X;else if(X){var k=Mn(X,t,i,e),C=Array.isArray(k)?k.join(""):k;V=Tn(V,C+M),P+=C}}if(P){var y=Ii(V>>>0);if(!i.hasNameForId(o,y)){var I=e(P,"."+y,void 0,o);i.insertRules(o,y,I)}d.push(y)}}return d.join(" ")},n}(),zc=/^\s*\/\/.*$/gm,jc=[":","[",".","#"];function Ac(n){var t,i,e,o,d=gn,s=d.options,h=s===void 0?gn:s,$=d.plugins,x=$===void 0?Ft:$,V=new Yo(h),P=[],M=function(C){function y(I){if(I)try{C(I+"}")}catch{}}return function(I,w,L,E,T,mn,kn,Q,cn,fn){switch(I){case 1:if(cn===0&&w.charCodeAt(0)===64)return C(w+";"),"";break;case 2:if(Q===0)return w+"/*|*/";break;case 3:switch(Q){case 102:case 112:return C(L[0]+w),"";default:return w+(fn===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(y)}}}(function(C){P.push(C)}),X=function(C,y,I){return y===0&&jc.indexOf(I[i.length])!==-1||I.match(o)?C:"."+t};function k(C,y,I,w){w===void 0&&(w="&");var L=C.replace(zc,""),E=y&&I?I+" "+y+" { "+L+" }":L;return t=w,i=y,e=new RegExp("\\"+i+"\\b","g"),o=new RegExp("(\\"+i+"\\b){2,}"),V(I||!y?"":y,E)}return V.use([].concat(x,[function(C,y,I){C===2&&I.length&&I[0].lastIndexOf(i)>0&&(I[0]=I[0].replace(e,X))},M,function(C){if(C===-2){var y=P;return P=[],y}}])),k.hash=x.length?x.reduce(function(C,y){return y.name||yt(15),Tn(C,y.name)},5381).toString():"",k}var To=nn.createContext();To.Consumer;var No=nn.createContext(),Pc=(No.Consumer,new Eo),Ei=Ac();function Vc(){return Lt.useContext(To)||Pc}function Ic(){return Lt.useContext(No)||Ei}var Mo=function(){function n(t,i){var e=this;this.inject=function(o,d){d===void 0&&(d=Ei);var s=e.name+d.hash;o.hasNameForId(e.id,s)||o.insertRules(e.id,s,d(e.rules,s,"@keyframes"))},this.toString=function(){return yt(12,String(e.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=i}return n.prototype.getName=function(t){return t===void 0&&(t=Ei),this.name+t.hash},n}(),Ec=/([A-Z])/,Rc=/([A-Z])/g,Tc=/^ms-/,Nc=function(n){return"-"+n.toLowerCase()};function na(n){return Ec.test(n)?n.replace(Rc,Nc).replace(Tc,"-ms-"):n}var ta=function(n){return n==null||n===!1||n===""};function Mn(n,t,i,e){if(Array.isArray(n)){for(var o,d=[],s=0,h=n.length;s<h;s+=1)(o=Mn(n[s],t,i,e))!==""&&(Array.isArray(o)?d.push.apply(d,o):d.push(o));return d}if(ta(n))return"";if(Gi(n))return"."+n.styledComponentId;if(xt(n)){if(typeof(x=n)!="function"||x.prototype&&x.prototype.isReactComponent||!t)return n;var $=n(t);return Mn($,t,i,e)}var x;return n instanceof Mo?i?(n.inject(i,e),n.getName(e)):n:Vi(n)?function V(P,M){var X,k,C=[];for(var y in P)P.hasOwnProperty(y)&&!ta(P[y])&&(Array.isArray(P[y])&&P[y].isCss||xt(P[y])?C.push(na(y)+":",P[y],";"):Vi(P[y])?C.push.apply(C,V(P[y],y)):C.push(na(y)+": "+(X=y,(k=P[y])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||X in Uo||X.startsWith("--")?String(k).trim():k+"px")+";"));return M?[M+" {"].concat(C,["}"]):C}(n):n.toString()}var ia=function(n){return Array.isArray(n)&&(n.isCss=!0),n};function u(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),e=1;e<t;e++)i[e-1]=arguments[e];return xt(n)||Vi(n)?ia(Mn(Ki(Ft,[n].concat(i)))):i.length===0&&n.length===1&&typeof n[0]=="string"?n:ia(Mn(Ki(n,i)))}var Mc=function(n,t,i){return i===void 0&&(i=gn),n.theme!==i.theme&&n.theme||t||i.theme},Lc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fc=/(^-|-$)/g;function di(n){return n.replace(Lc,"-").replace(Fc,"")}var Lo=function(n){return Ii(Ro(n)>>>0)};function kt(n){return typeof n=="string"&&!0}var Ri=function(n){return typeof n=="function"||typeof n=="object"&&n!==null&&!Array.isArray(n)},Bc=function(n){return n!=="__proto__"&&n!=="constructor"&&n!=="prototype"};function Wc(n,t,i){var e=n[i];Ri(t)&&Ri(e)?Fo(e,t):n[i]=t}function Fo(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),e=1;e<t;e++)i[e-1]=arguments[e];for(var o=0,d=i;o<d.length;o++){var s=d[o];if(Ri(s))for(var h in s)Bc(h)&&Wc(n,s[h],h)}return n}var Bo=nn.createContext();Bo.Consumer;var mi={};function Wo(n,t,i){var e=Gi(n),o=!kt(n),d=t.attrs,s=d===void 0?Ft:d,h=t.componentId,$=h===void 0?function(w,L){var E=typeof w!="string"?"sc":di(w);mi[E]=(mi[E]||0)+1;var T=E+"-"+Lo("5.3.11"+E+mi[E]);return L?L+"-"+T:T}(t.displayName,t.parentComponentId):h,x=t.displayName,V=x===void 0?function(w){return kt(w)?"styled."+w:"Styled("+Qi(w)+")"}(n):x,P=t.displayName&&t.componentId?di(t.displayName)+"-"+t.componentId:t.componentId||$,M=e&&n.attrs?Array.prototype.concat(n.attrs,s).filter(Boolean):s,X=t.shouldForwardProp;e&&n.shouldForwardProp&&(X=t.shouldForwardProp?function(w,L,E){return n.shouldForwardProp(w,L,E)&&t.shouldForwardProp(w,L,E)}:n.shouldForwardProp);var k,C=new Oc(i,P,e?n.componentStyle:void 0),y=C.isStatic&&s.length===0,I=function(w,L){return function(E,T,mn,kn){var Q=E.attrs,cn=E.componentStyle,fn=E.defaultProps,Cn=E.foldedComponentIds,Z=E.shouldForwardProp,an=E.styledComponentId,un=E.target,Y=function(b,r,D){b===void 0&&(b=gn);var l=dn({},r,{theme:b}),R={};return D.forEach(function(_){var z,v,B,U=_;for(z in xt(U)&&(U=U(l)),U)l[z]=R[z]=z==="className"?(v=R[z],B=U[z],v&&B?v+" "+B:v||B):U[z]}),[l,R]}(Mc(T,Lt.useContext(Bo),fn)||gn,T,Q),Ln=Y[0],en=Y[1],q=function(b,r,D,l){var R=Vc(),_=Ic(),z=r?b.generateAndInjectStyles(gn,R,_):b.generateAndInjectStyles(D,R,_);return z}(cn,kn,Ln),Fn=mn,Dn=en.$as||T.$as||en.as||T.as||un,Bn=kt(Dn),p=en!==T?dn({},T,{},en):T,m={};for(var f in p)f[0]!=="$"&&f!=="as"&&(f==="forwardedAs"?m.as=p[f]:(Z?Z(f,Hi,Dn):!Bn||Hi(f))&&(m[f]=p[f]));return T.style&&en.style!==T.style&&(m.style=dn({},T.style,{},en.style)),m.className=Array.prototype.concat(Cn,an,q!==an?q:null,T.className,en.className).filter(Boolean).join(" "),m.ref=Fn,Lt.createElement(Dn,m)}(k,w,L,y)};return I.displayName=V,(k=nn.forwardRef(I)).attrs=M,k.componentStyle=C,k.displayName=V,k.shouldForwardProp=X,k.foldedComponentIds=e?Array.prototype.concat(n.foldedComponentIds,n.styledComponentId):Ft,k.styledComponentId=P,k.target=e?n.target:n,k.withComponent=function(w){var L=t.componentId,E=function(mn,kn){if(mn==null)return{};var Q,cn,fn={},Cn=Object.keys(mn);for(cn=0;cn<Cn.length;cn++)Q=Cn[cn],kn.indexOf(Q)>=0||(fn[Q]=mn[Q]);return fn}(t,["componentId"]),T=L&&L+"-"+(kt(w)?w:di(Qi(w)));return Wo(w,dn({},E,{attrs:M,componentId:T}),i)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=e?Fo({},n.defaultProps,w):w}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),o&&dc(k,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var sn=function(n){return function t(i,e,o){if(o===void 0&&(o=gn),!zo.isValidElementType(e))return yt(1,String(e));var d=function(){return i(e,o,u.apply(void 0,arguments))};return d.withConfig=function(s){return t(i,e,dn({},o,{},s))},d.attrs=function(s){return t(i,e,dn({},o,{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},d}(Wo,n)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(n){sn[n]=sn(n)});function c(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),e=1;e<t;e++)i[e-1]=arguments[e];var o=u.apply(void 0,[n].concat(i)).join(""),d=Lo(o);return new Mo(d,o)}function on(){return on=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var e in i)({}).hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n},on.apply(null,arguments)}function aa(n,t){if(n==null)return{};var i={};for(var e in n)if({}.hasOwnProperty.call(n,e)){if(t.includes(e))continue;i[e]=n[e]}return i}function a(n,t){return t||(t=n.slice(0)),n.raw=t,n}var ea,ra,Gc=c(ea||(ea=a([`
  0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
  33% { background-size: 20% 10% , 20% 100%, 20% 100% }
  50% { background-size: 20% 100%, 20% 10% , 20% 100% }
  66% { background-size: 20% 100%, 20% 100%, 20% 10%  }
  100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`]))),fi={color:"#991b1b",size:"45px",animationDuration:1},Xc=u(ra||(ra=a([`
  width: `,`;
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||fi.size},function(n){return n.color||fi.color},Gc,function(n){return n.animationDuration||fi.animationDuration}),oa,ca,Hc=c(oa||(oa=a([`
    0%  { background-size: 20% 100%, 20% 100%, 20% 100% }
    20% { background-size: 20% 60% , 20% 100%, 20% 100% }
    40% { background-size: 20% 80% , 20% 60% , 20% 100% }
    60% { background-size: 20% 100%, 20% 80% , 20% 60%  }
    80% { background-size: 20% 100%, 20% 100%, 20% 80%  }
    100% { background-size: 20% 100%, 20% 100%, 20% 100% }
`]))),pi={color:"#991b1b",size:"45px",animationDuration:1},Yc=u(ca||(ca=a([`
  width: `,`;
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||pi.size},function(n){return n.color||pi.color},Hc,function(n){return n.animationDuration||pi.animationDuration}),ua,la,Uc=c(ua||(ua=a([`
    100% { background-position: left top, center top, right top }
`]))),Xn={color:"#991b1b",size:"45px",animationDuration:1},Zc=u(la||(la=a([`
  width: `,`;
  aspect-ratio: 1;
  background: linear-gradient(
        #0000 calc(1 * 100% / 6),
        `,` 0 calc(3 * 100% / 6),
        #0000 0
      )
      left bottom,
    linear-gradient(
        #0000 calc(2 * 100% / 6),
        `,` 0 calc(4 * 100% / 6),
        #0000 0
      )
      center bottom,
    linear-gradient(
        #0000 calc(3 * 100% / 6),
        `,` 0 calc(5 * 100% / 6),
        #0000 0
      )
      right bottom;
  background-size: 20% 600%;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||Xn.size},function(n){return n.color||Xn.color},function(n){return n.color||Xn.color},function(n){return n.color||Xn.color},Uc,function(n){return n.animationDuration||Xn.animationDuration}),sa,da,Kc=c(sa||(sa=a([`
    33%  { background-position: 0% 50%, 50% 100%, 100% 100% }
    50%  { background-position: 0%  0%, 50%  50%, 100% 100% }
    66%  { background-position: 0%  0%, 50%   0%, 100%  50% }
    100% { background-position: 0%  0%, 50%   0%, 100%   0% }
`]))),Ct={color:"#991b1b",size:"45px",animationDuration:1},Qc=u(da||(da=a([`
  width: `,`;
  aspect-ratio: 1;
  --c: no-repeat
    linear-gradient(
      `,` calc(50% - 10px),
      #0000 0 calc(50% + 10px),
      `,` 0
    );
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% calc(200% + 20px);
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||Ct.size},function(n){return n.color||Ct.color},function(n){return n.color||Ct.color},Kc,function(n){return n.animationDuration||Ct.animationDuration}),ma,fa,qc=c(ma||(ma=a([`
    20% { background-position: 0% 50% , 50% 100%, 100% 100% }
    40% { background-position: 0% 0%  , 50% 50% , 100% 100% }
    60% { background-position: 0% 100%, 50% 0%  , 100% 50%  }
    80% { background-position: 0% 100%, 50% 100%, 100% 0%   }
`]))),hi={color:"#991b1b",size:"45px",animationDuration:1},Jc=u(fa||(fa=a([`
  width: `,`;
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% 65%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||hi.size},function(n){return n.color||hi.color},qc,function(n){return n.animationDuration||hi.animationDuration}),pa,ha,nu=c(pa||(pa=a([`
    20% { background-position: 0% 0%  , 50% 50% , 100% 50%  }
    40% { background-position: 0% 100%, 50% 0%  , 100% 50%  }
    60% { background-position: 0% 50% , 50% 100%, 100% 0%   }
    80% { background-position: 0% 50% , 50% 50% , 100% 100% }
`]))),gi={color:"#991b1b",size:"45px",animationDuration:1},tu=u(ha||(ha=a([`
  width: `,`;
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||gi.size},function(n){return n.color||gi.color},nu,function(n){return n.animationDuration||gi.animationDuration}),ga,ba,iu=c(ga||(ga=a([`
    0%  { background-size: 20% 50% , 20% 50% , 20% 50% }
    20% { background-size: 20% 20% , 20% 50% , 20% 50% }
    40% { background-size: 20% 100%, 20% 20% , 20% 50% }
    60% { background-size: 20% 50% , 20% 100%, 20% 20% }
    80% { background-size: 20% 50% , 20% 50% , 20% 100%}
    100%{ background-size: 20% 50% , 20% 50% , 20% 50% }
`]))),bi={color:"#991b1b",size:"45px",animationDuration:1},au=u(ba||(ba=a([`
  width: `,`;
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: `,`s;
`])),function(n){return n.size||bi.size},function(n){return n.color||bi.color},iu,function(n){return n.animationDuration||bi.animationDuration}),va,$a,eu=c(va||(va=a([`
    16.67% { background-position: 0% 0%  , 50% 100%, 100% 100% }
    33.33% { background-position: 0% 0%  , 50% 0%  , 100% 100% }
    50%    { background-position: 0% 0%  , 50% 0%  , 100% 0%   }
    66.67% { background-position: 0% 100%, 50% 0%  , 100% 0%   }
    83.33% { background-position: 0% 100%, 50% 100%, 100% 0%   }
`]))),vi={color:"#991b1b",size:"45px",animationDuration:1},ru=u($a||($a=a([`
  width: `,`;
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 20% 65%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||vi.size},function(n){return n.color||vi.color},eu,function(n){return n.animationDuration||vi.animationDuration}),xa,ya,ou=c(xa||(xa=a([`
    33% { background-position: 0% 0%  , 50% 100%,100% 0%   }
    66% { background-position: 0% 100%, 50% 0%  ,100% 100% }
`]))),$i={color:"#991b1b",size:"45px",animationDuration:1},cu=u(ya||(ya=a([`
  width: `,`;
  aspect-ratio: 0.75;
  --c: no-repeat
    linear-gradient(`,` 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 60%;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.size||$i.size},function(n){return n.color||$i.color},ou,function(n){return n.animationDuration||$i.animationDuration}),wa,Sa,uu=c(wa||(wa=a([`
    33%  { background-position: 0   0   , 100% 100% }
    66%  { background-position: 0   100%, 100% 0   }
    100% { background-position: 50% 100%, 50%  0   }
`]))),xi={color:"#991b1b",size:"45px",animationDuration:1},lu=u(Sa||(Sa=a([`
  width: `,`;
  aspect-ratio: 1.2;
  --c: no-repeat
    repeating-linear-gradient(
      90deg,
      `,` 0 20%,
      #0000 0 40%
    );
  background: var(--c) 50% 0, var(--c) 50% 100%;
  background-size: calc(500% / 6) 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||xi.size},function(n){return n.color||xi.color},uu,function(n){return n.animationDuration||xi.animationDuration}),su=["style"],du=["color"];function bn(n,t){var i=t.style,e=aa(t,su);if(i&&i.color){var o=i,d=o.color,s=aa(o,du);i=on({},s),e.color=d}return t.style&&t.style.color&&t.color&&console.warn(n+' Spinner - variant "'+t.variant+`" > You have override the "color" prop with the "style.color" 
Either set "color" prop or "style.color"`),e.color||(e.color="currentColor"),{style:i,rest:e}}var ka,Ca={variant1:Xc,variant2:Yc,variant3:Zc,variant4:Qc,variant5:Jc,variant6:tu,variant7:au,variant8:ru,variant9:cu,variant10:lu},mu=sn.div.attrs(function(n){return{color:n.color,size:n.size,animationDuration:n!=null&&n.animationDuration?n==null?void 0:n.animationDuration:2,animationPlayState:n!=null&&n.stop?"paused":"running",animationColor:n.animationColor||"",style:n==null?void 0:n.style}})(ka||(ka=a([`
  display: inline-block;

  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return Ca[n.variant]||Ca.variant1},function(n){return n==null?void 0:n.style});function fu(n){var t=bn("Bar",n),i=t.style,e=t.rest;return nn.createElement(mu,on({},e,{style:i}))}var Da,_a,pu=c(Da||(Da=a([`
  to {
    background-size: 100% 3px;
  }
`]))),yi={color:"#1e293b",size:"1.5rem",animationDuration:2},hu=u(_a||(_a=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  background: linear-gradient(currentColor 0 0) bottom left/0% 3px no-repeat;
  padding-bottom: 8px;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.fontSize||yi.size},function(n){return n.color||yi.color},function(n){return n.text},pu,function(n){return n.animationDuration||yi.animationDuration}),Oa,za,gu=c(Oa||(Oa=a([`
  to {
    opacity: 0;
  }
`]))),wi={color:"#1e293b",size:"1.5rem",animationDuration:2},bu=u(za||(za=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  animation-name: `,`;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: `,`s;
`])),function(n){return n.fontSize||wi.size},function(n){return n.color||wi.color},function(n){return n.text},gu,function(n){return n.animationDuration||wi.animationDuration}),ja,Aa,vu=c(ja||(ja=a([`
  to {
    background-position: 80% 100%
  }
`]))),Si={color:"#1e293b",size:"1.5rem",animationDuration:2},$u=u(Aa||(Aa=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  background: repeating-linear-gradient(90deg, currentColor 0 8%, #0000 0 10%)
    200% 100%/200% 3px no-repeat;
  padding: 0 5px 8px 0;
  animation-name: `,`;
  animation-timing-function: steps(6);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||Si.size},function(n){return n.color||Si.color},function(n){return n.text},vu,function(n){return n.animationDuration||Si.animationDuration}),Pa,Va,xu=function(){return c(Pa||(Pa=a([`
	to {
		clip-path: inset(0 -1ch 0 0);
	}
`])))},ki={color:"#1e293b",size:"1.5rem",animationDuration:2},yu=u(Va||(Va=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  animation-name: `,`;
  clip-path: inset(0 100% 0 0);
  animation-timing-function: steps(`,`);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||ki.size},function(n){return n.color||ki.color},function(n){return n.text},xu,function(n){return n.text.length+1},function(n){return n.animationDuration||ki.animationDuration}),Ia,Ea,wu=function(){return c(Ia||(Ia=a([`
	to {
		clip-path: inset(0 -1ch 0 0);
	}
`])))},Ci={color:"#1e293b",size:"1.5rem",animationDuration:2,noOfCharactersToBlinkAtLast:3},Su=u(Ea||(Ea=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  animation-name: `,`;
  clip-path: inset(0 `,`ch 0 0);
  animation-timing-function: steps(
    `,`
  );
  animation-duration: `,`s;
`])),function(n){return n.fontSize||Ci.size},function(n){return n.color||Ci.color},function(n){return n.text},wu,function(n){return n.noOfCharactersToBlinkAtLast},function(n){return n.noOfCharactersToBlinkAtLast+1},function(n){return n.animationDuration||Ci.animationDuration}),Ra,Ta,ku=function(){return c(Ra||(Ra=a([`
	to {
		background-position: left;
	}
`])))},Hn={color:"#1e293b",size:"1.5rem",animationColor:"#be123c",animationDuration:2},Cu=u(Ta||(Ta=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      `,`
        calc(50% + 0.5ch),
      `,` 0
    )
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: `,`;
  animation-timing-function: steps(`,`);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||Hn.size},function(n){return n.color||Hn.color},function(n){return n.text},function(n){return n.animationColor||Hn.animationColor},function(n){return n.color||Hn.color},ku,function(n){return n.text.length+1},function(n){return n.animationDuration||Hn.animationDuration}),Na,Ma,Du=function(t){return c(Na||(Na=a([`
	to {
		text-shadow: -`,`ch 0 var(--c), 0ch 0 var(--c);
	}
`])),t+1)},Dt={color:"#1e293b",size:"1.5rem",animationDuration:2},_u=u(Ma||(Ma=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  --c: `,`;
  color: #0000;
  overflow: hidden;
  animation-name: `,`;
  animation-timing-function: linear;
  text-shadow: 0 0 var(--c), `,`ch 0 var(--c);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||Dt.size},function(n){return n.color||Dt.color},function(n){return n.text},function(n){return n.color||Dt.color},function(n){return Du(n.text.length)},function(n){return n.text.length+1},function(n){return n.animationDuration||Dt.animationDuration}),La,Fa,Ou=function(){return c(La||(La=a([`
	to {
		background-position: left;
	}
`])))},_n={color:"#1e293b",size:"1.5rem",animationColor:"#be123c",animationDuration:3},zu=u(Fa||(Fa=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      `,` calc(50% - 0.5ch),
      `,` 0
        calc(50% + 0.5ch),
      `,` 0
    )
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: `,`;
  animation-timing-function: steps(`,`);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||_n.size},function(n){return n.color||_n.color},function(n){return n.text},function(n){return n.color||_n.color},function(n){return n.animationColor||_n.animationColor},function(n){return n.color||_n.color},Ou,function(n){return n.text.length+1},function(n){return n.animationDuration||_n.animationDuration}),Ba,Wa,ju=function(t,i){return c(Ba||(Ba=a([`
  25% {text-shadow: -`,"ch 0 ",", 0ch 0 ",", ","ch 0 ",", ","ch 0 ",", ","ch 0 ",`}
  50% {text-shadow: -`,"ch 0 ",", -","ch 0 ",",  0ch 0 ",", ","ch 0 ",", ","ch 0 ",`}
  75% {text-shadow: -`,"ch 0 ",", -","ch 0 ",", -","ch 0 ",",  0ch 0 ",", ","ch 0 ",`}
  100%{text-shadow: -`,"ch 0 ",", -","ch 0 ",", -","ch 0 ",", -","ch 0 ",", 0ch 0 ",`}
`])),i.length+1,t[0],t[1],i.length+1,t[2],i.length+2,t[3],i.length+3,t[0],i.length+2,t[0],i.length+1,t[1],t[2],i.length+1,t[3],i.length+2,t[0],i.length+3,t[0],i.length+2,t[1],i.length+1,t[2],t[3],i.length+1,t[0],i.length+4,t[0],i.length+3,t[1],i.length+2,t[2],i.length+1,t[3],t[0])},hn={color:"#1e293b",size:"1.5rem",animationDuration:3,colors:["#000","#b91c1c","#0369a1","#15803d"]},Au=u(Wa||(Wa=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  color: #0000;
  font-weight: bold;
  font-family: monospace;
  overflow: hidden;
  text-shadow: 0 0 `,`,
    `,`ch 0
      `,`,
    `,`ch 0
      `,`,
    `,`ch 0
      `,`,
    `,`ch 0
      `,`;
  animation-name: `,`;
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||hn.size},function(n){return n.color||hn.color},function(n){return n.text},function(n){return n.colors[0]||hn.colors[0]},function(n){return n.text.length+1},function(n){return n.colors[1]||hn.colors[1]},function(n){return n.text.length+2},function(n){return n.colors[2]||hn.colors[2]},function(n){return n.text.length+3},function(n){return n.colors[3]||hn.colors[3]},function(n){return n.text.length+4},function(n){return n.colors[0]||hn.colors[0]},function(n){return ju(n.colors,n.text)},function(n){return n.animationDuration||hn.animationDuration}),Ga,Xa,Pu=c(Ga||(Ga=a([`
	25% { background-position: calc(1*100%/3) 0 }
	50% { background-position: calc(2*100%/3) 0 }
	75% { background-position: calc(3*100%/3) 0 }
	100% { background-position: calc(4*100%/3) 0 }
`]))),vn={color:"#1e293b",size:"1.5rem",animationDuration:3,colors:["#000","#b91c1c","#0369a1","#15803d"]},Vu=u(Xa||(Xa=a([`
  font-size: `,`;
  color: `,`;

  &:before {
    content: '`,`';
  }
  color: #0000;
  background: linear-gradient(
      90deg,
      `,` 25%,
      `,` 0 50%,
      `,` 0 75%,
      `,` 0
    )
    0 0/400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: `,`;
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: `,`s;
`])),function(n){return n.fontSize||vn.size},function(n){return n.color||vn.color},function(n){return n.text},function(n){return n.colors[0]||vn.colors[0]},function(n){return n.colors[1]||vn.colors[1]},function(n){return n.colors[2]||vn.colors[2]},function(n){return n.colors[3]||vn.colors[3]},Pu,function(n){return n.animationDuration||vn.animationDuration}),Ha,Ya={variant1:hu,variant2:bu,variant3:$u,variant4:yu,variant5:Su,variant6:Cu,variant7:_u,variant8:zu,variant9:Au,variant10:Vu},Iu=sn.div.attrs(function(n){var t;return{text:n==null?void 0:n.text,color:(n==null?void 0:n.color)||(n==null||(t=n.style)==null?void 0:t.color),fontSize:n==null?void 0:n.size,animationDuration:n==null?void 0:n.animationDuration,animationPlayState:n!=null&&n.stop?"paused":"running",animationColor:n.animationColor,noOfCharactersToBlinkAtLast:n.noOfCharactersToBlinkAtLast,colors:n.colors,style:n==null?void 0:n.style}})(Ha||(Ha=a([`
  font-weight: bold;
  font-family: monospace;
  display: inline-block;

  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return Ya[n.variant]||Ya.variant1},function(n){return n==null?void 0:n.style});function Eu(n){var t=bn("Classic",n),i=t.style,e=t.rest;return nn.createElement(Iu,on({},e,{style:i}))}var Ua,Za,Ru=c(Ua||(Ua=a([`
  100% { background-position: right };
`]))),_t={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Tu=u(Za||(Za=a([`
  height: `,`;
  width: `,`;
  background: repeating-linear-gradient(
      90deg,
      `,` 0 calc(25% - 5px),
      #0000 0 25%
    )
    left/calc(4 * 100%/3) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||_t.height},function(n){return n.width||_t.width},function(n){return n.color||_t.color},Ru,function(n){return n.animationDuration||_t.animationDuration}),Ka,Qa,Nu=c(Ka||(Ka=a([`
  100% { background-position: 0 0 };
`]))),Ot={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Mu=u(Qa||(Qa=a([`
  height: `,`;
  width: `,`;
  background: radial-gradient(
      circle closest-side,
      `,` 92%,
      #0000
    )
    calc(100% / 3) 0 / calc(100% / 4) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Ot.height},function(n){return n.width||Ot.width},function(n){return n.color||Ot.color},Nu,function(n){return n.animationDuration||Ot.animationDuration}),qa,Ja,Lu=c(qa||(qa=a([`
  	100% { background-position: right };
`]))),zt={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Fu=u(Ja||(Ja=a([`
  height: `,`;
  width: `,`;
  background: repeating-linear-gradient(
      -45deg,
      `,` 0 15px,
      #0000 0 20px
    )
    left/200% 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||zt.height},function(n){return"calc("+(n.width||zt.width)+" / 0.707)"},function(n){return n.color||zt.color},Lu,function(n){return n.animationDuration||zt.animationDuration}),ne,te,Bu=function(){return c(ne||(ne=a([`
	100% { background-position: top right, bottom right };
`])))},Yn={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Wu=u(te||(te=a([`
  height: `,`;
  width: `,`
  background: repeating-linear-gradient(
        135deg,
        `,` 0 15px,
        #0000 0 20px
      )
      left top,
    repeating-linear-gradient(
        45deg,
        `,` 0 15px,
        #0000 0 20px
      )
      left bottom;
  background-size: 200% 50%;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Yn.height},function(n){var t=n.width||Yn.width;return t.includes("px")?"calc("+t+" / 0.707);":"calc("+t+" / cos(45deg));"},function(n){return n.color||Yn.color},function(n){return n.color||Yn.color},Bu,function(n){return n.animationDuration||Yn.animationDuration}),ie,ae,Gu=function(){return c(ie||(ie=a([`
	100% { background-position: 0% 0% };
`])))},Un={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Xu=u(ae||(ae=a([`
  height: `,`;
  width: `,`;
  background: radial-gradient(
      circle 10px at right 7px top 50%,
      #0000 92%,
      `,`
    ),
    radial-gradient(
      circle 10px at right 0 top 50%,
      `,` 92%,
      #0000
    );
  background-size: calc(100% / 3) 100%;
  background-position: 50% 0%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Un.height},function(n){return n.width||Un.width},function(n){return n.color||Un.color},function(n){return n.color||Un.color},Gu,function(n){return n.animationDuration||Un.animationDuration}),ee,re,Hu=function(){return c(ee||(ee=a([`
	100% { background-position: 0 0 };
`])))},Zn={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Yu=u(re||(re=a([`
  height: `,`;
  width: `,`;
  background: conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      `,` 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      `,` 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 0;
  background-size: calc(100% / 4) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Zn.height},function(n){return n.width||Zn.width},function(n){return n.color||Zn.color},function(n){return n.color||Zn.color},Hu,function(n){return n.animationDuration||Zn.animationDuration}),oe,ce,Uu=function(){return c(oe||(oe=a([`
	100% { background-position: 0 50% };
`])))},Kn={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Zu=u(ce||(ce=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(
        90deg,
        `,` 50%,
        #0000 0
      )
      repeat-x,
    conic-gradient(
      from 45deg at right 7px top 50%,
      `,` 90deg,
      #0000 0
    );
  background-position: calc(100% / 3) 50%;
  background-size: calc(100% / 4) 60%, calc(100% / 4) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Kn.height},function(n){return n.width||Kn.width},function(n){return n.color||Kn.color},function(n){return n.color||Kn.color},Uu,function(n){return n.animationDuration||Kn.animationDuration}),ue,le,Ku=function(){return c(ue||(ue=a([`
	100% { background-position: -8px 0%,-8px 50%,-8px 100% };
`])))},On={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Qu=u(le||(le=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(
        90deg,
        `,` 50%,
        #0000 0
      )
      0 0%,
    linear-gradient(
        -90deg,
        `,` 50%,
        #0000 0
      )
      0 50%,
    linear-gradient(
        90deg,
        `,` 50%,
        #0000 0
      )
      0 100%;
  background-size: 8px calc(100% / 3);
  background-repeat: repeat-x;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||On.height},function(n){return n.width||On.width},function(n){return n.color||On.color},function(n){return n.color||On.color},function(n){return n.color||On.color},Ku,function(n){return n.animationDuration||On.animationDuration}),se,de,qu=function(){return c(se||(se=a([`
  100% { background-position: -300% 0 };
`])))},$n={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},Ju=u(de||(de=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(
      90deg,
      #0000 16px,
      `,` 0 30px,
      #0000 0
    ),
    radial-gradient(
      circle closest-side at 68% 50%,
      `,` 92%,
      #0000
    ),
    conic-gradient(
      from 45deg at calc(100% - 7px) 50%,
      `,` 90deg,
      #0000 0
    ),
    conic-gradient(
      from -135deg at 7px 50%,
      `,` 90deg,
      #0000 0
    );
  background-position: 0 0;
  background-size: calc(3 * 100% / 4) 100%;
  background-repeat: repeat-x;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||$n.height},function(n){return n.width||$n.width},function(n){return n.color||$n.color},function(n){return n.color||$n.color},function(n){return n.color||$n.color},function(n){return n.color||$n.color},qu,function(n){return n.animationDuration||$n.animationDuration}),me,fe,n0=c(me||(me=a([`
	100% { background-position: -20px 0%, 20px 0% };
`]))),jt={height:"14px",width:"90px",color:"#0369a1",animationDuration:1},t0=u(fe||(fe=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(90deg, `,` 50%, #0000 0) 0
      0%,
    linear-gradient(
        -90deg,
        `,` 50%,
        #0000 0
      )
      0 0%;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||jt.height},function(n){return n.width||jt.width},function(n){return n.color},function(n){return n.color||jt.color},n0,function(n){return n.animationDuration||jt.animationDuration}),pe,he={variant1:Tu,variant2:Mu,variant3:Fu,variant4:Wu,variant5:Xu,variant6:Yu,variant7:Zu,variant8:Qu,variant9:Ju,variant10:t0},i0=sn.div.attrs(function(n){return{color:n.color,height:n.height,width:n.width,animationDuration:n==null?void 0:n.animationDuration,animationPlayState:n!=null&&n.stop?"paused":"running",style:n==null?void 0:n.style}})(pe||(pe=a([`
  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return he[n.variant]||he.variant1},function(n){return n==null?void 0:n.style});function a0(n){var t=bn("Infinity",n),i=t.style,e=t.rest;return nn.createElement(i0,on({},e,{style:i}))}var ge,be,e0=c(ge||(ge=a([`
    { 
      to { clip-path: inset(0 -34% 0 0) } 
    }
`]))),Di={size:"60px",color:"#ea580c",animationDuration:2},r0=u(be||(be=a([`
  width: `,`;
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side,
      `,` 90%,
      #0000
    )
    0 / calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation-name: `,`;
  animation-timing-function: steps(4);
  animation-duration: `,`s;
`])),function(n){return n.size||Di.size},function(n){return n.color||Di.color},e0,function(n){return n.animationDuration||Di.animationDuration}),ve,$e,o0=c(ve||(ve=a([`
	{ 
		to { background-position: 150% } 
	}
`]))),_i={size:"60px",color:"#ea580c",animationDuration:2},c0=u($e||($e=a([`
  width: `,`;
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side,
      `,` 90%,
      #0000
    )
    0 / calc(100% / 3) 100% no-repeat;
  animation-name: `,`;
  animation-timing-function: steps(3);
  animation-duration: `,`s;
`])),function(n){return n.size||_i.size},function(n){return n.color||_i.color},o0,function(n){return n.animationDuration||_i.animationDuration}),xe,ye,u0=c(xe||(xe=a([`
	20% { background-position: 0%   0%, 50%  50%, 100%  50% }
	40% { background-position: 0% 100%, 50%   0%, 100%  50% }
	60% { background-position: 0%  50%, 50% 100%, 100%   0% }
	80% { background-position: 0%  50%, 50%  50%, 100% 100% }
`]))),Oi={size:"60px",color:"#ea580c",animationDuration:2},l0=u(ye||(ye=a([`
  width: `,`;
  aspect-ratio: 2;
  --_g: no-repeat
    radial-gradient(
      circle closest-side,
      `,` 90%,
      #0000
    );
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||Oi.size},function(n){return n.color||Oi.color},u0,function(n){return n.animationDuration||Oi.animationDuration}),we,Se,s0=c(we||(we=a([`
	to { 
		width:25px;
		aspect-ratio: 1;
	}
`]))),At={size:"60px",color:"#ea580c",animationDuration:2},d0=u(Se||(Se=a([`
  width: `,`;
  aspect-ratio: 4;
  background: radial-gradient(
      circle closest-side at left 6px top 50%,
      `,` 90%,
      #0000
    ),
    radial-gradient(
      circle closest-side,
      `,` 90%,
      #0000
    ),
    radial-gradient(
      circle closest-side at right 6px top 50%,
      `,` 90%,
      #0000
    );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-direction: alternate;
  animation-duration: `,`s;
`])),function(n){return n.size||At.size},function(n){return n.color||At.color},function(n){return n.color||At.color},function(n){return n.color},s0,function(n){return n.animationDuration||At.animationDuration}),ke,Ce,m0=function(t){return c(ke||(ke=a([`
	0%   { box-shadow: 20px 0 `,", -20px 0 #0002; background: ",` }
	33%  { box-shadow: 20px 0 `,`, -20px 0 #0002; background: #0002 }
	66%  { box-shadow: 20px 0 #0002,-20px 0 `,`; background: #0002 }
	100% { box-shadow: 20px 0 #0002,-20px 0 `,"; background: ",` }
`])),t,t,t,t,t,t)},zi={size:"15px",color:"#ea580c",animationDuration:2},f0=u(Ce||(Ce=a([`
  width: `,`;
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: `,`s;
`])),function(n){return n.size||zi.size},function(n){return m0(n.color||zi.color)},function(n){return n.animationDuration||zi.animationDuration}),De,_e,p0=function(t){return c(De||(De=a([`
	0%  { box-shadow: 15px 0 `,", -25px 0 ",` }
	50% { box-shadow: 15px 0 `,", -15px 0 ",` }
	100% { box-shadow: 25px 0 `,", -15px 0 ",` }
`])),t,t,t,t,t,t)},Pt={size:"15px",color:"#ea580c",animationDuration:2},h0=u(_e||(_e=a([`
  width: `,`;
  aspect-ratio: 1;
  background: `,`;
  border-radius: 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-duration: `,`s;
`])),function(n){return n.size||Pt.size},function(n){return n.color||Pt.color},function(n){return p0(n.color||Pt.color)},function(n){return n.animationDuration||Pt.animationDuration}),Oe,ze,g0=c(Oe||(Oe=a([`
	33% { background-size: calc(100%/3) 0%  , calc(100%/3) 100%, calc(100%/3) 100% }
	50% { background-size: calc(100%/3) 100%, calc(100%/3) 0%  , calc(100%/3) 100% }
	66% { background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%  }
`]))),ji={size:"60px",color:"#ea580c",animationDuration:2},b0=u(ze||(ze=a([`
  width: `,`;
  aspect-ratio: 4;
  --_g: no-repeat
    radial-gradient(
      circle closest-side,
      `,` 90%,
      #0000
    );
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||ji.size},function(n){return n.color||ji.color},g0,function(n){return n.animationDuration||ji.animationDuration}),je,Ae,Pe,v0=c(je||(je=a([`
  100% { transform: translateX(25px) }
`]))),$0=c(Ae||(Ae=a([`
  100% { transform: rotate(-180deg) translateX(25px) }
`]))),Qn={size:"15px",color:"#ea580c",animationDuration:2},x0=u(Pe||(Pe=a([`
  width: `,`;
  aspect-ratio: 1;
  position: relative;
  animation-duration: `,`s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: `,`;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: `,`s;
    animation-play-state: `,`;
  }
  &:before {
    box-shadow: -25px 0 `,`;
    animation-name: `,`;
  }
  &:after {
    transform: rotate(0deg) translateX(25px);
    animation-name: `,`;
  }
`])),function(n){return n.size||Qn.size},function(n){return n.animationDuration||Qn.animationDuration},function(n){return n.color||Qn.color},function(n){return n.animationDuration||Qn.animationDuration},function(n){return n.animationPlayState},function(n){return n.color||Qn.color},v0,$0),Ve,Ie,Ee,Re,y0=c(Ve||(Ve=a([`
  0% , 49.9% { transform: scale(1) }
  50%, 100%  { transform: scale(-1) }
`]))),w0=function(t){return c(Ie||(Ie=a([`
  100% { box-shadow: 52px 0 `,` }
`])),t)},S0=c(Ee||(Ee=a([`
  100% { transform: translateX(13px) rotate(-180deg) translateX(13px) }
`]))),zn={size:"15px",color:"#ea580c",animationDuration:2},k0=u(Re||(Re=a([`
  width: `,`;
  aspect-ratio: 1;
  position: relative;
  animation-name: `,`;
  animation-play-state: `,`;
  animation-duration: `,`s;
  animation-timing-function: steps(3);

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: `,`;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-duration: `,`s;
    animation-play-state: `,`;
  }
  &:before {
    box-shadow: 26px 0 `,`;
    transform: translateX(-26px);
    animation-name: `,`;
  }
  &:after {
    animation-name: `,`;
    transform: translateX(13px) rotate(0deg) translateX(13px);
  }
`])),function(n){return n.size||zn.size},y0,function(n){return n.animationPlayState},function(n){return n.animationDuration||zn.animationDuration},function(n){return n.color||zn.color},function(n){return(n.animationDuration||zn.animationDuration)/2},function(n){return n.animationPlayState},function(n){return n.color||zn.color},function(n){return w0(n.color||zn.color)},S0),Te,Ne,Me,C0=function(t){return c(Te||(Te=a([`
  50% { transform: translateX(`,`) }
`])),t)},D0=function(t){return c(Ne||(Ne=a([`
  100% { transform: rotate(-360deg) translateX(`,`) }
`])),t)},xn={size:"15px",gap:"26px",color:"#ea580c",animationDuration:2},_0=u(Me||(Me=a([`
  width: `,`;
  aspect-ratio: 1;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: `,`;

    animation-duration: `,`s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: `,`;
  }
  &:before {
    box-shadow: -`," 0 ",`;
    animation-name: `,`;
  }
  &:after {
    transform: rotate(0deg)
      translateX(`,`);
    animation-name: `,`;
  }
`])),function(n){return n.size||xn.size},function(n){return n.color||xn.color},function(n){return n.animationDuration||xn.animationDuration},function(n){return n.animationPlayState},function(n){return n.gap||xn.gap},function(n){return n.color},function(n){return C0(n.gap||xn.gap)},function(n){return n.gap||xn.gap},function(n){return D0(n.gap||xn.gap)}),Le,Fe={variant1:r0,variant2:c0,variant3:l0,variant4:d0,variant5:f0,variant6:h0,variant7:b0,variant8:x0,variant9:k0,variant10:_0},O0=sn.div.attrs(function(n){return{color:n.color,size:n.size,animationDuration:n!=null&&n.animationDuration?n==null?void 0:n.animationDuration:2,animationPlayState:n!=null&&n.stop?"paused":"running",gap:n.gap,style:n==null?void 0:n.style}})(Le||(Le=a([`
  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return Fe[n.variant]||Fe.variant1},function(n){return n==null?void 0:n.style});function z0(n){var t=bn("Dot",n),i=t.style,e=t.rest;return nn.createElement(O0,on({},e,{style:i}))}var Be,We,j0=c(Be||(Be=a([`
    to { transform: rotate(.5turn) }
`]))),Vt={size:"45px",color:"#86198f",animationDuration:1,thickness:8},A0=u(We||(We=a([`
  width: `,`;
  aspect-ratio: 1;
  border-radius: 50%;
  border: `,`px solid;
  border-color: `,` #0000;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.size||Vt.size},function(n){return n.thickness||Vt.thickness},function(n){return n.color||Vt.color},j0,function(n){return n.animationDuration||Vt.animationDuration}),Ge,Xe,P0=c(Ge||(Ge=a([`
    to { transform: rotate(1turn) }
`]))),qn={size:"45px",color:"#86198f",animationDuration:1,thickness:8,secondaryColor:"#cbd5e1"},V0=u(Xe||(Xe=a([`
  border: `,`px solid
    `,`;
  border-right-color: `,`;
  width: `,`;
  aspect-ratio: 1;
  border-radius: 50%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.thickness||qn.thickness},function(n){return n.secondaryColor||qn.secondaryColor},function(n){return n.color||qn.color},function(n){return n.size||qn.size},P0,function(n){return n.animationDuration||qn.animationDuration}),He,Ye,I0=c(He||(He=a([`
	to { transform: rotate(1turn) }
`]))),jn={size:"45px",color:"#86198f",animationDuration:1,thickness:8},E0=u(Ye||(Ye=a([`
  width: `,`;
  padding: `,`px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: `,`;
  --_m: conic-gradient(
      #0000 10%,
      `,`
    ),
    linear-gradient(`,` 0 0)
      content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||jn.size},function(n){return n.thickness||jn.thickness},function(n){return n.color||jn.color},function(n){return n.color||jn.color},function(n){return n.color||jn.color},I0,function(n){return n.animationDuration||jn.animationDuration}),Ue,Ze,R0=function(){return c(Ue||(Ue=a([`
	to { transform: rotate(1turn) }
`])))},It={size:"45px",color:"#86198f",animationDuration:1,thickness:8},T0=u(Ze||(Ze=a([`
  width: `,`;
  --b: `,`px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(
      #0000 10%,
      `,`
    )
    content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: `,`;
  animation-timing-function: steps(10);
  animation-duration: `,`s;
`])),function(n){return n.size||It.size},function(n){return n.thickness||It.thickness},function(n){return n.color||It.color},R0,function(n){return n.animationDuration||It.animationDuration}),Ke,Qe,N0=function(){return c(Ke||(Ke=a([`
	to { transform: rotate(.5turn) }
`])))},An={size:"45px",color:"#86198f",animationDuration:1,thickness:8},M0=u(Qe||(Qe=a([`
  width: `,`;
  --b: `,`px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: `,`;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      `,` 1deg 70deg,
      #0000 71deg 90deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      `,` calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.size||An.size},function(n){return n.thickness||An.thickness},function(n){return n.color||An.color},function(n){return n.color||An.color},function(n){return n.color||An.color},N0,function(n){return n.animationDuration||An.animationDuration}),qe,Je,L0=function(){return c(qe||(qe=a([`
	to { transform: rotate(1turn) }
`])))},Et={size:"45px",color:"#86198f",animationDuration:1,dotColor:"#86198f"},F0=u(Je||(Je=a([`
  width: `,`;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: radial-gradient(
        farthest-side,
        `,` 95%,
        #0000
      )
      50% 0/12px 12px no-repeat,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 5px),
        `,` calc(100% - 4px)
      )
      content-box;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.size||Et.size},function(n){return n.dotColor||Et.dotColor},function(n){return n.color||Et.color},L0,function(n){return n.animationDuration||Et.animationDuration}),nr,tr,B0=function(){return c(nr||(nr=a([`
	to { transform: rotate(.5turn) }
`])))},Ai={size:"45px",color:"#86198f",animationDuration:1},W0=u(tr||(tr=a([`
  width: `,`;
  aspect-ratio: 1;
  --_c: radial-gradient(
    farthest-side,
    `,` 92%,
    #0000
  );
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.size||Ai.size},function(n){return n.color||Ai.color},B0,function(n){return n.animationDuration||Ai.animationDuration}),ir,ar,G0=function(){return c(ir||(ir=a([`
	to { transform: rotate(.5turn) }
`])))},Jn={size:"45px",color:"#86198f",animationDuration:1},X0=u(ar||(ar=a([`
  width: `,`;
  aspect-ratio: 1;
  color: `,`;
  --_c: no-repeat
    radial-gradient(
      farthest-side,
      `,` 92%,
      #0000
    );
  background: var(--_c) 50% 0 /12px 12px, var(--_c) 50% 100%/12px 12px,
    var(--_c) 100% 50%/12px 12px, var(--_c) 0 50%/12px 12px,
    var(--_c) 50% 50%/12px 12px,
    conic-gradient(
        from 90deg at 4px 4px,
        #0000 90deg,
        `,` 0
      ) -4px -4px / calc(50% + 2px) calc(50% + 2px);
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||Jn.size},function(n){return n.color||Jn.color},function(n){return n.color||Jn.color},function(n){return n.color||Jn.color},G0,function(n){return n.animationDuration||Jn.animationDuration}),er,rr,H0=function(){return c(er||(er=a([`
	to { transform: rotate(1turn) }
`])))},Rt={size:"45px",dotColor:"#86198f",animationDuration:2,color:"#ccc"},Y0=u(rr||(rr=a([`
  width: `,`;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        `,` 95%,
        #0000
      )
      50% 1px/12px 12px no-repeat,
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 14px),
      `,` 0
    );
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||Rt.size},function(n){return n.dotColor||Rt.dotColor},function(n){return n.color||Rt.color},H0,function(n){return n.animationDuration||Rt.animationDuration}),or,cr,U0=c(or||(or=a([`
	to { transform: rotate(.5turn) }
`]))),nt={size:"45px",color:"#86198f",animationDuration:1},Z0=u(cr||(cr=a([`
  &:before {
    content: '';
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);
  }

  width: `,`;
  aspect-ratio: 1;
  color: #854f1d;
  border-radius: 50%;
  display: grid;
  background: conic-gradient(
        from 90deg at 4px 4px,
        #0000 90deg,
        `,` 0
      ) -4px -4px / calc(50% + 2px) calc(50% + 2px),
    radial-gradient(
        farthest-side,
        `,` 6px,
        #0000 7px calc(100% - 6px),
        `,` calc(100% - 5px)
      )
      no-repeat;
  position: relative;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.size||nt.size},function(n){return n.color||nt.color},function(n){return n.color||nt.color},function(n){return n.color||nt.color},U0,function(n){return n.animationDuration||nt.animationDuration}),ur,lr={variant1:A0,variant2:V0,variant3:E0,variant4:T0,variant5:M0,variant6:F0,variant7:W0,variant8:X0,variant9:Y0,variant10:Z0},K0=sn.div.attrs(function(n){return{color:n==null?void 0:n.color,size:n==null?void 0:n.size,animationDuration:n.animationDuration,animationPlayState:n!=null&&n.stop?"paused":"running",secondaryColor:n.secondaryColor,thickness:n.thickness,dotColor:n.dotColor,style:n==null?void 0:n.style}})(ur||(ur=a([`
  display: inline-block;

  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return lr[n.variant]||lr.variant1},function(n){return n==null?void 0:n.style});function Q0(n){var t=bn("Rounded",n),i=t.style,e=t.rest;return nn.createElement(K0,on({},e,{style:i}))}var sr,dr,q0=c(sr||(sr=a([`
    0% { background-position: right; }
`]))),Tt={color:"#514b82",height:"20px",width:"120px",animationDuration:2},J0=u(dr||(dr=a([`
  height: `,`;
  width: `,`;

  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%)
    `,`;
  background-size: 300% 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Tt.height},function(n){return n.width||Tt.width},function(n){return n.color||Tt.color},q0,function(n){return n.animationDuration||Tt.animationDuration}),mr,fr,nl=c(mr||(mr=a([`
  	100% { background-position: right -50px top 0 }
`]))),tt={color:"#514b82",height:"20px",width:"120px",bgColor:"lightgrey",animationDuration:2},tl=u(fr||(fr=a([`
  height: `,`;
  width: `,`;

  background: linear-gradient(
      90deg,
      #0000,
      `,`
    )
    left -50px top 0/50px 20px no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||tt.height},function(n){return n.width||tt.width},function(n){return n.color||tt.color},function(n){return n.bgColor||tt.bgColor},nl,function(n){return n.animationDuration||tt.animationDuration}),pr,hr,il=c(pr||(pr=a([`
  	100% { background-position: right -30px top 0 }
`]))),it={color:"#514b82",height:"20px",width:"120px",bgColor:"lightgrey",animationDuration:2},al=u(hr||(hr=a([`
  height: `,`;
  width: `,`;

  transform: skewX(-45deg);
  background: linear-gradient(
      `,` 0 0
    )
    left -30px top 0/30px 20px no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||it.height},function(n){return n.width||it.width},function(n){return n.color||it.color},function(n){return n.bgColor||it.bgColor},il,function(n){return n.animationDuration||it.animationDuration}),gr,br,el=function(){return c(gr||(gr=a([`
	100% { left: calc(100% + 20px) }
`])))},at={color:"#514b82",height:"20px",width:"120px",animationDuration:2},rl=u(br||(br=a([`
  height: `,`;
  width: `,`;

  color: `,`;
  border-radius: 40px;
  border: 2px solid;
  position: relative;
  overflow: hidden;
  animation-duration: `,`s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    width: 14px;
    top: 0;
    bottom: 0;
    left: -20px;
    border-radius: inherit;
    background: currentColor;
    box-shadow: -10px 0 12px 3px currentColor;
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);

    animation-name: `,`;
    animation-timing-function: linear;
    animation-duration: `,`s;
    animation-play-state: `,`;
  }
`])),function(n){return n.height||at.height},function(n){return n.width||at.width},function(n){return n.color||at.color},function(n){return n.animationDuration||at.animationDuration},el,function(n){return n.animationDuration||at.animationDuration},function(n){return n.animationPlayState}),vr,$r,ol=function(){return c(vr||(vr=a([`
	100% { background-position: right -40px top 0, center }
`])))},et={color:"#514b82",height:"20px",width:"120px",secondaryColor:"lightgrey",animationDuration:2},cl=u($r||($r=a([`
  height: `,`;
  width: `,`;

  background: linear-gradient(
        `,` 0 0
      )
      left -40px top 0/40px 20px,
    linear-gradient(
        `,` 0 0
      )
      center/100% 50%;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||et.height},function(n){return n.width||et.width},function(n){return n.color||et.color},function(n){return n.secondaryColor||et.secondaryColor},ol,function(n){return n.animationDuration||et.animationDuration}),xr,yr,ul=function(){return c(xr||(xr=a([`
	100% { 
		background-position: left; 
		-webkit-mask-position:left 
	}
`])))},Pn={color:"#514b82",height:"20px",width:"120px",animationDuration:2},ll=u(yr||(yr=a([`
  height: `,`;
  width: `,`;

  background: radial-gradient(
        circle 10px,
        `,` 95%,
        #0000
      )
      right/calc(200% + 20px) 100%,
    linear-gradient(`,` 0 0)
      center/100% 6px;
  background-repeat: no-repeat;
  -webkit-mask: radial-gradient(
      circle 4px,
      #0000 93%,
      `,`
    )
    right/calc(200% + 20px) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Pn.height},function(n){return n.width||Pn.width},function(n){return n.color||Pn.color},function(n){return n.color||Pn.color},function(n){return n.color||Pn.color},ul,function(n){return n.animationDuration||Pn.animationDuration}),wr,Sr,sl=function(){return c(wr||(wr=a([`
	100% { background-position: right -25% top 0 }
`])))},Vn={color:"#514b82",bgColor:"#eee",height:"20px",width:"120px",animationDuration:2},dl=u(Sr||(Sr=a([`
  height: `,`;
  width: `,`;

  -webkit-mask: linear-gradient(
      90deg,
      `,` 70%,
      #0000 0
    )
    left/20% 100%;
  background: linear-gradient(
      `,` 0 0
    )
    left -25% top 0 /20% 100% no-repeat
    `,`;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-timing-function: steps(6);
  animation-duration: `,`s;
`])),function(n){return n.height||Vn.height},function(n){return n.width||Vn.width},function(n){return n.color||Vn.color},function(n){return n.color||Vn.color},function(n){return n.bgColor||Vn.bgColor},sl,function(n){return n.animationDuration||Vn.animationDuration}),kr,Cr,ml=function(){return c(kr||(kr=a([`
	100% { background-position: top left }
`])))},Nt={color:"#514b82",height:"40px",width:"40px",animationDuration:2},fl=u(Cr||(Cr=a([`
  height: `,`;
  width: `,`;

  background: linear-gradient(
      to bottom right,
      #0000 calc(50% - 40px),
      #fff 50%,
      #0000 calc(50% + 40px)
    )
    bottom right/calc(200% + 80px) calc(200% + 80px)
    `,`;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.height||Nt.height},function(n){return n.width||Nt.width},function(n){return n.color||Nt.color},ml,function(n){return n.animationDuration||Nt.animationDuration}),Dr,_r,pl=function(){return c(Dr||(Dr=a([`
  100% { background-position: calc(200% - 5px) }
`])))},rt={color:"#ccc",dotColor:"#514b82",height:"20px",width:"120px",animationDuration:2},hl=u(_r||(_r=a([`
  height: `,`;
  width: `,`;

  background: radial-gradient(
      circle closest-side,
      `,` 94%,
      #0000
    )
    50% 50% / calc(50% + 10px) 70% repeat-x
    `,`;
  animation-name: `,`;
  animation-timing-function: cubic-bezier(0.3, 1, 0, 1);
  animation-duration: `,`s;
`])),function(n){return n.height||rt.height},function(n){return n.width||rt.width},function(n){return n.dotColor||rt.dotColor},function(n){return n.color||rt.color},pl,function(n){return n.animationDuration||rt.animationDuration}),Or,zr,gl=c(Or||(Or=a([`
	100% { background-position: right -40px top 0 }
`]))),ot={color:"#514b82",height:"20px",width:"120px",bgColor:"lightgrey",animationDuration:2},bl=u(zr||(zr=a([`
  height: `,`;
  width: `,`;

  background: linear-gradient(
      `,` 0 0
    )
    left -40px top 0/40px 100% no-repeat `,`;
  -webkit-mask: linear-gradient(#000 0 0) top / 100% 5px no-repeat,
    linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
    repeating-linear-gradient(90deg, #000 0 5px, #0000 0 20%)
      left/calc(100% - 5px) 100%;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||ot.height},function(n){return n.width||ot.width},function(n){return n.color||ot.color},function(n){return n.bgColor||ot.bgColor},gl,function(n){return n.animationDuration||ot.animationDuration}),jr,Ar={variant1:J0,variant2:tl,variant3:al,variant4:rl,variant5:cl,variant6:ll,variant7:dl,variant8:fl,variant9:hl,variant10:bl},vl=sn.div.attrs(function(n){return{color:n.color,bgColor:n.bgColor,secondaryColor:n.secondaryColor,dotColor:n.dotColor,height:n.height,width:n.width,animationDuration:n==null?void 0:n.animationDuration,animationPlayState:n!=null&&n.stop?"paused":"running",style:n==null?void 0:n.style}})(jr||(jr=a([`
  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return Ar[n.variant]||Ar.variant1},function(n){return n==null?void 0:n.style});function $l(n){var t=bn("Continuous",n),i=t.style,e=t.rest;return nn.createElement(vl,on({},e,{style:i}))}var Pr,Vr,xl=c(Pr||(Pr=a([`
    100% { background-size: 100% }
`]))),ct={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},yl=u(Vr||(Vr=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(
      `,` 0 0
    )
    0/0% no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||ct.height},function(n){return n.width||ct.width},function(n){return n.color||ct.color},function(n){return n.bgColor||ct.bgColor},xl,function(n){return n.animationDuration||ct.animationDuration}),Ir,Er,wl=c(Ir||(Ir=a([`
  	100% { background-size: 110% }
`]))),ut={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},Sl=u(Er||(Er=a([`
  height: `,`;
  width: `,`;
  border-radius: 20px;
  background: linear-gradient(
      `,` 0 0
    )
    0/0% no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: steps(10);
  animation-duration: `,`s;
`])),function(n){return n.height||ut.height},function(n){return n.width||ut.width},function(n){return n.color||ut.color},function(n){return n.bgColor||ut.bgColor},wl,function(n){return n.animationDuration||ut.animationDuration}),Rr,Tr,kl=c(Rr||(Rr=a([`
  	100% { background-size: 100% }
`]))),lt={color1:"#dc2626",color2:"#0369a1",height:"20px",width:"120px",animationDuration:1},Cl=u(Tr||(Tr=a([`
  height: `,`;
  width: `,`;
  background: repeating-linear-gradient(
        135deg,
        `,` 0 10px,
        `,` 0 20px
      )
      0/0% no-repeat,
    repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation-name: `,`;
  animation-duration: `,`s;
`])),function(n){return n.height||lt.height},function(n){return n.width||lt.width},function(n){return n.color1||lt.color1},function(n){return n.color2||lt.color2},kl,function(n){return n.animationDuration||lt.animationDuration}),Nr,Mr,Dl=c(Nr||(Nr=a([`
	100% { background-size: 120% }
`]))),In={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},_l=u(Mr||(Mr=a([`
  height: `,`;
  width: `,`;
  -webkit-mask: linear-gradient(
      90deg,
      `,` 70%,
      #0000 0
    )
    0/20%;
  background: linear-gradient(
      `,` 0 0
    )
    0/0% no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: steps(6);
  animation-duration: `,`s;
`])),function(n){return n.height||In.height},function(n){return n.width||In.width},function(n){return n.color||In.color},function(n){return n.color||In.color},function(n){return n.bgColor||In.bgColor},Dl,function(n){return n.animationDuration||In.animationDuration}),Lr,Fr,Ol=c(Lr||(Lr=a([`
	100% { background-size: 120% }
`]))),ln={color:"#dc2626",height:"30px",width:"74px",animationDuration:1},zl=u(Fr||(Fr=a([`
  height: `,`;
  width: `,`;
  border: 2px solid `,`;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(
      90deg,
      `,` 0 10px,
      #0000 0 15px
    )
    0/0% no-repeat content-box content-box;
  position: relative;
  animation-name: `,`;
  animation-timing-function: steps(6);
  animation-duration: `,`s;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    width: 10px;
    background: linear-gradient(
          #0000 calc(50% - 7px),
          `,` 0 calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          `,` 0 calc(50% + 7px),
          #0000 0
        )
        left / 100% 100%,
      linear-gradient(
          `,` calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          `,` 0
        )
        left / 2px 100%,
      linear-gradient(
          #0000 calc(50% - 5px),
          `,` 0 calc(50% + 5px),
          #0000 0
        )
        right/2px 100%;
    background-repeat: no-repeat;
  }
`])),function(n){return n.height||ln.height},function(n){return n.width||ln.width},function(n){return n.color||ln.color},function(n){return n.color||ln.color},Ol,function(n){return n.animationDuration||ln.animationDuration},function(n){return n.color||ln.color},function(n){return n.color||ln.color},function(n){return n.color||ln.color},function(n){return n.color||ln.color},function(n){return n.color||ln.color}),Br,Wr,jl=c(Br||(Br=a([`
	100% { inset: 0 }
`]))),st={color:"#dc2626",height:"22px",width:"120px",animationDuration:1},Al=u(Wr||(Wr=a([`
  height: `,`;
  width: `,`;
  color: `,`;
  border-radius: 20px;
  border: 2px solid;
  position: relative;
  animation-duration: `,`s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: `,`;
    animation-duration: `,`s;
    animation-play-state: `,`;
    animation-iteration-count: infinite;
  }
`])),function(n){return n.height||st.height},function(n){return n.width||st.width},function(n){return n.color||st.color},function(n){return n.animationDuration||st.animationDuration},jl,function(n){return n.animationDuration||st.animationDuration},function(n){return n.animationPlayState}),Gr,Xr,Pl=c(Gr||(Gr=a([`
	100% { background-size: 100% }
`]))),dt={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},Vl=u(Xr||(Xr=a([`
  height: `,`;
  width: `,`;
  -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) 0 0/25%
      100%,
    linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px)
      no-repeat;
  background: linear-gradient(
      `,` 0 0
    )
    0/0% no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||dt.height},function(n){return n.width||dt.width},function(n){return n.color||dt.color},function(n){return n.bgColor||dt.bgColor},Pl,function(n){return n.animationDuration||dt.animationDuration}),Hr,Yr,Il=function(){return c(Hr||(Hr=a([`
	100% { background-size: 100% 115% }
`])))},mt={color:"#dc2626",bgColor:"#eee",height:"60px",width:"60px",animationDuration:1},El=u(Yr||(Yr=a([`
  height: `,`;
  width: `,`;
  border-radius: 50%;
  -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  background: linear-gradient(
      `,` 0 0
    )
    bottom/100% 0% no-repeat
    `,`;
  animation-name: `,`;
  animation-timing-function: steps(7);
  animation-duration: `,`s;
`])),function(n){return n.height||mt.height},function(n){return n.width||mt.width},function(n){return n.color||mt.color},function(n){return n.bgColor||mt.bgColor},Il,function(n){return n.animationDuration||mt.animationDuration}),Ur,Zr,Rl=function(){return c(Ur||(Ur=a([`
	33%  {background-position:    0% 33% , 100% 33% , 200% 33% }
	66%  {background-position: -100%  66%, 0%   66% , 100% 66% }
	100% {background-position:    0% 100%, 100% 100%, 200% 100%}
`])))},yn={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},Tl=u(Zr||(Zr=a([`
  height: `,`;
  width: `,`;
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
      var(--r1) var(--r2) at top,
      #0000 79.5%,
      `,` 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at bottom,
      `,` 79.5%,
      #0000 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at top,
      #0000 79.5%,
      `,` 80%
    ),
    `,`;
  background-size: 50.5% 220%;
  background-position: -100% 0%, 0% 0%, 100% 0%;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||yn.height},function(n){return n.width||yn.width},function(n){return n.color||yn.color},function(n){return n.color||yn.color},function(n){return n.color||yn.color},function(n){return n.bgColor||yn.bgColor},Rl,function(n){return n.animationDuration||yn.animationDuration}),Kr,Qr,Nl=c(Kr||(Kr=a([`
	100% { background-size: 120% 120% }
`]))),ft={color:"#dc2626",bgColor:"#eee",height:"60px",width:"120px",animationDuration:1},Ml=u(Qr||(Qr=a([`
  height: `,`;
  width: `,`;
  border-radius: 200px 200px 0 0;
  -webkit-mask: repeating-radial-gradient(
    farthest-side at bottom,
    #0000 0,
    #000 1px 12%,
    #0000 calc(12% + 1px) 20%
  );
  background: radial-gradient(
      farthest-side at bottom,
      `,` 0 95%,
      #0000 0
    )
    bottom/0% 0% no-repeat `,`;
  animation-name: `,`;
  animation-timing-function: steps(6);
  animation-duration: `,`s;
`])),function(n){return n.height||ft.height},function(n){return n.width||ft.width},function(n){return n.color||ft.color},function(n){return n.bgColor||ft.bgColor},Nl,function(n){return n.animationDuration||ft.animationDuration}),qr,Jr={variant1:yl,variant2:Sl,variant3:Cl,variant4:_l,variant5:zl,variant6:Al,variant7:Vl,variant8:El,variant9:Tl,variant10:Ml},Ll=sn.div.attrs(function(n){return{color:n.color,color1:n.color1,color2:n.color2,bgColor:n.bgColor,height:n.height,width:n.width,animationDuration:n.animationDuration,animationPlayState:n!=null&&n.stop?"paused":"running",style:n==null?void 0:n.style}})(qr||(qr=a([`
  animation-iteration-count: infinite;
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return Jr[n.variant]||Jr.variant1},function(n){return n==null?void 0:n.style});function Fl(n){var t=bn("Progress",n),i=t.style,e=t.rest;return nn.createElement(Ll,on({},e,{style:i}))}var no,to,Bl=c(no||(no=a([`
    50% { background-position: right }
`]))),pt={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},Wl=u(to||(to=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(
      `,` 0 0
    )
    left/20px 20px no-repeat
    `,`;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||pt.height},function(n){return n.width||pt.width},function(n){return n.color||pt.color},function(n){return n.bgColor||pt.bgColor},Bl,function(n){return n.animationDuration||pt.animationDuration}),io,ao,Gl=c(io||(io=a([`
  	50% { background-position: right }
`]))),ht={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},Xl=u(ao||(ao=a([`
  height: `,`;
  width: `,`;
  border-radius: 20px;
  background: radial-gradient(
      farthest-side,
      `,` 94%,
      #0000
    )
    left/20px 20px no-repeat
    `,`;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||ht.height},function(n){return n.width||ht.width},function(n){return n.color||ht.color},function(n){return n.bgColor||ht.bgColor},Gl,function(n){return n.animationDuration||ht.animationDuration}),eo,ro,Hl=c(eo||(eo=a([`
	50% { 
		left: 100%;
		transform: translateX(calc(-100% - 4px))
	}
`]))),gt={color:"#dc2626",height:"20px",width:"120px",animationDuration:1},Yl=u(ro||(ro=a([`
  height: `,`;
  width: `,`;
  border-radius: 40px;
  color: `,`;
  border: 2px solid;
  position: relative;
  animation-duration: `,`s;

  &:before {
    content: '';
    position: absolute;
    margin: 2px;
    width: 25%;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background: currentColor;
    animation-name: `,`;
    animation-duration: `,`s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: `,`;
  }
`])),function(n){return n.height||gt.height},function(n){return n.width||gt.width},function(n){return n.color||gt.color},function(n){return n.animationDuration||gt.animationDuration},Hl,function(n){return n.animationDuration||gt.animationDuration},function(n){return n.animationPlayState}),oo,co,uo,Ul=c(oo||(oo=a([`
  100% { transform:translateX(80px) }
`]))),Zl=c(co||(co=a([`
  33% { clip-path: inset(0 0 0 -100px) }
  50% { clip-path: inset(0 0 0 0)      }
  83% { clip-path: inset(0 -100px 0 0) }
`]))),En={color:"#dc2626",height:"20px",width:"20px",animationDuration:1},Kl=u(uo||(uo=a([`
  height: `,`;
  width: `,`;
  background: `,`;
  box-shadow: 0 0 60px 15px `,`;
  transform: translate(-80px);
  clip-path: inset(0);
  animation-name: `,", ",`;
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, normal;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-duration: `,`s,
    `,`s;
`])),function(n){return n.height||En.height},function(n){return n.width||En.width},function(n){return n.color||En.color},function(n){return n.color||En.color},Ul,Zl,function(n){return n.animationDuration===0?.5:(n.animationDuration||En.animationDuration)/2},function(n){return n.animationDuration||En.animationDuration}),lo,so,Ql=c(lo||(lo=a([`
	50% { background-position: top right, bottom right }
`]))),Rn={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},ql=u(so||(so=a([`
  height: `,`;
  width: `,`;
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 50%,
    calc(100% - 10px) 100%,
    10px 100%,
    0 50%
  );
  background: conic-gradient(
        from 135deg at top,
        `,` 90deg,
        #0000 0
      )
      top left,
    conic-gradient(
        from -45deg at bottom,
        `,` 90deg,
        #0000 0
      )
      bottom left,
    `,`;
  background-size: 20px 50%;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: `,`s;
`])),function(n){return n.height||Rn.height},function(n){return n.width||Rn.width},function(n){return n.color||Rn.color},function(n){return n.color||Rn.color},function(n){return n.bgColor||Rn.bgColor},Ql,function(n){return n.animationDuration||Rn.animationDuration}),mo,fo,Jl=c(mo||(mo=a([`
	50% {background-position: right }
`]))),wn={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},ns=u(fo||(fo=a([`
  height: `,`;
  width: `,`;
  background: linear-gradient(
      `,` 0 0
    )
    left/10px 100% no-repeat
    `,`;
  position: relative;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0, 0.2, 1, 1);
  animation-duration: `,`s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(
        `,` 0 0
      )
      left/10px 100% no-repeat
      `,`;
    animation: inherit;
  }
  &:before {
    top: 0;
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
  }
  &:after {
    bottom: 0;
    animation-timing-function: cubic-bezier(0, 0.4, 1, 1);
  }
`])),function(n){return n.height||wn.height},function(n){return n.width||wn.width},function(n){return n.color||wn.color},function(n){return n.bgColor||wn.bgColor},Jl,function(n){return n.animationDuration||wn.animationDuration},function(n){return n.color||wn.color},function(n){return n.bgColor||wn.bgColor}),po,ho,go,ts=c(po||(po=a([`
  100% { left: 1px; } 
`]))),is=c(ho||(ho=a([`
  100% { top: 0.3px; } 
`]))),bt={color:"#dc2626",height:"20px",width:"20px",animationDuration:1},as=u(go||(go=a([`
  height: `,`;
  width: `,`;
  border-radius: 50%;
  background: radial-gradient(at 30% 30%, #0000, #000a)
    `,`;
  position: relative;
  left: 0px;
  top: 0px;
  animation-name: `,", ",`;
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-iteration-count: infinite;
  animation-duration: `,`s,
    `,`s;
`])),function(n){return n.height||bt.height},function(n){return n.width||bt.width},function(n){return n.color||bt.color},ts,is,function(n){return n.animationDuration||bt.animationDuration},function(n){return n.animationDuration===0?.5:(n.animationDuration||bt.animationDuration)/2}),bo,vo,es=function(){return c(bo||(bo=a([`
	100% { transform: rotate(1deg) }
`])))},Pi={color:"#dc2626",stickColor:"#eee",height:"20px",width:"20px",animationDuration:1},rs=u(vo||(vo=a([`
  height: `,`;
  width: `,`;
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -200%;
  background: radial-gradient(at 30% 30%, #0000, #000a)
    `,`;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-duration: `,`s;

  &:before {
    content: '';
    position: absolute;
    inset: -200% 8px 100%;
    background: `,`;
  }
`])),function(n){return n.height||Pi.height},function(n){return n.width||Pi.width},function(n){return n.color},es,function(n){return n.animationDuration||Pi.animationDuration},function(n){return n.stickColor}),$o,xo,os=function(){return c($o||($o=a([`
	100% { transform: rotate(1deg) } 
`])))},vt={color:"#dc2626",height:"20px",width:"120px",animationDuration:1},cs=u(xo||(xo=a([`
  height: `,`;
  width: `,`;
  color: #514b82;
  background: radial-gradient(
        farthest-side,
        `,` 98%,
        #0000
      )
      left / 20px 20px,
    radial-gradient(
        farthest-side,
        `,` 98%,
        #0000
      )
      right / 20px 20px,
    radial-gradient(farthest-side, #000 98%, #0000) center/5px 5px,
    linear-gradient(`,` 0 0) center/100% 2px;
  background-repeat: no-repeat;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, -150, 0.5, 150);
  animation-duration: `,`s;
`])),function(n){return n.height||vt.height},function(n){return n.width||vt.width},function(n){return n.color||vt.color},function(n){return n.color||vt.color},function(n){return n.color},os,function(n){return n.animationDuration||vt.animationDuration}),yo,wo,So,us=c(yo||(yo=a([`
  0%,49.99% { transform: scaleX(1) }
  50%,100% { transform: scaleX(-1) } 
`]))),ls=c(wo||(wo=a([`
  100% { transform: rotate(1turn) }
`]))),Sn={color:"#dc2626",bgColor:"#eee",height:"20px",width:"120px",animationDuration:1},ss=u(So||(So=a([`
  height: `,`;
  width: `,`;
  width: calc(100px - 14px);
  height: 50px;
  border-radius: 50px;
  background: radial-gradient(
        farthest-side,
        #0000 calc(100% - 15px),
        `,` calc(100% - 14px)
          99%,
        #0000
      )
      left,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 15px),
        `,` calc(100% - 14px)
          99%,
        #0000
      )
      right;
  background-size: calc(50% + 7px) 100%;
  background-repeat: no-repeat;
  position: relative;
  animation-name: `,`;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  animation-duration: `,`s;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: `,`;
    transform-origin: -14px 50%;

    animation-name: `,`;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: `,`s;
    animation-play-state: `,`;
  }
`])),function(n){return n.height||Sn.height},function(n){return n.width||Sn.width},function(n){return n.bgColor||Sn.bgColor},function(n){return n.bgColor||Sn.bgColor},us,function(n){return n.animationDuration||Sn.animationDuration},function(n){return n.color||Sn.color},ls,function(n){return n.animationDuration===0?.5:(n.animationDuration||Sn.animationDuration)/2},function(n){return n.animationPlayState}),ko,Co={variant1:Wl,variant2:Xl,variant3:Yl,variant4:Kl,variant5:ql,variant6:ns,variant7:as,variant8:rs,variant9:cs,variant10:ss},ds=sn.div.attrs(function(n){return{color:n.color,bgColor:n.bgColor,stickColor:n.stickColor,height:n.height,width:n.width,animationDuration:n.animationDuration,animationPlayState:n!=null&&n.stop?"paused":"running",style:n==null?void 0:n.style}})(ko||(ko=a([`
  animation-play-state: `,`;

  `,`
  `,`
`])),function(n){return n.animationPlayState},function(n){return Co[n.variant]||Co.variant1},function(n){return n==null?void 0:n.style});function ms(n){var t=bn("Wobbling",n),i=t.style,e=t.rest;return nn.createElement(ds,on({},e,{style:i}))}fu.__docgenInfo={description:"",methods:[],displayName:"BarSpinner"};Eu.__docgenInfo={description:"",methods:[],displayName:"ClassicSpinner"};$l.__docgenInfo={description:"",methods:[],displayName:"ContinuousSpinner"};z0.__docgenInfo={description:"",methods:[],displayName:"DotSpinner"};a0.__docgenInfo={description:"",methods:[],displayName:"InfinitySpinner"};Fl.__docgenInfo={description:"",methods:[],displayName:"ProgressSpinner"};Q0.__docgenInfo={description:"",methods:[],displayName:"RoundedSpinner"};ms.__docgenInfo={description:"",methods:[],displayName:"WobblingSpinner"};const fs=(n,t)=>({[n]:{type:{name:"string",required:!0},table:{defaultValue:{summary:t}},control:{disable:!0}}}),ps=(n,t)=>({[n]:{type:"string",table:{defaultValue:{summary:t},type:{summary:"string"}},description:"Use same size which are available for `font-size` like `px`, `rem`, `em`, `%` etc..."}}),hs=(n,t)=>({[n]:{type:"string",table:{defaultValue:{summary:t},type:{summary:"string"}},description:`Use same size which are available for \`${n}\` like \`px\`, \`rem\`, \`em\`, \`%\` etc...`}}),gs=(n,t)=>({[n]:{type:"string",table:{defaultValue:{summary:t},type:{summary:"string"}},description:`Use same size which are available for ${n} like \`px\`, \`rem\`, \`em\`, \`%\` etc...`}}),bs=(n,t)=>({[n]:{table:{defaultValue:{summary:`${t} second`}},description:"Enter the duration to complete 1 animation cycle"}}),vs=(n,t)=>({[n]:{table:{defaultValue:{summary:t}}}}),Do={variant:fs,height:hs,width:gs,animationDuration:bs,size:ps},xs=n=>Object.entries(n).reduce((t,i)=>Do[i[0]]?{...t,...Do[i[0]](i[0],i[1])}:{...t,...vs(i[0],i[1])},{});export{u as A,fu as B,Eu as C,z0 as D,a0 as I,Fl as P,Q0 as R,c as W,$l as a,ms as b,xs as g};
