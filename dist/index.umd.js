!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("three")):"function"==typeof define&&define.amd?define(["exports","three"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.three={}),t.THREE)}(this,(function(t,e){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={exports:{}},o=function(t){return t&&t.Math===Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r&&r)||o("object"==typeof r&&r)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},c=!u((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),s=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),f=s,l=Function.prototype.call,y=f?l.bind(l):function(){return l.apply(l,arguments)},h={},p={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,d=g&&!p.call({1:2},1);h.f=d?function(t){var e=g(this,t);return!!e&&e.enumerable}:p;var v,b,w=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=s,A=Function.prototype,S=A.call,O=m&&A.bind.bind(S,S),T=m?O:function(t){return function(){return S.apply(t,arguments)}},L=T,E=L({}.toString),I=L("".slice),R=function(t){return I(E(t),8,-1)},M=u,j=R,x=Object,P=T("".split),_=M((function(){return!x("z").propertyIsEnumerable(0)}))?function(t){return"String"===j(t)?P(t,""):x(t)}:x,F=function(t){return null==t},C=F,U=TypeError,D=function(t){if(C(t))throw new U("Can't call method on "+t);return t},V=_,B=D,N=function(t){return V(B(t))},k="object"==typeof document&&document.all,G=void 0===k&&void 0!==k?function(t){return"function"==typeof t||t===k}:function(t){return"function"==typeof t},W=G,Y=function(t){return"object"==typeof t?null!==t:W(t)},z=i,q=G,H=function(t,e){return arguments.length<2?(r=z[t],q(r)?r:void 0):z[t]&&z[t][e];var r},Q=T({}.isPrototypeOf),X="undefined"!=typeof navigator&&String(navigator.userAgent)||"",J=i,Z=X,K=J.process,$=J.Deno,tt=K&&K.versions||$&&$.version,et=tt&&tt.v8;et&&(b=(v=et.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!b&&Z&&(!(v=Z.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=Z.match(/Chrome\/(\d+)/))&&(b=+v[1]);var rt=b,nt=rt,ot=u,it=i.String,at=!!Object.getOwnPropertySymbols&&!ot((function(){var t=Symbol("symbol detection");return!it(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),ut=at&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ct=H,st=G,ft=Q,lt=Object,yt=ut?function(t){return"symbol"==typeof t}:function(t){var e=ct("Symbol");return st(e)&&ft(e.prototype,lt(t))},ht=String,pt=function(t){try{return ht(t)}catch(t){return"Object"}},gt=G,dt=pt,vt=TypeError,bt=function(t){if(gt(t))return t;throw new vt(dt(t)+" is not a function")},wt=bt,mt=F,At=function(t,e){var r=t[e];return mt(r)?void 0:wt(r)},St=y,Ot=G,Tt=Y,Lt=TypeError,Et={exports:{}},It=i,Rt=Object.defineProperty,Mt=function(t,e){try{Rt(It,t,{value:e,configurable:!0,writable:!0})}catch(r){It[t]=e}return e},jt=Mt,xt="__core-js_shared__",Pt=i[xt]||jt(xt,{}),_t=Pt;(Et.exports=function(t,e){return _t[t]||(_t[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.35.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ft=Et.exports,Ct=D,Ut=Object,Dt=function(t){return Ut(Ct(t))},Vt=Dt,Bt=T({}.hasOwnProperty),Nt=Object.hasOwn||function(t,e){return Bt(Vt(t),e)},kt=T,Gt=0,Wt=Math.random(),Yt=kt(1..toString),zt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Yt(++Gt+Wt,36)},qt=Ft,Ht=Nt,Qt=zt,Xt=at,Jt=ut,Zt=i.Symbol,Kt=qt("wks"),$t=Jt?Zt.for||Zt:Zt&&Zt.withoutSetter||Qt,te=function(t){return Ht(Kt,t)||(Kt[t]=Xt&&Ht(Zt,t)?Zt[t]:$t("Symbol."+t)),Kt[t]},ee=y,re=Y,ne=yt,oe=At,ie=function(t,e){var r,n;if("string"===e&&Ot(r=t.toString)&&!Tt(n=St(r,t)))return n;if(Ot(r=t.valueOf)&&!Tt(n=St(r,t)))return n;if("string"!==e&&Ot(r=t.toString)&&!Tt(n=St(r,t)))return n;throw new Lt("Can't convert object to primitive value")},ae=TypeError,ue=te("toPrimitive"),ce=function(t,e){if(!re(t)||ne(t))return t;var r,n=oe(t,ue);if(n){if(void 0===e&&(e="default"),r=ee(n,t,e),!re(r)||ne(r))return r;throw new ae("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},se=ce,fe=yt,le=function(t){var e=se(t,"string");return fe(e)?e:e+""},ye=Y,he=i.document,pe=ye(he)&&ye(he.createElement),ge=function(t){return pe?he.createElement(t):{}},de=ge,ve=!c&&!u((function(){return 7!==Object.defineProperty(de("div"),"a",{get:function(){return 7}}).a})),be=c,we=y,me=h,Ae=w,Se=N,Oe=le,Te=Nt,Le=ve,Ee=Object.getOwnPropertyDescriptor;a.f=be?Ee:function(t,e){if(t=Se(t),e=Oe(e),Le)try{return Ee(t,e)}catch(t){}if(Te(t,e))return Ae(!we(me.f,t,e),t[e])};var Ie={},Re=c&&u((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Me=Y,je=String,xe=TypeError,Pe=function(t){if(Me(t))return t;throw new xe(je(t)+" is not an object")},_e=c,Fe=ve,Ce=Re,Ue=Pe,De=le,Ve=TypeError,Be=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,ke="enumerable",Ge="configurable",We="writable";Ie.f=_e?Ce?function(t,e,r){if(Ue(t),e=De(e),Ue(r),"function"==typeof t&&"prototype"===e&&"value"in r&&We in r&&!r[We]){var n=Ne(t,e);n&&n[We]&&(t[e]=r.value,r={configurable:Ge in r?r[Ge]:n[Ge],enumerable:ke in r?r[ke]:n[ke],writable:!1})}return Be(t,e,r)}:Be:function(t,e,r){if(Ue(t),e=De(e),Ue(r),Fe)try{return Be(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new Ve("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Ye=Ie,ze=w,qe=c?function(t,e,r){return Ye.f(t,e,ze(1,r))}:function(t,e,r){return t[e]=r,t},He={exports:{}},Qe=c,Xe=Nt,Je=Function.prototype,Ze=Qe&&Object.getOwnPropertyDescriptor,Ke=Xe(Je,"name"),$e={EXISTS:Ke,PROPER:Ke&&"something"===function(){}.name,CONFIGURABLE:Ke&&(!Qe||Qe&&Ze(Je,"name").configurable)},tr=G,er=Pt,rr=T(Function.toString);tr(er.inspectSource)||(er.inspectSource=function(t){return rr(t)});var nr,or,ir,ar=er.inspectSource,ur=G,cr=i.WeakMap,sr=ur(cr)&&/native code/.test(String(cr)),fr=zt,lr=Ft("keys"),yr=function(t){return lr[t]||(lr[t]=fr(t))},hr={},pr=sr,gr=i,dr=Y,vr=qe,br=Nt,wr=Pt,mr=yr,Ar=hr,Sr="Object already initialized",Or=gr.TypeError,Tr=gr.WeakMap;if(pr||wr.state){var Lr=wr.state||(wr.state=new Tr);Lr.get=Lr.get,Lr.has=Lr.has,Lr.set=Lr.set,nr=function(t,e){if(Lr.has(t))throw new Or(Sr);return e.facade=t,Lr.set(t,e),e},or=function(t){return Lr.get(t)||{}},ir=function(t){return Lr.has(t)}}else{var Er=mr("state");Ar[Er]=!0,nr=function(t,e){if(br(t,Er))throw new Or(Sr);return e.facade=t,vr(t,Er,e),e},or=function(t){return br(t,Er)?t[Er]:{}},ir=function(t){return br(t,Er)}}var Ir={set:nr,get:or,has:ir,enforce:function(t){return ir(t)?or(t):nr(t,{})},getterFor:function(t){return function(e){var r;if(!dr(e)||(r=or(e)).type!==t)throw new Or("Incompatible receiver, "+t+" required");return r}}},Rr=T,Mr=u,jr=G,xr=Nt,Pr=c,_r=$e.CONFIGURABLE,Fr=ar,Cr=Ir.enforce,Ur=Ir.get,Dr=String,Vr=Object.defineProperty,Br=Rr("".slice),Nr=Rr("".replace),kr=Rr([].join),Gr=Pr&&!Mr((function(){return 8!==Vr((function(){}),"length",{value:8}).length})),Wr=String(String).split("String"),Yr=He.exports=function(t,e,r){"Symbol("===Br(Dr(e),0,7)&&(e="["+Nr(Dr(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!xr(t,"name")||_r&&t.name!==e)&&(Pr?Vr(t,"name",{value:e,configurable:!0}):t.name=e),Gr&&r&&xr(r,"arity")&&t.length!==r.arity&&Vr(t,"length",{value:r.arity});try{r&&xr(r,"constructor")&&r.constructor?Pr&&Vr(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=Cr(t);return xr(n,"source")||(n.source=kr(Wr,"string"==typeof e?e:"")),t};Function.prototype.toString=Yr((function(){return jr(this)&&Ur(this).source||Fr(this)}),"toString");var zr=He.exports,qr=G,Hr=Ie,Qr=zr,Xr=Mt,Jr=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(qr(r)&&Qr(r,i,n),n.global)o?t[e]=r:Xr(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:Hr.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},Zr={},Kr=Math.ceil,$r=Math.floor,tn=Math.trunc||function(t){var e=+t;return(e>0?$r:Kr)(e)},en=function(t){var e=+t;return e!=e||0===e?0:tn(e)},rn=en,nn=Math.max,on=Math.min,an=function(t,e){var r=rn(t);return r<0?nn(r+e,0):on(r,e)},un=en,cn=Math.min,sn=function(t){return t>0?cn(un(t),9007199254740991):0},fn=sn,ln=function(t){return fn(t.length)},yn=N,hn=an,pn=ln,gn=function(t){return function(e,r,n){var o,i=yn(e),a=pn(i),u=hn(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},dn={includes:gn(!0),indexOf:gn(!1)},vn=Nt,bn=N,wn=dn.indexOf,mn=hr,An=T([].push),Sn=function(t,e){var r,n=bn(t),o=0,i=[];for(r in n)!vn(mn,r)&&vn(n,r)&&An(i,r);for(;e.length>o;)vn(n,r=e[o++])&&(~wn(i,r)||An(i,r));return i},On=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Tn=Sn,Ln=On.concat("length","prototype");Zr.f=Object.getOwnPropertyNames||function(t){return Tn(t,Ln)};var En={};En.f=Object.getOwnPropertySymbols;var In=H,Rn=Zr,Mn=En,jn=Pe,xn=T([].concat),Pn=In("Reflect","ownKeys")||function(t){var e=Rn.f(jn(t)),r=Mn.f;return r?xn(e,r(t)):e},_n=Nt,Fn=Pn,Cn=a,Un=Ie,Dn=function(t,e,r){for(var n=Fn(e),o=Un.f,i=Cn.f,a=0;a<n.length;a++){var u=n[a];_n(t,u)||r&&_n(r,u)||o(t,u,i(e,u))}},Vn=u,Bn=G,Nn=/#|\.prototype\./,kn=function(t,e){var r=Wn[Gn(t)];return r===zn||r!==Yn&&(Bn(e)?Vn(e):!!e)},Gn=kn.normalize=function(t){return String(t).replace(Nn,".").toLowerCase()},Wn=kn.data={},Yn=kn.NATIVE="N",zn=kn.POLYFILL="P",qn=kn,Hn=i,Qn=a.f,Xn=qe,Jn=Jr,Zn=Mt,Kn=Dn,$n=qn,to=function(t,e){var r,n,o,i,a,u=t.target,c=t.global,s=t.stat;if(r=c?Hn:s?Hn[u]||Zn(u,{}):(Hn[u]||{}).prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(a=Qn(r,n))&&a.value:r[n],!$n(c?n:u+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Kn(i,o)}(t.sham||o&&o.sham)&&Xn(i,"sham",!0),Jn(r,n,i,t)}},eo=te("iterator"),ro=!1;try{var no=0,oo={next:function(){return{done:!!no++}},return:function(){ro=!0}};oo[eo]=function(){return this},Array.from(oo,(function(){throw 2}))}catch(t){}var io="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,ao={};ao[te("toStringTag")]="z";var uo,co,so,fo="[object z]"===String(ao),lo=G,yo=R,ho=te("toStringTag"),po=Object,go="Arguments"===yo(function(){return arguments}()),vo=fo?yo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=po(t),ho))?r:go?yo(e):"Object"===(n=yo(e))&&lo(e.callee)?"Arguments":n},bo=zr,wo=Ie,mo=function(t,e,r){return r.get&&bo(r.get,e,{getter:!0}),r.set&&bo(r.set,e,{setter:!0}),wo.f(t,e,r)},Ao=!u((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),So=Nt,Oo=G,To=Dt,Lo=Ao,Eo=yr("IE_PROTO"),Io=Object,Ro=Io.prototype,Mo=Lo?Io.getPrototypeOf:function(t){var e=To(t);if(So(e,Eo))return e[Eo];var r=e.constructor;return Oo(r)&&e instanceof r?r.prototype:e instanceof Io?Ro:null},jo=T,xo=bt,Po=Y,_o=function(t){return Po(t)||null===t},Fo=String,Co=TypeError,Uo=function(t,e,r){try{return jo(xo(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},Do=Pe,Vo=function(t){if(_o(t))return t;throw new Co("Can't set "+Fo(t)+" as a prototype")},Bo=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Uo(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Do(r),Vo(n),e?t(r,n):r.__proto__=n,r}}():void 0),No=io,ko=c,Go=i,Wo=G,Yo=Y,zo=Nt,qo=vo,Ho=pt,Qo=qe,Xo=Jr,Jo=mo,Zo=Q,Ko=Mo,$o=Bo,ti=te,ei=zt,ri=Ir.enforce,ni=Ir.get,oi=Go.Int8Array,ii=oi&&oi.prototype,ai=Go.Uint8ClampedArray,ui=ai&&ai.prototype,ci=oi&&Ko(oi),si=ii&&Ko(ii),fi=Object.prototype,li=Go.TypeError,yi=ti("toStringTag"),hi=ei("TYPED_ARRAY_TAG"),pi="TypedArrayConstructor",gi=No&&!!$o&&"Opera"!==qo(Go.opera),di=!1,vi={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},bi={BigInt64Array:8,BigUint64Array:8},wi=function(t){var e=Ko(t);if(Yo(e)){var r=ni(e);return r&&zo(r,pi)?r[pi]:wi(e)}},mi=function(t){if(!Yo(t))return!1;var e=qo(t);return zo(vi,e)||zo(bi,e)};for(uo in vi)(so=(co=Go[uo])&&co.prototype)?ri(so)[pi]=co:gi=!1;for(uo in bi)(so=(co=Go[uo])&&co.prototype)&&(ri(so)[pi]=co);if((!gi||!Wo(ci)||ci===Function.prototype)&&(ci=function(){throw new li("Incorrect invocation")},gi))for(uo in vi)Go[uo]&&$o(Go[uo],ci);if((!gi||!si||si===fi)&&(si=ci.prototype,gi))for(uo in vi)Go[uo]&&$o(Go[uo].prototype,si);if(gi&&Ko(ui)!==si&&$o(ui,si),ko&&!zo(si,yi))for(uo in di=!0,Jo(si,yi,{configurable:!0,get:function(){return Yo(this)?this[hi]:void 0}}),vi)Go[uo]&&Qo(Go[uo],hi,uo);var Ai={NATIVE_ARRAY_BUFFER_VIEWS:gi,TYPED_ARRAY_TAG:di&&hi,aTypedArray:function(t){if(mi(t))return t;throw new li("Target is not a typed array")},aTypedArrayConstructor:function(t){if(Wo(t)&&(!$o||Zo(ci,t)))return t;throw new li(Ho(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,e,r,n){if(ko){if(r)for(var o in vi){var i=Go[o];if(i&&zo(i.prototype,t))try{delete i.prototype[t]}catch(r){try{i.prototype[t]=e}catch(t){}}}si[t]&&!r||Xo(si,t,r?e:gi&&ii[t]||e,n)}},exportTypedArrayStaticMethod:function(t,e,r){var n,o;if(ko){if($o){if(r)for(n in vi)if((o=Go[n])&&zo(o,t))try{delete o[t]}catch(t){}if(ci[t]&&!r)return;try{return Xo(ci,t,r?e:gi&&ci[t]||e)}catch(t){}}for(n in vi)!(o=Go[n])||o[t]&&!r||Xo(o,t,e)}},getTypedArrayConstructor:wi,isView:function(t){if(!Yo(t))return!1;var e=qo(t);return"DataView"===e||zo(vi,e)||zo(bi,e)},isTypedArray:mi,TypedArray:ci,TypedArrayPrototype:si},Si=i,Oi=u,Ti=function(t,e){try{if(!e&&!ro)return!1}catch(t){return!1}var r=!1;try{var n={};n[eo]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},Li=Ai.NATIVE_ARRAY_BUFFER_VIEWS,Ei=Si.ArrayBuffer,Ii=Si.Int8Array,Ri=!Li||!Oi((function(){Ii(1)}))||!Oi((function(){new Ii(-1)}))||!Ti((function(t){new Ii,new Ii(null),new Ii(1.5),new Ii(t)}),!0)||Oi((function(){return 1!==new Ii(new Ei(2),1,void 0).length})),Mi=Jr,ji=Q,xi=TypeError,Pi=function(t,e){if(ji(e,t))return t;throw new xi("Incorrect invocation")},_i=en,Fi=sn,Ci=RangeError,Ui=function(t){if(void 0===t)return 0;var e=_i(t),r=Fi(e);if(e!==r)throw new Ci("Wrong length or index");return r},Di=Math.sign||function(t){var e=+t;return 0===e||e!=e?e:e<0?-1:1},Vi=Math.abs,Bi=2220446049250313e-31,Ni=1/Bi,ki=function(t,e,r,n){var o=+t,i=Vi(o),a=Di(o);if(i<n)return a*function(t){return t+Ni-Ni}(i/n/e)*n*e;var u=(1+e/Bi)*i,c=u-(u-i);return c>r||c!=c?a*(1/0):a*c},Gi=Math.fround||function(t){return ki(t,1.1920928955078125e-7,34028234663852886e22,11754943508222875e-54)},Wi=Array,Yi=Math.abs,zi=Math.pow,qi=Math.floor,Hi=Math.log,Qi=Math.LN2,Xi={pack:function(t,e,r){var n,o,i,a=Wi(r),u=8*r-e-1,c=(1<<u)-1,s=c>>1,f=23===e?zi(2,-24)-zi(2,-77):0,l=t<0||0===t&&1/t<0?1:0,y=0;for((t=Yi(t))!=t||t===1/0?(o=t!=t?1:0,n=c):(n=qi(Hi(t)/Qi),t*(i=zi(2,-n))<1&&(n--,i*=2),(t+=n+s>=1?f/i:f*zi(2,1-s))*i>=2&&(n++,i/=2),n+s>=c?(o=0,n=c):n+s>=1?(o=(t*i-1)*zi(2,e),n+=s):(o=t*zi(2,s-1)*zi(2,e),n=0));e>=8;)a[y++]=255&o,o/=256,e-=8;for(n=n<<e|o,u+=e;u>0;)a[y++]=255&n,n/=256,u-=8;return a[--y]|=128*l,a},unpack:function(t,e){var r,n=t.length,o=8*n-e-1,i=(1<<o)-1,a=i>>1,u=o-7,c=n-1,s=t[c--],f=127&s;for(s>>=7;u>0;)f=256*f+t[c--],u-=8;for(r=f&(1<<-u)-1,f>>=-u,u+=e;u>0;)r=256*r+t[c--],u-=8;if(0===f)f=1-a;else{if(f===i)return r?NaN:s?-1/0:1/0;r+=zi(2,e),f-=a}return(s?-1:1)*r*zi(2,f-e)}},Ji=Dt,Zi=an,Ki=ln,$i=function(t){for(var e=Ji(this),r=Ki(e),n=arguments.length,o=Zi(n>1?arguments[1]:void 0,r),i=n>2?arguments[2]:void 0,a=void 0===i?r:Zi(i,r);a>o;)e[o++]=t;return e},ta=T([].slice),ea=G,ra=Y,na=Bo,oa=function(t,e,r){var n,o;return na&&ea(n=e.constructor)&&n!==r&&ra(o=n.prototype)&&o!==r.prototype&&na(t,o),t},ia=Ie.f,aa=Nt,ua=te("toStringTag"),ca=function(t,e,r){t&&!r&&(t=t.prototype),t&&!aa(t,ua)&&ia(t,ua,{configurable:!0,value:e})},sa=i,fa=T,la=c,ya=io,ha=qe,pa=mo,ga=function(t,e,r){for(var n in e)Mi(t,n,e[n],r);return t},da=u,va=Pi,ba=en,wa=sn,ma=Ui,Aa=Gi,Sa=Xi,Oa=Mo,Ta=Bo,La=$i,Ea=ta,Ia=oa,Ra=Dn,Ma=ca,ja=Ir,xa=$e.PROPER,Pa=$e.CONFIGURABLE,_a="ArrayBuffer",Fa="DataView",Ca="prototype",Ua="Wrong index",Da=ja.getterFor(_a),Va=ja.getterFor(Fa),Ba=ja.set,Na=sa[_a],ka=Na,Ga=ka&&ka[Ca],Wa=sa[Fa],Ya=Wa&&Wa[Ca],za=Object.prototype,qa=sa.Array,Ha=sa.RangeError,Qa=fa(La),Xa=fa([].reverse),Ja=Sa.pack,Za=Sa.unpack,Ka=function(t){return[255&t]},$a=function(t){return[255&t,t>>8&255]},tu=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},eu=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},ru=function(t){return Ja(Aa(t),23,4)},nu=function(t){return Ja(t,52,8)},ou=function(t,e,r){pa(t[Ca],e,{configurable:!0,get:function(){return r(this)[e]}})},iu=function(t,e,r,n){var o=Va(t),i=ma(r),a=!!n;if(i+e>o.byteLength)throw new Ha(Ua);var u=o.bytes,c=i+o.byteOffset,s=Ea(u,c,c+e);return a?s:Xa(s)},au=function(t,e,r,n,o,i){var a=Va(t),u=ma(r),c=n(+o),s=!!i;if(u+e>a.byteLength)throw new Ha(Ua);for(var f=a.bytes,l=u+a.byteOffset,y=0;y<e;y++)f[l+y]=c[s?y:e-y-1]};if(ya){var uu=xa&&Na.name!==_a;da((function(){Na(1)}))&&da((function(){new Na(-1)}))&&!da((function(){return new Na,new Na(1.5),new Na(NaN),1!==Na.length||uu&&!Pa}))?uu&&Pa&&ha(Na,"name",_a):((ka=function(t){return va(this,Ga),Ia(new Na(ma(t)),this,ka)})[Ca]=Ga,Ga.constructor=ka,Ra(ka,Na)),Ta&&Oa(Ya)!==za&&Ta(Ya,za);var cu=new Wa(new ka(2)),su=fa(Ya.setInt8);cu.setInt8(0,2147483648),cu.setInt8(1,2147483649),!cu.getInt8(0)&&cu.getInt8(1)||ga(Ya,{setInt8:function(t,e){su(this,t,e<<24>>24)},setUint8:function(t,e){su(this,t,e<<24>>24)}},{unsafe:!0})}else Ga=(ka=function(t){va(this,Ga);var e=ma(t);Ba(this,{type:_a,bytes:Qa(qa(e),0),byteLength:e}),la||(this.byteLength=e,this.detached=!1)})[Ca],Ya=(Wa=function(t,e,r){va(this,Ya),va(t,Ga);var n=Da(t),o=n.byteLength,i=ba(e);if(i<0||i>o)throw new Ha("Wrong offset");if(i+(r=void 0===r?o-i:wa(r))>o)throw new Ha("Wrong length");Ba(this,{type:Fa,buffer:t,byteLength:r,byteOffset:i,bytes:n.bytes}),la||(this.buffer=t,this.byteLength=r,this.byteOffset=i)})[Ca],la&&(ou(ka,"byteLength",Da),ou(Wa,"buffer",Va),ou(Wa,"byteLength",Va),ou(Wa,"byteOffset",Va)),ga(Ya,{getInt8:function(t){return iu(this,1,t)[0]<<24>>24},getUint8:function(t){return iu(this,1,t)[0]},getInt16:function(t){var e=iu(this,2,t,arguments.length>1&&arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=iu(this,2,t,arguments.length>1&&arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return eu(iu(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t){return eu(iu(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t){return Za(iu(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t){return Za(iu(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,e){au(this,1,t,Ka,e)},setUint8:function(t,e){au(this,1,t,Ka,e)},setInt16:function(t,e){au(this,2,t,$a,e,arguments.length>2&&arguments[2])},setUint16:function(t,e){au(this,2,t,$a,e,arguments.length>2&&arguments[2])},setInt32:function(t,e){au(this,4,t,tu,e,arguments.length>2&&arguments[2])},setUint32:function(t,e){au(this,4,t,tu,e,arguments.length>2&&arguments[2])},setFloat32:function(t,e){au(this,4,t,ru,e,arguments.length>2&&arguments[2])},setFloat64:function(t,e){au(this,8,t,nu,e,arguments.length>2&&arguments[2])}});Ma(ka,_a),Ma(Wa,Fa);var fu={ArrayBuffer:ka,DataView:Wa},lu=Y,yu=Math.floor,hu=Number.isInteger||function(t){return!lu(t)&&isFinite(t)&&yu(t)===t},pu=en,gu=RangeError,du=function(t){var e=pu(t);if(e<0)throw new gu("The argument can't be less than 0");return e},vu=RangeError,bu=function(t,e){var r=du(t);if(r%e)throw new vu("Wrong offset");return r},wu=Math.round,mu={},Au=Sn,Su=On,Ou=Object.keys||function(t){return Au(t,Su)},Tu=c,Lu=Re,Eu=Ie,Iu=Pe,Ru=N,Mu=Ou;mu.f=Tu&&!Lu?Object.defineProperties:function(t,e){Iu(t);for(var r,n=Ru(e),o=Mu(e),i=o.length,a=0;i>a;)Eu.f(t,r=o[a++],n[r]);return t};var ju,xu=H("document","documentElement"),Pu=Pe,_u=mu,Fu=On,Cu=hr,Uu=xu,Du=ge,Vu="prototype",Bu="script",Nu=yr("IE_PROTO"),ku=function(){},Gu=function(t){return"<"+Bu+">"+t+"</"+Bu+">"},Wu=function(t){t.write(Gu("")),t.close();var e=t.parentWindow.Object;return t=null,e},Yu=function(){try{ju=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Yu="undefined"!=typeof document?document.domain&&ju?Wu(ju):(e=Du("iframe"),r="java"+Bu+":",e.style.display="none",Uu.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Gu("document.F=Object")),t.close(),t.F):Wu(ju);for(var n=Fu.length;n--;)delete Yu[Vu][Fu[n]];return Yu()};Cu[Nu]=!0;var zu=Object.create||function(t,e){var r;return null!==t?(ku[Vu]=Pu(t),r=new ku,ku[Vu]=null,r[Nu]=t):r=Yu(),void 0===e?r:_u.f(r,e)},qu=R,Hu=T,Qu=function(t){if("Function"===qu(t))return Hu(t)},Xu=bt,Ju=s,Zu=Qu(Qu.bind),Ku=function(t,e){return Xu(t),void 0===e?t:Ju?Zu(t,e):function(){return t.apply(e,arguments)}},$u=T,tc=u,ec=G,rc=vo,nc=ar,oc=function(){},ic=[],ac=H("Reflect","construct"),uc=/^\s*(?:class|function)\b/,cc=$u(uc.exec),sc=!uc.test(oc),fc=function(t){if(!ec(t))return!1;try{return ac(oc,ic,t),!0}catch(t){return!1}},lc=function(t){if(!ec(t))return!1;switch(rc(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return sc||!!cc(uc,nc(t))}catch(t){return!0}};lc.sham=!0;var yc=!ac||tc((function(){var t;return fc(fc.call)||!fc(Object)||!fc((function(){t=!0}))||t}))?lc:fc,hc=yc,pc=pt,gc=TypeError,dc={},vc=vo,bc=At,wc=F,mc=dc,Ac=te("iterator"),Sc=function(t){if(!wc(t))return bc(t,Ac)||bc(t,"@@iterator")||mc[vc(t)]},Oc=y,Tc=bt,Lc=Pe,Ec=pt,Ic=Sc,Rc=TypeError,Mc=dc,jc=te("iterator"),xc=Array.prototype,Pc=vo,_c=ce,Fc=TypeError,Cc=function(t){var e=_c(t,"number");if("number"==typeof e)throw new Fc("Can't convert number to bigint");return BigInt(e)},Uc=Ku,Dc=y,Vc=function(t){if(hc(t))return t;throw new gc(pc(t)+" is not a constructor")},Bc=Dt,Nc=ln,kc=function(t,e){var r=arguments.length<2?Ic(t):e;if(Tc(r))return Lc(Oc(r,t));throw new Rc(Ec(t)+" is not iterable")},Gc=Sc,Wc=function(t){return void 0!==t&&(Mc.Array===t||xc[jc]===t)},Yc=function(t){var e=Pc(t);return"BigInt64Array"===e||"BigUint64Array"===e},zc=Ai.aTypedArrayConstructor,qc=Cc,Hc=R,Qc=Array.isArray||function(t){return"Array"===Hc(t)},Xc=yc,Jc=Y,Zc=te("species"),Kc=Array,$c=function(t){var e;return Qc(t)&&(e=t.constructor,(Xc(e)&&(e===Kc||Qc(e.prototype))||Jc(e)&&null===(e=e[Zc]))&&(e=void 0)),void 0===e?Kc:e},ts=Ku,es=_,rs=Dt,ns=ln,os=function(t,e){return new($c(t))(0===e?0:e)},is=T([].push),as=function(t){var e=1===t,r=2===t,n=3===t,o=4===t,i=6===t,a=7===t,u=5===t||i;return function(c,s,f,l){for(var y,h,p=rs(c),g=es(p),d=ns(g),v=ts(s,f),b=0,w=l||os,m=e?w(c,d):r||a?w(c,0):void 0;d>b;b++)if((u||b in g)&&(h=v(y=g[b],b,p),t))if(e)m[b]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return b;case 2:is(m,y)}else switch(t){case 4:return!1;case 7:is(m,y)}return i?-1:n||o?o:m}},us={forEach:as(0),map:as(1),filter:as(2),some:as(3),every:as(4),find:as(5),findIndex:as(6),filterReject:as(7)},cs=H,ss=mo,fs=c,ls=te("species"),ys=ln,hs=to,ps=i,gs=y,ds=c,vs=Ri,bs=Ai,ws=fu,ms=Pi,As=w,Ss=qe,Os=hu,Ts=sn,Ls=Ui,Es=bu,Is=function(t){var e=wu(t);return e<0?0:e>255?255:255&e},Rs=le,Ms=Nt,js=vo,xs=Y,Ps=yt,_s=zu,Fs=Q,Cs=Bo,Us=Zr.f,Ds=function(t){var e,r,n,o,i,a,u,c,s=Vc(this),f=Bc(t),l=arguments.length,y=l>1?arguments[1]:void 0,h=void 0!==y,p=Gc(f);if(p&&!Wc(p))for(c=(u=kc(f,p)).next,f=[];!(a=Dc(c,u)).done;)f.push(a.value);for(h&&l>2&&(y=Uc(y,arguments[2])),r=Nc(f),n=new(zc(s))(r),o=Yc(n),e=0;r>e;e++)i=h?y(f[e],e):f[e],n[e]=o?qc(i):+i;return n},Vs=us.forEach,Bs=function(t){var e=cs(t);fs&&e&&!e[ls]&&ss(e,ls,{configurable:!0,get:function(){return this}})},Ns=mo,ks=Ie,Gs=a,Ws=function(t,e,r){for(var n=0,o=arguments.length>2?r:ys(e),i=new t(o);o>n;)i[n]=e[n++];return i},Ys=oa,zs=Ir.get,qs=Ir.set,Hs=Ir.enforce,Qs=ks.f,Xs=Gs.f,Js=ps.RangeError,Zs=ws.ArrayBuffer,Ks=Zs.prototype,$s=ws.DataView,tf=bs.NATIVE_ARRAY_BUFFER_VIEWS,ef=bs.TYPED_ARRAY_TAG,rf=bs.TypedArray,nf=bs.TypedArrayPrototype,of=bs.isTypedArray,af="BYTES_PER_ELEMENT",uf="Wrong length",cf=function(t,e){Ns(t,e,{configurable:!0,get:function(){return zs(this)[e]}})},sf=function(t){var e;return Fs(Ks,t)||"ArrayBuffer"===(e=js(t))||"SharedArrayBuffer"===e},ff=function(t,e){return of(t)&&!Ps(e)&&e in t&&Os(+e)&&e>=0},lf=function(t,e){return e=Rs(e),ff(t,e)?As(2,t[e]):Xs(t,e)},yf=function(t,e,r){return e=Rs(e),!(ff(t,e)&&xs(r)&&Ms(r,"value"))||Ms(r,"get")||Ms(r,"set")||r.configurable||Ms(r,"writable")&&!r.writable||Ms(r,"enumerable")&&!r.enumerable?Qs(t,e,r):(t[e]=r.value,t)};ds?(tf||(Gs.f=lf,ks.f=yf,cf(nf,"buffer"),cf(nf,"byteOffset"),cf(nf,"byteLength"),cf(nf,"length")),hs({target:"Object",stat:!0,forced:!tf},{getOwnPropertyDescriptor:lf,defineProperty:yf}),n.exports=function(t,e,r){var n=t.match(/\d+/)[0]/8,o=t+(r?"Clamped":"")+"Array",i="get"+t,a="set"+t,u=ps[o],c=u,s=c&&c.prototype,f={},l=function(t,e){Qs(t,e,{get:function(){return function(t,e){var r=zs(t);return r.view[i](e*n+r.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,o){var i=zs(t);i.view[a](e*n+i.byteOffset,r?Is(o):o,!0)}(this,e,t)},enumerable:!0})};tf?vs&&(c=e((function(t,e,r,o){return ms(t,s),Ys(xs(e)?sf(e)?void 0!==o?new u(e,Es(r,n),o):void 0!==r?new u(e,Es(r,n)):new u(e):of(e)?Ws(c,e):gs(Ds,c,e):new u(Ls(e)),t,c)})),Cs&&Cs(c,rf),Vs(Us(u),(function(t){t in c||Ss(c,t,u[t])})),c.prototype=s):(c=e((function(t,e,r,o){ms(t,s);var i,a,u,f=0,y=0;if(xs(e)){if(!sf(e))return of(e)?Ws(c,e):gs(Ds,c,e);i=e,y=Es(r,n);var h=e.byteLength;if(void 0===o){if(h%n)throw new Js(uf);if((a=h-y)<0)throw new Js(uf)}else if((a=Ts(o)*n)+y>h)throw new Js(uf);u=a/n}else u=Ls(e),i=new Zs(a=u*n);for(qs(t,{buffer:i,byteOffset:y,byteLength:a,length:u,view:new $s(i)});f<u;)l(t,f++)})),Cs&&Cs(c,rf),s=c.prototype=_s(nf)),s.constructor!==c&&Ss(s,"constructor",c),Hs(s).TypedArrayConstructor=c,ef&&Ss(s,ef,o);var y=c!==u;f[o]=c,hs({global:!0,constructor:!0,forced:y,sham:!tf},f),af in c||Ss(c,af,n),af in s||Ss(s,af,n),Bs(o)}):n.exports=function(){},(0,n.exports)("Float32",(function(t){return function(e,r,n){return t(this,e,r,n)}}));var hf=$i,pf=Cc,gf=vo,df=y,vf=u,bf=Ai.aTypedArray,wf=Ai.exportTypedArrayMethod,mf=T("".slice);wf("fill",(function(t){var e=arguments.length;bf(this);var r="Big"===mf(gf(this),0,3)?pf(t):+t;return df(hf,this,r,e>1?arguments[1]:void 0,e>2?arguments[2]:void 0)}),vf((function(){var t=0;return new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t})));var Af=i,Sf=y,Of=Ai,Tf=ln,Lf=bu,Ef=Dt,If=u,Rf=Af.RangeError,Mf=Af.Int8Array,jf=Mf&&Mf.prototype,xf=jf&&jf.set,Pf=Of.aTypedArray,_f=Of.exportTypedArrayMethod,Ff=!If((function(){var t=new Uint8ClampedArray(2);return Sf(xf,t,{length:1,0:3},1),3!==t[1]})),Cf=Ff&&Of.NATIVE_ARRAY_BUFFER_VIEWS&&If((function(){var t=new Mf(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));_f("set",(function(t){Pf(this);var e=Lf(arguments.length>1?arguments[1]:void 0,1),r=Ef(t);if(Ff)return Sf(xf,this,r,e);var n=this.length,o=Tf(r),i=0;if(o+e>n)throw new Rf("Wrong length");for(;i<o;)this[e+i]=r[i++]}),!Ff||Cf);var Uf=ta,Df=Math.floor,Vf=function(t,e){var r=t.length;if(r<8)for(var n,o,i=1;i<r;){for(o=i,n=t[i];o&&e(t[o-1],n)>0;)t[o]=t[--o];o!==i++&&(t[o]=n)}else for(var a=Df(r/2),u=Vf(Uf(t,0,a),e),c=Vf(Uf(t,a),e),s=u.length,f=c.length,l=0,y=0;l<s||y<f;)t[l+y]=l<s&&y<f?e(u[l],c[y])<=0?u[l++]:c[y++]:l<s?u[l++]:c[y++];return t},Bf=Vf,Nf=X.match(/firefox\/(\d+)/i),kf=!!Nf&&+Nf[1],Gf=/MSIE|Trident/.test(X),Wf=X.match(/AppleWebKit\/(\d+)\./),Yf=!!Wf&&+Wf[1],zf=Qu,qf=u,Hf=bt,Qf=Bf,Xf=kf,Jf=Gf,Zf=rt,Kf=Yf,$f=Ai.aTypedArray,tl=Ai.exportTypedArrayMethod,el=i.Uint16Array,rl=el&&zf(el.prototype.sort),nl=!(!rl||qf((function(){rl(new el(2),null)}))&&qf((function(){rl(new el(2),{})}))),ol=!!rl&&!qf((function(){if(Zf)return Zf<74;if(Xf)return Xf<67;if(Jf)return!0;if(Kf)return Kf<602;var t,e,r=new el(516),n=Array(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(rl(r,(function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0}));tl("sort",(function(t){return void 0!==t&&Hf(t),ol?rl(this,t):Qf($f(this),function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}}(t))}),!ol||nl);var il=y;to({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return il(URL.prototype.toString,this)}});var al=ge("span").classList,ul=al&&al.constructor&&al.constructor.prototype,cl=ul===Object.prototype?void 0:ul,sl=te,fl=zu,ll=Ie.f,yl=sl("unscopables"),hl=Array.prototype;void 0===hl[yl]&&ll(hl,yl,{configurable:!0,value:fl(null)});var pl,gl,dl,vl=u,bl=G,wl=Y,ml=Mo,Al=Jr,Sl=te("iterator"),Ol=!1;[].keys&&("next"in(dl=[].keys())?(gl=ml(ml(dl)))!==Object.prototype&&(pl=gl):Ol=!0);var Tl=!wl(pl)||vl((function(){var t={};return pl[Sl].call(t)!==t}));Tl&&(pl={}),bl(pl[Sl])||Al(pl,Sl,(function(){return this}));var Ll={IteratorPrototype:pl,BUGGY_SAFARI_ITERATORS:Ol},El=Ll.IteratorPrototype,Il=zu,Rl=w,Ml=ca,jl=dc,xl=function(){return this},Pl=to,_l=y,Fl=G,Cl=function(t,e,r,n){var o=e+" Iterator";return t.prototype=Il(El,{next:Rl(+!n,r)}),Ml(t,o,!1),jl[o]=xl,t},Ul=Mo,Dl=Bo,Vl=ca,Bl=qe,Nl=Jr,kl=dc,Gl=$e.PROPER,Wl=$e.CONFIGURABLE,Yl=Ll.IteratorPrototype,zl=Ll.BUGGY_SAFARI_ITERATORS,ql=te("iterator"),Hl="keys",Ql="values",Xl="entries",Jl=function(){return this},Zl=N,Kl=function(t){hl[yl][t]=!0},$l=dc,ty=Ir,ey=Ie.f,ry=function(t,e,r,n,o,i,a){Cl(r,e,n);var u,c,s,f=function(t){if(t===o&&g)return g;if(!zl&&t&&t in h)return h[t];switch(t){case Hl:case Ql:case Xl:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",y=!1,h=t.prototype,p=h[ql]||h["@@iterator"]||o&&h[o],g=!zl&&p||f(o),d="Array"===e&&h.entries||p;if(d&&(u=Ul(d.call(new t)))!==Object.prototype&&u.next&&(Ul(u)!==Yl&&(Dl?Dl(u,Yl):Fl(u[ql])||Nl(u,ql,Jl)),Vl(u,l,!0)),Gl&&o===Ql&&p&&p.name!==Ql&&(Wl?Bl(h,"name",Ql):(y=!0,g=function(){return _l(p,this)})),o)if(c={values:f(Ql),keys:i?g:f(Hl),entries:f(Xl)},a)for(s in c)(zl||y||!(s in h))&&Nl(h,s,c[s]);else Pl({target:e,proto:!0,forced:zl||y},c);return h[ql]!==g&&Nl(h,ql,g,{name:o}),kl[e]=g,c},ny=function(t,e){return{value:t,done:e}},oy=c,iy="Array Iterator",ay=ty.set,uy=ty.getterFor(iy),cy=ry(Array,"Array",(function(t,e){ay(this,{type:iy,target:Zl(t),index:0,kind:e})}),(function(){var t=uy(this),e=t.target,r=t.index++;if(!e||r>=e.length)return t.target=void 0,ny(void 0,!0);switch(t.kind){case"keys":return ny(r,!1);case"values":return ny(e[r],!1)}return ny([r,e[r]],!1)}),"values"),sy=$l.Arguments=$l.Array;if(Kl("keys"),Kl("values"),Kl("entries"),oy&&"values"!==sy.name)try{ey(sy,"name",{value:"values"})}catch(t){}var fy=i,ly={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},yy=cl,hy=cy,py=qe,gy=ca,dy=te("iterator"),vy=hy.values,by=function(t,e){if(t){if(t[dy]!==vy)try{py(t,dy,vy)}catch(e){t[dy]=vy}if(gy(t,e,!0),ly[e])for(var r in hy)if(t[r]!==hy[r])try{py(t,r,hy[r])}catch(e){t[r]=hy[r]}}};for(var wy in ly)by(fy[wy]&&fy[wy].prototype,wy);by(yy,"DOMTokenList");const{atan:my,cos:Ay,exp:Sy,log:Oy,tan:Ty,PI:Ly}=Math,{degToRad:Ey,radToDeg:Iy}=e.MathUtils,Ry=6371010,My=Math.PI*Ry;function jy(t){return window.google&&google.maps&&(t instanceof google.maps.LatLng||t instanceof google.maps.LatLngAltitude)?{altitude:0,...t.toJSON()}:{altitude:0,...t}}function xy(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new e.Vector3;const[o,i]=Py(t),[a,u]=Py(r);return n.set(o-a,i-u,0),n.multiplyScalar(Ay(Ey(r.lat))),n.z=t.altitude-r.altitude,n}function Py(t){return[Ry*Ey(t.lng),Ry*Oy(Ty(.25*Ly+.5*Ey(t.lat)))]}const _y=new e.Vector3(0,0,1);t.EARTH_RADIUS=Ry,t.ThreeJSOverlayView=class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.animationMode="ondemand",this.rotationArray=new Float32Array(3),this.rotationInverse=new e.Quaternion,this.projectionMatrixInverse=new e.Matrix4,this.raycaster=new e.Raycaster;const{anchor:r={lat:0,lng:0,altitude:0},upAxis:n="Z",scene:o,map:i,animationMode:a="ondemand",addDefaultLighting:u=!0}=t;this.overlay=new google.maps.WebGLOverlayView,this.renderer=null,this.camera=null,this.animationMode=a,this.setAnchor(r),this.setUpAxis(n),this.scene=null!=o?o:new e.Scene,u&&this.initSceneLights(),this.overlay.onAdd=this.onAdd.bind(this),this.overlay.onRemove=this.onRemove.bind(this),this.overlay.onContextLost=this.onContextLost.bind(this),this.overlay.onContextRestored=this.onContextRestored.bind(this),this.overlay.onStateUpdate=this.onStateUpdate.bind(this),this.overlay.onDraw=this.onDraw.bind(this),this.camera=new e.PerspectiveCamera,i&&this.setMap(i)}setAnchor(t){this.anchor=jy(t)}setUpAxis(t){const r=new e.Vector3(0,0,1);"string"!=typeof t?r.copy(t):"y"===t.toLowerCase()?r.set(0,1,0):"z"!==t.toLowerCase()&&console.warn("invalid value '".concat(t,"' specified as upAxis")),r.normalize();const n=new e.Quaternion;n.setFromUnitVectors(r,_y),this.rotationInverse.copy(n).invert();const o=(new e.Euler).setFromQuaternion(n,"XYZ");this.rotationArray[0]=e.MathUtils.radToDeg(o.x),this.rotationArray[1]=e.MathUtils.radToDeg(o.y),this.rotationArray[2]=e.MathUtils.radToDeg(o.z)}raycast(t,e){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Array.isArray(e)?r=e||null:(r=[this.scene],n={...e,recursive:!0});const{updateMatrix:o=!0,recursive:i=!1,raycasterParameters:a}=n;o&&this.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.raycaster.ray.origin.set(t.x,t.y,0).applyMatrix4(this.projectionMatrixInverse),this.raycaster.ray.direction.set(t.x,t.y,.5).applyMatrix4(this.projectionMatrixInverse).sub(this.raycaster.ray.origin).normalize();const u=this.raycaster.params;a&&(this.raycaster.params=a);const c=this.raycaster.intersectObjects(r,i);return this.raycaster.params=u,c}onStateUpdate(){}onAdd(){}onBeforeDraw(){}onRemove(){}requestStateUpdate(){this.overlay.requestStateUpdate()}requestRedraw(){this.overlay.requestRedraw()}getMap(){return this.overlay.getMap()}setMap(t){this.overlay.setMap(t)}addListener(t,e){return this.overlay.addListener(t,e)}onContextRestored(t){let{gl:r}=t;this.renderer=new e.WebGLRenderer({canvas:r.canvas,context:r,...r.getContextAttributes()}),this.renderer.autoClear=!1,this.renderer.autoClearDepth=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=e.PCFSoftShadowMap,Number(e.REVISION)<152&&(this.renderer.outputEncoding=e.sRGBEncoding);const{width:n,height:o}=r.canvas;this.renderer.setViewport(0,0,n,o)}onContextLost(){this.renderer&&(this.renderer.dispose(),this.renderer=null)}onDraw(t){let{gl:e,transformer:r}=t;this.camera.projectionMatrix.fromArray(r.fromLatLngAltitude(this.anchor,this.rotationArray)),e.disable(e.SCISSOR_TEST),this.onBeforeDraw(),this.renderer.render(this.scene,this.camera),this.renderer.resetState(),"always"===this.animationMode&&this.requestRedraw()}latLngAltitudeToVector3(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new e.Vector3;return xy(jy(t),this.anchor,r),r.applyQuaternion(this.rotationInverse),r}bindTo(t,e,r,n){this.overlay.bindTo(t,e,r,n)}get(t){return this.overlay.get(t)}notify(t){this.overlay.notify(t)}set(t,e){this.overlay.set(t,e)}setValues(t){this.overlay.setValues(t)}unbind(t){this.overlay.unbind(t)}unbindAll(){this.overlay.unbindAll()}initSceneLights(){const t=new e.HemisphereLight(16777215,4473924,1);t.position.set(0,-.2,1).normalize();const r=new e.DirectionalLight(16777215);r.position.set(0,10,100),this.scene.add(t,r)}},t.WORLD_SIZE=My,t.latLngToVector3Relative=xy,t.latLngToXY=Py,t.toLatLngAltitudeLiteral=jy,t.xyToLatLng=function(t){const[e,r]=t;return{lat:Iy(.5*Ly-2*my(Sy(-r/Ry))),lng:Iy(e)/Ry}}}));
//# sourceMappingURL=index.umd.js.map
