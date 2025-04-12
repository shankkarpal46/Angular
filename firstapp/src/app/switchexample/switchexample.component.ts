import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchexample',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './switchexample.component.html',
  styleUrl: './switchexample.component.css'
})
export class SwitchexampleComponent {
  requestStatus:string = "approved"

  changeStatus(newStatus:string){
    this.requestStatus=newStatus
  }
}
