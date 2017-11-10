import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input() store: any[];
  @Output() hyRadioChange: EventEmitter<any> = new EventEmitter();
  @Input() defaultValue: string;
  radioValue: string = null;

  constructor() {
  }

  ngOnInit() {
    this.setDefaultValue(this.defaultValue);
  }

  radioSelect(event, value) {
    this.hyRadioChange.emit(value);
  }

  setDefaultValue(value) {
    if (value) {
      this.radioValue = value;
    }
  }
}
