"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{877:function(n,e,t){t.d(e,{Hx:function(){return a},Mc:function(){return o},mv:function(){return s},uV:function(){return c},wr:function(){return i}});var r="5838ed03aade1a1b5b4b58af51fb1765",i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.cast}))},s=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()})).then((function(n){return n.results}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.results}))}},257:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,o,c=t(861),s=t(439),a=t(687),u=t.n(a),l=t(877),h=t(791),f=t(689),d=t(168),v=t(686),p=t(87),g=(v.Z.ul(r||(r=(0,d.Z)(["\n  list-style: circle;\n  text-decoration: none;\n"]))),(0,v.Z)(p.rU)(i||(i=(0,d.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  font-weight: 700;\n"])))),m=v.Z.div(o||(o=(0,d.Z)(["\n  margin-top: 20px;\n"]))),x=t(184),j=function(){var n,e,t=(0,f.UO)().movieId,r=(0,h.useState)(0),i=(0,s.Z)(r,2),o=i[0],a=i[1],d=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movie";if(console.log(d),(0,h.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Mc)(e);case 3:t=n.sent,a({imgUrl:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),rating:Math.floor(10*t.vote_average),genres:t.genres.map((function(n){return n.name})).join(" "),title:t.title,owerview:t.overview,year:new Date(t.release_date).getUTCFullYear()}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(t)}),[t]),o)return(0,x.jsx)("main",{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(g,{to:d,children:"Go back"}),(0,x.jsxs)(m,{children:[(0,x.jsx)("img",{src:o.imgUrl,alt:"Movie poster",width:"250",height:"350"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h2",{children:[o.title," (",o.year,")"]}),(0,x.jsxs)("p",{children:["User score: ",o.rating,"%"]}),(0,x.jsx)("h3",{children:"Owerview"}),(0,x.jsx)("p",{children:o.owerview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:o.genres})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(g,{to:"cast",state:{from:d},children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(g,{to:"reviews",state:{from:d},children:"Reviews"})})]})]}),(0,x.jsx)(h.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(f.j3,{})})]})})}},861:function(n,e,t){function r(n,e,t,r,i,o,c){try{var s=n[o](c),a=s.value}catch(u){return void t(u)}s.done?e(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var c=n.apply(e,t);function s(n){r(c,i,o,s,a,"next",n)}function a(n){r(c,i,o,s,a,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=257.df95908d.chunk.js.map