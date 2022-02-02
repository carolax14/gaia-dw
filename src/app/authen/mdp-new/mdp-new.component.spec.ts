import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpNewComponent } from './mdp-new.component';

describe('MdpNewComponent', () => {
  let component: MdpNewComponent;
  let fixture: ComponentFixture<MdpNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdpNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
