import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipes-examples.component.html',
  styleUrl: './pipes-examples.component.css'
})
export class PipesExamplesComponent {
  name:string="shankar"
  currentDate = new Date()
}
