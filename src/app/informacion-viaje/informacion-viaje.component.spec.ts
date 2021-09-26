import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionViajeComponent } from './informacion-viaje.component';

describe('InformacionViajeComponent', () => {
  let component: InformacionViajeComponent;
  let fixture: ComponentFixture<InformacionViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
