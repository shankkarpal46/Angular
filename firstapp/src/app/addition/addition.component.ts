import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addition',
  imports: [FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
    firstNum:number=10
    secondNum:number=11
    sum(){
      return this.firstNum+this.secondNum
    } 
}
