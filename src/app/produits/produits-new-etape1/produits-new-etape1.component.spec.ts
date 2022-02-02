import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsNewEtape1Component } from './produits-new-etape1.component';

describe('ProduitsNewEtape1Component', () => {
  let component: ProduitsNewEtape1Component;
  let fixture: ComponentFixture<ProduitsNewEtape1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsNewEtape1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsNewEtape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
