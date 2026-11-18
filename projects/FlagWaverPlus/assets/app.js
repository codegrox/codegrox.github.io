var al=Object.defineProperty;var ol=(r,e,t)=>e in r?al(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var zi=(r,e,t)=>ol(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Er="149",Fn={ROTATE:0,DOLLY:1,PAN:2},On={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ll=0,Br=1,cl=2,vo=1,yo=2,Ei=3,tn=0,xt=1,jt=2,cn=0,ei=1,Gr=2,Hr=3,Vr=4,ul=5,Jn=100,hl=101,dl=102,Wr=103,qr=104,fl=200,pl=201,ml=202,gl=203,bo=204,Mo=205,_l=206,xl=207,vl=208,yl=209,bl=210,Ml=0,Sl=1,wl=2,fr=3,El=4,Tl=5,Al=6,Cl=7,So=0,Ll=1,Pl=2,Xt=0,Rl=1,Dl=2,Il=3,Fl=4,Ol=5,wo=300,si=301,ri=302,pr=303,mr=304,gs=306,Li=1e3,Nt=1001,gr=1002,gt=1003,jr=1004,Ts=1005,bt=1006,Nl=1007,Pi=1008,An=1009,Ul=1010,zl=1011,Eo=1012,kl=1013,Mn=1014,Sn=1015,Ri=1016,Bl=1017,Gl=1018,ti=1020,Hl=1021,Gt=1023,Vl=1024,Wl=1025,En=1026,ai=1027,ql=1028,jl=1029,Xl=1030,Yl=1031,$l=1033,As=33776,Cs=33777,Ls=33778,Ps=33779,Xr=35840,Yr=35841,$r=35842,Zr=35843,Zl=36196,Kr=37492,Jr=37496,Qr=37808,ea=37809,ta=37810,na=37811,ia=37812,sa=37813,ra=37814,aa=37815,oa=37816,la=37817,ca=37818,ua=37819,ha=37820,da=37821,Rs=36492,Kl=36283,fa=36284,pa=36285,ma=36286,Cn=3e3,qe=3001,Jl=3200,Ql=3201,To=0,ec=1,Wt="srgb",Di="srgb-linear",Ds=7680,tc=519,ga=35044,nc=35040,_r="300 es",xr=1035;class In{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,_a=180/Math.PI;function Ni(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function ic(r,e){return(r%e+e)%e}function Fs(r,e,t){return(1-t)*r+t*e}function xa(r){return(r&r-1)===0&&r!==0}function vr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],S=i[1],M=i[4],E=i[7],y=i[2],L=i[5],U=i[8];return s[0]=o*p+a*S+l*y,s[3]=o*d+a*M+l*L,s[6]=o*g+a*E+l*U,s[1]=u*p+c*S+h*y,s[4]=u*d+c*M+h*L,s[7]=u*g+c*E+h*U,s[2]=f*p+m*S+_*y,s[5]=f*d+m*M+_*L,s[8]=f*g+m*E+_*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,m=u*s-o*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*u-c*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(c*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-u*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Dt;function Ao(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ii(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ns={[Wt]:{[Di]:Tn},[Di]:{[Wt]:hs}},yt={legacyMode:!0,get workingColorSpace(){return Di},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ns[e]&&Ns[e][t]!==void 0){const n=Ns[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},Ut={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Us(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Gi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=ic(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Us(o,s,e+1/3),this.g=Us(o,s,e),this.b=Us(o,s,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Wt){const n=Co[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return yt.fromWorkingColorSpace(Gi(this,at),e),Tt(at.r*255,0,255)<<16^Tt(at.g*255,0,255)<<8^Tt(at.b*255,0,255)<<0}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Gi(this,at),t);const n=at.r,i=at.g,s=at.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Gi(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Wt){return yt.fromWorkingColorSpace(Gi(this,at),e),e!==Wt?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(Bi);const n=Fs(Ut.h,Bi.h,t),i=Fs(Ut.s,Bi.s,t),s=Fs(Ut.l,Bi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=Co;let Nn;class Lo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nn===void 0&&(Nn=Ii("canvas")),Nn.width=e.width,Nn.height=e.height;const n=Nn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ii("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Po{constructor(e=null){this.isSource=!0,this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zs(i[o].image)):s.push(zs(i[o]))}else s=zs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Lo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sc=0;class ot extends In{constructor(e=ot.DEFAULT_IMAGE,t=ot.DEFAULT_MAPPING,n=Nt,i=Nt,s=bt,o=Pi,a=Gt,l=An,u=ot.DEFAULT_ANISOTROPY,c=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Ni(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ot.DEFAULT_IMAGE=null;ot.DEFAULT_MAPPING=wo;ot.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],m=l[5],_=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+p)<.1&&Math.abs(_+d)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(m+1)/2,y=(g+1)/2,L=(c+f)/4,U=(h+p)/4,v=(_+d)/4;return M>E&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=L/n,s=U/n):E>y?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=L/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=U/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-_)*(d-_)+(h-p)*(h-p)+(f-c)*(f-c));return Math.abs(S)<.001&&(S=1),this.x=(d-_)/S,this.y=(h-p)/S,this.z=(f-c)/S,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ln extends In{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Po(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ro extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==f||u!==m||c!==_){let d=1-a;const g=l*f+u*m+c*_+h*p,S=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const y=Math.sqrt(M),L=Math.atan2(y,g*S);d=Math.sin(d*L)/y,a=Math.sin(a*L)/y}const E=a*S;if(l=l*d+f*E,u=u*d+m*E,c=c*d+_*E,h=h*d+p*E,d===1-a){const y=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=y,u*=y,c*=y,h*=y}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+c*h+l*m-u*f,e[t+1]=l*_+c*f+u*h-a*m,e[t+2]=u*_+c*m+a*f-l*h,e[t+3]=c*_-a*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h-f*m*_;break;case"YXZ":this._x=f*c*h+u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h+f*m*_;break;case"ZXY":this._x=f*c*h-u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h-f*m*_;break;case"ZYX":this._x=f*c*h-u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h+f*m*_;break;case"YZX":this._x=f*c*h+u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h-f*m*_;break;case"XZY":this._x=f*c*h-u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=u*l+f*-s+c*-a-h*-o,this.y=c*l+f*-o+h*-s-u*-a,this.z=h*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ks.copy(this).projectOnVector(e),this.sub(ks)}reflect(e){return this.sub(ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new C,va=new Pn;class ci{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],f=e[l+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),f=e.getZ(l);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)mn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(mn)}else n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox),Bs.applyMatrix4(e.matrixWorld),this.union(Bs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Hi.subVectors(this.max,mi),Un.subVectors(e.a,mi),zn.subVectors(e.b,mi),kn.subVectors(e.c,mi),sn.subVectors(zn,Un),rn.subVectors(kn,zn),gn.subVectors(Un,kn);let t=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-gn.z,gn.y,sn.z,0,-sn.x,rn.z,0,-rn.x,gn.z,0,-gn.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-gn.y,gn.x,0];return!Gs(t,Un,zn,kn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Gs(t,Un,zn,kn,Hi))?!1:(Vi.crossVectors(sn,rn),t=[Vi.x,Vi.y,Vi.z],Gs(t,Un,zn,kn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return mn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new C,new C,new C,new C,new C,new C,new C,new C],mn=new C,Bs=new ci,Un=new C,zn=new C,kn=new C,sn=new C,rn=new C,gn=new C,mi=new C,Hi=new C,Vi=new C,_n=new C;function Gs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_n.fromArray(r,s);const a=i.x*Math.abs(_n.x)+i.y*Math.abs(_n.y)+i.z*Math.abs(_n.z),l=e.dot(_n),u=t.dot(_n),c=n.dot(_n);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ac=new ci,gi=new C,Hs=new C;class Tr{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ac.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gi.subVectors(e,this.center);const t=gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gi.copy(e.center).add(Hs)),this.expandByPoint(gi.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new C,Vs=new C,Wi=new C,an=new C,Ws=new C,qi=new C,qs=new C;class oc{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.direction).multiplyScalar(t).add(this.origin),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vs.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Vs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wi),a=an.dot(this.direction),l=-an.dot(Wi),u=an.lengthSq(),c=Math.abs(1-o*o);let h,f,m,_;if(c>0)if(h=o*l-a,f=o*a-l,_=s*c,h>=0)if(f>=-_)if(f<=_){const p=1/c;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Wi).multiplyScalar(f).add(Vs),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),i=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,i,s){Ws.subVectors(t,e),qi.subVectors(n,e),qs.crossVectors(Ws,qi);let o=this.direction.dot(qs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,e);const l=a*this.direction.dot(qi.crossVectors(an,qi));if(l<0)return null;const u=a*this.direction.dot(Ws.cross(an));if(u<0||l+u>o)return null;const c=-a*an.dot(qs);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,u,c,h,f,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),o=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*h,_=a*c,p=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+_*u,t[5]=f-p*u,t[9]=-a*l,t[2]=p-f*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,_=u*c,p=u*h;t[0]=f+p*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,_=u*c,p=u*h;t[0]=f-p*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=p-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*h,_=a*c,p=a*h;t[0]=l*c,t[4]=_*u-m,t[8]=f*u+p,t[1]=l*h,t[5]=p*u+f,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=p-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+_,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+p,t[5]=o*c,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*c,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lc,e,cc)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),on.crossVectors(n,Pt),on.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),on.crossVectors(n,Pt)),on.normalize(),ji.crossVectors(Pt,on),i[0]=on.x,i[4]=ji.x,i[8]=Pt.x,i[1]=on.y,i[5]=ji.y,i[9]=Pt.y,i[2]=on.z,i[6]=ji.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],S=n[3],M=n[7],E=n[11],y=n[15],L=i[0],U=i[4],v=i[8],T=i[12],I=i[1],K=i[5],$=i[9],z=i[13],D=i[2],j=i[6],J=i[10],Q=i[14],X=i[3],ee=i[7],ie=i[11],me=i[15];return s[0]=o*L+a*I+l*D+u*X,s[4]=o*U+a*K+l*j+u*ee,s[8]=o*v+a*$+l*J+u*ie,s[12]=o*T+a*z+l*Q+u*me,s[1]=c*L+h*I+f*D+m*X,s[5]=c*U+h*K+f*j+m*ee,s[9]=c*v+h*$+f*J+m*ie,s[13]=c*T+h*z+f*Q+m*me,s[2]=_*L+p*I+d*D+g*X,s[6]=_*U+p*K+d*j+g*ee,s[10]=_*v+p*$+d*J+g*ie,s[14]=_*T+p*z+d*Q+g*me,s[3]=S*L+M*I+E*D+y*X,s[7]=S*U+M*K+E*j+y*ee,s[11]=S*v+M*$+E*J+y*ie,s[15]=S*T+M*z+E*Q+y*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*l*h-i*u*h-s*a*f+n*u*f+i*a*m-n*l*m)+p*(+t*l*m-t*u*f+s*o*f-i*o*m+i*u*c-s*l*c)+d*(+t*u*h-t*a*m-s*o*h+n*o*m+s*a*c-n*u*c)+g*(-i*a*c-t*l*h+t*a*f+i*o*h-n*o*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],S=h*d*u-p*f*u+p*l*m-a*d*m-h*l*g+a*f*g,M=_*f*u-c*d*u-_*l*m+o*d*m+c*l*g-o*f*g,E=c*p*u-_*h*u+_*a*m-o*p*m-c*a*g+o*h*g,y=_*h*l-c*p*l-_*a*f+o*p*f+c*a*d-o*h*d,L=t*S+n*M+i*E+s*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=S*U,e[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*g-n*f*g)*U,e[2]=(a*d*s-p*l*s+p*i*u-n*d*u-a*i*g+n*l*g)*U,e[3]=(h*l*s-a*f*s-h*i*u+n*f*u+a*i*m-n*l*m)*U,e[4]=M*U,e[5]=(c*d*s-_*f*s+_*i*m-t*d*m-c*i*g+t*f*g)*U,e[6]=(_*l*s-o*d*s-_*i*u+t*d*u+o*i*g-t*l*g)*U,e[7]=(o*f*s-c*l*s+c*i*u-t*f*u-o*i*m+t*l*m)*U,e[8]=E*U,e[9]=(_*h*s-c*p*s-_*n*m+t*p*m+c*n*g-t*h*g)*U,e[10]=(o*p*s-_*a*s+_*n*u-t*p*u-o*n*g+t*a*g)*U,e[11]=(c*a*s-o*h*s-c*n*u+t*h*u+o*n*m-t*a*m)*U,e[12]=y*U,e[13]=(c*p*i-_*h*i+_*n*f-t*p*f-c*n*d+t*h*d)*U,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*d-t*a*d)*U,e[15]=(o*h*i-c*a*i+c*n*l-t*h*l-o*n*f+t*a*f)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,m=s*c,_=s*h,p=o*c,d=o*h,g=a*h,S=l*u,M=l*c,E=l*h,y=n.x,L=n.y,U=n.z;return i[0]=(1-(p+g))*y,i[1]=(m+E)*y,i[2]=(_-M)*y,i[3]=0,i[4]=(m-E)*L,i[5]=(1-(f+g))*L,i[6]=(d+S)*L,i[7]=0,i[8]=(_+M)*U,i[9]=(d-S)*U,i[10]=(1-(f+p))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bn.set(i[0],i[1],i[2]).length();const o=Bn.set(i[4],i[5],i[6]).length(),a=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],zt.copy(this);const u=1/s,c=1/o,h=1/a;return zt.elements[0]*=u,zt.elements[1]*=u,zt.elements[2]*=u,zt.elements[4]*=c,zt.elements[5]*=c,zt.elements[6]*=c,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-s),h=(t+e)*l,f=(n+i)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bn=new C,zt=new lt,lc=new C(0,0,0),cc=new C(1,1,1),on=new C,ji=new C,Pt=new C,ya=new lt,ba=new Pn;class _s{constructor(e=0,t=0,n=0,i=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ba.setFromEuler(this),this.setFromQuaternion(ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uc=0;const Ma=new C,Gn=new Pn,Kt=new lt,Xi=new C,_i=new C,hc=new C,dc=new Pn,Sa=new C(1,0,0),wa=new C(0,1,0),Ea=new C(0,0,1),fc={type:"added"},Ta={type:"removed"};class Ze extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new C,t=new _s,n=new Pn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Dt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(Sa,e)}rotateY(e){return this.rotateOnAxis(wa,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sa,e)}translateY(e){return this.translateOnAxis(wa,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(_i,Xi,this.up):Kt.lookAt(Xi,_i,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ta)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ta)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ze.DEFAULT_UP=new C(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new C,Jt=new C,js=new C,Qt=new C,Hn=new C,Vn=new C,Aa=new C,Xs=new C,Ys=new C,$s=new C;class en{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kt.subVectors(e,t),i.cross(kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kt.subVectors(i,t),Jt.subVectors(n,t),js.subVectors(e,t);const o=kt.dot(kt),a=kt.dot(Jt),l=kt.dot(js),u=Jt.dot(Jt),c=Jt.dot(js),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Qt),l.set(0,0),l.addScaledVector(s,Qt.x),l.addScaledVector(o,Qt.y),l.addScaledVector(a,Qt.z),l}static isFrontFacing(e,t,n,i){return kt.subVectors(n,t),Jt.subVectors(e,t),kt.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),kt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return en.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Hn.subVectors(i,n),Vn.subVectors(s,n),Xs.subVectors(e,n);const l=Hn.dot(Xs),u=Vn.dot(Xs);if(l<=0&&u<=0)return t.copy(n);Ys.subVectors(e,i);const c=Hn.dot(Ys),h=Vn.dot(Ys);if(c>=0&&h<=c)return t.copy(i);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Hn,o);$s.subVectors(e,s);const m=Hn.dot($s),_=Vn.dot($s);if(_>=0&&m<=_)return t.copy(s);const p=m*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(Vn,a);const d=c*_-m*h;if(d<=0&&h-c>=0&&m-_>=0)return Aa.subVectors(s,i),a=(h-c)/(h-c+(m-_)),t.copy(i).addScaledVector(Aa,a);const g=1/(d+p+f);return o=p*g,a=f*g,t.copy(n).addScaledVector(Hn,o).addScaledVector(Vn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pc=0;class ui extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=ei,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bo,this.blendDst=Mo,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new C,Yi=new Ce;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ga,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ga&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Io extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fo extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mc=0;const Ft=new lt,Zs=new Ze,Wn=new C,Rt=new ci,xi=new ci,ft=new C;class It extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ao(e)?Fo:Io)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Rt.min,xi.min),Rt.expandByPoint(ft),ft.addVectors(Rt.max,xi.max),Rt.expandByPoint(ft)):(Rt.expandByPoint(xi.min),Rt.expandByPoint(xi.max))}Rt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ft.fromBufferAttribute(a,u),l&&(Wn.fromBufferAttribute(e,u),ft.add(Wn)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let I=0;I<a;I++)u[I]=new C,c[I]=new C;const h=new C,f=new C,m=new C,_=new Ce,p=new Ce,d=new Ce,g=new C,S=new C;function M(I,K,$){h.fromArray(i,I*3),f.fromArray(i,K*3),m.fromArray(i,$*3),_.fromArray(o,I*2),p.fromArray(o,K*2),d.fromArray(o,$*2),f.sub(h),m.sub(h),p.sub(_),d.sub(_);const z=1/(p.x*d.y-d.x*p.y);isFinite(z)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(z),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(z),u[I].add(g),u[K].add(g),u[$].add(g),c[I].add(S),c[K].add(S),c[$].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let I=0,K=E.length;I<K;++I){const $=E[I],z=$.start,D=$.count;for(let j=z,J=z+D;j<J;j+=3)M(n[j+0],n[j+1],n[j+2])}const y=new C,L=new C,U=new C,v=new C;function T(I){U.fromArray(s,I*3),v.copy(U);const K=u[I];y.copy(K),y.sub(U.multiplyScalar(U.dot(K))).normalize(),L.crossVectors(v,K);const z=L.dot(c[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=z}for(let I=0,K=E.length;I<K;++I){const $=E[I],z=$.start,D=$.count;for(let j=z,J=z+D;j<J;j+=3)T(n[j+0]),T(n[j+1]),T(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,u=new C,c=new C,h=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,d),a.add(c),l.add(c),u.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let m=0,_=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let g=0;g<c;g++)f[_++]=u[m++]}return new Ht(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ca=new lt,qn=new oc,Ks=new Tr,vi=new C,yi=new C,bi=new C,Js=new C,$i=new C,Zi=new Ce,Ki=new Ce,Ji=new Ce,Qs=new C,Qi=new C;class _t extends Ze{constructor(e=new It,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$i.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Js.fromBufferAttribute(h,e),o?$i.addScaledVector(Js,c):$i.addScaledVector(Js.sub(t),c))}t.add($i)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),e.ray.intersectsSphere(Ks)===!1)||(Ca.copy(s).invert(),qn.copy(e.ray).applyMatrix4(Ca),n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=g,E=S;M<E;M+=3){const y=a.getX(M),L=a.getX(M+1),U=a.getX(M+2);o=es(this,d,e,qn,u,c,y,L,U),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);o=es(this,i,e,qn,u,c,g,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=g,E=S;M<E;M+=3){const y=M,L=M+1,U=M+2;o=es(this,d,e,qn,u,c,y,L,U),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=p,S=p+1,M=p+2;o=es(this,i,e,qn,u,c,g,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function gc(r,e,t,n,i,s,o,a){let l;if(e.side===xt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===tn,a),l===null)return null;Qi.copy(a),Qi.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Qi);return u<t.near||u>t.far?null:{distance:u,point:Qi.clone(),object:r}}function es(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,vi),r.getVertexPosition(a,yi),r.getVertexPosition(l,bi);const u=gc(r,e,t,n,vi,yi,bi,Qs);if(u){i&&(Zi.fromBufferAttribute(i,o),Ki.fromBufferAttribute(i,a),Ji.fromBufferAttribute(i,l),u.uv=en.getUV(Qs,vi,yi,bi,Zi,Ki,Ji,new Ce)),s&&(Zi.fromBufferAttribute(s,o),Ki.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,l),u.uv2=en.getUV(Qs,vi,yi,bi,Zi,Ki,Ji,new Ce));const c={a:o,b:a,c:l,normal:new C,materialIndex:0};en.getNormal(vi,yi,bi,c.normal),u.face=c}return u}class Ui extends It{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2));function _(p,d,g,S,M,E,y,L,U,v,T){const I=E/U,K=y/v,$=E/2,z=y/2,D=L/2,j=U+1,J=v+1;let Q=0,X=0;const ee=new C;for(let ie=0;ie<J;ie++){const me=ie*K-z;for(let G=0;G<j;G++){const Z=G*I-$;ee[p]=Z*S,ee[d]=me*M,ee[g]=D,u.push(ee.x,ee.y,ee.z),ee[p]=0,ee[d]=0,ee[g]=L>0?1:-1,c.push(ee.x,ee.y,ee.z),h.push(G/U),h.push(1-ie/v),Q+=1}}for(let ie=0;ie<v;ie++)for(let me=0;me<U;me++){const G=f+me+j*ie,Z=f+me+j*(ie+1),re=f+(me+1)+j*(ie+1),ae=f+(me+1)+j*ie;l.push(G,Z,ae),l.push(Z,re,ae),X+=6}a.addGroup(m,X,T),m+=X,f+=Q}}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=oi(r[t]);for(const i in n)e[i]=n[i]}return e}function _c(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Oo(r){return r.getRenderTarget()===null&&r.outputEncoding===qe?Wt:Di}const xc={clone:oi,merge:Et};var vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vc,this.fragmentShader=yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=_c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class No extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends No{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Xn=1;class bc extends Ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ot(jn,Xn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ot(jn,Xn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ot(jn,Xn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ot(jn,Xn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ot(jn,Xn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Ot(jn,Xn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Xt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Uo extends ot{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mc extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ui(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:cn});s.uniforms.tEquirect.value=t;const o=new _t(i,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=bt),new bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const er=new C,Sc=new C,wc=new Dt;class xn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=er.subVectors(n,t).cross(Sc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wc.getNormalMatrix(e),i=this.coplanarPoint(er).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Tr,ts=new C;class Ar{constructor(e=new xn,t=new xn,n=new xn,i=new xn,s=new xn,o=new xn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],h=n[7],f=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],S=n[14],M=n[15];return t[0].setComponents(a-i,h-l,p-f,M-d).normalize(),t[1].setComponents(a+i,h+l,p+f,M+d).normalize(),t[2].setComponents(a+s,h+u,p+m,M+g).normalize(),t[3].setComponents(a-s,h-u,p-m,M-g).normalize(),t[4].setComponents(a-o,h-c,p-_,M-S).normalize(),t[5].setComponents(a+o,h+c,p+_,M+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ts.x=i.normal.x>0?e.max.x:e.min.x,ts.y=i.normal.y>0?e.max.y:e.min.y,ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ec(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const h=u.array,f=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),u.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,u),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,i(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class Fi extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,h=e/a,f=t/l,m=[],_=[],p=[],d=[];for(let g=0;g<c;g++){const S=g*f-o;for(let M=0;M<u;M++){const E=M*h-s;_.push(E,-S,0),p.push(0,0,1),d.push(M/a),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const M=S+u*g,E=S+u*(g+1),y=S+1+u*(g+1),L=S+1+u*g;m.push(M,E,L),m.push(E,y,L)}this.setIndex(m),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2))}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dc="vec3 transformed = vec3( position );",Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Oc=`#ifdef USE_IRIDESCENCE
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
#endif`,Nc=`#ifdef USE_BUMPMAP
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
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qc=`#define PI 3.141592653589793
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
}`,jc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xc=`vec3 transformedNormal = objectNormal;
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
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#endif`,mu=`#if defined( USE_ENVMAP )
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
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
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
#endif`,bu=`struct PhysicalMaterial {
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
}`,Mu=`
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
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
#endif`,Uu=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
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
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Bu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ah=`float getShadowMask() {
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
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
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
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
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
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
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
#endif`,gh=`#ifdef USE_TRANSMISSION
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
#endif`,_h=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eh=`uniform sampler2D t2D;
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
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ph=`#include <common>
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
}`,Rh=`#if DEPTH_PACKING == 3200
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
}`,Dh=`#define DISTANCE
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
}`,Ih=`#define DISTANCE
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
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nh=`uniform float scale;
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
}`,Uh=`uniform vec3 diffuse;
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
}`,zh=`#include <common>
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
}`,kh=`uniform vec3 diffuse;
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
}`,Bh=`#define LAMBERT
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
}`,Gh=`#define LAMBERT
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
}`,Hh=`#define MATCAP
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
}`,Vh=`#define MATCAP
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
}`,Wh=`#define NORMAL
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
}`,qh=`#define NORMAL
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
}`,jh=`#define PHONG
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
}`,Xh=`#define PHONG
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
}`,Yh=`#define STANDARD
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
}`,$h=`#define STANDARD
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
}`,Zh=`#define TOON
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
}`,Kh=`#define TOON
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
}`,Jh=`uniform float size;
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
}`,Qh=`uniform vec3 diffuse;
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
}`,ed=`#include <common>
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
}`,td=`uniform vec3 color;
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
}`,nd=`uniform float rotation;
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
}`,id=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:Tc,alphamap_pars_fragment:Ac,alphatest_fragment:Cc,alphatest_pars_fragment:Lc,aomap_fragment:Pc,aomap_pars_fragment:Rc,begin_vertex:Dc,beginnormal_vertex:Ic,bsdfs:Fc,iridescence_fragment:Oc,bumpmap_pars_fragment:Nc,clipping_planes_fragment:Uc,clipping_planes_pars_fragment:zc,clipping_planes_pars_vertex:kc,clipping_planes_vertex:Bc,color_fragment:Gc,color_pars_fragment:Hc,color_pars_vertex:Vc,color_vertex:Wc,common:qc,cube_uv_reflection_fragment:jc,defaultnormal_vertex:Xc,displacementmap_pars_vertex:Yc,displacementmap_vertex:$c,emissivemap_fragment:Zc,emissivemap_pars_fragment:Kc,encodings_fragment:Jc,encodings_pars_fragment:Qc,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:su,fog_vertex:ru,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:uu,lightmap_pars_fragment:hu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:xu,lights_phong_pars_fragment:vu,lights_physical_fragment:yu,lights_physical_pars_fragment:bu,lights_fragment_begin:Mu,lights_fragment_maps:Su,lights_fragment_end:wu,logdepthbuf_fragment:Eu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Cu,map_fragment:Lu,map_pars_fragment:Pu,map_particle_fragment:Ru,map_particle_pars_fragment:Du,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Fu,morphcolor_vertex:Ou,morphnormal_vertex:Nu,morphtarget_pars_vertex:Uu,morphtarget_vertex:zu,normal_fragment_begin:ku,normal_fragment_maps:Bu,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:Vu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:Xu,iridescence_pars_fragment:Yu,output_fragment:$u,packing:Zu,premultiplied_alpha_fragment:Ku,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:sh,shadowmap_vertex:rh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:hh,specularmap_pars_fragment:dh,tonemapping_fragment:fh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:gh,uv_pars_fragment:_h,uv_pars_vertex:xh,uv_vertex:vh,uv2_pars_fragment:yh,uv2_pars_vertex:bh,uv2_vertex:Mh,worldpos_vertex:Sh,background_vert:wh,background_frag:Eh,backgroundCube_vert:Th,backgroundCube_frag:Ah,cube_vert:Ch,cube_frag:Lh,depth_vert:Ph,depth_frag:Rh,distanceRGBA_vert:Dh,distanceRGBA_frag:Ih,equirect_vert:Fh,equirect_frag:Oh,linedashed_vert:Nh,linedashed_frag:Uh,meshbasic_vert:zh,meshbasic_frag:kh,meshlambert_vert:Bh,meshlambert_frag:Gh,meshmatcap_vert:Hh,meshmatcap_frag:Vh,meshnormal_vert:Wh,meshnormal_frag:qh,meshphong_vert:jh,meshphong_frag:Xh,meshphysical_vert:Yh,meshphysical_frag:$h,meshtoon_vert:Zh,meshtoon_frag:Kh,points_vert:Jh,points_frag:Qh,shadow_vert:ed,shadow_frag:td,sprite_vert:nd,sprite_frag:id},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},qt={basic:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Et([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Et([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Et([oe.points,oe.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Et([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Et([oe.common,oe.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Et([oe.sprite,oe.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Et([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Et([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};qt.physical={uniforms:Et([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ns={r:0,b:0,g:0};function sd(r,e,t,n,i,s,o){const a=new Ue(0);let l=s===!0?0:1,u,c,h=null,f=0,m=null;function _(d,g){let S=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M));const E=r.xr,y=E.getSession&&E.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===gs)?(c===void 0&&(c=new _t(new Ui(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:oi(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,U,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=M.encoding!==qe,(h!==M||f!==M.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new _t(new Fi(2,2),new nn({name:"BackgroundMaterial",uniforms:oi(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=M.encoding!==qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null))}function p(d,g){d.getRGB(ns,Oo(r)),n.buffers.color.setClear(ns.r,ns.g,ns.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:_}}function rd(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let u=l,c=!1;function h(D,j,J,Q,X){let ee=!1;if(o){const ie=p(Q,J,j);u!==ie&&(u=ie,m(u.object)),ee=g(D,Q,J,X),ee&&S(D,Q,J,X)}else{const ie=j.wireframe===!0;(u.geometry!==Q.id||u.program!==J.id||u.wireframe!==ie)&&(u.geometry=Q.id,u.program=J.id,u.wireframe=ie,ee=!0)}X!==null&&t.update(X,34963),(ee||c)&&(c=!1,v(D,j,J,Q),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,j,J){const Q=J.wireframe===!0;let X=a[D.id];X===void 0&&(X={},a[D.id]=X);let ee=X[j.id];ee===void 0&&(ee={},X[j.id]=ee);let ie=ee[Q];return ie===void 0&&(ie=d(f()),ee[Q]=ie),ie}function d(D){const j=[],J=[],Q=[];for(let X=0;X<i;X++)j[X]=0,J[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:Q,object:D,attributes:{},index:null}}function g(D,j,J,Q){const X=u.attributes,ee=j.attributes;let ie=0;const me=J.getAttributes();for(const G in me)if(me[G].location>=0){const re=X[G];let ae=ee[G];if(ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;ie++}return u.attributesNum!==ie||u.index!==Q}function S(D,j,J,Q){const X={},ee=j.attributes;let ie=0;const me=J.getAttributes();for(const G in me)if(me[G].location>=0){let re=ee[G];re===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),X[G]=ae,ie++}u.attributes=X,u.attributesNum=ie,u.index=Q}function M(){const D=u.newAttributes;for(let j=0,J=D.length;j<J;j++)D[j]=0}function E(D){y(D,0)}function y(D,j){const J=u.newAttributes,Q=u.enabledAttributes,X=u.attributeDivisors;J[D]=1,Q[D]===0&&(r.enableVertexAttribArray(D),Q[D]=1),X[D]!==j&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,j),X[D]=j)}function L(){const D=u.newAttributes,j=u.enabledAttributes;for(let J=0,Q=j.length;J<Q;J++)j[J]!==D[J]&&(r.disableVertexAttribArray(J),j[J]=0)}function U(D,j,J,Q,X,ee){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(D,j,J,X,ee):r.vertexAttribPointer(D,j,J,Q,X,ee)}function v(D,j,J,Q){if(n.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=Q.attributes,ee=J.getAttributes(),ie=j.defaultAttributeValues;for(const me in ee){const G=ee[me];if(G.location>=0){let Z=X[me];if(Z===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const re=Z.normalized,ae=Z.itemSize,H=t.get(Z);if(H===void 0)continue;const we=H.buffer,ye=H.type,xe=H.bytesPerElement;if(Z.isInterleavedBufferAttribute){const de=Z.data,ze=de.stride,Te=Z.offset;if(de.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)y(G.location+be,de.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let be=0;be<G.locationSize;be++)E(G.location+be);r.bindBuffer(34962,we);for(let be=0;be<G.locationSize;be++)U(G.location+be,ae/G.locationSize,ye,re,ze*xe,(Te+ae/G.locationSize*be)*xe)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)y(G.location+de,Z.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<G.locationSize;de++)E(G.location+de);r.bindBuffer(34962,we);for(let de=0;de<G.locationSize;de++)U(G.location+de,ae/G.locationSize,ye,re,ae*xe,ae/G.locationSize*de*xe)}}else if(ie!==void 0){const re=ie[me];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(G.location,re);break;case 3:r.vertexAttrib3fv(G.location,re);break;case 4:r.vertexAttrib4fv(G.location,re);break;default:r.vertexAttrib1fv(G.location,re)}}}}L()}function T(){$();for(const D in a){const j=a[D];for(const J in j){const Q=j[J];for(const X in Q)_(Q[X].object),delete Q[X];delete j[J]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const j=a[D.id];for(const J in j){const Q=j[J];for(const X in Q)_(Q[X].object),delete Q[X];delete j[J]}delete a[D.id]}function K(D){for(const j in a){const J=a[j];if(J[D.id]===void 0)continue;const Q=J[D.id];for(const X in Q)_(Q[X].object),delete Q[X];delete J[D.id]}}function $(){z(),c=!0,u!==l&&(u=l,m(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:K,initAttributes:M,enableAttribute:E,disableUnusedAttributes:L}}function ad(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function od(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(U){if(U==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),S=r.getParameter(36349),M=f>0,E=o||e.has("OES_texture_float"),y=M&&E,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:y,maxSamples:L}}function ld(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new xn,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!d)s?c(null):u();else{const S=s?0:n,M=S*4;let E=g.clippingState||null;l.value=E,E=c(_,f,M,m);for(let y=0;y!==M;++y)E[y]=t[y];g.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,_){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const g=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let M=0,E=m;M!==p;++M,E+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function cd(r){let e=new WeakMap;function t(o,a){return a===pr?o.mapping=si:a===mr&&(o.mapping=ri),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===pr||a===mr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Mc(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ko extends No{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qn=4,La=[.125,.215,.35,.446,.526,.582],bn=20,tr=new ko,Pa=new Ue;let nr=null;const vn=(1+Math.sqrt(5))/2,$n=1/vn,Ra=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,vn,$n),new C(0,vn,-$n),new C($n,0,vn),new C(-$n,0,vn),new C(vn,$n,0),new C(-vn,$n,0)];class Da{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nr),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Ri,format:Gt,encoding:Cn,depthBuffer:!1},i=Ia(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ud(s)),this._blurMaterial=hd(s,e,t)}return i}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Pa),c.toneMapping=Xt,c.autoClear=!1;const m=new ni({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),_=new _t(new Ui,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Pa),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const M=this._cubeSize;is(i,S*M,g>2?M:0,M,M),c.setRenderTarget(i),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===si||e.mapping===ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ra[(i-1)%Ra.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new _t(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bn-1),p=s/_,d=isFinite(s)?1+Math.floor(c*p):bn;d>bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${bn}`);const g=[];let S=0;for(let U=0;U<bn;++U){const v=U/p,T=Math.exp(-v*v/2);g.push(T),U===0?S+=T:U<d&&(S+=2*T)}for(let U=0;U<g.length;U++)g[U]=g[U]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const E=this._sizeLods[i],y=3*E*(i>M-Qn?i-M+Qn:0),L=4*(this._cubeSize-E);is(t,y,L,3*E,2*E),l.setRenderTarget(t),l.render(h,tr)}}function ud(r){const e=[],t=[],n=[];let i=r;const s=r-Qn+1+La.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Qn?l=La[o-r+Qn-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,_=6,p=3,d=2,g=1,S=new Float32Array(p*_*m),M=new Float32Array(d*_*m),E=new Float32Array(g*_*m);for(let L=0;L<m;L++){const U=L%3*2/3-1,v=L>2?0:-1,T=[U,v,0,U+2/3,v,0,U+2/3,v+1,0,U,v,0,U+2/3,v+1,0,U,v+1,0];S.set(T,p*_*L),M.set(f,d*_*L);const I=[L,L,L,L,L,L];E.set(I,g*_*L)}const y=new It;y.setAttribute("position",new Ht(S,p)),y.setAttribute("uv",new Ht(M,d)),y.setAttribute("faceIndex",new Ht(E,g)),e.push(y),i>Qn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ia(r,e,t){const n=new Ln(r,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function hd(r,e,t){const n=new Float32Array(bn),i=new C(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Fa(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Oa(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Cr(){return`

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
	`}function dd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===pr||l===mr,c=l===si||l===ri;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Da(r)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new Da(r));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pd(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function u(h){const f=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let M=0,E=S.length;M<E;M+=3){const y=S[M+0],L=S[M+1],U=S[M+2];f.push(y,L,L,U,U,y)}}else{const S=_.array;p=_.version;for(let M=0,E=S.length/3-1;M<E;M+=3){const y=M+0,L=M+1,U=M+2;f.push(y,L,L,U,U,y)}}const d=new(Ao(f)?Fo:Io)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function md(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function gd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _d(r,e){return r[0]-e[0]}function xd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function vd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==d){let J=function(){D.dispose(),s.delete(c),c.removeEventListener("dispose",J)};var _=J;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,L=c.morphAttributes.color!==void 0,U=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let I=0;E===!0&&(I=1),y===!0&&(I=2),L===!0&&(I=3);let K=c.attributes.position.count*I,$=1;K>e.maxTextureSize&&($=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const z=new Float32Array(K*$*4*d),D=new Ro(z,K,$,d);D.type=Sn,D.needsUpdate=!0;const j=I*4;for(let Q=0;Q<d;Q++){const X=U[Q],ee=v[Q],ie=T[Q],me=K*$*4*Q;for(let G=0;G<X.count;G++){const Z=G*j;E===!0&&(o.fromBufferAttribute(X,G),z[me+Z+0]=o.x,z[me+Z+1]=o.y,z[me+Z+2]=o.z,z[me+Z+3]=0),y===!0&&(o.fromBufferAttribute(ee,G),z[me+Z+4]=o.x,z[me+Z+5]=o.y,z[me+Z+6]=o.z,z[me+Z+7]=0),L===!0&&(o.fromBufferAttribute(ie,G),z[me+Z+8]=o.x,z[me+Z+9]=o.y,z[me+Z+10]=o.z,z[me+Z+11]=ie.itemSize===4?o.w:1)}}g={count:d,texture:D,size:new Ce(K,$)},s.set(c,g),c.addEventListener("dispose",J)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const M=c.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[c.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[c.id]=d}for(let y=0;y<p;y++){const L=d[y];L[0]=y,L[1]=m[y]}d.sort(xd);for(let y=0;y<8;y++)y<p&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(_d);const g=c.morphAttributes.position,S=c.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const L=a[y],U=L[0],v=L[1];U!==Number.MAX_SAFE_INTEGER&&v?(g&&c.getAttribute("morphTarget"+y)!==g[U]&&c.setAttribute("morphTarget"+y,g[U]),S&&c.getAttribute("morphNormal"+y)!==S[U]&&c.setAttribute("morphNormal"+y,S[U]),i[y]=v,M+=v):(g&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),S&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),i[y]=0)}const E=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function yd(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);return i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Bo=new ot,Go=new Ro,Ho=new rc,Vo=new Uo,Na=[],Ua=[],za=new Float32Array(16),ka=new Float32Array(9),Ba=new Float32Array(4);function hi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Na[i];if(s===void 0&&(s=new Float32Array(i),Na[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xs(r,e){let t=Ua[e];t===void 0&&(t=new Int32Array(e),Ua[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function bd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function Sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function Ed(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Ba.set(n),r.uniformMatrix2fv(this.addr,!1,Ba),ut(t,n)}}function Td(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;ka.set(n),r.uniformMatrix3fv(this.addr,!1,ka),ut(t,n)}}function Ad(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;za.set(n),r.uniformMatrix4fv(this.addr,!1,za),ut(t,n)}}function Cd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function Pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function Rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function Dd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Id(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function Nd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Bo,i)}function Ud(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ho,i)}function zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vo,i)}function kd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Go,i)}function Bd(r){switch(r){case 5126:return bd;case 35664:return Md;case 35665:return Sd;case 35666:return wd;case 35674:return Ed;case 35675:return Td;case 35676:return Ad;case 5124:case 35670:return Cd;case 35667:case 35671:return Ld;case 35668:case 35672:return Pd;case 35669:case 35673:return Rd;case 5125:return Dd;case 36294:return Id;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Nd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return zd;case 36289:case 36303:case 36311:case 36292:return kd}}function Gd(r,e){r.uniform1fv(this.addr,e)}function Hd(r,e){const t=hi(e,this.size,2);r.uniform2fv(this.addr,t)}function Vd(r,e){const t=hi(e,this.size,3);r.uniform3fv(this.addr,t)}function Wd(r,e){const t=hi(e,this.size,4);r.uniform4fv(this.addr,t)}function qd(r,e){const t=hi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jd(r,e){const t=hi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Xd(r,e){const t=hi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Yd(r,e){r.uniform1iv(this.addr,e)}function $d(r,e){r.uniform2iv(this.addr,e)}function Zd(r,e){r.uniform3iv(this.addr,e)}function Kd(r,e){r.uniform4iv(this.addr,e)}function Jd(r,e){r.uniform1uiv(this.addr,e)}function Qd(r,e){r.uniform2uiv(this.addr,e)}function ef(r,e){r.uniform3uiv(this.addr,e)}function tf(r,e){r.uniform4uiv(this.addr,e)}function nf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bo,s[o])}function sf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ho,s[o])}function rf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vo,s[o])}function af(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Go,s[o])}function of(r){switch(r){case 5126:return Gd;case 35664:return Hd;case 35665:return Vd;case 35666:return Wd;case 35674:return qd;case 35675:return jd;case 35676:return Xd;case 5124:case 35670:return Yd;case 35667:case 35671:return $d;case 35668:case 35672:return Zd;case 35669:case 35673:return Kd;case 5125:return Jd;case 36294:return Qd;case 36295:return ef;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return nf;case 35679:case 36299:case 36307:return sf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return af}}class lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Bd(t.type)}}class cf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=of(t.type)}}class uf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function Ga(r,e){r.seq.push(e),r.map[e.id]=e}function hf(r,e,t){const n=r.name,i=n.length;for(ir.lastIndex=0;;){const s=ir.exec(n),o=ir.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){Ga(t,u===void 0?new lf(a,r,e):new cf(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new uf(a),Ga(t,h)),t=h}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);hf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ha(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let df=0;function ff(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pf(r){switch(r){case Cn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Va(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ff(r.getShaderSource(e),o)}else return i}function mf(r,e){const t=pf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gf(r,e){let t;switch(e){case Rl:t="Linear";break;case Dl:t="Reinhard";break;case Il:t="OptimizedCineon";break;case Fl:t="ACESFilmic";break;case Ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _f(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function xf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ti(r){return r!==""}function Wa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(r){return r.replace(yf,bf)}function bf(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yr(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(r){return r.replace(Mf,Sf)}function Sf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Ef(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case si:case ri:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Af(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case Ll:e="ENVMAP_BLENDING_MIX";break;case Pl:e="ENVMAP_BLENDING_ADD";break}return e}function Cf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wf(t),u=Ef(t),c=Tf(t),h=Af(t),f=Cf(t),m=t.isWebGL2?"":_f(t),_=xf(s),p=i.createProgram();let d,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Ti).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(Ti).join(`
`),g.length>0&&(g+=`
`)):(d=[Xa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),g=[m,Xa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xt?"#define TONE_MAPPING":"",t.toneMapping!==Xt?Re.tonemapping_pars_fragment:"",t.toneMapping!==Xt?gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,mf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),o=yr(o),o=Wa(o,t),o=qa(o,t),a=yr(a),a=Wa(a,t),a=qa(a,t),o=ja(o),a=ja(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===_r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=S+d+o,E=S+g+a,y=Ha(i,35633,M),L=Ha(i,35632,E);if(i.attachShader(p,y),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(y).trim(),K=i.getShaderInfoLog(L).trim();let $=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const D=Va(i,y,"vertex"),j=Va(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+j)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||K==="")&&(z=!1);z&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:I,prefix:d},fragmentShader:{log:K,prefix:g}})}i.deleteShader(y),i.deleteShader(L);let U;this.getUniforms=function(){return U===void 0&&(U=new ds(i,p)),U};let v;return this.getAttributes=function(){return v===void 0&&(v=vf(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=df++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=L,this}let Pf=0;class Rf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Df(e),t.set(e,n)),n}}class Df{constructor(e){this.id=Pf++,this.code=e,this.usedTimes=0}}function If(r,e,t,n,i,s,o){const a=new Do,l=new Rf,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,I,K,$){const z=K.fog,D=$.geometry,j=v.isMeshStandardMaterial?K.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),Q=J&&J.mapping===gs?J.image.height:null,X=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=ee!==void 0?ee.length:0;let me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let G,Z,re,ae;if(X){const ze=qt[X];G=ze.vertexShader,Z=ze.fragmentShader}else G=v.vertexShader,Z=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const H=r.getRenderTarget(),we=v.alphaTest>0,ye=v.clearcoat>0,xe=v.iridescence>0;return{isWebGL2:c,shaderID:X,shaderName:v.type,vertexShader:G,fragmentShader:Z,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Cn,map:!!v.map,matcap:!!v.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ec,tangentSpaceNormalMap:v.normalMapType===To,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===qe,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!v.iridescenceMap,iridescenceThicknessMap:xe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ei,alphaMap:!!v.alphaMap,alphaTest:we,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Xt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jt,flipSided:v.side===xt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(T,v),S(T,v),T.push(r.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function M(v){const T=_[v.type];let I;if(T){const K=qt[T];I=xc.clone(K.uniforms)}else I=v.uniforms;return I}function E(v,T){let I;for(let K=0,$=u.length;K<$;K++){const z=u[K];if(z.cacheKey===T){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Lf(r,T,v,s),u.push(I)),I}function y(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function L(v){l.remove(v)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:E,releaseProgram:y,releaseShaderCache:L,programs:u,dispose:U}}function Ff(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Of(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ya(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $a(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,_,p,d){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:d},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function a(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function u(h,f){t.length>1&&t.sort(h||Of),n.length>1&&n.sort(f||Ya),i.length>1&&i.sort(f||Ya)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function Nf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $a,r.set(n,[o])):i>=s.length?(o=new $a,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Uf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ue};break;case"SpotLight":t={position:new C,direction:new C,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function zf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kf=0;function Bf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gf(r,e){const t=new Uf,n=zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,o=new lt,a=new lt;function l(c,h){let f=0,m=0,_=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let p=0,d=0,g=0,S=0,M=0,E=0,y=0,L=0,U=0,v=0;c.sort(Bf);const T=h!==!0?Math.PI:1;for(let K=0,$=c.length;K<$;K++){const z=c[K],D=z.color,j=z.intensity,J=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=D.r*j*T,m+=D.g*j*T,_+=D.b*j*T;else if(z.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(z.sh.coefficients[X],j);else if(z.isDirectionalLight){const X=t.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const ee=z.shadow,ie=n.get(z);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=z.shadow.matrix,E++}i.directional[p]=X,p++}else if(z.isSpotLight){const X=t.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(D).multiplyScalar(j*T),X.distance=J,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,i.spot[g]=X;const ee=z.shadow;if(z.map&&(i.spotLightMap[U]=z.map,U++,ee.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[g]=ee.matrix,z.castShadow){const ie=n.get(z);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.spotShadow[g]=ie,i.spotShadowMap[g]=Q,L++}g++}else if(z.isRectAreaLight){const X=t.get(z);X.color.copy(D).multiplyScalar(j),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=X,S++}else if(z.isPointLight){const X=t.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity*T),X.distance=z.distance,X.decay=z.decay,z.castShadow){const ee=z.shadow,ie=n.get(z);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,i.pointShadow[d]=ie,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=z.shadow.matrix,y++}i.point[d]=X,d++}else if(z.isHemisphereLight){const X=t.get(z);X.skyColor.copy(z.color).multiplyScalar(j*T),X.groundColor.copy(z.groundColor).multiplyScalar(j*T),i.hemi[M]=X,M++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==M||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==L||I.numSpotMaps!==U)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=d,i.hemi.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=L+U-v,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=M,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=L,I.numSpotMaps=U,i.version=kf++)}function u(c,h){let f=0,m=0,_=0,p=0,d=0;const g=h.matrixWorldInverse;for(let S=0,M=c.length;S<M;S++){const E=c[S];if(E.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(E.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),_++}else if(E.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),d++}}}return{setup:l,setupView:u,state:i}}function Za(r,e){const t=new Gf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Hf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Za(r,e),t.set(s,[l])):o>=a.length?(l=new Za(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Vf extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wf extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jf=`uniform sampler2D shadow_pass;
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
}`;function Xf(r,e,t){let n=new Ar;const i=new Ce,s=new Ce,o=new mt,a=new Vf({depthPacking:Ql}),l=new Wf,u={},c=t.maxTextureSize,h={[tn]:xt,[xt]:tn,[jt]:jt},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:qf,fragmentShader:jf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new It;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _t(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo,this.render=function(E,y,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const U=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(cn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let K=0,$=E.length;K<$;K++){const z=E[K],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const j=D.getFrameExtents();if(i.multiply(j),s.copy(D.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/j.x),i.x=s.x*j.x,D.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/j.y),i.y=s.y*j.y,D.mapSize.y=s.y)),D.map===null){const Q=this.type!==Ei?{minFilter:gt,magFilter:gt}:{};D.map=new Ln(i.x,i.y,Q),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const J=D.getViewportCount();for(let Q=0;Q<J;Q++){const X=D.getViewport(Q);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(o),D.updateMatrices(z,Q),n=D.getFrustum(),M(y,L,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===Ei&&g(D,L),D.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(U,v,T)};function g(E,y){const L=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ln(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,L,f,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,L,m,p,null)}function S(E,y,L,U,v,T){let I=null;const K=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(K!==void 0)I=K;else if(I=L.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const $=I.uuid,z=y.uuid;let D=u[$];D===void 0&&(D={},u[$]=D);let j=D[z];j===void 0&&(j=I.clone(),D[z]=j),I=j}return I.visible=y.visible,I.wireframe=y.wireframe,T===Ei?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:h[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(L.matrixWorld),I.nearDistance=U,I.farDistance=v),I}function M(E,y,L,U,v){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const K=e.update(E),$=E.material;if(Array.isArray($)){const z=K.groups;for(let D=0,j=z.length;D<j;D++){const J=z[D],Q=$[J.materialIndex];if(Q&&Q.visible){const X=S(E,Q,U,L.near,L.far,v);r.renderBufferDirect(L,null,K,X,E,J)}}}else if($.visible){const z=S(E,$,U,L.near,L.far,v);r.renderBufferDirect(L,null,K,z,E,null)}}const I=E.children;for(let K=0,$=I.length;K<$;K++)M(I[K],y,L,U,v)}}function Yf(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const W=new mt;let te=null;const fe=new mt(0,0,0,0);return{setMask:function(ve){te!==ve&&!P&&(r.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){P=ve},setClear:function(ve,ke,Je,st,R){R===!0&&(ve*=st,ke*=st,Je*=st),W.set(ve,ke,Je,st),fe.equals(W)===!1&&(r.clearColor(ve,ke,Je,st),fe.copy(W))},reset:function(){P=!1,te=null,fe.set(-1,0,0,0)}}}function s(){let P=!1,W=null,te=null,fe=null;return{setTest:function(ve){ve?we(2929):ye(2929)},setMask:function(ve){W!==ve&&!P&&(r.depthMask(ve),W=ve)},setFunc:function(ve){if(te!==ve){switch(ve){case Ml:r.depthFunc(512);break;case Sl:r.depthFunc(519);break;case wl:r.depthFunc(513);break;case fr:r.depthFunc(515);break;case El:r.depthFunc(514);break;case Tl:r.depthFunc(518);break;case Al:r.depthFunc(516);break;case Cl:r.depthFunc(517);break;default:r.depthFunc(515)}te=ve}},setLocked:function(ve){P=ve},setClear:function(ve){fe!==ve&&(r.clearDepth(ve),fe=ve)},reset:function(){P=!1,W=null,te=null,fe=null}}}function o(){let P=!1,W=null,te=null,fe=null,ve=null,ke=null,Je=null,st=null,R=null;return{setTest:function(N){P||(N?we(2960):ye(2960))},setMask:function(N){W!==N&&!P&&(r.stencilMask(N),W=N)},setFunc:function(N,pe,Ee){(te!==N||fe!==pe||ve!==Ee)&&(r.stencilFunc(N,pe,Ee),te=N,fe=pe,ve=Ee)},setOp:function(N,pe,Ee){(ke!==N||Je!==pe||st!==Ee)&&(r.stencilOp(N,pe,Ee),ke=N,Je=pe,st=Ee)},setLocked:function(N){P=N},setClear:function(N){R!==N&&(r.clearStencil(N),R=N)},reset:function(){P=!1,W=null,te=null,fe=null,ve=null,ke=null,Je=null,st=null,R=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,M=null,E=null,y=null,L=null,U=null,v=null,T=!1,I=null,K=null,$=null,z=null,D=null;const j=r.getParameter(35661);let J=!1,Q=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=Q>=2);let ee=null,ie={};const me=r.getParameter(3088),G=r.getParameter(2978),Z=new mt().fromArray(me),re=new mt().fromArray(G);function ae(P,W,te){const fe=new Uint8Array(4),ve=r.createTexture();r.bindTexture(P,ve),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let ke=0;ke<te;ke++)r.texImage2D(W+ke,0,6408,1,1,0,6408,5121,fe);return ve}const H={};H[3553]=ae(3553,3553,1),H[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(2929),l.setFunc(fr),Xe(!1),it(Br),we(2884),Ye(cn);function we(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function ye(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function xe(P,W){return m[P]!==W?(r.bindFramebuffer(P,W),m[P]=W,n&&(P===36009&&(m[36160]=W),P===36160&&(m[36009]=W)),!0):!1}function de(P,W){let te=p,fe=!1;if(P)if(te=_.get(W),te===void 0&&(te=[],_.set(W,te)),P.isWebGLMultipleRenderTargets){const ve=P.texture;if(te.length!==ve.length||te[0]!==36064){for(let ke=0,Je=ve.length;ke<Je;ke++)te[ke]=36064+ke;te.length=ve.length,fe=!0}}else te[0]!==36064&&(te[0]=36064,fe=!0);else te[0]!==1029&&(te[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ze(P){return d!==P?(r.useProgram(P),d=P,!0):!1}const Te={[Jn]:32774,[hl]:32778,[dl]:32779};if(n)Te[Wr]=32775,Te[qr]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Te[Wr]=P.MIN_EXT,Te[qr]=P.MAX_EXT)}const be={[fl]:0,[pl]:1,[ml]:768,[bo]:770,[bl]:776,[vl]:774,[_l]:772,[gl]:769,[Mo]:771,[yl]:775,[xl]:773};function Ye(P,W,te,fe,ve,ke,Je,st){if(P===cn){g===!0&&(ye(3042),g=!1);return}if(g===!1&&(we(3042),g=!0),P!==ul){if(P!==S||st!==T){if((M!==Jn||L!==Jn)&&(r.blendEquation(32774),M=Jn,L=Jn),st)switch(P){case ei:r.blendFuncSeparate(1,771,1,771);break;case Gr:r.blendFunc(1,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Vr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ei:r.blendFuncSeparate(770,771,1,771);break;case Gr:r.blendFunc(770,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Vr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,y=null,U=null,v=null,S=P,T=st}return}ve=ve||W,ke=ke||te,Je=Je||fe,(W!==M||ve!==L)&&(r.blendEquationSeparate(Te[W],Te[ve]),M=W,L=ve),(te!==E||fe!==y||ke!==U||Je!==v)&&(r.blendFuncSeparate(be[te],be[fe],be[ke],be[Je]),E=te,y=fe,U=ke,v=Je),S=P,T=!1}function Qe(P,W){P.side===jt?ye(2884):we(2884);let te=P.side===xt;W&&(te=!te),Xe(te),P.blending===ei&&P.transparent===!1?Ye(cn):Ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const fe=P.stencilWrite;u.setTest(fe),fe&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?we(32926):ye(32926)}function Xe(P){I!==P&&(P?r.frontFace(2304):r.frontFace(2305),I=P)}function it(P){P!==ll?(we(2884),P!==K&&(P===Br?r.cullFace(1029):P===cl?r.cullFace(1028):r.cullFace(1032))):ye(2884),K=P}function je(P){P!==$&&(J&&r.lineWidth(P),$=P)}function De(P,W,te){P?(we(32823),(z!==W||D!==te)&&(r.polygonOffset(W,te),z=W,D=te)):ye(32823)}function Mt(P){P?we(3089):ye(3089)}function ht(P){P===void 0&&(P=33984+j-1),ee!==P&&(r.activeTexture(P),ee=P)}function w(P,W,te){te===void 0&&(ee===null?te=33984+j-1:te=ee);let fe=ie[te];fe===void 0&&(fe={type:void 0,texture:void 0},ie[te]=fe),(fe.type!==P||fe.texture!==W)&&(ee!==te&&(r.activeTexture(te),ee=te),r.bindTexture(P,W||H[P]),fe.type=P,fe.texture=W)}function x(){const P=ie[ee];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){Z.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function _e(P){re.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function Le(P,W){let te=h.get(W);te===void 0&&(te=new WeakMap,h.set(W,te));let fe=te.get(P);fe===void 0&&(fe=r.getUniformBlockIndex(W,P.name),te.set(P,fe))}function Ie(P,W){const fe=h.get(W).get(P);c.get(W)!==fe&&(r.uniformBlockBinding(W,fe,P.__bindingPointIndex),c.set(W,fe))}function Oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ee=null,ie={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,M=null,E=null,y=null,L=null,U=null,v=null,T=!1,I=null,K=null,$=null,z=null,D=null,Z.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:ye,bindFramebuffer:xe,drawBuffers:de,useProgram:ze,setBlending:Ye,setMaterial:Qe,setFlipSided:Xe,setCullFace:it,setLineWidth:je,setPolygonOffset:De,setScissorTest:Mt,activeTexture:ht,bindTexture:w,unbindTexture:x,compressedTexImage2D:V,compressedTexImage3D:ne,texImage2D:he,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:Ie,texStorage2D:F,texStorage3D:ce,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:Se,compressedTexSubImage3D:A,scissor:ge,viewport:_e,reset:Oe}}function $f(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return g?new OffscreenCanvas(w,x):Ii("canvas")}function M(w,x,V,ne){let se=1;if((w.width>ne||w.height>ne)&&(se=ne/Math.max(w.width,w.height)),se<1||x===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const le=x?vr:Math.floor,Se=le(se*w.width),A=le(se*w.height);p===void 0&&(p=S(Se,A));const F=V?S(Se,A):p;return F.width=Se,F.height=A,F.getContext("2d").drawImage(w,0,0,Se,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+A+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return xa(w.width)&&xa(w.height)}function y(w){return a?!1:w.wrapS!==Nt||w.wrapT!==Nt||w.minFilter!==gt&&w.minFilter!==bt}function L(w,x){return w.generateMipmaps&&x&&w.minFilter!==gt&&w.minFilter!==bt}function U(w){r.generateMipmap(w)}function v(w,x,V,ne,se=!1){if(a===!1)return x;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le=x;return x===6403&&(V===5126&&(le=33326),V===5131&&(le=33325),V===5121&&(le=33321)),x===33319&&(V===5126&&(le=33328),V===5131&&(le=33327),V===5121&&(le=33323)),x===6408&&(V===5126&&(le=34836),V===5131&&(le=34842),V===5121&&(le=ne===qe&&se===!1?35907:32856),V===32819&&(le=32854),V===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(w,x,V){return L(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==gt&&w.minFilter!==bt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){return w===gt||w===jr||w===Ts?9728:9729}function K(w){const x=w.target;x.removeEventListener("dispose",K),z(x),x.isVideoTexture&&_.delete(x)}function $(w){const x=w.target;x.removeEventListener("dispose",$),j(x)}function z(w){const x=n.get(w);if(x.__webglInit===void 0)return;const V=w.source,ne=d.get(V);if(ne){const se=ne[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(w),Object.keys(ne).length===0&&d.delete(V)}n.remove(w)}function D(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const V=w.source,ne=d.get(V);delete ne[x.__cacheKey],o.memory.textures--}function j(w){const x=w.texture,V=n.get(w),ne=n.get(x);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(V.__webglFramebuffer[se]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let se=0,le=x.length;se<le;se++){const Se=n.get(x[se]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(x[se])}n.remove(x),n.remove(w)}let J=0;function Q(){J=0}function X(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function ee(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function ie(w,x){const V=n.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,w,x);return}}t.bindTexture(3553,V.__webglTexture,33984+x)}function me(w,x){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ye(V,w,x);return}t.bindTexture(35866,V.__webglTexture,33984+x)}function G(w,x){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ye(V,w,x);return}t.bindTexture(32879,V.__webglTexture,33984+x)}function Z(w,x){const V=n.get(w);if(w.version>0&&V.__version!==w.version){xe(V,w,x);return}t.bindTexture(34067,V.__webglTexture,33984+x)}const re={[Li]:10497,[Nt]:33071,[gr]:33648},ae={[gt]:9728,[jr]:9984,[Ts]:9986,[bt]:9729,[Nl]:9985,[Pi]:9987};function H(w,x,V){if(V?(r.texParameteri(w,10242,re[x.wrapS]),r.texParameteri(w,10243,re[x.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,re[x.wrapR]),r.texParameteri(w,10240,ae[x.magFilter]),r.texParameteri(w,10241,ae[x.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(x.wrapS!==Nt||x.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,I(x.magFilter)),r.texParameteri(w,10241,I(x.minFilter)),x.minFilter!==gt&&x.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===gt||x.minFilter!==Ts&&x.minFilter!==Pi||x.type===Sn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function we(w,x){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",K));const ne=x.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const le=ee(x);if(le!==w.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[le].usedTimes++;const Se=se[w.__cacheKey];Se!==void 0&&(se[w.__cacheKey].usedTimes--,Se.usedTimes===0&&D(x)),w.__cacheKey=le,w.__webglTexture=se[le].texture}return V}function ye(w,x,V){let ne=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=35866),x.isData3DTexture&&(ne=32879);const se=we(w,x),le=x.source;t.bindTexture(ne,w.__webglTexture,33984+V);const Se=n.get(le);if(le.version!==Se.__version||se===!0){t.activeTexture(33984+V),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const A=y(x)&&E(x.image)===!1;let F=M(x.image,A,!1,c);F=ht(x,F);const ce=E(F)||a,he=s.convert(x.format,x.encoding);let ue=s.convert(x.type),ge=v(x.internalFormat,he,ue,x.encoding,x.isVideoTexture);H(ne,x,ce);let _e;const Le=x.mipmaps,Ie=a&&x.isVideoTexture!==!0,Oe=Se.__version===void 0||se===!0,P=T(x,F,ce);if(x.isDepthTexture)ge=6402,a?x.type===Sn?ge=36012:x.type===Mn?ge=33190:x.type===ti?ge=35056:ge=33189:x.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===En&&ge===6402&&x.type!==Eo&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,ue=s.convert(x.type)),x.format===ai&&ge===6402&&(ge=34041,x.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ti,ue=s.convert(x.type))),Oe&&(Ie?t.texStorage2D(3553,1,ge,F.width,F.height):t.texImage2D(3553,0,ge,F.width,F.height,0,he,ue,null));else if(x.isDataTexture)if(Le.length>0&&ce){Ie&&Oe&&t.texStorage2D(3553,P,ge,Le[0].width,Le[0].height);for(let W=0,te=Le.length;W<te;W++)_e=Le[W],Ie?t.texSubImage2D(3553,W,0,0,_e.width,_e.height,he,ue,_e.data):t.texImage2D(3553,W,ge,_e.width,_e.height,0,he,ue,_e.data);x.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(3553,P,ge,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,he,ue,F.data)):t.texImage2D(3553,0,ge,F.width,F.height,0,he,ue,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(35866,P,ge,Le[0].width,Le[0].height,F.depth);for(let W=0,te=Le.length;W<te;W++)_e=Le[W],x.format!==Gt?he!==null?Ie?t.compressedTexSubImage3D(35866,W,0,0,0,_e.width,_e.height,F.depth,he,_e.data,0,0):t.compressedTexImage3D(35866,W,ge,_e.width,_e.height,F.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(35866,W,0,0,0,_e.width,_e.height,F.depth,he,ue,_e.data):t.texImage3D(35866,W,ge,_e.width,_e.height,F.depth,0,he,ue,_e.data)}else{Ie&&Oe&&t.texStorage2D(3553,P,ge,Le[0].width,Le[0].height);for(let W=0,te=Le.length;W<te;W++)_e=Le[W],x.format!==Gt?he!==null?Ie?t.compressedTexSubImage2D(3553,W,0,0,_e.width,_e.height,he,_e.data):t.compressedTexImage2D(3553,W,ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(3553,W,0,0,_e.width,_e.height,he,ue,_e.data):t.texImage2D(3553,W,ge,_e.width,_e.height,0,he,ue,_e.data)}else if(x.isDataArrayTexture)Ie?(Oe&&t.texStorage3D(35866,P,ge,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,he,ue,F.data)):t.texImage3D(35866,0,ge,F.width,F.height,F.depth,0,he,ue,F.data);else if(x.isData3DTexture)Ie?(Oe&&t.texStorage3D(32879,P,ge,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,he,ue,F.data)):t.texImage3D(32879,0,ge,F.width,F.height,F.depth,0,he,ue,F.data);else if(x.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(3553,P,ge,F.width,F.height);else{let W=F.width,te=F.height;for(let fe=0;fe<P;fe++)t.texImage2D(3553,fe,ge,W,te,0,he,ue,null),W>>=1,te>>=1}}else if(Le.length>0&&ce){Ie&&Oe&&t.texStorage2D(3553,P,ge,Le[0].width,Le[0].height);for(let W=0,te=Le.length;W<te;W++)_e=Le[W],Ie?t.texSubImage2D(3553,W,0,0,he,ue,_e):t.texImage2D(3553,W,ge,he,ue,_e);x.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(3553,P,ge,F.width,F.height),t.texSubImage2D(3553,0,0,0,he,ue,F)):t.texImage2D(3553,0,ge,he,ue,F);L(x,ce)&&U(ne),Se.__version=le.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function xe(w,x,V){if(x.image.length!==6)return;const ne=we(w,x),se=x.source;t.bindTexture(34067,w.__webglTexture,33984+V);const le=n.get(se);if(se.version!==le.__version||ne===!0){t.activeTexture(33984+V),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!Se&&!A?F[W]=M(x.image[W],!1,!0,u):F[W]=A?x.image[W].image:x.image[W],F[W]=ht(x,F[W]);const ce=F[0],he=E(ce)||a,ue=s.convert(x.format,x.encoding),ge=s.convert(x.type),_e=v(x.internalFormat,ue,ge,x.encoding),Le=a&&x.isVideoTexture!==!0,Ie=le.__version===void 0||ne===!0;let Oe=T(x,ce,he);H(34067,x,he);let P;if(Se){Le&&Ie&&t.texStorage2D(34067,Oe,_e,ce.width,ce.height);for(let W=0;W<6;W++){P=F[W].mipmaps;for(let te=0;te<P.length;te++){const fe=P[te];x.format!==Gt?ue!==null?Le?t.compressedTexSubImage2D(34069+W,te,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(34069+W,te,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+W,te,0,0,fe.width,fe.height,ue,ge,fe.data):t.texImage2D(34069+W,te,_e,fe.width,fe.height,0,ue,ge,fe.data)}}}else{P=x.mipmaps,Le&&Ie&&(P.length>0&&Oe++,t.texStorage2D(34067,Oe,_e,F[0].width,F[0].height));for(let W=0;W<6;W++)if(A){Le?t.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,ue,ge,F[W].data):t.texImage2D(34069+W,0,_e,F[W].width,F[W].height,0,ue,ge,F[W].data);for(let te=0;te<P.length;te++){const ve=P[te].image[W].image;Le?t.texSubImage2D(34069+W,te+1,0,0,ve.width,ve.height,ue,ge,ve.data):t.texImage2D(34069+W,te+1,_e,ve.width,ve.height,0,ue,ge,ve.data)}}else{Le?t.texSubImage2D(34069+W,0,0,0,ue,ge,F[W]):t.texImage2D(34069+W,0,_e,ue,ge,F[W]);for(let te=0;te<P.length;te++){const fe=P[te];Le?t.texSubImage2D(34069+W,te+1,0,0,ue,ge,fe.image[W]):t.texImage2D(34069+W,te+1,_e,ue,ge,fe.image[W])}}}L(x,he)&&U(34067),le.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function de(w,x,V,ne,se){const le=s.convert(V.format,V.encoding),Se=s.convert(V.type),A=v(V.internalFormat,le,Se,V.encoding);n.get(x).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,A,x.width,x.height,x.depth,0,le,Se,null):t.texImage2D(se,0,A,x.width,x.height,0,le,Se,null)),t.bindFramebuffer(36160,w),De(x)?f.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(V).__webglTexture,0,je(x)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ne,se,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(w,x,V){if(r.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let ne=33189;if(V||De(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===Sn?ne=36012:se.type===Mn&&(ne=33190));const le=je(x);De(x)?f.renderbufferStorageMultisampleEXT(36161,le,ne,x.width,x.height):r.renderbufferStorageMultisample(36161,le,ne,x.width,x.height)}else r.renderbufferStorage(36161,ne,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const ne=je(x);V&&De(x)===!1?r.renderbufferStorageMultisample(36161,ne,35056,x.width,x.height):De(x)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<ne.length;se++){const le=ne[se],Se=s.convert(le.format,le.encoding),A=s.convert(le.type),F=v(le.internalFormat,Se,A,le.encoding),ce=je(x);V&&De(x)===!1?r.renderbufferStorageMultisample(36161,ce,F,x.width,x.height):De(x)?f.renderbufferStorageMultisampleEXT(36161,ce,F,x.width,x.height):r.renderbufferStorage(36161,F,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function Te(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const ne=n.get(x.depthTexture).__webglTexture,se=je(x);if(x.depthTexture.format===En)De(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(x.depthTexture.format===ai)De(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function be(w){const x=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,w)}else if(V){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=r.createRenderbuffer(),ze(x.__webglDepthbuffer[ne],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ze(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ye(w,x,V){const ne=n.get(w);x!==void 0&&de(ne.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&be(w)}function Qe(w){const x=w.texture,V=n.get(w),ne=n.get(x);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=x.version,o.memory.textures++);const se=w.isWebGLCubeRenderTarget===!0,le=w.isWebGLMultipleRenderTargets===!0,Se=E(w)||a;if(se){V.__webglFramebuffer=[];for(let A=0;A<6;A++)V.__webglFramebuffer[A]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const A=w.texture;for(let F=0,ce=A.length;F<ce;F++){const he=n.get(A[F]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&De(w)===!1){const A=le?x:[x];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ce=A[F];V.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[F]);const he=s.convert(ce.format,ce.encoding),ue=s.convert(ce.type),ge=v(ce.internalFormat,he,ue,ce.encoding,w.isXRRenderTarget===!0),_e=je(w);r.renderbufferStorageMultisample(36161,_e,ge,w.width,w.height),r.framebufferRenderbuffer(36160,36064+F,36161,V.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),H(34067,x,Se);for(let A=0;A<6;A++)de(V.__webglFramebuffer[A],w,x,36064,34069+A);L(x,Se)&&U(34067),t.unbindTexture()}else if(le){const A=w.texture;for(let F=0,ce=A.length;F<ce;F++){const he=A[F],ue=n.get(he);t.bindTexture(3553,ue.__webglTexture),H(3553,he,Se),de(V.__webglFramebuffer,w,he,36064+F,3553),L(he,Se)&&U(3553)}t.unbindTexture()}else{let A=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?A=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),H(A,x,Se),de(V.__webglFramebuffer,w,x,36064,A),L(x,Se)&&U(A),t.unbindTexture()}w.depthBuffer&&be(w)}function Xe(w){const x=E(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,se=V.length;ne<se;ne++){const le=V[ne];if(L(le,x)){const Se=w.isWebGLCubeRenderTarget?34067:3553,A=n.get(le).__webglTexture;t.bindTexture(Se,A),U(Se),t.unbindTexture()}}}function it(w){if(a&&w.samples>0&&De(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,ne=w.height;let se=16384;const le=[],Se=w.stencilBuffer?33306:36096,A=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){le.push(36064+ce),w.depthBuffer&&le.push(Se);const he=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(he===!1&&(w.depthBuffer&&(se|=256),w.stencilBuffer&&(se|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ce]),he===!0&&(r.invalidateFramebuffer(36008,[Se]),r.invalidateFramebuffer(36009,[Se])),F){const ue=n.get(x[ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,V,ne,0,0,V,ne,se,9728),m&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,A.__webglColorRenderbuffer[ce]);const he=n.get(x[ce]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,he,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function je(w){return Math.min(h,w.samples)}function De(w){const x=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(w){const x=o.render.frame;_.get(w)!==x&&(_.set(w,x),w.update())}function ht(w,x){const V=w.encoding,ne=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===xr||V!==Cn&&(V===qe?a===!1?e.has("EXT_sRGB")===!0&&ne===Gt?(w.format=xr,w.minFilter=bt,w.generateMipmaps=!1):x=Lo.sRGBToLinear(x):(ne!==Gt||se!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),x}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=ie,this.setTexture2DArray=me,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Ye,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=De}function Zf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===An)return 5121;if(s===Bl)return 32819;if(s===Gl)return 32820;if(s===Ul)return 5120;if(s===zl)return 5122;if(s===Eo)return 5123;if(s===kl)return 5124;if(s===Mn)return 5125;if(s===Sn)return 5126;if(s===Ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hl)return 6406;if(s===Gt)return 6408;if(s===Vl)return 6409;if(s===Wl)return 6410;if(s===En)return 6402;if(s===ai)return 34041;if(s===xr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ql)return 6403;if(s===jl)return 36244;if(s===Xl)return 33319;if(s===Yl)return 33320;if(s===$l)return 36249;if(s===As||s===Cs||s===Ls||s===Ps)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xr||s===Yr||s===$r||s===Zr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Kr||s===Jr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Kr)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jr)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qr||s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===aa||s===oa||s===la||s===ca||s===ua||s===ha||s===da)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qr)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ea)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ta)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===na)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ia)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ra)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===aa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===oa)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===la)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ca)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ua)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ha)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===da)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Rs)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Kl||s===fa||s===pa||s===ma)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ma)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Kf extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ss extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(u,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qf extends ot{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:En,c!==En&&c!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===En&&(n=Mn),n===void 0&&c===ai&&(n=ti),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1}}class ep extends In{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,m=null,_=null;const p=t.getContextAttributes();let d=null,g=null;const S=[],M=[],E=new Set,y=new Map,L=new Ot;L.layers.enable(1),L.viewport=new mt;const U=new Ot;U.layers.enable(2),U.viewport=new mt;const v=[L,U],T=new Kf;T.layers.enable(1),T.layers.enable(2);let I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=S[G];return Z===void 0&&(Z=new sr,S[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=S[G];return Z===void 0&&(Z=new sr,S[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=S[G];return Z===void 0&&(Z=new sr,S[G]=Z),Z.getHandSpace()};function $(G){const Z=M.indexOf(G.inputSource);if(Z===-1)return;const re=S[Z];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function z(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",D);for(let G=0;G<S.length;G++){const Z=M[G];Z!==null&&(M[G]=null,S[G].disconnect(Z))}I=null,K=null,e.setRenderTarget(d),m=null,f=null,h=null,i=null,g=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",z),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),g=new Ln(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:An,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,re=null,ae=null;p.depth&&(ae=p.stencil?35056:33190,Z=p.stencil?ai:En,re=p.stencil?ti:Mn);const H={colorFormat:32856,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(H),i.updateRenderState({layers:[f]}),g=new Ln(f.textureWidth,f.textureHeight,{format:Gt,type:An,depthTexture:new Qf(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const we=e.properties.get(g);we.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(G){for(let Z=0;Z<G.removed.length;Z++){const re=G.removed[Z],ae=M.indexOf(re);ae>=0&&(M[ae]=null,S[ae].disconnect(re))}for(let Z=0;Z<G.added.length;Z++){const re=G.added[Z];let ae=M.indexOf(re);if(ae===-1){for(let we=0;we<S.length;we++)if(we>=M.length){M.push(re),ae=we;break}else if(M[we]===null){M[we]=re,ae=we;break}if(ae===-1)break}const H=S[ae];H&&H.connect(re)}}const j=new C,J=new C;function Q(G,Z,re){j.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const ae=j.distanceTo(J),H=Z.projectionMatrix.elements,we=re.projectionMatrix.elements,ye=H[14]/(H[10]-1),xe=H[14]/(H[10]+1),de=(H[9]+1)/H[5],ze=(H[9]-1)/H[5],Te=(H[8]-1)/H[0],be=(we[8]+1)/we[0],Ye=ye*Te,Qe=ye*be,Xe=ae/(-Te+be),it=Xe*-Te;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(it),G.translateZ(Xe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const je=ye+Xe,De=xe+Xe,Mt=Ye-it,ht=Qe+(ae-it),w=de*xe/De*je,x=ze*xe/De*je;G.projectionMatrix.makePerspective(Mt,ht,w,x,je,De)}function X(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;T.near=U.near=L.near=G.near,T.far=U.far=L.far=G.far,(I!==T.near||K!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,K=T.far);const Z=G.parent,re=T.cameras;X(T,Z);for(let H=0;H<re.length;H++)X(re[H],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),G.matrix.copy(T.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const ae=G.children;for(let H=0,we=ae.length;H<we;H++)ae[H].updateMatrixWorld(!0);re.length===2?Q(T,L,U):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return E};let ee=null;function ie(G,Z){if(c=Z.getViewerPose(u||o),_=Z,c!==null){const re=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;re.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let H=0;H<re.length;H++){const we=re[H];let ye=null;if(m!==null)ye=m.getViewport(we);else{const de=h.getViewSubImage(f,we);ye=de.viewport,H===0&&(e.setRenderTargetTextures(g,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(g))}let xe=v[H];xe===void 0&&(xe=new Ot,xe.layers.enable(H),xe.viewport=new mt,v[H]=xe),xe.matrix.fromArray(we.transform.matrix),xe.projectionMatrix.fromArray(we.projectionMatrix),xe.viewport.set(ye.x,ye.y,ye.width,ye.height),H===0&&T.matrix.copy(xe.matrix),ae===!0&&T.cameras.push(xe)}}for(let re=0;re<S.length;re++){const ae=M[re],H=S[re];ae!==null&&H!==void 0&&H.update(ae,Z,u||o)}if(ee&&ee(G,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const ae of E)Z.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)E.delete(ae),y.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of Z.detectedPlanes)if(!E.has(ae))E.add(ae),y.set(ae,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const H=y.get(ae);ae.lastChangedTime>H&&(y.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}_=null}const me=new zo;me.setAnimationLoop(ie),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}}function tp(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,Oo(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),c(p,d)):d.isMeshPhongMaterial?(i(p,d),u(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,M)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===xt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===xt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function np(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(S,M){const E=M.program;n.uniformBlockBinding(S,E)}function u(S,M){let E=i[S.id];E===void 0&&(_(S),E=c(S),i[S.id]=E,S.addEventListener("dispose",d));const y=M.program;n.updateUBOMapping(S,y);const L=e.render.frame;s[S.id]!==L&&(f(S),s[S.id]=L)}function c(S){const M=h();S.__bindingPointIndex=M;const E=r.createBuffer(),y=S.__size,L=S.usage;return r.bindBuffer(35345,E),r.bufferData(35345,y,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,E),E}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],E=S.uniforms,y=S.__cache;r.bindBuffer(35345,M);for(let L=0,U=E.length;L<U;L++){const v=E[L];if(m(v,L,y)===!0){const T=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let K=0;for(let $=0;$<I.length;$++){const z=I[$],D=p(z);typeof z=="number"?(v.__data[0]=z,r.bufferSubData(35345,T+K,v.__data)):z.isMatrix3?(v.__data[0]=z.elements[0],v.__data[1]=z.elements[1],v.__data[2]=z.elements[2],v.__data[3]=z.elements[0],v.__data[4]=z.elements[3],v.__data[5]=z.elements[4],v.__data[6]=z.elements[5],v.__data[7]=z.elements[0],v.__data[8]=z.elements[6],v.__data[9]=z.elements[7],v.__data[10]=z.elements[8],v.__data[11]=z.elements[0]):(z.toArray(v.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,v.__data)}}r.bindBuffer(35345,null)}function m(S,M,E){const y=S.value;if(E[M]===void 0){if(typeof y=="number")E[M]=y;else{const L=Array.isArray(y)?y:[y],U=[];for(let v=0;v<L.length;v++)U.push(L[v].clone());E[M]=U}return!0}else if(typeof y=="number"){if(E[M]!==y)return E[M]=y,!0}else{const L=Array.isArray(E[M])?E[M]:[E[M]],U=Array.isArray(y)?y:[y];for(let v=0;v<L.length;v++){const T=L[v];if(T.equals(U[v])===!1)return T.copy(U[v]),!0}}return!1}function _(S){const M=S.uniforms;let E=0;const y=16;let L=0;for(let U=0,v=M.length;U<v;U++){const T=M[U],I={boundary:0,storage:0},K=Array.isArray(T.value)?T.value:[T.value];for(let $=0,z=K.length;$<z;$++){const D=K[$],j=p(D);I.boundary+=j.boundary,I.storage+=j.storage}if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,U>0){L=E%y;const $=y-L;L!==0&&$-I.boundary<0&&(E+=y-L,T.__offset=E)}E+=I.storage}return L=E%y,L>0&&(E+=y-L),S.__size=E,S.__cache={},this}function p(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function d(S){const M=S.target;M.removeEventListener("dispose",d);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:u,dispose:g}}function ip(){const r=Ii("canvas");return r.style.display="block",r}function Wo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:ip(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cn,this.physicallyCorrectLights=!1,this.toneMapping=Xt,this.toneMappingExposure=1;const p=this;let d=!1,g=0,S=0,M=null,E=-1,y=null;const L=new mt,U=new mt;let v=null,T=e.width,I=e.height,K=1,$=null,z=null;const D=new mt(0,0,T,I),j=new mt(0,0,T,I);let J=!1;const Q=new Ar;let X=!1,ee=!1,ie=null;const me=new lt,G=new Ce,Z=new C,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?K:1}let H=t;function we(b,B){for(let q=0;q<b.length;q++){const O=b[q],Y=e.getContext(O,B);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Er}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Le,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),H=we(B,b),H===null)throw we(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,xe,de,ze,Te,be,Ye,Qe,Xe,it,je,De,Mt,ht,w,x,V,ne,se,le,Se,A,F,ce;function he(){ye=new fd(H),xe=new od(H,ye,r),ye.init(xe),A=new Zf(H,ye,xe),de=new Yf(H,ye,xe),ze=new gd,Te=new Ff,be=new $f(H,ye,de,Te,xe,A,ze),Ye=new cd(p),Qe=new dd(p),Xe=new Ec(H,xe),F=new rd(H,ye,Xe,xe),it=new pd(H,Xe,ze,F),je=new yd(H,it,Xe,ze),se=new vd(H,xe,be),x=new ld(Te),De=new If(p,Ye,Qe,ye,xe,F,x),Mt=new tp(p,Te),ht=new Nf,w=new Hf(ye,xe),ne=new sd(p,Ye,Qe,de,je,c,o),V=new Xf(p,je,xe),ce=new np(H,ze,xe,de),le=new ad(H,ye,ze,xe),Se=new md(H,ye,ze,xe),ze.programs=De.programs,p.capabilities=xe,p.extensions=ye,p.properties=Te,p.renderLists=ht,p.shadowMap=V,p.state=de,p.info=ze}he();const ue=new ep(p,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(T,I,!1))},this.getSize=function(b){return b.set(T,I)},this.setSize=function(b,B,q){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,I=B,e.width=Math.floor(b*K),e.height=Math.floor(B*K),q!==!1&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(T*K,I*K).floor()},this.setDrawingBufferSize=function(b,B,q){T=b,I=B,K=q,e.width=Math.floor(b*q),e.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,B,q,O){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,B,q,O),de.viewport(L.copy(D).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,B,q,O){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,B,q,O),de.scissor(U.copy(j).multiplyScalar(K).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){de.setScissorTest(J=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,B=!0,q=!0){let O=0;b&&(O|=16384),B&&(O|=256),q&&(O|=1024),H.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),ht.dispose(),w.dispose(),Te.dispose(),Ye.dispose(),Qe.dispose(),je.dispose(),F.dispose(),ce.dispose(),De.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fe),ue.removeEventListener("sessionend",ve),ie&&(ie.dispose(),ie=null),ke.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=ze.autoReset,B=V.enabled,q=V.autoUpdate,O=V.needsUpdate,Y=V.type;he(),ze.autoReset=b,V.enabled=B,V.autoUpdate=q,V.needsUpdate=O,V.type=Y}function Le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ie(b){const B=b.target;B.removeEventListener("dispose",Ie),Oe(B)}function Oe(b){P(b),Te.remove(b)}function P(b){const B=Te.get(b).programs;B!==void 0&&(B.forEach(function(q){De.releaseProgram(q)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,O,Y,Me){B===null&&(B=re);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=rt(b,B,q,O,Y);de.setMaterial(O,Ae);let Ne=q.index,We=1;O.wireframe===!0&&(Ne=it.getWireframeAttribute(q),We=2);const Be=q.drawRange,Ge=q.attributes.position;let et=Be.start*We,At=(Be.start+Be.count)*We;Me!==null&&(et=Math.max(et,Me.start*We),At=Math.min(At,(Me.start+Me.count)*We)),Ne!==null?(et=Math.max(et,0),At=Math.min(At,Ne.count)):Ge!=null&&(et=Math.max(et,0),At=Math.min(At,Ge.count));const Yt=At-et;if(Yt<0||Yt===1/0)return;F.setup(Y,O,Fe,q,Ne);let dn,tt=le;if(Ne!==null&&(dn=Xe.get(Ne),tt=Se,tt.setIndex(dn)),Y.isMesh)O.wireframe===!0?(de.setLineWidth(O.wireframeLinewidth*ae()),tt.setMode(1)):tt.setMode(4);else if(Y.isLine){let He=O.linewidth;He===void 0&&(He=1),de.setLineWidth(He*ae()),Y.isLineSegments?tt.setMode(1):Y.isLineLoop?tt.setMode(2):tt.setMode(3)}else Y.isPoints?tt.setMode(0):Y.isSprite&&tt.setMode(4);if(Y.isInstancedMesh)tt.renderInstances(et,Yt,Y.count);else if(q.isInstancedBufferGeometry){const He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ms=Math.min(q.instanceCount,He);tt.renderInstances(et,Yt,Ms)}else tt.render(et,Yt)},this.compile=function(b,B){function q(O,Y,Me){O.transparent===!0&&O.side===jt&&O.forceSinglePass===!1?(O.side=xt,O.needsUpdate=!0,Ee(O,Y,Me),O.side=tn,O.needsUpdate=!0,Ee(O,Y,Me),O.side=jt):Ee(O,Y,Me)}f=w.get(b),f.init(),_.push(f),b.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(p.physicallyCorrectLights),b.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let Me=0;Me<Y.length;Me++){const Ae=Y[Me];q(Ae,b,O)}else q(Y,b,O)}),_.pop(),f=null};let W=null;function te(b){W&&W(b)}function fe(){ke.stop()}function ve(){ke.start()}const ke=new zo;ke.setAnimationLoop(te),typeof self!="undefined"&&ke.setContext(self),this.setAnimationLoop=function(b){W=b,ue.setAnimationLoop(b),b===null?ke.stop():ke.start()},ue.addEventListener("sessionstart",fe),ue.addEventListener("sessionend",ve),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(B),B=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,B,M),f=w.get(b,_.length),f.init(),_.push(f),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(me),ee=this.localClippingEnabled,X=x.init(this.clippingPlanes,ee),h=ht.get(b,m.length),h.init(),m.push(h),Je(b,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort($,z),X===!0&&x.beginShadows();const q=f.state.shadowsArray;if(V.render(q,b,B),X===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,b),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const O=B.cameras;for(let Y=0,Me=O.length;Y<Me;Y++){const Ae=O[Y];st(h,b,Ae,Ae.viewport)}}else st(h,b,B);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(p,b,B),F.resetDefaultState(),E=-1,y=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Je(b,B,q,O){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){O&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Ae=je.update(b),Fe=b.material;Fe.visible&&h.push(b,Ae,Fe,q,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==ze.render.frame&&(b.skeleton.update(),b.skeleton.frame=ze.render.frame),!b.frustumCulled||Q.intersectsObject(b))){O&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Ae=je.update(b),Fe=b.material;if(Array.isArray(Fe)){const Ne=Ae.groups;for(let We=0,Be=Ne.length;We<Be;We++){const Ge=Ne[We],et=Fe[Ge.materialIndex];et&&et.visible&&h.push(b,Ae,et,q,Z.z,Ge)}}else Fe.visible&&h.push(b,Ae,Fe,q,Z.z,null)}}const Me=b.children;for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++)Je(Me[Ae],B,q,O)}function st(b,B,q,O){const Y=b.opaque,Me=b.transmissive,Ae=b.transparent;f.setupLightsView(q),X===!0&&x.setGlobalState(p.clippingPlanes,q),Me.length>0&&R(Y,B,q),O&&de.viewport(L.copy(O)),Y.length>0&&N(Y,B,q),Me.length>0&&N(Me,B,q),Ae.length>0&&N(Ae,B,q),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function R(b,B,q){const O=xe.isWebGL2;ie===null&&(ie=new Ln(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ri:An,minFilter:Pi,samples:O&&s===!0?4:0})),p.getDrawingBufferSize(G),O?ie.setSize(G.x,G.y):ie.setSize(vr(G.x),vr(G.y));const Y=p.getRenderTarget();p.setRenderTarget(ie),p.clear();const Me=p.toneMapping;p.toneMapping=Xt,N(b,B,q),p.toneMapping=Me,be.updateMultisampleRenderTarget(ie),be.updateRenderTargetMipmap(ie),p.setRenderTarget(Y)}function N(b,B,q){const O=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Me=b.length;Y<Me;Y++){const Ae=b[Y],Fe=Ae.object,Ne=Ae.geometry,We=O===null?Ae.material:O,Be=Ae.group;Fe.layers.test(q.layers)&&pe(Fe,B,q,Ne,We,Be)}}function pe(b,B,q,O,Y,Me){b.onBeforeRender(p,B,q,O,Y,Me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(p,B,q,O,b,Me),Y.transparent===!0&&Y.side===jt&&Y.forceSinglePass===!1?(Y.side=xt,Y.needsUpdate=!0,p.renderBufferDirect(q,B,O,Y,b,Me),Y.side=tn,Y.needsUpdate=!0,p.renderBufferDirect(q,B,O,Y,b,Me),Y.side=jt):p.renderBufferDirect(q,B,O,Y,b,Me),b.onAfterRender(p,B,q,O,Y,Me)}function Ee(b,B,q){B.isScene!==!0&&(B=re);const O=Te.get(b),Y=f.state.lights,Me=f.state.shadowsArray,Ae=Y.state.version,Fe=De.getParameters(b,Y.state,Me,B,q),Ne=De.getProgramCacheKey(Fe);let We=O.programs;O.environment=b.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(b.isMeshStandardMaterial?Qe:Ye).get(b.envMap||O.environment),We===void 0&&(b.addEventListener("dispose",Ie),We=new Map,O.programs=We);let Be=We.get(Ne);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===Ae)return Ve(b,Fe),Be}else Fe.uniforms=De.getUniforms(b),b.onBuild(q,Fe,p),b.onBeforeCompile(Fe,p),Be=De.acquireProgram(Fe,Ne),We.set(Ne,Be),O.uniforms=Fe.uniforms;const Ge=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=x.uniform),Ve(b,Fe),O.needsLights=Vt(b),O.lightsStateVersion=Ae,O.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMap.value=Y.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotShadowMap.value=Y.state.spotShadowMap,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMap.value=Y.state.pointShadowMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix);const et=Be.getUniforms(),At=ds.seqWithValue(et.seq,Ge);return O.currentProgram=Be,O.uniformsList=At,Be}function Ve(b,B){const q=Te.get(b);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function rt(b,B,q,O,Y){B.isScene!==!0&&(B=re),be.resetTextureUnits();const Me=B.fog,Ae=O.isMeshStandardMaterial?B.environment:null,Fe=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Cn,Ne=(O.isMeshStandardMaterial?Qe:Ye).get(O.envMap||Ae),We=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!O.normalMap&&!!q.attributes.tangent,Ge=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,Yt=O.toneMapped?p.toneMapping:Xt,dn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=dn!==void 0?dn.length:0,He=Te.get(O),Ms=f.state.lights;if(X===!0&&(ee===!0||b!==y)){const Ct=b===y&&O.id===E;x.setState(O,b,Ct)}let dt=!1;O.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ms.state.version||He.outputEncoding!==Fe||Y.isInstancedMesh&&He.instancing===!1||!Y.isInstancedMesh&&He.instancing===!0||Y.isSkinnedMesh&&He.skinning===!1||!Y.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ne||O.fog===!0&&He.fog!==Me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==x.numPlanes||He.numIntersection!==x.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Be||He.morphTargets!==Ge||He.morphNormals!==et||He.morphColors!==At||He.toneMapping!==Yt||xe.isWebGL2===!0&&He.morphTargetsCount!==tt)&&(dt=!0):(dt=!0,He.__version=O.version);let fn=He.currentProgram;dt===!0&&(fn=Ee(O,B,Y));let zr=!1,pi=!1,Ss=!1;const wt=fn.getUniforms(),pn=He.uniforms;if(de.useProgram(fn.program)&&(zr=!0,pi=!0,Ss=!0),O.id!==E&&(E=O.id,pi=!0),zr||y!==b){if(wt.setValue(H,"projectionMatrix",b.projectionMatrix),xe.logarithmicDepthBuffer&&wt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,pi=!0,Ss=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Ct=wt.map.cameraPosition;Ct!==void 0&&Ct.setValue(H,Z.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&wt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&wt.setValue(H,"viewMatrix",b.matrixWorldInverse)}if(Y.isSkinnedMesh){wt.setOptional(H,Y,"bindMatrix"),wt.setOptional(H,Y,"bindMatrixInverse");const Ct=Y.skeleton;Ct&&(xe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),wt.setValue(H,"boneTexture",Ct.boneTexture,be),wt.setValue(H,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ws=q.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&xe.isWebGL2===!0)&&se.update(Y,q,O,fn),(pi||He.receiveShadow!==Y.receiveShadow)&&(He.receiveShadow=Y.receiveShadow,wt.setValue(H,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(pn.envMap.value=Ne,pn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),pi&&(wt.setValue(H,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&St(pn,Ss),Me&&O.fog===!0&&Mt.refreshFogUniforms(pn,Me),Mt.refreshMaterialUniforms(pn,O,K,I,ie),ds.upload(H,He.uniformsList,pn,be)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ds.upload(H,He.uniformsList,pn,be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&wt.setValue(H,"center",Y.center),wt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(H,"normalMatrix",Y.normalMatrix),wt.setValue(H,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ct=O.uniformsGroups;for(let Es=0,rl=Ct.length;Es<rl;Es++)if(xe.isWebGL2){const kr=Ct[Es];ce.update(kr,fn),ce.bind(kr,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function St(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Vt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,B,q){Te.get(b.texture).__webglTexture=B,Te.get(b.depthTexture).__webglTexture=q;const O=Te.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const q=Te.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,q=0){M=b,g=B,S=q;let O=!0,Y=null,Me=!1,Ae=!1;if(b){const Ne=Te.get(b);Ne.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),O=!1):Ne.__webglFramebuffer===void 0?be.setupRenderTarget(b):Ne.__hasExternalTextures&&be.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const Be=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Be[B],Me=!0):xe.isWebGL2&&b.samples>0&&be.useMultisampledRTT(b)===!1?Y=Te.get(b).__webglMultisampledFramebuffer:Y=Be,L.copy(b.viewport),U.copy(b.scissor),v=b.scissorTest}else L.copy(D).multiplyScalar(K).floor(),U.copy(j).multiplyScalar(K).floor(),v=J;if(de.bindFramebuffer(36160,Y)&&xe.drawBuffers&&O&&de.drawBuffers(b,Y),de.viewport(L),de.scissor(U),de.setScissorTest(v),Me){const Ne=Te.get(b.texture);H.framebufferTexture2D(36160,36064,34069+B,Ne.__webglTexture,q)}else if(Ae){const Ne=Te.get(b.texture),We=B||0;H.framebufferTextureLayer(36160,36064,Ne.__webglTexture,q||0,We)}E=-1},this.readRenderTargetPixels=function(b,B,q,O,Y,Me,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){de.bindFramebuffer(36160,Fe);try{const Ne=b.texture,We=Ne.format,Be=Ne.type;if(We!==Gt&&A.convert(We)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===Ri&&(ye.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Be!==An&&A.convert(Be)!==H.getParameter(35738)&&!(Be===Sn&&(xe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-O&&q>=0&&q<=b.height-Y&&H.readPixels(B,q,O,Y,A.convert(We),A.convert(Be),Me)}finally{const Ne=M!==null?Te.get(M).__webglFramebuffer:null;de.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(b,B,q=0){const O=Math.pow(2,-q),Y=Math.floor(B.image.width*O),Me=Math.floor(B.image.height*O);be.setTexture2D(B,0),H.copyTexSubImage2D(3553,q,0,0,b.x,b.y,Y,Me),de.unbindTexture()},this.copyTextureToTexture=function(b,B,q,O=0){const Y=B.image.width,Me=B.image.height,Ae=A.convert(q.format),Fe=A.convert(q.type);be.setTexture2D(q,0),H.pixelStorei(37440,q.flipY),H.pixelStorei(37441,q.premultiplyAlpha),H.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?H.texSubImage2D(3553,O,b.x,b.y,Y,Me,Ae,Fe,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(3553,O,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Ae,B.mipmaps[0].data):H.texSubImage2D(3553,O,b.x,b.y,Ae,Fe,B.image),O===0&&q.generateMipmaps&&H.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(b,B,q,O,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Fe=b.max.z-b.min.z+1,Ne=A.convert(O.format),We=A.convert(O.type);let Be;if(O.isData3DTexture)be.setTexture3D(O,0),Be=32879;else if(O.isDataArrayTexture)be.setTexture2DArray(O,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment);const Ge=H.getParameter(3314),et=H.getParameter(32878),At=H.getParameter(3316),Yt=H.getParameter(3315),dn=H.getParameter(32877),tt=q.isCompressedTexture?q.mipmaps[0]:q.image;H.pixelStorei(3314,tt.width),H.pixelStorei(32878,tt.height),H.pixelStorei(3316,b.min.x),H.pixelStorei(3315,b.min.y),H.pixelStorei(32877,b.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Be,Y,B.x,B.y,B.z,Me,Ae,Fe,Ne,We,tt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Be,Y,B.x,B.y,B.z,Me,Ae,Fe,Ne,tt.data)):H.texSubImage3D(Be,Y,B.x,B.y,B.z,Me,Ae,Fe,Ne,We,tt),H.pixelStorei(3314,Ge),H.pixelStorei(32878,et),H.pixelStorei(3316,At),H.pixelStorei(3315,Yt),H.pixelStorei(32877,dn),Y===0&&O.generateMipmaps&&H.generateMipmap(Be),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?be.setTextureCube(b,0):b.isData3DTexture?be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?be.setTexture2DArray(b,0):be.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){g=0,S=0,M=null,de.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class sp extends Wo{}sp.prototype.isWebGL1Renderer=!0;class Lr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Lr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class rp extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ap extends ot{constructor(e=null,t=1,n=1,i,s,o,a,l,u=gt,c=gt,h,f){super(null,o,a,l,u,c,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class op extends ot{constructor(e,t,n,i,s,o,a,l,u){super(e,t,n,i,s,o,a,l,u),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:bt,this.magFilter=s!==void 0?s:bt,this.generateMipmaps=!1;const c=this;function h(){c.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Pr extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new C,c=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*i;u.x=e*Math.cos(m),u.y=e*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/e+1)/2,c.y=(o[f+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}static fromJSON(e){return new Pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class un extends It{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),s=Math.floor(s);const c=[],h=[],f=[],m=[];let _=0;const p=[],d=n/2;let g=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(m,2));function S(){const E=new C,y=new C;let L=0;const U=(t-e)/n;for(let v=0;v<=s;v++){const T=[],I=v/s,K=I*(t-e)+e;for(let $=0;$<=i;$++){const z=$/i,D=z*l+a,j=Math.sin(D),J=Math.cos(D);y.x=K*j,y.y=-I*n+d,y.z=K*J,h.push(y.x,y.y,y.z),E.set(j,U,J).normalize(),f.push(E.x,E.y,E.z),m.push(z,1-I),T.push(_++)}p.push(T)}for(let v=0;v<i;v++)for(let T=0;T<s;T++){const I=p[T][v],K=p[T+1][v],$=p[T+1][v+1],z=p[T][v+1];c.push(I,K,z),c.push(K,$,z),L+=6}u.addGroup(g,L,0),g+=L}function M(E){const y=_,L=new Ce,U=new C;let v=0;const T=E===!0?e:t,I=E===!0?1:-1;for(let $=1;$<=i;$++)h.push(0,d*I,0),f.push(0,I,0),m.push(.5,.5),_++;const K=_;for(let $=0;$<=i;$++){const D=$/i*l+a,j=Math.cos(D),J=Math.sin(D);U.x=T*J,U.y=d*I,U.z=T*j,h.push(U.x,U.y,U.z),f.push(0,I,0),L.x=j*.5+.5,L.y=J*.5*I+.5,m.push(L.x,L.y),_++}for(let $=0;$<i;$++){const z=y+$,D=K+$;E===!0?c.push(D,D+1,z):c.push(D+1,D,z),v+=3}u.addGroup(g,v,E===!0?1:2),g+=v}}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr extends It{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],u=[],c=[];let h=e;const f=(t-e)/i,m=new C,_=new Ce;for(let p=0;p<=i;p++){for(let d=0;d<=n;d++){const g=s+d/n*o;m.x=h*Math.cos(g),m.y=h*Math.sin(g),l.push(m.x,m.y,m.z),u.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,c.push(_.x,_.y)}h+=f}for(let p=0;p<i;p++){const d=p*(n+1);for(let g=0;g<n;g++){const S=g+d,M=S,E=S+n+1,y=S+n+2,L=S+1;a.push(M,E,L),a.push(E,y,L)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(c,2))}static fromJSON(e){return new Rr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vs extends It{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new C,f=new C,m=[],_=[],p=[],d=[];for(let g=0;g<=n;g++){const S=[],M=g/n;let E=0;g==0&&o==0?E=.5/t:g==n&&l==Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){const L=y/t;h.x=-e*Math.cos(i+L*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+L*s)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(L+E,1-M),S.push(u++)}c.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const M=c[g][S+1],E=c[g][S],y=c[g+1][S],L=c[g+1][S+1];(g!==0||o>0)&&m.push(M,E,L),(g!==n-1||l<Math.PI)&&m.push(E,y,L)}this.setIndex(m),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2))}static fromJSON(e){return new vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lp extends ui{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Dr extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ka={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class cp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const m=u[h],_=u[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const up=new cp;class qo{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class jo extends qo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ka.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ii("img");function l(){c(),Ka.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){c(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class hp extends qo{constructor(e){super(e)}load(e,t,n,i){const s=new ot,o=new jo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ir extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Mi extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const rr=new lt,Ja=new C,Qa=new C;class dp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),Qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qa),t.updateMatrixWorld(),rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fp extends dp{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zn extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kn extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eo(){return(typeof performance=="undefined"?Date:performance).now()}class to{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Er}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Er);const no={type:"change"},ar={type:"start"},io={type:"end"};class mp extends In{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:On.ROTATE,TWO:On.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ht),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(no),n.update(),s=i.NONE},this.update=function(){const A=new C,F=new Pn().setFromUnitVectors(e.up,new C(0,1,0)),ce=F.clone().invert(),he=new C,ue=new Pn,ge=2*Math.PI;return function(){const Le=n.object.position;A.copy(Le).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(U()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ie)&&isFinite(Oe)&&(Ie<-Math.PI?Ie+=ge:Ie>Math.PI&&(Ie-=ge),Oe<-Math.PI?Oe+=ge:Oe>Math.PI&&(Oe-=ge),Ie<=Oe?a.theta=Math.max(Ie,Math.min(Oe,a.theta)):a.theta=a.theta>(Ie+Oe)/2?Math.max(Ie,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),A.setFromSpherical(a),A.applyQuaternion(ce),Le.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,h||he.distanceToSquared(n.object.position)>o||8*(1-ue.dot(n.object.quaternion))>o?(n.dispatchEvent(no),he.copy(n.object.position),ue.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",it),n.domElement.removeEventListener("wheel",Mt),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ht)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new to,l=new to;let u=1;const c=new C;let h=!1;const f=new Ce,m=new Ce,_=new Ce,p=new Ce,d=new Ce,g=new Ce,S=new Ce,M=new Ce,E=new Ce,y=[],L={};function U(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function T(A){l.theta-=A}function I(A){l.phi-=A}const K=function(){const A=new C;return function(ce,he){A.setFromMatrixColumn(he,0),A.multiplyScalar(-ce),c.add(A)}}(),$=function(){const A=new C;return function(ce,he){n.screenSpacePanning===!0?A.setFromMatrixColumn(he,1):(A.setFromMatrixColumn(he,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ce),c.add(A)}}(),z=function(){const A=new C;return function(ce,he){const ue=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;A.copy(ge).sub(n.target);let _e=A.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),K(2*ce*_e/ue.clientHeight,n.object.matrix),$(2*he*_e/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(ce*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),$(he*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?u/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A){n.object.isPerspectiveCamera?u*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A){f.set(A.clientX,A.clientY)}function Q(A){S.set(A.clientX,A.clientY)}function X(A){p.set(A.clientX,A.clientY)}function ee(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;T(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m),n.update()}function ie(A){M.set(A.clientX,A.clientY),E.subVectors(M,S),E.y>0?D(v()):E.y<0&&j(v()),S.copy(M),n.update()}function me(A){d.set(A.clientX,A.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(d),n.update()}function G(A){A.deltaY<0?j(v()):A.deltaY>0&&D(v()),n.update()}function Z(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function re(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);f.set(A,F)}}function ae(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);p.set(A,F)}}function H(){const A=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ce=Math.sqrt(A*A+F*F);S.set(0,ce)}function we(){n.enableZoom&&H(),n.enablePan&&ae()}function ye(){n.enableZoom&&H(),n.enableRotate&&re()}function xe(A){if(y.length==1)m.set(A.pageX,A.pageY);else{const ce=Se(A),he=.5*(A.pageX+ce.x),ue=.5*(A.pageY+ce.y);m.set(he,ue)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;T(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m)}function de(A){if(y.length===1)d.set(A.pageX,A.pageY);else{const F=Se(A),ce=.5*(A.pageX+F.x),he=.5*(A.pageY+F.y);d.set(ce,he)}g.subVectors(d,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(d)}function ze(A){const F=Se(A),ce=A.pageX-F.x,he=A.pageY-F.y,ue=Math.sqrt(ce*ce+he*he);M.set(0,ue),E.set(0,Math.pow(M.y/S.y,n.zoomSpeed)),D(E.y),S.copy(M)}function Te(A){n.enableZoom&&ze(A),n.enablePan&&de(A)}function be(A){n.enableZoom&&ze(A),n.enableRotate&&xe(A)}function Ye(A){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",Xe)),ne(A),A.pointerType==="touch"?w(A):je(A))}function Qe(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):De(A))}function Xe(A){se(A),y.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(io),s=i.NONE}function it(A){se(A)}function je(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Fn.DOLLY:if(n.enableZoom===!1)return;Q(A),s=i.DOLLY;break;case Fn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;X(A),s=i.PAN}else{if(n.enableRotate===!1)return;J(A),s=i.ROTATE}break;case Fn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;J(A),s=i.ROTATE}else{if(n.enablePan===!1)return;X(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ar)}function De(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ie(A);break;case i.PAN:if(n.enablePan===!1)return;me(A);break}}function Mt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(ar),G(A),n.dispatchEvent(io))}function ht(A){n.enabled===!1||n.enablePan===!1||Z(A)}function w(A){switch(le(A),y.length){case 1:switch(n.touches.ONE){case On.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case On.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case On.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),s=i.TOUCH_DOLLY_PAN;break;case On.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ar)}function x(A){switch(le(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(A),n.update();break;default:s=i.NONE}}function V(A){n.enabled!==!1&&A.preventDefault()}function ne(A){y.push(A)}function se(A){delete L[A.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==A.pointerId){y.splice(F,1);return}}function le(A){let F=L[A.pointerId];F===void 0&&(F=new Ce,L[A.pointerId]=F),F.set(A.pageX,A.pageY)}function Se(A){const F=A.pointerId===y[0].pointerId?y[1]:y[0];return L[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",it),n.domElement.addEventListener("wheel",Mt,{passive:!1}),this.update()}}const or=1/60,Xo=2,gp=.03,_p=1-gp,xp=.12,vp=1.225,wn={DEXTER:"dexter",SINISTER:"sinister"},Pe={TOP:"top",LEFT:"left",BOTTOM:"bottom",RIGHT:"right"},$e={VERTICAL:"vertical",HORIZONTAL:"horizontal",OUTRIGGER:"outrigger",CROSSBAR:"crossbar",GALLERY:"gallery",AUSTRALIAN:"australian"},Bt={NONE:"none",TOP_RIGHT:"topright",TOP_LEFT:"topleft"};function yp(r,e,t){const n=r*e,i=new Uint8Array(4*n),s=Math.floor(t.r*255),o=Math.floor(t.g*255),a=Math.floor(t.b*255),l=1*255;for(let c=0;c<n;c++){const h=c*4;i[h]=s,i[h+1]=o,i[h+2]=a,i[h+3]=l}const u=new ap(i,r,e);return u.needsUpdate=!0,u}const bp=`uniform sampler2D textureMap;
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
`,Mp=`varying vec2 vUV;

void main() {
    vUV = 0.75 * uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`,so={depth_frag:bp,depth_vert:Mp};class Sp extends It{constructor(e=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),t=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],s=[],o=[],a=[],l=1e-5,u=new C,c=new C,h=new C,f=new C,m=new C,_=t+1;for(let p=0;p<=n;p++){const d=p/n;for(let g=0;g<=t;g++){const S=g/t;e(S,d,c),s.push(c.x,c.y,c.z),S-l>=0?(e(S-l,d,h),f.subVectors(c,h)):(e(S+l,d,h),f.subVectors(h,c)),d-l>=0?(e(S,d-l,h),m.subVectors(c,h)):(e(S,d+l,h),m.subVectors(h,c)),u.crossVectors(f,m).normalize(),o.push(u.x,u.y,u.z),a.push(S,d)}}for(let p=0;p<n;p++)for(let d=0;d<t;d++){const g=p*_+d,S=p*_+d+1,M=(p+1)*_+d+1,E=(p+1)*_+d;i.push(g,S,E),i.push(S,M,E)}this.setIndex(i),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2))}}class wp{constructor(e,t){this.position=e.clone(),this.previous=e.clone(),this.original=e.clone(),this.mass=t,this.inverseMass=1/t,this.acceleration=new C,this.tmp=new C}applyForce(e){this.acceleration.addScaledVector(e,this.inverseMass)}integrate(e){const t=this.tmp.subVectors(this.position,this.previous).multiplyScalar(_p).add(this.position).addScaledVector(this.acceleration,e);this.tmp=this.previous,this.previous=this.position,this.position=t,this.acceleration.set(0,0,0)}}const lr=new C;class yn{constructor(e,t,n){this.p1=e,this.p2=t,this.restDistance=n}resolve(){const e=this.p1,t=this.p2,n=this.restDistance;lr.subVectors(t.position,e.position);const i=lr.length();if(i===0)return;const s=lr.multiplyScalar((1-n/i)/2);e.position.add(s),t.position.sub(s)}}class Ep{constructor(e,t,n,i){const s=n*e,o=n*t,a=[],l=[],u=(p,d)=>a[p+d*(e+1)],c=(p,d,g)=>{g.set(p*s,d*o,0)},h=new C,f=i/((t+1)*(e+1));for(let p=0;p<=t;p++)for(let d=0;d<=e;d++)c(d/e,p/t,h),a.push(new wp(h,f));for(let p=0;p<t;p++)for(let d=0;d<e;d++)l.push(new yn(u(d,p),u(d,p+1),n)),l.push(new yn(u(d,p),u(d+1,p),n));for(let p=e,d=0;d<t;d++)l.push(new yn(u(p,d),u(p,d+1),n));for(let p=t,d=0;d<e;d++)l.push(new yn(u(d,p),u(d+1,p),n));const m=Math.sqrt(n*n*2);for(let p=0;p<t;p++)for(let d=0;d<e;d++)l.push(new yn(u(d,p),u(d+1,p+1),m)),l.push(new yn(u(d+1,p),u(d,p+1),m));const _=new Sp(c,e,t);_.getAttribute("position").setUsage(nc),this.xSegments=e,this.ySegments=t,this.restDistance=n,this.width=s,this.height=o,this.particles=a,this.constraints=l,this.particleAt=u,this.geometry=_}reset(){const e=this.particles;for(let t=0,n=e.length;t<n;t++){const i=e[t];i.previous.copy(i.position.copy(i.original))}}simulate(e){const t=this.particles,n=this.constraints,i=e*e;for(let s=0,o=t.length;s<o;s++)t[s].integrate(i);for(let s=0,o=Xo;s<o;s++)for(let a=0,l=n.length;a<l;a++)n[a].resolve()}render(){const e=this.particles,t=this.geometry,n=t.getAttribute("position"),i=n.array;for(let s=0,o=e.length;s<o;s++){const a=e[s].position,l=s*3;i[l]=a.x,i[l+1]=a.y,i[l+2]=a.z}n.needsUpdate=!0,t.computeVertexNormals()}}const ro=1.2,rs=new C;class ao extends yn{resolve(){const e=this.p1,t=this.p2,n=this.restDistance*ro;rs.subVectors(e.position,t.position);const i=rs.length()/ro;rs.normalize();const s=rs.multiplyScalar(i-n);i>n&&t.position.add(s)}}const Yo=yp(1,1,new Ue(16777215));function Tp(r){const{width:e,height:t,mass:n,restDistance:i}=r;return new Ep(Math.max(1,Math.round(e/i)),Math.max(1,Math.round(t/i)),i,n*e*t)}function Ap(r,e){const t=r.geometry;let n=Yo,i;const s=a=>(a.needsUpdate=!0,a.anisotropy=16,a.minFilter=bt,a.magFilter=bt,a.wrapS=a.wrapT=Nt,a),o=(a,l)=>{a.encoding=qe;const u=new Dr({alphaTest:.5,color:16777215,metalness:.08,roughness:.86,side:l,map:a}),c=new _t(t,u);return c.castShadow=!0,c.customDepthMaterial=new nn({glslVersion:_r,uniforms:{textureMap:{value:a}},vertexShader:so.depth_vert,fragmentShader:so.depth_frag}),c.position.set(0,-r.height,0),c};return e&&e.texture&&(e.texture instanceof ot?(n=s(e.texture),e.backSideTexture instanceof ot&&(i=s(e.backSideTexture))):console.error("FlagWaver.Flag: options.texture must be an instance of THREE.Texture.")),[o(n,i?tn:jt),i?o(i,xt):null]}const Cp=(()=>{const r={edges:[],spacing:1};function e(t,n,i,s){const{xSegments:o,ySegments:a,particleAt:l}=t,{spacing:u}=s;switch(i){case Pe.TOP:for(let c=0;c<=o;c+=u)n.push(l(c,a));break;case Pe.LEFT:for(let c=0;c<=a;c+=u)n.push(l(0,c));break;case Pe.BOTTOM:for(let c=0;c<=o;c+=u)n.push(l(c,0));break;case Pe.RIGHT:for(let c=0;c<=a;c+=u)n.push(l(o,c));break}}return function(n,i,s){const o=Object.assign({},r,s),{edges:a}=o;if(typeof a=="string")e(n,i,a,o);else if(a&&a.length)for(let l=0,u=a.length;l<u;l++)e(n,i,a[l],o)}})(),ms=class ms{constructor(e){const t=Object.assign({},ms.defaults,e);this.cloth=Tp(t),this.pins=[],this.lengthConstraints=[];const[n,i]=Ap(this.cloth,t);this.mesh=n,this.mesh2=i,this.object=new Ze,this.object.add(this.mesh),this.mesh2&&this.object.add(this.mesh2),this.pin(t.pin)}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.customDepthMaterial.dispose(),this.mesh2&&(this.mesh2.material.dispose(),this.mesh2.material.map.dispose(),this.mesh2.customDepthMaterial.dispose())}pin(e){Cp(this.cloth,this.pins,e)}unpin(){this.pins=[]}setLengthConstraints(e){const{xSegments:t,ySegments:n,restDistance:i,particleAt:s}=this.cloth,o=[];if(e===Pe.LEFT)for(let a=0;a<=n;a++)for(let l=0;l<t;l++)o.push(new ao(s(l,a),s(l+1,a),i));else if(e===Pe.TOP)for(let a=0;a<=t;a++)for(let l=n;l>0;l--)o.push(new ao(s(a,l),s(a,l-1),i));this.lengthConstraints=o}reset(){this.cloth.reset()}simulate(e){const t=this.pins,n=this.lengthConstraints;this.cloth.simulate(e);for(let i=0,s=t.length;i<s;i++){const o=t[i];o.previous.copy(o.position.copy(o.original))}for(let i=0,s=Xo;i<s;i++)for(let o=0,a=n.length;o<a;o++)n[o].resolve()}render(){this.cloth.render()}};zi(ms,"defaults",{width:1.8,height:1.2,mass:.11,restDistance:1.2/10,rigidness:1,texture:Yo,backSideTexture:null,pin:{edges:[Pe.LEFT]}});let Rn=ms;function Fr(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new It;let u=0;for(let c=0;c<r.length;++c){const h=r[c];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,m,c),u+=m}}if(t){let c=0;const h=[];for(let f=0;f<r.length;++f){const m=r[f].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+c);c+=r[f].attributes.position.count}l.setIndex(h)}for(const c in s){const h=oo(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const m=[];for(let p=0;p<o[c].length;++p)m.push(o[c][p][f]);const _=oo(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}return l}function oo(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const l=r[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new Ht(s,t,n)}function di(r){const e=r.poleWidth/2,t=r.poleLength,n=32,i=r.poleCapSize/2,s=new un(e,e,t,n);s.translate(0,r.poleLength/2,0);const o=new un(i,i,i,n);return o.translate(0,t+i/2,0),Fr([s,o])}function Lp(r){const e=di(r),t=r.poleWidth/2,n=r.poleLength,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=r.crossbarCapSize/2,l=r.poleTopOffset,u=new un(i,i,s,o);u.rotateZ(Math.PI/2);const c=new un(a,a,a,o),h=c.clone(),f=n-l,m=t+i;return c.rotateZ(Math.PI/2),c.translate(-s/2,f,m),h.rotateZ(-Math.PI/2),h.translate(s/2,f,m),u.translate(0,f,m),Fr([e,u,c,h])}function Pp(r){const e=di(r),t=r.poleLength,n=r.poleCapSize/2,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=new un(i,i,s,o);return a.rotateZ(Math.PI/2),a.translate(s/2,t+n-i,0),Fr([e,a])}class hn{constructor(e){const t=Object.assign({},this.constructor.defaults,e),n=this.buildGeometry(t),i=new Dr({color:16711422,metalness:.98,roughness:.55}),s=new _t(n,i);s.receiveShadow=!0,s.castShadow=!0,this.top=new C(0,t.poleLength,0),this.mesh=s,this.object=this.mesh}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose()}buildGeometry(e){return di(e)}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top)}}zi(hn,"defaults",(()=>{const e={};return e.flagpoleType=$e.VERTICAL,e.poleWidth=.076,e.poleLength=6,e.poleCapSize=e.poleWidth*4/3,e.crossbarWidth=e.poleWidth*2/3,e.crossbarLength=1.2,e.crossbarCapSize=e.crossbarWidth*3/2,e.poleTopOffset=.1,e})());class Rp{constructor(e){const t=Object.assign({},e),{flagpole:n,flag:i}=t;this.flagpole=n||new hn,this.flag=i||new Rn,this.flagpole.addFlag(this.flag,0),this.object=new Ze,this.object.add(this.flagpole.object),this.object.add(this.flag.object)}destroy(){this.destroyChildSubject(this.flagpole),this.destroyChildSubject(this.flag)}destroyChildSubject(e){e&&(this.object.remove(e.object),e.destroy())}reset(){this.flag.reset()}simulate(e){this.flag.simulate(e)}render(){this.flag.render()}}const Ci={blowFromLeftDirection:(r,e)=>r.set(2e3,0,1e3),rotatingDirection:(r,e)=>r.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),constantSpeed:(r,e)=>r,variableSpeed:(r,e)=>r*(1+.25*Math.cos(e/7e3))};function Dp(r){return .5*vp*r*r}function Ip(r){return r.x===0&&(r.x=.001),r.y===0&&(r.y=.001),r.z===0&&(r.z=.001),r}function Fp(r){return r===0?.001:r}class $o{constructor(e){const t=Object.assign({},this.constructor.defaults,e);this.direction=t.direction,this.speed=t.speed,this.directionFn=t.directionFn,this.speedFn=t.speedFn,this.pressure=new C}update(){const e=Date.now();this.directionFn(Ip(this.pressure.copy(this.direction)),e).normalize().multiplyScalar(Dp(this.speedFn(Fp(this.speed),e)))}}zi($o,"defaults",{direction:new C(1,0,0),speed:10,directionFn:Ci.blowFromLeftDirection,speedFn:Ci.constantSpeed});class Op extends hn{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength-t.poleTopOffset,t.poleWidth/2+t.crossbarWidth/2),this.verticalHoisting=t.verticalHoisting}buildGeometry(e){return Lp(e)}addFlag(e){switch(e.unpin(),this.verticalHoisting){case Bt.NONE:e.pin({edges:[Pe.TOP]}),e.setLengthConstraints(Pe.TOP),e.object.position.add(this.top),e.object.position.x=-e.cloth.width/2;break;case Bt.TOP_LEFT:e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.position.x=-e.cloth.height/2,e.object.rotateZ(Math.PI*3/2),e.object.rotateX(Math.PI);break;case Bt.TOP_RIGHT:default:e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.position.x=e.cloth.height/2,e.object.rotateZ(Math.PI*3/2);break}}}class Np extends hn{buildGeometry(e){return Pp(e)}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT,Pe.TOP]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top)}}const Up=new C(0,0,1);class zp extends hn{constructor(e){super(e),this.top.applyAxisAngle(Up,Math.PI*3/2)}buildGeometry(e){const t=di(e);return t.rotateZ(Math.PI*3/2),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*3/2)}}const kp=new C(0,0,1);class Bp extends hn{constructor(e){super(e),this.top.applyAxisAngle(kp,Math.PI*7/4)}buildGeometry(e){const t=di(e);return t.rotateZ(Math.PI*7/4),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*7/4)}}const as=new C,lo=new C;function Zo(r,e){return as.copy(r),e instanceof Ze&&(lo.setFromMatrixPosition(e.matrixWorld),as.add(lo),e.worldToLocal(as)),as}const Gp=new C(0,-9.80665,0);function Hp(r,e){const t=r.particles,n=Zo(Gp,e);for(let i=0,s=t.length;i<s;i++)t[i].acceleration.add(n)}new C;const os=new C,co=new C;function Vp(r,e,t){return os.subVectors(t,e),co.subVectors(r,e),os.cross(co),os.normalize(),os}function uo(r,e,t){const n=r.particles,i=r.geometry.getIndex();if(e){const s=r.restDistance*r.restDistance/2,o=Zo(e.pressure,t).multiplyScalar(xp*s/3);for(let a=0,l=i.count;a<l;a+=3){const u=i.getX(a),c=i.getX(a+1),h=i.getX(a+2),f=n[u],m=n[c],_=n[h],p=Vp(f.position,m.position,_.position);p.multiplyScalar(p.dot(o)),f.applyForce(p),m.applyForce(p),_.applyForce(p)}}}class Wp extends hn{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength*2/3,0)}buildGeometry(e){const t=di(e);return t.translate(0,-e.poleLength*5/3,0),t.rotateZ(Math.PI),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.translateY(e.cloth.height)}}function qp(r,e){const t=Object.assign({},r);let n;switch(t.flagpoleType){case $e.HORIZONTAL:n=new zp(t);break;case $e.OUTRIGGER:n=new Bp(t);break;case $e.CROSSBAR:t.crossbarLength=t.verticalHoisting===Bt.NONE?e.cloth.width:e.cloth.height,n=new Op(t);break;case $e.GALLERY:t.crossbarLength=e.cloth.width,n=new Np(t);break;case $e.AUSTRALIAN:n=new Wp(t);break;case $e.VERTICAL:default:n=new hn(t);break}return n}function ho(r){switch(r){case Pe.TOP:return 0;case Pe.LEFT:return-Math.PI/2;case Pe.BOTTOM:return Math.PI;case Pe.RIGHT:return Math.PI/2;default:return 0}}const Oi=r=>!isNaN(parseFloat(r))&&isFinite(r),jp=r=>!!(r&&typeof r=="object"),Xp=500,Yp={image:null,backSideImage:null,width:"auto",height:"auto",hoisting:wn.DEXTER,orientation:Pe.TOP,resolution:256};function $p(r,e){const t=r.width||r.videoWidth,n=r.height||r.videoHeight;if(e.width==="auto"&&e.height==="auto"){const i=Rn.defaults.height;return t<n?{width:i,height:i*n/t}:{width:i*t/n,height:i}}else return e.width==="auto"&&Oi(e.height)?{width:e.height*t/n,height:e.height}:Oi(e.width)&&e.height==="auto"?{width:e.width,height:e.width*n/t}:{width:e.width,height:e.height}}function Zp(r,e){const{width:t,height:n}=r?$p(r,e):e;if(Oi(t)&&Oi(n)){const i=Math.min(1,Xp/Math.max(t,n));return{width:t*i,height:n*i}}else return{width:Rn.defaults.width,height:Rn.defaults.height}}function Kp(r){return r.orientation===Pe.LEFT||r.orientation===Pe.RIGHT}function Jp(r,e){const t=document.createElement("canvas"),n=t.getContext("2d"),i=r.width,s=r.height,o=Math.min(1,e.height*e.resolution/s),a=Math.round(i*o),l=Math.round(s*o);return t.width=a,t.height=l,n.drawImage(r,0,0,a,l),t}function fo(r,e,t){const n=r instanceof HTMLVideoElement?new op(r):new ot(Jp(r,e));if(n.matrixAutoUpdate=!1,jp(t)){const i=n.matrix;i.scale(1,1),t.reflect&&i.translate(-1,0).scale(-1,1),Oi(t.rotate)&&i.translate(-.5,-.5).rotate(-t.rotate).translate(.5,.5)}return n}function Qp(r){const e={};Kp(r)?(e.width=r.height,e.height=r.width):(e.width=r.width,e.height=r.height);const t=r.hoisting===wn.SINISTER;let{image:n,backSideImage:i}=r;if(t&&i){const s=n;n=i,i=s}return n&&(e.texture=fo(n,r,{reflect:i?!1:t,rotate:ho(r.orientation)})),i&&(e.backSideTexture=fo(i,r,{reflect:!0,rotate:-ho(r.orientation)})),e}function em(r){const e=Object.assign({},Yp,r);return Object.assign(e,Zp(e.image,e)),Qp(e)}const Ko=new jo;Ko.setCrossOrigin("anonymous");function cr(r,e,t){Ko.load(r,e,null,n=>{console.error(`FlagWaver.loadImage: Failed to load image from ${r}.`),t&&t(n)})}const ln={day:{sky:["#4a90d9","#8fc3f2","#dcefff"],label:"Day",css:"linear-gradient(180deg, #4a90d9 0%, #8fc3f2 16%, #dcefff 30%, #dcefff 100%)",stops:["#5a9fe0","#a6d2f7","#dcefff"],fog:14479359,ground:6196298,lights:()=>{const r=new Kn(16777215,.55),e=new Mi(13625087,8034906,.35),t=new Zn(16774368,6);return t.position.set(20,70,40),{ambient:[r,e],sun:t}}},sunset:{sky:["#2b2d6b","#d9706e","#ffd79a"],label:"Sunset",css:"linear-gradient(180deg, #2b2d6b 0%, #c75a6b 14%, #f6a35a 23%, #ffd79a 30%, #ffd79a 100%)",stops:["#2b2d6b","#c75a6b","#f6a35a","#ffd79a"],fog:16766874,ground:4866869,lights:()=>{const r=new Kn(16765088,.35),e=new Mi(16756864,3811898,.4),t=new Zn(16752736,5.5);return t.position.set(-60,18,30),{ambient:[r,e],sun:t}}},overcast:{sky:["#8d99a6","#b8c2cc","#d7dde3"],label:"Overcast",css:"linear-gradient(180deg, #8d99a6 0%, #b8c2cc 18%, #d7dde3 30%, #d7dde3 100%)",stops:["#8d99a6","#b8c2cc","#d7dde3"],fog:14147043,ground:5662282,lights:()=>{const r=new Kn(16777215,.9),e=new Mi(14739182,6320218,.5),t=new Zn(15791359,2.5);return t.position.set(10,70,20),{ambient:[r,e],sun:t}}},night:{sky:["#050816","#0c1733","#1a2a4f"],label:"Night",css:"linear-gradient(180deg, #050816 0%, #0c1733 16%, #1a2a4f 30%, #1a2a4f 100%)",stops:["#050816","#0c1733","#1a2a4f"],fog:1714767,ground:1713174,lights:()=>{const r=new Kn(8425664,.35),e=new Mi(4876992,1053720,.6),t=new Zn(13161727,4);return t.position.set(-40,50,60),{ambient:[r,e],sun:t}}},studio:{sky:["#1c1c1f","#232327","#2a2a2f"],label:"Studio",css:"linear-gradient(180deg, #1c1c1f 0%, #2a2a2f 30%, #2a2a2f 100%)",stops:["#1c1c1f","#2a2a2f"],fog:2763311,ground:2894896,lights:()=>{const r=new Kn(16777215,.5),e=new Mi(16777215,4210752,.4),t=new Zn(16777215,5);return t.position.set(25,60,50),{ambient:[r,e],sun:t}}},green:{sky:["#00b140","#00b140","#00b140"],label:"Green screen",css:"#00b140",stops:["#00b140","#00b140"],fog:45376,ground:45376,lights:()=>{const r=new Kn(16777215,.7),e=new Zn(16777215,5);return e.position.set(25,60,50),{ambient:[r],sun:e}}}},tm=Object.keys(ln),nm=`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`,im=`
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
}`;class sm{constructor(e=280){this.uniforms={topColor:{value:new Ue(4886745)},midColor:{value:new Ue(9421810)},horizonColor:{value:new Ue(14479359)},center:{value:new Ue(0,0,0)}};const t=new nn({uniforms:this.uniforms,vertexShader:nm,fragmentShader:im,side:xt,depthWrite:!1,fog:!1});this.mesh=new _t(new vs(e,48,24),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColors(e,t,n){this.uniforms.topColor.value.set(e),this.uniforms.midColor.value.set(t),this.uniforms.horizonColor.value.set(n)}follow(e){this.mesh.position.set(e.position.x,0,e.position.z);const t=this.uniforms.center.value;t.r=e.position.x,t.g=0,t.b=e.position.z}}const po={l:.3,r:.3,t:.4,b:.9};class rm{constructor(e){this.world=e,this.active=null,this.loader=new hp,this.loader.setCrossOrigin("anonymous"),this.height=0,this.scale=1,this.distance=140,this.shadowCatcher=new _t(new Fi(1,1),new lp({opacity:.35,transparent:!0,depthWrite:!1})),this.shadowCatcher.rotation.x=-Math.PI/2,this.shadowCatcher.scale.setScalar(400),this.shadowCatcher.receiveShadow=!0,this.shadowCatcher.visible=!1,this.shadowCatcher.position.y=-.005,e.scene.add(this.shadowCatcher),this._token=0}get kind(){return this.active?this.active.def.kind:null}load(e,t){this.clear(!1);const n=++this._token;return new Promise((i,s)=>{this.loader.load(t.url,o=>{if(n!==this._token){o.dispose();return}o.encoding=qe,o.anisotropy=Math.min(4,this.world.renderer.capabilities.getMaxAnisotropy());const a=o.image,l=a.width/a.height;let u=t.kind;u==="auto"&&(u=l>=3?"pano":"photo");const c={...t,kind:u};c.horizon===void 0&&(c.horizon=u==="photo"?.4:.5),c.fov===void 0&&(c.fov=32),this.active={id:e,def:c,texture:o,mesh:null,image:a,aspect:l},this._buildMesh(),this._applyEnvironment(),i()},void 0,()=>{n===this._token&&s(new Error("Backdrop image could not be loaded (offline, blocked, or no CORS)."))})})}clear(e=!0){this._token++,this.active&&(this.active.mesh&&(this.world.scene.remove(this.active.mesh),this.active.mesh.geometry.dispose(),this.active.mesh.material.dispose()),this.active.texture.dispose(),this.active=null),this.shadowCatcher.visible=!1,this.world.ground.visible=this.world.groundWanted,this.world.sky.mesh.visible=!0,this.world.scene.fog=this.world.defaultFog;const t=this.world.controls;t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.minPolarAngle=0,t.maxPolarAngle=Math.PI*.52,t.maxDistance=160,e&&this.world.applyPreset(this.world.presetId)}setHeight(e){this.height=e,this._layout()}setScale(e){this.scale=e,this._layout()}_buildMesh(){const{def:e,texture:t,aspect:n}=this.active;let i;if(e.kind==="photo"){const s=po,o=new Fi(1,1),a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,-.3+a.getX(l)*(1+s.l+s.r),-.9+a.getY(l)*(1+s.t+s.b));a.needsUpdate=!0,i=new _t(o,new ni({map:t,fog:!1,side:jt}))}else if(n>3){const o=2*Math.PI*220/n;t.wrapS=Li,t.repeat.x=-1,i=new _t(new un(220,220,o,96,1,!0),new ni({map:t,side:xt,fog:!1})),i.userData.stripHeight=o}else t.wrapS=Li,t.repeat.x=-1,i=new _t(new vs(220,64,32),new ni({map:t,side:xt,fog:!1}));i.renderOrder=-2,i.frustumCulled=!1,this.active.mesh=i,this.world.scene.add(i),this._layout()}_layout(){if(!this.active||!this.active.mesh)return;const{def:e,mesh:t,aspect:n}=this.active,i=2.2+this.height;if(e.kind==="photo"){const s=e.fov*this.scale*Math.PI/180,o=2*this.distance*Math.tan(s/2),a=o*n,l=po;t.scale.set(a*(1+l.l+l.r),o*(1+l.t+l.b),1);const u=i+(.5-e.horizon)*o;t.position.set(0,u+(l.t-l.b)/2*o,-this.distance),t.rotation.set(0,0,0)}else if(t.userData.stripHeight){const s=t.userData.stripHeight;t.position.set(0,i+(.5-e.horizon)*s,0)}else t.position.set(0,i,0)}_applyEnvironment(){const{def:e,image:t}=this.active,n=this.world,i=document.createElement("canvas");i.width=32,i.height=32;const s=i.getContext("2d");s.drawImage(t,0,0,32,32);const o=s.getImageData(0,0,32,32).data,a=(c,h)=>{let f=0,m=0,_=0,p=0;for(let d=c;d<h;d++)for(let g=0;g<32;g++){const S=(d*32+g)*4;f+=o[S],m+=o[S+1],_+=o[S+2],p++}return new Ue(f/p/255,m/p/255,_/p/255).convertSRGBToLinear()},l=a(0,2),u=a(30,32);if(e.light&&n.applyPreset(e.light,{lightsOnly:!0}),n.scene.fog=null,e.kind==="photo"){n.sky.mesh.visible=!1,n.container.style.background=`#${l.clone().convertLinearToSRGB().getHexString()}`,n.ground.visible=!1,this.shadowCatcher.visible=!0;const c=n.controls;c.minAzimuthAngle=-.45,c.maxAzimuthAngle=.45,c.minPolarAngle=1.25,c.maxPolarAngle=1.62,c.maxDistance=70}else{n.sky.mesh.visible=!0,n.sky.setColors(l.clone().multiplyScalar(.85),l,l),n.ground.visible=!0,n.ground.material.color.copy(u),e.groundTint&&n.ground.material.color.lerp(new Ue(e.groundTint),.3),this.shadowCatcher.visible=!1;const c=n.controls;c.minAzimuthAngle=-1/0,c.maxAzimuthAngle=1/0,c.minPolarAngle=.2,c.maxPolarAngle=Math.PI*.52,c.maxDistance=160}}}class am{constructor(e){yt.legacyMode=!1,this.container=e,this.scene=new rp,this.scene.fog=new Lr(12573943,30,260),this.camera=new Ot(30,1,.1,400),this.camera.position.set(0,6,18);const t=Math.min(window.devicePixelRatio||1,2);this.renderer=new Wo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t),this.renderer.outputEncoding=qe,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=Xt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yo,e.appendChild(this.renderer.domElement),this.controls=new mp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxDistance=160,this.controls.minDistance=2,this.controls.maxPolarAngle=Math.PI*.52,this.controls.target.set(0,4.5,0),this.controls.update(),this.lights=[],this.sun=null,this.ground=new _t(new Pr(1,96),new Dr({color:6196298,roughness:1,metalness:0})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.position.y=-.01,this.scene.add(this.ground),this.sky=new sm(280),this.scene.add(this.sky.mesh),this.defaultFog=this.scene.fog,this.groundWanted=!0,this.scenery=null,this.updateCallbacks=[],this.obstructionLeft=()=>0,this.clock=new pp,this.accumulator=0,this.paused=!1,this.timeScale=1,this.scenery=new rm(this),this.applyPreset("day"),this.resize(),window.addEventListener("resize",()=>this.resize()),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}onUpdate(e){this.updateCallbacks.push(e)}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.render()}applyPreset(e,t={}){const n=ln[e]||ln.day;this.presetId=e;const i=t.lightsOnly||this.scenery&&this.scenery.active;for(const a of this.lights)this.scene.remove(a);this.lights=[];const{ambient:s,sun:o}=n.lights();for(const a of s)this.scene.add(a),this.lights.push(a);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-5e-4,o.shadow.camera.far=400,this.scene.add(o),this.scene.add(o.target),this.lights.push(o,o.target),this.sun=o,this.defaultFog.color.setHex(n.fog),i||(this.sky.setColors(...n.sky),this.ground.material.color.setHex(n.ground),this.container.style.background=n.css),this.fitShadowToBounds(this._lastBounds)}setGroundVisible(e){this.groundWanted=e,this.scenery&&this.scenery.kind==="photo"||(this.ground.visible=e)}fitShadowToBounds(e){this._lastBounds=e;const t=new C(12,8,12),n=new C(0,4,0);e&&!e.isEmpty()&&(e.getSize(t),e.getCenter(n));const i=Math.max(t.x,t.z)*.75+8;if(this.ground.scale.setScalar(Math.max(500,i*12)),this.ground.position.x=n.x,this.ground.position.z=n.z,this.sun){const s=this.sun.shadow.camera;s.left=-i,s.right=i,s.top=i,s.bottom=-i,s.near=1,s.updateProjectionMatrix();const o=this.sun.position.clone().normalize();this.sun.position.copy(n).addScaledVector(o,Math.max(80,i*4)),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.sun.shadow.needsUpdate=!0}this.defaultFog.near=Math.max(30,i*3),this.defaultFog.far=this.defaultFog.near+200}frame(e,t=!0){if(!e||e.isEmpty())return;const n=new C,i=new C;e.getSize(n),e.getCenter(i);const s=this.camera.fov*Math.PI/180,o=this.renderer.domElement.clientWidth||window.innerWidth,a=Math.min(.6,Math.max(0,this.obstructionLeft()/o)),l=n.y/2/Math.tan(s/2),u=n.x/2/Math.tan(s/2)/this.camera.aspect/(1-a),c=Math.max(l,u)*1.15+n.z*.6+2,h=i.clone();h.y=Math.max(i.y,n.y*.55);const f=2*c*Math.tan(s/2)*this.camera.aspect;h.x-=a/2*f;const m=h.clone().add(new C(0,c*.18,c));if(!t){this.camera.position.copy(m),this.controls.target.copy(h),this.controls.update();return}const _=this.camera.position.clone(),p=this.controls.target.clone(),d=performance.now(),g=650,S=()=>{const M=Math.min(1,(performance.now()-d)/g),E=1-Math.pow(1-M,3);this.camera.position.lerpVectors(_,m,E),this.controls.target.lerpVectors(p,h,E),this.controls.update(),M<1&&requestAnimationFrame(S)};requestAnimationFrame(S)}setPaused(e){this.paused=e,e||this.clock.getDelta()}render(){this.renderer.render(this.scene,this.camera)}_loop(){requestAnimationFrame(this._loop);const e=Math.min(this.clock.getDelta(),.1);if(!this.paused){this.accumulator+=e*this.timeScale;let t=0;for(;this.accumulator>=or&&t<3;){for(const n of this.updateCallbacks)n(or);this.accumulator-=or,t++}t===3&&(this.accumulator=0)}this.controls.update(),this.sky.follow(this.camera),this.render()}screenshot(){this.render();const e=this.renderer.domElement,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d"),i=this.container.style.background;if(i&&i.startsWith("#"))n.fillStyle=i;else{const s=(ln[this.presetId]||ln.day).stops,o=n.createLinearGradient(0,0,0,t.height);s.forEach((a,l)=>o.addColorStop(s.length===1?0:l/(s.length-1),a)),n.fillStyle=o}return n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0),t.toDataURL("image/png")}}const ps={row:{label:"Row",place(r,e){const t=[],n=(r-1)*e;for(let i=0;i<r;i++)t.push({position:new C(-n/2+i*e,0,0),rotationY:0});return t}},arc:{label:"Arc",place(r,e){if(r===1)return[{position:new C(0,0,0),rotationY:0}];const t=Math.PI*.8,n=Math.max(e,(r-1)*e/t),i=[];for(let s=0;s<r;s++){const o=-t/2+t*s/(r-1);i.push({position:new C(Math.sin(o)*n,0,-Math.cos(o)*n+n),rotationY:0})}return i}},circle:{label:"Circle",place(r,e){if(r===1)return[{position:new C(0,0,0),rotationY:0}];const t=Math.max(e,r*e/(2*Math.PI)),n=[];for(let i=0;i<r;i++){const s=i/r*Math.PI*2;n.push({position:new C(Math.sin(s)*t,0,Math.cos(s)*t),rotationY:0})}return n}},grid:{label:"Grid",place(r,e){const t=Math.ceil(Math.sqrt(r)),n=Math.ceil(r/t),i=[];for(let s=0;s<r;s++){const o=s%t,a=Math.floor(s/t);i.push({position:new C((o-(t-1)/2)*e,0,(a-(n-1)/2)*e*1.4),rotationY:0})}return i}},vee:{label:"V formation",place(r,e){const t=[];for(let n=0;n<r;n++){const i=n%2===0?-1:1,s=Math.ceil(n/2);t.push({position:new C(i*s*e*.8,0,s*e*.9),rotationY:0})}return t}},scatter:{label:"Scatter",place(r,e){let t=1337;const n=()=>(t=t*16807%2147483647,t/2147483647),i=Math.sqrt(r)*e,s=[];for(let o=0;o<r;o++)s.push({position:new C((n()-.5)*i*1.6,0,(n()-.5)*i),rotationY:(n()-.5)*.6});return s}}},om=Object.keys(ps),Or={ad:"Andorra",ae:"United Arab Emirates",af:"Afghanistan",ag:"Antigua and Barbuda",al:"Albania",am:"Armenia",ao:"Angola",ar:"Argentina",at:"Austria",au:"Australia",az:"Azerbaijan",ba:"Bosnia and Herzegovina",bb:"Barbados",bd:"Bangladesh",be:"Belgium",bf:"Burkina Faso",bg:"Bulgaria",bh:"Bahrain",bi:"Burundi",bj:"Benin",bn:"Brunei",bo:"Bolivia",br:"Brazil",bs:"Bahamas",bt:"Bhutan",bw:"Botswana",by:"Belarus",bz:"Belize",ca:"Canada",cd:"DR Congo",cf:"Central African Republic",cg:"Republic of the Congo",ch:"Switzerland",ci:"Côte d'Ivoire",cl:"Chile",cm:"Cameroon",cn:"China",co:"Colombia",cr:"Costa Rica",cu:"Cuba",cv:"Cape Verde",cy:"Cyprus",cz:"Czechia",de:"Germany",dj:"Djibouti",dk:"Denmark",dm:"Dominica",do:"Dominican Republic",dz:"Algeria",ec:"Ecuador",ee:"Estonia",eg:"Egypt",er:"Eritrea",es:"Spain",et:"Ethiopia",fi:"Finland",fj:"Fiji",fm:"Micronesia",fr:"France",ga:"Gabon",gb:"United Kingdom",gd:"Grenada",ge:"Georgia",gh:"Ghana",gm:"Gambia",gn:"Guinea",gq:"Equatorial Guinea",gr:"Greece",gt:"Guatemala",gw:"Guinea-Bissau",gy:"Guyana",hn:"Honduras",hr:"Croatia",ht:"Haiti",hu:"Hungary",id:"Indonesia",ie:"Ireland",il:"Israel",in:"India",iq:"Iraq",ir:"Iran",is:"Iceland",it:"Italy",jm:"Jamaica",jo:"Jordan",jp:"Japan",ke:"Kenya",kg:"Kyrgyzstan",kh:"Cambodia",ki:"Kiribati",km:"Comoros",kn:"Saint Kitts and Nevis",kp:"North Korea",kr:"South Korea",kw:"Kuwait",kz:"Kazakhstan",la:"Laos",lb:"Lebanon",lc:"Saint Lucia",li:"Liechtenstein",lk:"Sri Lanka",lr:"Liberia",ls:"Lesotho",lt:"Lithuania",lu:"Luxembourg",lv:"Latvia",ly:"Libya",ma:"Morocco",mc:"Monaco",md:"Moldova",me:"Montenegro",mg:"Madagascar",mh:"Marshall Islands",mk:"North Macedonia",ml:"Mali",mm:"Myanmar",mn:"Mongolia",mr:"Mauritania",mt:"Malta",mu:"Mauritius",mv:"Maldives",mw:"Malawi",mx:"Mexico",my:"Malaysia",mz:"Mozambique",na:"Namibia",ne:"Niger",ng:"Nigeria",ni:"Nicaragua",nl:"Netherlands",no:"Norway",np:"Nepal",nr:"Nauru",nz:"New Zealand",om:"Oman",pa:"Panama",pe:"Peru",pg:"Papua New Guinea",ph:"Philippines",pk:"Pakistan",pl:"Poland",pt:"Portugal",pw:"Palau",py:"Paraguay",qa:"Qatar",ro:"Romania",rs:"Serbia",ru:"Russia",rw:"Rwanda",sa:"Saudi Arabia",sb:"Solomon Islands",sc:"Seychelles",sd:"Sudan",se:"Sweden",sg:"Singapore",si:"Slovenia",sk:"Slovakia",sl:"Sierra Leone",sm:"San Marino",sn:"Senegal",so:"Somalia",sr:"Suriname",ss:"South Sudan",st:"São Tomé and Príncipe",sv:"El Salvador",sy:"Syria",sz:"Eswatini",td:"Chad",tg:"Togo",th:"Thailand",tj:"Tajikistan",tl:"Timor-Leste",tm:"Turkmenistan",tn:"Tunisia",to:"Tonga",tr:"Turkey",tt:"Trinidad and Tobago",tv:"Tuvalu",tw:"Taiwan",tz:"Tanzania",ua:"Ukraine",ug:"Uganda",us:"United States",uy:"Uruguay",uz:"Uzbekistan",va:"Vatican City",vc:"Saint Vincent and the Grenadines",ve:"Venezuela",vn:"Vietnam",vu:"Vanuatu",ws:"Samoa",ye:"Yemen",za:"South Africa",zm:"Zambia",zw:"Zimbabwe",eu:"European Union",un:"United Nations",hk:"Hong Kong",pr:"Puerto Rico",gl:"Greenland","gb-eng":"England","gb-sct":"Scotland","gb-wls":"Wales",ps:"Palestine",xk:"Kosovo"},Jo=Object.keys(Or);function Qo(r){return Or[r]||r.toUpperCase()}function lm(r,e=1280){return`https://flagcdn.com/w${e}/${r}.png`}function cm(r,e=12){const t=r.trim().toLowerCase();if(!t)return[];const n=[],i=[];for(const s of Jo){const o=Or[s].toLowerCase();o.startsWith(t)||s===t?n.push(s):o.includes(t)&&i.push(s)}return n.concat(i).slice(0,e)}const ys={armenia:{name:"Armenia",ratio:2,ops:[["h",["#d90012","#0033a0","#f2a800"]]]},austria:{name:"Austria",ratio:1.5,ops:[["h",["#ed2939","#ffffff","#ed2939"]]]},bangladesh:{name:"Bangladesh",ratio:5/3,ops:[["rect","#006a4e",0,0,1,1],["disc","#f42a41",.45,.5,.3]]},belgium:{name:"Belgium",ratio:15/13,ops:[["v",["#000000","#fae042","#ed2939"]]]},colombia:{name:"Colombia",ratio:1.5,ops:[["rect","#fcd116",0,0,1,.5],["rect","#003893",0,.5,1,.25],["rect","#ce1126",0,.75,1,.25]]},czechia:{name:"Czechia",ratio:1.5,ops:[["h",["#ffffff","#d7141a"]],["tri","#11457e",[0,0,.5,.5,0,1]]]},denmark:{name:"Denmark",ratio:37/28,ops:[["rect","#c60c30",0,0,1,1],["cross","#ffffff",.38,.5,.14]]},estonia:{name:"Estonia",ratio:11/7,ops:[["h",["#0072ce","#000000","#ffffff"]]]},finland:{name:"Finland",ratio:18/11,ops:[["rect","#ffffff",0,0,1,1],["cross","#003580",.36,.5,.18]]},france:{name:"France",ratio:1.5,ops:[["v",["#0055a4","#ffffff","#ef4135"]]]},germany:{name:"Germany",ratio:5/3,ops:[["h",["#000000","#dd0000","#ffce00"]]]},greece:{name:"Greece",ratio:1.5,ops:[["h",["#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf"]],["rect","#0d5eaf",0,0,10/27,5/9],["cross","#ffffff",5/27,5/18,1/9]]},hungary:{name:"Hungary",ratio:2,ops:[["h",["#ce2939","#ffffff","#477050"]]]},indonesia:{name:"Indonesia",ratio:1.5,ops:[["h",["#ff0000","#ffffff"]]]},ireland:{name:"Ireland",ratio:2,ops:[["v",["#169b62","#ffffff","#ff883e"]]]},italy:{name:"Italy",ratio:1.5,ops:[["v",["#009246","#ffffff","#ce2b37"]]]},japan:{name:"Japan",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1],["disc","#bc002d",.5,.5,.3]]},latvia:{name:"Latvia",ratio:2,ops:[["rect","#9e3039",0,0,1,1],["rect","#ffffff",0,.4,1,.2]]},lithuania:{name:"Lithuania",ratio:5/3,ops:[["h",["#fdb913","#006a44","#c1272d"]]]},netherlands:{name:"Netherlands",ratio:1.5,ops:[["h",["#ae1c28","#ffffff","#21468b"]]]},nigeria:{name:"Nigeria",ratio:2,ops:[["v",["#008751","#ffffff","#008751"]]]},norway:{name:"Norway",ratio:22/16,ops:[["rect","#ba0c2f",0,0,1,1],["cross","#ffffff",.36,.5,.25],["cross","#00205b",.36,.5,.125]]},peru:{name:"Peru",ratio:1.5,ops:[["v",["#d91023","#ffffff","#d91023"]]]},poland:{name:"Poland",ratio:1.6,ops:[["h",["#ffffff","#dc143c"]]]},romania:{name:"Romania",ratio:1.5,ops:[["v",["#002b7f","#fcd116","#ce1126"]]]},russia:{name:"Russia",ratio:1.5,ops:[["h",["#ffffff","#0039a6","#d52b1e"]]]},sweden:{name:"Sweden",ratio:1.6,ops:[["rect","#006aa7",0,0,1,1],["cross","#fecc00",.375,.5,.2]]},switzerland:{name:"Switzerland",ratio:1,ops:[["rect","#da291c",0,0,1,1],["rect","#ffffff",.3125,.4,.375,.2],["rect","#ffffff",.4,.3125,.2,.375]]},thailand:{name:"Thailand",ratio:1.5,ops:[["rect","#a51931",0,0,1,1],["rect","#ffffff",0,1/6,1,4/6],["rect","#2d2a4a",0,2/6,1,2/6]]},turkey:{name:"Turkey",ratio:1.5,ops:[["rect","#e30a17",0,0,1,1],["disc","#ffffff",.4,.5,.25],["disc","#e30a17",.46,.5,.2],["star","#ffffff",.62,.5,.11,5]]},ukraine:{name:"Ukraine",ratio:1.5,ops:[["h",["#0057b7","#ffd700"]]]},vietnam:{name:"Vietnam",ratio:1.5,ops:[["rect","#da251d",0,0,1,1],["star","#ffff00",.5,.5,.3,5]]},checkered:{name:"Checkered",ratio:1.5,ops:[["check","#111111","#ffffff",6]]},rainbow:{name:"Rainbow",ratio:1.5,ops:[["h",["#e40303","#ff8c00","#ffed00","#008026","#24408e","#732982"]]]},jollyroger:{name:"Jolly Roger",ratio:1.5,ops:[["rect","#000000",0,0,1,1],["disc","#ffffff",.5,.42,.17],["rect","#ffffff",.4,.57,.2,.08],["rect","#000000",.44,.46,.04,.04],["rect","#000000",.52,.46,.04,.04],["diag","#ffffff",.06],["diag2","#ffffff",.06]]},white:{name:"White (blank)",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1]]}},um=Object.keys(ys);function hm(r,e,t,n,i){const s=n*.382;r.beginPath();for(let o=0;o<i*2;o++){const a=o%2===0?n:s,l=-Math.PI/2+o*Math.PI/i,u=e+Math.cos(l)*a,c=t+Math.sin(l)*a;o===0?r.moveTo(u,c):r.lineTo(u,c)}r.closePath(),r.fill()}function el(r,e=600){const t=ys[r];if(!t)throw new Error(`Unknown simple flag: ${r}`);const n=Math.round(e*t.ratio),i=e,s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");for(const a of t.ops){const l=a[0];if(l==="h"){const u=a[1],c=i/u.length;u.forEach((h,f)=>{o.fillStyle=h,o.fillRect(0,Math.floor(f*c),n,Math.ceil(c)+1)})}else if(l==="v"){const u=a[1],c=n/u.length;u.forEach((h,f)=>{o.fillStyle=h,o.fillRect(Math.floor(f*c),0,Math.ceil(c)+1,i)})}else if(l==="rect")o.fillStyle=a[1],o.fillRect(a[2]*n,a[3]*i,a[4]*n,a[5]*i);else if(l==="disc")o.fillStyle=a[1],o.beginPath(),o.arc(a[2]*n,a[3]*i,a[4]*i,0,Math.PI*2),o.fill();else if(l==="cross"){const[,u,c,h,f]=a;o.fillStyle=u,o.fillRect(0,(h-f/2)*i,n,f*i),o.fillRect((c-f*i/(2*n))*n,0,f*i,i)}else if(l==="tri"){const u=a[2];o.fillStyle=a[1],o.beginPath(),o.moveTo(u[0]*n,u[1]*i),o.lineTo(u[2]*n,u[3]*i),o.lineTo(u[4]*n,u[5]*i),o.closePath(),o.fill()}else if(l==="star")o.fillStyle=a[1],hm(o,a[2]*n,a[3]*i,a[4]*i,a[5]);else if(l==="diag"||l==="diag2")o.strokeStyle=a[1],o.lineWidth=a[2]*i,o.beginPath(),l==="diag"?(o.moveTo(n*.3,i*.95),o.lineTo(n*.7,i*.65)):(o.moveTo(n*.7,i*.95),o.lineTo(n*.3,i*.65)),o.stroke();else if(l==="check"){const[,u,c,h]=a,f=i/h;for(let m=0;m<h;m++)for(let _=0;_<Math.ceil(n/f);_++)o.fillStyle=(_+m)%2===0?u:c,o.fillRect(_*f,m*f,f+1,f+1)}}return s}const dm="flagwaverplus",br="images";let ls=null;function fm(){return ls||(ls=new Promise((r,e)=>{if(!("indexedDB"in window)){e(new Error("IndexedDB unavailable"));return}const t=indexedDB.open(dm,1);t.onupgradeneeded=()=>t.result.createObjectStore(br),t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)}),ls)}function cs(r,e){return fm().then(t=>new Promise((n,i)=>{const s=t.transaction(br,r),o=e(s.objectStore(br));s.oncomplete=()=>n(o&&o.result),s.onerror=()=>i(s.error)}))}const li={get:r=>cs("readonly",e=>e.get(r)),put:(r,e)=>cs("readwrite",t=>t.put(e,r)),del:r=>cs("readwrite",e=>e.delete(r)),keys:()=>cs("readonly",r=>r.getAllKeys())},ii=new Map;async function Mr(r){if(ii.has(r))return ii.get(r);const e=await li.get(r);if(!e)throw new Error("Stored image is missing (browser data was cleared).");return ii.set(r,e.dataUrl),e.dataUrl}async function pm(r){return li.get(r)}async function mo(r,e=1024){const t=await _m(r,e),n=`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,i=(r.name||"image").replace(/\.[^.]+$/,"");return await li.put(n,{dataUrl:t,name:i,added:Date.now()}),ii.set(n,t),{key:n,name:i,dataUrl:t}}async function mm(r,e,t=null){return t=t||`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,await li.put(t,{dataUrl:r,name:e,added:Date.now()}),ii.set(t,r),t}async function gm(r){try{const e=await li.keys();for(const t of e)r.has(t)||(await li.del(t),ii.delete(t))}catch{}}function _m(r,e){return new Promise((t,n)=>{const i=URL.createObjectURL(r),s=new Image;s.onload=()=>{URL.revokeObjectURL(i);const o=Math.min(1,e/s.width),a=Math.max(1,Math.round(s.width*o)),l=Math.max(1,Math.round(s.height*o)),u=document.createElement("canvas");u.width=a,u.height=l,u.getContext("2d").drawImage(s,0,0,a,l);const c=/png|gif|svg|webp/i.test(r.type);t(c?u.toDataURL("image/png"):u.toDataURL("image/jpeg",.9))},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("Not a readable image"))},s.src=i})}let xm=1;const Ai={height:1.2,hoisting:wn.DEXTER,orientation:Pe.TOP,flagpoleType:$e.VERTICAL,verticalHoisting:Bt.TOP_RIGHT,mass:.11};function vm(r){return new Promise((e,t)=>{switch(r.type){case"simple":try{e(el(r.value))}catch(n){t(n)}break;case"country":cr(lm(r.value),e,()=>t(new Error(`Could not load flag for ${Qo(r.value)} (network/CORS).`)));break;case"url":case"upload":cr(r.value,e,()=>t(new Error("Image could not be loaded.")));break;case"stored":Mr(r.value).then(n=>cr(n,e,()=>t(new Error("Stored image could not be decoded.")))).catch(t);break;default:t(new Error(`Unknown source type ${r.type}`))}})}function us(r){var e;switch(r.type){case"simple":return((e=ys[r.value])==null?void 0:e.name)||r.value;case"country":return Qo(r.value);case"upload":case"stored":return r.name||"Uploaded image";case"url":return r.value.replace(/^https?:\/\//,"").slice(0,32);default:return"Flag"}}class ym{constructor(e){this.world=e,this.entries=[],this.root=new Ze,e.scene.add(this.root),this.layoutId="row",this.spacing=3.2,this.wind=new $o({speed:10}),this.windAngle=0,this.windSpeed=10,this.windMode="natural",this.externalGain=0,this.gust={enabled:!1,strength:2.2,period:4.5,width:2.5},this.ripple=!1,this.listeners=new Set,this._tmpPressure=new C,this._gustWind={pressure:this._tmpPressure},this._bounds=new ci,this.selectedId=null,this.ring=new _t(new Rr(.22,.42,48),new ni({color:16734780,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.ring.visible=!1,this._applyWindSettings(),e.onUpdate(t=>this.step(t))}setSelected(e){this.selectedId=e;const t=this.getEntry(e);this.ring.parent&&this.ring.parent.remove(this.ring),t?(t.holder.add(this.ring),this.ring.visible=!0):this.ring.visible=!1}setFlagHeight(e){Ai.height=e,this.updateAllSettings({height:e})}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e,t){for(const n of this.listeners)n(e,t)}get count(){return this.entries.length}getEntry(e){return this.entries.find(t=>t.id===e)}addFlag(e,t={}){const n={id:xm++,source:e,settings:{...Ai,...t},image:null,group:null,holder:new Ze,status:"loading",error:null};return this.root.add(n.holder),this.entries.push(n),this.relayout(),this.emit("add",n),this._loadAndBuild(n),n}removeFlag(e){const t=this.entries.findIndex(i=>i.id===e);if(t===-1)return;const[n]=this.entries.splice(t,1);this._destroyGroup(n),this.selectedId===e&&this.setSelected(null),this.root.remove(n.holder),this.relayout(),this.emit("remove",n)}clear(){for(const e of[...this.entries])this.removeFlag(e.id)}duplicateFlag(e){const t=this.getEntry(e);return t?this.addFlag({...t.source},{...t.settings}):null}moveTo(e,t){const n=this.entries.findIndex(o=>o.id===e);if(n===-1)return;const[i]=this.entries.splice(n,1),s=Math.max(0,Math.min(this.entries.length,t));this.entries.splice(s,0,i),this.relayout(),this.emit("reorder")}moveFlag(e,t){const n=this.entries.findIndex(o=>o.id===e),i=n+t;if(n===-1||i<0||i>=this.entries.length)return;const s=this.entries[n];this.entries[n]=this.entries[i],this.entries[i]=s,this.relayout(),this.emit("reorder")}setSource(e,t){const n=this.getEntry(e);n&&(n.source=t,n.status="loading",this.emit("update",n),this._loadAndBuild(n))}updateSettings(e,t){const n=this.getEntry(e);n&&(Object.assign(n.settings,t),n.image&&this._build(n),this.emit("settings",n))}updateAllSettings(e){for(const t of this.entries)Object.assign(t.settings,e),t.image&&this._build(t);this.emit("update-all")}resetCloth(){for(const e of this.entries)e.group&&(e.group.reset(),e.group.render())}_loadAndBuild(e){const t=Symbol("load");e._loadToken=t,vm(e.source).then(n=>{e._loadToken===t&&(e.image=n,e.error=null,e.status="ready",this._build(e),this.emit("update",e))}).catch(n=>{e._loadToken===t&&(e.image=null,e.status="error",e.error=n.message||String(n),this._build(e),this.emit("update",e),this.emit("error",{entry:e,message:e.error}))})}_destroyGroup(e){e.group&&(e.holder.remove(e.group.object),e.group.destroy(),e.group=null)}_build(e){this._destroyGroup(e);const t=e.settings,n={mass:t.mass};e.image?Object.assign(n,em({image:e.image,width:"auto",height:t.height,hoisting:t.hoisting,orientation:t.orientation,resolution:320})):(n.width=t.height*1.5,n.height=t.height);const i=new Rn(n),s=qp({flagpoleType:t.flagpoleType,verticalHoisting:t.verticalHoisting},i),o=new Rp({flagpole:s,flag:i});if(t.flagpoleType===$e.HORIZONTAL||t.flagpoleType===$e.OUTRIGGER){const a=s.constructor.defaults.poleLength;o.object.position.set(0,a,0).sub(s.top)}e.group=o,e.holder.add(o.object),o.reset(),o.render(),this._updateBounds()}setLayout(e){ps[e]&&(this.layoutId=e,this.relayout())}setSpacing(e){this.spacing=Math.max(.5,e),this.relayout()}relayout(){const e=this.entries.length;if(e===0){this._updateBounds();return}const t=ps[this.layoutId].place(e,this.spacing);this.entries.forEach((n,i)=>{n.holder.position.copy(t[i].position),n.holder.rotation.y=t[i].rotationY,n.holder.updateMatrixWorld(!0)}),this._updateBounds(),this.emit("layout")}_updateBounds(){const e=this._bounds.makeEmpty();for(const t of this.entries){const n=t.holder.position,i=t.settings.height,s=t.group?t.group.flag.cloth.width:i*1.5;e.expandByPoint(new C(n.x-s,0,n.z-s)),e.expandByPoint(new C(n.x+s,6.3,n.z+s))}this.world.fitShadowToBounds(e.isEmpty()?null:e)}get bounds(){return this._bounds}setWind({speed:e,angle:t,mode:n}){e!==void 0&&(this.windSpeed=e),t!==void 0&&(this.windAngle=t),n!==void 0&&(this.windMode=n),this._applyWindSettings()}_applyWindSettings(){const e=this.windAngle*Math.PI/180,t=new C(Math.cos(e),.002,Math.sin(e)+.003);switch(this.windMode){case"natural":this.wind.directionFn=Ci.rotatingDirection,this.wind.speedFn=Ci.variableSpeed;break;case"gusty":this.wind.directionFn=(n,i)=>n.copy(t).add(new C(.15*Math.sin(i/2300),.1*Math.sin(i/1300),.3*Math.sin(i/1700))),this.wind.speedFn=(n,i)=>n*(1+.25*Math.cos(i/7e3)+.18*Math.sin(i/1100)+.1*Math.sin(i/530));break;default:this.wind.directionFn=n=>n.copy(t),this.wind.speedFn=Ci.constantSpeed}}setGust(e){Object.assign(this.gust,e)}_gustFactor(e,t){if(!this.gust.enabled||this.entries.length===0)return 1;const n=this._bounds,i=n.min.x-4,s=n.max.x+4,o=Math.max(1,s-i),a=t/this.gust.period%1,l=i+a*o,u=e-l,c=this.gust.width;return 1+this.gust.strength*Math.exp(-(u*u)/(2*c*c))}step(e){this.wind.speed=Math.max(0,this.windSpeed+this.externalGain),this.wind.update();const t=performance.now()/1e3;for(const n of this.entries){const i=n.group;if(!i)continue;const s=i.flag;Hp(s.cloth,s.object);const o=this._gustFactor(n.holder.position.x,t);o!==1?(this._tmpPressure.copy(this.wind.pressure).multiplyScalar(o),uo(s.cloth,this._gustWind,s.object)):uo(s.cloth,this.wind,s.object),i.simulate(e),i.render()}}toJSON(e={}){const t=n=>n==="simple"||n==="country"||n==="url";return{layout:this.layoutId,height:Ai.height,spacing:this.spacing,wind:{speed:this.windSpeed,angle:this.windAngle,mode:this.windMode},gust:{...this.gust},flags:this.entries.filter(n=>t(n.source.type)||!e.forShare&&n.source.type==="stored").map(n=>({source:n.source,settings:n.settings}))}}fromJSON(e){this.clear(),e.layout&&(this.layoutId=e.layout),e.spacing&&(this.spacing=e.spacing),e.height&&(Ai.height=e.height),e.wind&&this.setWind(e.wind),e.gust&&this.setGust(e.gust);for(const t of e.flags||[])this.addFlag(t.source,t.settings);this.relayout()}}class bm{constructor(){this.ctx=null,this.analyser=null,this.stream=null,this.level=0,this.gain=22,this.active=!1,this._buf=null,this._raf=0}async start(){if(this.active)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.ctx=new(window.AudioContext||window.webkitAudioContext);const e=this.ctx.createMediaStreamSource(this.stream);this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.6,e.connect(this.analyser),this._buf=new Float32Array(this.analyser.fftSize),this.active=!0;const t=()=>{if(!this.active)return;this.analyser.getFloatTimeDomainData(this._buf);let n=0;for(let o=0;o<this._buf.length;o++)n+=this._buf[o]*this._buf[o];const i=Math.sqrt(n/this._buf.length),s=Math.min(1,Math.max(0,(i-.02)/.33));this.level+=(s-this.level)*(s>this.level?.35:.06),this._raf=requestAnimationFrame(t)};t()}stop(){if(this.active=!1,cancelAnimationFrame(this._raf),this.stream)for(const e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.close(),this.stream=this.ctx=this.analyser=null,this.level=0}get extraSpeed(){return this.active?this.level*this.gain:0}}const Si="https://upload.wikimedia.org/wikipedia/commons/thumb",wi="https://commons.wikimedia.org/wiki/File:",fs={capitol:{label:"US Capitol",kind:"photo",url:`${Si}/a/a3/United_States_Capitol_west_front_edit2.jpg/2048px-United_States_Capitol_west_front_edit2.jpg`,page:`${wi}United_States_Capitol_west_front_edit2.jpg`,credit:"Architect of the Capitol",license:"Public domain",horizon:.42,fov:32,light:"day",groundTint:7309914},bourbon:{label:"Palais Bourbon, Paris",kind:"photo",url:`${Si}/8/8d/Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg/2048px-Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,page:`${wi}Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,credit:"Jebulon",license:"CC0",horizon:.38,fov:34,light:"day",groundTint:9079428},unhq:{label:"UN Headquarters, NYC",kind:"photo",url:`${Si}/f/fe/UN_Members_Flags.JPG/1600px-UN_Members_Flags.JPG`,page:`${wi}UN_Members_Flags.JPG`,credit:"Aotearoa",license:"CC BY-SA 3.0",horizon:.3,fov:36,light:"overcast",groundTint:8159106},sthelens:{label:"Mount St Helens summit",kind:"pano",url:`${Si}/b/b5/Mount_St_Helens_Summit_Pano.jpg/4096px-Mount_St_Helens_Summit_Pano.jpg`,page:`${wi}Mount_St_Helens_Summit_Pano.jpg`,credit:"Gregg M. Erickson",license:"CC BY 3.0",horizon:.55,light:"day",groundTint:14278114},kosciuszko:{label:"Mount Kosciuszko summit",kind:"pano",url:`${Si}/c/c2/Mount_Kosciuszko_Summit_360_panorama.jpg/4096px-Mount_Kosciuszko_Summit_360_panorama.jpg`,page:`${wi}Mount_Kosciuszko_Summit_360_panorama.jpg`,credit:"Toby Hudson",license:"CC BY-SA 3.0",horizon:.5,light:"day",groundTint:9083498}},Mm=Object.keys(fs);function Sm(r){return btoa(unescape(encodeURIComponent(r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function wm(r){const e=r.replace(/-/g,"+").replace(/_/g,"/");return decodeURIComponent(escape(atob(e+"=".repeat((4-e.length%4)%4))))}function Em(r){return Sm(JSON.stringify(r))}function Tm(r){try{const e=r.replace(/^#/,"");return e?JSON.parse(wm(e)):null}catch(e){return console.warn("FlagWaverPlus: could not parse URL state",e),null}}function Am(r){const e=Em(r);return history.replaceState(null,"",`#${e}`),`${location.origin}${location.pathname}#${e}`}function Cm(){return Tm(location.hash)}const Nr="flagwaverplus.scene.v1",Sr="flagwaverplus.skipSave";let tl=!1;function Lm(){tl=!0;try{sessionStorage.setItem(Sr,"1")}catch{}}function Pm(){try{const r=sessionStorage.getItem(Sr)==="1";return sessionStorage.removeItem(Sr),r}catch{return!1}}function nl(r){if(!tl)try{localStorage.setItem(Nr,JSON.stringify(r))}catch{}}function Rm(){try{const r=localStorage.getItem(Nr);return r?JSON.parse(r):null}catch{return null}}function Dm(){try{localStorage.removeItem(Nr)}catch{}}function il(r){const e=new Set;for(const t of r.flags||[])t.source&&t.source.type==="stored"&&e.add(t.source.value);return r.sceneryStored&&e.add(r.sceneryStored),e}async function Im(r){const e={};for(const s of il(r)){const o=await pm(s);o&&(e[s]={dataUrl:o.dataUrl,name:o.name})}const t={app:"FlagWaverPlus",version:1,saved:new Date().toISOString(),state:r,images:e},n=new Blob([JSON.stringify(t)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=`flagwaverplus-scene-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}async function Fm(r){const e=await r.text(),t=JSON.parse(e);if(!t||t.app!=="FlagWaverPlus"||!t.state)throw new Error("Not a FlagWaverPlus scene file.");for(const[n,i]of Object.entries(t.images||{}))i&&i.dataUrl&&await mm(i.dataUrl,i.name||"image",n);return t.state}const k=(r,e={},...t)=>{const n=document.createElement(r);for(const[i,s]of Object.entries(e))i==="class"?n.className=s:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),s):s!=null&&s!==!1&&n.setAttribute(i,s);for(const i of t.flat())i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n},pt=(r,e,t)=>{const n=k("option",{value:r},e);return t&&(n.selected=!0),n},go=r=>`${r.type}:${r.value}`,_o="flagwaverplus.history.v1";function Om(r,{manager:e,world:t,mic:n,toast:i}){let s=null,o=!0;const a=[["flags","Flags"],["wind","Wind"],["scene","Scene"],["share","Share"]],l=k("nav",{class:"tabs"}),u={};for(const[R,N]of a)l.appendChild(k("button",{class:"tab","data-tab":R,onClick:()=>c(R)},N)),u[R]=k("section",{class:"page hidden","data-page":R});function c(R){l.querySelectorAll(".tab").forEach(N=>N.classList.toggle("active",N.dataset.tab===R)),Object.values(u).forEach(N=>N.classList.toggle("hidden",N.dataset.page!==R))}r.append(k("header",{class:"panel-head"},k("h1",{},"FlagWaverPlus"),k("button",{class:"collapse",title:"Hide panel (Tab)",onClick:()=>r.classList.toggle("collapsed")},"⇤")),l,...Object.values(u)),c("flags");function h(){o&&setTimeout(()=>t.frame(e.bounds),50)}const f=u.flags,m=k("input",{type:"search",placeholder:"Search a country… (Enter adds first match)",class:"search"}),_=k("div",{class:"results hidden"});function p(R,N=12){const pe=cm(R,N).map(Ve=>({type:"country",value:Ve})),Ee=R.trim().toLowerCase();if(Ee)for(const Ve of um)ys[Ve].name.toLowerCase().includes(Ee)&&pe.push({type:"simple",value:Ve});return pe.slice(0,N+4)}function d(){_.innerHTML="";const R=p(m.value);for(const N of R)_.appendChild(k("button",{class:"result",onClick:()=>g(N)},U(N,32,22),us(N),N.type==="simple"?k("span",{class:"tag"},"offline"):null));_.classList.toggle("hidden",R.length===0)}m.addEventListener("input",d),m.addEventListener("keydown",R=>{if(R.key==="Enter"){const N=p(m.value,1)[0];N&&g(N)}R.key==="Escape"&&(m.value="",d())});function g(R){e.addFlag({...R}),m.value="",d(),h()}const S=k("input",{type:"file",accept:"image/*",multiple:"",class:"hidden"});S.addEventListener("change",async()=>{const R=[...S.files];S.value="";for(const N of R)try{const{key:pe,name:Ee}=await mo(N,1024);e.addFlag({type:"stored",value:pe,name:Ee})}catch{e.addFlag({type:"upload",value:URL.createObjectURL(N),name:N.name.replace(/\.[^.]+$/,"")})}h()});const M=k("input",{type:"url",placeholder:"https://… image URL (must allow CORS)",class:"search"});M.addEventListener("keydown",R=>{R.key==="Enter"&&M.value.trim()&&(e.addFlag({type:"url",value:M.value.trim()}),M.value="",h())});function E(R){const N=[...Jo];for(let pe=0;pe<R&&N.length;pe++)e.addFlag({type:"country",value:N.splice(Math.floor(Math.random()*N.length),1)[0]});h()}const y=new Map;try{for(const R of JSON.parse(localStorage.getItem(_o)||"[]"))y.set(go(R),{source:R,image:null})}catch{}function L(){try{const R=[...y.values()].map(N=>N.source).filter(N=>N.type==="country"||N.type==="simple"||N.type==="url"||N.type==="stored").slice(-60);localStorage.setItem(_o,JSON.stringify(R))}catch{}}function U(R,N=40,pe=26,Ee=null){if(R.type==="country")return k("img",{src:`https://flagcdn.com/w80/${R.value}.png`,alt:"",loading:"lazy",width:N,height:pe});const Ve=document.createElement("canvas");Ve.width=N,Ve.height=pe;const rt=Ve.getContext("2d");let St=Ee;R.type==="simple"&&(St=el(R.value,40));const Vt=b=>{const B=b.width,q=b.height,O=Math.min(N/B,pe/q);rt.clearRect(0,0,N,pe),rt.drawImage(b,(N-B*O)/2,(pe-q*O)/2,B*O,q*O)};return rt.fillStyle="#666",rt.fillRect(0,0,N,pe),St?Vt(St):R.type==="stored"&&Mr(R.value).then(b=>{const B=new Image;B.onload=()=>Vt(B),B.src=b}).catch(()=>{}),Ve}const v=k("div",{class:"chips"});function T(){if(v.innerHTML="",y.size===0){v.appendChild(k("span",{class:"muted small"},"Flags you add show up here for quick re-use."));return}for(const[R,N]of[...y.entries()].reverse()){const pe=k("button",{class:"chip",title:`${us(N.source)} — click to add again`,onClick:()=>{e.addFlag({...N.source}),h()}},U(N.source,40,26,N.image));pe.addEventListener("contextmenu",Ee=>{Ee.preventDefault(),y.delete(R),L(),T()}),v.appendChild(pe)}}function I(R){const N=go(R.source),pe=y.get(N);if(pe){R.image&&!pe.image&&(pe.image=R.image,T());return}y.set(N,{source:{...R.source},image:R.image}),L(),T()}const K=k("select",{class:"select",onChange:()=>{e.setLayout(K.value),h()}},...om.map(R=>pt(R,ps[R].label,R===e.layoutId))),$=k("input",{type:"range",min:1.2,max:8,step:.1,value:e.spacing});$.addEventListener("input",()=>e.setSpacing(+$.value)),$.addEventListener("change",h);const z=[["XS",.6],["S",.9],["M",1.2],["L",1.6],["XL",2.2],["XXL",3]],D=k("div",{class:"seg"});function j(){D.innerHTML="";for(const[R,N]of z)D.appendChild(k("button",{class:`seg-btn ${Math.abs(Ai.height-N)<1e-6?"active":""}`,title:`${N} m tall`,onClick:()=>{e.setFlagHeight(N),j(),h()}},R))}j();const J=k("input",{type:"checkbox",checked:""});J.addEventListener("change",()=>{o=J.checked});const Q=k("div",{class:"flag-list"}),X=k("div",{class:"detail hidden"});let ee=null;function ie(R){const N=document.createElement("canvas");N.width=48,N.height=32;const pe=N.getContext("2d");if(R.image){const Ee=R.image,Ve=Ee.width,rt=Ee.height,St=Math.min(48/Ve,32/rt);pe.drawImage(Ee,(48-Ve*St)/2,(32-rt*St)/2,Ve*St,rt*St)}else pe.fillStyle=R.status==="error"?"#b33":"#555",pe.fillRect(0,0,48,32);return N}function me(){Q.innerHTML="",e.count===0&&Q.appendChild(k("p",{class:"muted"},"No flags yet. Search a country or upload an image.")),e.entries.forEach((R,N)=>{const pe=k("div",{class:`flag-row ${R.id===s?"selected":""} ${R.status}`,draggable:"true","data-id":R.id,onClick:()=>G(R.id===s?null:R.id)},k("span",{class:"grip",title:"Drag to reorder"},"⋮⋮"),k("span",{class:"idx"},N+1),ie(R),k("span",{class:"name"},us(R.source),R.status==="loading"?" …":R.status==="error"?" ⚠":""),k("span",{class:"row-actions"},k("button",{title:"Duplicate",onClick:Ee=>{Ee.stopPropagation(),e.duplicateFlag(R.id),h()}},"⧉"),k("button",{title:"Remove",class:"danger",onClick:Ee=>{Ee.stopPropagation(),e.removeFlag(R.id),s===R.id&&G(null),h()}},"✕")));R.error&&(pe.title=R.error),pe.addEventListener("dragstart",Ee=>{ee=R.id,pe.classList.add("dragging"),Ee.dataTransfer.effectAllowed="move",Ee.dataTransfer.setData("text/plain",String(R.id))}),pe.addEventListener("dragend",()=>{ee=null,Q.querySelectorAll(".flag-row").forEach(Ee=>Ee.classList.remove("dragging","drop-above","drop-below"))}),pe.addEventListener("dragover",Ee=>{if(ee===null||ee===R.id)return;Ee.preventDefault(),Ee.dataTransfer.dropEffect="move";const Ve=pe.getBoundingClientRect(),rt=Ee.clientY>Ve.top+Ve.height/2;pe.classList.toggle("drop-above",!rt),pe.classList.toggle("drop-below",rt)}),pe.addEventListener("dragleave",()=>pe.classList.remove("drop-above","drop-below")),pe.addEventListener("drop",Ee=>{if(Ee.preventDefault(),ee===null||ee===R.id)return;const Ve=pe.getBoundingClientRect(),rt=Ee.clientY>Ve.top+Ve.height/2,St=e.entries.findIndex(b=>b.id===ee);let Vt=e.entries.findIndex(b=>b.id===R.id)+(rt?1:0);St<Vt&&Vt--,e.moveTo(ee,Vt)}),Q.appendChild(pe)})}function G(R){s=R,e.setSelected(R),me(),H()}let Z=null,re=null,ae=null;function H(){const R=e.getEntry(s);if(X.classList.toggle("hidden",!R),X.innerHTML="",!R)return;const N=R.settings,pe=Vt=>e.updateSettings(R.id,Vt),Ee=k("select",{class:"select",onChange:()=>pe({hoisting:Ee.value})},pt(wn.DEXTER,"Pole on left (normal)",N.hoisting===wn.DEXTER),pt(wn.SINISTER,"Pole on right (mirrored)",N.hoisting===wn.SINISTER)),Ve=k("select",{class:"select",onChange:()=>pe({orientation:Ve.value})},pt(Pe.TOP,"Normal",N.orientation===Pe.TOP),pt(Pe.LEFT,"Rotated 90° right",N.orientation===Pe.LEFT),pt(Pe.RIGHT,"Rotated 90° left",N.orientation===Pe.RIGHT),pt(Pe.BOTTOM,"Rotated 180°",N.orientation===Pe.BOTTOM)),rt=k("select",{class:"select",onChange:()=>{pe({flagpoleType:rt.value}),ae.classList.toggle("hidden",rt.value!==$e.CROSSBAR)}},pt($e.VERTICAL,"Vertical pole",N.flagpoleType===$e.VERTICAL),pt($e.HORIZONTAL,"Horizontal pole",N.flagpoleType===$e.HORIZONTAL),pt($e.OUTRIGGER,"Outrigger (angled from wall)",N.flagpoleType===$e.OUTRIGGER),pt($e.CROSSBAR,"Crossbar (hangs from a bar)",N.flagpoleType===$e.CROSSBAR),pt($e.GALLERY,"Gallery (banner on a bar)",N.flagpoleType===$e.GALLERY)),St=k("select",{class:"select",onChange:()=>pe({verticalHoisting:St.value})},pt(Bt.TOP_RIGHT,"Turn flag 90° right",N.verticalHoisting===Bt.TOP_RIGHT),pt(Bt.TOP_LEFT,"Turn flag 90° left",N.verticalHoisting===Bt.TOP_LEFT),pt(Bt.NONE,"Keep upright (hang by top edge)",N.verticalHoisting===Bt.NONE));ae=k("div",{class:`hang ${N.flagpoleType===$e.CROSSBAR?"":"hidden"}`},k("p",{class:"muted small"},"Crossbar hanging: a flag hung from a horizontal bar is normally turned on its side so the hoist edge is at the top (vexillological convention). Pick which way to turn it, or keep it upright."),St),Z=k("h3",{}),re=k("p",{class:"error hidden"}),X.append(Z,re,k("label",{class:"field"},"Pole side",Ee),k("label",{class:"field"},"Rotation",Ve),k("label",{class:"field"},"Pole type",rt),ae,k("div",{class:"tool-row"},k("button",{onClick:()=>{e.updateAllSettings({hoisting:N.hoisting,orientation:N.orientation,flagpoleType:N.flagpoleType,verticalHoisting:N.verticalHoisting}),i("Applied to all flags")}},"Apply to all"),k("button",{onClick:()=>{e.duplicateFlag(R.id),h()}},"Duplicate"),k("span",{class:"spacer"}),k("button",{class:"danger",onClick:()=>{e.removeFlag(R.id),G(null),h()}},"Remove"))),we()}function we(){const R=e.getEntry(s);!R||!Z||(Z.textContent=`Editing flag ${e.entries.indexOf(R)+1}: ${us(R.source)}`,re.textContent=R.error||"",re.classList.toggle("hidden",!R.error))}e.on((R,N)=>{R==="add"&&I(N),R==="update"&&N&&I(N),["add","remove","update","reorder","update-all"].includes(R)&&(s!==null&&!e.getEntry(s)&&(s=null,e.setSelected(null),X.classList.add("hidden")),me(),we()),R==="settings"&&N&&N.id}),f.append(k("div",{class:"block"},k("h2",{},"Add flags"),m,_,k("div",{class:"tool-row"},k("button",{onClick:()=>S.click()},"Upload image(s)"),k("button",{onClick:()=>E(5)},"🎲 5 random"),S),M,k("p",{class:"muted small"},"Recently used (click to add again, right-click to forget):"),v),k("div",{class:"block"},k("h2",{},"Arrangement"),k("label",{class:"field"},"Layout",K),k("label",{},"Spacing ",$),k("label",{class:"field"},"Flag size",D),k("div",{class:"tool-row"},k("button",{onClick:()=>t.frame(e.bounds)},"Frame all"),k("label",{class:"row"},J," auto-frame"),k("span",{class:"spacer"}),k("button",{class:"danger",onClick:()=>{e.clear(),G(null)}},"Clear all"))),k("div",{class:"block"},k("h2",{},"Your flags"),k("p",{class:"muted small"},"Click a flag to edit it. Drag rows to reorder."),Q,X)),me(),T();const ye=u.wind,xe=k("input",{type:"range",min:0,max:30,step:.5,value:e.windSpeed}),de=k("span",{class:"val"},`${e.windSpeed} m/s`);xe.addEventListener("input",()=>{e.setWind({speed:+xe.value}),de.textContent=`${xe.value} m/s`});const ze=k("input",{type:"range",min:-180,max:180,step:5,value:e.windAngle}),Te=k("span",{class:"val"},`${e.windAngle}°`);ze.addEventListener("input",()=>{e.setWind({angle:+ze.value}),Te.textContent=`${ze.value}°`});const be=k("label",{},"Direction ",ze,Te),Ye=k("select",{class:"select",onChange:()=>{e.setWind({mode:Ye.value}),be.classList.toggle("disabled",Ye.value==="natural")}},pt("natural","Natural — wandering direction, varying speed (FlagWaver default)",e.windMode==="natural"),pt("gusty","Gusty — fixed direction, turbulent",e.windMode==="gusty"),pt("steady","Steady — fixed direction, constant",e.windMode==="steady"));be.classList.toggle("disabled",e.windMode==="natural");const Qe=k("input",{type:"checkbox"}),Xe=k("input",{type:"range",min:.5,max:5,step:.1,value:e.gust.strength}),it=k("input",{type:"range",min:1.5,max:12,step:.5,value:e.gust.period}),je=k("input",{type:"range",min:.8,max:8,step:.2,value:e.gust.width});Qe.addEventListener("change",()=>e.setGust({enabled:Qe.checked})),Xe.addEventListener("input",()=>e.setGust({strength:+Xe.value})),it.addEventListener("input",()=>e.setGust({period:+it.value})),je.addEventListener("input",()=>e.setGust({width:+je.value}));const De=k("button",{class:"btn-primary"},"🎤 Blow into mic"),Mt=k("div",{class:"meter"},k("div",{class:"meter-fill"})),ht=k("input",{type:"range",min:5,max:40,step:1,value:n.gain});ht.addEventListener("input",()=>{n.gain=+ht.value}),De.addEventListener("click",async()=>{if(n.active){n.stop(),De.textContent="🎤 Blow into mic",De.classList.remove("live");return}try{await n.start(),De.textContent="■ Stop mic",De.classList.add("live"),i("Mic on — blow or shout to make wind")}catch{i("Microphone access denied or unavailable","error")}}),function R(){Mt.firstChild.style.width=`${Math.round(n.level*100)}%`,requestAnimationFrame(R)}(),ye.append(k("div",{class:"block"},k("h2",{},"Wind"),k("label",{class:"field"},"Mode",Ye),k("label",{},"Speed ",xe,de),be),k("div",{class:"block"},k("h2",{},"Travelling gust"),k("p",{class:"muted small"},"A pulse of wind sweeps along the line of flags so they ripple one after another."),k("label",{class:"row"},Qe," Enable gust sweep"),k("label",{},"Strength ",Xe),k("label",{},"Period (s) ",it),k("label",{},"Width (m) ",je)),k("div",{class:"block"},k("h2",{},"Lung power"),k("p",{class:"muted small"},"Uses your microphone loudness as wind. Nothing is recorded."),De,Mt,k("label",{},"Mic gain ",ht)));const w=u.scene,x=k("div",{class:"presets"});for(const R of tm)x.appendChild(k("button",{class:`preset-btn ${R===t.presetId?"active":""}`,"data-id":R,onClick:()=>{t.applyPreset(R),x.querySelectorAll(".preset-btn").forEach(N=>N.classList.toggle("active",N.dataset.id===R))}},k("span",{class:"swatch-bg",style:`background:${ln[R].css}`}),ln[R].label));const V=k("input",{type:"checkbox",checked:""});V.addEventListener("change",()=>t.setGroundVisible(V.checked));const ne=k("button",{onClick:()=>se()},"⏸ Pause");function se(){t.setPaused(!t.paused),ne.textContent=t.paused?"▶ Play":"⏸ Pause"}const le=k("input",{type:"range",min:.1,max:2,step:.05,value:1});le.addEventListener("input",()=>{t.timeScale=+le.value});const Se=k("button",{onClick:()=>{const R=k("a",{href:t.screenshot(),download:`flagwaverplus-${Date.now()}.png`});document.body.appendChild(R),R.click(),R.remove()}},"📷 Screenshot"),A=k("div",{class:"scenery-grid"}),F=k("p",{class:"muted small credit"}),ce=k("input",{type:"range",min:-6,max:6,step:.25,value:0}),he=k("input",{type:"range",min:.5,max:2.5,step:.05,value:1}),ue=k("div",{class:"hidden"},k("label",{},"Backdrop height ",ce),k("label",{class:"photo-only"},"Backdrop size ",he));ce.addEventListener("input",()=>t.scenery.setHeight(+ce.value)),he.addEventListener("input",()=>t.scenery.setScale(+he.value));let ge=null,_e=null,Le=null;function Ie(R){ge=R,A.querySelectorAll(".scenery-btn").forEach(pe=>pe.classList.toggle("active",pe.dataset.id===(R||"none")));const N=t.scenery.active;ue.classList.toggle("hidden",!N),ue.querySelector(".photo-only").classList.toggle("hidden",!N||N.def.kind!=="photo"),F.innerHTML="",N&&N.def.credit?F.append("Photo: ",N.def.page?k("a",{href:N.def.page,target:"_blank",rel:"noopener"},N.def.credit):N.def.credit,` · ${N.def.license} · via Wikimedia Commons`):N&&(F.textContent="Custom backdrop (not included in share links unless it is a URL)."),x.querySelectorAll(".preset-btn").forEach(pe=>pe.classList.toggle("active",pe.dataset.id===t.presetId))}async function Oe(R,N,pe=null,Ee=null){if(!R){t.scenery.clear(),_e=null,Le=null,Ie(null);return}A.querySelectorAll(".scenery-btn").forEach(Ve=>Ve.classList.toggle("loading",Ve.dataset.id===R));try{await t.scenery.load(R,N),_e=pe,Le=Ee,ce.value=0,he.value=1,t.scenery.setHeight(0),t.scenery.setScale(1),Ie(R),o&&setTimeout(()=>t.frame(e.bounds),50)}catch(Ve){i(Ve.message,"error",5e3),Ie(null)}finally{A.querySelectorAll(".scenery-btn").forEach(Ve=>Ve.classList.remove("loading"))}}A.appendChild(k("button",{class:"scenery-btn active","data-id":"none",onClick:()=>Oe(null)},k("span",{class:"scenery-kind"},"sky"),"None (gradient)"));for(const R of Mm){const N=fs[R];A.appendChild(k("button",{class:"scenery-btn","data-id":R,title:`${N.label} — ${N.credit}, ${N.license}`,onClick:()=>Oe(R,N)},k("span",{class:"scenery-kind"},N.kind==="pano"?"360°":"photo"),N.label))}const P=k("input",{type:"file",accept:"image/*",class:"hidden"});P.addEventListener("change",async()=>{const R=P.files[0];if(P.value="",!!R)try{const{key:N,dataUrl:pe}=await mo(R,4096);Oe("custom",{kind:"auto",url:pe,label:R.name},null,N)}catch{Oe("custom",{kind:"auto",url:URL.createObjectURL(R),label:R.name})}});const W=k("input",{type:"url",placeholder:"https://… photo or 360° panorama URL (CORS)",class:"search"});W.addEventListener("keydown",R=>{if(R.key==="Enter"&&W.value.trim()){const N=W.value.trim();Oe("custom",{kind:"auto",url:N,label:N},N)}}),w.append(k("div",{class:"block"},k("h2",{},"Scenery"),k("p",{class:"muted small"},"Puts the flags in front of a place. Images load only when picked (under 1 MB each) and are swapped out, never stacked. A wide strip is treated as a 360° panorama, anything else as a photo backdrop."),A,k("div",{class:"tool-row"},k("button",{onClick:()=>P.click()},"Upload photo / panorama"),P),W,ue,F),k("div",{class:"block"},k("h2",{},"Sky & light"),x,k("label",{class:"row"},V," Show ground")),k("div",{class:"block"},k("h2",{},"Time"),k("div",{class:"tool-row"},ne,k("button",{onClick:()=>e.resetCloth()},"Reset cloth")),k("label",{},"Speed ",le)),k("div",{class:"block"},k("h2",{},"Export"),Se,k("p",{class:"muted small"},"Drag to orbit, scroll to zoom, right-drag to pan. Space pauses, Tab hides this panel.")));const te=k("input",{type:"text",readonly:"",class:"search"}),fe=k("button",{class:"btn-primary",onClick:async()=>{const R=Am(ke({forShare:!0}));te.value=R;try{await navigator.clipboard.writeText(R),i("Link copied")}catch{i("Link ready — copy it from the box")}const N=e.entries.filter(pe=>pe.source.type==="upload"||pe.source.type==="stored").length;N&&i(`${N} uploaded flag(s) can't go in a link — use a scene file for those`,"warn",4500)}},"🔗 Copy share link"),ve=k("input",{type:"file",accept:"application/json,.json",class:"hidden"});ve.addEventListener("change",async()=>{const R=ve.files[0];if(ve.value="",!!R)try{const N=await Fm(R);await st(N),i("Scene loaded")}catch(N){i(N.message||"Could not read scene file","error",5e3)}}),u.share.append(k("div",{class:"block"},k("h2",{},"Scene file"),k("p",{class:"muted small"},"Everything — flags (uploaded images included), arrangement, wind, sky and backdrop — in one .json you can keep or send. The scene also autosaves in this browser and comes back when you reopen the page."),k("div",{class:"tool-row"},k("button",{class:"btn-primary",onClick:()=>Im(ke()).catch(()=>i("Export failed","error"))},"⬇ Save scene file"),k("button",{onClick:()=>ve.click()},"⬆ Load scene file"),ve,k("span",{class:"spacer"}),k("button",{class:"danger",title:"Forget the autosaved scene and start from the default flags",onClick:()=>{Lm(),Dm(),window.history.replaceState(null,"",location.pathname),location.reload()}},"Reset"))),k("div",{class:"block"},k("h2",{},"Share this scene"),k("p",{class:"muted small"},"Encodes countries, offline flags, image URLs, layout and wind into the URL. Uploaded images stay on your machine."),fe,te),k("div",{class:"block about"},k("h2",{},"About"),k("p",{},"Cloth simulation from ",k("a",{href:"https://github.com/krikienoid/flagwaver",target:"_blank",rel:"noopener"},"FlagWaver")," by krikienoid (MIT). Country images from ",k("a",{href:"https://flagcdn.com",target:"_blank",rel:"noopener"},"flagcdn.com"),"."),k("p",{},k("a",{href:"../../"},"← codegrox.github.io")," · ",k("a",{href:"https://github.com/codegrox/codegrox.github.io/tree/main/projects/FlagWaverPlus",target:"_blank",rel:"noopener"},"source"))));function ke(R={}){const N=e.toJSON(R);return N.preset=t.presetId,N.ground=V.checked,ge&&ge!=="custom"?N.scenery=ge:ge==="custom"&&_e?N.sceneryUrl=_e:ge==="custom"&&Le&&!R.forShare&&(N.sceneryStored=Le),t.scenery.active&&(N.sceneryHeight=t.scenery.height,N.sceneryScale=t.scenery.scale),N}async function Je(R){if(R.preset&&ln[R.preset]&&(t.applyPreset(R.preset),x.querySelectorAll(".preset-btn").forEach(N=>N.classList.toggle("active",N.dataset.id===R.preset))),R.ground===!1&&(V.checked=!1,t.setGroundVisible(!1)),R.scenery&&fs[R.scenery])await Oe(R.scenery,fs[R.scenery]);else if(R.sceneryUrl)await Oe("custom",{kind:"auto",url:R.sceneryUrl,label:R.sceneryUrl},R.sceneryUrl);else if(R.sceneryStored)try{const N=await Mr(R.sceneryStored);await Oe("custom",{kind:"auto",url:N,label:"Uploaded backdrop"},null,R.sceneryStored)}catch{}t.scenery.active&&(typeof R.sceneryHeight=="number"&&(t.scenery.setHeight(R.sceneryHeight),ce.value=R.sceneryHeight),typeof R.sceneryScale=="number"&&(t.scenery.setScale(R.sceneryScale),he.value=R.sceneryScale)),K.value=e.layoutId,$.value=e.spacing,j()}function st(R){return e.fromJSON(R),G(null),Je(R).then(()=>{o&&setTimeout(()=>t.frame(e.bounds),100)})}return window.addEventListener("keydown",R=>{R.target.matches("input, textarea, select")||(R.code==="Space"&&(R.preventDefault(),se()),R.code==="Tab"&&(R.preventDefault(),r.classList.toggle("collapsed")),R.code==="Escape"&&G(null))}),{showTab:c,select:G,renderList:me,getState:ke,applyState:Je,loadStateFromFile:st}}function Nm(r){return function(t,n="info",i=3200){const s=document.createElement("div");s.className=`toast toast-${n}`,s.textContent=t,r.appendChild(s),requestAnimationFrame(()=>s.classList.add("show")),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},i)}}const Um=document.getElementById("stage"),wr=document.getElementById("panel"),sl=Nm(document.getElementById("toasts")),fi=new am(Um);fi.obstructionLeft=()=>window.innerWidth>720&&!wr.classList.contains("collapsed")?wr.offsetWidth+24:0;const Dn=new ym(fi),Ur=new bm;fi.onUpdate(()=>{Dn.externalGain=Ur.extraSpeed});Dn.on((r,e)=>{r==="error"&&sl(e.message,"error",4500)});const bs=Om(wr,{manager:Dn,world:fi,mic:Ur,toast:sl}),ur=Cm(),hr=Pm()?null:Rm(),dr=ur&&Array.isArray(ur.flags)?ur:hr&&Array.isArray(hr.flags)?hr:null;if(dr)Dn.fromJSON(dr),bs.applyState(dr);else for(const r of[{type:"simple",value:"japan"},{type:"simple",value:"armenia"},{type:"country",value:"us"},{type:"simple",value:"france"},{type:"country",value:"hk"}])Dn.addFlag(r);setTimeout(()=>fi.frame(Dn.bounds,!1),60);let xo="";setInterval(()=>{const r=bs.getState(),e=JSON.stringify(r);e!==xo&&(xo=e,nl(r))},1500);window.addEventListener("beforeunload",()=>nl(bs.getState()));setTimeout(()=>{const r=il(bs.getState());try{for(const e of JSON.parse(localStorage.getItem("flagwaverplus.history.v1")||"[]"))e.type==="stored"&&r.add(e.value)}catch{}gm(r)},8e3);window.flagwaverplus={world:fi,manager:Dn,mic:Ur};
