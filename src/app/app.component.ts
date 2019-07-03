import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show:boolean = false;
  title = 'klavona';

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }
}
