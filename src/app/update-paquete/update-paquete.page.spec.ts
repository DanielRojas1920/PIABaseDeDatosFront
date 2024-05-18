import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePaquetePage } from './update-paquete.page';

describe('UpdatePaquetePage', () => {
  let component: UpdatePaquetePage;
  let fixture: ComponentFixture<UpdatePaquetePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
