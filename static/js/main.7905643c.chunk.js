(this.webpackJsonpwetwitter=this.webpackJsonpwetwitter||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a.n(r),s=a(30),i=a.n(s),o=a(7),u=a(21),l=a(6),j=a(8),d=a.n(j),b=a(13),p=a(10),f=a(22),h=a(23);a(44),a(46),a(55);h.a.initializeApp({apiKey:"AIzaSyAeRRi7f2pxjK5P6FNQ9FJ-V3OHVQf76tg",authDomain:"wetwitter-e82b3.firebaseapp.com",databaseURL:"https://wetwitter-e82b3.firebaseio.com",projectId:"wetwitter-e82b3",storageBucket:"wetwitter-e82b3.appspot.com",messagingSenderId:"33638993195",appId:"1:33638993195:web:aac8e03c8776f9c584896e"});var x=h.a,O=h.a.auth(),m=h.a.firestore(),g=h.a.storage(),v=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(r.useState)(!0),p=Object(o.a)(j,2),f=p[0],h=p[1],x=Object(r.useState)(""),m=Object(o.a)(x,2),g=m[0],v=m[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&l(n)},y=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(a,u);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(a,u);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:y,className:"container",children:[Object(n.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(n.jsx)("input",{type:"submit",className:"authInput authSubmit",value:f?"Create Account":"Sign In"}),g&&Object(n.jsxs)("span",{className:"authError",children:[" ",g," "]})]}),Object(n.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:f?"Sign In":"Create Account"})]})},w=function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new x.auth.GoogleAuthProvider:"github"===a&&(n=new x.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(n.jsx)(p.a,{icon:f.b})]}),Object(n.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(n.jsx)(p.a,{icon:f.a})]})]})]})},y=a(32),N=a(17),I=function(e){var t=e.wetweetObj,a=e.isOwner,c=Object(r.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(r.useState)(t.text),j=Object(o.a)(l,2),f=j[0],h=j[1],x=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this this?")){e.next=6;break}return e.next=4,m.doc("wetweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return u((function(e){return!e}))},v=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.doc("wetweets/".concat(t.id)).update({text:f});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"wetweet",children:i?Object(n.jsx)(n.Fragment,{children:a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:v,className:"container wetweetEdit",children:[Object(n.jsx)("input",{type:"text",placeholder:"Edit your Wetweet",value:f,required:!0,onChange:function(e){var t=e.target.value;h(t)},autoFocus:!0,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Update Wetweet",className:"formBtn"})]}),Object(n.jsx)("span",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(n.jsx)("img",{src:t.attachmentUrl}),a&&Object(n.jsxs)("div",{className:"wetweet__actions",children:[Object(n.jsx)("span",{onClick:x,children:Object(n.jsx)(p.a,{icon:N.d})}),Object(n.jsx)("span",{onClick:O,children:Object(n.jsx)(p.a,{icon:N.a})})]})]})})},S=a(56),k=function(e){var t=e.userObj,a=Object(r.useState)(""),c=Object(o.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)(""),l=Object(o.a)(u,2),j=l[0],f=l[1],h=function(){var e=Object(b.a)(d.a.mark((function e(a){var n,r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===j){e.next=12;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,r.putString(j,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,m.collection("wetweets").add(o);case 15:i(""),f("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(n.jsxs)("div",{className:"factoryInput__container",children:[Object(n.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(n.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"Add photos "}),Object(n.jsx)(p.a,{icon:N.b})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;f(t)},a.readAsDataURL(t)},style:{opacity:0}}),Object(n.jsx)("input",{type:"submit",value:"Wetweet"}),j&&Object(n.jsxs)("div",{className:"factoryForm__attachment",children:[Object(n.jsx)("img",{alt:"preview",src:j,style:{backgroundImage:j}}),Object(n.jsxs)("div",{className:"factoryForm__clear",onClick:function(){f("")},children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)(p.a,{icon:N.c})]})]})]})},F=function(e){var t=e.userObj,a=Object(r.useState)([]),c=Object(o.a)(a,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){m.collection("wetweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(k,{userObj:t}),Object(n.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(n.jsx)(I,{wetweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=function(e){var t=e.refreshUser,a=e.userObj,c=Object(l.f)(),s=Object(r.useState)(a.displayName),i=Object(o.a)(s,2),u=i[0],j=i[1],f=Object(r.useState)(a.profilePic),h=Object(o.a)(f,2),x=h[0],v=h[1],w=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("wetweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){w()}),[]);var y=function(){var e=Object(b.a)(d.a.mark((function e(n){var r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",a.displayName===u&&a.ProfilePic===x){e.next=22;break}if(e.prev=3,a.photoURL===x){e.next=14;break}return c=g.ref().child("".concat(a.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(x,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:return r=e.sent,e.next=14,a.updateProfile({displayName:u,profilePic:r});case 14:return e.next=16,a.updateProfile({displayName:u});case 16:t(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),console.error(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center",color:"black"},children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("form",{onSubmit:y,className:"profileForm",children:[Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[x?Object(n.jsx)("img",{src:x,width:"100px",height:"100px",alt:"profileImage",style:{borderRadius:"50%"}}):Object(n.jsx)("img",{src:"https://lh3.googleusercontent.com/proxy/m4bOSiyaKmuhH0faWpGGxfYoBlCGVbwGTzdduGm5nLu65bcV7z8YL0sNJvjEn14rxIfKKn0KNN0URxOQvY66dVP03IOtda3gwHlU40747FPzBE09geQ9ciFj8vUagyBKua1BeirREwVqVoHdfhQFuByxRcLGIDMA",width:"100px",height:"100px",alt:"profileImage",style:{borderRadius:"50%"}}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"Change photos"}),Object(n.jsx)(p.a,{icon:N.b})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;v(t)},a.readAsDataURL(t)},style:{opacity:0}})]}),Object(n.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(n.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),c.push("/")},children:"Log Out"})]})})},A=function(e){var t=e.userObj;return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(n.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"2x"})})}),Object(n.jsx)("li",{children:Object(n.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(n.jsx)(p.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(n.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"profile"})]})})]})})},U=function(e){var t=e.refreshUser,a=e.isLoggedIn,r=e.userObj;return Object(n.jsxs)(u.a,{children:[a&&Object(n.jsx)(A,{userObj:r}),Object(n.jsx)(l.c,{children:Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(F,{userObj:r})}),Object(n.jsx)(l.a,{exact:!0,path:"/profile",children:Object(n.jsx)(C,{userObj:r,refreshUser:t})})]}):Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(w,{})})})})]})};var P=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){O.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[a?Object(n.jsx)(U,{refreshUser:function(){var e=O.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(n.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Wetwitter "]})]})};a(53);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.7905643c.chunk.js.map