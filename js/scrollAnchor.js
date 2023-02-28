const menuItems = document.querySelectorAll('header nav a');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(){
	event.preventDefault();
	const element = event.target;
	const id = element.getAttribute("href");
	const div = document.querySelector(id).offsetTop;

	window.scroll({
		top: div,
		behavior: "smooth",
	});
}







