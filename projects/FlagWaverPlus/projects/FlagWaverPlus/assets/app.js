var ol=Object.defineProperty;var ll=(r,e,t)=>e in r?ol(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ni=(r,e,t)=>ll(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="149",Fn={ROTATE:0,DOLLY:1,PAN:2},On={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cl=0,Gr=1,ul=2,yo=1,bo=2,Ei=3,nn=0,bt=1,tn=2,cn=0,ei=1,Vr=2,Hr=3,Wr=4,hl=5,Jn=100,dl=101,fl=102,jr=103,qr=104,pl=200,ml=201,gl=202,_l=203,Mo=204,So=205,xl=206,vl=207,yl=208,bl=209,Ml=210,Sl=0,wl=1,El=2,pr=3,Tl=4,Al=5,Cl=6,Ll=7,wo=0,Pl=1,Rl=2,qt=0,Dl=1,Il=2,Fl=3,Ol=4,Nl=5,Eo=300,ii=301,si=302,mr=303,gr=304,ms=306,ds=1e3,Nt=1001,_r=1002,gt=1003,Xr=1004,As=1005,vt=1006,Ul=1007,Li=1008,Tn=1009,zl=1010,kl=1011,To=1012,Bl=1013,bn=1014,Mn=1015,Pi=1016,Gl=1017,Vl=1018,ti=1020,Hl=1021,Gt=1023,Wl=1024,jl=1025,wn=1026,ri=1027,ql=1028,Xl=1029,Yl=1030,$l=1031,Zl=1033,Cs=33776,Ls=33777,Ps=33778,Rs=33779,Yr=35840,$r=35841,Zr=35842,Kr=35843,Kl=36196,Jr=37492,Qr=37496,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ua=37818,ha=37819,da=37820,fa=37821,Ds=36492,Jl=36283,pa=36284,ma=36285,ga=36286,An=3e3,je=3001,Ql=3200,ec=3201,Ao=0,tc=1,Wt="srgb",Ri="srgb-linear",Is=7680,nc=519,_a=35044,ic=35040,xr="300 es",vr=1035;class In{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fs=Math.PI/180,xa=180/Math.PI;function Fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function sc(r,e){return(r%e+e)%e}function Os(r,e,t){return(1-t)*r+t*e}function va(r){return(r&r-1)===0&&r!==0}function yr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],S=i[1],M=i[4],w=i[7],y=i[2],P=i[5],O=i[8];return s[0]=o*p+a*S+c*y,s[3]=o*d+a*M+c*P,s[6]=o*g+a*w+c*O,s[1]=l*p+u*S+h*y,s[4]=l*d+u*M+h*P,s[7]=l*g+u*w+h*O,s[2]=f*p+m*S+_*y,s[5]=f*d+m*M+_*P,s[8]=f*g+m*w+_*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,m=l*s-o*c,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new It;function Co(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Di(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function En(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Us={[Wt]:{[Ri]:En},[Ri]:{[Wt]:cs}},xt={legacyMode:!0,get workingColorSpace(){return Ri},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Us[e]&&Us[e][t]!==void 0){const n=Us[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},Ut={h:0,s:0,l:0},zi={h:0,s:0,l:0};function zs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ki(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=sc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zs(o,s,e+1/3),this.g=zs(o,s,e),this.b=zs(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Wt){const n=Lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return xt.fromWorkingColorSpace(ki(this,ot),e),Tt(ot.r*255,0,255)<<16^Tt(ot.g*255,0,255)<<8^Tt(ot.b*255,0,255)<<0}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(ki(this,ot),t);const n=ot.r,i=ot.g,s=ot.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(ki(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Wt){return xt.fromWorkingColorSpace(ki(this,ot),e),e!==Wt?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(zi);const n=Os(Ut.h,zi.h,t),i=Os(Ut.s,zi.s,t),s=Os(Ut.l,zi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=Lo;let Nn;class Po{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nn===void 0&&(Nn=Di("canvas")),Nn.width=e.width,Nn.height=e.height;const n=Nn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Di("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=En(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ro{constructor(e=null){this.isSource=!0,this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ks(i[o].image)):s.push(ks(i[o]))}else s=ks(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ks(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Po.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rc=0;class lt extends In{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=Nt,i=Nt,s=vt,o=Li,a=Gt,c=Tn,l=lt.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Fi(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=Eo;lt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],_=c[9],p=c[2],d=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,w=(m+1)/2,y=(g+1)/2,P=(u+f)/4,O=(h+p)/4,v=(_+d)/4;return M>w&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=P/n,s=O/n):w>y?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=P/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=O/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-_)*(d-_)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-_)/S,this.y=(h-p)/S,this.z=(f-u)/S,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cn extends In{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(h!==p||c!==f||l!==m||u!==_){let d=1-a;const g=c*f+l*m+u*_+h*p,S=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const y=Math.sqrt(M),P=Math.atan2(y,g*S);d=Math.sin(d*P)/y,a=Math.sin(a*P)/y}const w=a*S;if(c=c*d+f*w,l=l*d+m*w,u=u*d+_*w,h=h*d+p*w,d===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*m-l*f,e[t+1]=c*_+u*f+l*h-a*m,e[t+2]=l*_+u*m+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"YZX":this._x=f*u*h+l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h-f*m*_;break;case"XZY":this._x=f*u*h-l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new L,ya=new Ln;class li{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)pn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox),Gs.applyMatrix4(e.matrixWorld),this.union(Gs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Bi.subVectors(this.max,pi),Un.subVectors(e.a,pi),zn.subVectors(e.b,pi),kn.subVectors(e.c,pi),sn.subVectors(zn,Un),rn.subVectors(kn,zn),mn.subVectors(Un,kn);let t=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-mn.z,mn.y,sn.z,0,-sn.x,rn.z,0,-rn.x,mn.z,0,-mn.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-mn.y,mn.x,0];return!Vs(t,Un,zn,kn,Bi)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,Un,zn,kn,Bi))?!1:(Gi.crossVectors(sn,rn),t=[Gi.x,Gi.y,Gi.z],Vs(t,Un,zn,kn,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,Gs=new li,Un=new L,zn=new L,kn=new L,sn=new L,rn=new L,mn=new L,pi=new L,Bi=new L,Gi=new L,gn=new L;function Vs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gn.fromArray(r,s);const a=i.x*Math.abs(gn.x)+i.y*Math.abs(gn.y)+i.z*Math.abs(gn.z),c=e.dot(gn),l=t.dot(gn),u=n.dot(gn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const oc=new li,mi=new L,Hs=new L;class Ar{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Hs)),this.expandByPoint(mi.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new L,Ws=new L,Vi=new L,an=new L,js=new L,Hi=new L,qs=new L;class lc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.direction).multiplyScalar(t).add(this.origin),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ws.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Ws);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vi),a=an.dot(this.direction),c=-an.dot(Vi),l=an.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*c-a,f=o*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Vi).multiplyScalar(f).add(Ws),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),i=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,i,s){js.subVectors(t,e),Hi.subVectors(n,e),qs.crossVectors(js,Hi);let o=this.direction.dot(qs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,e);const c=a*this.direction.dot(Hi.crossVectors(an,Hi));if(c<0)return null;const l=a*this.direction.dot(js.cross(an));if(l<0||c+l>o)return null;const u=-a*an.dot(qs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,h,f,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),o=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,_=l*u,p=l*h;t[0]=f+p*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,_=l*u,p=l*h;t[0]=f-p*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,p=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=f*l+p,t[1]=c*h,t[5]=p*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*u,t[4]=p-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+p,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cc,e,uc)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),on.crossVectors(n,Pt),on.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),on.crossVectors(n,Pt)),on.normalize(),Wi.crossVectors(Pt,on),i[0]=on.x,i[4]=Wi.x,i[8]=Pt.x,i[1]=on.y,i[5]=Wi.y,i[9]=Pt.y,i[2]=on.z,i[6]=Wi.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],S=n[3],M=n[7],w=n[11],y=n[15],P=i[0],O=i[4],v=i[8],T=i[12],I=i[1],K=i[5],$=i[9],z=i[13],D=i[2],q=i[6],J=i[10],Q=i[14],Y=i[3],te=i[7],ie=i[11],me=i[15];return s[0]=o*P+a*I+c*D+l*Y,s[4]=o*O+a*K+c*q+l*te,s[8]=o*v+a*$+c*J+l*ie,s[12]=o*T+a*z+c*Q+l*me,s[1]=u*P+h*I+f*D+m*Y,s[5]=u*O+h*K+f*q+m*te,s[9]=u*v+h*$+f*J+m*ie,s[13]=u*T+h*z+f*Q+m*me,s[2]=_*P+p*I+d*D+g*Y,s[6]=_*O+p*K+d*q+g*te,s[10]=_*v+p*$+d*J+g*ie,s[14]=_*T+p*z+d*Q+g*me,s[3]=S*P+M*I+w*D+y*Y,s[7]=S*O+M*K+w*q+y*te,s[11]=S*v+M*$+w*J+y*ie,s[15]=S*T+M*z+w*Q+y*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*m-n*c*m)+p*(+t*c*m-t*l*f+s*o*f-i*o*m+i*l*u-s*c*u)+d*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+g*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],S=h*d*l-p*f*l+p*c*m-a*d*m-h*c*g+a*f*g,M=_*f*l-u*d*l-_*c*m+o*d*m+u*c*g-o*f*g,w=u*p*l-_*h*l+_*a*m-o*p*m-u*a*g+o*h*g,y=_*h*c-u*p*c-_*a*f+o*p*f+u*a*d-o*h*d,P=t*S+n*M+i*w+s*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=S*O,e[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*g-n*f*g)*O,e[2]=(a*d*s-p*c*s+p*i*l-n*d*l-a*i*g+n*c*g)*O,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*m-n*c*m)*O,e[4]=M*O,e[5]=(u*d*s-_*f*s+_*i*m-t*d*m-u*i*g+t*f*g)*O,e[6]=(_*c*s-o*d*s-_*i*l+t*d*l+o*i*g-t*c*g)*O,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*m+t*c*m)*O,e[8]=w*O,e[9]=(_*h*s-u*p*s-_*n*m+t*p*m+u*n*g-t*h*g)*O,e[10]=(o*p*s-_*a*s+_*n*l-t*p*l-o*n*g+t*a*g)*O,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*O,e[12]=y*O,e[13]=(u*p*i-_*h*i+_*n*f-t*p*f-u*n*d+t*h*d)*O,e[14]=(_*a*i-o*p*i-_*n*c+t*p*c+o*n*d-t*a*d)*O,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,m=s*u,_=s*h,p=o*u,d=o*h,g=a*h,S=c*l,M=c*u,w=c*h,y=n.x,P=n.y,O=n.z;return i[0]=(1-(p+g))*y,i[1]=(m+w)*y,i[2]=(_-M)*y,i[3]=0,i[4]=(m-w)*P,i[5]=(1-(f+g))*P,i[6]=(d+S)*P,i[7]=0,i[8]=(_+M)*O,i[9]=(d-S)*O,i[10]=(1-(f+p))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bn.set(i[0],i[1],i[2]).length();const o=Bn.set(i[4],i[5],i[6]).length(),a=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],zt.copy(this);const l=1/s,u=1/o,h=1/a;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),h=(t+e)*c,f=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bn=new L,zt=new it,cc=new L(0,0,0),uc=new L(1,1,1),on=new L,Wi=new L,Pt=new L,ba=new it,Ma=new Ln;class gs{constructor(e=0,t=0,n=0,i=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class Io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hc=0;const Sa=new L,Gn=new Ln,Kt=new it,ji=new L,gi=new L,dc=new L,fc=new Ln,wa=new L(1,0,0),Ea=new L(0,1,0),Ta=new L(0,0,1),pc={type:"added"},Aa={type:"removed"};class Ke extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const e=new L,t=new gs,n=new Ln,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new It}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(wa,e)}rotateY(e){return this.rotateOnAxis(Ea,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return Sa.copy(e).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wa,e)}translateY(e){return this.translateOnAxis(Ea,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ji.copy(e):ji.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(gi,ji,this.up):Kt.lookAt(ji,gi,this.up),this.quaternion.setFromRotationMatrix(Kt),i&&(Kt.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Aa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Aa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ke.DEFAULT_UP=new L(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new L,Jt=new L,Xs=new L,Qt=new L,Vn=new L,Hn=new L,Ca=new L,Ys=new L,$s=new L,Zs=new L;class en{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kt.subVectors(e,t),i.cross(kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kt.subVectors(i,t),Jt.subVectors(n,t),Xs.subVectors(e,t);const o=kt.dot(kt),a=kt.dot(Jt),c=kt.dot(Xs),l=Jt.dot(Jt),u=Jt.dot(Xs),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Qt),c.set(0,0),c.addScaledVector(s,Qt.x),c.addScaledVector(o,Qt.y),c.addScaledVector(a,Qt.z),c}static isFrontFacing(e,t,n,i){return kt.subVectors(n,t),Jt.subVectors(e,t),kt.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),kt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return en.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vn.subVectors(i,n),Hn.subVectors(s,n),Ys.subVectors(e,n);const c=Vn.dot(Ys),l=Hn.dot(Ys);if(c<=0&&l<=0)return t.copy(n);$s.subVectors(e,i);const u=Vn.dot($s),h=Hn.dot($s);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Vn,o);Zs.subVectors(e,s);const m=Vn.dot(Zs),_=Hn.dot(Zs);if(_>=0&&m<=_)return t.copy(s);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Hn,a);const d=u*_-m*h;if(d<=0&&h-u>=0&&m-_>=0)return Ca.subVectors(s,i),a=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(Ca,a);const g=1/(d+p+f);return o=p*g,a=f*g,t.copy(n).addScaledVector(Vn,o).addScaledVector(Hn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mc=0;class ci extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ei,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mo,this.blendDst=So,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cr extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new L,qi=new Ae;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fo extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oo extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gc=0;const Ot=new it,Ks=new Ke,Wn=new L,Rt=new li,_i=new li,ft=new L;class Ft extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Co(e)?Oo:Fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Rt.min,_i.min),Rt.expandByPoint(ft),ft.addVectors(Rt.max,_i.max),Rt.expandByPoint(ft)):(Rt.expandByPoint(_i.min),Rt.expandByPoint(_i.max))}Rt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ft.fromBufferAttribute(a,l),c&&(Wn.fromBufferAttribute(e,l),ft.add(Wn)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let I=0;I<a;I++)l[I]=new L,u[I]=new L;const h=new L,f=new L,m=new L,_=new Ae,p=new Ae,d=new Ae,g=new L,S=new L;function M(I,K,$){h.fromArray(i,I*3),f.fromArray(i,K*3),m.fromArray(i,$*3),_.fromArray(o,I*2),p.fromArray(o,K*2),d.fromArray(o,$*2),f.sub(h),m.sub(h),p.sub(_),d.sub(_);const z=1/(p.x*d.y-d.x*p.y);isFinite(z)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(z),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(z),l[I].add(g),l[K].add(g),l[$].add(g),u[I].add(S),u[K].add(S),u[$].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let I=0,K=w.length;I<K;++I){const $=w[I],z=$.start,D=$.count;for(let q=z,J=z+D;q<J;q+=3)M(n[q+0],n[q+1],n[q+2])}const y=new L,P=new L,O=new L,v=new L;function T(I){O.fromArray(s,I*3),v.copy(O);const K=l[I];y.copy(K),y.sub(O.multiplyScalar(O.dot(K))).normalize(),P.crossVectors(v,K);const z=P.dot(u[I])<0?-1:1;c[I*4]=y.x,c[I*4+1]=y.y,c[I*4+2]=y.z,c[I*4+3]=z}for(let I=0,K=w.length;I<K;++I){const $=w[I],z=$.start,D=$.count;for(let q=z,J=z+D;q<J;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,_=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let g=0;g<u;g++)f[_++]=l[m++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new it,jn=new lc,Js=new Ar,xi=new L,vi=new L,yi=new L,Qs=new L,Xi=new L,Yi=new Ae,$i=new Ae,Zi=new Ae,er=new L,Ki=new L;class yt extends Ke{constructor(e=new Ft,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Qs.fromBufferAttribute(h,e),o?Xi.addScaledVector(Qs,u):Xi.addScaledVector(Qs.sub(t),u))}t.add(Xi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),e.ray.intersectsSphere(Js)===!1)||(La.copy(s).invert(),jn.copy(e.ray).applyMatrix4(La),n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=g,w=S;M<w;M+=3){const y=a.getX(M),P=a.getX(M+1),O=a.getX(M+2);o=Ji(this,d,e,jn,l,u,y,P,O),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);o=Ji(this,i,e,jn,l,u,g,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=g,w=S;M<w;M+=3){const y=M,P=M+1,O=M+2;o=Ji(this,d,e,jn,l,u,y,P,O),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=p,S=p+1,M=p+2;o=Ji(this,i,e,jn,l,u,g,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function _c(r,e,t,n,i,s,o,a){let c;if(e.side===bt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===nn,a),c===null)return null;Ki.copy(a),Ki.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ki);return l<t.near||l>t.far?null:{distance:l,point:Ki.clone(),object:r}}function Ji(r,e,t,n,i,s,o,a,c){r.getVertexPosition(o,xi),r.getVertexPosition(a,vi),r.getVertexPosition(c,yi);const l=_c(r,e,t,n,xi,vi,yi,er);if(l){i&&(Yi.fromBufferAttribute(i,o),$i.fromBufferAttribute(i,a),Zi.fromBufferAttribute(i,c),l.uv=en.getUV(er,xi,vi,yi,Yi,$i,Zi,new Ae)),s&&(Yi.fromBufferAttribute(s,o),$i.fromBufferAttribute(s,a),Zi.fromBufferAttribute(s,c),l.uv2=en.getUV(er,xi,vi,yi,Yi,$i,Zi,new Ae));const u={a:o,b:a,c,normal:new L,materialIndex:0};en.getNormal(xi,vi,yi,u.normal),l.face=u}return l}class Oi extends Ft{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function _(p,d,g,S,M,w,y,P,O,v,T){const I=w/O,K=y/v,$=w/2,z=y/2,D=P/2,q=O+1,J=v+1;let Q=0,Y=0;const te=new L;for(let ie=0;ie<J;ie++){const me=ie*K-z;for(let G=0;G<q;G++){const Z=G*I-$;te[p]=Z*S,te[d]=me*M,te[g]=D,l.push(te.x,te.y,te.z),te[p]=0,te[d]=0,te[g]=P>0?1:-1,u.push(te.x,te.y,te.z),h.push(G/O),h.push(1-ie/v),Q+=1}}for(let ie=0;ie<v;ie++)for(let me=0;me<O;me++){const G=f+me+q*ie,Z=f+me+q*(ie+1),re=f+(me+1)+q*(ie+1),ae=f+(me+1)+q*ie;c.push(G,Z,ae),c.push(Z,re,ae),Y+=6}a.addGroup(m,Y,T),m+=Y,f+=Q}}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=ai(r[t]);for(const i in n)e[i]=n[i]}return e}function xc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function No(r){return r.getRenderTarget()===null&&r.outputEncoding===je?Wt:Ri}const vc={clone:ai,merge:Et};var yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yc,this.fragmentShader=bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=xc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uo extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Uo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,Xn=1;class Mc extends Ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(qn,Xn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Dt(qn,Xn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dt(qn,Xn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Dt(qn,Xn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Dt(qn,Xn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Dt(qn,Xn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class zo extends lt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sc extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oi(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:cn});s.uniforms.tEquirect.value=t;const o=new yt(i,s),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=vt),new Mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const tr=new L,wc=new L,Ec=new It;class _n{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=tr.subVectors(n,t).cross(wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),i=this.coplanarPoint(tr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Ar,Qi=new L;class Lr{constructor(e=new _n,t=new _n,n=new _n,i=new _n,s=new _n,o=new _n){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],S=n[14],M=n[15];return t[0].setComponents(a-i,h-c,p-f,M-d).normalize(),t[1].setComponents(a+i,h+c,p+f,M+d).normalize(),t[2].setComponents(a+s,h+l,p+m,M+g).normalize(),t[3].setComponents(a-s,h-l,p-m,M-g).normalize(),t[4].setComponents(a-o,h-u,p-_,M-S).normalize(),t[5].setComponents(a+o,h+u,p+_,M+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qi.x=i.normal.x>0?e.max.x:e.min.x,Qi.y=i.normal.y>0?e.max.y:e.min.y,Qi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ko(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class _s extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,m=[],_=[],p=[],d=[];for(let g=0;g<u;g++){const S=g*f-o;for(let M=0;M<l;M++){const w=M*h-s;_.push(w,-S,0),p.push(0,0,1),d.push(M/a),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){const M=S+l*g,w=S+l*(g+1),y=S+1+l*(g+1),P=S+1+l*g;m.push(M,w,P),m.push(w,y,P)}this.setIndex(m),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(d,2))}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ac=`#ifdef USE_ALPHAMAP
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
}`,Re={alphamap_fragment:Ac,alphamap_pars_fragment:Cc,alphatest_fragment:Lc,alphatest_pars_fragment:Pc,aomap_fragment:Rc,aomap_pars_fragment:Dc,begin_vertex:Ic,beginnormal_vertex:Fc,bsdfs:Oc,iridescence_fragment:Nc,bumpmap_pars_fragment:Uc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:Gc,color_fragment:Vc,color_pars_fragment:Hc,color_pars_vertex:Wc,color_vertex:jc,common:qc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:Yc,displacementmap_pars_vertex:$c,displacementmap_vertex:Zc,emissivemap_fragment:Kc,emissivemap_pars_fragment:Jc,encodings_fragment:Qc,encodings_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:su,envmap_physical_pars_fragment:gu,envmap_vertex:ru,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:uu,lightmap_fragment:hu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:_u,lights_toon_pars_fragment:xu,lights_phong_fragment:vu,lights_phong_pars_fragment:yu,lights_physical_fragment:bu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:wu,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Lu,map_fragment:Pu,map_pars_fragment:Ru,map_particle_fragment:Du,map_particle_pars_fragment:Iu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphcolor_vertex:Nu,morphnormal_vertex:Uu,morphtarget_pars_vertex:zu,morphtarget_vertex:ku,normal_fragment_begin:Bu,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:Hu,normal_vertex:Wu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:$u,output_fragment:Zu,packing:Ku,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:eh,dithering_pars_fragment:th,roughnessmap_fragment:nh,roughnessmap_pars_fragment:ih,shadowmap_pars_fragment:sh,shadowmap_pars_vertex:rh,shadowmap_vertex:ah,shadowmask_pars_fragment:oh,skinbase_vertex:lh,skinning_pars_vertex:ch,skinning_vertex:uh,skinnormal_vertex:hh,specularmap_fragment:dh,specularmap_pars_fragment:fh,tonemapping_fragment:ph,tonemapping_pars_fragment:mh,transmission_fragment:gh,transmission_pars_fragment:_h,uv_pars_fragment:xh,uv_pars_vertex:vh,uv_vertex:yh,uv2_pars_fragment:bh,uv2_pars_vertex:Mh,uv2_vertex:Sh,worldpos_vertex:wh,background_vert:Eh,background_frag:Th,backgroundCube_vert:Ah,backgroundCube_frag:Ch,cube_vert:Lh,cube_frag:Ph,depth_vert:Rh,depth_frag:Dh,distanceRGBA_vert:Ih,distanceRGBA_frag:Fh,equirect_vert:Oh,equirect_frag:Nh,linedashed_vert:Uh,linedashed_frag:zh,meshbasic_vert:kh,meshbasic_frag:Bh,meshlambert_vert:Gh,meshlambert_frag:Vh,meshmatcap_vert:Hh,meshmatcap_frag:Wh,meshnormal_vert:jh,meshnormal_frag:qh,meshphong_vert:Xh,meshphong_frag:Yh,meshphysical_vert:$h,meshphysical_frag:Zh,meshtoon_vert:Kh,meshtoon_frag:Jh,points_vert:Qh,points_frag:ed,shadow_vert:td,shadow_frag:nd,sprite_vert:id,sprite_frag:sd},oe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new It},uv2Transform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}}},jt={basic:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Et([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Et([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Et([oe.points,oe.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Et([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Et([oe.common,oe.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Et([oe.sprite,oe.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Et([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Et([oe.lights,oe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};jt.physical={uniforms:Et([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const es={r:0,b:0,g:0};function rd(r,e,t,n,i,s,o){const a=new Oe(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function _(d,g){let S=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M));const w=r.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?p(a,c):M&&M.isColor&&(p(M,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ms)?(u===void 0&&(u=new yt(new Oi(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:ai(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,O,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=M.encoding!==je,(h!==M||f!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new yt(new _s(2,2),new Xt({name:"BackgroundMaterial",uniforms:ai(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=M.encoding!==je,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,g){d.getRGB(es,No(r)),n.buffers.color.setClear(es.r,es.g,es.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),c=g,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:_}}function ad(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function h(D,q,J,Q,Y){let te=!1;if(o){const ie=p(Q,J,q);l!==ie&&(l=ie,m(l.object)),te=g(D,Q,J,Y),te&&S(D,Q,J,Y)}else{const ie=q.wireframe===!0;(l.geometry!==Q.id||l.program!==J.id||l.wireframe!==ie)&&(l.geometry=Q.id,l.program=J.id,l.wireframe=ie,te=!0)}Y!==null&&t.update(Y,34963),(te||u)&&(u=!1,v(D,q,J,Q),Y!==null&&r.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,q,J){const Q=J.wireframe===!0;let Y=a[D.id];Y===void 0&&(Y={},a[D.id]=Y);let te=Y[q.id];te===void 0&&(te={},Y[q.id]=te);let ie=te[Q];return ie===void 0&&(ie=d(f()),te[Q]=ie),ie}function d(D){const q=[],J=[],Q=[];for(let Y=0;Y<i;Y++)q[Y]=0,J[Y]=0,Q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:Q,object:D,attributes:{},index:null}}function g(D,q,J,Q){const Y=l.attributes,te=q.attributes;let ie=0;const me=J.getAttributes();for(const G in me)if(me[G].location>=0){const re=Y[G];let ae=te[G];if(ae===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;ie++}return l.attributesNum!==ie||l.index!==Q}function S(D,q,J,Q){const Y={},te=q.attributes;let ie=0;const me=J.getAttributes();for(const G in me)if(me[G].location>=0){let re=te[G];re===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),Y[G]=ae,ie++}l.attributes=Y,l.attributesNum=ie,l.index=Q}function M(){const D=l.newAttributes;for(let q=0,J=D.length;q<J;q++)D[q]=0}function w(D){y(D,0)}function y(D,q){const J=l.newAttributes,Q=l.enabledAttributes,Y=l.attributeDivisors;J[D]=1,Q[D]===0&&(r.enableVertexAttribArray(D),Q[D]=1),Y[D]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),Y[D]=q)}function P(){const D=l.newAttributes,q=l.enabledAttributes;for(let J=0,Q=q.length;J<Q;J++)q[J]!==D[J]&&(r.disableVertexAttribArray(J),q[J]=0)}function O(D,q,J,Q,Y,te){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(D,q,J,Y,te):r.vertexAttribPointer(D,q,J,Q,Y,te)}function v(D,q,J,Q){if(n.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=Q.attributes,te=J.getAttributes(),ie=q.defaultAttributeValues;for(const me in te){const G=te[me];if(G.location>=0){let Z=Y[me];if(Z===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const re=Z.normalized,ae=Z.itemSize,V=t.get(Z);if(V===void 0)continue;const we=V.buffer,ve=V.type,_e=V.bytesPerElement;if(Z.isInterleavedBufferAttribute){const de=Z.data,ze=de.stride,Ee=Z.offset;if(de.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)y(G.location+be,de.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let be=0;be<G.locationSize;be++)w(G.location+be);r.bindBuffer(34962,we);for(let be=0;be<G.locationSize;be++)O(G.location+be,ae/G.locationSize,ve,re,ze*_e,(Ee+ae/G.locationSize*be)*_e)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)y(G.location+de,Z.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<G.locationSize;de++)w(G.location+de);r.bindBuffer(34962,we);for(let de=0;de<G.locationSize;de++)O(G.location+de,ae/G.locationSize,ve,re,ae*_e,ae/G.locationSize*de*_e)}}else if(ie!==void 0){const re=ie[me];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(G.location,re);break;case 3:r.vertexAttrib3fv(G.location,re);break;case 4:r.vertexAttrib4fv(G.location,re);break;default:r.vertexAttrib1fv(G.location,re)}}}}P()}function T(){$();for(const D in a){const q=a[D];for(const J in q){const Q=q[J];for(const Y in Q)_(Q[Y].object),delete Q[Y];delete q[J]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const q=a[D.id];for(const J in q){const Q=q[J];for(const Y in Q)_(Q[Y].object),delete Q[Y];delete q[J]}delete a[D.id]}function K(D){for(const q in a){const J=a[q];if(J[D.id]===void 0)continue;const Q=J[D.id];for(const Y in Q)_(Q[Y].object),delete Q[Y];delete J[D.id]}}function $(){z(),u=!0,l!==c&&(l=c,m(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:K,initAttributes:M,enableAttribute:w,disableUnusedAttributes:P}}function od(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function ld(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),S=r.getParameter(36349),M=f>0,w=o||e.has("OES_texture_float"),y=M&&w,P=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:P}}function cd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new _n,a=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!d)s?u(null):l();else{const S=s?0:n,M=S*4;let w=g.clippingState||null;c.value=w,w=u(_,f,M,m);for(let y=0;y!==M;++y)w[y]=t[y];g.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=c.value,_!==!0||d===null){const g=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let M=0,w=m;M!==p;++M,w+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(d,w),d[w+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function ud(r){let e=new WeakMap;function t(o,a){return a===mr?o.mapping=ii:a===gr&&(o.mapping=si),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===mr||a===gr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sc(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bo extends Uo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qn=4,Pa=[.125,.215,.35,.446,.526,.582],yn=20,nr=new Bo,Ra=new Oe;let ir=null;const xn=(1+Math.sqrt(5))/2,$n=1/xn,Da=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,xn,$n),new L(0,xn,-$n),new L($n,0,xn),new L(-$n,0,xn),new L(xn,$n,0),new L(-xn,$n,0)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ir=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ir),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ir=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Pi,format:Gt,encoding:An,depthBuffer:!1},i=Fa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hd(s)),this._blurMaterial=dd(s,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,nr)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ra),u.toneMapping=qt,u.autoClear=!1;const m=new Cr({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),_=new yt(new Oi,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Ra),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):S===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const M=this._cubeSize;ts(i,S*M,g>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Da[(i-1)%Da.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yn-1),p=s/_,d=isFinite(s)?1+Math.floor(u*p):yn;d>yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${yn}`);const g=[];let S=0;for(let O=0;O<yn;++O){const v=O/p,T=Math.exp(-v*v/2);g.push(T),O===0?S+=T:O<d&&(S+=2*T)}for(let O=0;O<g.length;O++)g[O]=g[O]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const w=this._sizeLods[i],y=3*w*(i>M-Qn?i-M+Qn:0),P=4*(this._cubeSize-w);ts(t,y,P,3*w,2*w),c.setRenderTarget(t),c.render(h,nr)}}function hd(r){const e=[],t=[],n=[];let i=r;const s=r-Qn+1+Pa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Qn?c=Pa[o-r+Qn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,p=3,d=2,g=1,S=new Float32Array(p*_*m),M=new Float32Array(d*_*m),w=new Float32Array(g*_*m);for(let P=0;P<m;P++){const O=P%3*2/3-1,v=P>2?0:-1,T=[O,v,0,O+2/3,v,0,O+2/3,v+1,0,O,v,0,O+2/3,v+1,0,O,v+1,0];S.set(T,p*_*P),M.set(f,d*_*P);const I=[P,P,P,P,P,P];w.set(I,g*_*P)}const y=new Ft;y.setAttribute("position",new Vt(S,p)),y.setAttribute("uv",new Vt(M,d)),y.setAttribute("faceIndex",new Vt(w,g)),e.push(y),i>Qn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fa(r,e,t){const n=new Cn(r,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dd(r,e,t){const n=new Float32Array(yn),i=new L(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Oa(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Na(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Pr(){return`

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
	`}function fd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===mr||c===gr,u=c===ii||c===si;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ia(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ia(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function md(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function l(h){const f=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let M=0,w=S.length;M<w;M+=3){const y=S[M+0],P=S[M+1],O=S[M+2];f.push(y,P,P,O,O,y)}}else{const S=_.array;p=_.version;for(let M=0,w=S.length/3-1;M<w;M+=3){const y=M+0,P=M+1,O=M+2;f.push(y,P,P,O,O,y)}}const d=new(Co(f)?Oo:Fo)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function gd(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*c),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function _d(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xd(r,e){return r[0]-e[0]}function vd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function yd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==d){let J=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var _=J;g!==void 0&&g.texture.dispose();const w=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let I=0;w===!0&&(I=1),y===!0&&(I=2),P===!0&&(I=3);let K=u.attributes.position.count*I,$=1;K>e.maxTextureSize&&($=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const z=new Float32Array(K*$*4*d),D=new Do(z,K,$,d);D.type=Mn,D.needsUpdate=!0;const q=I*4;for(let Q=0;Q<d;Q++){const Y=O[Q],te=v[Q],ie=T[Q],me=K*$*4*Q;for(let G=0;G<Y.count;G++){const Z=G*q;w===!0&&(o.fromBufferAttribute(Y,G),z[me+Z+0]=o.x,z[me+Z+1]=o.y,z[me+Z+2]=o.z,z[me+Z+3]=0),y===!0&&(o.fromBufferAttribute(te,G),z[me+Z+4]=o.x,z[me+Z+5]=o.y,z[me+Z+6]=o.z,z[me+Z+7]=0),P===!0&&(o.fromBufferAttribute(ie,G),z[me+Z+8]=o.x,z[me+Z+9]=o.y,z[me+Z+10]=o.z,z[me+Z+11]=ie.itemSize===4?o.w:1)}}g={count:d,texture:D,size:new Ae(K,$)},s.set(u,g),u.addEventListener("dispose",J)}let S=0;for(let w=0;w<m.length;w++)S+=m[w];const M=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<p;y++){const P=d[y];P[0]=y,P[1]=m[y]}d.sort(vd);for(let y=0;y<8;y++)y<p&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(xd);const g=u.morphAttributes.position,S=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const P=a[y],O=P[0],v=P[1];O!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+y)!==g[O]&&u.setAttribute("morphTarget"+y,g[O]),S&&u.getAttribute("morphNormal"+y)!==S[O]&&u.setAttribute("morphNormal"+y,S[O]),i[y]=v,M+=v):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),S&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const w=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",w),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function bd(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Go=new lt,Vo=new Do,Ho=new ac,Wo=new zo,Ua=[],za=[],ka=new Float32Array(16),Ba=new Float32Array(9),Ga=new Float32Array(4);function ui(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ua[i];if(s===void 0&&(s=new Float32Array(i),Ua[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xs(r,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Md(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function Ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function Td(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Ga.set(n),r.uniformMatrix2fv(this.addr,!1,Ga),ut(t,n)}}function Ad(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Ba.set(n),r.uniformMatrix3fv(this.addr,!1,Ba),ut(t,n)}}function Cd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;ka.set(n),r.uniformMatrix4fv(this.addr,!1,ka),ut(t,n)}}function Ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function Rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function Dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function Id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function Nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function Ud(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Go,i)}function zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ho,i)}function kd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wo,i)}function Bd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vo,i)}function Gd(r){switch(r){case 5126:return Md;case 35664:return Sd;case 35665:return wd;case 35666:return Ed;case 35674:return Td;case 35675:return Ad;case 35676:return Cd;case 5124:case 35670:return Ld;case 35667:case 35671:return Pd;case 35668:case 35672:return Rd;case 35669:case 35673:return Dd;case 5125:return Id;case 36294:return Fd;case 36295:return Od;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Bd}}function Vd(r,e){r.uniform1fv(this.addr,e)}function Hd(r,e){const t=ui(e,this.size,2);r.uniform2fv(this.addr,t)}function Wd(r,e){const t=ui(e,this.size,3);r.uniform3fv(this.addr,t)}function jd(r,e){const t=ui(e,this.size,4);r.uniform4fv(this.addr,t)}function qd(r,e){const t=ui(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xd(r,e){const t=ui(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yd(r,e){const t=ui(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $d(r,e){r.uniform1iv(this.addr,e)}function Zd(r,e){r.uniform2iv(this.addr,e)}function Kd(r,e){r.uniform3iv(this.addr,e)}function Jd(r,e){r.uniform4iv(this.addr,e)}function Qd(r,e){r.uniform1uiv(this.addr,e)}function ef(r,e){r.uniform2uiv(this.addr,e)}function tf(r,e){r.uniform3uiv(this.addr,e)}function nf(r,e){r.uniform4uiv(this.addr,e)}function sf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Go,s[o])}function rf(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ho,s[o])}function af(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wo,s[o])}function of(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Vo,s[o])}function lf(r){switch(r){case 5126:return Vd;case 35664:return Hd;case 35665:return Wd;case 35666:return jd;case 35674:return qd;case 35675:return Xd;case 35676:return Yd;case 5124:case 35670:return $d;case 35667:case 35671:return Zd;case 35668:case 35672:return Kd;case 35669:case 35673:return Jd;case 5125:return Qd;case 36294:return ef;case 36295:return tf;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return of}}class cf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gd(t.type)}}class uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lf(t.type)}}class hf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function Va(r,e){r.seq.push(e),r.map[e.id]=e}function df(r,e,t){const n=r.name,i=n.length;for(sr.lastIndex=0;;){const s=sr.exec(n),o=sr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Va(t,l===void 0?new cf(a,r,e):new uf(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new hf(a),Va(t,h)),t=h}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);df(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ha(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ff=0;function pf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mf(r){switch(r){case An:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Wa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pf(r.getShaderSource(e),o)}else return i}function gf(r,e){const t=mf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _f(r,e){let t;switch(e){case Dl:t="Linear";break;case Il:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case Ol:t="ACESFilmic";break;case Nl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function vf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ti(r){return r!==""}function ja(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(r){return r.replace(bf,Mf)}function Mf(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return br(t)}const Sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(r){return r.replace(Sf,wf)}function wf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ya(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ef(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Tf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ii:case si:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Af(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function Cf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Pl:e="ENVMAP_BLENDING_MIX";break;case Rl:e="ENVMAP_BLENDING_ADD";break}return e}function Lf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ef(t),l=Tf(t),u=Af(t),h=Cf(t),f=Lf(t),m=t.isWebGL2?"":xf(t),_=vf(s),p=i.createProgram();let d,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Ti).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(Ti).join(`
`),g.length>0&&(g+=`
`)):(d=[Ya(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),g=[m,Ya(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Re.tonemapping_pars_fragment:"",t.toneMapping!==qt?_f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,gf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),o=br(o),o=ja(o,t),o=qa(o,t),a=br(a),a=ja(a,t),a=qa(a,t),o=Xa(o),a=Xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===xr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=S+d+o,w=S+g+a,y=Ha(i,35633,M),P=Ha(i,35632,w);if(i.attachShader(p,y),i.attachShader(p,P),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(y).trim(),K=i.getShaderInfoLog(P).trim();let $=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const D=Wa(i,y,"vertex"),q=Wa(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+q)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||K==="")&&(z=!1);z&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:I,prefix:d},fragmentShader:{log:K,prefix:g}})}i.deleteShader(y),i.deleteShader(P);let O;this.getUniforms=function(){return O===void 0&&(O=new us(i,p)),O};let v;return this.getAttributes=function(){return v===void 0&&(v=yf(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ff++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=P,this}let Rf=0;class Df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new If(e),t.set(e,n)),n}}class If{constructor(e){this.id=Rf++,this.code=e,this.usedTimes=0}}function Ff(r,e,t,n,i,s,o){const a=new Io,c=new Df,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,I,K,$){const z=K.fog,D=$.geometry,q=v.isMeshStandardMaterial?K.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),Q=J&&J.mapping===ms?J.image.height:null,Y=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=te!==void 0?te.length:0;let me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let G,Z,re,ae;if(Y){const ze=jt[Y];G=ze.vertexShader,Z=ze.fragmentShader}else G=v.vertexShader,Z=v.fragmentShader,c.update(v),re=c.getVertexShaderID(v),ae=c.getFragmentShaderID(v);const V=r.getRenderTarget(),we=v.alphaTest>0,ve=v.clearcoat>0,_e=v.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:v.type,vertexShader:G,fragmentShader:Z,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?r.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:An,map:!!v.map,matcap:!!v.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===tc,tangentSpaceNormalMap:v.normalMapType===Ao,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===je,clearcoat:ve,clearcoatMap:ve&&!!v.clearcoatMap,clearcoatRoughnessMap:ve&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!v.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!v.iridescenceMap,iridescenceThicknessMap:_e&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ei,alphaMap:!!v.alphaMap,alphaTest:we,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:qt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===bt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(T,v),S(T,v),T.push(r.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function M(v){const T=_[v.type];let I;if(T){const K=jt[T];I=vc.clone(K.uniforms)}else I=v.uniforms;return I}function w(v,T){let I;for(let K=0,$=l.length;K<$;K++){const z=l[K];if(z.cacheKey===T){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Pf(r,T,v,s),l.push(I)),I}function y(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function P(v){c.remove(v)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:P,programs:l,dispose:O}}function Of(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $a(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Za(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,_,p,d){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:d},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function a(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function c(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function l(h,f){t.length>1&&t.sort(h||Nf),n.length>1&&n.sort(f||$a),i.length>1&&i.sort(f||$a)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function Uf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Za,r.set(n,[o])):i>=s.length?(o=new Za,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function zf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function kf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bf=0;function Gf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vf(r,e){const t=new zf,n=kf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,o=new it,a=new it;function c(u,h){let f=0,m=0,_=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let p=0,d=0,g=0,S=0,M=0,w=0,y=0,P=0,O=0,v=0;u.sort(Gf);const T=h!==!0?Math.PI:1;for(let K=0,$=u.length;K<$;K++){const z=u[K],D=z.color,q=z.intensity,J=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=D.r*q*T,m+=D.g*q*T,_+=D.b*q*T;else if(z.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(z.sh.coefficients[Y],q);else if(z.isDirectionalLight){const Y=t.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const te=z.shadow,ie=n.get(z);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=z.shadow.matrix,w++}i.directional[p]=Y,p++}else if(z.isSpotLight){const Y=t.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(D).multiplyScalar(q*T),Y.distance=J,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,i.spot[g]=Y;const te=z.shadow;if(z.map&&(i.spotLightMap[O]=z.map,O++,te.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[g]=te.matrix,z.castShadow){const ie=n.get(z);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[g]=ie,i.spotShadowMap[g]=Q,P++}g++}else if(z.isRectAreaLight){const Y=t.get(z);Y.color.copy(D).multiplyScalar(q),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=Y,S++}else if(z.isPointLight){const Y=t.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*T),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const te=z.shadow,ie=n.get(z);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[d]=ie,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=z.shadow.matrix,y++}i.point[d]=Y,d++}else if(z.isHemisphereLight){const Y=t.get(z);Y.skyColor.copy(z.color).multiplyScalar(q*T),Y.groundColor.copy(z.groundColor).multiplyScalar(q*T),i.hemi[M]=Y,M++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==M||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==P||I.numSpotMaps!==O)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=d,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=P+O-v,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=M,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=P,I.numSpotMaps=O,i.version=Bf++)}function l(u,h){let f=0,m=0,_=0,p=0,d=0;const g=h.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const w=u[S];if(w.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(w.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),_++}else if(w.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(w.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),m++}else if(w.isHemisphereLight){const y=i.hemi[d];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),d++}}}return{setup:c,setupView:l,state:i}}function Ka(r,e){const t=new Vf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Ka(r,e),t.set(s,[c])):o>=a.length?(c=new Ka(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Wf extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qf=`void main() {
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
}`;function Yf(r,e,t){let n=new Lr;const i=new Ae,s=new Ae,o=new mt,a=new Wf({depthPacking:ec}),c=new jf,l={},u=t.maxTextureSize,h={[nn]:bt,[bt]:nn,[tn]:tn},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:qf,fragmentShader:Xf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new yt(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo,this.render=function(w,y,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const O=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(cn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let K=0,$=w.length;K<$;K++){const z=w[K],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null){const Q=this.type!==Ei?{minFilter:gt,magFilter:gt}:{};D.map=new Cn(i.x,i.y,Q),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const J=D.getViewportCount();for(let Q=0;Q<J;Q++){const Y=D.getViewport(Q);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),I.viewport(o),D.updateMatrices(z,Q),n=D.getFrustum(),M(y,P,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===Ei&&g(D,P),D.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(O,v,T)};function g(w,y){const P=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,P,f,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,P,m,p,null)}function S(w,y,P,O,v,T){let I=null;const K=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(K!==void 0)I=K;else if(I=P.isPointLight===!0?c:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const $=I.uuid,z=y.uuid;let D=l[$];D===void 0&&(D={},l[$]=D);let q=D[z];q===void 0&&(q=I.clone(),D[z]=q),I=q}return I.visible=y.visible,I.wireframe=y.wireframe,T===Ei?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:h[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=O,I.farDistance=v),I}function M(w,y,P,O,v){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const K=e.update(w),$=w.material;if(Array.isArray($)){const z=K.groups;for(let D=0,q=z.length;D<q;D++){const J=z[D],Q=$[J.materialIndex];if(Q&&Q.visible){const Y=S(w,Q,O,P.near,P.far,v);r.renderBufferDirect(P,null,K,Y,w,J)}}}else if($.visible){const z=S(w,$,O,P.near,P.far,v);r.renderBufferDirect(P,null,K,z,w,null)}}const I=w.children;for(let K=0,$=I.length;K<$;K++)M(I[K],y,P,O,v)}}function $f(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const j=new mt;let ee=null;const pe=new mt(0,0,0,0);return{setMask:function(ye){ee!==ye&&!R&&(r.colorMask(ye,ye,ye,ye),ee=ye)},setLocked:function(ye){R=ye},setClear:function(ye,Ne,$e,rt,Ht){Ht===!0&&(ye*=rt,Ne*=rt,$e*=rt),j.set(ye,Ne,$e,rt),pe.equals(j)===!1&&(r.clearColor(ye,Ne,$e,rt),pe.copy(j))},reset:function(){R=!1,ee=null,pe.set(-1,0,0,0)}}}function s(){let R=!1,j=null,ee=null,pe=null;return{setTest:function(ye){ye?we(2929):ve(2929)},setMask:function(ye){j!==ye&&!R&&(r.depthMask(ye),j=ye)},setFunc:function(ye){if(ee!==ye){switch(ye){case Sl:r.depthFunc(512);break;case wl:r.depthFunc(519);break;case El:r.depthFunc(513);break;case pr:r.depthFunc(515);break;case Tl:r.depthFunc(514);break;case Al:r.depthFunc(518);break;case Cl:r.depthFunc(516);break;case Ll:r.depthFunc(517);break;default:r.depthFunc(515)}ee=ye}},setLocked:function(ye){R=ye},setClear:function(ye){pe!==ye&&(r.clearDepth(ye),pe=ye)},reset:function(){R=!1,j=null,ee=null,pe=null}}}function o(){let R=!1,j=null,ee=null,pe=null,ye=null,Ne=null,$e=null,rt=null,Ht=null;return{setTest:function(C){R||(C?we(2960):ve(2960))},setMask:function(C){j!==C&&!R&&(r.stencilMask(C),j=C)},setFunc:function(C,B,fe){(ee!==C||pe!==B||ye!==fe)&&(r.stencilFunc(C,B,fe),ee=C,pe=B,ye=fe)},setOp:function(C,B,fe){(Ne!==C||$e!==B||rt!==fe)&&(r.stencilOp(C,B,fe),Ne=C,$e=B,rt=fe)},setLocked:function(C){R=C},setClear:function(C){Ht!==C&&(r.clearStencil(C),Ht=C)},reset:function(){R=!1,j=null,ee=null,pe=null,ye=null,Ne=null,$e=null,rt=null,Ht=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,M=null,w=null,y=null,P=null,O=null,v=null,T=!1,I=null,K=null,$=null,z=null,D=null;const q=r.getParameter(35661);let J=!1,Q=0;const Y=r.getParameter(7938);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=Q>=2);let te=null,ie={};const me=r.getParameter(3088),G=r.getParameter(2978),Z=new mt().fromArray(me),re=new mt().fromArray(G);function ae(R,j,ee){const pe=new Uint8Array(4),ye=r.createTexture();r.bindTexture(R,ye),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Ne=0;Ne<ee;Ne++)r.texImage2D(j+Ne,0,6408,1,1,0,6408,5121,pe);return ye}const V={};V[3553]=ae(3553,3553,1),V[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),we(2929),c.setFunc(pr),Xe(!1),st(Gr),we(2884),Ye(cn);function we(R){f[R]!==!0&&(r.enable(R),f[R]=!0)}function ve(R){f[R]!==!1&&(r.disable(R),f[R]=!1)}function _e(R,j){return m[R]!==j?(r.bindFramebuffer(R,j),m[R]=j,n&&(R===36009&&(m[36160]=j),R===36160&&(m[36009]=j)),!0):!1}function de(R,j){let ee=p,pe=!1;if(R)if(ee=_.get(j),ee===void 0&&(ee=[],_.set(j,ee)),R.isWebGLMultipleRenderTargets){const ye=R.texture;if(ee.length!==ye.length||ee[0]!==36064){for(let Ne=0,$e=ye.length;Ne<$e;Ne++)ee[Ne]=36064+Ne;ee.length=ye.length,pe=!0}}else ee[0]!==36064&&(ee[0]=36064,pe=!0);else ee[0]!==1029&&(ee[0]=1029,pe=!0);pe&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ze(R){return d!==R?(r.useProgram(R),d=R,!0):!1}const Ee={[Jn]:32774,[dl]:32778,[fl]:32779};if(n)Ee[jr]=32775,Ee[qr]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Ee[jr]=R.MIN_EXT,Ee[qr]=R.MAX_EXT)}const be={[pl]:0,[ml]:1,[gl]:768,[Mo]:770,[Ml]:776,[yl]:774,[xl]:772,[_l]:769,[So]:771,[bl]:775,[vl]:773};function Ye(R,j,ee,pe,ye,Ne,$e,rt){if(R===cn){g===!0&&(ve(3042),g=!1);return}if(g===!1&&(we(3042),g=!0),R!==hl){if(R!==S||rt!==T){if((M!==Jn||P!==Jn)&&(r.blendEquation(32774),M=Jn,P=Jn),rt)switch(R){case ei:r.blendFuncSeparate(1,771,1,771);break;case Vr:r.blendFunc(1,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Wr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ei:r.blendFuncSeparate(770,771,1,771);break;case Vr:r.blendFunc(770,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Wr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,y=null,O=null,v=null,S=R,T=rt}return}ye=ye||j,Ne=Ne||ee,$e=$e||pe,(j!==M||ye!==P)&&(r.blendEquationSeparate(Ee[j],Ee[ye]),M=j,P=ye),(ee!==w||pe!==y||Ne!==O||$e!==v)&&(r.blendFuncSeparate(be[ee],be[pe],be[Ne],be[$e]),w=ee,y=pe,O=Ne,v=$e),S=R,T=!1}function Qe(R,j){R.side===tn?ve(2884):we(2884);let ee=R.side===bt;j&&(ee=!ee),Xe(ee),R.blending===ei&&R.transparent===!1?Ye(cn):Ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const pe=R.stencilWrite;l.setTest(pe),pe&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),De(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?we(32926):ve(32926)}function Xe(R){I!==R&&(R?r.frontFace(2304):r.frontFace(2305),I=R)}function st(R){R!==cl?(we(2884),R!==K&&(R===Gr?r.cullFace(1029):R===ul?r.cullFace(1028):r.cullFace(1032))):ve(2884),K=R}function qe(R){R!==$&&(J&&r.lineWidth(R),$=R)}function De(R,j,ee){R?(we(32823),(z!==j||D!==ee)&&(r.polygonOffset(j,ee),z=j,D=ee)):ve(32823)}function Mt(R){R?we(3089):ve(3089)}function ht(R){R===void 0&&(R=33984+q-1),te!==R&&(r.activeTexture(R),te=R)}function E(R,j,ee){ee===void 0&&(te===null?ee=33984+q-1:ee=te);let pe=ie[ee];pe===void 0&&(pe={type:void 0,texture:void 0},ie[ee]=pe),(pe.type!==R||pe.texture!==j)&&(te!==ee&&(r.activeTexture(ee),te=ee),r.bindTexture(R,j||V[R]),pe.type=R,pe.texture=j)}function x(){const R=ie[te];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(R){Z.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ge(R){re.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function Ce(R,j){let ee=h.get(j);ee===void 0&&(ee=new WeakMap,h.set(j,ee));let pe=ee.get(R);pe===void 0&&(pe=r.getUniformBlockIndex(j,R.name),ee.set(R,pe))}function Pe(R,j){const pe=h.get(j).get(R);u.get(j)!==pe&&(r.uniformBlockBinding(j,pe,R.__bindingPointIndex),u.set(j,pe))}function Ve(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},te=null,ie={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,M=null,w=null,y=null,P=null,O=null,v=null,T=!1,I=null,K=null,$=null,z=null,D=null,Z.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:we,disable:ve,bindFramebuffer:_e,drawBuffers:de,useProgram:ze,setBlending:Ye,setMaterial:Qe,setFlipSided:Xe,setCullFace:st,setLineWidth:qe,setPolygonOffset:De,setScissorTest:Mt,activeTexture:ht,bindTexture:E,unbindTexture:x,compressedTexImage2D:W,compressedTexImage3D:ne,texImage2D:he,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:F,texStorage3D:ue,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Se,compressedTexSubImage3D:A,scissor:xe,viewport:ge,reset:Ve}}function Zf(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,x){return g?new OffscreenCanvas(E,x):Di("canvas")}function M(E,x,W,ne){let se=1;if((E.width>ne||E.height>ne)&&(se=ne/Math.max(E.width,E.height)),se<1||x===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const ce=x?yr:Math.floor,Se=ce(se*E.width),A=ce(se*E.height);p===void 0&&(p=S(Se,A));const F=W?S(Se,A):p;return F.width=Se,F.height=A,F.getContext("2d").drawImage(E,0,0,Se,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Se+"x"+A+")."),F}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return va(E.width)&&va(E.height)}function y(E){return a?!1:E.wrapS!==Nt||E.wrapT!==Nt||E.minFilter!==gt&&E.minFilter!==vt}function P(E,x){return E.generateMipmaps&&x&&E.minFilter!==gt&&E.minFilter!==vt}function O(E){r.generateMipmap(E)}function v(E,x,W,ne,se=!1){if(a===!1)return x;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=x;return x===6403&&(W===5126&&(ce=33326),W===5131&&(ce=33325),W===5121&&(ce=33321)),x===33319&&(W===5126&&(ce=33328),W===5131&&(ce=33327),W===5121&&(ce=33323)),x===6408&&(W===5126&&(ce=34836),W===5131&&(ce=34842),W===5121&&(ce=ne===je&&se===!1?35907:32856),W===32819&&(ce=32854),W===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(E,x,W){return P(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==gt&&E.minFilter!==vt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function I(E){return E===gt||E===Xr||E===As?9728:9729}function K(E){const x=E.target;x.removeEventListener("dispose",K),z(x),x.isVideoTexture&&_.delete(x)}function $(E){const x=E.target;x.removeEventListener("dispose",$),q(x)}function z(E){const x=n.get(E);if(x.__webglInit===void 0)return;const W=E.source,ne=d.get(W);if(ne){const se=ne[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(E),Object.keys(ne).length===0&&d.delete(W)}n.remove(E)}function D(E){const x=n.get(E);r.deleteTexture(x.__webglTexture);const W=E.source,ne=d.get(W);delete ne[x.__cacheKey],o.memory.textures--}function q(E){const x=E.texture,W=n.get(E),ne=n.get(x);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(W.__webglFramebuffer[se]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let se=0;se<W.__webglColorRenderbuffer.length;se++)W.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[se]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,ce=x.length;se<ce;se++){const Se=n.get(x[se]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(x[se])}n.remove(x),n.remove(E)}let J=0;function Q(){J=0}function Y(){const E=J;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),J+=1,E}function te(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.encoding),x.join()}function ie(E,x){const W=n.get(E);if(E.isVideoTexture&&Mt(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,E,x);return}}t.bindTexture(3553,W.__webglTexture,33984+x)}function me(E,x){const W=n.get(E);if(E.version>0&&W.__version!==E.version){ve(W,E,x);return}t.bindTexture(35866,W.__webglTexture,33984+x)}function G(E,x){const W=n.get(E);if(E.version>0&&W.__version!==E.version){ve(W,E,x);return}t.bindTexture(32879,W.__webglTexture,33984+x)}function Z(E,x){const W=n.get(E);if(E.version>0&&W.__version!==E.version){_e(W,E,x);return}t.bindTexture(34067,W.__webglTexture,33984+x)}const re={[ds]:10497,[Nt]:33071,[_r]:33648},ae={[gt]:9728,[Xr]:9984,[As]:9986,[vt]:9729,[Ul]:9985,[Li]:9987};function V(E,x,W){if(W?(r.texParameteri(E,10242,re[x.wrapS]),r.texParameteri(E,10243,re[x.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,re[x.wrapR]),r.texParameteri(E,10240,ae[x.magFilter]),r.texParameteri(E,10241,ae[x.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(x.wrapS!==Nt||x.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,I(x.magFilter)),r.texParameteri(E,10241,I(x.minFilter)),x.minFilter!==gt&&x.minFilter!==vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===gt||x.minFilter!==As&&x.minFilter!==Li||x.type===Mn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Pi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function we(E,x){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",K));const ne=x.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const ce=te(x);if(ce!==E.__cacheKey){se[ce]===void 0&&(se[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),se[ce].usedTimes++;const Se=se[E.__cacheKey];Se!==void 0&&(se[E.__cacheKey].usedTimes--,Se.usedTimes===0&&D(x)),E.__cacheKey=ce,E.__webglTexture=se[ce].texture}return W}function ve(E,x,W){let ne=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=35866),x.isData3DTexture&&(ne=32879);const se=we(E,x),ce=x.source;t.bindTexture(ne,E.__webglTexture,33984+W);const Se=n.get(ce);if(ce.version!==Se.__version||se===!0){t.activeTexture(33984+W),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const A=y(x)&&w(x.image)===!1;let F=M(x.image,A,!1,u);F=ht(x,F);const ue=w(F)||a,he=s.convert(x.format,x.encoding);let le=s.convert(x.type),xe=v(x.internalFormat,he,le,x.encoding,x.isVideoTexture);V(ne,x,ue);let ge;const Ce=x.mipmaps,Pe=a&&x.isVideoTexture!==!0,Ve=Se.__version===void 0||se===!0,R=T(x,F,ue);if(x.isDepthTexture)xe=6402,a?x.type===Mn?xe=36012:x.type===bn?xe=33190:x.type===ti?xe=35056:xe=33189:x.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===wn&&xe===6402&&x.type!==To&&x.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=bn,le=s.convert(x.type)),x.format===ri&&xe===6402&&(xe=34041,x.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ti,le=s.convert(x.type))),Ve&&(Pe?t.texStorage2D(3553,1,xe,F.width,F.height):t.texImage2D(3553,0,xe,F.width,F.height,0,he,le,null));else if(x.isDataTexture)if(Ce.length>0&&ue){Pe&&Ve&&t.texStorage2D(3553,R,xe,Ce[0].width,Ce[0].height);for(let j=0,ee=Ce.length;j<ee;j++)ge=Ce[j],Pe?t.texSubImage2D(3553,j,0,0,ge.width,ge.height,he,le,ge.data):t.texImage2D(3553,j,xe,ge.width,ge.height,0,he,le,ge.data);x.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(3553,R,xe,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,he,le,F.data)):t.texImage2D(3553,0,xe,F.width,F.height,0,he,le,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ve&&t.texStorage3D(35866,R,xe,Ce[0].width,Ce[0].height,F.depth);for(let j=0,ee=Ce.length;j<ee;j++)ge=Ce[j],x.format!==Gt?he!==null?Pe?t.compressedTexSubImage3D(35866,j,0,0,0,ge.width,ge.height,F.depth,he,ge.data,0,0):t.compressedTexImage3D(35866,j,xe,ge.width,ge.height,F.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,j,0,0,0,ge.width,ge.height,F.depth,he,le,ge.data):t.texImage3D(35866,j,xe,ge.width,ge.height,F.depth,0,he,le,ge.data)}else{Pe&&Ve&&t.texStorage2D(3553,R,xe,Ce[0].width,Ce[0].height);for(let j=0,ee=Ce.length;j<ee;j++)ge=Ce[j],x.format!==Gt?he!==null?Pe?t.compressedTexSubImage2D(3553,j,0,0,ge.width,ge.height,he,ge.data):t.compressedTexImage2D(3553,j,xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,j,0,0,ge.width,ge.height,he,le,ge.data):t.texImage2D(3553,j,xe,ge.width,ge.height,0,he,le,ge.data)}else if(x.isDataArrayTexture)Pe?(Ve&&t.texStorage3D(35866,R,xe,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,he,le,F.data)):t.texImage3D(35866,0,xe,F.width,F.height,F.depth,0,he,le,F.data);else if(x.isData3DTexture)Pe?(Ve&&t.texStorage3D(32879,R,xe,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,he,le,F.data)):t.texImage3D(32879,0,xe,F.width,F.height,F.depth,0,he,le,F.data);else if(x.isFramebufferTexture){if(Ve)if(Pe)t.texStorage2D(3553,R,xe,F.width,F.height);else{let j=F.width,ee=F.height;for(let pe=0;pe<R;pe++)t.texImage2D(3553,pe,xe,j,ee,0,he,le,null),j>>=1,ee>>=1}}else if(Ce.length>0&&ue){Pe&&Ve&&t.texStorage2D(3553,R,xe,Ce[0].width,Ce[0].height);for(let j=0,ee=Ce.length;j<ee;j++)ge=Ce[j],Pe?t.texSubImage2D(3553,j,0,0,he,le,ge):t.texImage2D(3553,j,xe,he,le,ge);x.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(3553,R,xe,F.width,F.height),t.texSubImage2D(3553,0,0,0,he,le,F)):t.texImage2D(3553,0,xe,he,le,F);P(x,ue)&&O(ne),Se.__version=ce.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function _e(E,x,W){if(x.image.length!==6)return;const ne=we(E,x),se=x.source;t.bindTexture(34067,E.__webglTexture,33984+W);const ce=n.get(se);if(se.version!==ce.__version||ne===!0){t.activeTexture(33984+W),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,F=[];for(let j=0;j<6;j++)!Se&&!A?F[j]=M(x.image[j],!1,!0,l):F[j]=A?x.image[j].image:x.image[j],F[j]=ht(x,F[j]);const ue=F[0],he=w(ue)||a,le=s.convert(x.format,x.encoding),xe=s.convert(x.type),ge=v(x.internalFormat,le,xe,x.encoding),Ce=a&&x.isVideoTexture!==!0,Pe=ce.__version===void 0||ne===!0;let Ve=T(x,ue,he);V(34067,x,he);let R;if(Se){Ce&&Pe&&t.texStorage2D(34067,Ve,ge,ue.width,ue.height);for(let j=0;j<6;j++){R=F[j].mipmaps;for(let ee=0;ee<R.length;ee++){const pe=R[ee];x.format!==Gt?le!==null?Ce?t.compressedTexSubImage2D(34069+j,ee,0,0,pe.width,pe.height,le,pe.data):t.compressedTexImage2D(34069+j,ee,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+j,ee,0,0,pe.width,pe.height,le,xe,pe.data):t.texImage2D(34069+j,ee,ge,pe.width,pe.height,0,le,xe,pe.data)}}}else{R=x.mipmaps,Ce&&Pe&&(R.length>0&&Ve++,t.texStorage2D(34067,Ve,ge,F[0].width,F[0].height));for(let j=0;j<6;j++)if(A){Ce?t.texSubImage2D(34069+j,0,0,0,F[j].width,F[j].height,le,xe,F[j].data):t.texImage2D(34069+j,0,ge,F[j].width,F[j].height,0,le,xe,F[j].data);for(let ee=0;ee<R.length;ee++){const ye=R[ee].image[j].image;Ce?t.texSubImage2D(34069+j,ee+1,0,0,ye.width,ye.height,le,xe,ye.data):t.texImage2D(34069+j,ee+1,ge,ye.width,ye.height,0,le,xe,ye.data)}}else{Ce?t.texSubImage2D(34069+j,0,0,0,le,xe,F[j]):t.texImage2D(34069+j,0,ge,le,xe,F[j]);for(let ee=0;ee<R.length;ee++){const pe=R[ee];Ce?t.texSubImage2D(34069+j,ee+1,0,0,le,xe,pe.image[j]):t.texImage2D(34069+j,ee+1,ge,le,xe,pe.image[j])}}}P(x,he)&&O(34067),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,W,ne,se){const ce=s.convert(W.format,W.encoding),Se=s.convert(W.type),A=v(W.internalFormat,ce,Se,W.encoding);n.get(x).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,A,x.width,x.height,x.depth,0,ce,Se,null):t.texImage2D(se,0,A,x.width,x.height,0,ce,Se,null)),t.bindFramebuffer(36160,E),De(x)?f.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(W).__webglTexture,0,qe(x)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,ne,se,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(E,x,W){if(r.bindRenderbuffer(36161,E),x.depthBuffer&&!x.stencilBuffer){let ne=33189;if(W||De(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===Mn?ne=36012:se.type===bn&&(ne=33190));const ce=qe(x);De(x)?f.renderbufferStorageMultisampleEXT(36161,ce,ne,x.width,x.height):r.renderbufferStorageMultisample(36161,ce,ne,x.width,x.height)}else r.renderbufferStorage(36161,ne,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(x.depthBuffer&&x.stencilBuffer){const ne=qe(x);W&&De(x)===!1?r.renderbufferStorageMultisample(36161,ne,35056,x.width,x.height):De(x)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<ne.length;se++){const ce=ne[se],Se=s.convert(ce.format,ce.encoding),A=s.convert(ce.type),F=v(ce.internalFormat,Se,A,ce.encoding),ue=qe(x);W&&De(x)===!1?r.renderbufferStorageMultisample(36161,ue,F,x.width,x.height):De(x)?f.renderbufferStorageMultisampleEXT(36161,ue,F,x.width,x.height):r.renderbufferStorage(36161,F,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function Ee(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const ne=n.get(x.depthTexture).__webglTexture,se=qe(x);if(x.depthTexture.format===wn)De(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(x.depthTexture.format===ri)De(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function be(E){const x=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,E)}else if(W){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=r.createRenderbuffer(),ze(x.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ze(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Ye(E,x,W){const ne=n.get(E);x!==void 0&&de(ne.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&be(E)}function Qe(E){const x=E.texture,W=n.get(E),ne=n.get(x);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=x.version,o.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,Se=w(E)||a;if(se){W.__webglFramebuffer=[];for(let A=0;A<6;A++)W.__webglFramebuffer[A]=r.createFramebuffer()}else{if(W.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const A=E.texture;for(let F=0,ue=A.length;F<ue;F++){const he=n.get(A[F]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&De(E)===!1){const A=ce?x:[x];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ue=A[F];W.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,W.__webglColorRenderbuffer[F]);const he=s.convert(ue.format,ue.encoding),le=s.convert(ue.type),xe=v(ue.internalFormat,he,le,ue.encoding,E.isXRRenderTarget===!0),ge=qe(E);r.renderbufferStorageMultisample(36161,ge,xe,E.width,E.height),r.framebufferRenderbuffer(36160,36064+F,36161,W.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),V(34067,x,Se);for(let A=0;A<6;A++)de(W.__webglFramebuffer[A],E,x,36064,34069+A);P(x,Se)&&O(34067),t.unbindTexture()}else if(ce){const A=E.texture;for(let F=0,ue=A.length;F<ue;F++){const he=A[F],le=n.get(he);t.bindTexture(3553,le.__webglTexture),V(3553,he,Se),de(W.__webglFramebuffer,E,he,36064+F,3553),P(he,Se)&&O(3553)}t.unbindTexture()}else{let A=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?A=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),V(A,x,Se),de(W.__webglFramebuffer,E,x,36064,A),P(x,Se)&&O(A),t.unbindTexture()}E.depthBuffer&&be(E)}function Xe(E){const x=w(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,se=W.length;ne<se;ne++){const ce=W[ne];if(P(ce,x)){const Se=E.isWebGLCubeRenderTarget?34067:3553,A=n.get(ce).__webglTexture;t.bindTexture(Se,A),O(Se),t.unbindTexture()}}}function st(E){if(a&&E.samples>0&&De(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,ne=E.height;let se=16384;const ce=[],Se=E.stencilBuffer?33306:36096,A=n.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){ce.push(36064+ue),E.depthBuffer&&ce.push(Se);const he=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(he===!1&&(E.depthBuffer&&(se|=256),E.stencilBuffer&&(se|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ue]),he===!0&&(r.invalidateFramebuffer(36008,[Se]),r.invalidateFramebuffer(36009,[Se])),F){const le=n.get(x[ue]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,le,0)}r.blitFramebuffer(0,0,W,ne,0,0,W,ne,se,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,A.__webglColorRenderbuffer[ue]);const he=n.get(x[ue]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,he,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function qe(E){return Math.min(h,E.samples)}function De(E){const x=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(E){const x=o.render.frame;_.get(E)!==x&&(_.set(E,x),E.update())}function ht(E,x){const W=E.encoding,ne=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===vr||W!==An&&(W===je?a===!1?e.has("EXT_sRGB")===!0&&ne===Gt?(E.format=vr,E.minFilter=vt,E.generateMipmaps=!1):x=Po.sRGBToLinear(x):(ne!==Gt||se!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.setTexture2D=ie,this.setTexture2DArray=me,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Ye,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=De}function Kf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Tn)return 5121;if(s===Gl)return 32819;if(s===Vl)return 32820;if(s===zl)return 5120;if(s===kl)return 5122;if(s===To)return 5123;if(s===Bl)return 5124;if(s===bn)return 5125;if(s===Mn)return 5126;if(s===Pi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hl)return 6406;if(s===Gt)return 6408;if(s===Wl)return 6409;if(s===jl)return 6410;if(s===wn)return 6402;if(s===ri)return 34041;if(s===vr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ql)return 6403;if(s===Xl)return 36244;if(s===Yl)return 33319;if(s===$l)return 33320;if(s===Zl)return 36249;if(s===Cs||s===Ls||s===Ps||s===Rs)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yr||s===$r||s===Zr||s===Kr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$r)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jr||s===Qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jr)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qr)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===aa||s===oa||s===la||s===ca||s===ua||s===ha||s===da||s===fa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ea)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ta)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===na)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ia)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ra)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===aa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===la)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ca)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ua)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ha)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===da)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ds)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ds)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jl||s===pa||s===ma||s===ga)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ds)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ga)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Jf extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ns extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(l,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ep extends lt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:wn,u!==wn&&u!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wn&&(n=bn),n===void 0&&u===ri&&(n=ti),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=c!==void 0?c:gt,this.flipY=!1,this.generateMipmaps=!1}}class tp extends In{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,_=null;const p=t.getContextAttributes();let d=null,g=null;const S=[],M=[],w=new Set,y=new Map,P=new Dt;P.layers.enable(1),P.viewport=new mt;const O=new Dt;O.layers.enable(2),O.viewport=new mt;const v=[P,O],T=new Jf;T.layers.enable(1),T.layers.enable(2);let I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=S[G];return Z===void 0&&(Z=new rr,S[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=S[G];return Z===void 0&&(Z=new rr,S[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=S[G];return Z===void 0&&(Z=new rr,S[G]=Z),Z.getHandSpace()};function $(G){const Z=M.indexOf(G.inputSource);if(Z===-1)return;const re=S[Z];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function z(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",D);for(let G=0;G<S.length;G++){const Z=M[G];Z!==null&&(M[G]=null,S[G].disconnect(Z))}I=null,K=null,e.setRenderTarget(d),m=null,f=null,h=null,i=null,g=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",z),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),g=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:Tn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,re=null,ae=null;p.depth&&(ae=p.stencil?35056:33190,Z=p.stencil?ri:wn,re=p.stencil?ti:bn);const V={colorFormat:32856,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(V),i.updateRenderState({layers:[f]}),g=new Cn(f.textureWidth,f.textureHeight,{format:Gt,type:Tn,depthTexture:new ep(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const we=e.properties.get(g);we.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(G){for(let Z=0;Z<G.removed.length;Z++){const re=G.removed[Z],ae=M.indexOf(re);ae>=0&&(M[ae]=null,S[ae].disconnect(re))}for(let Z=0;Z<G.added.length;Z++){const re=G.added[Z];let ae=M.indexOf(re);if(ae===-1){for(let we=0;we<S.length;we++)if(we>=M.length){M.push(re),ae=we;break}else if(M[we]===null){M[we]=re,ae=we;break}if(ae===-1)break}const V=S[ae];V&&V.connect(re)}}const q=new L,J=new L;function Q(G,Z,re){q.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const ae=q.distanceTo(J),V=Z.projectionMatrix.elements,we=re.projectionMatrix.elements,ve=V[14]/(V[10]-1),_e=V[14]/(V[10]+1),de=(V[9]+1)/V[5],ze=(V[9]-1)/V[5],Ee=(V[8]-1)/V[0],be=(we[8]+1)/we[0],Ye=ve*Ee,Qe=ve*be,Xe=ae/(-Ee+be),st=Xe*-Ee;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(st),G.translateZ(Xe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const qe=ve+Xe,De=_e+Xe,Mt=Ye-st,ht=Qe+(ae-st),E=de*_e/De*qe,x=ze*_e/De*qe;G.projectionMatrix.makePerspective(Mt,ht,E,x,qe,De)}function Y(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;T.near=O.near=P.near=G.near,T.far=O.far=P.far=G.far,(I!==T.near||K!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,K=T.far);const Z=G.parent,re=T.cameras;Y(T,Z);for(let V=0;V<re.length;V++)Y(re[V],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),G.matrix.copy(T.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const ae=G.children;for(let V=0,we=ae.length;V<we;V++)ae[V].updateMatrixWorld(!0);re.length===2?Q(T,P,O):T.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return w};let te=null;function ie(G,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;re.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let V=0;V<re.length;V++){const we=re[V];let ve=null;if(m!==null)ve=m.getViewport(we);else{const de=h.getViewSubImage(f,we);ve=de.viewport,V===0&&(e.setRenderTargetTextures(g,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(g))}let _e=v[V];_e===void 0&&(_e=new Dt,_e.layers.enable(V),_e.viewport=new mt,v[V]=_e),_e.matrix.fromArray(we.transform.matrix),_e.projectionMatrix.fromArray(we.projectionMatrix),_e.viewport.set(ve.x,ve.y,ve.width,ve.height),V===0&&T.matrix.copy(_e.matrix),ae===!0&&T.cameras.push(_e)}}for(let re=0;re<S.length;re++){const ae=M[re],V=S[re];ae!==null&&V!==void 0&&V.update(ae,Z,l||o)}if(te&&te(G,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const ae of w)Z.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)w.delete(ae),y.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of Z.detectedPlanes)if(!w.has(ae))w.add(ae),y.set(ae,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const V=y.get(ae);ae.lastChangedTime>V&&(y.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}_=null}const me=new ko;me.setAnimationLoop(ie),this.setAnimationLoop=function(G){te=G},this.dispose=function(){}}}function np(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,No(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,M)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===bt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===bt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const w=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*w}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ip(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(S,M){const w=M.program;n.uniformBlockBinding(S,w)}function l(S,M){let w=i[S.id];w===void 0&&(_(S),w=u(S),i[S.id]=w,S.addEventListener("dispose",d));const y=M.program;n.updateUBOMapping(S,y);const P=e.render.frame;s[S.id]!==P&&(f(S),s[S.id]=P)}function u(S){const M=h();S.__bindingPointIndex=M;const w=r.createBuffer(),y=S.__size,P=S.usage;return r.bindBuffer(35345,w),r.bufferData(35345,y,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,w),w}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],w=S.uniforms,y=S.__cache;r.bindBuffer(35345,M);for(let P=0,O=w.length;P<O;P++){const v=w[P];if(m(v,P,y)===!0){const T=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let K=0;for(let $=0;$<I.length;$++){const z=I[$],D=p(z);typeof z=="number"?(v.__data[0]=z,r.bufferSubData(35345,T+K,v.__data)):z.isMatrix3?(v.__data[0]=z.elements[0],v.__data[1]=z.elements[1],v.__data[2]=z.elements[2],v.__data[3]=z.elements[0],v.__data[4]=z.elements[3],v.__data[5]=z.elements[4],v.__data[6]=z.elements[5],v.__data[7]=z.elements[0],v.__data[8]=z.elements[6],v.__data[9]=z.elements[7],v.__data[10]=z.elements[8],v.__data[11]=z.elements[0]):(z.toArray(v.__data,K),K+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,v.__data)}}r.bindBuffer(35345,null)}function m(S,M,w){const y=S.value;if(w[M]===void 0){if(typeof y=="number")w[M]=y;else{const P=Array.isArray(y)?y:[y],O=[];for(let v=0;v<P.length;v++)O.push(P[v].clone());w[M]=O}return!0}else if(typeof y=="number"){if(w[M]!==y)return w[M]=y,!0}else{const P=Array.isArray(w[M])?w[M]:[w[M]],O=Array.isArray(y)?y:[y];for(let v=0;v<P.length;v++){const T=P[v];if(T.equals(O[v])===!1)return T.copy(O[v]),!0}}return!1}function _(S){const M=S.uniforms;let w=0;const y=16;let P=0;for(let O=0,v=M.length;O<v;O++){const T=M[O],I={boundary:0,storage:0},K=Array.isArray(T.value)?T.value:[T.value];for(let $=0,z=K.length;$<z;$++){const D=K[$],q=p(D);I.boundary+=q.boundary,I.storage+=q.storage}if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,O>0){P=w%y;const $=y-P;P!==0&&$-I.boundary<0&&(w+=y-P,T.__offset=w)}w+=I.storage}return P=w%y,P>0&&(w+=y-P),S.__size=w,S.__cache={},this}function p(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function d(S){const M=S.target;M.removeEventListener("dispose",d);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}function sp(){const r=Di("canvas");return r.style.display="block",r}function jo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:sp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=qt,this.toneMappingExposure=1;const p=this;let d=!1,g=0,S=0,M=null,w=-1,y=null;const P=new mt,O=new mt;let v=null,T=e.width,I=e.height,K=1,$=null,z=null;const D=new mt(0,0,T,I),q=new mt(0,0,T,I);let J=!1;const Q=new Lr;let Y=!1,te=!1,ie=null;const me=new it,G=new Ae,Z=new L,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?K:1}let V=t;function we(b,k){for(let H=0;H<b.length;H++){const U=b[H],X=e.getContext(U,k);if(X!==null)return X}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),V=we(k,b),V===null)throw we(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,_e,de,ze,Ee,be,Ye,Qe,Xe,st,qe,De,Mt,ht,E,x,W,ne,se,ce,Se,A,F,ue;function he(){ve=new pd(V),_e=new ld(V,ve,r),ve.init(_e),A=new Kf(V,ve,_e),de=new $f(V,ve,_e),ze=new _d,Ee=new Of,be=new Zf(V,ve,de,Ee,_e,A,ze),Ye=new ud(p),Qe=new fd(p),Xe=new Tc(V,_e),F=new ad(V,ve,Xe,_e),st=new md(V,Xe,ze,F),qe=new bd(V,st,Xe,ze),se=new yd(V,_e,be),x=new cd(Ee),De=new Ff(p,Ye,Qe,ve,_e,F,x),Mt=new np(p,Ee),ht=new Uf,E=new Hf(ve,_e),ne=new rd(p,Ye,Qe,de,qe,u,o),W=new Yf(p,qe,_e),ue=new ip(V,ze,_e,de),ce=new od(V,ve,ze,_e),Se=new gd(V,ve,ze,_e),ze.programs=De.programs,p.capabilities=_e,p.extensions=ve,p.properties=Ee,p.renderLists=ht,p.shadowMap=W,p.state=de,p.info=ze}he();const le=new tp(p,V);this.xr=le,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(T,I,!1))},this.getSize=function(b){return b.set(T,I)},this.setSize=function(b,k,H){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,I=k,e.width=Math.floor(b*K),e.height=Math.floor(k*K),H!==!1&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(T*K,I*K).floor()},this.setDrawingBufferSize=function(b,k,H){T=b,I=k,K=H,e.width=Math.floor(b*H),e.height=Math.floor(k*H),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,k,H,U){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,k,H,U),de.viewport(P.copy(D).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(q)},this.setScissor=function(b,k,H,U){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,H,U),de.scissor(O.copy(q).multiplyScalar(K).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){de.setScissorTest(J=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,k=!0,H=!0){let U=0;b&&(U|=16384),k&&(U|=256),H&&(U|=1024),V.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),ht.dispose(),E.dispose(),Ee.dispose(),Ye.dispose(),Qe.dispose(),qe.dispose(),F.dispose(),ue.dispose(),De.dispose(),le.dispose(),le.removeEventListener("sessionstart",pe),le.removeEventListener("sessionend",ye),ie&&(ie.dispose(),ie=null),Ne.stop()};function xe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=ze.autoReset,k=W.enabled,H=W.autoUpdate,U=W.needsUpdate,X=W.type;he(),ze.autoReset=b,W.enabled=k,W.autoUpdate=H,W.needsUpdate=U,W.type=X}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const k=b.target;k.removeEventListener("dispose",Pe),Ve(k)}function Ve(b){R(b),Ee.remove(b)}function R(b){const k=Ee.get(b).programs;k!==void 0&&(k.forEach(function(H){De.releaseProgram(H)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,H,U,X,Me){k===null&&(k=re);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Ie=We(b,k,H,U,X);de.setMaterial(U,Te);let Fe=H.index,He=1;U.wireframe===!0&&(Fe=st.getWireframeAttribute(H),He=2);const ke=H.drawRange,Be=H.attributes.position;let et=ke.start*He,At=(ke.start+ke.count)*He;Me!==null&&(et=Math.max(et,Me.start*He),At=Math.min(At,(Me.start+Me.count)*He)),Fe!==null?(et=Math.max(et,0),At=Math.min(At,Fe.count)):Be!=null&&(et=Math.max(et,0),At=Math.min(At,Be.count));const Yt=At-et;if(Yt<0||Yt===1/0)return;F.setup(X,U,Ie,H,Fe);let hn,tt=ce;if(Fe!==null&&(hn=Xe.get(Fe),tt=Se,tt.setIndex(hn)),X.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*ae()),tt.setMode(1)):tt.setMode(4);else if(X.isLine){let Ge=U.linewidth;Ge===void 0&&(Ge=1),de.setLineWidth(Ge*ae()),X.isLineSegments?tt.setMode(1):X.isLineLoop?tt.setMode(2):tt.setMode(3)}else X.isPoints?tt.setMode(0):X.isSprite&&tt.setMode(4);if(X.isInstancedMesh)tt.renderInstances(et,Yt,X.count);else if(H.isInstancedBufferGeometry){const Ge=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ss=Math.min(H.instanceCount,Ge);tt.renderInstances(et,Yt,Ss)}else tt.render(et,Yt)},this.compile=function(b,k){function H(U,X,Me){U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=bt,U.needsUpdate=!0,fe(U,X,Me),U.side=nn,U.needsUpdate=!0,fe(U,X,Me),U.side=tn):fe(U,X,Me)}f=E.get(b),f.init(),_.push(f),b.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.physicallyCorrectLights),b.traverse(function(U){const X=U.material;if(X)if(Array.isArray(X))for(let Me=0;Me<X.length;Me++){const Te=X[Me];H(Te,b,U)}else H(X,b,U)}),_.pop(),f=null};let j=null;function ee(b){j&&j(b)}function pe(){Ne.stop()}function ye(){Ne.start()}const Ne=new ko;Ne.setAnimationLoop(ee),typeof self!="undefined"&&Ne.setContext(self),this.setAnimationLoop=function(b){j=b,le.setAnimationLoop(b),b===null?Ne.stop():Ne.start()},le.addEventListener("sessionstart",pe),le.addEventListener("sessionend",ye),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,k,M),f=E.get(b,_.length),f.init(),_.push(f),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(me),te=this.localClippingEnabled,Y=x.init(this.clippingPlanes,te),h=ht.get(b,m.length),h.init(),m.push(h),$e(b,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort($,z),Y===!0&&x.beginShadows();const H=f.state.shadowsArray;if(W.render(H,b,k),Y===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,b),f.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let X=0,Me=U.length;X<Me;X++){const Te=U[X];rt(h,b,Te,Te.viewport)}}else rt(h,b,k);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(p,b,k),F.resetDefaultState(),w=-1,y=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function $e(b,k,H,U){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){U&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Te=qe.update(b),Ie=b.material;Ie.visible&&h.push(b,Te,Ie,H,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==ze.render.frame&&(b.skeleton.update(),b.skeleton.frame=ze.render.frame),!b.frustumCulled||Q.intersectsObject(b))){U&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Te=qe.update(b),Ie=b.material;if(Array.isArray(Ie)){const Fe=Te.groups;for(let He=0,ke=Fe.length;He<ke;He++){const Be=Fe[He],et=Ie[Be.materialIndex];et&&et.visible&&h.push(b,Te,et,H,Z.z,Be)}}else Ie.visible&&h.push(b,Te,Ie,H,Z.z,null)}}const Me=b.children;for(let Te=0,Ie=Me.length;Te<Ie;Te++)$e(Me[Te],k,H,U)}function rt(b,k,H,U){const X=b.opaque,Me=b.transmissive,Te=b.transparent;f.setupLightsView(H),Y===!0&&x.setGlobalState(p.clippingPlanes,H),Me.length>0&&Ht(X,k,H),U&&de.viewport(P.copy(U)),X.length>0&&C(X,k,H),Me.length>0&&C(Me,k,H),Te.length>0&&C(Te,k,H),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ht(b,k,H){const U=_e.isWebGL2;ie===null&&(ie=new Cn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Pi:Tn,minFilter:Li,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(G),U?ie.setSize(G.x,G.y):ie.setSize(yr(G.x),yr(G.y));const X=p.getRenderTarget();p.setRenderTarget(ie),p.clear();const Me=p.toneMapping;p.toneMapping=qt,C(b,k,H),p.toneMapping=Me,be.updateMultisampleRenderTarget(ie),be.updateRenderTargetMipmap(ie),p.setRenderTarget(X)}function C(b,k,H){const U=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Me=b.length;X<Me;X++){const Te=b[X],Ie=Te.object,Fe=Te.geometry,He=U===null?Te.material:U,ke=Te.group;Ie.layers.test(H.layers)&&B(Ie,k,H,Fe,He,ke)}}function B(b,k,H,U,X,Me){b.onBeforeRender(p,k,H,U,X,Me),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(p,k,H,U,b,Me),X.transparent===!0&&X.side===tn&&X.forceSinglePass===!1?(X.side=bt,X.needsUpdate=!0,p.renderBufferDirect(H,k,U,X,b,Me),X.side=nn,X.needsUpdate=!0,p.renderBufferDirect(H,k,U,X,b,Me),X.side=tn):p.renderBufferDirect(H,k,U,X,b,Me),b.onAfterRender(p,k,H,U,X,Me)}function fe(b,k,H){k.isScene!==!0&&(k=re);const U=Ee.get(b),X=f.state.lights,Me=f.state.shadowsArray,Te=X.state.version,Ie=De.getParameters(b,X.state,Me,k,H),Fe=De.getProgramCacheKey(Ie);let He=U.programs;U.environment=b.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(b.isMeshStandardMaterial?Qe:Ye).get(b.envMap||U.environment),He===void 0&&(b.addEventListener("dispose",Pe),He=new Map,U.programs=He);let ke=He.get(Fe);if(ke!==void 0){if(U.currentProgram===ke&&U.lightsStateVersion===Te)return Ue(b,Ie),ke}else Ie.uniforms=De.getUniforms(b),b.onBuild(H,Ie,p),b.onBeforeCompile(Ie,p),ke=De.acquireProgram(Ie,Fe),He.set(Fe,ke),U.uniforms=Ie.uniforms;const Be=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=x.uniform),Ue(b,Ie),U.needsLights=St(b),U.lightsStateVersion=Te,U.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix);const et=ke.getUniforms(),At=us.seqWithValue(et.seq,Be);return U.currentProgram=ke,U.uniformsList=At,ke}function Ue(b,k){const H=Ee.get(b);H.outputEncoding=k.outputEncoding,H.instancing=k.instancing,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function We(b,k,H,U,X){k.isScene!==!0&&(k=re),be.resetTextureUnits();const Me=k.fog,Te=U.isMeshStandardMaterial?k.environment:null,Ie=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:An,Fe=(U.isMeshStandardMaterial?Qe:Ye).get(U.envMap||Te),He=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!U.normalMap&&!!H.attributes.tangent,Be=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,At=!!H.morphAttributes.color,Yt=U.toneMapped?p.toneMapping:qt,hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=hn!==void 0?hn.length:0,Ge=Ee.get(U),Ss=f.state.lights;if(Y===!0&&(te===!0||b!==y)){const Ct=b===y&&U.id===w;x.setState(U,b,Ct)}let dt=!1;U.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ss.state.version||Ge.outputEncoding!==Ie||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Fe||U.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==x.numPlanes||Ge.numIntersection!==x.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==ke||Ge.morphTargets!==Be||Ge.morphNormals!==et||Ge.morphColors!==At||Ge.toneMapping!==Yt||_e.isWebGL2===!0&&Ge.morphTargetsCount!==tt)&&(dt=!0):(dt=!0,Ge.__version=U.version);let dn=Ge.currentProgram;dt===!0&&(dn=fe(U,k,X));let kr=!1,fi=!1,ws=!1;const wt=dn.getUniforms(),fn=Ge.uniforms;if(de.useProgram(dn.program)&&(kr=!0,fi=!0,ws=!0),U.id!==w&&(w=U.id,fi=!0),kr||y!==b){if(wt.setValue(V,"projectionMatrix",b.projectionMatrix),_e.logarithmicDepthBuffer&&wt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),y!==b&&(y=b,fi=!0,ws=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ct=wt.map.cameraPosition;Ct!==void 0&&Ct.setValue(V,Z.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&wt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||X.isSkinnedMesh)&&wt.setValue(V,"viewMatrix",b.matrixWorldInverse)}if(X.isSkinnedMesh){wt.setOptional(V,X,"bindMatrix"),wt.setOptional(V,X,"bindMatrixInverse");const Ct=X.skeleton;Ct&&(_e.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),wt.setValue(V,"boneTexture",Ct.boneTexture,be),wt.setValue(V,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Es=H.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&_e.isWebGL2===!0)&&se.update(X,H,U,dn),(fi||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,wt.setValue(V,"receiveShadow",X.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(fn.envMap.value=Fe,fn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),fi&&(wt.setValue(V,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&at(fn,ws),Me&&U.fog===!0&&Mt.refreshFogUniforms(fn,Me),Mt.refreshMaterialUniforms(fn,U,K,I,ie),us.upload(V,Ge.uniformsList,fn,be)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(us.upload(V,Ge.uniformsList,fn,be),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&wt.setValue(V,"center",X.center),wt.setValue(V,"modelViewMatrix",X.modelViewMatrix),wt.setValue(V,"normalMatrix",X.normalMatrix),wt.setValue(V,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ct=U.uniformsGroups;for(let Ts=0,al=Ct.length;Ts<al;Ts++)if(_e.isWebGL2){const Br=Ct[Ts];ue.update(Br,dn),ue.bind(Br,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function at(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function St(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,k,H){Ee.get(b.texture).__webglTexture=k,Ee.get(b.depthTexture).__webglTexture=H;const U=Ee.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const H=Ee.get(b);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,H=0){M=b,g=k,S=H;let U=!0,X=null,Me=!1,Te=!1;if(b){const Fe=Ee.get(b);Fe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),U=!1):Fe.__webglFramebuffer===void 0?be.setupRenderTarget(b):Fe.__hasExternalTextures&&be.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const ke=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(X=ke[k],Me=!0):_e.isWebGL2&&b.samples>0&&be.useMultisampledRTT(b)===!1?X=Ee.get(b).__webglMultisampledFramebuffer:X=ke,P.copy(b.viewport),O.copy(b.scissor),v=b.scissorTest}else P.copy(D).multiplyScalar(K).floor(),O.copy(q).multiplyScalar(K).floor(),v=J;if(de.bindFramebuffer(36160,X)&&_e.drawBuffers&&U&&de.drawBuffers(b,X),de.viewport(P),de.scissor(O),de.setScissorTest(v),Me){const Fe=Ee.get(b.texture);V.framebufferTexture2D(36160,36064,34069+k,Fe.__webglTexture,H)}else if(Te){const Fe=Ee.get(b.texture),He=k||0;V.framebufferTextureLayer(36160,36064,Fe.__webglTexture,H||0,He)}w=-1},this.readRenderTargetPixels=function(b,k,H,U,X,Me,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){de.bindFramebuffer(36160,Ie);try{const Fe=b.texture,He=Fe.format,ke=Fe.type;if(He!==Gt&&A.convert(He)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ke===Pi&&(ve.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ve.has("EXT_color_buffer_float"));if(ke!==Tn&&A.convert(ke)!==V.getParameter(35738)&&!(ke===Mn&&(_e.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-U&&H>=0&&H<=b.height-X&&V.readPixels(k,H,U,X,A.convert(He),A.convert(ke),Me)}finally{const Fe=M!==null?Ee.get(M).__webglFramebuffer:null;de.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(b,k,H=0){const U=Math.pow(2,-H),X=Math.floor(k.image.width*U),Me=Math.floor(k.image.height*U);be.setTexture2D(k,0),V.copyTexSubImage2D(3553,H,0,0,b.x,b.y,X,Me),de.unbindTexture()},this.copyTextureToTexture=function(b,k,H,U=0){const X=k.image.width,Me=k.image.height,Te=A.convert(H.format),Ie=A.convert(H.type);be.setTexture2D(H,0),V.pixelStorei(37440,H.flipY),V.pixelStorei(37441,H.premultiplyAlpha),V.pixelStorei(3317,H.unpackAlignment),k.isDataTexture?V.texSubImage2D(3553,U,b.x,b.y,X,Me,Te,Ie,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(3553,U,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):V.texSubImage2D(3553,U,b.x,b.y,Te,Ie,k.image),U===0&&H.generateMipmaps&&V.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(b,k,H,U,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,Ie=b.max.z-b.min.z+1,Fe=A.convert(U.format),He=A.convert(U.type);let ke;if(U.isData3DTexture)be.setTexture3D(U,0),ke=32879;else if(U.isDataArrayTexture)be.setTexture2DArray(U,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,U.flipY),V.pixelStorei(37441,U.premultiplyAlpha),V.pixelStorei(3317,U.unpackAlignment);const Be=V.getParameter(3314),et=V.getParameter(32878),At=V.getParameter(3316),Yt=V.getParameter(3315),hn=V.getParameter(32877),tt=H.isCompressedTexture?H.mipmaps[0]:H.image;V.pixelStorei(3314,tt.width),V.pixelStorei(32878,tt.height),V.pixelStorei(3316,b.min.x),V.pixelStorei(3315,b.min.y),V.pixelStorei(32877,b.min.z),H.isDataTexture||H.isData3DTexture?V.texSubImage3D(ke,X,k.x,k.y,k.z,Me,Te,Ie,Fe,He,tt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ke,X,k.x,k.y,k.z,Me,Te,Ie,Fe,tt.data)):V.texSubImage3D(ke,X,k.x,k.y,k.z,Me,Te,Ie,Fe,He,tt),V.pixelStorei(3314,Be),V.pixelStorei(32878,et),V.pixelStorei(3316,At),V.pixelStorei(3315,Yt),V.pixelStorei(32877,hn),X===0&&U.generateMipmaps&&V.generateMipmap(ke),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?be.setTextureCube(b,0):b.isData3DTexture?be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?be.setTexture2DArray(b,0):be.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){g=0,S=0,M=null,de.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class rp extends jo{}rp.prototype.isWebGL1Renderer=!0;class Rr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new Rr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class ap extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class op extends lt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=gt,u=gt,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lp extends lt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:vt,this.magFilter=s!==void 0?s:vt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class vs extends Ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new L,u=new Ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}static fromJSON(e){return new vs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pn extends Ft{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const p=[],d=n/2;let g=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(m,2));function S(){const w=new L,y=new L;let P=0;const O=(t-e)/n;for(let v=0;v<=s;v++){const T=[],I=v/s,K=I*(t-e)+e;for(let $=0;$<=i;$++){const z=$/i,D=z*c+a,q=Math.sin(D),J=Math.cos(D);y.x=K*q,y.y=-I*n+d,y.z=K*J,h.push(y.x,y.y,y.z),w.set(q,O,J).normalize(),f.push(w.x,w.y,w.z),m.push(z,1-I),T.push(_++)}p.push(T)}for(let v=0;v<i;v++)for(let T=0;T<s;T++){const I=p[T][v],K=p[T+1][v],$=p[T+1][v+1],z=p[T][v+1];u.push(I,K,z),u.push(K,$,z),P+=6}l.addGroup(g,P,0),g+=P}function M(w){const y=_,P=new Ae,O=new L;let v=0;const T=w===!0?e:t,I=w===!0?1:-1;for(let $=1;$<=i;$++)h.push(0,d*I,0),f.push(0,I,0),m.push(.5,.5),_++;const K=_;for(let $=0;$<=i;$++){const D=$/i*c+a,q=Math.cos(D),J=Math.sin(D);O.x=T*J,O.y=d*I,O.z=T*q,h.push(O.x,O.y,O.z),f.push(0,I,0),P.x=q*.5+.5,P.y=J*.5*I+.5,m.push(P.x,P.y),_++}for(let $=0;$<i;$++){const z=y+$,D=K+$;w===!0?u.push(D,D+1,z):u.push(D+1,D,z),v+=3}l.addGroup(g,v,w===!0?1:2),g+=v}}static fromJSON(e){return new Pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr extends Ft{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,m=new L,_=new Ae;for(let p=0;p<=i;p++){for(let d=0;d<=n;d++){const g=s+d/n*o;m.x=h*Math.cos(g),m.y=h*Math.sin(g),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let p=0;p<i;p++){const d=p*(n+1);for(let g=0;g<n;g++){const S=g+d,M=S,w=S+n+1,y=S+n+2,P=S+1;a.push(M,w,P),a.push(w,y,P)}}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(u,2))}static fromJSON(e){return new Dr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ys extends Ft{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,f=new L,m=[],_=[],p=[],d=[];for(let g=0;g<=n;g++){const S=[],M=g/n;let w=0;g==0&&o==0?w=.5/t:g==n&&c==Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const P=y/t;h.x=-e*Math.cos(i+P*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+P*s)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(P+w,1-M),S.push(l++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const M=u[g][S+1],w=u[g][S],y=u[g+1][S],P=u[g+1][S+1];(g!==0||o>0)&&m.push(M,w,P),(g!==n-1||c<Math.PI)&&m.push(w,y,P)}this.setIndex(m),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(d,2))}static fromJSON(e){return new ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cp extends ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ir extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ja={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class up{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],_=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const hp=new up;class qo{constructor(e){this.manager=e!==void 0?e:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Xo extends qo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ja.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Di("img");function c(){u(),Ja.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class dp extends qo{constructor(e){super(e)}load(e,t,n,i){const s=new lt,o=new Xo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fr extends Ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class bi extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ar=new it,Qa=new L,eo=new L;class fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qa),eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eo),t.updateMatrixWorld(),ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pp extends fp{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zn extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kn extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=to(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=to();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function to(){return(typeof performance=="undefined"?Date:performance).now()}class no{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);const io={type:"change"},or={type:"start"},so={type:"end"};class gp extends In{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:On.ROTATE,TWO:On.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ht),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(io),n.update(),s=i.NONE},this.update=function(){const A=new L,F=new Ln().setFromUnitVectors(e.up,new L(0,1,0)),ue=F.clone().invert(),he=new L,le=new Ln,xe=2*Math.PI;return function(){const Ce=n.object.position;A.copy(Ce).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(O()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Pe=n.minAzimuthAngle,Ve=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ve)&&(Pe<-Math.PI?Pe+=xe:Pe>Math.PI&&(Pe-=xe),Ve<-Math.PI?Ve+=xe:Ve>Math.PI&&(Ve-=xe),Pe<=Ve?a.theta=Math.max(Pe,Math.min(Ve,a.theta)):a.theta=a.theta>(Pe+Ve)/2?Math.max(Pe,a.theta):Math.min(Ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(ue),Ce.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||he.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o?(n.dispatchEvent(io),he.copy(n.object.position),le.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",Mt),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ht)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new no,c=new no;let l=1;const u=new L;let h=!1;const f=new Ae,m=new Ae,_=new Ae,p=new Ae,d=new Ae,g=new Ae,S=new Ae,M=new Ae,w=new Ae,y=[],P={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function T(A){c.theta-=A}function I(A){c.phi-=A}const K=function(){const A=new L;return function(ue,he){A.setFromMatrixColumn(he,0),A.multiplyScalar(-ue),u.add(A)}}(),$=function(){const A=new L;return function(ue,he){n.screenSpacePanning===!0?A.setFromMatrixColumn(he,1):(A.setFromMatrixColumn(he,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ue),u.add(A)}}(),z=function(){const A=new L;return function(ue,he){const le=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;A.copy(xe).sub(n.target);let ge=A.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),K(2*ue*ge/le.clientHeight,n.object.matrix),$(2*he*ge/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(ue*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),$(he*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A){f.set(A.clientX,A.clientY)}function Q(A){S.set(A.clientX,A.clientY)}function Y(A){p.set(A.clientX,A.clientY)}function te(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;T(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m),n.update()}function ie(A){M.set(A.clientX,A.clientY),w.subVectors(M,S),w.y>0?D(v()):w.y<0&&q(v()),S.copy(M),n.update()}function me(A){d.set(A.clientX,A.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(d),n.update()}function G(A){A.deltaY<0?q(v()):A.deltaY>0&&D(v()),n.update()}function Z(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function re(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);f.set(A,F)}}function ae(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);p.set(A,F)}}function V(){const A=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ue=Math.sqrt(A*A+F*F);S.set(0,ue)}function we(){n.enableZoom&&V(),n.enablePan&&ae()}function ve(){n.enableZoom&&V(),n.enableRotate&&re()}function _e(A){if(y.length==1)m.set(A.pageX,A.pageY);else{const ue=Se(A),he=.5*(A.pageX+ue.x),le=.5*(A.pageY+ue.y);m.set(he,le)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;T(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m)}function de(A){if(y.length===1)d.set(A.pageX,A.pageY);else{const F=Se(A),ue=.5*(A.pageX+F.x),he=.5*(A.pageY+F.y);d.set(ue,he)}g.subVectors(d,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(d)}function ze(A){const F=Se(A),ue=A.pageX-F.x,he=A.pageY-F.y,le=Math.sqrt(ue*ue+he*he);M.set(0,le),w.set(0,Math.pow(M.y/S.y,n.zoomSpeed)),D(w.y),S.copy(M)}function Ee(A){n.enableZoom&&ze(A),n.enablePan&&de(A)}function be(A){n.enableZoom&&ze(A),n.enableRotate&&_e(A)}function Ye(A){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",Xe)),ne(A),A.pointerType==="touch"?E(A):qe(A))}function Qe(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):De(A))}function Xe(A){se(A),y.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(so),s=i.NONE}function st(A){se(A)}function qe(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Fn.DOLLY:if(n.enableZoom===!1)return;Q(A),s=i.DOLLY;break;case Fn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;Y(A),s=i.PAN}else{if(n.enableRotate===!1)return;J(A),s=i.ROTATE}break;case Fn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;J(A),s=i.ROTATE}else{if(n.enablePan===!1)return;Y(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(or)}function De(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;te(A);break;case i.DOLLY:if(n.enableZoom===!1)return;ie(A);break;case i.PAN:if(n.enablePan===!1)return;me(A);break}}function Mt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(or),G(A),n.dispatchEvent(so))}function ht(A){n.enabled===!1||n.enablePan===!1||Z(A)}function E(A){switch(ce(A),y.length){case 1:switch(n.touches.ONE){case On.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case On.PAN:if(n.enablePan===!1)return;ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case On.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),s=i.TOUCH_DOLLY_PAN;break;case On.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(or)}function x(A){switch(ce(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(A),n.update();break;default:s=i.NONE}}function W(A){n.enabled!==!1&&A.preventDefault()}function ne(A){y.push(A)}function se(A){delete P[A.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==A.pointerId){y.splice(F,1);return}}function ce(A){let F=P[A.pointerId];F===void 0&&(F=new Ae,P[A.pointerId]=F),F.set(A.pageX,A.pageY)}function Se(A){const F=A.pointerId===y[0].pointerId?y[1]:y[0];return P[F.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",Mt,{passive:!1}),this.update()}}const lr=1/60,Yo=2,_p=.03,xp=1-_p,vp=.12,yp=1.225,Sn={DEXTER:"dexter",SINISTER:"sinister"},Le={TOP:"top",LEFT:"left",BOTTOM:"bottom",RIGHT:"right"},Ze={VERTICAL:"vertical",HORIZONTAL:"horizontal",OUTRIGGER:"outrigger",CROSSBAR:"crossbar",GALLERY:"gallery",AUSTRALIAN:"australian"},Bt={NONE:"none",TOP_RIGHT:"topright",TOP_LEFT:"topleft"};function bp(r,e,t){const n=r*e,i=new Uint8Array(4*n),s=Math.floor(t.r*255),o=Math.floor(t.g*255),a=Math.floor(t.b*255),c=1*255;for(let u=0;u<n;u++){const h=u*4;i[h]=s,i[h+1]=o,i[h+2]=a,i[h+3]=c}const l=new op(i,r,e);return l.needsUpdate=!0,l}const Mp=`uniform sampler2D textureMap;
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
`,ro={depth_frag:Mp,depth_vert:Sp};class wp extends Ft{constructor(e=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),t=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],s=[],o=[],a=[],c=1e-5,l=new L,u=new L,h=new L,f=new L,m=new L,_=t+1;for(let p=0;p<=n;p++){const d=p/n;for(let g=0;g<=t;g++){const S=g/t;e(S,d,u),s.push(u.x,u.y,u.z),S-c>=0?(e(S-c,d,h),f.subVectors(u,h)):(e(S+c,d,h),f.subVectors(h,u)),d-c>=0?(e(S,d-c,h),m.subVectors(u,h)):(e(S,d+c,h),m.subVectors(h,u)),l.crossVectors(f,m).normalize(),o.push(l.x,l.y,l.z),a.push(S,d)}}for(let p=0;p<n;p++)for(let d=0;d<t;d++){const g=p*_+d,S=p*_+d+1,M=(p+1)*_+d+1,w=(p+1)*_+d;i.push(g,S,w),i.push(S,M,w)}this.setIndex(i),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(a,2))}}class Ep{constructor(e,t){this.position=e.clone(),this.previous=e.clone(),this.original=e.clone(),this.mass=t,this.inverseMass=1/t,this.acceleration=new L,this.tmp=new L}applyForce(e){this.acceleration.addScaledVector(e,this.inverseMass)}integrate(e){const t=this.tmp.subVectors(this.position,this.previous).multiplyScalar(xp).add(this.position).addScaledVector(this.acceleration,e);this.tmp=this.previous,this.previous=this.position,this.position=t,this.acceleration.set(0,0,0)}}const cr=new L;class vn{constructor(e,t,n){this.p1=e,this.p2=t,this.restDistance=n}resolve(){const e=this.p1,t=this.p2,n=this.restDistance;cr.subVectors(t.position,e.position);const i=cr.length();if(i===0)return;const s=cr.multiplyScalar((1-n/i)/2);e.position.add(s),t.position.sub(s)}}class Tp{constructor(e,t,n,i){const s=n*e,o=n*t,a=[],c=[],l=(p,d)=>a[p+d*(e+1)],u=(p,d,g)=>{g.set(p*s,d*o,0)},h=new L,f=i/((t+1)*(e+1));for(let p=0;p<=t;p++)for(let d=0;d<=e;d++)u(d/e,p/t,h),a.push(new Ep(h,f));for(let p=0;p<t;p++)for(let d=0;d<e;d++)c.push(new vn(l(d,p),l(d,p+1),n)),c.push(new vn(l(d,p),l(d+1,p),n));for(let p=e,d=0;d<t;d++)c.push(new vn(l(p,d),l(p,d+1),n));for(let p=t,d=0;d<e;d++)c.push(new vn(l(d,p),l(d+1,p),n));const m=Math.sqrt(n*n*2);for(let p=0;p<t;p++)for(let d=0;d<e;d++)c.push(new vn(l(d,p),l(d+1,p+1),m)),c.push(new vn(l(d+1,p),l(d,p+1),m));const _=new wp(u,e,t);_.getAttribute("position").setUsage(ic),this.xSegments=e,this.ySegments=t,this.restDistance=n,this.width=s,this.height=o,this.particles=a,this.constraints=c,this.particleAt=l,this.geometry=_}reset(){const e=this.particles;for(let t=0,n=e.length;t<n;t++){const i=e[t];i.previous.copy(i.position.copy(i.original))}}simulate(e){const t=this.particles,n=this.constraints,i=e*e;for(let s=0,o=t.length;s<o;s++)t[s].integrate(i);for(let s=0,o=Yo;s<o;s++)for(let a=0,c=n.length;a<c;a++)n[a].resolve()}render(){const e=this.particles,t=this.geometry,n=t.getAttribute("position"),i=n.array;for(let s=0,o=e.length;s<o;s++){const a=e[s].position,c=s*3;i[c]=a.x,i[c+1]=a.y,i[c+2]=a.z}n.needsUpdate=!0,t.computeVertexNormals()}}const ao=1.2,is=new L;class oo extends vn{resolve(){const e=this.p1,t=this.p2,n=this.restDistance*ao;is.subVectors(e.position,t.position);const i=is.length()/ao;is.normalize();const s=is.multiplyScalar(i-n);i>n&&t.position.add(s)}}const $o=bp(1,1,new Oe(16777215));function Ap(r){const{width:e,height:t,mass:n,restDistance:i}=r;return new Tp(Math.max(1,Math.round(e/i)),Math.max(1,Math.round(t/i)),i,n*e*t)}function Cp(r,e){const t=r.geometry;let n=$o,i;const s=a=>(a.needsUpdate=!0,a.anisotropy=16,a.minFilter=vt,a.magFilter=vt,a.wrapS=a.wrapT=Nt,a),o=(a,c)=>{a.encoding=je;const l=new Ir({alphaTest:.5,color:16777215,metalness:.08,roughness:.86,side:c,map:a}),u=new yt(t,l);return u.castShadow=!0,u.customDepthMaterial=new Xt({glslVersion:xr,uniforms:{textureMap:{value:a}},vertexShader:ro.depth_vert,fragmentShader:ro.depth_frag}),u.position.set(0,-r.height,0),u};return e&&e.texture&&(e.texture instanceof lt?(n=s(e.texture),e.backSideTexture instanceof lt&&(i=s(e.backSideTexture))):console.error("FlagWaver.Flag: options.texture must be an instance of THREE.Texture.")),[o(n,i?nn:tn),i?o(i,bt):null]}const Lp=(()=>{const r={edges:[],spacing:1};function e(t,n,i,s){const{xSegments:o,ySegments:a,particleAt:c}=t,{spacing:l}=s;switch(i){case Le.TOP:for(let u=0;u<=o;u+=l)n.push(c(u,a));break;case Le.LEFT:for(let u=0;u<=a;u+=l)n.push(c(0,u));break;case Le.BOTTOM:for(let u=0;u<=o;u+=l)n.push(c(u,0));break;case Le.RIGHT:for(let u=0;u<=a;u+=l)n.push(c(o,u));break}}return function(n,i,s){const o=Object.assign({},r,s),{edges:a}=o;if(typeof a=="string")e(n,i,a,o);else if(a&&a.length)for(let c=0,l=a.length;c<l;c++)e(n,i,a[c],o)}})(),ps=class ps{constructor(e){const t=Object.assign({},ps.defaults,e);this.cloth=Ap(t),this.pins=[],this.lengthConstraints=[];const[n,i]=Cp(this.cloth,t);this.mesh=n,this.mesh2=i,this.object=new Ke,this.object.add(this.mesh),this.mesh2&&this.object.add(this.mesh2),this.pin(t.pin)}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.customDepthMaterial.dispose(),this.mesh2&&(this.mesh2.material.dispose(),this.mesh2.material.map.dispose(),this.mesh2.customDepthMaterial.dispose())}pin(e){Lp(this.cloth,this.pins,e)}unpin(){this.pins=[]}setLengthConstraints(e){const{xSegments:t,ySegments:n,restDistance:i,particleAt:s}=this.cloth,o=[];if(e===Le.LEFT)for(let a=0;a<=n;a++)for(let c=0;c<t;c++)o.push(new oo(s(c,a),s(c+1,a),i));else if(e===Le.TOP)for(let a=0;a<=t;a++)for(let c=n;c>0;c--)o.push(new oo(s(a,c),s(a,c-1),i));this.lengthConstraints=o}reset(){this.cloth.reset()}simulate(e){const t=this.pins,n=this.lengthConstraints;this.cloth.simulate(e);for(let i=0,s=t.length;i<s;i++){const o=t[i];o.previous.copy(o.position.copy(o.original))}for(let i=0,s=Yo;i<s;i++)for(let o=0,a=n.length;o<a;o++)n[o].resolve()}render(){this.cloth.render()}};Ni(ps,"defaults",{width:1.8,height:1.2,mass:.11,restDistance:1.2/10,rigidness:1,texture:$o,backSideTexture:null,pin:{edges:[Le.LEFT]}});let Rn=ps;function Or(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,c=new Ft;let l=0;for(let u=0;u<r.length;++u){const h=r[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,u),l+=m}}if(t){let u=0;const h=[];for(let f=0;f<r.length;++f){const m=r[f].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+u);u+=r[f].attributes.position.count}c.setIndex(h)}for(const u in s){const h=lo(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const m=[];for(let p=0;p<o[u].length;++p)m.push(o[u][p][f]);const _=lo(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}return c}function lo(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const c=r[a];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=c.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new Vt(s,t,n)}function hi(r){const e=r.poleWidth/2,t=r.poleLength,n=32,i=r.poleCapSize/2,s=new Pn(e,e,t,n);s.translate(0,r.poleLength/2,0);const o=new Pn(i,i,i,n);return o.translate(0,t+i/2,0),Or([s,o])}function Pp(r){const e=hi(r),t=r.poleWidth/2,n=r.poleLength,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=r.crossbarCapSize/2,c=r.poleTopOffset,l=new Pn(i,i,s,o);l.rotateZ(Math.PI/2);const u=new Pn(a,a,a,o),h=u.clone(),f=n-c,m=t+i;return u.rotateZ(Math.PI/2),u.translate(-s/2,f,m),h.rotateZ(-Math.PI/2),h.translate(s/2,f,m),l.translate(0,f,m),Or([e,l,u,h])}function Rp(r){const e=hi(r),t=r.poleLength,n=r.poleCapSize/2,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=new Pn(i,i,s,o);return a.rotateZ(Math.PI/2),a.translate(s/2,t+n-i,0),Or([e,a])}class un{constructor(e){const t=Object.assign({},this.constructor.defaults,e),n=this.buildGeometry(t),i=new Ir({color:16711422,metalness:.98,roughness:.55}),s=new yt(n,i);s.receiveShadow=!0,s.castShadow=!0,this.top=new L(0,t.poleLength,0),this.mesh=s,this.object=this.mesh}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose()}buildGeometry(e){return hi(e)}addFlag(e){e.unpin(),e.pin({edges:[Le.LEFT]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top)}}Ni(un,"defaults",(()=>{const e={};return e.flagpoleType=Ze.VERTICAL,e.poleWidth=.076,e.poleLength=6,e.poleCapSize=e.poleWidth*4/3,e.crossbarWidth=e.poleWidth*2/3,e.crossbarLength=1.2,e.crossbarCapSize=e.crossbarWidth*3/2,e.poleTopOffset=.1,e})());class Dp{constructor(e){const t=Object.assign({},e),{flagpole:n,flag:i}=t;this.flagpole=n||new un,this.flag=i||new Rn,this.flagpole.addFlag(this.flag,0),this.object=new Ke,this.object.add(this.flagpole.object),this.object.add(this.flag.object)}destroy(){this.destroyChildSubject(this.flagpole),this.destroyChildSubject(this.flag)}destroyChildSubject(e){e&&(this.object.remove(e.object),e.destroy())}reset(){this.flag.reset()}simulate(e){this.flag.simulate(e)}render(){this.flag.render()}}const Ci={blowFromLeftDirection:(r,e)=>r.set(2e3,0,1e3),rotatingDirection:(r,e)=>r.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),constantSpeed:(r,e)=>r,variableSpeed:(r,e)=>r*(1+.25*Math.cos(e/7e3))};function Ip(r){return .5*yp*r*r}function Fp(r){return r.x===0&&(r.x=.001),r.y===0&&(r.y=.001),r.z===0&&(r.z=.001),r}function Op(r){return r===0?.001:r}class Zo{constructor(e){const t=Object.assign({},this.constructor.defaults,e);this.direction=t.direction,this.speed=t.speed,this.directionFn=t.directionFn,this.speedFn=t.speedFn,this.pressure=new L}update(){const e=Date.now();this.directionFn(Fp(this.pressure.copy(this.direction)),e).normalize().multiplyScalar(Ip(this.speedFn(Op(this.speed),e)))}}Ni(Zo,"defaults",{direction:new L(1,0,0),speed:10,directionFn:Ci.blowFromLeftDirection,speedFn:Ci.constantSpeed});class Np extends un{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength-t.poleTopOffset,t.poleWidth/2+t.crossbarWidth/2),this.verticalHoisting=t.verticalHoisting}buildGeometry(e){return Pp(e)}addFlag(e){switch(e.unpin(),this.verticalHoisting){case Bt.NONE:e.pin({edges:[Le.TOP]}),e.setLengthConstraints(Le.TOP),e.object.position.add(this.top),e.object.position.x=-e.cloth.width/2;break;case Bt.TOP_LEFT:e.pin({edges:[Le.LEFT]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top),e.object.position.x=-e.cloth.height/2,e.object.rotateZ(Math.PI*3/2),e.object.rotateX(Math.PI);break;case Bt.TOP_RIGHT:default:e.pin({edges:[Le.LEFT]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top),e.object.position.x=e.cloth.height/2,e.object.rotateZ(Math.PI*3/2);break}}}class Up extends un{buildGeometry(e){return Rp(e)}addFlag(e){e.unpin(),e.pin({edges:[Le.LEFT,Le.TOP]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top)}}const zp=new L(0,0,1);class kp extends un{constructor(e){super(e),this.top.applyAxisAngle(zp,Math.PI*3/2)}buildGeometry(e){const t=hi(e);return t.rotateZ(Math.PI*3/2),t}addFlag(e){e.unpin(),e.pin({edges:[Le.LEFT]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*3/2)}}const Bp=new L(0,0,1);class Gp extends un{constructor(e){super(e),this.top.applyAxisAngle(Bp,Math.PI*7/4)}buildGeometry(e){const t=hi(e);return t.rotateZ(Math.PI*7/4),t}addFlag(e){e.unpin(),e.pin({edges:[Le.LEFT]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*7/4)}}const ss=new L,co=new L;function Ko(r,e){return ss.copy(r),e instanceof Ke&&(co.setFromMatrixPosition(e.matrixWorld),ss.add(co),e.worldToLocal(ss)),ss}const Vp=new L(0,-9.80665,0);function Hp(r,e){const t=r.particles,n=Ko(Vp,e);for(let i=0,s=t.length;i<s;i++)t[i].acceleration.add(n)}new L;const rs=new L,uo=new L;function Wp(r,e,t){return rs.subVectors(t,e),uo.subVectors(r,e),rs.cross(uo),rs.normalize(),rs}function ho(r,e,t){const n=r.particles,i=r.geometry.getIndex();if(e){const s=r.restDistance*r.restDistance/2,o=Ko(e.pressure,t).multiplyScalar(vp*s/3);for(let a=0,c=i.count;a<c;a+=3){const l=i.getX(a),u=i.getX(a+1),h=i.getX(a+2),f=n[l],m=n[u],_=n[h],p=Wp(f.position,m.position,_.position);p.multiplyScalar(p.dot(o)),f.applyForce(p),m.applyForce(p),_.applyForce(p)}}}class jp extends un{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength*2/3,0)}buildGeometry(e){const t=hi(e);return t.translate(0,-e.poleLength*5/3,0),t.rotateZ(Math.PI),t}addFlag(e){e.unpin(),e.pin({edges:[Le.LEFT]}),e.setLengthConstraints(Le.LEFT),e.object.position.add(this.top),e.object.translateY(e.cloth.height)}}function qp(r,e){const t=Object.assign({},r);let n;switch(t.flagpoleType){case Ze.HORIZONTAL:n=new kp(t);break;case Ze.OUTRIGGER:n=new Gp(t);break;case Ze.CROSSBAR:t.crossbarLength=t.verticalHoisting===Bt.NONE?e.cloth.width:e.cloth.height,n=new Np(t);break;case Ze.GALLERY:t.crossbarLength=e.cloth.width,n=new Up(t);break;case Ze.AUSTRALIAN:n=new jp(t);break;case Ze.VERTICAL:default:n=new un(t);break}return n}function fo(r){switch(r){case Le.TOP:return 0;case Le.LEFT:return-Math.PI/2;case Le.BOTTOM:return Math.PI;case Le.RIGHT:return Math.PI/2;default:return 0}}const Ii=r=>!isNaN(parseFloat(r))&&isFinite(r),Xp=r=>!!(r&&typeof r=="object"),Yp=500,$p={image:null,backSideImage:null,width:"auto",height:"auto",hoisting:Sn.DEXTER,orientation:Le.TOP,resolution:256};function Zp(r,e){const t=r.width||r.videoWidth,n=r.height||r.videoHeight;if(e.width==="auto"&&e.height==="auto"){const i=Rn.defaults.height;return t<n?{width:i,height:i*n/t}:{width:i*t/n,height:i}}else return e.width==="auto"&&Ii(e.height)?{width:e.height*t/n,height:e.height}:Ii(e.width)&&e.height==="auto"?{width:e.width,height:e.width*n/t}:{width:e.width,height:e.height}}function Kp(r,e){const{width:t,height:n}=r?Zp(r,e):e;if(Ii(t)&&Ii(n)){const i=Math.min(1,Yp/Math.max(t,n));return{width:t*i,height:n*i}}else return{width:Rn.defaults.width,height:Rn.defaults.height}}function Jp(r){return r.orientation===Le.LEFT||r.orientation===Le.RIGHT}function Qp(r,e){const t=document.createElement("canvas"),n=t.getContext("2d"),i=r.width,s=r.height,o=Math.min(1,e.height*e.resolution/s),a=Math.round(i*o),c=Math.round(s*o);return t.width=a,t.height=c,n.drawImage(r,0,0,a,c),t}function po(r,e,t){const n=r instanceof HTMLVideoElement?new lp(r):new lt(Qp(r,e));if(n.matrixAutoUpdate=!1,Xp(t)){const i=n.matrix;i.scale(1,1),t.reflect&&i.translate(-1,0).scale(-1,1),Ii(t.rotate)&&i.translate(-.5,-.5).rotate(-t.rotate).translate(.5,.5)}return n}function em(r){const e={};Jp(r)?(e.width=r.height,e.height=r.width):(e.width=r.width,e.height=r.height);const t=r.hoisting===Sn.SINISTER;let{image:n,backSideImage:i}=r;if(t&&i){const s=n;n=i,i=s}return n&&(e.texture=po(n,r,{reflect:i?!1:t,rotate:fo(r.orientation)})),i&&(e.backSideTexture=po(i,r,{reflect:!0,rotate:-fo(r.orientation)})),e}function tm(r){const e=Object.assign({},$p,r);return Object.assign(e,Kp(e.image,e)),em(e)}const Jo=new Xo;Jo.setCrossOrigin("anonymous");function ur(r,e,t){Jo.load(r,e,null,n=>{console.error(`FlagWaver.loadImage: Failed to load image from ${r}.`),t&&t(n)})}const ln={day:{sky:["#4a90d9","#8fc3f2","#dcefff"],label:"Day",css:"linear-gradient(180deg, #4a90d9 0%, #8fc3f2 16%, #dcefff 30%, #dcefff 100%)",stops:["#5a9fe0","#a6d2f7","#dcefff"],fog:14479359,ground:6196298,lights:()=>{const r=new Kn(16777215,.55),e=new bi(13625087,8034906,.35),t=new Zn(16774368,6);return t.position.set(20,70,40),{ambient:[r,e],sun:t}}},sunset:{sky:["#2b2d6b","#d9706e","#ffd79a"],label:"Sunset",css:"linear-gradient(180deg, #2b2d6b 0%, #c75a6b 14%, #f6a35a 23%, #ffd79a 30%, #ffd79a 100%)",stops:["#2b2d6b","#c75a6b","#f6a35a","#ffd79a"],fog:16766874,ground:4866869,lights:()=>{const r=new Kn(16765088,.35),e=new bi(16756864,3811898,.4),t=new Zn(16752736,5.5);return t.position.set(-60,18,30),{ambient:[r,e],sun:t}}},overcast:{sky:["#8d99a6","#b8c2cc","#d7dde3"],label:"Overcast",css:"linear-gradient(180deg, #8d99a6 0%, #b8c2cc 18%, #d7dde3 30%, #d7dde3 100%)",stops:["#8d99a6","#b8c2cc","#d7dde3"],fog:14147043,ground:5662282,lights:()=>{const r=new Kn(16777215,.9),e=new bi(14739182,6320218,.5),t=new Zn(15791359,2.5);return t.position.set(10,70,20),{ambient:[r,e],sun:t}}},night:{sky:["#050816","#0c1733","#1a2a4f"],label:"Night",css:"linear-gradient(180deg, #050816 0%, #0c1733 16%, #1a2a4f 30%, #1a2a4f 100%)",stops:["#050816","#0c1733","#1a2a4f"],fog:1714767,ground:1713174,lights:()=>{const r=new Kn(8425664,.35),e=new bi(4876992,1053720,.6),t=new Zn(13161727,4);return t.position.set(-40,50,60),{ambient:[r,e],sun:t}}},studio:{sky:["#1c1c1f","#232327","#2a2a2f"],label:"Studio",css:"linear-gradient(180deg, #1c1c1f 0%, #2a2a2f 30%, #2a2a2f 100%)",stops:["#1c1c1f","#2a2a2f"],fog:2763311,ground:2894896,lights:()=>{const r=new Kn(16777215,.5),e=new bi(16777215,4210752,.4),t=new Zn(16777215,5);return t.position.set(25,60,50),{ambient:[r,e],sun:t}}},green:{sky:["#00b140","#00b140","#00b140"],label:"Green screen",css:"#00b140",stops:["#00b140","#00b140"],fog:45376,ground:45376,lights:()=>{const r=new Kn(16777215,.7),e=new Zn(16777215,5);return e.position.set(25,60,50),{ambient:[r],sun:e}}}},nm=Object.keys(ln),im=`
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
}`;class rm{constructor(e=280){this.uniforms={topColor:{value:new Oe(4886745)},midColor:{value:new Oe(9421810)},horizonColor:{value:new Oe(14479359)},center:{value:new Oe(0,0,0)}};const t=new Xt({uniforms:this.uniforms,vertexShader:im,fragmentShader:sm,side:bt,depthWrite:!1,fog:!1});this.mesh=new yt(new ys(e,48,24),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColors(e,t,n){this.uniforms.topColor.value.set(e),this.uniforms.midColor.value.set(t),this.uniforms.horizonColor.value.set(n)}follow(e){this.mesh.position.set(e.position.x,0,e.position.z);const t=this.uniforms.center.value;t.r=e.position.x,t.g=0,t.b=e.position.z}}const am=`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`,om=`
uniform sampler2D map;
uniform int mode;          // 0 photo, 1 cylindrical strip, 2 equirectangular
uniform vec3 center;       // viewpoint for pano modes
uniform mat4 projVP;       // projector view-projection for photo mode
uniform float horizonV;    // image v (0 bottom .. 1 top) of the horizon
uniform float tanRange;    // strip: tan(top) - tan(bottom) over the full image height
uniform float yaw;         // pano rotation (radians)
uniform vec3 edgeTop;      // shown above the image
uniform vec3 edgeBottom;   // shown below / beside the image
varying vec3 vWorld;

void main() {
    vec2 uv;
    float behind = 0.0;
    if (mode == 0) {
        vec4 c = projVP * vec4(vWorld, 1.0);
        if (c.w <= 0.0) { uv = vec2(0.5, 0.0); behind = 1.0; }
        else uv = c.xy / c.w * 0.5 + 0.5;
    } else {
        vec3 d = vWorld - center;
        float az = atan(d.x, -d.z) + yaw;
        float u = fract(0.5 + az / 6.28318530718);
        float v;
        if (mode == 1) {
            float t = d.y / max(length(d.xz), 1e-4);
            v = horizonV + t / tanRange;
        } else {
            float el = asin(clamp(d.y / max(length(d), 1e-4), -1.0, 1.0));
            v = horizonV + el / 3.14159265359;
        }
        uv = vec2(u, v);
    }
    vec2 cl = vec2(mode == 0 ? clamp(uv.x, 0.0, 1.0) : uv.x, clamp(uv.y, 0.0, 1.0));
    float outside = length(uv - vec2(mode == 0 ? clamp(uv.x, 0.0, 1.0) : uv.x, cl.y)) + behind;
    vec3 col = texture2D(map, cl).rgb;
    vec3 ec = uv.y > 1.0 ? edgeTop : edgeBottom;
    col = mix(col, ec, smoothstep(0.0, 0.06, outside));
    gl_FragColor = vec4(col, 1.0);
    #include <encodings_fragment>
}`,mo=380,lm=400;class cm{constructor(e){this.world=e,this.active=null,this.loader=new dp,this.loader.setCrossOrigin("anonymous"),this.height=0,this.scale=1,this.yaw=0,this.eye=2.2,this.savedFov=e.camera.fov,this._token=0,this.material=new Xt({uniforms:{map:{value:null},mode:{value:0},center:{value:new L},projVP:{value:new it},horizonV:{value:.5},tanRange:{value:1},yaw:{value:0},edgeTop:{value:new Oe(.5,.6,.8)},edgeBottom:{value:new Oe(.4,.4,.4)}},vertexShader:am,fragmentShader:om,fog:!1,depthWrite:!0});const t=this.material.clone();t.uniforms=this.material.uniforms,t.side=bt,this.ground=new yt(new vs(mo,128),this.material),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=-.02,this.ground.renderOrder=-2,this.ground.visible=!1,this.dome=new yt(new ys(lm,64,32),t),this.dome.renderOrder=-3,this.dome.frustumCulled=!1,this.dome.visible=!1,e.scene.add(this.ground,this.dome),this.shadowCatcher=new yt(new _s(1,1),new cp({opacity:.4,transparent:!0,depthWrite:!1})),this.shadowCatcher.rotation.x=-Math.PI/2,this.shadowCatcher.scale.setScalar(mo*2),this.shadowCatcher.receiveShadow=!0,this.shadowCatcher.visible=!1,this.shadowCatcher.position.y=0,e.scene.add(this.shadowCatcher),this.projector=new Dt(45,1.5,.5,5e3)}get kind(){return this.active?this.active.def.kind:null}load(e,t){this.clear(!1);const n=++this._token,i=[t.url].concat(t.fallback?[].concat(t.fallback):[]),s=o=>new Promise((a,c)=>{this.loader.load(i[o],a,void 0,()=>{if(n!==this._token){c(new Error("superseded"));return}console.warn("[scenery] could not load",i[o]),o+1<i.length?s(o+1).then(a,c):c(new Error("Backdrop image could not be loaded (offline, blocked, or no CORS)."))})});return s(0).then(o=>{if(n!==this._token){o.dispose();return}o.encoding=je,o.wrapS=ds,o.anisotropy=Math.min(8,this.world.renderer.capabilities.getMaxAnisotropy());const a=o.image,c=a.width/a.height;let l=t.kind;l==="auto"&&(l=c>=3?"pano":"photo");const u={...t,kind:l};u.horizon===void 0&&(u.horizon=l==="photo"?.42:.5),u.fov===void 0&&(u.fov=48),this.active={id:e,def:u,texture:o,image:a,aspect:c},this.height=0,this.scale=1,this.yaw=0,this._applyEnvironment(),this._layout(!0)})}clear(e=!0){this._token++,this.active&&(this.active.texture.dispose(),this.active=null),this.material.uniforms.map.value=null,this.ground.visible=this.dome.visible=this.shadowCatcher.visible=!1;const t=this.world;t.ground.visible=t.groundWanted,t.sky.mesh.visible=!0,t.scene.fog=t.defaultFog,t.camera.fov=this.savedFov,t.camera.clearViewOffset();const n=t.renderer.domElement;t.camera.aspect=(n.clientWidth||window.innerWidth)/(n.clientHeight||window.innerHeight),t.camera.updateProjectionMatrix();const i=t.controls;i.minAzimuthAngle=-1/0,i.maxAzimuthAngle=1/0,i.minPolarAngle=0,i.maxPolarAngle=Math.PI*.52,i.minDistance=2,i.maxDistance=160,e&&t.applyPreset(t.presetId)}setHeight(e){this.height=e,this._layout(!1)}setScale(e){this.scale=e,this._layout(this.kind==="photo")}setYaw(e){this.yaw=e,this._layout(!1)}frame(){this.active&&this._layout(!0)}onResize(){this.active&&this._applyViewOffset()}_applyViewOffset(){const e=this.world,t=e.renderer.domElement,n=t.clientWidth||window.innerWidth,i=t.clientHeight||window.innerHeight,s=Math.round(e.obstructionLeft());return e.camera.aspect=(n+s)/i,s>0?e.camera.setViewOffset(n+s,i,0,0,n,i):e.camera.clearViewOffset(),e.camera.updateProjectionMatrix(),this._view={virtualAspect:(n+s)/i,visibleAspect:(n-s)/i},this._view.virtualAspect}_applyEnvironment(){const{def:e,image:t,texture:n}=this.active,i=this.world,s=document.createElement("canvas");s.width=32,s.height=32;const o=s.getContext("2d");o.drawImage(t,0,0,32,32);const a=o.getImageData(0,0,32,32).data,c=(f,m)=>{let _=0,p=0,d=0,g=0;for(let S=f;S<m;S++)for(let M=0;M<32;M++){const w=(S*32+M)*4;_+=a[w],p+=a[w+1],d+=a[w+2],g++}return new Oe(_/g/255,p/g/255,d/g/255)},l=c(0,2),u=c(29,32),h=this.material.uniforms;h.map.value=n,h.edgeTop.value.copy(l).convertSRGBToLinear(),h.edgeBottom.value.copy(u).convertSRGBToLinear(),e.light&&i.applyPreset(e.light,{lightsOnly:!0}),i.scene.fog=null,i.sky.mesh.visible=!1,i.ground.visible=!1,i.container.style.background=`#${l.getHexString()}`,this.ground.visible=this.dome.visible=this.shadowCatcher.visible=!0}_layout(e){if(!this.active)return;const{def:t,aspect:n}=this.active,i=this.material.uniforms,s=this.world,o=s.camera,a=s.controls,c=Math.min(.95,Math.max(.05,t.horizon+this.height*.03));if(t.kind==="photo"){i.mode.value=0;const l=Math.min(100,Math.max(15,t.fov*this.scale)),u=Math.tan(l*Math.PI/360),h=Math.atan((.5-c)*2*u),f=e?this._applyViewOffset():this._view?this._view.virtualAspect:o.aspect,m=this._view?this._view.visibleAspect:o.aspect,_=Math.min(u*.9,u*n/f*.93),p=s._lastBounds||null,d=new L(12,7,4);p&&!p.isEmpty()&&p.getSize(d);const g=d.x/2/(_*m)*1.15+d.z/2,S=Math.tan(Math.min(1.4,Math.atan(_)+h))*.85,M=(d.y+.6-this.eye)/Math.max(.05,S),w=Math.max(10,g,M),y=this.projector;if(y.fov=l,y.aspect=n,y.near=.5,y.far=5e3,y.position.set(0,this.eye,w),y.rotation.set(h,0,0),y.updateMatrixWorld(!0),y.updateProjectionMatrix(),i.projVP.value.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),e){o.fov=Math.atan(_)*360/Math.PI,o.updateProjectionMatrix(),o.position.copy(y.position);const P=new L(0,0,-1).applyQuaternion(y.quaternion);a.target.copy(y.position).addScaledVector(P,w),a.minAzimuthAngle=-1/0,a.maxAzimuthAngle=1/0,a.minPolarAngle=0,a.maxPolarAngle=Math.PI,a.minDistance=0,a.maxDistance=1/0,a.update();const O=a.getAzimuthalAngle(),v=a.getPolarAngle(),T=a.getDistance();a.minAzimuthAngle=O-.12,a.maxAzimuthAngle=O+.12,a.minPolarAngle=Math.max(.05,v-.06),a.maxPolarAngle=Math.min(Math.PI-.05,v+.05),a.minDistance=T*.8,a.maxDistance=T*1.25}}else{const l=n>=3;if(i.mode.value=l?1:2,i.horizonV.value=c,i.yaw.value=this.yaw*Math.PI/180,i.tanRange.value=l?2*Math.PI/n:1,e){this._applyViewOffset(),o.fov=40,o.updateProjectionMatrix();const u=s._lastBounds||null,h=new L(12,7,4);u&&!u.isEmpty()&&u.getSize(h);const f=Math.tan(o.fov*Math.PI/360)*this._view.visibleAspect,m=Math.max(12,h.x/2/f*1.2+h.z/2);o.position.set(0,this.eye+.4,m),a.target.set(0,3.4,0),i.center.value.copy(o.position),a.minAzimuthAngle=-1/0,a.maxAzimuthAngle=1/0,a.minPolarAngle=.2,a.maxPolarAngle=Math.PI*.5-.02,a.minDistance=3,a.maxDistance=120,a.update()}}}}class um{constructor(e){xt.legacyMode=!1,this.container=e,this.scene=new ap,this.scene.fog=new Rr(12573943,30,260),this.camera=new Dt(30,1,.1,3e3),this.camera.position.set(0,6,18);const t=Math.min(window.devicePixelRatio||1,2);this.renderer=new jo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t),this.renderer.outputEncoding=je,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=qt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bo,e.appendChild(this.renderer.domElement),this.controls=new gp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxDistance=160,this.controls.minDistance=2,this.controls.maxPolarAngle=Math.PI*.52,this.controls.target.set(0,4.5,0),this.controls.update(),this.lights=[],this.sun=null,this.ground=new yt(new vs(1,96),new Ir({color:6196298,roughness:1,metalness:0})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.position.y=-.01,this.scene.add(this.ground),this.sky=new rm(280),this.scene.add(this.sky.mesh),this.defaultFog=this.scene.fog,this.groundWanted=!0,this.scenery=null,this.updateCallbacks=[],this.obstructionLeft=()=>0,this.clock=new mp,this.accumulator=0,this.paused=!1,this.timeScale=1,this.scenery=new cm(this),this.applyPreset("day"),this.resize(),window.addEventListener("resize",()=>this.resize()),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}onUpdate(e){this.updateCallbacks.push(e)}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.scenery&&this.scenery.onResize(),this.render()}applyPreset(e,t={}){const n=ln[e]||ln.day;this.presetId=e;const i=t.lightsOnly||this.scenery&&this.scenery.active;for(const a of this.lights)this.scene.remove(a);this.lights=[];const{ambient:s,sun:o}=n.lights();for(const a of s)this.scene.add(a),this.lights.push(a);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-5e-4,o.shadow.camera.far=400,this.scene.add(o),this.scene.add(o.target),this.lights.push(o,o.target),this.sun=o,this.defaultFog.color.setHex(n.fog),i||(this.sky.setColors(...n.sky),this.ground.material.color.setHex(n.ground),this.container.style.background=n.css),this.fitShadowToBounds(this._lastBounds)}setGroundVisible(e){this.groundWanted=e,this.scenery&&this.scenery.active||(this.ground.visible=e)}fitShadowToBounds(e){this._lastBounds=e;const t=new L(12,8,12),n=new L(0,4,0);e&&!e.isEmpty()&&(e.getSize(t),e.getCenter(n));const i=Math.max(t.x,t.z)*.75+8;if(this.ground.scale.setScalar(Math.max(500,i*12)),this.ground.position.x=n.x,this.ground.position.z=n.z,this.sun){const s=this.sun.shadow.camera;s.left=-i,s.right=i,s.top=i,s.bottom=-i,s.near=1,s.updateProjectionMatrix();const o=this.sun.position.clone().normalize();this.sun.position.copy(n).addScaledVector(o,Math.max(80,i*4)),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.sun.shadow.needsUpdate=!0}this.defaultFog.near=Math.max(30,i*3),this.defaultFog.far=this.defaultFog.near+200}computeFrame(e){if(!e||e.isEmpty())return null;const t=new L,n=new L;e.getSize(t),e.getCenter(n);const i=this.camera.fov*Math.PI/180,s=this.renderer.domElement.clientWidth||window.innerWidth,o=Math.min(.6,Math.max(0,this.obstructionLeft()/s)),a=t.y/2/Math.tan(i/2),c=t.x/2/Math.tan(i/2)/this.camera.aspect/(1-o),l=Math.max(a,c)*1.15+t.z*.6+2,u=n.clone();u.y=Math.max(n.y,t.y*.55);const h=2*l*Math.tan(i/2)*this.camera.aspect;return u.x-=o/2*h,{pos:u.clone().add(new L(0,l*.18,l)),target:u}}frame(e,t=!0){if(this.scenery&&this.scenery.active){this.scenery.frame();return}const n=this.computeFrame(e);if(!n)return;const{pos:i,target:s}=n;if(!t){this.camera.position.copy(i),this.controls.target.copy(s),this.controls.update();return}const o=this.camera.position.clone(),a=this.controls.target.clone(),c=performance.now(),l=650,u=()=>{const h=Math.min(1,(performance.now()-c)/l),f=1-Math.pow(1-h,3);this.camera.position.lerpVectors(o,i,f),this.controls.target.lerpVectors(a,s,f),this.controls.update(),h<1&&requestAnimationFrame(u)};requestAnimationFrame(u)}setPaused(e){this.paused=e,e||this.clock.getDelta()}render(){this.renderer.render(this.scene,this.camera)}_loop(){requestAnimationFrame(this._loop);const e=Math.min(this.clock.getDelta(),.1);if(!this.paused){this.accumulator+=e*this.timeScale;let t=0;for(;this.accumulator>=lr&&t<3;){for(const n of this.updateCallbacks)n(lr);this.accumulator-=lr,t++}t===3&&(this.accumulator=0)}this.controls.update(),this.sky.follow(this.camera),this.render()}screenshot(){this.render();const e=this.renderer.domElement,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d"),i=this.container.style.background;if(i&&i.startsWith("#"))n.fillStyle=i;else{const s=(ln[this.presetId]||ln.day).stops,o=n.createLinearGradient(0,0,0,t.height);s.forEach((a,c)=>o.addColorStop(s.length===1?0:c/(s.length-1),a)),n.fillStyle=o}return n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0),t.toDataURL("image/png")}}const fs={row:{label:"Row",place(r,e){const t=[],n=(r-1)*e;for(let i=0;i<r;i++)t.push({position:new L(-n/2+i*e,0,0),rotationY:0});return t}},arc:{label:"Arc",place(r,e){if(r===1)return[{position:new L(0,0,0),rotationY:0}];const t=Math.PI*.8,n=Math.max(e,(r-1)*e/t),i=[];for(let s=0;s<r;s++){const o=-t/2+t*s/(r-1);i.push({position:new L(Math.sin(o)*n,0,-Math.cos(o)*n+n),rotationY:0})}return i}},circle:{label:"Circle",place(r,e){if(r===1)return[{position:new L(0,0,0),rotationY:0}];const t=Math.max(e,r*e/(2*Math.PI)),n=[];for(let i=0;i<r;i++){const s=i/r*Math.PI*2;n.push({position:new L(Math.sin(s)*t,0,Math.cos(s)*t),rotationY:0})}return n}},grid:{label:"Grid",place(r,e){const t=Math.ceil(Math.sqrt(r)),n=Math.ceil(r/t),i=[];for(let s=0;s<r;s++){const o=s%t,a=Math.floor(s/t);i.push({position:new L((o-(t-1)/2)*e,0,(a-(n-1)/2)*e*1.4),rotationY:0})}return i}},vee:{label:"V formation",place(r,e){const t=[];for(let n=0;n<r;n++){const i=n%2===0?-1:1,s=Math.ceil(n/2);t.push({position:new L(i*s*e*.8,0,s*e*.9),rotationY:0})}return t}},scatter:{label:"Scatter",place(r,e){let t=1337;const n=()=>(t=t*16807%2147483647,t/2147483647),i=Math.sqrt(r)*e,s=[];for(let o=0;o<r;o++)s.push({position:new L((n()-.5)*i*1.6,0,(n()-.5)*i),rotationY:(n()-.5)*.6});return s}}},hm=Object.keys(fs),Nr={ad:"Andorra",ae:"United Arab Emirates",af:"Afghanistan",ag:"Antigua and Barbuda",al:"Albania",am:"Armenia",ao:"Angola",ar:"Argentina",at:"Austria",au:"Australia",az:"Azerbaijan",ba:"Bosnia and Herzegovina",bb:"Barbados",bd:"Bangladesh",be:"Belgium",bf:"Burkina Faso",bg:"Bulgaria",bh:"Bahrain",bi:"Burundi",bj:"Benin",bn:"Brunei",bo:"Bolivia",br:"Brazil",bs:"Bahamas",bt:"Bhutan",bw:"Botswana",by:"Belarus",bz:"Belize",ca:"Canada",cd:"DR Congo",cf:"Central African Republic",cg:"Republic of the Congo",ch:"Switzerland",ci:"Côte d'Ivoire",cl:"Chile",cm:"Cameroon",cn:"China",co:"Colombia",cr:"Costa Rica",cu:"Cuba",cv:"Cape Verde",cy:"Cyprus",cz:"Czechia",de:"Germany",dj:"Djibouti",dk:"Denmark",dm:"Dominica",do:"Dominican Republic",dz:"Algeria",ec:"Ecuador",ee:"Estonia",eg:"Egypt",er:"Eritrea",es:"Spain",et:"Ethiopia",fi:"Finland",fj:"Fiji",fm:"Micronesia",fr:"France",ga:"Gabon",gb:"United Kingdom",gd:"Grenada",ge:"Georgia",gh:"Ghana",gm:"Gambia",gn:"Guinea",gq:"Equatorial Guinea",gr:"Greece",gt:"Guatemala",gw:"Guinea-Bissau",gy:"Guyana",hn:"Honduras",hr:"Croatia",ht:"Haiti",hu:"Hungary",id:"Indonesia",ie:"Ireland",il:"Israel",in:"India",iq:"Iraq",ir:"Iran",is:"Iceland",it:"Italy",jm:"Jamaica",jo:"Jordan",jp:"Japan",ke:"Kenya",kg:"Kyrgyzstan",kh:"Cambodia",ki:"Kiribati",km:"Comoros",kn:"Saint Kitts and Nevis",kp:"North Korea",kr:"South Korea",kw:"Kuwait",kz:"Kazakhstan",la:"Laos",lb:"Lebanon",lc:"Saint Lucia",li:"Liechtenstein",lk:"Sri Lanka",lr:"Liberia",ls:"Lesotho",lt:"Lithuania",lu:"Luxembourg",lv:"Latvia",ly:"Libya",ma:"Morocco",mc:"Monaco",md:"Moldova",me:"Montenegro",mg:"Madagascar",mh:"Marshall Islands",mk:"North Macedonia",ml:"Mali",mm:"Myanmar",mn:"Mongolia",mr:"Mauritania",mt:"Malta",mu:"Mauritius",mv:"Maldives",mw:"Malawi",mx:"Mexico",my:"Malaysia",mz:"Mozambique",na:"Namibia",ne:"Niger",ng:"Nigeria",ni:"Nicaragua",nl:"Netherlands",no:"Norway",np:"Nepal",nr:"Nauru",nz:"New Zealand",om:"Oman",pa:"Panama",pe:"Peru",pg:"Papua New Guinea",ph:"Philippines",pk:"Pakistan",pl:"Poland",pt:"Portugal",pw:"Palau",py:"Paraguay",qa:"Qatar",ro:"Romania",rs:"Serbia",ru:"Russia",rw:"Rwanda",sa:"Saudi Arabia",sb:"Solomon Islands",sc:"Seychelles",sd:"Sudan",se:"Sweden",sg:"Singapore",si:"Slovenia",sk:"Slovakia",sl:"Sierra Leone",sm:"San Marino",sn:"Senegal",so:"Somalia",sr:"Suriname",ss:"South Sudan",st:"São Tomé and Príncipe",sv:"El Salvador",sy:"Syria",sz:"Eswatini",td:"Chad",tg:"Togo",th:"Thailand",tj:"Tajikistan",tl:"Timor-Leste",tm:"Turkmenistan",tn:"Tunisia",to:"Tonga",tr:"Turkey",tt:"Trinidad and Tobago",tv:"Tuvalu",tw:"Taiwan",tz:"Tanzania",ua:"Ukraine",ug:"Uganda",us:"United States",uy:"Uruguay",uz:"Uzbekistan",va:"Vatican City",vc:"Saint Vincent and the Grenadines",ve:"Venezuela",vn:"Vietnam",vu:"Vanuatu",ws:"Samoa",ye:"Yemen",za:"South Africa",zm:"Zambia",zw:"Zimbabwe",eu:"European Union",un:"United Nations",hk:"Hong Kong",pr:"Puerto Rico",gl:"Greenland","gb-eng":"England","gb-sct":"Scotland","gb-wls":"Wales",ps:"Palestine",xk:"Kosovo"},Qo=Object.keys(Nr);function el(r){return Nr[r]||r.toUpperCase()}function dm(r,e=1280){return`https://flagcdn.com/w${e}/${r}.png`}function fm(r,e=12){const t=r.trim().toLowerCase();if(!t)return[];const n=[],i=[];for(const s of Qo){const o=Nr[s].toLowerCase();o.startsWith(t)||s===t?n.push(s):o.includes(t)&&i.push(s)}return n.concat(i).slice(0,e)}const bs={armenia:{name:"Armenia",ratio:2,ops:[["h",["#d90012","#0033a0","#f2a800"]]]},austria:{name:"Austria",ratio:1.5,ops:[["h",["#ed2939","#ffffff","#ed2939"]]]},bangladesh:{name:"Bangladesh",ratio:5/3,ops:[["rect","#006a4e",0,0,1,1],["disc","#f42a41",.45,.5,.3]]},belgium:{name:"Belgium",ratio:15/13,ops:[["v",["#000000","#fae042","#ed2939"]]]},colombia:{name:"Colombia",ratio:1.5,ops:[["rect","#fcd116",0,0,1,.5],["rect","#003893",0,.5,1,.25],["rect","#ce1126",0,.75,1,.25]]},czechia:{name:"Czechia",ratio:1.5,ops:[["h",["#ffffff","#d7141a"]],["tri","#11457e",[0,0,.5,.5,0,1]]]},denmark:{name:"Denmark",ratio:37/28,ops:[["rect","#c60c30",0,0,1,1],["cross","#ffffff",.38,.5,.14]]},estonia:{name:"Estonia",ratio:11/7,ops:[["h",["#0072ce","#000000","#ffffff"]]]},finland:{name:"Finland",ratio:18/11,ops:[["rect","#ffffff",0,0,1,1],["cross","#003580",.36,.5,.18]]},france:{name:"France",ratio:1.5,ops:[["v",["#0055a4","#ffffff","#ef4135"]]]},germany:{name:"Germany",ratio:5/3,ops:[["h",["#000000","#dd0000","#ffce00"]]]},greece:{name:"Greece",ratio:1.5,ops:[["h",["#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf"]],["rect","#0d5eaf",0,0,10/27,5/9],["cross","#ffffff",5/27,5/18,1/9]]},hungary:{name:"Hungary",ratio:2,ops:[["h",["#ce2939","#ffffff","#477050"]]]},indonesia:{name:"Indonesia",ratio:1.5,ops:[["h",["#ff0000","#ffffff"]]]},ireland:{name:"Ireland",ratio:2,ops:[["v",["#169b62","#ffffff","#ff883e"]]]},italy:{name:"Italy",ratio:1.5,ops:[["v",["#009246","#ffffff","#ce2b37"]]]},japan:{name:"Japan",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1],["disc","#bc002d",.5,.5,.3]]},latvia:{name:"Latvia",ratio:2,ops:[["rect","#9e3039",0,0,1,1],["rect","#ffffff",0,.4,1,.2]]},lithuania:{name:"Lithuania",ratio:5/3,ops:[["h",["#fdb913","#006a44","#c1272d"]]]},netherlands:{name:"Netherlands",ratio:1.5,ops:[["h",["#ae1c28","#ffffff","#21468b"]]]},nigeria:{name:"Nigeria",ratio:2,ops:[["v",["#008751","#ffffff","#008751"]]]},norway:{name:"Norway",ratio:22/16,ops:[["rect","#ba0c2f",0,0,1,1],["cross","#ffffff",.36,.5,.25],["cross","#00205b",.36,.5,.125]]},peru:{name:"Peru",ratio:1.5,ops:[["v",["#d91023","#ffffff","#d91023"]]]},poland:{name:"Poland",ratio:1.6,ops:[["h",["#ffffff","#dc143c"]]]},romania:{name:"Romania",ratio:1.5,ops:[["v",["#002b7f","#fcd116","#ce1126"]]]},russia:{name:"Russia",ratio:1.5,ops:[["h",["#ffffff","#0039a6","#d52b1e"]]]},sweden:{name:"Sweden",ratio:1.6,ops:[["rect","#006aa7",0,0,1,1],["cross","#fecc00",.375,.5,.2]]},switzerland:{name:"Switzerland",ratio:1,ops:[["rect","#da291c",0,0,1,1],["rect","#ffffff",.3125,.4,.375,.2],["rect","#ffffff",.4,.3125,.2,.375]]},thailand:{name:"Thailand",ratio:1.5,ops:[["rect","#a51931",0,0,1,1],["rect","#ffffff",0,1/6,1,4/6],["rect","#2d2a4a",0,2/6,1,2/6]]},turkey:{name:"Turkey",ratio:1.5,ops:[["rect","#e30a17",0,0,1,1],["disc","#ffffff",.4,.5,.25],["disc","#e30a17",.46,.5,.2],["star","#ffffff",.62,.5,.11,5]]},ukraine:{name:"Ukraine",ratio:1.5,ops:[["h",["#0057b7","#ffd700"]]]},vietnam:{name:"Vietnam",ratio:1.5,ops:[["rect","#da251d",0,0,1,1],["star","#ffff00",.5,.5,.3,5]]},checkered:{name:"Checkered",ratio:1.5,ops:[["check","#111111","#ffffff",6]]},rainbow:{name:"Rainbow",ratio:1.5,ops:[["h",["#e40303","#ff8c00","#ffed00","#008026","#24408e","#732982"]]]},jollyroger:{name:"Jolly Roger",ratio:1.5,ops:[["rect","#000000",0,0,1,1],["disc","#ffffff",.5,.42,.17],["rect","#ffffff",.4,.57,.2,.08],["rect","#000000",.44,.46,.04,.04],["rect","#000000",.52,.46,.04,.04],["diag","#ffffff",.06],["diag2","#ffffff",.06]]},white:{name:"White (blank)",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1]]}},pm=Object.keys(bs);function mm(r,e,t,n,i){const s=n*.382;r.beginPath();for(let o=0;o<i*2;o++){const a=o%2===0?n:s,c=-Math.PI/2+o*Math.PI/i,l=e+Math.cos(c)*a,u=t+Math.sin(c)*a;o===0?r.moveTo(l,u):r.lineTo(l,u)}r.closePath(),r.fill()}function tl(r,e=600){const t=bs[r];if(!t)throw new Error(`Unknown simple flag: ${r}`);const n=Math.round(e*t.ratio),i=e,s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");for(const a of t.ops){const c=a[0];if(c==="h"){const l=a[1],u=i/l.length;l.forEach((h,f)=>{o.fillStyle=h,o.fillRect(0,Math.floor(f*u),n,Math.ceil(u)+1)})}else if(c==="v"){const l=a[1],u=n/l.length;l.forEach((h,f)=>{o.fillStyle=h,o.fillRect(Math.floor(f*u),0,Math.ceil(u)+1,i)})}else if(c==="rect")o.fillStyle=a[1],o.fillRect(a[2]*n,a[3]*i,a[4]*n,a[5]*i);else if(c==="disc")o.fillStyle=a[1],o.beginPath(),o.arc(a[2]*n,a[3]*i,a[4]*i,0,Math.PI*2),o.fill();else if(c==="cross"){const[,l,u,h,f]=a;o.fillStyle=l,o.fillRect(0,(h-f/2)*i,n,f*i),o.fillRect((u-f*i/(2*n))*n,0,f*i,i)}else if(c==="tri"){const l=a[2];o.fillStyle=a[1],o.beginPath(),o.moveTo(l[0]*n,l[1]*i),o.lineTo(l[2]*n,l[3]*i),o.lineTo(l[4]*n,l[5]*i),o.closePath(),o.fill()}else if(c==="star")o.fillStyle=a[1],mm(o,a[2]*n,a[3]*i,a[4]*i,a[5]);else if(c==="diag"||c==="diag2")o.strokeStyle=a[1],o.lineWidth=a[2]*i,o.beginPath(),c==="diag"?(o.moveTo(n*.3,i*.95),o.lineTo(n*.7,i*.65)):(o.moveTo(n*.7,i*.95),o.lineTo(n*.3,i*.65)),o.stroke();else if(c==="check"){const[,l,u,h]=a,f=i/h;for(let m=0;m<h;m++)for(let _=0;_<Math.ceil(n/f);_++)o.fillStyle=(_+m)%2===0?l:u,o.fillRect(_*f,m*f,f+1,f+1)}}return s}const gm="flagwaverplus",Mr="images";let as=null;function _m(){return as||(as=new Promise((r,e)=>{if(!("indexedDB"in window)){e(new Error("IndexedDB unavailable"));return}const t=indexedDB.open(gm,1);t.onupgradeneeded=()=>t.result.createObjectStore(Mr),t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)}),as)}function os(r,e){return _m().then(t=>new Promise((n,i)=>{const s=t.transaction(Mr,r),o=e(s.objectStore(Mr));s.oncomplete=()=>n(o&&o.result),s.onerror=()=>i(s.error)}))}const oi={get:r=>os("readonly",e=>e.get(r)),put:(r,e)=>os("readwrite",t=>t.put(e,r)),del:r=>os("readwrite",e=>e.delete(r)),keys:()=>os("readonly",r=>r.getAllKeys())},ni=new Map;async function Sr(r){if(ni.has(r))return ni.get(r);const e=await oi.get(r);if(!e)throw new Error("Stored image is missing (browser data was cleared).");return ni.set(r,e.dataUrl),e.dataUrl}async function xm(r){return oi.get(r)}async function go(r,e=1024){const t=await bm(r,e),n=`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,i=(r.name||"image").replace(/\.[^.]+$/,"");return await oi.put(n,{dataUrl:t,name:i,added:Date.now()}),ni.set(n,t),{key:n,name:i,dataUrl:t}}async function vm(r,e,t=null){return t=t||`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,await oi.put(t,{dataUrl:r,name:e,added:Date.now()}),ni.set(t,r),t}async function ym(r){try{const e=await oi.keys();for(const t of e)r.has(t)||(await oi.del(t),ni.delete(t))}catch{}}function bm(r,e){return new Promise((t,n)=>{const i=URL.createObjectURL(r),s=new Image;s.onload=()=>{URL.revokeObjectURL(i);const o=Math.min(1,e/s.width),a=Math.max(1,Math.round(s.width*o)),c=Math.max(1,Math.round(s.height*o)),l=document.createElement("canvas");l.width=a,l.height=c,l.getContext("2d").drawImage(s,0,0,a,c);const u=/png|gif|svg|webp/i.test(r.type);t(u?l.toDataURL("image/png"):l.toDataURL("image/jpeg",.9))},s.onerror=()=>{URL.revokeObjectURL(i),n(new Error("Not a readable image"))},s.src=i})}let Mm=1;const Ai={height:1.2,hoisting:Sn.DEXTER,orientation:Le.TOP,flagpoleType:Ze.VERTICAL,verticalHoisting:Bt.TOP_RIGHT,mass:.11};function Sm(r){return new Promise((e,t)=>{switch(r.type){case"simple":try{e(tl(r.value))}catch(n){t(n)}break;case"country":ur(dm(r.value),e,()=>t(new Error(`Could not load flag for ${el(r.value)} (network/CORS).`)));break;case"url":case"upload":ur(r.value,e,()=>t(new Error("Image could not be loaded.")));break;case"stored":Sr(r.value).then(n=>ur(n,e,()=>t(new Error("Stored image could not be decoded.")))).catch(t);break;default:t(new Error(`Unknown source type ${r.type}`))}})}function ls(r){var e;switch(r.type){case"simple":return((e=bs[r.value])==null?void 0:e.name)||r.value;case"country":return el(r.value);case"upload":case"stored":return r.name||"Uploaded image";case"url":return r.value.replace(/^https?:\/\//,"").slice(0,32);default:return"Flag"}}class wm{constructor(e){this.world=e,this.entries=[],this.root=new Ke,e.scene.add(this.root),this.layoutId="row",this.spacing=3.2,this.wind=new Zo({speed:10}),this.windAngle=0,this.windSpeed=10,this.windMode="natural",this.externalGain=0,this.gust={enabled:!1,strength:2.2,period:4.5,width:2.5},this.ripple=!1,this.listeners=new Set,this._tmpPressure=new L,this._gustWind={pressure:this._tmpPressure},this._bounds=new li,this.selectedId=null,this.ring=new yt(new Dr(.22,.42,48),new Cr({color:16734780,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.ring.visible=!1,this._applyWindSettings(),e.onUpdate(t=>this.step(t))}setSelected(e){this.selectedId=e;const t=this.getEntry(e);this.ring.parent&&this.ring.parent.remove(this.ring),t?(t.holder.add(this.ring),this.ring.visible=!0):this.ring.visible=!1}setFlagHeight(e){Ai.height=e,this.updateAllSettings({height:e})}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e,t){for(const n of this.listeners)n(e,t)}get count(){return this.entries.length}getEntry(e){return this.entries.find(t=>t.id===e)}addFlag(e,t={}){const n={id:Mm++,source:e,settings:{...Ai,...t},image:null,group:null,holder:new Ke,status:"loading",error:null};return this.root.add(n.holder),this.entries.push(n),this.relayout(),this.emit("add",n),this._loadAndBuild(n),n}removeFlag(e){const t=this.entries.findIndex(i=>i.id===e);if(t===-1)return;const[n]=this.entries.splice(t,1);this._destroyGroup(n),this.selectedId===e&&this.setSelected(null),this.root.remove(n.holder),this.relayout(),this.emit("remove",n)}clear(){for(const e of[...this.entries])this.removeFlag(e.id)}duplicateFlag(e){const t=this.getEntry(e);return t?this.addFlag({...t.source},{...t.settings}):null}moveTo(e,t){const n=this.entries.findIndex(o=>o.id===e);if(n===-1)return;const[i]=this.entries.splice(n,1),s=Math.max(0,Math.min(this.entries.length,t));this.entries.splice(s,0,i),this.relayout(),this.emit("reorder")}moveFlag(e,t){const n=this.entries.findIndex(o=>o.id===e),i=n+t;if(n===-1||i<0||i>=this.entries.length)return;const s=this.entries[n];this.entries[n]=this.entries[i],this.entries[i]=s,this.relayout(),this.emit("reorder")}setSource(e,t){const n=this.getEntry(e);n&&(n.source=t,n.status="loading",this.emit("update",n),this._loadAndBuild(n))}updateSettings(e,t){const n=this.getEntry(e);n&&(Object.assign(n.settings,t),n.image&&this._build(n),this.emit("settings",n))}updateAllSettings(e){for(const t of this.entries)Object.assign(t.settings,e),t.image&&this._build(t);this.emit("update-all")}resetCloth(){for(const e of this.entries)e.group&&(e.group.reset(),e.group.render())}_loadAndBuild(e){const t=Symbol("load");e._loadToken=t,Sm(e.source).then(n=>{e._loadToken===t&&(e.image=n,e.error=null,e.status="ready",this._build(e),this.emit("update",e))}).catch(n=>{e._loadToken===t&&(e.image=null,e.status="error",e.error=n.message||String(n),this._build(e),this.emit("update",e),this.emit("error",{entry:e,message:e.error}))})}_destroyGroup(e){e.group&&(e.holder.remove(e.group.object),e.group.destroy(),e.group=null)}_build(e){this._destroyGroup(e);const t=e.settings,n={mass:t.mass};e.image?Object.assign(n,tm({image:e.image,width:"auto",height:t.height,hoisting:t.hoisting,orientation:t.orientation,resolution:320})):(n.width=t.height*1.5,n.height=t.height);const i=new Rn(n),s=qp({flagpoleType:t.flagpoleType,verticalHoisting:t.verticalHoisting},i),o=new Dp({flagpole:s,flag:i});if(t.flagpoleType===Ze.HORIZONTAL||t.flagpoleType===Ze.OUTRIGGER){const a=s.constructor.defaults.poleLength;o.object.position.set(0,a,0).sub(s.top)}e.group=o,e.holder.add(o.object),o.reset(),o.render(),this._updateBounds()}setLayout(e){fs[e]&&(this.layoutId=e,this.relayout())}setSpacing(e){this.spacing=Math.max(.5,e),this.relayout()}relayout(){const e=this.entries.length;if(e===0){this._updateBounds();return}const t=fs[this.layoutId].place(e,this.spacing);this.entries.forEach((n,i)=>{n.holder.position.copy(t[i].position),n.holder.rotation.y=t[i].rotationY,n.holder.updateMatrixWorld(!0)}),this._updateBounds(),this.emit("layout")}_updateBounds(){const e=this._bounds.makeEmpty();for(const t of this.entries){const n=t.holder.position,i=t.settings.height,s=t.group?t.group.flag.cloth.width:i*1.5;e.expandByPoint(new L(n.x-s,0,n.z-s)),e.expandByPoint(new L(n.x+s,6.3,n.z+s))}this.world.fitShadowToBounds(e.isEmpty()?null:e)}get bounds(){return this._bounds}setWind({speed:e,angle:t,mode:n}){e!==void 0&&(this.windSpeed=e),t!==void 0&&(this.windAngle=t),n!==void 0&&(this.windMode=n),this._applyWindSettings()}_applyWindSettings(){const e=this.windAngle*Math.PI/180,t=new L(Math.cos(e),.002,Math.sin(e)+.003);switch(this.windMode){case"natural":this.wind.directionFn=Ci.rotatingDirection,this.wind.speedFn=Ci.variableSpeed;break;case"gusty":this.wind.directionFn=(n,i)=>n.copy(t).add(new L(.15*Math.sin(i/2300),.1*Math.sin(i/1300),.3*Math.sin(i/1700))),this.wind.speedFn=(n,i)=>n*(1+.25*Math.cos(i/7e3)+.18*Math.sin(i/1100)+.1*Math.sin(i/530));break;default:this.wind.directionFn=n=>n.copy(t),this.wind.speedFn=Ci.constantSpeed}}setGust(e){Object.assign(this.gust,e)}_gustFactor(e,t){if(!this.gust.enabled||this.entries.length===0)return 1;const n=this._bounds,i=n.min.x-4,s=n.max.x+4,o=Math.max(1,s-i),a=t/this.gust.period%1,c=i+a*o,l=e-c,u=this.gust.width;return 1+this.gust.strength*Math.exp(-(l*l)/(2*u*u))}step(e){this.wind.speed=Math.max(0,this.windSpeed+this.externalGain),this.wind.update();const t=performance.now()/1e3;for(const n of this.entries){const i=n.group;if(!i)continue;const s=i.flag;Hp(s.cloth,s.object);const o=this._gustFactor(n.holder.position.x,t);o!==1?(this._tmpPressure.copy(this.wind.pressure).multiplyScalar(o),ho(s.cloth,this._gustWind,s.object)):ho(s.cloth,this.wind,s.object),i.simulate(e),i.render()}}toJSON(e={}){const t=n=>n==="simple"||n==="country"||n==="url";return{layout:this.layoutId,height:Ai.height,spacing:this.spacing,wind:{speed:this.windSpeed,angle:this.windAngle,mode:this.windMode},gust:{...this.gust},flags:this.entries.filter(n=>t(n.source.type)||!e.forShare&&n.source.type==="stored").map(n=>({source:n.source,settings:n.settings}))}}fromJSON(e){this.clear(),e.layout&&(this.layoutId=e.layout),e.spacing&&(this.spacing=e.spacing),e.height&&(Ai.height=e.height),e.wind&&this.setWind(e.wind),e.gust&&this.setGust(e.gust);for(const t of e.flags||[])this.addFlag(t.source,t.settings);this.relayout()}}class Em{constructor(){this.ctx=null,this.analyser=null,this.stream=null,this.level=0,this.gain=22,this.active=!1,this._buf=null,this._raf=0}async start(){if(this.active)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.ctx=new(window.AudioContext||window.webkitAudioContext);const e=this.ctx.createMediaStreamSource(this.stream);this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.6,e.connect(this.analyser),this._buf=new Float32Array(this.analyser.fftSize),this.active=!0;const t=()=>{if(!this.active)return;this.analyser.getFloatTimeDomainData(this._buf);let n=0;for(let o=0;o<this._buf.length;o++)n+=this._buf[o]*this._buf[o];const i=Math.sqrt(n/this._buf.length),s=Math.min(1,Math.max(0,(i-.02)/.33));this.level+=(s-this.level)*(s>this.level?.35:.06),this._raf=requestAnimationFrame(t)};t()}stop(){if(this.active=!1,cancelAnimationFrame(this._raf),this.stream)for(const e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.close(),this.stream=this.ctx=this.analyser=null,this.level=0}get extraSpeed(){return this.active?this.level*this.gain:0}}const Mi="https://upload.wikimedia.org/wikipedia/commons/thumb",Si="https://commons.wikimedia.org/wiki/File:",wi=(r,e)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(r)}?width=${e}`,hs={capitol:{label:"US Capitol",kind:"photo",url:"./scenery/capitol.jpg",fallback:[`${Mi}/a/a3/United_States_Capitol_west_front_edit2.jpg/2048px-United_States_Capitol_west_front_edit2.jpg`,wi("United_States_Capitol_west_front_edit2.jpg",2048)],page:`${Si}United_States_Capitol_west_front_edit2.jpg`,credit:"Architect of the Capitol",license:"Public domain",horizon:.42,fov:32,light:"day",groundTint:7309914},bourbon:{label:"Palais Bourbon, Paris",kind:"photo",url:"./scenery/bourbon.jpg",fallback:[`${Mi}/8/8d/Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg/2048px-Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,wi("Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg",2048)],page:`${Si}Pont_de_la_Concorde_Palais_Bourbon_Paris.jpg`,credit:"Jebulon",license:"CC0",horizon:.38,fov:34,light:"day",groundTint:9079428},unhq:{label:"UN Headquarters, NYC",kind:"photo",url:"./scenery/unhq.jpg",fallback:[`${Mi}/f/fe/UN_Members_Flags.JPG/1600px-UN_Members_Flags.JPG`,wi("UN_Members_Flags.JPG",1600)],page:`${Si}UN_Members_Flags.JPG`,credit:"Aotearoa",license:"CC BY-SA 3.0",horizon:.3,fov:36,light:"overcast",groundTint:8159106},sthelens:{label:"Mount St Helens summit",kind:"pano",url:"./scenery/sthelens.jpg",fallback:[`${Mi}/b/b5/Mount_St_Helens_Summit_Pano.jpg/4096px-Mount_St_Helens_Summit_Pano.jpg`,wi("Mount_St_Helens_Summit_Pano.jpg",4096)],page:`${Si}Mount_St_Helens_Summit_Pano.jpg`,credit:"Gregg M. Erickson",license:"CC BY 3.0",horizon:.55,light:"day",groundTint:14278114},kosciuszko:{label:"Mount Kosciuszko summit",kind:"pano",url:"./scenery/kosciuszko.jpg",fallback:[`${Mi}/c/c2/Mount_Kosciuszko_Summit_360_panorama.jpg/4096px-Mount_Kosciuszko_Summit_360_panorama.jpg`,wi("Mount_Kosciuszko_Summit_360_panorama.jpg",4096)],page:`${Si}Mount_Kosciuszko_Summit_360_panorama.jpg`,credit:"Toby Hudson",license:"CC BY-SA 3.0",horizon:.5,light:"day",groundTint:9083498}},Tm=Object.keys(hs);function Am(r){return btoa(unescape(encodeURIComponent(r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Cm(r){const e=r.replace(/-/g,"+").replace(/_/g,"/");return decodeURIComponent(escape(atob(e+"=".repeat((4-e.length%4)%4))))}function Lm(r){return Am(JSON.stringify(r))}function Pm(r){try{const e=r.replace(/^#/,"");return e?JSON.parse(Cm(e)):null}catch(e){return console.warn("FlagWaverPlus: could not parse URL state",e),null}}function Rm(r){const e=Lm(r);return history.replaceState(null,"",`#${e}`),`${location.origin}${location.pathname}#${e}`}function Dm(){return Pm(location.hash)}const Ur="flagwaverplus.scene.v1",wr="flagwaverplus.skipSave";let nl=!1;function Im(){nl=!0;try{sessionStorage.setItem(wr,"1")}catch{}}function Fm(){try{const r=sessionStorage.getItem(wr)==="1";return sessionStorage.removeItem(wr),r}catch{return!1}}function il(r){if(!nl)try{localStorage.setItem(Ur,JSON.stringify(r))}catch{}}function Om(){try{const r=localStorage.getItem(Ur);return r?JSON.parse(r):null}catch{return null}}function Nm(){try{localStorage.removeItem(Ur)}catch{}}function sl(r){const e=new Set;for(const t of r.flags||[])t.source&&t.source.type==="stored"&&e.add(t.source.value);return r.sceneryStored&&e.add(r.sceneryStored),e}async function Um(r){const e={};for(const s of sl(r)){const o=await xm(s);o&&(e[s]={dataUrl:o.dataUrl,name:o.name})}const t={app:"FlagWaverPlus",version:1,saved:new Date().toISOString(),state:r,images:e},n=new Blob([JSON.stringify(t)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=`flagwaverplus-scene-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}async function zm(r){const e=await r.text(),t=JSON.parse(e);if(!t||t.app!=="FlagWaverPlus"||!t.state)throw new Error("Not a FlagWaverPlus scene file.");for(const[n,i]of Object.entries(t.images||{}))i&&i.dataUrl&&await vm(i.dataUrl,i.name||"image",n);return t.state}const N=(r,e={},...t)=>{const n=document.createElement(r);for(const[i,s]of Object.entries(e))i==="class"?n.className=s:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),s):s!=null&&s!==!1&&n.setAttribute(i,s);for(const i of t.flat())i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n},pt=(r,e,t)=>{const n=N("option",{value:r},e);return t&&(n.selected=!0),n},_o=r=>`${r.type}:${r.value}`,xo="flagwaverplus.history.v1";function km(r,{manager:e,world:t,mic:n,toast:i}){let s=null,o=!0;const a=[["flags","Flags"],["wind","Wind"],["scene","Scene"],["share","Share"]],c=N("nav",{class:"tabs"}),l={};for(const[C,B]of a)c.appendChild(N("button",{class:"tab","data-tab":C,onClick:()=>u(C)},B)),l[C]=N("section",{class:"page hidden","data-page":C});function u(C){c.querySelectorAll(".tab").forEach(B=>B.classList.toggle("active",B.dataset.tab===C)),Object.values(l).forEach(B=>B.classList.toggle("hidden",B.dataset.page!==C))}r.append(N("header",{class:"panel-head"},N("h1",{},"FlagWaverPlus"),N("button",{class:"collapse",title:"Hide panel (Tab)",onClick:()=>r.classList.toggle("collapsed")},"⇤")),c,...Object.values(l)),u("flags");function h(){o&&setTimeout(()=>t.frame(e.bounds),50)}const f=l.flags,m=N("input",{type:"search",placeholder:"Search a country… (Enter adds first match)",class:"search"}),_=N("div",{class:"results hidden"});function p(C,B=12){const fe=fm(C,B).map(We=>({type:"country",value:We})),Ue=C.trim().toLowerCase();if(Ue)for(const We of pm)bs[We].name.toLowerCase().includes(Ue)&&fe.push({type:"simple",value:We});return fe.slice(0,B+4)}function d(){_.innerHTML="";const C=p(m.value);for(const B of C)_.appendChild(N("button",{class:"result",onClick:()=>g(B)},O(B,32,22),ls(B),B.type==="simple"?N("span",{class:"tag"},"offline"):null));_.classList.toggle("hidden",C.length===0)}m.addEventListener("input",d),m.addEventListener("keydown",C=>{if(C.key==="Enter"){const B=p(m.value,1)[0];B&&g(B)}C.key==="Escape"&&(m.value="",d())});function g(C){e.addFlag({...C}),m.value="",d(),h()}const S=N("input",{type:"file",accept:"image/*",multiple:"",class:"hidden"});S.addEventListener("change",async()=>{const C=[...S.files];S.value="";for(const B of C)try{const{key:fe,name:Ue}=await go(B,1024);e.addFlag({type:"stored",value:fe,name:Ue})}catch{e.addFlag({type:"upload",value:URL.createObjectURL(B),name:B.name.replace(/\.[^.]+$/,"")})}h()});const M=N("input",{type:"url",placeholder:"https://… image URL (must allow CORS)",class:"search"});M.addEventListener("keydown",C=>{C.key==="Enter"&&M.value.trim()&&(e.addFlag({type:"url",value:M.value.trim()}),M.value="",h())});function w(C){const B=[...Qo];for(let fe=0;fe<C&&B.length;fe++)e.addFlag({type:"country",value:B.splice(Math.floor(Math.random()*B.length),1)[0]});h()}const y=new Map;try{for(const C of JSON.parse(localStorage.getItem(xo)||"[]"))y.set(_o(C),{source:C,image:null})}catch{}function P(){try{const C=[...y.values()].map(B=>B.source).filter(B=>B.type==="country"||B.type==="simple"||B.type==="url"||B.type==="stored").slice(-60);localStorage.setItem(xo,JSON.stringify(C))}catch{}}function O(C,B=40,fe=26,Ue=null){if(C.type==="country")return N("img",{src:`https://flagcdn.com/w80/${C.value}.png`,alt:"",loading:"lazy",width:B,height:fe});const We=document.createElement("canvas");We.width=B,We.height=fe;const at=We.getContext("2d");let St=Ue;C.type==="simple"&&(St=tl(C.value,40));const b=k=>{const H=k.width,U=k.height,X=Math.min(B/H,fe/U);at.clearRect(0,0,B,fe),at.drawImage(k,(B-H*X)/2,(fe-U*X)/2,H*X,U*X)};return at.fillStyle="#666",at.fillRect(0,0,B,fe),St?b(St):C.type==="stored"&&Sr(C.value).then(k=>{const H=new Image;H.onload=()=>b(H),H.src=k}).catch(()=>{}),We}const v=N("div",{class:"chips"});function T(){if(v.innerHTML="",y.size===0){v.appendChild(N("span",{class:"muted small"},"Flags you add show up here for quick re-use."));return}for(const[C,B]of[...y.entries()].reverse()){const fe=N("button",{class:"chip",title:`${ls(B.source)} — click to add again`,onClick:()=>{e.addFlag({...B.source}),h()}},O(B.source,40,26,B.image));fe.addEventListener("contextmenu",Ue=>{Ue.preventDefault(),y.delete(C),P(),T()}),v.appendChild(fe)}}function I(C){const B=_o(C.source),fe=y.get(B);if(fe){C.image&&!fe.image&&(fe.image=C.image,T());return}y.set(B,{source:{...C.source},image:C.image}),P(),T()}const K=N("select",{class:"select",onChange:()=>{e.setLayout(K.value),h()}},...hm.map(C=>pt(C,fs[C].label,C===e.layoutId))),$=N("input",{type:"range",min:1.2,max:8,step:.1,value:e.spacing});$.addEventListener("input",()=>e.setSpacing(+$.value)),$.addEventListener("change",h);const z=[["XS",.6],["S",.9],["M",1.2],["L",1.6],["XL",2.2],["XXL",3]],D=N("div",{class:"seg"});function q(){D.innerHTML="";for(const[C,B]of z)D.appendChild(N("button",{class:`seg-btn ${Math.abs(Ai.height-B)<1e-6?"active":""}`,title:`${B} m tall`,onClick:()=>{e.setFlagHeight(B),q(),h()}},C))}q();const J=N("input",{type:"checkbox",checked:""});J.addEventListener("change",()=>{o=J.checked});const Q=N("div",{class:"flag-list"}),Y=N("div",{class:"detail hidden"});let te=null;function ie(C){const B=document.createElement("canvas");B.width=48,B.height=32;const fe=B.getContext("2d");if(C.image){const Ue=C.image,We=Ue.width,at=Ue.height,St=Math.min(48/We,32/at);fe.drawImage(Ue,(48-We*St)/2,(32-at*St)/2,We*St,at*St)}else fe.fillStyle=C.status==="error"?"#b33":"#555",fe.fillRect(0,0,48,32);return B}function me(){Q.innerHTML="",e.count===0&&Q.appendChild(N("p",{class:"muted"},"No flags yet. Search a country or upload an image.")),e.entries.forEach((C,B)=>{const fe=N("div",{class:`flag-row ${C.id===s?"selected":""} ${C.status}`,draggable:"true","data-id":C.id,onClick:()=>G(C.id===s?null:C.id)},N("span",{class:"grip",title:"Drag to reorder"},"⋮⋮"),N("span",{class:"idx"},B+1),ie(C),N("span",{class:"name"},ls(C.source),C.status==="loading"?" …":C.status==="error"?" ⚠":""),N("span",{class:"row-actions"},N("button",{title:"Duplicate",onClick:Ue=>{Ue.stopPropagation(),e.duplicateFlag(C.id),h()}},"⧉"),N("button",{title:"Remove",class:"danger",onClick:Ue=>{Ue.stopPropagation(),e.removeFlag(C.id),s===C.id&&G(null),h()}},"✕")));C.error&&(fe.title=C.error),fe.addEventListener("dragstart",Ue=>{te=C.id,fe.classList.add("dragging"),Ue.dataTransfer.effectAllowed="move",Ue.dataTransfer.setData("text/plain",String(C.id))}),fe.addEventListener("dragend",()=>{te=null,Q.querySelectorAll(".flag-row").forEach(Ue=>Ue.classList.remove("dragging","drop-above","drop-below"))}),fe.addEventListener("dragover",Ue=>{if(te===null||te===C.id)return;Ue.preventDefault(),Ue.dataTransfer.dropEffect="move";const We=fe.getBoundingClientRect(),at=Ue.clientY>We.top+We.height/2;fe.classList.toggle("drop-above",!at),fe.classList.toggle("drop-below",at)}),fe.addEventListener("dragleave",()=>fe.classList.remove("drop-above","drop-below")),fe.addEventListener("drop",Ue=>{if(Ue.preventDefault(),te===null||te===C.id)return;const We=fe.getBoundingClientRect(),at=Ue.clientY>We.top+We.height/2,St=e.entries.findIndex(k=>k.id===te);let b=e.entries.findIndex(k=>k.id===C.id)+(at?1:0);St<b&&b--,e.moveTo(te,b)}),Q.appendChild(fe)})}function G(C){s=C,e.setSelected(C),me(),V()}let Z=null,re=null,ae=null;function V(){const C=e.getEntry(s);if(Y.classList.toggle("hidden",!C),Y.innerHTML="",!C)return;const B=C.settings,fe=b=>e.updateSettings(C.id,b),Ue=N("select",{class:"select",onChange:()=>fe({hoisting:Ue.value})},pt(Sn.DEXTER,"Pole on left (normal)",B.hoisting===Sn.DEXTER),pt(Sn.SINISTER,"Pole on right (mirrored)",B.hoisting===Sn.SINISTER)),We=N("select",{class:"select",onChange:()=>fe({orientation:We.value})},pt(Le.TOP,"Normal",B.orientation===Le.TOP),pt(Le.LEFT,"Rotated 90° right",B.orientation===Le.LEFT),pt(Le.RIGHT,"Rotated 90° left",B.orientation===Le.RIGHT),pt(Le.BOTTOM,"Rotated 180°",B.orientation===Le.BOTTOM)),at=N("select",{class:"select",onChange:()=>{fe({flagpoleType:at.value}),ae.classList.toggle("hidden",at.value!==Ze.CROSSBAR)}},pt(Ze.VERTICAL,"Vertical pole",B.flagpoleType===Ze.VERTICAL),pt(Ze.HORIZONTAL,"Horizontal pole",B.flagpoleType===Ze.HORIZONTAL),pt(Ze.OUTRIGGER,"Outrigger (angled from wall)",B.flagpoleType===Ze.OUTRIGGER),pt(Ze.CROSSBAR,"Crossbar (hangs from a bar)",B.flagpoleType===Ze.CROSSBAR),pt(Ze.GALLERY,"Gallery (banner on a bar)",B.flagpoleType===Ze.GALLERY)),St=N("select",{class:"select",onChange:()=>fe({verticalHoisting:St.value})},pt(Bt.TOP_RIGHT,"Turn flag 90° right",B.verticalHoisting===Bt.TOP_RIGHT),pt(Bt.TOP_LEFT,"Turn flag 90° left",B.verticalHoisting===Bt.TOP_LEFT),pt(Bt.NONE,"Keep upright (hang by top edge)",B.verticalHoisting===Bt.NONE));ae=N("div",{class:`hang ${B.flagpoleType===Ze.CROSSBAR?"":"hidden"}`},N("p",{class:"muted small"},"Crossbar hanging: a flag hung from a horizontal bar is normally turned on its side so the hoist edge is at the top (vexillological convention). Pick which way to turn it, or keep it upright."),St),Z=N("h3",{}),re=N("p",{class:"error hidden"}),Y.append(Z,re,N("label",{class:"field"},"Pole side",Ue),N("label",{class:"field"},"Rotation",We),N("label",{class:"field"},"Pole type",at),ae,N("div",{class:"tool-row"},N("button",{onClick:()=>{e.updateAllSettings({hoisting:B.hoisting,orientation:B.orientation,flagpoleType:B.flagpoleType,verticalHoisting:B.verticalHoisting}),i("Applied to all flags")}},"Apply to all"),N("button",{onClick:()=>{e.duplicateFlag(C.id),h()}},"Duplicate"),N("span",{class:"spacer"}),N("button",{class:"danger",onClick:()=>{e.removeFlag(C.id),G(null),h()}},"Remove"))),we()}function we(){const C=e.getEntry(s);!C||!Z||(Z.textContent=`Editing flag ${e.entries.indexOf(C)+1}: ${ls(C.source)}`,re.textContent=C.error||"",re.classList.toggle("hidden",!C.error))}e.on((C,B)=>{C==="add"&&I(B),C==="update"&&B&&I(B),["add","remove","update","reorder","update-all"].includes(C)&&(s!==null&&!e.getEntry(s)&&(s=null,e.setSelected(null),Y.classList.add("hidden")),me(),we()),C==="settings"&&B&&B.id}),f.append(N("div",{class:"block"},N("h2",{},"Add flags"),m,_,N("div",{class:"tool-row"},N("button",{onClick:()=>S.click()},"Upload image(s)"),N("button",{onClick:()=>w(5)},"🎲 5 random"),S),M,N("p",{class:"muted small"},"Recently used (click to add again, right-click to forget):"),v),N("div",{class:"block"},N("h2",{},"Arrangement"),N("label",{class:"field"},"Layout",K),N("label",{},"Spacing ",$),N("label",{class:"field"},"Flag size",D),N("div",{class:"tool-row"},N("button",{onClick:()=>t.frame(e.bounds)},"Frame all"),N("label",{class:"row"},J," auto-frame"),N("span",{class:"spacer"}),N("button",{class:"danger",onClick:()=>{e.clear(),G(null)}},"Clear all"))),N("div",{class:"block"},N("h2",{},"Your flags"),N("p",{class:"muted small"},"Click a flag to edit it. Drag rows to reorder."),Q,Y)),me(),T();const ve=l.wind,_e=N("input",{type:"range",min:0,max:30,step:.5,value:e.windSpeed}),de=N("span",{class:"val"},`${e.windSpeed} m/s`);_e.addEventListener("input",()=>{e.setWind({speed:+_e.value}),de.textContent=`${_e.value} m/s`});const ze=N("input",{type:"range",min:-180,max:180,step:5,value:e.windAngle}),Ee=N("span",{class:"val"},`${e.windAngle}°`);ze.addEventListener("input",()=>{e.setWind({angle:+ze.value}),Ee.textContent=`${ze.value}°`});const be=N("label",{},"Direction ",ze,Ee),Ye=N("select",{class:"select",onChange:()=>{e.setWind({mode:Ye.value}),be.classList.toggle("disabled",Ye.value==="natural")}},pt("natural","Natural — wandering direction, varying speed (FlagWaver default)",e.windMode==="natural"),pt("gusty","Gusty — fixed direction, turbulent",e.windMode==="gusty"),pt("steady","Steady — fixed direction, constant",e.windMode==="steady"));be.classList.toggle("disabled",e.windMode==="natural");const Qe=N("input",{type:"checkbox"}),Xe=N("input",{type:"range",min:.5,max:5,step:.1,value:e.gust.strength}),st=N("input",{type:"range",min:1.5,max:12,step:.5,value:e.gust.period}),qe=N("input",{type:"range",min:.8,max:8,step:.2,value:e.gust.width});Qe.addEventListener("change",()=>e.setGust({enabled:Qe.checked})),Xe.addEventListener("input",()=>e.setGust({strength:+Xe.value})),st.addEventListener("input",()=>e.setGust({period:+st.value})),qe.addEventListener("input",()=>e.setGust({width:+qe.value}));const De=N("button",{class:"btn-primary"},"🎤 Blow into mic"),Mt=N("div",{class:"meter"},N("div",{class:"meter-fill"})),ht=N("input",{type:"range",min:5,max:40,step:1,value:n.gain});ht.addEventListener("input",()=>{n.gain=+ht.value}),De.addEventListener("click",async()=>{if(n.active){n.stop(),De.textContent="🎤 Blow into mic",De.classList.remove("live");return}try{await n.start(),De.textContent="■ Stop mic",De.classList.add("live"),i("Mic on — blow or shout to make wind")}catch{i("Microphone access denied or unavailable","error")}}),function C(){Mt.firstChild.style.width=`${Math.round(n.level*100)}%`,requestAnimationFrame(C)}(),ve.append(N("div",{class:"block"},N("h2",{},"Wind"),N("label",{class:"field"},"Mode",Ye),N("label",{},"Speed ",_e,de),be),N("div",{class:"block"},N("h2",{},"Travelling gust"),N("p",{class:"muted small"},"A pulse of wind sweeps along the line of flags so they ripple one after another."),N("label",{class:"row"},Qe," Enable gust sweep"),N("label",{},"Strength ",Xe),N("label",{},"Period (s) ",st),N("label",{},"Width (m) ",qe)),N("div",{class:"block"},N("h2",{},"Lung power"),N("p",{class:"muted small"},"Uses your microphone loudness as wind. Nothing is recorded."),De,Mt,N("label",{},"Mic gain ",ht)));const E=l.scene,x=N("div",{class:"presets"});for(const C of nm)x.appendChild(N("button",{class:`preset-btn ${C===t.presetId?"active":""}`,"data-id":C,onClick:()=>{t.applyPreset(C),x.querySelectorAll(".preset-btn").forEach(B=>B.classList.toggle("active",B.dataset.id===C))}},N("span",{class:"swatch-bg",style:`background:${ln[C].css}`}),ln[C].label));const W=N("input",{type:"checkbox",checked:""});W.addEventListener("change",()=>t.setGroundVisible(W.checked));const ne=N("button",{onClick:()=>se()},"⏸ Pause");function se(){t.setPaused(!t.paused),ne.textContent=t.paused?"▶ Play":"⏸ Pause"}const ce=N("input",{type:"range",min:.1,max:2,step:.05,value:1});ce.addEventListener("input",()=>{t.timeScale=+ce.value});const Se=N("button",{onClick:()=>{const C=N("a",{href:t.screenshot(),download:`flagwaverplus-${Date.now()}.png`});document.body.appendChild(C),C.click(),C.remove()}},"📷 Screenshot"),A=N("div",{class:"scenery-grid"}),F=N("p",{class:"muted small credit"}),ue=N("input",{type:"range",min:-8,max:8,step:.25,value:0}),he=N("input",{type:"range",min:.6,max:1.8,step:.02,value:1}),le=N("input",{type:"range",min:-180,max:180,step:2,value:0}),xe=N("div",{class:"hidden"},N("label",{title:"Shift where the image horizon sits relative to the flags"},"Horizon ",ue),N("label",{class:"photo-only",title:"Lens field of view of the photo"},"Photo zoom ",he),N("label",{class:"pano-only"},"Rotate ",le));ue.addEventListener("input",()=>t.scenery.setHeight(+ue.value)),he.addEventListener("input",()=>t.scenery.setScale(+he.value)),le.addEventListener("input",()=>t.scenery.setYaw(+le.value));let ge=null,Ce=null,Pe=null;function Ve(C){ge=C,A.querySelectorAll(".scenery-btn").forEach(fe=>fe.classList.toggle("active",fe.dataset.id===(C||"none")));const B=t.scenery.active;xe.classList.toggle("hidden",!B),xe.querySelector(".photo-only").classList.toggle("hidden",!B||B.def.kind!=="photo"),xe.querySelector(".pano-only").classList.toggle("hidden",!B||B.def.kind!=="pano"),F.innerHTML="",B&&B.def.credit?F.append("Photo: ",B.def.page?N("a",{href:B.def.page,target:"_blank",rel:"noopener"},B.def.credit):B.def.credit,` · ${B.def.license} · via Wikimedia Commons`):B&&(F.textContent="Custom backdrop (not included in share links unless it is a URL)."),x.querySelectorAll(".preset-btn").forEach(fe=>fe.classList.toggle("active",fe.dataset.id===t.presetId))}async function R(C,B,fe=null,Ue=null){if(!C){t.scenery.clear(),Ce=null,Pe=null,Ve(null);return}A.querySelectorAll(".scenery-btn").forEach(We=>We.classList.toggle("loading",We.dataset.id===C));try{await t.scenery.load(C,B),Ce=fe,Pe=Ue,ue.value=0,he.value=1,le.value=0,Ve(C),o&&setTimeout(()=>t.frame(e.bounds),50)}catch(We){i(We.message,"error",5e3),Ve(null)}finally{A.querySelectorAll(".scenery-btn").forEach(We=>We.classList.remove("loading"))}}A.appendChild(N("button",{class:"scenery-btn active","data-id":"none",onClick:()=>R(null)},N("span",{class:"scenery-kind"},"sky"),"None (gradient)"));for(const C of Tm){const B=hs[C];A.appendChild(N("button",{class:"scenery-btn","data-id":C,title:`${B.label} — ${B.credit}, ${B.license}`,onClick:()=>R(C,B)},N("span",{class:"scenery-kind"},B.kind==="pano"?"360°":"photo"),B.label))}const j=N("input",{type:"file",accept:"image/*",class:"hidden"});j.addEventListener("change",async()=>{const C=j.files[0];if(j.value="",!!C)try{const{key:B,dataUrl:fe}=await go(C,4096);R("custom",{kind:"auto",url:fe,label:C.name},null,B)}catch{R("custom",{kind:"auto",url:URL.createObjectURL(C),label:C.name})}});const ee=N("input",{type:"url",placeholder:"https://… photo or 360° panorama URL (CORS)",class:"search"});ee.addEventListener("keydown",C=>{if(C.key==="Enter"&&ee.value.trim()){const B=ee.value.trim();R("custom",{kind:"auto",url:B,label:B},B)}}),E.append(N("div",{class:"block"},N("h2",{},"Scenery"),N("p",{class:"muted small"},"Puts the flags in front of a place. Images load only when picked (under 1 MB each) and are swapped out, never stacked. A wide strip is treated as a 360° panorama, anything else as a photo backdrop."),A,N("div",{class:"tool-row"},N("button",{onClick:()=>j.click()},"Upload photo / panorama"),j),ee,xe,F),N("div",{class:"block"},N("h2",{},"Sky & light"),x,N("label",{class:"row"},W," Show ground")),N("div",{class:"block"},N("h2",{},"Time"),N("div",{class:"tool-row"},ne,N("button",{onClick:()=>e.resetCloth()},"Reset cloth")),N("label",{},"Speed ",ce)),N("div",{class:"block"},N("h2",{},"Export"),Se,N("p",{class:"muted small"},"Drag to orbit, scroll to zoom, right-drag to pan. Space pauses, Tab hides this panel.")));const pe=N("input",{type:"text",readonly:"",class:"search"}),ye=N("button",{class:"btn-primary",onClick:async()=>{const C=Rm($e({forShare:!0}));pe.value=C;try{await navigator.clipboard.writeText(C),i("Link copied")}catch{i("Link ready — copy it from the box")}const B=e.entries.filter(fe=>fe.source.type==="upload"||fe.source.type==="stored").length;B&&i(`${B} uploaded flag(s) can't go in a link — use a scene file for those`,"warn",4500)}},"🔗 Copy share link"),Ne=N("input",{type:"file",accept:"application/json,.json",class:"hidden"});Ne.addEventListener("change",async()=>{const C=Ne.files[0];if(Ne.value="",!!C)try{const B=await zm(C);await Ht(B),i("Scene loaded")}catch(B){i(B.message||"Could not read scene file","error",5e3)}}),l.share.append(N("div",{class:"block"},N("h2",{},"Scene file"),N("p",{class:"muted small"},"Everything — flags (uploaded images included), arrangement, wind, sky and backdrop — in one .json you can keep or send. The scene also autosaves in this browser and comes back when you reopen the page."),N("div",{class:"tool-row"},N("button",{class:"btn-primary",onClick:()=>Um($e()).catch(()=>i("Export failed","error"))},"⬇ Save scene file"),N("button",{onClick:()=>Ne.click()},"⬆ Load scene file"),Ne,N("span",{class:"spacer"}),N("button",{class:"danger",title:"Forget the autosaved scene and start from the default flags",onClick:()=>{Im(),Nm(),window.history.replaceState(null,"",location.pathname),location.reload()}},"Reset"))),N("div",{class:"block"},N("h2",{},"Share this scene"),N("p",{class:"muted small"},"Encodes countries, offline flags, image URLs, layout and wind into the URL. Uploaded images stay on your machine."),ye,pe),N("div",{class:"block about"},N("h2",{},"Credits"),N("p",{},"Cloth and flagpole simulation from ",N("a",{href:"https://github.com/krikienoid/flagwaver",target:"_blank",rel:"noopener"},"FlagWaver")," by ",N("a",{href:"https://github.com/krikienoid",target:"_blank",rel:"noopener"},"krikienoid")," (MIT), itself based on earlier work by ",N("a",{href:"http://flagtest.nz/",target:"_blank",rel:"noopener"},"flagtest.nz")," and ",N("a",{href:"https://github.com/zz85",target:"_blank",rel:"noopener"},"Joshua Koo"),". Rendering by ",N("a",{href:"https://threejs.org",target:"_blank",rel:"noopener"},"three.js"),"."),N("p",{},"Country flags from ",N("a",{href:"https://flagcdn.com",target:"_blank",rel:"noopener"},"flagcdn.com"),". Scenery photos from Wikimedia Commons: Architect of the Capitol (public domain), Jebulon (CC0), Aotearoa (CC BY-SA 3.0), Gregg M. Erickson (CC BY 3.0), Toby Hudson (CC BY-SA 3.0) — each is linked in the Scene tab when active."),N("p",{},"Multi-flag scenes, layouts, gust, mic wind, scenery, persistence and UI: this project. ",N("a",{href:"https://github.com/codegrox/codegrox.github.io/tree/main/projects/FlagWaverPlus",target:"_blank",rel:"noopener"},"Source")," · ",N("a",{href:"../../"},"← codegrox.github.io"))));function $e(C={}){const B=e.toJSON(C);return B.preset=t.presetId,B.ground=W.checked,ge&&ge!=="custom"?B.scenery=ge:ge==="custom"&&Ce?B.sceneryUrl=Ce:ge==="custom"&&Pe&&!C.forShare&&(B.sceneryStored=Pe),t.scenery.active&&(B.sceneryHeight=t.scenery.height,B.sceneryScale=t.scenery.scale,B.sceneryYaw=t.scenery.yaw),B}async function rt(C){if(C.preset&&ln[C.preset]&&(t.applyPreset(C.preset),x.querySelectorAll(".preset-btn").forEach(B=>B.classList.toggle("active",B.dataset.id===C.preset))),C.ground===!1&&(W.checked=!1,t.setGroundVisible(!1)),C.scenery&&hs[C.scenery])await R(C.scenery,hs[C.scenery]);else if(C.sceneryUrl)await R("custom",{kind:"auto",url:C.sceneryUrl,label:C.sceneryUrl},C.sceneryUrl);else if(C.sceneryStored)try{const B=await Sr(C.sceneryStored);await R("custom",{kind:"auto",url:B,label:"Uploaded backdrop"},null,C.sceneryStored)}catch{}t.scenery.active&&(typeof C.sceneryHeight=="number"&&(t.scenery.setHeight(C.sceneryHeight),ue.value=C.sceneryHeight),typeof C.sceneryScale=="number"&&(t.scenery.setScale(C.sceneryScale),he.value=C.sceneryScale),typeof C.sceneryYaw=="number"&&(t.scenery.setYaw(C.sceneryYaw),le.value=C.sceneryYaw)),K.value=e.layoutId,$.value=e.spacing,q()}function Ht(C){return e.fromJSON(C),G(null),rt(C).then(()=>{o&&setTimeout(()=>t.frame(e.bounds),100)})}return window.addEventListener("keydown",C=>{C.target.matches("input, textarea, select")||(C.code==="Space"&&(C.preventDefault(),se()),C.code==="Tab"&&(C.preventDefault(),r.classList.toggle("collapsed")),C.code==="Escape"&&G(null))}),{showTab:u,select:G,renderList:me,getState:$e,applyState:rt,loadStateFromFile:Ht}}function Bm(r){return function(t,n="info",i=3200){const s=document.createElement("div");s.className=`toast toast-${n}`,s.textContent=t,r.appendChild(s),requestAnimationFrame(()=>s.classList.add("show")),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},i)}}const Gm=document.getElementById("stage"),Er=document.getElementById("panel"),rl=Bm(document.getElementById("toasts")),di=new um(Gm);di.obstructionLeft=()=>window.innerWidth>720&&!Er.classList.contains("collapsed")?Er.offsetWidth+24:0;const Dn=new wm(di),zr=new Em;di.onUpdate(()=>{Dn.externalGain=zr.extraSpeed});Dn.on((r,e)=>{r==="error"&&rl(e.message,"error",4500)});const Ms=km(Er,{manager:Dn,world:di,mic:zr,toast:rl}),hr=Dm(),dr=Fm()?null:Om(),fr=hr&&Array.isArray(hr.flags)?hr:dr&&Array.isArray(dr.flags)?dr:null;if(fr)Dn.fromJSON(fr),Ms.applyState(fr);else for(const r of[{type:"simple",value:"japan"},{type:"simple",value:"armenia"},{type:"country",value:"us"},{type:"simple",value:"france"},{type:"country",value:"hk"}])Dn.addFlag(r);setTimeout(()=>di.frame(Dn.bounds,!1),60);let vo="";setInterval(()=>{const r=Ms.getState(),e=JSON.stringify(r);e!==vo&&(vo=e,il(r))},1500);window.addEventListener("beforeunload",()=>il(Ms.getState()));setTimeout(()=>{const r=sl(Ms.getState());try{for(const e of JSON.parse(localStorage.getItem("flagwaverplus.history.v1")||"[]"))e.type==="stored"&&r.add(e.value)}catch{}ym(r)},8e3);window.flagwaverplus={world:di,manager:Dn,mic:zr};
