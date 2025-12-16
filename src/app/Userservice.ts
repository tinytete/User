import { Injectable } from '@angular/core';

export interface PermissionNode {
  id: string;
  text: string;
  expanded?: boolean;
  items?: PermissionNode[];
}

export class UserPermissionService {

  constructor() { }

  getPermissions(): PermissionNode[] {
    return [{
      id: '0',
        text: 'All Permissions',
        expanded: true, 
        items: [
        {
          id: '1',
          text: 'Transaction Management (Tx)',
          expanded: false, 
          items: [
            { id: '1_1', text: 'View Tx' },
            { id: '1_2', text: 'Create Tx' },
            { id: '1_3', text: 'Update Tx' },
            { id: '1_4', text: 'Delete Tx' },
            { id: '1_5', text: 'View Log' }
          ]
        },
        {
          id: '2',
          text: 'User Management',
          expanded: false,
          items: [
            { id: '2_1', text: 'View User' },
            { id: '2_2', text: 'Create User' },
            { id: '2_3', text: 'Update User' },
            { id: '2_4', text: 'Delete User' }
          ]
        },
        {
          id: '3',
          text: 'Transaction Management (Tx)',
          expanded: false,
          items: [
            { id: '3_1', text: 'View Tx' },
            { id: '3_2', text: 'Create Tx' },
            { id: '3_3', text: 'Update Tx' },
            { id: '3_4', text: 'Delete Tx' },
            { id: '3_5', text: 'View Log' }
          ]
        },
        {
          id: '4',
          text: 'User Management',
          expanded: false,
          items: [
            { id: '4_1', text: 'View User' },
            { id: '4_2', text: 'Create User' },
            { id: '4_3', text: 'Update User' },
            { id: '4_4', text: 'Delete User' }
          ]
        },
        {
          id: '5',
          text: 'Transaction Management (Tx)',
          expanded: false,
          items: [
            { id: '5_1', text: 'View Tx' },
            { id: '5_2', text: 'Create Tx' },
            { id: '5_3', text: 'Update Tx' },
            { id: '5_4', text: 'Delete Tx' },
            { id: '5_5', text: 'View Log' }
          ]
        },
        {
          id: '6',
          text: 'User Management',
          expanded: false,
          items: [
            { id: '6_1', text: 'View User' },
            { id: '6_2', text: 'Create User' },
            { id: '6_3', text: 'Update User' },
            { id: '6_4', text: 'Delete User' }
          ]
        },
        {
          id: '7',
          text: 'Transaction Management (Tx)',
          expanded: false, 
          items: [
            { id: '7_1', text: 'View Tx' },
            { id: '7_2', text: 'Create Tx' },
            { id: '7_3', text: 'Update Tx' },
            { id: '7_4', text: 'Delete Tx' },
            { id: '7_5', text: 'View Log' }
          ]
        },
        {
          id: '8',
          text: 'User Management',
          expanded: false,
          items: [
            { id: '8_1', text: 'View User' },
            { id: '8_2', text: 'Create User' },
            { id: '8_3', text: 'Update User' },
            { id: '8_4', text: 'Delete User' }
          ]
        },
        {
          id: '9',
          text: 'Transaction Management (Tx)',
          expanded: false,
          items: [
            { id: '9_1', text: 'View Tx' },
            { id: '9_2', text: 'Create Tx' },
            { id: '9_3', text: 'Update Tx' },
            { id: '9_4', text: 'Delete Tx' },
            { id: '9_5', text: 'View Log' }
          ]
        },
        {
          id: '10',
          text: 'User Management',
          expanded: false,
          items: [
            { id: '10_1', text: 'View User' },
            { id: '10_2', text: 'Create User' },
            { id: '10_3', text: 'Update User' },
            { id: '10_4', text: 'Delete User' }
          ]
        },
        {
          id: '11',
          text: 'Transaction Management (Tx)',
          expanded: false, 
          items: [
            { id: '11_1', text: 'View Tx' },
            { id: '11_2', text: 'Create Tx' },
            { id: '11_3', text: 'Update Tx' },
            { id: '11_4', text: 'Delete Tx' },
            { id: '11_5', text: 'View Log' }
          ]
        },
        {
          id: '12',
          text: 'User Management',
          expanded: false,
          items: [
            { id: '12_1', text: 'View User' },
            { id: '12_2', text: 'Create User' },
            { id: '12_3', text: 'Update User' },
            { id: '12_4', text: 'Delete User' }
          ]
        },
      ]
    }];
  }
}