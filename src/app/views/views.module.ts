import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewsComponent} from './views.component';
import {ViewsRoutingModule} from './views-routing.module';
import {KpiIndexComponent} from '../pages/kpi-index/kpi-index.component';
import {ShareModule} from '../share/share.module';
import {RegistrationAppComponent} from '../pages/registration-app/registration-app.component';
import {FormsModule} from '@angular/forms';

console.log('ViewsModule Start');

@NgModule({
  imports: [FormsModule,
    ShareModule, CommonModule, ViewsRoutingModule], exports: [ShareModule],
  declarations: [ViewsComponent, KpiIndexComponent, RegistrationAppComponent]
})

export class ViewsModule {
}
