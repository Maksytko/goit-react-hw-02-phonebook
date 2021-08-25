(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={label:"ContactForm_label__3KYGH",input:"ContactForm_input__ds3Uc"}},,,,,,,function(t,e,n){t.exports={item:"Contact_item__3BNwa"}},function(t,e,n){t.exports={list:"ContactList_list__3Ru5G"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(16),n(11)),o=n(3),u=n(4),l=n(6),d=n(5),m=(n(17),n(21)),b=n(2),h=n.n(b),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleFormSubmit=function(t){t.preventDefault();var e=a.state.name,n=a.state.number;a.setState({name:"",number:""}),a.addToContactList(e,n)},a.handleInputChange=function(t){"name"!==t.currentTarget.name?a.setState({number:t.currentTarget.value}):a.setState({name:t.currentTarget.value})},a.state={name:"",number:""},a.addToContactList=t.addToContactList,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(j.jsxs)("label",{className:h.a.label,children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("input",{className:h.a.input,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]}),Object(j.jsxs)("label",{className:h.a.label,children:[Object(j.jsx)("span",{children:"Number"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);var f=function(t){var e=t.onChangeFilterInput;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",onChange:e})]})},C=n(9),O=n.n(C);var x=function(t){var e=t.contact,n=t.deleteContactFromList;return Object(j.jsxs)("li",{className:O.a.item,children:[e.name,": ",e.number," ",Object(j.jsx)("button",{type:"button",id:e.id,onClick:n,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},g=n(10),v=n.n(g);var F=function(t){var e=t.contacts,n=t.deleteContactFromList;return Object(j.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(j.jsx)(x,{contact:t,deleteContactFromList:n},t.id)}))})},L=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addToContactList=function(e,n){return t.state.contacts.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts!")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{id:Object(m.a)(),name:e,number:n}])}}))},t.handleInputFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.filterContactsByName=function(){return t.state.contacts.filter((function(e){return e.name.toUpperCase().includes(t.state.filter.toUpperCase())}))},t.deleteContactFromList=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{contacts:this.state.contacts,addToContactList:this.addToContactList}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(f,{onChangeFilterInput:this.handleInputFilterChange}),Object(j.jsx)(F,{contacts:this.filterContactsByName(),deleteContactFromList:this.deleteContactFromList})]})}}]),n}(a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),y()}],[[19,1,2]]]);
//# sourceMappingURL=main.12f1e4a0.chunk.js.map