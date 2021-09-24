import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoEncuestaTemplateComponent } from './cuerpo-encuesta-template.component';

describe('CuerpoEncuestaTemplateComponent', () => {
  let component: CuerpoEncuestaTemplateComponent;
  let fixture: ComponentFixture<CuerpoEncuestaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoEncuestaTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoEncuestaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
