import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {ToasterService} from '../share/components/hy-toaster/toaster.service';
import {BreadcrumbsService} from '../share/components/breadcrumbs/breadcrumbs.service';


@Component({
  selector: 'app-ngx-pages',
  templateUrl: './view.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  private toasterService: ToasterService;

  constructor(public _toast: ToasterService, public _bread: BreadcrumbsService) {
    this.toasterService = _toast;
    console.log(_bread);
  }

  ngOnInit() {
    console.log('views初始化');
  }
}

