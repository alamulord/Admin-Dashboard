// add hovered class to selected list item

let list = document.querySelectorAll('.navigator li');

function activeLink() {
	list.forEach((items) => {
		items.classList.remove('hovered');
	});
	this.classList.add('hovered');
}

list.forEach((items) => items.addEventListener('mouseover', activeLink));

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigator');
let main = document.querySelector('.main');

toggle.onclick = function () {
	navigation.classList.toggle('active');
	main.classList.toggle('active');
};
