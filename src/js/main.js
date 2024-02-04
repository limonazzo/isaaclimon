import '../scss/styles.scss'

document.addEventListener('click', function (event) {
	if (!event.target.matches('.pdf')) return;
  window.print();
}, false);