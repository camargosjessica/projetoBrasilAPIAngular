import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent implements OnInit{
  @Input() values:Map<string,number> = new Map();

  doughnutChartLabels: Label[] = ['Sul', 'Sudeste', 'Centro-Oeste', 'Norte', 'Nordeste'];
  doughnutChartData: MultiDataSet = [
    [13, 20, 7, 9, 17]
  ];
  doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {

  }

}
