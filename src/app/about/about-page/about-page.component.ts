import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';


declare var $: any;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit, AfterViewInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $.getScript('assets/build/js/about.js', function(){});
}

}
