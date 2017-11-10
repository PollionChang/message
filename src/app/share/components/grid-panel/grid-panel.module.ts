import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridPanelComponent} from './grid-panel/grid-panel.component';
import {NzTableModule, NzPaginationModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {GridPanelService} from './grid-panel/grid-panel.service';

@NgModule({
  imports: [
    CommonModule, NzTableModule, ReactiveFormsModule, NzPaginationModule
  ],
  exports: [
    GridPanelComponent
  ],
  providers: [
    GridPanelService
  ],
  declarations: [GridPanelComponent]
})
export class GridPanelModule {
}
