import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Factura } from 'src/app/modelos/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent  implements OnInit {

  facturas: Factura[] = [];
  factura_auxiliar: any = [];
  num: number = 34;
  Nombres: any = [];

  constructor(private fService: FacturaService, private alertController: AlertController, private ruta: Router, private pService: ProductoService) { }

  ngOnInit() {
    this.Facturas();
  }

  Facturas(){
    this.fService.Ver_Factura().subscribe(factura=>{
      this.facturas = factura;
    })
  }

  elimiar(id: any){
    this.fService.Eliminar_Factura(id).subscribe(async factura=>{
      const alert = await this.alertController.create({
        header: 'Alert',
        message: '¡Factura Eliminada!',
        buttons: ['OK'],
      });
  
      await alert.present();
    })
  }

  Productos(){
    this.pService.Mostrar_Producto().subscribe(data=>{
      this.Nombres = data;
    })
  }

  async editar(id: any){
    const alert = await this.alertController.create({
      header: 'Selecciona una ff',
      inputs: [
        {
          name: 'Cantidad',
          type: 'number',
          placeholder: 'Digite la Cantidad'
        },
        {
          name: 'Descuento',
          type: 'number',
          placeholder: 'Digite el Descuento'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log('Opción seleccionada:', data);
            this.fService.Ver_Una_Factura(id).subscribe(dato=>{
              this.factura_auxiliar = dato;
              this.factura_auxiliar.cantidad = parseInt(data.Cantidad);
              this.factura_auxiliar.descuento = parseInt(data.Descuento);
              this.factura_auxiliar.subtotal = this.factura_auxiliar.valor * data.Cantidad;
              this.factura_auxiliar.total = this.factura_auxiliar.subtotal - (this.factura_auxiliar.subtotal * (data.Descuento/100));
              
              this.fService.Editar_Factura(id, this.factura_auxiliar).subscribe(async date=>{
                const alert = await this.alertController.create({
                  header: 'Confirmación',
                  message: '¡Factura Editada!',
                  buttons: ['OK'],
                });
            
                await alert.present();
              }) 
            })
            // Aquí puedes realizar cualquier acción con la opción seleccionada
          }
        }
      ]
    });

    await alert.present();
  }
}
