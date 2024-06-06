import { Component } from '@angular/core';
import { Carro } from '../../domain/carro';
import { CarroService } from '../../services/carro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-carro',
  templateUrl: './actualizar-carro.component.html',
  styleUrl: './actualizar-carro.component.css'
})
export class ActualizarCarroComponent {
  carro: Carro = new Carro();
  
  constructor(private carroService: CarroService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.carro = new Carro()
        //Tener en cuenta que antes estaba carro cuando Deberia se Carro
        this.carro = params['Carro']
      }

  }

  modificar(){ //fire actualizado
    console.log(this.carro)
    //codigo para guardar en la base de datos
    this.carroService.update(this.carro).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    this.router.navigate(['pagina/listaCarro'])
    
    }
}
