//pasa en dos estados
class  Toggable {
 constructor(el) {
 	//inicializar el estado interno
 	this.el = el
 	this.el.innerHTML = 'Off'
 	this.activated = false
 	this.el.addEventListener('click', this.onClick.bind(this))

 	//al this.onClick resulta ser un callbabck
 } 
 onClick(ev){
 	this.activated = !this.activated
 	this.toggleText()
 	//llamar a estado interno
 	//llamar a toggleText
 }
 toggleText(){
 // cambiar el texto
//cambiar a estado externo
	this.el.innerHTML= this.activated? 'On': 'Of' 
 }
}
const button = document.getElementById('boton')
//agrego un nuevo objeto  y le paso las caractetísticas de Toggable
const miBoton = new Toggable(button)
