import { Component, OnInit } from '@angular/core';
import { CityService } from './services/city.service';
import { City } from './models/city';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Brasil-API';
  city: City = {} as City;
  cities: City[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
  }

  getCity(form: NgForm) {
    this.cityService.getCityByCep(this.city.cep).subscribe((city) => {
      this.city = city;
      this.cities.push(city);
      this.cleanForm(form);
    });
  }

  
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.city = {} as City;
    form.resetForm();
  }
}
