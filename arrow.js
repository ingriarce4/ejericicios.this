class Persona {
	constructor (nombre, amigos =[]){
		this.nombre = nombre
		this.amigos= amigos

 }
 //metodo
 listaAmigos(){
 	const _this = this
 	this.amigos.forEach(function (amigo){
 		console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo ${amigo}`)
 	})
 }
}
const susana = new Persona ("Susana", ["Luis", "María"])


//otras formas de solucionarlo

class Persona {
	constructor (nombre, amigos =[]){
		this.nombre = nombre
		this.amigos= amigos

 }
 //metodo bind  que sirve para definir el contexto de esa función
 listaAmigos(){
 	this.amigos.forEach(function (amigo){
 		console.log(`Hola, mi nombre es ${this.nombre} y soy amigo ${amigo}`)
 	}.bind(this))
 }
}
const susana = new Persona ("Susana", ["Luis", "María"])

// tercera manera
class Persona {
	constructor (nombre, amigos =[]){
		this.nombre = nombre
		this.amigos= amigos

 }
 //se le agrega => this toma el valor fuera del contexto
 listaAmigos(){
 	this.amigos.forEach((amigo) => {
 		console.log(`Hola, mi nombre es ${this.nombre} y soy amigo ${amigo}`)
 	})
 }
}
const susana = new Persona ("Susana", ["Luis", "María"])
