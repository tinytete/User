import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionTreeviewComponent } from './permission-treeview.component';

describe('PermissionTreelistComponent', () => {
  let component: PermissionTreeviewComponent;
  let fixture: ComponentFixture<PermissionTreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionTreeviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
