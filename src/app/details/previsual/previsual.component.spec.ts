import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisualComponent } from './previsual.component';

describe('PrevisualComponent', () => {
  let component: PrevisualComponent;
  let fixture: ComponentFixture<PrevisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
