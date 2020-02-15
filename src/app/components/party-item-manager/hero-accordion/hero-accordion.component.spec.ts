import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAccordionComponent } from './hero-accordion.component';

describe('HeroAccordionComponent', () => {
  let component: HeroAccordionComponent;
  let fixture: ComponentFixture<HeroAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
