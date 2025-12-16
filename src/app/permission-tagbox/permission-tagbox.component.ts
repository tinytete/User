import { Component } from '@angular/core';
import { UserPermissionService, PermissionNode } from '../Userservice'; 

@Component({
  selector: 'app-permission-tagbox',
  templateUrl: './permission-tagbox.component.html',
  styleUrls: ['./permission-tagbox.component.scss'],
  providers: [UserPermissionService]
})
export class PermissionTagboxComponent {
  
  groupPermissions: any[] = []; 

  constructor(private service: UserPermissionService) {
    const rawData = this.service.getPermissions();
    this.groupPermissions = rawData.map(node => ({
      key : node.text,
      items : node.items
    }));
  }

  flattenData(nodes: PermissionNode[], category: string = ''): any[] {
    let result: any[] = [];
    
    for (const node of nodes) {
      if (node.items && node.items.length > 0) {
        result = result.concat(this.flattenData(node.items, node.text));
      } else {
        result.push({
          id: node.id,
          text: node.text,
          category: category 
        });
      }
    }
    return result;
  }
}