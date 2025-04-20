import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-directives-example',
  imports: [NgIf,NgFor],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css',
  providers:[StudentService]
})
export class DirectivesExampleComponent {
  studentService:StudentService=inject(StudentService)
  loggedIn:boolean = false
  status:boolean = false
  subjects:string[] = ["HTML","CSS","JS","SQL"]
  name:string[]= ["Shankar","Arti","Mugeetha","Aishwariya"]

  students:any[]=[]

  constructor(){
    this.students = this.studentService.students
  }
  // students=[{firstname:"Shankar",lastname:"Pal",marks:90},{firstname:"Arti",lastname:"Lachure",marks:100},{firstname:"Mujeetha",lastname:"N",marks:92}]
}

