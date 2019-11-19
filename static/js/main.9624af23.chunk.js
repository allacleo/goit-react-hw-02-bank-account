(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{18:function(t,e,a){t.exports=a(36)},2:function(t,e,a){t.exports={dashboard:"Dashboard_dashboard__2ZOP6",controls:"Dashboard_controls__2YD7U",input:"Dashboard_input__n57db",balance:"Dashboard_balance__2ZJON",history:"Dashboard_history__3IM_B",button:"Dashboard_button__2Ym-o"}},36:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(4),o=a.n(c),l=a(13),s=a(7),i=a(8),u=a(10),h=a(9),b=a(11),m=a(12),p=a.n(m),d=a(3),f=(a(31),a(2)),g=a.n(f),E=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={inputValue:""},a.handleChangeInput=function(t){var e=Number(t.target.value);a.setState({inputValue:e})},a.handleDeposit=function(t){t.preventDefault(),a.props.onDeposit(a.state.inputValue),a.reset()},a.handleWithdraw=function(t){t.preventDefault(),a.props.onWithdraw(a.state.inputValue),a.reset()},a.reset=function(){a.setState({inputValue:""})},a}return Object(b.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.inputValue;return r.a.createElement("section",{className:g.a.controls},r.a.createElement("input",{type:"number",className:g.a.input,name:"amount",value:t,onChange:this.handleChangeInput}),r.a.createElement("button",{type:"button",className:g.a.button,onClick:this.handleDeposit},"Deposit"),r.a.createElement("button",{type:"button",className:g.a.button,onClick:this.handleWithdraw},"Withdraw"))}}]),e}(n.Component),y=function(t){var e=t.income,a=t.expenses,n=t.balance;return r.a.createElement("section",{className:g.a.balance},r.a.createElement("span",{role:"img","aria-label":"Up Arrow"},"\u2b06\ufe0f",e,"$"),r.a.createElement("span",{role:"img","aria-label":"Down Arrow"},"\u2b07\ufe0f",a,"$"),r.a.createElement("span",null,"Balance: ",n,"$"))};y.defaultProp={income:0,expenses:0};var v=y,D=function(t){var e=t.items;return r.a.createElement("table",{className:g.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))},w=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(a){console.log(a)}},_=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(a){console.log("err")}};d.b.configure({autoClose:5e3,draggable:!1});var O=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0},a.handleDeposit=function(t){t<=0||""===t?d.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):a.setState((function(e){var a=e.transactions,n=e.balance,r={id:p.a.generate(),type:"Deposit",amount:t,date:(new Date).toLocaleString()};return{transactions:[].concat(Object(l.a)(a),[r]),balance:n+t}}))},a.handleWithdraw=function(t){t<=0||""===t?d.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):a.state.balance<t?d.b.warning("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"):a.setState((function(e){var a=e.transactions,n=e.balance,r={id:p.a.generate(),type:"Withdraw",amount:t,date:(new Date).toLocaleString()};return{transactions:[].concat(Object(l.a)(a),[r]),balance:n-t}}))},a.calculateMoney=function(){return a.state.transactions.reduce((function(t,e){return t[e.type]+=e.amount,t}),{Deposit:0,Withdraw:0})},a}return Object(b.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=_("transactions"),e=_("balance");t&&e&&this.setState({transactions:t,balance:e})}},{key:"componentDidUpdate",value:function(t,e){var a=this.state,n=a.transactions,r=a.balance;e.transactions!==n&&(w("transactions",n),w("balance",r))}},{key:"render",value:function(){var t=this.state,e=t.transactions,a=t.balance,n=this.calculateMoney().Deposit,c=this.calculateMoney().Withdraw;return r.a.createElement("div",{className:g.a.dashboard},r.a.createElement(E,{onDeposit:this.handleDeposit,onWithdraw:this.handleWithdraw}),e.length>0&&r.a.createElement(v,{balance:a,income:n,expenses:c}),e.length>0&&r.a.createElement(D,{items:e}),r.a.createElement(d.a,null))}}]),e}(n.Component),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9624af23.chunk.js.map