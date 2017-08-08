import {Component, OnInit} from '@angular/core';

import {AlertService} from 'ng-simple-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private alert: AlertService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.alert.success('aaaaaaaaaaaaaaa');
      this.alert.success('bbbbbbbbbbbbbbb');
      this.alert.success('ccccccccccccccc');
    }, 3000)
  }
}


