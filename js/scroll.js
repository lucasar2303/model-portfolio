const pSobre = document.querySelectorAll("[data-animation]")
const animationClass = 'animate';

function sobreScroll(){
	const windowTop = window.pageYOffset + ((window.innerHeight *3)/4);
	pSobre.forEach(function(element){

		if (windowTop >= element.offsetTop) {
			element.classList.add(animationClass);
		} else{
			element.classList.remove(animationClass);
		}
	})
}

sobreScroll();

window.addEventListener('scroll', function(){
	sobreScroll();
})


