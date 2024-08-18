import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedaiItemComponent } from './medai-item.component';

describe('MedaiItemComponent', () => {
  let component: MedaiItemComponent;
  let fixture: ComponentFixture<MedaiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedaiItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedaiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
