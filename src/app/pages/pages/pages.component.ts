import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  options = [];
  selectedOption;

  constructor() {
  }

  ngOnInit() {
    setTimeout(_ => {
      this.options = [
        {value: 'jack', label: 'Jack'},
        {value: 'lucy', label: 'Lucy'}];
      this.selectedOption = this.options[0];
    }, 100);
  }

}
