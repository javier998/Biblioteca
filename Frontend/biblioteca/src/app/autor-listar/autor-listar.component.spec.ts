import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorListarComponent } from './autor-listar.component';

describe('AutorListarComponent', () => {
  let component: AutorListarComponent;
  let fixture: ComponentFixture<AutorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
