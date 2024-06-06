import { Component } from '@angular/core';
import { Carro } from '../../domain/carro';
import { CarroService } from '../../services/carro.service';
import {NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lista-carro',
  templateUrl: './lista-carro.component.html',
  styleUrl: './lista-carro.component.css'
})
export class ListaCarroComponent {

  Carro: Carro = new Carro();
  listadoCarrosWS:any;

  constructor(private carroService: CarroService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Carro = new Carro();
      this.Carro = params['carro']
    }
  
}

ngOnInit(): void {
  this.listadoCarrosWS = this.carroService.getAll();
 }

 eliminar(Carro: Carro){
  this.carroService.delete(Carro).subscribe(data => {
    console.log("resultado WS save", data);
    });
this.reloadPage();

  }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(Carro: Carro){
  console.log(Carro)
  let params: NavigationExtras = {
    queryParams: {
      Carro: Carro,
    }
  }
  this.router.navigate(['pagina/actualizarCarro'], params)
}
}
