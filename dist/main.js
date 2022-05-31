!function(t){var e={};function s(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(i,l,function(e){return t[e]}.bind(null,l));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){t.exports=s(1)},function(t,e,s){"use strict";s.r(e);class i{constructor(t,e){this.board=t,this.size=10;this.elem=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.elem.setAttributeNS(null,"width",this.size),this.elem.setAttributeNS(null,"height",this.size),this.elem.setAttributeNS(null,"fill","blue"),this.elem.onclick=()=>{console.log("clicked"),e.click()},this.board.add(this.elem)}render(t,e){this.elem.setAttributeNS(null,"x",t*this.size),this.elem.setAttributeNS(null,"y",e*this.size)}assault(){this.elem.setAttributeNS(null,"fill","red")}}class l{constructor(t,e){this.board=t,this.size=10;this.elem=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.elem.setAttributeNS(null,"width",this.size),this.elem.setAttributeNS(null,"height",this.size),this.elem.setAttributeNS(null,"fill","black"),this.elem.onclick=()=>{console.log("clicked ship"),e.click()},this.board.add(this.elem)}render(t,e){this.elem.setAttributeNS(null,"x",t*this.size),this.elem.setAttributeNS(null,"y",e*this.size)}assault(){this.elem.setAttributeNS(null,"fill","white")}}class h{constructor(t,e){console.log("board"),this.width=270|t,this.height=270|e,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("aria-hidden","true"),this.svg.setAttribute("viewbox",`0 0 ${this.width} ${this.height}`),this.svg.setAttribute("width",`${this.width}px`),this.svg.setAttribute("height",`${this.height}px`),document.body.appendChild(this.svg)}add(t){this.svg.appendChild(t)}}const c={},n={blank:t=>new c.blank(c.board,t),ship:t=>new c.ship(c.board,t)},r=function(t){t?(c.board=new t.board,c.blank=t.blank,c.ship=t.ship):(c.board=new h,c.blank=i,c.ship=l)};class o{constructor(){this.el=n.blank(this)}render(t,e){this.el.render(t,e)}assault(){return this.el.assault(),0}click(){this.clickOccupant()}clickOccupant(){}}class a{constructor(){this.damage=0,this.el=n.ship(this)}render(t,e){this.el.render(t,e)}assault(){return this.damage=1,this.el.assault(),this.damage}click(){this.clickOccupant()}clickOccupant(){}}class u{constructor(t,e,s){this.x=t,this.y=e,this.setOccupant(s)}setOccupant(t){this.occupant=t,this.occupant.clickOccupant=this.click.bind(this),this.occupant.render(this.x,this.y)}assault(){return this.occupant.assault()}click(){this.clickEmit(this)}clickEmit(){}}s.d(e,"Game",(function(){return d}));class d{constructor(t,e){r(e),this.map=[];for(let e=0;e<t;e++){const s=[];for(let i=0;i<t;i++){const t=new o,l=new u(e,i,t);l.clickEmit=this.clickSpace,s.push(l),console.log(typeof l.occupant)}this.map.push(s)}this.generateOtherOccupants(10)}clickSpace(t){console.log(t),t.assault()}generateOtherOccupants(t,e=0,s=[]){if(t>e){const i=this.numberRandom(),l=this.numberRandom(),h=`${i}_${l}`;if(-1!==s.indexOf(h))this.generateOtherOccupants(t,e,s);else{s.push(h);const c=new a;this.map[i][l].setOccupant(c),this.generateOtherOccupants(t,e+1,s)}}}numberRandom(){return Math.floor(Math.random()*this.map.length)}}new d(10,{board:class{constructor(t,e){console.log("boardxxxxx"),this.width=270|t,this.height=270|e,this.board=document.createElement("div"),this.board.style.width=this.width+"px",this.board.style.height=this.height+"px",document.body.appendChild(this.board)}add(t){this.board.appendChild(t)}},blank:class{constructor(t,e){this.board=t,this.size=10;this.elem=document.createElement("div"),this.elem.style.width=this.size+"px",this.elem.style.height=this.size+"px",this.elem.style.background="blue",this.elem.style.position="absolute",this.elem.onclick=()=>{console.log("clicked"),e.click()},this.board.add(this.elem)}render(t,e){console.log(t,e),this.elem.style.left=t*this.size+"px",this.elem.style.top=e*this.size+"px"}assault(){this.elem.style.background="red"}},ship:class{constructor(t,e){this.board=t,this.size=10;this.elem=document.createElement("div"),this.elem.style.width=this.size+"px",this.elem.style.height=this.size+"px",this.elem.style.background="black",this.elem.style.position="absolute",this.elem.onclick=()=>{console.log("clicked"),e.click()},this.board.add(this.elem)}render(t,e){this.elem.style.left=t*this.size+"px",this.elem.style.top=e*this.size+"px"}assault(){this.elem.style.background="white"}}})}]);