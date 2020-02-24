import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalListsComponent } from './medical-lists.component';

describe('MedicalListsComponent', () => {
  let component: MedicalListsComponent;
  let fixture: ComponentFixture<MedicalListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
