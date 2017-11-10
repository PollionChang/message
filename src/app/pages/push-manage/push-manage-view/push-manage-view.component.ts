import { ToasterService } from './../../../share/components/hy-toaster/toaster.service';
import { GridPanelService } from './../../../share/components/grid-panel/grid-panel/grid-panel.service';
import { NzModalService } from 'ng-zorro-antd';
import { Column, CONFIG } from './../../../../data/CONFIG';
import { PushManageService } from './../push-manage.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-push-manage-view',
  templateUrl: './push-manage-view.component.html',
  styleUrls: ['./push-manage-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PushManageViewComponent implements OnInit {

  // 消息通道开关
  switch = false;

  targetUserGroup;  // 目标用户
  actionGroup;    // 后续动作
  pushStyleGroup; // 推送方式

  tabs = [
    {value: 'notify' , name: '推送通知记录'},
    {value: 'message', name: '透传消息记录'}
  ];

  preSearchData= {};
  searchData: {
    title?,
    startDate?,
    endDate?,
    targetUser?,
    thenAction?,
    pushStyle?,
  } = {};


  // 推送通知 grid 参数
  notifyColumns: Column[];
  notifyOptions = {
    method: 'GET',
    url: CONFIG[CONFIG.serviceType].getNotifyList,
    params: this.searchData
  };
  notifyActions;


  // 透传消息 grid 参数
  messageColumns: Column[];
  messageOptions = {
    method: 'GET',
    url: CONFIG[CONFIG.serviceType].getNotifyList,
    params: this.searchData
  };
  messageActions;


  constructor(
    private service: PushManageService,
    private modalService: NzModalService,
    private gridService: GridPanelService,
    private toasterService: ToasterService
  ) { }

  // tab 切换
  switchTab(tabFlag) {
    [this.searchData, this.preSearchData] = [this.preSearchData, this.searchData];
  }

  search() {
    console.log(this.searchData);
  }

  reset() {
    this.searchData = {};
  }

  // 确定 撤回
  confirmRevoke(item) {
    const other = this;
    this.modalService.confirm({
      title: '推送消息撤回',
      content: `你确定要停止标题'${item.title}'的任务么<br/>dfdsf`,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        other.service.revokeNotify().subscribe( response => {
          if (response['errcode'] === 0) {
            other.toasterService.pop('success', '标题', '消息撤回成功！');
          }else {
            other.toasterService.pop('error', '标题', '消息撤回出错！');
          }
        });
      }
    });
  }

  // 删除 confirm
  confirmDelete(item) {

  }


  ngOnInit() {
    this.targetUserGroup = this.service.getTargetUserGroup();
    this.actionGroup = this.service.getActionGroup();
    this.pushStyleGroup = this.service.getPushStyleGroup();

    this.notifyColumns = this.service.getNotifyColumns();
    this.notifyActions = this.service.getNotifyActions();

    this.messageColumns = this.service.getMessageColumns();

    this.gridService.rowEvent.subscribe( event => {
      const row = event.rowData;
      if (event.eventName === 'revoke') { // 撤回
        this.confirmRevoke(row);
      }else if (event.eventName === 'delete' ) {
        this.confirmDelete(row);
      }
    });
    // this.gridService.reFreshEvent.emit()

  }

}
