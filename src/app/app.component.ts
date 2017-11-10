import {Component, AfterViewInit} from '@angular/core';
import {LoadingMaskService} from './share/service/loading-mask.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-eye',
  template: `    <app-breadcrumb [allowBootstrap]="true"></app-breadcrumb>
    <app-toaster-container></app-toaster-container>
    <router-outlet (activate)="onActivate($event)"></router-outlet>`,
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private mask: LoadingMaskService, public router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngAfterViewInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      console.log(this.activatedRoute.root.children, '路由模块访问完成');
    });
    this.mask.hide();
  }

  onActivate(componentRef) {
    console.log(componentRef, '激活路由');
  }
}
