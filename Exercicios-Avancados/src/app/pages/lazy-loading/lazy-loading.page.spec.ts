import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadingPage } from './lazy-loading.page';

describe('LazyLoadingPage', () => {
  let component: LazyLoadingPage;
  let fixture: ComponentFixture<LazyLoadingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
