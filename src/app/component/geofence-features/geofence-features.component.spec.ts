import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceFeaturesComponent } from './geofence-features.component';

describe('GeofenceFeaturesComponent', () => {
  let component: GeofenceFeaturesComponent;
  let fixture: ComponentFixture<GeofenceFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofenceFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofenceFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
