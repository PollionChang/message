import { GridPanelComponent } from './../../../share/components/grid-panel/grid-panel/grid-panel.component';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { ApplConfigService } from './../appl-config.service';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from './../../../share/components/hy-toaster/toaster.service';
import { GridPanelService } from './../../../share/components/grid-panel/grid-panel/grid-panel.service';


@Component({
  selector: 'app-appl-config-view',
  templateUrl: './appl-config-view.component.html',
  styleUrls: ['./appl-config-view.component.scss']
})
export class ApplConfigViewComponent implements OnInit {

  constructor(
    private modalService:  NzModalService,
    private toasterService: ToasterService,
    private gridService: GridPanelService
  ) { }

  ngOnInit() {
  }

}
