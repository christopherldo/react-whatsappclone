(this["webpackJsonpreact-whatsappclone"]=this["webpackJsonpreact-whatsappclone"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(16),r=a.n(s),i=a(2),o=a.n(i),u=a(5),d=a(3),l=(a(38),a(30)),j=a.n(l),h=a(31),b=a.n(h),p=a(19),f=a.n(p),m=a(18),O=a.n(m),x=(a(39),a(0)),v=function(e){var t=e.data,a=e.onClick,c=e.active,s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){if(t.last_message_date){var e=new Date(1e3*t.last_message_date.seconds),a=e.getHours(),n=e.getMinutes();a=a<10?"0".concat(a):a,n=n<10?"0".concat(n):n,o("".concat(a,":").concat(n))}}),[t]),Object(x.jsxs)("button",{type:"button",className:"chatListItem",onClick:a,role:"row","aria-selected":c,children:[Object(x.jsx)("img",{className:"chatListItem--avatar",src:t.image,alt:t.title}),Object(x.jsxs)("div",{className:"chatListItem--lines",children:[Object(x.jsxs)("div",{className:"chatListItem--line",children:[Object(x.jsx)("div",{className:"chatListItem--name",children:t.title}),Object(x.jsx)("div",{className:"chatListItem--date",children:i})]}),Object(x.jsx)("div",{className:"chatListItem--line",children:Object(x.jsx)("div",{className:"chatListItem--lastMsg",children:Object(x.jsx)("p",{children:t.last_message})})})]})]})},w=(a(41),function(){return Object(x.jsxs)("div",{className:"chatIntro",children:[Object(x.jsx)("img",{src:"https://web.whatsapp.com/img/intro-connection-hq-light_9466a20e6d2921a21ac7ab82419be157.jpg",alt:"Whatsapp Connected"}),Object(x.jsx)("h1",{children:"Bem-vindo ao Clone do Whatsapp"}),Object(x.jsxs)("h2",{children:["Feito por"," ",Object(x.jsx)("a",{href:"https://github.com/christopherldo/",target:"_blank",rel:"noopener noreferrer",children:"@christopherldo"})]})]})}),g=a(22),N=a.n(g),y=(a(42),a(24)),k=a.n(y),C=a(25),_=a.n(C),S=a(26),W=a.n(S),I=a(28),L=a.n(I),E=a(27),P=a.n(E),F=(a(43),function(e){var t=e.data,a=e.user,c=Object(n.useState)(""),s=Object(d.a)(c,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){if(t.date){var e=new Date(1e3*t.date.seconds),a=e.getHours(),n=e.getMinutes();a=a<10?"0".concat(a):a,n=n<10?"0".concat(n):n,i("".concat(a,":").concat(n))}}),[t]),Object(x.jsx)("div",{className:"messageLine",style:{justifyContent:a.id===t.author?"flex-end":"flex-start"},children:Object(x.jsxs)("div",{className:"messageItem",style:{backgroundColor:a.id===t.author?"#dcf8c6":"#fff"},children:[Object(x.jsx)("div",{className:"messageText",children:t.body}),Object(x.jsx)("div",{className:"messageDate",children:r})]})})}),R=a(21),U=a(12),A=(a(44),a(45),{apiKey:"AIzaSyANICJaOvCyG9XRaCh0rtK0UIuAhrm8PF4",authDomain:"react-whatsappclone.firebaseapp.com",projectId:"react-whatsappclone",storageBucket:"react-whatsappclone.appspot.com",messagingSenderId:"784776353266",appId:"1:784776353266:web:8a291dbdf5708140b2c76b"}),D=U.a.initializeApp(A),H=D.firestore(),M={fbPopup:function(){return Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new U.a.auth.FacebookAuthProvider,e.abrupt("return",D.auth().signInWithPopup(t));case 2:case"end":return e.stop()}}),e)})))()},googlePopup:function(){return Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new U.a.auth.GoogleAuthProvider,e.abrupt("return",D.auth().signInWithPopup(t));case 2:case"end":return e.stop()}}),e)})))()},addUser:function(e){return Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.collection("users").doc(e.id).set({name:e.name,avatar:e.avatar},{merge:!0});case 2:case"end":return t.stop()}}),t)})))()},getContactList:function(e){return Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,H.collection("users").get();case 3:return t.sent.forEach((function(t){var n=t.data();t.id!==e&&a.push({id:t.id,name:n.name,avatar:n.avatar})})),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))()},addNewChat:function(e,t){return Object(u.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H.collection("chats").add({messages:[],users:[e.id,t.id]});case 2:n=a.sent,H.collection("users").doc(e.id).update({chats:U.a.firestore.FieldValue.arrayUnion({chat_id:n.id,title:t.name,image:t.avatar,with:t.id})}),H.collection("users").doc(t.id).update({chats:U.a.firestore.FieldValue.arrayUnion({chat_id:n.id,title:e.name,image:e.avatar,with:e.id})});case 5:case"end":return a.stop()}}),a)})))()},onChatList:function(e,t){return H.collection("users").doc(e).onSnapshot((function(e){if(e.exists){var a=e.data();if(a.chats)Object(R.a)(a.chats).sort((function(e,t){return void 0===e.last_message_date?-1:void 0===t.last_message_date||e.last_message_date.seconds<t.last_message_date.seconds?1:-1})),t(a.chats)}}))},onChatContent:function(e,t,a){return H.collection("chats").doc(e).onSnapshot((function(e){if(e.exists){var n=e.data();n.messages&&(t(n.messages),a(n.users))}}))},sendMessage:function(e,t,a,n,c){return Object(u.a)(o.a.mark((function s(){var r,i,d;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:for(d in H.collection("chats").doc(e.chat_id).update({messages:U.a.firestore.FieldValue.arrayUnion({type:a,author:t,body:n,date:new Date})}),r=function(){var t=Object(u.a)(o.a.mark((function t(a){var s,r,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.collection("users").doc(c[a]).get();case 2:if(s=t.sent,!(r=s.data()).chats){t.next=9;break}for(u in i=Object(R.a)(r.chats))i[u].chat_id===e.chat_id&&(i[u].last_message=n,i[u].last_message_date=new Date);return t.next=9,H.collection("users").doc(c[a]).update({chats:i});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=[],c)d&&r(d);return s.next=6,Promise.all(i);case 6:case"end":return s.stop()}}),s)})))()}},B=function(e){var t,a=e.user,c=e.data,s=window.SpeechRecognition||window.webkitSpeechRecognition;s&&(t=new s);var r=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(n.useState)(""),h=Object(d.a)(j,2),b=h[0],p=h[1],m=Object(n.useState)(!1),v=Object(d.a)(m,2),w=v[0],g=v[1],y=Object(n.useState)(""),C=Object(d.a)(y,2),S=C[0],I=C[1],E=Object(n.useState)([]),R=Object(d.a)(E,2),U=R[0],A=R[1],D=Object(n.useState)([]),H=Object(d.a)(D,2),B=H[0],z=H[1],G=function(){b&&(M.sendMessage(c,a.id,"text",b,B),p(""),l(!1))};Object(n.useEffect)((function(){""===b&&I("Digite uma mensagem")}),[b]),Object(n.useEffect)((function(){return A([]),M.onChatContent(c.chat_id,A,z)}),[c.chat_id]),Object(n.useEffect)((function(){r.current.scrollHeight>r.current.offsetHeight&&(r.current.scrollTop=r.current.scrollHeight-r.current.offsetHeight)}),[U]);return Object(x.jsxs)("div",{className:"chatWindow",children:[Object(x.jsxs)("div",{className:"chatWindow--header",children:[Object(x.jsxs)("div",{className:"chatWindow--headerinfo",children:[Object(x.jsx)("img",{src:c.image,alt:c.title,className:"chatWindow--avatar"}),Object(x.jsx)("div",{className:"chatWindow--name",children:c.title})]}),Object(x.jsxs)("div",{className:"chatWindow--headerbuttons",children:[Object(x.jsx)("div",{className:"chatWindow--btn",children:Object(x.jsx)(O.a,{})}),Object(x.jsx)("div",{className:"chatWindow--btn",children:Object(x.jsx)(k.a,{})}),Object(x.jsx)("div",{className:"chatWindow--btn",children:Object(x.jsx)(f.a,{})})]})]}),Object(x.jsx)("div",{ref:r,className:"chatWindow--body",children:U.map((function(e,t){return Object(x.jsx)(F,{data:e,user:a},t)}))}),Object(x.jsx)("div",{className:"chatWindow--emojiarea",style:{height:u?"250px":"0px"},children:Object(x.jsx)(N.a,{onEmojiClick:function(e,t){p(b+t.emoji)},disableSearchBar:!0,disableSkinTonePicker:!0})}),Object(x.jsxs)("div",{className:"chatWindow--footer",children:[Object(x.jsxs)("div",{className:"chatWindow--pre",children:[Object(x.jsx)("button",{type:"button",className:"chatWindow--btn",onClick:function(){return l(!1)},style:{width:u?"40px":"0px"},children:Object(x.jsx)(_.a,{})}),Object(x.jsx)("button",{type:"button",className:"chatWindow--btn",onClick:function(){return l(!0)},"aria-hidden":"true",children:Object(x.jsx)(W.a,{style:{color:u?"#009688":"#919191"}})})]}),Object(x.jsx)("div",{className:"chatWindow--inputarea",children:Object(x.jsx)("input",{type:"text",className:"chatWindow--input",placeholder:S,value:b,onChange:function(e){return p(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&G()}})}),Object(x.jsx)("div",{className:"chatWindow--pos",children:b?Object(x.jsx)("button",{type:"button",onClick:G,className:"chatWindow--btn",children:Object(x.jsx)(P.a,{})}):Object(x.jsx)("button",{type:"button",onClick:function(){if(t){if(w)return I("Reconhecendo a voz..."),g(!1),void t.stop();I("Fale agora"),t.onstart=function(){g(!0)},t.onend=function(){g(!1)},t.onresult=function(e){p(e.results[0][0].transcript)},t.start()}},className:"chatWindow--btn",children:Object(x.jsx)(L.a,{style:{color:w?"#126ece":"#919191"}})})})]})]})},z=(a(52),a(29)),G=a.n(z),J=function(e){var t=e.user,a=e.show,c=e.setShow,s=Object(n.useState)([]),r=Object(d.a)(s,2),i=r[0],l=r[1],j=function(){var e=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,M.getContactList(t.id);case 3:a=e.sent,l(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.addNewChat(t,a);case 2:c(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),Object(x.jsxs)("div",{className:"newChat",style:{left:a?0:-415},children:[Object(x.jsxs)("div",{className:"newChat--head",children:[Object(x.jsx)("button",{type:"button",className:"newChat--backbutton",onClick:function(){return c(!1)},children:Object(x.jsx)(G.a,{})}),Object(x.jsx)("div",{className:"newChat-headtitle",children:"Nova Conversa"})]}),Object(x.jsx)("div",{className:"newChat--list",children:i.map((function(e){return Object(x.jsxs)("button",{type:"button",onClick:function(){return h(e)},className:"newChat--item",children:[Object(x.jsx)("img",{className:"newChat--itemavatar",src:e.avatar,alt:e.name}),Object(x.jsx)("div",{className:"newChat--itemname",children:e.name})]},e.id)}))})]})},K=(a(53),function(e){var t=e.onReceive,a=function(){var e=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.fbPopup();case 3:(a=e.sent)?t(a.user):alert("Erro desconhecido ou permiss\xe3o negada, tente novamente."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("".concat(e.t0,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.googlePopup();case 3:(a=e.sent)?t(a.user):alert("Erro desconhecido ou permiss\xe3o negada, tente novamente."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("".concat(e.t0,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"login",children:[Object(x.jsx)("button",{type:"button",onClick:a,children:"Logar com o Facebook"}),Object(x.jsx)("button",{type:"button",onClick:n,children:"Logar com o Google"})]})}),T=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(d.a)(s,2),i=r[0],l=r[1],h=Object(n.useState)(null),p=Object(d.a)(h,2),m=p[0],g=p[1],N=Object(n.useState)(!1),y=Object(d.a)(N,2),k=y[0],C=y[1],_=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t.uid,name:t.displayName,avatar:t.photoURL},e.next=3,M.addUser(a);case 3:g(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return m?M.onChatList(m.id,c):null}),[m]),Object(x.jsx)(x.Fragment,{children:m?Object(x.jsxs)("div",{className:"app-window",children:[Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)(J,{user:m,show:k,setShow:C}),Object(x.jsxs)("header",{children:[Object(x.jsx)("img",{className:"header--avatar",src:m.avatar,alt:"Avatar"}),Object(x.jsxs)("div",{className:"header--buttons",children:[Object(x.jsx)("button",{type:"button",className:"header--btn",children:Object(x.jsx)(j.a,{})}),Object(x.jsx)("button",{type:"button",className:"header--btn",onClick:function(){return C(!0)},children:Object(x.jsx)(b.a,{})}),Object(x.jsx)("button",{type:"button",className:"header--btn",children:Object(x.jsx)(f.a,{})})]})]}),Object(x.jsx)("div",{className:"search",children:Object(x.jsxs)("div",{className:"search--input",children:[Object(x.jsx)(O.a,{}),Object(x.jsx)("input",{type:"search",placeholder:"Procurar ou come\xe7ar uma nova conversa"})]})}),Object(x.jsx)("div",{className:"chatlist",children:a.map((function(e){return Object(x.jsx)(v,{data:e,onClick:function(){return l(e)},active:(null===i||void 0===i?void 0:i.id)===e.id},e.chat_id)}))})]}),Object(x.jsx)("div",{className:"contentarea",children:i?Object(x.jsx)(B,{user:m,data:i}):Object(x.jsx)(w,{})})]}):Object(x.jsx)(K,{onReceive:_})})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.899df651.chunk.js.map