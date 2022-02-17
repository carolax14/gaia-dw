import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscoverComponent } from './detailscover.component';

describe('DetailscoverComponent', () => {
  let component: DetailscoverComponent;
  let fixture: ComponentFixture<DetailscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
