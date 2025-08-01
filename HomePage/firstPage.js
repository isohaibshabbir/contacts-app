console.log('connected');

localStorage.setItem("myCat", "Tom");

const items = ['Eat',  'Code','Sleep', 'Repeat'];

const parentItem = document.getElementById('list1');

console.log(parentItem);

items.forEach((item)=>{
	const newLi = document.createElement('li');
	newLi.textContent = item;
	parentItem.appendChild(newLi);
})

const contactList = JSON.parse(localStorage.getItem("myContacts"));


const contactParentItem = document.getElementById('contactList');
contactList.forEach((item)=>{
	const newDiv = document.createElement('div');
	newDiv.classList.toggle('contact-card');
	newDiv.textContent = item.name;
	contactParentItem.appendChild(newDiv);
})

// console.log(JSON.stringify(contactList));

// localStorage.setItem("myContacts", JSON.stringify(contactList));
