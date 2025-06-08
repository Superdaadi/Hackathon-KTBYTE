import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CO2Component } from './co2.component';

describe('CO2Component', () => {
  let component: CO2Component;
  let fixture: ComponentFixture<CO2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CO2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
