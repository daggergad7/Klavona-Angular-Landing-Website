import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourzeroPageComponent } from './fourzero-page.component';

describe('FourzeroPageComponent', () => {
  let component: FourzeroPageComponent;
  let fixture: ComponentFixture<FourzeroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourzeroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourzeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
