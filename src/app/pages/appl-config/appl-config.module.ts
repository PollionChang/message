import {ShareModule} from '../../share/share.module';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ApplConfigService} from './appl-config.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplConfigViewComponent} from './appl-config-view/appl-config-view.component';


const routes: Routes = [
  {
    path: '',
    component: ApplConfigViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule, FormsModule, ShareModule, RouterModule.forChild(routes)
  ],
  declarations: [
    ApplConfigViewComponent
  ],
  providers: [
    ApplConfigService]
})
export class ApplConfigModule {
}
