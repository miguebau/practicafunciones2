function greet() {
    console.log('hello');

}
let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

let logGreeting2 = (miParametro) => miParametro();
logGreeting2(function() {
    console.log('Hello from a funtion created on the fly')
})

let logGreeting3 = (miNombre, miColor) => {
    console.log("hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);

}
logGreeting3("carlos", "azul");





let color = "rojo";
let talla = "M";
let modelo = "Clasico";
console.log("juan tiene una playera talla " + talla + "  de color" + color + "modelo " + modelo);
console.log(`Juan tiene una playera Juan tiene una playera 
talla ${talla}
de color ${color}
modelo ${modelo}`)