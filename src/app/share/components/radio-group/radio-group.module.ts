import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzRadioModule} from 'ng-zorro-antd';
import {RadioGroupComponent} from './radio-group/radio-group.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, NzRadioModule, FormsModule
  ],
  exports: [RadioGroupComponent],
  declarations: [RadioGroupComponent]
})
export class RadioGroupModule {
}
