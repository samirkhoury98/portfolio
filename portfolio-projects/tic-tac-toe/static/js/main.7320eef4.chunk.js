(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),s=n.n(i),o=(n(15),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),d=(n(16),n(9));var m=function(e){return r.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)},v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component),w=n(8),f=n.n(w);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(d.a)(t[n],3),r=a[0],i=a[1],s=a[2];if(e[r]&&e[r]===e[i]&&e[r]===e[s])return e[r]}return null}var b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleResize=function(){return e.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth})},e.state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0,windowHeight:void 0,windowWidth:void 0},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"jumpTo",value:function(e){0===e?this.setState({history:[{squares:Array(9).fill(null)}],stepNumber:e,xIsNext:!(e%2)}):this.setState({stepNumber:e,xIsNext:!(e%2)})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();p(n)||n[e]||(n[e]=this.state.xIsNext?"\u274c":"\u2b55\ufe0f",this.setState({history:t.concat([{squares:n}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],i=p(a.squares);e=i?"Winner: "+i:"Next player: "+(this.state.xIsNext?"\u274c":"\u2b55\ufe0f");var s=n.map(function(e,n){console.log(n);var a=n%2?"Player One Move":"Player Two Move",i=n?"".concat(n," - ").concat(a):"Game start";return r.a.createElement("li",{key:n},r.a.createElement("a",{href:"#",onClick:function(){return t.jumpTo(n)}},i," ",n," "))});return r.a.createElement("div",{className:"game"},i&&r.a.createElement(f.a,{width:this.state.windowWidth,height:this.state.windowHeight,numberOfPieces:"1110"}),r.a.createElement("div",{className:"game-board"},r.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("h2",null," MOVES: "),r.a.createElement("ol",null,s)))}}]),t}(r.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Let's Play Tic Tac Toe!")),r.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.7320eef4.chunk.js.map