(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),o=n(2),i=n(3),h=n(5),l=n(4),b=n(0),j=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"Robot",src:"https://robohash.org/".concat(r,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},[n])}))})},u=(n(13),function(e){e.searchField;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})}),O=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"100vh"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Oops, something went wrong..."})}):this.props.children}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"RoboFriends"}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{children:Object(b.jsx)(d,{robots:t})})})]})}}]),n}(r.Component);n(14),n(15);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a9fbf515.chunk.js.map