var zo=Object.defineProperty;var Bo=(r,e,t)=>e in r?zo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ai=(r,e,t)=>Bo(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sr="149",Pn={ROTATE:0,DOLLY:1,PAN:2},Rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ko=0,br=1,Go=2,Ja=1,Qa=2,mi=3,$t=0,xt=1,Zt=2,nn=0,$n=1,Sr=2,wr=3,Tr=4,Vo=5,Yn=100,Ho=101,Wo=102,Er=103,Ar=104,Xo=200,qo=201,jo=202,Yo=203,eo=204,to=205,Zo=206,$o=207,Ko=208,Jo=209,Qo=210,el=0,tl=1,nl=2,Ys=3,il=4,sl=5,rl=6,al=7,no=0,ol=1,ll=2,kt=0,cl=1,ul=2,hl=3,dl=4,fl=5,io=300,Jn=301,Qn=302,Zs=303,$s=304,ns=306,Ks=1e3,Rt=1001,Js=1002,ut=1003,Cr=1004,us=1005,pt=1006,pl=1007,vi=1008,bn=1009,ml=1010,gl=1011,so=1012,_l=1013,gn=1014,_n=1015,Mi=1016,xl=1017,vl=1018,Kn=1020,Ml=1021,Ot=1023,yl=1024,bl=1025,Mn=1026,ei=1027,Sl=1028,wl=1029,Tl=1030,El=1031,Al=1033,hs=33776,ds=33777,fs=33778,ps=33779,Lr=35840,Pr=35841,Rr=35842,Dr=35843,Cl=36196,Ir=37492,Fr=37496,Nr=37808,Or=37809,Ur=37810,zr=37811,Br=37812,kr=37813,Gr=37814,Vr=37815,Hr=37816,Wr=37817,Xr=37818,qr=37819,jr=37820,Yr=37821,ms=36492,Ll=36283,Zr=36284,$r=36285,Kr=36286,Sn=3e3,ke=3001,Pl=3200,Rl=3201,ro=0,Dl=1,zt="srgb",yi="srgb-linear",gs=7680,Il=519,Jr=35044,Fl=35040,Qs="300 es",er=1035;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,Qr=180/Math.PI;function wi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function Nl(r,e){return(r%e+e)%e}function xs(r,e,t){return(1-t)*r+t*e}function ea(r){return(r&r-1)===0&&r!==0}function tr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],S=i[1],y=i[4],T=i[7],M=i[2],P=i[5],N=i[8];return s[0]=o*p+a*S+l*M,s[3]=o*d+a*y+l*P,s[6]=o*g+a*T+l*N,s[1]=c*p+u*S+h*M,s[4]=c*d+u*y+h*P,s[7]=c*g+u*T+h*N,s[2]=f*p+m*S+_*M,s[5]=f*d+m*y+_*P,s[8]=f*g+m*T+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new Tt;function ao(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ji(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ms={[zt]:{[yi]:yn},[yi]:{[zt]:Ji}},ft={legacyMode:!0,get workingColorSpace(){return yi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ms[e]&&Ms[e][t]!==void 0){const n=Ms[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Dt={h:0,s:0,l:0},Li={h:0,s:0,l:0};function ys(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Pi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Nl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ys(o,s,e+1/3),this.g=ys(o,s,e),this.b=ys(o,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ft.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ft.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zt){const n=oo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ft.fromWorkingColorSpace(Pi(this,Qe),e),vt(Qe.r*255,0,255)<<16^vt(Qe.g*255,0,255)<<8^vt(Qe.b*255,0,255)<<0}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Pi(this,Qe),t);const n=Qe.r,i=Qe.g,s=Qe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Pi(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=zt){return ft.fromWorkingColorSpace(Pi(this,Qe),e),e!==zt?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(Li);const n=xs(Dt.h,Li.h,t),i=xs(Dt.s,Li.s,t),s=xs(Dt.l,Li.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=oo;let Dn;class lo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dn===void 0&&(Dn=bi("canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class co{constructor(e=null){this.isSource=!0,this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(bs(i[o].image)):s.push(bs(i[o]))}else s=bs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function bs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?lo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;class ct extends Ln{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,n=Rt,i=Rt,s=pt,o=vi,a=Ot,l=bn,c=ct.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=wi(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==io)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=io;ct.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(m+1)/2,M=(g+1)/2,P=(u+f)/4,N=(h+p)/4,v=(_+d)/4;return y>T&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=P/n,s=N/n):T>M?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=P/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=N/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-_)*(d-_)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-_)/S,this.y=(h-p)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wn extends Ln{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==_){let d=1-a;const g=l*f+c*m+u*_+h*p,S=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const M=Math.sqrt(y),P=Math.atan2(M,g*S);d=Math.sin(d*P)/M,a=Math.sin(a*P)/M}const T=a*S;if(l=l*d+f*T,c=c*d+m*T,u=u*d+_*T,h=h*d+p*T,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new C,ta=new Tn;class ni{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)cn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(cn)}else n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox),ws.applyMatrix4(e.matrixWorld),this.union(ws);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oi),Ri.subVectors(this.max,oi),In.subVectors(e.a,oi),Fn.subVectors(e.b,oi),Nn.subVectors(e.c,oi),Jt.subVectors(Fn,In),Qt.subVectors(Nn,Fn),un.subVectors(In,Nn);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-un.z,un.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,un.z,0,-un.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-un.y,un.x,0];return!Ts(t,In,Fn,Nn,Ri)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,In,Fn,Nn,Ri))?!1:(Di.crossVectors(Jt,Qt),t=[Di.x,Di.y,Di.z],Ts(t,In,Fn,Nn,Ri))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return cn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ht=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,ws=new ni,In=new C,Fn=new C,Nn=new C,Jt=new C,Qt=new C,un=new C,oi=new C,Ri=new C,Di=new C,hn=new C;function Ts(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){hn.fromArray(r,s);const a=i.x*Math.abs(hn.x)+i.y*Math.abs(hn.y)+i.z*Math.abs(hn.z),l=e.dot(hn),c=t.dot(hn),u=n.dot(hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zl=new ni,li=new C,Es=new C;class rr{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;li.subVectors(e,this.center);const t=li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(li,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(li.copy(e.center).add(Es)),this.expandByPoint(li.copy(e.center).sub(Es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wt=new C,As=new C,Ii=new C,en=new C,Cs=new C,Fi=new C,Ls=new C;class Bl{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.direction).multiplyScalar(t).add(this.origin),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){As.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),en.copy(this.origin).sub(As);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ii),a=en.dot(this.direction),l=-en.dot(Ii),c=en.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ii).multiplyScalar(f).add(As),m}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);const n=Wt.dot(this.direction),i=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,i,s){Cs.subVectors(t,e),Fi.subVectors(n,e),Ls.crossVectors(Cs,Fi);let o=this.direction.dot(Ls),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const l=a*this.direction.dot(Fi.crossVectors(en,Fi));if(l<0)return null;const c=a*this.direction.dot(Cs.cross(en));if(c<0||l+c>o)return null;const u=-a*en.dot(Ls);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,f,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),s=1/On.setFromMatrixColumn(e,1).length(),o=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,p=c*h;t[0]=f+p*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kl,e,Gl)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),tn.crossVectors(n,St),tn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),tn.crossVectors(n,St)),tn.normalize(),Ni.crossVectors(St,tn),i[0]=tn.x,i[4]=Ni.x,i[8]=St.x,i[1]=tn.y,i[5]=Ni.y,i[9]=St.y,i[2]=tn.z,i[6]=Ni.z,i[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],S=n[3],y=n[7],T=n[11],M=n[15],P=i[0],N=i[4],v=i[8],E=i[12],I=i[1],J=i[5],K=i[9],O=i[13],D=i[2],q=i[6],Q=i[10],ee=i[14],j=i[3],te=i[7],se=i[11],pe=i[15];return s[0]=o*P+a*I+l*D+c*j,s[4]=o*N+a*J+l*q+c*te,s[8]=o*v+a*K+l*Q+c*se,s[12]=o*E+a*O+l*ee+c*pe,s[1]=u*P+h*I+f*D+m*j,s[5]=u*N+h*J+f*q+m*te,s[9]=u*v+h*K+f*Q+m*se,s[13]=u*E+h*O+f*ee+m*pe,s[2]=_*P+p*I+d*D+g*j,s[6]=_*N+p*J+d*q+g*te,s[10]=_*v+p*K+d*Q+g*se,s[14]=_*E+p*O+d*ee+g*pe,s[3]=S*P+y*I+T*D+M*j,s[7]=S*N+y*J+T*q+M*te,s[11]=S*v+y*K+T*Q+M*se,s[15]=S*E+y*O+T*ee+M*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*m-n*l*m)+p*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+d*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+g*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],S=h*d*c-p*f*c+p*l*m-a*d*m-h*l*g+a*f*g,y=_*f*c-u*d*c-_*l*m+o*d*m+u*l*g-o*f*g,T=u*p*c-_*h*c+_*a*m-o*p*m-u*a*g+o*h*g,M=_*h*l-u*p*l-_*a*f+o*p*f+u*a*d-o*h*d,P=t*S+n*y+i*T+s*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=S*N,e[1]=(p*f*s-h*d*s-p*i*m+n*d*m+h*i*g-n*f*g)*N,e[2]=(a*d*s-p*l*s+p*i*c-n*d*c-a*i*g+n*l*g)*N,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*m-n*l*m)*N,e[4]=y*N,e[5]=(u*d*s-_*f*s+_*i*m-t*d*m-u*i*g+t*f*g)*N,e[6]=(_*l*s-o*d*s-_*i*c+t*d*c+o*i*g-t*l*g)*N,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*m+t*l*m)*N,e[8]=T*N,e[9]=(_*h*s-u*p*s-_*n*m+t*p*m+u*n*g-t*h*g)*N,e[10]=(o*p*s-_*a*s+_*n*c-t*p*c-o*n*g+t*a*g)*N,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*N,e[12]=M*N,e[13]=(u*p*i-_*h*i+_*n*f-t*p*f-u*n*d+t*h*d)*N,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*d-t*a*d)*N,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,p=o*u,d=o*h,g=a*h,S=l*c,y=l*u,T=l*h,M=n.x,P=n.y,N=n.z;return i[0]=(1-(p+g))*M,i[1]=(m+T)*M,i[2]=(_-y)*M,i[3]=0,i[4]=(m-T)*P,i[5]=(1-(f+g))*P,i[6]=(d+S)*P,i[7]=0,i[8]=(_+y)*N,i[9]=(d-S)*N,i[10]=(1-(f+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=On.set(i[0],i[1],i[2]).length();const o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],It.copy(this);const c=1/s,u=1/o,h=1/a;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=u,It.elements[5]*=u,It.elements[6]*=u,It.elements[8]*=h,It.elements[9]*=h,It.elements[10]*=h,t.setFromRotationMatrix(It),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,f=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const On=new C,It=new et,kl=new C(0,0,0),Gl=new C(1,1,1),tn=new C,Ni=new C,St=new C,na=new et,ia=new Tn;class is{constructor(e=0,t=0,n=0,i=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ia.setFromEuler(this),this.setFromQuaternion(ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vl=0;const sa=new C,Un=new Tn,Xt=new et,Oi=new C,ci=new C,Hl=new C,Wl=new Tn,ra=new C(1,0,0),aa=new C(0,1,0),oa=new C(0,0,1),Xl={type:"added"},la={type:"removed"};class qe extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const e=new C,t=new is,n=new Tn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Tt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(ra,e)}rotateY(e){return this.rotateOnAxis(aa,e)}rotateZ(e){return this.rotateOnAxis(oa,e)}translateOnAxis(e,t){return sa.copy(e).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ra,e)}translateY(e){return this.translateOnAxis(aa,e)}translateZ(e){return this.translateOnAxis(oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(ci,Oi,this.up):Xt.lookAt(Oi,ci,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(Xt),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(la)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(la)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,Hl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new C(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new C,qt=new C,Ps=new C,jt=new C,zn=new C,Bn=new C,ca=new C,Rs=new C,Ds=new C,Is=new C;class Yt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ft.subVectors(e,t),i.cross(Ft);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ft.subVectors(i,t),qt.subVectors(n,t),Ps.subVectors(e,t);const o=Ft.dot(Ft),a=Ft.dot(qt),l=Ft.dot(Ps),c=qt.dot(qt),u=qt.dot(Ps),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,jt),l.set(0,0),l.addScaledVector(s,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l}static isFrontFacing(e,t,n,i){return Ft.subVectors(n,t),qt.subVectors(e,t),Ft.cross(qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Ft.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Yt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;zn.subVectors(i,n),Bn.subVectors(s,n),Rs.subVectors(e,n);const l=zn.dot(Rs),c=Bn.dot(Rs);if(l<=0&&c<=0)return t.copy(n);Ds.subVectors(e,i);const u=zn.dot(Ds),h=Bn.dot(Ds);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(zn,o);Is.subVectors(e,s);const m=zn.dot(Is),_=Bn.dot(Is);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Bn,a);const d=u*_-m*h;if(d<=0&&h-u>=0&&m-_>=0)return ca.subVectors(s,i),a=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(ca,a);const g=1/(d+p+f);return o=p*g,a=f*g,t.copy(n).addScaledVector(zn,o).addScaledVector(Bn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ql=0;class Ti extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=$n,this.side=$t,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==$t&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ar extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new C,Ui=new Ee;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fo extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class po extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jl=0;const Lt=new et,Fs=new qe,kn=new C,wt=new ni,ui=new ni,at=new C;class At extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ao(e)?po:fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(wt.min,ui.min),wt.expandByPoint(at),at.addVectors(wt.max,ui.max),wt.expandByPoint(at)):(wt.expandByPoint(ui.min),wt.expandByPoint(ui.max))}wt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(at));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)at.fromBufferAttribute(a,c),l&&(kn.fromBufferAttribute(e,c),at.add(kn)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new C,u[I]=new C;const h=new C,f=new C,m=new C,_=new Ee,p=new Ee,d=new Ee,g=new C,S=new C;function y(I,J,K){h.fromArray(i,I*3),f.fromArray(i,J*3),m.fromArray(i,K*3),_.fromArray(o,I*2),p.fromArray(o,J*2),d.fromArray(o,K*2),f.sub(h),m.sub(h),p.sub(_),d.sub(_);const O=1/(p.x*d.y-d.x*p.y);isFinite(O)&&(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(O),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(O),c[I].add(g),c[J].add(g),c[K].add(g),u[I].add(S),u[J].add(S),u[K].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let I=0,J=T.length;I<J;++I){const K=T[I],O=K.start,D=K.count;for(let q=O,Q=O+D;q<Q;q+=3)y(n[q+0],n[q+1],n[q+2])}const M=new C,P=new C,N=new C,v=new C;function E(I){N.fromArray(s,I*3),v.copy(N);const J=c[I];M.copy(J),M.sub(N.multiplyScalar(N.dot(J))).normalize(),P.crossVectors(v,J);const O=P.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=O}for(let I=0,J=T.length;I<J;++I){const K=T[I],O=K.start,D=K.count;for(let q=O,Q=O+D;q<Q;q+=3)E(n[q+0]),E(n[q+1]),E(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new Ut(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new et,Gn=new Bl,Ns=new rr,hi=new C,di=new C,fi=new C,Os=new C,zi=new C,Bi=new Ee,ki=new Ee,Gi=new Ee,Us=new C,Vi=new C;class Et extends qe{constructor(e=new At,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){zi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Os.fromBufferAttribute(h,e),o?zi.addScaledVector(Os,u):zi.addScaledVector(Os.sub(t),u))}t.add(zi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),e.ray.intersectsSphere(Ns)===!1)||(ua.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(ua),n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=g,T=S;y<T;y+=3){const M=a.getX(y),P=a.getX(y+1),N=a.getX(y+2);o=Hi(this,d,e,Gn,c,u,M,P,N),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);o=Hi(this,i,e,Gn,c,u,g,S,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const p=h[m],d=i[p.materialIndex],g=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=g,T=S;y<T;y+=3){const M=y,P=y+1,N=y+2;o=Hi(this,d,e,Gn,c,u,M,P,N),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,d=_;p<d;p+=3){const g=p,S=p+1,y=p+2;o=Hi(this,i,e,Gn,c,u,g,S,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Yl(r,e,t,n,i,s,o,a){let l;if(e.side===xt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$t,a),l===null)return null;Vi.copy(a),Vi.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Vi);return c<t.near||c>t.far?null:{distance:c,point:Vi.clone(),object:r}}function Hi(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,hi),r.getVertexPosition(a,di),r.getVertexPosition(l,fi);const c=Yl(r,e,t,n,hi,di,fi,Us);if(c){i&&(Bi.fromBufferAttribute(i,o),ki.fromBufferAttribute(i,a),Gi.fromBufferAttribute(i,l),c.uv=Yt.getUV(Us,hi,di,fi,Bi,ki,Gi,new Ee)),s&&(Bi.fromBufferAttribute(s,o),ki.fromBufferAttribute(s,a),Gi.fromBufferAttribute(s,l),c.uv2=Yt.getUV(Us,hi,di,fi,Bi,ki,Gi,new Ee));const u={a:o,b:a,c:l,normal:new C,materialIndex:0};Yt.getNormal(hi,di,fi,u.normal),c.face=u}return c}class Ei extends At{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2));function _(p,d,g,S,y,T,M,P,N,v,E){const I=T/N,J=M/v,K=T/2,O=M/2,D=P/2,q=N+1,Q=v+1;let ee=0,j=0;const te=new C;for(let se=0;se<Q;se++){const pe=se*J-O;for(let k=0;k<q;k++){const $=k*I-K;te[p]=$*S,te[d]=pe*y,te[g]=D,c.push(te.x,te.y,te.z),te[p]=0,te[d]=0,te[g]=P>0?1:-1,u.push(te.x,te.y,te.z),h.push(k/N),h.push(1-se/v),ee+=1}}for(let se=0;se<v;se++)for(let pe=0;pe<N;pe++){const k=f+pe+q*se,$=f+pe+q*(se+1),oe=f+(pe+1)+q*(se+1),le=f+(pe+1)+q*se;l.push(k,$,le),l.push($,oe,le),j+=6}a.addGroup(m,j,E),m+=j,f+=ee}}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _t(r){const e={};for(let t=0;t<r.length;t++){const n=ti(r[t]);for(const i in n)e[i]=n[i]}return e}function Zl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mo(r){return r.getRenderTarget()===null&&r.outputEncoding===ke?zt:yi}const $l={clone:ti,merge:_t};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=Zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class go extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends go{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vn=-90,Hn=1;class Ql extends qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pt(Vn,Hn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Pt(Vn,Hn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Pt(Vn,Hn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Pt(Vn,Hn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Pt(Vn,Hn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Pt(Vn,Hn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=kt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class _o extends ct{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jn,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _o(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ei(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:nn});s.uniforms.tEquirect.value=t;const o=new Et(i,s),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=pt),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const zs=new C,tc=new C,nc=new Tt;class dn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zs.subVectors(n,t).cross(tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(zs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nc.getNormalMatrix(e),i=this.coplanarPoint(zs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new rr,Wi=new C;class or{constructor(e=new dn,t=new dn,n=new dn,i=new dn,s=new dn,o=new dn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],S=n[14],y=n[15];return t[0].setComponents(a-i,h-l,p-f,y-d).normalize(),t[1].setComponents(a+i,h+l,p+f,y+d).normalize(),t[2].setComponents(a+s,h+c,p+m,y+g).normalize(),t[3].setComponents(a-s,h-c,p-m,y-g).normalize(),t[4].setComponents(a-o,h-u,p-_,y-S).normalize(),t[5].setComponents(a+o,h+u,p+_,y+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wi.x=i.normal.x>0?e.max.x:e.min.x,Wi.y=i.normal.y>0?e.max.y:e.min.y,Wi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ic(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class lr extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],p=[],d=[];for(let g=0;g<u;g++){const S=g*f-o;for(let y=0;y<c;y++){const T=y*h-s;_.push(T,-S,0),p.push(0,0,1),d.push(y/a),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const y=S+c*g,T=S+c*(g+1),M=S+1+c*(g+1),P=S+1+c*g;m.push(y,T,P),m.push(T,M,P)}this.setIndex(m),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(p,3)),this.setAttribute("uv",new je(d,2))}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var sc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ac=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uc="vec3 transformed = vec3( position );",hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,fc=`#ifdef USE_IRIDESCENCE
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
#endif`,pc=`#ifdef USE_BUMPMAP
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
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sc=`#define PI 3.141592653589793
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
}`,wc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tc=`vec3 transformedNormal = objectNormal;
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
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ac=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Ic=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fc=`#ifdef USE_ENVMAP
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
#endif`,Nc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
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
#endif`,Uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gc=`#ifdef USE_GRADIENTMAP
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
}`,Vc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qc=`uniform bool receiveShadow;
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
#endif`,jc=`#if defined( USE_ENVMAP )
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
#endif`,Yc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$c=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jc=`PhysicalMaterial material;
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
#endif`,Qc=`struct PhysicalMaterial {
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
}`,eu=`
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
#endif`,tu=`#if defined( RE_IndirectDiffuse )
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
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
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
#endif`,mu=`#ifdef USE_MORPHTARGETS
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
#endif`,gu=`#ifdef USE_MORPHTARGETS
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
#endif`,_u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xu=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
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
#endif`,Su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zu=`float getShadowMask() {
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
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vu=`#ifdef USE_SKINNING
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
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Yu=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$u=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ku=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ju=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,th=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ih=`uniform sampler2D t2D;
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
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lh=`#include <common>
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
}`,ch=`#if DEPTH_PACKING == 3200
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
}`,uh=`#define DISTANCE
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
}`,hh=`#define DISTANCE
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
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ph=`uniform float scale;
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
}`,mh=`uniform vec3 diffuse;
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
}`,gh=`#include <common>
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
}`,_h=`uniform vec3 diffuse;
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
}`,xh=`#define LAMBERT
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
}`,vh=`#define LAMBERT
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
}`,Mh=`#define MATCAP
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
}`,yh=`#define MATCAP
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
}`,bh=`#define NORMAL
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
}`,Sh=`#define NORMAL
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
}`,wh=`#define PHONG
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
}`,Th=`#define PHONG
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
}`,Eh=`#define STANDARD
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
}`,Ah=`#define STANDARD
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
}`,Ch=`#define TOON
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
}`,Lh=`#define TOON
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
}`,Ph=`uniform float size;
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
}`,Rh=`uniform vec3 diffuse;
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
}`,Dh=`#include <common>
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
}`,Ih=`uniform vec3 color;
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
}`,Fh=`uniform float rotation;
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
}`,Nh=`uniform vec3 diffuse;
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
}`,Ce={alphamap_fragment:sc,alphamap_pars_fragment:rc,alphatest_fragment:ac,alphatest_pars_fragment:oc,aomap_fragment:lc,aomap_pars_fragment:cc,begin_vertex:uc,beginnormal_vertex:hc,bsdfs:dc,iridescence_fragment:fc,bumpmap_pars_fragment:pc,clipping_planes_fragment:mc,clipping_planes_pars_fragment:gc,clipping_planes_pars_vertex:_c,clipping_planes_vertex:xc,color_fragment:vc,color_pars_fragment:Mc,color_pars_vertex:yc,color_vertex:bc,common:Sc,cube_uv_reflection_fragment:wc,defaultnormal_vertex:Tc,displacementmap_pars_vertex:Ec,displacementmap_vertex:Ac,emissivemap_fragment:Cc,emissivemap_pars_fragment:Lc,encodings_fragment:Pc,encodings_pars_fragment:Rc,envmap_fragment:Dc,envmap_common_pars_fragment:Ic,envmap_pars_fragment:Fc,envmap_pars_vertex:Nc,envmap_physical_pars_fragment:jc,envmap_vertex:Oc,fog_vertex:Uc,fog_pars_vertex:zc,fog_fragment:Bc,fog_pars_fragment:kc,gradientmap_pars_fragment:Gc,lightmap_fragment:Vc,lightmap_pars_fragment:Hc,lights_lambert_fragment:Wc,lights_lambert_pars_fragment:Xc,lights_pars_begin:qc,lights_toon_fragment:Yc,lights_toon_pars_fragment:Zc,lights_phong_fragment:$c,lights_phong_pars_fragment:Kc,lights_physical_fragment:Jc,lights_physical_pars_fragment:Qc,lights_fragment_begin:eu,lights_fragment_maps:tu,lights_fragment_end:nu,logdepthbuf_fragment:iu,logdepthbuf_pars_fragment:su,logdepthbuf_pars_vertex:ru,logdepthbuf_vertex:au,map_fragment:ou,map_pars_fragment:lu,map_particle_fragment:cu,map_particle_pars_fragment:uu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:du,morphcolor_vertex:fu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:gu,normal_fragment_begin:_u,normal_fragment_maps:xu,normal_pars_fragment:vu,normal_pars_vertex:Mu,normal_vertex:yu,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:Tu,iridescence_pars_fragment:Eu,output_fragment:Au,packing:Cu,premultiplied_alpha_fragment:Lu,project_vertex:Pu,dithering_fragment:Ru,dithering_pars_fragment:Du,roughnessmap_fragment:Iu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Ou,shadowmap_vertex:Uu,shadowmask_pars_fragment:zu,skinbase_vertex:Bu,skinning_pars_vertex:ku,skinning_vertex:Gu,skinnormal_vertex:Vu,specularmap_fragment:Hu,specularmap_pars_fragment:Wu,tonemapping_fragment:Xu,tonemapping_pars_fragment:qu,transmission_fragment:ju,transmission_pars_fragment:Yu,uv_pars_fragment:Zu,uv_pars_vertex:$u,uv_vertex:Ku,uv2_pars_fragment:Ju,uv2_pars_vertex:Qu,uv2_vertex:eh,worldpos_vertex:th,background_vert:nh,background_frag:ih,backgroundCube_vert:sh,backgroundCube_frag:rh,cube_vert:ah,cube_frag:oh,depth_vert:lh,depth_frag:ch,distanceRGBA_vert:uh,distanceRGBA_frag:hh,equirect_vert:dh,equirect_frag:fh,linedashed_vert:ph,linedashed_frag:mh,meshbasic_vert:gh,meshbasic_frag:_h,meshlambert_vert:xh,meshlambert_frag:vh,meshmatcap_vert:Mh,meshmatcap_frag:yh,meshnormal_vert:bh,meshnormal_frag:Sh,meshphong_vert:wh,meshphong_frag:Th,meshphysical_vert:Eh,meshphysical_frag:Ah,meshtoon_vert:Ch,meshtoon_frag:Lh,points_vert:Ph,points_frag:Rh,shadow_vert:Dh,shadow_frag:Ih,sprite_vert:Fh,sprite_frag:Nh},ue={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Bt={basic:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:_t([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:_t([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:_t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:_t([ue.points,ue.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:_t([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:_t([ue.common,ue.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:_t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:_t([ue.sprite,ue.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:_t([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:_t([ue.lights,ue.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Bt.physical={uniforms:_t([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Xi={r:0,b:0,g:0};function Oh(r,e,t,n,i,s,o){const a=new Ue(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(d,g){let S=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y));const T=r.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ns)?(u===void 0&&(u=new Et(new Ei(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ti(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,N,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=y.encoding!==ke,(h!==y||f!==y.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Et(new lr(2,2),new Kt({name:"BackgroundMaterial",uniforms:ti(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=y.encoding!==ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,g){d.getRGB(Xi,mo(r)),n.buffers.color.setClear(Xi.r,Xi.g,Xi.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:_}}function Uh(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(D,q,Q,ee,j){let te=!1;if(o){const se=p(ee,Q,q);c!==se&&(c=se,m(c.object)),te=g(D,ee,Q,j),te&&S(D,ee,Q,j)}else{const se=q.wireframe===!0;(c.geometry!==ee.id||c.program!==Q.id||c.wireframe!==se)&&(c.geometry=ee.id,c.program=Q.id,c.wireframe=se,te=!0)}j!==null&&t.update(j,34963),(te||u)&&(u=!1,v(D,q,Q,ee),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,q,Q){const ee=Q.wireframe===!0;let j=a[D.id];j===void 0&&(j={},a[D.id]=j);let te=j[q.id];te===void 0&&(te={},j[q.id]=te);let se=te[ee];return se===void 0&&(se=d(f()),te[ee]=se),se}function d(D){const q=[],Q=[],ee=[];for(let j=0;j<i;j++)q[j]=0,Q[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Q,attributeDivisors:ee,object:D,attributes:{},index:null}}function g(D,q,Q,ee){const j=c.attributes,te=q.attributes;let se=0;const pe=Q.getAttributes();for(const k in pe)if(pe[k].location>=0){const oe=j[k];let le=te[k];if(le===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),oe===void 0||oe.attribute!==le||le&&oe.data!==le.data)return!0;se++}return c.attributesNum!==se||c.index!==ee}function S(D,q,Q,ee){const j={},te=q.attributes;let se=0;const pe=Q.getAttributes();for(const k in pe)if(pe[k].location>=0){let oe=te[k];oe===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const le={};le.attribute=oe,oe&&oe.data&&(le.data=oe.data),j[k]=le,se++}c.attributes=j,c.attributesNum=se,c.index=ee}function y(){const D=c.newAttributes;for(let q=0,Q=D.length;q<Q;q++)D[q]=0}function T(D){M(D,0)}function M(D,q){const Q=c.newAttributes,ee=c.enabledAttributes,j=c.attributeDivisors;Q[D]=1,ee[D]===0&&(r.enableVertexAttribArray(D),ee[D]=1),j[D]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,q),j[D]=q)}function P(){const D=c.newAttributes,q=c.enabledAttributes;for(let Q=0,ee=q.length;Q<ee;Q++)q[Q]!==D[Q]&&(r.disableVertexAttribArray(Q),q[Q]=0)}function N(D,q,Q,ee,j,te){n.isWebGL2===!0&&(Q===5124||Q===5125)?r.vertexAttribIPointer(D,q,Q,j,te):r.vertexAttribPointer(D,q,Q,ee,j,te)}function v(D,q,Q,ee){if(n.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const j=ee.attributes,te=Q.getAttributes(),se=q.defaultAttributeValues;for(const pe in te){const k=te[pe];if(k.location>=0){let $=j[pe];if($===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const oe=$.normalized,le=$.itemSize,G=t.get($);if(G===void 0)continue;const Se=G.buffer,ge=G.type,me=G.bytesPerElement;if($.isInterleavedBufferAttribute){const de=$.data,Ie=de.stride,we=$.offset;if(de.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)M(k.location+xe,de.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<k.locationSize;xe++)T(k.location+xe);r.bindBuffer(34962,Se);for(let xe=0;xe<k.locationSize;xe++)N(k.location+xe,le/k.locationSize,ge,oe,Ie*me,(we+le/k.locationSize*xe)*me)}else{if($.isInstancedBufferAttribute){for(let de=0;de<k.locationSize;de++)M(k.location+de,$.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<k.locationSize;de++)T(k.location+de);r.bindBuffer(34962,Se);for(let de=0;de<k.locationSize;de++)N(k.location+de,le/k.locationSize,ge,oe,le*me,le/k.locationSize*de*me)}}else if(se!==void 0){const oe=se[pe];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(k.location,oe);break;case 3:r.vertexAttrib3fv(k.location,oe);break;case 4:r.vertexAttrib4fv(k.location,oe);break;default:r.vertexAttrib1fv(k.location,oe)}}}}P()}function E(){K();for(const D in a){const q=a[D];for(const Q in q){const ee=q[Q];for(const j in ee)_(ee[j].object),delete ee[j];delete q[Q]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const q=a[D.id];for(const Q in q){const ee=q[Q];for(const j in ee)_(ee[j].object),delete ee[j];delete q[Q]}delete a[D.id]}function J(D){for(const q in a){const Q=a[q];if(Q[D.id]===void 0)continue;const ee=Q[D.id];for(const j in ee)_(ee[j].object),delete ee[j];delete Q[D.id]}}function K(){O(),u=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:O,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:J,initAttributes:y,enableAttribute:T,disableUnusedAttributes:P}}function zh(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Bh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),S=r.getParameter(36349),y=f>0,T=o||e.has("OES_texture_float"),M=y&&T,P=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:M,maxSamples:P}}function kh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new dn,a=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!d)s?u(null):c();else{const S=s?0:n,y=S*4;let T=g.clippingState||null;l.value=T,T=u(_,f,y,m);for(let M=0;M!==y;++M)T[M]=t[M];g.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const g=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let y=0,T=m;y!==p;++y,T+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Gh(r){let e=new WeakMap;function t(o,a){return a===Zs?o.mapping=Jn:a===$s&&(o.mapping=Qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Zs||a===$s)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ec(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class vo extends go{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zn=4,ha=[.125,.215,.35,.446,.526,.582],mn=20,Bs=new vo,da=new Ue;let ks=null;const fn=(1+Math.sqrt(5))/2,Xn=1/fn,fa=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,fn,Xn),new C(0,fn,-Xn),new C(Xn,0,fn),new C(-Xn,0,fn),new C(fn,Xn,0),new C(-fn,Xn,0)];class pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ks=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ks),e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===Qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Mi,format:Ot,encoding:Sn,depthBuffer:!1},i=ma(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ma(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vh(s)),this._blurMaterial=Hh(s,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,n,i){const a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(da),u.toneMapping=kt,u.autoClear=!1;const m=new ar({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),_=new Et(new Ei,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(da),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;qi(i,S*y,g>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Jn||e.mapping===Qn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ga());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=fa[(i-1)%fa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mn-1),p=s/_,d=isFinite(s)?1+Math.floor(u*p):mn;d>mn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${mn}`);const g=[];let S=0;for(let N=0;N<mn;++N){const v=N/p,E=Math.exp(-v*v/2);g.push(E),N===0?S+=E:N<d&&(S+=2*E)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const T=this._sizeLods[i],M=3*T*(i>y-Zn?i-y+Zn:0),P=4*(this._cubeSize-T);qi(t,M,P,3*T,2*T),l.setRenderTarget(t),l.render(h,Bs)}}function Vh(r){const e=[],t=[],n=[];let i=r;const s=r-Zn+1+ha.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Zn?l=ha[o-r+Zn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,p=3,d=2,g=1,S=new Float32Array(p*_*m),y=new Float32Array(d*_*m),T=new Float32Array(g*_*m);for(let P=0;P<m;P++){const N=P%3*2/3-1,v=P>2?0:-1,E=[N,v,0,N+2/3,v,0,N+2/3,v+1,0,N,v,0,N+2/3,v+1,0,N,v+1,0];S.set(E,p*_*P),y.set(f,d*_*P);const I=[P,P,P,P,P,P];T.set(I,g*_*P)}const M=new At;M.setAttribute("position",new Ut(S,p)),M.setAttribute("uv",new Ut(y,d)),M.setAttribute("faceIndex",new Ut(T,g)),e.push(M),i>Zn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ma(r,e,t){const n=new wn(r,e,t);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hh(r,e,t){const n=new Float32Array(mn),i=new C(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cr(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function ga(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cr(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function _a(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function cr(){return`

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
	`}function Wh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zs||l===$s,u=l===Jn||l===Qn;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new pa(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new pa(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qh(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let y=0,T=S.length;y<T;y+=3){const M=S[y+0],P=S[y+1],N=S[y+2];f.push(M,P,P,N,N,M)}}else{const S=_.array;p=_.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const M=y+0,P=y+1,N=y+2;f.push(M,P,P,N,N,M)}}const d=new(ao(f)?po:fo)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jh(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Yh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zh(r,e){return r[0]-e[0]}function $h(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Kh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==d){let Q=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",Q)};var _=Q;g!==void 0&&g.texture.dispose();const T=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let I=0;T===!0&&(I=1),M===!0&&(I=2),P===!0&&(I=3);let J=u.attributes.position.count*I,K=1;J>e.maxTextureSize&&(K=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const O=new Float32Array(J*K*4*d),D=new uo(O,J,K,d);D.type=_n,D.needsUpdate=!0;const q=I*4;for(let ee=0;ee<d;ee++){const j=N[ee],te=v[ee],se=E[ee],pe=J*K*4*ee;for(let k=0;k<j.count;k++){const $=k*q;T===!0&&(o.fromBufferAttribute(j,k),O[pe+$+0]=o.x,O[pe+$+1]=o.y,O[pe+$+2]=o.z,O[pe+$+3]=0),M===!0&&(o.fromBufferAttribute(te,k),O[pe+$+4]=o.x,O[pe+$+5]=o.y,O[pe+$+6]=o.z,O[pe+$+7]=0),P===!0&&(o.fromBufferAttribute(se,k),O[pe+$+8]=o.x,O[pe+$+9]=o.y,O[pe+$+10]=o.z,O[pe+$+11]=se.itemSize===4?o.w:1)}}g={count:d,texture:D,size:new Ee(J,K)},s.set(u,g),u.addEventListener("dispose",Q)}let S=0;for(let T=0;T<m.length;T++)S+=m[T];const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<p;M++){const P=d[M];P[0]=M,P[1]=m[M]}d.sort($h);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Zh);const g=u.morphAttributes.position,S=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const P=a[M],N=P[0],v=P[1];N!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+M)!==g[N]&&u.setAttribute("morphTarget"+M,g[N]),S&&u.getAttribute("morphNormal"+M)!==S[N]&&u.setAttribute("morphNormal"+M,S[N]),i[M]=v,y+=v):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const T=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",T),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Jh(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Mo=new ct,yo=new uo,bo=new Ul,So=new _o,xa=[],va=[],Ma=new Float32Array(16),ya=new Float32Array(9),ba=new Float32Array(4);function ii(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xa[i];if(s===void 0&&(s=new Float32Array(i),xa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ss(r,e){let t=va[e];t===void 0&&(t=new Int32Array(e),va[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Qh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),nt(t,e)}}function td(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),nt(t,e)}}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),nt(t,e)}}function id(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;ba.set(n),r.uniformMatrix2fv(this.addr,!1,ba),nt(t,n)}}function sd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;ya.set(n),r.uniformMatrix3fv(this.addr,!1,ya),nt(t,n)}}function rd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ma.set(n),r.uniformMatrix4fv(this.addr,!1,Ma),nt(t,n)}}function ad(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),nt(t,e)}}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),nt(t,e)}}function cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),nt(t,e)}}function ud(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),nt(t,e)}}function dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),nt(t,e)}}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),nt(t,e)}}function pd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Mo,i)}function md(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bo,i)}function gd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||So,i)}function _d(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yo,i)}function xd(r){switch(r){case 5126:return Qh;case 35664:return ed;case 35665:return td;case 35666:return nd;case 35674:return id;case 35675:return sd;case 35676:return rd;case 5124:case 35670:return ad;case 35667:case 35671:return od;case 35668:case 35672:return ld;case 35669:case 35673:return cd;case 5125:return ud;case 36294:return hd;case 36295:return dd;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return pd;case 35679:case 36299:case 36307:return md;case 35680:case 36300:case 36308:case 36293:return gd;case 36289:case 36303:case 36311:case 36292:return _d}}function vd(r,e){r.uniform1fv(this.addr,e)}function Md(r,e){const t=ii(e,this.size,2);r.uniform2fv(this.addr,t)}function yd(r,e){const t=ii(e,this.size,3);r.uniform3fv(this.addr,t)}function bd(r,e){const t=ii(e,this.size,4);r.uniform4fv(this.addr,t)}function Sd(r,e){const t=ii(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wd(r,e){const t=ii(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Td(r,e){const t=ii(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ed(r,e){r.uniform1iv(this.addr,e)}function Ad(r,e){r.uniform2iv(this.addr,e)}function Cd(r,e){r.uniform3iv(this.addr,e)}function Ld(r,e){r.uniform4iv(this.addr,e)}function Pd(r,e){r.uniform1uiv(this.addr,e)}function Rd(r,e){r.uniform2uiv(this.addr,e)}function Dd(r,e){r.uniform3uiv(this.addr,e)}function Id(r,e){r.uniform4uiv(this.addr,e)}function Fd(r,e,t){const n=this.cache,i=e.length,s=ss(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mo,s[o])}function Nd(r,e,t){const n=this.cache,i=e.length,s=ss(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bo,s[o])}function Od(r,e,t){const n=this.cache,i=e.length,s=ss(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||So,s[o])}function Ud(r,e,t){const n=this.cache,i=e.length,s=ss(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yo,s[o])}function zd(r){switch(r){case 5126:return vd;case 35664:return Md;case 35665:return yd;case 35666:return bd;case 35674:return Sd;case 35675:return wd;case 35676:return Td;case 5124:case 35670:return Ed;case 35667:case 35671:return Ad;case 35668:case 35672:return Cd;case 35669:case 35673:return Ld;case 5125:return Pd;case 36294:return Rd;case 36295:return Dd;case 36296:return Id;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Od;case 36289:case 36303:case 36311:case 36292:return Ud}}class Bd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=xd(t.type)}}class kd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zd(t.type)}}class Gd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function Sa(r,e){r.seq.push(e),r.map[e.id]=e}function Vd(r,e,t){const n=r.name,i=n.length;for(Gs.lastIndex=0;;){const s=Gs.exec(n),o=Gs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sa(t,c===void 0?new Bd(a,r,e):new kd(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Gd(a),Sa(t,h)),t=h}}}class Qi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Vd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function wa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Hd=0;function Wd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Xd(r){switch(r){case Sn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ta(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Wd(r.getShaderSource(e),o)}else return i}function qd(r,e){const t=Xd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jd(r,e){let t;switch(e){case cl:t="Linear";break;case ul:t="Reinhard";break;case hl:t="OptimizedCineon";break;case dl:t="ACESFilmic";break;case fl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Zd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $d(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function gi(r){return r!==""}function Ea(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Aa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kd=/^[ \t]*#include +<([\w\d./]+)>/gm;function nr(r){return r.replace(Kd,Jd)}function Jd(r,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return nr(t)}const Qd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ca(r){return r.replace(Qd,ef)}function ef(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function La(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ja?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function nf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Jn:case Qn:e="ENVMAP_TYPE_CUBE";break;case ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qn:e="ENVMAP_MODE_REFRACTION";break}return e}function rf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case no:e="ENVMAP_BLENDING_MULTIPLY";break;case ol:e="ENVMAP_BLENDING_MIX";break;case ll:e="ENVMAP_BLENDING_ADD";break}return e}function af(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function of(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tf(t),c=nf(t),u=sf(t),h=rf(t),f=af(t),m=t.isWebGL2?"":Yd(t),_=Zd(s),p=i.createProgram();let d,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(gi).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(gi).join(`
`),g.length>0&&(g+=`
`)):(d=[La(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),g=[m,La(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kt?"#define TONE_MAPPING":"",t.toneMapping!==kt?Ce.tonemapping_pars_fragment:"",t.toneMapping!==kt?jd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,qd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),o=nr(o),o=Ea(o,t),o=Aa(o,t),a=nr(a),a=Ea(a,t),a=Aa(a,t),o=Ca(o),a=Ca(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===Qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=S+d+o,T=S+g+a,M=wa(i,35633,y),P=wa(i,35632,T);if(i.attachShader(p,M),i.attachShader(p,P),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(M).trim(),J=i.getShaderInfoLog(P).trim();let K=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const D=Ta(i,M,"vertex"),q=Ta(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+D+`
`+q)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||J==="")&&(O=!1);O&&(this.diagnostics={runnable:K,programLog:E,vertexShader:{log:I,prefix:d},fragmentShader:{log:J,prefix:g}})}i.deleteShader(M),i.deleteShader(P);let N;this.getUniforms=function(){return N===void 0&&(N=new Qi(i,p)),N};let v;return this.getAttributes=function(){return v===void 0&&(v=$d(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Hd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=P,this}let lf=0;class cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uf(e),t.set(e,n)),n}}class uf{constructor(e){this.id=lf++,this.code=e,this.usedTimes=0}}function hf(r,e,t,n,i,s,o){const a=new ho,l=new cf,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,I,J,K){const O=J.fog,D=K.geometry,q=v.isMeshStandardMaterial?J.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),ee=Q&&Q.mapping===ns?Q.image.height:null,j=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=te!==void 0?te.length:0;let pe=0;D.morphAttributes.position!==void 0&&(pe=1),D.morphAttributes.normal!==void 0&&(pe=2),D.morphAttributes.color!==void 0&&(pe=3);let k,$,oe,le;if(j){const Ie=Bt[j];k=Ie.vertexShader,$=Ie.fragmentShader}else k=v.vertexShader,$=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),le=l.getFragmentShaderID(v);const G=r.getRenderTarget(),Se=v.alphaTest>0,ge=v.clearcoat>0,me=v.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:v.type,vertexShader:k,fragmentShader:$,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Sn,map:!!v.map,matcap:!!v.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:ee,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Dl,tangentSpaceNormalMap:v.normalMapType===ro,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ke,clearcoat:ge,clearcoatMap:ge&&!!v.clearcoatMap,clearcoatRoughnessMap:ge&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!v.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!v.iridescenceMap,iridescenceThicknessMap:me&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===$n,alphaMap:!!v.alphaMap,alphaTest:Se,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:kt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Zt,flipSided:v.side===xt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(E,v),S(E,v),E.push(r.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),v.push(a.mask)}function y(v){const E=_[v.type];let I;if(E){const J=Bt[E];I=$l.clone(J.uniforms)}else I=v.uniforms;return I}function T(v,E){let I;for(let J=0,K=c.length;J<K;J++){const O=c[J];if(O.cacheKey===E){I=O,++I.usedTimes;break}}return I===void 0&&(I=new of(r,E,v,s),c.push(I)),I}function M(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:M,releaseShaderCache:P,programs:c,dispose:N}}function df(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ff(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ra(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,_,p,d){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:d},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function a(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,p,d){const g=o(h,f,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||ff),n.length>1&&n.sort(f||Pa),i.length>1&&i.sort(f||Pa)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function pf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ra,r.set(n,[o])):i>=s.length?(o=new Ra,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function mf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ue};break;case"SpotLight":t={position:new C,direction:new C,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function gf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _f=0;function xf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vf(r,e){const t=new mf,n=gf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);const s=new C,o=new et,a=new et;function l(u,h){let f=0,m=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let p=0,d=0,g=0,S=0,y=0,T=0,M=0,P=0,N=0,v=0;u.sort(xf);const E=h!==!0?Math.PI:1;for(let J=0,K=u.length;J<K;J++){const O=u[J],D=O.color,q=O.intensity,Q=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=D.r*q*E,m+=D.g*q*E,_+=D.b*q*E;else if(O.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(O.sh.coefficients[j],q);else if(O.isDirectionalLight){const j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const te=O.shadow,se=n.get(O);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=O.shadow.matrix,T++}i.directional[p]=j,p++}else if(O.isSpotLight){const j=t.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(D).multiplyScalar(q*E),j.distance=Q,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,i.spot[g]=j;const te=O.shadow;if(O.map&&(i.spotLightMap[N]=O.map,N++,te.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[g]=te.matrix,O.castShadow){const se=n.get(O);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=ee,P++}g++}else if(O.isRectAreaLight){const j=t.get(O);j.color.copy(D).multiplyScalar(q),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=j,S++}else if(O.isPointLight){const j=t.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity*E),j.distance=O.distance,j.decay=O.decay,O.castShadow){const te=O.shadow,se=n.get(O);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,i.pointShadow[d]=se,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=O.shadow.matrix,M++}i.point[d]=j,d++}else if(O.isHemisphereLight){const j=t.get(O);j.skyColor.copy(O.color).multiplyScalar(q*E),j.groundColor.copy(O.groundColor).multiplyScalar(q*E),i.hemi[y]=j,y++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const I=i.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==y||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==P||I.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=P+N-v,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=y,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=P,I.numSpotMaps=N,i.version=_f++)}function c(u,h){let f=0,m=0,_=0,p=0,d=0;const g=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const T=u[S];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(T.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),_++}else if(T.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(T.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),m++}else if(T.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),d++}}}return{setup:l,setupView:c,state:i}}function Da(r,e){const t=new vf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Mf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Da(r,e),t.set(s,[l])):o>=a.length?(l=new Da(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yf extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bf extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wf=`uniform sampler2D shadow_pass;
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
}`;function Tf(r,e,t){let n=new or;const i=new Ee,s=new Ee,o=new lt,a=new yf({depthPacking:Rl}),l=new bf,c={},u=t.maxTextureSize,h={[$t]:xt,[xt]:$t,[Zt]:Zt},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Sf,fragmentShader:wf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new At;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Et(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja,this.render=function(T,M,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const N=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(nn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let J=0,K=T.length;J<K;J++){const O=T[J],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const q=D.getFrameExtents();if(i.multiply(q),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null){const ee=this.type!==mi?{minFilter:ut,magFilter:ut}:{};D.map=new wn(i.x,i.y,ee),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const Q=D.getViewportCount();for(let ee=0;ee<Q;ee++){const j=D.getViewport(ee);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),I.viewport(o),D.updateMatrices(O,ee),n=D.getFrustum(),y(M,P,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===mi&&g(D,P),D.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(N,v,E)};function g(T,M){const P=e.update(p);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(M,null,P,f,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(M,null,P,m,p,null)}function S(T,M,P,N,v,E){let I=null;const J=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(J!==void 0)I=J;else if(I=P.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const K=I.uuid,O=M.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let q=D[O];q===void 0&&(q=I.clone(),D[O]=q),I=q}return I.visible=M.visible,I.wireframe=M.wireframe,E===mi?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:h[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=N,I.farDistance=v),I}function y(T,M,P,N,v){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===mi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const J=e.update(T),K=T.material;if(Array.isArray(K)){const O=J.groups;for(let D=0,q=O.length;D<q;D++){const Q=O[D],ee=K[Q.materialIndex];if(ee&&ee.visible){const j=S(T,ee,N,P.near,P.far,v);r.renderBufferDirect(P,null,J,j,T,Q)}}}else if(K.visible){const O=S(T,K,N,P.near,P.far,v);r.renderBufferDirect(P,null,J,O,T,null)}}const I=T.children;for(let J=0,K=I.length;J<K;J++)y(I[J],M,P,N,v)}}function Ef(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const W=new lt;let ie=null;const fe=new lt(0,0,0,0);return{setMask:function(_e){ie!==_e&&!L&&(r.colorMask(_e,_e,_e,_e),ie=_e)},setLocked:function(_e){L=_e},setClear:function(_e,Be,st,ht,rn){rn===!0&&(_e*=ht,Be*=ht,st*=ht),W.set(_e,Be,st,ht),fe.equals(W)===!1&&(r.clearColor(_e,Be,st,ht),fe.copy(W))},reset:function(){L=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let L=!1,W=null,ie=null,fe=null;return{setTest:function(_e){_e?Se(2929):ge(2929)},setMask:function(_e){W!==_e&&!L&&(r.depthMask(_e),W=_e)},setFunc:function(_e){if(ie!==_e){switch(_e){case el:r.depthFunc(512);break;case tl:r.depthFunc(519);break;case nl:r.depthFunc(513);break;case Ys:r.depthFunc(515);break;case il:r.depthFunc(514);break;case sl:r.depthFunc(518);break;case rl:r.depthFunc(516);break;case al:r.depthFunc(517);break;default:r.depthFunc(515)}ie=_e}},setLocked:function(_e){L=_e},setClear:function(_e){fe!==_e&&(r.clearDepth(_e),fe=_e)},reset:function(){L=!1,W=null,ie=null,fe=null}}}function o(){let L=!1,W=null,ie=null,fe=null,_e=null,Be=null,st=null,ht=null,rn=null;return{setTest:function(He){L||(He?Se(2960):ge(2960))},setMask:function(He){W!==He&&!L&&(r.stencilMask(He),W=He)},setFunc:function(He,Gt,Ct){(ie!==He||fe!==Gt||_e!==Ct)&&(r.stencilFunc(He,Gt,Ct),ie=He,fe=Gt,_e=Ct)},setOp:function(He,Gt,Ct){(Be!==He||st!==Gt||ht!==Ct)&&(r.stencilOp(He,Gt,Ct),Be=He,st=Gt,ht=Ct)},setLocked:function(He){L=He},setClear:function(He){rn!==He&&(r.clearStencil(He),rn=He)},reset:function(){L=!1,W=null,ie=null,fe=null,_e=null,Be=null,st=null,ht=null,rn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,y=null,T=null,M=null,P=null,N=null,v=null,E=!1,I=null,J=null,K=null,O=null,D=null;const q=r.getParameter(35661);let Q=!1,ee=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),Q=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Q=ee>=2);let te=null,se={};const pe=r.getParameter(3088),k=r.getParameter(2978),$=new lt().fromArray(pe),oe=new lt().fromArray(k);function le(L,W,ie){const fe=new Uint8Array(4),_e=r.createTexture();r.bindTexture(L,_e),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Be=0;Be<ie;Be++)r.texImage2D(W+Be,0,6408,1,1,0,6408,5121,fe);return _e}const G={};G[3553]=le(3553,3553,1),G[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(Ys),Ve(!1),Je(br),Se(2884),We(nn);function Se(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function ge(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function me(L,W){return m[L]!==W?(r.bindFramebuffer(L,W),m[L]=W,n&&(L===36009&&(m[36160]=W),L===36160&&(m[36009]=W)),!0):!1}function de(L,W){let ie=p,fe=!1;if(L)if(ie=_.get(W),ie===void 0&&(ie=[],_.set(W,ie)),L.isWebGLMultipleRenderTargets){const _e=L.texture;if(ie.length!==_e.length||ie[0]!==36064){for(let Be=0,st=_e.length;Be<st;Be++)ie[Be]=36064+Be;ie.length=_e.length,fe=!0}}else ie[0]!==36064&&(ie[0]=36064,fe=!0);else ie[0]!==1029&&(ie[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Ie(L){return d!==L?(r.useProgram(L),d=L,!0):!1}const we={[Yn]:32774,[Ho]:32778,[Wo]:32779};if(n)we[Er]=32775,we[Ar]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Er]=L.MIN_EXT,we[Ar]=L.MAX_EXT)}const xe={[Xo]:0,[qo]:1,[jo]:768,[eo]:770,[Qo]:776,[Ko]:774,[Zo]:772,[Yo]:769,[to]:771,[Jo]:775,[$o]:773};function We(L,W,ie,fe,_e,Be,st,ht){if(L===nn){g===!0&&(ge(3042),g=!1);return}if(g===!1&&(Se(3042),g=!0),L!==Vo){if(L!==S||ht!==E){if((y!==Yn||P!==Yn)&&(r.blendEquation(32774),y=Yn,P=Yn),ht)switch(L){case $n:r.blendFuncSeparate(1,771,1,771);break;case Sr:r.blendFunc(1,1);break;case wr:r.blendFuncSeparate(0,769,0,1);break;case Tr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $n:r.blendFuncSeparate(770,771,1,771);break;case Sr:r.blendFunc(770,1);break;case wr:r.blendFuncSeparate(0,769,0,1);break;case Tr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,M=null,N=null,v=null,S=L,E=ht}return}_e=_e||W,Be=Be||ie,st=st||fe,(W!==y||_e!==P)&&(r.blendEquationSeparate(we[W],we[_e]),y=W,P=_e),(ie!==T||fe!==M||Be!==N||st!==v)&&(r.blendFuncSeparate(xe[ie],xe[fe],xe[Be],xe[st]),T=ie,M=fe,N=Be,v=st),S=L,E=!1}function Ye(L,W){L.side===Zt?ge(2884):Se(2884);let ie=L.side===xt;W&&(ie=!ie),Ve(ie),L.blending===$n&&L.transparent===!1?We(nn):We(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const fe=L.stencilWrite;c.setTest(fe),fe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(32926):ge(32926)}function Ve(L){I!==L&&(L?r.frontFace(2304):r.frontFace(2305),I=L)}function Je(L){L!==ko?(Se(2884),L!==J&&(L===br?r.cullFace(1029):L===Go?r.cullFace(1028):r.cullFace(1032))):ge(2884),J=L}function Ge(L){L!==K&&(Q&&r.lineWidth(L),K=L)}function Le(L,W,ie){L?(Se(32823),(O!==W||D!==ie)&&(r.polygonOffset(W,ie),O=W,D=ie)):ge(32823)}function mt(L){L?Se(3089):ge(3089)}function it(L){L===void 0&&(L=33984+q-1),te!==L&&(r.activeTexture(L),te=L)}function w(L,W,ie){ie===void 0&&(te===null?ie=33984+q-1:ie=te);let fe=se[ie];fe===void 0&&(fe={type:void 0,texture:void 0},se[ie]=fe),(fe.type!==L||fe.texture!==W)&&(te!==ie&&(r.activeTexture(ie),te=ie),r.bindTexture(L,W||G[L]),fe.type=L,fe.texture=W)}function x(){const L=se[te];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(L){$.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function ce(L){oe.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function ve(L,W){let ie=h.get(W);ie===void 0&&(ie=new WeakMap,h.set(W,ie));let fe=ie.get(L);fe===void 0&&(fe=r.getUniformBlockIndex(W,L.name),ie.set(L,fe))}function ye(L,W){const fe=h.get(W).get(L);u.get(W)!==fe&&(r.uniformBlockBinding(W,fe,L.__bindingPointIndex),u.set(W,fe))}function Pe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},te=null,se={},m={},_=new WeakMap,p=[],d=null,g=!1,S=null,y=null,T=null,M=null,P=null,N=null,v=null,E=!1,I=null,J=null,K=null,O=null,D=null,$.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:ge,bindFramebuffer:me,drawBuffers:de,useProgram:Ie,setBlending:We,setMaterial:Ye,setFlipSided:Ve,setCullFace:Je,setLineWidth:Ge,setPolygonOffset:Le,setScissorTest:mt,activeTexture:it,bindTexture:w,unbindTexture:x,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:z,texImage3D:Z,updateUBOMapping:ve,uniformBlockBinding:ye,texStorage2D:F,texStorage3D:R,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:be,compressedTexSubImage3D:A,scissor:re,viewport:ce,reset:Pe}}function Af(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return g?new OffscreenCanvas(w,x):bi("canvas")}function y(w,x,H,ne){let ae=1;if((w.width>ne||w.height>ne)&&(ae=ne/Math.max(w.width,w.height)),ae<1||x===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const he=x?tr:Math.floor,be=he(ae*w.width),A=he(ae*w.height);p===void 0&&(p=S(be,A));const F=H?S(be,A):p;return F.width=be,F.height=A,F.getContext("2d").drawImage(w,0,0,be,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+be+"x"+A+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return ea(w.width)&&ea(w.height)}function M(w){return a?!1:w.wrapS!==Rt||w.wrapT!==Rt||w.minFilter!==ut&&w.minFilter!==pt}function P(w,x){return w.generateMipmaps&&x&&w.minFilter!==ut&&w.minFilter!==pt}function N(w){r.generateMipmap(w)}function v(w,x,H,ne,ae=!1){if(a===!1)return x;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=x;return x===6403&&(H===5126&&(he=33326),H===5131&&(he=33325),H===5121&&(he=33321)),x===33319&&(H===5126&&(he=33328),H===5131&&(he=33327),H===5121&&(he=33323)),x===6408&&(H===5126&&(he=34836),H===5131&&(he=34842),H===5121&&(he=ne===ke&&ae===!1?35907:32856),H===32819&&(he=32854),H===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function E(w,x,H){return P(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==ut&&w.minFilter!==pt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){return w===ut||w===Cr||w===us?9728:9729}function J(w){const x=w.target;x.removeEventListener("dispose",J),O(x),x.isVideoTexture&&_.delete(x)}function K(w){const x=w.target;x.removeEventListener("dispose",K),q(x)}function O(w){const x=n.get(w);if(x.__webglInit===void 0)return;const H=w.source,ne=d.get(H);if(ne){const ae=ne[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&D(w),Object.keys(ne).length===0&&d.delete(H)}n.remove(w)}function D(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const H=w.source,ne=d.get(H);delete ne[x.__cacheKey],o.memory.textures--}function q(w){const x=w.texture,H=n.get(w),ne=n.get(x);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)r.deleteFramebuffer(H.__webglFramebuffer[ae]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[ae]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ae=0;ae<H.__webglColorRenderbuffer.length;ae++)H.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[ae]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ae=0,he=x.length;ae<he;ae++){const be=n.get(x[ae]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(x[ae])}n.remove(x),n.remove(w)}let Q=0;function ee(){Q=0}function j(){const w=Q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Q+=1,w}function te(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function se(w,x){const H=n.get(w);if(w.isVideoTexture&&mt(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,w,x);return}}t.bindTexture(3553,H.__webglTexture,33984+x)}function pe(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ge(H,w,x);return}t.bindTexture(35866,H.__webglTexture,33984+x)}function k(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ge(H,w,x);return}t.bindTexture(32879,H.__webglTexture,33984+x)}function $(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){me(H,w,x);return}t.bindTexture(34067,H.__webglTexture,33984+x)}const oe={[Ks]:10497,[Rt]:33071,[Js]:33648},le={[ut]:9728,[Cr]:9984,[us]:9986,[pt]:9729,[pl]:9985,[vi]:9987};function G(w,x,H){if(H?(r.texParameteri(w,10242,oe[x.wrapS]),r.texParameteri(w,10243,oe[x.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,oe[x.wrapR]),r.texParameteri(w,10240,le[x.magFilter]),r.texParameteri(w,10241,le[x.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(x.wrapS!==Rt||x.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,I(x.magFilter)),r.texParameteri(w,10241,I(x.minFilter)),x.minFilter!==ut&&x.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===ut||x.minFilter!==us&&x.minFilter!==vi||x.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Mi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Se(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",J));const ne=x.source;let ae=d.get(ne);ae===void 0&&(ae={},d.set(ne,ae));const he=te(x);if(he!==w.__cacheKey){ae[he]===void 0&&(ae[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[he].usedTimes++;const be=ae[w.__cacheKey];be!==void 0&&(ae[w.__cacheKey].usedTimes--,be.usedTimes===0&&D(x)),w.__cacheKey=he,w.__webglTexture=ae[he].texture}return H}function ge(w,x,H){let ne=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=35866),x.isData3DTexture&&(ne=32879);const ae=Se(w,x),he=x.source;t.bindTexture(ne,w.__webglTexture,33984+H);const be=n.get(he);if(he.version!==be.__version||ae===!0){t.activeTexture(33984+H),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const A=M(x)&&T(x.image)===!1;let F=y(x.image,A,!1,u);F=it(x,F);const R=T(F)||a,z=s.convert(x.format,x.encoding);let Z=s.convert(x.type),re=v(x.internalFormat,z,Z,x.encoding,x.isVideoTexture);G(ne,x,R);let ce;const ve=x.mipmaps,ye=a&&x.isVideoTexture!==!0,Pe=be.__version===void 0||ae===!0,L=E(x,F,R);if(x.isDepthTexture)re=6402,a?x.type===_n?re=36012:x.type===gn?re=33190:x.type===Kn?re=35056:re=33189:x.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Mn&&re===6402&&x.type!==so&&x.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=gn,Z=s.convert(x.type)),x.format===ei&&re===6402&&(re=34041,x.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Kn,Z=s.convert(x.type))),Pe&&(ye?t.texStorage2D(3553,1,re,F.width,F.height):t.texImage2D(3553,0,re,F.width,F.height,0,z,Z,null));else if(x.isDataTexture)if(ve.length>0&&R){ye&&Pe&&t.texStorage2D(3553,L,re,ve[0].width,ve[0].height);for(let W=0,ie=ve.length;W<ie;W++)ce=ve[W],ye?t.texSubImage2D(3553,W,0,0,ce.width,ce.height,z,Z,ce.data):t.texImage2D(3553,W,re,ce.width,ce.height,0,z,Z,ce.data);x.generateMipmaps=!1}else ye?(Pe&&t.texStorage2D(3553,L,re,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,z,Z,F.data)):t.texImage2D(3553,0,re,F.width,F.height,0,z,Z,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ye&&Pe&&t.texStorage3D(35866,L,re,ve[0].width,ve[0].height,F.depth);for(let W=0,ie=ve.length;W<ie;W++)ce=ve[W],x.format!==Ot?z!==null?ye?t.compressedTexSubImage3D(35866,W,0,0,0,ce.width,ce.height,F.depth,z,ce.data,0,0):t.compressedTexImage3D(35866,W,re,ce.width,ce.height,F.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage3D(35866,W,0,0,0,ce.width,ce.height,F.depth,z,Z,ce.data):t.texImage3D(35866,W,re,ce.width,ce.height,F.depth,0,z,Z,ce.data)}else{ye&&Pe&&t.texStorage2D(3553,L,re,ve[0].width,ve[0].height);for(let W=0,ie=ve.length;W<ie;W++)ce=ve[W],x.format!==Ot?z!==null?ye?t.compressedTexSubImage2D(3553,W,0,0,ce.width,ce.height,z,ce.data):t.compressedTexImage2D(3553,W,re,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(3553,W,0,0,ce.width,ce.height,z,Z,ce.data):t.texImage2D(3553,W,re,ce.width,ce.height,0,z,Z,ce.data)}else if(x.isDataArrayTexture)ye?(Pe&&t.texStorage3D(35866,L,re,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,z,Z,F.data)):t.texImage3D(35866,0,re,F.width,F.height,F.depth,0,z,Z,F.data);else if(x.isData3DTexture)ye?(Pe&&t.texStorage3D(32879,L,re,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,z,Z,F.data)):t.texImage3D(32879,0,re,F.width,F.height,F.depth,0,z,Z,F.data);else if(x.isFramebufferTexture){if(Pe)if(ye)t.texStorage2D(3553,L,re,F.width,F.height);else{let W=F.width,ie=F.height;for(let fe=0;fe<L;fe++)t.texImage2D(3553,fe,re,W,ie,0,z,Z,null),W>>=1,ie>>=1}}else if(ve.length>0&&R){ye&&Pe&&t.texStorage2D(3553,L,re,ve[0].width,ve[0].height);for(let W=0,ie=ve.length;W<ie;W++)ce=ve[W],ye?t.texSubImage2D(3553,W,0,0,z,Z,ce):t.texImage2D(3553,W,re,z,Z,ce);x.generateMipmaps=!1}else ye?(Pe&&t.texStorage2D(3553,L,re,F.width,F.height),t.texSubImage2D(3553,0,0,0,z,Z,F)):t.texImage2D(3553,0,re,z,Z,F);P(x,R)&&N(ne),be.__version=he.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function me(w,x,H){if(x.image.length!==6)return;const ne=Se(w,x),ae=x.source;t.bindTexture(34067,w.__webglTexture,33984+H);const he=n.get(ae);if(ae.version!==he.__version||ne===!0){t.activeTexture(33984+H),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!be&&!A?F[W]=y(x.image[W],!1,!0,c):F[W]=A?x.image[W].image:x.image[W],F[W]=it(x,F[W]);const R=F[0],z=T(R)||a,Z=s.convert(x.format,x.encoding),re=s.convert(x.type),ce=v(x.internalFormat,Z,re,x.encoding),ve=a&&x.isVideoTexture!==!0,ye=he.__version===void 0||ne===!0;let Pe=E(x,R,z);G(34067,x,z);let L;if(be){ve&&ye&&t.texStorage2D(34067,Pe,ce,R.width,R.height);for(let W=0;W<6;W++){L=F[W].mipmaps;for(let ie=0;ie<L.length;ie++){const fe=L[ie];x.format!==Ot?Z!==null?ve?t.compressedTexSubImage2D(34069+W,ie,0,0,fe.width,fe.height,Z,fe.data):t.compressedTexImage2D(34069+W,ie,ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(34069+W,ie,0,0,fe.width,fe.height,Z,re,fe.data):t.texImage2D(34069+W,ie,ce,fe.width,fe.height,0,Z,re,fe.data)}}}else{L=x.mipmaps,ve&&ye&&(L.length>0&&Pe++,t.texStorage2D(34067,Pe,ce,F[0].width,F[0].height));for(let W=0;W<6;W++)if(A){ve?t.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,Z,re,F[W].data):t.texImage2D(34069+W,0,ce,F[W].width,F[W].height,0,Z,re,F[W].data);for(let ie=0;ie<L.length;ie++){const _e=L[ie].image[W].image;ve?t.texSubImage2D(34069+W,ie+1,0,0,_e.width,_e.height,Z,re,_e.data):t.texImage2D(34069+W,ie+1,ce,_e.width,_e.height,0,Z,re,_e.data)}}else{ve?t.texSubImage2D(34069+W,0,0,0,Z,re,F[W]):t.texImage2D(34069+W,0,ce,Z,re,F[W]);for(let ie=0;ie<L.length;ie++){const fe=L[ie];ve?t.texSubImage2D(34069+W,ie+1,0,0,Z,re,fe.image[W]):t.texImage2D(34069+W,ie+1,ce,Z,re,fe.image[W])}}}P(x,z)&&N(34067),he.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function de(w,x,H,ne,ae){const he=s.convert(H.format,H.encoding),be=s.convert(H.type),A=v(H.internalFormat,he,be,H.encoding);n.get(x).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,A,x.width,x.height,x.depth,0,he,be,null):t.texImage2D(ae,0,A,x.width,x.height,0,he,be,null)),t.bindFramebuffer(36160,w),Le(x)?f.framebufferTexture2DMultisampleEXT(36160,ne,ae,n.get(H).__webglTexture,0,Ge(x)):(ae===3553||ae>=34069&&ae<=34074)&&r.framebufferTexture2D(36160,ne,ae,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(w,x,H){if(r.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let ne=33189;if(H||Le(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===_n?ne=36012:ae.type===gn&&(ne=33190));const he=Ge(x);Le(x)?f.renderbufferStorageMultisampleEXT(36161,he,ne,x.width,x.height):r.renderbufferStorageMultisample(36161,he,ne,x.width,x.height)}else r.renderbufferStorage(36161,ne,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const ne=Ge(x);H&&Le(x)===!1?r.renderbufferStorageMultisample(36161,ne,35056,x.width,x.height):Le(x)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<ne.length;ae++){const he=ne[ae],be=s.convert(he.format,he.encoding),A=s.convert(he.type),F=v(he.internalFormat,be,A,he.encoding),R=Ge(x);H&&Le(x)===!1?r.renderbufferStorageMultisample(36161,R,F,x.width,x.height):Le(x)?f.renderbufferStorageMultisampleEXT(36161,R,F,x.width,x.height):r.renderbufferStorage(36161,F,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function we(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),se(x.depthTexture,0);const ne=n.get(x.depthTexture).__webglTexture,ae=Ge(x);if(x.depthTexture.format===Mn)Le(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ae):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(x.depthTexture.format===ei)Le(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ae):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function xe(w){const x=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");we(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=r.createRenderbuffer(),Ie(x.__webglDepthbuffer[ne],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Ie(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function We(w,x,H){const ne=n.get(w);x!==void 0&&de(ne.__webglFramebuffer,w,w.texture,36064,3553),H!==void 0&&xe(w)}function Ye(w){const x=w.texture,H=n.get(w),ne=n.get(x);w.addEventListener("dispose",K),w.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=x.version,o.memory.textures++);const ae=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,be=T(w)||a;if(ae){H.__webglFramebuffer=[];for(let A=0;A<6;A++)H.__webglFramebuffer[A]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const A=w.texture;for(let F=0,R=A.length;F<R;F++){const z=n.get(A[F]);z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Le(w)===!1){const A=he?x:[x];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const R=A[F];H.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[F]);const z=s.convert(R.format,R.encoding),Z=s.convert(R.type),re=v(R.internalFormat,z,Z,R.encoding,w.isXRRenderTarget===!0),ce=Ge(w);r.renderbufferStorageMultisample(36161,ce,re,w.width,w.height),r.framebufferRenderbuffer(36160,36064+F,36161,H.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,ne.__webglTexture),G(34067,x,be);for(let A=0;A<6;A++)de(H.__webglFramebuffer[A],w,x,36064,34069+A);P(x,be)&&N(34067),t.unbindTexture()}else if(he){const A=w.texture;for(let F=0,R=A.length;F<R;F++){const z=A[F],Z=n.get(z);t.bindTexture(3553,Z.__webglTexture),G(3553,z,be),de(H.__webglFramebuffer,w,z,36064+F,3553),P(z,be)&&N(3553)}t.unbindTexture()}else{let A=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?A=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),G(A,x,be),de(H.__webglFramebuffer,w,x,36064,A),P(x,be)&&N(A),t.unbindTexture()}w.depthBuffer&&xe(w)}function Ve(w){const x=T(w)||a,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,ae=H.length;ne<ae;ne++){const he=H[ne];if(P(he,x)){const be=w.isWebGLCubeRenderTarget?34067:3553,A=n.get(he).__webglTexture;t.bindTexture(be,A),N(be),t.unbindTexture()}}}function Je(w){if(a&&w.samples>0&&Le(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,ne=w.height;let ae=16384;const he=[],be=w.stencilBuffer?33306:36096,A=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let R=0;R<x.length;R++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+R,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+R,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let R=0;R<x.length;R++){he.push(36064+R),w.depthBuffer&&he.push(be);const z=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(z===!1&&(w.depthBuffer&&(ae|=256),w.stencilBuffer&&(ae|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[R]),z===!0&&(r.invalidateFramebuffer(36008,[be]),r.invalidateFramebuffer(36009,[be])),F){const Z=n.get(x[R]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Z,0)}r.blitFramebuffer(0,0,H,ne,0,0,H,ne,ae,9728),m&&r.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let R=0;R<x.length;R++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+R,36161,A.__webglColorRenderbuffer[R]);const z=n.get(x[R]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+R,3553,z,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ge(w){return Math.min(h,w.samples)}function Le(w){const x=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(w){const x=o.render.frame;_.get(w)!==x&&(_.set(w,x),w.update())}function it(w,x){const H=w.encoding,ne=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===er||H!==Sn&&(H===ke?a===!1?e.has("EXT_sRGB")===!0&&ne===Ot?(w.format=er,w.minFilter=pt,w.generateMipmaps=!1):x=lo.sRGBToLinear(x):(ne!==Ot||ae!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),x}this.allocateTextureUnit=j,this.resetTextureUnits=ee,this.setTexture2D=se,this.setTexture2DArray=pe,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=We,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Le}function Cf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===bn)return 5121;if(s===xl)return 32819;if(s===vl)return 32820;if(s===ml)return 5120;if(s===gl)return 5122;if(s===so)return 5123;if(s===_l)return 5124;if(s===gn)return 5125;if(s===_n)return 5126;if(s===Mi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ml)return 6406;if(s===Ot)return 6408;if(s===yl)return 6409;if(s===bl)return 6410;if(s===Mn)return 6402;if(s===ei)return 34041;if(s===er)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sl)return 6403;if(s===wl)return 36244;if(s===Tl)return 33319;if(s===El)return 33320;if(s===Al)return 36249;if(s===hs||s===ds||s===fs||s===ps)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ds)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lr||s===Pr||s===Rr||s===Dr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Lr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ir||s===Fr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ir)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Fr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nr||s===Or||s===Ur||s===zr||s===Br||s===kr||s===Gr||s===Vr||s===Hr||s===Wr||s===Xr||s===qr||s===jr||s===Yr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Nr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Or)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ur)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Br)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yr)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ms)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ms)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ll||s===Zr||s===$r||s===Kr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ms)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$r)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Kn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Lf extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(c,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rf extends ct{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Mn,u!==Mn&&u!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mn&&(n=gn),n===void 0&&u===ei&&(n=Kn),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class Df extends Ln{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const p=t.getContextAttributes();let d=null,g=null;const S=[],y=[],T=new Set,M=new Map,P=new Pt;P.layers.enable(1),P.viewport=new lt;const N=new Pt;N.layers.enable(2),N.viewport=new lt;const v=[P,N],E=new Lf;E.layers.enable(1),E.layers.enable(2);let I=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=S[k];return $===void 0&&($=new Vs,S[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=S[k];return $===void 0&&($=new Vs,S[k]=$),$.getGripSpace()},this.getHand=function(k){let $=S[k];return $===void 0&&($=new Vs,S[k]=$),$.getHandSpace()};function K(k){const $=y.indexOf(k.inputSource);if($===-1)return;const oe=S[$];oe!==void 0&&oe.dispatchEvent({type:k.type,data:k.inputSource})}function O(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",D);for(let k=0;k<S.length;k++){const $=y[k];$!==null&&(y[k]=null,S[k].disconnect($))}I=null,J=null,e.setRenderTarget(d),m=null,f=null,h=null,i=null,g=null,pe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",O),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),g=new wn(m.framebufferWidth,m.framebufferHeight,{format:Ot,type:bn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,oe=null,le=null;p.depth&&(le=p.stencil?35056:33190,$=p.stencil?ei:Mn,oe=p.stencil?Kn:gn);const G={colorFormat:32856,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(G),i.updateRenderState({layers:[f]}),g=new wn(f.textureWidth,f.textureHeight,{format:Ot,type:bn,depthTexture:new Rf(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Se=e.properties.get(g);Se.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(k){for(let $=0;$<k.removed.length;$++){const oe=k.removed[$],le=y.indexOf(oe);le>=0&&(y[le]=null,S[le].disconnect(oe))}for(let $=0;$<k.added.length;$++){const oe=k.added[$];let le=y.indexOf(oe);if(le===-1){for(let Se=0;Se<S.length;Se++)if(Se>=y.length){y.push(oe),le=Se;break}else if(y[Se]===null){y[Se]=oe,le=Se;break}if(le===-1)break}const G=S[le];G&&G.connect(oe)}}const q=new C,Q=new C;function ee(k,$,oe){q.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(oe.matrixWorld);const le=q.distanceTo(Q),G=$.projectionMatrix.elements,Se=oe.projectionMatrix.elements,ge=G[14]/(G[10]-1),me=G[14]/(G[10]+1),de=(G[9]+1)/G[5],Ie=(G[9]-1)/G[5],we=(G[8]-1)/G[0],xe=(Se[8]+1)/Se[0],We=ge*we,Ye=ge*xe,Ve=le/(-we+xe),Je=Ve*-we;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Je),k.translateZ(Ve),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ge=ge+Ve,Le=me+Ve,mt=We-Je,it=Ye+(le-Je),w=de*me/Le*Ge,x=Ie*me/Le*Ge;k.projectionMatrix.makePerspective(mt,it,w,x,Ge,Le)}function j(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;E.near=N.near=P.near=k.near,E.far=N.far=P.far=k.far,(I!==E.near||J!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,J=E.far);const $=k.parent,oe=E.cameras;j(E,$);for(let G=0;G<oe.length;G++)j(oe[G],$);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),k.matrix.copy(E.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const le=k.children;for(let G=0,Se=le.length;G<Se;G++)le[G].updateMatrixWorld(!0);oe.length===2?ee(E,P,N):E.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return T};let te=null;function se(k,$){if(u=$.getViewerPose(c||o),_=$,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let le=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,le=!0);for(let G=0;G<oe.length;G++){const Se=oe[G];let ge=null;if(m!==null)ge=m.getViewport(Se);else{const de=h.getViewSubImage(f,Se);ge=de.viewport,G===0&&(e.setRenderTargetTextures(g,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(g))}let me=v[G];me===void 0&&(me=new Pt,me.layers.enable(G),me.viewport=new lt,v[G]=me),me.matrix.fromArray(Se.transform.matrix),me.projectionMatrix.fromArray(Se.projectionMatrix),me.viewport.set(ge.x,ge.y,ge.width,ge.height),G===0&&E.matrix.copy(me.matrix),le===!0&&E.cameras.push(me)}}for(let oe=0;oe<S.length;oe++){const le=y[oe],G=S[oe];le!==null&&G!==void 0&&G.update(le,$,c||o)}if(te&&te(k,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let oe=null;for(const le of T)$.detectedPlanes.has(le)||(oe===null&&(oe=[]),oe.push(le));if(oe!==null)for(const le of oe)T.delete(le),M.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of $.detectedPlanes)if(!T.has(le))T.add(le),M.set(le,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const G=M.get(le);le.lastChangedTime>G&&(M.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}_=null}const pe=new xo;pe.setAnimationLoop(se),this.setAnimationLoop=function(k){te=k},this.dispose=function(){}}}function If(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,mo(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,y)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===xt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===xt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const T=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ff(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function c(S,y){let T=i[S.id];T===void 0&&(_(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",d));const M=y.program;n.updateUBOMapping(S,M);const P=e.render.frame;s[S.id]!==P&&(f(S),s[S.id]=P)}function u(S){const y=h();S.__bindingPointIndex=y;const T=r.createBuffer(),M=S.__size,P=S.usage;return r.bindBuffer(35345,T),r.bufferData(35345,M,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,T),T}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],T=S.uniforms,M=S.__cache;r.bindBuffer(35345,y);for(let P=0,N=T.length;P<N;P++){const v=T[P];if(m(v,P,M)===!0){const E=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let J=0;for(let K=0;K<I.length;K++){const O=I[K],D=p(O);typeof O=="number"?(v.__data[0]=O,r.bufferSubData(35345,E+J,v.__data)):O.isMatrix3?(v.__data[0]=O.elements[0],v.__data[1]=O.elements[1],v.__data[2]=O.elements[2],v.__data[3]=O.elements[0],v.__data[4]=O.elements[3],v.__data[5]=O.elements[4],v.__data[6]=O.elements[5],v.__data[7]=O.elements[0],v.__data[8]=O.elements[6],v.__data[9]=O.elements[7],v.__data[10]=O.elements[8],v.__data[11]=O.elements[0]):(O.toArray(v.__data,J),J+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,v.__data)}}r.bindBuffer(35345,null)}function m(S,y,T){const M=S.value;if(T[y]===void 0){if(typeof M=="number")T[y]=M;else{const P=Array.isArray(M)?M:[M],N=[];for(let v=0;v<P.length;v++)N.push(P[v].clone());T[y]=N}return!0}else if(typeof M=="number"){if(T[y]!==M)return T[y]=M,!0}else{const P=Array.isArray(T[y])?T[y]:[T[y]],N=Array.isArray(M)?M:[M];for(let v=0;v<P.length;v++){const E=P[v];if(E.equals(N[v])===!1)return E.copy(N[v]),!0}}return!1}function _(S){const y=S.uniforms;let T=0;const M=16;let P=0;for(let N=0,v=y.length;N<v;N++){const E=y[N],I={boundary:0,storage:0},J=Array.isArray(E.value)?E.value:[E.value];for(let K=0,O=J.length;K<O;K++){const D=J[K],q=p(D);I.boundary+=q.boundary,I.storage+=q.storage}if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,N>0){P=T%M;const K=M-P;P!==0&&K-I.boundary<0&&(T+=M-P,E.__offset=T)}T+=I.storage}return P=T%M,P>0&&(T+=M-P),S.__size=T,S.__cache={},this}function p(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function d(S){const y=S.target;y.removeEventListener("dispose",d);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}function Nf(){const r=bi("canvas");return r.style.display="block",r}function wo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Nf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Sn,this.physicallyCorrectLights=!1,this.toneMapping=kt,this.toneMappingExposure=1;const p=this;let d=!1,g=0,S=0,y=null,T=-1,M=null;const P=new lt,N=new lt;let v=null,E=e.width,I=e.height,J=1,K=null,O=null;const D=new lt(0,0,E,I),q=new lt(0,0,E,I);let Q=!1;const ee=new or;let j=!1,te=!1,se=null;const pe=new et,k=new Ee,$=new C,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return y===null?J:1}let G=t;function Se(b,B){for(let X=0;X<b.length;X++){const U=b[X],Y=e.getContext(U,B);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sr}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",ve,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),G=Se(B,b),G===null)throw Se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ge,me,de,Ie,we,xe,We,Ye,Ve,Je,Ge,Le,mt,it,w,x,H,ne,ae,he,be,A,F,R;function z(){ge=new Xh(G),me=new Bh(G,ge,r),ge.init(me),A=new Cf(G,ge,me),de=new Ef(G,ge,me),Ie=new Yh,we=new df,xe=new Af(G,ge,de,we,me,A,Ie),We=new Gh(p),Ye=new Wh(p),Ve=new ic(G,me),F=new Uh(G,ge,Ve,me),Je=new qh(G,Ve,Ie,F),Ge=new Jh(G,Je,Ve,Ie),ae=new Kh(G,me,xe),x=new kh(we),Le=new hf(p,We,Ye,ge,me,F,x),mt=new If(p,we),it=new pf,w=new Mf(ge,me),ne=new Oh(p,We,Ye,de,Ge,u,o),H=new Tf(p,Ge,me),R=new Ff(G,Ie,me,de),he=new zh(G,ge,Ie,me),be=new jh(G,ge,Ie,me),Ie.programs=Le.programs,p.capabilities=me,p.extensions=ge,p.properties=we,p.renderLists=it,p.shadowMap=H,p.state=de,p.info=Ie}z();const Z=new Df(p,G);this.xr=Z,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(E,I,!1))},this.getSize=function(b){return b.set(E,I)},this.setSize=function(b,B,X){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=b,I=B,e.width=Math.floor(b*J),e.height=Math.floor(B*J),X!==!1&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(E*J,I*J).floor()},this.setDrawingBufferSize=function(b,B,X){E=b,I=B,J=X,e.width=Math.floor(b*X),e.height=Math.floor(B*X),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,B,X,U){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,B,X,U),de.viewport(P.copy(D).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(q)},this.setScissor=function(b,B,X,U){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,B,X,U),de.scissor(N.copy(q).multiplyScalar(J).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){de.setScissorTest(Q=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,B=!0,X=!0){let U=0;b&&(U|=16384),B&&(U|=256),X&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",ve,!1),it.dispose(),w.dispose(),we.dispose(),We.dispose(),Ye.dispose(),Ge.dispose(),F.dispose(),R.dispose(),Le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",fe),Z.removeEventListener("sessionend",_e),se&&(se.dispose(),se=null),Be.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=Ie.autoReset,B=H.enabled,X=H.autoUpdate,U=H.needsUpdate,Y=H.type;z(),Ie.autoReset=b,H.enabled=B,H.autoUpdate=X,H.needsUpdate=U,H.type=Y}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ye(b){const B=b.target;B.removeEventListener("dispose",ye),Pe(B)}function Pe(b){L(b),we.remove(b)}function L(b){const B=we.get(b).programs;B!==void 0&&(B.forEach(function(X){Le.releaseProgram(X)}),b.isShaderMaterial&&Le.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,X,U,Y,Me){B===null&&(B=oe);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Re=Fo(b,B,X,U,Y);de.setMaterial(U,Te);let De=X.index,ze=1;U.wireframe===!0&&(De=Je.getWireframeAttribute(X),ze=2);const Fe=X.drawRange,Ne=X.attributes.position;let Ze=Fe.start*ze,Mt=(Fe.start+Fe.count)*ze;Me!==null&&(Ze=Math.max(Ze,Me.start*ze),Mt=Math.min(Mt,(Me.start+Me.count)*ze)),De!==null?(Ze=Math.max(Ze,0),Mt=Math.min(Mt,De.count)):Ne!=null&&(Ze=Math.max(Ze,0),Mt=Math.min(Mt,Ne.count));const Vt=Mt-Ze;if(Vt<0||Vt===1/0)return;F.setup(Y,U,Re,X,De);let an,$e=he;if(De!==null&&(an=Ve.get(De),$e=be,$e.setIndex(an)),Y.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*le()),$e.setMode(1)):$e.setMode(4);else if(Y.isLine){let Oe=U.linewidth;Oe===void 0&&(Oe=1),de.setLineWidth(Oe*le()),Y.isLineSegments?$e.setMode(1):Y.isLineLoop?$e.setMode(2):$e.setMode(3)}else Y.isPoints?$e.setMode(0):Y.isSprite&&$e.setMode(4);if(Y.isInstancedMesh)$e.renderInstances(Ze,Vt,Y.count);else if(X.isInstancedBufferGeometry){const Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,as=Math.min(X.instanceCount,Oe);$e.renderInstances(Ze,Vt,as)}else $e.render(Ze,Vt)},this.compile=function(b,B){function X(U,Y,Me){U.transparent===!0&&U.side===Zt&&U.forceSinglePass===!1?(U.side=xt,U.needsUpdate=!0,Ct(U,Y,Me),U.side=$t,U.needsUpdate=!0,Ct(U,Y,Me),U.side=Zt):Ct(U,Y,Me)}f=w.get(b),f.init(),_.push(f),b.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.physicallyCorrectLights),b.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let Me=0;Me<Y.length;Me++){const Te=Y[Me];X(Te,b,U)}else X(Y,b,U)}),_.pop(),f=null};let W=null;function ie(b){W&&W(b)}function fe(){Be.stop()}function _e(){Be.start()}const Be=new xo;Be.setAnimationLoop(ie),typeof self!="undefined"&&Be.setContext(self),this.setAnimationLoop=function(b){W=b,Z.setAnimationLoop(b),b===null?Be.stop():Be.start()},Z.addEventListener("sessionstart",fe),Z.addEventListener("sessionend",_e),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,B,y),f=w.get(b,_.length),f.init(),_.push(f),pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(pe),te=this.localClippingEnabled,j=x.init(this.clippingPlanes,te),h=it.get(b,m.length),h.init(),m.push(h),st(b,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(K,O),j===!0&&x.beginShadows();const X=f.state.shadowsArray;if(H.render(X,b,B),j===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,b),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let Y=0,Me=U.length;Y<Me;Y++){const Te=U[Y];ht(h,b,Te,Te.viewport)}}else ht(h,b,B);y!==null&&(xe.updateMultisampleRenderTarget(y),xe.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(p,b,B),F.resetDefaultState(),T=-1,M=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function st(b,B,X,U){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){U&&$.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Te=Ge.update(b),Re=b.material;Re.visible&&h.push(b,Te,Re,X,$.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ie.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ie.render.frame),!b.frustumCulled||ee.intersectsObject(b))){U&&$.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Te=Ge.update(b),Re=b.material;if(Array.isArray(Re)){const De=Te.groups;for(let ze=0,Fe=De.length;ze<Fe;ze++){const Ne=De[ze],Ze=Re[Ne.materialIndex];Ze&&Ze.visible&&h.push(b,Te,Ze,X,$.z,Ne)}}else Re.visible&&h.push(b,Te,Re,X,$.z,null)}}const Me=b.children;for(let Te=0,Re=Me.length;Te<Re;Te++)st(Me[Te],B,X,U)}function ht(b,B,X,U){const Y=b.opaque,Me=b.transmissive,Te=b.transparent;f.setupLightsView(X),j===!0&&x.setGlobalState(p.clippingPlanes,X),Me.length>0&&rn(Y,B,X),U&&de.viewport(P.copy(U)),Y.length>0&&He(Y,B,X),Me.length>0&&He(Me,B,X),Te.length>0&&He(Te,B,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function rn(b,B,X){const U=me.isWebGL2;se===null&&(se=new wn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Mi:bn,minFilter:vi,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(k),U?se.setSize(k.x,k.y):se.setSize(tr(k.x),tr(k.y));const Y=p.getRenderTarget();p.setRenderTarget(se),p.clear();const Me=p.toneMapping;p.toneMapping=kt,He(b,B,X),p.toneMapping=Me,xe.updateMultisampleRenderTarget(se),xe.updateRenderTargetMipmap(se),p.setRenderTarget(Y)}function He(b,B,X){const U=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Me=b.length;Y<Me;Y++){const Te=b[Y],Re=Te.object,De=Te.geometry,ze=U===null?Te.material:U,Fe=Te.group;Re.layers.test(X.layers)&&Gt(Re,B,X,De,ze,Fe)}}function Gt(b,B,X,U,Y,Me){b.onBeforeRender(p,B,X,U,Y,Me),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(p,B,X,U,b,Me),Y.transparent===!0&&Y.side===Zt&&Y.forceSinglePass===!1?(Y.side=xt,Y.needsUpdate=!0,p.renderBufferDirect(X,B,U,Y,b,Me),Y.side=$t,Y.needsUpdate=!0,p.renderBufferDirect(X,B,U,Y,b,Me),Y.side=Zt):p.renderBufferDirect(X,B,U,Y,b,Me),b.onAfterRender(p,B,X,U,Y,Me)}function Ct(b,B,X){B.isScene!==!0&&(B=oe);const U=we.get(b),Y=f.state.lights,Me=f.state.shadowsArray,Te=Y.state.version,Re=Le.getParameters(b,Y.state,Me,B,X),De=Le.getProgramCacheKey(Re);let ze=U.programs;U.environment=b.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(b.isMeshStandardMaterial?Ye:We).get(b.envMap||U.environment),ze===void 0&&(b.addEventListener("dispose",ye),ze=new Map,U.programs=ze);let Fe=ze.get(De);if(Fe!==void 0){if(U.currentProgram===Fe&&U.lightsStateVersion===Te)return vr(b,Re),Fe}else Re.uniforms=Le.getUniforms(b),b.onBuild(X,Re,p),b.onBeforeCompile(Re,p),Fe=Le.acquireProgram(Re,De),ze.set(De,Fe),U.uniforms=Re.uniforms;const Ne=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=x.uniform),vr(b,Re),U.needsLights=Oo(b),U.lightsStateVersion=Te,U.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.directionalShadowMap.value=Y.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotShadowMap.value=Y.state.spotShadowMap,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMap.value=Y.state.pointShadowMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Ze=Fe.getUniforms(),Mt=Qi.seqWithValue(Ze.seq,Ne);return U.currentProgram=Fe,U.uniformsList=Mt,Fe}function vr(b,B){const X=we.get(b);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Fo(b,B,X,U,Y){B.isScene!==!0&&(B=oe),xe.resetTextureUnits();const Me=B.fog,Te=U.isMeshStandardMaterial?B.environment:null,Re=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Sn,De=(U.isMeshStandardMaterial?Ye:We).get(U.envMap||Te),ze=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!U.normalMap&&!!X.attributes.tangent,Ne=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color,Vt=U.toneMapped?p.toneMapping:kt,an=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=an!==void 0?an.length:0,Oe=we.get(U),as=f.state.lights;if(j===!0&&(te===!0||b!==M)){const yt=b===M&&U.id===T;x.setState(U,b,yt)}let rt=!1;U.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==as.state.version||Oe.outputEncoding!==Re||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==De||U.fog===!0&&Oe.fog!==Me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==x.numPlanes||Oe.numIntersection!==x.numIntersection)||Oe.vertexAlphas!==ze||Oe.vertexTangents!==Fe||Oe.morphTargets!==Ne||Oe.morphNormals!==Ze||Oe.morphColors!==Mt||Oe.toneMapping!==Vt||me.isWebGL2===!0&&Oe.morphTargetsCount!==$e)&&(rt=!0):(rt=!0,Oe.__version=U.version);let on=Oe.currentProgram;rt===!0&&(on=Ct(U,B,Y));let Mr=!1,ai=!1,os=!1;const gt=on.getUniforms(),ln=Oe.uniforms;if(de.useProgram(on.program)&&(Mr=!0,ai=!0,os=!0),U.id!==T&&(T=U.id,ai=!0),Mr||M!==b){if(gt.setValue(G,"projectionMatrix",b.projectionMatrix),me.logarithmicDepthBuffer&&gt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),M!==b&&(M=b,ai=!0,os=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const yt=gt.map.cameraPosition;yt!==void 0&&yt.setValue(G,$.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&gt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&gt.setValue(G,"viewMatrix",b.matrixWorldInverse)}if(Y.isSkinnedMesh){gt.setOptional(G,Y,"bindMatrix"),gt.setOptional(G,Y,"bindMatrixInverse");const yt=Y.skeleton;yt&&(me.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),gt.setValue(G,"boneTexture",yt.boneTexture,xe),gt.setValue(G,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ls=X.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0&&me.isWebGL2===!0)&&ae.update(Y,X,U,on),(ai||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,gt.setValue(G,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ln.envMap.value=De,ln.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ai&&(gt.setValue(G,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&No(ln,os),Me&&U.fog===!0&&mt.refreshFogUniforms(ln,Me),mt.refreshMaterialUniforms(ln,U,J,I,se),Qi.upload(G,Oe.uniformsList,ln,xe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Qi.upload(G,Oe.uniformsList,ln,xe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&gt.setValue(G,"center",Y.center),gt.setValue(G,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(G,"normalMatrix",Y.normalMatrix),gt.setValue(G,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const yt=U.uniformsGroups;for(let cs=0,Uo=yt.length;cs<Uo;cs++)if(me.isWebGL2){const yr=yt[cs];R.update(yr,on),R.bind(yr,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function No(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Oo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,B,X){we.get(b.texture).__webglTexture=B,we.get(b.depthTexture).__webglTexture=X;const U=we.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const X=we.get(b);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,X=0){y=b,g=B,S=X;let U=!0,Y=null,Me=!1,Te=!1;if(b){const De=we.get(b);De.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),U=!1):De.__webglFramebuffer===void 0?xe.setupRenderTarget(b):De.__hasExternalTextures&&xe.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Te=!0);const Fe=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Fe[B],Me=!0):me.isWebGL2&&b.samples>0&&xe.useMultisampledRTT(b)===!1?Y=we.get(b).__webglMultisampledFramebuffer:Y=Fe,P.copy(b.viewport),N.copy(b.scissor),v=b.scissorTest}else P.copy(D).multiplyScalar(J).floor(),N.copy(q).multiplyScalar(J).floor(),v=Q;if(de.bindFramebuffer(36160,Y)&&me.drawBuffers&&U&&de.drawBuffers(b,Y),de.viewport(P),de.scissor(N),de.setScissorTest(v),Me){const De=we.get(b.texture);G.framebufferTexture2D(36160,36064,34069+B,De.__webglTexture,X)}else if(Te){const De=we.get(b.texture),ze=B||0;G.framebufferTextureLayer(36160,36064,De.__webglTexture,X||0,ze)}T=-1},this.readRenderTargetPixels=function(b,B,X,U,Y,Me,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){de.bindFramebuffer(36160,Re);try{const De=b.texture,ze=De.format,Fe=De.type;if(ze!==Ot&&A.convert(ze)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Fe===Mi&&(ge.has("EXT_color_buffer_half_float")||me.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Fe!==bn&&A.convert(Fe)!==G.getParameter(35738)&&!(Fe===_n&&(me.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-U&&X>=0&&X<=b.height-Y&&G.readPixels(B,X,U,Y,A.convert(ze),A.convert(Fe),Me)}finally{const De=y!==null?we.get(y).__webglFramebuffer:null;de.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(b,B,X=0){const U=Math.pow(2,-X),Y=Math.floor(B.image.width*U),Me=Math.floor(B.image.height*U);xe.setTexture2D(B,0),G.copyTexSubImage2D(3553,X,0,0,b.x,b.y,Y,Me),de.unbindTexture()},this.copyTextureToTexture=function(b,B,X,U=0){const Y=B.image.width,Me=B.image.height,Te=A.convert(X.format),Re=A.convert(X.type);xe.setTexture2D(X,0),G.pixelStorei(37440,X.flipY),G.pixelStorei(37441,X.premultiplyAlpha),G.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?G.texSubImage2D(3553,U,b.x,b.y,Y,Me,Te,Re,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(3553,U,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Te,B.mipmaps[0].data):G.texSubImage2D(3553,U,b.x,b.y,Te,Re,B.image),U===0&&X.generateMipmaps&&G.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(b,B,X,U,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,De=A.convert(U.format),ze=A.convert(U.type);let Fe;if(U.isData3DTexture)xe.setTexture3D(U,0),Fe=32879;else if(U.isDataArrayTexture)xe.setTexture2DArray(U,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Ne=G.getParameter(3314),Ze=G.getParameter(32878),Mt=G.getParameter(3316),Vt=G.getParameter(3315),an=G.getParameter(32877),$e=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,b.min.x),G.pixelStorei(3315,b.min.y),G.pixelStorei(32877,b.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Fe,Y,B.x,B.y,B.z,Me,Te,Re,De,ze,$e.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,Y,B.x,B.y,B.z,Me,Te,Re,De,$e.data)):G.texSubImage3D(Fe,Y,B.x,B.y,B.z,Me,Te,Re,De,ze,$e),G.pixelStorei(3314,Ne),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Mt),G.pixelStorei(3315,Vt),G.pixelStorei(32877,an),Y===0&&U.generateMipmaps&&G.generateMipmap(Fe),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?xe.setTextureCube(b,0):b.isData3DTexture?xe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?xe.setTexture2DArray(b,0):xe.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){g=0,S=0,y=null,de.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Of extends wo{}Of.prototype.isWebGL1Renderer=!0;class ur{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new ur(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Uf extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zf extends ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=ut,u=ut,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bf extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:pt,this.magFilter=s!==void 0?s:pt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class hr extends At{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new C,u=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}static fromJSON(e){return new hr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class En extends At{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const p=[],d=n/2;let g=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(m,2));function S(){const T=new C,M=new C;let P=0;const N=(t-e)/n;for(let v=0;v<=s;v++){const E=[],I=v/s,J=I*(t-e)+e;for(let K=0;K<=i;K++){const O=K/i,D=O*l+a,q=Math.sin(D),Q=Math.cos(D);M.x=J*q,M.y=-I*n+d,M.z=J*Q,h.push(M.x,M.y,M.z),T.set(q,N,Q).normalize(),f.push(T.x,T.y,T.z),m.push(O,1-I),E.push(_++)}p.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){const I=p[E][v],J=p[E+1][v],K=p[E+1][v+1],O=p[E][v+1];u.push(I,J,O),u.push(J,K,O),P+=6}c.addGroup(g,P,0),g+=P}function y(T){const M=_,P=new Ee,N=new C;let v=0;const E=T===!0?e:t,I=T===!0?1:-1;for(let K=1;K<=i;K++)h.push(0,d*I,0),f.push(0,I,0),m.push(.5,.5),_++;const J=_;for(let K=0;K<=i;K++){const D=K/i*l+a,q=Math.cos(D),Q=Math.sin(D);N.x=E*Q,N.y=d*I,N.z=E*q,h.push(N.x,N.y,N.z),f.push(0,I,0),P.x=q*.5+.5,P.y=Q*.5*I+.5,m.push(P.x,P.y),_++}for(let K=0;K<i;K++){const O=M+K,D=J+K;T===!0?u.push(D,D+1,O):u.push(D+1,D,O),v+=3}c.addGroup(g,v,T===!0?1:2),g+=v}}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dr extends At{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,m=new C,_=new Ee;for(let p=0;p<=i;p++){for(let d=0;d<=n;d++){const g=s+d/n*o;m.x=h*Math.cos(g),m.y=h*Math.sin(g),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let p=0;p<i;p++){const d=p*(n+1);for(let g=0;g<n;g++){const S=g+d,y=S,T=S+n+1,M=S+n+2,P=S+1;a.push(y,T,P),a.push(T,M,P)}}this.setIndex(a),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(u,2))}static fromJSON(e){return new dr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fr extends At{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,f=new C,m=[],_=[],p=[],d=[];for(let g=0;g<=n;g++){const S=[],y=g/n;let T=0;g==0&&o==0?T=.5/t:g==n&&l==Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){const P=M/t;h.x=-e*Math.cos(i+P*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+P*s)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(P+T,1-y),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const y=u[g][S+1],T=u[g][S],M=u[g+1][S],P=u[g+1][S+1];(g!==0||o>0)&&m.push(y,T,P),(g!==n-1||l<Math.PI)&&m.push(T,M,P)}this.setIndex(m),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(p,3)),this.setAttribute("uv",new je(d,2))}static fromJSON(e){return new fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pr extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ia={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class kf{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Gf=new kf;class Vf{constructor(e){this.manager=e!==void 0?e:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Hf extends Vf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ia.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=bi("img");function l(){u(),Ia.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mr extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class pi extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hs=new et,Fa=new C,Na=new C;class Wf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fa),Na.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Na),t.updateMatrixWorld(),Hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xf extends Wf{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qn extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jn extends mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oa(){return(typeof performance=="undefined"?Date:performance).now()}class Ua{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sr);const za={type:"change"},Ws={type:"start"},Ba={type:"end"};class jf extends Ln{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:Rn.ROTATE,TWO:Rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",it),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(za),n.update(),s=i.NONE},this.update=function(){const A=new C,F=new Tn().setFromUnitVectors(e.up,new C(0,1,0)),R=F.clone().invert(),z=new C,Z=new Tn,re=2*Math.PI;return function(){const ve=n.object.position;A.copy(ve).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&E(N()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ye=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(ye)&&isFinite(Pe)&&(ye<-Math.PI?ye+=re:ye>Math.PI&&(ye-=re),Pe<-Math.PI?Pe+=re:Pe>Math.PI&&(Pe-=re),ye<=Pe?a.theta=Math.max(ye,Math.min(Pe,a.theta)):a.theta=a.theta>(ye+Pe)/2?Math.max(ye,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(R),ve.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||z.distanceToSquared(n.object.position)>o||8*(1-Z.dot(n.object.quaternion))>o?(n.dispatchEvent(za),z.copy(n.object.position),Z.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",We),n.domElement.removeEventListener("pointercancel",Je),n.domElement.removeEventListener("wheel",mt),n.domElement.removeEventListener("pointermove",Ye),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",it)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ua,l=new Ua;let c=1;const u=new C;let h=!1;const f=new Ee,m=new Ee,_=new Ee,p=new Ee,d=new Ee,g=new Ee,S=new Ee,y=new Ee,T=new Ee,M=[],P={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(A){l.theta-=A}function I(A){l.phi-=A}const J=function(){const A=new C;return function(R,z){A.setFromMatrixColumn(z,0),A.multiplyScalar(-R),u.add(A)}}(),K=function(){const A=new C;return function(R,z){n.screenSpacePanning===!0?A.setFromMatrixColumn(z,1):(A.setFromMatrixColumn(z,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(R),u.add(A)}}(),O=function(){const A=new C;return function(R,z){const Z=n.domElement;if(n.object.isPerspectiveCamera){const re=n.object.position;A.copy(re).sub(n.target);let ce=A.length();ce*=Math.tan(n.object.fov/2*Math.PI/180),J(2*R*ce/Z.clientHeight,n.object.matrix),K(2*z*ce/Z.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(R*(n.object.right-n.object.left)/n.object.zoom/Z.clientWidth,n.object.matrix),K(z*(n.object.top-n.object.bottom)/n.object.zoom/Z.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(A){f.set(A.clientX,A.clientY)}function ee(A){S.set(A.clientX,A.clientY)}function j(A){p.set(A.clientX,A.clientY)}function te(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m),n.update()}function se(A){y.set(A.clientX,A.clientY),T.subVectors(y,S),T.y>0?D(v()):T.y<0&&q(v()),S.copy(y),n.update()}function pe(A){d.set(A.clientX,A.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),O(g.x,g.y),p.copy(d),n.update()}function k(A){A.deltaY<0?q(v()):A.deltaY>0&&D(v()),n.update()}function $(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function oe(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const A=.5*(M[0].pageX+M[1].pageX),F=.5*(M[0].pageY+M[1].pageY);f.set(A,F)}}function le(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const A=.5*(M[0].pageX+M[1].pageX),F=.5*(M[0].pageY+M[1].pageY);p.set(A,F)}}function G(){const A=M[0].pageX-M[1].pageX,F=M[0].pageY-M[1].pageY,R=Math.sqrt(A*A+F*F);S.set(0,R)}function Se(){n.enableZoom&&G(),n.enablePan&&le()}function ge(){n.enableZoom&&G(),n.enableRotate&&oe()}function me(A){if(M.length==1)m.set(A.pageX,A.pageY);else{const R=be(A),z=.5*(A.pageX+R.x),Z=.5*(A.pageY+R.y);m.set(z,Z)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*_.x/F.clientHeight),I(2*Math.PI*_.y/F.clientHeight),f.copy(m)}function de(A){if(M.length===1)d.set(A.pageX,A.pageY);else{const F=be(A),R=.5*(A.pageX+F.x),z=.5*(A.pageY+F.y);d.set(R,z)}g.subVectors(d,p).multiplyScalar(n.panSpeed),O(g.x,g.y),p.copy(d)}function Ie(A){const F=be(A),R=A.pageX-F.x,z=A.pageY-F.y,Z=Math.sqrt(R*R+z*z);y.set(0,Z),T.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),D(T.y),S.copy(y)}function we(A){n.enableZoom&&Ie(A),n.enablePan&&de(A)}function xe(A){n.enableZoom&&Ie(A),n.enableRotate&&me(A)}function We(A){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Ye),n.domElement.addEventListener("pointerup",Ve)),ne(A),A.pointerType==="touch"?w(A):Ge(A))}function Ye(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):Le(A))}function Ve(A){ae(A),M.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Ye),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(Ba),s=i.NONE}function Je(A){ae(A)}function Ge(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Pn.DOLLY:if(n.enableZoom===!1)return;ee(A),s=i.DOLLY;break;case Pn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;j(A),s=i.PAN}else{if(n.enableRotate===!1)return;Q(A),s=i.ROTATE}break;case Pn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;Q(A),s=i.ROTATE}else{if(n.enablePan===!1)return;j(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ws)}function Le(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;te(A);break;case i.DOLLY:if(n.enableZoom===!1)return;se(A);break;case i.PAN:if(n.enablePan===!1)return;pe(A);break}}function mt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(Ws),k(A),n.dispatchEvent(Ba))}function it(A){n.enabled===!1||n.enablePan===!1||$(A)}function w(A){switch(he(A),M.length){case 1:switch(n.touches.ONE){case Rn.ROTATE:if(n.enableRotate===!1)return;oe(),s=i.TOUCH_ROTATE;break;case Rn.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Rn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(),s=i.TOUCH_DOLLY_PAN;break;case Rn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ws)}function x(A){switch(he(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(A),n.update();break;default:s=i.NONE}}function H(A){n.enabled!==!1&&A.preventDefault()}function ne(A){M.push(A)}function ae(A){delete P[A.pointerId];for(let F=0;F<M.length;F++)if(M[F].pointerId==A.pointerId){M.splice(F,1);return}}function he(A){let F=P[A.pointerId];F===void 0&&(F=new Ee,P[A.pointerId]=F),F.set(A.pageX,A.pageY)}function be(A){const F=A.pointerId===M[0].pointerId?M[1]:M[0];return P[F.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",We),n.domElement.addEventListener("pointercancel",Je),n.domElement.addEventListener("wheel",mt,{passive:!1}),this.update()}}const Xs=1/60,To=2,Yf=.03,Zf=1-Yf,$f=.12,Kf=1.225,xn={DEXTER:"dexter",SINISTER:"sinister"},Ae={TOP:"top",LEFT:"left",BOTTOM:"bottom",RIGHT:"right"},Xe={VERTICAL:"vertical",HORIZONTAL:"horizontal",OUTRIGGER:"outrigger",CROSSBAR:"crossbar",GALLERY:"gallery",AUSTRALIAN:"australian"},Nt={NONE:"none",TOP_RIGHT:"topright",TOP_LEFT:"topleft"};function Jf(r,e,t){const n=r*e,i=new Uint8Array(4*n),s=Math.floor(t.r*255),o=Math.floor(t.g*255),a=Math.floor(t.b*255),l=1*255;for(let u=0;u<n;u++){const h=u*4;i[h]=s,i[h+1]=o,i[h+2]=a,i[h+3]=l}const c=new zf(i,r,e);return c.needsUpdate=!0,c}const Qf=`uniform sampler2D textureMap;
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
`,ep=`varying vec2 vUV;

void main() {
    vUV = 0.75 * uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`,ka={depth_frag:Qf,depth_vert:ep};class tp extends At{constructor(e=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),t=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],s=[],o=[],a=[],l=1e-5,c=new C,u=new C,h=new C,f=new C,m=new C,_=t+1;for(let p=0;p<=n;p++){const d=p/n;for(let g=0;g<=t;g++){const S=g/t;e(S,d,u),s.push(u.x,u.y,u.z),S-l>=0?(e(S-l,d,h),f.subVectors(u,h)):(e(S+l,d,h),f.subVectors(h,u)),d-l>=0?(e(S,d-l,h),m.subVectors(u,h)):(e(S,d+l,h),m.subVectors(h,u)),c.crossVectors(f,m).normalize(),o.push(c.x,c.y,c.z),a.push(S,d)}}for(let p=0;p<n;p++)for(let d=0;d<t;d++){const g=p*_+d,S=p*_+d+1,y=(p+1)*_+d+1,T=(p+1)*_+d;i.push(g,S,T),i.push(S,y,T)}this.setIndex(i),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(a,2))}}class np{constructor(e,t){this.position=e.clone(),this.previous=e.clone(),this.original=e.clone(),this.mass=t,this.inverseMass=1/t,this.acceleration=new C,this.tmp=new C}applyForce(e){this.acceleration.addScaledVector(e,this.inverseMass)}integrate(e){const t=this.tmp.subVectors(this.position,this.previous).multiplyScalar(Zf).add(this.position).addScaledVector(this.acceleration,e);this.tmp=this.previous,this.previous=this.position,this.position=t,this.acceleration.set(0,0,0)}}const qs=new C;class pn{constructor(e,t,n){this.p1=e,this.p2=t,this.restDistance=n}resolve(){const e=this.p1,t=this.p2,n=this.restDistance;qs.subVectors(t.position,e.position);const i=qs.length();if(i===0)return;const s=qs.multiplyScalar((1-n/i)/2);e.position.add(s),t.position.sub(s)}}class ip{constructor(e,t,n,i){const s=n*e,o=n*t,a=[],l=[],c=(p,d)=>a[p+d*(e+1)],u=(p,d,g)=>{g.set(p*s,d*o,0)},h=new C,f=i/((t+1)*(e+1));for(let p=0;p<=t;p++)for(let d=0;d<=e;d++)u(d/e,p/t,h),a.push(new np(h,f));for(let p=0;p<t;p++)for(let d=0;d<e;d++)l.push(new pn(c(d,p),c(d,p+1),n)),l.push(new pn(c(d,p),c(d+1,p),n));for(let p=e,d=0;d<t;d++)l.push(new pn(c(p,d),c(p,d+1),n));for(let p=t,d=0;d<e;d++)l.push(new pn(c(d,p),c(d+1,p),n));const m=Math.sqrt(n*n*2);for(let p=0;p<t;p++)for(let d=0;d<e;d++)l.push(new pn(c(d,p),c(d+1,p+1),m)),l.push(new pn(c(d+1,p),c(d,p+1),m));const _=new tp(u,e,t);_.getAttribute("position").setUsage(Fl),this.xSegments=e,this.ySegments=t,this.restDistance=n,this.width=s,this.height=o,this.particles=a,this.constraints=l,this.particleAt=c,this.geometry=_}reset(){const e=this.particles;for(let t=0,n=e.length;t<n;t++){const i=e[t];i.previous.copy(i.position.copy(i.original))}}simulate(e){const t=this.particles,n=this.constraints,i=e*e;for(let s=0,o=t.length;s<o;s++)t[s].integrate(i);for(let s=0,o=To;s<o;s++)for(let a=0,l=n.length;a<l;a++)n[a].resolve()}render(){const e=this.particles,t=this.geometry,n=t.getAttribute("position"),i=n.array;for(let s=0,o=e.length;s<o;s++){const a=e[s].position,l=s*3;i[l]=a.x,i[l+1]=a.y,i[l+2]=a.z}n.needsUpdate=!0,t.computeVertexNormals()}}const Ga=1.2,Yi=new C;class Va extends pn{resolve(){const e=this.p1,t=this.p2,n=this.restDistance*Ga;Yi.subVectors(e.position,t.position);const i=Yi.length()/Ga;Yi.normalize();const s=Yi.multiplyScalar(i-n);i>n&&t.position.add(s)}}const Eo=Jf(1,1,new Ue(16777215));function sp(r){const{width:e,height:t,mass:n,restDistance:i}=r;return new ip(Math.max(1,Math.round(e/i)),Math.max(1,Math.round(t/i)),i,n*e*t)}function rp(r,e){const t=r.geometry;let n=Eo,i;const s=a=>(a.needsUpdate=!0,a.anisotropy=16,a.minFilter=pt,a.magFilter=pt,a.wrapS=a.wrapT=Rt,a),o=(a,l)=>{a.encoding=ke;const c=new pr({alphaTest:.5,color:16777215,metalness:.08,roughness:.86,side:l,map:a}),u=new Et(t,c);return u.castShadow=!0,u.customDepthMaterial=new Kt({glslVersion:Qs,uniforms:{textureMap:{value:a}},vertexShader:ka.depth_vert,fragmentShader:ka.depth_frag}),u.position.set(0,-r.height,0),u};return e&&e.texture&&(e.texture instanceof ct?(n=s(e.texture),e.backSideTexture instanceof ct&&(i=s(e.backSideTexture))):console.error("FlagWaver.Flag: options.texture must be an instance of THREE.Texture.")),[o(n,i?$t:Zt),i?o(i,xt):null]}const ap=(()=>{const r={edges:[],spacing:1};function e(t,n,i,s){const{xSegments:o,ySegments:a,particleAt:l}=t,{spacing:c}=s;switch(i){case Ae.TOP:for(let u=0;u<=o;u+=c)n.push(l(u,a));break;case Ae.LEFT:for(let u=0;u<=a;u+=c)n.push(l(0,u));break;case Ae.BOTTOM:for(let u=0;u<=o;u+=c)n.push(l(u,0));break;case Ae.RIGHT:for(let u=0;u<=a;u+=c)n.push(l(o,u));break}}return function(n,i,s){const o=Object.assign({},r,s),{edges:a}=o;if(typeof a=="string")e(n,i,a,o);else if(a&&a.length)for(let l=0,c=a.length;l<c;l++)e(n,i,a[l],o)}})(),ts=class ts{constructor(e){const t=Object.assign({},ts.defaults,e);this.cloth=sp(t),this.pins=[],this.lengthConstraints=[];const[n,i]=rp(this.cloth,t);this.mesh=n,this.mesh2=i,this.object=new qe,this.object.add(this.mesh),this.mesh2&&this.object.add(this.mesh2),this.pin(t.pin)}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.map.dispose(),this.mesh.customDepthMaterial.dispose(),this.mesh2&&(this.mesh2.material.dispose(),this.mesh2.material.map.dispose(),this.mesh2.customDepthMaterial.dispose())}pin(e){ap(this.cloth,this.pins,e)}unpin(){this.pins=[]}setLengthConstraints(e){const{xSegments:t,ySegments:n,restDistance:i,particleAt:s}=this.cloth,o=[];if(e===Ae.LEFT)for(let a=0;a<=n;a++)for(let l=0;l<t;l++)o.push(new Va(s(l,a),s(l+1,a),i));else if(e===Ae.TOP)for(let a=0;a<=t;a++)for(let l=n;l>0;l--)o.push(new Va(s(a,l),s(a,l-1),i));this.lengthConstraints=o}reset(){this.cloth.reset()}simulate(e){const t=this.pins,n=this.lengthConstraints;this.cloth.simulate(e);for(let i=0,s=t.length;i<s;i++){const o=t[i];o.previous.copy(o.position.copy(o.original))}for(let i=0,s=To;i<s;i++)for(let o=0,a=n.length;o<a;o++)n[o].resolve()}render(){this.cloth.render()}};Ai(ts,"defaults",{width:1.8,height:1.2,mass:.11,restDistance:1.2/10,rigidness:1,texture:Eo,backSideTexture:null,pin:{edges:[Ae.LEFT]}});let An=ts;function gr(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new At;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let f=0;f<r.length;++f){const m=r[f].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Ha(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const m=[];for(let p=0;p<o[u].length;++p)m.push(o[u][p][f]);const _=Ha(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Ha(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const l=r[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new Ut(s,t,n)}function si(r){const e=r.poleWidth/2,t=r.poleLength,n=32,i=r.poleCapSize/2,s=new En(e,e,t,n);s.translate(0,r.poleLength/2,0);const o=new En(i,i,i,n);return o.translate(0,t+i/2,0),gr([s,o])}function op(r){const e=si(r),t=r.poleWidth/2,n=r.poleLength,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=r.crossbarCapSize/2,l=r.poleTopOffset,c=new En(i,i,s,o);c.rotateZ(Math.PI/2);const u=new En(a,a,a,o),h=u.clone(),f=n-l,m=t+i;return u.rotateZ(Math.PI/2),u.translate(-s/2,f,m),h.rotateZ(-Math.PI/2),h.translate(s/2,f,m),c.translate(0,f,m),gr([e,c,u,h])}function lp(r){const e=si(r),t=r.poleLength,n=r.poleCapSize/2,i=r.crossbarWidth/2,s=r.crossbarLength,o=16,a=new En(i,i,s,o);return a.rotateZ(Math.PI/2),a.translate(s/2,t+n-i,0),gr([e,a])}class sn{constructor(e){const t=Object.assign({},this.constructor.defaults,e),n=this.buildGeometry(t),i=new pr({color:16711422,metalness:.98,roughness:.55}),s=new Et(n,i);s.receiveShadow=!0,s.castShadow=!0,this.top=new C(0,t.poleLength,0),this.mesh=s,this.object=this.mesh}destroy(){this.mesh.material.dispose(),this.mesh.geometry.dispose()}buildGeometry(e){return si(e)}addFlag(e){e.unpin(),e.pin({edges:[Ae.LEFT]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top)}}Ai(sn,"defaults",(()=>{const e={};return e.flagpoleType=Xe.VERTICAL,e.poleWidth=.076,e.poleLength=6,e.poleCapSize=e.poleWidth*4/3,e.crossbarWidth=e.poleWidth*2/3,e.crossbarLength=1.2,e.crossbarCapSize=e.crossbarWidth*3/2,e.poleTopOffset=.1,e})());class cp{constructor(e){const t=Object.assign({},e),{flagpole:n,flag:i}=t;this.flagpole=n||new sn,this.flag=i||new An,this.flagpole.addFlag(this.flag,0),this.object=new qe,this.object.add(this.flagpole.object),this.object.add(this.flag.object)}destroy(){this.destroyChildSubject(this.flagpole),this.destroyChildSubject(this.flag)}destroyChildSubject(e){e&&(this.object.remove(e.object),e.destroy())}reset(){this.flag.reset()}simulate(e){this.flag.simulate(e)}render(){this.flag.render()}}const xi={blowFromLeftDirection:(r,e)=>r.set(2e3,0,1e3),rotatingDirection:(r,e)=>r.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),constantSpeed:(r,e)=>r,variableSpeed:(r,e)=>r*(1+.25*Math.cos(e/7e3))};function up(r){return .5*Kf*r*r}function hp(r){return r.x===0&&(r.x=.001),r.y===0&&(r.y=.001),r.z===0&&(r.z=.001),r}function dp(r){return r===0?.001:r}class Ao{constructor(e){const t=Object.assign({},this.constructor.defaults,e);this.direction=t.direction,this.speed=t.speed,this.directionFn=t.directionFn,this.speedFn=t.speedFn,this.pressure=new C}update(){const e=Date.now();this.directionFn(hp(this.pressure.copy(this.direction)),e).normalize().multiplyScalar(up(this.speedFn(dp(this.speed),e)))}}Ai(Ao,"defaults",{direction:new C(1,0,0),speed:10,directionFn:xi.blowFromLeftDirection,speedFn:xi.constantSpeed});class fp extends sn{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength-t.poleTopOffset,t.poleWidth/2+t.crossbarWidth/2),this.verticalHoisting=t.verticalHoisting}buildGeometry(e){return op(e)}addFlag(e){switch(e.unpin(),this.verticalHoisting){case Nt.NONE:e.pin({edges:[Ae.TOP]}),e.setLengthConstraints(Ae.TOP),e.object.position.add(this.top),e.object.position.x=-e.cloth.width/2;break;case Nt.TOP_LEFT:e.pin({edges:[Ae.LEFT]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top),e.object.position.x=-e.cloth.height/2,e.object.rotateZ(Math.PI*3/2),e.object.rotateX(Math.PI);break;case Nt.TOP_RIGHT:default:e.pin({edges:[Ae.LEFT]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top),e.object.position.x=e.cloth.height/2,e.object.rotateZ(Math.PI*3/2);break}}}class pp extends sn{buildGeometry(e){return lp(e)}addFlag(e){e.unpin(),e.pin({edges:[Ae.LEFT,Ae.TOP]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top)}}const mp=new C(0,0,1);class gp extends sn{constructor(e){super(e),this.top.applyAxisAngle(mp,Math.PI*3/2)}buildGeometry(e){const t=si(e);return t.rotateZ(Math.PI*3/2),t}addFlag(e){e.unpin(),e.pin({edges:[Ae.LEFT]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*3/2)}}const _p=new C(0,0,1);class xp extends sn{constructor(e){super(e),this.top.applyAxisAngle(_p,Math.PI*7/4)}buildGeometry(e){const t=si(e);return t.rotateZ(Math.PI*7/4),t}addFlag(e){e.unpin(),e.pin({edges:[Ae.LEFT]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top),e.object.rotateZ(Math.PI*7/4)}}const Zi=new C,Wa=new C;function Co(r,e){return Zi.copy(r),e instanceof qe&&(Wa.setFromMatrixPosition(e.matrixWorld),Zi.add(Wa),e.worldToLocal(Zi)),Zi}const vp=new C(0,-9.80665,0);function Mp(r,e){const t=r.particles,n=Co(vp,e);for(let i=0,s=t.length;i<s;i++)t[i].acceleration.add(n)}new C;const $i=new C,Xa=new C;function yp(r,e,t){return $i.subVectors(t,e),Xa.subVectors(r,e),$i.cross(Xa),$i.normalize(),$i}function qa(r,e,t){const n=r.particles,i=r.geometry.getIndex();if(e){const s=r.restDistance*r.restDistance/2,o=Co(e.pressure,t).multiplyScalar($f*s/3);for(let a=0,l=i.count;a<l;a+=3){const c=i.getX(a),u=i.getX(a+1),h=i.getX(a+2),f=n[c],m=n[u],_=n[h],p=yp(f.position,m.position,_.position);p.multiplyScalar(p.dot(o)),f.applyForce(p),m.applyForce(p),_.applyForce(p)}}}class bp extends sn{constructor(e){super(e);const t=Object.assign({},this.constructor.defaults,e);this.top.set(0,t.poleLength*2/3,0)}buildGeometry(e){const t=si(e);return t.translate(0,-e.poleLength*5/3,0),t.rotateZ(Math.PI),t}addFlag(e){e.unpin(),e.pin({edges:[Ae.LEFT]}),e.setLengthConstraints(Ae.LEFT),e.object.position.add(this.top),e.object.translateY(e.cloth.height)}}function Sp(r,e){const t=Object.assign({},r);let n;switch(t.flagpoleType){case Xe.HORIZONTAL:n=new gp(t);break;case Xe.OUTRIGGER:n=new xp(t);break;case Xe.CROSSBAR:t.crossbarLength=t.verticalHoisting===Nt.NONE?e.cloth.width:e.cloth.height,n=new fp(t);break;case Xe.GALLERY:t.crossbarLength=e.cloth.width,n=new pp(t);break;case Xe.AUSTRALIAN:n=new bp(t);break;case Xe.VERTICAL:default:n=new sn(t);break}return n}function ja(r){switch(r){case Ae.TOP:return 0;case Ae.LEFT:return-Math.PI/2;case Ae.BOTTOM:return Math.PI;case Ae.RIGHT:return Math.PI/2;default:return 0}}const Si=r=>!isNaN(parseFloat(r))&&isFinite(r),wp=r=>!!(r&&typeof r=="object"),Tp=500,Ep={image:null,backSideImage:null,width:"auto",height:"auto",hoisting:xn.DEXTER,orientation:Ae.TOP,resolution:256};function Ap(r,e){const t=r.width||r.videoWidth,n=r.height||r.videoHeight;if(e.width==="auto"&&e.height==="auto"){const i=An.defaults.height;return t<n?{width:i,height:i*n/t}:{width:i*t/n,height:i}}else return e.width==="auto"&&Si(e.height)?{width:e.height*t/n,height:e.height}:Si(e.width)&&e.height==="auto"?{width:e.width,height:e.width*n/t}:{width:e.width,height:e.height}}function Cp(r,e){const{width:t,height:n}=r?Ap(r,e):e;if(Si(t)&&Si(n)){const i=Math.min(1,Tp/Math.max(t,n));return{width:t*i,height:n*i}}else return{width:An.defaults.width,height:An.defaults.height}}function Lp(r){return r.orientation===Ae.LEFT||r.orientation===Ae.RIGHT}function Pp(r,e){const t=document.createElement("canvas"),n=t.getContext("2d"),i=r.width,s=r.height,o=Math.min(1,e.height*e.resolution/s),a=Math.round(i*o),l=Math.round(s*o);return t.width=a,t.height=l,n.drawImage(r,0,0,a,l),t}function Ya(r,e,t){const n=r instanceof HTMLVideoElement?new Bf(r):new ct(Pp(r,e));if(n.matrixAutoUpdate=!1,wp(t)){const i=n.matrix;i.scale(1,1),t.reflect&&i.translate(-1,0).scale(-1,1),Si(t.rotate)&&i.translate(-.5,-.5).rotate(-t.rotate).translate(.5,.5)}return n}function Rp(r){const e={};Lp(r)?(e.width=r.height,e.height=r.width):(e.width=r.width,e.height=r.height);const t=r.hoisting===xn.SINISTER;let{image:n,backSideImage:i}=r;if(t&&i){const s=n;n=i,i=s}return n&&(e.texture=Ya(n,r,{reflect:i?!1:t,rotate:ja(r.orientation)})),i&&(e.backSideTexture=Ya(i,r,{reflect:!0,rotate:-ja(r.orientation)})),e}function Dp(r){const e=Object.assign({},Ep,r);return Object.assign(e,Cp(e.image,e)),Rp(e)}const Lo=new Hf;Lo.setCrossOrigin("anonymous");function Za(r,e,t){Lo.load(r,e,null,n=>{console.error(`FlagWaver.loadImage: Failed to load image from ${r}.`),t&&t(n)})}const vn={day:{sky:["#4a90d9","#8fc3f2","#dcefff"],label:"Day",css:"linear-gradient(180deg, #4a90d9 0%, #8fc3f2 16%, #dcefff 30%, #dcefff 100%)",stops:["#5a9fe0","#a6d2f7","#dcefff"],fog:14479359,ground:6196298,lights:()=>{const r=new jn(16777215,.55),e=new pi(13625087,8034906,.35),t=new qn(16774368,6);return t.position.set(20,70,40),{ambient:[r,e],sun:t}}},sunset:{sky:["#2b2d6b","#d9706e","#ffd79a"],label:"Sunset",css:"linear-gradient(180deg, #2b2d6b 0%, #c75a6b 14%, #f6a35a 23%, #ffd79a 30%, #ffd79a 100%)",stops:["#2b2d6b","#c75a6b","#f6a35a","#ffd79a"],fog:16766874,ground:4866869,lights:()=>{const r=new jn(16765088,.35),e=new pi(16756864,3811898,.4),t=new qn(16752736,5.5);return t.position.set(-60,18,30),{ambient:[r,e],sun:t}}},overcast:{sky:["#8d99a6","#b8c2cc","#d7dde3"],label:"Overcast",css:"linear-gradient(180deg, #8d99a6 0%, #b8c2cc 18%, #d7dde3 30%, #d7dde3 100%)",stops:["#8d99a6","#b8c2cc","#d7dde3"],fog:14147043,ground:5662282,lights:()=>{const r=new jn(16777215,.9),e=new pi(14739182,6320218,.5),t=new qn(15791359,2.5);return t.position.set(10,70,20),{ambient:[r,e],sun:t}}},night:{sky:["#050816","#0c1733","#1a2a4f"],label:"Night",css:"linear-gradient(180deg, #050816 0%, #0c1733 16%, #1a2a4f 30%, #1a2a4f 100%)",stops:["#050816","#0c1733","#1a2a4f"],fog:1714767,ground:1713174,lights:()=>{const r=new jn(8425664,.35),e=new pi(4876992,1053720,.6),t=new qn(13161727,4);return t.position.set(-40,50,60),{ambient:[r,e],sun:t}}},studio:{sky:["#1c1c1f","#232327","#2a2a2f"],label:"Studio",css:"linear-gradient(180deg, #1c1c1f 0%, #2a2a2f 30%, #2a2a2f 100%)",stops:["#1c1c1f","#2a2a2f"],fog:2763311,ground:2894896,lights:()=>{const r=new jn(16777215,.5),e=new pi(16777215,4210752,.4),t=new qn(16777215,5);return t.position.set(25,60,50),{ambient:[r,e],sun:t}}},green:{sky:["#00b140","#00b140","#00b140"],label:"Green screen",css:"#00b140",stops:["#00b140","#00b140"],fog:45376,ground:45376,lights:()=>{const r=new jn(16777215,.7),e=new qn(16777215,5);return e.position.set(25,60,50),{ambient:[r],sun:e}}}},Ip=Object.keys(vn),Fp=`
varying vec3 vWorld;
void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
}`,Np=`
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
}`;class Op{constructor(e=280){this.uniforms={topColor:{value:new Ue(4886745)},midColor:{value:new Ue(9421810)},horizonColor:{value:new Ue(14479359)},center:{value:new Ue(0,0,0)}};const t=new Kt({uniforms:this.uniforms,vertexShader:Fp,fragmentShader:Np,side:xt,depthWrite:!1,fog:!1});this.mesh=new Et(new fr(e,48,24),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColors(e,t,n){this.uniforms.topColor.value.set(e),this.uniforms.midColor.value.set(t),this.uniforms.horizonColor.value.set(n)}follow(e){this.mesh.position.set(e.position.x,0,e.position.z);const t=this.uniforms.center.value;t.r=e.position.x,t.g=0,t.b=e.position.z}}class Up{constructor(e){ft.legacyMode=!1,this.container=e,this.scene=new Uf,this.scene.fog=new ur(12573943,30,260),this.camera=new Pt(30,1,.1,400),this.camera.position.set(0,6,18);const t=Math.min(window.devicePixelRatio||1,2);this.renderer=new wo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t),this.renderer.outputEncoding=ke,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=kt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qa,e.appendChild(this.renderer.domElement),this.controls=new jf(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxDistance=160,this.controls.minDistance=2,this.controls.maxPolarAngle=Math.PI*.52,this.controls.target.set(0,4.5,0),this.controls.update(),this.lights=[],this.sun=null,this.ground=new Et(new hr(1,96),new pr({color:6196298,roughness:1,metalness:0})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.position.y=-.01,this.scene.add(this.ground),this.sky=new Op(280),this.scene.add(this.sky.mesh),this.updateCallbacks=[],this.obstructionLeft=()=>0,this.clock=new qf,this.accumulator=0,this.paused=!1,this.timeScale=1,this.applyPreset("day"),this.resize(),window.addEventListener("resize",()=>this.resize()),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}onUpdate(e){this.updateCallbacks.push(e)}resize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.render()}applyPreset(e){const t=vn[e]||vn.day;this.presetId=e;for(const s of this.lights)this.scene.remove(s);this.lights=[];const{ambient:n,sun:i}=t.lights();for(const s of n)this.scene.add(s),this.lights.push(s);i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.bias=-5e-4,i.shadow.camera.far=400,this.scene.add(i),this.scene.add(i.target),this.lights.push(i,i.target),this.sun=i,this.scene.fog.color.setHex(t.fog),this.sky.setColors(...t.sky),this.ground.material.color.setHex(t.ground),this.container.style.background=t.css,this.fitShadowToBounds(this._lastBounds)}setGroundVisible(e){this.ground.visible=e}fitShadowToBounds(e){this._lastBounds=e;const t=new C(12,8,12),n=new C(0,4,0);e&&!e.isEmpty()&&(e.getSize(t),e.getCenter(n));const i=Math.max(t.x,t.z)*.75+8;if(this.ground.scale.setScalar(Math.max(500,i*12)),this.ground.position.x=n.x,this.ground.position.z=n.z,this.sun){const s=this.sun.shadow.camera;s.left=-i,s.right=i,s.top=i,s.bottom=-i,s.near=1,s.updateProjectionMatrix();const o=this.sun.position.clone().normalize();this.sun.position.copy(n).addScaledVector(o,Math.max(80,i*4)),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.sun.shadow.needsUpdate=!0}this.scene.fog.near=Math.max(30,i*3),this.scene.fog.far=this.scene.fog.near+200}frame(e,t=!0){if(!e||e.isEmpty())return;const n=new C,i=new C;e.getSize(n),e.getCenter(i);const s=this.camera.fov*Math.PI/180,o=this.renderer.domElement.clientWidth||window.innerWidth,a=Math.min(.6,Math.max(0,this.obstructionLeft()/o)),l=n.y/2/Math.tan(s/2),c=n.x/2/Math.tan(s/2)/this.camera.aspect/(1-a),u=Math.max(l,c)*1.15+n.z*.6+2,h=i.clone();h.y=Math.max(i.y,n.y*.55);const f=2*u*Math.tan(s/2)*this.camera.aspect;h.x-=a/2*f;const m=h.clone().add(new C(0,u*.18,u));if(!t){this.camera.position.copy(m),this.controls.target.copy(h),this.controls.update();return}const _=this.camera.position.clone(),p=this.controls.target.clone(),d=performance.now(),g=650,S=()=>{const y=Math.min(1,(performance.now()-d)/g),T=1-Math.pow(1-y,3);this.camera.position.lerpVectors(_,m,T),this.controls.target.lerpVectors(p,h,T),this.controls.update(),y<1&&requestAnimationFrame(S)};requestAnimationFrame(S)}setPaused(e){this.paused=e,e||this.clock.getDelta()}render(){this.renderer.render(this.scene,this.camera)}_loop(){requestAnimationFrame(this._loop);const e=Math.min(this.clock.getDelta(),.1);if(!this.paused){this.accumulator+=e*this.timeScale;let t=0;for(;this.accumulator>=Xs&&t<3;){for(const n of this.updateCallbacks)n(Xs);this.accumulator-=Xs,t++}t===3&&(this.accumulator=0)}this.controls.update(),this.sky.follow(this.camera),this.render()}screenshot(){this.render();const e=this.renderer.domElement,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d"),i=(vn[this.presetId]||vn.day).stops,s=n.createLinearGradient(0,0,0,t.height);return i.forEach((o,a)=>s.addColorStop(i.length===1?0:a/(i.length-1),o)),n.fillStyle=s,n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0),t.toDataURL("image/png")}}const es={row:{label:"Row",place(r,e){const t=[],n=(r-1)*e;for(let i=0;i<r;i++)t.push({position:new C(-n/2+i*e,0,0),rotationY:0});return t}},arc:{label:"Arc",place(r,e){if(r===1)return[{position:new C(0,0,0),rotationY:0}];const t=Math.PI*.8,n=Math.max(e,(r-1)*e/t),i=[];for(let s=0;s<r;s++){const o=-t/2+t*s/(r-1);i.push({position:new C(Math.sin(o)*n,0,-Math.cos(o)*n+n),rotationY:0})}return i}},circle:{label:"Circle",place(r,e){if(r===1)return[{position:new C(0,0,0),rotationY:0}];const t=Math.max(e,r*e/(2*Math.PI)),n=[];for(let i=0;i<r;i++){const s=i/r*Math.PI*2;n.push({position:new C(Math.sin(s)*t,0,Math.cos(s)*t),rotationY:0})}return n}},grid:{label:"Grid",place(r,e){const t=Math.ceil(Math.sqrt(r)),n=Math.ceil(r/t),i=[];for(let s=0;s<r;s++){const o=s%t,a=Math.floor(s/t);i.push({position:new C((o-(t-1)/2)*e,0,(a-(n-1)/2)*e*1.4),rotationY:0})}return i}},vee:{label:"V formation",place(r,e){const t=[];for(let n=0;n<r;n++){const i=n%2===0?-1:1,s=Math.ceil(n/2);t.push({position:new C(i*s*e*.8,0,s*e*.9),rotationY:0})}return t}},scatter:{label:"Scatter",place(r,e){let t=1337;const n=()=>(t=t*16807%2147483647,t/2147483647),i=Math.sqrt(r)*e,s=[];for(let o=0;o<r;o++)s.push({position:new C((n()-.5)*i*1.6,0,(n()-.5)*i),rotationY:(n()-.5)*.6});return s}}},zp=Object.keys(es),_r={ad:"Andorra",ae:"United Arab Emirates",af:"Afghanistan",ag:"Antigua and Barbuda",al:"Albania",am:"Armenia",ao:"Angola",ar:"Argentina",at:"Austria",au:"Australia",az:"Azerbaijan",ba:"Bosnia and Herzegovina",bb:"Barbados",bd:"Bangladesh",be:"Belgium",bf:"Burkina Faso",bg:"Bulgaria",bh:"Bahrain",bi:"Burundi",bj:"Benin",bn:"Brunei",bo:"Bolivia",br:"Brazil",bs:"Bahamas",bt:"Bhutan",bw:"Botswana",by:"Belarus",bz:"Belize",ca:"Canada",cd:"DR Congo",cf:"Central African Republic",cg:"Republic of the Congo",ch:"Switzerland",ci:"Côte d'Ivoire",cl:"Chile",cm:"Cameroon",cn:"China",co:"Colombia",cr:"Costa Rica",cu:"Cuba",cv:"Cape Verde",cy:"Cyprus",cz:"Czechia",de:"Germany",dj:"Djibouti",dk:"Denmark",dm:"Dominica",do:"Dominican Republic",dz:"Algeria",ec:"Ecuador",ee:"Estonia",eg:"Egypt",er:"Eritrea",es:"Spain",et:"Ethiopia",fi:"Finland",fj:"Fiji",fm:"Micronesia",fr:"France",ga:"Gabon",gb:"United Kingdom",gd:"Grenada",ge:"Georgia",gh:"Ghana",gm:"Gambia",gn:"Guinea",gq:"Equatorial Guinea",gr:"Greece",gt:"Guatemala",gw:"Guinea-Bissau",gy:"Guyana",hn:"Honduras",hr:"Croatia",ht:"Haiti",hu:"Hungary",id:"Indonesia",ie:"Ireland",il:"Israel",in:"India",iq:"Iraq",ir:"Iran",is:"Iceland",it:"Italy",jm:"Jamaica",jo:"Jordan",jp:"Japan",ke:"Kenya",kg:"Kyrgyzstan",kh:"Cambodia",ki:"Kiribati",km:"Comoros",kn:"Saint Kitts and Nevis",kp:"North Korea",kr:"South Korea",kw:"Kuwait",kz:"Kazakhstan",la:"Laos",lb:"Lebanon",lc:"Saint Lucia",li:"Liechtenstein",lk:"Sri Lanka",lr:"Liberia",ls:"Lesotho",lt:"Lithuania",lu:"Luxembourg",lv:"Latvia",ly:"Libya",ma:"Morocco",mc:"Monaco",md:"Moldova",me:"Montenegro",mg:"Madagascar",mh:"Marshall Islands",mk:"North Macedonia",ml:"Mali",mm:"Myanmar",mn:"Mongolia",mr:"Mauritania",mt:"Malta",mu:"Mauritius",mv:"Maldives",mw:"Malawi",mx:"Mexico",my:"Malaysia",mz:"Mozambique",na:"Namibia",ne:"Niger",ng:"Nigeria",ni:"Nicaragua",nl:"Netherlands",no:"Norway",np:"Nepal",nr:"Nauru",nz:"New Zealand",om:"Oman",pa:"Panama",pe:"Peru",pg:"Papua New Guinea",ph:"Philippines",pk:"Pakistan",pl:"Poland",pt:"Portugal",pw:"Palau",py:"Paraguay",qa:"Qatar",ro:"Romania",rs:"Serbia",ru:"Russia",rw:"Rwanda",sa:"Saudi Arabia",sb:"Solomon Islands",sc:"Seychelles",sd:"Sudan",se:"Sweden",sg:"Singapore",si:"Slovenia",sk:"Slovakia",sl:"Sierra Leone",sm:"San Marino",sn:"Senegal",so:"Somalia",sr:"Suriname",ss:"South Sudan",st:"São Tomé and Príncipe",sv:"El Salvador",sy:"Syria",sz:"Eswatini",td:"Chad",tg:"Togo",th:"Thailand",tj:"Tajikistan",tl:"Timor-Leste",tm:"Turkmenistan",tn:"Tunisia",to:"Tonga",tr:"Turkey",tt:"Trinidad and Tobago",tv:"Tuvalu",tw:"Taiwan",tz:"Tanzania",ua:"Ukraine",ug:"Uganda",us:"United States",uy:"Uruguay",uz:"Uzbekistan",va:"Vatican City",vc:"Saint Vincent and the Grenadines",ve:"Venezuela",vn:"Vietnam",vu:"Vanuatu",ws:"Samoa",ye:"Yemen",za:"South Africa",zm:"Zambia",zw:"Zimbabwe",eu:"European Union",un:"United Nations",hk:"Hong Kong",pr:"Puerto Rico",gl:"Greenland","gb-eng":"England","gb-sct":"Scotland","gb-wls":"Wales",ps:"Palestine",xk:"Kosovo"},Po=Object.keys(_r);function Ro(r){return _r[r]||r.toUpperCase()}function Bp(r,e=1280){return`https://flagcdn.com/w${e}/${r}.png`}function kp(r,e=12){const t=r.trim().toLowerCase();if(!t)return[];const n=[],i=[];for(const s of Po){const o=_r[s].toLowerCase();o.startsWith(t)||s===t?n.push(s):o.includes(t)&&i.push(s)}return n.concat(i).slice(0,e)}const rs={armenia:{name:"Armenia",ratio:2,ops:[["h",["#d90012","#0033a0","#f2a800"]]]},austria:{name:"Austria",ratio:1.5,ops:[["h",["#ed2939","#ffffff","#ed2939"]]]},bangladesh:{name:"Bangladesh",ratio:5/3,ops:[["rect","#006a4e",0,0,1,1],["disc","#f42a41",.45,.5,.3]]},belgium:{name:"Belgium",ratio:15/13,ops:[["v",["#000000","#fae042","#ed2939"]]]},colombia:{name:"Colombia",ratio:1.5,ops:[["rect","#fcd116",0,0,1,.5],["rect","#003893",0,.5,1,.25],["rect","#ce1126",0,.75,1,.25]]},czechia:{name:"Czechia",ratio:1.5,ops:[["h",["#ffffff","#d7141a"]],["tri","#11457e",[0,0,.5,.5,0,1]]]},denmark:{name:"Denmark",ratio:37/28,ops:[["rect","#c60c30",0,0,1,1],["cross","#ffffff",.38,.5,.14]]},estonia:{name:"Estonia",ratio:11/7,ops:[["h",["#0072ce","#000000","#ffffff"]]]},finland:{name:"Finland",ratio:18/11,ops:[["rect","#ffffff",0,0,1,1],["cross","#003580",.36,.5,.18]]},france:{name:"France",ratio:1.5,ops:[["v",["#0055a4","#ffffff","#ef4135"]]]},germany:{name:"Germany",ratio:5/3,ops:[["h",["#000000","#dd0000","#ffce00"]]]},greece:{name:"Greece",ratio:1.5,ops:[["h",["#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf","#ffffff","#0d5eaf"]],["rect","#0d5eaf",0,0,10/27,5/9],["cross","#ffffff",5/27,5/18,1/9]]},hungary:{name:"Hungary",ratio:2,ops:[["h",["#ce2939","#ffffff","#477050"]]]},indonesia:{name:"Indonesia",ratio:1.5,ops:[["h",["#ff0000","#ffffff"]]]},ireland:{name:"Ireland",ratio:2,ops:[["v",["#169b62","#ffffff","#ff883e"]]]},italy:{name:"Italy",ratio:1.5,ops:[["v",["#009246","#ffffff","#ce2b37"]]]},japan:{name:"Japan",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1],["disc","#bc002d",.5,.5,.3]]},latvia:{name:"Latvia",ratio:2,ops:[["rect","#9e3039",0,0,1,1],["rect","#ffffff",0,.4,1,.2]]},lithuania:{name:"Lithuania",ratio:5/3,ops:[["h",["#fdb913","#006a44","#c1272d"]]]},netherlands:{name:"Netherlands",ratio:1.5,ops:[["h",["#ae1c28","#ffffff","#21468b"]]]},nigeria:{name:"Nigeria",ratio:2,ops:[["v",["#008751","#ffffff","#008751"]]]},norway:{name:"Norway",ratio:22/16,ops:[["rect","#ba0c2f",0,0,1,1],["cross","#ffffff",.36,.5,.25],["cross","#00205b",.36,.5,.125]]},peru:{name:"Peru",ratio:1.5,ops:[["v",["#d91023","#ffffff","#d91023"]]]},poland:{name:"Poland",ratio:1.6,ops:[["h",["#ffffff","#dc143c"]]]},romania:{name:"Romania",ratio:1.5,ops:[["v",["#002b7f","#fcd116","#ce1126"]]]},russia:{name:"Russia",ratio:1.5,ops:[["h",["#ffffff","#0039a6","#d52b1e"]]]},sweden:{name:"Sweden",ratio:1.6,ops:[["rect","#006aa7",0,0,1,1],["cross","#fecc00",.375,.5,.2]]},switzerland:{name:"Switzerland",ratio:1,ops:[["rect","#da291c",0,0,1,1],["rect","#ffffff",.3125,.4,.375,.2],["rect","#ffffff",.4,.3125,.2,.375]]},thailand:{name:"Thailand",ratio:1.5,ops:[["rect","#a51931",0,0,1,1],["rect","#ffffff",0,1/6,1,4/6],["rect","#2d2a4a",0,2/6,1,2/6]]},turkey:{name:"Turkey",ratio:1.5,ops:[["rect","#e30a17",0,0,1,1],["disc","#ffffff",.4,.5,.25],["disc","#e30a17",.46,.5,.2],["star","#ffffff",.62,.5,.11,5]]},ukraine:{name:"Ukraine",ratio:1.5,ops:[["h",["#0057b7","#ffd700"]]]},vietnam:{name:"Vietnam",ratio:1.5,ops:[["rect","#da251d",0,0,1,1],["star","#ffff00",.5,.5,.3,5]]},checkered:{name:"Checkered",ratio:1.5,ops:[["check","#111111","#ffffff",6]]},rainbow:{name:"Rainbow",ratio:1.5,ops:[["h",["#e40303","#ff8c00","#ffed00","#008026","#24408e","#732982"]]]},jollyroger:{name:"Jolly Roger",ratio:1.5,ops:[["rect","#000000",0,0,1,1],["disc","#ffffff",.5,.42,.17],["rect","#ffffff",.4,.57,.2,.08],["rect","#000000",.44,.46,.04,.04],["rect","#000000",.52,.46,.04,.04],["diag","#ffffff",.06],["diag2","#ffffff",.06]]},white:{name:"White (blank)",ratio:1.5,ops:[["rect","#ffffff",0,0,1,1]]}},Gp=Object.keys(rs);function Vp(r,e,t,n,i){const s=n*.382;r.beginPath();for(let o=0;o<i*2;o++){const a=o%2===0?n:s,l=-Math.PI/2+o*Math.PI/i,c=e+Math.cos(l)*a,u=t+Math.sin(l)*a;o===0?r.moveTo(c,u):r.lineTo(c,u)}r.closePath(),r.fill()}function Do(r,e=600){const t=rs[r];if(!t)throw new Error(`Unknown simple flag: ${r}`);const n=Math.round(e*t.ratio),i=e,s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");for(const a of t.ops){const l=a[0];if(l==="h"){const c=a[1],u=i/c.length;c.forEach((h,f)=>{o.fillStyle=h,o.fillRect(0,Math.floor(f*u),n,Math.ceil(u)+1)})}else if(l==="v"){const c=a[1],u=n/c.length;c.forEach((h,f)=>{o.fillStyle=h,o.fillRect(Math.floor(f*u),0,Math.ceil(u)+1,i)})}else if(l==="rect")o.fillStyle=a[1],o.fillRect(a[2]*n,a[3]*i,a[4]*n,a[5]*i);else if(l==="disc")o.fillStyle=a[1],o.beginPath(),o.arc(a[2]*n,a[3]*i,a[4]*i,0,Math.PI*2),o.fill();else if(l==="cross"){const[,c,u,h,f]=a;o.fillStyle=c,o.fillRect(0,(h-f/2)*i,n,f*i),o.fillRect((u-f*i/(2*n))*n,0,f*i,i)}else if(l==="tri"){const c=a[2];o.fillStyle=a[1],o.beginPath(),o.moveTo(c[0]*n,c[1]*i),o.lineTo(c[2]*n,c[3]*i),o.lineTo(c[4]*n,c[5]*i),o.closePath(),o.fill()}else if(l==="star")o.fillStyle=a[1],Vp(o,a[2]*n,a[3]*i,a[4]*i,a[5]);else if(l==="diag"||l==="diag2")o.strokeStyle=a[1],o.lineWidth=a[2]*i,o.beginPath(),l==="diag"?(o.moveTo(n*.3,i*.95),o.lineTo(n*.7,i*.65)):(o.moveTo(n*.7,i*.95),o.lineTo(n*.3,i*.65)),o.stroke();else if(l==="check"){const[,c,u,h]=a,f=i/h;for(let m=0;m<h;m++)for(let _=0;_<Math.ceil(n/f);_++)o.fillStyle=(_+m)%2===0?c:u,o.fillRect(_*f,m*f,f+1,f+1)}}return s}let Hp=1;const _i={height:1.2,hoisting:xn.DEXTER,orientation:Ae.TOP,flagpoleType:Xe.VERTICAL,verticalHoisting:Nt.TOP_RIGHT,mass:.11};function Wp(r){return new Promise((e,t)=>{switch(r.type){case"simple":try{e(Do(r.value))}catch(n){t(n)}break;case"country":Za(Bp(r.value),e,()=>t(new Error(`Could not load flag for ${Ro(r.value)} (network/CORS).`)));break;case"url":case"upload":Za(r.value,e,()=>t(new Error("Image could not be loaded.")));break;default:t(new Error(`Unknown source type ${r.type}`))}})}function Ki(r){var e;switch(r.type){case"simple":return((e=rs[r.value])==null?void 0:e.name)||r.value;case"country":return Ro(r.value);case"upload":return r.name||"Uploaded image";case"url":return r.value.replace(/^https?:\/\//,"").slice(0,32);default:return"Flag"}}class Xp{constructor(e){this.world=e,this.entries=[],this.root=new qe,e.scene.add(this.root),this.layoutId="row",this.spacing=3.2,this.wind=new Ao({speed:10}),this.windAngle=0,this.windSpeed=10,this.windMode="natural",this.externalGain=0,this.gust={enabled:!1,strength:2.2,period:4.5,width:2.5},this.ripple=!1,this.listeners=new Set,this._tmpPressure=new C,this._gustWind={pressure:this._tmpPressure},this._bounds=new ni,this.selectedId=null,this.ring=new Et(new dr(.22,.42,48),new ar({color:16734780,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.02,this.ring.visible=!1,this._applyWindSettings(),e.onUpdate(t=>this.step(t))}setSelected(e){this.selectedId=e;const t=this.getEntry(e);this.ring.parent&&this.ring.parent.remove(this.ring),t?(t.holder.add(this.ring),this.ring.visible=!0):this.ring.visible=!1}setFlagHeight(e){_i.height=e,this.updateAllSettings({height:e})}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e,t){for(const n of this.listeners)n(e,t)}get count(){return this.entries.length}getEntry(e){return this.entries.find(t=>t.id===e)}addFlag(e,t={}){const n={id:Hp++,source:e,settings:{..._i,...t},image:null,group:null,holder:new qe,status:"loading",error:null};return this.root.add(n.holder),this.entries.push(n),this.relayout(),this.emit("add",n),this._loadAndBuild(n),n}removeFlag(e){const t=this.entries.findIndex(i=>i.id===e);if(t===-1)return;const[n]=this.entries.splice(t,1);this._destroyGroup(n),this.selectedId===e&&this.setSelected(null),this.root.remove(n.holder),this.relayout(),this.emit("remove",n)}clear(){for(const e of[...this.entries])this.removeFlag(e.id)}duplicateFlag(e){const t=this.getEntry(e);return t?this.addFlag({...t.source},{...t.settings}):null}moveTo(e,t){const n=this.entries.findIndex(o=>o.id===e);if(n===-1)return;const[i]=this.entries.splice(n,1),s=Math.max(0,Math.min(this.entries.length,t));this.entries.splice(s,0,i),this.relayout(),this.emit("reorder")}moveFlag(e,t){const n=this.entries.findIndex(o=>o.id===e),i=n+t;if(n===-1||i<0||i>=this.entries.length)return;const s=this.entries[n];this.entries[n]=this.entries[i],this.entries[i]=s,this.relayout(),this.emit("reorder")}setSource(e,t){const n=this.getEntry(e);n&&(n.source=t,n.status="loading",this.emit("update",n),this._loadAndBuild(n))}updateSettings(e,t){const n=this.getEntry(e);n&&(Object.assign(n.settings,t),n.image&&this._build(n),this.emit("settings",n))}updateAllSettings(e){for(const t of this.entries)Object.assign(t.settings,e),t.image&&this._build(t);this.emit("update-all")}resetCloth(){for(const e of this.entries)e.group&&(e.group.reset(),e.group.render())}_loadAndBuild(e){const t=Symbol("load");e._loadToken=t,Wp(e.source).then(n=>{e._loadToken===t&&(e.image=n,e.error=null,e.status="ready",this._build(e),this.emit("update",e))}).catch(n=>{e._loadToken===t&&(e.image=null,e.status="error",e.error=n.message||String(n),this._build(e),this.emit("update",e),this.emit("error",{entry:e,message:e.error}))})}_destroyGroup(e){e.group&&(e.holder.remove(e.group.object),e.group.destroy(),e.group=null)}_build(e){this._destroyGroup(e);const t=e.settings,n={mass:t.mass};e.image?Object.assign(n,Dp({image:e.image,width:"auto",height:t.height,hoisting:t.hoisting,orientation:t.orientation,resolution:320})):(n.width=t.height*1.5,n.height=t.height);const i=new An(n),s=Sp({flagpoleType:t.flagpoleType,verticalHoisting:t.verticalHoisting},i),o=new cp({flagpole:s,flag:i});if(t.flagpoleType===Xe.HORIZONTAL||t.flagpoleType===Xe.OUTRIGGER){const a=s.constructor.defaults.poleLength;o.object.position.set(0,a,0).sub(s.top)}e.group=o,e.holder.add(o.object),o.reset(),o.render(),this._updateBounds()}setLayout(e){es[e]&&(this.layoutId=e,this.relayout())}setSpacing(e){this.spacing=Math.max(.5,e),this.relayout()}relayout(){const e=this.entries.length;if(e===0){this._updateBounds();return}const t=es[this.layoutId].place(e,this.spacing);this.entries.forEach((n,i)=>{n.holder.position.copy(t[i].position),n.holder.rotation.y=t[i].rotationY,n.holder.updateMatrixWorld(!0)}),this._updateBounds(),this.emit("layout")}_updateBounds(){const e=this._bounds.makeEmpty();for(const t of this.entries){const n=t.holder.position,i=t.settings.height,s=t.group?t.group.flag.cloth.width:i*1.5;e.expandByPoint(new C(n.x-s,0,n.z-s)),e.expandByPoint(new C(n.x+s,6.3,n.z+s))}this.world.fitShadowToBounds(e.isEmpty()?null:e)}get bounds(){return this._bounds}setWind({speed:e,angle:t,mode:n}){e!==void 0&&(this.windSpeed=e),t!==void 0&&(this.windAngle=t),n!==void 0&&(this.windMode=n),this._applyWindSettings()}_applyWindSettings(){const e=this.windAngle*Math.PI/180,t=new C(Math.cos(e),.002,Math.sin(e)+.003);switch(this.windMode){case"natural":this.wind.directionFn=xi.rotatingDirection,this.wind.speedFn=xi.variableSpeed;break;case"gusty":this.wind.directionFn=(n,i)=>n.copy(t).add(new C(.15*Math.sin(i/2300),.1*Math.sin(i/1300),.3*Math.sin(i/1700))),this.wind.speedFn=(n,i)=>n*(1+.25*Math.cos(i/7e3)+.18*Math.sin(i/1100)+.1*Math.sin(i/530));break;default:this.wind.directionFn=n=>n.copy(t),this.wind.speedFn=xi.constantSpeed}}setGust(e){Object.assign(this.gust,e)}_gustFactor(e,t){if(!this.gust.enabled||this.entries.length===0)return 1;const n=this._bounds,i=n.min.x-4,s=n.max.x+4,o=Math.max(1,s-i),a=t/this.gust.period%1,l=i+a*o,c=e-l,u=this.gust.width;return 1+this.gust.strength*Math.exp(-(c*c)/(2*u*u))}step(e){this.wind.speed=Math.max(0,this.windSpeed+this.externalGain),this.wind.update();const t=performance.now()/1e3;for(const n of this.entries){const i=n.group;if(!i)continue;const s=i.flag;Mp(s.cloth,s.object);const o=this._gustFactor(n.holder.position.x,t);o!==1?(this._tmpPressure.copy(this.wind.pressure).multiplyScalar(o),qa(s.cloth,this._gustWind,s.object)):qa(s.cloth,this.wind,s.object),i.simulate(e),i.render()}}toJSON(){return{layout:this.layoutId,height:_i.height,spacing:this.spacing,wind:{speed:this.windSpeed,angle:this.windAngle,mode:this.windMode},gust:{...this.gust},flags:this.entries.filter(e=>e.source.type==="simple"||e.source.type==="country"||e.source.type==="url").map(e=>({source:e.source,settings:e.settings}))}}fromJSON(e){this.clear(),e.layout&&(this.layoutId=e.layout),e.spacing&&(this.spacing=e.spacing),e.height&&(_i.height=e.height),e.wind&&this.setWind(e.wind),e.gust&&this.setGust(e.gust);for(const t of e.flags||[])this.addFlag(t.source,t.settings);this.relayout()}}class qp{constructor(){this.ctx=null,this.analyser=null,this.stream=null,this.level=0,this.gain=22,this.active=!1,this._buf=null,this._raf=0}async start(){if(this.active)return;this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.ctx=new(window.AudioContext||window.webkitAudioContext);const e=this.ctx.createMediaStreamSource(this.stream);this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.6,e.connect(this.analyser),this._buf=new Float32Array(this.analyser.fftSize),this.active=!0;const t=()=>{if(!this.active)return;this.analyser.getFloatTimeDomainData(this._buf);let n=0;for(let o=0;o<this._buf.length;o++)n+=this._buf[o]*this._buf[o];const i=Math.sqrt(n/this._buf.length),s=Math.min(1,Math.max(0,(i-.02)/.33));this.level+=(s-this.level)*(s>this.level?.35:.06),this._raf=requestAnimationFrame(t)};t()}stop(){if(this.active=!1,cancelAnimationFrame(this._raf),this.stream)for(const e of this.stream.getTracks())e.stop();this.ctx&&this.ctx.close(),this.stream=this.ctx=this.analyser=null,this.level=0}get extraSpeed(){return this.active?this.level*this.gain:0}}function jp(r){return btoa(unescape(encodeURIComponent(r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Yp(r){const e=r.replace(/-/g,"+").replace(/_/g,"/");return decodeURIComponent(escape(atob(e+"=".repeat((4-e.length%4)%4))))}function Zp(r){return jp(JSON.stringify(r))}function $p(r){try{const e=r.replace(/^#/,"");return e?JSON.parse(Yp(e)):null}catch(e){return console.warn("FlagWaverPlus: could not parse URL state",e),null}}function Kp(r){const e=Zp(r);return history.replaceState(null,"",`#${e}`),`${location.origin}${location.pathname}#${e}`}function Jp(){return $p(location.hash)}const V=(r,e={},...t)=>{const n=document.createElement(r);for(const[i,s]of Object.entries(e))i==="class"?n.className=s:i.startsWith("on")?n.addEventListener(i.slice(2).toLowerCase(),s):s!=null&&s!==!1&&n.setAttribute(i,s);for(const i of t.flat())i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n},ot=(r,e,t)=>{const n=V("option",{value:r},e);return t&&(n.selected=!0),n},$a=r=>`${r.type}:${r.value}`,Ka="flagwaverplus.history.v1";function Qp(r,{manager:e,world:t,mic:n,toast:i}){let s=null,o=!0;const a=[["flags","Flags"],["wind","Wind"],["scene","Scene"],["share","Share"]],l=V("nav",{class:"tabs"}),c={};for(const[R,z]of a)l.appendChild(V("button",{class:"tab","data-tab":R,onClick:()=>u(R)},z)),c[R]=V("section",{class:"page hidden","data-page":R});function u(R){l.querySelectorAll(".tab").forEach(z=>z.classList.toggle("active",z.dataset.tab===R)),Object.values(c).forEach(z=>z.classList.toggle("hidden",z.dataset.page!==R))}r.append(V("header",{class:"panel-head"},V("h1",{},"FlagWaverPlus"),V("button",{class:"collapse",title:"Hide panel (Tab)",onClick:()=>r.classList.toggle("collapsed")},"⇤")),l,...Object.values(c)),u("flags");function h(){o&&setTimeout(()=>t.frame(e.bounds),50)}const f=c.flags,m=V("input",{type:"search",placeholder:"Search a country… (Enter adds first match)",class:"search"}),_=V("div",{class:"results hidden"});function p(R,z=12){const Z=kp(R,z).map(ce=>({type:"country",value:ce})),re=R.trim().toLowerCase();if(re)for(const ce of Gp)rs[ce].name.toLowerCase().includes(re)&&Z.push({type:"simple",value:ce});return Z.slice(0,z+4)}function d(){_.innerHTML="";const R=p(m.value);for(const z of R)_.appendChild(V("button",{class:"result",onClick:()=>g(z)},N(z,32,22),Ki(z),z.type==="simple"?V("span",{class:"tag"},"offline"):null));_.classList.toggle("hidden",R.length===0)}m.addEventListener("input",d),m.addEventListener("keydown",R=>{if(R.key==="Enter"){const z=p(m.value,1)[0];z&&g(z)}R.key==="Escape"&&(m.value="",d())});function g(R){e.addFlag({...R}),m.value="",d(),h()}const S=V("input",{type:"file",accept:"image/*",multiple:"",class:"hidden"});S.addEventListener("change",()=>{for(const R of S.files)e.addFlag({type:"upload",value:URL.createObjectURL(R),name:R.name.replace(/\.[^.]+$/,"")});S.value="",h()});const y=V("input",{type:"url",placeholder:"https://… image URL (must allow CORS)",class:"search"});y.addEventListener("keydown",R=>{R.key==="Enter"&&y.value.trim()&&(e.addFlag({type:"url",value:y.value.trim()}),y.value="",h())});function T(R){const z=[...Po];for(let Z=0;Z<R&&z.length;Z++)e.addFlag({type:"country",value:z.splice(Math.floor(Math.random()*z.length),1)[0]});h()}const M=new Map;try{for(const R of JSON.parse(localStorage.getItem(Ka)||"[]"))M.set($a(R),{source:R,image:null})}catch{}function P(){try{const R=[...M.values()].map(z=>z.source).filter(z=>z.type==="country"||z.type==="simple"||z.type==="url").slice(-60);localStorage.setItem(Ka,JSON.stringify(R))}catch{}}function N(R,z=40,Z=26,re=null){if(R.type==="country")return V("img",{src:`https://flagcdn.com/w80/${R.value}.png`,alt:"",loading:"lazy",width:z,height:Z});const ce=document.createElement("canvas");ce.width=z,ce.height=Z;const ve=ce.getContext("2d");let ye=re;if(R.type==="simple"&&(ye=Do(R.value,40)),ye){const Pe=ye.width,L=ye.height,W=Math.min(z/Pe,Z/L);ve.drawImage(ye,(z-Pe*W)/2,(Z-L*W)/2,Pe*W,L*W)}else ve.fillStyle="#666",ve.fillRect(0,0,z,Z);return ce}const v=V("div",{class:"chips"});function E(){if(v.innerHTML="",M.size===0){v.appendChild(V("span",{class:"muted small"},"Flags you add show up here for quick re-use."));return}for(const[R,z]of[...M.entries()].reverse()){const Z=V("button",{class:"chip",title:`${Ki(z.source)} — click to add again`,onClick:()=>{e.addFlag({...z.source}),h()}},N(z.source,40,26,z.image));Z.addEventListener("contextmenu",re=>{re.preventDefault(),M.delete(R),P(),E()}),v.appendChild(Z)}}function I(R){const z=$a(R.source),Z=M.get(z);if(Z){R.image&&!Z.image&&(Z.image=R.image);return}M.set(z,{source:{...R.source},image:R.image}),P(),E()}const J=V("select",{class:"select",onChange:()=>{e.setLayout(J.value),h()}},...zp.map(R=>ot(R,es[R].label,R===e.layoutId))),K=V("input",{type:"range",min:1.2,max:8,step:.1,value:e.spacing});K.addEventListener("input",()=>e.setSpacing(+K.value)),K.addEventListener("change",h);const O=[["XS",.6],["S",.9],["M",1.2],["L",1.6],["XL",2.2],["XXL",3]],D=V("div",{class:"seg"});function q(){D.innerHTML="";for(const[R,z]of O)D.appendChild(V("button",{class:`seg-btn ${Math.abs(_i.height-z)<1e-6?"active":""}`,title:`${z} m tall`,onClick:()=>{e.setFlagHeight(z),q(),h()}},R))}q();const Q=V("input",{type:"checkbox",checked:""});Q.addEventListener("change",()=>{o=Q.checked});const ee=V("div",{class:"flag-list"}),j=V("div",{class:"detail hidden"});let te=null;function se(R){const z=document.createElement("canvas");z.width=48,z.height=32;const Z=z.getContext("2d");if(R.image){const re=R.image,ce=re.width,ve=re.height,ye=Math.min(48/ce,32/ve);Z.drawImage(re,(48-ce*ye)/2,(32-ve*ye)/2,ce*ye,ve*ye)}else Z.fillStyle=R.status==="error"?"#b33":"#555",Z.fillRect(0,0,48,32);return z}function pe(){ee.innerHTML="",e.count===0&&ee.appendChild(V("p",{class:"muted"},"No flags yet. Search a country or upload an image.")),e.entries.forEach((R,z)=>{const Z=V("div",{class:`flag-row ${R.id===s?"selected":""} ${R.status}`,draggable:"true","data-id":R.id,onClick:()=>k(R.id===s?null:R.id)},V("span",{class:"grip",title:"Drag to reorder"},"⋮⋮"),V("span",{class:"idx"},z+1),se(R),V("span",{class:"name"},Ki(R.source),R.status==="loading"?" …":R.status==="error"?" ⚠":""),V("span",{class:"row-actions"},V("button",{title:"Duplicate",onClick:re=>{re.stopPropagation(),e.duplicateFlag(R.id),h()}},"⧉"),V("button",{title:"Remove",class:"danger",onClick:re=>{re.stopPropagation(),e.removeFlag(R.id),s===R.id&&k(null),h()}},"✕")));R.error&&(Z.title=R.error),Z.addEventListener("dragstart",re=>{te=R.id,Z.classList.add("dragging"),re.dataTransfer.effectAllowed="move",re.dataTransfer.setData("text/plain",String(R.id))}),Z.addEventListener("dragend",()=>{te=null,ee.querySelectorAll(".flag-row").forEach(re=>re.classList.remove("dragging","drop-above","drop-below"))}),Z.addEventListener("dragover",re=>{if(te===null||te===R.id)return;re.preventDefault(),re.dataTransfer.dropEffect="move";const ce=Z.getBoundingClientRect(),ve=re.clientY>ce.top+ce.height/2;Z.classList.toggle("drop-above",!ve),Z.classList.toggle("drop-below",ve)}),Z.addEventListener("dragleave",()=>Z.classList.remove("drop-above","drop-below")),Z.addEventListener("drop",re=>{if(re.preventDefault(),te===null||te===R.id)return;const ce=Z.getBoundingClientRect(),ve=re.clientY>ce.top+ce.height/2,ye=e.entries.findIndex(L=>L.id===te);let Pe=e.entries.findIndex(L=>L.id===R.id)+(ve?1:0);ye<Pe&&Pe--,e.moveTo(te,Pe)}),ee.appendChild(Z)})}function k(R){s=R,e.setSelected(R),pe(),G()}let $=null,oe=null,le=null;function G(){const R=e.getEntry(s);if(j.classList.toggle("hidden",!R),j.innerHTML="",!R)return;const z=R.settings,Z=Pe=>e.updateSettings(R.id,Pe),re=V("select",{class:"select",onChange:()=>Z({hoisting:re.value})},ot(xn.DEXTER,"Pole on left (normal)",z.hoisting===xn.DEXTER),ot(xn.SINISTER,"Pole on right (mirrored)",z.hoisting===xn.SINISTER)),ce=V("select",{class:"select",onChange:()=>Z({orientation:ce.value})},ot(Ae.TOP,"Normal",z.orientation===Ae.TOP),ot(Ae.LEFT,"Rotated 90° right",z.orientation===Ae.LEFT),ot(Ae.RIGHT,"Rotated 90° left",z.orientation===Ae.RIGHT),ot(Ae.BOTTOM,"Rotated 180°",z.orientation===Ae.BOTTOM)),ve=V("select",{class:"select",onChange:()=>{Z({flagpoleType:ve.value}),le.classList.toggle("hidden",ve.value!==Xe.CROSSBAR)}},ot(Xe.VERTICAL,"Vertical pole",z.flagpoleType===Xe.VERTICAL),ot(Xe.HORIZONTAL,"Horizontal pole",z.flagpoleType===Xe.HORIZONTAL),ot(Xe.OUTRIGGER,"Outrigger (angled from wall)",z.flagpoleType===Xe.OUTRIGGER),ot(Xe.CROSSBAR,"Crossbar (hangs from a bar)",z.flagpoleType===Xe.CROSSBAR),ot(Xe.GALLERY,"Gallery (banner on a bar)",z.flagpoleType===Xe.GALLERY)),ye=V("select",{class:"select",onChange:()=>Z({verticalHoisting:ye.value})},ot(Nt.TOP_RIGHT,"Turn flag 90° right",z.verticalHoisting===Nt.TOP_RIGHT),ot(Nt.TOP_LEFT,"Turn flag 90° left",z.verticalHoisting===Nt.TOP_LEFT),ot(Nt.NONE,"Keep upright (hang by top edge)",z.verticalHoisting===Nt.NONE));le=V("div",{class:`hang ${z.flagpoleType===Xe.CROSSBAR?"":"hidden"}`},V("p",{class:"muted small"},"Crossbar hanging: a flag hung from a horizontal bar is normally turned on its side so the hoist edge is at the top (vexillological convention). Pick which way to turn it, or keep it upright."),ye),$=V("h3",{}),oe=V("p",{class:"error hidden"}),j.append($,oe,V("label",{class:"field"},"Pole side",re),V("label",{class:"field"},"Rotation",ce),V("label",{class:"field"},"Pole type",ve),le,V("div",{class:"tool-row"},V("button",{onClick:()=>{e.updateAllSettings({hoisting:z.hoisting,orientation:z.orientation,flagpoleType:z.flagpoleType,verticalHoisting:z.verticalHoisting}),i("Applied to all flags")}},"Apply to all"),V("button",{onClick:()=>{e.duplicateFlag(R.id),h()}},"Duplicate"),V("span",{class:"spacer"}),V("button",{class:"danger",onClick:()=>{e.removeFlag(R.id),k(null),h()}},"Remove"))),Se()}function Se(){const R=e.getEntry(s);!R||!$||($.textContent=`Editing flag ${e.entries.indexOf(R)+1}: ${Ki(R.source)}`,oe.textContent=R.error||"",oe.classList.toggle("hidden",!R.error))}e.on((R,z)=>{R==="add"&&I(z),R==="update"&&z&&I(z),["add","remove","update","reorder","update-all"].includes(R)&&(s!==null&&!e.getEntry(s)&&(s=null,e.setSelected(null),j.classList.add("hidden")),pe(),Se()),R==="settings"&&z&&z.id}),f.append(V("div",{class:"block"},V("h2",{},"Add flags"),m,_,V("div",{class:"tool-row"},V("button",{onClick:()=>S.click()},"Upload image(s)"),V("button",{onClick:()=>T(5)},"🎲 5 random"),S),y,V("p",{class:"muted small"},"Recently used (click to add again, right-click to forget):"),v),V("div",{class:"block"},V("h2",{},"Arrangement"),V("label",{class:"field"},"Layout",J),V("label",{},"Spacing ",K),V("label",{class:"field"},"Flag size",D),V("div",{class:"tool-row"},V("button",{onClick:()=>t.frame(e.bounds)},"Frame all"),V("label",{class:"row"},Q," auto-frame"),V("span",{class:"spacer"}),V("button",{class:"danger",onClick:()=>{e.clear(),k(null)}},"Clear all"))),V("div",{class:"block"},V("h2",{},"Your flags"),V("p",{class:"muted small"},"Click a flag to edit it. Drag rows to reorder."),ee,j)),pe(),E();const ge=c.wind,me=V("input",{type:"range",min:0,max:30,step:.5,value:e.windSpeed}),de=V("span",{class:"val"},`${e.windSpeed} m/s`);me.addEventListener("input",()=>{e.setWind({speed:+me.value}),de.textContent=`${me.value} m/s`});const Ie=V("input",{type:"range",min:-180,max:180,step:5,value:e.windAngle}),we=V("span",{class:"val"},`${e.windAngle}°`);Ie.addEventListener("input",()=>{e.setWind({angle:+Ie.value}),we.textContent=`${Ie.value}°`});const xe=V("label",{},"Direction ",Ie,we),We=V("select",{class:"select",onChange:()=>{e.setWind({mode:We.value}),xe.classList.toggle("disabled",We.value==="natural")}},ot("natural","Natural — wandering direction, varying speed (FlagWaver default)",e.windMode==="natural"),ot("gusty","Gusty — fixed direction, turbulent",e.windMode==="gusty"),ot("steady","Steady — fixed direction, constant",e.windMode==="steady"));xe.classList.toggle("disabled",e.windMode==="natural");const Ye=V("input",{type:"checkbox"}),Ve=V("input",{type:"range",min:.5,max:5,step:.1,value:e.gust.strength}),Je=V("input",{type:"range",min:1.5,max:12,step:.5,value:e.gust.period}),Ge=V("input",{type:"range",min:.8,max:8,step:.2,value:e.gust.width});Ye.addEventListener("change",()=>e.setGust({enabled:Ye.checked})),Ve.addEventListener("input",()=>e.setGust({strength:+Ve.value})),Je.addEventListener("input",()=>e.setGust({period:+Je.value})),Ge.addEventListener("input",()=>e.setGust({width:+Ge.value}));const Le=V("button",{class:"btn-primary"},"🎤 Blow into mic"),mt=V("div",{class:"meter"},V("div",{class:"meter-fill"})),it=V("input",{type:"range",min:5,max:40,step:1,value:n.gain});it.addEventListener("input",()=>{n.gain=+it.value}),Le.addEventListener("click",async()=>{if(n.active){n.stop(),Le.textContent="🎤 Blow into mic",Le.classList.remove("live");return}try{await n.start(),Le.textContent="■ Stop mic",Le.classList.add("live"),i("Mic on — blow or shout to make wind")}catch{i("Microphone access denied or unavailable","error")}}),function R(){mt.firstChild.style.width=`${Math.round(n.level*100)}%`,requestAnimationFrame(R)}(),ge.append(V("div",{class:"block"},V("h2",{},"Wind"),V("label",{class:"field"},"Mode",We),V("label",{},"Speed ",me,de),xe),V("div",{class:"block"},V("h2",{},"Travelling gust"),V("p",{class:"muted small"},"A pulse of wind sweeps along the line of flags so they ripple one after another."),V("label",{class:"row"},Ye," Enable gust sweep"),V("label",{},"Strength ",Ve),V("label",{},"Period (s) ",Je),V("label",{},"Width (m) ",Ge)),V("div",{class:"block"},V("h2",{},"Lung power"),V("p",{class:"muted small"},"Uses your microphone loudness as wind. Nothing is recorded."),Le,mt,V("label",{},"Mic gain ",it)));const w=c.scene,x=V("div",{class:"presets"});for(const R of Ip)x.appendChild(V("button",{class:`preset-btn ${R===t.presetId?"active":""}`,"data-id":R,onClick:()=>{t.applyPreset(R),x.querySelectorAll(".preset-btn").forEach(z=>z.classList.toggle("active",z.dataset.id===R))}},V("span",{class:"swatch-bg",style:`background:${vn[R].css}`}),vn[R].label));const H=V("input",{type:"checkbox",checked:""});H.addEventListener("change",()=>t.setGroundVisible(H.checked));const ne=V("button",{onClick:()=>ae()},"⏸ Pause");function ae(){t.setPaused(!t.paused),ne.textContent=t.paused?"▶ Play":"⏸ Pause"}const he=V("input",{type:"range",min:.1,max:2,step:.05,value:1});he.addEventListener("input",()=>{t.timeScale=+he.value});const be=V("button",{onClick:()=>{const R=V("a",{href:t.screenshot(),download:`flagwaverplus-${Date.now()}.png`});document.body.appendChild(R),R.click(),R.remove()}},"📷 Screenshot");w.append(V("div",{class:"block"},V("h2",{},"Sky & light"),x,V("label",{class:"row"},H," Show ground")),V("div",{class:"block"},V("h2",{},"Time"),V("div",{class:"tool-row"},ne,V("button",{onClick:()=>e.resetCloth()},"Reset cloth")),V("label",{},"Speed ",he)),V("div",{class:"block"},V("h2",{},"Export"),be,V("p",{class:"muted small"},"Drag to orbit, scroll to zoom, right-drag to pan. Space pauses, Tab hides this panel.")));const A=V("input",{type:"text",readonly:"",class:"search"}),F=V("button",{class:"btn-primary",onClick:async()=>{const R=Kp(e.toJSON());A.value=R;try{await navigator.clipboard.writeText(R),i("Link copied")}catch{i("Link ready — copy it from the box")}const z=e.entries.filter(Z=>Z.source.type==="upload").length;z&&i(`${z} uploaded flag(s) can't be shared by link`,"warn",4500)}},"🔗 Copy share link");return c.share.append(V("div",{class:"block"},V("h2",{},"Share this scene"),V("p",{class:"muted small"},"Encodes countries, offline flags, image URLs, layout and wind into the URL. Uploaded images stay on your machine."),F,A),V("div",{class:"block about"},V("h2",{},"About"),V("p",{},"Cloth simulation from ",V("a",{href:"https://github.com/krikienoid/flagwaver",target:"_blank",rel:"noopener"},"FlagWaver")," by krikienoid (MIT). Country images from ",V("a",{href:"https://flagcdn.com",target:"_blank",rel:"noopener"},"flagcdn.com"),"."),V("p",{},V("a",{href:"../../"},"← codegrox.github.io")," · ",V("a",{href:"https://github.com/codegrox/codegrox.github.io/tree/main/projects/FlagWaverPlus",target:"_blank",rel:"noopener"},"source")))),window.addEventListener("keydown",R=>{R.target.matches("input, textarea, select")||(R.code==="Space"&&(R.preventDefault(),ae()),R.code==="Tab"&&(R.preventDefault(),r.classList.toggle("collapsed")),R.code==="Escape"&&k(null))}),{showTab:u,select:k,renderList:pe}}function em(r){return function(t,n="info",i=3200){const s=document.createElement("div");s.className=`toast toast-${n}`,s.textContent=t,r.appendChild(s),requestAnimationFrame(()=>s.classList.add("show")),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},i)}}const tm=document.getElementById("stage"),ir=document.getElementById("panel"),Io=em(document.getElementById("toasts")),ri=new Up(tm);ri.obstructionLeft=()=>window.innerWidth>720&&!ir.classList.contains("collapsed")?ir.offsetWidth+24:0;const Cn=new Xp(ri),xr=new qp;ri.onUpdate(()=>{Cn.externalGain=xr.extraSpeed});Cn.on((r,e)=>{r==="error"&&Io(e.message,"error",4500)});Qp(ir,{manager:Cn,world:ri,mic:xr,toast:Io});const js=Jp();if(js&&Array.isArray(js.flags))Cn.fromJSON(js);else for(const r of["armenia","ukraine","japan","italy","sweden"])Cn.addFlag({type:"simple",value:r});setTimeout(()=>ri.frame(Cn.bounds,!1),60);window.flagwaverplus={world:ri,manager:Cn,mic:xr};
