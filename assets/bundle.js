!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=Object.freeze({wall:"x",player:"@",lava:"*",coin:"o",void:"-",spikes:"^"});const i=r.player,s=r.wall,o=r.coin,c=r.void;r.lava;var a=[[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,o,c,r.spikes,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,s,s,s,s,c,c,o,o,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,s,s,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,s,c,c,c,c,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[i,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c]];const l=r.wall,h=r.coin,d=r.void,m=r.spikes;var u=[[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,m,m,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,l,l,l,l,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d],[d,d,d,d,d,d,d,d,d,d,h,h,d,d,d,d,d,d,d,d,d,d,d,d],[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d]];const b=r.wall,_=(r.coin,r.void),y=r.spikes;var g=[[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,_,_,_,_,_,_,_,_,_,b,b,b,b,b,_,_,_,_,_,_],[_,_,_,_,_,_,_,_,_,_,_,_,_,y,y,y,y,y,_,_,_,_,_,_],[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,_,_,_,b,_,_,b,b,b,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,_,_,b,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,_,b,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[_,_,_,_,b,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],[b,b,b,b,_,_,_,_,_,_,_,_,b,b,b,b,b,b,b,b,b,b,b,b],[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_]];const w=r.wall,p=r.coin,f=r.void,v=r.spikes,j=r.lava;var E=[a,u,g,[[f,f,f,f,f,f,f,f,f,f,f,f,f,f,w,w,w,w,f,f,f,f,f,f],[f,f,f,f,f,f,f,f,f,w,f,f,f,f,p,f,f,w,f,f,f,f,f,f],[f,f,f,f,f,f,f,f,p,v,f,f,f,f,w,f,f,w,f,f,f,f,f,f],[f,f,f,f,p,v,f,f,w,w,j,j,w,j,j,w,f,w,f,f,f,f,f,f],[f,f,f,f,w,w,f,f,f,w,w,w,w,w,w,w,f,w,f,f,f,f,f,f],[f,f,f,f,f,f,f,w,f,f,f,f,f,f,f,w,f,w,f,f,f,f,f,f],[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,w,f,w,f,f,v,p,f,f],[f,f,f,f,f,f,f,w,f,f,f,f,f,f,f,w,f,w,f,f,w,w,f,f],[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,w,f,w,f,f,f,f,f,w],[f,f,f,f,w,w,w,w,f,f,f,f,f,f,f,w,f,w,f,f,f,f,f,f],[w,w,w,w,f,f,f,f,f,f,f,f,f,f,w,f,p,f,f,f,v,f,f,w],[f,f,f,f,f,f,f,f,f,f,f,f,f,f,w,w,w,w,w,w,w,w,w,w]]];const S=Object.freeze({background:"#22bbbb","objects-cube":"#00ffed","objects-coin":"#cccc00","objects-wall-body":"#222222","objects-wall-border":"#eeeeee","objects-player":"#0087ff","objects-spike":"#ff0000","menu-background":"#6f738e"});for(const e in S){if("string"!=typeof S[e])continue;x="--"+e+"-color",k=S[e],document.getElementsByTagName("html")[0].style.setProperty(x,k)}var x,k,B=S;class M{static getBlockTypeBySymbol(e=""){for(const t in r)if(r[t]===e)return t;return""}}const O=window.THREE;class L{constructor(e=16777215){this._geometry=new O.BoxGeometry(.85,.85,.85),this._material=new O.MeshBasicMaterial({color:e}),this._object=new O.Mesh(this._geometry,this._material),this.getObject=this.getObject.bind(this)}getObject(){return this._object}}const A=window.THREE;class C extends L{constructor(){super(new A.Color(B["objects-wall-body"]));const e=new A.LineSegments(new A.EdgesGeometry(this._object.geometry),new A.LineBasicMaterial({color:B["objects-wall-border"],linewidth:1}));e.renderOrder=1,this._object.add(e)}}const T=window.THREE;class I{constructor(){this._geometry=new T.TorusGeometry(.2,.05,16,100),this._material=new T.MeshBasicMaterial({color:B["objects-coin"]}),this._object=new T.Mesh(this._geometry,this._material),this._rotationSpeed=.075*Math.random()+.025,this._rotationDir=Math.random()>.5,this.getObject=this.getObject.bind(this),this._rotate=this._rotate.bind(this),this._rotate()}getObject(){return this._object}_rotate(){this._rotationDir?this._object.rotation.y+=this._rotationSpeed:this._object.rotation.y-=this._rotationSpeed,requestAnimationFrame(this._rotate)}}const P=window.THREE;class R{constructor(){this._geometry=new P.BoxGeometry(.85,.85,.85),this._material=new P.MeshBasicMaterial({color:B["objects-player"]}),this._object=new P.Mesh(this._geometry,this._material),this.getObject=this.getObject.bind(this)}getObject(){return this._object}}const z=window.THREE;class H{constructor(){this._geometry=new z.BoxGeometry(.85,.85,.85),this._material=new z.MeshBasicMaterial({color:B["objects-spike"]}),this._object=new z.Mesh(this._geometry,this._material),this.getObject=this.getObject.bind(this)}getObject(){return this._object}}const F=window.THREE;class G{constructor(){this._scene=new F.Scene,this._scene.background=new F.Color(new F.Color(B.background)),this._camera=new F.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this._scene.add(this._camera),this._renderer=new F.WebGLRenderer({antialias:!0}),this._renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",e=>this._renderer.setSize(window.innerWidth,window.innerHeight)),document.body.appendChild(this._renderer.domElement),this._incrementors={camera:{x:0,y:5,z:10}},this.getScene=this.getScene.bind(this),this.getRenderer=this.getRenderer.bind(this),this.buildLevel=this.buildLevel.bind(this),this.insertBlockIntoScene=this.insertBlockIntoScene.bind(this),this.listenForCameraMovements=this.listenForCameraMovements.bind(this),this.animateCameraPosition=this.animateCameraPosition.bind(this),this.clearScene=this.clearScene.bind(this)}getScene(){return this._scene}getRenderer(){return this._renderer}getCamera(){return this._camera}getIncrementors(){return this._incrementors}buildLevel(e=[]){if(Array.isArray(e)){for(let t=0;t<e.length;t++){const n=e[t];if(!Array.isArray(n))return;for(let e=0;e<n.length;e++){const r=M.getBlockTypeBySymbol(n[e]),i=G.getBlockByType(r);this.insertBlockIntoScene(i,{x:e,y:t})}}return this}}insertBlockIntoScene(e,t){if(!e)return;const n=t.x-11.5,r=-1*t.y+8;this._scene.add(e),e.position.set(n,r,0)}static getBlockByType(e=""){let t=null;switch(e){case"wall":t=new C;break;case"coin":t=new I;break;case"player":t=new R;break;case"spikes":t=new H}return t&&t.getObject?t.getObject():null}listenForCameraMovements(){let e=!1,t={};return this._renderer.domElement.addEventListener("wheel",t=>{e=!1,t.deltaY<0?this._incrementors.camera.z>=5&&(this._incrementors.camera.z-=.6):this._incrementors.camera.z<=35&&(this._incrementors.camera.z+=.6)}),this._renderer.domElement.addEventListener("mousedown",t=>{e=!0}),this._renderer.domElement.addEventListener("mouseup",t=>{e=!1}),this._renderer.domElement.addEventListener("mousemove",n=>{if(!e)return;t.x||(t={x:n.x,y:n.y});const r={x:n.x,y:n.y},i=t.x<r.x,s=t.x>r.x;i?this._incrementors.camera.x<17.5&&(this._incrementors.camera.x+=.25):s&&this._incrementors.camera.x>-17.5&&(this._incrementors.camera.x-=.25),t=r}),this}animateCameraPosition(){this._camera.position.x=this._incrementors.camera.x,this._camera.position.y=this._incrementors.camera.y,this._camera.position.z=this._incrementors.camera.z,this._camera.lookAt(new F.Vector3(0,0,0))}clearScene(){for(;this._scene.children.length>0;)this._scene.remove(this._scene.children[0]);return this}}var q=(e,t)=>{e.getIncrementors();const n=e.getScene(),r=e.getCamera(),i=e.getRenderer();e.clearScene().buildLevel(t).listenForCameraMovements(),function t(){e.animateCameraPosition(),i.render(n,r),requestAnimationFrame(t)}()};class D{constructor(e){e||(e=document.body),this._domParent=e,this._domElement=this._buildDomElement(),this._domParent.appendChild(this._domElement),this.getIncrementors=this.getIncrementors.bind(this),this.clearScene=this.clearScene.bind(this),this.buildLevel=this.buildLevel.bind(this)}getIncrementors(){return this._incrementors}_buildDomElement(){const e=document.createElement("div");return e.setAttribute("class","dom-engine-wrapper"),e}clearScene(){return this._domElement.innerHTML="",this}buildLevel(e){if(Array.isArray(e)){for(let t=0;t<e.length;t++){const n=e[t],r=[];if(!Array.isArray(n))return;for(let e=0;e<n.length;e++)r.push(M.getBlockTypeBySymbol(n[e]));this._appendRow(r)}return this}}_appendRow(e=[]){const t=document.createElement("div");t.setAttribute("class","row"),e.forEach(e=>{const n=document.createElement("span");n.setAttribute("class","block "+e),t.appendChild(n)}),this._domElement.appendChild(t)}}var W=(e,t)=>{e.getIncrementors();e.clearScene().buildLevel(t),function e(){requestAnimationFrame(e)}()};const N=function*(e){let t=0;for(;;)yield e[t++%e.length]}(E),V=N.next().value;document.querySelectorAll("#slideAnimation .play-btn").forEach(e=>{e.addEventListener("click",function(){const t=e.getAttribute("data-mode");let n=null,r=null;"3d"===t?(n=new G,r=q):(n=new D(document.getElementById("main")),r=W),r(n,V);const i=document.getElementById("slideAnimation");i.innerHTML="",i.style.transform="scale(0)",document.getElementById("next-level-btn").addEventListener("click",e=>{r(n,N.next().value)})})})}]);