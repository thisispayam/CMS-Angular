import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [

    ],
    imports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, BrowserAnimationsModule
    ],
    exports: [ 
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, BrowserAnimationsModule
    ]
  })
  export class MaterialModule { }