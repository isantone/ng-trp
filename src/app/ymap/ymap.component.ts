import { Component, OnInit } from '@angular/core';
// import { init } from '@js/route';
// import { init } from '../../js/route';
// declare const ymaps;

@Component({
  selector: 'trp-ymap',
  templateUrl: './ymap.component.html',
  styleUrls: ['./ymap.component.scss']
})
export class YmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // ymaps.ready(init);
  }

}
