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
var eNombre = document.querySelector("#eNombre")
var eDescripcion = document.querySelector("#eDescripcion")
var eCosto = document.querySelector("#eCosto")
var eCantidad = document.querySelector("#eCantidad")
var eStock = document.querySelector("#eStock")
var eLista = document.querySelector("#eLista")
var eCodigo = document.querySelector("#eCodigo")


let nProducto = document.querySelector("#producto");
let pCodigo = document.querySelector("#codigo");
let pDescripcion = document.querySelector("#descripcion");
let pCantidad = document.querySelector("#cantidad");
let pCosto = document.querySelector("#costo");

var inventario = new Inventario;
var mStock = 0;

Agregar.addEventListener('click', () => {
    let producto = new Producto(pCodigo.value, nProducto.value, pDescripcion.value, Number(pCantidad.value), Number(pCosto.value));
    mStock += producto.cantidad * producto.costo
    eStock.innerHTML = 'Valor stock: ' + '$' + mStock;
    inventario.agregarProducto(producto);
    estado.innerHTML = "Producto Agregado: " + nProducto.value;
    console.log(inventario);
})

Borrar.addEventListener('click', () => {
    let codigo = pCodigo.value;
    let producto = inventario.buscarProducto(codigo);
    mStock -= producto.costo * producto.cantidad;
    eStock.innerHTML = 'Valor stock' + '$' + mStock;
    estado.innerHTML = "Producto borrado: " + inventario.buscarProducto(codigo).nombre
    inventario.borrarProducto(codigo);
    console.log(inventario);
})

Buscar.addEventListener('click', () => {
    let codigo = pCodigo.value;
    //console.log(inventario.buscarProducto(codigo));
    let producto = inventario.buscarProducto(codigo);
    if(producto != false){
        estado.innerHTML = 'Producto buscado: ' + producto.nombre;
    eNombre.innerHTML = 'Nombre: ' + producto.nombre;
    eCodigo.innerHTML = 'Codigo: ' + producto.codigo;
    eDescripcion.innerHTML = 'Descripcion: ' + producto.descripcion;
    eCantidad.innerHTML = 'Cantidad: ' + producto.cantidad;
    eCosto.innerHTML = 'Costo: ' + producto.costo;
    }else{
        alert('No se encontro el producto')
    }
})

AgregarPrimero.addEventListener('click', () => {
    let producto = new Producto(pCodigo.value, nProducto.value, pDescripcion.value, Number(pCantidad.value), Number(pCosto.value));
    mStock += producto.costo * producto.cantidad;
    eStock.innerHTML = 'Valor stock: ' + '$' + mStock;
    estado.innerHTML = 'Agregado al primero: ' + producto.nombre
    inventario.agregarPrimero(producto);
    console.log(inventario);
})

EliminarPrimero.addEventListener('click', () => {
    estado.innerHTML = 'Eliminar primero: ' + inventario.inicio.nombre;
    mStock -= inventario.inicio.costo + inventario.inicio.cantidad;
    eStock.innerHTML = 'Valor stock' + '$' + mStock;
    inventario.eliminarPrimero();
    console.log(inventario);
})

ListarP.addEventListener('click', () => {
    console.log(inventario.listarProductos());
    eLista.innerHTML = 'Productos: ' + inventario.listarProductos()
})

ListarProductosI.addEventListener('click', () => {
    console.log(inventario.listarProductosInvertidos());
    eLista.innerHTML = 'Productos: ' + inventario.listarProductosInvertidos()
})

insertarPosicion.addEventListener('click', () => {
    let producto = new Producto(pCodigo.value, nProducto.value, pDescripcion.value, Number(pCosto.value), Number(pCantidad.value));
    inventario.agregarProducto(producto, Number(insertar.value));
    console.log(inventario)
    estado.innerHTML = 'Producto : ' + producto.nombre
});