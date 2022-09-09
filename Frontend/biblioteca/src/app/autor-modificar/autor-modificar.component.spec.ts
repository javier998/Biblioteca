import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorModificarComponent } from './autor-modificar.component';

describe('AutorModificarComponent', () => {
  let component: AutorModificarComponent;
  let fixture: ComponentFixture<AutorModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
