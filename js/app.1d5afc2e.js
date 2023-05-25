(function(){"use strict";var e={2932:function(e,t,s){var i=s(9242),a=s(3396);function n(e,t,s,i,n,o){const r=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.j4)(r,{msg:"Welcome to Your Vue.js App"})}var o=s(7327),r=(s(7658),s(1114)),c=s(9469),l=s(4543),d=s(2519);class h{constructor(){this.subscribers={}}subscribe(e,t){this.subscribers[e]||(this.subscribers[e]=[]),this.subscribers[e].push(t)}unsubscribe(e,t){this.subscribers[e]&&(this.subscribers[e]=this.subscribers[e].filter((e=>e!==t)))}publish(e,t){this.subscribers[e]&&this.subscribers[e].forEach((e=>e(t)))}}const m=new h;var u=s(4161);class _{constructor(e,t,s,i){this._scene=e,this._camera=t,this._renderer=s,this._cssRenderer=i,this.init()}init(){const e=document.getElementById("load"),t=new d.cp(e);this._loadOverlay=t,t.position.set(-.2,1,3),t.rotation.set(0,Math.PI/4,0),t.scale.set(.004,.004,.006);const s=document.getElementById("arrow-load"),i=new d.cp(s);this._loadPonterOverlay=i,i.position.set(-.5,1.9,3.4),i.rotation.set(-Math.PI/3,Math.PI/3,0),i.scale.set(.01,.01,.01);const a=document.getElementById("start"),n=new d.cp(a);this._startOverlay=n,n.position.set(.45,.8,.7),n.scale.set(.004,.004,.006),n.lookAt(this._camera.position);const o=document.getElementById("arrow-start"),r=new d.cp(o);this._startPonterOverlay=r,r.position.set(.45,1.1,.7),r.rotation.set(0,0,-Math.PI/2),r.scale.set(.008,.008,.008),this._cssRenderer.render(this._scene,this._camera);const c=document.getElementById("desk_frame_front");this._deskFrameFront=c;const l=new d.cp(c);this._deskFrameOverlay=l,l.position.set(.35,.45,1),l.scale.set(.13,.07,.1);const h=document.getElementById("desk_frame_top");this._deskFrameTop=h;const m=new d.cp(h);this._deskFrameTopOverlay=m,m.position.set(.35,.6,.7),m.rotation.set(Math.PI/2,0,0),m.scale.set(.13,.06,.1);const u=document.getElementById("bookshelf_frame_front");this._bookshelfFrameFront=u;const _=new d.cp(u);this._bookshelfFrameFrontOverlay=_,_.position.set(-.18,1,3),_.rotation.set(0,Math.PI/4,0),_.scale.set(.05,.15,.1);const p=document.getElementById("bookshelf_frame_side");this._bookshelfFrameSide=p;const v=new d.cp(p);this._bookshelfFrameSideOverlay=v,v.position.set(-.44,1,3),v.rotation.set(0,-Math.PI/4,0),v.scale.set(.03,.15,.1),this.setHoveringListener(),this.addScene();const g=.1,y=2e3;let f=Date.now();const b=()=>{requestAnimationFrame(b);const e=Date.now()-f,t=e%y/y,s=g*(1-Math.cos(2*t*Math.PI))/2;i.position.z=3.4-s,i.position.y=1.9-s,r.position.y=1.1-s,this._cssRenderer.render(this._scene,this._camera)};b()}animateCamera(e,t,s,i,a,n){const o=performance.now(),c=e.clone(),l=t.clone(),d=l.clone().sub(c),h=s.clone(),m=i.clone(),u=new r._fP,_=e=>{const t=e-o,s=t/a;if(s<1){const e=n(s),t=c.clone().add(d.clone().multiplyScalar(e));u.slerpQuaternions(h,m,e),this._camera.position.copy(t),this._camera.setRotationFromQuaternion(u),this._renderer.render(this._scene,this._camera),requestAnimationFrame(_)}else this._camera.position.copy(l),this._camera.setRotationFromQuaternion(m),this._renderer.render(this._scene,this._camera)};requestAnimationFrame(_)}easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}addScene(){this._scene.add(this._loadOverlay),this._scene.add(this._loadPonterOverlay),this._scene.add(this._bookshelfFrameFrontOverlay),this._scene.add(this._bookshelfFrameSideOverlay),this._scene.add(this._startOverlay),this._scene.add(this._startPonterOverlay),this._scene.add(this._deskFrameOverlay),this._scene.add(this._deskFrameTopOverlay)}removeScene(){console.log("remove!"),this._scene.remove(this._loadOverlay),this._scene.remove(this._loadPonterOverlay),this._scene.remove(this._bookshelfFrameFrontOverlay),this._scene.remove(this._bookshelfFrameSideOverlay),this._scene.remove(this._startOverlay),this._scene.remove(this._startPonterOverlay),this._scene.remove(this._deskFrameOverlay),this._scene.remove(this._deskFrameTopOverlay)}setHoveringListener(){this._bookshelfFrameFront.addEventListener("mouseenter",(()=>{let e=this._loadOverlay.element.querySelector("#circle");e.className="circle"})),this._bookshelfFrameFront.addEventListener("mouseleave",(()=>{let e=this._loadOverlay.element.querySelector("#circle");e.className=""})),this._bookshelfFrameSide.addEventListener("mouseenter",(()=>{let e=this._loadOverlay.element.querySelector("#circle");e.className="circle"})),this._bookshelfFrameSide.addEventListener("mouseleave",(()=>{let e=this._loadOverlay.element.querySelector("#circle");e.className=""})),this._deskFrameFront.addEventListener("mouseenter",(()=>{let e=this._startOverlay.element.querySelector("#circle");e.className="circle"})),this._deskFrameFront.addEventListener("mouseleave",(()=>{let e=this._startOverlay.element.querySelector("#circle");e.className=""})),this._deskFrameTop.addEventListener("mouseenter",(()=>{let e=this._startOverlay.element.querySelector("#circle");e.className="circle"})),this._deskFrameTop.addEventListener("mouseleave",(()=>{let e=this._startOverlay.element.querySelector("#circle");e.className=""})),this._deskFrameFront.addEventListener("click",(()=>{const e=this._camera.position,t=new r.Pa4(.443,1.103,.702),s=(new r._fP).setFromEuler(this._camera.rotation),i=(new r._fP).setFromEuler(new r.USm(-1.561,0,38e-5)),a=2e3;this.animateCamera(e,t,s,i,a,this.easeInOutQuad),m.publish("beginScene2")})),this._deskFrameTop.addEventListener("click",(()=>{const e=this._camera.position,t=new r.Pa4(.443,1.103,.702),s=(new r._fP).setFromEuler(this._camera.rotation),i=(new r._fP).setFromEuler(new r.USm(-1.561,0,38e-5)),a=2e3;this.animateCamera(e,t,s,i,a,this.easeInOutQuad),m.publish("beginScene2")})),this._bookshelfFrameFront.addEventListener("click",(()=>{this.fileUpload()})),this._bookshelfFrameSide.addEventListener("click",(()=>{const e=this._camera.position,t=new r.Pa4(.443,1.103,.702),s=(new r._fP).setFromEuler(this._camera.rotation),i=(new r._fP).setFromEuler(new r.USm(-1.561,0,38e-5)),a=2e3;this.animateCamera(e,t,s,i,a,this.easeInOutQuad),m.publish("beginScene2")}))}fileUpload(){let e=document.getElementById("pdfUpload");e.click(),e.addEventListener("change",(()=>{if(e.files.length>0){console.log(e.files);let t=e.files[0];const s=this._camera.position,i=new r.Pa4(.443,1.103,.702),a=(new r._fP).setFromEuler(this._camera.rotation),n=(new r._fP).setFromEuler(new r.USm(-1.561,0,38e-5)),o=2e3;this.animateCamera(s,i,a,n,o,this.easeInOutQuad),this.removeScene(),m.publish("beginScene3",t)}}))}}s(2801),s(3767),s(8585),s(8696);class p{constructor(e,t,s,i,a){(0,o.Z)(this,"meshes",{}),(0,o.Z)(this,"_currentPage",0),this._scene=e,this._camera=t,this._cssRenderer=s,this._gltfLoader=i,this._renderer=a}async loadBook(){return new Promise((e=>{this._gltfLoader.load("book.glb",function(t){console.log(t.scene),t.scene.traverse((function(e){if(e.isMesh)if(e.name.includes("P")){let t=null;t=(e.name.includes("back"),(new r.dpR).load("/page4.jpg")),e.material.map=t,e.material.needsUpdate=!0}else{const t=(new r.dpR).load("/cover.jpg");e.material.map=t,e.material.needsUpdate=!0}}));const s=t.scene;s.traverse((e=>{e instanceof r.Kj0&&(this.meshes[e.name]=e)})),console.log(this.meshes);const i=t.animations;this._animations=i,i.forEach((e=>{this._animations[e.name]=e})),console.log(this._animations);const a=.2;s.scale.set(a,a,a),s.position.set(.45,.8,.7),s.rotation.y-=Math.PI,this._scene.add(s),this._mixer=new r.Xcj(s);let n=()=>{requestAnimationFrame(n),this._mixer.update(.01)};n(),this._book=s,e(s)}.bind(this),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened",e)}))}))}turnCover(){const e=this._mixer.clipAction(this._animations[0]);e.setLoop(r.jAl),e.clampWhenFinished=!0,e.enabled=!0,e.timeScale=1,e.paused=!1,e.reset(),e.play();const t=this._mixer.clipAction(this._animations[1]);t.setLoop(r.jAl),t.clampWhenFinished=!0,t.enabled=!0,t.timeScale=1,t.paused=!1,t.reset(),t.play();const s=this._mixer.clipAction(this._animations[2]);s.setLoop(r.jAl),s.clampWhenFinished=!0,s.enabled=!0,s.timeScale=1,s.paused=!1,s.reset(),s.play();const i=this._mixer.clipAction(this._animations[3]);i.setLoop(r.jAl),i.clampWhenFinished=!0,i.enabled=!0,i.timeScale=1,i.paused=!1,i.reset(),i.play()}turnBackCover(){const e=this._mixer.clipAction(this._animations[0]);e.setLoop(r.jAl),e.clampWhenFinished=!0,e.enabled=!0,e.paused=!1,e.timeScale=-1,e.play();const t=this._mixer.clipAction(this._animations[1]);t.setLoop(r.jAl),t.clampWhenFinished=!0,t.enabled=!0,t.paused=!1,t.timeScale=-1,t.play();const s=this._mixer.clipAction(this._animations[2]);s.setLoop(r.jAl),s.clampWhenFinished=!0,s.enabled=!0,s.paused=!1,s.timeScale=-1,s.play();const i=this._mixer.clipAction(this._animations[3]);i.setLoop(r.jAl),i.clampWhenFinished=!0,i.enabled=!0,i.paused=!1,i.timeScale=-1,i.play()}async createBookCover(e){await this.insertImg(this.meshes.coverL,e[0])}async clickCoverFront(e){this._currentPage=0,this.turnCover(),await this.insertImg(this.meshes.Page1Front,e[++this._currentPage],!0),this.createTtsBtnR()}async clickCoverBack(){this.deleteOverlayL(),this.turnBackCover()}async clickP1Front(e){this.turnPageFirst(),await this.insertImg(this.meshes.Page1Back,e[++this._currentPage]),await this.insertImg(this.meshes.Page2Front,e[++this._currentPage],!0),this.createTtsBtnL(),this.createTtsBtnR()}async clickP2Front(e){this.tunPageSecond(),await this.insertImg(this.meshes.Page2Back,e[++this._currentPage]),await this.insertImg(this.meshes.Pages,e[++this._currentPage],!0),this.createTtsBtnL(),this.createTtsBtnR()}async clickP3Front(e){console.log(e.length),console.log(this._currentPage+1),e.length<this._currentPage+2||(await this.insertImg(this.meshes.Page1Back,e[this._currentPage-1]),await this.insertImg(this.meshes.Page2Front,e[this._currentPage],!0),this.tunPageSecond(),await this.insertImg(this.meshes.Page2Back,e[++this._currentPage]),await this.insertImg(this.meshes.Pages,e[++this._currentPage],!0),this.createTtsBtnL(),this.createTtsBtnR())}clickP1Back(e){this._currentPage>4?this.clickP2Back(e):(this.turnBackPageFirst(),this._currentPage-=2,this.insertImg(this.meshes.Page1Front,e[this._currentPage],!0),this.createTtsBtnR(),this.deleteOverlayR())}async clickP2Back(e){await this.insertImg(this.meshes.Page2Back,e[this._currentPage-1]),await this.insertImg(this.meshes.Pages,e[this._currentPage],!0),this._currentPage-=2;let t=!0;this.turnBackPageSecond(t),this.insertImg(this.meshes.Page1Back,e[this._currentPage-1]),this.insertImg(this.meshes.Page2Front,e[this._currentPage],!0),this.createTtsBtnL(),this.createTtsBtnR()}turnPageFirst(){let e=this._mixer.clipAction(this._animations.Page1Action);e.setLoop(r.jAl),e.clampWhenFinished=!0,e.enabled=!0,e.paused=!1,e.timeScale=1,e.reset(),e.play()}turnBackPageFirst(){let e=this._mixer.clipAction(this._animations.Page1Action);e.paused=!1,e.time=e.getClip().duration,e.timeScale=-1,e.setLoop(r.jAl),e.clampWhenFinished=!0,e.enabled=!0,e.play()}tunPageSecond(){const e=this._mixer.clipAction(this._animations.Page2Action);e.setLoop(r.jAl),e.clampWhenFinished=!0,e.enabled=!0,e.paused=!1,e.timeScale=1,e.reset(),e.play()}turnBackPageSecond(){let e=this._mixer.clipAction(this._animations.Page2Action);e.paused=!1,e.time=e.getClip().duration,e.timeScale=-1,e.setLoop(r.jAl),e.clampWhenFinished=!0,e.enabled=!0,e.play()}movePositionToLook(){this._book.position.set(.45,5,.7),this._book.rotation.x=-Math.PI/2}createMakeStoryLayoutOne(){const e=.011,t=.03,s=document.getElementById("pageL");this._overlayL=new d.cp(s);const i=new r.Pa4,a=this._book.children[7].getWorldPosition(i);a.x+=e,this._overlayL.position.copy(a),this._overlayL.rotation.set(-Math.PI/2,0,0),this._overlayL.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayL);const n=document.getElementById("pageR");this._overlayR=new d.cp(n);const o=this._book.children[8].getWorldPosition(i);o.x+=t,this._overlayR.position.copy(o),this._overlayR.rotation.set(-Math.PI/2,0,0),this._overlayR.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayR),console.log(this._overlayR.element)}removeMakeStoryLayout(){this.deleteOverlayR(),this.deleteOverlayL()}createMakeStoryLayoutTwo(){const e=.011,t=.02,s=new r.Pa4,i=document.getElementById("loading");this._overlayL=new d.cp(i);const a=this._book.children[7].getWorldPosition(s);a.x+=e,this._overlayL.position.copy(a),this._overlayL.rotation.set(-Math.PI/2,0,0),this._overlayL.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayL);const n=document.getElementById("pageR2");this._overlayR=new d.cp(n);const o=this._book.children[8].getWorldPosition(s);o.x+=t,this._overlayR.position.copy(o),this._overlayR.rotation.set(-Math.PI/2,0,0),this._overlayR.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayR)}async createTitlesOnPage(e){console.log(e),this._scene.remove(this._overlayL);const t=new r.Pa4,s=document.getElementById("cards");this._overlayL=new d.cp(s);const i=this._book.children[7].getWorldPosition(t);this._overlayL.position.copy(i),this._overlayL.rotation.set(-Math.PI/2,0,0),this._overlayL.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayL);const a=document.getElementById("cardsTitles");for(let n of e){const e=document.getElementById("card"),t=e.cloneNode(!0);t.innerText=n.split(":")[0],a.appendChild(t),t.addEventListener("mouseenter",(()=>{let e=document.getElementById("titleDesc");e.innerText=n})),t.addEventListener("click",(()=>{let e=document.getElementById("titleSelected");e.innerText=n}))}}async transitToMakeStoryTwo(){this._scene.remove(this._overlayR),this._scene.remove(this._overlayL),this.tunPageSecond(),this.createMakeStoryLayoutTwo()}createTtsBtnL(){const e=new r.Pa4,t=document.getElementById("ttsL").cloneNode(!0);console.log(t);const s=t.querySelector("#ttsBtnL");this._overlayL=new d.cp(t);const i=this._book.children[8].getWorldPosition(e);this._overlayL.position.copy(i),this._overlayL.position.z=.87,this._overlayL.rotation.set(-Math.PI/2,0,0),this._overlayL.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayL),s.addEventListener("click",(()=>{this.fetchTts(this.extractedTexts[this._currentPage-1])}))}createTtsBtnR(){const e=new r.Pa4,t=document.getElementById("ttsR").cloneNode(!0),s=t.querySelector("#ttsBtnR");this._overlayR=new d.cp(t);const i=this._book.children[7].getWorldPosition(e);this._overlayR.position.copy(i),this._overlayR.position.z=.87,this._overlayR.rotation.set(-Math.PI/2,0,0),this._overlayR.scale.set(3e-4,3e-4,5e-4),this._scene.add(this._overlayR),s.addEventListener("click",(()=>{console.log("book!"),this.fetchTts(this.extractedTexts[this._currentPage])}))}deleteOverlayR(){this._scene.remove(this._overlayL)}deleteOverlayL(){this._scene.remove(this._overlayR)}fetchTts(e){let t=JSON.stringify({voice:{languageCode:"ko-KR",ssmlGender:"FEMALE",name:"ko-KR-Wavenet-A"},input:{text:e},audioConfig:{audioEncoding:"mp3"}}),s={method:"post",maxBodyLength:1/0,url:"https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCKiq248cQRH-p3lGwK0SgGOdKFKw7dt0Q",headers:{"Content-Type":"application/json"},data:t};u.Z.request(s).then((e=>{let t=e.data.audioContent;var s=new Audio;let i=this.base64ToBlob(t,"mp3");s.src=window.URL.createObjectURL(i),s.playbackRate=1,s.play()})).catch((e=>{console.log(e)}))}base64ToBlob(e,t){let s="application/"+t,i=e.replace(/^[^,]+,/,""),a=window.atob(i),n=new ArrayBuffer(a.length),o=new Uint8Array(n);for(let r=0;r<a.length;r++)o[r]=a.charCodeAt(r);return new Blob([n],{type:s})}speak(e,t){window.speechSynthesis.cancel();const s=t||{},i=new SpeechSynthesisUtterance;i.rate=s.rate||1,i.pitch=s.pitch||1,i.lang=s.lang||"ko-KR",i.text=e,window.speechSynthesis.speak(i)}async insertImg(e,t,s){return console.log(e),new Promise((i=>{t?(new r.dpR).load(t,(async t=>{s&&(t.wrapS=r.rpg,t.repeat.x=-1),e.material.map=t,e.material.needsUpdate=!0,i()})):(e.material.map=null,e.material.needsUpdate=!0,i())}))}}class v{constructor(){(0,o.Z)(this,"stage",""),(0,o.Z)(this,"extractedTexts",[]),this.stage="INTRO";const e=new r.xsS;this._scene=e;const t=new c.E;this._gltfLoader=t;const s=new r.CP7({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.outputEncoding=r.knz,s.setPixelRatio(window.devicePixelRatio),s.setClearColor("skyblue"),this._renderer=s;const i=document.getElementById("three");this._myDIv=i,this._myDIv.appendChild(this._renderer.domElement),this._initModel();const a=new r.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);this._setupCamera(a),this._setupControls();const n=new d.lX({antialias:!0});this._cssRenderer=n,this._cssRenderer.setSize(window.innerWidth,window.innerHeight),this._cssRenderer.domElement.style.position="absolute",this._cssRenderer.domElement.style.top="0px",this._cssRenderer.domElement.style.pointerEvents="none",document.body.appendChild(this._cssRenderer.domElement),window.onresize=this.resize.bind(this),this.resize(),requestAnimationFrame(this.render.bind(this));let l=new r.iMs;this._raycaster=l;const h=new r.FM8;this._mouse=h,i.addEventListener("mousedown",this.onDocumentMouseDown.bind(this),!1);let u=document.querySelector("#next-page");u.addEventListener("click",(async()=>{this.fetchGetTitles(),await this._book.transitToMakeStoryTwo()}));let _=document.querySelector("#next-page2");_.addEventListener("click",(async()=>{this.fetchGetBook(),this.beginLoadingMakingStory(),this._book.removeMakeStoryLayout()})),m.subscribe("beginScene2",this.beginScene2.bind(this)),m.subscribe("beginScene3",this.prepareBook.bind(this))}onDocumentMouseDown(e){this._mouse.x=e.clientX/window.innerWidth*2-1,this._mouse.y=-e.clientY/window.innerHeight*2+1,this._raycaster.setFromCamera(this._mouse,this._camera);var t=this._raycaster.intersectObjects(this._scene.children);if(console.log(t),console.log(this._camera),console.log("main!"),t.length>0){var s=t[0].object;if(console.log(s),"READ_BOOK"===this.stage){const e=this._images;localStorage.getItem("book",JSON.stringify(e)),"coverL"===s.name?this._book.clickCoverFront(e):"coverL_1"===s.name?this._book.clickCoverBack():"Page1Front"===s.name?this._book.clickP1Front(e):"Page2Front"===s.name?this._book.clickP2Front(e):"Pages"===s.name?this._book.clickP3Front(e):"Page1Back"===s.name?this._book.clickP1Back(e):"Page2Back"===s.name&&this._book.clickP2Back(e)}}}beginScene2(){this._intro.removeScene(),this._book.turnCover(),this._book.turnPageFirst(),this._book.createMakeStoryLayoutOne()}async beginLoadingMakingStory(){this._book.turnBackPageFirst(),this._book.turnBackPageSecond(),this._book.turnBackCover(),this.addAura();const e=this._camera.position,t=new r.Pa4(.443,3,.702),s=2e3;this.animateCamera(e,t,s,this.easeInOutQuad);let i=document.querySelector("#making_story_title");i.style.display="block";let a=document.querySelector("#making_story_title_text");a.textContent="이야기를 만들고 있어요. 잠시만 기다려 주세요! . . .",a.className="dot"}async endLoadingMakingBook(){this.removeAura();let e=document.querySelector("#making_story_title");e.style.display="none"}easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}animateCamera(e,t,s,i){const a=performance.now(),n=e.clone(),o=t.clone(),r=o.clone().sub(n),c=e=>{const t=e-a,l=t/s;if(l<1){const e=i(l),t=n.clone().add(r.clone().multiplyScalar(e));this._camera.position.copy(t),this._renderer.render(this._scene,this._camera),requestAnimationFrame(c)}else this._camera.position.copy(o),this._renderer.render(this._scene,this._camera)};requestAnimationFrame(c)}async fetchGetTitles(){console.log(document.getElementById("mainCharacter")),console.log(document.getElementById("genre"));const e=document.getElementById("mainCharacter").value,t=document.getElementById("genre").value,s={mainCharacter:e,genre:t};await u.Z.post("https://port-0-fairytale-api-7e6o2cli06bdq9.sel4.cloudtype.app/api/title",{data:s,responseType:"json"}).then((async e=>{console.log(e),this._book.createTitlesOnPage(e.data)})).catch((e=>{console.error("Error fetching data:",e)}))}async fetchGetBook(){const e=document.getElementById("titleSelected").innerText;await u.Z.post("https://port-0-fairytale-api-7e6o2cli06bdq9.sel4.cloudtype.app/api/books",{title:e},{responseType:"arraybuffer"}).then((async e=>{const t=e.data;this.prepareBook(t,!0)})).catch((e=>{console.error("Error fetching data:",e)}))}async prepareBook(e,t){const s=new Blob([e],{type:"application/pdf"}),i=URL.createObjectURL(s);if(t){const e=document.createElement("a");e.href=i,e.setAttribute("download","book.pdf"),document.body.appendChild(e),e.click()}const a=await this.convertPdfToImages(i);this._images=a,this.endLoadingMakingBook(),this.stage="READ_BOOK",this._book.createBookCover(a)}async convertPdfToImages(e){const t=await s.e(912).then(s.t.bind(s,3912,23)),i=await s.e(3).then(s.t.bind(s,8003,23));i.GlobalWorkerOptions.workerSrc=t;const a=await i.getDocument(e).promise,n=a.numPages,o=[];for(let s=1;s<=n;s++){const e=await a.getPage(s),t=3,i=e.getViewport({scale:t}),n=document.createElement("canvas"),r=n.getContext("2d");n.width=i.width,n.height=i.height,await e.render({canvasContext:r,viewport:i}).promise;const c=n.toDataURL("image/jpeg");o.push(c);let l="";const d=await e.getTextContent();d.items.forEach((e=>{l+=e.str+" "})),this.extractedTexts.push(l)}return console.log(this.extractedTexts),this._book.extractedTexts=this.extractedTexts,o}removeAura(){this._bookObj.remove(this._auraSprite)}changeTobookLookStage(){let e=document.querySelector("#making_story_title");e.style.display="block";let t=document.querySelector("#making_story_title_text");t.textContent="이야기가 완성 되었어요! 클릭하시면 이야기를 읽을수 있어요!",t.className=""}createAuraTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),s=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return s.addColorStop(0,"rgba(128, 0, 255, 1)"),s.addColorStop(.4,"rgba(128, 0, 255, 0.6)"),s.addColorStop(1,"rgba(128, 0, 255, 0)"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height),new r.ROQ(e)}addAura(){const e=this.createAuraTexture(),t=new r.xeV({map:e,color:16777215,transparent:!0,blending:r.WMw}),s=new r.jyi(t);this._auraSprite=s,s.scale.set(5,5,5),this._bookObj.add(s),s.position.set(-1,0,0);const i=e=>{requestAnimationFrame(i);const s=(Math.sin(.001*e)+1)/2;t.opacity=2*s,this._renderer.render(this._scene,this._camera)};i(2e3)}_setupCamera(e){e.position.set(2.06,2.55,5.98),e.rotation.set(-.404,.307,.128),e.rotation.isEuler=!0,e.updateProjectionMatrix(),this._camera=e}_setupLight(){const e=new r.cek(16770713);e.intensity=1,e.distance=15,e.decay=1,e.position.set(1,4,0),this._light=e,this._scene.add(this._light);const t=new r.xG9(e);this._scene.add(t);const s=new r.Mig(4210752,1);this._AmbientLight=s,this._scene.add(this._AmbientLight)}_setupControls(){const e=new l.z(this._camera,this._renderer.domElement);e.update()}async _initModel(){const e=new r.Tme,t=new p(this._scene,this._camera,this._cssRenderer,this._gltfLoader,this._renderer);this._book=t;const s=await t.loadBook();this._bookObj=s;const i=await this._loadHouse();this._house=i,e.add(i),this._scene.add(e),this._setupLight();const a=new _(this._scene,this._camera,this._renderer,this._cssRenderer);this._intro=a}async _loadHouse(){return new Promise((e=>{this._gltfLoader.load("workshop.glb",(t=>{const s=t.scene,i=s.children[0].children[0].children[0].children[1],a=s.children[0].children[0].children[0].children[2];this._bookshelf=i,this._desk=a,s.position.set(.2,0,0),e(s)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened",e)}))}))}resize(){const e=this._myDIv.clientWidth,t=window.innerHeight;this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._renderer.setSize(e,t),this._cssRenderer?.setSize(e,t)}flashLight(e,t,s,i){const a=new r.cek(16777215,0,100);a.position.set(.45,1.5,.578),a.scale.set(.5,.5,.5),this._scene.add(a);const n=performance.now(),o=a.intensity,c=new r.xG9(a);this._scene.add(c);const l=()=>{const r=performance.now()-n,c=r/s;if(c<1){const s=t-e;a.intensity=e+s*Math.sin(c*Math.PI),requestAnimationFrame(l)}else a.intensity=o,setTimeout((()=>{this.flashLight(e,t,s,i)}),i)};l()}render(){this._renderer.render(this._scene,this._camera),requestAnimationFrame(this.render.bind(this))}}const g={style:{position:"relative"}},y=(0,a.uE)('<div id="three" class="hello" data-v-40af8004></div><div id="htmls" data-v-40af8004><div class="page" id="pageL" data-v-40af8004><div class="input" data-v-40af8004> 이야기 주인공의 이름은? <input id="mainCharacter" placeholder="이름을 입력해주세요!" data-v-40af8004></div><div class="input" data-v-40af8004> 이야기의 장르를 선택해 주세요! <select id="genre" data-v-40af8004><option value="아무거나" data-v-40af8004>아무거나</option><option value="모험" data-v-40af8004>모험</option><option value="동물" data-v-40af8004>동물</option><option value="다양성" data-v-40af8004>다양성</option><option value="가족" data-v-40af8004>가족</option><option value="도전" data-v-40af8004>도전</option><option value="우정" data-v-40af8004>우정</option></select></div><div id="next-page" style="text-align:right;width:100%;" data-v-40af8004><p data-v-40af8004>다음으로 이동 -&gt;</p></div></div><div class="page dot center" id="loading" data-v-40af8004> 잠시만 기다려 주세요! </div><div class="page" id="pageR" data-v-40af8004><div data-v-40af8004><h1 data-v-40af8004>당신의 이야기를 만들어 주세요!</h1><h2 data-v-40af8004>이야기 주인공의 이름과 주제를 선택해 주세요.</h2></div></div><div class="page" id="pageR2" data-v-40af8004><p data-v-40af8004>주제를 골라 주세요!</p><div id="titleDesc" data-v-40af8004></div><div data-v-40af8004> 선택된 이야기 <div id="titleSelected" class="title-card" data-v-40af8004></div></div></div><div class="page" id="cards" data-v-40af8004><div id="cardsTitles" data-v-40af8004></div><div id="next-page2" style="text-align:right;width:100%;" data-v-40af8004><p data-v-40af8004>다음으로 이동 -&gt;</p></div></div><div id="card" class="card" data-v-40af8004><p class="mt-2 text-gray-600" data-v-40af8004></p></div><div id="ttsR" data-v-40af8004><button id="ttsBtnR" data-v-40af8004><i class="fas fa-volume-up fa-4x" data-v-40af8004></i></button></div><div id="ttsL" data-v-40af8004><button id="ttsBtnL" data-v-40af8004><i class="fas fa-volume-up fa-4x" data-v-40af8004></i></button></div><div id="arrow-start" class="arrow" data-v-40af8004><div class="arrow-tail" data-v-40af8004></div><div class="arrow-head" data-v-40af8004></div></div><div id="arrow-load" class="arrow" data-v-40af8004><div class="arrow-tail" data-v-40af8004></div><div class="arrow-head" data-v-40af8004></div></div><div class="hover_frame" id="desk_frame_front" data-v-40af8004></div><div class="hover_frame" id="desk_frame_top" data-v-40af8004></div><div id="start" data-v-40af8004><div id="circle" data-v-40af8004></div><h1 class="intro_text" data-v-40af8004>이야기 만들기</h1></div><div class="hover_frame" id="bookshelf_frame_front" data-v-40af8004></div><div class="hover_frame" id="bookshelf_frame_side" data-v-40af8004></div><div id="load" data-v-40af8004><div id="circle" data-v-40af8004></div><h1 class="intro_text" data-v-40af8004>이야기 불러오기</h1><input type="file" id="pdfUpload" accept=".pdf" style="display:none;" data-v-40af8004></div><div id="making_story_title" data-v-40af8004><h1 id="making_story_title_text" class="dot" style="display:inline;" data-v-40af8004> 이야기를 만들고 있어요. 잠시만 기다려 주세요! . . . </h1></div></div>',2),f=[y];var b={__name:"HelloWorld",setup(e){return(0,a.bv)((()=>{new v})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",g,f))}},k=s(89);const w=(0,k.Z)(b,[["__scopeId","data-v-40af8004"]]);var P=w,L={name:"App",components:{HelloWorld:P}};const S=(0,k.Z)(L,[["render",n]]);var F=S;(0,i.ri)(F).mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,n){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],n=e[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&n||o>=n)&&Object.keys(s.O).every((function(e){return s.O[e](i[c])}))?i.splice(c--,1):(r=!1,n<o&&(o=n));if(r){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,a,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};s.t=function(i,a){if(1&a&&(i=this(i)),8&a)return i;if("object"===typeof i&&i){if(4&a&&i.__esModule)return i;if(16&a&&"function"===typeof i.then)return i}var n=Object.create(null);s.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&i;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){o[e]=function(){return i[e]}}));return o["default"]=function(){return i},s.d(n,o),n}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,i){return s.f[i](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{3:"d640b699",912:"8997e6f7"}[e]+".js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fairy-tale-book:";s.l=function(i,a,n,o){if(e[i])e[i].push(a);else{var r,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var h=l[d];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+n){r=h;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",t+n),r.src=i),e[i]=[a];var m=function(t,s){r.onerror=r.onload=null,clearTimeout(u);var a=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(s)})),t)return t(s)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={143:0};s.f.j=function(t,i){var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise((function(s,i){a=e[t]=[s,i]}));i.push(a[2]=n);var o=s.p+s.u(t),r=new Error,c=function(i){if(s.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,a[1](r)}};s.l(o,c,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,n,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(c)var d=c(s)}for(t&&t(i);l<o.length;l++)n=o[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},i=self["webpackChunkfairy_tale_book"]=self["webpackChunkfairy_tale_book"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(2932)}));i=s.O(i)})();
//# sourceMappingURL=app.1d5afc2e.js.map