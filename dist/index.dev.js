this.google=this.google||{},this.google.maps=this.google.maps||{},this.google.maps.plugins=this.google.maps.plugins||{},this.google.maps.plugins.three=function(t,r){"use strict";function e(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a={},u=function(t){try{return!!t()}catch(t){return!0}},f=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),s=c,l=Function.prototype.call,y=s?l.bind(l):function(){return l.apply(l,arguments)},h={},p={}.propertyIsEnumerable,v=Object.getOwnPropertyDescriptor,d=v&&!p.call({1:2},1);h.f=d?function(t){var r=v(this,t);return!!r&&r.enumerable}:p;var g,b,A=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},w=c,m=Function.prototype,T=m.bind,O=m.call,E=w&&T.bind(O,O),S=w?function(t){return t&&E(t)}:function(t){return t&&function(){return O.apply(t,arguments)}},R=S,x=R({}.toString),M=R("".slice),j=function(t){return M(x(t),8,-1)},I=S,P=u,_=j,L=i.Object,k=I("".split),C=P((function(){return!L("z").propertyIsEnumerable(0)}))?function(t){return"String"==_(t)?k(t,""):L(t)}:L,F=i.TypeError,U=function(t){if(null==t)throw F("Can't call method on "+t);return t},D=C,N=U,B=function(t){return D(N(t))},V=function(t){return"function"==typeof t},Y=V,W=function(t){return"object"==typeof t?null!==t:Y(t)},G=i,z=V,q=function(t){return z(t)?t:void 0},H=function(t,r){return arguments.length<2?q(G[t]):G[t]&&G[t][r]},J=S({}.isPrototypeOf),X=H("navigator","userAgent")||"",K=i,Z=X,$=K.process,Q=K.Deno,tt=$&&$.versions||Q&&Q.version,rt=tt&&tt.v8;rt&&(b=(g=rt.split("."))[0]>0&&g[0]<4?1:+(g[0]+g[1])),!b&&Z&&(!(g=Z.match(/Edge\/(\d+)/))||g[1]>=74)&&(g=Z.match(/Chrome\/(\d+)/))&&(b=+g[1]);var et=b,nt=et,ot=u,it=!!Object.getOwnPropertySymbols&&!ot((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),at=it&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=H,ft=V,ct=J,st=at,lt=i.Object,yt=st?function(t){return"symbol"==typeof t}:function(t){var r=ut("Symbol");return ft(r)&&ct(r.prototype,lt(t))},ht=i.String,pt=function(t){try{return ht(t)}catch(t){return"Object"}},vt=V,dt=pt,gt=i.TypeError,bt=function(t){if(vt(t))return t;throw gt(dt(t)+" is not a function")},At=bt,wt=function(t,r){var e=t[r];return null==e?void 0:At(e)},mt=y,Tt=V,Ot=W,Et=i.TypeError,St={exports:{}},Rt=i,xt=Object.defineProperty,Mt=function(t,r){try{xt(Rt,t,{value:r,configurable:!0,writable:!0})}catch(e){Rt[t]=r}return r},jt=Mt,It="__core-js_shared__",Pt=i[It]||jt(It,{}),_t=Pt;(St.exports=function(t,r){return _t[t]||(_t[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.22.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Lt=U,kt=i.Object,Ct=function(t){return kt(Lt(t))},Ft=Ct,Ut=S({}.hasOwnProperty),Dt=Object.hasOwn||function(t,r){return Ut(Ft(t),r)},Nt=S,Bt=0,Vt=Math.random(),Yt=Nt(1..toString),Wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Yt(++Bt+Vt,36)},Gt=i,zt=St.exports,qt=Dt,Ht=Wt,Jt=it,Xt=at,Kt=zt("wks"),Zt=Gt.Symbol,$t=Zt&&Zt.for,Qt=Xt?Zt:Zt&&Zt.withoutSetter||Ht,tr=function(t){if(!qt(Kt,t)||!Jt&&"string"!=typeof Kt[t]){var r="Symbol."+t;Jt&&qt(Zt,t)?Kt[t]=Zt[t]:Kt[t]=Xt&&$t?$t(r):Qt(r)}return Kt[t]},rr=y,er=W,nr=yt,or=wt,ir=function(t,r){var e,n;if("string"===r&&Tt(e=t.toString)&&!Ot(n=mt(e,t)))return n;if(Tt(e=t.valueOf)&&!Ot(n=mt(e,t)))return n;if("string"!==r&&Tt(e=t.toString)&&!Ot(n=mt(e,t)))return n;throw Et("Can't convert object to primitive value")},ar=tr,ur=i.TypeError,fr=ar("toPrimitive"),cr=function(t,r){if(!er(t)||nr(t))return t;var e,n=or(t,fr);if(n){if(void 0===r&&(r="default"),e=rr(n,t,r),!er(e)||nr(e))return e;throw ur("Can't convert object to primitive value")}return void 0===r&&(r="number"),ir(t,r)},sr=yt,lr=function(t){var r=cr(t,"string");return sr(r)?r:r+""},yr=W,hr=i.document,pr=yr(hr)&&yr(hr.createElement),vr=function(t){return pr?hr.createElement(t):{}},dr=vr,gr=!f&&!u((function(){return 7!=Object.defineProperty(dr("div"),"a",{get:function(){return 7}}).a})),br=f,Ar=y,wr=h,mr=A,Tr=B,Or=lr,Er=Dt,Sr=gr,Rr=Object.getOwnPropertyDescriptor;a.f=br?Rr:function(t,r){if(t=Tr(t),r=Or(r),Sr)try{return Rr(t,r)}catch(t){}if(Er(t,r))return mr(!Ar(wr.f,t,r),t[r])};var xr={},Mr=f&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),jr=i,Ir=W,Pr=jr.String,_r=jr.TypeError,Lr=function(t){if(Ir(t))return t;throw _r(Pr(t)+" is not an object")},kr=f,Cr=gr,Fr=Mr,Ur=Lr,Dr=lr,Nr=i.TypeError,Br=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,Yr="enumerable",Wr="configurable",Gr="writable";xr.f=kr?Fr?function(t,r,e){if(Ur(t),r=Dr(r),Ur(e),"function"==typeof t&&"prototype"===r&&"value"in e&&Gr in e&&!e.writable){var n=Vr(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:Wr in e?e.configurable:n.configurable,enumerable:Yr in e?e.enumerable:n.enumerable,writable:!1})}return Br(t,r,e)}:Br:function(t,r,e){if(Ur(t),r=Dr(r),Ur(e),Cr)try{return Br(t,r,e)}catch(t){}if("get"in e||"set"in e)throw Nr("Accessors not supported");return"value"in e&&(t[r]=e.value),t};var zr=xr,qr=A,Hr=f?function(t,r,e){return zr.f(t,r,qr(1,e))}:function(t,r,e){return t[r]=e,t},Jr={exports:{}},Xr=V,Kr=Pt,Zr=S(Function.toString);Xr(Kr.inspectSource)||(Kr.inspectSource=function(t){return Zr(t)});var $r,Qr,te,re=Kr.inspectSource,ee=V,ne=re,oe=i.WeakMap,ie=ee(oe)&&/native code/.test(ne(oe)),ae=St.exports,ue=Wt,fe=ae("keys"),ce=function(t){return fe[t]||(fe[t]=ue(t))},se={},le=ie,ye=i,he=S,pe=W,ve=Hr,de=Dt,ge=Pt,be=ce,Ae=se,we="Object already initialized",me=ye.TypeError,Te=ye.WeakMap;if(le||ge.state){var Oe=ge.state||(ge.state=new Te),Ee=he(Oe.get),Se=he(Oe.has),Re=he(Oe.set);$r=function(t,r){if(Se(Oe,t))throw new me(we);return r.facade=t,Re(Oe,t,r),r},Qr=function(t){return Ee(Oe,t)||{}},te=function(t){return Se(Oe,t)}}else{var xe=be("state");Ae[xe]=!0,$r=function(t,r){if(de(t,xe))throw new me(we);return r.facade=t,ve(t,xe,r),r},Qr=function(t){return de(t,xe)?t[xe]:{}},te=function(t){return de(t,xe)}}var Me={set:$r,get:Qr,has:te,enforce:function(t){return te(t)?Qr(t):$r(t,{})},getterFor:function(t){return function(r){var e;if(!pe(r)||(e=Qr(r)).type!==t)throw me("Incompatible receiver, "+t+" required");return e}}},je=f,Ie=Dt,Pe=Function.prototype,_e=je&&Object.getOwnPropertyDescriptor,Le=Ie(Pe,"name"),ke={EXISTS:Le,PROPER:Le&&"something"===function(){}.name,CONFIGURABLE:Le&&(!je||je&&_e(Pe,"name").configurable)},Ce=i,Fe=V,Ue=Dt,De=Hr,Ne=Mt,Be=re,Ve=ke.CONFIGURABLE,Ye=Me.get,We=Me.enforce,Ge=String(String).split("String");(Jr.exports=function(t,r,e,n){var o,i=!!n&&!!n.unsafe,a=!!n&&!!n.enumerable,u=!!n&&!!n.noTargetGet,f=n&&void 0!==n.name?n.name:r;Fe(e)&&("Symbol("===String(f).slice(0,7)&&(f="["+String(f).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Ue(e,"name")||Ve&&e.name!==f)&&De(e,"name",f),(o=We(e)).source||(o.source=Ge.join("string"==typeof f?f:""))),t!==Ce?(i?!u&&t[r]&&(a=!0):delete t[r],a?t[r]=e:De(t,r,e)):a?t[r]=e:Ne(r,e)})(Function.prototype,"toString",(function(){return Fe(this)&&Ye(this).source||Be(this)}));var ze={},qe=Math.ceil,He=Math.floor,Je=function(t){var r=+t;return r!=r||0===r?0:(r>0?He:qe)(r)},Xe=Je,Ke=Math.max,Ze=Math.min,$e=function(t,r){var e=Xe(t);return e<0?Ke(e+r,0):Ze(e,r)},Qe=Je,tn=Math.min,rn=function(t){return t>0?tn(Qe(t),9007199254740991):0},en=rn,nn=function(t){return en(t.length)},on=B,an=$e,un=nn,fn=function(t){return function(r,e,n){var o,i=on(r),a=un(i),u=an(n,a);if(t&&e!=e){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===e)return t||u||0;return!t&&-1}},cn={includes:fn(!0),indexOf:fn(!1)},sn=Dt,ln=B,yn=cn.indexOf,hn=se,pn=S([].push),vn=function(t,r){var e,n=ln(t),o=0,i=[];for(e in n)!sn(hn,e)&&sn(n,e)&&pn(i,e);for(;r.length>o;)sn(n,e=r[o++])&&(~yn(i,e)||pn(i,e));return i},dn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],gn=vn,bn=dn.concat("length","prototype");ze.f=Object.getOwnPropertyNames||function(t){return gn(t,bn)};var An={};An.f=Object.getOwnPropertySymbols;var wn=H,mn=ze,Tn=An,On=Lr,En=S([].concat),Sn=wn("Reflect","ownKeys")||function(t){var r=mn.f(On(t)),e=Tn.f;return e?En(r,e(t)):r},Rn=Dt,xn=Sn,Mn=a,jn=xr,In=u,Pn=V,_n=/#|\.prototype\./,Ln=function(t,r){var e=Cn[kn(t)];return e==Un||e!=Fn&&(Pn(r)?In(r):!!r)},kn=Ln.normalize=function(t){return String(t).replace(_n,".").toLowerCase()},Cn=Ln.data={},Fn=Ln.NATIVE="N",Un=Ln.POLYFILL="P",Dn=Ln,Nn=i,Bn=a.f,Vn=Hr,Yn=Jr.exports,Wn=Mt,Gn=function(t,r,e){for(var n=xn(r),o=jn.f,i=Mn.f,a=0;a<n.length;a++){var u=n[a];Rn(t,u)||e&&Rn(e,u)||o(t,u,i(r,u))}},zn=Dn,qn=function(t,r){var e,n,o,i,a,u=t.target,f=t.global,c=t.stat;if(e=f?Nn:c?Nn[u]||Wn(u,{}):(Nn[u]||{}).prototype)for(n in r){if(i=r[n],o=t.noTargetGet?(a=Bn(e,n))&&a.value:e[n],!zn(f?n:u+(c?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Gn(i,o)}(t.sham||o&&o.sham)&&Vn(i,"sham",!0),Yn(e,n,i,t)}},Hn={};Hn[tr("toStringTag")]="z";var Jn="[object z]"===String(Hn),Xn=i,Kn=Jn,Zn=V,$n=j,Qn=tr("toStringTag"),to=Xn.Object,ro="Arguments"==$n(function(){return arguments}()),eo=Kn?$n:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=to(t),Qn))?e:ro?$n(r):"Object"==(n=$n(r))&&Zn(r.callee)?"Arguments":n},no=eo,oo=i.String,io=U,ao=function(t){if("Symbol"===no(t))throw TypeError("Cannot convert a Symbol value to a string");return oo(t)},uo=/"/g,fo=S("".replace),co=u,so=function(t,r,e,n){var o=ao(io(t)),i="<"+r;return""!==e&&(i+=" "+e+'="'+fo(ao(n),uo,"&quot;")+'"'),i+">"+o+"</"+r+">"};qn({target:"String",proto:!0,forced:function(t){return co((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}("anchor")},{anchor:function(t){return so(this,"a","name",t)}});var lo={},yo=vn,ho=dn,po=Object.keys||function(t){return yo(t,ho)},vo=f,go=Mr,bo=xr,Ao=Lr,wo=B,mo=po;lo.f=vo&&!go?Object.defineProperties:function(t,r){Ao(t);for(var e,n=wo(r),o=mo(r),i=o.length,a=0;i>a;)bo.f(t,e=o[a++],n[e]);return t};var To,Oo=H("document","documentElement"),Eo=Lr,So=lo,Ro=dn,xo=se,Mo=Oo,jo=vr,Io=ce("IE_PROTO"),Po=function(){},_o=function(t){return"<script>"+t+"</"+"script>"},Lo=function(t){t.write(_o("")),t.close();var r=t.parentWindow.Object;return t=null,r},ko=function(){try{To=new ActiveXObject("htmlfile")}catch(t){}var t,r;ko="undefined"!=typeof document?document.domain&&To?Lo(To):((r=jo("iframe")).style.display="none",Mo.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(_o("document.F=Object")),t.close(),t.F):Lo(To);for(var e=Ro.length;e--;)delete ko.prototype[Ro[e]];return ko()};xo[Io]=!0;var Co=Object.create||function(t,r){var e;return null!==t?(Po.prototype=Eo(t),e=new Po,Po.prototype=null,e[Io]=t):e=ko(),void 0===r?e:So.f(e,r)},Fo=Co,Uo=xr,Do=tr("unscopables"),No=Array.prototype;null==No[Do]&&Uo.f(No,Do,{configurable:!0,value:Fo(null)});var Bo,Vo,Yo,Wo={},Go=!u((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),zo=i,qo=Dt,Ho=V,Jo=Ct,Xo=Go,Ko=ce("IE_PROTO"),Zo=zo.Object,$o=Zo.prototype,Qo=Xo?Zo.getPrototypeOf:function(t){var r=Jo(t);if(qo(r,Ko))return r[Ko];var e=r.constructor;return Ho(e)&&r instanceof e?e.prototype:r instanceof Zo?$o:null},ti=u,ri=V,ei=Qo,ni=Jr.exports,oi=tr("iterator"),ii=!1;[].keys&&("next"in(Yo=[].keys())?(Vo=ei(ei(Yo)))!==Object.prototype&&(Bo=Vo):ii=!0),(null==Bo||ti((function(){var t={};return Bo[oi].call(t)!==t})))&&(Bo={}),ri(Bo[oi])||ni(Bo,oi,(function(){return this}));var ai={IteratorPrototype:Bo,BUGGY_SAFARI_ITERATORS:ii},ui=xr.f,fi=Dt,ci=tr("toStringTag"),si=function(t,r,e){t&&!e&&(t=t.prototype),t&&!fi(t,ci)&&ui(t,ci,{configurable:!0,value:r})},li=ai.IteratorPrototype,yi=Co,hi=A,pi=si,vi=Wo,di=function(){return this},gi=i,bi=V,Ai=gi.String,wi=gi.TypeError,mi=S,Ti=Lr,Oi=function(t){if("object"==typeof t||bi(t))return t;throw wi("Can't set "+Ai(t)+" as a prototype")},Ei=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=mi(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return Ti(e),Oi(n),r?t(e,n):e.__proto__=n,e}}():void 0),Si=qn,Ri=y,xi=ke,Mi=V,ji=function(t,r,e,n){var o=r+" Iterator";return t.prototype=yi(li,{next:hi(+!n,e)}),pi(t,o,!1),vi[o]=di,t},Ii=Qo,Pi=Ei,_i=si,Li=Hr,ki=Jr.exports,Ci=Wo,Fi=xi.PROPER,Ui=xi.CONFIGURABLE,Di=ai.IteratorPrototype,Ni=ai.BUGGY_SAFARI_ITERATORS,Bi=tr("iterator"),Vi="keys",Yi="values",Wi="entries",Gi=function(){return this},zi=B,qi=function(t){No[Do][t]=!0},Hi=Wo,Ji=Me,Xi=xr.f,Ki=function(t,r,e,n,o,i,a){ji(e,r,n);var u,f,c,s=function(t){if(t===o&&v)return v;if(!Ni&&t in h)return h[t];switch(t){case Vi:case Yi:case Wi:return function(){return new e(this,t)}}return function(){return new e(this)}},l=r+" Iterator",y=!1,h=t.prototype,p=h[Bi]||h["@@iterator"]||o&&h[o],v=!Ni&&p||s(o),d="Array"==r&&h.entries||p;if(d&&(u=Ii(d.call(new t)))!==Object.prototype&&u.next&&(Ii(u)!==Di&&(Pi?Pi(u,Di):Mi(u[Bi])||ki(u,Bi,Gi)),_i(u,l,!0)),Fi&&o==Yi&&p&&p.name!==Yi&&(Ui?Li(h,"name",Yi):(y=!0,v=function(){return Ri(p,this)})),o)if(f={values:s(Yi),keys:i?v:s(Vi),entries:s(Wi)},a)for(c in f)(Ni||y||!(c in h))&&ki(h,c,f[c]);else Si({target:r,proto:!0,forced:Ni||y},f);return h[Bi]!==v&&ki(h,Bi,v,{name:o}),Ci[r]=v,f},Zi=f,$i="Array Iterator",Qi=Ji.set,ta=Ji.getterFor($i),ra=Ki(Array,"Array",(function(t,r){Qi(this,{type:$i,target:zi(t),index:0,kind:r})}),(function(){var t=ta(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values"),ea=Hi.Arguments=Hi.Array;if(qi("keys"),qi("values"),qi("entries"),Zi&&"values"!==ea.name)try{Xi(ea,"name",{value:"values"})}catch(t){}var na=eo,oa=Jn?{}.toString:function(){return"[object "+na(this)+"]"},ia=Jn,aa=Jr.exports,ua=oa;ia||aa(Object.prototype,"toString",ua,{unsafe:!0});var fa={exports:{}},ca=tr("iterator"),sa=!1;try{var la=0,ya={next:function(){return{done:!!la++}},return:function(){sa=!0}};ya[ca]=function(){return this},Array.from(ya,(function(){throw 2}))}catch(t){}var ha,pa,va,da="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,ga=da,ba=f,Aa=i,wa=V,ma=W,Ta=Dt,Oa=eo,Ea=pt,Sa=Hr,Ra=Jr.exports,xa=xr.f,Ma=J,ja=Qo,Ia=Ei,Pa=tr,_a=Wt,La=Aa.Int8Array,ka=La&&La.prototype,Ca=Aa.Uint8ClampedArray,Fa=Ca&&Ca.prototype,Ua=La&&ja(La),Da=ka&&ja(ka),Na=Object.prototype,Ba=Aa.TypeError,Va=Pa("toStringTag"),Ya=_a("TYPED_ARRAY_TAG"),Wa=_a("TYPED_ARRAY_CONSTRUCTOR"),Ga=ga&&!!Ia&&"Opera"!==Oa(Aa.opera),za=!1,qa={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},Ha={BigInt64Array:8,BigUint64Array:8},Ja=function(t){if(!ma(t))return!1;var r=Oa(t);return Ta(qa,r)||Ta(Ha,r)};for(ha in qa)(va=(pa=Aa[ha])&&pa.prototype)?Sa(va,Wa,pa):Ga=!1;for(ha in Ha)(va=(pa=Aa[ha])&&pa.prototype)&&Sa(va,Wa,pa);if((!Ga||!wa(Ua)||Ua===Function.prototype)&&(Ua=function(){throw Ba("Incorrect invocation")},Ga))for(ha in qa)Aa[ha]&&Ia(Aa[ha],Ua);if((!Ga||!Da||Da===Na)&&(Da=Ua.prototype,Ga))for(ha in qa)Aa[ha]&&Ia(Aa[ha].prototype,Da);if(Ga&&ja(Fa)!==Da&&Ia(Fa,Da),ba&&!Ta(Da,Va))for(ha in za=!0,xa(Da,Va,{get:function(){return ma(this)?this[Ya]:void 0}}),qa)Aa[ha]&&Sa(Aa[ha],Ya,ha);var Xa={NATIVE_ARRAY_BUFFER_VIEWS:Ga,TYPED_ARRAY_CONSTRUCTOR:Wa,TYPED_ARRAY_TAG:za&&Ya,aTypedArray:function(t){if(Ja(t))return t;throw Ba("Target is not a typed array")},aTypedArrayConstructor:function(t){if(wa(t)&&(!Ia||Ma(Ua,t)))return t;throw Ba(Ea(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(ba){if(e)for(var o in qa){var i=Aa[o];if(i&&Ta(i.prototype,t))try{delete i.prototype[t]}catch(e){try{i.prototype[t]=r}catch(t){}}}Da[t]&&!e||Ra(Da,t,e?r:Ga&&ka[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(ba){if(Ia){if(e)for(n in qa)if((o=Aa[n])&&Ta(o,t))try{delete o[t]}catch(t){}if(Ua[t]&&!e)return;try{return Ra(Ua,t,e?r:Ga&&Ua[t]||r)}catch(t){}}for(n in qa)!(o=Aa[n])||o[t]&&!e||Ra(o,t,r)}},isView:function(t){if(!ma(t))return!1;var r=Oa(t);return"DataView"===r||Ta(qa,r)||Ta(Ha,r)},isTypedArray:Ja,TypedArray:Ua,TypedArrayPrototype:Da},Ka=i,Za=u,$a=function(t,r){if(!r&&!sa)return!1;var e=!1;try{var n={};n[ca]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e},Qa=Xa.NATIVE_ARRAY_BUFFER_VIEWS,tu=Ka.ArrayBuffer,ru=Ka.Int8Array,eu=!Qa||!Za((function(){ru(1)}))||!Za((function(){new ru(-1)}))||!$a((function(t){new ru,new ru(null),new ru(1.5),new ru(t)}),!0)||Za((function(){return 1!==new ru(new tu(2),1,void 0).length})),nu=Jr.exports,ou=J,iu=i.TypeError,au=function(t,r){if(ou(r,t))return t;throw iu("Incorrect invocation")},uu=Je,fu=rn,cu=i.RangeError,su=function(t){if(void 0===t)return 0;var r=uu(t),e=fu(r);if(r!==e)throw cu("Wrong length or index");return e},lu=i.Array,yu=Math.abs,hu=Math.pow,pu=Math.floor,vu=Math.log,du=Math.LN2,gu={pack:function(t,r,e){var n,o,i,a=lu(e),u=8*e-r-1,f=(1<<u)-1,c=f>>1,s=23===r?hu(2,-24)-hu(2,-77):0,l=t<0||0===t&&1/t<0?1:0,y=0;for((t=yu(t))!=t||t===1/0?(o=t!=t?1:0,n=f):(n=pu(vu(t)/du),t*(i=hu(2,-n))<1&&(n--,i*=2),(t+=n+c>=1?s/i:s*hu(2,1-c))*i>=2&&(n++,i/=2),n+c>=f?(o=0,n=f):n+c>=1?(o=(t*i-1)*hu(2,r),n+=c):(o=t*hu(2,c-1)*hu(2,r),n=0));r>=8;)a[y++]=255&o,o/=256,r-=8;for(n=n<<r|o,u+=r;u>0;)a[y++]=255&n,n/=256,u-=8;return a[--y]|=128*l,a},unpack:function(t,r){var e,n=t.length,o=8*n-r-1,i=(1<<o)-1,a=i>>1,u=o-7,f=n-1,c=t[f--],s=127&c;for(c>>=7;u>0;)s=256*s+t[f--],u-=8;for(e=s&(1<<-u)-1,s>>=-u,u+=r;u>0;)e=256*e+t[f--],u-=8;if(0===s)s=1-a;else{if(s===i)return e?NaN:c?-1/0:1/0;e+=hu(2,r),s-=a}return(c?-1:1)*e*hu(2,s-r)}},bu=Ct,Au=$e,wu=nn,mu=function(t){for(var r=bu(this),e=wu(r),n=arguments.length,o=Au(n>1?arguments[1]:void 0,e),i=n>2?arguments[2]:void 0,a=void 0===i?e:Au(i,e);a>o;)r[o++]=t;return r},Tu=lr,Ou=xr,Eu=A,Su=$e,Ru=nn,xu=function(t,r,e){var n=Tu(r);n in t?Ou.f(t,n,Eu(0,e)):t[n]=e},Mu=i.Array,ju=Math.max,Iu=function(t,r,e){for(var n=Ru(t),o=Su(r,n),i=Su(void 0===e?n:e,n),a=Mu(ju(i-o,0)),u=0;o<i;o++,u++)xu(a,u,t[o]);return a.length=u,a},Pu=i,_u=S,Lu=f,ku=da,Cu=ke,Fu=Hr,Uu=function(t,r,e){for(var n in r)nu(t,n,r[n],e);return t},Du=u,Nu=au,Bu=Je,Vu=rn,Yu=su,Wu=gu,Gu=Qo,zu=Ei,qu=ze.f,Hu=xr.f,Ju=mu,Xu=Iu,Ku=si,Zu=Cu.PROPER,$u=Cu.CONFIGURABLE,Qu=Me.get,tf=Me.set,rf="ArrayBuffer",ef="DataView",nf="Wrong index",of=Pu.ArrayBuffer,af=of,uf=af&&af.prototype,ff=Pu.DataView,cf=ff&&ff.prototype,sf=Object.prototype,lf=Pu.Array,yf=Pu.RangeError,hf=_u(Ju),pf=_u([].reverse),vf=Wu.pack,df=Wu.unpack,gf=function(t){return[255&t]},bf=function(t){return[255&t,t>>8&255]},Af=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},wf=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},mf=function(t){return vf(t,23,4)},Tf=function(t){return vf(t,52,8)},Of=function(t,r){Hu(t.prototype,r,{get:function(){return Qu(this)[r]}})},Ef=function(t,r,e,n){var o=Yu(e),i=Qu(t);if(o+r>i.byteLength)throw yf(nf);var a=Qu(i.buffer).bytes,u=o+i.byteOffset,f=Xu(a,u,u+r);return n?f:pf(f)},Sf=function(t,r,e,n,o,i){var a=Yu(e),u=Qu(t);if(a+r>u.byteLength)throw yf(nf);for(var f=Qu(u.buffer).bytes,c=a+u.byteOffset,s=n(+o),l=0;l<r;l++)f[c+l]=s[i?l:r-l-1]};if(ku){var Rf=Zu&&of.name!==rf;if(Du((function(){of(1)}))&&Du((function(){new of(-1)}))&&!Du((function(){return new of,new of(1.5),new of(NaN),Rf&&!$u})))Rf&&$u&&Fu(of,"name",rf);else{(af=function(t){return Nu(this,uf),new of(Yu(t))}).prototype=uf;for(var xf,Mf=qu(of),jf=0;Mf.length>jf;)(xf=Mf[jf++])in af||Fu(af,xf,of[xf]);uf.constructor=af}zu&&Gu(cf)!==sf&&zu(cf,sf);var If=new ff(new af(2)),Pf=_u(cf.setInt8);If.setInt8(0,2147483648),If.setInt8(1,2147483649),!If.getInt8(0)&&If.getInt8(1)||Uu(cf,{setInt8:function(t,r){Pf(this,t,r<<24>>24)},setUint8:function(t,r){Pf(this,t,r<<24>>24)}},{unsafe:!0})}else uf=(af=function(t){Nu(this,uf);var r=Yu(t);tf(this,{bytes:hf(lf(r),0),byteLength:r}),Lu||(this.byteLength=r)}).prototype,cf=(ff=function(t,r,e){Nu(this,cf),Nu(t,uf);var n=Qu(t).byteLength,o=Bu(r);if(o<0||o>n)throw yf("Wrong offset");if(o+(e=void 0===e?n-o:Vu(e))>n)throw yf("Wrong length");tf(this,{buffer:t,byteLength:e,byteOffset:o}),Lu||(this.buffer=t,this.byteLength=e,this.byteOffset=o)}).prototype,Lu&&(Of(af,"byteLength"),Of(ff,"buffer"),Of(ff,"byteLength"),Of(ff,"byteOffset")),Uu(cf,{getInt8:function(t){return Ef(this,1,t)[0]<<24>>24},getUint8:function(t){return Ef(this,1,t)[0]},getInt16:function(t){var r=Ef(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=Ef(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return wf(Ef(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return wf(Ef(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return df(Ef(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return df(Ef(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){Sf(this,1,t,gf,r)},setUint8:function(t,r){Sf(this,1,t,gf,r)},setInt16:function(t,r){Sf(this,2,t,bf,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){Sf(this,2,t,bf,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){Sf(this,4,t,Af,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){Sf(this,4,t,Af,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){Sf(this,4,t,mf,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){Sf(this,8,t,Tf,r,arguments.length>2?arguments[2]:void 0)}});Ku(af,rf),Ku(ff,ef);var _f={ArrayBuffer:af,DataView:ff},Lf=W,kf=Math.floor,Cf=Number.isInteger||function(t){return!Lf(t)&&isFinite(t)&&kf(t)===t},Ff=Je,Uf=i.RangeError,Df=function(t){var r=Ff(t);if(r<0)throw Uf("The argument can't be less than 0");return r},Nf=i.RangeError,Bf=function(t,r){var e=Df(t);if(e%r)throw Nf("Wrong offset");return e},Vf=bt,Yf=c,Wf=S(S.bind),Gf=function(t,r){return Vf(t),void 0===r?t:Yf?Wf(t,r):function(){return t.apply(r,arguments)}},zf=S,qf=u,Hf=V,Jf=eo,Xf=re,Kf=function(){},Zf=[],$f=H("Reflect","construct"),Qf=/^\s*(?:class|function)\b/,tc=zf(Qf.exec),rc=!Qf.exec(Kf),ec=function(t){if(!Hf(t))return!1;try{return $f(Kf,Zf,t),!0}catch(t){return!1}},nc=function(t){if(!Hf(t))return!1;switch(Jf(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return rc||!!tc(Qf,Xf(t))}catch(t){return!0}};nc.sham=!0;var oc=!$f||qf((function(){var t;return ec(ec.call)||!ec(Object)||!ec((function(){t=!0}))||t}))?nc:ec,ic=oc,ac=pt,uc=i.TypeError,fc=function(t){if(ic(t))return t;throw uc(ac(t)+" is not a constructor")},cc=eo,sc=wt,lc=Wo,yc=tr("iterator"),hc=function(t){if(null!=t)return sc(t,yc)||sc(t,"@@iterator")||lc[cc(t)]},pc=y,vc=bt,dc=Lr,gc=pt,bc=hc,Ac=i.TypeError,wc=Wo,mc=tr("iterator"),Tc=Array.prototype,Oc=Gf,Ec=y,Sc=fc,Rc=Ct,xc=nn,Mc=function(t,r){var e=arguments.length<2?bc(t):r;if(vc(e))return dc(pc(e,t));throw Ac(gc(t)+" is not iterable")},jc=hc,Ic=function(t){return void 0!==t&&(wc.Array===t||Tc[mc]===t)},Pc=Xa.aTypedArrayConstructor,_c=j,Lc=i,kc=Array.isArray||function(t){return"Array"==_c(t)},Cc=oc,Fc=W,Uc=tr("species"),Dc=Lc.Array,Nc=function(t){var r;return kc(t)&&(r=t.constructor,(Cc(r)&&(r===Dc||kc(r.prototype))||Fc(r)&&null===(r=r[Uc]))&&(r=void 0)),void 0===r?Dc:r},Bc=Gf,Vc=C,Yc=Ct,Wc=nn,Gc=function(t,r){return new(Nc(t))(0===r?0:r)},zc=S([].push),qc=function(t){var r=1==t,e=2==t,n=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(f,c,s,l){for(var y,h,p=Yc(f),v=Vc(p),d=Bc(c,s),g=Wc(v),b=0,A=l||Gc,w=r?A(f,g):e||a?A(f,0):void 0;g>b;b++)if((u||b in v)&&(h=d(y=v[b],b,p),t))if(r)w[b]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return b;case 2:zc(w,y)}else switch(t){case 4:return!1;case 7:zc(w,y)}return i?-1:n||o?o:w}},Hc={forEach:qc(0),map:qc(1),filter:qc(2),some:qc(3),every:qc(4),find:qc(5),findIndex:qc(6),filterReject:qc(7)},Jc=H,Xc=xr,Kc=f,Zc=tr("species"),$c=V,Qc=W,ts=Ei,rs=qn,es=i,ns=y,os=f,is=eu,as=Xa,us=_f,fs=au,cs=A,ss=Hr,ls=Cf,ys=rn,hs=su,ps=Bf,vs=lr,ds=Dt,gs=eo,bs=W,As=yt,ws=Co,ms=J,Ts=Ei,Os=ze.f,Es=function(t){var r,e,n,o,i,a,u=Sc(this),f=Rc(t),c=arguments.length,s=c>1?arguments[1]:void 0,l=void 0!==s,y=jc(f);if(y&&!Ic(y))for(a=(i=Mc(f,y)).next,f=[];!(o=Ec(a,i)).done;)f.push(o.value);for(l&&c>2&&(s=Oc(s,arguments[2])),e=xc(f),n=new(Pc(u))(e),r=0;e>r;r++)n[r]=l?s(f[r],r):f[r];return n},Ss=Hc.forEach,Rs=function(t){var r=Jc(t),e=Xc.f;Kc&&r&&!r[Zc]&&e(r,Zc,{configurable:!0,get:function(){return this}})},xs=xr,Ms=a,js=function(t,r,e){var n,o;return ts&&$c(n=r.constructor)&&n!==e&&Qc(o=n.prototype)&&o!==e.prototype&&ts(t,o),t},Is=Me.get,Ps=Me.set,_s=xs.f,Ls=Ms.f,ks=Math.round,Cs=es.RangeError,Fs=us.ArrayBuffer,Us=Fs.prototype,Ds=us.DataView,Ns=as.NATIVE_ARRAY_BUFFER_VIEWS,Bs=as.TYPED_ARRAY_CONSTRUCTOR,Vs=as.TYPED_ARRAY_TAG,Ys=as.TypedArray,Ws=as.TypedArrayPrototype,Gs=as.aTypedArrayConstructor,zs=as.isTypedArray,qs="BYTES_PER_ELEMENT",Hs="Wrong length",Js=function(t,r){Gs(t);for(var e=0,n=r.length,o=new t(n);n>e;)o[e]=r[e++];return o},Xs=function(t,r){_s(t,r,{get:function(){return Is(this)[r]}})},Ks=function(t){var r;return ms(Us,t)||"ArrayBuffer"==(r=gs(t))||"SharedArrayBuffer"==r},Zs=function(t,r){return zs(t)&&!As(r)&&r in t&&ls(+r)&&r>=0},$s=function(t,r){return r=vs(r),Zs(t,r)?cs(2,t[r]):Ls(t,r)},Qs=function(t,r,e){return r=vs(r),!(Zs(t,r)&&bs(e)&&ds(e,"value"))||ds(e,"get")||ds(e,"set")||e.configurable||ds(e,"writable")&&!e.writable||ds(e,"enumerable")&&!e.enumerable?_s(t,r,e):(t[r]=e.value,t)};os?(Ns||(Ms.f=$s,xs.f=Qs,Xs(Ws,"buffer"),Xs(Ws,"byteOffset"),Xs(Ws,"byteLength"),Xs(Ws,"length")),rs({target:"Object",stat:!0,forced:!Ns},{getOwnPropertyDescriptor:$s,defineProperty:Qs}),fa.exports=function(t,r,e){var n=t.match(/\d+$/)[0]/8,o=t+(e?"Clamped":"")+"Array",i="get"+t,a="set"+t,u=es[o],f=u,c=f&&f.prototype,s={},l=function(t,r){_s(t,r,{get:function(){return function(t,r){var e=Is(t);return e.view[i](r*n+e.byteOffset,!0)}(this,r)},set:function(t){return function(t,r,o){var i=Is(t);e&&(o=(o=ks(o))<0?0:o>255?255:255&o),i.view[a](r*n+i.byteOffset,o,!0)}(this,r,t)},enumerable:!0})};Ns?is&&(f=r((function(t,r,e,o){return fs(t,c),js(bs(r)?Ks(r)?void 0!==o?new u(r,ps(e,n),o):void 0!==e?new u(r,ps(e,n)):new u(r):zs(r)?Js(f,r):ns(Es,f,r):new u(hs(r)),t,f)})),Ts&&Ts(f,Ys),Ss(Os(u),(function(t){t in f||ss(f,t,u[t])})),f.prototype=c):(f=r((function(t,r,e,o){fs(t,c);var i,a,u,s=0,y=0;if(bs(r)){if(!Ks(r))return zs(r)?Js(f,r):ns(Es,f,r);i=r,y=ps(e,n);var h=r.byteLength;if(void 0===o){if(h%n)throw Cs(Hs);if((a=h-y)<0)throw Cs(Hs)}else if((a=ys(o)*n)+y>h)throw Cs(Hs);u=a/n}else u=hs(r),i=new Fs(a=u*n);for(Ps(t,{buffer:i,byteOffset:y,byteLength:a,length:u,view:new Ds(i)});s<u;)l(t,s++)})),Ts&&Ts(f,Ys),c=f.prototype=ws(Ws)),c.constructor!==f&&ss(c,"constructor",f),ss(c,Bs,f),Vs&&ss(c,Vs,o),s[o]=f,rs({global:!0,forced:f!=u,sham:!Ns},s),qs in f||ss(f,qs,n),qs in c||ss(c,qs,n),Rs(o)}):fa.exports=function(){},(0,fa.exports)("Float32",(function(t){return function(r,e,n){return t(this,r,e,n)}}));var tl=Ct,rl=$e,el=nn,nl=Math.min,ol=Xa,il=S([].copyWithin||function(t,r){var e=tl(this),n=el(e),o=rl(t,n),i=rl(r,n),a=arguments.length>2?arguments[2]:void 0,u=nl((void 0===a?n:rl(a,n))-i,n-o),f=1;for(i<o&&o<i+u&&(f=-1,i+=u-1,o+=u-1);u-- >0;)i in e?e[o]=e[i]:delete e[o],o+=f,i+=f;return e}),al=ol.aTypedArray;(0,ol.exportTypedArrayMethod)("copyWithin",(function(t,r){return il(al(this),t,r,arguments.length>2?arguments[2]:void 0)}));var ul=Hc.every,fl=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("every",(function(t){return ul(fl(this),t,arguments.length>1?arguments[1]:void 0)}));var cl=y,sl=mu,ll=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("fill",(function(t){var r=arguments.length;return cl(sl,ll(this),t,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)}));var yl=nn,hl=Lr,pl=fc,vl=tr("species"),dl=function(t,r){var e,n=hl(t).constructor;return void 0===n||null==(e=hl(n)[vl])?r:pl(e)},gl=Xa.TYPED_ARRAY_CONSTRUCTOR,bl=Xa.aTypedArrayConstructor,Al=function(t){return bl(dl(t,t[gl]))},wl=function(t,r){for(var e=0,n=yl(r),o=new t(n);n>e;)o[e]=r[e++];return o},ml=Al,Tl=Hc.filter,Ol=function(t,r){return wl(ml(t),r)},El=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("filter",(function(t){var r=Tl(El(this),t,arguments.length>1?arguments[1]:void 0);return Ol(this,r)}));var Sl=Hc.find,Rl=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("find",(function(t){return Sl(Rl(this),t,arguments.length>1?arguments[1]:void 0)}));var xl=Hc.findIndex,Ml=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("findIndex",(function(t){return xl(Ml(this),t,arguments.length>1?arguments[1]:void 0)}));var jl=Hc.forEach,Il=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("forEach",(function(t){jl(Il(this),t,arguments.length>1?arguments[1]:void 0)}));var Pl=cn.includes,_l=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("includes",(function(t){return Pl(_l(this),t,arguments.length>1?arguments[1]:void 0)}));var Ll=cn.indexOf,kl=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("indexOf",(function(t){return Ll(kl(this),t,arguments.length>1?arguments[1]:void 0)}));var Cl=i,Fl=u,Ul=S,Dl=Xa,Nl=ra,Bl=tr("iterator"),Vl=Cl.Uint8Array,Yl=Ul(Nl.values),Wl=Ul(Nl.keys),Gl=Ul(Nl.entries),zl=Dl.aTypedArray,ql=Dl.exportTypedArrayMethod,Hl=Vl&&Vl.prototype,Jl=!Fl((function(){Hl[Bl].call([1])})),Xl=!!Hl&&Hl.values&&Hl[Bl]===Hl.values&&"values"===Hl.values.name,Kl=function(){return Yl(zl(this))};ql("entries",(function(){return Gl(zl(this))}),Jl),ql("keys",(function(){return Wl(zl(this))}),Jl),ql("values",Kl,Jl||!Xl,{name:"values"}),ql(Bl,Kl,Jl||!Xl,{name:"values"});var Zl=Xa.aTypedArray,$l=Xa.exportTypedArrayMethod,Ql=S([].join);$l("join",(function(t){return Ql(Zl(this),t)}));var ty=c,ry=Function.prototype,ey=ry.apply,ny=ry.call,oy="object"==typeof Reflect&&Reflect.apply||(ty?ny.bind(ey):function(){return ny.apply(ey,arguments)}),iy=u,ay=oy,uy=B,fy=Je,cy=nn,sy=function(t,r){var e=[][t];return!!e&&iy((function(){e.call(null,r||function(){return 1},1)}))},ly=Math.min,yy=[].lastIndexOf,hy=!!yy&&1/[1].lastIndexOf(1,-0)<0,py=sy("lastIndexOf"),vy=oy,dy=hy||!py?function(t){if(hy)return ay(yy,this,arguments)||0;var r=uy(this),e=cy(r),n=e-1;for(arguments.length>1&&(n=ly(n,fy(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return-1}:yy,gy=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("lastIndexOf",(function(t){var r=arguments.length;return vy(dy,gy(this),r>1?[t,arguments[1]]:[t])}));var by=Hc.map,Ay=Al,wy=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("map",(function(t){return by(wy(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(Ay(t))(r)}))}));var my=bt,Ty=Ct,Oy=C,Ey=nn,Sy=i.TypeError,Ry=function(t){return function(r,e,n,o){my(e);var i=Ty(r),a=Oy(i),u=Ey(i),f=t?u-1:0,c=t?-1:1;if(n<2)for(;;){if(f in a){o=a[f],f+=c;break}if(f+=c,t?f<0:u<=f)throw Sy("Reduce of empty array with no initial value")}for(;t?f>=0:u>f;f+=c)f in a&&(o=e(o,a[f],f,i));return o}},xy={left:Ry(!1),right:Ry(!0)},My=xy.left,jy=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("reduce",(function(t){var r=arguments.length;return My(jy(this),t,r,r>1?arguments[1]:void 0)}));var Iy=xy.right,Py=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("reduceRight",(function(t){var r=arguments.length;return Iy(Py(this),t,r,r>1?arguments[1]:void 0)}));var _y=Xa.aTypedArray,Ly=Xa.exportTypedArrayMethod,ky=Math.floor;Ly("reverse",(function(){for(var t,r=this,e=_y(r).length,n=ky(e/2),o=0;o<n;)t=r[o],r[o++]=r[--e],r[e]=t;return r}));var Cy=i,Fy=y,Uy=Xa,Dy=nn,Ny=Bf,By=Ct,Vy=u,Yy=Cy.RangeError,Wy=Cy.Int8Array,Gy=Wy&&Wy.prototype,zy=Gy&&Gy.set,qy=Uy.aTypedArray,Hy=Uy.exportTypedArrayMethod,Jy=!Vy((function(){var t=new Uint8ClampedArray(2);return Fy(zy,t,{length:1,0:3},1),3!==t[1]})),Xy=Jy&&Uy.NATIVE_ARRAY_BUFFER_VIEWS&&Vy((function(){var t=new Wy(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));Hy("set",(function(t){qy(this);var r=Ny(arguments.length>1?arguments[1]:void 0,1),e=By(t);if(Jy)return Fy(zy,this,e,r);var n=this.length,o=Dy(e),i=0;if(o+r>n)throw Yy("Wrong length");for(;i<o;)this[r+i]=e[i++]}),!Jy||Xy);var Ky=S([].slice),Zy=Al,$y=Ky,Qy=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("slice",(function(t,r){for(var e=$y(Qy(this),t,r),n=Zy(this),o=0,i=e.length,a=new n(i);i>o;)a[o]=e[o++];return a}),u((function(){new Int8Array(1).slice()})));var th=Hc.some,rh=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("some",(function(t){return th(rh(this),t,arguments.length>1?arguments[1]:void 0)}));var eh=Iu,nh=Math.floor,oh=function(t,r){var e=t.length,n=nh(e/2);return e<8?ih(t,r):ah(t,oh(eh(t,0,n),r),oh(eh(t,n),r),r)},ih=function(t,r){for(var e,n,o=t.length,i=1;i<o;){for(n=i,e=t[i];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==i++&&(t[n]=e)}return t},ah=function(t,r,e,n){for(var o=r.length,i=e.length,a=0,u=0;a<o||u<i;)t[a+u]=a<o&&u<i?n(r[a],e[u])<=0?r[a++]:e[u++]:a<o?r[a++]:e[u++];return t},uh=oh,fh=X.match(/firefox\/(\d+)/i),ch=!!fh&&+fh[1],sh=/MSIE|Trident/.test(X),lh=X.match(/AppleWebKit\/(\d+)\./),yh=!!lh&&+lh[1],hh=S,ph=u,vh=bt,dh=uh,gh=ch,bh=sh,Ah=et,wh=yh,mh=Xa.aTypedArray,Th=Xa.exportTypedArrayMethod,Oh=i.Uint16Array,Eh=Oh&&hh(Oh.prototype.sort),Sh=!(!Eh||ph((function(){Eh(new Oh(2),null)}))&&ph((function(){Eh(new Oh(2),{})}))),Rh=!!Eh&&!ph((function(){if(Ah)return Ah<74;if(gh)return gh<67;if(bh)return!0;if(wh)return wh<602;var t,r,e=new Oh(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(Eh(e,(function(t,r){return(t/4|0)-(r/4|0)})),t=0;t<516;t++)if(e[t]!==n[t])return!0}));Th("sort",(function(t){return void 0!==t&&vh(t),Rh?Eh(this,t):dh(mh(this),function(t){return function(r,e){return void 0!==t?+t(r,e)||0:e!=e?-1:r!=r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e}}(t))}),!Rh||Sh);var xh=rn,Mh=$e,jh=Al,Ih=Xa.aTypedArray;(0,Xa.exportTypedArrayMethod)("subarray",(function(t,r){var e=Ih(this),n=e.length,o=Mh(t,n);return new(jh(e))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,xh((void 0===r?n:Mh(r,n))-o))}));var Ph=oy,_h=Xa,Lh=u,kh=Ky,Ch=i.Int8Array,Fh=_h.aTypedArray,Uh=_h.exportTypedArrayMethod,Dh=[].toLocaleString,Nh=!!Ch&&Lh((function(){Dh.call(new Ch(1))}));Uh("toLocaleString",(function(){return Ph(Dh,Nh?kh(Fh(this)):Fh(this),kh(arguments))}),Lh((function(){return[1,2].toLocaleString()!=new Ch([1,2]).toLocaleString()}))||!Lh((function(){Ch.prototype.toLocaleString.call([1,2])})));var Bh=Xa.exportTypedArrayMethod,Vh=u,Yh=S,Wh=i.Uint8Array,Gh=Wh&&Wh.prototype||{},zh=[].toString,qh=Yh([].join);Vh((function(){zh.call({})}))&&(zh=function(){return qh(this)});var Hh=Gh.toString!=zh;Bh("toString",zh,Hh);var Jh=u,Xh=et,Kh=tr("species"),Zh=Hc.map;qn({target:"Array",proto:!0,forced:!function(t){return Xh>=51||!Jh((function(){var r=[];return(r.constructor={})[Kh]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}("map")},{map:function(t){return Zh(this,t,arguments.length>1?arguments[1]:void 0)}});var $h=f,Qh=S,tp=y,rp=u,ep=po,np=An,op=h,ip=Ct,ap=C,up=Object.assign,fp=Object.defineProperty,cp=Qh([].concat),sp=!up||rp((function(){if($h&&1!==up({b:1},up(fp({},"a",{enumerable:!0,get:function(){fp(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},r={},e=Symbol(),n="abcdefghijklmnopqrst";return t[e]=7,n.split("").forEach((function(t){r[t]=t})),7!=up({},t)[e]||ep(up({},r)).join("")!=n}))?function(t,r){for(var e=ip(t),n=arguments.length,o=1,i=np.f,a=op.f;n>o;)for(var u,f=ap(arguments[o++]),c=i?cp(ep(f),i(f)):ep(f),s=c.length,l=0;s>l;)u=c[l++],$h&&!tp(a,f,u)||(e[u]=f[u]);return e}:up;qn({target:"Object",stat:!0,forced:Object.assign!==sp},{assign:sp});var lp=function(){function t(r){var e=r.anchor,n=void 0===e?{lat:0,lng:0,altitude:0}:e,o=r.rotation,i=void 0===o?new Float32Array([0,0,0]):o,a=r.scale,u=void 0===a?new Float32Array([1,1,1]):a,f=r.scene,c=r.THREE,s=r.map;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.overlay=new google.maps.WebGLOverlayView,this.renderer=null,this.camera=null,this.anchor=n,this.rotation=i,this.scale=u,this.THREE=c,this.scene=null!=f?f:new this.THREE.Scene,this.scene.rotation.x=Math.PI/2,this.overlay.onAdd=this.onAdd.bind(this),this.overlay.onRemove=this.onRemove.bind(this),this.overlay.onContextLost=this.onContextLost.bind(this),this.overlay.onContextRestored=this.onContextRestored.bind(this),this.overlay.onDraw=this.onDraw.bind(this),this.camera=new this.THREE.PerspectiveCamera,s&&this.setMap(s)}return function(t,r,n){r&&e(t.prototype,r),n&&e(t,n)}(t,[{key:"onStateUpdate",value:function(t){this.overlay.onStateUpdate(t)}},{key:"requestStateUpdate",value:function(){this.overlay.requestStateUpdate()}},{key:"onAdd",value:function(){}},{key:"onRemove",value:function(){}},{key:"getMap",value:function(){return this.overlay.getMap()}},{key:"requestRedraw",value:function(){this.overlay.requestRedraw()}},{key:"setMap",value:function(t){this.overlay.setMap(t)}},{key:"addListener",value:function(t,r){return this.overlay.addListener(t,r)}},{key:"bindTo",value:function(t,r,e,n){this.overlay.bindTo(t,r,e,n)}},{key:"get",value:function(t){return this.overlay.get(t)}},{key:"notify",value:function(t){this.overlay.notify(t)}},{key:"set",value:function(t,r){this.overlay.set(t,r)}},{key:"setValues",value:function(t){this.overlay.setValues(t)}},{key:"unbind",value:function(t){this.overlay.unbind(t)}},{key:"unbindAll",value:function(){this.overlay.unbindAll()}},{key:"onContextRestored",value:function(t){var r=t.gl;this.renderer=new this.THREE.WebGLRenderer(Object.assign({canvas:r.canvas,context:r},r.getContextAttributes())),this.renderer.autoClear=!1,this.renderer.autoClearDepth=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.THREE.PCFSoftShadowMap,this.renderer.outputEncoding=this.THREE.sRGBEncoding;var e=r.canvas,n=e.width,o=e.height,i=e.clientWidth;this.renderer.setPixelRatio(n/i),this.renderer.setSize(n,o,!1)}},{key:"onContextLost",value:function(){this.renderer&&(this.renderer.dispose(),this.renderer=null)}},{key:"onDraw",value:function(t){var r=t.gl,e=t.transformer;this.camera.projectionMatrix.fromArray(e.fromLatLngAltitude(this.anchor,this.rotation,this.scale)),r.disable(r.SCISSOR_TEST),this.requestRedraw(),this.renderer.render(this.scene,this.camera),this.renderer.resetState()}}]),t}(),yp=y;qn({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return yp(URL.prototype.toString,this)}}),qn({target:"Math",stat:!0},{sign:Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}});var hp=6371010,pp=Math.PI*hp;function vp(t){return t=function(t){return window.google&&google.maps&&t instanceof google.maps.LatLng?t.toJSON():t}(t),{x:hp*r.MathUtils.degToRad(t.lng),y:0-hp*Math.log(Math.tan(.5*(.5*Math.PI-r.MathUtils.degToRad(t.lat))))}}function dp(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new r.Vector3,n=vp(t),o=n.x,i=n.y;return e.set(o,0,-i)}return t.EARTH_RADIUS=hp,t.ThreeJSOverlayView=lp,t.WORLD_SIZE=pp,t.latLngToMeters=vp,t.latLngToVector3=dp,t.latLngToVector3Relative=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new r.Vector3,o=dp(t),i=dp(e);return n.setX(Math.abs(i.x-o.x)*Math.sign(o.x-i.x)),n.setY(Math.abs(i.y-o.y)*Math.sign(o.y-i.y)),n.setZ(Math.abs(i.z-o.z)*Math.sign(o.z-i.z)),n},Object.defineProperty(t,"__esModule",{value:!0}),t}({},three);
//# sourceMappingURL=index.dev.js.map
