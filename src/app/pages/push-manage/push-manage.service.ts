import { HttpService } from './../../share/service/http.service';
import { CONFIG } from './../../../data/CONFIG';
import { Injectable } from '@angular/core';

@Injectable()
export class PushManageService {

    constructor(
        private http: HttpService
    ) { }


    // 推送对象
    public getTargetUserGroup() {
        return [
            {value: 'all', name: '全部用户' },
            {value: 'special', name: '特定用户'}
        ];
    }

    // 后续动作
    public getActionGroup() {
        return [
            {value: 'run', name: '启动应用' },
            {value: 'open', name: '打开链接'},
            {value: 'download', name: '下载应用'}
        ];
    }

    // 推送状态
    public getPushStyleGroup() {
        return [
            {value: 'now', name: '即时' },
            {value: 'timing', name: '定时'}
        ];
    }


    // 获取推送 通知 column
    public getNotifyColumns() {
        return [
            {name: '通知标题', value: 'title', sort: false},
            {name: '推送时间', value: 'pushDate', sort: false, order: null},
            {name: '目标用户', value: 'targetUser', sort: false, order: null},
            {name: '后续动作', value: 'thenAction', sort: false, order: null},
            {name: '目标平台', value: 'showStyle', sort: false, order: null},
            {name: '通知状态', value: 'status', sort: false, order: null}
        ];
    }

    /* public getNotifyOptions(param) {
        return {
            method: 'GET',
            url: CONFIG[CONFIG.serviceType].getNotifyList,
            params: param
        };
    } */

    public getNotifyActions() {
        return [
            {eventName: 'detail', name: '详情' },
            {eventName: 'revoke', name: '撤回' , show: (row) =>  row.status === 0 },
            {eventName: 'delete', name: '删除' , show: (row) =>  row.status === 0 }
        ];
    }

    public getMessageColumns() {
        return [
            {name: '通知标题', value: 'title', sort: false},
            {name: '推送时间', value: 'pushDate', sort: false, order: null},
            {name: '目标用户', value: 'targetUser', sort: false, order: null},
            {name: '后续动作', value: 'thenAction', sort: false, order: null},
            {name: '目标平台', value: 'showStyle', sort: false, order: null}
        ];
    }

    // 删除通知
    public deleteNotify() {
        return this.http.get(CONFIG[CONFIG.serviceType].deleteNotify , {});
    }

    // 撤回通知
    public revokeNotify() {
        return this.http.get(CONFIG[CONFIG.serviceType].revokeNotify , {});
    }

}







