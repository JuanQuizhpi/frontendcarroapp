import { Component } from '@angular/core';
import { Carro } from '../../domain/carro';
import { CarroService } from '../../services/carro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-carro',
  templateUrl: './crear-carro.component.html',
  styleUrl: './crear-carro.component.css'
})
export class CrearCarroComponent {

  carro: Carro = new Carro();

  constructor(private carroService: CarroService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.carro = new Carro()
        this.carro = params['carro']
      }
    }
    guardar(){
      this.carroService.save(this.carro).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.carro = new Carro()
      alert("Carro creado exitosamente")
    }
      
}
