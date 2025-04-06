import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NotavailablePipe } from '../notavailable.pipe';

@Component({
  selector: 'app-pipes-examples',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,NotavailablePipe,SlicePipe],
  templateUrl: './pipes-examples.component.html',
  styleUrl: './pipes-examples.component.css'
})
export class PipesExamplesComponent {
  name:string="shankar"
  currentDate = new Date()
}
