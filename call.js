//call and play
//hacemos una función de la cantidad de veces que saludamos a  persona

function saludar(veces){
	for (let i= 0 , i<veces; i++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
 }
}
saluda(3)
// no sale porque falta el windonw.nombre, el this lo busca 
// fuera del objeto 

/*2.- creamos un objeto que sea this cuando invoquemos a esa función*/
// no se puede asignar algo al this
const sacha ={
	nombre: 'Susana',
	apellido: 'Arce'
}

function saludar(veces){
	for (let i= 0 , i<veces; i++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
 }
}
saludar.call (susana, 3)
//una manera de la función saludar pasandole el contexto y los parámetros.