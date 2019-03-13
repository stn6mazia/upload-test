import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialBoxComponent } from './filial-box.component';

describe('FilialBoxComponent', () => {
  let component: FilialBoxComponent;
  let fixture: ComponentFixture<FilialBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
