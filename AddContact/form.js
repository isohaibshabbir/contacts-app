console.log('form Js connected');

const contactsListJson = localStorage.getItem("myContacts") || '[]';
console.log(contactsListJson);
const contactListJs = JSON.parse(contactsListJson);
console.log(contactListJs);
const newContact ={name:'Bakar', number:'123456789', initials:'AB'}
contactListJs.push(newContact);
localStorage.setItem("myContacts",JSON.stringify(contactListJs));