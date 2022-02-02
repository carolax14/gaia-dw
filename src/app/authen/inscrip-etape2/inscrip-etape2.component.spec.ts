import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripEtape2Component } from './inscrip-etape2.component';

describe('InscripEtape2Component', () => {
  let component: InscripEtape2Component;
  let fixture: ComponentFixture<InscripEtape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripEtape2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
