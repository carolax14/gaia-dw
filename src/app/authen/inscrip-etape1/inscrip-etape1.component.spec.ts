import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripEtape1Component } from './inscrip-etape1.component';

describe('InscripEtape1Component', () => {
  let component: InscripEtape1Component;
  let fixture: ComponentFixture<InscripEtape1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripEtape1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripEtape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
