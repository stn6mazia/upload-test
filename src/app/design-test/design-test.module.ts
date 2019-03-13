import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignTestComponent } from './design-test.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FilialBoxComponent, ProductBoxComponent, UploadToolsComponent, BoxComponent } from './components';

@NgModule({
  declarations: [
    DesignTestComponent,
    FilialBoxComponent,
    ProductBoxComponent,
    UploadToolsComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  exports: [
    DesignTestComponent
  ]
})
export class DesignTestModule { }
