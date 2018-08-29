function toggleArticle(evt) {
	evt.preventDefault();
	
	let el = document.querySelector('.show');
	if(el) el.classList.toggle('show');

	let id = evt.currentTarget.getAttribute('href').substring(1);
	document.getElementById(id).classList.toggle('show');
}

document.querySelectorAll('#about > ul > li > a')
	.forEach(link => link.addEventListener('click', toggleArticle, false));
	
function showPhoto(evt) {
	evt.preventDefault();
	
	let str = evt.currentTarget.style.getPropertyValue('background-image');
	document.getElementById('bigpict').setAttribute('src', str.substring(5, str.length-2));
	document.getElementById('exampleModalLabel').innerHTML = evt.currentTarget.querySelector('b').innerHTML;

}

document.querySelectorAll('#photo div.portfolio > a')
	.forEach(link => link.addEventListener('click', showPhoto, false));
	
	
function toggleMenu(evt) {
	document.getElementById('toggleMenu').checked=false;
}

document.querySelectorAll('#menu a')
	.forEach(link => link.addEventListener('click', toggleMenu, false));



