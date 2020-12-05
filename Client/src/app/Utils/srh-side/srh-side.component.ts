import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srh-side',
  templateUrl: './srh-side.component.html',
  styleUrls: ['./srh-side.component.css']
})
export class SRHSideComponent implements OnInit {
  $:any;
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

}
