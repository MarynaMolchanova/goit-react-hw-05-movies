"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{877:function(n,t,e){e.d(t,{Hx:function(){return a},Mc:function(){return c},mv:function(){return u},uV:function(){return o},wr:function(){return i}});var r="5838ed03aade1a1b5b4b58af51fb1765",i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.cast}))},u=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()})).then((function(n){return n.results}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.results}))}},736:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,i,c=e(433),o=e(861),u=e(439),a=e(687),s=e.n(a),f=e(877),h=e(791),p=e(689),l=e(168),d=e(686),v=d.Z.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),m=d.Z.div(i||(i=(0,l.Z)(["\n  width: 150px;\n"]))),g=e(184),w=function(){var n=(0,p.UO)().movieId,t=(0,h.useState)([]),e=(0,u.Z)(t,2),r=e[0],i=e[1];return(0,h.useEffect)((function(){function t(){return(t=(0,o.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.uV)(t);case 3:e=n.sent,i((0,c.Z)(e)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}),[n]),(0,g.jsx)(v,{children:r.map((function(n){return(0,g.jsxs)(m,{children:[(0,g.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500/"+n.profile_path:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",alt:"",width:"100",height:"150"}),(0,g.jsx)("p",{children:n.name}),(0,g.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})}},861:function(n,t,e){function r(n,t,e,r,i,c,o){try{var u=n[c](o),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,c){var o=n.apply(t,e);function u(n){r(o,i,c,u,a,"next",n)}function a(n){r(o,i,c,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=736.f7c2649f.chunk.js.map