import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PermissionTagboxComponent } from './permission-tagbox/permission-tagbox.component';
import { PermissionTreeviewComponent } from './permission-treeview/permission-treeview.component';
import { DxTreeViewModule, DxTextBoxModule, DxTagBoxModule, DxButtonModule, DxAccordionModule} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    PermissionTagboxComponent,
    PermissionTreeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTreeViewModule,
    DxTextBoxModule,
    DxTagBoxModule,
    DxAccordionModule,
    DxButtonModule,

],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
