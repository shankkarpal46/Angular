import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstname:String = "Shankar"
  lastname:String = "Pal"
  age:number = 24
  color:string="plum"
  border:string="2px solid black"
  background:string="red"

  showAlert() {
    alert("Event Binding")
  }
}
