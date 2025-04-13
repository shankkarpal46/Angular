import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { AdditionComponent } from "../addition/addition.component";
import { Student } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, AdditionComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentData:string = "Data from parent component."

  recieveMessage(data:string){
    alert(data)
  }

  receiveStudentDetails(data:Student){
    alert(data.id+" "+data.name)
  }
}
