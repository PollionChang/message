import {PushNotifyPreviewComponent} from '../push-notify-preview/push-notify-preview.component';
import {PushNotifyService} from '../push-notify.service';
import {Component, OnInit, Directive, Renderer2, OnDestroy} from '@angular/core';
import {NzModalService, NzModalSubject} from 'ng-zorro-antd';
import {deepExtend} from '../../../../data/COMMON';

@Component({
  selector: 'app-push-notify-view',
  templateUrl: './push-notify-view.component.html',
  styleUrls: ['./push-notify-view.component.scss']
})
export class PushNotifyViewComponent implements OnInit, OnDestroy {

  showStyleGroup; // 展示样式
  targetUserGroup;  // 推送对象
  actionGroup;  // 后续动作
  pushStyleGroup; // 推送方式

  // 消息
  msgInfo: {
    showStyle,
    describe,
    content
  };

  // 目标客户选择
  targetCustom: {
    targetUser,
    uploadFileName?,
    thenAction,
    linkHref?,
    appName?,
    popTitle?,
    popContent?,
    downUrl?
  };

  // 推送设置
  pushConfig: {
    pushStyle,
    pushDate?,
    pushTime?
  };


  showStyle = 'hurui';
  targetUser = 'all';
  thenAction = 'download';
  byCID = 'byCID';
  pushStyle = 'now'; // timing

  uploadFileName = '';

  preModal: NzModalSubject;

  // 选中文件 后缀名校验
  selectFile(uploadDom, tipDom) {
    const fileName = uploadDom.value;
    if (!fileName) {
      this.targetCustom.uploadFileName = '请选择文件';
      return;
    }
    if (!fileName.endsWith('.txt')) {
      this.targetCustom.uploadFileName = '文件格式错误，请重新上传';
      this.render.addClass(tipDom, 'error');
    } else {
      this.render.removeClass(tipDom, 'error');
      this.targetCustom.uploadFileName = fileName;
    }
  }


  // 预览
  preview() {
    const other = this;

    const preInfo = deepExtend({}, this.msgInfo, this.targetCustom, this.pushConfig);
    // @TODO 输入项校验

    this.preModal = this.modalService.open({
      title: '推送通知预览',
      content: PushNotifyPreviewComponent,
      /* onCancel() {
      }, */
      width: 720,
      maskClosable: false,
      footer: false,
      wrapClassName: 'previewWrap',
      componentParams: {
        'info': preInfo
      }
    });
  }


  constructor(private service: PushNotifyService,
              private modalService: NzModalService,
              private render: Renderer2) {
  }

  ngOnInit() {
    this.showStyleGroup = this.service.getStyleGroup();
    this.targetUserGroup = this.service.getTargetUserGroup();
    this.actionGroup = this.service.getActionGroup();
    this.pushStyleGroup = this.service.getPushStyleGroup();

    this.msgInfo = {
      showStyle: this.showStyleGroup[0].value,
      describe: '',
      content: ''
    };
    this.targetCustom = {
      targetUser: this.targetUserGroup[0].value,
      thenAction: this.actionGroup[0].value
    };
    this.pushConfig = {
      pushStyle: this.pushStyleGroup[0].value
    };
  }


  ngOnDestroy() {
    // 关闭Modal
    if (this.preModal) {
      this.preModal.destroy();
    }
  }

}

