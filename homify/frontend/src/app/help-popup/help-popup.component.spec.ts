import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPopupComponent } from './help-popup.component';

describe('HelpPopupComponent', () => {
  let component: HelpPopupComponent;
  let fixture: ComponentFixture<HelpPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
