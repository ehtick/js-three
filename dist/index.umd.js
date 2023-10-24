!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("three")):"function"==typeof define&&define.amd?define(["exports","three"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).google=e.google||{},e.google.maps=e.google.maps||{},e.google.maps.plugins=e.google.maps.plugins||{},e.google.maps.plugins.three={}),e.THREE)}(this,(function(e,t){"use strict";const{atan:r,cos:n,exp:i,log:o,tan:a,PI:s}=Math,{degToRad:h,radToDeg:l}=t.MathUtils,d=6371010,c=Math.PI*d;function g(e){return window.google&&google.maps&&(e instanceof google.maps.LatLng||e instanceof google.maps.LatLngAltitude)?{altitude:0,...e.toJSON()}:{altitude:0,...e}}function p(e,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new t.Vector3;const[o,a]=u(e),[s,l]=u(r);return i.set(o-s,a-l,0),i.multiplyScalar(n(h(r.lat))),i.z=e.altitude-r.altitude,i}function u(e){return[d*h(e.lng),d*o(a(.25*s+.5*h(e.lat)))]}const y=new t.Vector3(0,0,1);e.EARTH_RADIUS=d,e.ThreeJSOverlayView=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.animationMode="ondemand",this.rotationArray=new Float32Array(3),this.rotationInverse=new t.Quaternion,this.projectionMatrixInverse=new t.Matrix4,this.raycaster=new t.Raycaster;const{anchor:r={lat:0,lng:0,altitude:0},upAxis:n="Z",scene:i,map:o,animationMode:a="ondemand",addDefaultLighting:s=!0}=e;this.overlay=new google.maps.WebGLOverlayView,this.renderer=null,this.camera=null,this.animationMode=a,this.setAnchor(r),this.setUpAxis(n),this.scene=i??new t.Scene,s&&this.initSceneLights(),this.overlay.onAdd=this.onAdd.bind(this),this.overlay.onRemove=this.onRemove.bind(this),this.overlay.onContextLost=this.onContextLost.bind(this),this.overlay.onContextRestored=this.onContextRestored.bind(this),this.overlay.onStateUpdate=this.onStateUpdate.bind(this),this.overlay.onDraw=this.onDraw.bind(this),this.camera=new t.PerspectiveCamera,o&&this.setMap(o)}setAnchor(e){this.anchor=g(e)}setUpAxis(e){const r=new t.Vector3(0,0,1);"string"!=typeof e?r.copy(e):"y"===e.toLowerCase()?r.set(0,1,0):"z"!==e.toLowerCase()&&console.warn(`invalid value '${e}' specified as upAxis`),r.normalize();const n=new t.Quaternion;n.setFromUnitVectors(r,y),this.rotationInverse.copy(n).invert();const i=(new t.Euler).setFromQuaternion(n,"XYZ");this.rotationArray[0]=t.MathUtils.radToDeg(i.x),this.rotationArray[1]=t.MathUtils.radToDeg(i.y),this.rotationArray[2]=t.MathUtils.radToDeg(i.z)}raycast(e,t){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Array.isArray(t)?r=t||null:(r=[this.scene],n={...t,recursive:!0});const{updateMatrix:i=!0,recursive:o=!1,raycasterParameters:a}=n;i&&this.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.raycaster.ray.origin.set(e.x,e.y,0).applyMatrix4(this.projectionMatrixInverse),this.raycaster.ray.direction.set(e.x,e.y,.5).applyMatrix4(this.projectionMatrixInverse).sub(this.raycaster.ray.origin).normalize();const s=this.raycaster.params;a&&(this.raycaster.params=a);const h=this.raycaster.intersectObjects(r,o);return this.raycaster.params=s,h}onStateUpdate(){}onAdd(){}onBeforeDraw(){}onRemove(){}requestStateUpdate(){this.overlay.requestStateUpdate()}requestRedraw(){this.overlay.requestRedraw()}getMap(){return this.overlay.getMap()}setMap(e){this.overlay.setMap(e)}addListener(e,t){return this.overlay.addListener(e,t)}onContextRestored(e){let{gl:r}=e;this.renderer=new t.WebGLRenderer({canvas:r.canvas,context:r,...r.getContextAttributes()}),this.renderer.autoClear=!1,this.renderer.autoClearDepth=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=t.PCFSoftShadowMap,Number(t.REVISION)<152&&(this.renderer.outputEncoding=t.sRGBEncoding);const{width:n,height:i}=r.canvas;this.renderer.setViewport(0,0,n,i)}onContextLost(){this.renderer&&(this.renderer.dispose(),this.renderer=null)}onDraw(e){let{gl:t,transformer:r}=e;this.camera.projectionMatrix.fromArray(r.fromLatLngAltitude(this.anchor,this.rotationArray)),t.disable(t.SCISSOR_TEST),this.onBeforeDraw(),this.renderer.render(this.scene,this.camera),this.renderer.resetState(),"always"===this.animationMode&&this.requestRedraw()}latLngAltitudeToVector3(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new t.Vector3;return p(g(e),this.anchor,r),r.applyQuaternion(this.rotationInverse),r}bindTo(e,t,r,n){this.overlay.bindTo(e,t,r,n)}get(e){return this.overlay.get(e)}notify(e){this.overlay.notify(e)}set(e,t){this.overlay.set(e,t)}setValues(e){this.overlay.setValues(e)}unbind(e){this.overlay.unbind(e)}unbindAll(){this.overlay.unbindAll()}initSceneLights(){const e=new t.HemisphereLight(16777215,4473924,1);e.position.set(0,-.2,1).normalize();const r=new t.DirectionalLight(16777215);r.position.set(0,10,100),this.scene.add(e,r)}},e.WORLD_SIZE=c,e.latLngToVector3Relative=p,e.latLngToXY=u,e.toLatLngAltitudeLiteral=g,e.xyToLatLng=function(e){const[t,n]=e;return{lat:l(.5*s-2*r(i(-n/d))),lng:l(t)/d}}}));
//# sourceMappingURL=index.umd.js.map
