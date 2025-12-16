import { Component } from '@angular/core';
import { UserPermissionService, PermissionNode } from '../Userservice'; 
@Component({
  selector: 'app-permission-treeview',
  templateUrl: './permission-treeview.component.html',
  styleUrls: ['./permission-treeview.component.scss'],
  providers: [UserPermissionService]
})
export class PermissionTreeviewComponent {

  permissions: PermissionNode[];
  selectedItems: PermissionNode[] = [];

  constructor(private service: UserPermissionService) {
    this.permissions = this.service.getPermissions();
  }

}



