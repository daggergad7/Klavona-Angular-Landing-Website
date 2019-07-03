import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';


declare var $: any;

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit, AfterViewInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $.getScript('assets/build/js/store.js', function(){});
}

}