import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedComponentsPage } from './shared-components.page';

describe('SharedComponentsPage', () => {
  let component: SharedComponentsPage;
  let fixture: ComponentFixture<SharedComponentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
