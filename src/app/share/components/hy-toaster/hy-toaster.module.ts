import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToasterComponent} from './toaster/toaster.component';
import {ToasterContainerComponent} from './toaster/toaster-container.component';
import {ToasterService} from './toaster.service';


@NgModule({
  imports: [CommonModule],
  declarations: [
    ToasterComponent,
    ToasterContainerComponent
  ],
  providers: [ToasterService],
  exports: [
    ToasterContainerComponent,
    ToasterComponent
  ]
})
export class HyToasterModule {
}
