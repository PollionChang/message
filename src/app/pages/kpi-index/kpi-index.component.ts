import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../share/service/http.service';

@Component({
  selector: 'app-kpi-index',
  templateUrl: './kpi-index.component.html',
  styleUrls: ['./kpi-index.component.scss']
})
export class KpiIndexComponent implements OnInit {

  data = [
    {
      picurl: '../../../assets/img/pages/tubiao.png',
      key: '1',
      name: '测试应用',
      newuser: 10,
      alluser: 20,
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      picurl: '../../../assets/img/pages/tubiao.png',
      key: '2',
      name: 'demo测试',
      newuser: 10,
      alluser: 20,
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      picurl: '../../../assets/img/pages/tubiao.png',
      key: '3',
      name: '阿里巴巴',
      newuser: 10,
      alluser: 20,
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  ngOnInit() {

  }

  addApplication() {
    this.router.navigate(['/views/registrationApp']).then();
  }

}
