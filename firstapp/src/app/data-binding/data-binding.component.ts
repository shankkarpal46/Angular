import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstname:String = "Shankar"
  lastname:String = "Pal"
  age:number = 24

  showAlert() {
    alert("Event Binding")
  }
}
