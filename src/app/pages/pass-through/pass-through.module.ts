import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PassThroughComponent} from './pass-through/pass-through.component';
import {ShareModule} from '../../share/share.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PassThroughComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), ShareModule, FormsModule
  ],
  declarations: [PassThroughComponent]
})
export class PassThroughModule {
}
