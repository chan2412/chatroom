(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),i=n(14),s=n.n(i),a=(n(22),n(13)),u=n.n(a),o=n(15),j=n(10),d=(n(24),n(9)),b=(n(30),n(26),n(16)),h=n(17),p=n(4);d.a.initializeApp({apiKey:"AIzaSyAjy6-8GoX8wIh2lARIda7tRfc26HSM870",authDomain:"superchat-cbc41.firebaseapp.com",projectId:"superchat-cbc41",storageBucket:"superchat-cbc41.appspot.com",messagingSenderId:"806540170195",appId:"1:806540170195:web:ee847903011d57353cd526",measurementId:"G-Z3TH9W9LNP"});var l=d.a.auth(),O=d.a.firestore();function f(){return Object(p.jsx)("button",{onClick:function(){var e=new d.a.auth.GoogleAuthProvider;l.signInWithPopup(e)},children:"Sign in with Google"})}function m(){return l.currentUser&&Object(p.jsx)("button",{onClick:function(){return l.signOut()},children:"Sign Out"})}function x(){var e=Object(c.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),r=Object(h.a)(n,{idField:"id"}),i=Object(j.a)(r,1)[0],s=Object(c.useState)(""),a=Object(j.a)(s,2),b=a[0],f=a[1],m=function(){var n=Object(o.a)(u.a.mark((function n(c){var r,i,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),r=l.currentUser,i=r.uid,s=r.photoURL,n.next=4,t.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:i,photoURL:s});case 4:f(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("main",{children:[i&&i.map((function(e){return Object(p.jsx)(g,{message:e},e.id)})),Object(p.jsx)("div",{ref:e})]}),Object(p.jsxs)("form",{onSubmit:m,children:[Object(p.jsx)("input",{value:b,onChange:function(e){return f(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"\ud83d\ude80Send"})]})]})}function g(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,i=c===l.currentUser.uid?"sent":"recieved";return Object(p.jsxs)("div",{className:"message ".concat(i),children:[Object(p.jsx)("img",{src:r}),Object(p.jsx)("p",{children:n})]})}var v=function(){var e=Object(b.a)(l),t=Object(j.a)(e,1)[0];return Object(p.jsxs)("div",{children:[Object(p.jsx)("header",{children:Object(p.jsx)(m,{})}),Object(p.jsx)("section",{children:t?Object(p.jsx)(x,{}):Object(p.jsx)(f,{})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),I()}},[[29,1,2]]]);
//# sourceMappingURL=main.cb60dce5.chunk.js.map