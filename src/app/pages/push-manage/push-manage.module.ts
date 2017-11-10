import { HyToasterModule } from './../../share/components/hy-toaster/hy-toaster.module';
import { ShareModule } from './../../share/share.module';
import { PushManageService } from './push-manage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PushManageViewComponent } from './push-manage-view/push-manage-view.component';
import { Routes , RouterModule} from '@angular/router';
import { NzSwitchModule, NzDatePickerModule, NzTimePickerModule, NzTabsModule, NzSelectModule , NzModalModule} from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    component: PushManageViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes), NzSwitchModule, NzDatePickerModule, NzTimePickerModule
    , NzTabsModule, NzSelectModule, NzModalModule, ShareModule
  ],
  declarations: [
    PushManageViewComponent
  ],
  providers: [PushManageService]
})
export class PushManageModule { }
