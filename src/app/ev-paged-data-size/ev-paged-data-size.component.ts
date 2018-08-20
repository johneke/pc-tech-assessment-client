import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-paged-data-size',
  templateUrl: './ev-paged-data-size.component.html',
  styleUrls: ['./ev-paged-data-size.component.css']
})
export class EvPagedDataSizeComponent implements OnInit {

  constructor() { }

  @Input() size: number;

  @Output() limitChange: EventEmitter<number> = new EventEmitter();

  limitChanged(event) {
  	this.limitChange.emit(event.target.value);
  }

  ngOnInit() {
  }

}
