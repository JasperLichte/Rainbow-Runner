!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r,o=Object.freeze({"canvas-background":"#909ede","objects-cube":"#00ffed","objects-coin":"#cccc00","objects-wall-body":"#222222","objects-wall-border":"#eeeeee","objects-player":"#0087ff","objects-spikes":"#ad1818","objects-diamond":"#c300ff","ui-menu-background":"#6f738e","ui-menu-wrapper-background":"#222","ui-menu-wrapper-font":"#eee","ui-menu-hamburger-button":"#ffffff"}),i=function(){function t(t){void 0===t&&(t=""),this.mode=t,this._mode="",this._incrementors={},this._player=null}return t.prototype.getMode=function(){return this._mode},t.prototype.getIncrementors=function(){return this._incrementors},t.prototype.render=function(){return this},t.prototype.buildLevel=function(t){return void 0===t&&(t=[]),this},t.prototype.insertBlockIntoScene=function(t,e){return this},t.prototype.listenForCameraMovements=function(){return this},t.prototype.animateCameraPosition=function(){return this},t.prototype.clearScene=function(){return this},t.prototype.handleResize=function(){return this},t.prototype.getPlayer=function(){return this._player},t}(),s=Object.freeze({wall:"x",player:"@",lava:"*",coin:"o",void:"-",spikes:"^",diamond:"<>"}),a=s.player,c=s.wall,u=s.coin,l=s.void,p=(s.lava,s.spikes),h=[[l,l,l,l,l,l,l,l,l,l,l,u,u,l,l,l,l,l,l,l,l,l,l,l],[l,l,l,l,l,l,l,c,c,c,c,c,c,c,c,c,c,c,l,l,l,l,l,l],[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],[l,l,l,l,c,c,l,l,l,l,l,l,l,l,l,l,l,l,l,p,p,u,l,l],[l,l,l,l,l,l,l,l,u,u,l,l,l,l,l,l,l,l,l,c,c,c,l,l],[l,l,l,l,l,l,l,c,c,c,c,l,l,u,p,l,l,l,l,l,l,l,l,l],[l,l,l,l,l,l,l,l,l,l,l,l,l,c,c,l,l,l,l,l,l,l,l,l],[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],[l,l,l,l,l,l,l,l,l,l,c,c,l,l,l,l,l,l,l,l,l,l,l,l],[a,l,s.diamond,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c],[l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l]],f=s.wall,_=s.coin,y=s.void,d=s.spikes,m=s.player,v=[[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,s.diamond,d,d,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,f,f,f,f,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y],[m,y,y,y,y,y,y,y,y,y,_,_,y,y,y,y,y,y,y,y,y,y,y,y],[f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],[y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y]],w=s.wall,b=s.void,g=s.spikes,E=[[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,w,w,w,w,w,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,g,g,g,g,g,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,w,b,b,w,w,w,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,w,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,w,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[s.player,b,b,b,w,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[w,w,w,w,b,b,b,b,b,b,b,b,w,w,w,w,w,w,w,w,w,w,w,w],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]],O=s.wall,x=s.coin,j=s.void,L=s.spikes,P=s.lava,I=s.player,A=s.diamond,C=[h,v,E,[[j,j,j,j,j,j,j,j,j,j,j,j,j,j,O,O,O,O,j,j,j,j,j,j],[j,j,j,j,j,j,j,j,j,O,j,j,j,j,x,j,j,O,j,j,j,j,j,j],[j,j,j,j,j,j,j,j,x,L,j,j,A,j,O,j,j,O,j,j,j,j,j,j],[j,j,j,j,x,L,j,j,O,O,P,P,O,P,P,O,j,O,j,j,j,j,j,j],[j,j,j,j,O,O,j,A,j,O,O,O,O,O,O,O,j,O,j,j,j,j,j,j],[j,j,j,j,j,j,j,O,j,j,j,j,j,j,j,O,j,O,j,j,j,j,j,j],[j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,O,j,O,j,j,L,x,j,j],[j,j,j,j,j,j,j,O,j,j,j,j,j,j,j,O,j,O,j,j,O,O,j,j],[j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,O,j,O,j,j,j,j,j,O],[I,j,j,j,O,O,O,O,j,j,j,j,j,j,j,O,j,O,j,j,j,j,j,j],[O,O,O,O,j,j,j,j,j,j,j,j,j,j,O,j,x,j,j,j,L,j,j,O],[j,j,j,j,j,j,j,j,j,j,j,j,j,j,O,O,O,O,O,O,O,O,O,O]]],M=Object.freeze({INVALID_RENDER_OBJECT:"Render object not provided",INVALID_POSITION_OBJECT:"Invalid position object! Expected an object like {x, y}",INVALID_LEVEL:"Received invalid level. Expected an array of arrays of chars."}),k=function(){function t(){this._currentLevelIndex=-1,this._currentLevel=this.nextLevel()}return t.getBlockTypeBySymbol=function(t){for(var e in void 0===t&&(t=""),s)if(s[e]===t)return e;return""},t.positionIsWall=function(e,n,r){if(!t.isValidLevel(r))throw new Error(M.INVALID_LEVEL);return!!t.positionIsInLevelBounds(e,n,r)&&"wall"===t.getBlockTypeBySymbol(r[n][e])},t.positionIsInLevelBounds=function(e,n,r){if(!t.isValidLevel(r))throw new Error(M.INVALID_LEVEL);return n<r.length&&e<r[0].length},t.prototype.getCurrentLevel=function(){return this._currentLevel},t.prototype.getCurrentLevelIndex=function(){return this._currentLevelIndex},t.prototype.getTotalLevels=function(){return C.length},t.prototype.nextLevel=function(){this._currentLevelIndex=(this._currentLevelIndex+1)%C.length;var t=C[this._currentLevelIndex];return this._currentLevel=t,t},t.isValidLevel=function(t){if(void 0===t&&(t=[]),!Array.isArray(t)||!t.length)return!1;for(var e=null,n=0;n<t.length;n++){if(!Array.isArray(t[n])||!t[n].length)return!1;if(e){if(t[n].length!==e)return!1}else e=t[n].length;for(var r=0;r<t[n];r++)if(!(t[n][r]in s))return!1}return!0},t.getLevelCenter=function(e){if(!t.isValidLevel(e))throw new Error(M.INVALID_LEVEL);return{y:e.length/2,x:e[0].length/2}},t}(),B={helpers:{levelHelper:null,renderHelper:null},menu:null},T=window.THREE,H=function(){function t(t){void 0===t&&(t="#ffffff"),this._geometry=new T.BoxGeometry(1,1,1),this._material=new T.MeshBasicMaterial({color:t}),this._object=new T.Mesh(this._geometry,this._material)}return t.prototype.getObject=function(){return this._object},t.prototype.tweakPosition=function(){},t.prototype.setInitialPosition=function(t){if(!t.hasOwnProperty("x")||!t.hasOwnProperty("y"))throw new Error(M.INVALID_POSITION_OBJECT);this._position={x:t.x,y:t.y}},t.prototype.getInitialPosition=function(){return this._position},t.prototype.move=function(t,e){return this._object.position.set(t,e,0),this},t}(),S=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),z=window.THREE,R=function(t){function e(){var e=t.call(this,o["objects-wall-body"])||this,n=new z.LineSegments(new z.EdgesGeometry(e._object.geometry),new z.LineBasicMaterial({color:o["objects-wall-border"],linewidth:1}));return n.renderOrder=1,e._object.add(n),e}return S(e,t),e}(H),D=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=(window.THREE,function(t){function e(e,n,r){void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===r&&(r="#ffffff");var o=t.call(this,r)||this;return o._rotationSpeed=.01,e&&(o._rotationSpeed=.05*Math.random()+.025),o._rotationDir=!0,n&&(o._rotationDir=Math.random()>.5),o._rotate=o._rotate.bind(o),o._rotate(),o}return D(e,t),e.prototype._rotate=function(){this._rotationDir?this._object.rotation.y+=this._rotationSpeed:this._object.rotation.y-=this._rotationSpeed,requestAnimationFrame(this._rotate)},e}(H)),V=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),F=window.THREE,W=function(t){function e(){var e=t.call(this,!0,!0,o["objects-coin"])||this;return e._geometry=new F.TorusGeometry(.2,.05,16,100),e._object=new F.Mesh(e._geometry,e._material),e}return V(e,t),e.prototype.tweakPosition=function(){this._object.position.y-=.2},e}(N),J=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),q=function(t){function e(){return t.call(this,o["objects-player"])||this}return J(e,t),e.prototype.tweakPosition=function(){this._object.position.y-=.15},e}(H),G=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),U=window.THREE,K=function(t){function e(){var e=t.call(this,o["objects-spikes"])||this;return e._geometry=new U.ConeGeometry(.3,.3,32),e._object=new U.Mesh(e._geometry,e._material),e}return G(e,t),e.prototype.tweakPosition=function(){this._object.position.y-=.425},e}(H),Z=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y=window.THREE,Q=function(t){function e(){var e=t.call(this,!0,!0,o["objects-diamond"])||this;return e._geometry=new Y.OctahedronGeometry(.3),e._object=new Y.Mesh(e._geometry,e._material),e}return Z(e,t),e.prototype.tweakPosition=function(){this._object.position.y-=.2},e}(N),X=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),$=window.THREE,tt=function(t){function e(){var e=t.call(this,"3d")||this;return e._scene=null,e._camera=null,e._renderer=null,e._cameraCenter=null,e._incrementors={camera:{x:null,y:null,z:null}},e._scene=new $.Scene,e._scene.background=new $.Color(o["canvas-background"]),e._camera=new $.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),e._scene.add(e._camera),e._renderer=new $.WebGLRenderer({antialias:!0}),e._renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(e._renderer.domElement),e._cameraCenter=k.getLevelCenter(B.helpers.levelHelper.getCurrentLevel()),e._incrementors={camera:{x:e._cameraCenter.x,y:-1*e._cameraCenter.y,z:15}},e}return X(e,t),e.prototype.render=function(){return this.animateCameraPosition(),this._renderer.render(this._scene,this._camera),this},e.prototype.buildLevel=function(t){if(void 0===t&&(t=[]),Array.isArray(t)){for(var n=0;n<t.length;n++){var r=t[n];if(!Array.isArray(r))return;for(var o=0;o<r.length;o++){var i=k.getBlockTypeBySymbol(r[o]),s=e.getBlockByType(i);"player"===i&&s&&(this._player=s),this.insertBlockIntoScene(s,{x:o,y:n})}}return this}},e.prototype.insertBlockIntoScene=function(t,e){var n=null;if(t&&t.getObject&&(n=t.getObject()),n){var r=e.x,o=-1*e.y;return this._scene.add(n),t.setInitialPosition({x:r,y:o}),n.position.set(r,o,0),t.tweakPosition&&t.tweakPosition(),this}},e.getBlockByType=function(t){switch(void 0===t&&(t=""),t){case"wall":return new R;case"coin":return new W;case"player":return new q;case"spikes":return new K;case"diamond":return new Q}return null},e.prototype.listenForCameraMovements=function(){var t=this,e=!1,n={x:null,y:null};return this._renderer.domElement.addEventListener("wheel",function(n){e=!1,n.deltaY<0?t._incrementors.camera.z>=2&&(t._incrementors.camera.z-=.6):t._incrementors.camera.z<=45&&(t._incrementors.camera.z+=.6)}),this._renderer.domElement.addEventListener("mousedown",function(t){e=!0}),this._renderer.domElement.addEventListener("mouseup",function(t){e=!1}),this._renderer.domElement.addEventListener("mousemove",function(r){if(e){n.x||(n={x:r.x,y:r.y});var o={x:r.x,y:r.y},i=n.x<o.x,s=n.x>o.x;i?t._incrementors.camera.x<35&&(t._incrementors.camera.x+=.25):s&&t._incrementors.camera.x>-35&&(t._incrementors.camera.x-=.25),n=o}}),this},e.prototype.animateCameraPosition=function(){return this._camera.position.x=this._incrementors.camera.x,this._camera.position.y=this._incrementors.camera.y,this._camera.position.z=this._incrementors.camera.z,this._camera.lookAt(new $.Vector3(this._cameraCenter.x,-1*this._cameraCenter.y,0)),this},e.prototype.clearScene=function(){for(;this._scene.children.length>0;)this._scene.remove(this._scene.children[0]);return this},e.prototype.handleResize=function(){var t=this;return window.addEventListener("resize",function(e){t._camera.aspect=window.innerWidth/window.innerHeight,t._camera.updateProjectionMatrix(),t._renderer.setSize(window.innerWidth,window.innerHeight)}),this},e}(i),et=function(){function t(t){void 0===t&&(t="void"),this._scale=50,this._size={width:0,height:0,depth:0},this._className=t.toLowerCase(),this._size={width:1,height:1,depth:1},this._object=this._buildObject()}return t.prototype._buildObject=function(){var t=document.createElement("span");return t.style.height=this._size.height*this._scale+"px",t.style.width=this._size.width*this._scale+"px",t.classList.add("block"),t.classList.add(this._className),t},t.prototype.getObject=function(){return this._object},t.prototype.getDimensions=function(){return this._size},t.prototype.setInitialPosition=function(t,e){if(void 0===e&&(e=!0),!t.hasOwnProperty("x")||!t.hasOwnProperty("y"))throw new Error(M.INVALID_POSITION_OBJECT);return this._position=t,this.move(t.x,t.y),e&&this.center(),this},t.prototype.getInitialPosition=function(){return this._position},t.prototype.move=function(t,e){return this._object.style.left=t*this._scale+"px",this._object.style.top=e*this._scale*-1+"px",this},t.prototype.center=function(){return this._object.style.left+=(1-this._size.width)*this._scale/2+"px",this._object.style.top+=(1-this._size.height)*this._scale/2+"px",this},t}(),nt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),rt=function(t){function e(){return t.call(this,"wall")||this}return nt(e,t),e}(et),ot=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),it=function(t){function e(){return t.call(this,"player")||this}return ot(e,t),e}(et),st=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),at=function(t){function e(){return t.call(this,"coin")||this}return st(e,t),e}(et),ct=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ut=function(t){function e(){return t.call(this,"spikes")||this}return ct(e,t),e}(et),lt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),pt=function(t){function e(){return t.call(this,"diamond")||this}return lt(e,t),e}(et),ht=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ft=function(t){function e(e){var n=t.call(this,"2d")||this;return n._domParent=e||document.body,n._domElement=n._buildDomElement(),n._domParent.appendChild(n._domElement),n}return ht(e,t),e.prototype._buildDomElement=function(){var t=document.createElement("div");return t.setAttribute("class","dom-engine-wrapper"),t},e.prototype.clearScene=function(){return this._domElement.innerHTML="",this},e.prototype.render=function(){return this.animateCameraPosition(),this},e.prototype.buildLevel=function(t){if(Array.isArray(t)){for(var n=0;n<t.length;n++){var r=t[n];if(!Array.isArray(r))return;for(var o=0;o<r.length;o++){var i=k.getBlockTypeBySymbol(r[o]),s=e.getBlockByType(i);this.insertBlockIntoScene(s,{x:o,y:n}),"player"===i&&s&&(this._player=s)}}return this}},e.prototype.insertBlockIntoScene=function(t,e){var n=null;if(t&&t.getObject&&(n=t.getObject()),n){var r=e.x,o=-1*e.y;return this._domElement.appendChild(n),t&&t.setInitialPosition({x:r,y:o},!0),this}},e.getBlockByType=function(t){switch(void 0===t&&(t=""),t){case"wall":return new rt;case"player":return new it;case"coin":return new at;case"spikes":return new ut;case"diamond":return new pt}return null},e}(i),_t=function(){function t(){t.remove(),this._domElement=document.createElement("div"),this._domElement.setAttribute("class","current-level-panel"),this._content=t.getContentByType(),this._domElement.innerHTML=this._content,document.body.appendChild(this._domElement)}return t.remove=function(){document.querySelectorAll(".current-level-panel").forEach(function(t){return t.remove()})},t.prototype.setContent=function(t){return void 0===t&&(t=""),this._domElement.innerHTML=this._content=t,this},t.prototype.getContent=function(){return this._content},t.getContentByType=function(t){return void 0===t&&(t=""),'\n          <div class="levelCounter">\n            <span class="currentLevelInd">'+(B.helpers.levelHelper.getCurrentLevelIndex()+1)+'</span>\n            <span class="slash">/</span>\n            <span class="totallevels">'+B.helpers.levelHelper.getTotalLevels()+'</span>\n          </div>\n          <button id="next-level-btn">Next Level</button>\n        '},t.prototype.listenForEvents=function(){return document.getElementById("next-level-btn").addEventListener("click",function(t){Et(B.helpers.renderHelper.getHelper(),B.helpers.levelHelper.nextLevel())}),this},t}(),yt=Object.freeze({ArrowUp:{action:"jump"},KeyD:{action:"moveForward"},ArrowRight:{action:"moveForward"},KeyA:{action:"moveBackward"},ArrowLeft:{action:"moveBackward"}}),dt=function(t,e){return t/1e5*e},mt=9.81,vt=Object.freeze({player:{x:.25,y:2.25}}),wt=Object.freeze({player:{x:.025,y:.4}}),bt=function(){function t(t){if(void 0===t&&(t=[]),this._levelArray=[],!k.isValidLevel(t))throw new Error(M.INVALID_LEVEL);this._levelArray=t}return t.prototype.newPositionIsAWall=function(t,e){var n=t-.5,r=e,o=Math.round(n),i=Math.abs(Math.round(r));return!!k.positionIsWall(o,i,this._levelArray)||(n=t+.5,r=e,o=Math.round(n),i=Math.abs(Math.round(r)),!!k.positionIsWall(o,i,this._levelArray)||(n=t,r=e-.5,o=Math.round(n),i=Math.abs(Math.round(r)),!!k.positionIsWall(o,i,this._levelArray)||(n=t,r=e+.5,o=Math.round(n),i=Math.abs(Math.round(r)),!!k.positionIsWall(o,i,this._levelArray)||(n=t-.5,r=e-.5,o=Math.round(n),i=Math.abs(Math.round(r)),!!k.positionIsWall(o,i,this._levelArray)||(n=t+.5,r=e-.5,o=Math.round(n),i=Math.abs(Math.round(r)),!!k.positionIsWall(o,i,this._levelArray)||(n=t+.5,r=e+.5,o=Math.round(n),i=Math.abs(Math.round(r)),!!k.positionIsWall(o,i,this._levelArray)||(n=t-.5,r=e+.5,o=Math.round(n),i=Math.abs(Math.round(r)),k.positionIsWall(o,i,this._levelArray))))))))},t}(),gt=function(){function t(t){if(this._velocity={x:0,y:0},this._mass=10,!t)throw new Error(M.INVALID_POSITION_OBJECT);this._position=t,this._gravity=dt(this._mass,mt),this._levelLogic=new bt(B.helpers.levelHelper.getCurrentLevel()),this._listenForControls()}return t.prototype.getPosition=function(){var t=this._calcNewPosition();return this._levelLogic.newPositionIsAWall(t.x,t.y)||(this._position.x=t.x,this._position.y=t.y,this._velocity.x=t.vel.x,this._velocity.y=t.vel.y),this._calcNewPosition(),this._position},t.prototype._listenForControls=function(){var t=this;window.addEventListener("keydown",function(e){if(e.code in yt){var n=yt[e.code];t[n.action]&&t[n.action]()}})},t.prototype._calcNewPosition=function(){var t=this._position.x+this._velocity.x,e=this._position.y+this._velocity.y,n=this._velocity.y-this._gravity;return{x:t,y:e,vel:{x:this._velocity.x,y:n}}},t.prototype.jump=function(){var t=this;this._velocity.y=0;var e=this._position.y+vt.player.y,n=function(){t._position.y+=wt.player.y,t._position.y>=e||requestAnimationFrame(n)};return n(),this},t.prototype.moveForward=function(){var t=this,e=this._position.x+vt.player.x,n=function(){t._position.x+=wt.player.x,t._position.x>=e||requestAnimationFrame(n)};return n(),this},t.prototype.moveBackward=function(){var t=this,e=this._position.x-vt.player.x,n=function(){t._position.x-=wt.player.x,t._position.x<=e||requestAnimationFrame(n)};return n(),this},t}(),Et=function(t,e){(new _t).listenForEvents(),t.clearScene().buildLevel(e).listenForCameraMovements().handleResize();var n=t.getPlayer(),r=new gt(n.getInitialPosition());!function e(){var o=r.getPosition();n.move(o.x,o.y),t.render(),requestAnimationFrame(e)}()},Ot=(Object.freeze({JasperLichte:{name:"Jasper Lichte",githubUrl:"https://github.com/JasperLichte"},TaZn:{name:"Harun Can",githubUrl:"https://github.com/TaZn"}}),function(){function t(){this._content="",this._hasDoneInitialRender=!1,this._domElement=document.createElement("div"),this._domElement.setAttribute("class","menu"),this._wrapper=document.createElement("div"),this._wrapper.setAttribute("class","wrapper"),this._wrapper.innerHTML=this._content,this._domElement.appendChild(this._wrapper),document.body.appendChild(this._domElement),this._addHamburgerButton()}return t.prototype.show=function(){return this._domElement.style.left="0px",this},t.prototype.hide=function(){return Math.random()>.5?this._domElement.style.left="-100vw":this._domElement.style.left="200vw",this},t.prototype.toggle=function(){return this.isShown()?this.hide():this.show(),this},t.prototype.isShown=function(){return"0px"===this._domElement.style.left},t.prototype.setContent=function(t){return void 0===t&&(t=""),this._wrapper.innerHTML=this._content=t,this},t.prototype.getContent=function(){return this._content},t.getContentByType=function(t){switch(void 0===t&&(t="menu"),t){case"menu":return'<div class="menu-wrapper">\n          <h1>Rainbow Runner</h1>\n          <span class="version">Version: 0.1.2</span>\n          <div class="buttons">\n              <button class="play-btn" data-mode="3d">Play in 3d!</button>\n              <button class="play-btn" data-mode="2d">Play in 2d!</button>\n              <a href="https://github.com/JasperLichte/Rainbow-Runner">Contribute</a>\n          </div>\n          <p>By Jasper Lichte and Harun Can</p>\n        </div>'}return""},t.prototype.listenForEvents=function(){var t=this,e=B.helpers.levelHelper,n=this._wrapper.querySelectorAll(".play-btn");return n.forEach(function(r){r.addEventListener("click",function(o){if(t.hide(),!t._hasDoneInitialRender){var i="3d"===r.getAttribute("data-mode")?new tt:new ft(document.getElementById("main"));B.helpers.renderHelper.setEngineHelper(i),Et(i,e.getCurrentLevel()),t._hasDoneInitialRender=!0,n.forEach(function(t){t!==r&&(t.classList.add("disabled"),t.setAttribute("disabled","true"))})}})}),window.addEventListener("keydown",function(e){"Escape"===e.key&&t._hasDoneInitialRender&&t.toggle()}),this},t.prototype._addHamburgerButton=function(){var t=this;return this._hamburger=document.createElement("button"),this._hamburger.setAttribute("class","menu-hamburger"),this._hamburger.innerHTML="<span></span><span></span><span></span>",document.body.appendChild(this._hamburger),this._hamburger.addEventListener("click",function(e){t.show()}),this},t}()),xt=function(){function t(){}return t.prototype.setEngineHelper=function(t){this._helper=t},t.prototype.getHelper=function(){return this._helper},t.prototype.getMode=function(){return this._helper?this._helper.getMode():null},t}();!function(t){for(var e in void 0===t&&(t={}),t)"string"==typeof t[e]&&(n="--"+e+"-color",r=t[e],document.getElementsByTagName("html")[0].style.setProperty(n,r));var n,r}(o),window.addEventListener("keydown",function(t){return"Space"===t.code&&function(t){return t.preventDefault()}(t)}),B.helpers.levelHelper=new k,B.helpers.renderHelper=new xt,B.menu=(new Ot).setContent(Ot.getContentByType("menu")).show().listenForEvents()}]);