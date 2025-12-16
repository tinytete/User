import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionTagboxComponent } from './permission-tagbox.component';

describe('PermissionTagboxComponent', () => {
  let component: PermissionTagboxComponent;
  let fixture: ComponentFixture<PermissionTagboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionTagboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionTagboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
