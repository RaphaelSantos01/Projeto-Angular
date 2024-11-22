import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PwaPage } from './pwa.page';

describe('PwaPage', () => {
  let component: PwaPage;
  let fixture: ComponentFixture<PwaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
