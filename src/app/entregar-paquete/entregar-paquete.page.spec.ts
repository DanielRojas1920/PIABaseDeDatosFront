import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntregarPaquetePage } from './entregar-paquete.page';

describe('EntregarPaquetePage', () => {
  let component: EntregarPaquetePage;
  let fixture: ComponentFixture<EntregarPaquetePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarPaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
