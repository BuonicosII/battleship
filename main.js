(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.smallGameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 25vh;\n    height: 25vh;\n    border: solid 1px black\n}\n\n.bigGameboard {\n    display: flex;\n    flex-wrap: wrap;\n    width: 50vh;\n    height: 50vh;\n    border: solid 1px black\n}\n\n.smallSquare {\n    width: 2.5vh;\n    height: 2.5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center; \n}\n\n.square {\n    width: 5vh;\n    height: 5vh;\n    border: solid 1px black;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center; \n}\n\n.squareWithShip {\n    background-color: rgb(0, 110, 255);\n}\n\n.squareWithShipHitFriendly {\n    width: 50%;\n    height: 50%;\n    border-radius: 50%;\n    background-color: rgb(255, 166, 0);\n}\n\n.squareHitByEnemy {\n    width: 50%;\n    height: 50%;\n    border-radius: 50%;\n    background-color: rgb(0, 0, 0);\n}\n\n.squareWithShipHitEnemy {\n    width: 50%;\n    height: 50%;\n    border-radius: 50%;\n    background-color: rgb(255, 0, 0);\n}\n\n.squareHitByFriendly {\n    width: 50%;\n    height: 50%;\n    border-radius: 50%;\n    background-color: rgb(0, 0, 0);\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=a.base?s[0]+a.base:s[0],d=o[c]||0,h="".concat(c," ").concat(d);o[c]=d+1;var u=n(h),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=r(p,a);a.byIndex=l,t.splice(l,0,{identifier:h,updater:f,references:1})}i.push(h)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=a(e,r),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{#e;#t;constructor(e){this.#e=e,this.#t=0}isSunk(){return this.#e===this.#t}hit(){this.#t<this.#e&&(this.#t+=1)}getHits(){return this.#t}getLength(){return this.#e}}class t{#n;constructor(){this.board=new Array,this.#n=["A","B","C","D","E","F","G","H","I","J"];for(const e of this.#n)for(let t=1;t<=10;t++){let n={coordinates:`${e}${t}`,containsShip:null,shot:null};this.board.push(n)}}checkValidPlacement(e,t,n,a){if("horizontally"===t){if(a+e>11)return!1;for(let t=a;t<a+e;t++)if(null!==this.board.find((({coordinates:e})=>e===`${n}${t}`)).containsShip)return!1;return!0}if("vertically"===t){const t=this.#n.findIndex((e=>e===n));if(e+t>10)return!1;for(let n=t;n<t+e;n++)if(null!==this.board.find((({coordinates:e})=>e===`${this.#n[n]}${a}`)).containsShip)return!1;return!0}}placeShip(t,n,a,r){const o=new e(t);if("horizontally"===n)for(let e=r;e<r+t;e++)this.board.find((({coordinates:t})=>t===`${a}${e}`)).containsShip=o;else if("vertically"===n){const e=this.#n.findIndex((e=>e===a));for(let n=e;n<e+t;n++)this.board.find((({coordinates:e})=>e===`${this.#n[n]}${r}`)).containsShip=o}}receiveAttack(e,t){let n=this.board.find((({coordinates:n})=>n===`${e}${t}`));return"Shot"===n.shot?"You already fired at these coordinates!":null===n.containsShip?(n.shot="Shot","MISS"):(n.containsShip.hit(),n.shot="Shot","HIT")}checkEndGame(){for(const e of this.board)if(null!==e.containsShip&&!1===e.containsShip.isSunk())return!1;return!0}}class a{#a;constructor(e,n){this.name=e,this.#a="human"===n,this.fleet=["Carrier","Battleship","Destroyer","Submarine","Patrol Boat"],this.board=new t}isHuman(){return this.#a}aiMove(e){if(!1===this.#a){let t=e.board[Math.floor(100*Math.random())];for(;"Shot"===t.shot;)t=e.board[Math.floor(100*Math.random())];return e.receiveAttack(t.coordinates.slice(0,1),Number(t.coordinates.slice(1)))}}}class r{constructor(){this.currentPlayer,this.opponent,this.aiGame}createPlayerOne(e){this.playerOne=new a(e,"human"),this.currentPlayer=this.playerOne}createPlayerTwo(e,t){"human"===t?(this.playerTwo=new a(e,t),this.opponent=this.playerTwo):(this.playerTwo=new a(e),this.opponent=this.playerTwo)}}var o=n(379),i=n.n(o),l=n(795),s=n.n(l),c=n(569),d=n.n(c),h=n(565),u=n.n(h),p=n(216),f=n.n(p),m=n(589),b=n.n(m),y=n(426),v={};v.styleTagTransform=b(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),i()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const g=document.querySelector("body");let S,C,E,w;function k(){for(;g.hasChildNodes();)g.removeChild(g.firstChild)}function x(){k();const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");n.textContent="Create Player",g.appendChild(e),e.appendChild(t),e.appendChild(n),n.addEventListener("click",(()=>{event.preventDefault(),S.createPlayerOne(t.value),!1===S.aiGame?function(){k();const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button");g.appendChild(e),e.appendChild(t),e.appendChild(n),n.textContent="Create Player",n.addEventListener("click",(()=>{event.preventDefault(),S.createPlayerTwo(t.value,"human"),L(S.playerOne.fleet,S.playerOne.board)}))}():!0===S.aiGame&&(S.createPlayerTwo("Computer"),L(S.playerOne.fleet,S.playerOne.board))}))}function L(e,t){k();const n=document.createElement("div");n.classList.add("bigGameboard");const a=document.createElement("div"),r=document.createElement("button");r.textContent="Vertically",r.addEventListener("click",(()=>{w="vertically"}));const o=document.createElement("button");o.textContent="Horizontally",o.addEventListener("click",(()=>{w="horizontally"})),g.appendChild(a),g.appendChild(r),g.appendChild(o),g.appendChild(n);for(const t of e){const e=document.createElement("button");e.textContent=t,e.addEventListener("click",(()=>{switch(e.textContent){case"Carrier":E=5;break;case"Battleship":E=4;break;case"Destroyer":case"Submarine":E=3;break;case"Patrol Boat":E=2}C=e.textContent})),a.appendChild(e)}for(const a of t.board){const r=document.createElement("div");r.classList.add("square"),null!==a.containsShip&&r.classList.add("squareWithShip"),r.addEventListener("click",(()=>{if(null==C)alert("Select Ship First!");else if(null==w)alert("Select ship orientation!");else if(t.checkValidPlacement(E,w,a.coordinates.slice(0,1),Number(a.coordinates.slice(1))))if(1===S.playerOne.fleet.length){t.placeShip(E,w,a.coordinates.slice(0,1),Number(a.coordinates.slice(1)));let n=e.indexOf(C);e.splice(n,1),!1===S.aiGame?(L(S.playerTwo.fleet,S.playerTwo.board),E=null,C=null,w=null):(T(),E=null,C=null,w=null,q())}else if(0===S.playerOne.fleet.length&&1===S.playerTwo.fleet.length){t.placeShip(E,w,a.coordinates.slice(0,1),Number(a.coordinates.slice(1)));let n=e.indexOf(C);e.splice(n,1),E=null,C=null,w=null,q()}else{t.placeShip(E,w,a.coordinates.slice(0,1),Number(a.coordinates.slice(1)));let n=e.indexOf(C);e.splice(n,1),L(e,t),E=null,C=null,w=null}else alert("Cannot place ship at these coordinates!")})),n.appendChild(r)}}function T(){const e=["A","B","C","D","E","F","G","H","I","J"];for(;0!==S.playerTwo.fleet.length;){let t=e[Math.floor(10*Math.random())],n=Math.floor(10*Math.random()+1);w=Math.floor(2*Math.random())%2==0?"vertically":"horizontally",console.log(w);let a=S.playerTwo.fleet[Math.floor(Math.random()*S.playerTwo.fleet.length)];switch(a){case"Carrier":E=5;break;case"Battleship":E=4;break;case"Destroyer":case"Submarine":E=3;break;case"Patrol Boat":E=2}if(S.playerTwo.board.checkValidPlacement(E,w,t,n)){S.playerTwo.board.placeShip(E,w,t,n);let e=S.playerTwo.fleet.indexOf(a);S.playerTwo.fleet.splice(e,1),E=null,C=null,w=null}}}function q(){if(k(),!0===S.aiGame){let e=document.createElement("div");e.classList.add("smallGameboard"),g.appendChild(e);for(const t of S.currentPlayer.board.board){const n=document.createElement("div");if(n.classList.add("smallSquare"),null!==t.containsShip&&"Shot"===t.shot)n.classList.add("squareWithShipHitFriendly");else if(null===t.containsShip&&"Shot"===t.shot){let e=document.createElement("div");e.classList.add("squareHitByEnemy"),n.appendChild(e)}else null!==t.containsShip&&null===t.shot&&n.classList.add("squareWithShip");e.appendChild(n)}let t=document.createElement("div");t.classList.add("bigGameboard"),g.appendChild(t);for(const e of S.opponent.board.board){const n=document.createElement("div");if(n.classList.add("square"),null!==e.containsShip&&"Shot"===e.shot){let e=document.createElement("div");e.classList.add("squareWithShipHitEnemy"),n.appendChild(e)}else if(null===e.containsShip&&"Shot"===e.shot){let e=document.createElement("div");e.classList.add("squareHitByFriendly"),n.appendChild(e)}t.appendChild(n),n.addEventListener("click",(()=>{const t=S.opponent.board.receiveAttack(e.coordinates.slice(0,1),Number(e.coordinates.slice(1)));if("You already fired at these coordinates!"===t)alert(t),q();else if("HIT"===t&&S.opponent.board.checkEndGame())alert(`HIT! ${S.currentPlayer.name} WON!`);else{alert(t);const e=S.opponent.aiMove(S.currentPlayer.board);"HIT"===e&&S.currentPlayer.board.checkEndGame()?alert(`HIT! ${S.opponent.name} WON!`):(alert(e),q())}}))}}else{let e=document.createElement("div");e.classList.add("bigGameboard"),g.appendChild(e);for(const t of S.currentPlayer.board.board){const n=document.createElement("div");null!==t.containsShip&&"Shot"===t.shot?n.classList.add("squareWithShipHitFriendly"):null===t.containsShip&&"Shot"===t.shot?n.classList.add("squareHitByEnemy"):null!==t.containsShip&&null===t.shot?n.classList.add("squareWithShip"):n.classList.add("square"),e.appendChild(n)}let t=document.createElement("div");t.classList.add("bigGameboard"),g.appendChild(t);for(const e of S.opponent.board.board){const n=document.createElement("div");null!==e.containsShip&&"Shot"===e.shot?n.classList.add("squareWithShipHitEnemy"):null===e.containsShip&&"Shot"===e.shot?n.classList.add("squareHitByFriendly"):n.classList.add("square"),t.appendChild(n),n.addEventListener("click",(()=>{const t=S.opponent.board.receiveAttack(e.coordinates.slice(0,1),Number(e.coordinates.slice(1)));"You already fired at these coordinates!"===t?(alert(t),q()):"HIT"===t&&S.opponent.board.checkEndGame()?alert(`HIT! ${S.currentPlayer.name} WON!`):(alert(t),S.opponent===S.playerTwo?(S.opponent=S.playerOne,S.currentPlayer=S.playerTwo):(S.opponent=S.playerTwo,S.currentPlayer=S.playerOne),q())}))}}}document.querySelector("#start").addEventListener("click",(()=>{S=new r,function(){k();const e=document.createElement("button");e.textContent="Play aganist another Player",g.appendChild(e),e.addEventListener("click",(()=>{S.aiGame=!1,x()}));const t=document.createElement("button");t.textContent="Play against Computer",g.appendChild(t),t.addEventListener("click",(()=>{S.aiGame=!0,x()}))}()}))})()})();