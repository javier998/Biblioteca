import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorVerComponent } from './autor-ver.component';

describe('AutorVerComponent', () => {
  let component: AutorVerComponent;
  let fixture: ComponentFixture<AutorVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
