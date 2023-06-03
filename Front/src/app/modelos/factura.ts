export class Factura{
    id?: string;
    producto: string;
    cantidad: number;
    valor: number;
    subtotal: number;
    descuento: number;
    total: number;
    fecha: string;

    constructor(producto: string, cantidad: number,  valor: number, subtotal: number, descuento: number, total: number, fecha: string,){
        this.producto = producto;
        this.cantidad = cantidad;
        this.valor = valor;
        this.subtotal = subtotal;
        this.descuento = descuento;
        this.total = total;
        this.fecha = fecha;
    }
}