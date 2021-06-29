import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { Empresa } from '../models/empresa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {

  title = 'Brasil-API';
  empresa: Empresa = {} as Empresa;
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit() {
  }

  getEmpresa(form: NgForm) {
    this.empresaService.getEmpresaByCnpj(this.empresa.cnpj).subscribe((empresa) => {
      this.empresa = empresa;
      this.empresas.push(empresa);
      this.cleanForm(form);
    });
  }

  
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.empresa = {} as Empresa;
    form.resetForm();
  }

}