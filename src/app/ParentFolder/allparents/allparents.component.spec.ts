import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllparentsComponent } from './allparents.component';

describe('AllparentsComponent', () => {
  let component: AllparentsComponent;
  let fixture: ComponentFixture<AllparentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllparentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllparentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
