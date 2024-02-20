/* menu btn js */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
};

/* ======= Active Navbar links on scroll ========= */
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			//active navbar links
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});

			// active sections for animation on scroll
		}
		// if want to use animation that repeats on scroll use this
	});

	// remove toggle icon and navbar when navbar links are clicked (scroll)
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
};
