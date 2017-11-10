import { Injectable } from '@angular/core';

@Injectable()
export class PushNotifyService {

constructor() { }

    // 展示样式
    public getStyleGroup() {
        return [
            {value: 'hurui', name: '默认虎瑞风格' } ,
            {value: 'android', name: '安卓原生' }
        ];
    }

    // 推送对象
    public getTargetUserGroup() {
        return [
            {value: 'all', name: '全部用户' },
            {value: 'special', name: '特定用户'}
        ];
    }

    public getActionGroup() {
        return [
            {value: 'run', name: '启动应用' },
            {value: 'open', name: '打开链接'},
            {value: 'download', name: '下载应用'}
        ];
    }

    public getPushStyleGroup() {
        return [
            {value: 'now', name: '即时' },
            {value: 'timing', name: '定时'}
        ];
    }

}

