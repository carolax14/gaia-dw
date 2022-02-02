import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptePrefComponent } from './compte-pref.component';

describe('ComptePrefComponent', () => {
  let component: ComptePrefComponent;
  let fixture: ComponentFixture<ComptePrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptePrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptePrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
