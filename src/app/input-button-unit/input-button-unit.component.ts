import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

title: string='';

  @Output() submit: EventEmitter<string> = new EventEmitter(); 
  submitValue(newTitle: string){
    this.submit.emit(newTitle);
  }
  constructor() { }

  ngOnInit() {
  }

}
