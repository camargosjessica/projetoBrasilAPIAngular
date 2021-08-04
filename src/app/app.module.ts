import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CepComponent } from './cep/cep.component';
import { CnpjComponent } from './cnpj/cnpj.component';
import { DddComponent } from './ddd/ddd.component';
import { BancosComponent } from './bancos/bancos.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    CnpjComponent,
    DddComponent,
    BancosComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  exports: [ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
