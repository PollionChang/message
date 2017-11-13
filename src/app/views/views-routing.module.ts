import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ViewsComponent} from './views.component';
import {KpiIndexComponent} from '../pages/kpi-index/kpi-index.component';
import {RegistrationAppComponent} from '../pages/registration-app/registration-app.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: 'appList',
        component: KpiIndexComponent,
        data: {
          breadcrumb: '应用列表'
        }
      },
      {
        path: 'registrationApp',
        component: RegistrationAppComponent,
        data: {
          breadcrumb: '登记应用'
        },
      },
      {
        path: '',
        redirectTo: 'appList',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {
}
