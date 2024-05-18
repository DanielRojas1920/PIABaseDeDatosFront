import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateDestinatarioPage } from './update-destinatario.page';

describe('UpdateDestinatarioPage', () => {
  let component: UpdateDestinatarioPage;
  let fixture: ComponentFixture<UpdateDestinatarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDestinatarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
