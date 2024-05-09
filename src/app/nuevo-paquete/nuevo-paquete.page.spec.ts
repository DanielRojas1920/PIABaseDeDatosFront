import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPaquetePage } from './nuevo-paquete.page';

describe('NuevoPaquetePage', () => {
  let component: NuevoPaquetePage;
  let fixture: ComponentFixture<NuevoPaquetePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
