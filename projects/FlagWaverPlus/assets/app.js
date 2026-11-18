var xl=Object.defineProperty;var vl=(r,e,t)=>e in r?xl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Hi=(r,e,t)=>vl(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ur="149",Bn={ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yl=0,Jr=1,bl=2,Ro=1,Do=2,Li=3,ln=0,vt=1,Jt=2,pn=0,ai=1,Qr=2,ea=3,ta=4,Ml=5,si=100,Sl=101,wl=102,na=103,ia=104,Tl=200,El=201,Al=202,Cl=203,Io=204,Fo=205,Ll=206,Pl=207,Rl=208,Dl=209,Il=210,Fl=0,Ol=1,Nl=2,Sr=3,Ul=4,zl=5,kl=6,Bl=7,Oo=0,Gl=1,Hl=2,Qt=0,Vl=1,Wl=2,jl=3,ql=4,Xl=5,No=300,ui=301,hi=302,wr=303,Tr=304,bs=306,di=1e3,Bt=1001,Er=1002,xt=1003,sa=1004,Ds=1005,Mt=1006,Yl=1007,Fi=1008,Dn=1009,$l=1010,Zl=1011,Uo=1012,Kl=1013,An=1014,Cn=1015,Oi=1016,Jl=1017,Ql=1018,oi=1020,ec=1021,jt=1023,tc=1024,nc=1025,Pn=1026,fi=1027,ic=1028,sc=1029,rc=1030,ac=1031,oc=1033,Is=33776,Fs=33777,Os=33778,Ns=33779,ra=35840,aa=35841,oa=35842,la=35843,lc=36196,ca=37492,ua=37496,ha=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,ya=37817,ba=37818,Ma=37819,Sa=37820,wa=37821,Us=36492,cc=36283,Ta=36284,Ea=36285,Aa=36286,In=3e3,qe=3001,uc=3200,hc=3201,zo=0,dc=1,$t="srgb",Ni="srgb-linear",zs=7680,fc=519,Ca=35044,pc=35040,Ar="300 es",Cr=1035;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,La=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function mc(r,e){return(r%e+e)%e}function Bs(r,e,t){return(1-t)*r+t*e}function Pa(r){return(r&r-1)===0&&r!==0}function Lr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],S=i[1],M=i[4],T=i[7],y=i[2],C=i[5],U=i[8];return s[0]=o*p+a*S+l*y,s[3]=o*f+a*M+l*C,s[6]=o*_+a*T+l*U,s[1]=c*p+u*S+h*y,s[4]=c*f+u*M+h*C,s[7]=c*_+u*T+h*U,s[2]=d*p+m*S+g*y,s[5]=d*f+m*M+g*C,s[8]=d*_+m*T+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ot;function ko(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ui(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Hs={[$t]:{[Ni]:Rn},[Ni]:{[$t]:gs}},bt={legacyMode:!0,get workingColorSpace(){return Ni},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Hs[e]&&Hs[e][t]!==void 0){const n=Hs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},Gt={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Vs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ji(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=mc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Vs(o,s,e+1/3),this.g=Vs(o,s,e),this.b=Vs(o,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$t){const n=Bo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return bt.fromWorkingColorSpace(ji(this,ct),e),Ct(ct.r*255,0,255)<<16^Ct(ct.g*255,0,255)<<8^Ct(ct.b*255,0,255)<<0}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(ji(this,ct),t);const n=ct.r,i=ct.g,s=ct.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(ji(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=$t){return bt.fromWorkingColorSpace(ji(this,ct),e),e!==$t?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(Wi);const n=Bs(Gt.h,Wi.h,t),i=Bs(Gt.s,Wi.s,t),s=Bs(Gt.l,Wi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ge.NAMES=Bo;let Hn;class Go{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=Ui("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ui("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Rn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ho{constructor(e=null){this.isSource=!0,this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ws(i[o].image)):s.push(Ws(i[o]))}else s=Ws(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ws(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Go.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class at extends zn{constructor(e=at.DEFAULT_IMAGE,t=at.DEFAULT_MAPPING,n=Bt,i=Bt,s=Mt,o=Fi,a=jt,l=Dn,c=at.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=ki(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==No)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}at.DEFAULT_IMAGE=null;at.DEFAULT_MAPPING=No;at.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(m+1)/2,y=(_+1)/2,C=(u+d)/4,U=(h+p)/4,v=(g+f)/4;return M>T&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=C/n,s=U/n):T>y?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=C/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=U/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-p)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fn extends zn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new at(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vo extends at{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends at{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==m||u!==g){let f=1-a;const _=l*d+c*m+u*g+h*p,S=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const y=Math.sqrt(M),C=Math.atan2(y,_*S);f=Math.sin(f*C)/y,a=Math.sin(a*C)/y}const T=a*S;if(l=l*f+d*T,c=c*f+m*T,u=u*f+g*T,h=h*f+p*T,f===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ra.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ra.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new P,Ra=new On;class gi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)yn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox),qs.applyMatrix4(e.matrixWorld),this.union(qs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),qi.subVectors(this.max,yi),Vn.subVectors(e.a,yi),Wn.subVectors(e.b,yi),jn.subVectors(e.c,yi),un.subVectors(Wn,Vn),hn.subVectors(jn,Wn),bn.subVectors(Vn,jn);let t=[0,-un.z,un.y,0,-hn.z,hn.y,0,-bn.z,bn.y,un.z,0,-un.x,hn.z,0,-hn.x,bn.z,0,-bn.x,-un.y,un.x,0,-hn.y,hn.x,0,-bn.y,bn.x,0];return!Xs(t,Vn,Wn,jn,qi)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,Vn,Wn,jn,qi))?!1:(Xi.crossVectors(un,hn),t=[Xi.x,Xi.y,Xi.z],Xs(t,Vn,Wn,jn,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,qs=new gi,Vn=new P,Wn=new P,jn=new P,un=new P,hn=new P,bn=new P,yi=new P,qi=new P,Xi=new P,Mn=new P;function Xs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mn.fromArray(r,s);const a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),u=n.dot(Mn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xc=new gi,bi=new P,Ys=new P;class zr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Ys)),this.expandByPoint(bi.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new P,$s=new P,Yi=new P,dn=new P,Zs=new P,$i=new P,Ks=new P;class vc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.direction).multiplyScalar(t).add(this.origin),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$s.copy(e).add(t).multiplyScalar(.5),Yi.copy(t).sub(e).normalize(),dn.copy(this.origin).sub($s);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yi),a=dn.dot(this.direction),l=-dn.dot(Yi),c=dn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Yi).multiplyScalar(d).add($s),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,s){Zs.subVectors(t,e),$i.subVectors(n,e),Ks.crossVectors(Zs,$i);let o=this.direction.dot(Ks),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const l=a*this.direction.dot($i.crossVectors(dn,$i));if(l<0)return null;const c=a*this.direction.dot(Zs.cross(dn));if(c<0||l+c>o)return null;const u=-a*dn.dot(Ks);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,d,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yc,e,bc)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),fn.crossVectors(n,Dt),fn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),fn.crossVectors(n,Dt)),fn.normalize(),Zi.crossVectors(Dt,fn),i[0]=fn.x,i[4]=Zi.x,i[8]=Dt.x,i[1]=fn.y,i[5]=Zi.y,i[9]=Dt.y,i[2]=fn.z,i[6]=Zi.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],S=n[3],M=n[7],T=n[11],y=n[15],C=i[0],U=i[4],v=i[8],E=i[12],N=i[1],K=i[5],$=i[9],z=i[13],D=i[2],q=i[6],J=i[10],ee=i[14],Y=i[3],te=i[7],ie=i[11],pe=i[15];return s[0]=o*C+a*N+l*D+c*Y,s[4]=o*U+a*K+l*q+c*te,s[8]=o*v+a*$+l*J+c*ie,s[12]=o*E+a*z+l*ee+c*pe,s[1]=u*C+h*N+d*D+m*Y,s[5]=u*U+h*K+d*q+m*te,s[9]=u*v+h*$+d*J+m*ie,s[13]=u*E+h*z+d*ee+m*pe,s[2]=g*C+p*N+f*D+_*Y,s[6]=g*U+p*K+f*q+_*te,s[10]=g*v+p*$+f*J+_*ie,s[14]=g*E+p*z+f*ee+_*pe,s[3]=S*C+M*N+T*D+y*Y,s[7]=S*U+M*K+T*q+y*te,s[11]=S*v+M*$+T*J+y*ie,s[15]=S*E+M*z+T*ee+y*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*m-n*l*m)+p*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*u-s*l*u)+f*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],S=h*f*c-p*d*c+p*l*m-a*f*m-h*l*_+a*d*_,M=g*d*c-u*f*c-g*l*m+o*f*m+u*l*_-o*d*_,T=u*p*c-g*h*c+g*a*m-o*p*m-u*a*_+o*h*_,y=g*h*l-u*p*l-g*a*d+o*p*d+u*a*f-o*h*f,C=t*S+n*M+i*T+s*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/C;return e[0]=S*U,e[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*_-n*d*_)*U,e[2]=(a*f*s-p*l*s+p*i*c-n*f*c-a*i*_+n*l*_)*U,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*m-n*l*m)*U,e[4]=M*U,e[5]=(u*f*s-g*d*s+g*i*m-t*f*m-u*i*_+t*d*_)*U,e[6]=(g*l*s-o*f*s-g*i*c+t*f*c+o*i*_-t*l*_)*U,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*m+t*l*m)*U,e[8]=T*U,e[9]=(g*h*s-u*p*s-g*n*m+t*p*m+u*n*_-t*h*_)*U,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*_+t*a*_)*U,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*U,e[12]=y*U,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*U,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*f-t*a*f)*U,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,g=s*h,p=o*u,f=o*h,_=a*h,S=l*c,M=l*u,T=l*h,y=n.x,C=n.y,U=n.z;return i[0]=(1-(p+_))*y,i[1]=(m+T)*y,i[2]=(g-M)*y,i[3]=0,i[4]=(m-T)*C,i[5]=(1-(d+_))*C,i[6]=(f+S)*C,i[7]=0,i[8]=(g+M)*U,i[9]=(f-S)*U,i[10]=(1-(d+p))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=qn.set(i[0],i[1],i[2]).length();const o=qn.set(i[4],i[5],i[6]).length(),a=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const c=1/s,u=1/o,h=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new P,Ht=new ht,yc=new P(0,0,0),bc=new P(1,1,1),fn=new P,Zi=new P,Dt=new P,Da=new ht,Ia=new On;class Ms{constructor(e=0,t=0,n=0,i=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mc=0;const Fa=new P,Xn=new On,sn=new ht,Ki=new P,Mi=new P,Sc=new P,wc=new On,Oa=new P(1,0,0),Na=new P(0,1,0),Ua=new P(0,0,1),Tc={type:"added"},za={type:"removed"};class Qe extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new P,t=new Ms,n=new On,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ot}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(Oa,e)}rotateY(e){return this.rotateOnAxis(Na,e)}rotateZ(e){return this.rotateOnAxis(Ua,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oa,e)}translateY(e){return this.translateOnAxis(Na,e)}translateZ(e){return this.translateOnAxis(Ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Mi,Ki,this.up):sn.lookAt(Ki,Mi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(sn),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(za)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(za)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,Sc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new P(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new P,rn=new P,Js=new P,an=new P,Yn=new P,$n=new P,ka=new P,Qs=new P,er=new P,tr=new P;class on{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vt.subVectors(i,t),rn.subVectors(n,t),Js.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(rn),l=Vt.dot(Js),c=rn.dot(rn),u=rn.dot(Js),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,an),l.set(0,0),l.addScaledVector(s,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),rn.subVectors(e,t),Vt.cross(rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Vt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return on.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yn.subVectors(i,n),$n.subVectors(s,n),Qs.subVectors(e,n);const l=Yn.dot(Qs),c=$n.dot(Qs);if(l<=0&&c<=0)return t.copy(n);er.subVectors(e,i);const u=Yn.dot(er),h=$n.dot(er);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Yn,o);tr.subVectors(e,s);const m=Yn.dot(tr),g=$n.dot(tr);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($n,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return ka.subVectors(s,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(ka,a);const _=1/(f+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(Yn,o).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ec=0;class Bi extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ai,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Io,this.blendDst=Fo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new P,Ji=new Le;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ca,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ca&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class jo extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qo extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ac=0;const Ut=new ht,nr=new Qe,Zn=new P,It=new gi,Si=new gi,gt=new P;class Nt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ko(e)?qo:jo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return nr.lookAt(e),nr.updateMatrix(),this.applyMatrix4(nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(It.min,Si.min),It.expandByPoint(gt),gt.addVectors(It.max,Si.max),It.expandByPoint(gt)):(It.expandByPoint(Si.min),It.expandByPoint(Si.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(Zn.fromBufferAttribute(e,c),gt.add(Zn)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new P,u[N]=new P;const h=new P,d=new P,m=new P,g=new Le,p=new Le,f=new Le,_=new P,S=new P;function M(N,K,$){h.fromArray(i,N*3),d.fromArray(i,K*3),m.fromArray(i,$*3),g.fromArray(o,N*2),p.fromArray(o,K*2),f.fromArray(o,$*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const z=1/(p.x*f.y-f.x*p.y);isFinite(z)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(z),S.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(z),c[N].add(_),c[K].add(_),c[$].add(_),u[N].add(S),u[K].add(S),u[$].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let N=0,K=T.length;N<K;++N){const $=T[N],z=$.start,D=$.count;for(let q=z,J=z+D;q<J;q+=3)M(n[q+0],n[q+1],n[q+2])}const y=new P,C=new P,U=new P,v=new P;function E(N){U.fromArray(s,N*3),v.copy(U);const K=c[N];y.copy(K),y.sub(U.multiplyScalar(U.dot(K))).normalize(),C.crossVectors(v,K);const z=C.dot(u[N])<0?-1:1;l[N*4]=y.x,l[N*4+1]=y.y,l[N*4+2]=y.z,l[N*4+3]=z}for(let N=0,K=T.length;N<K;++N){const $=T[N],z=$.start,D=$.count;for(let q=z,J=z+D;q<J;q+=3)E(n[q+0]),E(n[q+1]),E(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new ht,Kn=new vc,ir=new zr,wi=new P,Ti=new P,Ei=new P,sr=new P,Qi=new P,es=new Le,ts=new Le,ns=new Le,rr=new P,is=new P;class St extends Qe{constructor(e=new Nt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(sr.fromBufferAttribute(h,e),o?Qi.addScaledVector(sr,u):Qi.addScaledVector(sr.sub(t),u))}t.add(Qi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),e.ray.intersectsSphere(ir)===!1)||(Ba.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(Ba),n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,T=S;M<T;M+=3){const y=a.getX(M),C=a.getX(M+1),U=a.getX(M+2);o=ss(this,f,e,Kn,c,u,y,C,U),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const _=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);o=ss(this,i,e,Kn,c,u,_,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,T=S;M<T;M+=3){const y=M,C=M+1,U=M+2;o=ss(this,f,e,Kn,c,u,y,C,U),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const _=p,S=p+1,M=p+2;o=ss(this,i,e,Kn,c,u,_,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Cc(r,e,t,n,i,s,o,a){let l;if(e.side===vt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ln,a),l===null)return null;is.copy(a),is.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:r}}function ss(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,wi),r.getVertexPosition(a,Ti),r.getVertexPosition(l,Ei);const c=Cc(r,e,t,n,wi,Ti,Ei,rr);if(c){i&&(es.fromBufferAttribute(i,o),ts.fromBufferAttribute(i,a),ns.fromBufferAttribute(i,l),c.uv=on.getUV(rr,wi,Ti,Ei,es,ts,ns,new Le)),s&&(es.fromBufferAttribute(s,o),ts.fromBufferAttribute(s,a),ns.fromBufferAttribute(s,l),c.uv2=on.getUV(rr,wi,Ti,Ei,es,ts,ns,new Le));const u={a:o,b:a,c:l,normal:new P,materialIndex:0};on.getNormal(wi,Ti,Ei,u.normal),c.face=u}return c}class Gi extends Nt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(p,f,_,S,M,T,y,C,U,v,E){const N=T/U,K=y/v,$=T/2,z=y/2,D=C/2,q=U+1,J=v+1;let ee=0,Y=0;const te=new P;for(let ie=0;ie<J;ie++){const pe=ie*K-z;for(let G=0;G<q;G++){const Z=G*N-$;te[p]=Z*S,te[f]=pe*M,te[_]=D,c.push(te.x,te.y,te.z),te[p]=0,te[f]=0,te[_]=C>0?1:-1,u.push(te.x,te.y,te.z),h.push(G/U),h.push(1-ie/v),ee+=1}}for(let ie=0;ie<v;ie++)for(let pe=0;pe<U;pe++){const G=d+pe+q*ie,Z=d+pe+q*(ie+1),re=d+(pe+1)+q*(ie+1),ae=d+(pe+1)+q*ie;l.push(G,Z,ae),l.push(Z,re,ae),Y+=6}a.addGroup(m,Y,E),m+=Y,d+=ee}}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=pi(r[t]);for(const i in n)e[i]=n[i]}return e}function Lc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xo(r){return r.getRenderTarget()===null&&r.outputEncoding===qe?$t:Ni}const Pc={clone:pi,merge:Et};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yo extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Yo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,Qn=1;class Ic extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kt(Jn,Qn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new kt(Jn,Qn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new kt(Jn,Qn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new kt(Jn,Qn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new kt(Jn,Qn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(Jn,Qn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class $o extends at{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $o(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gi(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:pn});s.uniforms.tEquirect.value=t;const o=new St(i,s),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Mt),new Ic(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ar=new P,Oc=new P,Nc=new Ot;class Sn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ar.subVectors(n,t).cross(Oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nc.getNormalMatrix(e),i=this.coplanarPoint(ar).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new zr,rs=new P;class kr{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],S=n[14],M=n[15];return t[0].setComponents(a-i,h-l,p-d,M-f).normalize(),t[1].setComponents(a+i,h+l,p+d,M+f).normalize(),t[2].setComponents(a+s,h+c,p+m,M+_).normalize(),t[3].setComponents(a-s,h-c,p-m,M-_).normalize(),t[4].setComponents(a-o,h-u,p-g,M-S).normalize(),t[5].setComponents(a+o,h+u,p+g,M+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rs.x=i.normal.x>0?e.max.x:e.min.x,rs.y=i.normal.y>0?e.max.y:e.min.y,rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ss extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){const S=_*d-o;for(let M=0;M<c;M++){const T=M*h-s;g.push(T,-S,0),p.push(0,0,1),f.push(M/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const M=S+c*_,T=S+c*(_+1),y=S+1+c*(_+1),C=S+1+c*_;m.push(M,T,C),m.push(T,y,C)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(f,2))}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wc="vec3 transformed = vec3( position );",jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Iu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$u=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ju=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Th=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ah=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ch=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ph=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Rh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Dh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ih=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,td=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:zc,alphamap_pars_fragment:kc,alphatest_fragment:Bc,alphatest_pars_fragment:Gc,aomap_fragment:Hc,aomap_pars_fragment:Vc,begin_vertex:Wc,beginnormal_vertex:jc,bsdfs:qc,iridescence_fragment:Xc,bumpmap_pars_fragment:Yc,clipping_planes_fragment:$c,clipping_planes_pars_fragment:Zc,clipping_planes_pars_vertex:Kc,clipping_planes_vertex:Jc,color_fragment:Qc,color_pars_fragment:eu,color_pars_vertex:tu,color_vertex:nu,common:iu,cube_uv_reflection_fragment:su,defaultnormal_vertex:ru,displacementmap_pars_vertex:au,displacementmap_vertex:ou,emissivemap_fragment:lu,emissivemap_pars_fragment:cu,encodings_fragment:uu,encodings_pars_fragment:hu,envmap_fragment:du,envmap_common_pars_fragment:fu,envmap_pars_fragment:pu,envmap_pars_vertex:mu,envmap_physical_pars_fragment:Au,envmap_vertex:gu,fog_vertex:_u,fog_pars_vertex:xu,fog_fragment:vu,fog_pars_fragment:yu,gradientmap_pars_fragment:bu,lightmap_fragment:Mu,lightmap_pars_fragment:Su,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Eu,lights_toon_fragment:Cu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Du,lights_physical_pars_fragment:Iu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:Nu,logdepthbuf_fragment:Uu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Bu,map_fragment:Gu,map_pars_fragment:Hu,map_particle_fragment:Vu,map_particle_pars_fragment:Wu,metalnessmap_fragment:ju,metalnessmap_pars_fragment:qu,morphcolor_vertex:Xu,morphnormal_vertex:Yu,morphtarget_pars_vertex:$u,morphtarget_vertex:Zu,normal_fragment_begin:Ku,normal_fragment_maps:Ju,normal_pars_fragment:Qu,normal_pars_vertex:eh,normal_vertex:th,normalmap_pars_fragment:nh,clearcoat_normal_fragment_begin:ih,clearcoat_normal_fragment_maps:sh,clearcoat_pars_fragment:rh,iridescence_pars_fragment:ah,output_fragment:oh,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:uh,dithering_fragment:hh,dithering_pars_fragment:dh,roughnessmap_fragment:fh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:gh,shadowmap_vertex:_h,shadowmask_pars_fragment:xh,skinbase_vertex:vh,skinning_pars_vertex:yh,skinning_vertex:bh,skinnormal_vertex:Mh,specularmap_fragment:Sh,specularmap_pars_fragment:wh,tonemapping_fragment:Th,tonemapping_pars_fragment:Eh,transmission_fragment:Ah,transmission_pars_fragment:Ch,uv_pars_fragment:Lh,uv_pars_vertex:Ph,uv_vertex:Rh,uv2_pars_fragment:Dh,uv2_pars_vertex:Ih,uv2_vertex:Fh,worldpos_vertex:Oh,background_vert:Nh,background_frag:Uh,backgroundCube_vert:zh,backgroundCube_frag:kh,cube_vert:Bh,cube_frag:Gh,depth_vert:Hh,depth_frag:Vh,distanceRGBA_vert:Wh,distanceRGBA_frag:jh,equirect_vert:qh,equirect_frag:Xh,linedashed_vert:Yh,linedashed_frag:$h,meshbasic_vert:Zh,meshbasic_frag:Kh,meshlambert_vert:Jh,meshlambert_frag:Qh,meshmatcap_vert:ed,meshmatcap_frag:td,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:sd,meshphong_frag:rd,meshphysical_vert:ad,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:ud,points_frag:hd,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},oe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ot},uv2Transform:{value:new Ot},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ot}}},Zt={basic:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Et([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Et([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Et([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Et([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Et([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Et([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Et([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Et([oe.lights,oe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Zt.physical={uniforms:Et([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const as={r:0,b:0,g:0};function gd(r,e,t,n,i,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(f,_){let S=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M));const T=r.xr,y=T.getSession&&T.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===bs)?(u===void 0&&(u=new St(new Gi(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:pi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,U,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=M.encoding!==qe,(h!==M||d!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new St(new Ss(2,2),new cn({name:"BackgroundMaterial",uniforms:pi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=M.encoding!==qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,_){f.getRGB(as,Xo(r)),n.buffers.color.setClear(as.r,as.g,as.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(f,_=1){a.set(f),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(a,l)},render:g}}function _d(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function h(D,q,J,ee,Y){let te=!1;if(o){const ie=p(ee,J,q);c!==ie&&(c=ie,m(c.object)),te=_(D,ee,J,Y),te&&S(D,ee,J,Y)}else{const ie=q.wireframe===!0;(c.geometry!==ee.id||c.program!==J.id||c.wireframe!==ie)&&(c.geometry=ee.id,c.program=J.id,c.wireframe=ie,te=!0)}Y!==null&&t.update(Y,34963),(te||u)&&(u=!1,v(D,q,J,ee),Y!==null&&r.bindBuffer(34963,t.get(Y).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,q,J){const ee=J.wireframe===!0;let Y=a[D.id];Y===void 0&&(Y={},a[D.id]=Y);let te=Y[q.id];te===void 0&&(te={},Y[q.id]=te);let ie=te[ee];return ie===void 0&&(ie=f(d()),te[ee]=ie),ie}function f(D){const q=[],J=[],ee=[];for(let Y=0;Y<i;Y++)q[Y]=0,J[Y]=0,ee[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:ee,object:D,attributes:{},index:null}}function _(D,q,J,ee){const Y=c.attributes,te=q.attributes;let ie=0;const pe=J.getAttributes();for(const G in pe)if(pe[G].location>=0){const re=Y[G];let ae=te[G];if(ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;ie++}return c.attributesNum!==ie||c.index!==ee}function S(D,q,J,ee){const Y={},te=q.attributes;let ie=0;const pe=J.getAttributes();for(const G in pe)if(pe[G].location>=0){let re=te[G];re===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),Y[G]=ae,ie++}c.attributes=Y,c.attributesNum=ie,c.index=ee}function M(){const D=c.newAttributes;for(let q=0,J=D.length;q<J;q++)D[q]=0}function T(D){y(D,0)}function y(D,q){const J=c.newAttributes,ee=c.enabledAttributes,Y=c.attributeDivisors;J[D]=1,ee[D]===0&&(r.enableVertexAttribArray(D),ee[D]=1),Y[D]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),Y[D]=q)}function C(){const D=c.newAttributes,q=c.enabledAttributes;for(let J=0,ee=q.length;J<ee;J++)q[J]!==D[J]&&(r.disableVertexAttribArray(J),q[J]=0)}function U(D,q,J,ee,Y,te){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(D,q,J,Y,te):r.vertexAttribPointer(D,q,J,ee,Y,te)}function v(D,q,J,ee){if(n.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=ee.attributes,te=J.getAttributes(),ie=q.defaultAttributeValues;for(const pe in te){const G=te[pe];if(G.location>=0){let Z=Y[pe];if(Z===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const re=Z.normalized,ae=Z.itemSize,H=t.get(Z);if(H===void 0)continue;const Te=H.buffer,ye=H.type,_e=H.bytesPerElement;if(Z.isInterleavedBufferAttribute){const fe=Z.data,Ue=fe.stride,Ee=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)y(G.location+Me,fe.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<G.locationSize;Me++)T(G.location+Me);r.bindBuffer(34962,Te);for(let Me=0;Me<G.locationSize;Me++)U(G.location+Me,ae/G.locationSize,ye,re,Ue*_e,(Ee+ae/G.locationSize*Me)*_e)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)y(G.location+fe,Z.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<G.locationSize;fe++)T(G.location+fe);r.bindBuffer(34962,Te);for(let fe=0;fe<G.locationSize;fe++)U(G.location+fe,ae/G.locationSize,ye,re,ae*_e,ae/G.locationSize*fe*_e)}}else if(ie!==void 0){const re=ie[pe];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(G.location,re);break;case 3:r.vertexAttrib3fv(G.location,re);break;case 4:r.vertexAttrib4fv(G.location,re);break;default:r.vertexAttrib1fv(G.location,re)}}}}C()}function E(){$();for(const D in a){const q=a[D];for(const J in q){const ee=q[J];for(const Y in ee)g(ee[Y].object),delete ee[Y];delete q[J]}delete a[D]}}function N(D){if(a[D.id]===void 0)return;const q=a[D.id];for(const J in q){const ee=q[J];for(const Y in ee)g(ee[Y].object),delete ee[Y];delete q[J]}delete a[D.id]}function K(D){for(const q in a){const J=a[q];if(J[D.id]===void 0)continue;const ee=J[D.id];for(const Y in ee)g(ee[Y].object),delete ee[Y];delete J[D.id]}}function $(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:N,releaseStatesOfProgram:K,initAttributes:M,enableAttribute:T,disableUnusedAttributes:C}}function xd(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function vd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(U){if(U==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),_=r.getParameter(36348),S=r.getParameter(36349),M=d>0,T=o||e.has("OES_texture_float"),y=M&&T,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:y,maxSamples:C}}function yd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Sn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const S=s?0:n,M=S*4;let T=_.clippingState||null;l.value=T,T=u(g,d,M,m);for(let y=0;y!==M;++y)T[y]=t[y];_.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let M=0,T=m;M!==p;++M,T+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function bd(r){let e=new WeakMap;function t(o,a){return a===wr?o.mapping=ui:a===Tr&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wr||a===Tr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ko extends Yo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Ga=[.125,.215,.35,.446,.526,.582],En=20,or=new Ko,Ha=new Ge;let lr=null;const wn=(1+Math.sqrt(5))/2,ti=1/wn,Va=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,wn,ti),new P(0,wn,-ti),new P(ti,0,wn),new P(-ti,0,wn),new P(wn,ti,0),new P(-wn,ti,0)];class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lr),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Oi,format:jt,encoding:In,depthBuffer:!1},i=ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Md(s)),this._blurMaterial=Sd(s,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ha),u.toneMapping=Qt,u.autoClear=!1;const m=new li({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),g=new St(new Gi,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Ha),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const M=this._cubeSize;os(i,S*M,_>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ui||e.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Va[(i-1)%Va.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new St(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*En-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):En;f>En&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);const _=[];let S=0;for(let U=0;U<En;++U){const v=U/p,E=Math.exp(-v*v/2);_.push(E),U===0?S+=E:U<f&&(S+=2*E)}for(let U=0;U<_.length;U++)_[U]=_[U]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const T=this._sizeLods[i],y=3*T*(i>M-ri?i-M+ri:0),C=4*(this._cubeSize-T);os(t,y,C,3*T,2*T),l.setRenderTarget(t),l.render(h,or)}}function Md(r){const e=[],t=[],n=[];let i=r;const s=r-ri+1+Ga.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ri?l=Ga[o-r+ri-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,S=new Float32Array(p*g*m),M=new Float32Array(f*g*m),T=new Float32Array(_*g*m);for(let C=0;C<m;C++){const U=C%3*2/3-1,v=C>2?0:-1,E=[U,v,0,U+2/3,v,0,U+2/3,v+1,0,U,v,0,U+2/3,v+1,0,U,v+1,0];S.set(E,p*g*C),M.set(d,f*g*C);const N=[C,C,C,C,C,C];T.set(N,_*g*C)}const y=new Nt;y.setAttribute("position",new qt(S,p)),y.setAttribute("uv",new qt(M,f)),y.setAttribute("faceIndex",new qt(T,_)),e.push(y),i>ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ja(r,e,t){const n=new Fn(r,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Sd(r,e,t){const n=new Float32Array(En),i=new P(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function qa(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Xa(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wr||l===Tr,u=l===ui||l===hi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Wa(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Wa(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Td(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ed(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let M=0,T=S.length;M<T;M+=3){const y=S[M+0],C=S[M+1],U=S[M+2];d.push(y,C,C,U,U,y)}}else{const S=g.array;p=g.version;for(let M=0,T=S.length/3-1;M<T;M+=3){const y=M+0,C=M+1,U=M+2;d.push(y,C,C,U,U,y)}}const f=new(ko(d)?qo:jo)(d,1);f.version=p;const _=s.get(h);_&&e.remove(_),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ad(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Cd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ld(r,e){return r[0]-e[0]}function Pd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Rd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==f){let J=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let N=0;T===!0&&(N=1),y===!0&&(N=2),C===!0&&(N=3);let K=u.attributes.position.count*N,$=1;K>e.maxTextureSize&&($=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const z=new Float32Array(K*$*4*f),D=new Vo(z,K,$,f);D.type=Cn,D.needsUpdate=!0;const q=N*4;for(let ee=0;ee<f;ee++){const Y=U[ee],te=v[ee],ie=E[ee],pe=K*$*4*ee;for(let G=0;G<Y.count;G++){const Z=G*q;T===!0&&(o.fromBufferAttribute(Y,G),z[pe+Z+0]=o.x,z[pe+Z+1]=o.y,z[pe+Z+2]=o.z,z[pe+Z+3]=0),y===!0&&(o.fromBufferAttribute(te,G),z[pe+Z+4]=o.x,z[pe+Z+5]=o.y,z[pe+Z+6]=o.z,z[pe+Z+7]=0),C===!0&&(o.fromBufferAttribute(ie,G),z[pe+Z+8]=o.x,z[pe+Z+9]=o.y,z[pe+Z+10]=o.z,z[pe+Z+11]=ie.itemSize===4?o.w:1)}}_={count:f,texture:D,size:new Le(K,$)},s.set(u,_),u.addEventListener("dispose",J)}let S=0;for(let T=0;T<m.length;T++)S+=m[T];const M=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[u.id];if(f===void 0||f.length!==p){f=[];for(let y=0;y<p;y++)f[y]=[y,0];n[u.id]=f}for(let y=0;y<p;y++){const C=f[y];C[0]=y,C[1]=m[y]}f.sort(Pd);for(let y=0;y<8;y++)y<p&&f[y][1]?(a[y][0]=f[y][0],a[y][1]=f[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ld);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const C=a[y],U=C[0],v=C[1];U!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+y)!==_[U]&&u.setAttribute("morphTarget"+y,_[U]),S&&u.getAttribute("morphNormal"+y)!==S[U]&&u.setAttribute("morphNormal"+y,S[U]),i[y]=v,M+=v):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),S&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const T=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dd(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jo=new at,Qo=new Vo,el=new _c,tl=new $o,Ya=[],$a=[],Za=new Float32Array(16),Ka=new Float32Array(9),Ja=new Float32Array(4);function _i(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ya[i];if(s===void 0&&(s=new Float32Array(i),Ya[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ws(r,e){let t=$a[e];t===void 0&&(t=new Int32Array(e),$a[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function Nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function Ud(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ja.set(n),r.uniformMatrix2fv(this.addr,!1,Ja),ft(t,n)}}function zd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ka.set(n),r.uniformMatrix3fv(this.addr,!1,Ka),ft(t,n)}}function kd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Za.set(n),r.uniformMatrix4fv(this.addr,!1,Za),ft(t,n)}}function Bd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),ft(t,e)}}function Hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),ft(t,e)}}function Vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),ft(t,e)}}function Wd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),ft(t,e)}}function qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),ft(t,e)}}function Xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),ft(t,e)}}function Yd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Jo,i)}function $d(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||el,i)}function Zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tl,i)}function Kd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qo,i)}function Jd(r){switch(r){case 5126:return Id;case 35664:return Fd;case 35665:return Od;case 35666:return Nd;case 35674:return Ud;case 35675:return zd;case 35676:return kd;case 5124:case 35670:return Bd;case 35667:case 35671:return Gd;case 35668:case 35672:return Hd;case 35669:case 35673:return Vd;case 5125:return Wd;case 36294:return jd;case 36295:return qd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Kd}}function Qd(r,e){r.uniform1fv(this.addr,e)}function ef(r,e){const t=_i(e,this.size,2);r.uniform2fv(this.addr,t)}function tf(r,e){const t=_i(e,this.size,3);r.uniform3fv(this.addr,t)}function nf(r,e){const t=_i(e,this.size,4);r.uniform4fv(this.addr,t)}function sf(r,e){const t=_i(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rf(r,e){const t=_i(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function af(r,e){const t=_i(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function of(r,e){r.uniform1iv(this.addr,e)}function lf(r,e){r.uniform2iv(this.addr,e)}function cf(r,e){r.uniform3iv(this.addr,e)}function uf(r,e){r.uniform4iv(this.addr,e)}function hf(r,e){r.uniform1uiv(this.addr,e)}function df(r,e){r.uniform2uiv(this.addr,e)}function ff(r,e){r.uniform3uiv(this.addr,e)}function pf(r,e){r.uniform4uiv(this.addr,e)}function mf(r,e,t){const n=this.cache,i=e.length,s=ws(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Jo,s[o])}function gf(r,e,t){const n=this.cache,i=e.length,s=ws(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||el,s[o])}function _f(r,e,t){const n=this.cache,i=e.length,s=ws(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tl,s[o])}function xf(r,e,t){const n=this.cache,i=e.length,s=ws(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qo,s[o])}function vf(r){switch(r){case 5126:return Qd;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return sf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return uf;case 5125:return hf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return xf}}class yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jd(t.type)}}class bf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vf(t.type)}}class Mf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function Qa(r,e){r.seq.push(e),r.map[e.id]=e}function Sf(r,e,t){const n=r.name,i=n.length;for(cr.lastIndex=0;;){const s=cr.exec(n),o=cr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qa(t,c===void 0?new yf(a,r,e):new bf(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Mf(a),Qa(t,h)),t=h}}}class _s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Sf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let wf=0;function Tf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ef(r){switch(r){case In:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function to(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Tf(r.getShaderSource(e),o)}else return i}function Af(r,e){const t=Ef(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cf(r,e){let t;switch(e){case Vl:t="Linear";break;case Wl:t="Reinhard";break;case jl:t="OptimizedCineon";break;case ql:t="ACESFilmic";break;case Xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Pf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Pi(r){return r!==""}function no(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function io(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(r){return r.replace(Df,If)}function If(r,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pr(t)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(r){return r.replace(Ff,Of)}function Of(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ro(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ro?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Do?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Uf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ui:case hi:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function kf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case Gl:e="ENVMAP_BLENDING_MIX";break;case Hl:e="ENVMAP_BLENDING_ADD";break}return e}function Bf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Nf(t),c=Uf(t),u=zf(t),h=kf(t),d=Bf(t),m=t.isWebGL2?"":Lf(t),g=Pf(s),p=i.createProgram();let f,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Pi).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Pi).join(`
`),_.length>0&&(_+=`
`)):(f=[ro(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),_=[m,ro(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?De.tonemapping_pars_fragment:"",t.toneMapping!==Qt?Cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,Af("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Pr(o),o=no(o,t),o=io(o,t),a=Pr(a),a=no(a,t),a=io(a,t),o=so(o),a=so(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===Ar?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ar?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=S+f+o,T=S+_+a,y=eo(i,35633,M),C=eo(i,35632,T);if(i.attachShader(p,y),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(y).trim(),K=i.getShaderInfoLog(C).trim();let $=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const D=to(i,y,"vertex"),q=to(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+D+`
`+q)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(N===""||K==="")&&(z=!1);z&&(this.diagnostics={runnable:$,programLog:E,vertexShader:{log:N,prefix:f},fragmentShader:{log:K,prefix:_}})}i.deleteShader(y),i.deleteShader(C);let U;this.getUniforms=function(){return U===void 0&&(U=new _s(i,p)),U};let v;return this.getAttributes=function(){return v===void 0&&(v=Rf(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=wf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=C,this}let Hf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wf(e),t.set(e,n)),n}}class Wf{constructor(e){this.id=Hf++,this.code=e,this.usedTimes=0}}function jf(r,e,t,n,i,s,o){const a=new Wo,l=new Vf,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,N,K,$){const z=K.fog,D=$.geometry,q=v.isMeshStandardMaterial?K.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),ee=J&&J.mapping===bs?J.image.height:null,Y=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=te!==void 0?te.length:0;let pe=0;D.morphAttributes.position!==void 0&&(pe=1),D.morphAttributes.normal!==void 0&&(pe=2),D.morphAttributes.color!==void 0&&(pe=3);let G,Z,re,ae;if(Y){const Ue=Zt[Y];G=Ue.vertexShader,Z=Ue.fragmentShader}else G=v.vertexShader,Z=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const H=r.getRenderTarget(),Te=v.alphaTest>0,ye=v.clearcoat>0,_e=v.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:v.type,vertexShader:G,fragmentShader:Z,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:In,map:!!v.map,matcap:!!v.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ee,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===dc,tangentSpaceNormalMap:v.normalMapType===zo,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===qe,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!v.iridescenceMap,iridescenceThicknessMap:_e&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ai,alphaMap:!!v.alphaMap,alphaTest:Te,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Qt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jt,flipSided:v.side===vt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(E,v),S(E,v),E.push(r.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),v.push(a.mask)}function M(v){const E=g[v.type];let N;if(E){const K=Zt[E];N=Pc.clone(K.uniforms)}else N=v.uniforms;return N}function T(v,E){let N;for(let K=0,$=c.length;K<$;K++){const z=c[K];if(z.cacheKey===E){N=z,++N.usedTimes;break}}return N===void 0&&(N=new Gf(r,E,v,s),c.push(N)),N}function y(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:U}}function qf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Xf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ao(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function oo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,p,f){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},r[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function a(h,d,m,g,p,f){const _=o(h,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,d,m,g,p,f){const _=o(h,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||Xf),n.length>1&&n.sort(d||ao),i.length>1&&i.sort(d||ao)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Yf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new oo,r.set(n,[o])):i>=s.length?(o=new oo,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function $f(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function Zf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Kf=0;function Jf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qf(r,e){const t=new $f,n=Zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,o=new ht,a=new ht;function l(u,h){let d=0,m=0,g=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let p=0,f=0,_=0,S=0,M=0,T=0,y=0,C=0,U=0,v=0;u.sort(Jf);const E=h!==!0?Math.PI:1;for(let K=0,$=u.length;K<$;K++){const z=u[K],D=z.color,q=z.intensity,J=z.distance,ee=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=D.r*q*E,m+=D.g*q*E,g+=D.b*q*E;else if(z.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(z.sh.coefficients[Y],q);else if(z.isDirectionalLight){const Y=t.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const te=z.shadow,ie=n.get(z);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=z.shadow.matrix,T++}i.directional[p]=Y,p++}else if(z.isSpotLight){const Y=t.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(D).multiplyScalar(q*E),Y.distance=J,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,i.spot[_]=Y;const te=z.shadow;if(z.map&&(i.spotLightMap[U]=z.map,U++,te.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[_]=te.matrix,z.castShadow){const ie=n.get(z);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[_]=ie,i.spotShadowMap[_]=ee,C++}_++}else if(z.isRectAreaLight){const Y=t.get(z);Y.color.copy(D).multiplyScalar(q),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=Y,S++}else if(z.isPointLight){const Y=t.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*E),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const te=z.shadow,ie=n.get(z);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=ee,i.pointShadowMatrix[f]=z.shadow.matrix,y++}i.point[f]=Y,f++}else if(z.isHemisphereLight){const Y=t.get(z);Y.skyColor.copy(z.color).multiplyScalar(q*E),Y.groundColor.copy(z.groundColor).multiplyScalar(q*E),i.hemi[M]=Y,M++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==p||N.pointLength!==f||N.spotLength!==_||N.rectAreaLength!==S||N.hemiLength!==M||N.numDirectionalShadows!==T||N.numPointShadows!==y||N.numSpotShadows!==C||N.numSpotMaps!==U)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=S,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+U-v,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=v,N.directionalLength=p,N.pointLength=f,N.spotLength=_,N.rectAreaLength=S,N.hemiLength=M,N.numDirectionalShadows=T,N.numPointShadows=y,N.numSpotShadows=C,N.numSpotMaps=U,i.version=Kf++)}function c(u,h){let d=0,m=0,g=0,p=0,f=0;const _=h.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const T=u[S];if(T.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),d++}else if(T.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(T.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(_),m++}else if(T.isHemisphereLight){const y=i.hemi[f];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function lo(r,e){const t=new Qf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ep(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new lo(r,e),t.set(s,[l])):o>=a.length?(l=new lo(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class tp extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class np extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rp(r,e,t){let n=new kr;const i=new Le,s=new Le,o=new _t,a=new tp({depthPacking:hc}),l=new np,c={},u=t.maxTextureSize,h={[ln]:vt,[vt]:ln,[Jt]:Jt},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ip,fragmentShader:sp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new St(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro,this.render=function(T,y,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const U=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),N=r.state;N.setBlending(pn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let K=0,$=T.length;K<$;K++){const z=T[K],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null){const ee=this.type!==Li?{minFilter:xt,magFilter:xt}:{};D.map=new Fn(i.x,i.y,ee),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const J=D.getViewportCount();for(let ee=0;ee<J;ee++){const Y=D.getViewport(ee);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),N.viewport(o),D.updateMatrices(z,ee),n=D.getFrustum(),M(y,C,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===Li&&_(D,C),D.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(U,v,E)};function _(T,y){const C=e.update(p);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(y,null,C,d,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(y,null,C,m,p,null)}function S(T,y,C,U,v,E){let N=null;const K=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(K!==void 0)N=K;else if(N=C.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const $=N.uuid,z=y.uuid;let D=c[$];D===void 0&&(D={},c[$]=D);let q=D[z];q===void 0&&(q=N.clone(),D[z]=q),N=q}return N.visible=y.visible,N.wireframe=y.wireframe,E===Li?N.side=y.shadowSide!==null?y.shadowSide:y.side:N.side=y.shadowSide!==null?y.shadowSide:h[y.side],N.alphaMap=y.alphaMap,N.alphaTest=y.alphaTest,N.map=y.map,N.clipShadows=y.clipShadows,N.clippingPlanes=y.clippingPlanes,N.clipIntersection=y.clipIntersection,N.displacementMap=y.displacementMap,N.displacementScale=y.displacementScale,N.displacementBias=y.displacementBias,N.wireframeLinewidth=y.wireframeLinewidth,N.linewidth=y.linewidth,C.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(C.matrixWorld),N.nearDistance=U,N.farDistance=v),N}function M(T,y,C,U,v){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Li)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const K=e.update(T),$=T.material;if(Array.isArray($)){const z=K.groups;for(let D=0,q=z.length;D<q;D++){const J=z[D],ee=$[J.materialIndex];if(ee&&ee.visible){const Y=S(T,ee,U,C.near,C.far,v);r.renderBufferDirect(C,null,K,Y,T,J)}}}else if($.visible){const z=S(T,$,U,C.near,C.far,v);r.renderBufferDirect(C,null,K,z,T,null)}}const N=T.children;for(let K=0,$=N.length;K<$;K++)M(N[K],y,C,U,v)}}function ap(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const W=new _t;let Q=null;const de=new _t(0,0,0,0);return{setMask:function(ve){Q!==ve&&!R&&(r.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){R=ve},setClear:function(ve,Ve,Ze,nt,Xt){Xt===!0&&(ve*=nt,Ve*=nt,Ze*=nt),W.set(ve,Ve,Ze,nt),de.equals(W)===!1&&(r.clearColor(ve,Ve,Ze,nt),de.copy(W))},reset:function(){R=!1,Q=null,de.set(-1,0,0,0)}}}function s(){let R=!1,W=null,Q=null,de=null;return{setTest:function(ve){ve?Te(2929):ye(2929)},setMask:function(ve){W!==ve&&!R&&(r.depthMask(ve),W=ve)},setFunc:function(ve){if(Q!==ve){switch(ve){case Fl:r.depthFunc(512);break;case Ol:r.depthFunc(519);break;case Nl:r.depthFunc(513);break;case Sr:r.depthFunc(515);break;case Ul:r.depthFunc(514);break;case zl:r.depthFunc(518);break;case kl:r.depthFunc(516);break;case Bl:r.depthFunc(517);break;default:r.depthFunc(515)}Q=ve}},setLocked:function(ve){R=ve},setClear:function(ve){de!==ve&&(r.clearDepth(ve),de=ve)},reset:function(){R=!1,W=null,Q=null,de=null}}}function o(){let R=!1,W=null,Q=null,de=null,ve=null,Ve=null,Ze=null,nt=null,Xt=null;return{setTest:function(Xe){R||(Xe?Te(2960):ye(2960))},setMask:function(Xe){W!==Xe&&!R&&(r.stencilMask(Xe),W=Xe)},setFunc:function(Xe,L,B){(Q!==Xe||de!==L||ve!==B)&&(r.stencilFunc(Xe,L,B),Q=Xe,de=L,ve=B)},setOp:function(Xe,L,B){(Ve!==Xe||Ze!==L||nt!==B)&&(r.stencilOp(Xe,L,B),Ve=Xe,Ze=L,nt=B)},setLocked:function(Xe){R=Xe},setClear:function(Xe){Xt!==Xe&&(r.clearStencil(Xe),Xt=Xe)},reset:function(){R=!1,W=null,Q=null,de=null,ve=null,Ve=null,Ze=null,nt=null,Xt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,S=null,M=null,T=null,y=null,C=null,U=null,v=null,E=!1,N=null,K=null,$=null,z=null,D=null;const q=r.getParameter(35661);let J=!1,ee=0;const Y=r.getParameter(7938);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=ee>=2);let te=null,ie={};const pe=r.getParameter(3088),G=r.getParameter(2978),Z=new _t().fromArray(pe),re=new _t().fromArray(G);function ae(R,W,Q){const de=new Uint8Array(4),ve=r.createTexture();r.bindTexture(R,ve),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Ve=0;Ve<Q;Ve++)r.texImage2D(W+Ve,0,6408,1,1,0,6408,5121,de);return ve}const H={};H[3553]=ae(3553,3553,1),H[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(2929),l.setFunc(Sr),$e(!1),ot(Jr),Te(2884),Ke(pn);function Te(R){d[R]!==!0&&(r.enable(R),d[R]=!0)}function ye(R){d[R]!==!1&&(r.disable(R),d[R]=!1)}function _e(R,W){return m[R]!==W?(r.bindFramebuffer(R,W),m[R]=W,n&&(R===36009&&(m[36160]=W),R===36160&&(m[36009]=W)),!0):!1}function fe(R,W){let Q=p,de=!1;if(R)if(Q=g.get(W),Q===void 0&&(Q=[],g.set(W,Q)),R.isWebGLMultipleRenderTargets){const ve=R.texture;if(Q.length!==ve.length||Q[0]!==36064){for(let Ve=0,Ze=ve.length;Ve<Ze;Ve++)Q[Ve]=36064+Ve;Q.length=ve.length,de=!0}}else Q[0]!==36064&&(Q[0]=36064,de=!0);else Q[0]!==1029&&(Q[0]=1029,de=!0);de&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ue(R){return f!==R?(r.useProgram(R),f=R,!0):!1}const Ee={[si]:32774,[Sl]:32778,[wl]:32779};if(n)Ee[na]=32775,Ee[ia]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ee[na]=R.MIN_EXT,Ee[ia]=R.MAX_EXT)}const Me={[Tl]:0,[El]:1,[Al]:768,[Io]:770,[Il]:776,[Rl]:774,[Ll]:772,[Cl]:769,[Fo]:771,[Dl]:775,[Pl]:773};function Ke(R,W,Q,de,ve,Ve,Ze,nt){if(R===pn){_===!0&&(ye(3042),_=!1);return}if(_===!1&&(Te(3042),_=!0),R!==Ml){if(R!==S||nt!==E){if((M!==si||C!==si)&&(r.blendEquation(32774),M=si,C=si),nt)switch(R){case ai:r.blendFuncSeparate(1,771,1,771);break;case Qr:r.blendFunc(1,1);break;case ea:r.blendFuncSeparate(0,769,0,1);break;case ta:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ai:r.blendFuncSeparate(770,771,1,771);break;case Qr:r.blendFunc(770,1);break;case ea:r.blendFuncSeparate(0,769,0,1);break;case ta:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,y=null,U=null,v=null,S=R,E=nt}return}ve=ve||W,Ve=Ve||Q,Ze=Ze||de,(W!==M||ve!==C)&&(r.blendEquationSeparate(Ee[W],Ee[ve]),M=W,C=ve),(Q!==T||de!==y||Ve!==U||Ze!==v)&&(r.blendFuncSeparate(Me[Q],Me[de],Me[Ve],Me[Ze]),T=Q,y=de,U=Ve,v=Ze),S=R,E=!1}function tt(R,W){R.side===Jt?ye(2884):Te(2884);let Q=R.side===vt;W&&(Q=!Q),$e(Q),R.blending===ai&&R.transparent===!1?Ke(pn):Ke(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const de=R.stencilWrite;c.setTest(de),de&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Te(32926):ye(32926)}function $e(R){N!==R&&(R?r.frontFace(2304):r.frontFace(2305),N=R)}function ot(R){R!==yl?(Te(2884),R!==K&&(R===Jr?r.cullFace(1029):R===bl?r.cullFace(1028):r.cullFace(1032))):ye(2884),K=R}function Ye(R){R!==$&&(J&&r.lineWidth(R),$=R)}function Ie(R,W,Q){R?(Te(32823),(z!==W||D!==Q)&&(r.polygonOffset(W,Q),z=W,D=Q)):ye(32823)}function wt(R){R?Te(3089):ye(3089)}function pt(R){R===void 0&&(R=33984+q-1),te!==R&&(r.activeTexture(R),te=R)}function w(R,W,Q){Q===void 0&&(te===null?Q=33984+q-1:Q=te);let de=ie[Q];de===void 0&&(de={type:void 0,texture:void 0},ie[Q]=de),(de.type!==R||de.texture!==W)&&(te!==Q&&(r.activeTexture(Q),te=Q),r.bindTexture(R,W||H[R]),de.type=R,de.texture=W)}function x(){const R=ie[te];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(R){Z.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ge(R){re.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function Ce(R,W){let Q=h.get(W);Q===void 0&&(Q=new WeakMap,h.set(W,Q));let de=Q.get(R);de===void 0&&(de=r.getUniformBlockIndex(W,R.name),Q.set(R,de))}function Re(R,W){const de=h.get(W).get(R);u.get(W)!==de&&(r.uniformBlockBinding(W,de,R.__bindingPointIndex),u.set(W,de))}function He(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},te=null,ie={},m={},g=new WeakMap,p=[],f=null,_=!1,S=null,M=null,T=null,y=null,C=null,U=null,v=null,E=!1,N=null,K=null,$=null,z=null,D=null,Z.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:ye,bindFramebuffer:_e,drawBuffers:fe,useProgram:Ue,setBlending:Ke,setMaterial:tt,setFlipSided:$e,setCullFace:ot,setLineWidth:Ye,setPolygonOffset:Ie,setScissorTest:wt,activeTexture:pt,bindTexture:w,unbindTexture:x,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:he,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:Re,texStorage2D:F,texStorage3D:ue,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Se,compressedTexSubImage3D:A,scissor:me,viewport:ge,reset:He}}function op(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return _?new OffscreenCanvas(w,x):Ui("canvas")}function M(w,x,j,ne){let se=1;if((w.width>ne||w.height>ne)&&(se=ne/Math.max(w.width,w.height)),se<1||x===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const ce=x?Lr:Math.floor,Se=ce(se*w.width),A=ce(se*w.height);p===void 0&&(p=S(Se,A));const F=j?S(Se,A):p;return F.width=Se,F.height=A,F.getContext("2d").drawImage(w,0,0,Se,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+A+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return Pa(w.width)&&Pa(w.height)}function y(w){return a?!1:w.wrapS!==Bt||w.wrapT!==Bt||w.minFilter!==xt&&w.minFilter!==Mt}function C(w,x){return w.generateMipmaps&&x&&w.minFilter!==xt&&w.minFilter!==Mt}function U(w){r.generateMipmap(w)}function v(w,x,j,ne,se=!1){if(a===!1)return x;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce=x;return x===6403&&(j===5126&&(ce=33326),j===5131&&(ce=33325),j===5121&&(ce=33321)),x===33319&&(j===5126&&(ce=33328),j===5131&&(ce=33327),j===5121&&(ce=33323)),x===6408&&(j===5126&&(ce=34836),j===5131&&(ce=34842),j===5121&&(ce=ne===qe&&se===!1?35907:32856),j===32819&&(ce=32854),j===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function E(w,x,j){return C(w,j)===!0||w.isFramebufferTexture&&w.minFilter!==xt&&w.minFilter!==Mt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){return w===xt||w===sa||w===Ds?9728:9729}function K(w){const x=w.target;x.removeEventListener("dispose",K),z(x),x.isVideoTexture&&g.delete(x)}function $(w){const x=w.target;x.removeEventListener("dispose",$),q(x)}function z(w){const x=n.get(w);if(x.__webglInit===void 0)return;const j=w.source,ne=f.get(j);if(ne){const se=ne[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(w),Object.keys(ne).length===0&&f.delete(j)}n.remove(w)}function D(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const j=w.source,ne=f.get(j);delete ne[x.__cacheKey],o.memory.textures--}function q(w){const x=w.texture,j=n.get(w),ne=n.get(x);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(j.__webglFramebuffer[se]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let se=0;se<j.__webglColorRenderbuffer.length;se++)j.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(j.__webglColorRenderbuffer[se]);j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let se=0,ce=x.length;se<ce;se++){const Se=n.get(x[se]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(x[se])}n.remove(x),n.remove(w)}let J=0;function ee(){J=0}function Y(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function te(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function ie(w,x){const j=n.get(w);if(w.isVideoTexture&&wt(w),w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(j,w,x);return}}t.bindTexture(3553,j.__webglTexture,33984+x)}function pe(w,x){const j=n.get(w);if(w.version>0&&j.__version!==w.version){ye(j,w,x);return}t.bindTexture(35866,j.__webglTexture,33984+x)}function G(w,x){const j=n.get(w);if(w.version>0&&j.__version!==w.version){ye(j,w,x);return}t.bindTexture(32879,j.__webglTexture,33984+x)}function Z(w,x){const j=n.get(w);if(w.version>0&&j.__version!==w.version){_e(j,w,x);return}t.bindTexture(34067,j.__webglTexture,33984+x)}const re={[di]:10497,[Bt]:33071,[Er]:33648},ae={[xt]:9728,[sa]:9984,[Ds]:9986,[Mt]:9729,[Yl]:9985,[Fi]:9987};function H(w,x,j){if(j?(r.texParameteri(w,10242,re[x.wrapS]),r.texParameteri(w,10243,re[x.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,re[x.wrapR]),r.texParameteri(w,10240,ae[x.magFilter]),r.texParameteri(w,10241,ae[x.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(x.wrapS!==Bt||x.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,N(x.magFilter)),r.texParameteri(w,10241,N(x.minFilter)),x.minFilter!==xt&&x.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===xt||x.minFilter!==Ds&&x.minFilter!==Fi||x.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Te(w,x){let j=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",K));const ne=x.source;let se=f.get(ne);se===void 0&&(se={},f.set(ne,se));const ce=te(x);if(ce!==w.__cacheKey){se[ce]===void 0&&(se[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),se[ce].usedTimes++;const Se=se[w.__cacheKey];Se!==void 0&&(se[w.__cacheKey].usedTimes--,Se.usedTimes===0&&D(x)),w.__cacheKey=ce,w.__webglTexture=se[ce].texture}return j}function ye(w,x,j){let ne=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=35866),x.isData3DTexture&&(ne=32879);const se=Te(w,x),ce=x.source;t.bindTexture(ne,w.__webglTexture,33984+j);const Se=n.get(ce);if(ce.version!==Se.__version||se===!0){t.activeTexture(33984+j),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const A=y(x)&&T(x.image)===!1;let F=M(x.image,A,!1,u);F=pt(x,F);const ue=T(F)||a,he=s.convert(x.format,x.encoding);let le=s.convert(x.type),me=v(x.internalFormat,he,le,x.encoding,x.isVideoTexture);H(ne,x,ue);let ge;const Ce=x.mipmaps,Re=a&&x.isVideoTexture!==!0,He=Se.__version===void 0||se===!0,R=E(x,F,ue);if(x.isDepthTexture)me=6402,a?x.type===Cn?me=36012:x.type===An?me=33190:x.type===oi?me=35056:me=33189:x.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Pn&&me===6402&&x.type!==Uo&&x.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=An,le=s.convert(x.type)),x.format===fi&&me===6402&&(me=34041,x.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=oi,le=s.convert(x.type))),He&&(Re?t.texStorage2D(3553,1,me,F.width,F.height):t.texImage2D(3553,0,me,F.width,F.height,0,he,le,null));else if(x.isDataTexture)if(Ce.length>0&&ue){Re&&He&&t.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let W=0,Q=Ce.length;W<Q;W++)ge=Ce[W],Re?t.texSubImage2D(3553,W,0,0,ge.width,ge.height,he,le,ge.data):t.texImage2D(3553,W,me,ge.width,ge.height,0,he,le,ge.data);x.generateMipmaps=!1}else Re?(He&&t.texStorage2D(3553,R,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,he,le,F.data)):t.texImage2D(3553,0,me,F.width,F.height,0,he,le,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Re&&He&&t.texStorage3D(35866,R,me,Ce[0].width,Ce[0].height,F.depth);for(let W=0,Q=Ce.length;W<Q;W++)ge=Ce[W],x.format!==jt?he!==null?Re?t.compressedTexSubImage3D(35866,W,0,0,0,ge.width,ge.height,F.depth,he,ge.data,0,0):t.compressedTexImage3D(35866,W,me,ge.width,ge.height,F.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(35866,W,0,0,0,ge.width,ge.height,F.depth,he,le,ge.data):t.texImage3D(35866,W,me,ge.width,ge.height,F.depth,0,he,le,ge.data)}else{Re&&He&&t.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let W=0,Q=Ce.length;W<Q;W++)ge=Ce[W],x.format!==jt?he!==null?Re?t.compressedTexSubImage2D(3553,W,0,0,ge.width,ge.height,he,ge.data):t.compressedTexImage2D(3553,W,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,W,0,0,ge.width,ge.height,he,le,ge.data):t.texImage2D(3553,W,me,ge.width,ge.height,0,he,le,ge.data)}else if(x.isDataArrayTexture)Re?(He&&t.texStorage3D(35866,R,me,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,he,le,F.data)):t.texImage3D(35866,0,me,F.width,F.height,F.depth,0,he,le,F.data);else if(x.isData3DTexture)Re?(He&&t.texStorage3D(32879,R,me,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,he,le,F.data)):t.texImage3D(32879,0,me,F.width,F.height,F.depth,0,he,le,F.data);else if(x.isFramebufferTexture){if(He)if(Re)t.texStorage2D(3553,R,me,F.width,F.height);else{let W=F.width,Q=F.height;for(let de=0;de<R;de++)t.texImage2D(3553,de,me,W,Q,0,he,le,null),W>>=1,Q>>=1}}else if(Ce.length>0&&ue){Re&&He&&t.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let W=0,Q=Ce.length;W<Q;W++)ge=Ce[W],Re?t.texSubImage2D(3553,W,0,0,he,le,ge):t.texImage2D(3553,W,me,he,le,ge);x.generateMipmaps=!1}else Re?(He&&t.texStorage2D(3553,R,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,he,le,F)):t.texImage2D(3553,0,me,he,le,F);C(x,ue)&&U(ne),Se.__version=ce.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function _e(w,x,j){if(x.image.length!==6)return;const ne=Te(w,x),se=x.source;t.bindTexture(34067,w.__webglTexture,33984+j);const ce=n.get(se);if(se.version!==ce.__version||ne===!0){t.activeTexture(33984+j),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!Se&&!A?F[W]=M(x.image[W],!1,!0,c):F[W]=A?x.image[W].image:x.image[W],F[W]=pt(x,F[W]);const ue=F[0],he=T(ue)||a,le=s.convert(x.format,x.encoding),me=s.convert(x.type),ge=v(x.internalFormat,le,me,x.encoding),Ce=a&&x.isVideoTexture!==!0,Re=ce.__version===void 0||ne===!0;let He=E(x,ue,he);H(34067,x,he);let R;if(Se){Ce&&Re&&t.texStorage2D(34067,He,ge,ue.width,ue.height);for(let W=0;W<6;W++){R=F[W].mipmaps;for(let Q=0;Q<R.length;Q++){const de=R[Q];x.format!==jt?le!==null?Ce?t.compressedTexSubImage2D(34069+W,Q,0,0,de.width,de.height,le,de.data):t.compressedTexImage2D(34069+W,Q,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+W,Q,0,0,de.width,de.height,le,me,de.data):t.texImage2D(34069+W,Q,ge,de.width,de.height,0,le,me,de.data)}}}else{R=x.mipmaps,Ce&&Re&&(R.length>0&&He++,t.texStorage2D(34067,He,ge,F[0].width,F[0].height));for(let W=0;W<6;W++)if(A){Ce?t.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,le,me,F[W].data):t.texImage2D(34069+W,0,ge,F[W].width,F[W].height,0,le,me,F[W].data);for(let Q=0;Q<R.length;Q++){const ve=R[Q].image[W].image;Ce?t.texSubImage2D(34069+W,Q+1,0,0,ve.width,ve.height,le,me,ve.data):t.texImage2D(34069+W,Q+1,ge,ve.width,ve.height,0,le,me,ve.data)}}else{Ce?t.texSubImage2D(34069+W,0,0,0,le,me,F[W]):t.texImage2D(34069+W,0,ge,le,me,F[W]);for(let Q=0;Q<R.length;Q++){const de=R[Q];Ce?t.texSubImage2D(34069+W,Q+1,0,0,le,me,de.image[W]):t.texImage2D(34069+W,Q+1,ge,le,me,de.image[W])}}}C(x,he)&&U(34067),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function fe(w,x,j,ne,se){const ce=s.convert(j.format,j.encoding),Se=s.convert(j.type),A=v(j.internalFormat,ce,Se,j.encoding);n.get(x).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,A,x.width,x.height,x.depth,0,ce,Se,null):t.texImage2D(se,0,A,x.width,x.height,0,ce,Se,null)),t.bindFramebuffer(36160,w),Ie(x)?d.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(j).__webglTexture,0,Ye(x)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ne,se,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(w,x,j){if(r.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let ne=33189;if(j||Ie(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===Cn?ne=36012:se.type===An&&(ne=33190));const ce=Ye(x);Ie(x)?d.renderbufferStorageMultisampleEXT(36161,ce,ne,x.width,x.height):r.renderbufferStorageMultisample(36161,ce,ne,x.width,x.height)}else r.renderbufferStorage(36161,ne,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const ne=Ye(x);j&&Ie(x)===!1?r.renderbufferStorageMultisample(36161,ne,35056,x.width,x.height):Ie(x)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<ne.length;se++){const ce=ne[se],Se=s.convert(ce.format,ce.encoding),A=s.convert(ce.type),F=v(ce.internalFormat,Se,A,ce.encoding),ue=Ye(x);j&&Ie(x)===!1?r.renderbufferStorageMultisample(36161,ue,F,x.width,x.height):Ie(x)?d.renderbufferStorageMultisampleEXT(36161,ue,F,x.width,x.height):r.renderbufferStorage(36161,F,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function Ee(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const ne=n.get(x.depthTexture).__webglTexture,se=Ye(x);if(x.depthTexture.format===Pn)Ie(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(x.depthTexture.format===fi)Ie(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Me(w){const x=n.get(w),j=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,w)}else if(j){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=r.createRenderbuffer(),Ue(x.__webglDepthbuffer[ne],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Ue(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ke(w,x,j){const ne=n.get(w);x!==void 0&&fe(ne.__webglFramebuffer,w,w.texture,36064,3553),j!==void 0&&Me(w)}function tt(w){const x=w.texture,j=n.get(w),ne=n.get(x);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=x.version,o.memory.textures++);const se=w.isWebGLCubeRenderTarget===!0,ce=w.isWebGLMultipleRenderTargets===!0,Se=T(w)||a;if(se){j.__webglFramebuffer=[];for(let A=0;A<6;A++)j.__webglFramebuffer[A]=r.createFramebuffer()}else{if(j.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const A=w.texture;for(let F=0,ue=A.length;F<ue;F++){const he=n.get(A[F]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ie(w)===!1){const A=ce?x:[x];j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ue=A[F];j.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,j.__webglColorRenderbuffer[F]);const he=s.convert(ue.format,ue.encoding),le=s.convert(ue.type),me=v(ue.internalFormat,he,le,ue.encoding,w.isXRRenderTarget===!0),ge=Ye(w);r.renderbufferStorageMultisample(36161,ge,me,w.width,w.height),r.framebufferRenderbuffer(36160,36064+F,36161,j.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(j.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),H(34067,x,Se);for(let A=0;A<6;A++)fe(j.__webglFramebuffer[A],w,x,36064,34069+A);C(x,Se)&&U(34067),t.unbindTexture()}else if(ce){const A=w.texture;for(let F=0,ue=A.length;F<ue;F++){const he=A[F],le=n.get(he);t.bindTexture(3553,le.__webglTexture),H(3553,he,Se),fe(j.__webglFramebuffer,w,he,36064+F,3553),C(he,Se)&&U(3553)}t.unbindTexture()}else{let A=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?A=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),H(A,x,Se),fe(j.__webglFramebuffer,w,x,36064,A),C(x,Se)&&U(A),t.unbindTexture()}w.depthBuffer&&Me(w)}function $e(w){const x=T(w)||a,j=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,se=j.length;ne<se;ne++){const ce=j[ne];if(C(ce,x)){const Se=w.isWebGLCubeRenderTarget?34067:3553,A=n.get(ce).__webglTexture;t.bindTexture(Se,A),U(Se),t.unbindTexture()}}}function ot(w){if(a&&w.samples>0&&Ie(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],j=w.width,ne=w.height;let se=16384;const ce=[],Se=w.stencilBuffer?33306:36096,A=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){ce.push(36064+ue),w.depthBuffer&&ce.push(Se);const he=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(he===!1&&(w.depthBuffer&&(se|=256),w.stencilBuffer&&(se|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ue]),he===!0&&(r.invalidateFramebuffer(36008,[Se]),r.invalidateFramebuffer(36009,[Se])),F){const le=n.get(x[ue]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,le,0)}r.blitFramebuffer(0,0,j,ne,0,0,j,ne,se,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,A.__webglColorRenderbuffer[ue]);const he=n.get(x[ue]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,he,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ye(w){return Math.min(h,w.samples)}function Ie(w){const x=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(w){const x=o.render.frame;g.get(w)!==x&&(g.set(w,x),w.update())}function pt(w,x){const j=w.encoding,ne=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Cr||j!==In&&(j===qe?a===!1?e.has("EXT_sRGB")===!0&&ne===jt?(w.format=Cr,w.minFilter=Mt,w.generateMipmaps=!1):x=Go.sRGBToLinear(x):(ne!==jt||se!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=ee,this.setTexture2D=ie,this.setTexture2DArray=pe,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Ke,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ie}function lp(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Dn)return 5121;if(s===Jl)return 32819;if(s===Ql)return 32820;if(s===$l)return 5120;if(s===Zl)return 5122;if(s===Uo)return 5123;if(s===Kl)return 5124;if(s===An)return 5125;if(s===Cn)return 5126;if(s===Oi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ec)return 6406;if(s===jt)return 6408;if(s===tc)return 6409;if(s===nc)return 6410;if(s===Pn)return 6402;if(s===fi)return 34041;if(s===Cr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ic)return 6403;if(s===sc)return 36244;if(s===rc)return 33319;if(s===ac)return 33320;if(s===oc)return 36249;if(s===Is||s===Fs||s===Os||s===Ns)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Is)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Is)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ra||s===aa||s===oa||s===la)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===la)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ca||s===ua)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ca)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ua)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ha||s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===xa||s===va||s===ya||s===ba||s===Ma||s===Sa||s===wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ha)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===da)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ma)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ga)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_a)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===va)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ya)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ba)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ma)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Us)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Us)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===cc||s===Ta||s===Ea||s===Aa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Us)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ta)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Aa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class cp extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),_=this._getHandJoint(c,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hp extends at{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Pn,u!==Pn&&u!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pn&&(n=An),n===void 0&&u===fi&&(n=oi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}class dp extends zn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const p=t.getContextAttributes();let f=null,_=null;const S=[],M=[],T=new Set,y=new Map,C=new kt;C.layers.enable(1),C.viewport=new _t;const U=new kt;U.layers.enable(2),U.viewport=new _t;const v=[C,U],E=new cp;E.layers.enable(1),E.layers.enable(2);let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=S[G];return Z===void 0&&(Z=new ur,S[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=S[G];return Z===void 0&&(Z=new ur,S[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=S[G];return Z===void 0&&(Z=new ur,S[G]=Z),Z.getHandSpace()};function $(G){const Z=M.indexOf(G.inputSource);if(Z===-1)return;const re=S[Z];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function z(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",D);for(let G=0;G<S.length;G++){const Z=M[G];Z!==null&&(M[G]=null,S[G].disconnect(Z))}N=null,K=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,_=null,pe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",z),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),_=new Fn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:Dn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,re=null,ae=null;p.depth&&(ae=p.stencil?35056:33190,Z=p.stencil?fi:Pn,re=p.stencil?oi:An);const H={colorFormat:32856,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(H),i.updateRenderState({layers:[d]}),_=new Fn(d.textureWidth,d.textureHeight,{format:jt,type:Dn,depthTexture:new hp(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Te=e.properties.get(_);Te.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(G){for(let Z=0;Z<G.removed.length;Z++){const re=G.removed[Z],ae=M.indexOf(re);ae>=0&&(M[ae]=null,S[ae].disconnect(re))}for(let Z=0;Z<G.added.length;Z++){const re=G.added[Z];let ae=M.indexOf(re);if(ae===-1){for(let Te=0;Te<S.length;Te++)if(Te>=M.length){M.push(re),ae=Te;break}else if(M[Te]===null){M[Te]=re,ae=Te;break}if(ae===-1)break}const H=S[ae];H&&H.connect(re)}}const q=new P,J=new P;function ee(G,Z,re){q.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const ae=q.distanceTo(J),H=Z.projectionMatrix.elements,Te=re.projectionMatrix.elements,ye=H[14]/(H[10]-1),_e=H[14]/(H[10]+1),fe=(H[9]+1)/H[5],Ue=(H[9]-1)/H[5],Ee=(H[8]-1)/H[0],Me=(Te[8]+1)/Te[0],Ke=ye*Ee,tt=ye*Me,$e=ae/(-Ee+Me),ot=$e*-Ee;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ot),G.translateZ($e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ye=ye+$e,Ie=_e+$e,wt=Ke-ot,pt=tt+(ae-ot),w=fe*_e/Ie*Ye,x=Ue*_e/Ie*Ye;G.projectionMatrix.makePerspective(wt,pt,w,x,Ye,Ie)}function Y(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;E.near=U.near=C.near=G.near,E.far=U.far=C.far=G.far,(N!==E.near||K!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,K=E.far);const Z=G.parent,re=E.cameras;Y(E,Z);for(let H=0;H<re.length;H++)Y(re[H],Z);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),G.matrix.copy(E.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const ae=G.children;for(let H=0,Te=ae.length;H<Te;H++)ae[H].updateMatrixWorld(!0);re.length===2?ee(E,C,U):E.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return T};let te=null;function ie(G,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ae=!1;re.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let H=0;H<re.length;H++){const Te=re[H];let ye=null;if(m!==null)ye=m.getViewport(Te);else{const fe=h.getViewSubImage(d,Te);ye=fe.viewport,H===0&&(e.setRenderTargetTextures(_,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(_))}let _e=v[H];_e===void 0&&(_e=new kt,_e.layers.enable(H),_e.viewport=new _t,v[H]=_e),_e.matrix.fromArray(Te.transform.matrix),_e.projectionMatrix.fromArray(Te.projectionMatrix),_e.viewport.set(ye.x,ye.y,ye.width,ye.height),H===0&&E.matrix.copy(_e.matrix),ae===!0&&E.cameras.push(_e)}}for(let re=0;re<S.length;re++){const ae=M[re],H=S[re];ae!==null&&H!==void 0&&H.update(ae,Z,c||o)}if(te&&te(G,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const ae of T)Z.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)T.delete(ae),y.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of Z.detectedPlanes)if(!T.has(ae))T.add(ae),y.set(ae,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const H=y.get(ae);ae.lastChangedTime>H&&(y.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}g=null}const pe=new Zo;pe.setAnimationLoop(ie),this.setAnimationLoop=function(G){te=G},this.dispose=function(){}}}function fp(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,Xo(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,_,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===vt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===vt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const T=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*T}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===vt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function pp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(S,M){const T=M.program;n.uniformBlockBinding(S,T)}function c(S,M){let T=i[S.id];T===void 0&&(g(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",f));const y=M.program;n.updateUBOMapping(S,y);const C=e.render.frame;s[S.id]!==C&&(d(S),s[S.id]=C)}function u(S){const M=h();S.__bindingPointIndex=M;const T=r.createBuffer(),y=S.__size,C=S.usage;return r.bindBuffer(35345,T),r.bufferData(35345,y,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,T),T}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],T=S.uniforms,y=S.__cache;r.bindBuffer(35345,M);for(let C=0,U=T.length;C<U;C++){const v=T[C];if(m(v,C,y)===!0){const E=v.__offset,N=Array.isArray(v.value)?v.value:[v.value];let K=0;for(let $=0;$<N.length;$++){const z=N[$],D=p(z);typeof z=="number"?(v.__data[0]=z,r.bufferSubData(35345,E+K,v.__data)):z.isMatrix3?(v.__data[0]=z.elements[0],v.__data[1]=z.elements[1],v.__data[2]=z.elements[2],v.__data[3]=z.elements[0],v.__data[4]=z.elements[3],v.__data[5]=z.elements[4],v.__data[6]=z.elements[5],v.__data[7]=z.elements[0],v.__data[8]=z.elements[6],v.__data[9]=z.elements[7],v.__data[10]=z.elements[8],v.__data[11]=z.elements[0]):(z.toArray(v.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,v.__data)}}r.bindBuffer(35345,null)}function m(S,M,T){const y=S.value;if(T[M]===void 0){if(typeof y=="number")T[M]=y;else{const C=Array.isArray(y)?y:[y],U=[];for(let v=0;v<C.length;v++)U.push(C[v].clone());T[M]=U}return!0}else if(typeof y=="number"){if(T[M]!==y)return T[M]=y,!0}else{const C=Array.isArray(T[M])?T[M]:[T[M]],U=Array.isArray(y)?y:[y];for(let v=0;v<C.length;v++){const E=C[v];if(E.equals(U[v])===!1)return E.copy(U[v]),!0}}return!1}function g(S){const M=S.uniforms;let T=0;const y=16;let C=0;for(let U=0,v=M.length;U<v;U++){const E=M[U],N={boundary:0,storage:0},K=Array.isArray(E.value)?E.value:[E.value];for(let $=0,z=K.length;$<z;$++){const D=K[$],q=p(D);N.boundary+=q.boundary,N.storage+=q.storage}if(E.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,U>0){C=T%y;const $=y-C;C!==0&&$-N.boundary<0&&(T+=y-C,E.__offset=T)}T+=N.storage}return C=T%y,C>0&&(T+=y-C),S.__size=T,S.__cache={},this}function p(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function f(S){const M=S.target;M.removeEventListener("dispose",f);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function mp(){const r=Ui("canvas");return r.style.display="block",r}function nl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:mp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=In,this.physicallyCorrectLights=!1,this.toneMapping=Qt,this.toneMappingExposure=1;const p=this;let f=!1,_=0,S=0,M=null,T=-1,y=null;const C=new _t,U=new _t;let v=null,E=e.width,N=e.height,K=1,$=null,z=null;const D=new _t(0,0,E,N),q=new _t(0,0,E,N);let J=!1;const ee=new kr;let Y=!1,te=!1,ie=null;const pe=new ht,G=new Le,Z=new P,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?K:1}let H=t;function Te(b,k){for(let V=0;V<b.length;V++){const O=b[V],X=e.getContext(O,k);if(X!==null)return X}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ur}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),H=Te(k,b),H===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,_e,fe,Ue,Ee,Me,Ke,tt,$e,ot,Ye,Ie,wt,pt,w,x,j,ne,se,ce,Se,A,F,ue;function he(){ye=new Td(H),_e=new vd(H,ye,r),ye.init(_e),A=new lp(H,ye,_e),fe=new ap(H,ye,_e),Ue=new Cd,Ee=new qf,Me=new op(H,ye,fe,Ee,_e,A,Ue),Ke=new bd(p),tt=new wd(p),$e=new Uc(H,_e),F=new _d(H,ye,$e,_e),ot=new Ed(H,$e,Ue,F),Ye=new Dd(H,ot,$e,Ue),se=new Rd(H,_e,Me),x=new yd(Ee),Ie=new jf(p,Ke,tt,ye,_e,F,x),wt=new fp(p,Ee),pt=new Yf,w=new ep(ye,_e),ne=new gd(p,Ke,tt,fe,Ye,u,o),j=new rp(p,Ye,_e),ue=new pp(H,Ue,_e,fe),ce=new xd(H,ye,Ue,_e),Se=new Ad(H,ye,Ue,_e),Ue.programs=Ie.programs,p.capabilities=_e,p.extensions=ye,p.properties=Ee,p.renderLists=pt,p.shadowMap=j,p.state=fe,p.info=Ue}he();const le=new dp(p,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(E,N,!1))},this.getSize=function(b){return b.set(E,N)},this.setSize=function(b,k,V){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=b,N=k,e.width=Math.floor(b*K),e.height=Math.floor(k*K),V!==!1&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(E*K,N*K).floor()},this.setDrawingBufferSize=function(b,k,V){E=b,N=k,K=V,e.width=Math.floor(b*V),e.height=Math.floor(k*V),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,k,V,O){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,k,V,O),fe.viewport(C.copy(D).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(q)},this.setScissor=function(b,k,V,O){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,V,O),fe.scissor(U.copy(q).multiplyScalar(K).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){fe.setScissorTest(J=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,k=!0,V=!0){let O=0;b&&(O|=16384),k&&(O|=256),V&&(O|=1024),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),pt.dispose(),w.dispose(),Ee.dispose(),Ke.dispose(),tt.dispose(),Ye.dispose(),F.dispose(),ue.dispose(),Ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",de),le.removeEventListener("sessionend",ve),ie&&(ie.dispose(),ie=null),Ve.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Ue.autoReset,k=j.enabled,V=j.autoUpdate,O=j.needsUpdate,X=j.type;he(),Ue.autoReset=b,j.enabled=k,j.autoUpdate=V,j.needsUpdate=O,j.type=X}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const k=b.target;k.removeEventListener("dispose",Re),He(k)}function He(b){R(b),Ee.remove(b)}function R(b){const k=Ee.get(b).programs;k!==void 0&&(k.forEach(function(V){Ie.releaseProgram(V)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,V,O,X,be){k===null&&(k=re);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,Fe=Ne(b,k,V,O,X);fe.setMaterial(O,Ae);let Oe=V.index,We=1;O.wireframe===!0&&(Oe=ot.getWireframeAttribute(V),We=2);const ze=V.drawRange,ke=V.attributes.position;let it=ze.start*We,Lt=(ze.start+ze.count)*We;be!==null&&(it=Math.max(it,be.start*We),Lt=Math.min(Lt,(be.start+be.count)*We)),Oe!==null?(it=Math.max(it,0),Lt=Math.min(Lt,Oe.count)):ke!=null&&(it=Math.max(it,0),Lt=Math.min(Lt,ke.count));const en=Lt-it;if(en<0||en===1/0)return;F.setup(X,O,Fe,V,Oe);let _n,st=ce;if(Oe!==null&&(_n=$e.get(Oe),st=Se,st.setIndex(_n)),X.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*ae()),st.setMode(1)):st.setMode(4);else if(X.isLine){let Be=O.linewidth;Be===void 0&&(Be=1),fe.setLineWidth(Be*ae()),X.isLineSegments?st.setMode(1):X.isLineLoop?st.setMode(2):st.setMode(3)}else X.isPoints?st.setMode(0):X.isSprite&&st.setMode(4);if(X.isInstancedMesh)st.renderInstances(it,en,X.count);else if(V.isInstancedBufferGeometry){const Be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Cs=Math.min(V.instanceCount,Be);st.renderInstances(it,en,Cs)}else st.render(it,en)},this.compile=function(b,k){function V(O,X,be){O.transparent===!0&&O.side===Jt&&O.forceSinglePass===!1?(O.side=vt,O.needsUpdate=!0,B(O,X,be),O.side=ln,O.needsUpdate=!0,B(O,X,be),O.side=Jt):B(O,X,be)}d=w.get(b),d.init(),g.push(d),b.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(O){const X=O.material;if(X)if(Array.isArray(X))for(let be=0;be<X.length;be++){const Ae=X[be];V(Ae,b,O)}else V(X,b,O)}),g.pop(),d=null};let W=null;function Q(b){W&&W(b)}function de(){Ve.stop()}function ve(){Ve.start()}const Ve=new Zo;Ve.setAnimationLoop(Q),typeof self!="undefined"&&Ve.setContext(self),this.setAnimationLoop=function(b){W=b,le.setAnimationLoop(b),b===null?Ve.stop():Ve.start()},le.addEventListener("sessionstart",de),le.addEventListener("sessionend",ve),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,k,M),d=w.get(b,g.length),d.init(),g.push(d),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(pe),te=this.localClippingEnabled,Y=x.init(this.clippingPlanes,te),h=pt.get(b,m.length),h.init(),m.push(h),Ze(b,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort($,z),Y===!0&&x.beginShadows();const V=d.state.shadowsArray;if(j.render(V,b,k),Y===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,b),d.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const O=k.cameras;for(let X=0,be=O.length;X<be;X++){const Ae=O[X];nt(h,b,Ae,Ae.viewport)}}else nt(h,b,k);M!==null&&(Me.updateMultisampleRenderTarget(M),Me.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(p,b,k),F.resetDefaultState(),T=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ze(b,k,V,O){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){O&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Ae=Ye.update(b),Fe=b.material;Fe.visible&&h.push(b,Ae,Fe,V,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ue.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ue.render.frame),!b.frustumCulled||ee.intersectsObject(b))){O&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Ae=Ye.update(b),Fe=b.material;if(Array.isArray(Fe)){const Oe=Ae.groups;for(let We=0,ze=Oe.length;We<ze;We++){const ke=Oe[We],it=Fe[ke.materialIndex];it&&it.visible&&h.push(b,Ae,it,V,Z.z,ke)}}else Fe.visible&&h.push(b,Ae,Fe,V,Z.z,null)}}const be=b.children;for(let Ae=0,Fe=be.length;Ae<Fe;Ae++)Ze(be[Ae],k,V,O)}function nt(b,k,V,O){const X=b.opaque,be=b.transmissive,Ae=b.transparent;d.setupLightsView(V),Y===!0&&x.setGlobalState(p.clippingPlanes,V),be.length>0&&Xt(X,k,V),O&&fe.viewport(C.copy(O)),X.length>0&&Xe(X,k,V),be.length>0&&Xe(be,k,V),Ae.length>0&&Xe(Ae,k,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Xt(b,k,V){const O=_e.isWebGL2;ie===null&&(ie=new Fn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Oi:Dn,minFilter:Fi,samples:O&&s===!0?4:0})),p.getDrawingBufferSize(G),O?ie.setSize(G.x,G.y):ie.setSize(Lr(G.x),Lr(G.y));const X=p.getRenderTarget();p.setRenderTarget(ie),p.clear();const be=p.toneMapping;p.toneMapping=Qt,Xe(b,k,V),p.toneMapping=be,Me.updateMultisampleRenderTarget(ie),Me.updateRenderTargetMipmap(ie),p.setRenderTarget(X)}function Xe(b,k,V){const O=k.isScene===!0?k.overrideMaterial:null;for(let X=0,be=b.length;X<be;X++){const Ae=b[X],Fe=Ae.object,Oe=Ae.geometry,We=O===null?Ae.material:O,ze=Ae.group;Fe.layers.test(V.layers)&&L(Fe,k,V,Oe,We,ze)}}function L(b,k,V,O,X,be){b.onBeforeRender(p,k,V,O,X,be),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(p,k,V,O,b,be),X.transparent===!0&&X.side===Jt&&X.forceSinglePass===!1?(X.side=vt,X.needsUpdate=!0,p.renderBufferDirect(V,k,O,X,b,be),X.side=ln,X.needsUpdate=!0,p.renderBufferDirect(V,k,O,X,b,be),X.side=Jt):p.renderBufferDirect(V,k,O,X,b,be),b.onAfterRender(p,k,V,O,X,be)}function B(b,k,V){k.isScene!==!0&&(k=re);const O=Ee.get(b),X=d.state.lights,be=d.state.shadowsArray,Ae=X.state.version,Fe=Ie.getParameters(b,X.state,be,k,V),Oe=Ie.getProgramCacheKey(Fe);let We=O.programs;O.environment=b.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(b.isMeshStandardMaterial?tt:Ke).get(b.envMap||O.environment),We===void 0&&(b.addEventListener("dispose",Re),We=new Map,O.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===Ae)return xe(b,Fe),ze}else Fe.uniforms=Ie.getUniforms(b),b.onBuild(V,Fe,p),b.onBeforeCompile(Fe,p),ze=Ie.acquireProgram(Fe,Oe),We.set(Oe,ze),O.uniforms=Fe.uniforms;const ke=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=x.uniform),xe(b,Fe),O.needsLights=lt(b),O.lightsStateVersion=Ae,O.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix);const it=ze.getUniforms(),Lt=_s.seqWithValue(it.seq,ke);return O.currentProgram=ze,O.uniformsList=Lt,ze}function xe(b,k){const V=Ee.get(b);V.outputEncoding=k.outputEncoding,V.instancing=k.instancing,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Ne(b,k,V,O,X){k.isScene!==!0&&(k=re),Me.resetTextureUnits();const be=k.fog,Ae=O.isMeshStandardMaterial?k.environment:null,Fe=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:In,Oe=(O.isMeshStandardMaterial?tt:Ke).get(O.envMap||Ae),We=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!O.normalMap&&!!V.attributes.tangent,ke=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,Lt=!!V.morphAttributes.color,en=O.toneMapped?p.toneMapping:Qt,_n=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=_n!==void 0?_n.length:0,Be=Ee.get(O),Cs=d.state.lights;if(Y===!0&&(te===!0||b!==y)){const Pt=b===y&&O.id===T;x.setState(O,b,Pt)}let mt=!1;O.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Cs.state.version||Be.outputEncoding!==Fe||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Oe||O.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==x.numPlanes||Be.numIntersection!==x.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==ze||Be.morphTargets!==ke||Be.morphNormals!==it||Be.morphColors!==Lt||Be.toneMapping!==en||_e.isWebGL2===!0&&Be.morphTargetsCount!==st)&&(mt=!0):(mt=!0,Be.__version=O.version);let xn=Be.currentProgram;mt===!0&&(xn=B(O,k,X));let Zr=!1,vi=!1,Ls=!1;const Tt=xn.getUniforms(),vn=Be.uniforms;if(fe.useProgram(xn.program)&&(Zr=!0,vi=!0,Ls=!0),O.id!==T&&(T=O.id,vi=!0),Zr||y!==b){if(Tt.setValue(H,"projectionMatrix",b.projectionMatrix),_e.logarithmicDepthBuffer&&Tt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,vi=!0,Ls=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Pt=Tt.map.cameraPosition;Pt!==void 0&&Pt.setValue(H,Z.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Tt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||X.isSkinnedMesh)&&Tt.setValue(H,"viewMatrix",b.matrixWorldInverse)}if(X.isSkinnedMesh){Tt.setOptional(H,X,"bindMatrix"),Tt.setOptional(H,X,"bindMatrixInverse");const Pt=X.skeleton;Pt&&(_e.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),Tt.setValue(H,"boneTexture",Pt.boneTexture,Me),Tt.setValue(H,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=V.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&_e.isWebGL2===!0)&&se.update(X,V,O,xn),(vi||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,Tt.setValue(H,"receiveShadow",X.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vn.envMap.value=Oe,vn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),vi&&(Tt.setValue(H,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&je(vn,Ls),be&&O.fog===!0&&wt.refreshFogUniforms(vn,be),wt.refreshMaterialUniforms(vn,O,K,N,ie),_s.upload(H,Be.uniformsList,vn,Me)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_s.upload(H,Be.uniformsList,vn,Me),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Tt.setValue(H,"center",X.center),Tt.setValue(H,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(H,"normalMatrix",X.normalMatrix),Tt.setValue(H,"modelMatrix",X.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Pt=O.uniformsGroups;for(let Rs=0,_l=Pt.length;Rs<_l;Rs++)if(_e.isWebGL2){const Kr=Pt[Rs];ue.update(Kr,xn),ue.bind(Kr,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function je(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function lt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,k,V){Ee.get(b.texture).__webglTexture=k,Ee.get(b.depthTexture).__webglTexture=V;const O=Ee.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const V=Ee.get(b);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,V=0){M=b,_=k,S=V;let O=!0,X=null,be=!1,Ae=!1;if(b){const Oe=Ee.get(b);Oe.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),O=!1):Oe.__webglFramebuffer===void 0?Me.setupRenderTarget(b):Oe.__hasExternalTextures&&Me.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const ze=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(X=ze[k],be=!0):_e.isWebGL2&&b.samples>0&&Me.useMultisampledRTT(b)===!1?X=Ee.get(b).__webglMultisampledFramebuffer:X=ze,C.copy(b.viewport),U.copy(b.scissor),v=b.scissorTest}else C.copy(D).multiplyScalar(K).floor(),U.copy(q).multiplyScalar(K).floor(),v=J;if(fe.bindFramebuffer(36160,X)&&_e.drawBuffers&&O&&fe.drawBuffers(b,X),fe.viewport(C),fe.scissor(U),fe.setScissorTest(v),be){const Oe=Ee.get(b.texture);H.framebufferTexture2D(36160,36064,34069+k,Oe.__webglTexture,V)}else if(Ae){const Oe=Ee.get(b.texture),We=k||0;H.framebufferTextureLayer(36160,36064,Oe.__webglTexture,V||0,We)}T=-1},this.readRenderTargetPixels=function(b,k,V,O,X,be,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){fe.bindFramebuffer(36160,Fe);try{const Oe=b.texture,We=Oe.format,ze=Oe.type;if(We!==jt&&A.convert(We)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===Oi&&(ye.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ze!==Dn&&A.convert(ze)!==H.getParameter(35738)&&!(ze===Cn&&(_e.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-O&&V>=0&&V<=b.height-X&&H.readPixels(k,V,O,X,A.convert(We),A.convert(ze),be)}finally{const Oe=M!==null?Ee.get(M).__webglFramebuffer:null;fe.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(b,k,V=0){const O=Math.pow(2,-V),X=Math.floor(k.image.width*O),be=Math.floor(k.image.height*O);Me.setTexture2D(k,0),H.copyTexSubImage2D(3553,V,0,0,b.x,b.y,X,be),fe.unbindTexture()},this.copyTextureToTexture=function(b,k,V,O=0){const X=k.image.width,be=k.image.height,Ae=A.convert(V.format),Fe=A.convert(V.type);Me.setTexture2D(V,0),H.pixelStorei(37440,V.flipY),H.pixelStorei(37441,V.premultiplyAlpha),H.pixelStorei(3317,V.unpackAlignment),k.isDataTexture?H.texSubImage2D(3553,O,b.x,b.y,X,be,Ae,Fe,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(3553,O,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Ae,k.mipmaps[0].data):H.texSubImage2D(3553,O,b.x,b.y,Ae,Fe,k.image),O===0&&V.generateMipmaps&&H.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(b,k,V,O,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Fe=b.max.z-b.min.z+1,Oe=A.convert(O.format),We=A.convert(O.type);let ze;if(O.isData3DTexture)Me.setTexture3D(O,0),ze=32879;else if(O.isDataArrayTexture)Me.setTexture2DArray(O,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment);const ke=H.getParameter(3314),it=H.getParameter(32878),Lt=H.getParameter(3316),en=H.getParameter(3315),_n=H.getParameter(32877),st=V.isCompressedTexture?V.mipmaps[0]:V.image;H.pixelStorei(3314,st.width),H.pixelStorei(32878,st.height),H.pixelStorei(3316,b.min.x),H.pixelStorei(3315,b.min.y),H.pixelStorei(32877,b.min.z),V.isDataTexture||V.isData3DTexture?H.texSubImage3D(ze,X,k.x,k.y,k.z,be,Ae,Fe,Oe,We,st.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ze,X,k.x,k.y,k.z,be,Ae,Fe,Oe,st.data)):H.texSubImage3D(ze,X,k.x,k.y,k.z,be,Ae,Fe,Oe,We,st),H.pixelStorei(3314,ke),H.pixelStorei(32878,it),H.pixelStorei(3316,Lt),H.pixelStorei(3315,en),H.pixelStorei(32877,_n),X===0&&O.generateMipmaps&&H.generateMipmap(ze),fe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Me.setTextureCube(b,0):b.isData3DTexture?Me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Me.setTexture2DArray(b,0):Me.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){_=0,S=0,M=null,fe.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class gp extends nl{}gp.prototype.isWebGL1Renderer=!0;class Gr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Gr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class _p extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xp extends at{constructor(e=null,t=1,n=1,i,s,o,a,l,c=xt,u=xt,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vp extends at{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Mt,this.magFilter=s!==void 0?s:Mt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class yp extends at{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hr extends Nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new P,u=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const m=n+h/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}static fromJSON(e){return new Hr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mn extends Nt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],m=[];let g=0;const p=[],f=n/2;let _=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(m,2));function S(){const T=new P,y=new P;let C=0;const U=(t-e)/n;for(let v=0;v<=s;v++){const E=[],N=v/s,K=N*(t-e)+e;for(let $=0;$<=i;$++){const z=$/i,D=z*l+a,q=Math.sin(D),J=Math.cos(D);y.x=K*q,y.y=-N*n+f,y.z=K*J,h.push(y.x,y.y,y.z),T.set(q,U,J).normalize(),d.push(T.x,T.y,T.z),m.push(z,1-N),E.push(g++)}p.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){const N=p[E][v],K=p[E+1][v],$=p[E+1][v+1],z=p[E][v+1];u.push(N,K,z),u.push(K,$,z),C+=6}c.addGroup(_,C,0),_+=C}function M(T){const y=g,C=new Le,U=new P;let v=0;const E=T===!0?e:t,N=T===!0?1:-1;for(let $=1;$<=i;$++)h.push(0,f*N,0),d.push(0,N,0),m.push(.5,.5),g++;const K=g;for(let $=0;$<=i;$++){const D=$/i*l+a,q=Math.cos(D),J=Math.sin(D);U.x=E*J,U.y=f*N,U.z=E*q,h.push(U.x,U.y,U.z),d.push(0,N,0),C.x=q*.5+.5,C.y=J*.5*N+.5,m.push(C.x,C.y),g++}for(let $=0;$<i;$++){const z=y+$,D=K+$;T===!0?u.push(D,D+1,z):u.push(D+1,D,z),v+=3}c.addGroup(_,v,T===!0?1:2),_+=v}}static fromJSON(e){return new mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Nt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,m=new P,g=new Le;for(let p=0;p<=i;p++){for(let f=0;f<=n;f++){const _=s+f/n*o;m.x=h*Math.cos(_),m.y=h*Math.sin(_),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let p=0;p<i;p++){const f=p*(n+1);for(let _=0;_<n;_++){const S=_+f,M=S,T=S+n+1,y=S+n+2,C=S+1;a.push(M,T,C),a.push(T,y,C)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}static fromJSON(e){return new Vr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ts extends Nt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const S=[],M=_/n;let T=0;_==0&&o==0?T=.5/t:_==n&&l==Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){const C=y/t;h.x=-e*Math.cos(i+C*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+C*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(C+T,1-M),S.push(c++)}u.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){const M=u[_][S+1],T=u[_][S],y=u[_+1][S],C=u[_+1][S+1];(_!==0||o>0)&&m.push(M,T,C),(_!==n-1||l<Math.PI)&&m.push(T,y,C)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(f,2))}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wr extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const co={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Mp=new bp;class il{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class sl extends il{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=co.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ui("img");function l(){u(),co.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Sp extends il{constructor(e){super(e)}load(e,t,n,i){const s=new at,o=new sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class jr extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ai extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hr=new ht,uo=new P,ho=new P;class wp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(uo),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tp extends wp{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ni extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Tp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ii extends jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fo(){return(typeof performance=="undefined"?Date:performance).now()}class po{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ur}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ur);const mo={type:"change"},dr={type:"start"},go={type:"end"};class Ap extends zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",pt),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(mo),n.update(),s=i.NONE},this.update=function(){const A=new P,F=new On().setFromUnitVectors(e.up,new P(0,1,0)),ue=F.clone().invert(),he=new P,le=new On,me=2*Math.PI;return function(){const Ce=n.object.position;A.copy(Ce).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&E(U()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Re=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(He)&&(Re<-Math.PI?Re+=me:Re>Math.PI&&(Re-=me),He<-Math.PI?He+=me:He>Math.PI&&(He-=me),Re<=He?a.theta=Math.max(Re,Math.min(He,a.theta)):a.theta=a.theta>(Re+He)/2?Math.max(Re,a.theta):Math.min(He,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(ue),Ce.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||he.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o?(n.dispatchEvent(mo),he.copy(n.object.position),le.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",ot),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",$e),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",pt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new po,l=new po;let c=1;const u=new P;let h=!1;const d=new Le,m=new Le,g=new Le,p=new Le,f=new Le,_=new Le,S=new Le,M=new Le,T=new Le,y=[],C={};function U(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(A){l.theta-=A}function N(A){l.phi-=A}const K=function(){const A=new P;return function(ue,he){A.setFromMatrixColumn(he,0),A.multiplyScalar(-ue),u.add(A)}}(),$=function(){const A=new P;return function(ue,he){n.screenSpacePanning===!0?A.setFromMatrixColumn(he,1):(A.setFromMatrixColumn(he,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ue),u.add(A)}}(),z=function(){const A=new P;return function(ue,he){const le=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;A.copy(me).sub(n.target);let ge=A.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),K(2*ue*ge/le.clientHeight,n.object.matrix),$(2*he*ge/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(ue*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),$(he*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A){d.set(A.clientX,A.clientY)}function ee(A){S.set(A.clientX,A.clientY)}function Y(A){p.set(A.clientX,A.clientY)}function te(A){m.set(A.clientX,A.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*g.x/F.clientHeight),N(2*Math.PI*g.y/F.clientHeight),d.copy(m),n.update()}function ie(A){M.set(A.clientX,A.clientY),T.subVectors(M,S),T.y>0?D(v()):T.y<0&&q(v()),S.copy(M),n.update()}function pe(A){f.set(A.clientX,A.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(f),n.update()}function G(A){A.deltaY<0?q(v()):A.deltaY>0&&D(v()),n.update()}function Z(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function re(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);d.set(A,F)}}function ae(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);p.set(A,F)}}function H(){const A=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ue=Math.sqrt(A*A+F*F);S.set(0,ue)}function Te(){n.enableZoom&&H(),n.enablePan&&ae()}function ye(){n.enableZoom&&H(),n.enableRotate&&re()}function _e(A){if(y.length==1)m.set(A.pageX,A.pageY);else{const ue=Se(A),he=.5*(A.pageX+ue.x),le=.5*(A.pageY+ue.y);m.set(he,le)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*g.x/F.clientHeight),N(2*Math.PI*g.y/F.clientHeight),d.copy(m)}function fe(A){if(y.length===1)f.set(A.pageX,A.pageY);else{const F=Se(A),ue=.5*(A.pageX+F.x),he=.5*(A.pageY+F.y);f.set(ue,he)}_.subVectors(f,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(f)}function Ue(A){const F=Se(A),ue=A.pageX-F.x,he=A.pageY-F.y,le=Math.sqrt(ue*ue+he*he);M.set(0,le),T.set(0,Math.pow(M.y/S.y,n.zoomSpeed)),D(T.y),S.copy(M)}function Ee(A){n.enableZoom&&Ue(A),n.enablePan&&fe(A)}function Me(A){n.enableZoom&&Ue(A),n.enableRotate&&_e(A)}function Ke(A){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",$e)),ne(A),A.pointerType==="touch"?w(A):Ye(A))}function tt(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):Ie(A))}function $e(A){se(A),y.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",$e)),n.dispatchEvent(go),s=i.NONE}function ot(A){se(A)}function Ye(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Bn.DOLLY:if(n.enableZoom===!1)return;ee(A),s=i.DOLLY;break;case Bn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;Y(A),s=i.PAN}else{if(n.enableRotate===!1)return;J(A),s=i.ROTATE}break;case Bn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;J(A),s=i.ROTATE}else{if(n.enablePan===!1)return;Y(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(dr)}function Ie(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;te(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ie(A);break;case i.PAN:if(n.enablePan===!1)return;pe(A);break}}function wt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(dr),G(A),n.dispatchEvent(go))}function pt(A){n.enabled===!1||n.enablePan===!1||Z(A)}function w(A){switch(ce(A),y.length){case 1:switch(n.touches.ONE){case Gn.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case Gn.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),s=i.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(dr)}function x(A){switch(ce(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(A),n.update();break;default:s=i.NONE}}function j(A){n.enabled!==!1&&A.preventDefault()}function ne(A){y.push(A)}function se(A){delete C[A.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==A.pointerId){y.splice(F,1);return}}function ce(A){let F=C[A.pointerId];F===void 0&&(F=new Le,C[A.pointerId]=F),F.set(A.pageX,A.pageY)}function Se(A){const F=A.pointerId===y[0].pointerId?y[1]:y[0];return C[F.pointerId]}n.domElement.addEventListener("contextmenu",j),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",ot),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}const fr=1/60,rl=2,Cp=.03,Lp=1-Cp,Pp=.12,Rp=1.225,Ln={DEXTER:"dexter",SINISTER:"sinister"},Pe={TOP:"top",LEFT:"left",BOTTOM:"bottom",RIGHT:"right"},Je={VERTICAL:"vertical",HORIZONTAL:"horizontal",OUTRIGGER:"outrigger",CROSSBAR:"crossbar",GALLERY:"gallery",AUSTRALIAN:"australian"},Wt={NONE:"none",TOP_RIGHT:"topright",TOP_LEFT:"topleft"};function Dp(r,e,t){const n=r*e,i=new Uint8Array(4*n),s=Math.floor(t.r*255),o=Math.floor(t.g*255),a=Math.floor(t.b*255),l=1*255;for(let u=0;u<n;u++){const h=u*4;i[h]=s,i[h+1]=o,i[h+2]=a,i[h+3]=l}const c=new xp(i,r,e);return c.needsUpdate=!0,c}const Ip=`uniform sampler2D textureMap;
varying vec2 vUV;
out vec4 outColor;

vec4 pack_depth(const in float depth) {
    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
    const vec4 bit_mask = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
    vec4 res = fract(depth * bit_shift);
    res -= res.xxyz * bit_mask;
    return res;
}

void main() {
    vec4 pixel = texture2D(textureMap, vUV);
    if (pixel.a < 0.5) discard;
    outColor = pack_depth(gl_FragCoord.z);
}
`,Fp=`varying vec2 vUV;

void main() {
    vUV = 0.75 * uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`,_o={depth_frag:Ip,depth_vert:Fp};class Op extends Nt{constructor(e=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),t=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],s=[],o=[],a=[],l=1e-5,c=new P,u=new P,h=new P,d=new P,m=new P,g=t+1;for(let p=0;p<=n;p++){const f=p/n;for(let _=0;_<=t;_++){const S=_/t;e(S,f,u),s.push(u.x,u.y,u.z),S-l>=0?(e(S-l,f,h),d.subVectors(u,h)):(e(S+l,f,h),d.subVectors(h,u)),f-l>=0?(e(S,f-l,h),m.subVectors(u,h)):(e(S,f+l,h),m.subVectors(h,u)),c.crossVectors(d,m).normalize(),o.push(c.x,c.y,c.z),a.push(S,f)}}for(let p=0;p<n;p++)for(let f=0;f<t;f++){const _=p*g+f,S=p*g+f+1,M=(p+1)*g+f+1,T=(p+1)*g+f;i.push(_,S,T),i.push(S,M,T)}this.setIndex(i),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(a,2))}}class Np{constructor(e,t){this.position=e.clone(),this.previous=e.clone(),this.original=e.clone(),this.mass=t,this.inverseMass=1/t,this.acceleration=new P,this.tmp=new P}applyForce(e){this.acceleration.addScaledVector(e,this.inverseMass)}integrate(e){const t=this.tmp.subVectors(this.position,this.previous).multiplyScalar(Lp).add(this.position).addScaledVector(this.acceleration,e);this.tmp=this.previous,this.previous=this.position,this.position=t,this.acceleration.set(0,0,0)}}const pr=new P;class Tn{constructor(e,t,n){this.p1=e,this.p2=t,this.restDistance=n}resolve(){const e=this.p1,t=this.p2,n=this.restDistance;pr.subVectors(t.position,e.position);const i=pr.length();if(i===0)return;const s=pr.multiplyScalar((1-n/i)/2);e.position.add(s),t.position.sub(s)}}class Up{constructor(e,t,n,i){const s=n*e,o=n*t,a=[],l=[],c=(p,f)=>a[p+f*(e+1)],u=(p,f,_)=>{_.set(p*s,f*o,0)},h=new P,d=i/((t+1)*(e+1));for(let p=0;p<=t;p++)for(let f=0;f<=e;f++)u(f/e,p/t,h),a.push(new Np(h,d));for(let p=0;p<t;p++)for(let f=0;f<e;f++)l.push(new Tn(c(f,p),c(f,p+1),n)),l.push(new Tn(c(f,p),c(f+1,p),n));for(let p=e,f=0;f<t;f++)l.push(new Tn(c(p,f),c(p,f+1),n));for(let p=t,f=0;f<e;f++)l.push(new Tn(c(f,p),c(f+1,p),n));const m=Math.sqrt(n*n*2);for(let p=0;p<t;p++)for(let f=0;f<e;f++)l.push(new Tn(c(f,p),c(f+1,p+1),m)),l.push(new Tn(c(f+1,p),c(f,p+1),m));const g=new Op(u,e,t);g.getAttribute("position").setUsage(pc),this.xSegments=e,this.ySegments=t,this.restDistance=n,this.width=s,this.height=o,this.particles=a,this.constraints=l,this.particleAt=c,this.geometry=g}reset(){const e=this.particles;for(let t=0,n=e.length;t<n;t++){const i=e[t];i.previous.copy(i.position.copy(i.original))}}simulate(e){const t=this.particles,n=this.constraints,i=e*e;for(let s=0,o=t.length;s<o;s++)t[s].integrate(i);for(let s=0,o=rl;s<o;s++)for(let a=0,l=n.length;a<l;a++)n[a].resolve()}render(){const e=this.particles,t=this.geometry,n=t.getAttribute("position"),i=n.array;for(let s=0,o=e.length;s<o;s++){const a=e[s].position,l=s*3;i[l]=a.x,i[l+1]=a.y,i[l+2]=a.z}n.needsUpdate=!0,t.computeVertexNormals()}}const xo=1.2,cs=new P;class vo extends Tn{resolve(){const e=this.p1,t=this.p2,n=this.restDistance*xo;cs.subVectors(e.position,t.position);const i=cs.length()/xo;cs.normalize();const s=cs.multiplyScalar(i-n);i>n&&t.position.add(s)}}const al=Dp(1,1,new Ge(16777215));function zp(r){const{width:e,height:t,mass:n,restDistance:i}=r;return new Up(Math.max(1,Math.round(e/i)),Math.max(1,Math.round(t/i)),i,n*e*t)}function kp(r,e){const t=r.geometry;let n=al,i;const s=a=>(a.needsUpdate=!0,a.anisotropy=16,a.minFilter=Mt,a.magFilter=Mt,a.wrapS=a.wrapT=Bt,a),o=(a,l)=>{a.encoding=qe;const c=new Wr({alphaTest:.5,color:16777215,metalness:.08,roughness:.86,side:l,map:a}),u=new St(t,c);return u.castShadow=!0,u.customDepthMaterial=new cn({glslVersion:Ar,uniforms:{textureMap:{value:a}},vertexShader:_o.depth_vert,fragmentShader:_o.depth_frag}),u.position.set(0,-r.height,0),u};return e&&e.texture&&(e.texture instanceof at?(n=s(e.texture),e.backSideTexture instanceof at&&(i=s(e.backSideTexture))):console.error("FlagWaver.Flag: options.texture must be an instance of THREE.Texture.")),[o(n,i?ln:Jt),i?o(i,vt):null]}const Bp=(()=>{const r={edges:[],spacing:1};function e(t,n,i,s){const{xSegments:o,ySegments:a,particleAt:l}=t,{spacing:c}=s;switch(i){case Pe.TOP:for(let u=0;u<=o;u+=c)n.push(l(u,a));break;case Pe.LEFT:for(let u=0;u<=a;u+=c)n.push(l(0,u));break;case Pe.BOTTOM:for(let u=0;u<=o;u+=c)n.push(l(u,0));break;case Pe.RIGHT:for(let u=0;u<=a;u+=c)n.push(l(o,u));break}}return function(n,i,s){const o=Object.assign({},r,s),{edges:a}=o;if(typeof a=="string")e(n,i,a,o);else if(a&&a.length)for(let l=0,c=a.length;l<c;l++)e(n,i,a[l],o)}})(),ys=class ys{constructor(e){const t=Object.assign({},ys.defaults,e);this.cloth=zp(t),this.pins=[],this.lengthConstraints=[];const[n,i]=kp(this.cloth,t);this.mesh=n,this.mesh2=i,this.object=new Qe,this.object.add(this.mesh),this.mesh2&&this.object.add(this.mesh2),this.pin(t.pin)}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.customDepthMaterial.dispose(),this.mesh2&&(this.mesh2.material.dispose(),this.mesh2.material.map.dispose(),this.mesh2.customDepthMaterial.dispose())}pin(e){Bp(this.cloth,this.pins,e)}unpin(){this.pins=[]}setLengthConstraints(e){const{xSegments:t,ySegments:n,restDistance:i,particleAt:s}=this.cloth,o=[];if(e===Pe.LEFT)for(let a=0;a<=n;a++)for(let l=0;l<t;l++)o.push(new vo(s(l,a),s(l+1,a),i));else if(e===Pe.TOP)for(let a=0;a<=t;a++)for(let l=n;l>0;l--)o.push(new vo(s(a,l),s(a,l-1),i));this.lengthConstraints=o}reset(){this.cloth.reset()}simulate(e){const t=this.pins,n=this.lengthConstraints;this.cloth.simulate(e);for(let i=0,s=t.length;i<s;i++){const o=t[i];o.previous.copy(o.position.copy(o.original))}for(let i=0,s=rl;i<s;i++)for(let o=0,a=n.length;o<a;o++)n[o].resolve()}render(){this.cloth.render()}};Hi(ys,"defaults",{width:1.8,height:1.2,mass:.11,restDistance:1.2/10,rigidness:1,texture:al,backSideTexture:null,pin:{edges:[Pe.LEFT]}});let Nn=ys;function qr(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Nt;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let d=0;d<r.length;++d){const m=r[d].index;for(let g=0;g<m.count;++g)h.push(m.getX(g)+u);u+=r[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=yo(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const m=[];for(let p=0;p<o[u].length;++p)m.push(o[u][p][d]);const g=yo(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function yo(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const l=r[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new qt(s,t,n)}function xi(r){const e=r.poleWidth/2,t=r.poleLength,n=32,i=r.poleCapSize/2,s=new mn(e,e,t,n);s.translate(0,r.poleLength/2,0);const o=new mn(i,i,i,n);return o.translate(0,t+i/2,0),qr([s,o])}function Gp(r){const e=xi(r),t=r.poleWidth/2,n=r.poleLength,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=r.crossbarCapSize/2,l=r.poleTopOffset,c=new mn(i,i,s,o);c.rotateZ(Math.PI/2);const u=new mn(a,a,a,o),h=u.clone(),d=n-l,m=t+i;return u.rotateZ(Math.PI/2),u.translate(-s/2,d,m),h.rotateZ(-Math.PI/2),h.translate(s/2,d,m),c.translate(0,d,m),qr([e,c,u,h])}function Hp(r){const e=xi(r),t=r.poleLength,n=r.poleCapSize/2,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=new mn(i,i,s,o);return a.rotateZ(Math.PI/2),a.translate(s/2,t+n-i,0),qr([e,a])}class gn{constructor(e){const t=Object.assign({},this.constructor.defaults,e),n=this.buildGeometry(t),i=new Wr({color:16711422,metalness:.98,roughness:.55}),s=new St(n,i);s.receiveShadow=!0,s.castShadow=!0,this.top=new P(0,t.poleLength,0),this.mesh=s,this.object=this.mesh}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose()}buildGeometry(e){return xi(e)}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top)}}Hi(gn,"defaults",(()=>{const e={};return e.flagpoleType=Je.VERTICAL,e.poleWidth=.076,e.poleLength=6,e.poleCapSize=e.poleWidth*4/3,e.crossbarWidth=e.poleWidth*2/3,e.crossbarLength=1.2,e.crossbarCapSize=e.crossbarWidth*3/2,e.poleTopOffset=.1,e})());class Vp{constructor(e){const t=Object.assign({},e),{flagpole:n,flag:i}=t;this.flagpole=n||new gn,this.flag=i||new Nn,this.flagpole.addFlag(this.flag,0),this.object=new Qe,this.object.add(this.flagpole.object),this.object.add(this.flag.object)}destroy(){this.destroyChildSubject(this.flagpole),this.destroyChildSubject(this.flag)}destroyChildSubject(e){e&&(this.object.remove(e.object),e.destroy())}reset(){this.flag.reset()}simulate(e){this.flag.simulate(e)}render(){this.flag.render()}}const Ii={blowFromLeftDirection:(r,e)=>r.set(2e3,0,1e3),rotatingDirection:(r,e)=>r.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),constantSpeed:(r,e)=>r,variableSpeed:(r,e)=>r*(1+.25*Math.cos(e/7e3))};function Wp(r){return .5*Rp*r*r}function jp(r){return r.x===0&&(r.x=.001),r.y===0&&(r.y=.001),r.z===0&&(r.z=.001),r}function qp(r){return r===0?.001:r}class ol{constructor(e){const t=Object.assign({},this.constructor.defaults,e);this.direction=t.direction,this.speed=t.speed,this.directionFn=t.directionFn,this.speedFn=t.speedFn,this.pressure=new P}update(){const e=Date.now();this.directionFn(jp(this.pressure.copy(this.direction)),e).normalize().multiplyScalar(Wp(this.speedFn(qp(this.speed),e)))}}Hi(ol,"defaults",{direction:new P(1,0,0),speed:10,directionFn:Ii.blowFromLeftDirection,speedFn:Ii.constantSpeed});class Xp extends gn{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength-t.poleTopOffset,t.poleWidth/2+t.crossbarWidth/2),this.verticalHoisting=t.verticalHoisting}buildGeometry(e){return Gp(e)}addFlag(e){switch(e.unpin(),this.verticalHoisting){case Wt.NONE:e.pin({edges:[Pe.TOP]}),e.setLengthConstraints(Pe.TOP),e.object.position.add(this.top),e.object.position.x=-e.cloth.width/2;break;case Wt.TOP_LEFT:e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.position.x=-e.cloth.height/2,e.object.rotateZ(Math.PI*3/2),e.object.rotateX(Math.PI);break;case Wt.TOP_RIGHT:default:e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.position.x=e.cloth.height/2,e.object.rotateZ(Math.PI*3/2);break}}}class Yp extends gn{buildGeometry(e){return Hp(e)}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT,Pe.TOP]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top)}}const $p=new P(0,0,1);class Zp extends gn{constructor(e){super(e),this.top.applyAxisAngle($p,Math.PI*3/2)}buildGeometry(e){const t=xi(e);return t.rotateZ(Math.PI*3/2),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*3/2)}}const Kp=new P(0,0,1);class Jp extends gn{constructor(e){super(e),this.top.applyAxisAngle(Kp,Math.PI*7/4)}buildGeometry(e){const t=xi(e);return t.rotateZ(Math.PI*7/4),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*7/4)}}const us=new P,bo=new P;function ll(r,e){return us.copy(r),e instanceof Qe&&(bo.setFromMatrixPosition(e.matrixWorld),us.add(bo),e.worldToLocal(us)),us}const Qp=new P(0,-9.80665,0);function em(r,e){const t=r.particles,n=ll(Qp,e);for(let i=0,s=t.length;i<s;i++)t[i].acceleration.add(n)}new P;const hs=new P,Mo=new P;function tm(r,e,t){return hs.subVectors(t,e),Mo.subVectors(r,e),hs.cross(Mo),hs.normalize(),hs}function So(r,e,t){const n=r.particles,i=r.geometry.getIndex();if(e){const s=r.restDistance*r.restDistance/2,o=ll(e.pressure,t).multiplyScalar(Pp*s/3);for(let a=0,l=i.count;a<l;a+=3){const c=i.getX(a),u=i.getX(a+1),h=i.getX(a+2),d=n[c],m=n[u],g=n[h],p=tm(d.position,m.position,g.position);p.multiplyScalar(p.dot(o)),d.applyForce(p),m.applyForce(p),g.applyForce(p)}}}class nm extends gn{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength*2/3,0)}buildGeometry(e){const t=xi(e);return t.translate(0,-e.poleLength*5/3,0),t.rotateZ(Math.PI),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.translateY(e.cloth.height)}}function im(r,e){const t=Object.assign({},r);let n;switch(t.flagpoleType){case Je.HORIZONTAL:n=new Zp(t);break;case Je.OUTRIGGER:n=new Jp(t);break;case Je.CROSSBAR:t.crossbarLength=t.verticalHoisting===Wt.NONE?e.cloth.width:e.cloth.height,n=new Xp(t);break;case Je.GALLERY:t.crossbarLength=e.cloth.width,n=new Yp(t);break;case Je.AUSTRALIAN:n=new nm(t);break;case Je.VERTICAL:default:n=new gn(t);break}return n}function wo(r){switch(r){case Pe.TOP:return 0;case Pe.LEFT:return-Math.PI/2;case Pe.BOTTOM:return Math.PI;case Pe.RIGHT:return Math.PI/2;default:return 0}}const zi=r=>!isNaN(parseFloat(r))&&isFinite(r),sm=r=>!!(r&&typeof r=="object"),rm=500,am={image:null,backSideImage:null,width:"auto",height:"auto",hoisting:Ln.DEXTER,orientation:Pe.TOP,resolution:256};function om(r,e){const t=r.width||r.videoWidth,n=r.height||r.videoHeight;if(e.width==="auto"&&e.height==="auto"){const i=Nn.defaults.height;return t<n?{width:i,height:i*n/t}:{width:i*t/n,height:i}}else return e.width==="auto"&&zi(e.height)?{width:e.height*t/n,height:e.height}:zi(e.width)&&e.height==="auto"?{width:e.width,height:e.width*n/t}:{width:e.width,height:e.height}}function lm(r,e){const{width:t,height:n}=r?om(r,e):e;if(zi(t)&&zi(n)){const i=Math.min(1,rm/Math.max(t,n));return{width:t*i,height:n*i}}else return{width:Nn.defaults.width,height:Nn.defaults.height}}function cm(r){return r.orientation===Pe.LEFT||r.orientation===Pe.RIGHT}function um(r,e){const t=document.createElement("canvas"),n=t.getContext("2d"),i=r.width,s=r.height,o=Math.min(1,e.height*e.resolution/s),a=Math.round(i*o),l=Math.round(s*o);return t.width=a,t.height=l,n.drawImage(r,0,0,a,l),t}function To(r,e,t){const n=r instanceof HTMLVideoElement?new vp(r):new at(um(r,e));if(n.matrixAutoUpdate=!1,sm(t)){const i=n.matrix;i.scale(1,1),t.reflect&&i.translate(-1,0).scale(-1,1),zi(t.rotate)&&i.translate(-.5,-.5).rotate(-t.rotate).translate(.5,.5)}return n}function hm(r){const e={};cm(r)?(e.width=r.height,e.height=r.width):(e.width=r.width,e.height=r.height);const t=r.hoisting===Ln.SINISTER;let{image:n,backSideImage:i}=r;if(t&&i){const s=n;n=i,i=s}return n&&(e.texture=To(n,r,{reflect:i?!1:t,rotate:wo(r.orientation)})),i&&(e.backSideTexture=To(i,r,{reflect:!0,rotate:-wo(r.orientation)})),e}function dm(r){const e=Object.assign({},am,r);return Object.assign(e,lm(e.image,e)),hm(e)}const cl=new sl;cl.setCrossOrigin("anonymous");function mr(r,e,t){cl.load(r,e,null,n=>{console.error(`FlagWaver.loadImage: Failed to load image from ${r}.`),t&&t(n)})}const Kt={day:{sky:["#4a90d9","#8fc3f2","#dcefff"],label:"Day",css:"linear-gradient(180deg, #4a90d9 0%, #8fc3f2 16%, #dcefff 30%, #dcefff 100%)",stops:["#5a9fe0","#a6d2f7","#dcefff"],fog:14479359,ground:6196298,lights:()=>{const r=new ii(16777215,.55),e=new Ai(13625087,8034906,.35),t=new ni(16774368,6);return t.position.set(20,70,40),{ambient:[r,e],sun:t}}},sunset:{sky:["#2b2d6b","#d9706e","#ffd79a"],label:"Sunset",css:"linear-gradient(180deg, #2b2d6b 0%, #c75a6b 14%, #f6a35a 23%, #ffd79a 30%, #ffd79a 100%)",stops:["#2b2d6b","#c75a6b","#f6a35a","#ffd79a"],fog:16766874,ground:4866869,lights:()=>{const r=new ii(16765088,.35),e=new Ai(16756864,3811898,.4),t=new ni(16752736,5.5);return t.position.set(-60,18,30),{ambient:[r,e],sun:t}}},overcast:{sky:["#8d99a6","#b8c2cc","#d7dde3"],label:"Overcast",css:"linear-gradient(180deg, #8d99a6 0%, #b8c2cc 18%, #d7dde3 30%, #d7dde3 100%)",stops:["#8d99a6","#b8c2cc","#d7dde3"],fog:14147043,ground:5662282,lights:()=>{const r=new ii(16777215,.9),e=new Ai(14739182,6320218,.5),t=new ni(15791359,2.5);return t.position.set(10,70,20),{ambient:[r,e],sun:t}}},night:{sky:["#050816","#0c1733","#1a2a4f"],label:"Night",css:"linear-gradient(180deg, #050816 0%, #0c1733 16%, #1a2a4f 30%, #1a2a4f 100%)",stops:["#050816","#0c1733","#1a2a4f"],fog:1714767,ground:1713174,lights:()=>{const r=new ii(8425664,.35),e=new Ai(4876992,1053720,.6),t=new ni(13161727,4);return t.position.set(-40,50,60),{ambient:[r,e],sun:t}}},studio:{sky:["#1c1c1f","#232327","#2a2a2f"],label:"Studio",css:"linear-gradient(180deg, #1c1c1f 0%, #2a2a2f 30%, #2a2a2f 100%)",stops:["#1c1c1f","#2a2a2f"],fog:2763311,ground:2894896,lights:()=>{const r=new ii(16777215,.5),e=new Ai(16777215,4210752,.4),t=new ni(16777215,5);return t.position.set(25,60,50),{ambient:[r,e],sun:t}}},green:{sky:["#00b140","#00b140","#00b140"],label:"Green screen",css:"#00b140",stops:["#00b140","#00b140"],fog:45376,ground:45376,lights:()=>{const r=new ii(16777215,.7),e=new ni(16777215,5);return e.position.set(25,60,50),{ambient:[r],sun:e}}}},fm=Object.keys(Kt),pm=`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`,mm=`
uniform vec3 topColor;
uniform vec3 midColor;
uniform vec3 horizonColor;
uniform vec3 center;
varying vec3 vWorld;
void main() {
    float h = normalize(vWorld - center).y;          // -1..1, 0 = horizon
    float t = clamp(h, 0.0, 1.0);
    vec3 c = t < 0.22
        ? mix(horizonColor, midColor, smoothstep(0.0, 0.22, t))
        : mix(midColor, topColor, smoothstep(0.22, 1.0, t));
    gl_FragColor = vec4(c, 1.0);
}`;class gm{constructor(e=280){this.uniforms={topColor:{value:new Ge(4886745)},midColor:{value:new Ge(9421810)},horizonColor:{value:new Ge(14479359)},center:{value:new Ge(0,0,0)}};const t=new cn({uniforms:this.uniforms,vertexShader:pm,fragmentShader:mm,side:vt,depthWrite:!1,fog:!1});this.mesh=new St(new Ts(e,48,24),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColors(e,t,n){this.uniforms.topColor.value.set(e),this.uniforms.midColor.value.set(t),this.uniforms.horizonColor.value.set(n)}follow(e){this.mesh.position.set(e.position.x,0,e.position.z);const t=this.uniforms.center.value;t.r=e.position.x,t.g=0,t.b=e.position.z}}const Yt=300,_m=2.4,Ft=48,ds=.08;class xm{constructor(e){this.world=e,this.active=null,this.loader=new Sp,this.loader.setCrossOrigin("anonymous"),this.height=0,this.scale=1,this.yaw=0,this._token=0}get kind(){return this.active?this.active.def.kind:null}load(e,t){this.clear(!1);const n=++this._token,i=[t.url].concat(t.fallback?[].concat(t.fallback):[]),s=o=>new Promise((a,l)=>{this.loader.load(i[o],a,void 0,()=>{if(n!==this._token){l(new Error("superseded"));return}console.warn("[scenery] could not load",i[o]),o+1<i.length?s(o+1).then(a,l):l(new Error("Backdrop image could not be loaded (offline, blocked, or no CORS)."))})});return s(0).then(o=>{if(n!==this._token){o.dispose();return}o.encoding=qe,o.anisotropy=Math.min(8,this.world.renderer.capabilities.getMaxAnisotropy());const a=o.image,l=a.width/a.height;let c=t.kind;c==="auto"&&(c=l>=3?"pano":"photo");const u={...t,kind:c};u.horizon===void 0&&(u.horizon=c==="photo"?.42:.5),u.hfov===void 0&&(u.hfov=65),this.active={id:e,def:u,texture:o,image:a,aspect:l,mesh:null,colors:null},this.height=0,this.scale=1,this.yaw=0,this._analyse(),this._build(),this._applyEnvironment(),this._layout()})}clear(e=!0){this._token++;const t=this.world;this.active&&(this.active.mesh&&(t.scene.remove(this.active.mesh),this.active.mesh.geometry.dispose(),this.active.mesh.material.dispose()),this.active.texture.dispose(),this.active=null);const n=t.controls;n.minAzimuthAngle=-1/0,n.maxAzimuthAngle=1/0,n.minPolarAngle=0,n.maxPolarAngle=Math.PI*.52,n.minDistance=2,n.maxDistance=160,e&&t.applyPreset(t.presetId)}setHeight(e){this.height=e,this._layout()}setScale(e){this.scale=e,this._layout()}setYaw(e){this.yaw=e,this._layout()}frame(){if(this.kind!=="photo")return;const e=this.world,t=e.camera,n=e.controls.getDistance(),i=Math.atan(Math.tan(t.fov*Math.PI/360)*t.aspect),s=(Yt+n)*Math.tan(i+ds+.02),o=2*Math.atan(s/Yt)*180/Math.PI;this.active.autoWiden=Math.max(1,o/(this.active.def.hfov*this.scale)),this._layout()}onResize(){this.kind==="photo"&&this.frame()}_analyse(){const{image:e,def:t}=this.active,n=document.createElement("canvas");n.width=n.height=Ft;const i=n.getContext("2d");i.drawImage(e,0,0,Ft,Ft);const s=i.getImageData(0,0,Ft,Ft).data,o=(l,c)=>{l=Math.max(0,Math.min(Ft-1,Math.round(l))),c=Math.max(l+1,Math.min(Ft,Math.round(c)));let u=0,h=0,d=0,m=0;for(let g=l;g<c;g++)for(let p=Ft*.2;p<Ft*.8;p++){const f=(g*Ft+(p|0))*4;u+=s[f],h+=s[f+1],d+=s[f+2],m++}return new Ge(u/m/255,h/m/255,d/m/255)},a=(1-t.horizon)*Ft;this.active.colors={top:o(0,3),mid:o(a*.45,a*.55),skyHorizon:o(a-4,a-1),groundFar:o(a+1,a+5),bottom:o(Ft-3,Ft)}}_build(){const{def:e,texture:t,aspect:n}=this.active;let i;if(e.kind==="photo")i=new St(new Ss(1,1),new li({map:t,fog:!1,side:Jt}));else if(n>=3){const s=2*Math.PI*Yt/n;t.wrapS=di,t.repeat.x=-1,i=new St(new mn(Yt,Yt,s,128,1,!0),new li({map:t,side:vt,fog:!1})),i.userData.stripHeight=s}else t.wrapS=di,t.repeat.x=-1,i=new St(new Ts(Yt,96,48),new li({map:t,side:vt,fog:!1}));i.renderOrder=-2,i.frustumCulled=!1,this.active.mesh=i,this.world.scene.add(i)}_applyEnvironment(){const{def:e,colors:t}=this.active,n=this.world;e.light&&n.applyPreset(e.light,{lightsOnly:!0}),n.sky.setColors(t.top,t.mid,t.skyHorizon),n.sky.mesh.visible=!0,n.setFogColor(t.groundFar.clone().lerp(t.skyHorizon,.2)),n.container.style.background=`#${t.top.getHexString()}`,e.ground&&n.setGround(e.ground,!0)}_layout(){if(!this.active||!this.active.mesh)return;const{def:e,mesh:t,aspect:n}=this.active,i=Math.min(.95,Math.max(.05,e.horizon+this.height*.02)),s=_m;if(e.kind==="photo"){const o=Math.min(150,Math.max(25,e.hfov*this.scale*(this.active.autoWiden||1))),a=2*Yt*Math.tan(o*Math.PI/360),l=a/n;t.scale.set(a,l,1),t.position.set(0,s+(.5-i)*l,-Yt),this.active.hfov=o,this.active.planeW=a,this._limitOrbit()}else if(t.userData.stripHeight){const o=t.userData.stripHeight;t.position.set(0,s+(.5-i)*o,0),t.rotation.y=this.yaw*Math.PI/180,this._freeOrbit()}else t.position.set(0,s+(.5-i)*2*Yt*.5,0),t.rotation.y=this.yaw*Math.PI/180,this._freeOrbit()}_freeOrbit(){const e=this.world.controls;e.minAzimuthAngle=-1/0,e.maxAzimuthAngle=1/0,e.minPolarAngle=.15,e.maxPolarAngle=Math.PI*.5-.01,e.minDistance=2,e.maxDistance=120}_limitOrbit(){if(!this.active||this.active.def.kind!=="photo")return;const e=this.world,t=e.camera,n=e.controls;this.active.hfov*Math.PI/360;const i=t.fov*Math.PI/360,s=Math.atan(Math.tan(i)*t.aspect),o=Math.max(8,this.active.planeW/2/Math.tan(s+ds)-Yt);n.minDistance=2,n.maxDistance=o,n.minAzimuthAngle=-ds,n.maxAzimuthAngle=ds,n.minPolarAngle=.35,n.maxPolarAngle=Math.PI*.5-.01}}const we=1024,gr=new Map,Rr={grass:{label:"Grass"},lawn:{label:"Striped lawn"},pavers:{label:"Pavers"},cobbles:{label:"Cobblestone"},concrete:{label:"Concrete"},sand:{label:"Sand"},snow:{label:"Snow"},gravel:{label:"Gravel / rock"},plain:{label:"Plain colour"}},vm=Object.keys(Rr);function Ri(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function At(r){return r<0?0:r>255?255:r}function zt(r,e,t=4){const n=Ri(r),i=[];for(let s=0;s<t;s++){const o=e<<s,a=new Float32Array(o*o);for(let l=0;l<a.length;l++)a[l]=n();i.push({n:o,g:a})}return(s,o)=>{let a=0,l=.5,c=0;for(const{n:u,g:h}of i){const d=s*u,m=o*u,g=Math.floor(d)%u,p=Math.floor(m)%u,f=(g+1)%u,_=(p+1)%u,S=d-Math.floor(d),M=m-Math.floor(m),T=S*S*(3-2*S),y=M*M*(3-2*M),C=h[p*u+g],U=h[p*u+f],v=h[_*u+g],E=h[_*u+f];a+=l*(C+(U-C)*T+(v+(E-v)*T-(C+(U-C)*T))*y),c+=l,l*=.5}return a/c}}function Ci(r,e){const t=r.data;for(let n=0;n<we;n++)for(let i=0;i<we;i++){const[s,o,a]=e(i/we,n/we,i,n),l=(n*we+i)*4;t[l]=At(s),t[l+1]=At(o),t[l+2]=At(a),t[l+3]=255}}const Dr={grass(r){const e=r.createImageData(we,we),t=zt(11,8,5),n=zt(12,64,2),i=zt(13,3,2);Ci(e,(o,a)=>{const l=t(o,a),c=n(o,a),u=i(o,a),h=.55*l+.35*c+.1*u;return[50+70*h,95+70*h,30+30*h]}),r.putImageData(e,0,0);const s=Ri(14);for(let o=0;o<9e3;o++){const a=s()*we,l=s()*we,c=4+s()*10,u=-Math.PI/2+(s()-.5)*1.2,h=s();r.strokeStyle=`rgba(${40+90*h},${110+80*h},${30+30*h},0.55)`,r.lineWidth=1+s(),r.beginPath(),r.moveTo(a,l),r.lineTo(a+Math.cos(u)*c,l+Math.sin(u)*c),r.stroke(),a<16&&(r.beginPath(),r.moveTo(a+we,l),r.lineTo(a+we+Math.cos(u)*c,l+Math.sin(u)*c),r.stroke()),l<16&&(r.beginPath(),r.moveTo(a,l+we),r.lineTo(a+Math.cos(u)*c,l+we+Math.sin(u)*c),r.stroke())}return{metersPerTile:3,roughness:.95,bumpScale:.015}},lawn(r){const e=Dr.grass(r);for(let t=0;t<4;t++)r.fillStyle=t%2?"rgba(255,255,220,0.10)":"rgba(0,30,0,0.10)",r.fillRect(0,t*we/4,we,we/4);return{...e,metersPerTile:4}},pavers(r){const e=Ri(21),t=6,n=12,i=we/t,s=we/n;r.fillStyle="#8d867c",r.fillRect(0,0,we,we);for(let c=0;c<n;c++){const u=c%2*i/2;for(let h=-1;h<t;h++){const d=.75+e()*.3,m=e()*18;r.fillStyle=`rgb(${At(165*d+m)},${At(150*d+m*.6)},${At(135*d)})`,r.fillRect(h*i+u+3,c*s+3,i-6,s-6)}}const o=r.getImageData(0,0,we,we),a=zt(22,48,3),l=o.data;for(let c=0;c<we;c++)for(let u=0;u<we;u++){const h=(c*we+u)*4,d=(a(u/we,c/we)-.5)*40;l[h]=At(l[h]+d),l[h+1]=At(l[h+1]+d),l[h+2]=At(l[h+2]+d)}return r.putImageData(o,0,0),{metersPerTile:2,roughness:.85,bumpScale:.03}},cobbles(r){const e=Ri(31);r.fillStyle="#4a4540",r.fillRect(0,0,we,we);const t=14,n=we/t;for(let i=-1;i<=t;i++)for(let s=-1;s<=t;s++){const o=(s+.5+i%2*.5)*n+(e()-.5)*n*.2,a=(i+.5)*n+(e()-.5)*n*.2,l=n*(.38+e()*.08),c=.7+e()*.4,u=r.createRadialGradient(o-l*.3,a-l*.3,l*.1,o,a,l);u.addColorStop(0,`rgb(${At(150*c)},${At(145*c)},${At(140*c)})`),u.addColorStop(1,`rgb(${At(85*c)},${At(82*c)},${At(80*c)})`),r.fillStyle=u,r.beginPath(),r.ellipse(o,a,l,l*(.85+e()*.2),e()*.6,0,Math.PI*2),r.fill()}return{metersPerTile:2.2,roughness:.8,bumpScale:.05}},concrete(r){const e=r.createImageData(we,we),t=zt(41,6,5),n=zt(42,128,1);return Ci(e,(i,s)=>{const a=150+50*(.7*t(i,s)+.3*n(i,s));return[a,a,a-4]}),r.putImageData(e,0,0),r.strokeStyle="rgba(60,60,60,0.55)",r.lineWidth=3,r.strokeRect(1.5,1.5,we-3,we-3),r.beginPath(),r.moveTo(we/2,0),r.lineTo(we/2,we),r.moveTo(0,we/2),r.lineTo(we,we/2),r.stroke(),{metersPerTile:4,roughness:.9,bumpScale:.01}},sand(r){const e=r.createImageData(we,we),t=zt(51,5,5),n=zt(52,96,2);return Ci(e,(i,s)=>{const o=.6*t(i,s)+.4*n(i,s);return[200+40*o,180+40*o,135+40*o]}),r.putImageData(e,0,0),{metersPerTile:4,roughness:1,bumpScale:.02}},snow(r){const e=r.createImageData(we,we),t=zt(61,4,5),n=zt(62,128,1);return Ci(e,(i,s)=>{const o=.7*t(i,s)+.3*n(i,s);return[225+30*o,230+25*o,240+15*o]}),r.putImageData(e,0,0),{metersPerTile:4,roughness:.7,bumpScale:.02}},gravel(r){const e=r.createImageData(we,we),t=zt(71,10,5),n=zt(72,160,1);Ci(e,(s,o)=>{const a=.5*t(s,o)+.5*n(s,o);return[95+70*a,90+65*a,85+60*a]}),r.putImageData(e,0,0);const i=Ri(73);for(let s=0;s<2500;s++){const o=i();r.fillStyle=`rgba(${60+120*o},${58+110*o},${55+100*o},0.8)`,r.beginPath(),r.ellipse(i()*we,i()*we,2+i()*7,2+i()*5,i()*3,0,Math.PI*2),r.fill()}return{metersPerTile:3,roughness:.95,bumpScale:.04}}};function ym(r){if(r==="plain"||!Dr[r])return null;if(gr.has(r))return gr.get(r);const e=document.createElement("canvas");e.width=e.height=we;const t=e.getContext("2d"),n=Dr[r](t),i={canvas:e,...n};return gr.set(r,i),i}const Eo=600;class bm{constructor(e){bt.legacyMode=!1,this.container=e,this.scene=new _p,this.scene.fog=new Gr(12573943,30,260),this.camera=new kt(30,1,.1,3e3),this.camera.position.set(0,6,18);const t=Math.min(window.devicePixelRatio||1,2);this.renderer=new nl({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t),this.renderer.outputEncoding=qe,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=Qt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Do,e.appendChild(this.renderer.domElement),this.controls=new Ap(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxDistance=160,this.controls.minDistance=2,this.controls.maxPolarAngle=Math.PI*.52,this.controls.target.set(0,4.5,0),this.controls.update(),this.lights=[],this.sun=null;const n=new Wr({color:6196298,roughness:1,metalness:0});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
                #ifdef USE_MAP
                    float macro = texture2D(map, vUv * 0.0731 + 0.37, 5.0).g;
                    diffuseColor.rgb *= 0.84 + 0.32 * macro;
                #endif`)},this.ground=new St(new Hr(1,96),n),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.position.y=-.01,this.ground.scale.setScalar(Eo),this.scene.add(this.ground),this.groundId="plain",this.groundTexture=null,this.sky=new gm(900),this.scene.add(this.sky.mesh),this.defaultFog=this.scene.fog,this.groundWanted=!0,this.scenery=null,this.updateCallbacks=[],this.obstructionLeft=()=>0,this.clock=new Ep,this.accumulator=0,this.paused=!1,this.timeScale=1,this.scenery=new xm(this),this.applyPreset("day"),this.resize(),window.addEventListener("resize",()=>this.resize()),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}onUpdate(e){this.updateCallbacks.push(e)}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.scenery&&this.scenery.onResize(),this.render()}applyPreset(e,t={}){const n=Kt[e]||Kt.day;this.presetId=e;const i=t.lightsOnly||this.scenery&&this.scenery.active;for(const a of this.lights)this.scene.remove(a);this.lights=[];const{ambient:s,sun:o}=n.lights();for(const a of s)this.scene.add(a),this.lights.push(a);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-5e-4,o.shadow.camera.far=400,this.scene.add(o),this.scene.add(o.target),this.lights.push(o,o.target),this.sun=o,i||(this.defaultFog.color.setHex(n.fog),this.sky.setColors(...n.sky),this.ground.material.map||this.ground.material.color.setHex(n.ground),this.container.style.background=n.css),this.fitShadowToBounds(this._lastBounds)}setGround(e,t=!1){this.groundId=e;const n=this.ground.material;this.groundTexture&&(this.groundTexture.dispose(),this.groundTexture=null);const i=ym(e);if(!i)n.map=null,n.bumpMap=null,n.color.setHex((Kt[this.presetId]||Kt.day).ground),n.roughness=1;else{const s=new yp(i.canvas);s.wrapS=s.wrapT=di,s.encoding=qe,s.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());const o=Eo*2/i.metersPerTile;s.repeat.set(o,o),this.groundTexture=s,n.map=s,n.bumpMap=s,n.bumpScale=i.bumpScale,n.roughness=i.roughness,n.color.setHex(16777215)}n.needsUpdate=!0,this.onGroundChange&&this.onGroundChange(e,t)}setFogColor(e){this.defaultFog.color.copy(e)}setGroundVisible(e){this.groundWanted=e,this.ground.visible=e}fitShadowToBounds(e){this._lastBounds=e;const t=new P(12,8,12),n=new P(0,4,0);e&&!e.isEmpty()&&(e.getSize(t),e.getCenter(n));const i=Math.max(t.x,t.z)*.75+8;if(this.ground.position.x=n.x,this.ground.position.z=n.z,this.sun){const s=this.sun.shadow.camera;s.left=-i,s.right=i,s.top=i,s.bottom=-i,s.near=1,s.updateProjectionMatrix();const o=this.sun.position.clone().normalize();this.sun.position.copy(n).addScaledVector(o,Math.max(80,i*4)),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.sun.shadow.needsUpdate=!0}this.defaultFog.near=Math.max(25,i*2.5),this.defaultFog.far=Math.min(280,this.defaultFog.near+180)}computeFrame(e){if(!e||e.isEmpty())return null;const t=new P,n=new P;e.getSize(t),e.getCenter(n);const i=this.camera.fov*Math.PI/180,s=this.renderer.domElement.clientWidth||window.innerWidth,o=Math.min(.6,Math.max(0,this.obstructionLeft()/s)),a=t.y/2/Math.tan(i/2),l=t.x/2/Math.tan(i/2)/this.camera.aspect/(1-o),c=Math.max(a,l)*1.15+t.z*.6+2,u=n.clone();u.y=Math.max(n.y,t.y*.55);const h=2*c*Math.tan(i/2)*this.camera.aspect;u.x-=o/2*h;const d=this.scenery&&this.scenery.active?.04:.18;return{pos:u.clone().add(new P(0,c*d,c)),target:u}}frame(e,t=!0){const n=this.computeFrame(e);if(!n)return;const{pos:i,target:s}=n,o=()=>{this.scenery&&this.scenery.frame()};if(!t){this.camera.position.copy(i),this.controls.target.copy(s),this.controls.update(),o();return}const a=this.camera.position.clone(),l=this.controls.target.clone(),c=performance.now(),u=650,h=()=>{const d=Math.min(1,(performance.now()-c)/u),m=1-Math.pow(1-d,3);this.camera.position.lerpVectors(a,i,m),this.controls.target.lerpVectors(l,s,m),this.controls.update(),d<1?requestAnimationFrame(h):o()};requestAnimationFrame(h)}setPaused(e){this.paused=e,e||this.clock.getDelta()}render(){this.renderer.render(this.scene,this.camera)}_loop(){requestAnimationFrame(this._loop);const e=Math.min(this.clock.getDelta(),.1);if(!this.paused){this.accumulator+=e*this.timeScale;let t=0;for(;this.accumulator>=fr&&t<3;){for(const n of this.updateCallbacks)n(fr);this.accumulator-=fr,t++}t===3&&(this.accumulator=0)}this.controls.update(),this.sky.follow(this.camera),this.render()}screenshot(){this.render();const e=this.renderer.domElement,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d"),i=this.container.style.background;if(i&&i.startsWith("#"))n.fillStyle=i;else{const s=(Kt[this.presetId]||Kt.day).stops,o=n.createLinearGradient(0,0,0,t.height);s.forEach((a,l)=>o.addColorStop(s.length===1?0:l/(s.length-1),a)),n.fillStyle=o}return n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0),t.toDataURL("image/png")}}const vs={row:{label:"Row",place(r,e){const t=[],n=(r-1)*e;for(let i=0;i<r;i++)t.push({position:new P(-n/2+i*e,0,0),rotationY:0});return t}},arc:{label:"Arc",place(r,e){if(r===1)return[{position:new P(0,0,0),rotationY:0}];const t=Math.PI*.8,n=Math.max(e,(r-1)*e/t),i=[];for(let s=0;s<r;s++){const o=-t/2+t*s/(r-1);i.push({position:new P(Math.sin(o)*n,0,-Math.cos(o)*n+n),rotationY:0})}return i}},circle:{label:"Circle",place(r,e){if(r===1)return[{position:new P(0,0,0),rotationY:0}];const t=Math.max(e,r*e/(2*Math.PI)),n=[];for(let i=0;i<r;i++){const s=i/r*Math.PI*2;n.push({position:new P(Math.sin(s)*t,0,Math.cos(s)*t),rotationY:0})}return n}},grid:{label:"Grid",place(r,e){const t=Math.ceil(Math.sqrt(r)),n=Math.ceil(r/t),i=[];for(let s=0;s<r;s++){const o=s%t,a=Math.floor(s/t);i.push({position:new P((o-(t-1)/2)*e,0,(a-(n-1)/2)*e*1.4),rotationY:0})}return i}},vee:{label:"V formation",place(r,e){const t=[];for(let n=0;n<r;n++){const i=n%2===0?-1:1,s=Math.ceil(n/2);t.push({position:new P(i*s*e*.8,0,s*e*.9),rotationY:0})}return t}},scatter:{label:"Scatter",place(r,e){let t=1337;const n=()=>(t=t*16807%2147483647,t/2147483647),i=Math.sqrt(r)*e,s=[];for(let o=0;o<r;o++)s.push({position:new P((n()-.5)*i*1.6,0,(n()-.5)*i),rotationY:(n()-.5)*.6});return s}}},Mm=Object.keys(vs),Xr={ad:"Andorra",ae:"United Arab Emirates",af:"Afghanistan",ag:"Antigua and Barbuda",al:"Albania",am:"Armenia",ao:"Angola",ar:"Argentina",at:"Austria",au:"Australia",az:"Azerbaijan",ba:"Bosnia and Herzegovina",bb:"Barbados",bd:"Bangladesh",be:"Belgium",bf:"Burkina Faso",bg:"Bulgaria",bh:"Bahrain",bi:"Burundi",bj:"Benin",bn:"Brunei",bo:"Bolivia",br:"Brazil",bs:"Bahamas",bt:"Bhutan",bw:"Botswana",by:"Belarus",bz:"Belize",ca:"Canada",cd:"DR Congo",cf:"Central African Republic",cg:"Republic of the Congo",ch:"Switzerland",ci:"Côte d'Ivoire",cl:"Chile",cm:"Cameroon",cn:"China",co:"Colombia",cr:"Costa Rica",cu:"Cuba",cv:"Cape Verde",cy:"Cyprus",cz:"Czechia",de:"Germany",dj:"Djibouti",dk:"Denmark",dm:"Dominica",do:"Dominican Republic",dz:"Algeria",ec:"Ecuador",ee:"Estonia",eg:"Egypt",er:"Eritrea",es:"Spain",et:"Ethiopia",fi:"Finland",fj:"Fiji",fm:"Micronesia",fr:"France",ga:"Gabon",gb:"United Kingdom",gd:"Grenada",ge:"Georgia",gh:"Ghana",gm:"Gambia",gn:"Guinea",gq:"Equatorial Guinea",gr:"Greece",gt:"Guatemala",gw:"Guinea-Bissau",gy:"Guyana",hn:"Honduras",hr:"Croatia",ht:"Haiti",hu:"Hungary",id:"Indonesia",ie:"Ireland",il:"Israel",in:"India",iq:"Iraq",ir:"Iran",is:"Iceland",it:"Italy",jm:"Jamaica",jo:"Jordan",jp:"Japan",ke:"Kenya",kg:"Kyrgyzstan",kh:"Cambodia",ki:"Kiribati",km:"Comoros",kn:"Saint Kitts and Nevis",kp:"North Korea",kr:"South Korea",kw:"Kuwait",kz:"Kazakhstan",la:"Laos",lb:"Lebanon",lc:"Saint Lucia",li:"Liechtenstein",lk:"Sri Lanka",lr:"Liberia",ls:"Lesotho",lt:"Lithuania",lu:"Luxembourg",lv:"Latvia",ly:"Libya",ma:"Morocco",mc:"Monaco",md:"Moldova",me:"Montenegro",mg:"Madagascar",mh:"Marshall Islands",mk:"North Macedonia",ml:"Mali",mm:"Myanmar",mn:"Mongolia",mr:"Mauritania",mt:"Malta",mu:"Mauritius",mv:"Maldives",mw:"Malawi",mx:"Mexico",my:"Malaysia",mz:"Mozambique",na:"Namibia",ne:"Niger",ng:"Nigeria",ni:"Nicaragua",nl:"Netherlands",no:"Norway",np:"Nepal",nr:"Nauru",nz:"New Zealand",om:"Oman",pa:"Panama",pe:"Peru",pg:"Papua New Guinea",ph:"Philippines",pk:"Pakistan",pl:"Poland",pt:"Portugal",pw:"Palau",py:"Paraguay",qa:"Qatar",ro:"Romania",rs:"Serbia",ru:"Russia",rw:"Rwanda",sa:"Saudi Arabia",sb:"Solomon Islands",sc:"Seychelles",sd:"Sudan",se:"Sweden",sg:"Singapore",si:"Slovenia",sk:"Slovakia",sl:"Sierra Leone",sm:"San Marino",sn:"Senegal",so:"Somalia",sr:"Suriname",ss:"South Sudan",st:"São Tomé and Príncipe",sv:"El Salvador",sy:"Syria",sz:"Eswatini",td:"Chad",tg:"Togo",th:"Thailand",tj:"Tajikistan",tl:"Timor-Leste",tm:"Turkmenistan",tn:"Tunisia",to:"Tonga",tr:"Turkey",tt:"Trinidad and Tobago",tv:"Tuvalu",tw:"Taiwan",tz:"Tanzania",ua:"Ukraine",ug:"Uganda",us:"United States",uy:"Uruguay",uz:"Uzbekistan",va:"Vatican City",vc:"Saint Vincent and the Grenadines",ve:"Venezuela",vn:"Vietnam",vu:"Vanuatu",ws:"Samoa",ye:"Yemen",za:"South Africa",zm:"Zambia",zw:"Zimbabwe",eu:"European Union",un:"United Nations",hk:"Hong Kong",pr:"Puerto Rico",gl:"Greenland","gb-eng":"England","gb-sct":"Scotland","gb-wls":"Wales",ps:"Palestine",xk:"Kosovo"},ul=Object.keys(Xr);function hl(r){return Xr[r]||r.toUpperCase()}function Sm(r,e=1280){return`https://flagcdn.com/w${e}/${r}.png`}function wm(r,e=12){const t=r.trim().toLowerCase();if(!t)return[];const n=[],i=[];for(const s of ul){const o=Xr[s].toLowerCase();o.startsWith(t)||s===t?n.push(s):o.includes(t)&&i.push(s)}return n.concat(i).slice(0,e)}const Es={armenia:{name:"Armenia",ratio:2,ops:[["h",["#d90012","#0033a0","#f2a800"]]]},austria:{name:"Austria",ratio:1.5,ops:[["h",["#ed2939","#ffffff","#ed2939"]]]},bangladesh:{name:"Bangladesh",ratio:5/3,ops:[["rect","#006a4e",0,0,1,1],["disc","#f42a41",.45,.5,.3]]},belgium:{name:"Belgium",ratio:15/13,ops:[["v",["#000000","#fae042","#ed2939"]]]},colombia:{name:"Colombia",ratio:1.5,ops:[["rect","#fcd116",0,0,1,.5],["rect","#003893",0,.5,1,.25],["rect","#ce1126",0,.75,1,.25]]},czechia:{name:"Czechia",ratio:1.5,ops:[["h",["#ffffff","#d7141a"]],["tri","#11457e",[0,0,.5,.5,0,1]]]},denmark:{name:"Denmark",ratio:37/28,ops:[["rect","#c60c30",0,0,1,1],["cross","#ffffff",.38,.5,.14]]},estonia:{name:"Estonia",ratio:11/7,ops:[["h",["#0072ce","#000000","#ffffff"]]]},finland:{name:"Finland",ratio:18/11,ops:[["rect","#ffffff",0,0,1,1],["cross","#003580",.36,.5,.18]]},france:{name:"France",ratio:1.5,ops:[["v",["#0055a4","#ffffff","#ef4135"]]]},germany:{name:"Germany",ratio:5/3,ops:[["h",["#000000","#dd0000","#ffce00"]]]},greece:{name:"Greece",ratio:1.5,ops:[["h",["#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf"]],["rect","#0d5eaf",0,0,10/27,5/9],["cross","#ffffff",5/27,5/18,1/9]]},hungary:{name:"Hungary",ratio:2,ops:[["h",["#ce2939","#ffffff","#477050"]]]},indonesia:{name:"Indonesia",ratio:1.5,ops:[["h",["#ff0000","#ffffff"]]]},ireland:{name:"Ireland",ratio:2,ops:[["v",["#169b62","#ffffff","#ff883e"]]]},italy:{name:"Italy",ratio:1.5,ops:[["v",["#009246","#ffffff","#ce2b37"]]]},japan:{name:"Japan",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1],["disc","#bc002d",.5,.5,.3]]},latvia:{name:"Latvia",ratio:2,ops:[["rect","#9e3039",0,0,1,1],["rect","#ffffff",0,.4,1,.2]]},lithuania:{name:"Lithuania",ratio:5/3,ops:[["h",["#fdb913","#006a44","#c1272d"]]]},netherlands:{name:"Netherlands",ratio:1.5,ops:[["h",["#ae1c28","#ffffff","#21468b"]]]},nigeria:{name:"Nigeria",ratio:2,ops:[["v",["#008751","#ffffff","#008751"]]]},norway:{name:"Norway",ratio:22/16,ops:[["rect","#ba0c2f",0,0,1,1],["cross","#ffffff",.36,.5,.25],["cross","#00205b",.36,.5,.125]]},peru:{name:"Peru",ratio:1.5,ops:[["v",["#d91023","#ffffff","#d91023"]]]},poland:{name:"Poland",ratio:1.6,ops:[["h",["#ffffff","#dc143c"]]]},romania:{name:"Romania",ratio:1.5,ops:[["v",["#002b7f","#fcd116","#ce1126"]]]},russia:{name:"Russia",ratio:1.5,ops:[["h",["#ffffff","#0039a6","#d52b1e"]]]},sweden:{name:"Sweden",ratio:1.6,ops:[["rect","#006aa7",0,0,1,1],["cross","#fecc00",.375,.5,.2]]},switzerland:{name:"Switzerland",ratio:1,ops:[["rect","#da291c",0,0,1,1],["rect","#ffffff",.3125,.4,.375,.2],["rect","#ffffff",.4,.3125,.2,.375]]},thailand:{name:"Thailand",ratio:1.5,ops:[["rect","#a51931",0,0,1,1],["rect","#ffffff",0,1/6,1,4/6],["rect","#2d2a4a",0,2/6,1,2/6]]},turkey:{name:"Turkey",ratio:1.5,ops:[["rect","#e30a17",0,0,1,1],["disc","#ffffff",.4,.5,.25],["disc","#e30a17",.46,.5,.2],["star","#ffffff",.62,.5,.11,5]]},ukraine:{name:"Ukraine",ratio:1.5,ops:[["h",["#0057b7","#ffd700"]]]},vietnam:{name:"Vietnam",ratio:1.5,ops:[["rect","#da251d",0,0,1,1],["star","#ffff00",.5,.5,.3,5]]},checkered:{name:"Checkered",ratio:1.5,ops:[["check","#111111","#ffffff",6]]},rainbow:{name:"Rainbow",ratio:1.5,ops:[["h",["#e40303","#ff8c00","#ffed00","#008026","#24408e","#732982"]]]},jollyroger:{name:"Jolly Roger",ratio:1.5,ops:[["rect","#000000",0,0,1,1],["disc","#ffffff",.5,.42,.17],["rect","#ffffff",.4,.57,.2,.08],["rect","#000000",.44,.46,.04,.04],["rect","#000000",.52,.46,.04,.04],["diag","#ffffff",.06],["diag2","#ffffff",.06]]},white:{name:"White (blank)",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1]]}},Tm=Object.keys(Es);function Em(r,e,t,n,i){const s=n*.382;r.beginPath();for(let o=0;o<i*2;o++){const a=o%2===0?n:s,l=-Math.PI/2+o*Math.PI/i,c=e+Math.cos(l)*a,u=t+Math.sin(l)*a;o===0?r.moveTo(c,u):r.lineTo(c,u)}r.closePath(),r.fill()}function dl(r,e=600){const t=Es[r];if(!t)throw new Error(`Unknown simple flag: ${r}`);const n=Math.round(e*t.ratio),i=e,s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");for(const a of t.ops){const l=a[0];if(l==="h"){const c=a[1],u=i/c.length;c.forEach((h,d)=>{o.fillStyle=h,o.fillRect(0,Math.floor(d*u),n,Math.ceil(u)+1)})}else if(l==="v"){const c=a[1],u=n/c.length;c.forEach((h,d)=>{o.fillStyle=h,o.fillRect(Math.floor(d*u),0,Math.ceil(u)+1,i)})}else if(l==="rect")o.fillStyle=a[1],o.fillRect(a[2]*n,a[3]*i,a[4]*n,a[5]*i);else if(l==="disc")o.fillStyle=a[1],o.beginPath(),o.arc(a[2]*n,a[3]*i,a[4]*i,0,Math.PI*2),o.fill();else if(l==="cross"){const[,c,u,h,d]=a;o.fillStyle=c,o.fillRect(0,(h-d/2)*i,n,d*i),o.fillRect((u-d*i/(2*n))*n,0,d*i,i)}else if(l==="tri"){const c=a[2];o.fillStyle=a[1],o.beginPath(),o.moveTo(c[0]*n,c[1]*i),o.lineTo(c[2]*n,c[3]*i),o.lineTo(c[4]*n,c[5]*i),o.closePath(),o.fill()}else if(l==="star")o.fillStyle=a[1],Em(o,a[2]*n,a[3]*i,a[4]*i,a[5]);else if(l==="diag"||l==="diag2")o.strokeStyle=a[1],o.lineWidth=a[2]*i,o.beginPath(),l==="diag"?(o.moveTo(n*.3,i*.95),o.lineTo(n*.7,i*.65)):(o.moveTo(n*.7,i*.95),o.lineTo(n*.3,i*.65)),o.stroke();else if(l==="check"){const[,c,u,h]=a,d=i/h;for(let m=0;m<h;m++)for(let g=0;g<Math.ceil(n/d);g++)o.fillStyle=(g+m)%2===0?c:u,o.fillRect(g*d,m*d,d+1,d+1)}}return s}const Am="flagwaverplus",Ir="images";let fs=null;function Cm(){return fs||(fs=new Promise((r,e)=>{if(!("indexedDB"in window)){e(new Error("IndexedDB unavailable"));return}const t=indexedDB.open(Am,1);t.onupgradeneeded=()=>t.result.createObjectStore(Ir),t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)}),fs)}function ps(r,e){return Cm().then(t=>new Promise((n,i)=>{const s=t.transaction(Ir,r),o=e(s.objectStore(Ir));s.oncomplete=()=>n(o&&o.result),s.onerror=()=>i(s.error)}))}const mi={get:r=>ps("readonly",e=>e.get(r)),put:(r,e)=>ps("readwrite",t=>t.put(e,r)),del:r=>ps("readwrite",e=>e.delete(r)),keys:()=>ps("readonly",r=>r.getAllKeys())},ci=new Map;async function Fr(r){if(ci.has(r))return ci.get(r);const e=await mi.get(r);if(!e)throw new Error("Stored image is missing (browser data was cleared).");return ci.set(r,e.dataUrl),e.dataUrl}async function Lm(r){return mi.get(r)}async function Ao(r,e=1024){const t=await Dm(r,e),n=`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,i=(r.name||"image").replace(/\.[^.]+$/,"");return await mi.put(n,{dataUrl:t,name:i,added:Date.now()}),ci.set(n,t),{key:n,name:i,dataUrl:t}}async function Pm(r,e,t=null){return t=t||`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,await mi.put(t,{dataUrl:r,name:e,added:Date.now()}),ci.set(t,r),t}async function Rm(r){try{const e=await mi.keys();for(const t of e)r.has(t)||(await mi.del(t),ci.delete(t))}catch{}}function Dm(r,e){return new Promise((t,n)=>{const i=URL.createObjectURL(r),s=new Image;s.onload=()=>{URL.revokeObjectURL(i);const o=Math.min(1,e/s.width),a=Math.max(1,Math.round(s.width*o)),l=Math.max(1,Math.round(s.height*o)),c=document.createElement("canvas");c.width=a,c.height=l,c.getContext("2d").drawImage(s,0,0,a,l);const u=/png|gif|svg|webp/i.test(r.type);t(u?c.toDataURL("image/png"):c.toDataURL("image/jpeg",.9))},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("Not a readable image"))},s.src=i})}let Im=1;const Di={height:1.2,hoisting:Ln.DEXTER,orientation:Pe.TOP,flagpoleType:Je.VERTICAL,verticalHoisting:Wt.TOP_RIGHT,mass:.11};function Fm(r){return new Promise((e,t)=>{switch(r.type){case"simple":try{e(dl(r.value))}catch(n){t(n)}break;case"country":mr(Sm(r.value),e,()=>t(new Error(`Could not load flag for ${hl(r.value)} (network/CORS).`)));break;case"url":case"upload":mr(r.value,e,()=>t(new Error("Image could not be loaded.")));break;case"stored":Fr(r.value).then(n=>mr(n,e,()=>t(new Error("Stored image could not be decoded.")))).catch(t);break;default:t(new Error(`Unknown source type ${r.type}`))}})}function ms(r){var e;switch(r.type){case"simple":return((e=Es[r.value])==null?void 0:e.name)||r.value;case"country":return hl(r.value);case"upload":case"stored":return r.name||"Uploaded image";case"url":return r.value.replace(/^https?:\/\//,"").slice(0,32);default:return"Flag"}}class Om{constructor(e){this.world=e,this.entries=[],this.root=new Qe,e.scene.add(this.root),this.layoutId="row",this.spacing=3.2,this.wind=new ol({speed:10}),this.windAngle=0,this.windSpeed=10,this.windMode="natural",this.externalGain=0,this.gust={enabled:!1,strength:2.2,period:4.5,width:2.5},this.ripple=!1,this.listeners=new Set,this._tmpPressure=new P,this._gustWind={pressure:this._tmpPressure},this._bounds=new gi,this.selectedId=null,this.ring=new St(new Vr(.22,.42,48),new li({color:16734780,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.ring.visible=!1,this._applyWindSettings(),e.onUpdate(t=>this.step(t))}setSelected(e){this.selectedId=e;const t=this.getEntry(e);this.ring.parent&&this.ring.parent.remove(this.ring),t?(t.holder.add(this.ring),this.ring.visible=!0):this.ring.visible=!1}setFlagHeight(e){Di.height=e,this.updateAllSettings({height:e})}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e,t){for(const n of this.listeners)n(e,t)}get count(){return this.entries.length}getEntry(e){return this.entries.find(t=>t.id===e)}addFlag(e,t={}){const n={id:Im++,source:e,settings:{...Di,...t},image:null,group:null,holder:new Qe,status:"loading",error:null};return this.root.add(n.holder),this.entries.push(n),this.relayout(),this.emit("add",n),this._loadAndBuild(n),n}removeFlag(e){const t=this.entries.findIndex(i=>i.id===e);if(t===-1)return;const[n]=this.entries.splice(t,1);this._destroyGroup(n),this.selectedId===e&&this.setSelected(null),this.root.remove(n.holder),this.relayout(),this.emit("remove",n)}clear(){for(const e of[...this.entries])this.removeFlag(e.id)}duplicateFlag(e){const t=this.getEntry(e);return t?this.addFlag({...t.source},{...t.settings}):null}moveTo(e,t){const n=this.entries.findIndex(o=>o.id===e);if(n===-1)return;const[i]=this.entries.splice(n,1),s=Math.max(0,Math.min(this.entries.length,t));this.entries.splice(s,0,i),this.relayout(),this.emit("reorder")}moveFlag(e,t){const n=this.entries.findIndex(o=>o.id===e),i=n+t;if(n===-1||i<0||i>=this.entries.length)return;const s=this.entries[n];this.entries[n]=this.entries[i],this.entries[i]=s,this.relayout(),this.emit("reorder")}setSource(e,t){const n=this.getEntry(e);n&&(n.source=t,n.status="loading",this.emit("update",n),this._loadAndBuild(n))}updateSettings(e,t){const n=this.getEntry(e);n&&(Object.assign(n.settings,t),n.image&&this._build(n),this.emit("settings",n))}updateAllSettings(e){for(const t of this.entries)Object.assign(t.settings,e),t.image&&this._build(t);this.emit("update-all")}resetCloth(){for(const e of this.entries)e.group&&(e.group.reset(),e.group.render())}_loadAndBuild(e){const t=Symbol("load");e._loadToken=t,Fm(e.source).then(n=>{e._loadToken===t&&(e.image=n,e.error=null,e.status="ready",this._build(e),this.emit("update",e))}).catch(n=>{e._loadToken===t&&(e.image=null,e.status="error",e.error=n.message||String(n),this._build(e),this.emit("update",e),this.emit("error",{entry:e,message:e.error}))})}_destroyGroup(e){e.group&&(e.holder.remove(e.group.object),e.group.destroy(),e.group=null)}_build(e){this._destroyGroup(e);const t=e.settings,n={mass:t.mass};e.image?Object.assign(n,dm({image:e.image,width:"auto",height:t.height,hoisting:t.hoisting,orientation:t.orientation,resolution:320})):(n.width=t.height*1.5,n.height=t.height);const i=new Nn(n),s=im({flagpoleType:t.flagpoleType,verticalHoisting:t.verticalHoisting},i),o=new Vp({flagpole:s,flag:i});if(t.flagpoleType===Je.HORIZONTAL||t.flagpoleType===Je.OUTRIGGER){const a=s.constructor.defaults.poleLength;o.object.position.set(0,a,0).sub(s.top)}e.group=o,e.holder.add(o.object),o.reset(),o.render(),this._updateBounds()}setLayout(e){vs[e]&&(this.layoutId=e,this.relayout())}setSpacing(e){this.spacing=Math.max(.5,e),this.relayout()}relayout(){const e=this.entries.length;if(e===0){this._updateBounds();return}const t=vs[this.layoutId].place(e,this.spacing);this.entries.forEach((n,i)=>{n.holder.position.copy(t[i].position),n.holder.rotation.y=t[i].rotationY,n.holder.updateMatrixWorld(!0)}),this._updateBounds(),this.emit("layout")}_updateBounds(){const e=this._bounds.makeEmpty();for(const t of this.entries){const n=t.holder.position,i=t.settings.height,s=t.group?t.group.flag.cloth.width:i*1.5;e.expandByPoint(new P(n.x-s,0,n.z-s)),e.expandByPoint(new P(n.x+s,6.3,n.z+s))}this.world.fitShadowToBounds(e.isEmpty()?null:e)}get bounds(){return this._bounds}setWind({speed:e,angle:t,mode:n}){e!==void 0&&(this.windSpeed=e),t!==void 0&&(this.windAngle=t),n!==void 0&&(this.windMode=n),this._applyWindSettings()}_applyWindSettings(){const e=this.windAngle*Math.PI/180,t=new P(Math.cos(e),.002,Math.sin(e)+.003);switch(this.windMode){case"natural":this.wind.directionFn=Ii.rotatingDirection,this.wind.speedFn=Ii.variableSpeed;break;case"gusty":this.wind.directionFn=(n,i)=>n.copy(t).add(new P(.15*Math.sin(i/2300),.1*Math.sin(i/1300),.3*Math.sin(i/1700))),this.wind.speedFn=(n,i)=>n*(1+.25*Math.cos(i/7e3)+.18*Math.sin(i/1100)+.1*Math.sin(i/530));break;default:this.wind.directionFn=n=>n.copy(t),this.wind.speedFn=Ii.constantSpeed}}setGust(e){Object.assign(this.gust,e)}_gustFactor(e,t){if(!this.gust.enabled||this.entries.length===0)return 1;const n=this._bounds,i=n.min.x-4,s=n.max.x+4,o=Math.max(1,s-i),a=t/this.gust.period%1,l=i+a*o,c=e-l,u=this.gust.width;return 1+this.gust.strength*Math.exp(-(c*c)/(2*u*u))}step(e){this.wind.speed=Math.max(0,this.windSpeed+this.externalGain),this.wind.update();const t=performance.now()/1e3;for(const n of this.entries){const i=n.group;if(!i)continue;const s=i.flag;em(s.cloth,s.object);const o=this._gustFactor(n.holder.position.x,t);o!==1?(this._tmpPressure.copy(this.wind.pressure).multiplyScalar(o),So(s.cloth,this._gustWind,s.object)):So(s.cloth,this.wind,s.object),i.simulate(e),i.render()}}toJSON(e={}){const t=n=>n==="simple"||n==="country"||n==="url";return{layout:this.layoutId,height:Di.height,spacing:this.spacing,wind:{speed:this.windSpeed,angle:this.windAngle,mode:this.windMode},gust:{...this.gust},flags:this.entries.filter(n=>t(n.source.type)||!e.forShare&&n.source.type==="stored").map(n=>({source:n.source,settings:n.settings}))}}fromJSON(e){this.clear(),e.layout&&(this.layoutId=e.layout),e.spacing&&(this.spacing=e.spacing),e.height&&(Di.height=e.height),e.wind&&this.setWind(e.wind),e.gust&&this.setGust(e.gust);for(const t of e.flags||[])this.addFlag(t.source,t.settings);this.relayout()}}class Nm{constructor(){this.ctx=null,this.analyser=null,this.stream=null,this.level=0,this.gain=22,this.active=!1,this._buf=null,this._raf=0}async start(){if(this.active)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.ctx=new(window.AudioContext||window.webkitAudioContext);const e=this.ctx.createMediaStreamSource(this.stream);this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.6,e.connect(this.analyser),this._buf=new Float32Array(this.analyser.fftSize),this.active=!0;const t=()=>{if(!this.active)return;this.analyser.getFloatTimeDomainData(this._buf);let n=0;for(let o=0;o<this._buf.length;o++)n+=this._buf[o]*this._buf[o];const i=Math.sqrt(n/this._buf.length),s=Math.min(1,Math.max(0,(i-.02)/.33));this.level+=(s-this.level)*(s>this.level?.35:.06),this._raf=requestAnimationFrame(t)};t()}stop(){if(this.active=!1,cancelAnimationFrame(this._raf),this.stream)for(const e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.close(),this.stream=this.ctx=this.analyser=null,this.level=0}get extraSpeed(){return this.active?this.level*this.gain:0}}const _r="https://upload.wikimedia.org/wikipedia/commons/thumb",xr="https://commons.wikimedia.org/wiki/File:",vr=(r,e)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(r)}?width=${e}`,xs={capitol:{label:"US Capitol",kind:"photo",url:"./scenery/capitol.jpg",fallback:[`${_r}/a/a3/United_States_Capitol_west_front_edit2.jpg/2048px-United_States_Capitol_west_front_edit2.jpg`,vr("United_States_Capitol_west_front_edit2.jpg",2048)],page:`${xr}United_States_Capitol_west_front_edit2.jpg`,credit:"Architect of the Capitol",license:"Public domain",horizon:.42,hfov:70,light:"day",ground:"lawn"},taj:{label:"Taj Mahal",kind:"photo",url:"./scenery/taj.jpg",fallback:[`${_r}/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/2048px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg`,vr("Taj_Mahal,_Agra,_India_edit3.jpg",2048)],page:`${xr}Taj_Mahal,_Agra,_India_edit3.jpg`,credit:"Yann (edit: Jbarta)",license:"CC BY-SA 3.0",horizon:.38,hfov:60,light:"day",ground:"pavers"},sthelens:{label:"Mount St Helens summit",kind:"pano",url:"./scenery/sthelens.jpg",fallback:[`${_r}/b/b5/Mount_St_Helens_Summit_Pano.jpg/4096px-Mount_St_Helens_Summit_Pano.jpg`,vr("Mount_St_Helens_Summit_Pano.jpg",4096)],page:`${xr}Mount_St_Helens_Summit_Pano.jpg`,credit:"Gregg M. Erickson",license:"CC BY 3.0",horizon:.55,light:"day",ground:"gravel"}},Um=Object.keys(xs);function zm(r){return btoa(unescape(encodeURIComponent(r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function km(r){const e=r.replace(/-/g,"+").replace(/_/g,"/");return decodeURIComponent(escape(atob(e+"=".repeat((4-e.length%4)%4))))}function Bm(r){return zm(JSON.stringify(r))}function Gm(r){try{const e=r.replace(/^#/,"");return e?JSON.parse(km(e)):null}catch(e){return console.warn("FlagWaverPlus: could not parse URL state",e),null}}function Hm(r){const e=Bm(r);return history.replaceState(null,"",`#${e}`),`${location.origin}${location.pathname}#${e}`}function Vm(){return Gm(location.hash)}const Yr="flagwaverplus.scene.v1",Or="flagwaverplus.skipSave";let fl=!1;function Wm(){fl=!0;try{sessionStorage.setItem(Or,"1")}catch{}}function jm(){try{const r=sessionStorage.getItem(Or)==="1";return sessionStorage.removeItem(Or),r}catch{return!1}}function pl(r){if(!fl)try{localStorage.setItem(Yr,JSON.stringify(r))}catch{}}function qm(){try{const r=localStorage.getItem(Yr);return r?JSON.parse(r):null}catch{return null}}function Xm(){try{localStorage.removeItem(Yr)}catch{}}function ml(r){const e=new Set;for(const t of r.flags||[])t.source&&t.source.type==="stored"&&e.add(t.source.value);return r.sceneryStored&&e.add(r.sceneryStored),e}async function Ym(r){const e={};for(const s of ml(r)){const o=await Lm(s);o&&(e[s]={dataUrl:o.dataUrl,name:o.name})}const t={app:"FlagWaverPlus",version:1,saved:new Date().toISOString(),state:r,images:e},n=new Blob([JSON.stringify(t)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=`flagwaverplus-scene-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}async function $m(r){const e=await r.text(),t=JSON.parse(e);if(!t||t.app!=="FlagWaverPlus"||!t.state)throw new Error("Not a FlagWaverPlus scene file.");for(const[n,i]of Object.entries(t.images||{}))i&&i.dataUrl&&await Pm(i.dataUrl,i.name||"image",n);return t.state}const I=(r,e={},...t)=>{const n=document.createElement(r);for(const[i,s]of Object.entries(e))i==="class"?n.className=s:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),s):s!=null&&s!==!1&&n.setAttribute(i,s);for(const i of t.flat())i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n},ut=(r,e,t)=>{const n=I("option",{value:r},e);return t&&(n.selected=!0),n},Co=r=>`${r.type}:${r.value}`,Lo="flagwaverplus.history.v1";function Zm(r,{manager:e,world:t,mic:n,toast:i}){let s=null,o=!0;const a=[["flags","Flags"],["wind","Wind"],["scene","Scene"],["share","Share"]],l=I("nav",{class:"tabs"}),c={};for(const[L,B]of a)l.appendChild(I("button",{class:"tab","data-tab":L,onClick:()=>u(L)},B)),c[L]=I("section",{class:"page hidden","data-page":L});function u(L){l.querySelectorAll(".tab").forEach(B=>B.classList.toggle("active",B.dataset.tab===L)),Object.values(c).forEach(B=>B.classList.toggle("hidden",B.dataset.page!==L))}r.append(I("header",{class:"panel-head"},I("h1",{},"FlagWaverPlus"),I("button",{class:"collapse",title:"Hide panel (Tab)",onClick:()=>r.classList.toggle("collapsed")},"⇤")),l,...Object.values(c)),u("flags");function h(){o&&setTimeout(()=>t.frame(e.bounds),50)}const d=c.flags,m=I("input",{type:"search",placeholder:"Search a country… (Enter adds first match)",class:"search"}),g=I("div",{class:"results hidden"});function p(L,B=12){const xe=wm(L,B).map(je=>({type:"country",value:je})),Ne=L.trim().toLowerCase();if(Ne)for(const je of Tm)Es[je].name.toLowerCase().includes(Ne)&&xe.push({type:"simple",value:je});return xe.slice(0,B+4)}function f(){g.innerHTML="";const L=p(m.value);for(const B of L)g.appendChild(I("button",{class:"result",onClick:()=>_(B)},U(B,32,22),ms(B),B.type==="simple"?I("span",{class:"tag"},"offline"):null));g.classList.toggle("hidden",L.length===0)}m.addEventListener("input",f),m.addEventListener("keydown",L=>{if(L.key==="Enter"){const B=p(m.value,1)[0];B&&_(B)}L.key==="Escape"&&(m.value="",f())});function _(L){e.addFlag({...L}),m.value="",f(),h()}const S=I("input",{type:"file",accept:"image/*",multiple:"",class:"hidden"});S.addEventListener("change",async()=>{const L=[...S.files];S.value="";for(const B of L)try{const{key:xe,name:Ne}=await Ao(B,1024);e.addFlag({type:"stored",value:xe,name:Ne})}catch{e.addFlag({type:"upload",value:URL.createObjectURL(B),name:B.name.replace(/\.[^.]+$/,"")})}h()});const M=I("input",{type:"url",placeholder:"https://… image URL (must allow CORS)",class:"search"});M.addEventListener("keydown",L=>{L.key==="Enter"&&M.value.trim()&&(e.addFlag({type:"url",value:M.value.trim()}),M.value="",h())});function T(L){const B=[...ul];for(let xe=0;xe<L&&B.length;xe++)e.addFlag({type:"country",value:B.splice(Math.floor(Math.random()*B.length),1)[0]});h()}const y=new Map;try{for(const L of JSON.parse(localStorage.getItem(Lo)||"[]"))y.set(Co(L),{source:L,image:null})}catch{}function C(){try{const L=[...y.values()].map(B=>B.source).filter(B=>B.type==="country"||B.type==="simple"||B.type==="url"||B.type==="stored").slice(-60);localStorage.setItem(Lo,JSON.stringify(L))}catch{}}function U(L,B=40,xe=26,Ne=null){if(L.type==="country")return I("img",{src:`https://flagcdn.com/w80/${L.value}.png`,alt:"",loading:"lazy",width:B,height:xe});const je=document.createElement("canvas");je.width=B,je.height=xe;const lt=je.getContext("2d");let b=Ne;L.type==="simple"&&(b=dl(L.value,40));const k=V=>{const O=V.width,X=V.height,be=Math.min(B/O,xe/X);lt.clearRect(0,0,B,xe),lt.drawImage(V,(B-O*be)/2,(xe-X*be)/2,O*be,X*be)};return lt.fillStyle="#666",lt.fillRect(0,0,B,xe),b?k(b):L.type==="stored"&&Fr(L.value).then(V=>{const O=new Image;O.onload=()=>k(O),O.src=V}).catch(()=>{}),je}const v=I("div",{class:"chips"});function E(){if(v.innerHTML="",y.size===0){v.appendChild(I("span",{class:"muted small"},"Flags you add show up here for quick re-use."));return}for(const[L,B]of[...y.entries()].reverse()){const xe=I("button",{class:"chip",title:`${ms(B.source)} — click to add again`,onClick:()=>{e.addFlag({...B.source}),h()}},U(B.source,40,26,B.image));xe.addEventListener("contextmenu",Ne=>{Ne.preventDefault(),y.delete(L),C(),E()}),v.appendChild(xe)}}function N(L){const B=Co(L.source),xe=y.get(B);if(xe){L.image&&!xe.image&&(xe.image=L.image,E());return}y.set(B,{source:{...L.source},image:L.image}),C(),E()}const K=I("select",{class:"select",onChange:()=>{e.setLayout(K.value),h()}},...Mm.map(L=>ut(L,vs[L].label,L===e.layoutId))),$=I("input",{type:"range",min:1.2,max:8,step:.1,value:e.spacing});$.addEventListener("input",()=>e.setSpacing(+$.value)),$.addEventListener("change",h);const z=[["XS",.6],["S",.9],["M",1.2],["L",1.6],["XL",2.2],["XXL",3]],D=I("div",{class:"seg"});function q(){D.innerHTML="";for(const[L,B]of z)D.appendChild(I("button",{class:`seg-btn ${Math.abs(Di.height-B)<1e-6?"active":""}`,title:`${B} m tall`,onClick:()=>{e.setFlagHeight(B),q(),h()}},L))}q();const J=I("input",{type:"checkbox",checked:""});J.addEventListener("change",()=>{o=J.checked});const ee=I("div",{class:"flag-list"}),Y=I("div",{class:"detail hidden"});let te=null;function ie(L){const B=document.createElement("canvas");B.width=48,B.height=32;const xe=B.getContext("2d");if(L.image){const Ne=L.image,je=Ne.width,lt=Ne.height,b=Math.min(48/je,32/lt);xe.drawImage(Ne,(48-je*b)/2,(32-lt*b)/2,je*b,lt*b)}else xe.fillStyle=L.status==="error"?"#b33":"#555",xe.fillRect(0,0,48,32);return B}function pe(){ee.innerHTML="",e.count===0&&ee.appendChild(I("p",{class:"muted"},"No flags yet. Search a country or upload an image.")),e.entries.forEach((L,B)=>{const xe=I("div",{class:`flag-row ${L.id===s?"selected":""} ${L.status}`,draggable:"true","data-id":L.id,onClick:()=>G(L.id===s?null:L.id)},I("span",{class:"grip",title:"Drag to reorder"},"⋮⋮"),I("span",{class:"idx"},B+1),ie(L),I("span",{class:"name"},ms(L.source),L.status==="loading"?" …":L.status==="error"?" ⚠":""),I("span",{class:"row-actions"},I("button",{title:"Duplicate",onClick:Ne=>{Ne.stopPropagation(),e.duplicateFlag(L.id),h()}},"⧉"),I("button",{title:"Remove",class:"danger",onClick:Ne=>{Ne.stopPropagation(),e.removeFlag(L.id),s===L.id&&G(null),h()}},"✕")));L.error&&(xe.title=L.error),xe.addEventListener("dragstart",Ne=>{te=L.id,xe.classList.add("dragging"),Ne.dataTransfer.effectAllowed="move",Ne.dataTransfer.setData("text/plain",String(L.id))}),xe.addEventListener("dragend",()=>{te=null,ee.querySelectorAll(".flag-row").forEach(Ne=>Ne.classList.remove("dragging","drop-above","drop-below"))}),xe.addEventListener("dragover",Ne=>{if(te===null||te===L.id)return;Ne.preventDefault(),Ne.dataTransfer.dropEffect="move";const je=xe.getBoundingClientRect(),lt=Ne.clientY>je.top+je.height/2;xe.classList.toggle("drop-above",!lt),xe.classList.toggle("drop-below",lt)}),xe.addEventListener("dragleave",()=>xe.classList.remove("drop-above","drop-below")),xe.addEventListener("drop",Ne=>{if(Ne.preventDefault(),te===null||te===L.id)return;const je=xe.getBoundingClientRect(),lt=Ne.clientY>je.top+je.height/2,b=e.entries.findIndex(V=>V.id===te);let k=e.entries.findIndex(V=>V.id===L.id)+(lt?1:0);b<k&&k--,e.moveTo(te,k)}),ee.appendChild(xe)})}function G(L){s=L,e.setSelected(L),pe(),H()}let Z=null,re=null,ae=null;function H(){const L=e.getEntry(s);if(Y.classList.toggle("hidden",!L),Y.innerHTML="",!L)return;const B=L.settings,xe=k=>e.updateSettings(L.id,k),Ne=I("select",{class:"select",onChange:()=>xe({hoisting:Ne.value})},ut(Ln.DEXTER,"Pole on left (normal)",B.hoisting===Ln.DEXTER),ut(Ln.SINISTER,"Pole on right (mirrored)",B.hoisting===Ln.SINISTER)),je=I("select",{class:"select",onChange:()=>xe({orientation:je.value})},ut(Pe.TOP,"Normal",B.orientation===Pe.TOP),ut(Pe.LEFT,"Rotated 90° right",B.orientation===Pe.LEFT),ut(Pe.RIGHT,"Rotated 90° left",B.orientation===Pe.RIGHT),ut(Pe.BOTTOM,"Rotated 180°",B.orientation===Pe.BOTTOM)),lt=I("select",{class:"select",onChange:()=>{xe({flagpoleType:lt.value}),ae.classList.toggle("hidden",lt.value!==Je.CROSSBAR)}},ut(Je.VERTICAL,"Vertical pole",B.flagpoleType===Je.VERTICAL),ut(Je.HORIZONTAL,"Horizontal pole",B.flagpoleType===Je.HORIZONTAL),ut(Je.OUTRIGGER,"Outrigger (angled from wall)",B.flagpoleType===Je.OUTRIGGER),ut(Je.CROSSBAR,"Crossbar (hangs from a bar)",B.flagpoleType===Je.CROSSBAR),ut(Je.GALLERY,"Gallery (banner on a bar)",B.flagpoleType===Je.GALLERY)),b=I("select",{class:"select",onChange:()=>xe({verticalHoisting:b.value})},ut(Wt.TOP_RIGHT,"Turn flag 90° right",B.verticalHoisting===Wt.TOP_RIGHT),ut(Wt.TOP_LEFT,"Turn flag 90° left",B.verticalHoisting===Wt.TOP_LEFT),ut(Wt.NONE,"Keep upright (hang by top edge)",B.verticalHoisting===Wt.NONE));ae=I("div",{class:`hang ${B.flagpoleType===Je.CROSSBAR?"":"hidden"}`},I("p",{class:"muted small"},"Crossbar hanging: a flag hung from a horizontal bar is normally turned on its side so the hoist edge is at the top (vexillological convention). Pick which way to turn it, or keep it upright."),b),Z=I("h3",{}),re=I("p",{class:"error hidden"}),Y.append(Z,re,I("label",{class:"field"},"Pole side",Ne),I("label",{class:"field"},"Rotation",je),I("label",{class:"field"},"Pole type",lt),ae,I("div",{class:"tool-row"},I("button",{onClick:()=>{e.updateAllSettings({hoisting:B.hoisting,orientation:B.orientation,flagpoleType:B.flagpoleType,verticalHoisting:B.verticalHoisting}),i("Applied to all flags")}},"Apply to all"),I("button",{onClick:()=>{e.duplicateFlag(L.id),h()}},"Duplicate"),I("span",{class:"spacer"}),I("button",{class:"danger",onClick:()=>{e.removeFlag(L.id),G(null),h()}},"Remove"))),Te()}function Te(){const L=e.getEntry(s);!L||!Z||(Z.textContent=`Editing flag ${e.entries.indexOf(L)+1}: ${ms(L.source)}`,re.textContent=L.error||"",re.classList.toggle("hidden",!L.error))}e.on((L,B)=>{L==="add"&&N(B),L==="update"&&B&&N(B),["add","remove","update","reorder","update-all"].includes(L)&&(s!==null&&!e.getEntry(s)&&(s=null,e.setSelected(null),Y.classList.add("hidden")),pe(),Te()),L==="settings"&&B&&B.id}),d.append(I("div",{class:"block"},I("h2",{},"Add flags"),m,g,I("div",{class:"tool-row"},I("button",{onClick:()=>S.click()},"Upload image(s)"),I("button",{onClick:()=>T(5)},"🎲 5 random"),S),M,I("p",{class:"muted small"},"Recently used (click to add again, right-click to forget):"),v),I("div",{class:"block"},I("h2",{},"Arrangement"),I("label",{class:"field"},"Layout",K),I("label",{},"Spacing ",$),I("label",{class:"field"},"Flag size",D),I("div",{class:"tool-row"},I("button",{onClick:()=>t.frame(e.bounds)},"Frame all"),I("label",{class:"row"},J," auto-frame"),I("span",{class:"spacer"}),I("button",{class:"danger",onClick:()=>{e.clear(),G(null)}},"Clear all"))),I("div",{class:"block"},I("h2",{},"Your flags"),I("p",{class:"muted small"},"Click a flag to edit it. Drag rows to reorder."),ee,Y)),pe(),E();const ye=c.wind,_e=I("input",{type:"range",min:0,max:30,step:.5,value:e.windSpeed}),fe=I("span",{class:"val"},`${e.windSpeed} m/s`);_e.addEventListener("input",()=>{e.setWind({speed:+_e.value}),fe.textContent=`${_e.value} m/s`});const Ue=I("input",{type:"range",min:-180,max:180,step:5,value:e.windAngle}),Ee=I("span",{class:"val"},`${e.windAngle}°`);Ue.addEventListener("input",()=>{e.setWind({angle:+Ue.value}),Ee.textContent=`${Ue.value}°`});const Me=I("label",{},"Direction ",Ue,Ee),Ke=I("select",{class:"select",onChange:()=>{e.setWind({mode:Ke.value}),Me.classList.toggle("disabled",Ke.value==="natural")}},ut("natural","Natural — wandering direction, varying speed (FlagWaver default)",e.windMode==="natural"),ut("gusty","Gusty — fixed direction, turbulent",e.windMode==="gusty"),ut("steady","Steady — fixed direction, constant",e.windMode==="steady"));Me.classList.toggle("disabled",e.windMode==="natural");const tt=I("input",{type:"checkbox"}),$e=I("input",{type:"range",min:.5,max:5,step:.1,value:e.gust.strength}),ot=I("input",{type:"range",min:1.5,max:12,step:.5,value:e.gust.period}),Ye=I("input",{type:"range",min:.8,max:8,step:.2,value:e.gust.width});tt.addEventListener("change",()=>e.setGust({enabled:tt.checked})),$e.addEventListener("input",()=>e.setGust({strength:+$e.value})),ot.addEventListener("input",()=>e.setGust({period:+ot.value})),Ye.addEventListener("input",()=>e.setGust({width:+Ye.value}));const Ie=I("button",{class:"btn-primary"},"🎤 Blow into mic"),wt=I("div",{class:"meter"},I("div",{class:"meter-fill"})),pt=I("input",{type:"range",min:5,max:40,step:1,value:n.gain});pt.addEventListener("input",()=>{n.gain=+pt.value}),Ie.addEventListener("click",async()=>{if(n.active){n.stop(),Ie.textContent="🎤 Blow into mic",Ie.classList.remove("live");return}try{await n.start(),Ie.textContent="■ Stop mic",Ie.classList.add("live"),i("Mic on — blow or shout to make wind")}catch{i("Microphone access denied or unavailable","error")}}),function L(){wt.firstChild.style.width=`${Math.round(n.level*100)}%`,requestAnimationFrame(L)}(),ye.append(I("div",{class:"block"},I("h2",{},"Wind"),I("label",{class:"field"},"Mode",Ke),I("label",{},"Speed ",_e,fe),Me),I("div",{class:"block"},I("h2",{},"Travelling gust"),I("p",{class:"muted small"},"A pulse of wind sweeps along the line of flags so they ripple one after another."),I("label",{class:"row"},tt," Enable gust sweep"),I("label",{},"Strength ",$e),I("label",{},"Period (s) ",ot),I("label",{},"Width (m) ",Ye)),I("div",{class:"block"},I("h2",{},"Lung power"),I("p",{class:"muted small"},"Uses your microphone loudness as wind. Nothing is recorded."),Ie,wt,I("label",{},"Mic gain ",pt)));const w=c.scene,x=I("div",{class:"presets"});for(const L of fm)x.appendChild(I("button",{class:`preset-btn ${L===t.presetId?"active":""}`,"data-id":L,onClick:()=>{t.applyPreset(L),x.querySelectorAll(".preset-btn").forEach(B=>B.classList.toggle("active",B.dataset.id===L))}},I("span",{class:"swatch-bg",style:`background:${Kt[L].css}`}),Kt[L].label));const j=I("input",{type:"checkbox",checked:""});j.addEventListener("change",()=>t.setGroundVisible(j.checked));const ne=I("select",{class:"select",onChange:()=>t.setGround(ne.value)},...vm.map(L=>ut(L,Rr[L].label,L===t.groundId)));t.onGroundChange=L=>{ne.value=L};const se=I("button",{onClick:()=>ce()},"⏸ Pause");function ce(){t.setPaused(!t.paused),se.textContent=t.paused?"▶ Play":"⏸ Pause"}const Se=I("input",{type:"range",min:.1,max:2,step:.05,value:1});Se.addEventListener("input",()=>{t.timeScale=+Se.value});const A=I("button",{onClick:()=>{const L=I("a",{href:t.screenshot(),download:`flagwaverplus-${Date.now()}.png`});document.body.appendChild(L),L.click(),L.remove()}},"📷 Screenshot"),F=I("div",{class:"scenery-grid"}),ue=I("p",{class:"muted small credit"}),he=I("input",{type:"range",min:-8,max:8,step:.25,value:0}),le=I("input",{type:"range",min:.6,max:1.8,step:.02,value:1}),me=I("input",{type:"range",min:-180,max:180,step:2,value:0}),ge=I("div",{class:"hidden"},I("label",{title:"Shift where the image horizon sits relative to the flags"},"Horizon ",he),I("label",{class:"photo-only",title:"How wide the photo is spread behind the flags"},"Photo width ",le),I("label",{class:"pano-only"},"Rotate ",me));he.addEventListener("input",()=>t.scenery.setHeight(+he.value)),le.addEventListener("input",()=>t.scenery.setScale(+le.value)),me.addEventListener("input",()=>t.scenery.setYaw(+me.value));let Ce=null,Re=null,He=null;function R(L){Ce=L,F.querySelectorAll(".scenery-btn").forEach(xe=>xe.classList.toggle("active",xe.dataset.id===(L||"none")));const B=t.scenery.active;ge.classList.toggle("hidden",!B),ge.querySelector(".photo-only").classList.toggle("hidden",!B||B.def.kind!=="photo"),ge.querySelector(".pano-only").classList.toggle("hidden",!B||B.def.kind!=="pano"),ue.innerHTML="",B&&B.def.credit?ue.append("Photo: ",B.def.page?I("a",{href:B.def.page,target:"_blank",rel:"noopener"},B.def.credit):B.def.credit,` · ${B.def.license} · via Wikimedia Commons`):B&&(ue.textContent="Custom backdrop (not included in share links unless it is a URL)."),x.querySelectorAll(".preset-btn").forEach(xe=>xe.classList.toggle("active",xe.dataset.id===t.presetId))}async function W(L,B,xe=null,Ne=null){if(!L){t.scenery.clear(),Re=null,He=null,R(null);return}F.querySelectorAll(".scenery-btn").forEach(je=>je.classList.toggle("loading",je.dataset.id===L));try{await t.scenery.load(L,B),Re=xe,He=Ne,he.value=0,le.value=1,me.value=0,R(L),o&&setTimeout(()=>t.frame(e.bounds),50)}catch(je){i(je.message,"error",5e3),R(null)}finally{F.querySelectorAll(".scenery-btn").forEach(je=>je.classList.remove("loading"))}}F.appendChild(I("button",{class:"scenery-btn active","data-id":"none",onClick:()=>W(null)},I("span",{class:"scenery-kind"},"sky"),"None (gradient)"));for(const L of Um){const B=xs[L];F.appendChild(I("button",{class:"scenery-btn","data-id":L,title:`${B.label} — ${B.credit}, ${B.license}`,onClick:()=>W(L,B)},I("span",{class:"scenery-kind"},B.kind==="pano"?"360°":"photo"),B.label))}const Q=I("input",{type:"file",accept:"image/*",class:"hidden"});Q.addEventListener("change",async()=>{const L=Q.files[0];if(Q.value="",!!L)try{const{key:B,dataUrl:xe}=await Ao(L,4096);W("custom",{kind:"auto",url:xe,label:L.name},null,B)}catch{W("custom",{kind:"auto",url:URL.createObjectURL(L),label:L.name})}});const de=I("input",{type:"url",placeholder:"https://… photo or 360° panorama URL (CORS)",class:"search"});de.addEventListener("keydown",L=>{if(L.key==="Enter"&&de.value.trim()){const B=de.value.trim();W("custom",{kind:"auto",url:B,label:B},B)}}),w.append(I("div",{class:"block"},I("h2",{},"Scenery"),I("p",{class:"muted small"},"One picture behind the flags. A wide strip wraps all the way round as a 360° panorama; any other photo is spread behind the scene and the camera stays within it. Images load only when picked."),F,I("div",{class:"tool-row"},I("button",{onClick:()=>Q.click()},"Upload photo / panorama"),Q),de,ge,ue),I("div",{class:"block"},I("h2",{},"Ground"),I("label",{class:"field"},"Surface",ne),I("label",{class:"row"},j," Show ground")),I("div",{class:"block"},I("h2",{},"Sky & light"),x),I("div",{class:"block"},I("h2",{},"Time"),I("div",{class:"tool-row"},se,I("button",{onClick:()=>e.resetCloth()},"Reset cloth")),I("label",{},"Speed ",Se)),I("div",{class:"block"},I("h2",{},"Export"),A,I("p",{class:"muted small"},"Drag to orbit, scroll to zoom, right-drag to pan. Space pauses, Tab hides this panel.")));const ve=I("input",{type:"text",readonly:"",class:"search"}),Ve=I("button",{class:"btn-primary",onClick:async()=>{const L=Hm(nt({forShare:!0}));ve.value=L;try{await navigator.clipboard.writeText(L),i("Link copied")}catch{i("Link ready — copy it from the box")}const B=e.entries.filter(xe=>xe.source.type==="upload"||xe.source.type==="stored").length;B&&i(`${B} uploaded flag(s) can't go in a link — use a scene file for those`,"warn",4500)}},"🔗 Copy share link"),Ze=I("input",{type:"file",accept:"application/json,.json",class:"hidden"});Ze.addEventListener("change",async()=>{const L=Ze.files[0];if(Ze.value="",!!L)try{const B=await $m(L);await Xe(B),i("Scene loaded")}catch(B){i(B.message||"Could not read scene file","error",5e3)}}),c.share.append(I("div",{class:"block"},I("h2",{},"Scene file"),I("p",{class:"muted small"},"Everything — flags (uploaded images included), arrangement, wind, sky and backdrop — in one .json you can keep or send. The scene also autosaves in this browser and comes back when you reopen the page."),I("div",{class:"tool-row"},I("button",{class:"btn-primary",onClick:()=>Ym(nt()).catch(()=>i("Export failed","error"))},"⬇ Save scene file"),I("button",{onClick:()=>Ze.click()},"⬆ Load scene file"),Ze,I("span",{class:"spacer"}),I("button",{class:"danger",title:"Forget the autosaved scene and start from the default flags",onClick:()=>{Wm(),Xm(),window.history.replaceState(null,"",location.pathname),location.reload()}},"Reset"))),I("div",{class:"block"},I("h2",{},"Share this scene"),I("p",{class:"muted small"},"Encodes countries, offline flags, image URLs, layout and wind into the URL. Uploaded images stay on your machine."),Ve,ve),I("div",{class:"block about"},I("h2",{},"Credits"),I("p",{},"Cloth and flagpole simulation from ",I("a",{href:"https://github.com/krikienoid/flagwaver",target:"_blank",rel:"noopener"},"FlagWaver")," by ",I("a",{href:"https://github.com/krikienoid",target:"_blank",rel:"noopener"},"krikienoid")," (MIT), itself based on earlier work by ",I("a",{href:"http://flagtest.nz/",target:"_blank",rel:"noopener"},"flagtest.nz")," and ",I("a",{href:"https://github.com/zz85",target:"_blank",rel:"noopener"},"Joshua Koo"),". Rendering by ",I("a",{href:"https://threejs.org",target:"_blank",rel:"noopener"},"three.js"),"."),I("p",{},"Country flags from ",I("a",{href:"https://flagcdn.com",target:"_blank",rel:"noopener"},"flagcdn.com"),". Scenery photos from Wikimedia Commons: Architect of the Capitol (public domain), Yann / Jbarta (CC BY-SA 3.0), Gregg M. Erickson (CC BY 3.0) — each is linked in the Scene tab when active."),I("p",{},"Multi-flag scenes, layouts, gust, mic wind, scenery, persistence and UI: this project. ",I("a",{href:"https://github.com/codegrox/codegrox.github.io/tree/main/projects/FlagWaverPlus",target:"_blank",rel:"noopener"},"Source")," · ",I("a",{href:"../../"},"← codegrox.github.io"))));function nt(L={}){const B=e.toJSON(L);return B.preset=t.presetId,B.ground=j.checked,B.groundType=t.groundId,Ce&&Ce!=="custom"?B.scenery=Ce:Ce==="custom"&&Re?B.sceneryUrl=Re:Ce==="custom"&&He&&!L.forShare&&(B.sceneryStored=He),t.scenery.active&&(B.sceneryHeight=t.scenery.height,B.sceneryScale=t.scenery.scale,B.sceneryYaw=t.scenery.yaw),B}async function Xt(L){if(L.preset&&Kt[L.preset]&&(t.applyPreset(L.preset),x.querySelectorAll(".preset-btn").forEach(B=>B.classList.toggle("active",B.dataset.id===L.preset))),L.ground===!1&&(j.checked=!1,t.setGroundVisible(!1)),L.scenery&&xs[L.scenery])await W(L.scenery,xs[L.scenery]);else if(L.sceneryUrl)await W("custom",{kind:"auto",url:L.sceneryUrl,label:L.sceneryUrl},L.sceneryUrl);else if(L.sceneryStored)try{const B=await Fr(L.sceneryStored);await W("custom",{kind:"auto",url:B,label:"Uploaded backdrop"},null,L.sceneryStored)}catch{}L.groundType&&Rr[L.groundType]&&t.setGround(L.groundType),t.scenery.active&&(typeof L.sceneryHeight=="number"&&(t.scenery.setHeight(L.sceneryHeight),he.value=L.sceneryHeight),typeof L.sceneryScale=="number"&&(t.scenery.setScale(L.sceneryScale),le.value=L.sceneryScale),typeof L.sceneryYaw=="number"&&(t.scenery.setYaw(L.sceneryYaw),me.value=L.sceneryYaw)),K.value=e.layoutId,$.value=e.spacing,q()}function Xe(L){return e.fromJSON(L),G(null),Xt(L).then(()=>{o&&setTimeout(()=>t.frame(e.bounds),100)})}return window.addEventListener("keydown",L=>{L.target.matches("input, textarea, select")||(L.code==="Space"&&(L.preventDefault(),ce()),L.code==="Tab"&&(L.preventDefault(),r.classList.toggle("collapsed")),L.code==="Escape"&&G(null))}),{showTab:u,select:G,renderList:pe,getState:nt,applyState:Xt,loadStateFromFile:Xe}}function Km(r){return function(t,n="info",i=3200){const s=document.createElement("div");s.className=`toast toast-${n}`,s.textContent=t,r.appendChild(s),requestAnimationFrame(()=>s.classList.add("show")),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},i)}}const Jm=document.getElementById("stage"),Nr=document.getElementById("panel"),gl=Km(document.getElementById("toasts")),kn=new bm(Jm);kn.obstructionLeft=()=>window.innerWidth>720&&!Nr.classList.contains("collapsed")?Nr.offsetWidth+24:0;const Un=new Om(kn);kn.setGround("grass");const $r=new Nm;kn.onUpdate(()=>{Un.externalGain=$r.extraSpeed});Un.on((r,e)=>{r==="error"&&gl(e.message,"error",4500)});const As=Zm(Nr,{manager:Un,world:kn,mic:$r,toast:gl}),yr=Vm(),br=jm()?null:qm(),Mr=yr&&Array.isArray(yr.flags)?yr:br&&Array.isArray(br.flags)?br:null;if(Mr)Un.fromJSON(Mr),As.applyState(Mr);else for(const r of[{type:"simple",value:"japan"},{type:"simple",value:"armenia"},{type:"country",value:"us"},{type:"simple",value:"france"},{type:"country",value:"hk"}])Un.addFlag(r);setTimeout(()=>kn.frame(Un.bounds,!1),60);let Po="";setInterval(()=>{const r=As.getState(),e=JSON.stringify(r);e!==Po&&(Po=e,pl(r))},1500);window.addEventListener("beforeunload",()=>pl(As.getState()));setTimeout(()=>{const r=ml(As.getState());try{for(const e of JSON.parse(localStorage.getItem("flagwaverplus.history.v1")||"[]"))e.type==="stored"&&r.add(e.value)}catch{}Rm(r)},8e3);window.flagwaverplus={world:kn,manager:Un,mic:$r};
