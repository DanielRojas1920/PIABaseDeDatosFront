import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaEntregaPage } from './nueva-entrega.page';

describe('NuevaEntregaPage', () => {
  let component: NuevaEntregaPage;
  let fixture: ComponentFixture<NuevaEntregaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
