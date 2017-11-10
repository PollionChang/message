import { ShareModule } from './../../share/share.module';
import { PushNotifyService } from './push-notify.service';
import { NzRadioModule, NzSelectModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzModalModule} from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { PushNotifyViewComponent } from './push-notify-view/push-notify-view.component';
import { PushNotifyPreviewComponent } from './push-notify-preview/push-notify-preview.component';
import { PushNotifyPipe } from './push-notify.pipe';

const routes: Routes = [
  {
    path: '',
    component: PushNotifyViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule, FormsModule,  RouterModule.forChild(routes), NzRadioModule,
    NzSelectModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzModalModule,  ShareModule
  ],
  declarations: [
    PushNotifyViewComponent,
    PushNotifyPreviewComponent,
    PushNotifyPipe
],
  providers: [PushNotifyService],
  entryComponents: [PushNotifyPreviewComponent]
})
export class PushNotifyModule { }

