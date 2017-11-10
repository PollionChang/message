import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {GridPanelService} from './grid-panel.service';
import {deepExtend} from '../../../../../data/COMMON';
import {Column} from '../../../../../data/CONFIG';

@Component({
  selector: 'app-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss']
})
export class GridPanelComponent implements OnInit, OnDestroy {
  @Input() columns: Column[];
  @Input() options: any;
  @Input() actions: Array<any>;
  _current = 1;
  _pageSize = 30;
  _total = 1;
  _dataSet = [];
  _sortValue = null;
  _sortBy = '';

  sort(value, sortby?: string) {
    this.columns.forEach(col => {
      if (col.value === sortby) {
        col.order = value;
      } else {
        col.order = null;
      }
    });
    if (value === 'ascend') {
      this._sortValue = 'desc';
    } else {
      this._sortValue = 'asc';
    }
    this._sortBy = sortby;
    this.refreshData();
  }


  constructor(private gridService: GridPanelService) {
  }

  rowAction(eventName, rowData) {
    this.gridService.rowEvent.emit({eventName, rowData});
    // console.table(rowData);
  }

  refreshData(reset = false) {
    if (reset) {
      this.columns.forEach(col => {
        if (col.sort) {
          this._sortBy = col.value;
          return;
        }
      });
      this._sortValue = 'desc';
    }
    const params = deepExtend({
      queryPage: this._current,
      pageSize: this._pageSize,
      sortby: this._sortBy,
      order: this._sortValue,
    }, this.options.params);

    this.gridService.getData(this.options.method, this.options.url, params).subscribe((data: any) => {
      this._total = data.bizResult.total;
      this._dataSet = data.bizResult.list || [];
    });
  }

  ngOnInit() {
    this.refreshData(true);

  }

  ngOnDestroy() {

  }

  pageChangeClick(value) {
    this._current = value;
    this.refreshData();
  }

  // TODO：切换数据源初始化表格

}
