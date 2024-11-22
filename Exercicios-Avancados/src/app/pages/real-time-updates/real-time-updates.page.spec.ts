import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealTimeUpdatesPage } from './real-time-updates.page';

describe('RealTimeUpdatesPage', () => {
  let component: RealTimeUpdatesPage;
  let fixture: ComponentFixture<RealTimeUpdatesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeUpdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
