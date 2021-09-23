import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadSaludComponent } from './entidad-salud.component';

describe('EntidadSaludComponent', () => {
  let component: EntidadSaludComponent;
  let fixture: ComponentFixture<EntidadSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
