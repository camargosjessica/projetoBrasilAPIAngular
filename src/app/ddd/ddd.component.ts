import { Component, OnInit } from '@angular/core';
import { AreaService } from '../services/area.service';
import { NgForm } from '@angular/forms';
import { DddArea } from '../models/ddd-area';

@Component({
  selector: 'app-ddd',
  templateUrl: './ddd.component.html',
  styleUrls: ['./ddd.component.css']
})
export class DddComponent implements OnInit {

  title = 'Brasil-API';
  dddArea: DddArea = {} as DddArea;
  dddAreas: DddArea[] = [];

  constructor(private areaService: AreaService) {}

  ngOnInit() {
  }

  getArea(form: NgForm) {
    this.areaService.getAreaByDdd(this.dddArea.ddd).subscribe((area) => {
      this.dddArea.area = area;
      this.dddAreas.push(this.dddArea);
      this.cleanForm(form);
    });

  }

  
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.dddArea = {} as DddArea;
    form.resetForm();
  }

}
