(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(3),r=n.n(s),o=n(4),c=n(5),a=n(7),u=n(6),i=n(1),p=n.n(i),l=(n(12),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={goodsCopy:[].concat(b),showList:!1,reverse:0,sortBy:"none"},t.startShowList=function(){t.setState({showList:!0})},t.reverseList=function(){t.setState((function(t){return{reverse:t.reverse+1}}))},t.sortByA_Z=function(){t.setState({sortBy:"a-z"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({sortBy:"none",reverse:0,goodsCopy:[].concat(b)})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goodsCopy,s=e.showList,r=e.reverse,o=e.sortBy;return n.sort((function(t,e){switch(o){case"a-z":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),r%2!==0&&n.reverse(),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Goods"}),Object(l.jsx)("button",{type:"button",className:r%2===0?"App__button":"App__button App__button--pressed",onClick:function(){return t.reverseList()},children:"Reverse"}),Object(l.jsx)("button",{type:"button",className:"a-z"!==this.state.sortBy?"App__button":"App__button App__button--pressed",onClick:function(){return t.sortByA_Z()},children:"Sort A-Z"}),Object(l.jsx)("button",{type:"button",className:"length"!==this.state.sortBy?"App__button":"App__button App__button--pressed",onClick:function(){return t.sortByLength()},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"App__button",onClick:function(){return t.reset()},children:"Reset"}),s?Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)("li",{children:t},t)}))}):Object(l.jsx)("button",{type:"button",className:"App__button",onClick:function(){return t.startShowList()},children:"Start"})]})})}}]),n}(p.a.Component),d=h;r.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c55a7ab2.chunk.js.map