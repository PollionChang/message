import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-registration-app',
  templateUrl: './registration-app.component.html',
  styleUrls: ['./registration-app.component.scss']
})
export class RegistrationAppComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  appname: 'string';
  appsign: 'string';
  appType: 'string';
  typeOptions = [
    {value: '1', label: '工具'},
    {value: '2', label: '设备'}
  ];

  constructor() {

  }


  uploadimg(e: MouseEvent) {
    /* document.getElementById('imgupload').click();*/
  }

  imgupload(e: MouseEvent) {
    /* console.log(document.getElementById('imgupload').files);
     console.log(e.target.files[0]);*/
  }

  ngOnInit() {
  }

}
