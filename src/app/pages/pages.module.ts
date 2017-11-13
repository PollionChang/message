import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages/pages.component';
import {Routes, RouterModule} from '@angular/router';
import {ShareModule} from '../share/share.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    data: {
      breadcrumb: 'pages'
    },
    children: [
      {
        path: 'pushNotify',
        data: {
          breadcrumb: '推送通知'
        },
        loadChildren: './push-notify/push-notify.module#PushNotifyModule'
      },
      {
        path: 'pushManage',
        data: {
          breadcrumb: '推送管理'
        },
        loadChildren: './push-manage/push-manage.module#PushManageModule',
      },
      {
        path: 'applConfig',
        data: {
          breadcrumb: 'TV应用配置'
        },
        loadChildren: './appl-config/appl-config.module#ApplConfigModule',
      },
      {
        path: 'passThrough',
        data: {
          breadcrumb: '透传消息'
        },
        loadChildren: './pass-through/pass-through.module#PassThroughModule',
      },
      {
        path: '',
        redirectTo: 'pushNotify',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), ShareModule, FormsModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule {
}
