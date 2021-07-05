import { TestBed } from '@angular/core/testing';
import { Area } from '../models/area';

import { AreaService } from './area.service';

describe('AreaService', () => {
  let service: AreaService;
  let expectedArea: Area;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaService);
    expectedArea = {"state":"DF","cities":["BRASÍLIA","VILA BOA","VALPARAÍSO DE GOIÁS","SANTO ANTÔNIO DO DESCOBERTO","PLANALTINA","PADRE BERNARDO","NOVO GAMA","LUZIÂNIA","FORMOSA","CRISTALINA","CIDADE OCIDENTAL","CABECEIRAS","ÁGUAS LINDAS DE GOIÁS"]};
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAreaByDdd(61) should return state DF',
    (done: DoneFn) => {
    service.getAreaByDdd(61).subscribe(value => {
      expect(value).toBe(expectedArea);
      done();
    });
  });
});
