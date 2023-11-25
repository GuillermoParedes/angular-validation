import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface ITableRow {
  label: string,
  property: string,
  type?: string,
  hidden?: boolean
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  
  @Input() schema: Array<ITableRow> = [];
  @Input() data:any= [];
  @Input() limit:number = 5;
  @Output() handleEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('ngOnInit', this)
  }

  handleClickAdd(event: any) {
    this.handleEvent.emit('new')
  }
}
