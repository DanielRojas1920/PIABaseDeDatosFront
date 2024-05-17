import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelarPaquetePage } from './cancelar-paquete.page';

describe('CancelarPaquetePage', () => {
  let component: CancelarPaquetePage;
  let fixture: ComponentFixture<CancelarPaquetePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarPaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
