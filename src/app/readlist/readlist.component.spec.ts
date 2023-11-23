import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadlistComponent } from './readlist.component';

describe('ReadlistComponent', () => {
  let component: ReadlistComponent;
  let fixture: ComponentFixture<ReadlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadlistComponent]
    });
    fixture = TestBed.createComponent(ReadlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
