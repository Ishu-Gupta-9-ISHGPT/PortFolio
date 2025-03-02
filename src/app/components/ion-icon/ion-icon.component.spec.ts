import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonIconComponent } from './ion-icon.component';

describe('IonIconComponent', () => {
  let component: IonIconComponent;
  let fixture: ComponentFixture<IonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
