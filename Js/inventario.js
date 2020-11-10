export default class Inventario {
    constructor() {
        this.inicio = null;
    }
    agregarProducto(nuevo) {
        if (this.inicio === null) {
            this.inicio = nuevo;
        } else {
            let i = this.inicio;
            while (i.siguiente != null) {
                i = i.siguiente;
            }
            i.siguiente = nuevo;
        }
    }

    borrarProducto(codigo1) {
        let i = this.inicio;
        if (i != null) {
            if (this.inicio.codigo === codigo1) {
                this.inicio = this.inicio.siguiente;
            } else {
                while (i.siguiente.codigo != codigo1) {
                    i = this.siguiente;
                }
                if (i.siguiente.codigo === codigo1) {
                    i.siguiente = i.siguiente.siguiente;
                }
            }
        }
    }

    buscarProducto(codigo2) {
        let i = this.inicio;
        while (i.codigo != codigo2) {
            i = i.siguiente;
        }
        if (i.codigo === codigo2) {
            return i.nombre;
        }
    }

    listarProductos() {
        let list = "";
        let i = this.inicio;
        while (i != null) {
            list += i.nombre + ", ";
            i = i.siguiente;
        }
        return list;

    }

    listarProductosInvertidos() {
        let i = this.inicio;
        let x = 1;
        while (i.siguiente != null) {
            i = i.siguiente;
            x++;
        }
        let list = "" + i.nombre;
        x = x - 1;
        while (x > 0) {
            let y = 1;
            i = this.inicio;
            while (y < x) {
                i = i.siguiente;
                y++;
            }
            list += ", " + i.nombre;
            x--;
        }
        return list;
    }

    agregarPrimero(nuevo) {
        if (this.inicio === null) {
            this.inicio = nuevo;
        } else {
            let i = this.inicio;
            this.inicio = nuevo;
            nuevo.siguiente = i;
        }
    }

    eliminarPrimero() {
        if(this.inicio != null){
        this.inicio = this.inicio.siguiente;
    }
}

    agregarPosicion(nuevo, posicion) {
        let i = this.inicio;
        if(posicion === 1){
            this.agregarPrimero(nuevo);
        } else{
            let x = 1;
            while((x + 1)){
                if(i.siguiente != null){
                    i = i.siguiente;
                    x++;
                }else{
                    alert('´Posicion Invalida');
                }
            }
            if((x + 1) === posicion){
                nuevo.siguiente = i.siguiente;
                i.siguiente = nuevo;
            }
        }
    }
}