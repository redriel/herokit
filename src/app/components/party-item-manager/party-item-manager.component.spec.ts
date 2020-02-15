import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyItemManagerComponent } from './party-item-manager.component';

describe('PartyItemManagerComponent', () => {
  let component: PartyItemManagerComponent;
  let fixture: ComponentFixture<PartyItemManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyItemManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyItemManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
