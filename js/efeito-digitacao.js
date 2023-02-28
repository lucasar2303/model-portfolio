
function typeWrite(elemento){

	setTimeout(function(){

		const display = document.querySelector('.h2-efeito');
		console.log(display);
		display.classList.add("active");

		const textoArray = elemento.innerHTML.split('');
		elemento.innerHTML= '';

		textoArray.forEach((letra, i) => {
			setTimeout(function() {
				elemento.innerHTML += letra
			}, 80 * i)
		})

},3400)
}

const titulo = document.querySelector('.h2-efeito');

typeWrite(titulo);





const carregando = document.querySelector('.carregando');
console.log(carregando)

function carregandoFunction(h2){

setTimeout(function(){
	carregando.classList.remove(".carregando");
	carregando.classList.add("carregado");

}, 3000)

}

carregandoFunction(carregando);








