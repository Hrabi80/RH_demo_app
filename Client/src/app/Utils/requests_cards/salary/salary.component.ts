import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  get statIconName(): string {
    return this._statIconName;
  }
  set statIconName(statIconName: string) {
    this._statIconName =
      statIconName === undefined ? "far fa-chart-bar" : statIconName;
  }
  private _statIconName = "far fa-chart-bar";

}
