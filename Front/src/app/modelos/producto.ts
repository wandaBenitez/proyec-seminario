export class Producto{
    id?: string;
    valor: number;
    descripcion: string;
    categoria: string; 
    talla: string;

    constructor(valor: number, descripcion: string, categoria: string, talla: string){
        this.valor = valor;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.talla = talla;
    }
}