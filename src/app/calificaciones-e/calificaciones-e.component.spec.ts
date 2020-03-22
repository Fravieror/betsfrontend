import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesEComponent } from './calificaciones-e.component';

describe('CalificacionesEComponent', () => {
  let component: CalificacionesEComponent;
  let fixture: ComponentFixture<CalificacionesEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
