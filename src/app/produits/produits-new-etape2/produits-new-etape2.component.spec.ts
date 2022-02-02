import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsNewEtape2Component } from './produits-new-etape2.component';

describe('ProduitsNewEtape2Component', () => {
  let component: ProduitsNewEtape2Component;
  let fixture: ComponentFixture<ProduitsNewEtape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsNewEtape2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsNewEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
