import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClientesComponent } from './consultar-clientes.component';

describe('ConsultarClientesComponent', () => {
  let component: ConsultarClientesComponent;
  let fixture: ComponentFixture<ConsultarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
