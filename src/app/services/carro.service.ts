import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carro } from '../domain/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private apiUrl = 'http://localhost:8080/demo64DockC/rs/carros'; 

  constructor(private http: HttpClient) { }

  save(carro: Carro) {
    return this.http.post<any>("http://localhost:8080/demo64DockC/rs/carros", carro)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/demo64DockC/rs/carros/list");
   }

   delete(carro: Carro) {
    const url = `http://localhost:8080/demo64DockC/rs/carros?placa=${carro.placa}`;
    return this.http.delete(url);
}

  update(Carro: Carro) {
    const url = 'http://localhost:8080/demo64DockC/rs/carros';
    return this.http.put(url, Carro);
  }
}