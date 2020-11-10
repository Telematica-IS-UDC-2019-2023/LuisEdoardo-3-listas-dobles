import Producto from "./Js/Productos.js"
import Inventario from "./Js/inventario.js"

const Agregar = document.querySelector("#Agregar");
const Borrar = document.querySelector("#Borrar");
const Buscar = document.querySelector("#Buscar");
const ListarP = document.querySelector("#ListarP");
const ListarProductosI = document.querySelector("#ListarProductosI");
const AgregarPrimero = document.querySelector("#AgregarPrimero")
const EliminarPrimero = document.querySelector("#EliminarPrimero")
const insertarPosicion = document.querySelector("#insertarPosicion")
var insertar = document.querySelector("#insertar");

var estado = document.querySelector("#estado")


let nProducto = document.querySelector("#producto");
let pCodigo = document.querySelector("#codigo");
let pDescripcion = document.querySelector("#descripcion");
let pCantidad = document.querySelector("#cantidad");
let pCosto = document.querySelector("#costo");

var inventario = new Inventario;

Agregar.addEventListener('click', () => {
    let producto = new Producto(pCodigo.value, nProducto.value, pDescripcion.value, Number(pCantidad.value), Number(pCosto.value));
    inventario.agregarProducto(producto);
    estado.innerHTML = "Producto Agregado: " + nProducto.value

    console.log(inventario);
})

Borrar.addEventListener('click', () => {
    let codigo = pCodigo.value;
    inventario.borrarProducto(codigo);

    console.log(inventario);
})

Buscar.addEventListener('click', () => {
    let codigo = pCodigo.value;
    console.log(inventario.buscarProducto(codigo));
})

AgregarPrimero.addEventListener('click', () => {
    let producto = new Producto(pCodigo.value, nProducto.value, pDescripcion.value, Number(pCantidad.value), Number(pCosto.value));
    inventario.agregarPrimero(producto);

    console.log(inventario);
})

EliminarPrimero.addEventListener('click', () => {
    inventario.eliminarPrimero();

    console.log(inventario);
})

ListarP.addEventListener('click', () => {
    console.log(inventario.listarProductos());
})

ListarProductosI.addEventListener('click', () => {
    console.log(inventario.listarProductosInvertidos());
})

insertarPosicion.addEventListener('click', () => {
    let producto = new Producto(pCodigo.value, nProducto.value, pDescripcion.value, Number(pCosto.value), Number(pCantidad.value));
    inventario.agregarProducto(producto, Number(insertar.value));
    console.log(inventario)
});