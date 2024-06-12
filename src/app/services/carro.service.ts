import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carro } from '../domain/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private apiUrl = 'http://35.229.110.18:8080/carrobe/rs/carros'; 

  constructor(private http: HttpClient) { }

  save(carro: Carro) {
    return this.http.post<any>("http://35.229.110.18:8080/carrobe/rs/carros", carro)
  }

  getAll(){
    return this.http.get<any>("http://35.229.110.18:8080/carrobe/rs/carros/list");
   }

   delete(carro: Carro) {
    const url = `http://35.229.110.18:8080/carrobe/rs/carros?placa=${carro.placa}`;
    return this.http.delete(url);
}

  update(Carro: Carro) {
    const url = 'http://35.229.110.18:8080/carrobe/rs/carros';
    return this.http.put(url, Carro);
  }
}