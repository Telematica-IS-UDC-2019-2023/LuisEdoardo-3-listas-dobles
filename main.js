import Producto from "./Js/Productos.js"
import Inventario from "./Js/inventario.js"
import Interfaz from "./Js/interfaz.js"

const Agregar = document.querySelector("#Agregar");
const Borrar = document.querySelector("#Borrar");
const Buscar = document.querySelector("#Buscar");
const ListarP = document.querySelector("#ListarP");
const ListarProductosI = document.querySelector("#ListarProductosI");
const AgregarPrimero = document.querySelector("#AgregarPrimero")
const EliminarPrimero = document.querySelector("#EliminarPrimero")


let producto = document.querySelector("#producto");
let codigo = document.querySelector("#codigo");
let descripcion = document.querySelector("#descripcion");
let cantidad = document.querySelector("#cantidad");
let costo = document.querySelector("#costo");
var listaP = document.querySelector("#listaP");



Agregar.addEventListener('click', () => {
    let producto = new Producto();
})

Borrar.addEventListener('click', () => {
    let producto = new Producto();
})

Buscar.addEventListener('click', () => {
    let producto = new Producto();
})

AgregarPrimero.addEventListener('click', () => {
    let producto = new Producto();
})

EliminarPrimero.addEventListener('click', () => {
    let producto = new Producto();
})

