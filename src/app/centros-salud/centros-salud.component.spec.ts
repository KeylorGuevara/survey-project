import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosSaludComponent } from './centros-salud.component';

describe('CentrosSaludComponent', () => {
  let component: CentrosSaludComponent;
  let fixture: ComponentFixture<CentrosSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
