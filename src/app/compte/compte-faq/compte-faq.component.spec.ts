import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteFaqComponent } from './compte-faq.component';

describe('CompteFaqComponent', () => {
  let component: CompteFaqComponent;
  let fixture: ComponentFixture<CompteFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
