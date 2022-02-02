import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteContactComponent } from './compte-contact.component';

describe('CompteContactComponent', () => {
  let component: CompteContactComponent;
  let fixture: ComponentFixture<CompteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
