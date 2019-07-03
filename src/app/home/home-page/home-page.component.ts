import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';



declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit, AfterViewInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    // $.getScript('assets/build/js/home.js', function(){});
    
  }
  ngAfterViewInit(){
    $.getScript('assets/build/js/home.js', function(){});
}

}


