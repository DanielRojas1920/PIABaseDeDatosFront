import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoDestinatarioPage } from './nuevo-destinatario.page';

describe('NuevoDestinatarioPage', () => {
  let component: NuevoDestinatarioPage;
  let fixture: ComponentFixture<NuevoDestinatarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDestinatarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
