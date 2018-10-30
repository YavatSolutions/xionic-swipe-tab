import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XionicSwipeTabComponent } from './xionic-swipe-tab.component';

describe('XionicSwipeTabComponent', () => {
  let component: XionicSwipeTabComponent;
  let fixture: ComponentFixture<XionicSwipeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XionicSwipeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XionicSwipeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
