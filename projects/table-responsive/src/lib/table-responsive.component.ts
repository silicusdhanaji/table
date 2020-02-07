import { Component, OnInit, Input } from '@angular/core';

@Component({ 
  selector: 'table-responsive',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.scss']
})
export class TableResponsiveComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
