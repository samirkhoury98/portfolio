(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(14),a(1)),u=a(2),o=a(4),l=a(3),m=a(5),h=(a(15),a(16),a(8));var d=function(e){return r.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)},v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(h.a)(t[a],3),r=n[0],s=n[1],i=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return e[r]}return null}var f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:!(e%2)})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();p(a)||a[e]||(a[e]=this.state.xIsNext?"\u274c":"\u2b55\ufe0f",this.setState({history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],s=p(n.squares);e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"\u274c":"\u2b55\ufe0f");var i=a.map(function(e,a){var n=a?"Move #"+a:"Game start";return r.a.createElement("li",{key:a},r.a.createElement("a",{href:"#",onClick:function(){return t.jumpTo(a)}},n))});return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(v,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,i)))}}]),t}(r.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h2",null,"Let's Play Tic Tac Toe!")),r.a.createElement("p",{className:"App-intro"},r.a.createElement(f,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.ec2a4643.chunk.js.map