(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{37:function(n,t,e){},61:function(n,t,e){"use strict";e.r(t);var o,r,c,i,a,s,u,b,d=e(0),j=e.n(d),l=e(26),p=e.n(l),m=e(6),O=(e(37),e(5)),h=e(2),x=h.b.button(o||(o=Object(O.a)(["\n    border: 1px solid #616A94;\n    border-radius: 50px;\n    padding: 15px 30px;\n    text-decoration: none;\n    color: #616A94;\n    background-color: #161A31;\n    transition: 0.3s;\n    font-size: 1em;\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n        color: white;\n        background-color: #616A94;\n    }\n"]))),f=x,g=e(1),v=h.b.div.withConfig({displayName:"Start__Intro",componentId:"sc-1emqe5i-0"})(["display:flex;flex-direction:column;align-items:center;margin:10em auto;width:fit-content;"]),w=Object(h.a)(r||(r=Object(O.a)(["\n    margin-top: 2em;\n"]))),y=Object(h.b)(f).withConfig({displayName:"Start___StyledButton",componentId:"sc-1emqe5i-1"})(["",""],w),_=function(n){var t=n.props;return Object(g.jsxs)(v,{children:[Object(g.jsx)("h1",{children:"Take the quiz."}),Object(g.jsx)("h4",{children:"Whenever, you want."}),Object(g.jsx)(y,{onClick:function(){return t(!0)},children:"Begin"})]})},k=e(32),S=e(30),q=e.n(S),z=h.b.h1(c||(c=Object(O.a)(["\n    margin-top: 4em;\n    font-size: 48px;\n"]))),A=h.b.p(i||(i=Object(O.a)(["\n    font-size: 24px;\n    margin-bottom: 3em;\n"]))),C=function(n){var t=n.pts;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(z,{children:"Game Over"}),Object(g.jsxs)(A,{children:["You did ",t," out of 5!"]}),Object(g.jsx)(x,{onClick:function(){return window.location.reload()},children:"Retry"})]})},I=h.b.div(a||(a=Object(O.a)(["\n    text-align: center;\n    margin: 5em auto;\n    font-size: clamp(20px, 2.5vw, 24px);\n"]))),F=h.b.div(s||(s=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: 2em auto;\n"]))),T=h.b.button(u||(u=Object(O.a)(["\n    display: block;\n    border: 1px solid #616A94;\n    border-radius: 50px;\n    padding: 15px 30px;\n    text-decoration: none;\n    color: #616A94;\n    background-color: #161A31;\n    transition: 0.3s;\n    font-size: 1em;\n    cursor: pointer;\n    outline: none;\n    margin-top: 1em;\n\n    &:hover {\n        color: white;\n        background-color: #616A94;\n    }\n"]))),B=h.b.div(b||(b=Object(O.a)(["\n    width: 70%;\n    margin: 0 auto;\n"]))),L=function(){var n=Object(d.useState)([]),t=Object(m.a)(n,2),e=t[0],o=t[1],r=Object(d.useState)(0),c=Object(m.a)(r,2),i=c[0],a=c[1],s=Object(d.useState)(0),u=Object(m.a)(s,2),b=u[0],j=u[1],l=function(n){var t=n.target.outerText;e[i].answer===t&&j(b+1),a(i+1)};return Object(d.useEffect)((function(){q.a.get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple").then((function(n){o(n.data.results.map((function(n){return{question:n.question,options:(t=[].concat(Object(k.a)(n.incorrect_answers),[n.correct_answer]),t.sort((function(){return Math.random()-.5}))),answer:n.correct_answer};var t})))})).catch((function(n){return console.error(n)}))}),[]),Object(g.jsxs)(I,{children:[e[i]&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B,{dangerouslySetInnerHTML:{__html:e[i].question}}),Object(g.jsx)(F,{children:e[i].options.map((function(n,t){return Object(g.jsx)(T,{onClick:l,dangerouslySetInnerHTML:{__html:n}},t)}))})]}),5===i&&Object(g.jsx)(C,{pts:b})]})};var M=function(){var n=Object(d.useState)(!1),t=Object(m.a)(n,2),e=t[0],o=t[1];return Object(g.jsx)("div",{className:"quiz",children:e?Object(g.jsx)(L,{}):Object(g.jsx)(_,{props:o})})},N=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,62)).then((function(t){var e=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),o(n),r(n),c(n),i(n)}))},E=e(31);p.a.render(Object(g.jsx)(j.a.StrictMode,{children:Object(g.jsx)(E.a,{children:Object(g.jsx)(M,{})})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.5818c070.chunk.js.map