import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-side',
  templateUrl: './emp-side.component.html',
  styleUrls: ['./emp-side.component.css']
})
export class EMPSideComponent implements OnInit {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

}
