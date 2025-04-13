import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface Student{
  id: number
  name : string
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() eventemitter = new EventEmitter<string>()

  @Output() student = new EventEmitter<Student>()

  @Input() receiveData:string = ""

  sendMessage(){
    this.eventemitter.emit("Data from child.")
  }

  sendStudentData(){
    this.student.emit({id:101,name:"Shankar"})
  }
}
