import { Component, OnInit, Input } from '@angular/core';
import {NzModalSubject } from 'ng-zorro-antd';

@Component({
  selector: 'app-push-notify-preview',
  templateUrl: './push-notify-preview.component.html',
  styleUrls: ['./push-notify-preview.component.scss']
})
export class PushNotifyPreviewComponent implements OnInit {

  _info: string;
  count: number; // 预计人数
  testCID;  // 预览CID

  @Input()
  set info(value: string) {
    this._info = value;
  }

  constructor(
    private subject: NzModalSubject
  ) { }

  // 关闭
  closeModal() {
    this.subject.destroy();
  }

  ngOnInit() {
  }

}
