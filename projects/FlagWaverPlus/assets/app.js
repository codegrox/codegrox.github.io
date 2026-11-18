var ol=Object.defineProperty;var ll=(r,e,t)=>e in r?ol(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ki=(r,e,t)=>ll(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="149",In={ROTATE:0,DOLLY:1,PAN:2},Fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cl=0,kr=1,ul=2,xo=1,vo=2,Ti=3,Qt=0,gt=1,Ht=2,an=0,Qn=1,Br=2,Gr=3,Vr=4,hl=5,Kn=100,dl=101,fl=102,Hr=103,Wr=104,pl=200,ml=201,gl=202,_l=203,yo=204,bo=205,xl=206,vl=207,yl=208,bl=209,Ml=210,Sl=0,wl=1,El=2,fr=3,Tl=4,Al=5,Cl=6,Ll=7,Mo=0,Pl=1,Rl=2,Wt=0,Dl=1,Il=2,Fl=3,Ol=4,Nl=5,So=300,ii=301,si=302,pr=303,mr=304,gs=306,Pi=1e3,Ft=1001,gr=1002,pt=1003,jr=1004,Ts=1005,vt=1006,Ul=1007,Ri=1008,En=1009,zl=1010,kl=1011,wo=1012,Bl=1013,vn=1014,yn=1015,Di=1016,Gl=1017,Vl=1018,ei=1020,Hl=1021,kt=1023,Wl=1024,jl=1025,Sn=1026,ri=1027,ql=1028,Xl=1029,Yl=1030,$l=1031,Zl=1033,As=33776,Cs=33777,Ls=33778,Ps=33779,qr=35840,Xr=35841,Yr=35842,$r=35843,Kl=36196,Zr=37492,Kr=37496,Jr=37808,Qr=37809,ea=37810,ta=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,la=37818,ca=37819,ua=37820,ha=37821,Rs=36492,Jl=36283,da=36284,fa=36285,pa=36286,Tn=3e3,We=3001,Ql=3200,ec=3201,Eo=0,tc=1,Gt="srgb",Ii="srgb-linear",Ds=7680,nc=519,ma=35044,ic=35040,_r="300 es",xr=1035;class Rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,ga=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function sc(r,e){return(r%e+e)%e}function Fs(r,e,t){return(1-t)*r+t*e}function _a(r){return(r&r-1)===0&&r!==0}function vr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],h=n[7],f=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],S=i[1],b=i[4],E=i[7],y=i[2],P=i[5],N=i[8];return s[0]=o*p+a*S+l*y,s[3]=o*d+a*b+l*P,s[6]=o*g+a*E+l*N,s[1]=u*p+c*S+h*y,s[4]=u*d+c*b+h*P,s[7]=u*g+c*E+h*N,s[2]=f*p+m*S+_*y,s[5]=f*d+m*b+_*P,s[8]=f*g+m*E+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+i*s*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,m=u*s-o*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*u-c*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(c*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-u*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Lt;function To(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ns={[Gt]:{[Ii]:wn},[Ii]:{[Gt]:ds}},xt={legacyMode:!0,get workingColorSpace(){return Ii},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ns[e]&&Ns[e][t]!==void 0){const n=Ns[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Ot={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Us(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Vi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=sc(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Us(o,s,e+1/3),this.g=Us(o,s,e),this.b=Us(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,u,c,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Gt){const n=Ao[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return xt.fromWorkingColorSpace(Vi(this,st),e),St(st.r*255,0,255)<<16^St(st.g*255,0,255)<<8^St(st.b*255,0,255)<<0}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Vi(this,st),t);const n=st.r,i=st.g,s=st.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Vi(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=Gt){return xt.fromWorkingColorSpace(Vi(this,st),e),e!==Gt?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(Gi);const n=Fs(Ot.h,Gi.h,t),i=Fs(Ot.s,Gi.s,t),s=Fs(Ot.l,Gi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=Ao;let On;class Co{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=Fi("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Lo{constructor(e=null){this.isSource=!0,this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zs(i[o].image)):s.push(zs(i[o]))}else s=zs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Co.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rc=0;class rt extends Rn{constructor(e=rt.DEFAULT_IMAGE,t=rt.DEFAULT_MAPPING,n=Ft,i=Ft,s=vt,o=Ri,a=kt,l=En,u=rt.DEFAULT_ANISOTROPY,c=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Ui(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==So)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}rt.DEFAULT_IMAGE=null;rt.DEFAULT_MAPPING=So;rt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],m=l[5],_=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+p)<.1&&Math.abs(_+d)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,E=(m+1)/2,y=(g+1)/2,P=(c+f)/4,N=(h+p)/4,v=(_+d)/4;return b>E&&b>y?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=P/n,s=N/n):E>y?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=P/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=N/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-_)*(d-_)+(h-p)*(h-p)+(f-c)*(f-c));return Math.abs(S)<.001&&(S=1),this.x=(d-_)/S,this.y=(h-p)/S,this.z=(f-c)/S,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends Rn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Po extends rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==f||u!==m||c!==_){let d=1-a;const g=l*f+u*m+c*_+h*p,S=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const y=Math.sqrt(b),P=Math.atan2(y,g*S);d=Math.sin(d*P)/y,a=Math.sin(a*P)/y}const E=a*S;if(l=l*d+f*E,u=u*d+m*E,c=c*d+_*E,h=h*d+p*E,d===1-a){const y=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=y,u*=y,c*=y,h*=y}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+c*h+l*m-u*f,e[t+1]=l*_+c*f+u*h-a*m,e[t+2]=u*_+c*m+a*f-l*h,e[t+3]=c*_-a*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h-f*m*_;break;case"YXZ":this._x=f*c*h+u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h+f*m*_;break;case"ZXY":this._x=f*c*h-u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h-f*m*_;break;case"ZYX":this._x=f*c*h-u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h+f*m*_;break;case"YZX":this._x=f*c*h+u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h-f*m*_;break;case"XZY":this._x=f*c*h-u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-u)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+i*u-s*l,this._y=i*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-i*a,this._w=o*c-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*i-a*n,c=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=u*l+f*-s+c*-a-h*-o,this.y=c*l+f*-o+h*-s-u*-a,this.z=h*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ks.copy(this).projectOnVector(e),this.sub(ks)}reflect(e){return this.sub(ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new L,xa=new Cn;class li{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],f=e[l+2];c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),f=e.getZ(l);c<t&&(t=c),h<n&&(n=h),f<i&&(i=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)dn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(dn)}else n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox),Bs.applyMatrix4(e.matrixWorld),this.union(Bs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Hi.subVectors(this.max,mi),Nn.subVectors(e.a,mi),Un.subVectors(e.b,mi),zn.subVectors(e.c,mi),tn.subVectors(Un,Nn),nn.subVectors(zn,Un),fn.subVectors(Nn,zn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-fn.z,fn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,fn.z,0,-fn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-fn.y,fn.x,0];return!Gs(t,Nn,Un,zn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Gs(t,Nn,Un,zn,Hi))?!1:(Wi.crossVectors(tn,nn),t=[Wi.x,Wi.y,Wi.z],Gs(t,Nn,Un,zn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return dn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,Bs=new li,Nn=new L,Un=new L,zn=new L,tn=new L,nn=new L,fn=new L,mi=new L,Hi=new L,Wi=new L,pn=new L;function Gs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){pn.fromArray(r,s);const a=i.x*Math.abs(pn.x)+i.y*Math.abs(pn.y)+i.z*Math.abs(pn.z),l=e.dot(pn),u=t.dot(pn),c=n.dot(pn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const oc=new li,gi=new L,Vs=new L;class Er{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gi.subVectors(e,this.center);const t=gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gi.copy(e.center).add(Vs)),this.expandByPoint(gi.copy(e.center).sub(Vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new L,Hs=new L,ji=new L,sn=new L,Ws=new L,qi=new L,js=new L;class lc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.direction).multiplyScalar(t).add(this.origin),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hs.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(Hs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ji),a=sn.dot(this.direction),l=-sn.dot(ji),u=sn.lengthSq(),c=Math.abs(1-o*o);let h,f,m,_;if(c>0)if(h=o*l-a,f=o*a-l,_=s*c,h>=0)if(f>=-_)if(f<=_){const p=1/c;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ji).multiplyScalar(f).add(Hs),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),i=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,i,s){Ws.subVectors(t,e),qi.subVectors(n,e),js.crossVectors(Ws,qi);let o=this.direction.dot(js),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);const l=a*this.direction.dot(qi.crossVectors(sn,qi));if(l<0)return null;const u=a*this.direction.dot(Ws.cross(sn));if(u<0||l+u>o)return null;const c=-a*sn.dot(js);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,u,c,h,f,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),o=1/kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*h,_=a*c,p=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+_*u,t[5]=f-p*u,t[9]=-a*l,t[2]=p-f*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,_=u*c,p=u*h;t[0]=f+p*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,_=u*c,p=u*h;t[0]=f-p*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=p-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*h,_=a*c,p=a*h;t[0]=l*c,t[4]=_*u-m,t[8]=f*u+p,t[1]=l*h,t[5]=p*u+f,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=p-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+_,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+p,t[5]=o*c,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*c,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cc,e,uc)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),rn.crossVectors(n,At),rn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),rn.crossVectors(n,At)),rn.normalize(),Xi.crossVectors(At,rn),i[0]=rn.x,i[4]=Xi.x,i[8]=At.x,i[1]=rn.y,i[5]=Xi.y,i[9]=At.y,i[2]=rn.z,i[6]=Xi.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],h=n[5],f=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],S=n[3],b=n[7],E=n[11],y=n[15],P=i[0],N=i[4],v=i[8],T=i[12],I=i[1],K=i[5],Z=i[9],U=i[13],D=i[2],q=i[6],J=i[10],Q=i[14],X=i[3],ee=i[7],ie=i[11],me=i[15];return s[0]=o*P+a*I+l*D+u*X,s[4]=o*N+a*K+l*q+u*ee,s[8]=o*v+a*Z+l*J+u*ie,s[12]=o*T+a*U+l*Q+u*me,s[1]=c*P+h*I+f*D+m*X,s[5]=c*N+h*K+f*q+m*ee,s[9]=c*v+h*Z+f*J+m*ie,s[13]=c*T+h*U+f*Q+m*me,s[2]=_*P+p*I+d*D+g*X,s[6]=_*N+p*K+d*q+g*ee,s[10]=_*v+p*Z+d*J+g*ie,s[14]=_*T+p*U+d*Q+g*me,s[3]=S*P+b*I+E*D+y*X,s[7]=S*N+b*K+E*q+y*ee,s[11]=S*v+b*Z+E*J+y*ie,s[15]=S*T+b*U+E*Q+y*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*l*h-i*u*h-s*a*f+n*u*f+i*a*m-n*l*m)+p*(+t*l*m-t*u*f+s*o*f-i*o*m+i*u*c-s*l*c)+d*(+t*u*h-t*a*m-s*o*h+n*o*m+s*a*c-n*u*c)+g*(-i*a*c-t*l*h+t*a*f+i*o*h-n*o*f+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],S=h*d*u-p*f*u+p*l*m-a*d*m-h*l*g+a*f*g,b=_*f*u-c*d*u-_*l*m+o*d*m+c*l*g-o*f*g,E=c*p*u-_*h*u+_*a*m-o*p*m-c*a*g+o*h*g,y=_*h*l-c*p*l-_*a*f+o*p*f+c*a*d-o*h*d,P=t*S+n*b+i*E+s*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=S*N,e[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*g-n*f*g)*N,e[2]=(a*d*s-p*l*s+p*i*u-n*d*u-a*i*g+n*l*g)*N,e[3]=(h*l*s-a*f*s-h*i*u+n*f*u+a*i*m-n*l*m)*N,e[4]=b*N,e[5]=(c*d*s-_*f*s+_*i*m-t*d*m-c*i*g+t*f*g)*N,e[6]=(_*l*s-o*d*s-_*i*u+t*d*u+o*i*g-t*l*g)*N,e[7]=(o*f*s-c*l*s+c*i*u-t*f*u-o*i*m+t*l*m)*N,e[8]=E*N,e[9]=(_*h*s-c*p*s-_*n*m+t*p*m+c*n*g-t*h*g)*N,e[10]=(o*p*s-_*a*s+_*n*u-t*p*u-o*n*g+t*a*g)*N,e[11]=(c*a*s-o*h*s-c*n*u+t*h*u+o*n*m-t*a*m)*N,e[12]=y*N,e[13]=(c*p*i-_*h*i+_*n*f-t*p*f-c*n*d+t*h*d)*N,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*d-t*a*d)*N,e[15]=(o*h*i-c*a*i+c*n*l-t*h*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,c*a+n,c*l-i*o,0,u*l-i*a,c*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,m=s*c,_=s*h,p=o*c,d=o*h,g=a*h,S=l*u,b=l*c,E=l*h,y=n.x,P=n.y,N=n.z;return i[0]=(1-(p+g))*y,i[1]=(m+E)*y,i[2]=(_-b)*y,i[3]=0,i[4]=(m-E)*P,i[5]=(1-(f+g))*P,i[6]=(d+S)*P,i[7]=0,i[8]=(_+b)*N,i[9]=(d-S)*N,i[10]=(1-(f+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=kn.set(i[0],i[1],i[2]).length();const o=kn.set(i[4],i[5],i[6]).length(),a=kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);const u=1/s,c=1/o,h=1/a;return Nt.elements[0]*=u,Nt.elements[1]*=u,Nt.elements[2]*=u,Nt.elements[4]*=c,Nt.elements[5]*=c,Nt.elements[6]*=c,Nt.elements[8]*=h,Nt.elements[9]*=h,Nt.elements[10]*=h,t.setFromRotationMatrix(Nt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),u=1/(n-i),c=1/(o-s),h=(t+e)*l,f=(n+i)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kn=new L,Nt=new at,cc=new L(0,0,0),uc=new L(1,1,1),rn=new L,Xi=new L,At=new L,va=new at,ya=new Cn;class _s{constructor(e=0,t=0,n=0,i=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],c=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hc=0;const ba=new L,Bn=new Cn,$t=new at,Yi=new L,_i=new L,dc=new L,fc=new Cn,Ma=new L(1,0,0),Sa=new L(0,1,0),wa=new L(0,0,1),pc={type:"added"},Ea={type:"removed"};class Ze extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new L,t=new _s,n=new Cn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Lt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(Ma,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ma,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(_i,Yi,this.up):$t.lookAt(Yi,_i,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),Bn.setFromRotationMatrix($t),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ea)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ea)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ze.DEFAULT_UP=new L(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new L,Zt=new L,qs=new L,Kt=new L,Gn=new L,Vn=new L,Ta=new L,Xs=new L,Ys=new L,$s=new L;class Jt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ut.subVectors(i,t),Zt.subVectors(n,t),qs.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(Zt),l=Ut.dot(qs),u=Zt.dot(Zt),c=Zt.dot(qs),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Kt),l.set(0,0),l.addScaledVector(s,Kt.x),l.addScaledVector(o,Kt.y),l.addScaledVector(a,Kt.z),l}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),Zt.subVectors(e,t),Ut.cross(Zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Ut.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Jt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Gn.subVectors(i,n),Vn.subVectors(s,n),Xs.subVectors(e,n);const l=Gn.dot(Xs),u=Vn.dot(Xs);if(l<=0&&u<=0)return t.copy(n);Ys.subVectors(e,i);const c=Gn.dot(Ys),h=Vn.dot(Ys);if(c>=0&&h<=c)return t.copy(i);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Gn,o);$s.subVectors(e,s);const m=Gn.dot($s),_=Vn.dot($s);if(_>=0&&m<=_)return t.copy(s);const p=m*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(Vn,a);const d=c*_-m*h;if(d<=0&&h-c>=0&&m-_>=0)return Ta.subVectors(s,i),a=(h-c)/(h-c+(m-_)),t.copy(i).addScaledVector(Ta,a);const g=1/(d+p+f);return o=p*g,a=f*g,t.copy(n).addScaledVector(Gn,o).addScaledVector(Vn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mc=0;class ci extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Qn,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yo,this.blendDst=bo,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==Qt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new L,$i=new Ce;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$i.fromBufferAttribute(this,t),$i.applyMatrix3(e),this.setXY(t,$i.x,$i.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Do extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Io extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gc=0;const Dt=new at,Zs=new Ze,Hn=new L,Ct=new li,xi=new li,ht=new L;class Pt extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(To(e)?Io:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Ct.min,xi.min),Ct.expandByPoint(ht),ht.addVectors(Ct.max,xi.max),Ct.expandByPoint(ht)):(Ct.expandByPoint(xi.min),Ct.expandByPoint(xi.max))}Ct.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ht.fromBufferAttribute(a,u),l&&(Hn.fromBufferAttribute(e,u),ht.add(Hn)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let I=0;I<a;I++)u[I]=new L,c[I]=new L;const h=new L,f=new L,m=new L,_=new Ce,p=new Ce,d=new Ce,g=new L,S=new L;function b(I,K,Z){h.fromArray(i,I*3),f.fromArray(i,K*3),m.fromArray(i,Z*3),_.fromArray(o,I*2),p.fromArray(o,K*2),d.fromArray(o,Z*2),f.sub(h),m.sub(h),p.sub(_),d.sub(_);const U=1/(p.x*d.y-d.x*p.y);isFinite(U)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(U),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(U),u[I].add(g),u[K].add(g),u[Z].add(g),c[I].add(S),c[K].add(S),c[Z].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let I=0,K=E.length;I<K;++I){const Z=E[I],U=Z.start,D=Z.count;for(let q=U,J=U+D;q<J;q+=3)b(n[q+0],n[q+1],n[q+2])}const y=new L,P=new L,N=new L,v=new L;function T(I){N.fromArray(s,I*3),v.copy(N);const K=u[I];y.copy(K),y.sub(N.multiplyScalar(N.dot(K))).normalize(),P.crossVectors(v,K);const U=P.dot(c[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=U}for(let I=0,K=E.length;I<K;++I){const Z=E[I],U=Z.start,D=Z.count;for(let q=U,J=U+D;q<J;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,u=new L,c=new L,h=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,d),a.add(c),l.add(c),u.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(i,s),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let m=0,_=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let g=0;g<c;g++)f[_++]=u[m++]}return new Bt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new at,Wn=new lc,Ks=new Er,vi=new L,yi=new L,bi=new L,Js=new L,Zi=new L,Ki=new Ce,Ji=new Ce,Qi=new Ce,Qs=new L,es=new L;class mt extends Ze{constructor(e=new Pt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Zi.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Js.fromBufferAttribute(h,e),o?Zi.addScaledVector(Js,c):Zi.addScaledVector(Js.sub(t),c))}t.add(Zi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),e.ray.intersectsSphere(Ks)===!1)||(Aa.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Aa),n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=g,E=S;b<E;b+=3){const y=a.getX(b),P=a.getX(b+1),N=a.getX(b+2);o=ts(this,d,e,Wn,u,c,y,P,N),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=a.getX(p),S=a.getX(p+1),b=a.getX(p+2);o=ts(this,i,e,Wn,u,c,g,S,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=g,E=S;b<E;b+=3){const y=b,P=b+1,N=b+2;o=ts(this,d,e,Wn,u,c,y,P,N),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=p,S=p+1,b=p+2;o=ts(this,i,e,Wn,u,c,g,S,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function _c(r,e,t,n,i,s,o,a){let l;if(e.side===gt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Qt,a),l===null)return null;es.copy(a),es.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(es);return u<t.near||u>t.far?null:{distance:u,point:es.clone(),object:r}}function ts(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,vi),r.getVertexPosition(a,yi),r.getVertexPosition(l,bi);const u=_c(r,e,t,n,vi,yi,bi,Qs);if(u){i&&(Ki.fromBufferAttribute(i,o),Ji.fromBufferAttribute(i,a),Qi.fromBufferAttribute(i,l),u.uv=Jt.getUV(Qs,vi,yi,bi,Ki,Ji,Qi,new Ce)),s&&(Ki.fromBufferAttribute(s,o),Ji.fromBufferAttribute(s,a),Qi.fromBufferAttribute(s,l),u.uv2=Jt.getUV(Qs,vi,yi,bi,Ki,Ji,Qi,new Ce));const c={a:o,b:a,c:l,normal:new L,materialIndex:0};Jt.getNormal(vi,yi,bi,c.normal),u.face=c}return u}class zi extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2));function _(p,d,g,S,b,E,y,P,N,v,T){const I=E/N,K=y/v,Z=E/2,U=y/2,D=P/2,q=N+1,J=v+1;let Q=0,X=0;const ee=new L;for(let ie=0;ie<J;ie++){const me=ie*K-U;for(let G=0;G<q;G++){const $=G*I-Z;ee[p]=$*S,ee[d]=me*b,ee[g]=D,u.push(ee.x,ee.y,ee.z),ee[p]=0,ee[d]=0,ee[g]=P>0?1:-1,c.push(ee.x,ee.y,ee.z),h.push(G/N),h.push(1-ie/v),Q+=1}}for(let ie=0;ie<v;ie++)for(let me=0;me<N;me++){const G=f+me+q*ie,$=f+me+q*(ie+1),re=f+(me+1)+q*(ie+1),ae=f+(me+1)+q*ie;l.push(G,$,ae),l.push($,re,ae),X+=6}a.addGroup(m,X,T),m+=X,f+=Q}}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const n=ai(r[t]);for(const i in n)e[i]=n[i]}return e}function xc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Fo(r){return r.getRenderTarget()===null&&r.outputEncoding===We?Gt:Ii}const vc={clone:ai,merge:Mt};var yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yc,this.fragmentShader=bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=xc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oo extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends Oo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,qn=1;class Mc extends Ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new It(jn,qn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new It(jn,qn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new It(jn,qn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new It(jn,qn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new It(jn,qn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new It(jn,qn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Wt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class No extends rt{constructor(e,t,n,i,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sc extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zi(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:an});s.uniforms.tEquirect.value=t;const o=new mt(i,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=vt),new Mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const er=new L,wc=new L,Ec=new Lt;class mn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=er.subVectors(n,t).cross(wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),i=this.coplanarPoint(er).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Er,ns=new L;class Tr{constructor(e=new mn,t=new mn,n=new mn,i=new mn,s=new mn,o=new mn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],u=n[5],c=n[6],h=n[7],f=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],S=n[14],b=n[15];return t[0].setComponents(a-i,h-l,p-f,b-d).normalize(),t[1].setComponents(a+i,h+l,p+f,b+d).normalize(),t[2].setComponents(a+s,h+u,p+m,b+g).normalize(),t[3].setComponents(a-s,h-u,p-m,b-g).normalize(),t[4].setComponents(a-o,h-c,p-_,b-S).normalize(),t[5].setComponents(a+o,h+c,p+_,b+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ns.x=i.normal.x>0?e.max.x:e.min.x,ns.y=i.normal.y>0?e.max.y:e.min.y,ns.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,c){const h=u.array,f=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,f),u.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,m=c.updateRange;r.bindBuffer(h,u),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,i(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class Oi extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,c=l+1,h=e/a,f=t/l,m=[],_=[],p=[],d=[];for(let g=0;g<c;g++){const S=g*f-o;for(let b=0;b<u;b++){const E=b*h-s;_.push(E,-S,0),p.push(0,0,1),d.push(b/a),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const b=S+u*g,E=S+u*(g+1),y=S+1+u*(g+1),P=S+1+u*g;m.push(b,E,P),m.push(E,y,P)}this.setIndex(m),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2))}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ac=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ic="vec3 transformed = vec3( position );",Fc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Nc=`#ifdef USE_IRIDESCENCE
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
#endif`,Uc=`#ifdef USE_BUMPMAP
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
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
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
}`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yc=`vec3 transformedNormal = objectNormal;
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
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qc="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uu=`#ifdef USE_GRADIENTMAP
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
}`,hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
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
#endif`,gu=`#if defined( USE_ENVMAP )
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
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
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
#endif`,Mu=`struct PhysicalMaterial {
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
}`,Su=`
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
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
#endif`,ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Gu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Vu=`#ifndef FLAT_SHADED
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
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
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
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,th=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ih=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ah=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oh=`float getShadowMask() {
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
}`,lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ch=`#ifdef USE_SKINNING
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
#endif`,uh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hh=`#ifdef USE_SKINNING
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
#endif`,dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gh=`#ifdef USE_TRANSMISSION
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
#endif`,_h=`#ifdef USE_TRANSMISSION
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
#endif`,xh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Th=`uniform sampler2D t2D;
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
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ch=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ph=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rh=`#include <common>
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
}`,Dh=`#if DEPTH_PACKING == 3200
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
}`,Ih=`#define DISTANCE
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
}`,Fh=`#define DISTANCE
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
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uh=`uniform float scale;
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
}`,zh=`uniform vec3 diffuse;
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
}`,kh=`#include <common>
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
}`,Bh=`uniform vec3 diffuse;
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
}`,Gh=`#define LAMBERT
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
}`,Vh=`#define LAMBERT
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
}`,Wh=`#define MATCAP
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
}`,jh=`#define NORMAL
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
}`,Xh=`#define PHONG
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
}`,Yh=`#define PHONG
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
}`,$h=`#define STANDARD
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
}`,Zh=`#define STANDARD
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
}`,Kh=`#define TOON
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
}`,Jh=`#define TOON
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
}`,Qh=`uniform float size;
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
}`,ed=`uniform vec3 diffuse;
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
}`,td=`#include <common>
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
}`,nd=`uniform vec3 color;
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
}`,id=`uniform float rotation;
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
}`,sd=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:Ac,alphamap_pars_fragment:Cc,alphatest_fragment:Lc,alphatest_pars_fragment:Pc,aomap_fragment:Rc,aomap_pars_fragment:Dc,begin_vertex:Ic,beginnormal_vertex:Fc,bsdfs:Oc,iridescence_fragment:Nc,bumpmap_pars_fragment:Uc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:Gc,color_fragment:Vc,color_pars_fragment:Hc,color_pars_vertex:Wc,color_vertex:jc,common:qc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:Yc,displacementmap_pars_vertex:$c,displacementmap_vertex:Zc,emissivemap_fragment:Kc,emissivemap_pars_fragment:Jc,encodings_fragment:Qc,encodings_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:su,envmap_physical_pars_fragment:gu,envmap_vertex:ru,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:uu,lightmap_fragment:hu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:_u,lights_toon_pars_fragment:xu,lights_phong_fragment:vu,lights_phong_pars_fragment:yu,lights_physical_fragment:bu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:wu,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Lu,map_fragment:Pu,map_pars_fragment:Ru,map_particle_fragment:Du,map_particle_pars_fragment:Iu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphcolor_vertex:Nu,morphnormal_vertex:Uu,morphtarget_pars_vertex:zu,morphtarget_vertex:ku,normal_fragment_begin:Bu,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:Hu,normal_vertex:Wu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:$u,output_fragment:Zu,packing:Ku,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:eh,dithering_pars_fragment:th,roughnessmap_fragment:nh,roughnessmap_pars_fragment:ih,shadowmap_pars_fragment:sh,shadowmap_pars_vertex:rh,shadowmap_vertex:ah,shadowmask_pars_fragment:oh,skinbase_vertex:lh,skinning_pars_vertex:ch,skinning_vertex:uh,skinnormal_vertex:hh,specularmap_fragment:dh,specularmap_pars_fragment:fh,tonemapping_fragment:ph,tonemapping_pars_fragment:mh,transmission_fragment:gh,transmission_pars_fragment:_h,uv_pars_fragment:xh,uv_pars_vertex:vh,uv_vertex:yh,uv2_pars_fragment:bh,uv2_pars_vertex:Mh,uv2_vertex:Sh,worldpos_vertex:wh,background_vert:Eh,background_frag:Th,backgroundCube_vert:Ah,backgroundCube_frag:Ch,cube_vert:Lh,cube_frag:Ph,depth_vert:Rh,depth_frag:Dh,distanceRGBA_vert:Ih,distanceRGBA_frag:Fh,equirect_vert:Oh,equirect_frag:Nh,linedashed_vert:Uh,linedashed_frag:zh,meshbasic_vert:kh,meshbasic_frag:Bh,meshlambert_vert:Gh,meshlambert_frag:Vh,meshmatcap_vert:Hh,meshmatcap_frag:Wh,meshnormal_vert:jh,meshnormal_frag:qh,meshphong_vert:Xh,meshphong_frag:Yh,meshphysical_vert:$h,meshphysical_frag:Zh,meshtoon_vert:Kh,meshtoon_frag:Jh,points_vert:Qh,points_frag:ed,shadow_vert:td,shadow_frag:nd,sprite_vert:id,sprite_frag:sd},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},Vt={basic:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Mt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Mt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Mt([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Mt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Mt([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Mt([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Mt([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Mt([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Vt.physical={uniforms:Mt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const is={r:0,b:0,g:0};function rd(r,e,t,n,i,s,o){const a=new Ue(0);let l=s===!0?0:1,u,c,h=null,f=0,m=null;function _(d,g){let S=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b));const E=r.xr,y=E.getSession&&E.getSession();y&&y.environmentBlendMode==="additive"&&(b=null),b===null?p(a,l):b&&b.isColor&&(p(b,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===gs)?(c===void 0&&(c=new mt(new zi(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:ai(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,N,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=b.encoding!==We,(h!==b||f!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new mt(new Oi(2,2),new en({name:"BackgroundMaterial",uniforms:ai(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=b.encoding!==We,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null))}function p(d,g){d.getRGB(is,Fo(r)),n.buffers.color.setClear(is.r,is.g,is.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:_}}function ad(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let u=l,c=!1;function h(D,q,J,Q,X){let ee=!1;if(o){const ie=p(Q,J,q);u!==ie&&(u=ie,m(u.object)),ee=g(D,Q,J,X),ee&&S(D,Q,J,X)}else{const ie=q.wireframe===!0;(u.geometry!==Q.id||u.program!==J.id||u.wireframe!==ie)&&(u.geometry=Q.id,u.program=J.id,u.wireframe=ie,ee=!0)}X!==null&&t.update(X,34963),(ee||c)&&(c=!1,v(D,q,J,Q),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,q,J){const Q=J.wireframe===!0;let X=a[D.id];X===void 0&&(X={},a[D.id]=X);let ee=X[q.id];ee===void 0&&(ee={},X[q.id]=ee);let ie=ee[Q];return ie===void 0&&(ie=d(f()),ee[Q]=ie),ie}function d(D){const q=[],J=[],Q=[];for(let X=0;X<i;X++)q[X]=0,J[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:Q,object:D,attributes:{},index:null}}function g(D,q,J,Q){const X=u.attributes,ee=q.attributes;let ie=0;const me=J.getAttributes();for(const G in me)if(me[G].location>=0){const re=X[G];let ae=ee[G];if(ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;ie++}return u.attributesNum!==ie||u.index!==Q}function S(D,q,J,Q){const X={},ee=q.attributes;let ie=0;const me=J.getAttributes();for(const G in me)if(me[G].location>=0){let re=ee[G];re===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),X[G]=ae,ie++}u.attributes=X,u.attributesNum=ie,u.index=Q}function b(){const D=u.newAttributes;for(let q=0,J=D.length;q<J;q++)D[q]=0}function E(D){y(D,0)}function y(D,q){const J=u.newAttributes,Q=u.enabledAttributes,X=u.attributeDivisors;J[D]=1,Q[D]===0&&(r.enableVertexAttribArray(D),Q[D]=1),X[D]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),X[D]=q)}function P(){const D=u.newAttributes,q=u.enabledAttributes;for(let J=0,Q=q.length;J<Q;J++)q[J]!==D[J]&&(r.disableVertexAttribArray(J),q[J]=0)}function N(D,q,J,Q,X,ee){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(D,q,J,X,ee):r.vertexAttribPointer(D,q,J,Q,X,ee)}function v(D,q,J,Q){if(n.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const X=Q.attributes,ee=J.getAttributes(),ie=q.defaultAttributeValues;for(const me in ee){const G=ee[me];if(G.location>=0){let $=X[me];if($===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const re=$.normalized,ae=$.itemSize,V=t.get($);if(V===void 0)continue;const we=V.buffer,ve=V.type,ge=V.bytesPerElement;if($.isInterleavedBufferAttribute){const fe=$.data,ze=fe.stride,Ee=$.offset;if(fe.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)y(G.location+ye,fe.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<G.locationSize;ye++)E(G.location+ye);r.bindBuffer(34962,we);for(let ye=0;ye<G.locationSize;ye++)N(G.location+ye,ae/G.locationSize,ve,re,ze*ge,(Ee+ae/G.locationSize*ye)*ge)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)y(G.location+fe,$.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<G.locationSize;fe++)E(G.location+fe);r.bindBuffer(34962,we);for(let fe=0;fe<G.locationSize;fe++)N(G.location+fe,ae/G.locationSize,ve,re,ae*ge,ae/G.locationSize*fe*ge)}}else if(ie!==void 0){const re=ie[me];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(G.location,re);break;case 3:r.vertexAttrib3fv(G.location,re);break;case 4:r.vertexAttrib4fv(G.location,re);break;default:r.vertexAttrib1fv(G.location,re)}}}}P()}function T(){Z();for(const D in a){const q=a[D];for(const J in q){const Q=q[J];for(const X in Q)_(Q[X].object),delete Q[X];delete q[J]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const q=a[D.id];for(const J in q){const Q=q[J];for(const X in Q)_(Q[X].object),delete Q[X];delete q[J]}delete a[D.id]}function K(D){for(const q in a){const J=a[q];if(J[D.id]===void 0)continue;const Q=J[D.id];for(const X in Q)_(Q[X].object),delete Q[X];delete J[D.id]}}function Z(){U(),c=!0,u!==l&&(u=l,m(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:K,initAttributes:b,enableAttribute:E,disableUnusedAttributes:P}}function od(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,c){r.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function ld(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),S=r.getParameter(36349),b=f>0,E=o||e.has("OES_texture_float"),y=b&&E,P=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:y,maxSamples:P}}function cd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new mn,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!d)s?c(null):u();else{const S=s?0:n,b=S*4;let E=g.clippingState||null;l.value=E,E=c(_,f,b,m);for(let y=0;y!==b;++y)E[y]=t[y];g.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,m,_){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const g=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let b=0,E=m;b!==p;++b,E+=4)o.copy(h[b]).applyMatrix4(S,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function ud(r){let e=new WeakMap;function t(o,a){return a===pr?o.mapping=ii:a===mr&&(o.mapping=si),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===pr||a===mr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Sc(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class zo extends Oo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jn=4,Ca=[.125,.215,.35,.446,.526,.582],xn=20,tr=new zo,La=new Ue;let nr=null;const gn=(1+Math.sqrt(5))/2,Yn=1/gn,Pa=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gn,Yn),new L(0,gn,-Yn),new L(Yn,0,gn),new L(-Yn,0,gn),new L(gn,Yn,0),new L(-gn,Yn,0)];class Ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nr),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Di,format:kt,encoding:Tn,depthBuffer:!1},i=Da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hd(s)),this._blurMaterial=dd(s,e,t)}return i}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,n,i){const a=new It(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(La),c.toneMapping=Wt,c.autoClear=!1;const m=new ti({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),_=new mt(new zi,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(La),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const b=this._cubeSize;ss(i,S*b,g>2?b:0,b,b),c.setRenderTarget(i),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Pa[(i-1)%Pa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new mt(this._lodPlanes[i],u),f=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xn-1),p=s/_,d=isFinite(s)?1+Math.floor(c*p):xn;d>xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xn}`);const g=[];let S=0;for(let N=0;N<xn;++N){const v=N/p,T=Math.exp(-v*v/2);g.push(T),N===0?S+=T:N<d&&(S+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const E=this._sizeLods[i],y=3*E*(i>b-Jn?i-b+Jn:0),P=4*(this._cubeSize-E);ss(t,y,P,3*E,2*E),l.setRenderTarget(t),l.render(h,tr)}}function hd(r){const e=[],t=[],n=[];let i=r;const s=r-Jn+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Jn?l=Ca[o-r+Jn-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,_=6,p=3,d=2,g=1,S=new Float32Array(p*_*m),b=new Float32Array(d*_*m),E=new Float32Array(g*_*m);for(let P=0;P<m;P++){const N=P%3*2/3-1,v=P>2?0:-1,T=[N,v,0,N+2/3,v,0,N+2/3,v+1,0,N,v,0,N+2/3,v+1,0,N,v+1,0];S.set(T,p*_*P),b.set(f,d*_*P);const I=[P,P,P,P,P,P];E.set(I,g*_*P)}const y=new Pt;y.setAttribute("position",new Bt(S,p)),y.setAttribute("uv",new Bt(b,d)),y.setAttribute("faceIndex",new Bt(E,g)),e.push(y),i>Jn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Da(r,e,t){const n=new An(r,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dd(r,e,t){const n=new Float32Array(xn),i=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ia(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Fa(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ar(){return`

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
	`}function fd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===pr||l===mr,c=l===ii||l===si;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ra(r)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new Ra(r));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function md(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function u(h){const f=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let b=0,E=S.length;b<E;b+=3){const y=S[b+0],P=S[b+1],N=S[b+2];f.push(y,P,P,N,N,y)}}else{const S=_.array;p=_.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const y=b+0,P=b+1,N=b+2;f.push(y,P,P,N,N,y)}}const d=new(To(f)?Io:Do)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function gd(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function _d(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xd(r,e){return r[0]-e[0]}function vd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function yd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==d){let J=function(){D.dispose(),s.delete(c),c.removeEventListener("dispose",J)};var _=J;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,P=c.morphAttributes.color!==void 0,N=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let I=0;E===!0&&(I=1),y===!0&&(I=2),P===!0&&(I=3);let K=c.attributes.position.count*I,Z=1;K>e.maxTextureSize&&(Z=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const U=new Float32Array(K*Z*4*d),D=new Po(U,K,Z,d);D.type=yn,D.needsUpdate=!0;const q=I*4;for(let Q=0;Q<d;Q++){const X=N[Q],ee=v[Q],ie=T[Q],me=K*Z*4*Q;for(let G=0;G<X.count;G++){const $=G*q;E===!0&&(o.fromBufferAttribute(X,G),U[me+$+0]=o.x,U[me+$+1]=o.y,U[me+$+2]=o.z,U[me+$+3]=0),y===!0&&(o.fromBufferAttribute(ee,G),U[me+$+4]=o.x,U[me+$+5]=o.y,U[me+$+6]=o.z,U[me+$+7]=0),P===!0&&(o.fromBufferAttribute(ie,G),U[me+$+8]=o.x,U[me+$+9]=o.y,U[me+$+10]=o.z,U[me+$+11]=ie.itemSize===4?o.w:1)}}g={count:d,texture:D,size:new Ce(K,Z)},s.set(c,g),c.addEventListener("dispose",J)}let S=0;for(let E=0;E<m.length;E++)S+=m[E];const b=c.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[c.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[c.id]=d}for(let y=0;y<p;y++){const P=d[y];P[0]=y,P[1]=m[y]}d.sort(vd);for(let y=0;y<8;y++)y<p&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(xd);const g=c.morphAttributes.position,S=c.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const P=a[y],N=P[0],v=P[1];N!==Number.MAX_SAFE_INTEGER&&v?(g&&c.getAttribute("morphTarget"+y)!==g[N]&&c.setAttribute("morphTarget"+y,g[N]),S&&c.getAttribute("morphNormal"+y)!==S[N]&&c.setAttribute("morphNormal"+y,S[N]),i[y]=v,b+=v):(g&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),S&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),i[y]=0)}const E=c.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function bd(r,e,t,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=e.get(l,c);return i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const ko=new rt,Bo=new Po,Go=new ac,Vo=new No,Oa=[],Na=[],Ua=new Float32Array(16),za=new Float32Array(9),ka=new Float32Array(4);function ui(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Oa[i];if(s===void 0&&(s=new Float32Array(i),Oa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xs(r,e){let t=Na[e];t===void 0&&(t=new Int32Array(e),Na[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Md(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function Ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function Td(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;ka.set(n),r.uniformMatrix2fv(this.addr,!1,ka),lt(t,n)}}function Ad(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;za.set(n),r.uniformMatrix3fv(this.addr,!1,za),lt(t,n)}}function Cd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ua.set(n),r.uniformMatrix4fv(this.addr,!1,Ua),lt(t,n)}}function Ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function Rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function Dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function Id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function Nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function Ud(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ko,i)}function zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Go,i)}function kd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vo,i)}function Bd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bo,i)}function Gd(r){switch(r){case 5126:return Md;case 35664:return Sd;case 35665:return wd;case 35666:return Ed;case 35674:return Td;case 35675:return Ad;case 35676:return Cd;case 5124:case 35670:return Ld;case 35667:case 35671:return Pd;case 35668:case 35672:return Rd;case 35669:case 35673:return Dd;case 5125:return Id;case 36294:return Fd;case 36295:return Od;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Bd}}function Vd(r,e){r.uniform1fv(this.addr,e)}function Hd(r,e){const t=ui(e,this.size,2);r.uniform2fv(this.addr,t)}function Wd(r,e){const t=ui(e,this.size,3);r.uniform3fv(this.addr,t)}function jd(r,e){const t=ui(e,this.size,4);r.uniform4fv(this.addr,t)}function qd(r,e){const t=ui(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xd(r,e){const t=ui(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yd(r,e){const t=ui(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $d(r,e){r.uniform1iv(this.addr,e)}function Zd(r,e){r.uniform2iv(this.addr,e)}function Kd(r,e){r.uniform3iv(this.addr,e)}function Jd(r,e){r.uniform4iv(this.addr,e)}function Qd(r,e){r.uniform1uiv(this.addr,e)}function ef(r,e){r.uniform2uiv(this.addr,e)}function tf(r,e){r.uniform3uiv(this.addr,e)}function nf(r,e){r.uniform4uiv(this.addr,e)}function sf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ko,s[o])}function rf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Go,s[o])}function af(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vo,s[o])}function of(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bo,s[o])}function lf(r){switch(r){case 5126:return Vd;case 35664:return Hd;case 35665:return Wd;case 35666:return jd;case 35674:return qd;case 35675:return Xd;case 35676:return Yd;case 5124:case 35670:return $d;case 35667:case 35671:return Zd;case 35668:case 35672:return Kd;case 35669:case 35673:return Jd;case 5125:return Qd;case 36294:return ef;case 36295:return tf;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return of}}class cf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gd(t.type)}}class uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lf(t.type)}}class hf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function Ba(r,e){r.seq.push(e),r.map[e.id]=e}function df(r,e,t){const n=r.name,i=n.length;for(ir.lastIndex=0;;){const s=ir.exec(n),o=ir.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){Ba(t,u===void 0?new cf(a,r,e):new uf(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new hf(a),Ba(t,h)),t=h}}}class fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);df(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ga(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ff=0;function pf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mf(r){switch(r){case Tn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Va(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pf(r.getShaderSource(e),o)}else return i}function gf(r,e){const t=mf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _f(r,e){let t;switch(e){case Dl:t="Linear";break;case Il:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case Ol:t="ACESFilmic";break;case Nl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function vf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ai(r){return r!==""}function Ha(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(r){return r.replace(bf,Mf)}function Mf(r,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yr(t)}const Sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(r){return r.replace(Sf,wf)}function wf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ef(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Tf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ii:case si:e="ENVMAP_TYPE_CUBE";break;case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Af(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function Cf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Pl:e="ENVMAP_BLENDING_MIX";break;case Rl:e="ENVMAP_BLENDING_ADD";break}return e}function Lf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ef(t),u=Tf(t),c=Af(t),h=Cf(t),f=Lf(t),m=t.isWebGL2?"":xf(t),_=vf(s),p=i.createProgram();let d,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Ai).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(Ai).join(`
`),g.length>0&&(g+=`
`)):(d=[qa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),g=[m,qa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wt?"#define TONE_MAPPING":"",t.toneMapping!==Wt?De.tonemapping_pars_fragment:"",t.toneMapping!==Wt?_f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,gf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),o=yr(o),o=Ha(o,t),o=Wa(o,t),a=yr(a),a=Ha(a,t),a=Wa(a,t),o=ja(o),a=ja(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===_r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=S+d+o,E=S+g+a,y=Ga(i,35633,b),P=Ga(i,35632,E);if(i.attachShader(p,y),i.attachShader(p,P),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(y).trim(),K=i.getShaderInfoLog(P).trim();let Z=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;const D=Va(i,y,"vertex"),q=Va(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+q)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||K==="")&&(U=!1);U&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:I,prefix:d},fragmentShader:{log:K,prefix:g}})}i.deleteShader(y),i.deleteShader(P);let N;this.getUniforms=function(){return N===void 0&&(N=new fs(i,p)),N};let v;return this.getAttributes=function(){return v===void 0&&(v=yf(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ff++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=P,this}let Rf=0;class Df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new If(e),t.set(e,n)),n}}class If{constructor(e){this.id=Rf++,this.code=e,this.usedTimes=0}}function Ff(r,e,t,n,i,s,o){const a=new Ro,l=new Df,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,I,K,Z){const U=K.fog,D=Z.geometry,q=v.isMeshStandardMaterial?K.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),Q=J&&J.mapping===gs?J.image.height:null,X=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=ee!==void 0?ee.length:0;let me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let G,$,re,ae;if(X){const ze=Vt[X];G=ze.vertexShader,$=ze.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const V=r.getRenderTarget(),we=v.alphaTest>0,ve=v.clearcoat>0,ge=v.iridescence>0;return{isWebGL2:c,shaderID:X,shaderName:v.type,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?r.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Tn,map:!!v.map,matcap:!!v.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===tc,tangentSpaceNormalMap:v.normalMapType===Eo,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===We,clearcoat:ve,clearcoatMap:ve&&!!v.clearcoatMap,clearcoatRoughnessMap:ve&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!v.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!v.iridescenceMap,iridescenceThicknessMap:ge&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Qn,alphaMap:!!v.alphaMap,alphaTest:we,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Wt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===gt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(T,v),S(T,v),T.push(r.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function b(v){const T=_[v.type];let I;if(T){const K=Vt[T];I=vc.clone(K.uniforms)}else I=v.uniforms;return I}function E(v,T){let I;for(let K=0,Z=u.length;K<Z;K++){const U=u[K];if(U.cacheKey===T){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Pf(r,T,v,s),u.push(I)),I}function y(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:E,releaseProgram:y,releaseShaderCache:P,programs:u,dispose:N}}function Of(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ya(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,_,p,d){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:d},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function a(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function u(h,f){t.length>1&&t.sort(h||Nf),n.length>1&&n.sort(f||Xa),i.length>1&&i.sort(f||Xa)}function c(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:c,sort:u}}function Uf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ya,r.set(n,[o])):i>=s.length?(o=new Ya,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function zf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ue};break;case"SpotLight":t={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function kf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bf=0;function Gf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vf(r,e){const t=new zf,n=kf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,o=new at,a=new at;function l(c,h){let f=0,m=0,_=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let p=0,d=0,g=0,S=0,b=0,E=0,y=0,P=0,N=0,v=0;c.sort(Gf);const T=h!==!0?Math.PI:1;for(let K=0,Z=c.length;K<Z;K++){const U=c[K],D=U.color,q=U.intensity,J=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=D.r*q*T,m+=D.g*q*T,_+=D.b*q*T;else if(U.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],q);else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const ee=U.shadow,ie=n.get(U);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=U.shadow.matrix,E++}i.directional[p]=X,p++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(D).multiplyScalar(q*T),X.distance=J,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[g]=X;const ee=U.shadow;if(U.map&&(i.spotLightMap[N]=U.map,N++,ee.updateMatrices(U),U.castShadow&&v++),i.spotLightMatrix[g]=ee.matrix,U.castShadow){const ie=n.get(U);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.spotShadow[g]=ie,i.spotShadowMap[g]=Q,P++}g++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(D).multiplyScalar(q),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=X,S++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*T),X.distance=U.distance,X.decay=U.decay,U.castShadow){const ee=U.shadow,ie=n.get(U);ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,i.pointShadow[d]=ie,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=U.shadow.matrix,y++}i.point[d]=X,d++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(q*T),X.groundColor.copy(U.groundColor).multiplyScalar(q*T),i.hemi[b]=X,b++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==b||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==P||I.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=P+N-v,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=b,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=P,I.numSpotMaps=N,i.version=Bf++)}function u(c,h){let f=0,m=0,_=0,p=0,d=0;const g=h.matrixWorldInverse;for(let S=0,b=c.length;S<b;S++){const E=c[S];if(E.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(E.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),_++}else if(E.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),d++}}}return{setup:l,setupView:u,state:i}}function $a(r,e){const t=new Vf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Hf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $a(r,e),t.set(s,[l])):o>=a.length?(l=new $a(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Wf extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xf=`uniform sampler2D shadow_pass;
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
}`;function Yf(r,e,t){let n=new Tr;const i=new Ce,s=new Ce,o=new ft,a=new Wf({depthPacking:ec}),l=new jf,u={},c=t.maxTextureSize,h={[Qt]:gt,[gt]:Qt,[Ht]:Ht},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:qf,fragmentShader:Xf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Pt;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new mt(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo,this.render=function(E,y,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const N=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(an),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let K=0,Z=E.length;K<Z;K++){const U=E[K],D=U.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),s.copy(D.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/q.x),i.x=s.x*q.x,D.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/q.y),i.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null){const Q=this.type!==Ti?{minFilter:pt,magFilter:pt}:{};D.map=new An(i.x,i.y,Q),D.map.texture.name=U.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const J=D.getViewportCount();for(let Q=0;Q<J;Q++){const X=D.getViewport(Q);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(o),D.updateMatrices(U,Q),n=D.getFrustum(),b(y,P,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===Ti&&g(D,P),D.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(N,v,T)};function g(E,y){const P=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,P,f,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,P,m,p,null)}function S(E,y,P,N,v,T){let I=null;const K=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(K!==void 0)I=K;else if(I=P.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const Z=I.uuid,U=y.uuid;let D=u[Z];D===void 0&&(D={},u[Z]=D);let q=D[U];q===void 0&&(q=I.clone(),D[U]=q),I=q}return I.visible=y.visible,I.wireframe=y.wireframe,T===Ti?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:h[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=N,I.farDistance=v),I}function b(E,y,P,N,v){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const K=e.update(E),Z=E.material;if(Array.isArray(Z)){const U=K.groups;for(let D=0,q=U.length;D<q;D++){const J=U[D],Q=Z[J.materialIndex];if(Q&&Q.visible){const X=S(E,Q,N,P.near,P.far,v);r.renderBufferDirect(P,null,K,X,E,J)}}}else if(Z.visible){const U=S(E,Z,N,P.near,P.far,v);r.renderBufferDirect(P,null,K,U,E,null)}}const I=E.children;for(let K=0,Z=I.length;K<Z;K++)b(I[K],y,P,N,v)}}function $f(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const W=new ft;let te=null;const de=new ft(0,0,0,0);return{setMask:function(C){te!==C&&!R&&(r.colorMask(C,C,C,C),te=C)},setLocked:function(C){R=C},setClear:function(C,k,le,Me,Oe){Oe===!0&&(C*=Me,k*=Me,le*=Me),W.set(C,k,le,Me),de.equals(W)===!1&&(r.clearColor(C,k,le,Me),de.copy(W))},reset:function(){R=!1,te=null,de.set(-1,0,0,0)}}}function s(){let R=!1,W=null,te=null,de=null;return{setTest:function(C){C?we(2929):ve(2929)},setMask:function(C){W!==C&&!R&&(r.depthMask(C),W=C)},setFunc:function(C){if(te!==C){switch(C){case Sl:r.depthFunc(512);break;case wl:r.depthFunc(519);break;case El:r.depthFunc(513);break;case fr:r.depthFunc(515);break;case Tl:r.depthFunc(514);break;case Al:r.depthFunc(518);break;case Cl:r.depthFunc(516);break;case Ll:r.depthFunc(517);break;default:r.depthFunc(515)}te=C}},setLocked:function(C){R=C},setClear:function(C){de!==C&&(r.clearDepth(C),de=C)},reset:function(){R=!1,W=null,te=null,de=null}}}function o(){let R=!1,W=null,te=null,de=null,C=null,k=null,le=null,Me=null,Oe=null;return{setTest:function(Ae){R||(Ae?we(2960):ve(2960))},setMask:function(Ae){W!==Ae&&!R&&(r.stencilMask(Ae),W=Ae)},setFunc:function(Ae,Xe,Je){(te!==Ae||de!==Xe||C!==Je)&&(r.stencilFunc(Ae,Xe,Je),te=Ae,de=Xe,C=Je)},setOp:function(Ae,Xe,Je){(k!==Ae||le!==Xe||Me!==Je)&&(r.stencilOp(Ae,Xe,Je),k=Ae,le=Xe,Me=Je)},setLocked:function(Ae){R=Ae},setClear:function(Ae){Oe!==Ae&&(r.clearStencil(Ae),Oe=Ae)},reset:function(){R=!1,W=null,te=null,de=null,C=null,k=null,le=null,Me=null,Oe=null}}}const a=new i,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,b=null,E=null,y=null,P=null,N=null,v=null,T=!1,I=null,K=null,Z=null,U=null,D=null;const q=r.getParameter(35661);let J=!1,Q=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=Q>=2);let ee=null,ie={};const me=r.getParameter(3088),G=r.getParameter(2978),$=new ft().fromArray(me),re=new ft().fromArray(G);function ae(R,W,te){const de=new Uint8Array(4),C=r.createTexture();r.bindTexture(R,C),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let k=0;k<te;k++)r.texImage2D(W+k,0,6408,1,1,0,6408,5121,de);return C}const V={};V[3553]=ae(3553,3553,1),V[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(2929),l.setFunc(fr),qe(!1),it(kr),we(2884),Ye(an);function we(R){f[R]!==!0&&(r.enable(R),f[R]=!0)}function ve(R){f[R]!==!1&&(r.disable(R),f[R]=!1)}function ge(R,W){return m[R]!==W?(r.bindFramebuffer(R,W),m[R]=W,n&&(R===36009&&(m[36160]=W),R===36160&&(m[36009]=W)),!0):!1}function fe(R,W){let te=p,de=!1;if(R)if(te=_.get(W),te===void 0&&(te=[],_.set(W,te)),R.isWebGLMultipleRenderTargets){const C=R.texture;if(te.length!==C.length||te[0]!==36064){for(let k=0,le=C.length;k<le;k++)te[k]=36064+k;te.length=C.length,de=!0}}else te[0]!==36064&&(te[0]=36064,de=!0);else te[0]!==1029&&(te[0]=1029,de=!0);de&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ze(R){return d!==R?(r.useProgram(R),d=R,!0):!1}const Ee={[Kn]:32774,[dl]:32778,[fl]:32779};if(n)Ee[Hr]=32775,Ee[Wr]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ee[Hr]=R.MIN_EXT,Ee[Wr]=R.MAX_EXT)}const ye={[pl]:0,[ml]:1,[gl]:768,[yo]:770,[Ml]:776,[yl]:774,[xl]:772,[_l]:769,[bo]:771,[bl]:775,[vl]:773};function Ye(R,W,te,de,C,k,le,Me){if(R===an){g===!0&&(ve(3042),g=!1);return}if(g===!1&&(we(3042),g=!0),R!==hl){if(R!==S||Me!==T){if((b!==Kn||P!==Kn)&&(r.blendEquation(32774),b=Kn,P=Kn),Me)switch(R){case Qn:r.blendFuncSeparate(1,771,1,771);break;case Br:r.blendFunc(1,1);break;case Gr:r.blendFuncSeparate(0,769,0,1);break;case Vr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Qn:r.blendFuncSeparate(770,771,1,771);break;case Br:r.blendFunc(770,1);break;case Gr:r.blendFuncSeparate(0,769,0,1);break;case Vr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,y=null,N=null,v=null,S=R,T=Me}return}C=C||W,k=k||te,le=le||de,(W!==b||C!==P)&&(r.blendEquationSeparate(Ee[W],Ee[C]),b=W,P=C),(te!==E||de!==y||k!==N||le!==v)&&(r.blendFuncSeparate(ye[te],ye[de],ye[k],ye[le]),E=te,y=de,N=k,v=le),S=R,T=!1}function Qe(R,W){R.side===Ht?ve(2884):we(2884);let te=R.side===gt;W&&(te=!te),qe(te),R.blending===Qn&&R.transparent===!1?Ye(an):Ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const de=R.stencilWrite;u.setTest(de),de&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?we(32926):ve(32926)}function qe(R){I!==R&&(R?r.frontFace(2304):r.frontFace(2305),I=R)}function it(R){R!==cl?(we(2884),R!==K&&(R===kr?r.cullFace(1029):R===ul?r.cullFace(1028):r.cullFace(1032))):ve(2884),K=R}function je(R){R!==Z&&(J&&r.lineWidth(R),Z=R)}function Ie(R,W,te){R?(we(32823),(U!==W||D!==te)&&(r.polygonOffset(W,te),U=W,D=te)):ve(32823)}function yt(R){R?we(3089):ve(3089)}function ct(R){R===void 0&&(R=33984+q-1),ee!==R&&(r.activeTexture(R),ee=R)}function w(R,W,te){te===void 0&&(ee===null?te=33984+q-1:te=ee);let de=ie[te];de===void 0&&(de={type:void 0,texture:void 0},ie[te]=de),(de.type!==R||de.texture!==W)&&(ee!==te&&(r.activeTexture(te),ee=te),r.bindTexture(R,W||V[R]),de.type=R,de.texture=W)}function x(){const R=ie[ee];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(R){$.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function _e(R){re.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function Re(R,W){let te=h.get(W);te===void 0&&(te=new WeakMap,h.set(W,te));let de=te.get(R);de===void 0&&(de=r.getUniformBlockIndex(W,R.name),te.set(R,de))}function Le(R,W){const de=h.get(W).get(R);c.get(W)!==de&&(r.uniformBlockBinding(W,de,R.__bindingPointIndex),c.set(W,de))}function ke(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ee=null,ie={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,b=null,E=null,y=null,P=null,N=null,v=null,T=!1,I=null,K=null,Z=null,U=null,D=null,$.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:ve,bindFramebuffer:ge,drawBuffers:fe,useProgram:ze,setBlending:Ye,setMaterial:Qe,setFlipSided:qe,setCullFace:it,setLineWidth:je,setPolygonOffset:Ie,setScissorTest:yt,activeTexture:ct,bindTexture:w,unbindTexture:x,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:pe,texImage3D:he,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:F,texStorage3D:ue,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Se,compressedTexSubImage3D:A,scissor:xe,viewport:_e,reset:ke}}function Zf(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return g?new OffscreenCanvas(w,x):Fi("canvas")}function b(w,x,H,ne){let se=1;if((w.width>ne||w.height>ne)&&(se=ne/Math.max(w.width,w.height)),se<1||x===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const ce=x?vr:Math.floor,Se=ce(se*w.width),A=ce(se*w.height);p===void 0&&(p=S(Se,A));const F=H?S(Se,A):p;return F.width=Se,F.height=A,F.getContext("2d").drawImage(w,0,0,Se,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+A+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return _a(w.width)&&_a(w.height)}function y(w){return a?!1:w.wrapS!==Ft||w.wrapT!==Ft||w.minFilter!==pt&&w.minFilter!==vt}function P(w,x){return w.generateMipmaps&&x&&w.minFilter!==pt&&w.minFilter!==vt}function N(w){r.generateMipmap(w)}function v(w,x,H,ne,se=!1){if(a===!1)return x;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce=x;return x===6403&&(H===5126&&(ce=33326),H===5131&&(ce=33325),H===5121&&(ce=33321)),x===33319&&(H===5126&&(ce=33328),H===5131&&(ce=33327),H===5121&&(ce=33323)),x===6408&&(H===5126&&(ce=34836),H===5131&&(ce=34842),H===5121&&(ce=ne===We&&se===!1?35907:32856),H===32819&&(ce=32854),H===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(w,x,H){return P(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==pt&&w.minFilter!==vt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){return w===pt||w===jr||w===Ts?9728:9729}function K(w){const x=w.target;x.removeEventListener("dispose",K),U(x),x.isVideoTexture&&_.delete(x)}function Z(w){const x=w.target;x.removeEventListener("dispose",Z),q(x)}function U(w){const x=n.get(w);if(x.__webglInit===void 0)return;const H=w.source,ne=d.get(H);if(ne){const se=ne[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(w),Object.keys(ne).length===0&&d.delete(H)}n.remove(w)}function D(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const H=w.source,ne=d.get(H);delete ne[x.__cacheKey],o.memory.textures--}function q(w){const x=w.texture,H=n.get(w),ne=n.get(x);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(H.__webglFramebuffer[se]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let se=0;se<H.__webglColorRenderbuffer.length;se++)H.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[se]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let se=0,ce=x.length;se<ce;se++){const Se=n.get(x[se]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(x[se])}n.remove(x),n.remove(w)}let J=0;function Q(){J=0}function X(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function ee(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function ie(w,x){const H=n.get(w);if(w.isVideoTexture&&yt(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,w,x);return}}t.bindTexture(3553,H.__webglTexture,33984+x)}function me(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ve(H,w,x);return}t.bindTexture(35866,H.__webglTexture,33984+x)}function G(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ve(H,w,x);return}t.bindTexture(32879,H.__webglTexture,33984+x)}function $(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ge(H,w,x);return}t.bindTexture(34067,H.__webglTexture,33984+x)}const re={[Pi]:10497,[Ft]:33071,[gr]:33648},ae={[pt]:9728,[jr]:9984,[Ts]:9986,[vt]:9729,[Ul]:9985,[Ri]:9987};function V(w,x,H){if(H?(r.texParameteri(w,10242,re[x.wrapS]),r.texParameteri(w,10243,re[x.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,re[x.wrapR]),r.texParameteri(w,10240,ae[x.magFilter]),r.texParameteri(w,10241,ae[x.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(x.wrapS!==Ft||x.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,I(x.magFilter)),r.texParameteri(w,10241,I(x.minFilter)),x.minFilter!==pt&&x.minFilter!==vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===pt||x.minFilter!==Ts&&x.minFilter!==Ri||x.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function we(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",K));const ne=x.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const ce=ee(x);if(ce!==w.__cacheKey){se[ce]===void 0&&(se[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),se[ce].usedTimes++;const Se=se[w.__cacheKey];Se!==void 0&&(se[w.__cacheKey].usedTimes--,Se.usedTimes===0&&D(x)),w.__cacheKey=ce,w.__webglTexture=se[ce].texture}return H}function ve(w,x,H){let ne=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=35866),x.isData3DTexture&&(ne=32879);const se=we(w,x),ce=x.source;t.bindTexture(ne,w.__webglTexture,33984+H);const Se=n.get(ce);if(ce.version!==Se.__version||se===!0){t.activeTexture(33984+H),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const A=y(x)&&E(x.image)===!1;let F=b(x.image,A,!1,c);F=ct(x,F);const ue=E(F)||a,pe=s.convert(x.format,x.encoding);let he=s.convert(x.type),xe=v(x.internalFormat,pe,he,x.encoding,x.isVideoTexture);V(ne,x,ue);let _e;const Re=x.mipmaps,Le=a&&x.isVideoTexture!==!0,ke=Se.__version===void 0||se===!0,R=T(x,F,ue);if(x.isDepthTexture)xe=6402,a?x.type===yn?xe=36012:x.type===vn?xe=33190:x.type===ei?xe=35056:xe=33189:x.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Sn&&xe===6402&&x.type!==wo&&x.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=vn,he=s.convert(x.type)),x.format===ri&&xe===6402&&(xe=34041,x.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ei,he=s.convert(x.type))),ke&&(Le?t.texStorage2D(3553,1,xe,F.width,F.height):t.texImage2D(3553,0,xe,F.width,F.height,0,pe,he,null));else if(x.isDataTexture)if(Re.length>0&&ue){Le&&ke&&t.texStorage2D(3553,R,xe,Re[0].width,Re[0].height);for(let W=0,te=Re.length;W<te;W++)_e=Re[W],Le?t.texSubImage2D(3553,W,0,0,_e.width,_e.height,pe,he,_e.data):t.texImage2D(3553,W,xe,_e.width,_e.height,0,pe,he,_e.data);x.generateMipmaps=!1}else Le?(ke&&t.texStorage2D(3553,R,xe,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,pe,he,F.data)):t.texImage2D(3553,0,xe,F.width,F.height,0,pe,he,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&ke&&t.texStorage3D(35866,R,xe,Re[0].width,Re[0].height,F.depth);for(let W=0,te=Re.length;W<te;W++)_e=Re[W],x.format!==kt?pe!==null?Le?t.compressedTexSubImage3D(35866,W,0,0,0,_e.width,_e.height,F.depth,pe,_e.data,0,0):t.compressedTexImage3D(35866,W,xe,_e.width,_e.height,F.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,W,0,0,0,_e.width,_e.height,F.depth,pe,he,_e.data):t.texImage3D(35866,W,xe,_e.width,_e.height,F.depth,0,pe,he,_e.data)}else{Le&&ke&&t.texStorage2D(3553,R,xe,Re[0].width,Re[0].height);for(let W=0,te=Re.length;W<te;W++)_e=Re[W],x.format!==kt?pe!==null?Le?t.compressedTexSubImage2D(3553,W,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(3553,W,xe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,W,0,0,_e.width,_e.height,pe,he,_e.data):t.texImage2D(3553,W,xe,_e.width,_e.height,0,pe,he,_e.data)}else if(x.isDataArrayTexture)Le?(ke&&t.texStorage3D(35866,R,xe,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,pe,he,F.data)):t.texImage3D(35866,0,xe,F.width,F.height,F.depth,0,pe,he,F.data);else if(x.isData3DTexture)Le?(ke&&t.texStorage3D(32879,R,xe,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,pe,he,F.data)):t.texImage3D(32879,0,xe,F.width,F.height,F.depth,0,pe,he,F.data);else if(x.isFramebufferTexture){if(ke)if(Le)t.texStorage2D(3553,R,xe,F.width,F.height);else{let W=F.width,te=F.height;for(let de=0;de<R;de++)t.texImage2D(3553,de,xe,W,te,0,pe,he,null),W>>=1,te>>=1}}else if(Re.length>0&&ue){Le&&ke&&t.texStorage2D(3553,R,xe,Re[0].width,Re[0].height);for(let W=0,te=Re.length;W<te;W++)_e=Re[W],Le?t.texSubImage2D(3553,W,0,0,pe,he,_e):t.texImage2D(3553,W,xe,pe,he,_e);x.generateMipmaps=!1}else Le?(ke&&t.texStorage2D(3553,R,xe,F.width,F.height),t.texSubImage2D(3553,0,0,0,pe,he,F)):t.texImage2D(3553,0,xe,pe,he,F);P(x,ue)&&N(ne),Se.__version=ce.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ge(w,x,H){if(x.image.length!==6)return;const ne=we(w,x),se=x.source;t.bindTexture(34067,w.__webglTexture,33984+H);const ce=n.get(se);if(se.version!==ce.__version||ne===!0){t.activeTexture(33984+H),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!Se&&!A?F[W]=b(x.image[W],!1,!0,u):F[W]=A?x.image[W].image:x.image[W],F[W]=ct(x,F[W]);const ue=F[0],pe=E(ue)||a,he=s.convert(x.format,x.encoding),xe=s.convert(x.type),_e=v(x.internalFormat,he,xe,x.encoding),Re=a&&x.isVideoTexture!==!0,Le=ce.__version===void 0||ne===!0;let ke=T(x,ue,pe);V(34067,x,pe);let R;if(Se){Re&&Le&&t.texStorage2D(34067,ke,_e,ue.width,ue.height);for(let W=0;W<6;W++){R=F[W].mipmaps;for(let te=0;te<R.length;te++){const de=R[te];x.format!==kt?he!==null?Re?t.compressedTexSubImage2D(34069+W,te,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(34069+W,te,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+W,te,0,0,de.width,de.height,he,xe,de.data):t.texImage2D(34069+W,te,_e,de.width,de.height,0,he,xe,de.data)}}}else{R=x.mipmaps,Re&&Le&&(R.length>0&&ke++,t.texStorage2D(34067,ke,_e,F[0].width,F[0].height));for(let W=0;W<6;W++)if(A){Re?t.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,he,xe,F[W].data):t.texImage2D(34069+W,0,_e,F[W].width,F[W].height,0,he,xe,F[W].data);for(let te=0;te<R.length;te++){const C=R[te].image[W].image;Re?t.texSubImage2D(34069+W,te+1,0,0,C.width,C.height,he,xe,C.data):t.texImage2D(34069+W,te+1,_e,C.width,C.height,0,he,xe,C.data)}}else{Re?t.texSubImage2D(34069+W,0,0,0,he,xe,F[W]):t.texImage2D(34069+W,0,_e,he,xe,F[W]);for(let te=0;te<R.length;te++){const de=R[te];Re?t.texSubImage2D(34069+W,te+1,0,0,he,xe,de.image[W]):t.texImage2D(34069+W,te+1,_e,he,xe,de.image[W])}}}P(x,pe)&&N(34067),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function fe(w,x,H,ne,se){const ce=s.convert(H.format,H.encoding),Se=s.convert(H.type),A=v(H.internalFormat,ce,Se,H.encoding);n.get(x).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,A,x.width,x.height,x.depth,0,ce,Se,null):t.texImage2D(se,0,A,x.width,x.height,0,ce,Se,null)),t.bindFramebuffer(36160,w),Ie(x)?f.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(H).__webglTexture,0,je(x)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ne,se,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(w,x,H){if(r.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let ne=33189;if(H||Ie(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===yn?ne=36012:se.type===vn&&(ne=33190));const ce=je(x);Ie(x)?f.renderbufferStorageMultisampleEXT(36161,ce,ne,x.width,x.height):r.renderbufferStorageMultisample(36161,ce,ne,x.width,x.height)}else r.renderbufferStorage(36161,ne,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const ne=je(x);H&&Ie(x)===!1?r.renderbufferStorageMultisample(36161,ne,35056,x.width,x.height):Ie(x)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<ne.length;se++){const ce=ne[se],Se=s.convert(ce.format,ce.encoding),A=s.convert(ce.type),F=v(ce.internalFormat,Se,A,ce.encoding),ue=je(x);H&&Ie(x)===!1?r.renderbufferStorageMultisample(36161,ue,F,x.width,x.height):Ie(x)?f.renderbufferStorageMultisampleEXT(36161,ue,F,x.width,x.height):r.renderbufferStorage(36161,F,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function Ee(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const ne=n.get(x.depthTexture).__webglTexture,se=je(x);if(x.depthTexture.format===Sn)Ie(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(x.depthTexture.format===ri)Ie(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function ye(w){const x=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=r.createRenderbuffer(),ze(x.__webglDepthbuffer[ne],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ze(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ye(w,x,H){const ne=n.get(w);x!==void 0&&fe(ne.__webglFramebuffer,w,w.texture,36064,3553),H!==void 0&&ye(w)}function Qe(w){const x=w.texture,H=n.get(w),ne=n.get(x);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=x.version,o.memory.textures++);const se=w.isWebGLCubeRenderTarget===!0,ce=w.isWebGLMultipleRenderTargets===!0,Se=E(w)||a;if(se){H.__webglFramebuffer=[];for(let A=0;A<6;A++)H.__webglFramebuffer[A]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const A=w.texture;for(let F=0,ue=A.length;F<ue;F++){const pe=n.get(A[F]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ie(w)===!1){const A=ce?x:[x];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ue=A[F];H.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[F]);const pe=s.convert(ue.format,ue.encoding),he=s.convert(ue.type),xe=v(ue.internalFormat,pe,he,ue.encoding,w.isXRRenderTarget===!0),_e=je(w);r.renderbufferStorageMultisample(36161,_e,xe,w.width,w.height),r.framebufferRenderbuffer(36160,36064+F,36161,H.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),V(34067,x,Se);for(let A=0;A<6;A++)fe(H.__webglFramebuffer[A],w,x,36064,34069+A);P(x,Se)&&N(34067),t.unbindTexture()}else if(ce){const A=w.texture;for(let F=0,ue=A.length;F<ue;F++){const pe=A[F],he=n.get(pe);t.bindTexture(3553,he.__webglTexture),V(3553,pe,Se),fe(H.__webglFramebuffer,w,pe,36064+F,3553),P(pe,Se)&&N(3553)}t.unbindTexture()}else{let A=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?A=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),V(A,x,Se),fe(H.__webglFramebuffer,w,x,36064,A),P(x,Se)&&N(A),t.unbindTexture()}w.depthBuffer&&ye(w)}function qe(w){const x=E(w)||a,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,se=H.length;ne<se;ne++){const ce=H[ne];if(P(ce,x)){const Se=w.isWebGLCubeRenderTarget?34067:3553,A=n.get(ce).__webglTexture;t.bindTexture(Se,A),N(Se),t.unbindTexture()}}}function it(w){if(a&&w.samples>0&&Ie(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,ne=w.height;let se=16384;const ce=[],Se=w.stencilBuffer?33306:36096,A=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){ce.push(36064+ue),w.depthBuffer&&ce.push(Se);const pe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(pe===!1&&(w.depthBuffer&&(se|=256),w.stencilBuffer&&(se|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ue]),pe===!0&&(r.invalidateFramebuffer(36008,[Se]),r.invalidateFramebuffer(36009,[Se])),F){const he=n.get(x[ue]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,he,0)}r.blitFramebuffer(0,0,H,ne,0,0,H,ne,se,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,A.__webglColorRenderbuffer[ue]);const pe=n.get(x[ue]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,pe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function je(w){return Math.min(h,w.samples)}function Ie(w){const x=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(w){const x=o.render.frame;_.get(w)!==x&&(_.set(w,x),w.update())}function ct(w,x){const H=w.encoding,ne=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===xr||H!==Tn&&(H===We?a===!1?e.has("EXT_sRGB")===!0&&ne===kt?(w.format=xr,w.minFilter=vt,w.generateMipmaps=!1):x=Co.sRGBToLinear(x):(ne!==kt||se!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),x}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=ie,this.setTexture2DArray=me,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Ye,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ie}function Kf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===En)return 5121;if(s===Gl)return 32819;if(s===Vl)return 32820;if(s===zl)return 5120;if(s===kl)return 5122;if(s===wo)return 5123;if(s===Bl)return 5124;if(s===vn)return 5125;if(s===yn)return 5126;if(s===Di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hl)return 6406;if(s===kt)return 6408;if(s===Wl)return 6409;if(s===jl)return 6410;if(s===Sn)return 6402;if(s===ri)return 34041;if(s===xr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ql)return 6403;if(s===Xl)return 36244;if(s===Yl)return 33319;if(s===$l)return 33320;if(s===Zl)return 36249;if(s===As||s===Cs||s===Ls||s===Ps)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qr||s===Xr||s===Yr||s===$r)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$r)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zr||s===Kr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zr)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Kr)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jr||s===Qr||s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===aa||s===oa||s===la||s===ca||s===ua||s===ha)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jr)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qr)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ea)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ta)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===na)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ia)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ra)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===aa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===la)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ca)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ua)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ha)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Rs)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jl||s===da||s===fa||s===pa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===da)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ei?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Jf extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(u,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ep extends rt{constructor(e,t,n,i,s,o,a,l,u,c){if(c=c!==void 0?c:Sn,c!==Sn&&c!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Sn&&(n=vn),n===void 0&&c===ri&&(n=ei),super(null,i,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class tp extends Rn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,m=null,_=null;const p=t.getContextAttributes();let d=null,g=null;const S=[],b=[],E=new Set,y=new Map,P=new It;P.layers.enable(1),P.viewport=new ft;const N=new It;N.layers.enable(2),N.viewport=new ft;const v=[P,N],T=new Jf;T.layers.enable(1),T.layers.enable(2);let I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=S[G];return $===void 0&&($=new sr,S[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=S[G];return $===void 0&&($=new sr,S[G]=$),$.getGripSpace()},this.getHand=function(G){let $=S[G];return $===void 0&&($=new sr,S[G]=$),$.getHandSpace()};function Z(G){const $=b.indexOf(G.inputSource);if($===-1)return;const re=S[$];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function U(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",D);for(let G=0;G<S.length;G++){const $=b[G];$!==null&&(b[G]=null,S[G].disconnect($))}I=null,K=null,e.setRenderTarget(d),m=null,f=null,h=null,i=null,g=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),g=new An(m.framebufferWidth,m.framebufferHeight,{format:kt,type:En,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,re=null,ae=null;p.depth&&(ae=p.stencil?35056:33190,$=p.stencil?ri:Sn,re=p.stencil?ei:vn);const V={colorFormat:32856,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(V),i.updateRenderState({layers:[f]}),g=new An(f.textureWidth,f.textureHeight,{format:kt,type:En,depthTexture:new ep(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const we=e.properties.get(g);we.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(G){for(let $=0;$<G.removed.length;$++){const re=G.removed[$],ae=b.indexOf(re);ae>=0&&(b[ae]=null,S[ae].disconnect(re))}for(let $=0;$<G.added.length;$++){const re=G.added[$];let ae=b.indexOf(re);if(ae===-1){for(let we=0;we<S.length;we++)if(we>=b.length){b.push(re),ae=we;break}else if(b[we]===null){b[we]=re,ae=we;break}if(ae===-1)break}const V=S[ae];V&&V.connect(re)}}const q=new L,J=new L;function Q(G,$,re){q.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const ae=q.distanceTo(J),V=$.projectionMatrix.elements,we=re.projectionMatrix.elements,ve=V[14]/(V[10]-1),ge=V[14]/(V[10]+1),fe=(V[9]+1)/V[5],ze=(V[9]-1)/V[5],Ee=(V[8]-1)/V[0],ye=(we[8]+1)/we[0],Ye=ve*Ee,Qe=ve*ye,qe=ae/(-Ee+ye),it=qe*-Ee;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(it),G.translateZ(qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const je=ve+qe,Ie=ge+qe,yt=Ye-it,ct=Qe+(ae-it),w=fe*ge/Ie*je,x=ze*ge/Ie*je;G.projectionMatrix.makePerspective(yt,ct,w,x,je,Ie)}function X(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;T.near=N.near=P.near=G.near,T.far=N.far=P.far=G.far,(I!==T.near||K!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,K=T.far);const $=G.parent,re=T.cameras;X(T,$);for(let V=0;V<re.length;V++)X(re[V],$);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),G.matrix.copy(T.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const ae=G.children;for(let V=0,we=ae.length;V<we;V++)ae[V].updateMatrixWorld(!0);re.length===2?Q(T,P,N):T.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return E};let ee=null;function ie(G,$){if(c=$.getViewerPose(u||o),_=$,c!==null){const re=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;re.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let V=0;V<re.length;V++){const we=re[V];let ve=null;if(m!==null)ve=m.getViewport(we);else{const fe=h.getViewSubImage(f,we);ve=fe.viewport,V===0&&(e.setRenderTargetTextures(g,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(g))}let ge=v[V];ge===void 0&&(ge=new It,ge.layers.enable(V),ge.viewport=new ft,v[V]=ge),ge.matrix.fromArray(we.transform.matrix),ge.projectionMatrix.fromArray(we.projectionMatrix),ge.viewport.set(ve.x,ve.y,ve.width,ve.height),V===0&&T.matrix.copy(ge.matrix),ae===!0&&T.cameras.push(ge)}}for(let re=0;re<S.length;re++){const ae=b[re],V=S[re];ae!==null&&V!==void 0&&V.update(ae,$,u||o)}if(ee&&ee(G,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let re=null;for(const ae of E)$.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)E.delete(ae),y.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of $.detectedPlanes)if(!E.has(ae))E.add(ae),y.set(ae,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const V=y.get(ae);ae.lastChangedTime>V&&(y.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}_=null}const me=new Uo;me.setAnimationLoop(ie),this.setAnimationLoop=function(G){ee=G},this.dispose=function(){}}}function np(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,Fo(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),c(p,d)):d.isMeshPhongMaterial?(i(p,d),u(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,b)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===gt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===gt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===gt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ip(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(S,b){const E=b.program;n.uniformBlockBinding(S,E)}function u(S,b){let E=i[S.id];E===void 0&&(_(S),E=c(S),i[S.id]=E,S.addEventListener("dispose",d));const y=b.program;n.updateUBOMapping(S,y);const P=e.render.frame;s[S.id]!==P&&(f(S),s[S.id]=P)}function c(S){const b=h();S.__bindingPointIndex=b;const E=r.createBuffer(),y=S.__size,P=S.usage;return r.bindBuffer(35345,E),r.bufferData(35345,y,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,E),E}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=i[S.id],E=S.uniforms,y=S.__cache;r.bindBuffer(35345,b);for(let P=0,N=E.length;P<N;P++){const v=E[P];if(m(v,P,y)===!0){const T=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let K=0;for(let Z=0;Z<I.length;Z++){const U=I[Z],D=p(U);typeof U=="number"?(v.__data[0]=U,r.bufferSubData(35345,T+K,v.__data)):U.isMatrix3?(v.__data[0]=U.elements[0],v.__data[1]=U.elements[1],v.__data[2]=U.elements[2],v.__data[3]=U.elements[0],v.__data[4]=U.elements[3],v.__data[5]=U.elements[4],v.__data[6]=U.elements[5],v.__data[7]=U.elements[0],v.__data[8]=U.elements[6],v.__data[9]=U.elements[7],v.__data[10]=U.elements[8],v.__data[11]=U.elements[0]):(U.toArray(v.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,v.__data)}}r.bindBuffer(35345,null)}function m(S,b,E){const y=S.value;if(E[b]===void 0){if(typeof y=="number")E[b]=y;else{const P=Array.isArray(y)?y:[y],N=[];for(let v=0;v<P.length;v++)N.push(P[v].clone());E[b]=N}return!0}else if(typeof y=="number"){if(E[b]!==y)return E[b]=y,!0}else{const P=Array.isArray(E[b])?E[b]:[E[b]],N=Array.isArray(y)?y:[y];for(let v=0;v<P.length;v++){const T=P[v];if(T.equals(N[v])===!1)return T.copy(N[v]),!0}}return!1}function _(S){const b=S.uniforms;let E=0;const y=16;let P=0;for(let N=0,v=b.length;N<v;N++){const T=b[N],I={boundary:0,storage:0},K=Array.isArray(T.value)?T.value:[T.value];for(let Z=0,U=K.length;Z<U;Z++){const D=K[Z],q=p(D);I.boundary+=q.boundary,I.storage+=q.storage}if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,N>0){P=E%y;const Z=y-P;P!==0&&Z-I.boundary<0&&(E+=y-P,T.__offset=E)}E+=I.storage}return P=E%y,P>0&&(E+=y-P),S.__size=E,S.__cache={},this}function p(S){const b={boundary:0,storage:0};return typeof S=="number"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function d(S){const b=S.target;b.removeEventListener("dispose",d);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:u,dispose:g}}function sp(){const r=Fi("canvas");return r.style.display="block",r}function Ho(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:sp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tn,this.physicallyCorrectLights=!1,this.toneMapping=Wt,this.toneMappingExposure=1;const p=this;let d=!1,g=0,S=0,b=null,E=-1,y=null;const P=new ft,N=new ft;let v=null,T=e.width,I=e.height,K=1,Z=null,U=null;const D=new ft(0,0,T,I),q=new ft(0,0,T,I);let J=!1;const Q=new Tr;let X=!1,ee=!1,ie=null;const me=new at,G=new Ce,$=new L,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return b===null?K:1}let V=t;function we(M,B){for(let j=0;j<M.length;j++){const z=M[j],Y=e.getContext(z,B);if(Y!==null)return Y}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wr}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Re,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),V=we(B,M),V===null)throw we(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,ge,fe,ze,Ee,ye,Ye,Qe,qe,it,je,Ie,yt,ct,w,x,H,ne,se,ce,Se,A,F,ue;function pe(){ve=new pd(V),ge=new ld(V,ve,r),ve.init(ge),A=new Kf(V,ve,ge),fe=new $f(V,ve,ge),ze=new _d,Ee=new Of,ye=new Zf(V,ve,fe,Ee,ge,A,ze),Ye=new ud(p),Qe=new fd(p),qe=new Tc(V,ge),F=new ad(V,ve,qe,ge),it=new md(V,qe,ze,F),je=new bd(V,it,qe,ze),se=new yd(V,ge,ye),x=new cd(Ee),Ie=new Ff(p,Ye,Qe,ve,ge,F,x),yt=new np(p,Ee),ct=new Uf,w=new Hf(ve,ge),ne=new rd(p,Ye,Qe,fe,je,c,o),H=new Yf(p,je,ge),ue=new ip(V,ze,ge,fe),ce=new od(V,ve,ze,ge),Se=new gd(V,ve,ze,ge),ze.programs=Ie.programs,p.capabilities=ge,p.extensions=ve,p.properties=Ee,p.renderLists=ct,p.shadowMap=H,p.state=fe,p.info=ze}pe();const he=new tp(p,V);this.xr=he,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(T,I,!1))},this.getSize=function(M){return M.set(T,I)},this.setSize=function(M,B,j){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,I=B,e.width=Math.floor(M*K),e.height=Math.floor(B*K),j!==!1&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(T*K,I*K).floor()},this.setDrawingBufferSize=function(M,B,j){T=M,I=B,K=j,e.width=Math.floor(M*j),e.height=Math.floor(B*j),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(D)},this.setViewport=function(M,B,j,z){M.isVector4?D.set(M.x,M.y,M.z,M.w):D.set(M,B,j,z),fe.viewport(P.copy(D).multiplyScalar(K).floor())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,B,j,z){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,B,j,z),fe.scissor(N.copy(q).multiplyScalar(K).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(M){fe.setScissorTest(J=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(M=!0,B=!0,j=!0){let z=0;M&&(z|=16384),B&&(z|=256),j&&(z|=1024),V.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),ct.dispose(),w.dispose(),Ee.dispose(),Ye.dispose(),Qe.dispose(),je.dispose(),F.dispose(),ue.dispose(),Ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",de),he.removeEventListener("sessionend",C),ie&&(ie.dispose(),ie=null),k.stop()};function xe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const M=ze.autoReset,B=H.enabled,j=H.autoUpdate,z=H.needsUpdate,Y=H.type;pe(),ze.autoReset=M,H.enabled=B,H.autoUpdate=j,H.needsUpdate=z,H.type=Y}function Re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const B=M.target;B.removeEventListener("dispose",Le),ke(B)}function ke(M){R(M),Ee.remove(M)}function R(M){const B=Ee.get(M).programs;B!==void 0&&(B.forEach(function(j){Ie.releaseProgram(j)}),M.isShaderMaterial&&Ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,j,z,Y,be){B===null&&(B=re);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=jt(M,B,j,z,Y);fe.setMaterial(z,Te);let Ne=j.index,He=1;z.wireframe===!0&&(Ne=it.getWireframeAttribute(j),He=2);const Be=j.drawRange,Ge=j.attributes.position;let et=Be.start*He,wt=(Be.start+Be.count)*He;be!==null&&(et=Math.max(et,be.start*He),wt=Math.min(wt,(be.start+be.count)*He)),Ne!==null?(et=Math.max(et,0),wt=Math.min(wt,Ne.count)):Ge!=null&&(et=Math.max(et,0),wt=Math.min(wt,Ge.count));const qt=wt-et;if(qt<0||qt===1/0)return;F.setup(Y,z,Fe,j,Ne);let cn,tt=ce;if(Ne!==null&&(cn=qe.get(Ne),tt=Se,tt.setIndex(cn)),Y.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*ae()),tt.setMode(1)):tt.setMode(4);else if(Y.isLine){let Ve=z.linewidth;Ve===void 0&&(Ve=1),fe.setLineWidth(Ve*ae()),Y.isLineSegments?tt.setMode(1):Y.isLineLoop?tt.setMode(2):tt.setMode(3)}else Y.isPoints?tt.setMode(0):Y.isSprite&&tt.setMode(4);if(Y.isInstancedMesh)tt.renderInstances(et,qt,Y.count);else if(j.isInstancedBufferGeometry){const Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ms=Math.min(j.instanceCount,Ve);tt.renderInstances(et,qt,Ms)}else tt.render(et,qt)},this.compile=function(M,B){function j(z,Y,be){z.transparent===!0&&z.side===Ht&&z.forceSinglePass===!1?(z.side=gt,z.needsUpdate=!0,Je(z,Y,be),z.side=Qt,z.needsUpdate=!0,Je(z,Y,be),z.side=Ht):Je(z,Y,be)}f=w.get(M),f.init(),_.push(f),M.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(p.physicallyCorrectLights),M.traverse(function(z){const Y=z.material;if(Y)if(Array.isArray(Y))for(let be=0;be<Y.length;be++){const Te=Y[be];j(Te,M,z)}else j(Y,M,z)}),_.pop(),f=null};let W=null;function te(M){W&&W(M)}function de(){k.stop()}function C(){k.start()}const k=new Uo;k.setAnimationLoop(te),typeof self!="undefined"&&k.setContext(self),this.setAnimationLoop=function(M){W=M,he.setAnimationLoop(M),M===null?k.stop():k.start()},he.addEventListener("sessionstart",de),he.addEventListener("sessionend",C),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(B),B=he.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,B,b),f=w.get(M,_.length),f.init(),_.push(f),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(me),ee=this.localClippingEnabled,X=x.init(this.clippingPlanes,ee),h=ct.get(M,m.length),h.init(),m.push(h),le(M,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Z,U),X===!0&&x.beginShadows();const j=f.state.shadowsArray;if(H.render(j,M,B),X===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,M),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const z=B.cameras;for(let Y=0,be=z.length;Y<be;Y++){const Te=z[Y];Me(h,M,Te,Te.viewport)}}else Me(h,M,B);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(p,M,B),F.resetDefaultState(),E=-1,y=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function le(M,B,j,z){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){z&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const Te=je.update(M),Fe=M.material;Fe.visible&&h.push(M,Te,Fe,j,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ze.render.frame&&(M.skeleton.update(),M.skeleton.frame=ze.render.frame),!M.frustumCulled||Q.intersectsObject(M))){z&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const Te=je.update(M),Fe=M.material;if(Array.isArray(Fe)){const Ne=Te.groups;for(let He=0,Be=Ne.length;He<Be;He++){const Ge=Ne[He],et=Fe[Ge.materialIndex];et&&et.visible&&h.push(M,Te,et,j,$.z,Ge)}}else Fe.visible&&h.push(M,Te,Fe,j,$.z,null)}}const be=M.children;for(let Te=0,Fe=be.length;Te<Fe;Te++)le(be[Te],B,j,z)}function Me(M,B,j,z){const Y=M.opaque,be=M.transmissive,Te=M.transparent;f.setupLightsView(j),X===!0&&x.setGlobalState(p.clippingPlanes,j),be.length>0&&Oe(Y,B,j),z&&fe.viewport(P.copy(z)),Y.length>0&&Ae(Y,B,j),be.length>0&&Ae(be,B,j),Te.length>0&&Ae(Te,B,j),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Oe(M,B,j){const z=ge.isWebGL2;ie===null&&(ie=new An(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Di:En,minFilter:Ri,samples:z&&s===!0?4:0})),p.getDrawingBufferSize(G),z?ie.setSize(G.x,G.y):ie.setSize(vr(G.x),vr(G.y));const Y=p.getRenderTarget();p.setRenderTarget(ie),p.clear();const be=p.toneMapping;p.toneMapping=Wt,Ae(M,B,j),p.toneMapping=be,ye.updateMultisampleRenderTarget(ie),ye.updateRenderTargetMipmap(ie),p.setRenderTarget(Y)}function Ae(M,B,j){const z=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,be=M.length;Y<be;Y++){const Te=M[Y],Fe=Te.object,Ne=Te.geometry,He=z===null?Te.material:z,Be=Te.group;Fe.layers.test(j.layers)&&Xe(Fe,B,j,Ne,He,Be)}}function Xe(M,B,j,z,Y,be){M.onBeforeRender(p,B,j,z,Y,be),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(p,B,j,z,M,be),Y.transparent===!0&&Y.side===Ht&&Y.forceSinglePass===!1?(Y.side=gt,Y.needsUpdate=!0,p.renderBufferDirect(j,B,z,Y,M,be),Y.side=Qt,Y.needsUpdate=!0,p.renderBufferDirect(j,B,z,Y,M,be),Y.side=Ht):p.renderBufferDirect(j,B,z,Y,M,be),M.onAfterRender(p,B,j,z,Y,be)}function Je(M,B,j){B.isScene!==!0&&(B=re);const z=Ee.get(M),Y=f.state.lights,be=f.state.shadowsArray,Te=Y.state.version,Fe=Ie.getParameters(M,Y.state,be,B,j),Ne=Ie.getProgramCacheKey(Fe);let He=z.programs;z.environment=M.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(M.isMeshStandardMaterial?Qe:Ye).get(M.envMap||z.environment),He===void 0&&(M.addEventListener("dispose",Le),He=new Map,z.programs=He);let Be=He.get(Ne);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===Te)return Rt(M,Fe),Be}else Fe.uniforms=Ie.getUniforms(M),M.onBuild(j,Fe,p),M.onBeforeCompile(Fe,p),Be=Ie.acquireProgram(Fe,Ne),He.set(Ne,Be),z.uniforms=Fe.uniforms;const Ge=z.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=x.uniform),Rt(M,Fe),z.needsLights=Dn(M),z.lightsStateVersion=Te,z.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMap.value=Y.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotShadowMap.value=Y.state.spotShadowMap,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMap.value=Y.state.pointShadowMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix);const et=Be.getUniforms(),wt=fs.seqWithValue(et.seq,Ge);return z.currentProgram=Be,z.uniformsList=wt,Be}function Rt(M,B){const j=Ee.get(M);j.outputEncoding=B.outputEncoding,j.instancing=B.instancing,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function jt(M,B,j,z,Y){B.isScene!==!0&&(B=re),ye.resetTextureUnits();const be=B.fog,Te=z.isMeshStandardMaterial?B.environment:null,Fe=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Tn,Ne=(z.isMeshStandardMaterial?Qe:Ye).get(z.envMap||Te),He=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!z.normalMap&&!!j.attributes.tangent,Ge=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,wt=!!j.morphAttributes.color,qt=z.toneMapped?p.toneMapping:Wt,cn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=cn!==void 0?cn.length:0,Ve=Ee.get(z),Ms=f.state.lights;if(X===!0&&(ee===!0||M!==y)){const Et=M===y&&z.id===E;x.setState(z,M,Et)}let ut=!1;z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ms.state.version||Ve.outputEncoding!==Fe||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ne||z.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==x.numPlanes||Ve.numIntersection!==x.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Be||Ve.morphTargets!==Ge||Ve.morphNormals!==et||Ve.morphColors!==wt||Ve.toneMapping!==qt||ge.isWebGL2===!0&&Ve.morphTargetsCount!==tt)&&(ut=!0):(ut=!0,Ve.__version=z.version);let un=Ve.currentProgram;ut===!0&&(un=Je(z,B,Y));let Ur=!1,pi=!1,Ss=!1;const bt=un.getUniforms(),hn=Ve.uniforms;if(fe.useProgram(un.program)&&(Ur=!0,pi=!0,Ss=!0),z.id!==E&&(E=z.id,pi=!0),Ur||y!==M){if(bt.setValue(V,"projectionMatrix",M.projectionMatrix),ge.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),y!==M&&(y=M,pi=!0,Ss=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Et=bt.map.cameraPosition;Et!==void 0&&Et.setValue(V,$.setFromMatrixPosition(M.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&bt.setValue(V,"isOrthographic",M.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Y.isSkinnedMesh)&&bt.setValue(V,"viewMatrix",M.matrixWorldInverse)}if(Y.isSkinnedMesh){bt.setOptional(V,Y,"bindMatrix"),bt.setOptional(V,Y,"bindMatrixInverse");const Et=Y.skeleton;Et&&(ge.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),bt.setValue(V,"boneTexture",Et.boneTexture,ye),bt.setValue(V,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ws=j.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&ge.isWebGL2===!0)&&se.update(Y,j,z,un),(pi||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,bt.setValue(V,"receiveShadow",Y.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hn.envMap.value=Ne,hn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),pi&&(bt.setValue(V,"toneMappingExposure",p.toneMappingExposure),Ve.needsLights&&fi(hn,Ss),be&&z.fog===!0&&yt.refreshFogUniforms(hn,be),yt.refreshMaterialUniforms(hn,z,K,I,ie),fs.upload(V,Ve.uniformsList,hn,ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fs.upload(V,Ve.uniformsList,hn,ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&bt.setValue(V,"center",Y.center),bt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(V,"normalMatrix",Y.normalMatrix),bt.setValue(V,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Et=z.uniformsGroups;for(let Es=0,al=Et.length;Es<al;Es++)if(ge.isWebGL2){const zr=Et[Es];ue.update(zr,un),ue.bind(zr,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function fi(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Dn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,B,j){Ee.get(M.texture).__webglTexture=B,Ee.get(M.depthTexture).__webglTexture=j;const z=Ee.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,B){const j=Ee.get(M);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,j=0){b=M,g=B,S=j;let z=!0,Y=null,be=!1,Te=!1;if(M){const Ne=Ee.get(M);Ne.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),z=!1):Ne.__webglFramebuffer===void 0?ye.setupRenderTarget(M):Ne.__hasExternalTextures&&ye.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Be=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Y=Be[B],be=!0):ge.isWebGL2&&M.samples>0&&ye.useMultisampledRTT(M)===!1?Y=Ee.get(M).__webglMultisampledFramebuffer:Y=Be,P.copy(M.viewport),N.copy(M.scissor),v=M.scissorTest}else P.copy(D).multiplyScalar(K).floor(),N.copy(q).multiplyScalar(K).floor(),v=J;if(fe.bindFramebuffer(36160,Y)&&ge.drawBuffers&&z&&fe.drawBuffers(M,Y),fe.viewport(P),fe.scissor(N),fe.setScissorTest(v),be){const Ne=Ee.get(M.texture);V.framebufferTexture2D(36160,36064,34069+B,Ne.__webglTexture,j)}else if(Te){const Ne=Ee.get(M.texture),He=B||0;V.framebufferTextureLayer(36160,36064,Ne.__webglTexture,j||0,He)}E=-1},this.readRenderTargetPixels=function(M,B,j,z,Y,be,Te){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){fe.bindFramebuffer(36160,Fe);try{const Ne=M.texture,He=Ne.format,Be=Ne.type;if(He!==kt&&A.convert(He)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===Di&&(ve.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Be!==En&&A.convert(Be)!==V.getParameter(35738)&&!(Be===yn&&(ge.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-z&&j>=0&&j<=M.height-Y&&V.readPixels(B,j,z,Y,A.convert(He),A.convert(Be),be)}finally{const Ne=b!==null?Ee.get(b).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(M,B,j=0){const z=Math.pow(2,-j),Y=Math.floor(B.image.width*z),be=Math.floor(B.image.height*z);ye.setTexture2D(B,0),V.copyTexSubImage2D(3553,j,0,0,M.x,M.y,Y,be),fe.unbindTexture()},this.copyTextureToTexture=function(M,B,j,z=0){const Y=B.image.width,be=B.image.height,Te=A.convert(j.format),Fe=A.convert(j.type);ye.setTexture2D(j,0),V.pixelStorei(37440,j.flipY),V.pixelStorei(37441,j.premultiplyAlpha),V.pixelStorei(3317,j.unpackAlignment),B.isDataTexture?V.texSubImage2D(3553,z,M.x,M.y,Y,be,Te,Fe,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(3553,z,M.x,M.y,B.mipmaps[0].width,B.mipmaps[0].height,Te,B.mipmaps[0].data):V.texSubImage2D(3553,z,M.x,M.y,Te,Fe,B.image),z===0&&j.generateMipmaps&&V.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(M,B,j,z,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=M.max.x-M.min.x+1,Te=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,Ne=A.convert(z.format),He=A.convert(z.type);let Be;if(z.isData3DTexture)ye.setTexture3D(z,0),Be=32879;else if(z.isDataArrayTexture)ye.setTexture2DArray(z,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,z.flipY),V.pixelStorei(37441,z.premultiplyAlpha),V.pixelStorei(3317,z.unpackAlignment);const Ge=V.getParameter(3314),et=V.getParameter(32878),wt=V.getParameter(3316),qt=V.getParameter(3315),cn=V.getParameter(32877),tt=j.isCompressedTexture?j.mipmaps[0]:j.image;V.pixelStorei(3314,tt.width),V.pixelStorei(32878,tt.height),V.pixelStorei(3316,M.min.x),V.pixelStorei(3315,M.min.y),V.pixelStorei(32877,M.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(Be,Y,B.x,B.y,B.z,be,Te,Fe,Ne,He,tt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Be,Y,B.x,B.y,B.z,be,Te,Fe,Ne,tt.data)):V.texSubImage3D(Be,Y,B.x,B.y,B.z,be,Te,Fe,Ne,He,tt),V.pixelStorei(3314,Ge),V.pixelStorei(32878,et),V.pixelStorei(3316,wt),V.pixelStorei(3315,qt),V.pixelStorei(32877,cn),Y===0&&z.generateMipmaps&&V.generateMipmap(Be),fe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ye.setTextureCube(M,0):M.isData3DTexture?ye.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ye.setTexture2DArray(M,0):ye.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){g=0,S=0,b=null,fe.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class rp extends Ho{}rp.prototype.isWebGL1Renderer=!0;class Cr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Cr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class ap extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class op extends rt{constructor(e=null,t=1,n=1,i,s,o,a,l,u=pt,c=pt,h,f){super(null,o,a,l,u,c,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lp extends rt{constructor(e,t,n,i,s,o,a,l,u){super(e,t,n,i,s,o,a,l,u),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:vt,this.magFilter=s!==void 0?s:vt,this.generateMipmaps=!1;const c=this;function h(){c.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Lr extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new L,c=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*i;u.x=e*Math.cos(m),u.y=e*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/e+1)/2,c.y=(o[f+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}static fromJSON(e){return new Lr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class on extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),s=Math.floor(s);const c=[],h=[],f=[],m=[];let _=0;const p=[],d=n/2;let g=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(m,2));function S(){const E=new L,y=new L;let P=0;const N=(t-e)/n;for(let v=0;v<=s;v++){const T=[],I=v/s,K=I*(t-e)+e;for(let Z=0;Z<=i;Z++){const U=Z/i,D=U*l+a,q=Math.sin(D),J=Math.cos(D);y.x=K*q,y.y=-I*n+d,y.z=K*J,h.push(y.x,y.y,y.z),E.set(q,N,J).normalize(),f.push(E.x,E.y,E.z),m.push(U,1-I),T.push(_++)}p.push(T)}for(let v=0;v<i;v++)for(let T=0;T<s;T++){const I=p[T][v],K=p[T+1][v],Z=p[T+1][v+1],U=p[T][v+1];c.push(I,K,U),c.push(K,Z,U),P+=6}u.addGroup(g,P,0),g+=P}function b(E){const y=_,P=new Ce,N=new L;let v=0;const T=E===!0?e:t,I=E===!0?1:-1;for(let Z=1;Z<=i;Z++)h.push(0,d*I,0),f.push(0,I,0),m.push(.5,.5),_++;const K=_;for(let Z=0;Z<=i;Z++){const D=Z/i*l+a,q=Math.cos(D),J=Math.sin(D);N.x=T*J,N.y=d*I,N.z=T*q,h.push(N.x,N.y,N.z),f.push(0,I,0),P.x=q*.5+.5,P.y=J*.5*I+.5,m.push(P.x,P.y),_++}for(let Z=0;Z<i;Z++){const U=y+Z,D=K+Z;E===!0?c.push(D,D+1,U):c.push(D+1,D,U),v+=3}u.addGroup(g,v,E===!0?1:2),g+=v}}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends Pt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],u=[],c=[];let h=e;const f=(t-e)/i,m=new L,_=new Ce;for(let p=0;p<=i;p++){for(let d=0;d<=n;d++){const g=s+d/n*o;m.x=h*Math.cos(g),m.y=h*Math.sin(g),l.push(m.x,m.y,m.z),u.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,c.push(_.x,_.y)}h+=f}for(let p=0;p<i;p++){const d=p*(n+1);for(let g=0;g<n;g++){const S=g+d,b=S,E=S+n+1,y=S+n+2,P=S+1;a.push(b,E,P),a.push(E,y,P)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(c,2))}static fromJSON(e){return new Pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vs extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new L,f=new L,m=[],_=[],p=[],d=[];for(let g=0;g<=n;g++){const S=[],b=g/n;let E=0;g==0&&o==0?E=.5/t:g==n&&l==Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){const P=y/t;h.x=-e*Math.cos(i+P*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+P*s)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(P+E,1-b),S.push(u++)}c.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const b=c[g][S+1],E=c[g][S],y=c[g+1][S],P=c[g+1][S+1];(g!==0||o>0)&&m.push(b,E,P),(g!==n-1||l<Math.PI)&&m.push(E,y,P)}this.setIndex(m),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2))}static fromJSON(e){return new vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cp extends ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Rr extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Za={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class up{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const m=u[h],_=u[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const hp=new up;class Wo{constructor(e){this.manager=e!==void 0?e:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class jo extends Wo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Za.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Fi("img");function l(){c(),Za.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){c(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class dp extends Wo{constructor(e){super(e)}load(e,t,n,i){const s=new rt,o=new jo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Dr extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Mi extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const rr=new at,Ka=new L,Ja=new L;class fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),Ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ja),t.updateMatrixWorld(),rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pp extends fp{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $n extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zn extends Dr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qa(){return(typeof performance=="undefined"?Date:performance).now()}class eo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);const to={type:"change"},ar={type:"start"},no={type:"end"};class gp extends Rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:Fn.ROTATE,TWO:Fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ct),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(to),n.update(),s=i.NONE},this.update=function(){const A=new L,F=new Cn().setFromUnitVectors(e.up,new L(0,1,0)),ue=F.clone().invert(),pe=new L,he=new Cn,xe=2*Math.PI;return function(){const Re=n.object.position;A.copy(Re).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(N()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=n.minAzimuthAngle,ke=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(ke)&&(Le<-Math.PI?Le+=xe:Le>Math.PI&&(Le-=xe),ke<-Math.PI?ke+=xe:ke>Math.PI&&(ke-=xe),Le<=ke?a.theta=Math.max(Le,Math.min(ke,a.theta)):a.theta=a.theta>(Le+ke)/2?Math.max(Le,a.theta):Math.min(ke,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),A.setFromSpherical(a),A.applyQuaternion(ue),Re.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,h||pe.distanceToSquared(n.object.position)>o||8*(1-he.dot(n.object.quaternion))>o?(n.dispatchEvent(to),pe.copy(n.object.position),he.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",it),n.domElement.removeEventListener("wheel",yt),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ct)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new eo,l=new eo;let u=1;const c=new L;let h=!1;const f=new Ce,m=new Ce,_=new Ce,p=new Ce,d=new Ce,g=new Ce,S=new Ce,b=new Ce,E=new Ce,y=[],P={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function T(A){l.theta-=A}function I(A){l.phi-=A}const K=function(){const A=new L;return function(ue,pe){A.setFromMatrixColumn(pe,0),A.multiplyScalar(-ue),c.add(A)}}(),Z=function(){const A=new L;return function(ue,pe){n.screenSpacePanning===!0?A.setFromMatrixColumn(pe,1):(A.setFromMatrixColumn(pe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ue),c.add(A)}}(),U=function(){const A=new L;return function(ue,pe){const he=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;A.copy(xe).sub(n.target);let _e=A.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),K(2*ue*_e/he.clientHeight,n.object.matrix),Z(2*pe*_e/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(ue*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),Z(pe*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?u/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera?u*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A){f.set(A.clientX,A.clientY)}function Q(A){S.set(A.clientX,A.clientY)}function X(A){p.set(A.clientX,A.clientY)}function ee(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;T(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m),n.update()}function ie(A){b.set(A.clientX,A.clientY),E.subVectors(b,S),E.y>0?D(v()):E.y<0&&q(v()),S.copy(b),n.update()}function me(A){d.set(A.clientX,A.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),U(g.x,g.y),p.copy(d),n.update()}function G(A){A.deltaY<0?q(v()):A.deltaY>0&&D(v()),n.update()}function $(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function re(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);f.set(A,F)}}function ae(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);p.set(A,F)}}function V(){const A=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ue=Math.sqrt(A*A+F*F);S.set(0,ue)}function we(){n.enableZoom&&V(),n.enablePan&&ae()}function ve(){n.enableZoom&&V(),n.enableRotate&&re()}function ge(A){if(y.length==1)m.set(A.pageX,A.pageY);else{const ue=Se(A),pe=.5*(A.pageX+ue.x),he=.5*(A.pageY+ue.y);m.set(pe,he)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;T(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m)}function fe(A){if(y.length===1)d.set(A.pageX,A.pageY);else{const F=Se(A),ue=.5*(A.pageX+F.x),pe=.5*(A.pageY+F.y);d.set(ue,pe)}g.subVectors(d,p).multiplyScalar(n.panSpeed),U(g.x,g.y),p.copy(d)}function ze(A){const F=Se(A),ue=A.pageX-F.x,pe=A.pageY-F.y,he=Math.sqrt(ue*ue+pe*pe);b.set(0,he),E.set(0,Math.pow(b.y/S.y,n.zoomSpeed)),D(E.y),S.copy(b)}function Ee(A){n.enableZoom&&ze(A),n.enablePan&&fe(A)}function ye(A){n.enableZoom&&ze(A),n.enableRotate&&ge(A)}function Ye(A){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",qe)),ne(A),A.pointerType==="touch"?w(A):je(A))}function Qe(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):Ie(A))}function qe(A){se(A),y.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(no),s=i.NONE}function it(A){se(A)}function je(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case In.DOLLY:if(n.enableZoom===!1)return;Q(A),s=i.DOLLY;break;case In.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;X(A),s=i.PAN}else{if(n.enableRotate===!1)return;J(A),s=i.ROTATE}break;case In.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;J(A),s=i.ROTATE}else{if(n.enablePan===!1)return;X(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ar)}function Ie(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ie(A);break;case i.PAN:if(n.enablePan===!1)return;me(A);break}}function yt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(ar),G(A),n.dispatchEvent(no))}function ct(A){n.enabled===!1||n.enablePan===!1||$(A)}function w(A){switch(ce(A),y.length){case 1:switch(n.touches.ONE){case Fn.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case Fn.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),s=i.TOUCH_DOLLY_PAN;break;case Fn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ar)}function x(A){switch(ce(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(A),n.update();break;default:s=i.NONE}}function H(A){n.enabled!==!1&&A.preventDefault()}function ne(A){y.push(A)}function se(A){delete P[A.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==A.pointerId){y.splice(F,1);return}}function ce(A){let F=P[A.pointerId];F===void 0&&(F=new Ce,P[A.pointerId]=F),F.set(A.pageX,A.pageY)}function Se(A){const F=A.pointerId===y[0].pointerId?y[1]:y[0];return P[F.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",it),n.domElement.addEventListener("wheel",yt,{passive:!1}),this.update()}}const or=1/60,qo=2,_p=.03,xp=1-_p,vp=.12,yp=1.225,bn={DEXTER:"dexter",SINISTER:"sinister"},Pe={TOP:"top",LEFT:"left",BOTTOM:"bottom",RIGHT:"right"},$e={VERTICAL:"vertical",HORIZONTAL:"horizontal",OUTRIGGER:"outrigger",CROSSBAR:"crossbar",GALLERY:"gallery",AUSTRALIAN:"australian"},zt={NONE:"none",TOP_RIGHT:"topright",TOP_LEFT:"topleft"};function bp(r,e,t){const n=r*e,i=new Uint8Array(4*n),s=Math.floor(t.r*255),o=Math.floor(t.g*255),a=Math.floor(t.b*255),l=1*255;for(let c=0;c<n;c++){const h=c*4;i[h]=s,i[h+1]=o,i[h+2]=a,i[h+3]=l}const u=new op(i,r,e);return u.needsUpdate=!0,u}const Mp=`uniform sampler2D textureMap;
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
`,Sp=`varying vec2 vUV;

void main() {
    vUV = 0.75 * uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`,io={depth_frag:Mp,depth_vert:Sp};class wp extends Pt{constructor(e=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),t=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],s=[],o=[],a=[],l=1e-5,u=new L,c=new L,h=new L,f=new L,m=new L,_=t+1;for(let p=0;p<=n;p++){const d=p/n;for(let g=0;g<=t;g++){const S=g/t;e(S,d,c),s.push(c.x,c.y,c.z),S-l>=0?(e(S-l,d,h),f.subVectors(c,h)):(e(S+l,d,h),f.subVectors(h,c)),d-l>=0?(e(S,d-l,h),m.subVectors(c,h)):(e(S,d+l,h),m.subVectors(h,c)),u.crossVectors(f,m).normalize(),o.push(u.x,u.y,u.z),a.push(S,d)}}for(let p=0;p<n;p++)for(let d=0;d<t;d++){const g=p*_+d,S=p*_+d+1,b=(p+1)*_+d+1,E=(p+1)*_+d;i.push(g,S,E),i.push(S,b,E)}this.setIndex(i),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2))}}class Ep{constructor(e,t){this.position=e.clone(),this.previous=e.clone(),this.original=e.clone(),this.mass=t,this.inverseMass=1/t,this.acceleration=new L,this.tmp=new L}applyForce(e){this.acceleration.addScaledVector(e,this.inverseMass)}integrate(e){const t=this.tmp.subVectors(this.position,this.previous).multiplyScalar(xp).add(this.position).addScaledVector(this.acceleration,e);this.tmp=this.previous,this.previous=this.position,this.position=t,this.acceleration.set(0,0,0)}}const lr=new L;class _n{constructor(e,t,n){this.p1=e,this.p2=t,this.restDistance=n}resolve(){const e=this.p1,t=this.p2,n=this.restDistance;lr.subVectors(t.position,e.position);const i=lr.length();if(i===0)return;const s=lr.multiplyScalar((1-n/i)/2);e.position.add(s),t.position.sub(s)}}class Tp{constructor(e,t,n,i){const s=n*e,o=n*t,a=[],l=[],u=(p,d)=>a[p+d*(e+1)],c=(p,d,g)=>{g.set(p*s,d*o,0)},h=new L,f=i/((t+1)*(e+1));for(let p=0;p<=t;p++)for(let d=0;d<=e;d++)c(d/e,p/t,h),a.push(new Ep(h,f));for(let p=0;p<t;p++)for(let d=0;d<e;d++)l.push(new _n(u(d,p),u(d,p+1),n)),l.push(new _n(u(d,p),u(d+1,p),n));for(let p=e,d=0;d<t;d++)l.push(new _n(u(p,d),u(p,d+1),n));for(let p=t,d=0;d<e;d++)l.push(new _n(u(d,p),u(d+1,p),n));const m=Math.sqrt(n*n*2);for(let p=0;p<t;p++)for(let d=0;d<e;d++)l.push(new _n(u(d,p),u(d+1,p+1),m)),l.push(new _n(u(d+1,p),u(d,p+1),m));const _=new wp(c,e,t);_.getAttribute("position").setUsage(ic),this.xSegments=e,this.ySegments=t,this.restDistance=n,this.width=s,this.height=o,this.particles=a,this.constraints=l,this.particleAt=u,this.geometry=_}reset(){const e=this.particles;for(let t=0,n=e.length;t<n;t++){const i=e[t];i.previous.copy(i.position.copy(i.original))}}simulate(e){const t=this.particles,n=this.constraints,i=e*e;for(let s=0,o=t.length;s<o;s++)t[s].integrate(i);for(let s=0,o=qo;s<o;s++)for(let a=0,l=n.length;a<l;a++)n[a].resolve()}render(){const e=this.particles,t=this.geometry,n=t.getAttribute("position"),i=n.array;for(let s=0,o=e.length;s<o;s++){const a=e[s].position,l=s*3;i[l]=a.x,i[l+1]=a.y,i[l+2]=a.z}n.needsUpdate=!0,t.computeVertexNormals()}}const so=1.2,as=new L;class ro extends _n{resolve(){const e=this.p1,t=this.p2,n=this.restDistance*so;as.subVectors(e.position,t.position);const i=as.length()/so;as.normalize();const s=as.multiplyScalar(i-n);i>n&&t.position.add(s)}}const Xo=bp(1,1,new Ue(16777215));function Ap(r){const{width:e,height:t,mass:n,restDistance:i}=r;return new Tp(Math.max(1,Math.round(e/i)),Math.max(1,Math.round(t/i)),i,n*e*t)}function Cp(r,e){const t=r.geometry;let n=Xo,i;const s=a=>(a.needsUpdate=!0,a.anisotropy=16,a.minFilter=vt,a.magFilter=vt,a.wrapS=a.wrapT=Ft,a),o=(a,l)=>{a.encoding=We;const u=new Rr({alphaTest:.5,color:16777215,metalness:.08,roughness:.86,side:l,map:a}),c=new mt(t,u);return c.castShadow=!0,c.customDepthMaterial=new en({glslVersion:_r,uniforms:{textureMap:{value:a}},vertexShader:io.depth_vert,fragmentShader:io.depth_frag}),c.position.set(0,-r.height,0),c};return e&&e.texture&&(e.texture instanceof rt?(n=s(e.texture),e.backSideTexture instanceof rt&&(i=s(e.backSideTexture))):console.error("FlagWaver.Flag: options.texture must be an instance of THREE.Texture.")),[o(n,i?Qt:Ht),i?o(i,gt):null]}const Lp=(()=>{const r={edges:[],spacing:1};function e(t,n,i,s){const{xSegments:o,ySegments:a,particleAt:l}=t,{spacing:u}=s;switch(i){case Pe.TOP:for(let c=0;c<=o;c+=u)n.push(l(c,a));break;case Pe.LEFT:for(let c=0;c<=a;c+=u)n.push(l(0,c));break;case Pe.BOTTOM:for(let c=0;c<=o;c+=u)n.push(l(c,0));break;case Pe.RIGHT:for(let c=0;c<=a;c+=u)n.push(l(o,c));break}}return function(n,i,s){const o=Object.assign({},r,s),{edges:a}=o;if(typeof a=="string")e(n,i,a,o);else if(a&&a.length)for(let l=0,u=a.length;l<u;l++)e(n,i,a[l],o)}})(),ms=class ms{constructor(e){const t=Object.assign({},ms.defaults,e);this.cloth=Ap(t),this.pins=[],this.lengthConstraints=[];const[n,i]=Cp(this.cloth,t);this.mesh=n,this.mesh2=i,this.object=new Ze,this.object.add(this.mesh),this.mesh2&&this.object.add(this.mesh2),this.pin(t.pin)}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.customDepthMaterial.dispose(),this.mesh2&&(this.mesh2.material.dispose(),this.mesh2.material.map.dispose(),this.mesh2.customDepthMaterial.dispose())}pin(e){Lp(this.cloth,this.pins,e)}unpin(){this.pins=[]}setLengthConstraints(e){const{xSegments:t,ySegments:n,restDistance:i,particleAt:s}=this.cloth,o=[];if(e===Pe.LEFT)for(let a=0;a<=n;a++)for(let l=0;l<t;l++)o.push(new ro(s(l,a),s(l+1,a),i));else if(e===Pe.TOP)for(let a=0;a<=t;a++)for(let l=n;l>0;l--)o.push(new ro(s(a,l),s(a,l-1),i));this.lengthConstraints=o}reset(){this.cloth.reset()}simulate(e){const t=this.pins,n=this.lengthConstraints;this.cloth.simulate(e);for(let i=0,s=t.length;i<s;i++){const o=t[i];o.previous.copy(o.position.copy(o.original))}for(let i=0,s=qo;i<s;i++)for(let o=0,a=n.length;o<a;o++)n[o].resolve()}render(){this.cloth.render()}};ki(ms,"defaults",{width:1.8,height:1.2,mass:.11,restDistance:1.2/10,rigidness:1,texture:Xo,backSideTexture:null,pin:{edges:[Pe.LEFT]}});let Ln=ms;function Ir(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Pt;let u=0;for(let c=0;c<r.length;++c){const h=r[c];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,m,c),u+=m}}if(t){let c=0;const h=[];for(let f=0;f<r.length;++f){const m=r[f].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+c);c+=r[f].attributes.position.count}l.setIndex(h)}for(const c in s){const h=ao(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in o){const h=o[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<h;++f){const m=[];for(let p=0;p<o[c].length;++p)m.push(o[c][p][f]);const _=ao(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}return l}function ao(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const l=r[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new Bt(s,t,n)}function hi(r){const e=r.poleWidth/2,t=r.poleLength,n=32,i=r.poleCapSize/2,s=new on(e,e,t,n);s.translate(0,r.poleLength/2,0);const o=new on(i,i,i,n);return o.translate(0,t+i/2,0),Ir([s,o])}function Pp(r){const e=hi(r),t=r.poleWidth/2,n=r.poleLength,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=r.crossbarCapSize/2,l=r.poleTopOffset,u=new on(i,i,s,o);u.rotateZ(Math.PI/2);const c=new on(a,a,a,o),h=c.clone(),f=n-l,m=t+i;return c.rotateZ(Math.PI/2),c.translate(-s/2,f,m),h.rotateZ(-Math.PI/2),h.translate(s/2,f,m),u.translate(0,f,m),Ir([e,u,c,h])}function Rp(r){const e=hi(r),t=r.poleLength,n=r.poleCapSize/2,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=new on(i,i,s,o);return a.rotateZ(Math.PI/2),a.translate(s/2,t+n-i,0),Ir([e,a])}class ln{constructor(e){const t=Object.assign({},this.constructor.defaults,e),n=this.buildGeometry(t),i=new Rr({color:16711422,metalness:.98,roughness:.55}),s=new mt(n,i);s.receiveShadow=!0,s.castShadow=!0,this.top=new L(0,t.poleLength,0),this.mesh=s,this.object=this.mesh}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose()}buildGeometry(e){return hi(e)}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top)}}ki(ln,"defaults",(()=>{const e={};return e.flagpoleType=$e.VERTICAL,e.poleWidth=.076,e.poleLength=6,e.poleCapSize=e.poleWidth*4/3,e.crossbarWidth=e.poleWidth*2/3,e.crossbarLength=1.2,e.crossbarCapSize=e.crossbarWidth*3/2,e.poleTopOffset=.1,e})());class Dp{constructor(e){const t=Object.assign({},e),{flagpole:n,flag:i}=t;this.flagpole=n||new ln,this.flag=i||new Ln,this.flagpole.addFlag(this.flag,0),this.object=new Ze,this.object.add(this.flagpole.object),this.object.add(this.flag.object)}destroy(){this.destroyChildSubject(this.flagpole),this.destroyChildSubject(this.flag)}destroyChildSubject(e){e&&(this.object.remove(e.object),e.destroy())}reset(){this.flag.reset()}simulate(e){this.flag.simulate(e)}render(){this.flag.render()}}const Li={blowFromLeftDirection:(r,e)=>r.set(2e3,0,1e3),rotatingDirection:(r,e)=>r.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),constantSpeed:(r,e)=>r,variableSpeed:(r,e)=>r*(1+.25*Math.cos(e/7e3))};function Ip(r){return .5*yp*r*r}function Fp(r){return r.x===0&&(r.x=.001),r.y===0&&(r.y=.001),r.z===0&&(r.z=.001),r}function Op(r){return r===0?.001:r}class Yo{constructor(e){const t=Object.assign({},this.constructor.defaults,e);this.direction=t.direction,this.speed=t.speed,this.directionFn=t.directionFn,this.speedFn=t.speedFn,this.pressure=new L}update(){const e=Date.now();this.directionFn(Fp(this.pressure.copy(this.direction)),e).normalize().multiplyScalar(Ip(this.speedFn(Op(this.speed),e)))}}ki(Yo,"defaults",{direction:new L(1,0,0),speed:10,directionFn:Li.blowFromLeftDirection,speedFn:Li.constantSpeed});class Np extends ln{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength-t.poleTopOffset,t.poleWidth/2+t.crossbarWidth/2),this.verticalHoisting=t.verticalHoisting}buildGeometry(e){return Pp(e)}addFlag(e){switch(e.unpin(),this.verticalHoisting){case zt.NONE:e.pin({edges:[Pe.TOP]}),e.setLengthConstraints(Pe.TOP),e.object.position.add(this.top),e.object.position.x=-e.cloth.width/2;break;case zt.TOP_LEFT:e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.position.x=-e.cloth.height/2,e.object.rotateZ(Math.PI*3/2),e.object.rotateX(Math.PI);break;case zt.TOP_RIGHT:default:e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.position.x=e.cloth.height/2,e.object.rotateZ(Math.PI*3/2);break}}}class Up extends ln{buildGeometry(e){return Rp(e)}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT,Pe.TOP]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top)}}const zp=new L(0,0,1);class kp extends ln{constructor(e){super(e),this.top.applyAxisAngle(zp,Math.PI*3/2)}buildGeometry(e){const t=hi(e);return t.rotateZ(Math.PI*3/2),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*3/2)}}const Bp=new L(0,0,1);class Gp extends ln{constructor(e){super(e),this.top.applyAxisAngle(Bp,Math.PI*7/4)}buildGeometry(e){const t=hi(e);return t.rotateZ(Math.PI*7/4),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*7/4)}}const os=new L,oo=new L;function $o(r,e){return os.copy(r),e instanceof Ze&&(oo.setFromMatrixPosition(e.matrixWorld),os.add(oo),e.worldToLocal(os)),os}const Vp=new L(0,-9.80665,0);function Hp(r,e){const t=r.particles,n=$o(Vp,e);for(let i=0,s=t.length;i<s;i++)t[i].acceleration.add(n)}new L;const ls=new L,lo=new L;function Wp(r,e,t){return ls.subVectors(t,e),lo.subVectors(r,e),ls.cross(lo),ls.normalize(),ls}function co(r,e,t){const n=r.particles,i=r.geometry.getIndex();if(e){const s=r.restDistance*r.restDistance/2,o=$o(e.pressure,t).multiplyScalar(vp*s/3);for(let a=0,l=i.count;a<l;a+=3){const u=i.getX(a),c=i.getX(a+1),h=i.getX(a+2),f=n[u],m=n[c],_=n[h],p=Wp(f.position,m.position,_.position);p.multiplyScalar(p.dot(o)),f.applyForce(p),m.applyForce(p),_.applyForce(p)}}}class jp extends ln{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength*2/3,0)}buildGeometry(e){const t=hi(e);return t.translate(0,-e.poleLength*5/3,0),t.rotateZ(Math.PI),t}addFlag(e){e.unpin(),e.pin({edges:[Pe.LEFT]}),e.setLengthConstraints(Pe.LEFT),e.object.position.add(this.top),e.object.translateY(e.cloth.height)}}function qp(r,e){const t=Object.assign({},r);let n;switch(t.flagpoleType){case $e.HORIZONTAL:n=new kp(t);break;case $e.OUTRIGGER:n=new Gp(t);break;case $e.CROSSBAR:t.crossbarLength=t.verticalHoisting===zt.NONE?e.cloth.width:e.cloth.height,n=new Np(t);break;case $e.GALLERY:t.crossbarLength=e.cloth.width,n=new Up(t);break;case $e.AUSTRALIAN:n=new jp(t);break;case $e.VERTICAL:default:n=new ln(t);break}return n}function uo(r){switch(r){case Pe.TOP:return 0;case Pe.LEFT:return-Math.PI/2;case Pe.BOTTOM:return Math.PI;case Pe.RIGHT:return Math.PI/2;default:return 0}}const Ni=r=>!isNaN(parseFloat(r))&&isFinite(r),Xp=r=>!!(r&&typeof r=="object"),Yp=500,$p={image:null,backSideImage:null,width:"auto",height:"auto",hoisting:bn.DEXTER,orientation:Pe.TOP,resolution:256};function Zp(r,e){const t=r.width||r.videoWidth,n=r.height||r.videoHeight;if(e.width==="auto"&&e.height==="auto"){const i=Ln.defaults.height;return t<n?{width:i,height:i*n/t}:{width:i*t/n,height:i}}else return e.width==="auto"&&Ni(e.height)?{width:e.height*t/n,height:e.height}:Ni(e.width)&&e.height==="auto"?{width:e.width,height:e.width*n/t}:{width:e.width,height:e.height}}function Kp(r,e){const{width:t,height:n}=r?Zp(r,e):e;if(Ni(t)&&Ni(n)){const i=Math.min(1,Yp/Math.max(t,n));return{width:t*i,height:n*i}}else return{width:Ln.defaults.width,height:Ln.defaults.height}}function Jp(r){return r.orientation===Pe.LEFT||r.orientation===Pe.RIGHT}function Qp(r,e){const t=document.createElement("canvas"),n=t.getContext("2d"),i=r.width,s=r.height,o=Math.min(1,e.height*e.resolution/s),a=Math.round(i*o),l=Math.round(s*o);return t.width=a,t.height=l,n.drawImage(r,0,0,a,l),t}function ho(r,e,t){const n=r instanceof HTMLVideoElement?new lp(r):new rt(Qp(r,e));if(n.matrixAutoUpdate=!1,Xp(t)){const i=n.matrix;i.scale(1,1),t.reflect&&i.translate(-1,0).scale(-1,1),Ni(t.rotate)&&i.translate(-.5,-.5).rotate(-t.rotate).translate(.5,.5)}return n}function em(r){const e={};Jp(r)?(e.width=r.height,e.height=r.width):(e.width=r.width,e.height=r.height);const t=r.hoisting===bn.SINISTER;let{image:n,backSideImage:i}=r;if(t&&i){const s=n;n=i,i=s}return n&&(e.texture=ho(n,r,{reflect:i?!1:t,rotate:uo(r.orientation)})),i&&(e.backSideTexture=ho(i,r,{reflect:!0,rotate:-uo(r.orientation)})),e}function tm(r){const e=Object.assign({},$p,r);return Object.assign(e,Kp(e.image,e)),em(e)}const Zo=new jo;Zo.setCrossOrigin("anonymous");function cr(r,e,t){Zo.load(r,e,null,n=>{console.error(`FlagWaver.loadImage: Failed to load image from ${r}.`),t&&t(n)})}const Mn={day:{sky:["#4a90d9","#8fc3f2","#dcefff"],label:"Day",css:"linear-gradient(180deg, #4a90d9 0%, #8fc3f2 16%, #dcefff 30%, #dcefff 100%)",stops:["#5a9fe0","#a6d2f7","#dcefff"],fog:14479359,ground:6196298,lights:()=>{const r=new Zn(16777215,.55),e=new Mi(13625087,8034906,.35),t=new $n(16774368,6);return t.position.set(20,70,40),{ambient:[r,e],sun:t}}},sunset:{sky:["#2b2d6b","#d9706e","#ffd79a"],label:"Sunset",css:"linear-gradient(180deg, #2b2d6b 0%, #c75a6b 14%, #f6a35a 23%, #ffd79a 30%, #ffd79a 100%)",stops:["#2b2d6b","#c75a6b","#f6a35a","#ffd79a"],fog:16766874,ground:4866869,lights:()=>{const r=new Zn(16765088,.35),e=new Mi(16756864,3811898,.4),t=new $n(16752736,5.5);return t.position.set(-60,18,30),{ambient:[r,e],sun:t}}},overcast:{sky:["#8d99a6","#b8c2cc","#d7dde3"],label:"Overcast",css:"linear-gradient(180deg, #8d99a6 0%, #b8c2cc 18%, #d7dde3 30%, #d7dde3 100%)",stops:["#8d99a6","#b8c2cc","#d7dde3"],fog:14147043,ground:5662282,lights:()=>{const r=new Zn(16777215,.9),e=new Mi(14739182,6320218,.5),t=new $n(15791359,2.5);return t.position.set(10,70,20),{ambient:[r,e],sun:t}}},night:{sky:["#050816","#0c1733","#1a2a4f"],label:"Night",css:"linear-gradient(180deg, #050816 0%, #0c1733 16%, #1a2a4f 30%, #1a2a4f 100%)",stops:["#050816","#0c1733","#1a2a4f"],fog:1714767,ground:1713174,lights:()=>{const r=new Zn(8425664,.35),e=new Mi(4876992,1053720,.6),t=new $n(13161727,4);return t.position.set(-40,50,60),{ambient:[r,e],sun:t}}},studio:{sky:["#1c1c1f","#232327","#2a2a2f"],label:"Studio",css:"linear-gradient(180deg, #1c1c1f 0%, #2a2a2f 30%, #2a2a2f 100%)",stops:["#1c1c1f","#2a2a2f"],fog:2763311,ground:2894896,lights:()=>{const r=new Zn(16777215,.5),e=new Mi(16777215,4210752,.4),t=new $n(16777215,5);return t.position.set(25,60,50),{ambient:[r,e],sun:t}}},green:{sky:["#00b140","#00b140","#00b140"],label:"Green screen",css:"#00b140",stops:["#00b140","#00b140"],fog:45376,ground:45376,lights:()=>{const r=new Zn(16777215,.7),e=new $n(16777215,5);return e.position.set(25,60,50),{ambient:[r],sun:e}}}},nm=Object.keys(Mn),im=`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`,sm=`
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
}`;class rm{constructor(e=280){this.uniforms={topColor:{value:new Ue(4886745)},midColor:{value:new Ue(9421810)},horizonColor:{value:new Ue(14479359)},center:{value:new Ue(0,0,0)}};const t=new en({uniforms:this.uniforms,vertexShader:im,fragmentShader:sm,side:gt,depthWrite:!1,fog:!1});this.mesh=new mt(new vs(e,48,24),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColors(e,t,n){this.uniforms.topColor.value.set(e),this.uniforms.midColor.value.set(t),this.uniforms.horizonColor.value.set(n)}follow(e){this.mesh.position.set(e.position.x,0,e.position.z);const t=this.uniforms.center.value;t.r=e.position.x,t.g=0,t.b=e.position.z}}const fo={l:.3,r:.3,t:.4,b:.9};class am{constructor(e){this.world=e,this.active=null,this.loader=new dp,this.loader.setCrossOrigin("anonymous"),this.height=0,this.scale=1,this.distance=140,this.shadowCatcher=new mt(new Oi(1,1),new cp({opacity:.35,transparent:!0,depthWrite:!1})),this.shadowCatcher.rotation.x=-Math.PI/2,this.shadowCatcher.scale.setScalar(400),this.shadowCatcher.receiveShadow=!0,this.shadowCatcher.visible=!1,this.shadowCatcher.position.y=-.005,e.scene.add(this.shadowCatcher),this._token=0}get kind(){return this.active?this.active.def.kind:null}load(e,t){this.clear(!1);const n=++this._token,i=[t.url].concat(t.fallback?[].concat(t.fallback):[]),s=o=>new Promise((a,l)=>{this.loader.load(i[o],a,void 0,()=>{if(n!==this._token){l(new Error("superseded"));return}console.warn("[scenery] could not load",i[o]),o+1<i.length?s(o+1).then(a,l):l(new Error("Backdrop image could not be loaded (offline, blocked, or no CORS)."))})});return s(0).then(o=>{if(n!==this._token){o.dispose();return}o.encoding=We,o.anisotropy=Math.min(4,this.world.renderer.capabilities.getMaxAnisotropy());const a=o.image,l=a.width/a.height;let u=t.kind;u==="auto"&&(u=l>=3?"pano":"photo");const c={...t,kind:u};c.horizon===void 0&&(c.horizon=u==="photo"?.4:.5),c.fov===void 0&&(c.fov=32),this.active={id:e,def:c,texture:o,mesh:null,image:a,aspect:l},this._buildMesh(),this._applyEnvironment()})}clear(e=!0){this._token++,this.active&&(this.active.mesh&&(this.world.scene.remove(this.active.mesh),this.active.mesh.geometry.dispose(),this.active.mesh.material.dispose()),this.active.texture.dispose(),this.active=null),this.shadowCatcher.visible=!1,this.world.ground.visible=this.world.groundWanted,this.world.sky.mesh.visible=!0,this.world.scene.fog=this.world.defaultFog;const t=this.world.controls;t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.minPolarAngle=0,t.maxPolarAngle=Math.PI*.52,t.maxDistance=160,e&&this.world.applyPreset(this.world.presetId)}setHeight(e){this.height=e,this._layout()}setScale(e){this.scale=e,this._layout()}_buildMesh(){const{def:e,texture:t,aspect:n}=this.active;let i;if(e.kind==="photo"){const s=fo,o=new Oi(1,1),a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,-.3+a.getX(l)*(1+s.l+s.r),-.9+a.getY(l)*(1+s.t+s.b));a.needsUpdate=!0,i=new mt(o,new ti({map:t,fog:!1,side:Ht}))}else if(n>3){const o=2*Math.PI*220/n;t.wrapS=Pi,t.repeat.x=-1,i=new mt(new on(220,220,o,96,1,!0),new ti({map:t,side:gt,fog:!1})),i.userData.stripHeight=o}else t.wrapS=Pi,t.repeat.x=-1,i=new mt(new vs(220,64,32),new ti({map:t,side:gt,fog:!1}));i.renderOrder=-2,i.frustumCulled=!1,this.active.mesh=i,this.world.scene.add(i),this._layout()}_layout(){if(!this.active||!this.active.mesh)return;const{def:e,mesh:t,aspect:n}=this.active,i=2.2+this.height;if(e.kind==="photo"){const s=e.fov*this.scale*Math.PI/180,o=2*this.distance*Math.tan(s/2),a=o*n,l=fo;t.scale.set(a*(1+l.l+l.r),o*(1+l.t+l.b),1);const u=i+(.5-e.horizon)*o;t.position.set(0,u+(l.t-l.b)/2*o,-this.distance),t.rotation.set(0,0,0)}else if(t.userData.stripHeight){const s=t.userData.stripHeight;t.position.set(0,i+(.5-e.horizon)*s,0)}else t.position.set(0,i,0)}_applyEnvironment(){const{def:e,image:t}=this.active,n=this.world,i=document.createElement("canvas");i.width=32,i.height=32;const s=i.getContext("2d");s.drawImage(t,0,0,32,32);const o=s.getImageData(0,0,32,32).data,a=(c,h)=>{let f=0,m=0,_=0,p=0;for(let d=c;d<h;d++)for(let g=0;g<32;g++){const S=(d*32+g)*4;f+=o[S],m+=o[S+1],_+=o[S+2],p++}return new Ue(f/p/255,m/p/255,_/p/255).convertSRGBToLinear()},l=a(0,2),u=a(30,32);if(e.light&&n.applyPreset(e.light,{lightsOnly:!0}),n.scene.fog=null,e.kind==="photo"){n.sky.mesh.visible=!1,n.container.style.background=`#${l.clone().convertLinearToSRGB().getHexString()}`,n.ground.visible=!1,this.shadowCatcher.visible=!0;const c=n.controls;c.minAzimuthAngle=-.45,c.maxAzimuthAngle=.45,c.minPolarAngle=1.25,c.maxPolarAngle=1.62,c.maxDistance=70}else{n.sky.mesh.visible=!0,n.sky.setColors(l.clone().multiplyScalar(.85),l,l),n.ground.visible=!0,n.ground.material.color.copy(u),e.groundTint&&n.ground.material.color.lerp(new Ue(e.groundTint),.3),this.shadowCatcher.visible=!1;const c=n.controls;c.minAzimuthAngle=-1/0,c.maxAzimuthAngle=1/0,c.minPolarAngle=.2,c.maxPolarAngle=Math.PI*.52,c.maxDistance=160}}}class om{constructor(e){xt.legacyMode=!1,this.container=e,this.scene=new ap,this.scene.fog=new Cr(12573943,30,260),this.camera=new It(30,1,.1,400),this.camera.position.set(0,6,18);const t=Math.min(window.devicePixelRatio||1,2);this.renderer=new Ho({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t),this.renderer.outputEncoding=We,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=Wt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vo,e.appendChild(this.renderer.domElement),this.controls=new gp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxDistance=160,this.controls.minDistance=2,this.controls.maxPolarAngle=Math.PI*.52,this.controls.target.set(0,4.5,0),this.controls.update(),this.lights=[],this.sun=null,this.ground=new mt(new Lr(1,96),new Rr({color:6196298,roughness:1,metalness:0})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.position.y=-.01,this.scene.add(this.ground),this.sky=new rm(280),this.scene.add(this.sky.mesh),this.defaultFog=this.scene.fog,this.groundWanted=!0,this.scenery=null,this.updateCallbacks=[],this.obstructionLeft=()=>0,this.clock=new mp,this.accumulator=0,this.paused=!1,this.timeScale=1,this.scenery=new am(this),this.applyPreset("day"),this.resize(),window.addEventListener("resize",()=>this.resize()),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}onUpdate(e){this.updateCallbacks.push(e)}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.render()}applyPreset(e,t={}){const n=Mn[e]||Mn.day;this.presetId=e;const i=t.lightsOnly||this.scenery&&this.scenery.active;for(const a of this.lights)this.scene.remove(a);this.lights=[];const{ambient:s,sun:o}=n.lights();for(const a of s)this.scene.add(a),this.lights.push(a);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-5e-4,o.shadow.camera.far=400,this.scene.add(o),this.scene.add(o.target),this.lights.push(o,o.target),this.sun=o,this.defaultFog.color.setHex(n.fog),i||(this.sky.setColors(...n.sky),this.ground.material.color.setHex(n.ground),this.container.style.background=n.css),this.fitShadowToBounds(this._lastBounds)}setGroundVisible(e){this.groundWanted=e,this.scenery&&this.scenery.kind==="photo"||(this.ground.visible=e)}fitShadowToBounds(e){this._lastBounds=e;const t=new L(12,8,12),n=new L(0,4,0);e&&!e.isEmpty()&&(e.getSize(t),e.getCenter(n));const i=Math.max(t.x,t.z)*.75+8;if(this.ground.scale.setScalar(Math.max(500,i*12)),this.ground.position.x=n.x,this.ground.position.z=n.z,this.sun){const s=this.sun.shadow.camera;s.left=-i,s.right=i,s.top=i,s.bottom=-i,s.near=1,s.updateProjectionMatrix();const o=this.sun.position.clone().normalize();this.sun.position.copy(n).addScaledVector(o,Math.max(80,i*4)),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.sun.shadow.needsUpdate=!0}this.defaultFog.near=Math.max(30,i*3),this.defaultFog.far=this.defaultFog.near+200}frame(e,t=!0){if(!e||e.isEmpty())return;const n=new L,i=new L;e.getSize(n),e.getCenter(i);const s=this.camera.fov*Math.PI/180,o=this.renderer.domElement.clientWidth||window.innerWidth,a=Math.min(.6,Math.max(0,this.obstructionLeft()/o)),l=n.y/2/Math.tan(s/2),u=n.x/2/Math.tan(s/2)/this.camera.aspect/(1-a),c=Math.max(l,u)*1.15+n.z*.6+2,h=i.clone();h.y=Math.max(i.y,n.y*.55);const f=2*c*Math.tan(s/2)*this.camera.aspect;h.x-=a/2*f;const m=h.clone().add(new L(0,c*.18,c));if(!t){this.camera.position.copy(m),this.controls.target.copy(h),this.controls.update();return}const _=this.camera.position.clone(),p=this.controls.target.clone(),d=performance.now(),g=650,S=()=>{const b=Math.min(1,(performance.now()-d)/g),E=1-Math.pow(1-b,3);this.camera.position.lerpVectors(_,m,E),this.controls.target.lerpVectors(p,h,E),this.controls.update(),b<1&&requestAnimationFrame(S)};requestAnimationFrame(S)}setPaused(e){this.paused=e,e||this.clock.getDelta()}render(){this.renderer.render(this.scene,this.camera)}_loop(){requestAnimationFrame(this._loop);const e=Math.min(this.clock.getDelta(),.1);if(!this.paused){this.accumulator+=e*this.timeScale;let t=0;for(;this.accumulator>=or&&t<3;){for(const n of this.updateCallbacks)n(or);this.accumulator-=or,t++}t===3&&(this.accumulator=0)}this.controls.update(),this.sky.follow(this.camera),this.render()}screenshot(){this.render();const e=this.renderer.domElement,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d"),i=this.container.style.background;if(i&&i.startsWith("#"))n.fillStyle=i;else{const s=(Mn[this.presetId]||Mn.day).stops,o=n.createLinearGradient(0,0,0,t.height);s.forEach((a,l)=>o.addColorStop(s.length===1?0:l/(s.length-1),a)),n.fillStyle=o}return n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0),t.toDataURL("image/png")}}const ps={row:{label:"Row",place(r,e){const t=[],n=(r-1)*e;for(let i=0;i<r;i++)t.push({position:new L(-n/2+i*e,0,0),rotationY:0});return t}},arc:{label:"Arc",place(r,e){if(r===1)return[{position:new L(0,0,0),rotationY:0}];const t=Math.PI*.8,n=Math.max(e,(r-1)*e/t),i=[];for(let s=0;s<r;s++){const o=-t/2+t*s/(r-1);i.push({position:new L(Math.sin(o)*n,0,-Math.cos(o)*n+n),rotationY:0})}return i}},circle:{label:"Circle",place(r,e){if(r===1)return[{position:new L(0,0,0),rotationY:0}];const t=Math.max(e,r*e/(2*Math.PI)),n=[];for(let i=0;i<r;i++){const s=i/r*Math.PI*2;n.push({position:new L(Math.sin(s)*t,0,Math.cos(s)*t),rotationY:0})}return n}},grid:{label:"Grid",place(r,e){const t=Math.ceil(Math.sqrt(r)),n=Math.ceil(r/t),i=[];for(let s=0;s<r;s++){const o=s%t,a=Math.floor(s/t);i.push({position:new L((o-(t-1)/2)*e,0,(a-(n-1)/2)*e*1.4),rotationY:0})}return i}},vee:{label:"V formation",place(r,e){const t=[];for(let n=0;n<r;n++){const i=n%2===0?-1:1,s=Math.ceil(n/2);t.push({position:new L(i*s*e*.8,0,s*e*.9),rotationY:0})}return t}},scatter:{label:"Scatter",place(r,e){let t=1337;const n=()=>(t=t*16807%2147483647,t/2147483647),i=Math.sqrt(r)*e,s=[];for(let o=0;o<r;o++)s.push({position:new L((n()-.5)*i*1.6,0,(n()-.5)*i),rotationY:(n()-.5)*.6});return s}}},lm=Object.keys(ps),Fr={ad:"Andorra",ae:"United Arab Emirates",af:"Afghanistan",ag:"Antigua and Barbuda",al:"Albania",am:"Armenia",ao:"Angola",ar:"Argentina",at:"Austria",au:"Australia",az:"Azerbaijan",ba:"Bosnia and Herzegovina",bb:"Barbados",bd:"Bangladesh",be:"Belgium",bf:"Burkina Faso",bg:"Bulgaria",bh:"Bahrain",bi:"Burundi",bj:"Benin",bn:"Brunei",bo:"Bolivia",br:"Brazil",bs:"Bahamas",bt:"Bhutan",bw:"Botswana",by:"Belarus",bz:"Belize",ca:"Canada",cd:"DR Congo",cf:"Central African Republic",cg:"Republic of the Congo",ch:"Switzerland",ci:"Côte d'Ivoire",cl:"Chile",cm:"Cameroon",cn:"China",co:"Colombia",cr:"Costa Rica",cu:"Cuba",cv:"Cape Verde",cy:"Cyprus",cz:"Czechia",de:"Germany",dj:"Djibouti",dk:"Denmark",dm:"Dominica",do:"Dominican Republic",dz:"Algeria",ec:"Ecuador",ee:"Estonia",eg:"Egypt",er:"Eritrea",es:"Spain",et:"Ethiopia",fi:"Finland",fj:"Fiji",fm:"Micronesia",fr:"France",ga:"Gabon",gb:"United Kingdom",gd:"Grenada",ge:"Georgia",gh:"Ghana",gm:"Gambia",gn:"Guinea",gq:"Equatorial Guinea",gr:"Greece",gt:"Guatemala",gw:"Guinea-Bissau",gy:"Guyana",hn:"Honduras",hr:"Croatia",ht:"Haiti",hu:"Hungary",id:"Indonesia",ie:"Ireland",il:"Israel",in:"India",iq:"Iraq",ir:"Iran",is:"Iceland",it:"Italy",jm:"Jamaica",jo:"Jordan",jp:"Japan",ke:"Kenya",kg:"Kyrgyzstan",kh:"Cambodia",ki:"Kiribati",km:"Comoros",kn:"Saint Kitts and Nevis",kp:"North Korea",kr:"South Korea",kw:"Kuwait",kz:"Kazakhstan",la:"Laos",lb:"Lebanon",lc:"Saint Lucia",li:"Liechtenstein",lk:"Sri Lanka",lr:"Liberia",ls:"Lesotho",lt:"Lithuania",lu:"Luxembourg",lv:"Latvia",ly:"Libya",ma:"Morocco",mc:"Monaco",md:"Moldova",me:"Montenegro",mg:"Madagascar",mh:"Marshall Islands",mk:"North Macedonia",ml:"Mali",mm:"Myanmar",mn:"Mongolia",mr:"Mauritania",mt:"Malta",mu:"Mauritius",mv:"Maldives",mw:"Malawi",mx:"Mexico",my:"Malaysia",mz:"Mozambique",na:"Namibia",ne:"Niger",ng:"Nigeria",ni:"Nicaragua",nl:"Netherlands",no:"Norway",np:"Nepal",nr:"Nauru",nz:"New Zealand",om:"Oman",pa:"Panama",pe:"Peru",pg:"Papua New Guinea",ph:"Philippines",pk:"Pakistan",pl:"Poland",pt:"Portugal",pw:"Palau",py:"Paraguay",qa:"Qatar",ro:"Romania",rs:"Serbia",ru:"Russia",rw:"Rwanda",sa:"Saudi Arabia",sb:"Solomon Islands",sc:"Seychelles",sd:"Sudan",se:"Sweden",sg:"Singapore",si:"Slovenia",sk:"Slovakia",sl:"Sierra Leone",sm:"San Marino",sn:"Senegal",so:"Somalia",sr:"Suriname",ss:"South Sudan",st:"São Tomé and Príncipe",sv:"El Salvador",sy:"Syria",sz:"Eswatini",td:"Chad",tg:"Togo",th:"Thailand",tj:"Tajikistan",tl:"Timor-Leste",tm:"Turkmenistan",tn:"Tunisia",to:"Tonga",tr:"Turkey",tt:"Trinidad and Tobago",tv:"Tuvalu",tw:"Taiwan",tz:"Tanzania",ua:"Ukraine",ug:"Uganda",us:"United States",uy:"Uruguay",uz:"Uzbekistan",va:"Vatican City",vc:"Saint Vincent and the Grenadines",ve:"Venezuela",vn:"Vietnam",vu:"Vanuatu",ws:"Samoa",ye:"Yemen",za:"South Africa",zm:"Zambia",zw:"Zimbabwe",eu:"European Union",un:"United Nations",hk:"Hong Kong",pr:"Puerto Rico",gl:"Greenland","gb-eng":"England","gb-sct":"Scotland","gb-wls":"Wales",ps:"Palestine",xk:"Kosovo"},Ko=Object.keys(Fr);function Jo(r){return Fr[r]||r.toUpperCase()}function cm(r,e=1280){return`https://flagcdn.com/w${e}/${r}.png`}function um(r,e=12){const t=r.trim().toLowerCase();if(!t)return[];const n=[],i=[];for(const s of Ko){const o=Fr[s].toLowerCase();o.startsWith(t)||s===t?n.push(s):o.includes(t)&&i.push(s)}return n.concat(i).slice(0,e)}const ys={armenia:{name:"Armenia",ratio:2,ops:[["h",["#d90012","#0033a0","#f2a800"]]]},austria:{name:"Austria",ratio:1.5,ops:[["h",["#ed2939","#ffffff","#ed2939"]]]},bangladesh:{name:"Bangladesh",ratio:5/3,ops:[["rect","#006a4e",0,0,1,1],["disc","#f42a41",.45,.5,.3]]},belgium:{name:"Belgium",ratio:15/13,ops:[["v",["#000000","#fae042","#ed2939"]]]},colombia:{name:"Colombia",ratio:1.5,ops:[["rect","#fcd116",0,0,1,.5],["rect","#003893",0,.5,1,.25],["rect","#ce1126",0,.75,1,.25]]},czechia:{name:"Czechia",ratio:1.5,ops:[["h",["#ffffff","#d7141a"]],["tri","#11457e",[0,0,.5,.5,0,1]]]},denmark:{name:"Denmark",ratio:37/28,ops:[["rect","#c60c30",0,0,1,1],["cross","#ffffff",.38,.5,.14]]},estonia:{name:"Estonia",ratio:11/7,ops:[["h",["#0072ce","#000000","#ffffff"]]]},finland:{name:"Finland",ratio:18/11,ops:[["rect","#ffffff",0,0,1,1],["cross","#003580",.36,.5,.18]]},france:{name:"France",ratio:1.5,ops:[["v",["#0055a4","#ffffff","#ef4135"]]]},germany:{name:"Germany",ratio:5/3,ops:[["h",["#000000","#dd0000","#ffce00"]]]},greece:{name:"Greece",ratio:1.5,ops:[["h",["#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf"]],["rect","#0d5eaf",0,0,10/27,5/9],["cross","#ffffff",5/27,5/18,1/9]]},hungary:{name:"Hungary",ratio:2,ops:[["h",["#ce2939","#ffffff","#477050"]]]},indonesia:{name:"Indonesia",ratio:1.5,ops:[["h",["#ff0000","#ffffff"]]]},ireland:{name:"Ireland",ratio:2,ops:[["v",["#169b62","#ffffff","#ff883e"]]]},italy:{name:"Italy",ratio:1.5,ops:[["v",["#009246","#ffffff","#ce2b37"]]]},japan:{name:"Japan",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1],["disc","#bc002d",.5,.5,.3]]},latvia:{name:"Latvia",ratio:2,ops:[["rect","#9e3039",0,0,1,1],["rect","#ffffff",0,.4,1,.2]]},lithuania:{name:"Lithuania",ratio:5/3,ops:[["h",["#fdb913","#006a44","#c1272d"]]]},netherlands:{name:"Netherlands",ratio:1.5,ops:[["h",["#ae1c28","#ffffff","#21468b"]]]},nigeria:{name:"Nigeria",ratio:2,ops:[["v",["#008751","#ffffff","#008751"]]]},norway:{name:"Norway",ratio:22/16,ops:[["rect","#ba0c2f",0,0,1,1],["cross","#ffffff",.36,.5,.25],["cross","#00205b",.36,.5,.125]]},peru:{name:"Peru",ratio:1.5,ops:[["v",["#d91023","#ffffff","#d91023"]]]},poland:{name:"Poland",ratio:1.6,ops:[["h",["#ffffff","#dc143c"]]]},romania:{name:"Romania",ratio:1.5,ops:[["v",["#002b7f","#fcd116","#ce1126"]]]},russia:{name:"Russia",ratio:1.5,ops:[["h",["#ffffff","#0039a6","#d52b1e"]]]},sweden:{name:"Sweden",ratio:1.6,ops:[["rect","#006aa7",0,0,1,1],["cross","#fecc00",.375,.5,.2]]},switzerland:{name:"Switzerland",ratio:1,ops:[["rect","#da291c",0,0,1,1],["rect","#ffffff",.3125,.4,.375,.2],["rect","#ffffff",.4,.3125,.2,.375]]},thailand:{name:"Thailand",ratio:1.5,ops:[["rect","#a51931",0,0,1,1],["rect","#ffffff",0,1/6,1,4/6],["rect","#2d2a4a",0,2/6,1,2/6]]},turkey:{name:"Turkey",ratio:1.5,ops:[["rect","#e30a17",0,0,1,1],["disc","#ffffff",.4,.5,.25],["disc","#e30a17",.46,.5,.2],["star","#ffffff",.62,.5,.11,5]]},ukraine:{name:"Ukraine",ratio:1.5,ops:[["h",["#0057b7","#ffd700"]]]},vietnam:{name:"Vietnam",ratio:1.5,ops:[["rect","#da251d",0,0,1,1],["star","#ffff00",.5,.5,.3,5]]},checkered:{name:"Checkered",ratio:1.5,ops:[["check","#111111","#ffffff",6]]},rainbow:{name:"Rainbow",ratio:1.5,ops:[["h",["#e40303","#ff8c00","#ffed00","#008026","#24408e","#732982"]]]},jollyroger:{name:"Jolly Roger",ratio:1.5,ops:[["rect","#000000",0,0,1,1],["disc","#ffffff",.5,.42,.17],["rect","#ffffff",.4,.57,.2,.08],["rect","#000000",.44,.46,.04,.04],["rect","#000000",.52,.46,.04,.04],["diag","#ffffff",.06],["diag2","#ffffff",.06]]},white:{name:"White (blank)",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1]]}},hm=Object.keys(ys);function dm(r,e,t,n,i){const s=n*.382;r.beginPath();for(let o=0;o<i*2;o++){const a=o%2===0?n:s,l=-Math.PI/2+o*Math.PI/i,u=e+Math.cos(l)*a,c=t+Math.sin(l)*a;o===0?r.moveTo(u,c):r.lineTo(u,c)}r.closePath(),r.fill()}function Qo(r,e=600){const t=ys[r];if(!t)throw new Error(`Unknown simple flag: ${r}`);const n=Math.round(e*t.ratio),i=e,s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");for(const a of t.ops){const l=a[0];if(l==="h"){const u=a[1],c=i/u.length;u.forEach((h,f)=>{o.fillStyle=h,o.fillRect(0,Math.floor(f*c),n,Math.ceil(c)+1)})}else if(l==="v"){const u=a[1],c=n/u.length;u.forEach((h,f)=>{o.fillStyle=h,o.fillRect(Math.floor(f*c),0,Math.ceil(c)+1,i)})}else if(l==="rect")o.fillStyle=a[1],o.fillRect(a[2]*n,a[3]*i,a[4]*n,a[5]*i);else if(l==="disc")o.fillStyle=a[1],o.beginPath(),o.arc(a[2]*n,a[3]*i,a[4]*i,0,Math.PI*2),o.fill();else if(l==="cross"){const[,u,c,h,f]=a;o.fillStyle=u,o.fillRect(0,(h-f/2)*i,n,f*i),o.fillRect((c-f*i/(2*n))*n,0,f*i,i)}else if(l==="tri"){const u=a[2];o.fillStyle=a[1],o.beginPath(),o.moveTo(u[0]*n,u[1]*i),o.lineTo(u[2]*n,u[3]*i),o.lineTo(u[4]*n,u[5]*i),o.closePath(),o.fill()}else if(l==="star")o.fillStyle=a[1],dm(o,a[2]*n,a[3]*i,a[4]*i,a[5]);else if(l==="diag"||l==="diag2")o.strokeStyle=a[1],o.lineWidth=a[2]*i,o.beginPath(),l==="diag"?(o.moveTo(n*.3,i*.95),o.lineTo(n*.7,i*.65)):(o.moveTo(n*.7,i*.95),o.lineTo(n*.3,i*.65)),o.stroke();else if(l==="check"){const[,u,c,h]=a,f=i/h;for(let m=0;m<h;m++)for(let _=0;_<Math.ceil(n/f);_++)o.fillStyle=(_+m)%2===0?u:c,o.fillRect(_*f,m*f,f+1,f+1)}}return s}const fm="flagwaverplus",br="images";let cs=null;function pm(){return cs||(cs=new Promise((r,e)=>{if(!("indexedDB"in window)){e(new Error("IndexedDB unavailable"));return}const t=indexedDB.open(fm,1);t.onupgradeneeded=()=>t.result.createObjectStore(br),t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)}),cs)}function us(r,e){return pm().then(t=>new Promise((n,i)=>{const s=t.transaction(br,r),o=e(s.objectStore(br));s.oncomplete=()=>n(o&&o.result),s.onerror=()=>i(s.error)}))}const oi={get:r=>us("readonly",e=>e.get(r)),put:(r,e)=>us("readwrite",t=>t.put(e,r)),del:r=>us("readwrite",e=>e.delete(r)),keys:()=>us("readonly",r=>r.getAllKeys())},ni=new Map;async function el(r){if(ni.has(r))return ni.get(r);const e=await oi.get(r);if(!e)throw new Error("Stored image is missing (browser data was cleared).");return ni.set(r,e.dataUrl),e.dataUrl}async function mm(r){return oi.get(r)}async function po(r,e=1024){const t=await xm(r,e),n=`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,i=(r.name||"image").replace(/\.[^.]+$/,"");return await oi.put(n,{dataUrl:t,name:i,added:Date.now()}),ni.set(n,t),{key:n,name:i,dataUrl:t}}async function gm(r,e,t=null){return t=t||`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,await oi.put(t,{dataUrl:r,name:e,added:Date.now()}),ni.set(t,r),t}async function _m(r){try{const e=await oi.keys();for(const t of e)r.has(t)||(await oi.del(t),ni.delete(t))}catch{}}function xm(r,e){return new Promise((t,n)=>{const i=URL.createObjectURL(r),s=new Image;s.onload=()=>{URL.revokeObjectURL(i);const o=Math.min(1,e/s.width),a=Math.max(1,Math.round(s.width*o)),l=Math.max(1,Math.round(s.height*o)),u=document.createElement("canvas");u.width=a,u.height=l,u.getContext("2d").drawImage(s,0,0,a,l);const c=/png|gif|svg|webp/i.test(r.type);t(c?u.toDataURL("image/png"):u.toDataURL("image/jpeg",.9))},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("Not a readable image"))},s.src=i})}let vm=1;const Ci={height:1.2,hoisting:bn.DEXTER,orientation:Pe.TOP,flagpoleType:$e.VERTICAL,verticalHoisting:zt.TOP_RIGHT,mass:.11};function ym(r){return new Promise((e,t)=>{switch(r.type){case"simple":try{e(Qo(r.value))}catch(n){t(n)}break;case"country":cr(cm(r.value),e,()=>t(new Error(`Could not load flag for ${Jo(r.value)} (network/CORS).`)));break;case"url":case"upload":cr(r.value,e,()=>t(new Error("Image could not be loaded.")));break;case"stored":el(r.value).then(n=>cr(n,e,()=>t(new Error("Stored image could not be decoded.")))).catch(t);break;default:t(new Error(`Unknown source type ${r.type}`))}})}function hs(r){var e;switch(r.type){case"simple":return((e=ys[r.value])==null?void 0:e.name)||r.value;case"country":return Jo(r.value);case"upload":case"stored":return r.name||"Uploaded image";case"url":return r.value.replace(/^https?:\/\//,"").slice(0,32);default:return"Flag"}}class bm{constructor(e){this.world=e,this.entries=[],this.root=new Ze,e.scene.add(this.root),this.layoutId="row",this.spacing=3.2,this.wind=new Yo({speed:10}),this.windAngle=0,this.windSpeed=10,this.windMode="natural",this.externalGain=0,this.gust={enabled:!1,strength:2.2,period:4.5,width:2.5},this.ripple=!1,this.listeners=new Set,this._tmpPressure=new L,this._gustWind={pressure:this._tmpPressure},this._bounds=new li,this.selectedId=null,this.ring=new mt(new Pr(.22,.42,48),new ti({color:16734780,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.ring.visible=!1,this._applyWindSettings(),e.onUpdate(t=>this.step(t))}setSelected(e){this.selectedId=e;const t=this.getEntry(e);this.ring.parent&&this.ring.parent.remove(this.ring),t?(t.holder.add(this.ring),this.ring.visible=!0):this.ring.visible=!1}setFlagHeight(e){Ci.height=e,this.updateAllSettings({height:e})}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e,t){for(const n of this.listeners)n(e,t)}get count(){return this.entries.length}getEntry(e){return this.entries.find(t=>t.id===e)}addFlag(e,t={}){const n={id:vm++,source:e,settings:{...Ci,...t},image:null,group:null,holder:new Ze,status:"loading",error:null};return this.root.add(n.holder),this.entries.push(n),this.relayout(),this.emit("add",n),this._loadAndBuild(n),n}removeFlag(e){const t=this.entries.findIndex(i=>i.id===e);if(t===-1)return;const[n]=this.entries.splice(t,1);this._destroyGroup(n),this.selectedId===e&&this.setSelected(null),this.root.remove(n.holder),this.relayout(),this.emit("remove",n)}clear(){for(const e of[...this.entries])this.removeFlag(e.id)}duplicateFlag(e){const t=this.getEntry(e);return t?this.addFlag({...t.source},{...t.settings}):null}moveTo(e,t){const n=this.entries.findIndex(o=>o.id===e);if(n===-1)return;const[i]=this.entries.splice(n,1),s=Math.max(0,Math.min(this.entries.length,t));this.entries.splice(s,0,i),this.relayout(),this.emit("reorder")}moveFlag(e,t){const n=this.entries.findIndex(o=>o.id===e),i=n+t;if(n===-1||i<0||i>=this.entries.length)return;const s=this.entries[n];this.entries[n]=this.entries[i],this.entries[i]=s,this.relayout(),this.emit("reorder")}setSource(e,t){const n=this.getEntry(e);n&&(n.source=t,n.status="loading",this.emit("update",n),this._loadAndBuild(n))}updateSettings(e,t){const n=this.getEntry(e);n&&(Object.assign(n.settings,t),n.image&&this._build(n),this.emit("settings",n))}updateAllSettings(e){for(const t of this.entries)Object.assign(t.settings,e),t.image&&this._build(t);this.emit("update-all")}resetCloth(){for(const e of this.entries)e.group&&(e.group.reset(),e.group.render())}_loadAndBuild(e){const t=Symbol("load");e._loadToken=t,ym(e.source).then(n=>{e._loadToken===t&&(e.image=n,e.error=null,e.status="ready",this._build(e),this.emit("update",e))}).catch(n=>{e._loadToken===t&&(e.image=null,e.status="error",e.error=n.message||String(n),this._build(e),this.emit("update",e),this.emit("error",{entry:e,message:e.error}))})}_destroyGroup(e){e.group&&(e.holder.remove(e.group.object),e.group.destroy(),e.group=null)}_build(e){this._destroyGroup(e);const t=e.settings,n={mass:t.mass};e.image?Object.assign(n,tm({image:e.image,width:"auto",height:t.height,hoisting:t.hoisting,orientation:t.orientation,resolution:320})):(n.width=t.height*1.5,n.height=t.height);const i=new Ln(n),s=qp({flagpoleType:t.flagpoleType,verticalHoisting:t.verticalHoisting},i),o=new Dp({flagpole:s,flag:i});if(t.flagpoleType===$e.HORIZONTAL||t.flagpoleType===$e.OUTRIGGER){const a=s.constructor.defaults.poleLength;o.object.position.set(0,a,0).sub(s.top)}e.group=o,e.holder.add(o.object),o.reset(),o.render(),this._updateBounds()}setLayout(e){ps[e]&&(this.layoutId=e,this.relayout())}setSpacing(e){this.spacing=Math.max(.5,e),this.relayout()}relayout(){const e=this.entries.length;if(e===0){this._updateBounds();return}const t=ps[this.layoutId].place(e,this.spacing);this.entries.forEach((n,i)=>{n.holder.position.copy(t[i].position),n.holder.rotation.y=t[i].rotationY,n.holder.updateMatrixWorld(!0)}),this._updateBounds(),this.emit("layout")}_updateBounds(){const e=this._bounds.makeEmpty();for(const t of this.entries){const n=t.holder.position,i=t.settings.height,s=t.group?t.group.flag.cloth.width:i*1.5;e.expandByPoint(new L(n.x-s,0,n.z-s)),e.expandByPoint(new L(n.x+s,6.3,n.z+s))}this.world.fitShadowToBounds(e.isEmpty()?null:e)}get bounds(){return this._bounds}setWind({speed:e,angle:t,mode:n}){e!==void 0&&(this.windSpeed=e),t!==void 0&&(this.windAngle=t),n!==void 0&&(this.windMode=n),this._applyWindSettings()}_applyWindSettings(){const e=this.windAngle*Math.PI/180,t=new L(Math.cos(e),.002,Math.sin(e)+.003);switch(this.windMode){case"natural":this.wind.directionFn=Li.rotatingDirection,this.wind.speedFn=Li.variableSpeed;break;case"gusty":this.wind.directionFn=(n,i)=>n.copy(t).add(new L(.15*Math.sin(i/2300),.1*Math.sin(i/1300),.3*Math.sin(i/1700))),this.wind.speedFn=(n,i)=>n*(1+.25*Math.cos(i/7e3)+.18*Math.sin(i/1100)+.1*Math.sin(i/530));break;default:this.wind.directionFn=n=>n.copy(t),this.wind.speedFn=Li.constantSpeed}}setGust(e){Object.assign(this.gust,e)}_gustFactor(e,t){if(!this.gust.enabled||this.entries.length===0)return 1;const n=this._bounds,i=n.min.x-4,s=n.max.x+4,o=Math.max(1,s-i),a=t/this.gust.period%1,l=i+a*o,u=e-l,c=this.gust.width;return 1+this.gust.strength*Math.exp(-(u*u)/(2*c*c))}step(e){this.wind.speed=Math.max(0,this.windSpeed+this.externalGain),this.wind.update();const t=performance.now()/1e3;for(const n of this.entries){const i=n.group;if(!i)continue;const s=i.flag;Hp(s.cloth,s.object);const o=this._gustFactor(n.holder.position.x,t);o!==1?(this._tmpPressure.copy(this.wind.pressure).multiplyScalar(o),co(s.cloth,this._gustWind,s.object)):co(s.cloth,this.wind,s.object),i.simulate(e),i.render()}}toJSON(e={}){const t=n=>n==="simple"||n==="country"||n==="url";return{layout:this.layoutId,height:Ci.height,spacing:this.spacing,wind:{speed:this.windSpeed,angle:this.windAngle,mode:this.windMode},gust:{...this.gust},flags:this.entries.filter(n=>t(n.source.type)||!e.forShare&&n.source.type==="stored").map(n=>({source:n.source,settings:n.settings}))}}fromJSON(e){this.clear(),e.layout&&(this.layoutId=e.layout),e.spacing&&(this.spacing=e.spacing),e.height&&(Ci.height=e.height),e.wind&&this.setWind(e.wind),e.gust&&this.setGust(e.gust);for(const t of e.flags||[])this.addFlag(t.source,t.settings);this.relayout()}}class Mm{constructor(){this.ctx=null,this.analyser=null,this.stream=null,this.level=0,this.gain=22,this.active=!1,this._buf=null,this._raf=0}async start(){if(this.active)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.ctx=new(window.AudioContext||window.webkitAudioContext);const e=this.ctx.createMediaStreamSource(this.stream);this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.6,e.connect(this.analyser),this._buf=new Float32Array(this.analyser.fftSize),this.active=!0;const t=()=>{if(!this.active)return;this.analyser.getFloatTimeDomainData(this._buf);let n=0;for(let o=0;o<this._buf.length;o++)n+=this._buf[o]*this._buf[o];const i=Math.sqrt(n/this._buf.length),s=Math.min(1,Math.max(0,(i-.02)/.33));this.level+=(s-this.level)*(s>this.level?.35:.06),this._raf=requestAnimationFrame(t)};t()}stop(){if(this.active=!1,cancelAnimationFrame(this._raf),this.stream)for(const e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.close(),this.stream=this.ctx=this.analyser=null,this.level=0}get extraSpeed(){return this.active?this.level*this.gain:0}}const Si="https://upload.wikimedia.org/wikipedia/commons/thumb",wi="https://commons.wikimedia.org/wiki/File:",Ei=(r,e)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(r)}?width=${e}`,tl={capitol:{label:"US Capitol",kind:"photo",url:"./scenery/capitol.jpg",fallback:[`${Si}/a/a3/United_States_Capitol_west_front_edit2.jpg/2048px-United_States_Capitol_west_front_edit2.jpg`,Ei("United_States_Capitol_west_front_edit2.jpg",2048)],page:`${wi}United_States_Capitol_west_front_edit2.jpg`,credit:"Architect of the Capitol",license:"Public domain",horizon:.42,fov:32,light:"day",groundTint:7309914},bourbon:{label:"Palais Bourbon, Paris",kind:"photo",url:"./scenery/bourbon.jpg",fallback:[`${Si}/8/8d/Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg/2048px-Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,Ei("Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg",2048)],page:`${wi}Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,credit:"Jebulon",license:"CC0",horizon:.38,fov:34,light:"day",groundTint:9079428},unhq:{label:"UN Headquarters, NYC",kind:"photo",url:"./scenery/unhq.jpg",fallback:[`${Si}/f/fe/UN_Members_Flags.JPG/1600px-UN_Members_Flags.JPG`,Ei("UN_Members_Flags.JPG",1600)],page:`${wi}UN_Members_Flags.JPG`,credit:"Aotearoa",license:"CC BY-SA 3.0",horizon:.3,fov:36,light:"overcast",groundTint:8159106},sthelens:{label:"Mount St Helens summit",kind:"pano",url:"./scenery/sthelens.jpg",fallback:[`${Si}/b/b5/Mount_St_Helens_Summit_Pano.jpg/4096px-Mount_St_Helens_Summit_Pano.jpg`,Ei("Mount_St_Helens_Summit_Pano.jpg",4096)],page:`${wi}Mount_St_Helens_Summit_Pano.jpg`,credit:"Gregg M. Erickson",license:"CC BY 3.0",horizon:.55,light:"day",groundTint:14278114},kosciuszko:{label:"Mount Kosciuszko summit",kind:"pano",url:"./scenery/kosciuszko.jpg",fallback:[`${Si}/c/c2/Mount_Kosciuszko_Summit_360_panorama.jpg/4096px-Mount_Kosciuszko_Summit_360_panorama.jpg`,Ei("Mount_Kosciuszko_Summit_360_panorama.jpg",4096)],page:`${wi}Mount_Kosciuszko_Summit_360_panorama.jpg`,credit:"Toby Hudson",license:"CC BY-SA 3.0",horizon:.5,light:"day",groundTint:9083498}},Sm=Object.keys(tl);function wm(r){return btoa(unescape(encodeURIComponent(r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Em(r){const e=r.replace(/-/g,"+").replace(/_/g,"/");return decodeURIComponent(escape(atob(e+"=".repeat((4-e.length%4)%4))))}function Tm(r){return wm(JSON.stringify(r))}function Am(r){try{const e=r.replace(/^#/,"");return e?JSON.parse(Em(e)):null}catch(e){return console.warn("FlagWaverPlus: could not parse URL state",e),null}}function Cm(r){const e=Tm(r);return history.replaceState(null,"",`#${e}`),`${location.origin}${location.pathname}#${e}`}function Lm(){return Am(location.hash)}const Or="flagwaverplus.scene.v1",Mr="flagwaverplus.skipSave";let nl=!1;function Pm(){nl=!0;try{sessionStorage.setItem(Mr,"1")}catch{}}function Rm(){try{const r=sessionStorage.getItem(Mr)==="1";return sessionStorage.removeItem(Mr),r}catch{return!1}}function il(r){if(!nl)try{localStorage.setItem(Or,JSON.stringify(r))}catch{}}function Dm(){try{const r=localStorage.getItem(Or);return r?JSON.parse(r):null}catch{return null}}function Im(){try{localStorage.removeItem(Or)}catch{}}function sl(r){const e=new Set;for(const t of r.flags||[])t.source&&t.source.type==="stored"&&e.add(t.source.value);return r.sceneryStored&&e.add(r.sceneryStored),e}async function Fm(r){const e={};for(const s of sl(r)){const o=await mm(s);o&&(e[s]={dataUrl:o.dataUrl,name:o.name})}const t={app:"FlagWaverPlus",version:1,saved:new Date().toISOString(),state:r,images:e},n=new Blob([JSON.stringify(t)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=`flagwaverplus-scene-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}async function Om(r){const e=await r.text(),t=JSON.parse(e);if(!t||t.app!=="FlagWaverPlus"||!t.state)throw new Error("Not a FlagWaverPlus scene file.");for(const[n,i]of Object.entries(t.images||{}))i&&i.dataUrl&&await gm(i.dataUrl,i.name||"image",n);return t.state}const O=(r,e={},...t)=>{const n=document.createElement(r);for(const[i,s]of Object.entries(e))i==="class"?n.className=s:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),s):s!=null&&s!==!1&&n.setAttribute(i,s);for(const i of t.flat())i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n},dt=(r,e,t)=>{const n=O("option",{value:r},e);return t&&(n.selected=!0),n},mo=r=>`${r.type}:${r.value}`,go="flagwaverplus.history.v1";function Nm(r,{manager:e,world:t,mic:n,toast:i}){let s=null,o=!0;const a=[["flags","Flags"],["wind","Wind"],["scene","Scene"],["share","Share"]],l=O("nav",{class:"tabs"}),u={};for(const[C,k]of a)l.appendChild(O("button",{class:"tab","data-tab":C,onClick:()=>c(C)},k)),u[C]=O("section",{class:"page hidden","data-page":C});function c(C){l.querySelectorAll(".tab").forEach(k=>k.classList.toggle("active",k.dataset.tab===C)),Object.values(u).forEach(k=>k.classList.toggle("hidden",k.dataset.page!==C))}r.append(O("header",{class:"panel-head"},O("h1",{},"FlagWaverPlus"),O("button",{class:"collapse",title:"Hide panel (Tab)",onClick:()=>r.classList.toggle("collapsed")},"⇤")),l,...Object.values(u)),c("flags");function h(){o&&setTimeout(()=>t.frame(e.bounds),50)}const f=u.flags,m=O("input",{type:"search",placeholder:"Search a country… (Enter adds first match)",class:"search"}),_=O("div",{class:"results hidden"});function p(C,k=12){const le=um(C,k).map(Oe=>({type:"country",value:Oe})),Me=C.trim().toLowerCase();if(Me)for(const Oe of hm)ys[Oe].name.toLowerCase().includes(Me)&&le.push({type:"simple",value:Oe});return le.slice(0,k+4)}function d(){_.innerHTML="";const C=p(m.value);for(const k of C)_.appendChild(O("button",{class:"result",onClick:()=>g(k)},N(k,32,22),hs(k),k.type==="simple"?O("span",{class:"tag"},"offline"):null));_.classList.toggle("hidden",C.length===0)}m.addEventListener("input",d),m.addEventListener("keydown",C=>{if(C.key==="Enter"){const k=p(m.value,1)[0];k&&g(k)}C.key==="Escape"&&(m.value="",d())});function g(C){e.addFlag({...C}),m.value="",d(),h()}const S=O("input",{type:"file",accept:"image/*",multiple:"",class:"hidden"});S.addEventListener("change",async()=>{const C=[...S.files];S.value="";for(const k of C)try{const{key:le,name:Me}=await po(k,1024);e.addFlag({type:"stored",value:le,name:Me})}catch{e.addFlag({type:"upload",value:URL.createObjectURL(k),name:k.name.replace(/\.[^.]+$/,"")})}h()});const b=O("input",{type:"url",placeholder:"https://… image URL (must allow CORS)",class:"search"});b.addEventListener("keydown",C=>{C.key==="Enter"&&b.value.trim()&&(e.addFlag({type:"url",value:b.value.trim()}),b.value="",h())});function E(C){const k=[...Ko];for(let le=0;le<C&&k.length;le++)e.addFlag({type:"country",value:k.splice(Math.floor(Math.random()*k.length),1)[0]});h()}const y=new Map;try{for(const C of JSON.parse(localStorage.getItem(go)||"[]"))y.set(mo(C),{source:C,image:null})}catch{}function P(){try{const C=[...y.values()].map(k=>k.source).filter(k=>k.type==="country"||k.type==="simple"||k.type==="url"||k.type==="stored").slice(-60);localStorage.setItem(go,JSON.stringify(C))}catch{}}function N(C,k=40,le=26,Me=null){if(C.type==="country")return O("img",{src:`https://flagcdn.com/w80/${C.value}.png`,alt:"",loading:"lazy",width:k,height:le});const Oe=document.createElement("canvas");Oe.width=k,Oe.height=le;const Ae=Oe.getContext("2d");let Xe=Me;C.type==="simple"&&(Xe=Qo(C.value,40));const Je=Rt=>{const jt=Rt.width,fi=Rt.height,Dn=Math.min(k/jt,le/fi);Ae.clearRect(0,0,k,le),Ae.drawImage(Rt,(k-jt*Dn)/2,(le-fi*Dn)/2,jt*Dn,fi*Dn)};return Ae.fillStyle="#666",Ae.fillRect(0,0,k,le),Xe?Je(Xe):C.type==="stored"&&el(C.value).then(Rt=>{const jt=new Image;jt.onload=()=>Je(jt),jt.src=Rt}).catch(()=>{}),Oe}const v=O("div",{class:"chips"});function T(){if(v.innerHTML="",y.size===0){v.appendChild(O("span",{class:"muted small"},"Flags you add show up here for quick re-use."));return}for(const[C,k]of[...y.entries()].reverse()){const le=O("button",{class:"chip",title:`${hs(k.source)} — click to add again`,onClick:()=>{e.addFlag({...k.source}),h()}},N(k.source,40,26,k.image));le.addEventListener("contextmenu",Me=>{Me.preventDefault(),y.delete(C),P(),T()}),v.appendChild(le)}}function I(C){const k=mo(C.source),le=y.get(k);if(le){C.image&&!le.image&&(le.image=C.image,T());return}y.set(k,{source:{...C.source},image:C.image}),P(),T()}const K=O("select",{class:"select",onChange:()=>{e.setLayout(K.value),h()}},...lm.map(C=>dt(C,ps[C].label,C===e.layoutId))),Z=O("input",{type:"range",min:1.2,max:8,step:.1,value:e.spacing});Z.addEventListener("input",()=>e.setSpacing(+Z.value)),Z.addEventListener("change",h);const U=[["XS",.6],["S",.9],["M",1.2],["L",1.6],["XL",2.2],["XXL",3]],D=O("div",{class:"seg"});function q(){D.innerHTML="";for(const[C,k]of U)D.appendChild(O("button",{class:`seg-btn ${Math.abs(Ci.height-k)<1e-6?"active":""}`,title:`${k} m tall`,onClick:()=>{e.setFlagHeight(k),q(),h()}},C))}q();const J=O("input",{type:"checkbox",checked:""});J.addEventListener("change",()=>{o=J.checked});const Q=O("div",{class:"flag-list"}),X=O("div",{class:"detail hidden"});let ee=null;function ie(C){const k=document.createElement("canvas");k.width=48,k.height=32;const le=k.getContext("2d");if(C.image){const Me=C.image,Oe=Me.width,Ae=Me.height,Xe=Math.min(48/Oe,32/Ae);le.drawImage(Me,(48-Oe*Xe)/2,(32-Ae*Xe)/2,Oe*Xe,Ae*Xe)}else le.fillStyle=C.status==="error"?"#b33":"#555",le.fillRect(0,0,48,32);return k}function me(){Q.innerHTML="",e.count===0&&Q.appendChild(O("p",{class:"muted"},"No flags yet. Search a country or upload an image.")),e.entries.forEach((C,k)=>{const le=O("div",{class:`flag-row ${C.id===s?"selected":""} ${C.status}`,draggable:"true","data-id":C.id,onClick:()=>G(C.id===s?null:C.id)},O("span",{class:"grip",title:"Drag to reorder"},"⋮⋮"),O("span",{class:"idx"},k+1),ie(C),O("span",{class:"name"},hs(C.source),C.status==="loading"?" …":C.status==="error"?" ⚠":""),O("span",{class:"row-actions"},O("button",{title:"Duplicate",onClick:Me=>{Me.stopPropagation(),e.duplicateFlag(C.id),h()}},"⧉"),O("button",{title:"Remove",class:"danger",onClick:Me=>{Me.stopPropagation(),e.removeFlag(C.id),s===C.id&&G(null),h()}},"✕")));C.error&&(le.title=C.error),le.addEventListener("dragstart",Me=>{ee=C.id,le.classList.add("dragging"),Me.dataTransfer.effectAllowed="move",Me.dataTransfer.setData("text/plain",String(C.id))}),le.addEventListener("dragend",()=>{ee=null,Q.querySelectorAll(".flag-row").forEach(Me=>Me.classList.remove("dragging","drop-above","drop-below"))}),le.addEventListener("dragover",Me=>{if(ee===null||ee===C.id)return;Me.preventDefault(),Me.dataTransfer.dropEffect="move";const Oe=le.getBoundingClientRect(),Ae=Me.clientY>Oe.top+Oe.height/2;le.classList.toggle("drop-above",!Ae),le.classList.toggle("drop-below",Ae)}),le.addEventListener("dragleave",()=>le.classList.remove("drop-above","drop-below")),le.addEventListener("drop",Me=>{if(Me.preventDefault(),ee===null||ee===C.id)return;const Oe=le.getBoundingClientRect(),Ae=Me.clientY>Oe.top+Oe.height/2,Xe=e.entries.findIndex(Rt=>Rt.id===ee);let Je=e.entries.findIndex(Rt=>Rt.id===C.id)+(Ae?1:0);Xe<Je&&Je--,e.moveTo(ee,Je)}),Q.appendChild(le)})}function G(C){s=C,e.setSelected(C),me(),V()}let $=null,re=null,ae=null;function V(){const C=e.getEntry(s);if(X.classList.toggle("hidden",!C),X.innerHTML="",!C)return;const k=C.settings,le=Je=>e.updateSettings(C.id,Je),Me=O("select",{class:"select",onChange:()=>le({hoisting:Me.value})},dt(bn.DEXTER,"Pole on left (normal)",k.hoisting===bn.DEXTER),dt(bn.SINISTER,"Pole on right (mirrored)",k.hoisting===bn.SINISTER)),Oe=O("select",{class:"select",onChange:()=>le({orientation:Oe.value})},dt(Pe.TOP,"Normal",k.orientation===Pe.TOP),dt(Pe.LEFT,"Rotated 90° right",k.orientation===Pe.LEFT),dt(Pe.RIGHT,"Rotated 90° left",k.orientation===Pe.RIGHT),dt(Pe.BOTTOM,"Rotated 180°",k.orientation===Pe.BOTTOM)),Ae=O("select",{class:"select",onChange:()=>{le({flagpoleType:Ae.value}),ae.classList.toggle("hidden",Ae.value!==$e.CROSSBAR)}},dt($e.VERTICAL,"Vertical pole",k.flagpoleType===$e.VERTICAL),dt($e.HORIZONTAL,"Horizontal pole",k.flagpoleType===$e.HORIZONTAL),dt($e.OUTRIGGER,"Outrigger (angled from wall)",k.flagpoleType===$e.OUTRIGGER),dt($e.CROSSBAR,"Crossbar (hangs from a bar)",k.flagpoleType===$e.CROSSBAR),dt($e.GALLERY,"Gallery (banner on a bar)",k.flagpoleType===$e.GALLERY)),Xe=O("select",{class:"select",onChange:()=>le({verticalHoisting:Xe.value})},dt(zt.TOP_RIGHT,"Turn flag 90° right",k.verticalHoisting===zt.TOP_RIGHT),dt(zt.TOP_LEFT,"Turn flag 90° left",k.verticalHoisting===zt.TOP_LEFT),dt(zt.NONE,"Keep upright (hang by top edge)",k.verticalHoisting===zt.NONE));ae=O("div",{class:`hang ${k.flagpoleType===$e.CROSSBAR?"":"hidden"}`},O("p",{class:"muted small"},"Crossbar hanging: a flag hung from a horizontal bar is normally turned on its side so the hoist edge is at the top (vexillological convention). Pick which way to turn it, or keep it upright."),Xe),$=O("h3",{}),re=O("p",{class:"error hidden"}),X.append($,re,O("label",{class:"field"},"Pole side",Me),O("label",{class:"field"},"Rotation",Oe),O("label",{class:"field"},"Pole type",Ae),ae,O("div",{class:"tool-row"},O("button",{onClick:()=>{e.updateAllSettings({hoisting:k.hoisting,orientation:k.orientation,flagpoleType:k.flagpoleType,verticalHoisting:k.verticalHoisting}),i("Applied to all flags")}},"Apply to all"),O("button",{onClick:()=>{e.duplicateFlag(C.id),h()}},"Duplicate"),O("span",{class:"spacer"}),O("button",{class:"danger",onClick:()=>{e.removeFlag(C.id),G(null),h()}},"Remove"))),we()}function we(){const C=e.getEntry(s);!C||!$||($.textContent=`Editing flag ${e.entries.indexOf(C)+1}: ${hs(C.source)}`,re.textContent=C.error||"",re.classList.toggle("hidden",!C.error))}e.on((C,k)=>{C==="add"&&I(k),C==="update"&&k&&I(k),["add","remove","update","reorder","update-all"].includes(C)&&(s!==null&&!e.getEntry(s)&&(s=null,e.setSelected(null),X.classList.add("hidden")),me(),we()),C==="settings"&&k&&k.id}),f.append(O("div",{class:"block"},O("h2",{},"Add flags"),m,_,O("div",{class:"tool-row"},O("button",{onClick:()=>S.click()},"Upload image(s)"),O("button",{onClick:()=>E(5)},"🎲 5 random"),S),b,O("p",{class:"muted small"},"Recently used (click to add again, right-click to forget):"),v),O("div",{class:"block"},O("h2",{},"Arrangement"),O("label",{class:"field"},"Layout",K),O("label",{},"Spacing ",Z),O("label",{class:"field"},"Flag size",D),O("div",{class:"tool-row"},O("button",{onClick:()=>t.frame(e.bounds)},"Frame all"),O("label",{class:"row"},J," auto-frame"),O("span",{class:"spacer"}),O("button",{class:"danger",onClick:()=>{e.clear(),G(null)}},"Clear all"))),O("div",{class:"block"},O("h2",{},"Your flags"),O("p",{class:"muted small"},"Click a flag to edit it. Drag rows to reorder."),Q,X)),me(),T();const ve=u.wind,ge=O("input",{type:"range",min:0,max:30,step:.5,value:e.windSpeed}),fe=O("span",{class:"val"},`${e.windSpeed} m/s`);ge.addEventListener("input",()=>{e.setWind({speed:+ge.value}),fe.textContent=`${ge.value} m/s`});const ze=O("input",{type:"range",min:-180,max:180,step:5,value:e.windAngle}),Ee=O("span",{class:"val"},`${e.windAngle}°`);ze.addEventListener("input",()=>{e.setWind({angle:+ze.value}),Ee.textContent=`${ze.value}°`});const ye=O("label",{},"Direction ",ze,Ee),Ye=O("select",{class:"select",onChange:()=>{e.setWind({mode:Ye.value}),ye.classList.toggle("disabled",Ye.value==="natural")}},dt("natural","Natural — wandering direction, varying speed (FlagWaver default)",e.windMode==="natural"),dt("gusty","Gusty — fixed direction, turbulent",e.windMode==="gusty"),dt("steady","Steady — fixed direction, constant",e.windMode==="steady"));ye.classList.toggle("disabled",e.windMode==="natural");const Qe=O("input",{type:"checkbox"}),qe=O("input",{type:"range",min:.5,max:5,step:.1,value:e.gust.strength}),it=O("input",{type:"range",min:1.5,max:12,step:.5,value:e.gust.period}),je=O("input",{type:"range",min:.8,max:8,step:.2,value:e.gust.width});Qe.addEventListener("change",()=>e.setGust({enabled:Qe.checked})),qe.addEventListener("input",()=>e.setGust({strength:+qe.value})),it.addEventListener("input",()=>e.setGust({period:+it.value})),je.addEventListener("input",()=>e.setGust({width:+je.value}));const Ie=O("button",{class:"btn-primary"},"🎤 Blow into mic"),yt=O("div",{class:"meter"},O("div",{class:"meter-fill"})),ct=O("input",{type:"range",min:5,max:40,step:1,value:n.gain});ct.addEventListener("input",()=>{n.gain=+ct.value}),Ie.addEventListener("click",async()=>{if(n.active){n.stop(),Ie.textContent="🎤 Blow into mic",Ie.classList.remove("live");return}try{await n.start(),Ie.textContent="■ Stop mic",Ie.classList.add("live"),i("Mic on — blow or shout to make wind")}catch{i("Microphone access denied or unavailable","error")}}),function C(){yt.firstChild.style.width=`${Math.round(n.level*100)}%`,requestAnimationFrame(C)}(),ve.append(O("div",{class:"block"},O("h2",{},"Wind"),O("label",{class:"field"},"Mode",Ye),O("label",{},"Speed ",ge,fe),ye),O("div",{class:"block"},O("h2",{},"Travelling gust"),O("p",{class:"muted small"},"A pulse of wind sweeps along the line of flags so they ripple one after another."),O("label",{class:"row"},Qe," Enable gust sweep"),O("label",{},"Strength ",qe),O("label",{},"Period (s) ",it),O("label",{},"Width (m) ",je)),O("div",{class:"block"},O("h2",{},"Lung power"),O("p",{class:"muted small"},"Uses your microphone loudness as wind. Nothing is recorded."),Ie,yt,O("label",{},"Mic gain ",ct)));const w=u.scene,x=O("div",{class:"presets"});for(const C of nm)x.appendChild(O("button",{class:`preset-btn ${C===t.presetId?"active":""}`,"data-id":C,onClick:()=>{t.applyPreset(C),x.querySelectorAll(".preset-btn").forEach(k=>k.classList.toggle("active",k.dataset.id===C))}},O("span",{class:"swatch-bg",style:`background:${Mn[C].css}`}),Mn[C].label));const H=O("input",{type:"checkbox",checked:""});H.addEventListener("change",()=>t.setGroundVisible(H.checked));const ne=O("button",{onClick:()=>se()},"⏸ Pause");function se(){t.setPaused(!t.paused),ne.textContent=t.paused?"▶ Play":"⏸ Pause"}const ce=O("input",{type:"range",min:.1,max:2,step:.05,value:1});ce.addEventListener("input",()=>{t.timeScale=+ce.value});const Se=O("button",{onClick:()=>{const C=O("a",{href:t.screenshot(),download:`flagwaverplus-${Date.now()}.png`});document.body.appendChild(C),C.click(),C.remove()}},"📷 Screenshot"),A=O("div",{class:"scenery-grid"}),F=O("p",{class:"muted small credit"}),ue=O("input",{type:"range",min:-6,max:6,step:.25,value:0}),pe=O("input",{type:"range",min:.5,max:2.5,step:.05,value:1}),he=O("div",{class:"hidden"},O("label",{},"Backdrop height ",ue),O("label",{class:"photo-only"},"Backdrop size ",pe));ue.addEventListener("input",()=>t.scenery.setHeight(+ue.value)),pe.addEventListener("input",()=>t.scenery.setScale(+pe.value));let xe=null,_e=null;function Re(C){A.querySelectorAll(".scenery-btn").forEach(le=>le.classList.toggle("active",le.dataset.id===(C||"none")));const k=t.scenery.active;he.classList.toggle("hidden",!k),he.querySelector(".photo-only").classList.toggle("hidden",!k||k.def.kind!=="photo"),F.innerHTML="",k&&k.def.credit?F.append("Photo: ",k.def.page?O("a",{href:k.def.page,target:"_blank",rel:"noopener"},k.def.credit):k.def.credit,` · ${k.def.license} · via Wikimedia Commons`):k&&(F.textContent="Custom backdrop (not included in share links unless it is a URL)."),x.querySelectorAll(".preset-btn").forEach(le=>le.classList.toggle("active",le.dataset.id===t.presetId))}async function Le(C,k,le=null,Me=null){if(!C){t.scenery.clear(),xe=null,_e=null,Re(null);return}A.querySelectorAll(".scenery-btn").forEach(Oe=>Oe.classList.toggle("loading",Oe.dataset.id===C));try{await t.scenery.load(C,k),xe=le,_e=Me,ue.value=0,pe.value=1,t.scenery.setHeight(0),t.scenery.setScale(1),Re(C),o&&setTimeout(()=>t.frame(e.bounds),50)}catch(Oe){i(Oe.message,"error",5e3),Re(null)}finally{A.querySelectorAll(".scenery-btn").forEach(Oe=>Oe.classList.remove("loading"))}}A.appendChild(O("button",{class:"scenery-btn active","data-id":"none",onClick:()=>Le(null)},O("span",{class:"scenery-kind"},"sky"),"None (gradient)"));for(const C of Sm){const k=tl[C];A.appendChild(O("button",{class:"scenery-btn","data-id":C,title:`${k.label} — ${k.credit}, ${k.license}`,onClick:()=>Le(C,k)},O("span",{class:"scenery-kind"},k.kind==="pano"?"360°":"photo"),k.label))}const ke=O("input",{type:"file",accept:"image/*",class:"hidden"});ke.addEventListener("change",async()=>{const C=ke.files[0];if(ke.value="",!!C)try{const{key:k,dataUrl:le}=await po(C,4096);Le("custom",{kind:"auto",url:le,label:C.name},null,k)}catch{Le("custom",{kind:"auto",url:URL.createObjectURL(C),label:C.name})}});const R=O("input",{type:"url",placeholder:"https://… photo or 360° panorama URL (CORS)",class:"search"});R.addEventListener("keydown",C=>{if(C.key==="Enter"&&R.value.trim()){const k=R.value.trim();Le("custom",{kind:"auto",url:k,label:k},k)}}),w.append(O("div",{class:"block"},O("h2",{},"Scenery"),O("p",{class:"muted small"},"Puts the flags in front of a place. Images load only when picked (under 1 MB each) and are swapped out, never stacked. A wide strip is treated as a 360° panorama, anything else as a photo backdrop."),A,O("div",{class:"tool-row"},O("button",{onClick:()=>ke.click()},"Upload photo / panorama"),ke),R,he,F),O("div",{class:"block"},O("h2",{},"Sky & light"),x,O("label",{class:"row"},H," Show ground")),O("div",{class:"block"},O("h2",{},"Time"),O("div",{class:"tool-row"},ne,O("button",{onClick:()=>e.resetCloth()},"Reset cloth")),O("label",{},"Speed ",ce)),O("div",{class:"block"},O("h2",{},"Export"),Se,O("p",{class:"muted small"},"Drag to orbit, scroll to zoom, right-drag to pan. Space pauses, Tab hides this panel.")));const W=O("input",{type:"text",readonly:"",class:"search"}),te=O("button",{class:"btn-primary",onClick:async()=>{const C=Cm(getState({forShare:!0}));W.value=C;try{await navigator.clipboard.writeText(C),i("Link copied")}catch{i("Link ready — copy it from the box")}const k=e.entries.filter(le=>le.source.type==="upload"||le.source.type==="stored").length;k&&i(`${k} uploaded flag(s) can't go in a link — use a scene file for those`,"warn",4500)}},"🔗 Copy share link"),de=O("input",{type:"file",accept:"application/json,.json",class:"hidden"});return de.addEventListener("change",async()=>{const C=de.files[0];if(de.value="",!!C)try{const k=await Om(C);await loadStateFromFile(k),i("Scene loaded")}catch(k){i(k.message||"Could not read scene file","error",5e3)}}),u.share.append(O("div",{class:"block"},O("h2",{},"Scene file"),O("p",{class:"muted small"},"Everything — flags (uploaded images included), arrangement, wind, sky and backdrop — in one .json you can keep or send. The scene also autosaves in this browser and comes back when you reopen the page."),O("div",{class:"tool-row"},O("button",{class:"btn-primary",onClick:()=>Fm(getState()).catch(()=>i("Export failed","error"))},"⬇ Save scene file"),O("button",{onClick:()=>de.click()},"⬆ Load scene file"),de,O("span",{class:"spacer"}),O("button",{class:"danger",title:"Forget the autosaved scene and start from the default flags",onClick:()=>{Pm(),Im(),window.history.replaceState(null,"",location.pathname),location.reload()}},"Reset"))),O("div",{class:"block"},O("h2",{},"Share this scene"),O("p",{class:"muted small"},"Encodes countries, offline flags, image URLs, layout and wind into the URL. Uploaded images stay on your machine."),te,W),O("div",{class:"block about"},O("h2",{},"Credits"),O("p",{},"Cloth and flagpole simulation from ",O("a",{href:"https://github.com/krikienoid/flagwaver",target:"_blank",rel:"noopener"},"FlagWaver")," by ",O("a",{href:"https://github.com/krikienoid",target:"_blank",rel:"noopener"},"krikienoid")," (MIT), itself based on earlier work by ",O("a",{href:"http://flagtest.nz/",target:"_blank",rel:"noopener"},"flagtest.nz")," and ",O("a",{href:"https://github.com/zz85",target:"_blank",rel:"noopener"},"Joshua Koo"),". Rendering by ",O("a",{href:"https://threejs.org",target:"_blank",rel:"noopener"},"three.js"),"."),O("p",{},"Country flags from ",O("a",{href:"https://flagcdn.com",target:"_blank",rel:"noopener"},"flagcdn.com"),". Scenery photos from Wikimedia Commons: Architect of the Capitol (public domain), Jebulon (CC0), Aotearoa (CC BY-SA 3.0), Gregg M. Erickson (CC BY 3.0), Toby Hudson (CC BY-SA 3.0) — each is linked in the Scene tab when active."),O("p",{},"Multi-flag scenes, layouts, gust, mic wind, scenery, persistence and UI: this project. ",O("a",{href:"https://github.com/codegrox/codegrox.github.io/tree/main/projects/FlagWaverPlus",target:"_blank",rel:"noopener"},"Source")," · ",O("a",{href:"../../"},"← codegrox.github.io")))),window.addEventListener("keydown",C=>{C.target.matches("input, textarea, select")||(C.code==="Space"&&(C.preventDefault(),se()),C.code==="Tab"&&(C.preventDefault(),r.classList.toggle("collapsed")),C.code==="Escape"&&G(null))}),{showTab:c,select:G,renderList:me,getState,applyState,loadStateFromFile}}function Um(r){return function(t,n="info",i=3200){const s=document.createElement("div");s.className=`toast toast-${n}`,s.textContent=t,r.appendChild(s),requestAnimationFrame(()=>s.classList.add("show")),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},i)}}const zm=document.getElementById("stage"),Sr=document.getElementById("panel"),rl=Um(document.getElementById("toasts")),di=new om(zm);di.obstructionLeft=()=>window.innerWidth>720&&!Sr.classList.contains("collapsed")?Sr.offsetWidth+24:0;const Pn=new bm(di),Nr=new Mm;di.onUpdate(()=>{Pn.externalGain=Nr.extraSpeed});Pn.on((r,e)=>{r==="error"&&rl(e.message,"error",4500)});const bs=Nm(Sr,{manager:Pn,world:di,mic:Nr,toast:rl}),ur=Lm(),hr=Rm()?null:Dm(),dr=ur&&Array.isArray(ur.flags)?ur:hr&&Array.isArray(hr.flags)?hr:null;if(dr)Pn.fromJSON(dr),bs.applyState(dr);else for(const r of[{type:"simple",value:"japan"},{type:"simple",value:"armenia"},{type:"country",value:"us"},{type:"simple",value:"france"},{type:"country",value:"hk"}])Pn.addFlag(r);setTimeout(()=>di.frame(Pn.bounds,!1),60);let _o="";setInterval(()=>{const r=bs.getState(),e=JSON.stringify(r);e!==_o&&(_o=e,il(r))},1500);window.addEventListener("beforeunload",()=>il(bs.getState()));setTimeout(()=>{const r=sl(bs.getState());try{for(const e of JSON.parse(localStorage.getItem("flagwaverplus.history.v1")||"[]"))e.type==="stored"&&r.add(e.value)}catch{}_m(r)},8e3);window.flagwaverplus={world:di,manager:Pn,mic:Nr};
