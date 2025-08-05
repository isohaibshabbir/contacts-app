console.log('form Js connected');



const button = document.getElementById("addButton");
const nameInput = document.getElementById("name");

button.addEventListener("click", addContact);

function addContact(e) {
    console.log(nameInput.value);
    const name = nameInput.value;
    const contactsListJson = localStorage.getItem("myContacts") || '[]';
    console.log(contactsListJson);
    console.log(contactsListJson);
    const contactListJs = JSON.parse(contactsListJson);
    console.log(contactListJs);
    const newContact = { name: name, number: '123456789', initials: 'AB' }
    contactListJs.push(newContact);
    localStorage.setItem("myContacts", JSON.stringify(contactListJs));

}