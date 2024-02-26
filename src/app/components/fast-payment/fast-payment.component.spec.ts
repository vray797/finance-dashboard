import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastPaymentComponent } from './fast-payment.component';

describe('FastPaymentComponent', () => {
  let component: FastPaymentComponent;
  let fixture: ComponentFixture<FastPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
