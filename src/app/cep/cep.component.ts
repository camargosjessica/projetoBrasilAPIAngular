import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../models/city';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  title = 'Brasil-API';
  city: City = {} as City;
  cities: City[] = [];
  estadosMap: Map<string,number> = new Map();

  constructor(private cityService: CityService) {}

  ngOnInit() {
  }

  getCity(form: NgForm) {
    this.cityService.getCityByCep(this.city.cep).subscribe((city) => {
      this.city = city;
      this.cities.push(city);
      this.incrementarMap(city.state);
      this.cleanForm(form);
    });
  }


  // limpa o formulario
  cleanForm(form: NgForm) {
    this.city = {} as City;
    form.resetForm();
  }

  incrementarMap(estado:string) {
    let quantidade = this.estadosMap.has(estado) ? this.estadosMap.get(estado) : 0;
    this.estadosMap.set(estado, quantidade!+1);
  }
}
