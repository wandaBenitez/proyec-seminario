import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/modelos/producto';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-f-registro',
  templateUrl: './f-registro.component.html',
  styleUrls: ['./f-registro.component.scss'],
})
export class FRegistroComponent  implements OnInit {

  productos: Producto[] = [];
  Producto = {
    valor: 0,
    descripcion: "",
    categoria: "",
    talla: ""
  }
  Factura = {
    producto: "",
    cantidad: 0,
    valor: 0,
    subtotal: 0,
    descuento: 0,
    total: 0,
    fecha: ""
  }
  num: number = 0 ;

  constructor(private alertController: AlertController, private pService: ProductoService, private fService: FacturaService) { }

  ngOnInit() {
    this.Productos();
  }

  async registrar(){
    const alert = await this.alertController.create({
      header: 'Registro del Producto',
      inputs: [
        {
          name: 'valor',
          type: 'number',
          placeholder: 'Ingrese Valor'
        },
        {
          name: 'descripcion',
          type: "text",
          placeholder: 'Ingrese Descripción'
        },
        {
          name: 'categoria',
          type: "text",
          placeholder: 'Ingrese Categoria'
        },
        {
          name: 'talla',
          type: "text",
          placeholder: 'Ingrese Talla'
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Aceptar', handler: (data) => {
            this.Producto.valor = parseInt(data.valor);
            this.Producto.descripcion = data.descripcion;
            this.Producto.categoria = data.categoria;
            this.Producto.talla = data.talla;
            
            this.pService.Agregar_Producto(this.Producto).subscribe(dato=>{
              console.log(dato);
              if(dato){
                this.Listo();
              }
            })
            // Aquí puedes realizar cualquier acción con el valor ingresado
          }
        }
      ]
    });

    await alert.present();
  }

  async Listo() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: '¡PRODUCTO REGISTRADO!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  Productos(){
    this.pService.Mostrar_Producto().subscribe(data=>{
      this.productos = data;
    })
  }

  facturar(){
    this.pService.Mostrar_Producto().subscribe(data=>{
      for(var j=0; j<data.length; j++){
        if(this.Factura.producto === data[j].categoria+" => "+data[j].descripcion+"; Talla: "+data[j].talla){
          this.Factura.valor = data[j].valor;
          this.R_Factura(this.Factura.valor);
        }
      }
    })    
  }

  R_Factura(valor: number){
    this.Factura.subtotal = this.Factura.cantidad * valor;
    this.Factura.total = this.Factura.subtotal - (this.Factura.subtotal * (this.Factura.descuento/100));

    this.fService.Agregar_Factura(this.Factura).subscribe(date=>{
      console.log(date);
    })
  }
}
