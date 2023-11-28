(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n.bigGameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 50vh;\n    height: 50vh;\n    border: solid 1px black\n}\n\n.square {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n}\n\n.squareWithShip {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    background-color: aqua;\n}\n\n.squareWithShipHitFriendly {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    background-color: rgb(255, 166, 0);\n}\n\n.squareHitByEnemy {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    background-color: rgb(104, 104, 104);\n}\n\n.squareWithShipHitEnemy {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    background-color: rgb(255, 0, 0);\n}\n\n.squareHitByFriendly {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    background-color: rgb(0, 0, 0);\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=o[c]||0,h="".concat(c," ").concat(d);o[c]=d+1;var u=n(h),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=a(p,r);r.byIndex=l,t.splice(l,0,{identifier:h,updater:f,references:1})}i.push(h)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{#e;#t;constructor(e){this.#e=e,this.#t=0}isSunk(){return this.#e===this.#t}hit(){this.#t<this.#e&&(this.#t+=1)}getHits(){return this.#t}getLength(){return this.#e}}class t{#n;constructor(){this.board=new Array,this.#n=["A","B","C","D","E","F","G","H","I","J"];for(const e of this.#n)for(let t=1;t<=10;t++){let n={coordinates:`${e}${t}`,containsShip:null,shot:null};this.board.push(n)}}checkValidPlacement(e,t,n,r){if("horizontally"===t){if(r+e>11)return!1;for(let t=r;t<r+e;t++)if(null!==this.board.find((({coordinates:e})=>e===`${n}${t}`)).containsShip)return!1;return!0}if("vertically"===t){const t=this.#n.findIndex((e=>e===n));if(e+t>10)return!1;for(let n=t;n<t+e;n++)if(null!==this.board.find((({coordinates:e})=>e===`${this.#n[n]}${r}`)).containsShip)return!1;return!0}}placeShip(t,n,r,a){const o=new e(t);if("horizontally"===n)for(let e=a;e<a+t;e++)this.board.find((({coordinates:t})=>t===`${r}${e}`)).containsShip=o;else if("vertically"===n){const e=this.#n.findIndex((e=>e===r));for(let n=e;n<e+t;n++)this.board.find((({coordinates:e})=>e===`${this.#n[n]}${a}`)).containsShip=o}}receiveAttack(e,t){let n=this.board.find((({coordinates:n})=>n===`${e}${t}`));return"Shot"===n.shot?"You already fired at these coordinates!":null===n.containsShip?(n.shot="Shot","MISS"):(n.containsShip.hit(),n.shot="Shot","HIT")}checkEndGame(){for(const e of this.board)if(null!==e.containsShip&&!1===e.containsShip.isSunk())return!1;return!0}}class r{#r;constructor(e,n){this.name=e,this.#r="human"===n,this.fleet=["Carrier","Battleship","Battleship","Destroyer","Destroyer","Destroyer","Submarine","Submarine","Submarine","Submarine","Patrol Boat","Patrol Boat","Patrol Boat","Patrol Boat","Patrol Boat"],this.board=new t}isHuman(){return this.#r}aiMove(e){if(!1===this.#r){let t=e.board[Math.floor(100*Math.random())];for(;"Shot"===t.shot;)t=e.board[Math.floor(100*Math.random())];let n=t.coordinates.split("");return e.receiveAttack(n[0],n[1])}}}class a{constructor(){this.currentPlayer,this.opponent,this.aiGame}createPlayerOne(e){this.playerOne=new r(e,"human"),this.currentPlayer=this.playerOne}createPlayerTwo(e,t){"human"===t?(this.playerTwo=new r(e,t),this.opponent=this.playerTwo):(this.playerTwo=new r(e),this.opponent=this.playerTwo)}gameCheckForVictory(){return this.opponent.board.checkEndGame()}attack(e,t){const n=this.opponent.board.receiveAttack(e,t);return"You already fired at these coordinates!"===n?n:"HIT"===n&&this.gameCheckForVictory()?`HIT! ${this.currentPlayer.name} WON!`:(this.opponent===this.playerTwo?(this.opponent=this.playerOne,this.currentPlayer=this.playerTwo):(this.opponent=this.playerTwo,this.currentPlayer=this.playerOne),n)}aiAttack(){const e=this.currentPlayer.aiMove(this.opponent.board);return"HIT"===e&&this.gameCheckForVictory()?`HIT! ${this.currentPlayer.name} WON!`:(this.currentPlayer=this.playerOne,this.opponent=this.playerTwo,e)}}var o=n(379),i=n.n(o),l=n(795),s=n.n(l),c=n(569),d=n.n(c),h=n(565),u=n.n(h),p=n(216),f=n.n(p),b=n(589),m=n.n(b),y=n(426),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),i()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const g=document.querySelector("body");let S,k,x,C;function w(){for(;g.hasChildNodes();)g.removeChild(g.firstChild)}function E(){w();const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");n.textContent="Create Player",g.appendChild(e),e.appendChild(t),e.appendChild(n),n.addEventListener("click",(()=>{event.preventDefault(),S.createPlayerOne(t.value),!1===S.aiGame?function(){w();const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");g.appendChild(e),e.appendChild(t),e.appendChild(n),n.textContent="Create Player",n.addEventListener("click",(()=>{event.preventDefault(),S.createPlayerTwo(t.value,"human"),T(S.playerOne.fleet,S.playerOne.board)}))}():!0===S.aiGame&&(S.createPlayerTwo("Computer"),T(S.playerOne.fleet,S.playerOne.board))}))}function T(e,t){w();const n=document.createElement("div");n.classList.add("bigGameboard");const r=document.createElement("div"),a=document.createElement("button");a.textContent="Vertically",a.addEventListener("click",(()=>{C="vertically"}));const o=document.createElement("button");o.textContent="Horizontally",o.addEventListener("click",(()=>{C="horizontally"})),g.appendChild(r),g.appendChild(a),g.appendChild(o),g.appendChild(n);for(const t of e){const e=document.createElement("button");e.textContent=t,e.addEventListener("click",(()=>{switch(e.textContent){case"Carrier":x=5;break;case"Battleship":x=4;break;case"Destroyer":case"Submarine":x=3;break;case"Patrol Boat":x=2}k=e.textContent})),r.appendChild(e)}for(const r of t.board){const a=document.createElement("div");a.dataset.yx=r.coordinates,null!==r.containsShip?a.classList.add("squareWithShip"):a.classList.add("square"),a.addEventListener("click",(()=>{if(null==k)alert("Select Ship First!");else if(null==C)alert("Select ship orientation!");else if(t.checkValidPlacement(x,C,r.coordinates.slice(0,1),Number(r.coordinates.slice(1))))if(1===S.playerOne.fleet.length){t.placeShip(x,C,r.coordinates.slice(0,1),Number(r.coordinates.slice(1)));let n=e.indexOf(k);e.splice(n,1),!1===S.aiGame?(T(S.playerTwo.fleet,S.playerTwo.board),x=null,k=null,C=null):(P(),x=null,k=null,C=null,q())}else if(0===S.playerOne.fleet.length&&1===S.playerTwo.fleet.length){t.placeShip(x,C,r.coordinates.slice(0,1),Number(r.coordinates.slice(1)));let n=e.indexOf(k);e.splice(n,1),x=null,k=null,C=null,q()}else{t.placeShip(x,C,r.coordinates.slice(0,1),Number(r.coordinates.slice(1)));let n=e.indexOf(k);e.splice(n,1),T(e,t),x=null,k=null,C=null}else alert("Cannot place ship at these coordinates!")})),n.appendChild(a)}}function P(){const e=["A","B","C","D","E","F","G","H","I","J"];for(;0!==S.playerTwo.fleet.length;){let t=e[Math.floor(10*Math.random())],n=Math.floor(10*Math.random()+1);C=Math.floor(2*Math.random())%2==0?"vertically":"horizontally",console.log(C);let r=S.playerTwo.fleet[Math.floor(Math.random()*S.playerTwo.fleet.length)];switch(r){case"Carrier":x=5;break;case"Battleship":x=4;break;case"Destroyer":case"Submarine":x=3;break;case"Patrol Boat":x=2}if(S.playerTwo.board.checkValidPlacement(x,C,t,n)){S.playerTwo.board.placeShip(x,C,t,n);let e=S.playerTwo.fleet.indexOf(r);S.playerTwo.fleet.splice(e,1),x=null,k=null,C=null}}}function q(){if(w(),!0===S.aiGame){let e=document.createElement("div");e.classList.add("bigGameboard"),g.appendChild(e);for(const t of S.currentPlayer.board.board){const n=document.createElement("div");null!==t.containsShip&&"Shot"===t.shot?n.classList.add("squareWithShipHitFriendly"):null===t.containsShip&&"Shot"===t.shot?n.classList.add("squareHitByEnemy"):null!==t.containsShip&&null===t.shot?n.classList.add("squareWithShip"):n.classList.add("square"),e.appendChild(n)}document.createElement("div").classList.add("bigGameboard"),g.appendChild(e);for(const t of S.opponent.board.board){const n=document.createElement("div");null!==t.containsShip&&"Shot"===t.shot?n.classList.add("squareWithShipHitEnemy"):null===t.containsShip&&"Shot"===t.shot?n.classList.add("squareHitByFriendly"):n.classList.add("square"),e.appendChild(n),n.addEventListener("click",(()=>{const e=S.opponent.board.receiveAttack(t.coordinates.slice(0,1),Number(t.coordinates.slice(1)));if("You already fired at these coordinates!"===e)alert(e),q();else if("HIT"===e&&S.opponent.board.checkEndGame())alert(`HIT! ${S.currentPlayer.name} WON!`);else{alert(e);const t=S.opponent.aiMove(S.currentPlayer.board);"HIT"===t&&S.currentPlayer.board.checkEndGame()?alert(`HIT! ${S.opponent.name} WON!`):(alert(t),q())}}))}}}document.querySelector("#start").addEventListener("click",(()=>{S=new a,function(){w();const e=document.createElement("button");e.textContent="Play aganist another Player",g.appendChild(e),e.addEventListener("click",(()=>{S.aiGame=!1,E()}));const t=document.createElement("button");t.textContent="Play against Computer",g.appendChild(t),t.addEventListener("click",(()=>{S.aiGame=!0,E()}))}()}))})()})();