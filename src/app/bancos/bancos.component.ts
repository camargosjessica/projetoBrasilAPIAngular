import { Component, OnInit } from '@angular/core';
import { BancoService } from '../services/banco.service';
import { Banco } from '../models/banco';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {

  title = 'Brasil-API';
  banco: Banco = {} as Banco;
  bancos: Banco[] = [];

  constructor(private bancoService: BancoService) {}

  ngOnInit() {
  }

  getBanco(form: NgForm) {
    this.bancoService.getBancoByCode(this.banco.code).subscribe((banco) => {
      this.banco = banco;
      this.bancos.push(banco);
      this.cleanForm(form);
    });
  }

  
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.banco = {} as Banco;
    form.resetForm();
  }

}
