import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  imports: [NgIf,NgFor],
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css'
})
export class DirectivesExampleComponent {
  loggedIn:boolean = false
  subjects:string[] = ["HTML","CSS","JS","SQL"]
  name:string[]= ["Shankar","Arti","Mugeetha","Aishwariya"]
  students=[{firstname:"Shankar",lastname:"Pal",marks:90},{firstname:"Arti",lastname:"Lachure",marks:100},{firstname:"Mujeetha",lastname:"N",marks:92}]
}

